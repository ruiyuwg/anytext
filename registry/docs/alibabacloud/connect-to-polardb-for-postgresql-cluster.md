This topic describes how to connect to a PolarDB for PostgreSQL cluster.

## **Preparations**

Before you connect to a cluster, perform the following operations:

-   **Obtain the cluster endpoint and port**
    
    ## Centralized PolarDB for PostgreSQL cluster
    
    A centralized PolarDB for PostgreSQL cluster refers to a cluster whose Database Edition is Enterprise Edition or Standard Edition.
    
    Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the cluster list, click the ID of the cluster to go to its **Basic Information** page. Then, you can view the [endpoint](/help/en/polardb/polardb-for-mysql/user-guide/connection-connection-endpoints) information of the cluster in the **Database Connections** section.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p946899.png)
    
    **Note**
    
    -   We recommend that you use the **Cluster Endpoint** of the cluster for connection. The default port number is 3306.
        
    -   Use the **Private** or **Public** endpoint based on your access environment.
        
        -   If you want to access the PolarDB cluster from an ECS instance and the ECS instance is in the same VPC as the PolarDB cluster, use the **Private** endpoint.
            
        -   If you want to access the PolarDB cluster from your on-premises environment, use the **Public** endpoint. By default, no public endpoint is available. Click **Apply** to apply for a public endpoint.
            
    -   A PolarDB cluster cannot achieve optimal performance if you connect it by using a **public endpoint**.
        
    -   You cannot connect to a PolarDB cluster from virtual hosts and lightweight servers by using a **Private** endpoint.
        
    
    ## Distributed PolarDB for PostgreSQL cluster
    
    Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the cluster list, click the ID of the cluster to go to its **Basic Information** page. Then, you can view the [endpoint](/help/en/polardb/polardb-for-postgresql/view-or-apply-for-an-endpoint#title-gij-vcs-abl) information in the **Database Connections** section.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947805.png)
    
    **Note**
    
    -   By default, a distributed PolarDB for PostgreSQL cluster has only one **Primary Endpoint**, and the default port number is 5432.
        
    -   Use the **Private** or **Public** endpoint based on your access environment.
        
        -   If you want to access the PolarDB cluster from an ECS instance and the ECS instance is in the same VPC as the PolarDB cluster, use the **Private** endpoint.
            
        -   If you want to access the PolarDB cluster from your on-premises environment, use the **Public** endpoint. By default, no public endpoint is available. Click **Apply** to apply for a public endpoint.
            
    -   A PolarDB cluster cannot achieve optimal performance if you connect it by using a **public endpoint**.
        
    -   You cannot connect to a PolarDB cluster from virtual hosts and lightweight servers by using a **Private** endpoint.
        
    
-   **Create a database account**
    
    Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the cluster list, click the ID of the cluster to go to its **Basic Information** page. In the left-side navigation pane, choose **Settings and Management** > **Accounts** to [create a database account](/help/en/polardb/polardb-for-postgresql/create-a-database-account).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6033576371/p900858.png)
    
    **Note**
    
    You can create a **Privileged Account** or a **Standard Account**. These two types of accounts have [different permissions](/help/en/polardb/polardb-for-postgresql/account-permissions-1). Create a database account based on your business requirements.
    
