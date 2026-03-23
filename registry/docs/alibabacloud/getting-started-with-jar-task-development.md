You can build a JAR package that contains your business logic and upload it to develop Spark JAR jobs. This topic provides two examples of how to develop and deploy a JAR job.

## **Prerequisites**

-   A workspace is created. For more information, see [Workspace Management](/help/en/emr/emr-serverless-spark/user-guide/manage-workspaces).
    
-   A business application has been developed and packaged into a JAR file.
    

## Procedure

### Step 1: Develop a JAR package

E-MapReduce (EMR) Serverless Spark does not provide an integrated development environment (IDE) for JAR packages. Therefore, you must write the Spark application code and package it into a JAR file on a local or standalone development platform. This topic provides two examples.

In the `pom.xml` file of your Maven project, you must add Spark-related dependencies. Because the Serverless Spark runtime environment has these dependencies built-in, you can set the `scope` to `provided`. This prevents duplicate packaging and version conflicts while ensuring the dependencies are available during the compilation and testing phases.

```
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-core_2.12</artifactId>
    <version>3.5.2</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-sql_2.12</artifactId>
    <version>3.5.2</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-hive_2.12</artifactId>
    <version>3.5.2</version>
    <scope>provided</scope>
</dependency>
```

## Query a DLF table

```
public class HiveTableAccess {
    public static void main(String[] args) {
        SparkSession spark = SparkSession.builder()
                .appName("DlfTableAccessExample")
                .enableHiveSupport()
                .getOrCreate();
        spark.sql("SELECT * FROM test_table").show();
        spark.stop();
    }
}
```

## Calculate the approximate value of pi (π)

```
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.SparkSession;

import java.util.ArrayList;
import java.util.List;

/**
 * Computes an approximation to pi
 * Usage: JavaSparkPi [partitions]
 */
public final class JavaSparkPi {

  public static void main(String[] args) throws Exception {
    SparkSession spark = SparkSession
      .builder()
      .appName("JavaSparkPi")
      .getOrCreate();

    JavaSparkContext jsc = new JavaSparkContext(spark.sparkContext());

    int slices = (args.length == 1) ? Integer.parseInt(args[0]) : 2;
    int n = 100000 * slices;
    List<Integer> l = new ArrayList<>(n);
    for (int i = 0; i < n; i++) {
      l.add(i);
    }

    JavaRDD<Integer> dataSet = jsc.parallelize(l, slices);

    int count = dataSet.map(integer -> {
      double x = Math.random() * 2 - 1;
      double y = Math.random() * 2 - 1;
      return (x * x + y * y <= 1) ? 1 : 0;
    }).reduce((integer, integer2) -> integer + integer2);

    System.out.println("Pi is roughly " + 4.0 * count / n);

    spark.stop();
  }
}
```

Click [SparkExample-1.0-SNAPSHOT.jar](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250804/eepxhx/SparkExample-1.0-SNAPSHOT.jar) to download the test JAR package.

### **Step 2: Upload the JAR package**

1.  Go to the file upload page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, click the name of the target workspace.
        
    4.  On the EMR Serverless Spark page, click ****Artifacts**** in the navigation pane on the left.
        
2.  On the **Artifacts** page, click **Upload File**.
    
3.  In the **Upload File** dialog box, click the upload area to select a local JAR package, or drag the JAR package into the area.
    
    In this example, the SparkExample-1.0-SNAPSHOT.jar package is uploaded.
    

### **Step 3: Develop and run a job**

1.  On the EMR Serverless Spark page, click **Development** in the navigation pane on the left.
    
2.  On the **Development** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6035189371/p916811.png) icon.
    
3.  Enter a name, select **Application(Batch)** > **JAR** as the Type, and click **OK**.
    
4.  In the upper-right corner, select a queue.
    
    For more information about how to add a queue, see [Manage resource queues](/help/en/emr/emr-serverless-spark/user-guide/queue-management).
    
5.  On the new job tab, configure the following parameters, leave the other parameters at their default values, and then click **Run**.
    
    **Parameter**
    
    **Description**
    
    **Main JAR Resource**
    
    Select the JAR package that you uploaded in the previous step. In this example, select SparkExample-1.0-SNAPSHOT.jar.
    
    **Main Class**
    
    The main class that is specified when you submit a Spark job.
    
    -   To calculate the approximate value of pi (π): In this example, enter `org.example.JavaSparkPi`.
        
    -   To query a Hive table: In this example, enter `org.example.HiveTableAccess`.
        
    
6.  After the job runs, in the **Execution Records** section, click **Logs** in the Actions column to view the log information.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0909144571/p990645.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0909144571/p990643.png)
    

### **Step 4: Publish the job**

**Important**

A published job can be used as a node in a workflow.

1.  After the job is complete, click **Publish** in the upper-right corner.
    
2.  In the dialog box that appears, enter release information and click **OK**.
    

### **(Optional) Step 5: View the Spark UI**

After the job runs successfully, you can view its execution details on the Spark UI.

1.  In the navigation pane on the left, click **Job History**.
    
2.  On the **Application** page, find the target job and click **Spark UI** in the Actions column.
    
3.  On the Spark Jobs page, you can view the job details.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8183201271/p767311.png)
    

## **References**

After a job is published, you can use it for workflow scheduling. For more information, see [Manage workflows](/help/en/emr/emr-serverless-spark/user-guide/manage-workflows). For an example of the complete development process for job orchestration, see [Get started with SparkSQL development](/help/en/emr/emr-serverless-spark/getting-started/get-started-with-sql-task-development).
