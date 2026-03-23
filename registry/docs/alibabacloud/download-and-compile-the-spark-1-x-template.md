This topic describes how to develop a demo project on Spark on MaxCompute by using Java or Scala.

## Download a demo project

Spark on MaxCompute provides a demo project template. We recommend that you download and copy the template to develop your application.

Run the following commands to download the demo project template:

```
# Download and compile the Spark 1.x template.  
git clone https://github.com/aliyun/MaxCompute-Spark.git  
cd spark-1.x  
mvn clean package  
# Download and compile the Spark 2.x template.  
git clone https://github.com/aliyun/MaxCompute-Spark.git  
cd spark-2.x  
mvn clean package
```

**Notice** In the demo project, the scope parameter for the Spark dependency is set to provided. Do not modify this parameter. Otherwise, the submitted job does not run normally.

## Spark 1.x examples

Examples of a Spark 1.x demo project:

-   [WordCount example (Scala)](/help/en/maxcompute/spark-1-x-examples#section-q32-k6g-wp3)
-   [Example of reading data from or writing data to a MaxCompute table (Scala)](/help/en/maxcompute/spark-1-x-examples#section-07h-1zn-j8b)
-   [Example of reading data from or writing data to a MaxCompute table (Python)](/help/en/maxcompute/spark-1-x-examples#section-3v2-5di-yya)
-   [Example of reading data from or writing data to a MaxCompute table (Java)](/help/en/maxcompute/spark-1-x-examples#section-zx4-u4m-gbj)

## Spark 2.x examples

Examples of a Spark 2.x demo project:

-   [WordCount example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-rfm-f5l-c9k)
-   [Example of reading data from or writing data to a MaxCompute table (Scala)](/help/en/maxcompute/spark-2-x-examples#section-b78-fvv-f0t)
-   [GraphX PageRank example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-f4f-6d9-9w1)
-   [MLlib KMeans-ON-OSS example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-idz-jxc-xgb)
-   [OSS UnstructuredData example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-c90-szi-5hw)
-   [SparkPi example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-6e9-ed6-i0v)
-   [Spark Streaming LogHub example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-n8t-b5j-ooa)
-   [Example of using Spark Streaming LogHub to write data to MaxCompute (Scala)](/help/en/maxcompute/spark-2-x-examples#section-8nj-0rr-63m)
-   [Spark Streaming DataHub example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-6r7-sme-t4e)
-   [Example of using Spark Streaming DataHub to write data to MaxCompute (Scala)](/help/en/maxcompute/spark-2-x-examples#section-0t5-bor-co3)
-   [Spark Streaming Kafka example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-jl1-90b-p0n)
-   [Spark StructuredStreaming DataHub example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-lhq-baj-h5w)
-   [Spark StructuredStreaming Kafka example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-9z3-fxv-nnx)
-   [Spark StructuredStreaming LogHub example (Scala)](/help/en/maxcompute/spark-2-x-examples#section-v90-dd1-rhk)
-   [Example of using PySpark to read data from or write data to a MaxCompute table (Python)](/help/en/maxcompute/spark-2-x-examples#section-rmr-w5f-aya)
-   [Example of using PySpark to write data to OSS (Python)](/help/en/maxcompute/spark-2-x-examples#section-w4f-ume-z71)
-   [Spark SQL example (Java)](/help/en/maxcompute/spark-2-x-examples#section-36u-ckz-xw2)
-   [Example of reading data from MaxCompute and writing the data to HBase](/help/en/maxcompute/spark-2-x-examples#section-xg9-gd4-al0)
-   [Examples of reading data from and writing data to OSS objects](/help/en/maxcompute/spark-2-x-examples#section-97l-j6r-3sx)
-   [Example of reading data from MaxCompute and writing the data to OSS](/help/en/maxcompute/spark-2-x-examples#section-pji-l8v-hm3)
