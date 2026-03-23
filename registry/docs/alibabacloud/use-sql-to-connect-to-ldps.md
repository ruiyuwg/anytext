You can use Java Database Connectivity (JDBC) to access Lindorm Distributed Processing System (LDPS) and use Spark SQL to query, analyze, and generate data.

## Prerequisites

-   A Lindorm instance is created and LindormTable is activated for the instance. For more information, see [Create an instance](/help/en/lindorm/getting-started/create-an-instance#task-2045184).
-   LDPS is activated for the Lindorm instance. For more information, see [Activate LDPS and modify the configurations](/help/en/lindorm/user-guide/activate-ldps-and-modify-the-configurations#task-2142804).
-   A Java integrated development environment (IDE) is installed. The version of the Java Development Kit (JDK) is 1.8 or later.

## Obtain the JDBC endpoint used to access LDPS

For more information about how to query the endpoints used to connect to LDPS, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).

## Use Beeline to access JDBC

1.  Download the [Spark release package](https://lindorm-compute.oss-cn-hangzhou.aliyuncs.com/spark/ldspark-3.2.1-current.tgz?spm=a2c4g.11186623.0.0.6da73e060WYNoJ&file=ldspark-3.2.1-current.tgz).
2.  Decompress the downloaded Spark release package.
3.  Set the SPARK\_HOME variable to the path to which the package is decompressed.
    
    ```
    export SPARK_HOME=/path/to/spark/;
    ```
    
4.  Configure parameters in the following configuration file: `$SPARK_HOME/conf/beeline.conf`.
    
    -   endpoint: Set this parameter to the JDBC endpoint of LDPS.
    -   user: Set this parameter to the username that is used to access Lindorm wide tables.
    -   password: Set this parameter to the password that is used to access Lindorm wide tables.
    -   shareResource: Specify whether the Spark resources are shared by multiple interactive sessions. The default value of this parameter is true.
    
5.  Run the `/bin/beeline` command. In the interactive session, execute SQL statements.
    
    LDPS supports various types of data sources. For more information, see [Precautions](/help/en/lindorm/user-guide/the-precautions#concept-2143675).
    
    For example, after you activate Hive Metastore, you can execute the following statements to create a table, write data to the table, and query data in the table. For more information, see [Use Hive Metastore to manage metadata in Lindorm](/help/en/lindorm/user-guide/use-hive-metastore-to-manage-metadata-of-the-lindorm-compute-engine#section-mgh-ncd-9l7).
    
    ```
    CREATE TABLE test (id INT, name STRING);
    INSERT INTO test VALUES (0, 'Jay'), (1, 'Edison');
    SELECT id, name FROM test;
    ```
    

## Develop Java code to access JDBC

1.  Add dependencies on JDBC in your environment, such as Maven.
    
    ```
    <dependency>
        <groupId>org.apache.hive</groupId>
        <artifactId>hive-jdbc</artifactId>
        <version>2.3.8</version>
    </dependency>
    ```
    
2.  Develop Java code to access JDBC. The following code provides an example on how to access JDBC:
    
    ```
    import java.sql.*;
    
    public class App {
        public static void main(String[] args) throws Exception {
            Class.forName("org.apache.hive.jdbc.HiveDriver");
    
            String endpoint = "jdbc:hive2://123.234.XX.XX:10009/;?token=bisdfjis-f7dc-fdsa-9qwe-dasdfhhv8****";
            String user = "";
            String password = "";
            Connection con = DriverManager.getConnection(endpoint, user, password);
    
            Statement stmt = con.createStatement();
            String sql = "SELECT * FROM test";
            ResultSet res = stmt.executeQuery(sql);
    
            while (res.next()) {
                System.out.println(res.getString(1));
            }
    
        }
    }
    ```
    
3.  **Optional:**If you want to configure more parameters for your jobs, you can specify the parameters in the JDBC endpoint. The following example shows how to specify parameters in the JDBC endpoint:
    
    ```
    String endpoint = "jdbc:hive2://123.234.XX.XX:10009/;?token=bisdfjis-f7dc-fdsa-9qwe-dasdfhhv8****;spark.dynamicAllocation.minExecutors=3;spark.sql.adaptive.enabled=false";
    ```
    

## Develop Python code to access JDBC

1.  Download the [Spark release package](https://lindorm-compute.oss-cn-hangzhou.aliyuncs.com/spark/ldspark-3.2.1-current.tgz?spm=a2c4g.11186623.0.0.6da73e060WYNoJ&file=ldspark-3.2.1-current.tgz).
2.  Decompress the downloaded Spark release package.
3.  Configure parameters related to paths.
    1.  Configure the path of Spark.
        
        ```
        export SPARK_HOME=/path/to/dir/;
        ```
        
    2.  Configure the CLASSPATH variable.
        
        ```
        export CLASSPATH=$CLASSPATH:$SPARK_HOME/jars/*;
        ```
        
    3.  Install JayDeBeApi.
        
        ```
        pip install JayDeBeApi
        ```
        
4.  Develop Python code to access JDBC. The following code provides an example on how to access JDBC:
    
    ```
    import jaydebeapi
    
    driver = 'org.apache.hive.jdbc.HiveDriver'
    endpoint = 'jdbc:hive2://123.234.XX.XX:10009/;?token=bisdfjis-f7dc-fdsa-9qwe-dasdfhhv8****'
    jarPath = '/path/to/sparkhome/jars/hive-jdbc-****.jar'
    user = '****'
    password = '****'
    
    conn=jaydebeapi.connect(driver, endpoint, [user, password], [jarPath])
    cursor = conn.cursor()
    cursor.execute("select 1")
    results = cursor.fetchall()
    
    cursor.close()
    conn.close()
    ```
    
5.  **Optional:**If you want to configure more parameters for your jobs, you can specify the parameters in the JDBC endpoint. The following example shows how to specify parameters in the JDBC endpoint:
    
    ```
    endpoint = "jdbc:hive2://123.234.XX.XX:10009/;?token=bisdfjis-f7dc-fdsa-9qwe-dasdfhhv8****;spark.dynamicAllocation.minExecutors=3;spark.sql.adaptive.enabled=false"
    ```
