This topic describes how to configure Spark 2.x dependencies and provides some examples.

## Configure dependencies for Spark 2.x

If you want to submit your Spark 2.x application by using Spark on MaxCompute, you must add the following dependencies to the pom.xml file. For more information about pom.xml, see [pom.xml](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/pom.xml).

```
<properties>
    <spark.version>2.3.0</spark.version>
    <cupid.sdk.version>3.3.8-public</cupid.sdk.version>
    <scala.version>2.11.8</scala.version>
    <scala.binary.version>2.11</scala.binary.version>
</properties>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-core_${scala.binary.version}</artifactId>
    <version>${spark.version}</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-sql_${scala.binary.version}</artifactId>
    <version>${spark.version}</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-mllib_${scala.binary.version}</artifactId>
    <version>${spark.version}</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.spark</groupId>
    <artifactId>spark-streaming_${scala.binary.version}</artifactId>
    <version>${spark.version}</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>cupid-sdk</artifactId>
    <version>${cupid.sdk.version}</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>hadoop-fs-oss</artifactId>
    <version>${cupid.sdk.version}</version>
</dependency>
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>odps-spark-datasource_${scala.binary.version}</artifactId>
    <version>${cupid.sdk.version}</version>
</dependency>
<dependency>
    <groupId>org.scala-lang</groupId>
    <artifactId>scala-library</artifactId>
    <version>${scala.version}</version>
</dependency>
<dependency>
    <groupId>org.scala-lang</groupId>
    <artifactId>scala-actors</artifactId>
    <version>${scala.version}</version>
</dependency>
```

In the preceding code, set the scope parameter based on the following instructions:

-   Set scope to provided for all packages that are released in the Apache Spark community, such as spark-core and spark-sql.
    
-   Set scope to compile for the odps-spark-datasource module.
    

## WordCount example (Scala)

-   Sample code
    
    [WordCount.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/WordCount.scala)
    
-   How to commit
    
    ```
    cd /path/to/MaxCompute-Spark/spark-2.x
    mvn clean package
    
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class \
        com.aliyun.odps.spark.examples.WordCount \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Example of reading data from or writing data to a MaxCompute table (Scala)

-   Sample code
    
    [SparkSQL.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/sparksql/SparkSQL.scala)
    
-   How to commit
    
    ```
    cd /path/to/MaxCompute-Spark/spark-2.x
    mvn clean package
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.sparksql.SparkSQL \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## GraphX PageRank example (Scala)

-   Sample code
    
    [PageRank.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/graphx/PageRank.scala)
    
-   How to commit
    
    ```
    cd /path/to/MaxCompute-Spark/spark-2.x
    mvn clean package
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.graphx.PageRank \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## MLlib KMeans-ON-OSS example (Scala)

For information about how to configure `spark.hadoop.fs.oss.ststoken.roleArn` and `spark.hadoop.fs.oss.endpoint`, see [OSS access notes](https://github.com/aliyun/MaxCompute-Spark/wiki/08.-Oss-Access%E6%96%87%E6%A1%A3%E8%AF%B4%E6%98%8E).

-   Sample code
    
    [KmeansModelSaveToOss.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/mllib/KmeansModelSaveToOss.scala)
    
-   How to commit
    
    ```
    # Edit the code. 
    val modelOssDir = "oss://bucket/kmeans-model" // Enter the path of the OSS bucket. 
    val spark = SparkSession
      .builder()
      .config("spark.hadoop.fs.oss.credentials.provider", "org.apache.hadoop.fs.aliyun.oss.AliyunStsTokenCredentialsProvider")
      .config("spark.hadoop.fs.oss.ststoken.roleArn", "acs:ram::****:role/aliyunodpsdefaultrole")
      .config("spark.hadoop.fs.oss.endpoint", "oss-cn-hangzhou-zmf.aliyuncs.com")
      .appName("KmeansModelSaveToOss")
      .getOrCreate()
    
    cd /path/to/MaxCompute-Spark/spark-2.x
    mvn clean package
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.mllib.KmeansModelSaveToOss \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## OSS UnstructuredData example (Scala)

