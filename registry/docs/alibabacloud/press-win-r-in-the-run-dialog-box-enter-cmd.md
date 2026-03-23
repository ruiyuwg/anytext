This topic describes how to set up a Spark on MaxCompute development environment that runs the Windows operating system.

If you have a Linux operating system installed, follow the instructions in [Set up a Linux development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311) to set up a Spark on MaxCompute development environment that runs the Linux operating system.

## Prerequisites

Before you set up a Spark on MaxCompute development environment, make sure that the following software is installed in your Windows operating system:

**Note**

The software version number and software installation path used in this topic are for reference only. The actual software version that you must download and install may differ based on your operating system.

-   JDK
    
    In this example, JDK 1.8.0\_361 is used. For more information about how to download JDK, go to the [JDK official website](https://www.oracle.com/).
    
-   Python
    
    In this example, Python 3.10 is used. For more information about how to download Python, go to the [Python official website](https://www.python.org/?spm=a2c4g.11186623.0.0.7ed92bfdywhGeH).
    
    **Note**
    
    In this example, Spark 2.4.5 is used. If you use another version of Spark, download and install a version of Python that corresponds to the Spark version. For more information, see [https://pypi.org/project/pyspark/](https://pypi.org/project/pyspark/).
    
-   Maven
    
    In this example, Apache Maven 3.8.7 is used. For more information about how to download Apache Maven, go to the [Maven official website](https://maven.apache.org/).
    
-   Git
    
    In this example, Git 2.39.1.windows.1 is used. For more information about how to download Git, go to the [Git official website](https://git-scm.com/).
    
-   Scala
    
    In this example, Scala 2.13.10 is used. For more information about how to download Scala, go to the [Scala official website](https://www.scala-lang.org/).
    

## Download the Spark on MaxCompute client package

The Spark on MaxCompute client package is released with the MaxCompute authentication feature. This allows Spark on MaxCompute to serve as a client that submits jobs to your MaxCompute project by using the spark-submit script. MaxCompute provides release packages for Spark 1.x, Spark 2.x, and Spark 3.x. You can download these packages from the following links. In this example, Spark 2.4.5 is used.

-   [Spark 1.6.3](https://maxcompute-repo.oss-cn-hangzhou.aliyuncs.com/spark/1.6.3-public/spark-1.6.3-public.tar.gz): used to develop Spark 1.x applications.
    
-   [Spark 2.3.0](https://odps-repo.oss-cn-hangzhou.aliyuncs.com/spark/2.3.0-odps0.34.0/spark-2.3.0-odps0.34.0.tar.gz): used to develop Spark 2.x applications.
    
-   [Spark 2.4.5](https://maxcompute-repo.oss-cn-hangzhou.aliyuncs.com/spark/2.4.5-odps0.33.2/spark-2.4.5-odps0.33.2.tar.gz): used to develop Spark 2.x applications. For more information about the precautions on using Spark 2.4.5, see [Precautions on using Spark 2.4.5](#section-yjq-ccc-lvl).
    
-   [Spark 3.1.1](https://odps-repo.oss-cn-hangzhou.aliyuncs.com/spark/3.1.1-odps0.34.1/spark-3.1.1-odps0.34.1.tar.gz): used to develop Spark 3.x applications. For more information about the precautions on using Spark 3.1.1, see [Precautions on using Spark 3.1.1](#section-jod-09w-n5w).
    

## Configure environment variables

In the Windows operating system, right-click **This PC** and select **Properties** from the shortcut menu. On the page that appears, click **Advanced system setting**. On the Advanced tab, click **Environment Variables** and configure environment variables. The following content describes how to configure the environment variables.

-   Configure Java environment variables.
    
    -   Obtain the Java installation path.
        
    -   Edit Java environment variables.
        
        1.  Add the `JAVA_HOME` variable to system variables and set the **variable value** to the Java installation path.
            
        2.  Add `%JAVA_HOME%\bin` to the `Path` parameter in system variables.
            
    -   Check whether the Java environment variables are successfully configured.
        
        -   Verification method
            
            Press **Win+R**. In the **Run** dialog box, enter **cmd** and click **OK**. In the Command Prompt, enter `java -version`. If the returned result is as expected, Java environment variables are successfully configured.
            
        -   Example of an expected result
            
            ```
            java version "1.8.0_361"
            Java(TM) SE Runtime Environment (build 1.8.0_361-b09)
            Java HotSpot(TM) 64-Bit Server VM (build 25.361-b09, mixed mode)
            ```
            
-   Configure Spark environment variables.
    
    -   Obtain the path to which the Spark on MaxCompute package is decompressed.
        
    -   Edit Spark environment variables.
        
        1.  Add the `SPARK_HOME` parameter to system variables and set the **variable value** to the path to which the Spark on MaxCompute client package is decompressed.
            
        2.  Add `%SPARK_HOME%\bin` to the `Path` parameter in system variables.
            
-   Configure Scala environment variables.
    
    Check whether Scala environment variables are successfully configured.
    
    -   Verification method
        
        Press **Win+R**. In the **Run** dialog box, enter **cmd** and click **OK**. In the Command Prompt, enter `scala`. If the returned result is as expected, Scala environment variables are successfully configured.
        
    -   Example of an expected result
        
        ```
        Welcome to Scala 2.13.10 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_361).
        Type in expressions for evaluation. Or try :help.
        
        scala>
        ```
        
    
-   Configure Python environment variables.
    
    -   Obtain the Python installation path.
        
    -   Edit Python environment variables.
        
        Add the Python installation path and the Scripts subdirectory in the installation path of Python to the `Path` parameter in system variables.
        
    -   Check whether the Python environment variables are successfully configured.
        
        -   Verification method
            
            Press **Win+R**. In the **Run** dialog box, enter **cmd** and click **OK**. In the Command Prompt, enter `python --version`. If the returned result is as expected, Python environment variables are successfully configured.
            
        -   Example of an expected result
            
            ```
            Python 3.10.6
            ```
            
-   Configure Maven environment variables.
    
    -   Obtain the path to which the Maven package is decompressed.
        
    -   Edit Maven environment variables.
        
        1.  Add the `MAVEN_HOME` parameter to system variables and set the **variable value** to the path to which the Maven package is decompressed.
            
        2.  Add `%MAVEN_HOME%\bin` to the `Path` parameter in system variables.
            
    -   Check whether the Maven environment variables are successfully configured.
        
        -   Verification method
            
            Press **Win+R**. In the **Run** dialog box, enter **cmd** and click **OK**. In the Command Prompt, enter `mvn --version`. If the returned result is as expected, Maven environment variables are successfully configured.
            
        -   Example of an expected result
            
            ```
            # *** indicates the partial path to which the Maven package is decompressed. 
            Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)
            Maven home: D:\***\apache-maven-3.8.7-bin\apache-maven-3.8.7
            Java version: 1.8.0_361, vendor: Oracle Corporation, runtime: C:\Program Files\Java\jdk1.8.0_361\jre
            Default locale: zh_CN, platform encoding: GBK
            OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"
            ```
            
-   Configure Git environment variables.
    
    Check whether the Git environment variables are successfully configured.
    
    -   Verification method
        
        Press **Win+R**. In the **Run** dialog box, enter **cmd** and click **OK**. In the Command Prompt, enter `git --version`. If the returned result is as expected, Git environment variables are successfully configured.
        
    -   Example of an expected result
        
        ```
        git version 2.39.1.windows.1
        ```
        
    
-   Configure the spark\_defaults.conf file.
    
    If you use the Spark on MaxCompute client for the first time, rename the spark-defaults.conf.template file in the conf folder of the decompression path where the Spark on MaxCompute client package resides as spark-defaults.conf. Then, configure the file. If both the spark-defaults.conf.template and spark-defaults.conf files exist, you do not need to perform the rename operation. You need only to configure the spark-defaults.conf file. Sample code:
    
    ```
    # Go to the path to which the Spark on MaxCompute client package is decompressed and open the conf folder. The actual path may vary. 
    
    # Open the spark-defaults.conf file.
    
    # Add the following configurations to the end of the configuration file: 
    spark.hadoop.odps.project.name = <MaxCompute_project_name>
    spark.hadoop.odps.access.id = <AccessKey_id>
    spark.hadoop.odps.access.key = <AccessKey_secret>
    spark.hadoop.odps.end.point = <Endpoint>   # The endpoint that is used to connect the Spark on MaxCompute client to your MaxCompute project. You can modify the endpoint based on your business requirements. 
    # For Spark 2.3.0, set spark.sql.catalogImplementation to odps. For Spark 2.4.5, set spark.sql.catalogImplementation to hive. 
    spark.sql.catalogImplementation={odps|hive}
    
    # Retain the following parameter configurations:
    spark.hadoop.odps.task.major.version = cupid_v2
    spark.hadoop.odps.cupid.container.image.enable = true
    spark.hadoop.odps.cupid.container.vm.engine.type = hyper
    spark.hadoop.odps.moye.trackurl.host = http://jobview.odps.aliyun.com
    ```
    
    -   MaxCompute\_project\_name: the name of the MaxCompute project that you want to access.
        
        This parameter specifies the name of your MaxCompute project instead of the DataWorks workspace to which the MaxCompute project corresponds. You can log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com). In the top navigation bar, select a region. In the left-side navigation pane, choose **Workspace** > **Projects** to view the name of the MaxCompute project.
        
    -   AccessKey\_id: the AccessKey ID that is used to access the MaxCompute project.
        
        You can obtain the AccessKey ID from the [AccessKey Pair](https://ram.console.alibabacloud.com/manage/ak) page.
        
    -   AccessKey\_secret: the AccessKey secret that corresponds to the AccessKey ID.
        
        You can obtain the AccessKey secret from the [AccessKey Pair](https://ram.console.alibabacloud.com/manage/ak) page.
        
    -   Endpoint: the public endpoint of the region where your MaxCompute project resides.
        
        For more information about the public endpoint of each region, see [Endpoints in different regions (Internet)](/help/en/maxcompute/user-guide/endpoints#section-f2d-51y-5db).
        
    -   VPC\_endpoint: the VPC endpoint of the region where your MaxCompute project resides.
        
        For more information about the VPC endpoint of each region, see [Endpoints in different regions (VPC)](/help/en/maxcompute/user-guide/endpoints#section-oit-45y-23z).
        

## Prepare a project

Spark on MaxCompute provides a demo project template. We recommend that you download and copy the template to develop your application.

**Important**

In the demo project, the dependency scope for Spark on MaxCompute is provided. Do not change this scope. Otherwise, the job that you submit may not run as expected.

Prepare a project in the Windows operating system.

-   Download the Spark-1.x template and compile the template.
    
    ```
    # Start the downloaded Git client (Git Bash), go to the directory to which the project is downloaded, and then run the following code:
    git clone https://github.com/aliyun/MaxCompute-Spark.git
    
    # Go to the project folder.
    cd MaxCompute-Spark/spark-1.x
    
    # Compile the project package.
    mvn clean package
    ```
    
-   Download the Spark-2.x template and compile the template.
    
    ```
    # Start the downloaded Git client (Git Bash), go to the directory to which the project is downloaded, and then run the following code:
    git clone https://github.com/aliyun/MaxCompute-Spark.git
    
    # Go to the project folder.
    cd MaxCompute-Spark/spark-2.x
    
    # Compile the project package.
    mvn clean package
    ```
    
-   Download the Spark-3.x template and compile the template.
    
    ```
    # Start the downloaded Git client (Git Bash), go to the directory to which the project is downloaded, and then run the following code:
    git clone https://github.com/aliyun/MaxCompute-Spark.git
    
    # Go to the project folder.
    cd MaxCompute-Spark/spark-3.x
    
    # Compile the project package.
    mvn clean package
    ```
    

After you run the preceding commands, if the project fails to be created, some environment configurations are invalid. Follow the preceding instructions to check the configurations. If any invalid configurations are found, modify the configurations.

## Configure dependencies

In the Spark on MaxCompute project that you prepared, configure the dependencies. The following content provides sample commands that you can run on the Git client to configure dependencies. You can also directly open related files and configure dependencies.

-   Configure the dependencies that are required for accessing tables in your MaxCompute project.
    
    -   The Spark-1.x template is used.
        
        ```
        # Go to the spark-1.x folder. 
        cd MaxCompute-Spark/spark-1.x
        
        # Edit the POM file to add the odps-spark-datasource dependency. 
        <dependency>
          <groupId>com.aliyun.odps</groupId>
          <artifactId>odps-spark-datasource_2.10</artifactId>
          <version>3.3.8-public</version>
        </dependency>                           
        ```
        
    -   The Spark-2.x template is used.
        
        ```
        # Go to the spark-2.x folder. 
        cd MaxCompute-Spark/spark-2.x
        
        # Edit the POM file to add the odps-spark-datasource dependency. 
        <dependency>
            <groupId>com.aliyun.odps</groupId>
            <artifactId>odps-spark-datasource_2.11</artifactId>
            <version>3.3.8-public</version>
        </dependency>
        ```
        
-   Configure the dependency that is required for accessing Object Storage Service (OSS).
    
    If your job needs to access OSS, add the following dependency:
    
    ```
    <dependency>
        <groupId>com.aliyun.odps</groupId>
        <artifactId>hadoop-fs-oss</artifactId>
        <version>3.3.8-public</version>
    </dependency>
    ```
    

For more information about the dependencies that are required when the Spark-1.x, Spark-2.x, or Spark-3.x template is used, see [Spark-1.x pom](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-1.x/pom.xml), [Spark-2.x pom](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/pom.xml), or [Spark-3.x pom](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-3.x/pom.xml).

## **Smoke testing**

After you complete the preceding operations, conduct smoke testing to check the end-to-end connectivity of Spark on MaxCompute.

## SparkPi smoke testing

For example, you can run the following commands to conduct SparkPi smoke testing for a Spark 2.x application:

```
# Press Win+R. In the Run dialog box, enter cmd. 
# Go to the bin folder in the D:\PC\spark\spark-2.4.5-odps0.33.2\ directory where the job is saved. 
cd D:\PC\spark\spark-2.4.5-odps0.33.2\bin

# Run the following commands: 
spark-submit \
--class com.aliyun.odps.spark.examples.SparkPi \
--master yarn \
--deploy-mode cluster \
/path/to/your/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar

# If the following log information is displayed, smoke testing is successful. 
19/06/11 11:57:30 INFO Client:
         client token: N/A
         diagnostics: N/A
         ApplicationMaster host: 11.222.166.90
         ApplicationMaster RPC port: 38965
         queue: queue
         start time: 1560225401092
         final status: SUCCEEDED
```

## IntelliJ IDEA smoke testing in local mode

1.  Open the downloaded project in IntelliJ IDEA and add the directory specified by the `--Jars` parameter on Spark on MaxCompute to the project template of IntelliJ IDEA. For more information, see [Notes on running Spark on MaxCompute in local mode by using IntelliJ IDEA](/help/en/maxcompute/set-up-a-linux-development-environment#section-q4g-4un-3su).
    
2.  Add the following code in IntelliJ IDEA in local mode for debugging:
    
    ```
    val spark = SparkSession
          .builder()
          .appName("SparkPi")
          .config("spark.master", "local[4]") // The code can run after you set spark.master to local[N]. N indicates the number of concurrent Spark jobs. 
          .getOrCreate()
    ```
    
3.  You must specify the related configurations in the `odps.conf` file in the main/resource directory when you run the code in IntelliJ IDEA in local mode. You cannot directly reference the configurations in the spark-defaults.conf file. The following code provides an example.
    
    **Note**
    
    You must specify configuration items in the `odps.conf` file for Spark 2.4.5 and later.
    
    ```
    dops.access.id=""
    odps.access.key=""
    odps.end.point=""
    odps.project.name=""
    ```
    

## Precautions on using Spark 2.4.5

-   Use Spark 2.4.5 to submit jobs
    
    Submit a job in a Yarn cluster. For more information, see [Cluster mode](/help/en/maxcompute/running-modes#section-anp-rmp-mpx).
    
-   Changes in using Spark 2.4.5
    
    -   If you submit jobs in a Yarn cluster, you must specify `HADOOP_CONF_DIR=$SPARK_HOME/conf` to add the SPARK\_HOME environment variable.
        
    -   If you perform debugging in local mode, you must create a file named odps.conf in the `$SPARK_HOME/conf` path and add the following configurations to the file:
        
        ```
        odps.project.name = 
        odps.access.id = 
        odps.access.key =
        odps.end.point =
        ```
        
-   Changes in the parameter settings of Spark 2.4.5
    
    -   `spark.sql.catalogImplementation`: This parameter is set to `hive`.
        
    -   `spark.sql.sources.default`: This parameter is set to `hive`.
        
    -   `spark.sql.odps.columnarReaderBatchSize`: specifies the number of rows from which the vectorized reader reads data at a time. Default value: 4096.
        
    -   `spark.sql.odps.enableVectorizedReader`: specifies whether to enable the vectorized reader. Default value: True.
        
    -   `spark.sql.odps.enableVectorizedWriter`: specifies whether to enable the vectorized writer. Default value: True.
        
    -   `spark.sql.odps.split.size`: This parameter can be used to adjust the concurrency of data reading operations on MaxCompute tables. By default, this parameter is set to 256 for each partition. Unit: MB.
        

## Precautions on using Spark 3.1.1

-   Use Spark 3.1.1 to submit jobs
    
    Submit a job in a Yarn cluster. For more information, see [Cluster mode](/help/en/maxcompute/running-modes#section-anp-rmp-mpx).
    
-   Changes in using Spark 3.1.1
    
    -   If you submit jobs in a Yarn cluster, you must specify `HADOOP_CONF_DIR=$SPARK_HOME/conf` to add the SPARK\_HOME environment variable.
        
    -   If you submit PySpark jobs in a Yarn cluster, you must add the following configurations to the spark-defaults.conf file to use Spark for Python 3.
        
        ```
        spark.hadoop.odps.cupid.resources = public.python-3.7.9-ucs4.tar.gz
        spark.pyspark.python = ./public.python-3.7.9-ucs4.tar.gz/python-3.7.9-ucs4/bin/python3
        ```
        
    -   If you perform debugging in local mode:
        
        -   You must create an odps.conf file in the `$SPARK_HOME/conf` directory and add the following configurations to the file:
            
            ```
            odps.project.name = 
            odps.access.id = 
            odps.access.key =
            odps.end.point =
            ```
            
        -   You must add `spark.hadoop.fs.defaultFS = file:///`. Sample code:
            
            ```
            val spark = SparkSession
              .builder()
              .config("spark.hadoop.fs.defaultFS", "file:///")
              .enableHiveSupport()
              .getOrCreate()
            ```
            
-   Changes in the parameter settings of Spark 3.1.1
    
    -   `spark.sql.defaultCatalog`: This parameter is set to `odps`.
        
    -   `spark.sql.catalog.odps`: This parameter is set to `org.apache.spark.sql.execution.datasources.v2.odps.OdpsTableCatalog`.
        
    -   `spark.sql.sources.partitionOverwriteMode`: This parameter is set to `dynamic`.
        
    -   `spark.sql.extensions`: This parameter is set to `org.apache.spark.sql.execution.datasources.v2.odps.extension.OdpsExtensions`.
        
    -   `spark.sql.odps.enableVectorizedReader`: specifies whether to enable the vectorized reader. Default value: True.
        
    -   `spark.sql.odps.enableVectorizedWriter`: specifies whether to enable the vectorized writer. Default value: True.
        
    -   `spark.sql.catalog.odps.splitSizeInMB`: This parameter can be used to adjust the concurrency of data reading operations on MaxCompute tables. By default, this parameter is set to 256 for each partition. Unit: MB.