-   **Configure a cluster whitelist**
    
    Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the cluster list, click the ID of the cluster that you want to connect to go to its **Basic Information** page. In the left-side navigation pane, choose **Settings and Management** > **Cluster Whitelists**, add an [IP whitelist](/help/en/polardb/polardb-for-postgresql/set-ip-address-whitelists-for-a-cluster) or a [security group](/help/en/polardb/polardb-for-postgresql/set-security-group).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p946900.png)
    
    **Note**
    
    -   If you want to access the PolarDB cluster from an ECS instance and the ECS instance is in the same VPC as the PolarDB cluster, create an IP address whitelist and add the internal IP address of the ECS instance to the whitelist, or add the security group to which the ECS instance belongs.
        
    -   If you want to access the PolarDB cluster from an ECS instance and the ECS instance is in a different VPC from the PolarDB cluster, create an IP address whitelist and add the public IP address of the ECS instance to the whitelist, or add the security group to which the ECS instance belongs.
        
    -   If you want to access the PolarDB cluster from your on-premises environment, create an IP address whitelist and add the public IP address of your on-premises environment to the whitelist.
        
        Use the following methods to obtain the public IP address of your on-premises environment:
        
        -   Linux: Open the CLI, enter the `curl ifconfig.me` command, and then press the Enter key.
            
        -   Windows: Open Command Prompt, enter the `curl ip.me` command, and then press the Enter key.
            
        -   macOS: Start Terminal, enter the `curl ifconfig.me` command, and then press the Enter key.
            
        
        If a proxy is used for your on-premises network environment, the IP address obtained by the preceding method may not be your actual public IP address. You can add the `0.0.0.0/0` CIDR block to a whitelist of the PolarDB cluster. After you connect to the cluster, run the `SELECT pid,usename,datname,client_addr,state,query FROM pg_stat_activity WHERE state = 'active';` command to obtain the actual public IP address and add it to a whitelist of the cluster. Then, delete the `0.0.0.0/0` CIDR block from the whitelist.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p946935.png)
        
    -   If you add the `0.0.0.0/0` CIDR block to an IP whitelist, all sources are allowed to access the cluster. Do not add 0.0.0.0/0 to an IP whitelist of the cluster unless it is necessary.
        
    

After you complete the preparations, you can connect to the cluster.

## **Connect to a cluster**

There are many ways to connect to a cluster. You can choose the most suitable connection method based on your actual business requirements. Below are some examples of how to connect to a cluster.

## Use DMS to connect to a cluster

Data Management (DMS) is a graphical data management tool provided by Alibaba Cloud. It provides various data management services, including data management, schema management, user management, security audit, data trends, data tracking, business intelligence (BI) charts, performance optimization, and server management. You can manage your PolarDB cluster directly by using DMS without using other tools.

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the cluster list, click the ID of the cluster that you want to connect to go to its **Basic Information** page. In the upper-right corner of the page, click **Log On To Database**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947176.png)
    
2.  In the dialog box that appears, enter the database account and password that you created for the cluster, and click **Login**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947188.png)
    
3.  After you log on to the cluster, choose **Database Instances** > **Instances Connected** in the left-side navigation pane to manage the cluster.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947193.png)
    

## Use a client to connect to a cluster

You can use a client to connect to a PolarDB cluster. The following procedure uses the pgAdmin 4 v9.0 client to connect to a cluster.

1.  [Download](https://www.pgadmin.org/download/) and install the pgAdmin 4 client.
    
2.  Open the pgAdmin 4 client, right-click **Servers**, and select **Register > Server...**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947331.png)
    
