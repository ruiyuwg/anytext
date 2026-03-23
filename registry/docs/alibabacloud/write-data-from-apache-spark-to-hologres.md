This topic describes how to use Spark to read data from multiple types of sources and write the data to Hologres.

## Background information

Spark is an analytics engine that processes a large amount of data in a centralized manner. Hologres is integrated with both Apache Spark and E-MapReduce (EMR) Spark to help you build data warehouses in an efficient manner. Hologres provides the Spark connector that you can use to write data to Hologres in batch mode. You can use Spark to read data from multiple types of sources, such as files, Hive tables, MySQL tables, and PostgreSQL tables.

Hologres is compatible with PostgreSQL. You can use Spark to read Hologres data based on PostgreSQL. Then, you can extract, transform, and load (ETL) the data and write the processed data back to Hologres or to other destinations.

## Prerequisites

-   The version of your Hologres instance is V0.9 or later. You can view the version of your Hologres instance on the instance details page in the Hologres console. If the version of your Hologres instance is earlier than V0.9, manually upgrade your Hologres instance in the Hologres console or join the Hologres DingTalk group for technical support. For more information about how to manually upgrade your Hologres instance in the Hologres console, see [Instance upgrades](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv). For more information about how to obtain technical support, see [Obtain online support for Hologres](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   A Spark environment that is of a version supported by Hologres is installed. This way, you can run the `spark-shell` command in the Spark environment.
    

## **Use of connections**

When you use the Spark connector of Hologres to read or write data, Java Database Connectivity (JDBC) connections are used. The number of connections to be used are affected by the following items:

-   Number of parallel Spark tasks: You can obtain the number in the Spark UI when a job is running.
    
-   Data write mode: If you use the Spark connector to write data in the fixed copy mode, each parallel task uses one JDBC connection. If you use the INSERT statement to write data, the number of JDBC connections used by each parallel task is the same as the value of write\_thread\_size. Each parallel task for data reading uses one JDBC connection.
    
-   Others: When a job starts, schema information may need to be obtained. In this case, a JDBC connection may be used for a short period of time.
    

The total number of JDBC connections used by a job can be calculated by using the following formulas:

-   Fixed copy mode: `Parallelism × 1 + 1`
    
-   INSERT statement: `Parallelism × write_thread_size + 1`
    

**Note**

The parallelism of Spark tasks is affected by manual parameter settings and the file blocking policy of Hadoop.

## (Recommended) Use the Spark connector to write data to Hologres

We recommend that you use the built-in Spark connector of Hologres to write data to Hologres. The Spark connector is used together with [Holo Client](/help/en/hologres/user-guide/read-and-write-data-over-holo-client#concept-2037123). Compared with other methods of writing data, the Spark connector provides better write performance. To use the Spark connector to write data, perform the following steps. For more information about the sample code, see the [Example of using the Spark connector to write data to Hologres](#556c9a8048sgx) section in this topic.

### **Preparations**

1.  Obtain a JAR package.
    
    The Spark connector is available for Spark 2 and Spark 3. When you use the Spark connector to write data to Hologres, you must reference a JAR package of the Spark connector. The JAR package is already published in the Maven central repository. You can refer to the following pom.xml file for configuration.
    
    **Note**
    
    Relevant connectors are also open-source. For more information, visit the [alibabacloud-hologres-connectors](https://github.com/aliyun/alibabacloud-hologres-connectors) page.
    
    ```
    <dependency>
        <groupId>com.alibaba.hologres</groupId>
        <artifactId>hologres-connector-spark-3.x</artifactId>
        <version>1.4.0</version>
        <classifier>jar-with-dependencies</classifier>
    </dependency>
    ```
    
    You can click the following links to download the JAR packages that are provided by Hologres:
    
    -   [Spark2](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240813/rwqist/hologres-connector-hive-2.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar)
        
    -   [Spark3](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240813/tjdynm/hologres-connector-hive-3.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar)
        
    
2.  Use the JAR package.
    
    Run the following command to start Spark and load the connector:
    
    ```
    spark-shell --jars hologres-connector-spark-3.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar
    ```
    
    You can also run the following command to start PySpark and load the connector:
    
    ```
    pyspark --jars hologres-connector-spark-3.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar
    ```
    

### Example of using the Spark connector to write data to Hologres

The following example shows how to use the Spark connector to write data to Hologres.

1.  Create a table in Hologres.
    
    Execute the following SQL statement in Hologres to create a table to which you want to write data:
    
    ```
    CREATE TABLE tb008 (
      id BIGINT primary key,
      counts INT,
      name TEXT,
      price NUMERIC(38, 18),
      out_of_stock BOOL,
      weight DOUBLE PRECISION,
      thick FLOAT,
      time TIMESTAMPTZ,
      dt DATE, 
      by bytea,
      inta int4[],
      longa int8[],
      floata float4[],
      doublea float8[],
      boola boolean[],
      stringa text[]
    );
    ```
    
2.  Prepare data in Spark and write the data to Hologres.
    
    1.  Run the following command in the CLI to enable the Spark connector:
        
        ```
        spark-shell --jars hologres-connector-spark-3.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar
        ```
        
    2.  Run the `load spark-test.scala` command in spark-shell to load sample data.
        
        The spark-test.scala file contains the following data:
        
        ```
        import java.sql.{Timestamp, Date}
        import org.apache.spark.sql.types._
        import org.apache.spark.sql.Row
        
        val byteArray = Array(1.toByte, 2.toByte, 3.toByte, 'b'.toByte, 'a'.toByte)
        val intArray = Array(1, 2, 3)
        val longArray = Array(1L, 2L, 3L)
        val floatArray = Array(1.2F, 2.44F, 3.77F)
        val doubleArray = Array(1.222, 2.333, 3.444)
        val booleanArray = Array(true, false, false)
        val stringArray = Array("abcd", "bcde", "defg")
        
        val data = Seq(
          Row(-7L, 100, "phone1", BigDecimal(1234.567891234), false, 199.35, 6.7F, Timestamp.valueOf("2021-01-01 00:00:00"), Date.valueOf("2021-01-01"), byteArray, intArray, longArray, floatArray, doubleArray, booleanArray, stringArray),
          Row(6L, -10, "phone2", BigDecimal(1234.56), true, 188.45, 7.8F, Timestamp.valueOf("2021-01-01 00:00:00"), Date.valueOf("1970-01-01"), byteArray, intArray, longArray, floatArray, doubleArray, booleanArray, stringArray),
          Row(1L, 10, "phone3\"", BigDecimal(1234.56), true, 111.45, null, Timestamp.valueOf("2020-02-29 00:12:33"), Date.valueOf("2020-07-23"), byteArray, intArray, longArray, floatArray, doubleArray, booleanArray, stringArray)
        )
        
        
        val schema = StructType(Array(
          StructField("id", LongType),
          StructField("counts", IntegerType),
          StructField("name", StringType, false), // The value false indicates that the value of this field cannot be null in the table.
          StructField("price", DecimalType(38, 12)),
          StructField("out_of_stock", BooleanType),
          StructField("weight", DoubleType),
          StructField("thick", FloatType),
          StructField("time", TimestampType),
          StructField("dt", DateType),
          StructField("by", BinaryType),
          StructField("inta", ArrayType(IntegerType)),
          StructField("longa", ArrayType(LongType)),
          StructField("floata", ArrayType(FloatType)),
          StructField("doublea", ArrayType(DoubleType)),
          StructField("boola", ArrayType(BooleanType)),
          StructField("stringa", ArrayType(StringType))
        ))
        
        
        val df = spark.createDataFrame(
          spark.sparkContext.parallelize(data),
          schema
        )
        df.show()
        
        // Configure the following parameters to write the sample data to Hologres. 
        df.write.format("hologres") // Set the value to hologres.
          .option("username", "your_username") // The AccessKey ID of your Alibaba Cloud account. 
          .option("password", "your_password") // The AccessKey secret of your Alibaba Cloud account. 
          .option("endpoint", "Ip:Port") // The IP address and port number of your Hologres instance. 
          .option("database", "test_database") // The name of the Hologres database. The name is test_database in this example. 
          .option("table", "tb008") // The name of the Hologres table to which you want to write data. The table name is tb008 in this example. 
          .option("write_batch_size", 512) // The maximum number of write requests allowed in a batch. For more information, see the parameter description in the "Use Spark to write data to Hologres in real time" section.
          .option("input_data_schema_ddl", df.schema.toDDL) // The data definition language (DDL) statement for DataFrame. This parameter is required only for Spark 3.X.
          .mode(SaveMode.Append) // The save mode of the Spark DataFrameWriter interface. The value must be Append. This parameter differs from the WRITE_MODE parameter. The value OverWrite is supported for hologres-connector 1.3.3 and later. If you set this parameter to OverWrite, data in the source table is cleared. Proceed with cautions when you use this value.
          .save()
        ```
        
3.  Query data in the destination table.
    
    You can query data in the destination table in the Hologres console to check the written data. The following figure shows an example.![测试示例数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9913488361/p297532.png)
    

### **Example of using the PySpark connector to write data to Hologres**

1.  Start PySpark and load the PySpark connector.
    
    ```
    pyspark --jars hologres-connector-spark-3.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar
    ```
    
2.  Use metadata to create a DataFrame object and call the connector to write data to Hologres. The operation is similar to the operation when you use the Spark connector.
    
    ```
    data = [[1, "Elia"], [2, "Teo"], [3, "Fang"]]
    df = spark.createDataFrame(data, schema="id LONG, name STRING")
    df.show()
    
    df2.write.format("hologres").option(
      "username", "your_username").option(
      "password", "your_password").option(
      "endpoint", "hologres_endpoint").option(
      "database", "test_database").option(
      "table", "tb008").save()
    ```
    

### **Use Spark SQL to load a connector for data writes to Hologres**

**Note**

Only the Spark connector for Spark 3 supports this mode.

1.  Start Spark SQL and load the Spark connector.
    
    ```
    spark-sql --jars hologres-connector-spark-3.x-1.4.0-SNAPSHOT-jar-with-dependencies.jar
    ```
    
2.  Execute the following Spark SQL DDL statements to create a CSV view and a Hologres view, and then write data to them:
    
    ```
    CREATE TEMPORARY VIEW csvTable (
      c_custkey bigint,
      c_name string,
      c_address string,
      c_nationkey int,
      c_phone string,
      c_acctbal decimal(15, 2),
      c_mktsegment string,
      c_comment string)
    USING csv OPTIONS (
      path "resources/customer1.tbl", sep "|"
    );
    
    CREATE TEMPORARY VIEW hologresTable (
      c_custkey bigint,
      c_name string,
      c_address string,
      c_nationkey int,
      c_phone string,
      c_acctbal decimal(15, 2),
      c_mktsegment string,
      c_comment string)
    USING hologres OPTIONS (
      jdbcurl "jdbc:postgresql://hologres_endpoint/test_database",
      username "your_username", 
      password "your_password", 
      table "customer_holo_table", 
      copy_write_mode "true", 
      bulk_load "true", 
      copy_write_format "text"
    );
    
    -- You cannot write data to specific columns of Hologres views that are created by using SQL statements. For example, you cannot execute the insert into hologresTable(c_custkey) select c_custkey from csvTable statement. When you write data, you must write data to all columns that are declared in the DDL statement. If you want to write data to specific columns, you can declare only these columns when you create the table. 
    INSERT INTO hologresTable SELECT * FROM csvTable;
    ```
    

## Use Spark to read data from a specific type of source and write the data to Hologres

1.  Read data from a specific type of source.
    
    You can use Spark to read data from different types of sources. The following examples show how to read data from Hologres or another type of source:
    
    -   Read data from Hologres
        
        Hologres is compatible with PostgreSQL. You can use Spark to read Hologres data based on the PostgreSQL JDBC driver. The following sample code is for reference only.
        
        **Note**
        
        Before you read Hologres data, download the [PostgreSQL JDBC JAR](https://jdbc.postgresql.org/download/) package on the official website. In this example, `postgresql-42.2.18` is used. Then, run the `./bin/spark-shell --jars /path/to/postgresql-42.2.18.jar` command in spark-shell to load the PostgreSQL JDBC JAR package. You can also load the PostgreSQL JDBC JAR package together with the JAR package of the Spark connector of Hologres.
        
        ```
        // Read from some table, for example: tb008
        val readDf = spark.read
          .format("jdbc") // Read Hologres data based on the PostgreSQL JDBC driver.
          .option("driver","org.postgresql.Driver")
          .option("url", "jdbc:postgresql://Ip:Por/test_database")
          .option("dbtable", "tb008")
          .option("user", "your_username")
          .option("password", "your_password")
          .load()
        ```
        
        Spark connector V1.3.2 and later allow you to read data from Hologres and optimize the performance of parallel data reads. Compared with the PostgreSQL JDBC driver, the Spark connector allows you to configure data read parallelism and supports data sharding in Hologres to implement parallel data reads. This significantly improves performance. Sample code:
        
        ```
        val spark = SparkSession
        .builder
        .appName("ReadFromHologres")
        .master("local[*]")
        .getOrCreate()
        
        spark.sparkContext.setLogLevel("WARN")
        
        import spark.implicits._
        
        val schema = StructType(Array(
          StructField("id", LongType),
          StructField("counts", IntegerType),
          StructField("name", StringType, false),
          StructField("price", DecimalType(38, 12)),
          StructField("out_of_stock", BooleanType)
        ))
        
        val readDf = spark.read
        .format("hologres")
        .schema(schema) // Optional. If you do not specify a schema, all fields in the Hologres table are read by default.
        .option("username", "your_username")
        .option("password", "your_password")
        .option("jdbcurl", "jdbc:postgresql://hologres_endpoint/test_db")
        .option("table", "tb008")
        .option("scan_parallelism", "10") // The default parallelism for reading data from Hologres. The maximum value is the shard count of the Hologres table.
        .load()
        ```
        
    -   Read data from another type of source such as a Parquet file
        
        You can use Spark to read data from other types of sources, such as a Parquet file or a Hive table. The following example provides the sample code:
        
        ```
        import org.apache.spark.{SparkConf, SparkContext}
        import org.apache.spark.sql.hive.HiveContext
        
        val sparkConf = new SparkConf()
        val sc = new SparkContext(sparkConf)
        val hiveContext = new HiveContext(sc)
        
        // Read from some table, for example: phone
        val readDf = hiveContext.sql("select * from hive_database.phone")
        ```
        
    
2.  Write the data to Hologres.
    
    ```
    import com.alibaba.hologres.spark2.sink.SourceProvider
    
    -- Write to hologres table
    df.write
      .format("hologres")
      .option(SourceProvider.USERNAME, "your_username")
      .option(SourceProvider.PASSWORD, "your_password")
      .option(SourceProvider.ENDPOINT, "Ip:Port")
      .option(SourceProvider.DATABASE, "test_database")
      .option(SourceProvider.TABLE, table)
      .option(SourceProvider.WRITE_BATCH_SIZE, 512) -- The maximum number of requests allowed in a batch.
      .option(SourceProvider.INPUT_DATA_SCHEMA_DDL, df.schema.toDDL) -- This parameter is required only for Spark 3.X.
      .mode(SaveMode.Append) // This parameter is required only for Spark 3.X.
      .save()
    ```
    

## Use Spark to write data to Hologres in real time

1.  Execute the following statement to create a table to which you want to write data in Hologres:
    
    ```
    CREATE TABLE test_table_stream
    (
        value text,
        count bigint
    );
    ```
    
2.  Read data from your on-premises machine. Collect word frequency statistics and write the statistics to Hologres in real time. The following example provides sample code:
    
    -   Code
        
        ```
         val spark = SparkSession
              .builder
              .appName("StreamToHologres")
              .master("local[*]")
              .getOrCreate()
        
            spark.sparkContext.setLogLevel("WARN")
            import spark.implicits._
        
            val lines = spark.readStream
              .format("socket")
              .option("host", "localhost")
              .option("port", 9999)
              .load()
        
            -- Split the lines into words
            val words = lines.as[String].flatMap(_.split(" "))
        
            -- Generate running word count
            val wordCounts = words.groupBy("value").count()
        
            wordCounts.writeStream
                .outputMode(OutputMode.Complete())
                .format("hologres")
                .option(SourceProvider.USERNAME, "your_username")
                .option(SourceProvider.PASSWORD, "your_password")
                .option(SourceProvider.JDBCURL, "jdbc:postgresql://Ip:Port/dbname")
                .option(SourceProvider.TABLE, "test_table_stream")
                .option("batchsize", 1)
                .option("isolationLevel", "NONE")
                .option("checkpointLocation", checkpointLocation)
                .start()
                .awaitTermination()
        ```
        
    -   Parameters
        
        **Parameter**
        
        **Default value**
        
        **Required**
        
        **Description**
        
        username
        
        No default value
        
        Yes
        
        The AccessKey ID of your Alibaba Cloud account. You can obtain the AccessKey ID on the [Security Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak) page.
        
        We recommend that you configure environment variables and obtain the AccessKey ID and AccessKey secret from the environment variables. This helps reduce the leak risk.
        
        password
        
        No default value
        
        Yes
        
        The AccessKey secret of your Alibaba Cloud account. You can obtain the AccessKey secret on the [Security Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak) page.
        
        We recommend that you configure environment variables and obtain the AccessKey ID and AccessKey secret from the environment variables. This helps reduce the leak risk.
        
        table
        
        No default value
        
        Yes
        
        The name of the Hologres table to which you want to write data.
        
        endpoint
        
        No default value
        
        Configure this parameter or the JDBCURL parameter.
        
        The endpoint of your Hologres instance.
        
        You can obtain the endpoint of your Hologres instance in the **Network Information** section of the instance details page in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance).
        
        database
        
        No default value
        
        Configure this parameter or the JDBCURL parameter.
        
        The name of the Hologres database in which the destination table resides.
        
        jdbcurl
        
        No default value
        
        Configure only this parameter or the ENDPOINT and DATABASE parameters.
        
        The JDBC URL of your Hologres instance.
        
        copy\_write\_mode
        
        true
        
        No
        
        Specifies whether to write data in the fixed copy mode. Fixed copy is a new feature that is supported in Hologres V1.3. In the fixed copy mode, data is written in the streaming mode rather than in batches. Therefore, data writing in the fixed copy mode provides higher throughput and lower data latency, and consumes less client memory resources than data writing by using the INSERT statement.
        
        **Note**
        
        If you want to use the fixed copy mode, the connector version must be V1.3.0 or later, and the Hologres engine version must be V1.3.34 or later.
        
        copy\_write\_format
        
        false
        
        No
        
        Specifies whether to check dirty data. This parameter takes effect only when COPY\_WRITE\_MODE is set to true. If you set this parameter to true and dirty data is generated, the system can locate the row that fails to be written.
        
        **Note**
        
        Checking of dirty data negatively affects the write performance. We recommend that you set this parameter to true only in the troubleshooting process.
        
        bulk\_load
        
        true
        
        No
        
        Specifies whether to write data to Hologres in the batch copy mode. In the fixed copy mode, data is written in the streaming mode.
        
        **Note**
        
        -   In Hologres V2.1, the performance of writing data to tables with no primary keys is optimized. In Hologres V2.1, the operation of writing data to a table with no primary key in batch mode does not acquire a table lock but acquires a row lock. This way, data writes in batch mode can be performed in parallel with operations performed by using fixed plans. This helps improve data processing efficiency and parallelism.
            
        -   If the connector version is V1.4.0 or later, the Hologres engine version must be V2.1.0 or later.
            
        
        max\_cell\_buffer\_size
        
        20971520 (20 MB)
        
        No
        
        The maximum length of a field when COPY\_WRITE\_MODE is set to true.
        
        copy\_write\_dirty\_data\_check
        
        false
        
        No
        
        Specifies whether to check dirty data. If you set this parameter to true and dirty data is generated, the system can locate the row that fails to be written. Checking of dirty data negatively affects the write performance. We recommend that you set this parameter to true only in the troubleshooting process.
        
        **Note**
        
        This parameter takes effect only when COPY\_WRITE\_MODE is set to true.
        
        copy\_write\_direct\_connect
        
        true for scenarios that allow direct connections
        
        No
        
        This parameter takes effect only when COPY\_WRITE\_MODE is set to true. The amount of data that can be written in the copy mode is determined based on the throughput of the VPC endpoint. The system checks whether the environment can directly connect to the Hologres FE node when data is written in the copy mode. Direct connections are used by default if the environment can directly connect to the Hologres FE node. If this parameter is set to false, direct connections are not used.
        
        input\_data\_schema\_ddl
        
        No default value
        
        This parameter is required for Spark 3.X. Configure the parameter value in the `<your_DataFrame>.schema.toDDL` format.
        
        The DDL statement for DataFrame in Spark.
        
        write\_mode
        
        INSERT\_OR\_REPLACE
        
        No
        
        The policy that is used to handle primary key conflicts. This parameter is required if the destination table has a primary key. Valid values:
        
        -   INSERT\_OR\_IGNORE: discards the data that you want to write if a primary key conflict occurs.
            
        -   INSERT\_OR\_UPDATE: updates the relevant columns in the destination table if a primary key conflict occurs.
            
        -   INSERT\_OR\_REPLACE: updates all columns in the destination table if a primary key conflict occurs.
            
        
        write\_batch\_size
        
        512
        
        No
        
        The maximum number of requests that are allowed in a batch in a thread to write data. If the total number of PUT requests reaches the upper limit that is specified by the write\_batch\_size parameter after conflicts are handled based on the write\_mode parameter, the data is submitted in a batch.
        
        write\_batch\_byte\_size
        
        2 MB
        
        No
        
        The maximum number of bytes that are allowed in a batch in a thread to write data. If the total number of bytes of the PUT requests reaches the upper limit that is specified by the WRITE\_BATCH\_BYTE\_SIZE parameter after conflicts are handled based on the WRITE\_MODE parameter, the data is submitted in a batch.
        
        write\_max\_interval\_ms
        
        10000 ms
        
        No
        
        The interval at which data is submitted in a batch.
        
        write\_fail\_strategy
        
        TYR\_ONE\_BY\_ONE
        
        No
        
        The policy that is used to handle submission failures. If a batch cannot be submitted, Holo Client submits the data entries one at a time in the batch in the specified sequence. If a data entry cannot be submitted, Holo Client returns an error message that contains the information about the data entry.
        
        write\_thread\_size
        
        1
        
        No
        
        The number of parallel threads that are used to write data. Each thread occupies one connection.
        
        The total number of connections occupied by a Spark job varies based on the Spark parallelism. The total number of connections can be calculated by using the following formula: `Total number of connections = Value of spark.default.parallelism × Value of WRITE_THREAD_SIZE`.
        
        dynamic\_partition
        
        false
        
        No
        
        Specifies whether to automatically create a partition if the data is written to a parent table that has no partitions. Valid values: true and false. true: A partition is automatically created if the data is written to a parent table that has no partitions.
        
        retry\_count
        
        3
        
        No
        
        The maximum number of retries allowed to write and query data if a connection failure occurs.
        
        retry\_sleep\_init\_ms
        
        1000 ms
        
        No
        
        The amount of time consumed by the retries for a request is calculated by using the following formula: retry\_sleep\_init\_ms + retry\_count × retry\_sleep\_step\_ms.
        
        retry\_sleep\_step\_ms
        
        10\*1000 ms
        
        No
        
        The amount of time consumed by the retries for a request is calculated by using the following formula: retry\_sleep\_init\_ms + retry\_count × retry\_sleep\_step\_ms.
        
        connection\_max\_idle\_ms
        
        60000 ms
        
        No
        
        The idle timeout period for the connections that are used to read and write data. If a connection remains idle for a period of time longer than the specified idle timeout period, Holo Client automatically releases the connection.
        
        fixed\_connection\_mode
        
        false
        
        No
        
        Specifies whether to use fixed connections. In a non-fixed copy mode, such as the INSERT mode, data writes and point queries do not occupy connections.
        
        **Note**
        
        The fixed connection feature is in beta release and is available only when the connector version is V1.2.0 or later and the Hologres engine version is V1.3.0 or later.
        
        scan\_batch\_size
        
        256
        
        No
        
        The number of rows that are scanned each time when you read data from Hologres.
        
        scan\_timeout\_seconds
        
        60
        
        No
        
        The timeout period of the scan operation when you read data from Hologres. Unit: seconds.
        
        scan\_parallelism
        
        10
        
        No
        
        The number of shards that are used to read data from Hologres. The maximum value is the shard count of the Hologres table. During job runtime, the shards are allocated to Spark tasks for data reading.
        
    

## Data type mappings

The following table describes data type mappings between Spark and Hologres.

**Spark data type**

**Hologres data type**

ShortType

SMALLINT

IntegerType

INT

LongType

BIGINT

StringType

TEXT, JSONB, and JSON

DecimalType

NUMERIC(38, 18)

BooleanType

BOOL

DoubleType

DOUBLE PRECISION

FloatType

FLOAT

TimestampType

TIMESTAMPTZ

DateType

DATE

BinaryType

BYTEA and ROARINGBITMAP

ArrayType(IntegerType)

int4\[\]

ArrayType(LongType)

int8\[\]

ArrayType(FloatType

float4\[\]

ArrayType(DoubleType)

float8\[\]

ArrayType(BooleanType)

boolean\[\]

ArrayType(StringType)

text\[\]
