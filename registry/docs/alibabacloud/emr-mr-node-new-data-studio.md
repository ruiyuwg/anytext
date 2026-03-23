This tutorial explains how to develop and configure a MapReduce (MR) job for an E-MapReduce (EMR) Node, using a word-count example that reads a text file from Object Storage Service (OSS). By creating an MR Node, you can split large datasets into multiple parallel Map tasks to significantly improve data processing efficiency.

## Prerequisites

-   You have created an Alibaba Cloud E-MapReduce (EMR) Cluster and registered it with DataWorks. For more information, see [Data Studio: Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources).
    
-   (Optional, required for RAM users) Add the Resource Access Management (RAM) user responsible for task development to the Workspace and assign them the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions, so grant it with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you are using an Alibaba Cloud account, you can skip this step.
    
-   To follow the example in this topic, you must first create an OSS Bucket. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
    

## Limitations

-   This type of task can run only on a [Serverless Resource Group](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u) (recommended) or an Exclusive Scheduling Resource Group.
    
-   To manage Metadata in DataWorks for DataLake or custom clusters, you must first configure the EMR-HOOK on the cluster. For more information, see [Configure Hive EMR-HOOK](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access).
    
    **Note**
    
    If the EMR-HOOK is not configured on the cluster, DataWorks cannot display Metadata in real time, generate audit logs, display Data Lineage, or perform EMR-related data governance tasks.
    

## Prepare source data and a JAR package

## Prepare source data

Create a sample file named `input01.txt` with the following content.

```
hadoop emr hadoop dw
hive hadoop
dw emr
```

## **Upload source data**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). In the left-side navigation pane, click **Bucket List**.
    
2.  Click the name of the target Bucket to go to the **File Management** page.
    
    This tutorial uses `onaliyun-bucket-2` as the example Bucket.
    
3.  Click **Create Directory** to create directories for the source data and JAR resources.
    
    -   Set **Directory Name** to `emr/datas/wordcount02/inputs` to create a directory for the source data.
        
    -   Set **Directory Name** to `emr/jars` to create a directory for the JAR resource.
        
4.  Upload the source data file to the directory.
    
    -   Navigate to the `/emr/datas/wordcount02/inputs` path and click **Upload File**.
        
    -   In the **Files to Upload** section, click **Scan for Files**, add the `input01.txt` file to the Bucket, and click **Upload File**.
        

## **Generate a MapReduce JAR for OSS**

1.  Open your IDEA project and add the pom dependencies.
    
    ```
            <dependency>
                <groupId>org.apache.hadoop</groupId>
                <artifactId>hadoop-mapreduce-client-common</artifactId>
                <version>2.8.5</version> <!-- The EMR MR version is 2.8.5. -->
            </dependency>
            <dependency>
                <groupId>org.apache.hadoop</groupId>
                <artifactId>hadoop-common</artifactId>
                <version>2.8.5</version>
            </dependency>
    ```
    
2.  To read and write OSS files in MapReduce, configure the following parameters.
    
    **Important**
    
    Warning: An Alibaba Cloud account's AccessKey grants full permissions for all API operations. We recommend using a RAM user for API calls and daily O&M. Do not hardcode your AccessKey ID and AccessKey Secret in your project code or any other publicly accessible location. Leaking your AccessKeys compromises the security of all resources in your account. The following code example is for reference only. Store your AccessKey credentials securely and handle them with care.
    
    ```
    conf.set("fs.oss.accessKeyId", "${accessKeyId}");
    conf.set("fs.oss.accessKeySecret", "${accessKeySecret}");
    conf.set("fs.oss.endpoint","${endpoint}");
    ```
    
    Parameter description:
    
    -   `${accessKeyId}`: The AccessKey ID of your Alibaba Cloud account.
        
    -   `${accessKeySecret}`: The AccessKey Secret of your Alibaba Cloud account.
        
    -   `${endpoint}`: The endpoint for accessing OSS. The endpoint is determined by the Region where your cluster resides. The OSS Bucket must be in the same Region as the cluster. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
        
    
    The following Java code adapts the official Hadoop WordCount example by adding the AccessKey ID and AccessKey Secret configuration to access OSS files.
    
    **Sample code**
    
    ```
    package cn.apache.hadoop.onaliyun.examples;
    
    import java.io.IOException;
    import java.util.StringTokenizer;
    
    import org.apache.hadoop.conf.Configuration;
    import org.apache.hadoop.fs.Path;
    import org.apache.hadoop.io.IntWritable;
    import org.apache.hadoop.io.Text;
    import org.apache.hadoop.mapreduce.Job;
    import org.apache.hadoop.mapreduce.Mapper;
    import org.apache.hadoop.mapreduce.Reducer;
    import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
    import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
    import org.apache.hadoop.util.GenericOptionsParser;
    
    public class EmrWordCount {
        public static class TokenizerMapper
                extends Mapper<Object, Text, Text, IntWritable> {
            private final static IntWritable one = new IntWritable(1);
            private Text word = new Text();
    
            public void map(Object key, Text value, Context context
            ) throws IOException, InterruptedException {
                StringTokenizer itr = new StringTokenizer(value.toString());
                while (itr.hasMoreTokens()) {
                    word.set(itr.nextToken());
                    context.write(word, one);
                }
            }
        }
    
        public static class IntSumReducer
                extends Reducer<Text, IntWritable, Text, IntWritable> {
            private IntWritable result = new IntWritable();
    
            public void reduce(Text key, Iterable<IntWritable> values,
                               Context context
            ) throws IOException, InterruptedException {
                int sum = 0;
                for (IntWritable val : values) {
                    sum += val.get();
                }
                result.set(sum);
                context.write(key, result);
            }
        }
    
        public static void main(String[] args) throws Exception {
            Configuration conf = new Configuration();
            String[] otherArgs = new GenericOptionsParser(conf, args).getRemainingArgs();
            if (otherArgs.length < 2) {
                System.err.println("Usage: wordcount <in> [<in>...] <out>");
                System.exit(2);
            }
            conf.set("fs.oss.accessKeyId", "${accessKeyId}"); // 
            conf.set("fs.oss.accessKeySecret", "${accessKeySecret}"); // 
            conf.set("fs.oss.endpoint", "${endpoint}"); //
            Job job = Job.getInstance(conf, "word count");
            job.setJarByClass(EmrWordCount.class);
            job.setMapperClass(TokenizerMapper.class);
            job.setCombinerClass(IntSumReducer.class);
            job.setReducerClass(IntSumReducer.class);
            job.setOutputKeyClass(Text.class);
            job.setOutputValueClass(IntWritable.class);
            for (int i = 0; i < otherArgs.length - 1; ++i) {
                FileInputFormat.addInputPath(job, new Path(otherArgs[i]));
            }
            FileOutputFormat.setOutputPath(job,
                    new Path(otherArgs[otherArgs.length - 1]));
            System.exit(job.waitForCompletion(true) ? 0 : 1);
        }
    }
                                    
    ```
    
