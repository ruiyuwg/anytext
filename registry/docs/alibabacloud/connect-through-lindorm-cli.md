Lindorm-cli is a lightweight command line interface (CLI) provided by Lindorm to connect to and manage Lindorm databases. You can use Lindorm-cli to perform basic SQL operations, such as creating tables, querying data, and writing data. This topic describes how to use Lindorm-cli to connect to and use the Lindorm Time Series Database (LindormTSDB).

## Prerequisites

The client's IP address has been added to the Lindorm whitelist. For more information, see [Set a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).

## **Step 1: Install Lindorm-cli**

1.  Download the Lindorm-cli installation package that corresponds to your operating system. The download links are listed in the following table.
    
    **Note**
    
    You can use the SHA256 checksums in the following table to verify the integrity and authenticity of the downloaded Lindorm-cli installation package.
    
    **Operating system**
    
    **Download link**
    
    Linux
    
    [lindorm-cli for linux](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-latest.tar.gz)
    
    You can also download it directly by running the command: `wget https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-latest.tar.gz`.
    
    Linux-arm64
    
    [lindorm-cli for linux-arm64](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-arm64-latest.tar.gz)
    
    You can also download it directly by running the command: `wget https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-arm64-latest.tar.gz`.
    
    Mac (Intel chip)
    
    [lindorm-cli for mac](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-mac-amd64-latest.tar.gz)
    
    Mac (Arm chip)
    
    [lindorm-cli for mac](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-mac-arm64-latest.tar.gz)
    
    Windows
    
    [lindorm-cli for windows-x64](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-windows-x64-latest.zip)
    
2.  Decompress the installation package.
    
    For example, on a Linux operating system, run the following command to decompress the package.
    
    ```
    tar zxvf lindorm-cli-linux-latest.tar.gz
    ```
    
    After the package is decompressed, the `lindorm-cli` file is stored in the `lindorm-cli-linux-latest` folder.
    

## **Step 2: Connect to LindormTSDB**

## The client is deployed on a Linux or macOS

1.  Go to the folder where the `lindorm-cli` file is stored.
    
    ```
    cd <The folder where lindorm-cli is stored>
    ```
    
