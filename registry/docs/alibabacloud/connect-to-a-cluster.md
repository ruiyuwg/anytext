This topic describes how to connect to a PolarDB for MySQL cluster.

## **Preparations**

Before connecting to a database cluster, complete the following tasks:

-   **Obtain the database endpoint and port**
    
    Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the **Cluster List**, click the ID of the target cluster to go to the cluster details page. In the **Database Connection** section, obtain the [database endpoint (primary endpoint, cluster endpoint, and custom endpoint)](/help/en/polardb/polardb-for-mysql/user-guide/connection-connection-endpoints).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900844.png)
    
    **Note**
    
    -   Use the **cluster endpoint**. The default port is 3306.
        
    -   Select **private network** or **public network** based on your access environment.
        
        -   If you use an ECS instance to access PolarDB and the ECS instance and the PolarDB cluster are in the same VPC, select **private network**.
            
        -   If you access PolarDB from an on-premises environment, select **public network**. To obtain a public endpoint, click **Request** on the right.
            
    -   The **public network** is the Internet. Accessing the cluster over the **public network** may not deliver optimal performance for your PolarDB cluster.
        
    -   Connecting to a PolarDB cluster from a virtual host or a simple application server using a **private network** endpoint is not supported.
        
    
-   **Create a database account**
    
    Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the **Cluster List**, click the ID of the target cluster to go to the cluster details page. On the **Configurations and Management** > **Account Management** page, [create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900858.png)
    
    **Note**
    
    Database accounts are categorized into **privileged accounts** and **standard accounts**. These two types of accounts have different permissions. Create a database account as needed.
    
-   **Configure a cluster whitelist**
    
    Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the **Cluster List**, click the ID of the target cluster to go to the cluster details page. On the **Configurations and Management** > **Cluster Whitelist** page, add an [IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-whitelist-for-a-cluster/) or a [security group](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-security-group).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900863.png)
    
    **Note**
    
    -   If you use an ECS instance to access PolarDB and the ECS instance and the PolarDB cluster are in the same VPC, you can add the private IP address of the ECS instance to a new IP whitelist group, or add the security group of the ECS instance to the cluster whitelist.
        
    -   If you use an ECS instance to access PolarDB, but the ECS instance and the PolarDB cluster are not in the same VPC, you can add the public IP address of the ECS instance to a new IP whitelist group, or add the security group of the ECS instance to the cluster whitelist.
        
    -   If you access PolarDB from an on-premises environment, add the public IP address of your on-premises environment to a new IP whitelist group.
        
        You can obtain the public IP address of your on-premises environment as follows:
        
        -   Linux operating system: Open the terminal and run the `curl ifconfig.me` command.
            
        -   Windows operating system: Open the command prompt and run the `curl ip.me` command.
            
        -   macOS operating system: Open the terminal and run the `curl ifconfig.me` command.
            
        
        If your on-premises network environment uses a proxy server or has other similar configurations, the IP address obtained using the preceding methods may not be your real public IP address. You can add the IP address range `0.0.0.0/0` to the PolarDB cluster whitelist. After you successfully connect to the cluster, run the `SHOW PROCESSLIST;` command to obtain the real public IP address and add it to the cluster whitelist. Then, remove the IP address range `0.0.0.0/0` from the whitelist.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p901141.png)
        
    -   The IP address range `0.0.0.0/0` allows access from all sources, which poses a significant security threat. Do not add it to the whitelist unless necessary.
        
    

After you complete the preparations, connect to the database cluster.

## **Connect to a database cluster**

You can connect to a database cluster in several ways. Choose a method that suits your needs. The following sections provide examples:

## Use DMS to connect to the cluster

DMS is a graphical data management tool from Alibaba Cloud. It integrates data management, structure management, user authorization, security auditing, data trend analysis, data tracking, BI charts, performance optimization, and server management. You can manage your PolarDB cluster directly in DMS without other tools.

1.  Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the **Cluster List**, click the ID of the target cluster to go to the cluster details page. In the upper-right corner of the page, click **Log on to Database**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900943.png)
    
2.  In the dialog box that appears, enter the **database account** and **database password** that you created in the PolarDB for MySQL cluster, and then click **Log on**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900952.png)
    
3.  After you log on, you can find the logged-on PolarDB for MySQL cluster in the **Logged-in Instances** list in the navigation pane on the left and perform management operations.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900963.png)
    

## Use a client to connect to the cluster

You can use any general-purpose client to connect to a PolarDB cluster. This section uses MySQL Workbench 8.0.29 as an example. The procedure for other clients is similar.