3.  After you edit the Java code, build a JAR package. This example uses `onaliyun_mr_wordcount-1.0-SNAPSHOT.jar` as the name of the JAR package.
    

## Procedure

1.  On the EMR MR node configuration page, develop the job.
    
    #### **Develop an EMR MR task**
    
    Choose one of the following approaches based on your use case:
    
    ##### **Upload and reference**
    
    DataWorks allows you to upload local resources to DataStudio and then reference them in a Node. If a resource required by the EMR MR Node is too large to upload through the DataWorks UI, you can store the resource in Object Storage Service (OSS) and reference it in your code.
    
    1.  Create an EMR JAR resource.
        
        1.  For more information, see [Resource management](/help/en/dataworks/user-guide/resource-management-of-data-studio/). Store the JAR package generated in [Prepare source data and a JAR package](#4879ebe118ybd) in the JAR resource directory `emr/jars`. Click **Click to upload** to upload the JAR resource.
            
        2.  Select the **Storage Path**, **Data Source**, and **Resource Group**.
            
        3.  Click **Save**.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6447304671/p852342.png)
        
    2.  Reference the EMR JAR resource.
        
        1.  Open the created **EMR MR** Node and go to the code editor page.
            
        2.  In the resource management pane on the left, find the resource you want to reference, such as `onaliyun_mr_wordcount-1.0-SNAPSHOT.jar`, right-click it, and select **Reference Resource**.
            
        3.  After you reference the resource, a confirmation message appears in the code editor. Then, enter the following command. The JAR package name, Bucket name, and paths in the command are examples. Replace them with your actual values.
            
            ```
            ##@resource_reference{"onaliyun_mr_wordcount-1.0-SNAPSHOT.jar"}
            onaliyun_mr_wordcount-1.0-SNAPSHOT.jar cn.apache.hadoop.onaliyun.examples.EmrWordCount oss://onaliyun-bucket-2/emr/datas/wordcount02/inputs oss://onaliyun-bucket-2/emr/datas/wordcount02/outputs
            ```
            
            **Note**
            
            Comment statements are not supported in the EMR MR Node editor.
            
    
    ##### **Reference from OSS**
    
    You can directly reference an OSS resource from the Node by using [OSS REF](/help/en/oss/developer-reference/ossfs). When the EMR Node runs, DataWorks automatically downloads the referenced OSS resource to the local execution environment. This approach is useful when an EMR job has JAR dependencies or depends on other script files.
    
    1.  Upload the JAR resource.
        
        1.  After you finish developing the code, log on to the [OSS console](https://oss.console.alibabacloud.com/) and click **Bucket List** in the left-side navigation pane for your Region.
            
        2.  Click the name of the target Bucket to go to the **File Management** page.
            
            This tutorial uses `onaliyun-bucket-2` as the example Bucket.
            
        3.  Upload the JAR resource to its directory.
            
            Navigate to the `emr/jars` directory, click **Upload File**, and in the **Files to Upload** section, click **Scan for Files**. Add the `onaliyun_mr_wordcount-1.0-SNAPSHOT.jar` file to the Bucket and click **Upload File**.
            
    2.  Reference the JAR resource.
        
        On the configuration page of the created EMR MR Node, edit the code to reference the JAR resource.
        
        On the configuration page of the created EMR MR Node, edit the code to reference the JAR resource.
        
        ```
        hadoop jar ossref://onaliyun-bucket-2/emr/jars/onaliyun_mr_wordcount-1.0-SNAPSHOT.jar cn.apache.hadoop.onaliyun.examples.EmrWordCount oss://onaliyun-bucket-2/emr/datas/wordcount02/inputs oss://onaliyun-bucket-2/emr/datas/wordcount02/outputs
        ```
        
        **Note**
        
        The command format is `hadoop jar <path_to_the_JAR_to_run> <fully_qualified_main_class_name> <input_directory> <output_directory>`.
        
        The following table describes the path to the JAR to run.
        
        **Parameter**
        
        **Description**
        
        **Path to the JAR to run**
        
        Format: `ossref://{endpoint}/{Bucket}/{object}`
        
        -   **endpoint**: The endpoint for accessing OSS. If this parameter is left empty, you can access OSS only in the same Region as the EMR cluster. The OSS Bucket must be in the same Region as the EMR cluster.
            
        -   **Bucket**: An OSS container for storing objects. Each **Bucket** has a unique name. You can log on to the [OSS console](https://oss.console.alibabacloud.com/) to view all **Buckets** under your account.
            
        -   **object**: A specific object, such as a file name or path, stored in the **Bucket**.
            
        
    
    #### **(Optional) Configure advanced parameters**
    
    You can configure specific parameters in the ****EMR Node Parameter** or **DataWorks Parameter**** section under on the right side of the node configuration pane.
    
    **Note**
    
    -   The available advanced parameters vary slightly depending on the EMR cluster type, as shown in the following tables.
        
    -   Additional [open source Spark properties](https://spark.apache.org/docs/latest/configuration.html) can be configured in the ****EMR Node Parameter** or **DataWorks Parameter**** section under on the right side of the node configuration pane.
        
    
    ##### **Datalake or custom cluster**
    
    **Advanced parameter**
    
    **Description**
    
    **queue**
    
    Specifies the scheduling queue for submitting the job. The default is the `default` queue. For information about EMR YARN, see [Basic queue configurations](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).
    
    **priority**
    
    The priority. The default value is 1.
    
    **FLOW\_SKIP\_SQL\_ANALYZE**
    
    Specifies the execution method for SQL statements. Valid values:
    
    -   `true`: Execute multiple SQL statements at a time.
        
    -   `false` (default): Execute one SQL statement at a time.
        
    
    **Note**
    
    This parameter can only be used for testing in the data development environment.
    
    **Others**
    
    You can also add custom MR job parameters in the advanced configuration section. When you submit the code, DataWorks automatically adds the new parameters to the command by using `-D key=value` statements.
    
    ##### **Hadoop cluster**
    
    **Advanced parameter**
    
    **Description**
    
    **queue**
    
    Specifies the scheduling queue for submitting the job. The default is the `default` queue. For information about EMR YARN, see [Basic queue configurations](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).
    
    **priority**
    
    The priority. The default value is 1.
    
    **USE\_GATEWAY**
    
    Specifies whether to submit the job through a gateway cluster. Valid values:
    
    -   `true`: Submit the job through a gateway cluster.
        
    -   `false` (default): Do not submit the job through a gateway cluster. The job is submitted to the header node by default.
        
    
    **Note**
    
    If the cluster where this node resides is not associated with a gateway cluster and you set this parameter to `true`, the EMR job submission will fail.
    
    #### **Run the task**
    
    1.  In the **Run Configuration** **Compute Resources** section, configure the **Compute Resources** and **Resource Group**.
        
        **Note**
        
        -   You can also configure **Scheduling CUs** based on the resource requirements of the task. The default CU value is `0.25`.
            
        -   To access data sources over the public network or a VPC, you must use a scheduling Resource Group that has passed the connectivity test with the Data Source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        
    2.  In the parameter dialog box in the toolbar, select the created Data Source and click **Run**.
        
    
2.  To run the Node task periodically, configure scheduling properties. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After configuring the Node task, you must deploy the Node. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is deployed, you can view its running status in the Operation Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## View results

-   Log on to the [OSS console](https://oss.console.alibabacloud.com/). You can view the output files in the specified output directory of the target Bucket. In this example, the path is emr/datas/wordcount02/outputs.![目标Bucket](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4283351361/p271621.png)
    
-   Read the statistics in DataWorks.
    
    1.  Create an EMR Hive Node. For more information, see [Create a node for a scheduled workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
        
    2.  In the EMR Hive Node, create an External Hive Table that is mounted on OSS and read the table data. Sample code:
        
        ```
        CREATE EXTERNAL TABLE IF NOT EXISTS wordcount02_result_tb
        (
            `word` STRING COMMENT 'word',
            `cout` STRING COMMENT 'count'   
        ) 
        ROW FORMAT delimited fields terminated by '\t'
        location 'oss://onaliyun-bucket-2/emr/datas/wordcount02/outputs/';
        
        SELECT * FROM wordcount02_result_tb;
        ```
        
        The following figure shows the results.![运行结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9306864261/p271623.png)
