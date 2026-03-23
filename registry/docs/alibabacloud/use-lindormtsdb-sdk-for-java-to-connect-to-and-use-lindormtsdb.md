This topic describes how to use the Java Native SDK to connect to and use LindormTSDB.

## Prerequisites

-   A Java environment is installed. JDK 1.8 or a later version is required.
    
-   The LindormTSDB version is 3.4.7 or later.
    
    **Note**
    
    For more information about how to view or upgrade the current version, see [Version Guide for LindormTSDB](/help/en/lindorm/product-overview/release-notes-of-lindormtsdb#concept-2119016) and [Minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance#concept-2557610).
    
-   The IP address of the client is added to the [Lindorm whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    
-   You have obtained the Lindorm [time series engine endpoint](/help/en/lindorm/user-guide/connect-through-lindorm-cli#section-wvz-y1d-uc5).
    

## Preparations

Before you use the Java Native SDK to connect to LindormTSDB, you must install the SDK. This topic uses version 1.0.0 as an example. You can install the Java Native SDK in one of the following three ways:

-   Method 1 (Recommended): Import the LindormTSDB SDK for Java into a Maven project. Add the following dependencies to the `dependencies` section of the pom.xml file.
    
    ```
    <dependency>
      <groupId>com.aliyun.lindorm</groupId>
      <artifactId>lindorm-tsdb-client</artifactId>
      <version>1.0.4</version>
    </dependency>
    ```
    
    **Note**
    
    The LindormTSDB Java SDK provides a Maven-based sample project. You can download the [sample project](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-tsdb-client/lindorm-tsdb-client-demo.zip) to compile and run it locally, or you can use it as a basis to develop your own project.
    
-   Import the JAR package into an Eclipse project.
    
    1.  Download the [Java SDK package](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-tsdb-client/lindorm-tsdb-client-latest.zip).
        
    2.  Decompress the downloaded Java SDK package.
        
    3.  Add the decompressed JAR package to your Eclipse project.
        
        1.  In Eclipse, open your project, right-click the project, and select **Properties**.
            
        2.  In the dialog box that appears, click **Java Build Path** > **Libraries** > **Add JARs**, and select the decompressed lindorm-tsdb-client-1.0.0.jar file and the JAR packages in the lib directory.
            
        3.  Click **Apply and Close**.
            
-   Import the JAR package into an IntelliJ IDEA project.
    
    1.  Download the [Java SDK package](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-tsdb-client/lindorm-tsdb-client-latest.zip).
        
    2.  Decompress the downloaded Java SDK package.
        
    3.  Add the decompressed JAR package to your IntelliJ IDEA project.
        
        1.  In IntelliJ IDEA, open your project and click **File** > **Project Structure** in the menu bar.
            
        2.  In the navigation pane on the left side of the **Project Structure** dialog box, select **Project Structure** > **Modules**.
            
        3.  On the right side of the pane, click ![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8855311661/p442372.png) and select **JARs or directories**.
            
        4.  In the dialog box that appears, select the decompressed lindorm-tsdb-client-1.0.0.jar file and the JAR packages in the lib directory, and then click **OK**.
            
        5.  Click **Apply**.
            
        6.  Click **OK**.
            

**Note**

-   You can obtain all versions of the Java Native SDK for LindormTSDB from the Maven central repository. For more information, see the [Maven Repository](https://mvnrepository.com/artifact/com.aliyun.lindorm/lindorm-tsdb-client?spm=a2c4g.11186623.0.0.35fc2897Ue8vnd).
    
-   For more information about the versions of the Java Native SDK for LindormTSDB, see the [Version Guide](/help/en/lindorm/user-guide/release-notes#topic-2180790).
    

## Procedure

1.  Create a database instance. When you create a LindormTSDBClient, you must specify the [LindormTSDB endpoint](/help/en/lindorm/user-guide/connect-through-lindorm-cli#section-wvz-y1d-uc5).
    
    ```
    String url = "http://ld-bp17j28j2y7pm****-proxy-tsdb-pub.lindorm.rds.aliyuncs.com:8242";
    // The LindormTSDBClient is thread-safe and can be reused. You do not need to frequently create and destroy it.
    ClientOptions options = ClientOptions.newBuilder(url).build();
    LindormTSDBClient lindormTSDBClient = LindormTSDBFactory.connect(options);
    ```
    
2.  Create a database named demo and a time series table named sensor. For more information about the SQL statements used to create databases and time series tables, see [CREATE DATABASE](/help/en/doc-detail/342954.html#topic-2134218) and [CREATE TABLE](/help/en/doc-detail/216795.html#topic-2078307).
    
    ```
    lindormTSDBClient.execute("CREATE DATABASE demo");
    lindormTSDBClient.execute("demo","CREATE TABLE sensor (device_id VARCHAR TAG,region VARCHAR TAG,time BIGINT,temperature DOUBLE,humidity DOUBLE,PRIMARY KEY(device_id))");
    ```
    
3.  Write data to the table.
    
    **Note**
    
    By default, LindormTSDBClient writes data asynchronously in batches to improve data writing performance. To write data synchronously, you can call the `join()` method of the `CompletableFuture<WriteResult>` object that is returned by the `write()` method.
    
    ```
    int numRecords = 10;
    List<Record> records = new ArrayList<>(numRecords);
    long currentTime = System.currentTimeMillis();
    for (int i = 0; i < numRecords; i++) {
        Record record = Record
            .table("sensor")
            .time(currentTime + i * 1000)
            .tag("device_id", "F07A1260")
            .tag("region", "north-cn")
            .addField("temperature", 12.1 + i)
            .addField("humidity", 45.0 + i)
            .build();
        records.add(record);
    }
    
    CompletableFuture<WriteResult> future = lindormTSDBClient.write("demo", records);
    // Process the asynchronous write result
    future.whenComplete((r, ex) -> {
        // Handle write failures
        if (ex != null) {
            System.out.println("Failed to write.");
            if (ex instanceof LindormTSDBException) {
                LindormTSDBException e = (LindormTSDBException) ex;
                System.out.println("Caught an LindormTSDBException, which means your request made it to Lindorm TSDB, "
                                   + "but was rejected with an error response for some reason.");
                System.out.println("Error Code: " + e.getCode());
                System.out.println("SQL State:  " + e.getSqlstate());
                System.out.println("Error Message: " + e.getMessage());
            }  else {
                ex.printStackTrace();
            }
        } else  {
            System.out.println("Write successfully.");
        }
    });
    // This is an example of how to simply process the write result in sync mode.
    System.out.println(future.join());
    ```
    
4.  Query data from the time series table. For more information about SQL query statements, see [Basic queries](/help/en/doc-detail/216801.html#topic-2078313).
    
    ```
    String sql = "select * from sensor limit 10";
    ResultSet resultSet = lindormTSDBClient.query("demo", sql);
    
    try {
        // Process the query result
        QueryResult result = null;
        // The query result is returned in batches. By default, each batch contains 1,000 rows.
        // If the next() method of the resultSet returns null, all query results are read.
        while ((result = resultSet.next()) != null) {
            List<String> columns = result.getColumns();
            System.out.println("columns: " + columns);
            List<String> metadata = result.getMetadata();
            System.out.println("metadata: " + metadata);
            List<List<Object>> rows = result.getRows();
            for (int i = 0, size = rows.size(); i < size; i++) {
                List<Object> row = rows.get(i);
                System.out.println("row #" + i + " : " + row);
            }
        }
    } finally {
        // After the query is complete, make sure that you call the close method of the ResultSet to release I/O resources.
        resultSet.close();
    }
    ```
    

## Complete code example

```
import com.aliyun.lindorm.tsdb.client.ClientOptions;
import com.aliyun.lindorm.tsdb.client.LindormTSDBClient;
import com.aliyun.lindorm.tsdb.client.LindormTSDBFactory;
import com.aliyun.lindorm.tsdb.client.exception.LindormTSDBException;
import com.aliyun.lindorm.tsdb.client.model.QueryResult;
import com.aliyun.lindorm.tsdb.client.model.Record;
import com.aliyun.lindorm.tsdb.client.model.ResultSet;
import com.aliyun.lindorm.tsdb.client.model.WriteResult;
import com.aliyun.lindorm.tsdb.client.utils.ExceptionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

public class QuickStart {

    public static void main(String[] args) {

        // 1. Create a client instance.
        String url = "http://ld-xxxx-proxy-tsdb-pub.lindorm.rds.aliyuncs.com:8242";
        // The LindormTSDBClient is thread-safe and can be reused. You do not need to frequently create and destroy it.
        ClientOptions options = ClientOptions.newBuilder(url).build();
        LindormTSDBClient lindormTSDBClient = LindormTSDBFactory.connect(options);

        // 2. Create a database named demo and a table named sensor.
        lindormTSDBClient.execute("CREATE DATABASE demo");
        lindormTSDBClient.execute("demo","CREATE TABLE sensor (device_id VARCHAR TAG,region VARCHAR TAG,time BIGINT,temperature DOUBLE,humidity DOUBLE,PRIMARY KEY(device_id))");

        // 3. Write data.
        int numRecords = 10;
        List<Record> records = new ArrayList<>(numRecords);
        long currentTime = System.currentTimeMillis();
        for (int i = 0; i < numRecords; i++) {
            Record record = Record
                    .table("sensor")
                    .time(currentTime + i * 1000)
                    .tag("device_id", "F07A1260")
                    .tag("region", "north-cn")
                    .addField("temperature", 12.1 + i)
                    .addField("humidity", 45.0 + i)
                    .build();
            records.add(record);
        }

        CompletableFuture<WriteResult> future = lindormTSDBClient.write("demo", records);
        // Process the asynchronous write result.
        future.whenComplete((r, ex) -> {
            // Handle write failures.
            if (ex != null) {
                System.out.println("Failed to write.");
                Throwable throwable = ExceptionUtils.getRootCause(ex);
                if (throwable instanceof LindormTSDBException) {
                    LindormTSDBException e = (LindormTSDBException) throwable;
                    System.out.println("Caught an LindormTSDBException, which means your request made it to Lindorm TSDB, "
                            + "but was rejected with an error response for some reason.");
                    System.out.println("Error Code: " + e.getCode());
                    System.out.println("SQL State:  " + e.getSqlstate());
                    System.out.println("Error Message: " + e.getMessage());
                }  else {
                    throwable.printStackTrace();
                }
            } else  {
                System.out.println("Write successfully.");
            }
        });
        // This is an example of a simple sync wait.
        System.out.println(future.join());

        // 4. Query data.
        String sql = "select * from sensor limit 10";
        ResultSet resultSet = lindormTSDBClient.query("demo", sql);

        try {
            // Process the query result.
            QueryResult result = null;
            // The query result is returned in batches. By default, each batch contains 1,000 rows.
            // If the next() method of the resultSet returns null, all query results are read.
            while ((result = resultSet.next()) != null) {
                List<String> columns = result.getColumns();
                System.out.println("columns: " + columns);
                List<String> metadata = result.getMetadata();
                System.out.println("metadata: " + metadata);
                List<List<Object>> rows = result.getRows();
                for (int i = 0, size = rows.size(); i < size; i++) {
                    List<Object> row = rows.get(i);
                    System.out.println("row #" + i + " : " + row);
                }
            }
        } finally {
            // After the query is complete, make sure that you call the close method of the ResultSet to release I/O resources.
            resultSet.close();
        }

        lindormTSDBClient.shutdown();
    }
}
```
