This topic describes how to use Druid to connect to and use LindormTable.

## **Prerequisites**

-   The MySQL compatibility feature is enabled for the instance. For more information, see [Enable the MySQL compatibility feature](/help/en/lindorm/user-guide/enable-mysql-protocol-compatibility).
    
-   Java Development Kit (JDK) V1.8 or later is installed.
    
-   The IP address of your client is added to the whitelist of your Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## **Usage notes**

-   Lindorm SQL frontend nodes use Server Load Balancer (SLB) for load balancing, and clients connect to these frontend nodes. To distribute client requests evenly across frontend nodes, we recommend that you avoid maintaining connections for too long. To achieve this, you can configure the `phyMaxUseCount` parameter.
    
-   You need to obtain a connection from the connection pool before executing a query, and call the `conn.close()` operation to return the connection to the pool after the query. The next time you execute a query, you can obtain a connection again from the connection pool. If a connection is not returned after the query and becomes invalid, Druid cannot detect its invalid state.
    
-   In complex network environments, connection interruptions may occur due to gateway performance bottlenecks, long network links, network jitter, high retransmission rate, or high packet loss rate. We recommend that you properly configure the connection pool and implement the retry mechanism in your business code when necessary.
    
-   When the server is upgraded and restarted, connections may be temporarily interrupted. Even with a connection pool, your business may experience exceptions. We recommend that you catch exceptions and implement the retry mechanism.
    
-   We recommend that you modify connection pool configurations based on your business requirements and ensure that the configurations take effect. You can periodically query effective configurations and connection pool information in your program by using the `DruidDataSource#getStatData()` and `DruidDataSource#dump()` methods, and check the configurations in logs.
    

## **Procedure**

1.  Before you use Druid to connect to LindormTable, you must install Druid and Lindorm JDBC Driver.
    
    For example, you can add the following dependencies to the `pom.xml` file in your Maven project:
    
    ```
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.2.11</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>8.3.0</version>
    </dependency>
    ```
    
    If you want to use druid-spring-boot-starter to start Druid, you must first exclude the druid component on which druid-spring-boot-starter depends and then explicitly add the dependency on the druid component to the configuration file. The following example shows how to configure dependencies when you use druid-spring-boot-starter to start Druid:
    
    ```
    <dependency>
       <groupId>com.alibaba</groupId>
       <artifactId>druid-spring-boot-starter</artifactId>
       <version>1.2.11</version>
       <exclusions>
          <exclusion>
             <groupId>com.alibaba</groupId>
             <artifactId>druid</artifactId>
          </exclusion>
       </exclusions>
    </dependency>
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.2.11</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>8.3.0</version>
    </dependency>
    ```
    
