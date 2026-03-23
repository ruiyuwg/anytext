This topic describes how to use the Java Database Connectivity (JDBC) driver for Lindorm to connect to and use the Lindorm time series engine (LindormTSDB).

## Prerequisites

-   Java Development Kit (JDK) V1.8 or later is installed.
    
-   The IP address of your client is added to the whitelist of the Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    
-   The endpoint of Lindorm is obtained. For more information, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195). ![查看地址页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9704221661/p408103.png)
    

## Procedure

1.  You can use one of the following methods to install the JDBC driver for Lindorm:
    
    -   Manually install the JDBC driver
        
        Download the [Lindorm-all-client](https://repo1.maven.org/maven2/com/aliyun/lindorm/lindorm-all-client/) JAR package to your client and install the JDBC driver. You can select the JDBC driver version that you want to install. For example, if you want to install the JDBC driver 2.1.5, download the lindorm-all-client-2.1.5.jar package.
        
    -   Use Maven to download the JDBC driver
        
        To integrate the JDBC driver into a Maven project, create a Maven project and add the following dependencies to the pom.xml file:
        
        ```
        <dependency>
            <groupId>com.aliyun.lindorm</groupId>  
            <artifactId>lindorm-all-client</artifactId>
            <version>2.2.1.3</version>
        </dependency>
        ```
        
        **Note**
        
        Specify the version of lindorm-all-client based on your business requirements.
        
2.  Access LindormTSDB. The following code block provides an example on how to access LindormTSDB:
    
    ```
    import java.sql.*;
    
    class Test {
        public static void main(String[] args) {
            // Specify the JDBC URL that is used to connect to LindormTSDB.
            String url = "jdbc:lindorm:tsdb:url=http://ld-bp12pt80qr38p****-proxy-tsdb-pub.lindorm.rds.aliyuncs.com:8242";
            Connection conn = null;
    
            try {
                conn = DriverManager.getConnection(url);
                try (Statement stmt = conn.createStatement()) {
                    // Create a time series table. By default, the time series table is created in the database named default.
                    stmt.execute("CREATE TABLE sensor1 (device_id VARCHAR TAG,region VARCHAR TAG,time TIMESTAMP,temperature DOUBLE,humidity DOUBLE,PRIMARY KEY(device_id))");
    
                    // Insert multiple rows in a batch.
                    stmt.addBatch("INSERT INTO sensor1(device_id, region, time, temperature, humidity) values('F07A1260','north-cn','2021-04-22 15:33:00',12.1,45)");
                    stmt.addBatch("INSERT INTO sensor1(device_id, region, time, temperature, humidity) values('F07A1260','north-cn','2021-04-22 15:33:10',13.2,47)");
                    stmt.addBatch("INSERT INTO sensor1(device_id, region, time, temperature, humidity) values('F07A1260','north-cn','2021-04-22 15:33:20',10.6,46)");
                    stmt.addBatch("INSERT INTO sensor1(device_id, region, time, temperature, humidity) values('F07A1261','south-cn','2021-04-22 15:33:00',18.1,44)");
                    stmt.addBatch("INSERT INTO sensor1(device_id, region, time, temperature, humidity) values('F07A1261','south-cn','2021-04-22 15:33:10',19.7,44)");
                    stmt.executeBatch();
                    stmt.clearBatch();
                }
    
                // Query data by binding parameters.
                // Query data. We recommend that you specify a time range to reduce the amount of data that is scanned.
                try (PreparedStatement pstmt = conn.prepareStatement("SELECT device_id, region,time,temperature,humidity FROM sensor1 WHERE time >= ?  and time <= ?")) {
                    Timestamp startTime =Timestamp.valueOf("2021-04-22 15:33:00");
                    Timestamp endTime = Timestamp.valueOf("2021-04-22 15:33:20");
                    pstmt.setTimestamp(1, startTime);
                    pstmt.setTimestamp(2, endTime);
                    try (ResultSet rs = pstmt.executeQuery()) {
                        while (rs.next()) {
                            String device_id = rs.getString("device_id");
                            String region = rs.getString("region");
                            Timestamp time = rs.getTimestamp("time");
                            Double temperature = rs.getDouble("temperature");
                            Double humidity = rs.getDouble("humidity");
                            System.out.printf("%s %s %s %f %f\n", device_id, region, time, temperature, humidity);
                        }
                    }
                }
            } catch (SQLException e) {
                // Handle exceptions based on the business logic of your application.
                e.printStackTrace();
            } finally {
                try {
                    if (conn != null) {
                        conn.close();
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    ```
    
    **Note**
    
    -   For more information about the parameters that you can configure for the JDBC URL, see [URL of the JDBC driver](/help/en/lindorm/user-guide/jdbc-connection-address-description).
        
    -   For more information about the API operations and methods that are supported when you use the JDBC driver to access LindormTSDB, see [Supported API operations and methods](/help/en/lindorm/user-guide/use-jdbc-driver-to-connect-to-and-use-lindormtsdb/#section-r8j-wgw-dv6).
        
    -   For more information about the SQL syntax supported by LindormTSDB, see [SQL reference](/help/en/lindorm/security-and-compliance/system-policies-for-lindorm).
        
    
    If the following sample response is returned, the execution is successful:
    
    ```
    F07A1261 south-cn 2021-04-22 15:33:00.0 18.100000 44.000000
    F07A1261 south-cn 2021-04-22 15:33:10.0 19.700000 44.000000
    F07A1260 north-cn 2021-04-22 15:33:00.0 12.100000 45.000000
    F07A1260 north-cn 2021-04-22 15:33:10.0 13.200000 47.000000
    F07A1260 north-cn 2021-04-22 15:33:20.0 10.600000 46.000000
    ```