1.  Install MySQL Workbench. For the official download link, see the [MySQL Workbench download page](https://downloads.mysql.com/archives/workbench/).
    
2.  Open MySQL Workbench and choose **Database** > **Connect to Database**.
    
3.  Enter the connection information and click **OK**.
    
    ![连接界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5411491661/p478554.png)
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Hostname**
    
    The [database endpoint](#7ff66e95f9liw).
    
    pc-2\*\*\*.rwlb.rds.aliyuncs.com
    
    **Port**
    
    The port number of the database endpoint.
    
    **Note**
    
    The default port is 3306.
    
    3306
    
    **Username**
    
    The [database account](#d5a2fb9680kup).
    
    polardb\_mysql\_user
    
    **Password**
    
    The password of the database account.
    
    Pass\*\*\*233
    

## Use the command line to connect to the cluster

If a MySQL client is installed on your server, you can use the command line to connect to the PolarDB for MySQL database cluster.

**Syntax**:

```
mysql -h<endpoint> -P<port> -u<database_username> -p<database_user_password>
```

**Example**:

```
mysql -h pc-2***.rwlb.rds.aliyuncs.com -P3306 -upolardb_mysql_user -pPass***233
```

**Parameter**

**Description**

**Example**

**\-h**

The [database endpoint](#7ff66e95f9liw).

pc-2\*\*\*.rwlb.rds.aliyuncs.com

**\-P**

The port number of the database endpoint.

**Note**

-   The default port is 3306.
    
-   If the port is the default port, you can omit this parameter.
    

3306

**\-u**

The [database account](#d5a2fb9680kup).

polardb\_mysql\_user

**\-p**

The password of the database account.

**Note**

This parameter is required.

-   If you omit this parameter, you are prompted to enter the password after `Enter password`.
    
-   If you include this parameter, do not add a space between `-p` and the password.
    

Pass\*\*\*233

## Use an application to connect to the cluster

The method for connecting to a PolarDB for MySQL cluster is the same as connecting to any other MySQL database. You only need to replace the database endpoint, port, account, and password. The following sections provide examples of how to access a PolarDB database from an application using different programming languages:

## Java

This section uses a Maven project as an example to show how to use the MySQL Java Database Connectivity (JDBC) driver to connect to a PolarDB for MySQL cluster.

1.  First, add the dependency for the MySQL JDBC driver to the pom.xml file. The following code provides an example:
    
    ```
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.27</version>
    </dependency>
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, port number, `<USER>`, `<PASSWORD>`, `<DATABASE>`, `<YOUR_TABLE_NAME>`, and `<YOUR_TABLE_COLUMN_NAME>` parameters with your actual information.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.ResultSet;
    import java.sql.Statement;
    
    public class DatabaseConnection {
       public DatabaseConnection() {
       }
    
       public static void main(String[] args) {
          // The endpoint, port, and name of the database to connect to.
          String url = "jdbc:mysql://<HOST>:3306/<DATABASE>?useSSL=false&serverTimezone=UTC";
          // The database account.
          String user = "<USER>";
          // The password of the database account.
          String password = "<PASSWORD>";
    
          try {
             Class.forName("com.mysql.cj.jdbc.Driver");
             Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             // The name of the data table to retrieve.
             ResultSet rs = stmt.executeQuery("SELECT * FROM `<YOUR_TABLE_NAME>`");
    
             while(rs.next()) {
                // The name of the column in the data table to retrieve.
                System.out.println(rs.getString("<YOUR_TABLE_COLUMN_NAME>"));
             }
    
             rs.close();
             stmt.close();
             conn.close();
          } catch (Exception var7) {
             var7.printStackTrace();
          }
    
       }
    }
    ```
    

## Python

This section uses Python 3 as an example to show how to use the PyMySQL library to connect to a PolarDB for MySQL cluster.

1.  First, install the PyMySQL library. If you have not installed it, run the following command:
    
    ```
    pip3 install PyMySQL
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, port number, `<USER>`, `<PASSWORD>`, `<DATABASE>`, and `<YOUR_TABLE_NAME>` parameters with your actual information.
    
    ```
    import pymysql
    
    # Database connection parameters
    host = '<HOST>'  # The endpoint of the PolarDB cluster
    port = 3306  # The default port is 3306
    user = '<USER>'  # The database account
    password = '<PASSWORD>'  # The password of the database account
    database = '<DATABASE>'  # The name of the database to connect to
    
    try:
        # Create a database connection
        connection = pymysql.connect(
            host=host,
            port=port,
            user=user,
            passwd=password,
            db=database
        )
    
        # Get the cursor
        with connection.cursor() as cursor:
            # Execute an SQL query
            sql = "SELECT * FROM `<YOUR_TABLE_NAME>`"  # The name of the data table to retrieve
            cursor.execute(sql)
    
            # Get the query results
            results = cursor.fetchall()
            for row in results:
                print(row)
    
    finally:
        # Close the database connection
        if 'connection' in locals() and connection.open:
            connection.close()
    ```
    

## Go

This section uses Go 1.23.0 as an example to show how to use the `database/sql` package and the `go-sql-driver/mysql` driver to connect to a PolarDB for MySQL cluster.

1.  First, install the `go-sql-driver/mysql` driver. You can run the following command to install it:
    
    ```
    go get -u github.com/go-sql-driver/mysql
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, port number, `<USER>`, `<PASSWORD>`, `<DATABASE>`, and `<YOUR_TABLE_NAME>` parameters with your actual information.
    
    ```
    package main
    
    import (
        "database/sql"
        "fmt"
        "log"
        _ "github.com/go-sql-driver/mysql"
    )
    
    func main() {
        // Database connection parameters
        dbHost := "<HOST>"       // The endpoint of the PolarDB cluster
        dbPort := "3306"         // The default port is 3306
        dbUser := "<USER>"       // The database account
        dbPass := "<PASSWORD>"   // The password of the database account
        dbName := "<DATABASE>"   // The name of the database to connect to
    
        // Build the Data Source Name (DSN)
        dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbPort, dbName)
    
        // Open a database connection
        db, err := sql.Open("mysql", dsn)
        if err != nil {
            log.Fatalf("Failed to connect to database: %v", err)
        }
        defer db.Close()
    
        // Test the connection
        err = db.Ping()
        if err != nil {
            log.Fatalf("Failed to ping database: %v", err)
        }
    
        // Create a cursor
        var result string
        err = db.QueryRow("SELECT VERSION()").Scan(&result)
        if err != nil {
            log.Fatalf("Failed to execute query: %v", err)
        }
    
        // Print the database version
        fmt.Printf("Connected to database, version: %s\n", result)
    
        // Execute an SQL query
        rows, err := db.Query("SELECT * FROM `<YOUR_TABLE_NAME>`") // The name of the data table to retrieve
        if err != nil {
            log.Fatalf("Failed to execute query: %v", err)
        }
        defer rows.Close()
    }
    ```
    

## **FAQ**

### **An ECS instance cannot connect to a** PolarDB **cluster**

Troubleshoot the issue as follows:

1.  Check whether the PolarDB cluster is in the **running** state.
    
2.  Check whether the database endpoint, port, account, and password are correct. For more information, see [Obtain the database endpoint and port](#7ff66e95f9liw).
    
3.  Check for network issues. You can run `ping <database endpoint>` or `telnet <database endpoint> <port>` on the ECS instance to test network connectivity.
    
    1.  If you are using a **private network** endpoint:
        
        1.  Check whether the ECS instance and the PolarDB cluster are in the same VPC. If they are not in the same VPC, you cannot use the **private network** endpoint. Use one of the following solutions to place the ECS instance and the PolarDB cluster in the same VPC:
            
            -   Switch the VPC of the ECS instance.
                
            -   If your cluster is a Cluster Edition cluster, you can [switch the VPC of the cluster](/help/en/polardb/polardb-for-mysql/user-guide/change-the-vpc-and-vswitch#17869d614ejh0).
                
            -   Use Cloud Enterprise Network (CEN) to enable [communication between VPCs in the same region](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router).
                
        2.  Check whether the private IP address, IP address range, or security group of the ECS instance is added to the [cluster whitelist](#98bf7f43ecbic).
            
    2.  If you are using a **public network** endpoint, check whether the public IP address or security group of the ECS instance is added to the [cluster whitelist](#98bf7f43ecbic).
        

**Note**

Connecting to a PolarDB cluster from a virtual host or a simple application server using a **private network** endpoint is not supported.

### **An on-premises environment cannot connect to a** PolarDB **cluster**

Troubleshoot the issue as follows:

1.  Check whether the PolarDB cluster is in the **running** state.
    
2.  Check whether the database endpoint, port, account, and password are correct. For more information, see [Obtain the database endpoint and port](#7ff66e95f9liw).
    
    **Note**
    
    The database endpoint must be a **public network** endpoint. If you are using an ECS instance that is in the same VPC as the PolarDB cluster, you can use a **private network** endpoint.
    
3.  Check for network issues. You can run `ping <database endpoint>` or `telnet <database endpoint> <port>` in your on-premises environment to test network connectivity.
    
4.  Check whether the public IP address or IP address range of your on-premises environment is added to the [cluster whitelist](#98bf7f43ecbic).
    
    You can obtain the public IP address of your on-premises environment as follows:
    
    -   Linux operating system: Open the terminal and run the `curl ifconfig.me` command.
        
    -   Windows operating system: Open the command prompt and run the `curl ip.me` command.
        
    -   macOS operating system: Open the terminal and run the `curl ifconfig.me` command.
        
    
    If your on-premises network environment uses a proxy server or has other similar configurations, the IP address obtained using the preceding methods may not be your real public IP address. You can add the IP address range `0.0.0.0/0` to the PolarDB cluster whitelist. After you successfully connect to the cluster, run the `SHOW PROCESSLIST;` command to obtain the real public IP address and add it to the cluster whitelist. Then, remove the IP address range `0.0.0.0/0` from the whitelist.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p901141.png)
    

### **Cannot connect to a** PolarDB **cluster with the error "Access denied for user 'xxx'@'xxx' (using password: YES)"**

The database account or password is incorrect. Check whether you entered them correctly. You can go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/) and manage the database account and password on the **Configurations and Management** > **Account Management** page.

### **Cannot connect to a** PolarDB **cluster with the error "Unknown MySQL server host 'xxx'"**

The database endpoint is incorrect. Check whether you entered it correctly. The correct format is pc-xxxxxx.rwlb.rds.aliyuncs.com. You can go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/) and manage your database endpoint in the **Basic Information** > **Database Connection** section.

### **Cannot connect to a** PolarDB **cluster with the error "**Can't connect to MySQL server on 'xxx'" or "Connection timed out"

This may be because the public IP address or IP address range of your current environment is not added to the whitelist of the PolarDB cluster, or the public IP address or IP address range you entered is incorrect.

You can obtain the public IP address of your on-premises environment as follows:

-   Linux operating system: Open the terminal and run the `curl ifconfig.me` command.
    
-   Windows operating system: Open the command prompt and run the `curl ip.me` command.
    
-   macOS operating system: Open the terminal and run the `curl ifconfig.me` command.
    

If your on-premises network environment uses a proxy server or has other similar configurations, the IP address obtained using the preceding methods may not be your real public IP address. You can add the IP address range `0.0.0.0/0` to the PolarDB cluster whitelist. After you successfully connect to the cluster, run the `SHOW PROCESSLIST;` command to obtain the real public IP address and add it to the cluster whitelist. Then, remove the IP address range `0.0.0.0/0` from the whitelist.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p901141.png)

### **How do I change the connection method in DMS to use a** **cluster endpoint** **to connect to a** PolarDB **cluster?**

If you [use DMS to connect to a cluster](#161fcd1edfvlr), because DMS uses the **Primary Endpoint** to connect to the cluster by default, you must change the connection method to use the **Cluster Endpoint** to connect to the PolarDB cluster for certain features (such as [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) and [PolarDB for AI](/help/en/polardb/polardb-for-mysql/polardb-for-ai/)) so that the database proxy (Proxy) automatically routes SQL statements to the corresponding functional nodes.

**Procedure:**

1.  After connecting to the cluster through DMS, in the **Database Instances** > **Logged-in Instances** list in the navigation pane on the left, find the target cluster, right-click it, and select **Edit Instance**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1337852471/p851247.png)
    
2.  In the Edit Instance dialog box, change **Basic Information** > **Entry Method** to **Connection String**, enter the **cluster endpoint** of the cluster, and click **Save**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1337852471/p851263.png)
    

**Important**

After you complete the modification, close the original SQL window and open a new SQL window to execute SQL, because the original SQL window uses the **Primary Endpoint** to connect to the cluster, and you have modified the **Connection String Address**.

### **Why do connection errors occur after I set the weight of a read-only node in a cluster endpoint to 0 and then remove the node?**

-   **Scenario**: You need to remove a read-only node from a cluster endpoint. To avoid affecting connections to the node, you first set the read/write splitting weight of the read-only node to 0. You expect that after the weight is set to 0, subsequent read requests will not be sent to this read-only node. However, after you remove the node from the cluster endpoint, connection errors occur on the application side.
    
-   **Cause**: A cluster endpoint has two **Load Balancing Policy**: **Active Request-based Load Balancing** and **Connections-based Load Balancing**:
    
    -   **Active Request-based Load Balancing**: After reducing the weight of a read-only node to 0, subsequent requests will no longer be routed to that node.
        
    -   **Connections-based Load Balancing**: Load balancing is performed only during the connection establishment phase. If a previously established connection is connected to a read-only node, subsequent requests on that connection are always sent to that read-only node.
        
-   **Solution**:
    
    1.  Switch the **Load Balancing Policy** for the cluster endpoint to **Active Request-based Load Balancing**.
        
    2.  Set the read/write splitting weight of the target read-only node to 0.
        
    3.  Remove the read-only node.
        

## **References**

-   [Endpoints (primary endpoints, cluster endpoints, and custom addresses)](/help/en/polardb/polardb-for-mysql/user-guide/connection-connection-endpoints)
    
-   [Manage endpoints](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint)
    
-   [Switch VPCs and vSwitches](/help/en/polardb/polardb-for-mysql/user-guide/change-the-vpc-and-vswitch)
    
-   [Private domain names](/help/en/polardb/polardb-for-mysql/user-guide/private-domain-names)