2.  Run the following statement to connect to LindormTSDB.
    
    ```
    ./lindorm-cli -url <LindormTSDB SQL URL> -username <username> -password <password> -database <destination database name>
    ```
    
    **Connection example**
    
    ```
    ./lindorm-cli -url jdbc:lindorm:tsdb:url=http://ld-4xo90g5i370cu****-proxy-tsdb.lindorm.rds.aliyuncs.com:8242 -username user -password test -database default
    ```
    
    **Parameter description**
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    LindormTSDB SQL URL
    
    Yes
    
    The [LindormTSDB SQL URL](/help/en/lindorm/user-guide/view-endpoints#section-fw6-u8u-jlf) of the LindormTSDB. Example: `jdbc:lindorm:tsdb:url=http://ld-bp12pc23yfb3*****-proxy-tsdb-pub.lindorm.rds.aliyuncs.com:8242`.
    
    **Note**
    
    You can also use a [LindormTSDB HTTP URL](/help/en/lindorm/user-guide/view-endpoints#section-fw6-u8u-jlf) to connect to LindormTSDB using Lindorm-cli.
    
    username
    
    No
    
    The username that is used to connect to LindormTSDB.
    
    If user authentication and permission verification are not enabled for LindormTSDB, you do not need to set the username and password. For more information, see [User and permission management](/help/en/lindorm/user-guide/manage-accounts#title-x81-6yz-y8x).
    
    password
    
    No
    
    The password that is used to connect to LindormTSDB. If you forget the password, you can [change the password](/help/en/doc-detail/174671.html#topic2090/section-n3z-64v-v73) in the cluster management system of LindormTable.
    
    Destination database name
    
    No
    
    The database to which you want to connect using Lindorm-cli. The default database is \`default\`. During the connection, you can run the `use <destination database name>` statement to switch to the destination database.
    
    If the connection is successful, the following result is returned:
    
    ```
    lindorm-cli version: 1.0.xx
    ```
    
    In the preceding result, `1.0.xx` indicates the version number of Lindorm-cli.
    

## The client is deployed on a Windows operating system

#### **Method 1**

1.  Open the command prompt (CMD) and go to the folder where the `lindorm-cli.exe` file is stored.
    
    ```
    cd <The folder where lindorm-cli.exe is stored>
    ```
    
2.  Run the following command in the command prompt to connect to LindormTSDB:
    
    ```
    lindorm-cli -url <LindormTSDB endpoint for SQL> -username <username> -password <password> -database <Database name>
    ```
    
    If the connection is successful, the following result is returned:
    
    ```
    Connected to jdbc:lindorm:tsdb:url=http://****-proxy-tsdb-pub.lindorm.rds.aliyuncs.com:8242
    lindorm-cli version: 1.0.xx
    ```
    
    In this result, `1.0.xx` is the Lindorm-cli version number.
    

#### **Method 2**

Double-click the **Lindorm-cli.exe** program and run the following statement:

```
connect <LindormTSDB SQL URL> <username> <password> -database <destination database name>
```

If the connection is successful, no result is returned.

## **Step 3: Use LindormTSDB**

### **Create a table**

1.  Create a time series data table.
    
    ```
    CREATE TABLE sensor (
        device_id VARCHAR NOT NULL,
        region VARCHAR NOT NULL,
        time TIMESTAMP NOT NULL,
        temperature DOUBLE,
        humidity BIGINT,
        PRIMARY KEY(device_id, region, time)
    );
    ```
    
    **Note**
    
    -   When you create a time series data table, we recommend that you specify a primary key (PRIMARY KEY). The Basic Edition does not support PRIMARY KEYs. A unique identifier of a data source is usually specified as the PRIMARY KEY, such as the device ID in Internet of Things (IoT) scenarios, the unique vehicle identifier in Internet of Vehicles (IoV) scenarios, or the application ID or `ip:port` in monitoring scenarios.
        
    -   The name of the timestamp column must be **time**. This column indicates the data's timestamp in milliseconds (ms).
        
    
2.  Check whether the sensor table is created.
    
    ```
    SHOW TABLES;
    ```
    
    The following result is returned:
    
    ```
    +-------------------+
    | Tables_In_default |
    +-------------------+
    | sensor            |
    +-------------------+
    ```
    
3.  View the field information of the time series data table.
    
    ```
    DESCRIBE TABLE sensor;
    ```
    
    The following result is returned:
    
    ```
    +-------------+-----------+------------+------------+--------------+
    | columnName  | typeName  | columnKind | primaryKey | partitionTag |
    +-------------+-----------+------------+------------+--------------+
    | device_id   | VARCHAR   | TAG        | true       | true         |
    | region      | VARCHAR   | TAG        | true       | true         |
    | time        | TIMESTAMP | TIMESTAMP  | true       | false        |
    | temperature | DOUBLE    | FIELD      | false      | false        |
    | humidity    | BIGINT    | FIELD      | false      | false        |
    +-------------+-----------+------------+------------+--------------+
    ```
    

### **Write data**

**Note**

If data points have the same tags and timestamps, they are considered the same data point. The data that is written later overwrites the data that is written earlier.

-   Write data points one by one.
    
    ```
    INSERT INTO sensor (device_id, region, time, temperature, humidity) VALUES('F07A1260','north-cn','2021-04-22 15:33:00',12.1,45);
    INSERT INTO sensor (device_id, region, time, temperature, humidity) VALUES('F07A1260','north-cn','2021-04-22 15:33:10',13.2,47);
    INSERT INTO sensor (device_id, region, time, temperature, humidity) VALUES('F07A1260','north-cn','2021-04-22 15:33:20',10.6,46);
    INSERT INTO sensor (device_id, region, time, temperature, humidity) VALUES('F07A1261','south-cn','2021-04-22 15:33:00',18.1,44);
    INSERT INTO sensor (device_id, region, time, temperature, humidity) VALUES('F07A1261','south-cn','2021-04-22 15:33:10',19.7,44);
    ```
    
-   Write data in batches.
    
    ```
    INSERT INTO sensor (device_id, region, time, temperature, humidity) 
    VALUES ('F07A1260','north-cn','2021-04-22 15:33:00',12.1,45),
           ('F07A1260','north-cn','2021-04-22 15:33:10',13.2,47),
           ('F07A1260','north-cn','2021-04-22 15:33:20',10.6,46),
           ('F07A1261','south-cn','2021-04-22 15:33:00',18.1,44),
           ('F07A1261','south-cn','2021-04-22 15:33:10',19.7,44);
    ```
    

### **Query data**

## Conditional query

Query data for the device `F07A1260` from `2021-04-22 15:33:00` to `2021-04-22 15:33:20`:

```
SELECT device_id,region,time,temperature,humidity FROM sensor WHERE device_id = 'F07A1260' AND time >= '2021-04-22 15:33:00' AND time <= '2021-04-22 15:33:20';
```

The following result is returned:

```
+-----------+----------+---------------------------+-------------+----------+
| device_id |  region  |           time            | temperature | humidity |
+-----------+----------+---------------------------+-------------+----------+
| F07A1260  | north-cn | 2021-04-22T15:33:00+08:00 | 12.1        | 45       |
| F07A1260  | north-cn | 2021-04-22T15:33:10+08:00 | 13.2        | 47       |
| F07A1260  | north-cn | 2021-04-22T15:33:20+08:00 | 10.6        | 46       |
+-----------+----------+---------------------------+-------------+----------+
```

## Downsampling query

A downsampling query reduces the sample rate of time series data. This reduces the number of data points in the result set.

The following example shows how to query the temperature for the device `F07A1260` from `2021-04-22 15:33:00` to `2021-04-22 15:33:20` and retrieve the maximum temperature value after downsampling at a 20-second interval:

```
SELECT device_id,region,time,max(temperature) AS max_temperature FROM sensor WHERE device_id = 'F07A1260' AND time >= '2021-04-22 15:33:00' AND time <= '2021-04-22 15:33:20' SAMPLE BY 20s;
```

The following result is returned:

```
+-----------+----------+---------------------------+-----------------+
| device_id |  region  |           time            | max_temperature |
+-----------+----------+---------------------------+-----------------+
| F07A1260  | north-cn | 2021-04-22T15:33:00+08:00 | 13.2            |
| F07A1260  | north-cn | 2021-04-22T15:33:20+08:00 | 10.6            |
+-----------+----------+---------------------------+-----------------+
```

## Aggregate query

Calculate the maximum temperature across all regions:

```
SELECT region,max(temperature) AS max_temperature FROM sensor WHERE time >= '2021-04-22 15:33:00' AND time <= '2021-04-22 15:33:20' GROUP BY region;
```

The following result is returned:

```
+----------+-----------------+
|  region  | max_temperature |
+----------+-----------------+
| north-cn | 13.2            |
| south-cn | 19.7            |
+----------+-----------------+
```

## Common Lindorm-cli commands

-   `help`: Displays help information.
    
-   `connect`: Connects to a server.
    
-   `precision`: Specifies the time display format. Valid values are rfc3339, h, m, s, ms, u, and ns.
    
-   `exit` or `quit`: Disconnects from the current LindormTSDB instance.
    

## **FAQ**

### **Why is the query result empty after data is inserted?**

If the query result is empty after you write data, run the `DESCRIBE DATABASE <database name>` statement to check whether a time to live (TTL) is set for the database. If the data's retention period exceeds the TTL, the data is automatically deleted and cannot be queried.

### **Can I use Lindorm-cli to import and export time series data?**

-   For small amounts of data, you can use Lindorm-cli to quickly import or export CSV files. For this feature, contact Lindorm technical support (DingTalk group number: s0s3eg3).
    
-   For large amounts of data, we recommend that you [use DataX to import data](/help/en/lindorm/user-guide/migrate-data-from-a-mysql-database-to-a-lindorm-time-series-database). Exporting large-scale data is not supported.
