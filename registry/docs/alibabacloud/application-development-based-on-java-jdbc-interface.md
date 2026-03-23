Java Database Connectivity (JDBC) is a standard Java API for connecting to and managing databases and executing SQL statements. You can use Java JDBC APIs to connect to LindormTable and develop applications with Lindorm SQL. This topic describes how to develop applications using Java JDBC APIs over the MySQL protocol.

## Prerequisites

-   The MySQL compatibility feature is enabled for your instance. For more information, see [Enable the MySQL compatibility feature](/help/en/lindorm/user-guide/enable-mysql-protocol-compatibility).
    
-   You must install a Java environment. JDK 1.8 or later is required.
    
-   Your client IP address is added to the whitelist of your Lindorm instance. For more information, see [Configure a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## **Procedure**

1.  Add the MySQL JDBC driver dependency. For a Maven project, add the dependency to the `dependencies` section in the `pom.xml` file. Example:
    
    ```
      <dependency>
          <groupId>com.mysql</groupId>
          <artifactId>mysql-connector-j</artifactId>
          <version>8.3.0</version>
      </dependency>
    ```
    
    **Important**
    
    -   We recommend that you use MySQL JDBC driver version 8.0 or later to connect to LindormTable.
        
    -   To create a MySQL JDBC connection in Java, manually add the MySQL JDBC driver JAR file (`mysql-connector-java-x.x.x.jar`) to your CLASSPATH. Otherwise, the connection fails.
        
    
2.  Initialize the MySQL JDBC client and establish a connection between your client and LindormTable data.
    
    ```
    Class.forName("com.mysql.cj.jdbc.Driver");
    
    // The database username from the Lindorm console.
    String username = "root";
    // The database password from the Lindorm console.
    String password = "root";
    // Specify the database to connect to. If omitted, the default database is used.
    String database = "default";
    // The LindormTable endpoint for MySQL. Port 33060 is fixed for MySQL and must not be changed. Replace database with your target database name. Keep other parameters unchanged to improve performance.
    String url = "jdbc:mysql://ld-uf6k8yqb741t3****-proxy-sql-lindorm-public.lindorm.rds.aliyuncs.com:33060/" + database + "?sslMode=disabled&allowPublicKeyRetrieval=true&useServerPrepStmts=true&useLocalSessionState=true&rewriteBatchedStatements=true&cachePrepStmts=true&prepStmtCacheSize=100&prepStmtCacheSqlLimit=50000000";
    Properties properties = new Properties();
    properties.put("user", username);
    properties.put("password", password);
    
    // Get the connection.
    Connection connection = DriverManager.getConnection(url, properties);
    ```
    
    **Parameters**
    
    **Parameter**
    
    **Description**
    
    **url**
    
    The JDBC URL for connecting to LindormTable over MySQL. Format: `jdbc:mysql://<MySQL-compatible endpoint>/<database name>?<connection settings>`.
    
    If no database name is specified, the client connects to the default database. For more information about how to obtain the MySQL-compatible endpoint, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7).
    
    Connection settings improve performance. **Specify all settings.** For details, see [Connection settings](#11553e3b812h9).
    
    **Important**
    
    -   If your application runs on an ECS instance, use a **VPC** to access the Lindorm instance for higher security and lower network latency.
        
    -   If your application runs on a local machine and needs Internet access to the Lindorm instance, enable the public endpoint in the Lindorm console. For more information, see [View the endpoints of LindormTable](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7).
        
    -   If you connect over a VPC, specify the MySQL-compatible **VPC** address for the **url**. If you connect over the public network, specify the MySQL-compatible **Internet** address for the **url**.
        
    
    **database**
    
    The name of the database to connect to. By default, the client connects to the default database.
    
    **username**
    
    The username and password to connect to LindormTable.
    
    If you forget your password, change it in the LindormTable cluster management system. For more information, see [Change the password of a user](/help/en/doc-detail/174671.html#topic2090/section-n3z-64v-v73).
    
    **password**
    
    **Connection settings**
    
    **Parameter**
    
    **Example value**
    
    **Description**
    
    sslMode
    
    disabled
    
    Specifies whether the JDBC driver uses SSL to establish an encrypted connection. We recommend that you set this parameter to `disabled`. Setting this parameter to `disabled` prevents the use of SSL for encrypted connections and improves performance.
    
    allowPublicKeyRetrieval
    
    true
    
    Whether to retrieve the RSA public key from the server during authentication. Set to `true`.
    
    useServerPrepStmts
    
    true
    
    Whether to use server-side prepared statements. Set to `true` to let the database use its built-in SQL preprocessing, improving performance and reducing SQL injection risk.
    
    useLocalSessionState
    
    true
    
    Whether to use local session state to reduce round-trips to the database server. Set to `true`.
    
    rewriteBatchedStatements
    
    true
    
    Whether to rewrite batch statements. Set to `true` to greatly improve write performance for applications that use prepared statements with batch parameter binding.
    
    cachePrepStmts
    
    true
    
    Whether to cache prepared statements. Set to `true` to reduce creation overhead and improve performance for frequently executed statements.
    
    prepStmtCacheSize
    
    100
    
    The number of prepared statements cached by the JDBC driver. This setting takes effect only when **cachePrepStmts** is set to `true`.
    
    **Note**
    
    A larger **prepStmtCacheSize** consumes more memory. Set this value based on your actual needs. Increase it if your workload demands high performance.
    
    prepStmtCacheSqlLimit
    
    500000
    
    Specifies the maximum length of prepared statements that can be cached. SQL statements that exceed this length are not cached. If your business is performance-sensitive, we recommend that you increase the value of this parameter.
    
3.  After establishing the connection, use LindormTable SQL syntax. Example:
    
    ```
    String tableName = "sql_table_" + new Random().nextInt(1000);
    // Create a table.
    try (Statement statement = connection.createStatement()) {
      String sql = "create table if not exists " + tableName + "(id VARCHAR, name VARCHAR, primary key(id))";
      int ret = statement.executeUpdate(sql);
      System.out.println(ret);
    }
    
    // Insert data.
    String upsertSql = "insert into " + tableName + "(id,name) values(?,?)";
    try (PreparedStatement ps = connection.prepareStatement(upsertSql)) {
      int batchSize = 100;
      for (int i = 0; i < batchSize; i++) {
        ps.setString(1, "aa" + i);
        ps.setString(2, "bb" + i);
        // Add to batch.
        ps.addBatch();
      }
      int[] ret = ps.executeBatch();
      System.out.println(Arrays.toString(ret));
    }
    
    // Query data.
    String querySql = "select * from " + tableName + " where id=?";
    try (PreparedStatement ps = connection.prepareStatement(querySql)) {
      ps.setString(1, "aa1");
      ResultSet rs = ps.executeQuery();
      while (rs.next()) {
        String id = rs.getString(1);
        String name = rs.getString(2);
        System.out.println("id=" + id);
        System.out.println("name=" + name);
      }
    }
    
    // Delete data.
    String deleteSql = "delete from " + tableName + " where id=?";
    try (PreparedStatement ps = connection.prepareStatement(deleteSql)) {
      ps.setString(1, "aa1");
      ps.executeUpdate();
    }
    
    // Close the connection. Always close the connection after completing operations to prevent leaks.
    connection.close();
    ```
    
    For more information about LindormTable SQL syntax, see [SQL reference](/help/en/lindorm/developer-reference/lindorm-query-language/).
    
    **Note**
    
    -   In Lindorm SQL, `INSERT` has the same semantics as `UPSERT`. Because the MySQL JDBC client optimizes `INSERT`, use `INSERT` for data writes.
        
    -   Batch writes reduce RPC calls compared to single-row writes. The server processes rows in batches, achieving higher throughput. However, too many rows per batch may cause out-of-memory (OOM) errors or full garbage collection (Full GC), affecting service stability. Control the batch size. **batchSize** is the number of rows per batch. Set it between 50 and 100.
        
    -   Increase write throughput by increasing write concurrency.
