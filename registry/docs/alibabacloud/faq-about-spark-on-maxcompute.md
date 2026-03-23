This topic describes frequently asked questions about using Spark.

**Category**

**FAQ**

Develop with Spark

-   [How do I perform a self-check on my project?](#section-k7t-5pu-mi9)
    
-   [What are the steps to run an ODPS Spark node on DataWorks?](#section-ow6-mgb-hzq)
    
-   [How do I debug Spark on MaxCompute locally?](#section-sjb-ums-s7x)
    
-   [How do I use Spark to access services in a VPC environment?](#section-7hn-pvu-n1s)
    
-   [How do I reference a JAR package as a resource?](#section-rio-fvx-qoa)
    
-   [How do I pass parameters using Spark?](#section-r0i-ppw-iqb)
    
-   [How do I write DataHub data that is read in a stream by Spark to MaxCompute?](#section-ls3-kpx-ugi)
    
-   [How do I migrate open source Spark code to Spark on MaxCompute?](#section-61j-ilf-ggw)
    
-   [How do I use Spark to process table data in MaxCompute?](#section-blo-349-ig6)
    
-   [How do I set the resource parallelism for Spark?](#section-048-tja-it4)
    
-   [How do I resolve out-of-memory issues?](#section-7ov-fci-es9)
    
-   [How do I resolve insufficient disk space issues?](#section-o63-md9-aps)
    
-   [How do I reference resources in a MaxCompute project?](#section-mx2-dyl-uzj)
    
-   [How do I access a VPC?](#section-s1f-poh-wo7)
    
-   [How do I access the Internet?](#section-5mq-7il-7yb)
    
-   [How do I access OSS?](#section-sub-b45-pgc)
    
-   [How do I reference a third-party Python library?](#section-388-wt9-ry5)
    
-   [How do I resolve JAR dependency conflicts?](#section-9ec-if4-o1v)
    
-   [How do I debug in local mode?](#section-9pr-qr8-894)
    

Job errors

-   [What do I do if the "User signature does not match" error occurs when I run a Spark job?](#section-n65-5pm-odh)
    
-   [What do I do if the "You have NO privilege" error occurs when I run a Spark job?](#section-b2c-d1f-d4m)
    
-   [What do I do if the "Access Denied" error occurs when I run a Spark job?](#section-xvt-wy1-hso)
    
-   [What do I do if the "No space left on device" error occurs when I run a Spark job?](#section-dc8-ah9-s3s)
    
-   [What do I do if the "Table or view not found" error occurs when I run a Spark job?](#section-ezx-8yw-ipl)
    
-   [What do I do if the "Shutdown hook called before final status was reported" error occurs when I run a Spark job?](#section-li1-7gu-943)
    
-   [What do I do if a JAR package version conflict error occurs when I run a Spark job?](#section-mbc-wfh-1ar)
    
-   [What do I do if a "ClassNotFound" error occurs when I run a Spark job?](#section-v8d-ku9-6j3)
    
-   [What do I do if the "The task is not in release range" error occurs when I run a Spark job?](#section-i21-vsb-3h3)
    
-   [What do I do if a "java.io.UTFDataFormatException" error occurs when I run a Spark job?](#section-4nz-7dd-7ox)
    
-   [What do I do if garbled Chinese characters are printed when I run a Spark job?](#section-6c7-3fy-fmg)
    
-   [What do I do if an error occurs when Spark calls a third-party task over the Internet?](#section-xc2-mf2-mxd)
    

## How do I perform a self-check on my project?

You can check the following items:

-   Check the pom.xml file.
    
    ```
    <dependency>
        <groupId>org.apache.spark</groupId>
        <artifactId>spark-core_${scala.binary.version}</artifactId>
        <version>${spark.version}</version>
        <scope>provided</scope> // The scope of the spark-xxxx_${scala.binary.version} dependency must be provided.
    </dependency>
    ```
    
-   Check the main class spark.master.
    
    ```
    val spark = SparkSession
          .builder()
          .appName("SparkPi")
          .config("spark.master", "local[4]") // If you submit a job in yarn-cluster mode, an error occurs if the local[N] configuration is in the code.
          .getOrCreate()
    ```
    
-   Check the main class Scala code.
    
    ```
    object SparkPi { // This must be an object. If you define this as a class when you create the file in IntelliJ IDEA, the main function cannot be loaded.
      def main(args: Array[String]) {
        val spark = SparkSession
          .builder()
          .appName("SparkPi")
          .getOrCreate()
    ```
    
-   Check the main class code configuration.
    
    ```
    val spark = SparkSession
          .builder()
          .appName("SparkPi")
          .config("key1", "value1")
          .config("key2", "value2")
          .config("key3", "value3")
          ...  // If you hard-code MaxCompute configurations in the code for a local test, some configurations do not take effect.
          .getOrCreate()
    ```
    
    **Note**
    
    When you submit jobs in yarn-cluster mode, add all configuration items to the spark-defaults.conf file.
    

## What are the steps to run an ODPS Spark node on DataWorks?

1.  Edit and package the Spark code in your local Python environment. The Python environment must be Python 2.7.
    
2.  Upload the resource package to DataWorks. For more information, see [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#task-2509662).
    
3.  Create an ODPS Spark node on DataWorks. For more information, see [Create an ODPS Spark node](/help/en/dataworks/user-guide/create-an-odps-spark-node#task-2512261).
    
4.  Write the code and run the node. You can view the result in the DataWorks console.
    

## How do I debug Spark on MaxCompute locally?

You can use IntelliJ IDEA to debug locally. For more information, see [Set up a Linux development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311).

## How do I use Spark to access services in a VPC environment?

For more information about how to use Spark to access services in a VPC, see [Access VPC-connected instances from Spark](/help/en/maxcompute/access-instances-in-a-vpc-from-spark-on-maxcompute#concept-2447772).

## How do I reference a JAR package as a resource?

You can use the `spark.hadoop.odps.cupid.resources` parameter to specify the resources that you want to reference. Resources can be shared by multiple projects. Set the relevant permissions to ensure data security. The following example shows a sample configuration.

```
spark.hadoop.odps.cupid.resources = projectname.xx0.jar,projectname.xx1.jar 
```

## How do I pass parameters using Spark?

For more information about how to pass parameters, see [Spark on DataWorks](https://github.com/aliyun/MaxCompute-Spark/wiki/17.-Spark-on-Dataworks).

## How do I write DataHub data that is read in a stream by Spark to MaxCompute?

For sample code, see [DataHub](https://github.com/aliyun/MaxCompute-Spark/tree/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/streaming/datahub?spm=a2c6h.13066369.0.0.4f006a4d4HgrLv).

## How do I migrate open source Spark code to Spark on MaxCompute?

You can select a migration solution based on your job scenario:

-   The job does not need to access MaxCompute tables or OSS.
    
    You can directly run the existing JAR package. For more information, see [Set up a Linux development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311). The dependency for Spark or Hadoop must be set to provided.
    
-   The job needs to access MaxCompute tables.
    
    Configure the related dependencies and then repackage them. For more information, see [Set up a Linux development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311).
    
-   The job needs to access OSS.
    
    Obtain the packages required to access OSS and [establish a network connection](/help/en/maxcompute/access-instances-in-a-vpc-from-spark-on-maxcompute#concept-2447772). Then, recompile and package the application to deploy and run it. For more information, see [Set up a Linux development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311).
    

## How do I use Spark to process table data in MaxCompute?

Spark on MaxCompute supports Local, Cluster, and DataWorks running modes. The configurations for the three modes are different. For more information, see [Running modes](/help/en/maxcompute/running-modes#concept-e1h-35c-kgb).

## How do I set the resource parallelism for Spark?

The resource parallelism of Spark is determined by the number of executors and the number of CPU cores per executor. The maximum number of tasks that can be executed in parallel is `Number of executors × Number of CPU cores per executor`.

-   Number of executors
    
    -   Parameter: `spark.executor.instances`.
        
    -   Description: Sets the number of executors that the job requests.
        
-   Number of CPU cores per executor
    
    -   Parameter: `spark.executor.cores`.
        
    -   Description: Sets the number of CPU cores for each executor process. This parameter determines the capability of each executor process to execute tasks in parallel. Each CPU core can execute only one task at a time. We recommend that you set the number of CPU cores for each executor to a value from `2 to 4`.
        

## How do I resolve out-of-memory issues?

-   Common errors:
    
    -   `java.lang.OutOfMemoryError: Java heap space`.
        
    -   `java.lang.OutOfMemoryError: GC overhead limit exceeded`.
        
    -   `Cannot allocate memory`.
        
    -   `The job has been killed by "OOM Killer", please check your job's memory usage`.
        
-   Solutions:
    
    -   Set the executor memory.
        
        -   Parameter: `spark.executor.memory`.
            
        -   Parameter description: This parameter specifies the memory size of each executor. We recommend that you maintain a `1:4` ratio of executor memory to `spark.executor.cores`. For example, if `spark.executor.cores` is set to `1`, you can set `spark.executor.memory` to `4 GB`. If an executor throws a `java.lang.OutOfMemoryError` exception, you need to increase the value of this parameter.
            
    -   Set the executor off-heap memory.
        
        -   Parameter: `spark.executor.memoryOverhead`.
            
        -   Description: Specifies the extra memory for each executor. This memory is mainly used for overheads such as the JVM itself, strings, and NIO buffers. The default size is `spark.executor.memory × 0.1`, with a minimum of 384 MB. You do not usually need to set this parameter. If a `Cannot allocate memory` or OOM Killer error appears in the executor log, you can increase this value.
            
    -   Set the driver memory.
        
        -   Parameter: `spark.driver.memory`.
            
        -   Parameter description: This parameter specifies the memory size of the driver. We recommend a ratio of `1:4` between `spark.driver.cores` and the driver memory. If the driver needs to collect a large amount of data or the `java.lang.OutOfMemoryError` error is reported, you need to increase this value.
            
    -   Set the driver off-heap memory.
        
        -   Parameter: `spark.driver.memoryOverhead`.
            
        -   Description: Specifies the extra memory of the driver. The default size is `spark.driver.memory × 0.1`, with a minimum of 384 MB. If a `Cannot allocate memory` error appears in the driver log, you can increase this value.
            

## How do I resolve insufficient disk space issues?

-   Symptom
    
    The `No space left on device` error occurs.
    
-   Cause: This error indicates that the local disk space is insufficient. The error usually occurs in an executor and causes the executor to exit.
    
-   Solutions:
    
    -   Increase the disk size.
        
        -   Parameter: `spark.hadoop.odps.cupid.disk.driver.device_size`.
            
        -   Default value: 20 GB.
            
        -   Description: By default, 20 GB of local disk space is provided for the driver and each executor. If the disk space is insufficient, you can increase this parameter value. Note that this parameter takes effect only if it is configured in the `spark-defaults.conf` file or in the configuration items of DataWorks.
            
    -   Increase the number of executors.
        
        If this error persists after you increase the local disk size to 100 GB, the shuffle data of a single executor has exceeded the upper limit. This may be caused by data skew. In this case, you need to repartition the data. The error may also occur because the data volume is too large. In this case, you need to adjust the `spark.executor.instances` parameter to increase the number of executors.
        

## How do I reference resources in a MaxCompute project?

Spark on MaxCompute supports the following two methods to access resources in MaxCompute:

-   Directly reference MaxCompute resources by configuring parameters.
    
    -   Parameter: `spark.hadoop.odps.cupid.resources`.
        
    -   Format: `<projectname>.<resourcename>[:<newresourcename>]`.
        
    -   Description: This configuration item specifies the MaxCompute resources required to run the task. For more information, see [Resource operations](/help/en/maxcompute/user-guide/resource-operations#concept-pps-h1f-vdb). The specified resources are downloaded to the current working directory of the driver and executors. A task can reference multiple resources. You can separate the resources with commas (,). After a resource is downloaded to the working directory, its default name is `<projectname>.<resourcename>`. You can rename the resource using the format `<projectname>.<resourcename>:<newresourcename>`. Note that this configuration item takes effect only if it is configured in the `spark-defaults.conf` file or in the configuration items of DataWorks.
        
    -   Example:
        
        ```
        ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
        
        ## Reference multiple resources at the same time: Reference both public.python-python-2.7-ucs4.zip and public.myjar.jar.
        spark.hadoop.odps.cupid.resources=public.python-python-2.7-ucs4.zip,public.myjar.jar
        
        ## Renaming example: Reference public.myjar.jar and rename it to myjar.jar.
        spark.hadoop.odps.cupid.resources=public.myjar.jar:myjar.jar
        ```
        
-   Reference resources in DataWorks.
    
    -   Add resources from MaxCompute to the business flow on the Data Development pane of DataWorks. For more information, see [Manage MaxCompute resources](/help/en/dataworks/user-guide/manage-maxcompute-resources#task-2368888).
        
    -   In the ODPS Spark node of DataWorks, select JAR, file, and archive resources.
        
    
    **Note**
    
    This method uploads resources when the task runs. For large resources, use Method 1.
    

## How do I access a VPC?

Spark on MaxCompute supports the following method to access services in an Alibaba Cloud VPC:

-   Access over an ENI connection
    
    -   Limits
        
        You can use an elastic network interface (ENI) to connect to a VPC in the same region. If your job needs to access multiple VPCs, you can connect the VPC that is already connected through the ENI to other VPCs.
        
    -   Procedure:
        
        1.  Enable the ENI-based leased line connection. For more information, see [Access VPC-connected instances from Spark](/help/en/maxcompute/access-instances-in-a-vpc-from-spark-on-maxcompute#section-3q4-399-bgu).
            
        2.  In the service that you want to access, add a whitelist to authorize the security group that represents MaxCompute (the security group you provided in the previous step) to access specific ports.
            
            For example, to access ApsaraDB RDS, you must add a rule in RDS to allow access from the security group created in Step 1. If you cannot add a security group for the service that you want to access and can only add IP addresses, you must add the vSwitch CIDR block used in Step 1.
            
        3.  Configure the `spark.hadoop.odps.cupid.eni.info` and `spark.hadoop.odps.cupid.eni.enable` parameters for the job.
            
            The following example shows a sample configuration. Replace [RegionID](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-nwo-3ho-q3v) and VPCID with your actual values.
            
            ```
            ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
            
            spark.hadoop.odps.cupid.eni.enable = true
            spark.hadoop.odps.cupid.eni.info = [regionid]:[vpcid]
            ```
            

## How do I access the Internet?

Spark on MaxCompute supports the following two methods to access public services:

-   Access over an ENI connection
    
    1.  Enable the ENI-based leased line connection. For more information, see [Access VPC-connected instances from Spark](/help/en/maxcompute/access-instances-in-a-vpc-from-spark-on-maxcompute#section-3q4-399-bgu).
        
    2.  Make sure the VPC for the leased line can access the Internet. For more information, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet#task-1944285).
        
    3.  Use the following sample commands to configure a public access whitelist at the Spark job level and enable the ENI. Replace [RegionID](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-nwo-3ho-q3v) and VPCID with your actual values.
        
        ```
         ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
        spark.hadoop.odps.cupid.internet.access.list=aliyundoc.com:443
        spark.hadoop.odps.cupid.eni.enable=true
        spark.hadoop.odps.cupid.eni.info=[region]:[vpcid]
        ```
        
-   Access through SmartNAT
    
    Limit: This method is not supported for Spark 3.4 and later versions.
    
    Assume that you need to access `https://aliyundoc.com:443`. You can follow these steps:
    
    1.  You can search for the DingTalk group ID 11782920 to join the MaxCompute developer community. Contact the MaxCompute technical support team to add `https://aliyundoc.com:443` to `odps.security.outbound.internetlist`.
        
    2.  Use the following sample commands to configure a public access whitelist at the Spark job level and enable SmartNAT.
        
    
    ```
    ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
    spark.hadoop.odps.cupid.internet.access.list=aliyundoc.com:443
    spark.hadoop.odps.cupid.smartnat.enable=true
    ```
    

## How do I access OSS?

Spark on MaxCompute supports accessing Alibaba Cloud OSS through the Jindo software development kit (SDK). You must configure the following information:

-   Configure the Jindo SDK and an OSS endpoint.
    
    The following code provides a sample command.
    
    ```
    ## Reference the JindoSDK JAR package. The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
    spark.hadoop.odps.cupid.resources=public.jindofs-sdk-3.7.2.jar
    
    ## Set the OSS implementation class.
    spark.hadoop.fs.AbstractFileSystem.oss.impl=com.aliyun.emr.fs.oss.OSS
    spark.hadoop.fs.oss.impl=com.aliyun.emr.fs.oss.JindoOssFileSystem
    
    ## Set the OSS Endpoint.
    spark.hadoop.fs.oss.endpoint=oss-[YourRegionId]-internal.aliyuncs.com
    
    ## You do not usually need to set a network whitelist for the OSS endpoint. If the network is disconnected when the job runs, you can add a whitelist using the following parameter.
    ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
    spark.hadoop.odps.cupid.trusted.services.access.list=[YourBucketName].oss-[YourRegionId]-internal.aliyuncs.com
    ```
    
    **Note**
    
    When Spark on MaxCompute runs in cluster mode, only internal OSS endpoints are supported. Public OSS endpoints are not supported. For more information about the mappings between OSS regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   Configure OSS authentication information. The Jindo SDK supports the following two authentication methods.
    
    -   Use an AccessKey pair for authentication. The following code shows a sample configuration:
        
        ```
        val conf = new SparkConf()
          .setAppName("jindo-sdk-demo")
          # Configure access key authentication parameters.
          .set("spark.hadoop.fs.oss.accessKeyId", "<YourAccessKeyId>")
          .set("spark.hadoop.fs.oss.accessKeySecret", "<YourAccessKeySecret>")
        ```
        
    -   Use a Security Token Service (STS) token for authentication. Follow these steps:
        
        1.  Click [One-click Authorization](https://ram.console.alibabacloud.com/?spm=a2c4g.11186623.2.9.3bf06a064lrBYN#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunODPSDefaultRole%22,%20%22TemplateId%22:%20%22DefaultRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fram.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22ODPS%22%7D) to authorize the MaxCompute project to access OSS resources in the current Alibaba Cloud account using an STS token.
            
            **Note**
            
            You can use one-click authorization only if the MaxCompute project and the OSS resources are owned by the same Alibaba Cloud account.
            
        2.  Configure and enable the local HTTP service.
            
            The following code provides a sample command.
            
            ```
            ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
            spark.hadoop.odps.cupid.http.server.enable = true
            ```
            
        3.  Configure the authentication information.
            
            The following code provides a sample command.
            
            ```
            val conf = new SparkConf()
              .setAppName("jindo-sdk-demo")
              # Configure cloud service role authentication.
              # ${aliyun-uid} is the UID of the Alibaba Cloud account.
              # ${role-name} is the role name.
              .set("spark.hadoop.fs.jfs.cache.oss.credentials.provider", "com.aliyun.emr.fs.auth.CustomCredentialsProvider")
              .set("spark.hadoop.aliyun.oss.provider.url", "http://localhost:10011/sts-token-info?user_id=${aliyun-uid}&role=${role-name}")
            ```
            

## How do I reference a third-party Python library?

-   Symptom: The `No module named 'xxx'` exception is thrown when a PySpark job runs.
    
-   Cause: The PySpark job depends on a third-party Python library that is not installed in the default Python environment of the MaxCompute platform.
    
-   Solution: You can use one of the following methods to add third-party library dependencies.
    
    -   Use the public Python environment of MaxCompute.
        
        You only need to add the following configurations to the DataWorks configuration items or the `spark-defaults.conf` file. The following code shows the configurations for different Python versions:
        
        -   Python 2 configuration
            
            ```
            ## Python 2.7.13 configuration
            ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
            spark.hadoop.odps.cupid.resources = public.python-2.7.13-ucs4.tar.gz
            spark.pyspark.python = ./public.python-2.7.13-ucs4.tar.gz/python-2.7.13-ucs4/bin/python
            
            ## List of third-party libraries
            https://odps-repo.oss-cn-hangzhou.aliyuncs.com/pyspark/py27/py27-default_req.txt
            ```
            
        -   Python 3 configuration
            
            ```
            ## Python 3.7.9 configuration
            ## The following configurations must be added to the DataWorks configuration items or the spark-defaults.conf file.
            spark.hadoop.odps.cupid.resources = public.python-3.7.9-ucs4.tar.gz
            spark.pyspark.python = ./public.python-3.7.9-ucs4.tar.gz/python-3.7.9-ucs4/bin/python3
            
            ## List of third-party libraries
            https://odps-repo.oss-cn-hangzhou.aliyuncs.com/pyspark/py37/py37-default_req.txt
            ```
            
        
    -   Upload a single WHEEL package.
        
        This method is suitable for scenarios where there are few and simple third-party Python dependencies. The following is a sample command:
        
        ```
        ## Rename the wheel package to a zip package. For example, rename the pymysql wheel package to pymysql.zip.
        ## Upload the renamed zip package (file type: archive).
        ## Reference the zip package on the DataWorks Spark node (archive type).
        ## Add the following configurations to the spark-defaults.conf file or DataWorks configuration items before you import the package.
        ## Configuration
        spark.executorEnv.PYTHONPATH=pymysql
        spark.yarn.appMasterEnv.PYTHONPATH=pymysql
        
        ## Upload code
        import pymysql
        ```
        
    -   Upload a complete custom Python environment.
        
        This method is suitable for scenarios with complex dependencies or where a custom Python version is required. You need to use a Docker container to package and upload the complete Python environment. For more information, see [Package dependencies](/help/en/maxcompute/develop-a-spark-on-maxcompute-application-by-using-pyspark#section-0q7-5da-5vt).
        

## How do I resolve JAR dependency conflicts?

-   Symptom: A `NoClassDefFoundError or NoSuchMethodError` exception is thrown during runtime.
    
-   Cause: This issue usually occurs because the version of a third-party dependency in the JAR package conflicts with the Spark dependency version. You can check the uploaded main JAR package and third-party dependency libraries to exclude the conflicting dependencies.
    
-   Solution:
    
    -   Perform a self-check on the pom.xml file.
        
        -   Set the Spark community edition dependency to Provided.
            
        -   Set the Hadoop community edition dependency to Provided.
            
        -   Set the ODPS/Cupid dependency to Provided.
            
    -   Exclude conflicting dependencies.
        
    -   Use `maven-shade-plugin relocation` to resolve package conflicts.
        

## How do I debug in local mode?

-   Spark 2.3.0
    
    1.  Add the following configurations to the spark-defaults.conf file.
        
        ```
        spark.hadoop.odps.project.name =<Yourprojectname>
        spark.hadoop.odps.access.id =<YourAccessKeyID>
        spark.hadoop.odps.access.key =<YourAccessKeySecret>
        spark.hadoop.odps.end.point =<endpoint>
        ```
        
    2.  Run the task in local mode.
        
        ```
        ./bin/spark-submit --master local spark_sql.py
        ```
        
-   Spark 2.4.5/Spark 3.1.1
    
    1.  Create a file named `odps.conf` and add the following configurations to the file.
        
        ```
        odps.access.id=<YourAccessKeyID>
        odps.access.key=<YourAccessKeySecret>
        odps.end.point=<endpoint>
        odps.project.name=<Yourprojectname>
        ```
        
    2.  Add an environment variable that points to the location of the `odps.conf` file.
        
        ```
        export ODPS_CONF_FILE=/path/to/odps.conf
        ```
        
    3.  Run the task in local mode.
        
        ```
        ./bin/spark-submit --master local spark_sql.py
        ```
        
-   Common errors
    
    -   Error 1:
        
        -   Error messages:
            
            -   `Incomplete config, no accessId or accessKey`.
                
            -   `Incomplete config, no odps.service.endpoint`.
                
        -   Cause: EventLog is enabled in local mode.
            
        -   Solution: Delete the `spark.eventLog.enabled=true` parameter from the `spark-defaults.conf` file.
            
    -   Error 2:
        
        -   Error message: `Cannot create CupidSession with empty CupidConf`.
            
        -   Cause: Spark 2.4.5 or Spark 3.1.1 cannot read information such as `odps.access.id`.
            
        -   Solution: Create the `odps.conf` file, add the environment variable, and then run the task.
            
    -   Error 3:
        
        -   Error message: `java.util.NoSuchElementException: odps.access.id`.
            
        -   Cause: Spark 2.3.0 cannot read information such as `odps.access.id`.
            
        -   Solution: Add configuration information such as `spark.hadoop.odps.access.id` to the `spark-defaults.conf` file.
            

## What do I do if the "User signature does not match" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    Stack:
    com.aliyun.odps.OdpsException: ODPS-0410042:
    Invalid signature value - User signature does not match
    ```
    
-   Cause
    
    The identity verification failed. The AccessKey ID or AccessKey secret is incorrect.
    
-   Solution
    
    Check whether the AccessKey ID and AccessKey secret in the spark-defaults.conf file are consistent with the **AccessKey ID** and **AccessKey Secret** in [User Information Management](https://account.aliyun.com/login/login.htm?oauth_callback=https://usercenter2-intl.console.alibabacloud.com/) in the Alibaba Cloud console. If they are not consistent, modify them to be consistent.
    

## What do I do if the "You have NO privilege" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    Stack:
    com.aliyun.odps.OdpsException: ODPS-0420095: 
    Access Denied - Authorization Failed [4019], You have NO privilege 'odps:CreateResource' on {acs:odps:*:projects/*}
    ```
    
-   Causes
    
    You do not have the required permission.
    
-   Solution
    
    The project owner must grant the Read and Create permissions on the resource. For more information about authorization, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    

## What do I do if the "Access Denied" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    Exception in thread "main" org.apache.hadoop.yarn.exceptions.YarnException: com.aliyun.odps.OdpsException: ODPS-0420095: Access Denied - The task is not in release range: CUPID
    ```
    
-   Causes
    
    -   Cause 1: The AccessKey ID or AccessKey secret configured in the spark-defaults.conf file is incorrect.
        
    -   Cause 2: Spark on MaxCompute is not available in the region where the project resides.
        
-   Solutions
    
    -   Solution for Cause 1: Check the configuration in the spark-defaults.conf file. Modify the AccessKey ID and AccessKey secret to the correct values. For more information, see [Set up a Linux development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311).
        
    -   Solution for Cause 2: Check whether Spark on MaxCompute is available in the region where the project resides, or join the DingTalk group 21969532 (Spark on MaxCompute support) for consultation.
        

## What do I do if the "No space left on device" error occurs when I run a Spark job?

Spark uses disks for local storage. Shuffle data and data that overflows from the BlockManager are stored on these disks. The disk size is controlled by the spark.hadoop.odps.cupid.disk.driver.device\_size parameter. The default size is 20 GB and the maximum size is 100 GB. If the error persists after you increase the disk size to 100 GB, you need to analyze the cause. A common cause is data skew, where data is concentrated in a few blocks during the shuffle or cache process. In this case, you can decrease the number of cores per executor (spark.executor.cores) and increase the number of executors (spark.executor.instances).

## What do I do if the "Table or view not found" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    Table or view not found:xxx
    ```
    
-   Causes
    
    -   Cause 1: The table or view does not exist.
        
    -   Cause 2: The Hive catalog configuration is enabled.
        
-   Solutions
    
    -   Solution for Cause 1: Create the table.
        
    -   Solution for Cause 2: Remove the catalog configuration. For example, in the following code, remove `enableHiveSupport()`.
        
        ```
        spark = SparkSession.builder.appName(app_name).enableHiveSupport().getOrCreate()
        ```
        

## What do I do if the "Shutdown hook called before final status was reported" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job:
    
    ```
    App Status: SUCCEEDED, diagnostics: Shutdown hook called before final status was reported.
    ```
    
-   Cause
    
    The main application submitted to the cluster did not request cluster resources through the ApplicationMaster (AM). For example, a SparkContext was not created, or spark.master was set to local in the code.
    

## What do I do if a JAR package version conflict error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    User class threw exception: java.lang.NoSuchMethodError
    ```
    
-   Cause
    
    A JAR package version conflict or class error occurred.
    
-   Solution
    
    1.  In the $SPARK\_HOME/jars path, find the JAR package where the class that causes the error is located. Then, run the following command to locate the coordinates and version of the third-party library.
        
        ```
        grep <AbnormalClassName> $SPARK_HOME/jars/*.jar
        ```
        
    2.  In the root directory of the Spark job, run the following command to view all dependencies of the entire project.
        
        ```
        mvn dependency:tree
        ```
        
    3.  After you find the corresponding dependency, run the following command to exclude the conflicting package.
        
        ```
        maven dependency exclusions
        ```
        
    4.  Recompile and submit the code.
        

## What do I do if a "ClassNotFound" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    java.lang.ClassNotFoundException: xxxx.xxx.xxxxx
    ```
    
-   Cause
    
    The class does not exist or the dependency is configured incorrectly.
    
-   Solution
    
    1.  Run the following command to check whether the class definition exists in the JAR package that you submitted.
        
        ```
        jar -tf <JobJARFile> | grep <ClassName>
        ```
        
    2.  Check whether the dependencies in the pom.xml file are correct.
        
    3.  Use the Shade method to submit the JAR package.
        

## What do I do if the "The task is not in release range" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    The task is not in release range: CUPID
    ```
    
-   Cause
    
    The Spark on MaxCompute service is not enabled in the region where the project resides.
    
-   Solution
    
    Select a region where the Spark on MaxCompute service is enabled.
    

## What do I do if a "java.io.UTFDataFormatException" error occurs when I run a Spark job?

-   Symptom
    
    The following error is returned when you run a Spark job.
    
    ```
    java.io.UTFDataFormatException: encoded string too long: 2818545 bytes 
    ```
    
-   Solution
    
    Adjust the value of the spark.hadoop.odps.cupid.disk.driver.device\_size parameter in the spark-defaults.conf file. The default value is 20 GB and the maximum value is 100 GB.
    

## What do I do if garbled Chinese characters are printed when I run a Spark job?

You can add the following configurations.

```
"--conf" "spark.executor.extraJavaOptions=-Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8"
"--conf" "spark.driver.extraJavaOptions=-Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8"
```

## What do I do if an error occurs when Spark calls a third-party task over the Internet?

Spark cannot directly call third-party tasks on the Internet because it does not have a direct connection.

You can build an Nginx reverse proxy in a VPC to access the Internet through the proxy. Spark supports direct access to a VPC. For more information, see [Access VPC-connected instances from Spark](/help/en/maxcompute/access-instances-in-a-vpc-from-spark-on-maxcompute#concept-2447772).