2.  Configure parameters for Druid. In the `src/main/resources` path of your Maven project, create the `druid.properties` file and add the following configurations to the file:
    
    ```
    # Specify the name of the driver class. You can keep this configuration unchanged.
    driverClassName=com.mysql.cj.jdbc.Driver
    # The url is the JDBC endpoint for MySQL to access LindormTable. The username and password are the credentials to access LindormTable.
    # Replace the database parameter with the name of the database to which you want to connect. We recommend that you keep other parameters unchanged to improve performance.
    url=jdbc:mysql://ld-uf6k8yqb741t3****-proxy-sql-lindorm-public.lindorm.rds.aliyuncs.com:33060/database?sslMode=disabled&allowPublicKeyRetrieval=true&useServerPrepStmts=true&useLocalSessionState=true&rewriteBatchedStatements=true&cachePrepStmts=true&prepStmtCacheSize=100&prepStmtCacheSqlLimit=50000000&socketTimeout=120000
    username=****
    password=****
    
    # Initialize the connection pool to create a connection. We recommend that you keep this configuration unchanged.
    init=true
    # Specify the number of connections that you want to create during initialization. You can configure this parameter based on your requirements.
    initialSize=10
    # Specify the maximum number of connections in the connection pool. You can configure this parameter based on your requirements. We recommend that you set this parameter to the same value as that of the thread pool in your business.
    maxActive=40
    # Specify the minimum number of idle connections in the connection pool. You can configure this parameter based on your requirements. For high-performance scenarios, we recommend that you set this parameter to the same value as that of the maxActive parameter. If your business has significant fluctuations, we recommend that you set this parameter to a smaller value.
    minIdle=40
    # Specify the maximum time period that the client can wait to obtain a connection. Unit: ms. We recommend that you keep this value unchanged.
    maxWait=30000
    
    # Configure the maximum usage limit for a connection to avoid uneven server load caused by using the same connection for a long time. This has a slight impact on performance.
    phyMaxUseCount=30000
    # Configure parameters related to connection keep-alive. We recommend that you keep these configurations unchanged. Otherwise, the connection may be unexpectedly disconnected.
    druid.keepAlive=true
    # Specify the allowed idle period of the connections. If a connection has been in the idle state for a period longer than this value, the validity of the connection is checked.
    druid.keepAliveBetweenTimeMillis=120000
    # Specify the interval at which connections are determined to be evicted or kept alive.
    timeBetweenEvictionRunsMillis=60000
    # Specify the eviction time of an idle connection.
    minEvictableIdleTimeMillis=1800000
    maxEvictableIdleTimeMillis=1800000
    
    # Configure parameters that are required to verify connections. We recommend that you keep these configurations unchanged.
    testWhileIdle=true
    testOnBorrow=false
    testOnReturn=false
    ```
    
    **Parameters**
    
    **Parameter**
    
    **Description**
    
    **url**
    
    The URL used by the Java JDBC for the Druid client to connect to the MySQL database. The URL is in the following format: `jdbc:mysql://<LindormTable endpoint for MySQL>/<Database name>?<Connection settings>`.
    
    If you do not specify the database name in the URL, the client connects to the default database. For more information about how to obtain the **LindormTable endpoint for MySQL**, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints).
    
    If you specify connection parameters, the performance can be enhanced. **We recommend that you specify all parameters.** For more information about the connection settings, see [Connection settings](/help/en/lindorm/user-guide/application-development-based-on-java-jdbc-interface#11553e3b812h9).
    
    **Important**
    
    -   If your application is deployed on an Elastic Compute Service (ECS) instance, we recommend that you use a virtual private cloud (VPC) to connect to the Lindorm instance for higher security and lower latency.
        
    -   If your application is deployed on a local server and needs to connect to the Lindorm instance over the Internet, you can perform the following steps to enable the public endpoint for the instance in the Lindorm console: In the left-side navigation pane, choose **Database Connections** > **Wide Table Engine**. On the **Wide Table Engine** tab, click **Enable Public Endpoint**.
        
    -   If you use a VPC to access the Lindorm instance, specify the **LindormTable VPC endpoint for MySQL** in the value of url. If you use the Internet to access the Lindorm instance, specify the **LindormTable Internet endpoint for MySQL** in the value of url.
        
    
    **username**
    
    If you forget your password, you can change the password in the cluster management system of LindormTable. For more information, see the [Change the password of a user](/help/en/doc-detail/174671.html#topic2090/section-n3z-64v-v73) section of the "Manage users" topic.
    
    **password**
    
3.  Load the parameter configurations of Druid and initialize the connection pool.
    
    ```
    // Load parameter configurations.
    Properties properties = new Properties();
    InputStream inputStream = DruidPoolDemo.class.getClassLoader().getResourceAsStream("druid.properties");
    properties.load(inputStream);
    // Initialize the connection pool.
    DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
    ```
    
4.  Use Druid to obtain connection information from JDBC and connect to LindormTable.
    
    ```
    /* -------------- Example on how to connect to LindormTable by using JDBC  ----------------- */
    
    String tableName = "sql_table_" + new Random().nextInt(1000);
    // Create a table.
    try (Connection connection = dataSource.getConnection()) {
        try (Statement statement = connection.createStatement()) {
            String sql = "create table if not exists " + tableName + "(id VARCHAR, name VARCHAR, primary key(id))";
            int ret = statement.executeUpdate(sql);
            System.out.println(ret);
        }
    }
    
    // Insert data to the table.
    try (Connection connection = dataSource.getConnection()) {
        String sql = "insert into " + tableName + "(id,name) values(?,?)";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, "aa");
            ps.setString(2, "bb");
    
            int ret = ps.executeUpdate();
            System.out.println(ret);
        }
    }
    
    // Batch write data.
    String insertSql = "insert into " + tableName + "(id,name) values(?,?)";
    int batchSize =100;
    try (Connection connection = dataSource.getConnection()) {
      try (PreparedStatement ps = connection.prepareStatement(insertSql)) {
        for (int i = 0; i < batchSize; i++) {
          ps.setString(1, "aa" + i);
          ps.setString(2, "bb" + i);
          // Add the write operation to a batch.
          ps.addBatch();
        }
        // Execute batch write.
        ps.executeBatch();
      }
    }
    
    // Query data in the table.
    try (Connection connection = dataSource.getConnection()) {
        String sql = "select * from " + tableName + " where id=?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, "aa");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                String id = rs.getString(1);
                String name = rs.getString(2);
                System.out.println("id=" + id);
                System.out.println("name=" + name);
            }
        }
    }
    
    // Delete data from the table.
    try (Connection connection = dataSource.getConnection()) {
        String sql = "delete from " + tableName + " where id=?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, "aa");
            ps.executeUpdate();
        }
    }
    ```
    
    **Note**
    
    -   In Lindorm SQL, the `INSERT` syntax is equivalent to the `UPSERT` syntax. However, the JDBC for MySQL client is optimized for the `INSERT` syntax. Therefore, we recommend that you use the `INSERT` syntax to write data.
        
    -   Batch writes are more efficient than single-row writes in reducing RPC calls, allowing the server to process multiple rows at a time and achieve higher throughput. However, if too many rows are written in a single batch, the server may experience out-of-memory (OOM) errors or full garbage collection (Full GC), affecting service stability. Therefore, we recommend that you control the number of rows written per batch. `**batchSize**` indicates the number of rows written per batch, and we recommend that you set this parameter to a value ranging from 50 to 100.
        
    -   You can increase write throughput by increasing write concurrency.
        
    

## **FAQ**

Q: Why is the `Read timed out` error reported during the connection?

A: By default, the `Read timed out` error is reported if a connection in the Druid connection pool times out for more than 10 seconds. You can configure the `socketTimeout` parameter in the connection string to specify the timeout period in milliseconds. For example, set the value to two minutes (120,000 milliseconds). Example: `jdbc:mysql://ld-uf6k8yqb741t3****-proxy-sql-lindorm-public.lindorm.rds.aliyuncs.com:33060/" + database + "?sslMode=disabled&allowPublicKeyRetrieval=true&useServerPrepStmts=true&useLocalSessionState=true&rewriteBatchedStatements=true&cachePrepStmts=true&prepStmtCacheSize=100&prepStmtCacheSqlLimit=50000000&socketTimeout=120000`.
