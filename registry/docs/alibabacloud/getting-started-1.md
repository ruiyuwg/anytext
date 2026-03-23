This topic describes how to write a MapReduce program by using MaxCompute Studio, generate a JAR file, and then run a MapReduce job on the MaxCompute client. A WordCount MapReduce job is used in this topic.

## Prerequisites

-   The MaxCompute client is installed and configured. For more information, see [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    
-   MaxCompute Studio is installed and connected to the MaxCompute project that you want to use. For more information, see [Install MaxCompute Studio](/help/en/maxcompute/user-guide/install-maxcompute-studio#task-2456397) and [Manage project connections](/help/en/maxcompute/user-guide/manage-project-connections#task-2456405).
    
-   The source data file is prepared and saved to your on-premises machine.
    
    In this topic, the sample file data.txt whose content is `hello,odps` is used. You can prepare such a file and save it to the `bin` directory of the MaxCompute client.
    

## Precautions

To develop a MapReduce program with Maven, search for odps-sdk-mapred, odps-sdk-commons, and odps-sdk-core in the [Maven Central Repository](https://search.maven.org/) to find the required versions of SDK for Java. In this example, we use the version 0.36.4-public. The following dependencies must be configured in the pom.xml file:

```
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>odps-sdk-mapred</artifactId>
    <version>0.36.4-public</version>
</dependency>
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>odps-sdk-commons</artifactId>
    <version>0.36.4-public</version>
</dependency>
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>odps-sdk-core</artifactId>
    <version>0.36.4-public</version>
</dependency>
```

## Procedure

1.  [Step 1: Develop a MapReduce program](#section-zj0-vwt-yei)
    
    Write, run, and debug a MapReduce program by using MaxCompute Studio.
    
2.  [Step 2: Generate and upload a MapReduce JAR file](#section-dgg-out-1yo)
    
    Package the compiled WordCount.java script into a JAR file and upload the file to the MaxCompute project.
    
3.  [Step 3: Run a MapReduce job](#section-2wo-f5k-o5u)
    
    Run the `JAR` command based on the JAR file uploaded to your MaxCompute project to run a MapReduce job.
    

## Step 1: Develop a MapReduce program

1.  Create a MaxCompute Java module.
    
    1.  Start IntelliJ IDEA. In the top navigation bar, choose **File** > **New** > **Module**.
        
    2.  In the left-side navigation pane of the **New Module** dialog box, select **MaxCompute Java**.
        
    3.  Configure **Module SDK** and click **Next**.
        
    4.  Enter a module name, such as mapreduce, in the **Module name** field and click **Finish**.
        
2.  Write, run, and debug a WordCount MapReduce program.
    
    1.  In the **Project** pane, expand your MaxCompute Java module and choose **src** > **main** > **java**. Then, right-click java and choose **New** > **MaxCompute Java**.
        
    2.  In the **Create new MaxCompute java class** dialog box, click **Driver**, enter the name of the MaxCompute Java class that you want to create in the **Name** field, and then press Enter. For example,you can enter WordCount as the name.
        
        ![新建Java class](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8770050361/p279149.png)
        
    3.  In the code editor for WordCount.java, write a WordCount MapReduce program to count the number of words.
        
        For the complete WordCount sample code, see [Sample code](/help/en/maxcompute/user-guide/wordcount-example#section-ykc-gyg-vdb).
        
    4.  In the left-side navigation pane, right-click WordCount.java and select **Run**.
        
    5.  In the **Run/Debug Configurations** dialog box, set **MaxCompute project** to the MaxCompute project that you want to use.
        
        ![配置项目信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9715790361/p279153.png)
        
    6.  Click **OK** to run and debug the WordCount.java script to ensure that the script can be executed as expected.
        

## Step 2: Generate and upload a MapReduce JAR file

1.  In the left-side navigation pane of IntelliJ IDEA, right-click WordCount.java and select **Deploy to server**.
    
2.  In the **Package a jar and submit resource** dialog box, configure the parameters and click **OK** to package and upload the script.
    
    ![打包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9715790361/p279159.png)
    
    For information about the parameters, see [Procedure](/help/en/maxcompute/user-guide/package-a-java-program-upload-the-package-and-create-a-maxcompute-udf#section-b4e-wkf-lsp).
    
    **Note**
    
    If you use Maven to develop the MapReduce program, after you package the script into a JAR file, you must manually upload the JAR file to your MaxCompute project from the MaxCompute client. For more information, see [Add resources](/help/en/maxcompute/user-guide/resource-operations#section-533-s8q-d9w). Sample command:
    
    ```
    add jar mapreduce-1.0-SNAPSHOT.jar;
    ```
    

## Step 3: Run a MapReduce job

1.  [Log on to the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-5ad-gj6-hku) or start the MaxCompute client in MaxCompute Studio.
    
    The MaxCompute client is integrated in MaxCompute Studio. You can run the MaxCompute client in MaxCompute Studio. For more information, see [Integrate the MaxCompute client](/help/en/maxcompute/user-guide/integrate-with-maxcompute-client#task-2461001).
    
2.  Create input and output tables.
    
    The input table contains the source data of the MapReduce job. The output table contains the processing results of the MapReduce job. Sample commands:
    
    ```
    --Create an input table named wc_in. 
    create table wc_in (key STRING, value STRING);
    --Create an output table named wc_out. 
    create table wc_out (key STRING, cnt BIGINT);
    ```
    
    For more information about the table creation syntax, see [Create a table](/help/en/maxcompute/table-operations-1#section-ixi-bgd-948).
    
3.  Run the Tunnel Upload command to insert data into the wc\_in table.
    
    Sample command:
    
    ```
    tunnel upload data.txt wc_in;
    ```
    
    For more information about Tunnel commands, see [Tunnel commands](/help/en/maxcompute/user-guide/tunnel-commands#concept-rkf-2wc-5db).
    
4.  Run the `JAR` command to call the uploaded JAR file and run a MapReduce job.
    
    Sample command:
    
    ```
    jar -resources mapreduce-1.0-SNAPSHOT.jar -classpath mapreduce-1.0-SNAPSHOT.jar com.aliyun.odps.mapred.open.example.WordCount wc_in wc_out;
    ```
    
    -   `-resources mapreduce-1.0-SNAPSHOT.jar`: The `-resources` option specifies the name of the resource that is called by the MapReduce job. In this example, the resource is the mapreduce-1.0-SNAPSHOT.jar file that is uploaded in [Step 2](#section-dgg-out-1yo).
        
    -   `-classpath mapreduce-1.0-SNAPSHOT.jar`: The `-classpath` option specifies the path of the JAR file that contains MainClass.
        
    -   `com.aliyun.odps.mapred.open.example.WordCount`: MainClass defined in the MapReduce program.
        
    -   `wc_in wc_out`: the input table and output table.
        
    
    For more information about the `JAR` command, see [Syntax](/help/en/maxcompute/user-guide/submit-a-mapreduce-job#section-htl-xzu-gd3).
    
5.  Run the following command to view the result data that is written to the wc\_out table:
    
    ```
    select * from wc_out;
    ```
    
    The following result is returned:
    
    ```
    +------------+------------+
    | key        | cnt        |
    +------------+------------+
    | hello      | 1          |
    | odps       | 1          |
    +------------+------------+
    ```