3.  On the **General** tab, set the connection name. On the **Connection** tab, configure the cluster connection information, and click **Save**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947342.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947348.png)
    
    **Parameter**
    
    **Description**
    
    **Host name/address**
    
    The [endpoint and port](#7ff66e95f9liw) of the PolarDB cluster.
    
    -   To access the PolarDB cluster from an ECS instance, and the ECS instance is in the same VPC as the PolarDB cluster, specify the **Private** endpoint and port.
        
    -   To access the PolarDB cluster from your on-premises environment, specify the **Public** endpoint and port.
        
    -   The default port number is 5432.
        
    
    **Port**
    
    **Username**
    
    The [database account and password](#d5a2fb9680kup) of the PolarDB cluster.
    
    **Password**
    
4.  View the connection result. If the connection information is correct, the following interface appears, indicating a successful connection.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947360.png)
    
    **Note**
    
    `postgres` is the default system database. Do not perform any operations on this database.
    

## Use psql to connect to a cluster

You can download psql from [PostgreSQL Downloads](https://www.postgresql.org/download/) to connect to a PolarDB cluster. You can also use psql in the [PolarDB-Tools](/help/en/polardb/polardb-for-postgresql/polardb-tools) to connect to a PolarDB cluster.

**Note**

-   Th cluster connection method by using psql is the same for Windows and Linux systems.
    
-   For more information about how to use psql, see [psql](https://www.postgresql.org/docs/14/app-psql.html?spm=a2c4g.311009.0.0.79c856b2pWU2Zn).
    

#### **Syntax**

```
psql -h <host> -p <port> -U <username> -d <dbname>
```

**Parameter**

**Description**

`**host**`

The [cluster endpoint and port](#7ff66e95f9liw) of the PolarDB cluster.

-   To access the PolarDB cluster from an ECS instance, and the ECS instance is in the same VPC as the PolarDB cluster, specify the **Private** endpoint and port.
    
-   To access the PolarDB cluster from your on-premises environment, specify the **Public** endpoint and port.
    
-   The default port number is 5432
    

`**port**`

`**username**`

The [database account](#d5a2fb9680kup) of the PolarDB cluster.

`**dbname**`

The [database name](/help/en/polardb/polardb-for-postgresql/pg-database-management/#section-efz-yt5-q2b).

#### **Example**

```
psql -h pc-xxx.rwlb.rds.aliyuncs.com -p 5432 -U testusername -d postgres
```

## Connect to a cluster in a programming language

Connecting to a PolarDB for PostgreSQL cluster is similar to connect a regular PostgreSQL database. You only need to change the connection parameters, including the endpoint, port, account, and password. Below are examples of how to connect to a PolarDB cluster in specific programming languages.

## Java

This example describes how to connect to a PolarDB for PostgreSQL cluster by using the PostgreSQL JDBC driver in a Maven-based Java project.

1.  Add the PostgreSQL JDBC driver dependency to your pom.xml file. Sample code:
    
    ```
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
      <version>42.2.18</version>
    </dependency>
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, `<PORT>`, `<USER>`, `<PASSWORD>`, `<DATABASE>`, `<YOUR_TABLE_NAME>`, and `<YOUR_TABLE_COLUMN_NAME>` placeholders with the actual cluster connection parameters.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.ResultSet;
    import java.sql.Statement;
    
    public class PolarDBConnection {
        public static void main(String[] args) {
            // Database URL, username, and password.
            String url = "jdbc:postgresql://<HOST>:<PORT>/<DATABASE>";
            String user = "<USER>";
            String password = "<PASSWORD>";
    
            try {
                // Load the PostgreSQL JDBC driver.
                Class.forName("org.postgresql.Driver");
                
                // Establish the connection.
                Connection conn = DriverManager.getConnection(url, user, password);
                
                // Create a Statement object.
                Statement stmt = conn.createStatement();
                
                // Execute an SQL query.
                ResultSet rs = stmt.executeQuery("SELECT * FROM <YOUR_TABLE_NAME>");
                
                // Process the result set.
                while (rs.next()) {
                    System.out.println(rs.getString("<YOUR_TABLE_COLUMN_NAME>"));
                }
                
                // Close resources.
                rs.close();
                stmt.close();
                conn.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    ```
    

## Python

This example describes how to connect to a PolarDB for PostgreSQL cluster by using the `psycopg2` library in Python 3.

1.  Install the psycopg2 library.
    
    ```
    pip3 install psycopg2-binary
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, `<PORT>`, `<USER>`, `<PASSWORD>`, `<DATABASE>`, and `<YOUR_TABLE_NAME>` placeholders with the actual cluster connection parameters.
    
    ```
    import psycopg2
    
    try:
        # Connection parameters
        conn = psycopg2.connect(
            host="<HOST>",  # The cluster endpoint.
            database="<DATABASE>",  # The database name.
            user="<USER>",  # The username.
            password="<PASSWORD>",  # The password.
            port="<PORT>"  # The port number.
        )
    
        # Create a cursor object.
        cursor = conn.cursor()
    
        # Execute a query.
        cursor.execute("SELECT * FROM <YOUR_TABLE_NAME>")
    
        # Get all results.
        records = cursor.fetchall()
        for record in records:
            print(record)
            
    except Exception as e:
        print("Error:", e)
    finally:
        # Close the connection.
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()
    ```
    

## Go

This example describes how to connect to a PolarDB for PostgreSQL cluster by using the `database/sql` package and the `lib/pq` driver in Go 1.23.0.

1.  Install the `lib/pq` driver.
    
    ```
    go get -u github.com/lib/pq
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, `<PORT>`, `<USER>`, `<PASSWORD>`, `<DATABASE>`, and `<YOUR_TABLE_NAME>` placeholders with the actual cluster connection parameters.
    
    ```
    package main
    
    import (
        "database/sql"
        "fmt"
        "log"
    
        _ "github.com/lib/pq" // Initialize the PostgreSQL driver.
    )
    
    func main() {
        // The connection string format.
        connStr := "user=<USER> password=<PASSWORD> dbname=<DATABASE> host=<HOST> port=<PORT> sslmode=disable"
    
        // Open a database connection.
        db, err := sql.Open("postgres", connStr)
        if err != nil {
            log.Fatal(err)
        }
        defer db.Close() // Close the connection when the program exits.
    
        // Test the connection.
        err = db.Ping()
        if err != nil {
            log.Fatal(err)
        }
        fmt.Println("Connected to PostgreSQL!")
    
        // Execute a query.
        rows, err := db.Query("SELECT * FROM <YOUR_TABLE_NAME>")
        if err != nil {
            log.Fatal(err)
        }
        defer rows.Close()
    }
    ```
    

## **FAQ**

### **Why am I unable to connect an ECS instance to a** PolarDB **cluster**?

Use the following steps to troubleshoot the issue:

1.  Check whether the PolarDB cluster is in the **Running** state.
    
2.  Check whether the database endpoint, port, account, and password are correct. For more information, see [Obtain the database endpoint and port](#7ff66e95f9liw).
    
3.  Check the network conditions. You can run `ping` or `telnet` commands in the ECS instance to test the network connectivity.
    
    1.  If you are using a **Private** endpoint:
        
        1.  Check whether the ECS instance and the PolarDB cluster reside in the same VPC. If not, you cannot use the **Private** endpoint. You can use one of the following methods to place the ECS instance and PolarDB clusters in the same VPC:
            
            -   Switch the VPC of the ECS instance.
                
            -   Use Cloud Enterprise Network (CEN) to [connect VPCs in the same region](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router).
                
        2.  Check whether the private IP address, CIDR block, or security group of the ECS instance is added to the whitelist of the PolarDB cluster. For more information, see [Configure a cluster whitelist](#98bf7f43ecbic).
            
    2.  If you are using a **Public** endpoint, check whether the public IP address or security group of the ECS instance is added to the whitelist of the PolarDB cluster. For more information, see [Configure a cluster whitelist](#98bf7f43ecbic).
        

**Note**

Virtual hosts and lightweight servers cannot be used to connect to a PolarDB cluster by using a **Private** endpoint.

### **Why am I unable to connect to the** PolarDB **cluster** from my **on-premise** environment?

Use the following steps to troubleshoot the issue:

1.  Check whether the PolarDB cluster is in the **Running** state.
    
2.  Check whether the database endpoint, port, account, and password are correct. For more information, see [Obtain the database endpoint and port](#7ff66e95f9liw).
    
3.  **Note**
    
    A **Public** endpoint must be used. If you are using an ECS instance that resides in the same VPC as the PolarDB cluster, you can use a **Private** endpoint.
    
4.  Check the network conditions. You can run `ping` or `telnet` commands in your local environment to test the network connectivity.
    
5.  Check whether the public IP address or CIDR block of your local environment is added to the whitelist of the PolarDB cluster. For more information, see [Configure a whitelist](#98bf7f43ecbic)
    
    Use the following methods to obtain the public IP address of your on-premises environment:
    
    -   Linux: Open the CLI, enter the `curl ifconfig.me` command, and then press the Enter key.
        
    -   Windows: Open Command Prompt, enter the `curl ip.me` command, and then press the Enter key.
        
    -   macOS: Start Terminal, enter the `curl ifconfig.me` command, and then press the Enter key.
        
    
    If a proxy is used for your on-premises network environment, the IP address obtained by the preceding method may not be your actual public IP address. You can add the `0.0.0.0/0` CIDR block to a whitelist of the PolarDB cluster. After you connect to the cluster, run the `SELECT pid,usename,datname,client_addr,state,query FROM pg_stat_activity WHERE state = 'active';` command to obtain the actual public IP address and add it to a whitelist of the cluster. Then, delete the `0.0.0.0/0` CIDR block from the whitelist.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p946935.png)
    

### **I cannot connect to** the PolarDB **cluster. The following error is returned:** password authentication failed for user

The database account or password is incorrect. Make sure you enter the correct account and password. You can log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/) and choose **Settings and Management** > **Accounts** to manage the database account and password.

### **I cannot connect to** the PolarDB **cluster. The following error is returned:** name or service not known

The cluster endpoint is incorrect. Make sure you enter the correct endpoint. The correct endpoint format is pc-xxx.xxx.rds.aliyuncs.com. You can log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/) and choose **Basic Information** > **Database Connections** to manage the endpoints of your cluster.

### **I cannot connect to** the PolarDB **cluster. The following error is returned:** connection timed out

The public IP address or CIDR block of the current environment is not added to the whitelist of the PolarDB cluster, or the public IP address or CIDR block added to the whitelist is incorrect.

Use the following methods to obtain the public IP address of your on-premises environment:

-   Linux: Open the CLI, enter the `curl ifconfig.me` command, and then press the Enter key.
    
-   Windows: Open Command Prompt, enter the `curl ip.me` command, and then press the Enter key.
    
-   macOS: Start Terminal, enter the `curl ifconfig.me` command, and then press the Enter key.
    

If a proxy is used for your on-premises network environment, the IP address obtained by the preceding method may not be your actual public IP address. You can add the `0.0.0.0/0` CIDR block to a whitelist of the PolarDB cluster. After you connect to the cluster, run the `SELECT pid,usename,datname,client_addr,state,query FROM pg_stat_activity WHERE state = 'active';` command to obtain the actual public IP address and add it to a whitelist of the cluster. Then, delete the `0.0.0.0/0` CIDR block from the whitelist.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p946935.png)

### **How do I change the connection method for a** **PolarDB** **cluster by using DMS from the primary endpoint to the cluster endpoint?**

If you use DMS to connect to a cluster, the system uses the **Primary Endpoint** to connect to the cluster by default. If you must use the **Cluster Endpoint** to connect to the PolarDB cluster, perform the following steps:

1.  After you connect to the cluster by using DMS, choose **Database Instances** > **Instances Connected** in the left-side navigation pane. Find and right-click the cluster and select **Edit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1337852471/p851247.png)
    
2.  In the **Edit** dialog box, navigate to the **Basic Information** section. Change the **Connection Method** parameter to **Connection String Address**, enter the **cluster endpoint**, and then click **Save**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213345471/p947471.png)
    

**Important**

After you change the connection string for accessing a PolarDB cluster, close the original SQL window and open a new one to ensure that the updated settings take effect.

## **References**

-   [View or apply for an endpoint](/help/en/polardb/polardb-for-postgresql/view-or-apply-for-an-endpoint)
    
-   [Modify or delete an endpoint](/help/en/polardb/polardb-for-postgresql/modify-or-release-a-connection-address)
    
-   [Private domain names](/help/en/polardb/polardb-for-postgresql/private-domain-names-1)
    
-   [PolarDB-Tools](/help/en/polardb/polardb-for-postgresql/polardb-tools)
