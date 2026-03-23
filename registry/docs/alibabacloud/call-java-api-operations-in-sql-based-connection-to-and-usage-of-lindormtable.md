This topic describes how to develop Lindorm wide table applications with SQL using the standard Java Database Connectivity (JDBC) interface and provides code examples.

## Prerequisites

-   A Java environment with JDK 1.8 or a later version must be installed.
    
-   The client IP address is added to the Lindorm whitelist. For more information, see [Set a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist).
    

## **Limits**

The operations in this topic apply only to Lindorm in wide table mode. Lindorm Serverless is not supported.

## Procedure

**Note**

You can use the code snippets in the following steps or download the complete [sample code](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260203/jotqpk/lindorm-sql-demo.zip) to compile and run it locally. The sample code for this topic is in the `com.aliyun.lindorm.sql.demo.BasicDemo` class.

1.  Download the Lindorm client. For a Maven project, add the following dependency to the `dependencies` section of the pom.xml file.
    
    ```
    <dependency> 
      <groupId>com.aliyun.lindorm</groupId>  
      <artifactId>lindorm-all-client</artifactId>
      <version>2.2.1.3</version>
    </dependency>
    ```
    
2.  Initialize the Lindorm client and establish a connection between the Lindorm client and the data.
    
    ```
    // The endpoint for LindormTable SQL.
    String url = "jdbc:lindorm:table:url=http://ld-bp17j28j2y7pm****-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30060";
    
    // Configure connection parameters.
    Properties properties = new Properties();
    
    // The database username obtained from the Lindorm console.
    properties.put("user", "root");
    // The database password obtained from the Lindorm console.
    properties.put("password", "test");
    // Specify a database when establishing the connection. If you do not specify a database, `default` is used.
    properties.put("database", "default");
    
    // Obtain the connection.
    Connection connection = DriverManager.getConnection(url, properties);
    ```
    
    **Important**
    
    To manage server resources, the server automatically disconnects a Lindorm client connection that has been idle for 10 minutes. If you try to reuse the connection, a `com.aliyun.lindorm.client.shaded.org.apache.calcite.avatica.http.ConnectionDisconnectedException` error occurs. To resolve this issue, you must re-establish the connection.
    
    The connection parameters are described as follows:
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **url**
    
    jdbc:lindorm:table:url=http://ld-bp17j28j2y7pm\*\*\*\*-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30060
    
    **Lindorm Wide Table SQL Address**. To obtain the endpoint, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints).
    
    **Important**
    
    -   If your application is deployed on an ECS instance, access the Lindorm instance over a virtual private cloud (VPC) for higher security and lower network latency.
        
    -   If your application is deployed locally, enable a public endpoint in the console before you connect to the Lindorm instance over the public network. To do this, in the console, choose **Database Connections** > **Wide Table Engine**. On the **Wide Table Engine** tab, click **Enable Public Endpoint**.
        
    
    **user**
    
    root
    
    If you forget the user password, you can change it in the cluster management system of LindormTable.
    
    **password**
    
    test
    
    **database**
    
    default
    
    The name of the database to connect to. By default, the \`default\` database is connected.
    
3.  After the connection is established, use the LindormTable SQL Java API to access Lindorm wide tables. The following code provides an example:
    
    ```
    /* -------------- JDBC-based CRUD examples ----------------- */
    
    String tableName = "sql_table_" + new Random().nextInt(1000);
    // Create a table.
    try (Statement statement = connection.createStatement()) {
      String sql = "create table if not exists " + tableName + "(id VARCHAR, name VARCHAR, primary key(id))";
      int ret = statement.executeUpdate(sql);
      System.out.println(ret);
    }
    
    // Insert data.
    String upsertSql = "upsert into " + tableName + "(id,name) values(?,?)";
    try (PreparedStatement ps = connection.prepareStatement(upsertSql)) {
      int batchSize = 100;
      for (int i = 0; i < batchSize; i++) {
        ps.setString(1, "aa" + i);
        ps.setString(2, "bb" + i);
        // Add to the batch.
        ps.addBatch();
      }
      // Execute all write batches.
      // For performance and stability, do not add too many batches.
      // Write a maximum of hundreds of batches in one `executeBatch()` call.
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
    
    // Update data.
    // The Lindorm SQL UPDATE statement supports only single-row updates, not batch updates.
    // This means the WHERE clause must specify the full primary key.
    String updateSql = "update " + tableName + " set name = ? where id=?";
    try (PreparedStatement ps = connection.prepareStatement(updateSql)) {
      ps.setString(1, "bb2update");
      ps.setString(2, "aa2");
      ps.executeUpdate();
    }
    String querySql1 = "select * from " + tableName + " where id=?";
    try (PreparedStatement ps = connection.prepareStatement(querySql1)) {
      ps.setString(1, "aa2");
      ResultSet rs = ps.executeQuery();
      System.out.println("--------- update-----------");
      while (rs.next()) {
      String id = rs.getString(1);
      String name = rs.getString(2);
      System.out.println("id=" + id);
      System.out.println("name=" + name);
     }
    }
    
    // Drop the table.
    String dropTable = "drop table " + tableName;
    try (Statement stmt = connection.createStatement()) {
      stmt.execute(dropTable);
    }
    
    // Close the connection. Make sure the connection is closed after the operations are complete to prevent connection leaks.
    connection.close();
    ```
    

## Examples of accessing LindormTable using common frameworks

This section provides code examples for accessing LindormTable using different Java frameworks:

-   To access LindormTable using the Druid framework, see the [Druid access example](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/lindormsql-druid).
    
-   To access LindormTable using the Spring framework, see the [Spring access example](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/lindormsql-spring).
    
-   To access LindormTable SQL using the Mybatis framework, see the [Mybatis access example](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/lindormsql-mybatis).
    
-   To access LindormTable SQL using the Hibernate framework, see the [Hibernate access example](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/tree/master/lindormsql-hibernate).
    

## References

For information about the syntax of LindormTable SQL, see [SQL Syntax Manual](https://www.alibabacloud.com/help/zh/lindorm/latest/lindorm-query-language).