For information about how to configure `spark.hadoop.fs.oss.ststoken.roleArn` and `spark.hadoop.fs.oss.endpoint`, see [OSS access notes](https://github.com/aliyun/MaxCompute-Spark/wiki/08.-Oss-Access%E6%96%87%E6%A1%A3%E8%AF%B4%E6%98%8E).

-   Sample code
    
    [SparkUnstructuredDataCompute.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/oss/SparkUnstructuredDataCompute.scala)
    
-   How to commit
    
    ```
    # Edit the code. 
    val pathIn = "oss://bucket/inputdata/" // Enter the path of the OSS bucket. 
    val spark = SparkSession
      .builder()
      .config("spark.hadoop.fs.oss.credentials.provider", "org.apache.hadoop.fs.aliyun.oss.AliyunStsTokenCredentialsProvider")
      .config("spark.hadoop.fs.oss.ststoken.roleArn", "acs:ram::****:role/aliyunodpsdefaultrole")
      .config("spark.hadoop.fs.oss.endpoint", "oss-cn-hangzhou-zmf.aliyuncs.com")
      .appName("SparkUnstructuredDataCompute")
      .getOrCreate()
    
    cd /path/to/MaxCompute-Spark/spark-2.x
    mvn clean package
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.oss.SparkUnstructuredDataCompute \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## SparkPi example (Scala)

-   Sample code
    
    [SparkPi.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/SparkPi.scala)
    
-   How to commit
    
    ```
    cd /path/to/MaxCompute-Spark/spark-2.x
    mvn clean package
    
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.SparkPi \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Spark Streaming LogHub example (Scala)

-   Sample code
    
    [LogHubStreamingDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/streaming/loghub/LogHubStreamingDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.streaming.loghub.LogHubStreamingDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Example of using Spark Streaming LogHub to write data to MaxCompute (Scala)

-   Sample code
    
    [LogHub2OdpsDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/streaming/loghub/LogHub2OdpsDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.streaming.loghub.LogHub2OdpsDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Spark Streaming DataHub example (Scala)

-   Sample code
    
    [DataHubStreamingDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/streaming/datahub/DataHubStreamingDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.streaming.datahub.DataHubStreamingDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Example of using Spark Streaming DataHub to write data to MaxCompute (Scala)

-   Sample code
    
    [DataHub2OdpsDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/streaming/datahub/DataHub2OdpsDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.streaming.datahub.DataHub2OdpsDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Spark Streaming Kafka example (Scala)

-   Sample code
    
    [KafkaStreamingDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/streaming/kafka/KafkaStreamingDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.streaming.kafka.KafkaStreamingDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

**Note**

For more information, see [Spark on MaxCompute](https://github.com/aliyun/MaxCompute-Spark/wiki).

## Spark StructuredStreaming DataHub example (Scala)

-   Sample code
    
    [DatahubStructuredStreamingDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/structuredStreaming/datahub/DatahubStructuredStreamingDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.structuredstreaming.datahub.DatahubStructuredStreamingDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Spark StructuredStreaming Kafka example (Scala)

-   Sample code
    
    [KafkaStructuredStreamingDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/structuredStreaming/kafka/KafkaStructuredStreamingDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.structuredstreaming.kafka.KafkaStructuredStreamingDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Spark StructuredStreaming LogHub example (Scala)

-   Sample code
    
    [LoghubStructuredStreamingDemo.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/scala/com/aliyun/odps/spark/examples/structuredStreaming/loghub/LoghubStructuredStreamingDemo.scala)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.structuredstreaming.loghub.LoghubStructuredStreamingDemo \
        /path/to/MaxCompute-Spark/spark-2.x/target/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Example of using PySpark to read data from or write data to a MaxCompute table (Python)

-   Sample code
    
    [spark\_sql.py](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/python/spark_sql.py)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --jars /path/to/odps-spark-datasource_2.11-3.3.8-public.jar \
        /path/to/MaxCompute-Spark/spark-2.x/src/main/python/spark_sql.py
    ```
    

## Example of using PySpark to write data to OSS (Python)

-   Sample code
    
    [spark\_oss.py](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/python/spark_oss.py)
    
-   How to commit
    
    ```
    # For information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    # For information about OSS configurations, see OSS access notes. 
    
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --jars /path/to/spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar \
        /path/to/MaxCompute-Spark/spark-2.x/src/main/python/spark_oss.py
    # Compile Spark 2.x to obtain the spark-examples_2.11-1.0.0-SNAPSHOT-shaded.jar package.
    ```
    

## Spark SQL example (Java)

For more information about Spark SQL Java sample code, see [JavaSparkSQL.java](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-2.x/src/main/java/com/aliyun/odps/spark/examples/sparksql/JavaSparkSQL.java).

## Example of reading data from MaxCompute and writing data to HBase

Use IntelliJ IDEA to write code to read data from MaxCompute and write the data to HBase.

-   Sample code
    
    ```
    object McToHbase {
      def main(args: Array[String]) {
        val spark = SparkSession
          .builder()
          .appName("spark_sql_ddl")
          .config("spark.sql.catalogImplementation", "odps")
          .config("spark.hadoop.odps.end.point","http://service.cn.maxcompute.aliyun.com/api")
          .config("spark.hadoop.odps.runtime.end.point","http://service.cn.maxcompute.aliyun-inc.com/api")
          .getOrCreate()
          val sc = spark.sparkContext
          val config = HBaseConfiguration.create()
          val zkAddress = ""
          config.set(HConstants.ZOOKEEPER_QUORUM, zkAddress);
          val jobConf = new JobConf(config)
          jobConf.setOutputFormat(classOf[TableOutputFormat])
          jobConf.set(TableOutputFormat.OUTPUT_TABLE,"test")
    
        try{
          import spark._
          spark.sql("select '7', 'long'").rdd.map(row => {
            val id = row(0).asInstanceOf[String]
            val name = row(1).asInstanceOf[String]
            val put = new Put(Bytes.toBytes(id))
            put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("a"), Bytes.toBytes(name))
            (new ImmutableBytesWritable, put)
        }).saveAsHadoopDataset(jobConf)
      } finally {
        sc.stop()
      }
    
      }
    }
    ```
    
-   How to commit: Use IntelliJ IDEA to commit and run the sample code. For more information, see [Running modes of Spark on MaxCompute](https://github.com/aliyun/MaxCompute-Spark/wiki/02.-%E8%BF%90%E8%A1%8C%E6%A8%A1%E5%BC%8F).
    

## Examples of reading data from and writing data to OSS objects

Use IntelliJ IDEA or DataWorks to read data from and write the data to OSS objects.

-   Sample code
    
    -   Example 1: Sample code for the local mode
        
        ```
        package com.aliyun.odps.spark.examples
        import java.io.ByteArrayInputStream
        import org.apache.spark.sql.SparkSession
        
        object SparkOSS {
          def main(args: Array[String]) {
            val spark = SparkSession
              .builder()
              .config("spark.master", "local[4]") // The code can run after you set spark.master to local[N]. N indicates the number of concurrent Spark jobs. 
              .config("spark.hadoop.fs.oss.accessKeyId", "")
              .config("spark.hadoop.fs.oss.accessKeySecret", "")
              .config("spark.hadoop.fs.oss.endpoint", "oss-cn-beijing.aliyuncs.com")
              .appName("SparkOSS")
              .getOrCreate()
        
            val sc = spark.sparkContext
            try {
              // Read data from OSS objects. 
              val pathIn = "oss://spark-oss/workline.txt"
              val inputData = sc.textFile(pathIn, 5)
                    // Write Resilient Distributed Datasets (RDD). 
              inputData.repartition(1).saveAsTextFile("oss://spark-oss/user/data3")
        
            } finally {
              sc.stop()
            }
          }
        }
        ```
        
        **Note**
        
        Before you run the sample code, check whether the `hadoop-fs-oss` dependency is added. If the dependency is not added, an error is returned.
        
    -   Example 2: Sample code for the local mode
        
        ```
        package com.aliyun.odps.spark.examples
        import java.io.ByteArrayInputStream
        import com.aliyun.oss.{OSSClientBuilder,OSSClient}
        import org.apache.spark.sql.SparkSession
        
        object SparkOSS {
          def main(args: Array[String]) {
            val spark = SparkSession
              .builder()
              .config("spark.master", "local[4]") // The code can run after you set spark.master to local[N]. N indicates the number of concurrent Spark jobs. 
              .config("spark.hadoop.fs.oss.accessKeyId", "")
              .config("spark.hadoop.fs.oss.accessKeySecret", "")
              .config("spark.hadoop.fs.oss.endpoint", "oss-cn-beijing.aliyuncs.com")
              .appName("SparkOSS")
              .getOrCreate()
        
            val sc = spark.sparkContext
            try {
              // Read data from OSS objects. 
              val pathIn = "oss://spark-oss/workline.txt"
              val inputData = sc.textFile(pathIn, 5)
              val cnt = inputData.count
              inputData.count()
              println(s"count: $cnt")
        
              // Write data to OSS objects. 
              // The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console.
        		  // In this example, the AccessKey ID and AccessKey secret are configured as environment variables. You can also save your AccessKey pair in the configuration file based on your business requirements.
        			// We recommend that you do not directly specify the AccessKey ID and AccessKey secret in code to prevent AccessKey pair leaks.
              val ossClient = new OSSClientBuilder().build("oss-cn-beijing.aliyuncs.com", System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
              val filePath="user/data"
              ossClient.putObject("spark-oss",filePath , new ByteArrayInputStream(cnt.toString.getBytes()))
              ossClient.shutdown()
            } finally {
              sc.stop()
            }
          }
        }
        ```
        
    -   Example 3: Sample code for the cluster mode
        
        ```
        package com.aliyun.odps.spark.examples
        import java.io.ByteArrayInputStream
        import com.aliyun.oss.{OSSClientBuilder,OSSClient}
        import org.apache.spark.sql.SparkSession
        
        object SparkOSS {
          def main(args: Array[String]) {
            val spark = SparkSession
              .builder()
              .appName("SparkOSS")
              .getOrCreate()
        
            val sc = spark.sparkContext
            try {
              // Read data from OSS objects. 
              val pathIn = "oss://spark-oss/workline.txt"
              val inputData = sc.textFile(pathIn, 5)
              val cnt = inputData.count
              inputData.count()
              println(s"count: $cnt")
        
              // inputData.repartition(1).saveAsTextFile("oss://spark-oss/user/data3")
              // Write data to OSS objects. 
              // The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console.
        			// In this example, the AccessKey ID and AccessKey secret are configured as environment variables. You can also save your AccessKey pair in the configuration file based on your business requirements.
        			// We recommend that you do not directly specify the AccessKey ID and AccessKey secret in code to prevent AccessKey pair leaks.
              val ossClient = new OSSClientBuilder().build("oss-cn-beijing.aliyuncs.com", System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
              val filePath="user/data"
              ossClient.putObject("spark-oss",filePath , new ByteArrayInputStream(cnt.toString.getBytes()))
              ossClient.shutdown()
            } finally {
              sc.stop()
            }
          }
        }
        ```
        
-   How to commit
    
    -   Use IntelliJ IDEA to develop, test, and commit the code for the local mode. For more information, see [Running modes of Spark on MaxCompute](https://github.com/aliyun/MaxCompute-Spark/wiki/02.-%E8%BF%90%E8%A1%8C%E6%A8%A1%E5%BC%8F).
        
    -   Use an ODPS Spark node to commit and run the code in the DataWorks console. For more information, see [Develop an ODPS Spark task](/help/en/dataworks/user-guide/create-an-odps-spark-node#task-2512261).
        

## Example of reading data from MaxCompute and writing the data to OSS

Use IntelliJ IDEA or DataWorks to read data from MaxCompute and write the data to OSS.

-   Sample code
    
    -   Sample code for the local mode
        
        ```
        package com.aliyun.odps.spark.examples.userpakage
        
        import org.apache.spark.sql.{SaveMode, SparkSession}
        
        object SparkODPS2OSS {
          def main(args: Array[String]): Unit = {
            val spark = SparkSession
              .builder()
              .appName("Spark2OSS")
              .config("spark.master", "local[4]")// The code can run after you set spark.master to local[N]. N indicates the number of concurrent Spark jobs.
              .config("spark.hadoop.odps.project.name", "")
              .config("spark.hadoop.odps.access.id", "")
              .config("spark.hadoop.odps.access.key", "")
              .config("spark.hadoop.odps.end.point", "http://service.cn.maxcompute.aliyun.com/api")
              .config("spark.sql.catalogImplementation", "odps")
              .config("spark.hadoop.fs.oss.accessKeyId","")
              .config("spark.hadoop.fs.oss.accessKeySecret","")
              .config("spark.hadoop.fs.oss.endpoint","oss-cn-beijing.aliyuncs.com")
              .getOrCreate()
        
            try{
        
              // Use Spark SQL to query tables.
              val data = spark.sql("select * from  user_detail")
             // Show the query results.
              data.show(10)
              // Store the query results to an OSS object.
              data.toDF().coalesce(1).write.mode(SaveMode.Overwrite).csv("oss://spark-oss/user/data3")
            }finally {
              spark.stop()
            }
        
          }
        }
        ```
        
    -   Sample code for the cluster mode
        
        ```
        package com.aliyun.odps.spark.examples.userpakage
        import org.apache.spark.sql.{SaveMode, SparkSession}
        
        object SparkODPS2OSS {
          def main(args: Array[String]): Unit = {
            val spark = SparkSession
              .builder()
              .appName("SparkODPS2OSS")
              .getOrCreate()
        
            try{
        
              // Use Spark SQL to query tables.
              val data = spark.sql("select * from  user_detail")
             // Show the query results.
              data.show(10)
              // Store the query results to an OSS object.
              data.toDF().coalesce(1).write.mode(SaveMode.Overwrite).csv("oss://spark-oss/user/data3")
        
            }finally {
              spark.stop()
            }
        
          }
        }
        ```
        
-   How to commit
    
    -   Use IntelliJ IDEA to develop, test, and commit the code for the local mode.
        
    -   Use an ODPS Spark node to commit and run the code in the DataWorks console. For more information, see [Develop an ODPS Spark task](/help/en/dataworks/user-guide/create-an-odps-spark-node#task-2512261).
        
    
    **Note**
    
    For more information about how to configure the Spark development environment, see [Running modes of Spark on MaxCompute](https://github.com/aliyun/MaxCompute-Spark/wiki/02.-%E8%BF%90%E8%A1%8C%E6%A8%A1%E5%BC%8F).
