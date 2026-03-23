This guide walks you through the essential steps to create, configure, and connect to a PolarDB for MySQL on ENS cluster (edge cluster).

## **Supported** **regions**

Currently, PolarDB for MySQL on ENS is supported only in **Haikou Telecom**, **Türkiye (Istanbul)-1**, **Macao (China)-2**, and **Vietnam (Hanoi)-3**.

## **1\. Create an ENS network**

Your PolarDB cluster must reside within an Edge Node Service (ENS) network.

**Note**

If you have not used ENS before, you will need to complete the [activation process](/help/en/ens/getting-started/activate-ens) first.

1.  Go to the [ENS console](https://ens.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **VPC Management** > **Networks**.
    
3.  Click **Create Network**.
    
4.  On the **Create Network** page, configure the [VPCs and vSwitches](/help/en/ens/create-and-manage-vpc-and-vswitch) for [the regions (nodes)](#8162f5f6faho4) where you plan to deploy your cluster.
    

## **2\. Create an edge** **cluster**

1.  Go to the PolarDB [edge cluster purchase page](https://yaochi-buy.alibabacloud.com/polardb-ens-create).
    
2.  Configure the following key parameters. You can leave other settings at their default values for this quick start.
    

**Parameter**

**Description**

**Billing Method**

Edge clusters support only the subscription (Pre-paid) billing method.

**Note**

This is ideal for stable, long-term workloads.

**Edge Primary Data Center**

Select the region (node) where the cluster resides.

**Note**

This must be the same region as the ENS network you created in Step 1 to ensure private network connectivity.

**Compatibility**

Choose the MySQL-compatible version for the cluster.

-   **MySQL 8.0.2**: fully compatible with community MySQL 8.0.18 and earlier versions.
    
-   **MySQL 8.0.1**: fully compatible with community MySQL 8.0.13 and earlier versions.
    

**Database Edition**

Choose between **Dedicated** and **General-purpose Instance Types**:

-   Dedicated: Each cluster exclusively uses its allocated computing resources, such as CPUs. It does not share resources with other clusters on the same server. This provides more stable and reliable performance.
    
-   General-purpose: Different clusters on the same server share idle computing resources, such as CPUs. This resource reuse offers better cost-effectiveness.
    

For a detailed comparison of the two editions, see [How to choose between General-purpose and Dedicated specifications](/help/en/polardb/polardb-for-mysql/how-to-select-generic-and-exclusive-specifications#concept-2046333).

**Network and Zone**

Select the VPC and vSwitch you created in Step 1.

**Specification**

Select the node specifications (CPU and memory) that meets your performance needs.

**Nodes**

The default is two nodes (one read/write node and one read-only node). You can configure the number of nodes as needed.

**Note**

-   When you purchase a cluster with one or more read-only nodes, you cannot change the number of read-only nodes to 0 after the purchase. To change the number of read-only nodes to 0 for an existing cluster, purchase a new cluster and migrate the data from the original cluster to the new one. You can use a migration tool such as DTS or the major version upgrade feature.
    
-   Node descriptions:
    
    -   **Read/write node**: Also known as the **Primary Node**. It handles write operations and some read operations. Data is synchronized between the primary node and read-only nodes through physical replication.
        
    -   **Read-only Node**: Handles read operations to offload the primary node. It provides high availability and extensibility.
        
    -   **Column store read-only node**: A functional node for the [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) feature. It uses columnar storage technology to accelerate analytical queries (OLAP) and offload the primary and read-only nodes. It provides high availability and extensibility.
        

**Storage Type**

Select the performance level for your underlying storage.

-   PL0 ESSD: A disk with performance level 0 (PL0).
    
-   PL1 ESSD: A disk with performance level 1 (PL1). It provides 5 times the IOPS of a PL0 ESSD.
    

**Storage Capacity**

Configure the amount of storage space to purchase. The default is 100 GB.

## **3\. Create a database account**

1.  Go to the [PolarDB console for edge clusters](https://polardb.console.alibabacloud.com/ENSClusters) and select your newly created edge cluster.
    
2.  From the left-side menu, click **Settings and Management** > **Accounts**.
    
3.  Click **Create Account**. You can create a **Privileged Account** or **Standard Account** based on your security needs. For more details, see [Account permissions](/help/en/polardb/polardb-for-mysql/user-guide/account-permissions).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5806054571/p993923.png)

## **4\. Get the cluster** **endpoint** address

You will need the cluster's endpoint address to connect to it.

1.  In the [PolarDB console for edge clusters](https://polardb.console.alibabacloud.com/ENSClusters), navigate to your cluster's details page.
    
2.  From the left-side menu, click **Database Connections**.
    
3.  Copy the Cluster Endpoint address. This address load-balances connections across all nodes in your cluster. The default port is `3306`.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5806054571/p993925.png)

## **5\. Connect to your database**

You can select a connection method based on your business requirements. See the following examples of connecting to a cluster:

### Use a client to connect to a cluster

You can use a MySQL client to connect to a PolarDB cluster. MySQL Workbench 8.0.29 is used in this example. The operations by using other types of clients are similar.

1.  Install MySQL Workbench. For more information, visit the [MySQL Workbench download page](https://downloads.mysql.com/archives/workbench/).
    
2.  Start MySQL Workbench and choose **Database** > **Connect to Database**.
    
3.  Enter the connection information and click **OK**.
    
    ![连接界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5411491661/p478554.png)
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Hostname**
    
    The database endpoint. For more information, see [Database connection](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#7ff66e95f9liw).
    
    pc-2\*\*\*.rwlb.rds.aliyuncs.com
    
    **Port**
    
    The port number that corresponds to the database endpoint.
    
    **Note**
    
    The default port number is 3306.
    
    3306
    
    **Username**
    
    The database account. For more information, see [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#d5a2fb9680kup).
    
    polardb\_mysql\_user
    
    **Password**
    
    The password of the database account.
    
    Pass\*\*\*233
    

### Use the CLI to connect to a cluster

If MySQL client is installed on your server, you can run commands in the CLI to connect to a PolarDB for MySQL cluster.

**Syntax**:

```
mysql -h <Endpoint> -P <Port> -u <Account> -p <Password>
```

**Example**:

```
mysql -h pc-2***.rwlb.rds.aliyuncs.com -P3306 -upolardb_mysql_user -pPass***233
```

**Parameter**

**Description**

**Example**

**\-h**

The database endpoint. For more information, see [Database connection](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#7ff66e95f9liw).

pc-2\*\*\*.rwlb.rds.aliyuncs.com

**\-P**

The port number that corresponds to the database endpoint.

**Note**

-   The default port number is 3306.
    
-   If you want to use the default port, you do not need to specify a value for this parameter.
    

3306

**\-u**

The database account. For more information, see [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#d5a2fb9680kup).

polardb\_mysql\_user

**\-p**

The password of the database account.

**Note**

This parameter is required.

-   If you do not specify this parameter, you are required to enter the password again when the `Enter password` message is displayed.
    
-   If you specify this parameter, do not enter a space between `-p` and the password.
    

Pass\*\*\*233

### Use an application to connect to a cluster

Connecting to a PolarDB for MySQL cluster is similar to connecting to regular MySQL databases. You only need to replace the endpoint, port, account, and password of the database. The following examples show how to use applications to access a PolarDB database in some development languages:

#### Java

In this example, a Maven project is used to connect to the PolarDB for MySQL cluster by using the MySQL JDBC driver.

1.  First, add the dependency of the MySQL JDBC driver to the pom.xml file. Sample code:
    
    ```
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.27</version>
    </dependency>
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, port number, `<USER>`, `<PASSWORD>`, `<DATABASE>`, `<YOUR_TABLE_NAME>`, and `<YOUR_TABLE_COLUMN_NAME>` with the information of your database.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.ResultSet;
    import java.sql.Statement;
    
    public class DatabaseConnection {
       public DatabaseConnection() {
       }
    
       public static void main(String[] args) {
          // The endpoint, port, and database name of the PolarDB cluster to be connected.
          String url = "jdbc:mysql://<HOST>:3306/<DATABASE>?useSSL=false&serverTimezone=UTC";
          // The database account.
          String user = "<USER>";
          // The password of the database account.
          String password = "<PASSWORD>";
    
          try {
             Class.forName("com.mysql.cj.jdbc.Driver");
             Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             // The name of the data table to be queried.
             ResultSet rs = stmt.executeQuery("SELECT * FROM `<YOUR_TABLE_NAME>`");
    
             while(rs.next()) {
                // The column name of the data table to be queried.
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
    

#### Python

In this example, Python3 is used to connect to the PolarDB for MySQL cluster by using the PyMySQL library.

1.  First, install the PyMySQL library. You can run the following command to install it:
    
    ```
    pip3 install PyMySQL
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, port number, `<USER>`, `<PASSWORD>`, `<DATABASE>`, and `<YOUR_TABLE_NAME>` with the information of your database.
    
    ```
    import pymysql
    
    # The database connection parameters.
    host = '<HOST>' # The endpoint of the PolarDB cluster.
    port = 3306 # The default port 3306
    user = '<USER>' # The database account.
    password = '<PASSWORD>' # The password of the database account.
    database = '<DATABASE>' # The name of the database to be connected.
    
    try:
        # Establish a database connection.
        connection = pymysql.connect(
            host=host,
            port=port,
            user=user,
            passwd=password,
            db=database
        )
    
        # Obtain the cursor.
        with connection.cursor() as cursor:
            # Execute an SQL query.
            sql = "SELECT * FROM '<YOUR_TABLE_NAME>'" # The name of the table to be queried.
            cursor.execute(sql)
    
            # Obtain the query result.
            results = cursor.fetchall()
            for row in results:
                print(row)
    
    finally:
        # Close the database connection.
        if 'connection' in locals() and connection.open:
            connection.close()
    ```
    

#### Go

In this example, go1.23.0 is used to connect to the PolarDB for MySQL cluster by using the `database/sql` package and `go-sql-driver/mysql` driver.

1.  First, install the `go-sql-driver/mysql` driver. You can run the following command to install the driver:
    
    ```
    go get -u github.com/go-sql-driver/mysql
    ```
    
2.  Connect to the cluster. Replace the `<HOST>`, port number, `<USER>`, `<PASSWORD>`, `<DATABASE>`, and `<YOUR_TABLE_NAME>` with the information of your database.
    
    ```
    package main
    
    import (
        "database/sql"
        "fmt"
        "log"
        _ "github.com/go-sql-driver/mysql"
    )
    
    func main() {
        // Database connection parameters.
        dbHost := "<HOST>" // The endpoint of the PolarDB cluster.
        dbPort := "3306" // The default port 3306.
        dbUser := "<USER>" // The database account.
        dbPass := "<PASSWORD>" // The password of the database account.
        dbName := "<DATABASE>" // The name of the database to be connected.
    
        // Build DSN (Data Source Name)
        dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbPort, dbName)
    
        // Create a database connection.
        db, err := sql.Open("mysql", dsn)
        if err != nil {
            log.Fatalf("Failed to connect to database: %v", err)
        }
        defer db.Close()
    
        // Test the connection.
        err = db.Ping()
        if err != nil {
            log.Fatalf("Failed to ping database: %v", err)
        }
    
        // Create a cursor.
        var result string
        err = db.QueryRow("SELECT VERSION()").Scan(&result)
        if err != nil {
            log.Fatalf("Failed to execute query: %v", err)
        }
    
        // Print the database version.
        fmt.Printf("Connected to database, version: %s\n", result)
    
        // Execute an SQL query.
        rows, err := db.Query("SELECT * FROM '<YOUR_TABLE_NAME>'") // The name of the data table that is queried.
        if err != nil {
            log.Fatalf("Failed to execute query: %v", err)
        }
        defer rows.Close()
    ```
