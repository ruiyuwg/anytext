The streaming engine can be accessed using SQL. This topic describes how to connect to the streaming engine using a MySQL client.

## **Prerequisites**

-   You have [enabled the streaming engine](/help/en/lindorm/user-guide/activate-the-lindorm-streaming-engine).
    
-   You have added the IP address of the client to the [Lindorm whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## **Procedure**

### **Install a MySQL client**

**Important**

Install MySQL client 8.0 or later.

-   Linux
    
    Run the installation command that corresponds to your package manager.
    
    -   APT package manager
        
        ```
        sudo apt-get install mysql-client
        ```
        
    -   Yum package manager
        
        ```
        sudo yum install mysql
        ```
        
-   macOS
    
    Use the Homebrew package manager to run the following command:
    
    ```
    brew install mysql-client
    ```
    
-   Windows
    
    For installation instructions, see [Install MySQL Command-Line Client](https://dev.mysql.com/downloads/installer/).
    

### **Obtain the endpoint**

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster). In the upper-left corner of the page, select the region of the instance. On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
2.  In the navigation pane on the left, choose **Database Connections**.
    
3.  Click the **Stream Engine** tab and obtain the **Lindorm streaming engine SQL address ({link})**.
    

### **Connect to the streaming engine**

Run the following command to connect to the streaming engine.

```
mysql -h<mysql_url> -P33060 -u<username> -p<password>
```

**Parameters**

**Parameter**

**Example**

**Method of obtaining**

MySQL URL

ld-bp1mq0tdzbx1m\*\*\*\*-proxy-stream-vpc.lindorm.aliyuncs.com

The Lindorm Stream SQL endpoint of the streaming engine. Remove the colon and port number from the end of the endpoint.

**Important**

Currently, you can connect only through a **virtual private cloud (VPC)** endpoint.

username

test

The username and password used to connect to the streaming engine. You can obtain them from the **Streaming Engine** tab.

password

test

**Example**

```
mysql -hld-bp1mq0tdzbx1m****-proxy-stream-vpc.lindorm.aliyuncs.com -P33060 -utest -ptest
```

## **References**

-   [Quick Start: Real-time ETL](/help/en/lindorm/user-guide/real-time-etl): Learn how to use ETL SQL to perform real-time pre-computation at the table level.
    
-   [Stream Job O&M Platform](/help/en/lindorm/user-guide/quick-start-for-the-stream-job-management-platform): Learn how to submit and manage open-source JAR, SQL, and Python jobs to efficiently develop and manage stream jobs.
