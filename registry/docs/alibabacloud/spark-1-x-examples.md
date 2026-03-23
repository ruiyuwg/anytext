This topic describes how to configure Spark 1.x dependencies and provides some examples.

## Configure dependencies for Spark 1.x

If you want to submit your Spark 1.x application by using Spark on MaxCompute, you must add the following dependencies to the pom.xml file.

```
<properties>
    <spark.version>1.6.3</spark.version>
    <cupid.sdk.version>3.3.3-public</cupid.sdk.version>
    <scala.version>2.10.4</scala.version>
    <scala.binary.version>2.10</scala.binary.version>
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

-   Set it to provided for all packages that are released in the Apache Spark community, such as spark-core and spark-sql.
-   Set it to compile for the odps-spark-datasource module.

## WordCount example (Scala)

-   Sample code
    
    [WordCount.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-1.x/src/main/scala/com/aliyun/odps/spark/examples/WordCount.scala)
    
-   How to commit
    
    ```
    cd /path/to/MaxCompute-Spark/spark-1.x
    mvn clean package
    
    # For more information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.WordCount \
        /path/to/MaxCompute-Spark/spark-1.x/target/spark-examples_2.10-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Example of reading data from or writing data to a MaxCompute table (Scala)

-   Sample code
    
    [SparkSQL.scala](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-1.x/src/main/scala/com/aliyun/odps/spark/examples/sparksql/SparkSQL.scala)
    
-   How to commit
    
    ```
    cd /path/to/MaxCompute-Spark/spark-1.x
    mvn clean package
    # For more information about how to configure the environment variables in the spark-defaults.conf file, see Set up a Spark on MaxCompute development environment. 
    cd $SPARK_HOME
    bin/spark-submit --master yarn-cluster --class com.aliyun.odps.spark.examples.sparksql.SparkSQL \
        /path/to/MaxCompute-Spark/spark-1.x/target/spark-examples_2.10-1.0.0-SNAPSHOT-shaded.jar
    ```
    

## Example of reading data from or writing data to a MaxCompute table (Python)

For more information about the Python sample code for reading data from or writing data to a MaxCompute table, see [spark\_sql.py](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-1.x/src/main/python/spark_sql.py).

## Example of reading data from or writing data to a MaxCompute table (Java)

For more information about the Java sample code for reading data from or writing data to a MaxCompute table, see [JavaSparkSQL.java](https://github.com/aliyun/MaxCompute-Spark/blob/master/spark-1.x/src/main/java/com/aliyun/odps/spark/examples/sparksql/JavaSparkSQL.java).
