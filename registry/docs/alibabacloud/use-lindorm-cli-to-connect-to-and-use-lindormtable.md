Lindorm-cli is a simple command line interface (CLI) that Lindorm provides for connecting to and managing Lindorm databases. You can use Lindorm-cli to perform basic SQL operations, such as creating tables, querying data, writing data, and exporting data. This topic describes how to connect to and use Lindorm LindormTable using Lindorm-cli.

## Prerequisites

The environment where you run Lindorm-cli is referred to as the **client** environment. Before you use Lindorm-cli to access LindormTable, confirm the following:

-   The IP address of the **client** is added to the Lindorm whitelist. For more information, see [Set a whitelist](/help/en/lindorm/getting-started/configure-a-whitelist).
    
-   The **network type** for the connection between the client environment and Lindorm.
    
    The following network types can be used to connect to LindormTable:
    
    **Network type**
    
    **Description**
    
    [Virtual private cloud (VPC)](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb) (Recommended)
    
    A virtual private cloud (VPC) is your private network on the cloud. Different VPCs have layer 2 logical isolation for high security. When lindorm-cli is deployed on an [ECS instance](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome), connecting to LindormTable over a VPC provides higher security and lower network latency.
    
    Public network
    
    The public network is the Internet. To test or manage LindormTable from an on-premises device, deploy lindorm-cli on the device and connect to LindormTable over the public network.
    
    **Note**
    
    -   Connecting over the public network does not incur traffic fees but poses security risks. Connect over a VPC for higher security.
        
    -   You must enable the public endpoint in the console. For more information, see [Procedure](/help/en/lindorm/user-guide/view-endpoints#section-jsr-63m-lmd).
        
    

## **Installation method**

1.  Download the Lindorm-cli installation package for your operating system. The download links are provided in the following table.
    
    **Note**
    
    You can use the SHA256 checksums in the following table to verify the integrity and authenticity of the downloaded Lindorm-cli installation package.
    
    **Operating system**
    
    **Download link**
    
    **SHA256 checksum**
    
    Linux
    
    [lindorm-cli for linux](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-latest.tar.gz)
    
    Direct download command:
    
    ```
    wget https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-latest.tar.gz
    ```
    
    0f4ccaf214b41fdf8d3dd5f0ed4f92f1d5e6b0a11da3d217c9df6d382f0080df
    
    Linux (arm64)
    
    [lindorm-cli for linux-arm64](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-arm64-latest.tar.gz)
    
    Direct download command:
    
    ```
    wget https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-linux-arm64-latest.tar.gz
    ```
    
    1bfb992853a26c703b2d9e2bd50e4d7e31f88992bcb7e70ac30331f5998c269e
    
    Mac (Intel chip)
    
    [lindorm-cli for mac](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-mac-amd64-latest.tar.gz)
    
    af8a78bfe8ef53d1df25df99b5803ef3f55da7e943d730a1a6d44cd918f28842
    
    Mac (Arm chip)
    
    [lindorm-cli for mac](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-mac-arm64-latest.tar.gz)
    
    5bdc8600055432a9275a0d52e5d26e6c2cfc7a553961c09681d0388a5a5e9a62
    
    Windows
    
    [lindorm-cli for windows-x64](https://tsdbtools.oss-cn-hangzhou.aliyuncs.com/lindorm-cli-windows-x64-latest.zip)
    
    7721748744edc551d43fec6bb19ab40eb514bb6043a3d21afa38f353833259ce
    
2.  Decompress the Lindorm-cli package.
    
    Use the standard method for your operating system to decompress the downloaded package.
    
    For example, on a Linux operating system, you can run the following command to decompress the package. After the decompression is complete, an executable file named `lindorm-cli` is generated. You can run this file directly in a shell terminal without any additional installation.
    
    ```
    tar zxvf lindorm-cli-linux-latest.tar.gz
    ```
    

## **Connection methods**

Lindorm-cli supports connections to LindormTable using the MySQL protocol or the Avatica protocol. We recommend that you use the MySQL protocol.

**Important**

Only Lindorm-cli 2.0.0 and later supports connecting to LindormTable using the MySQL protocol.

### **Connect to LindormTable using the MySQL protocol (Recommended)**

#### **Client deployed on Linux or macOS**

1.  Navigate to the folder where `Lindorm-cli` is located.
    
    ```
    cd <folder_of_Lindorm-cli>
    ```
    
2.  Run the following statement to connect to LindormTable.
    
    ```
    ./lindorm-cli -url <mysql url> -username <username> -password <password>
    ```
    
    **Parameter description**
    
    **Parameter**
    
    **Description**
    
    **mysql url**
    
    The [MySQL-compatible endpoint](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7) of LindormTable. For more information about connection configurations, see [Connection configuration](#f8cab3b704ml0).
    
    **username**
    
    The [username](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **password**
    
    The [password](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **Important**
    
    -   If you forget the password, [change the user password](/help/en/doc-detail/174671.html#section-n3z-64v-v73) in the LindormTable cluster management system.
        
    -   After you change the password, restart the engine in the console.
        
    
    **Connection configuration**
    
    **Supported connection configuration**
    
    **Description**
    
    `mysql://` protocol header
    
    Add the `mysql://` protocol header to the beginning of the **mysql url**.
    
    Example: `mysql://ld-8vbn68478unu8****-proxy-sql-lindorm.lindorm.rds.aliyuncs.com:33060`.
    
    Server-side custom connection parameters
    
    Set server-side custom connection parameters after the **mysql url** in the format `key1=value1&key2=value2`.
    
    The following parameters are supported:
    
    **operationTimeout**: The query timeout period. The format is `<mysql url>?operationTimeout=<timeout_period>`. The timeout period is in milliseconds (ms). Example: `ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060?operationTimeout=120000`.
    
    **Important**
    
    Only LindormTable engine versions **2.7.7 and later** support the **operationTimeout** parameter. To view or upgrade the current version, see [LindormTable version guide](/help/en/lindorm/product-overview/release-notes-of-lindormtable) and [Perform a minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance).
    
    **Connection examples**
    
    ```
    ./lindorm-cli -url ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060 -username user -password test
    
    --Connect with the mysql:// protocol header
    ./lindorm-cli -url mysql://ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060 -username user -password test
    
    --Specify a query timeout period
    ./lindorm-cli -url mysql://ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060?operationTimeout=120000 -username user -password test
    ```
    
    If the connection is successful, the following result is returned:
    
    ```
    lindorm-cli version: 2.0.x
    ```
    
    In the output, `2.0.x` is the version number of Lindorm-cli.
    

#### **Client deployed on Windows**

##### **Method 1**

1.  Open Command Prompt (CMD) and navigate to the folder where `lindorm-cli.exe` is located.
    
    ```
    cd <folder_of_lindorm-cli.exe>
    ```
    
2.  In CMD, run the following statement to connect to LindormTable.
    
    ```
    lindorm-cli -url <mysql url> -username <username> -password <password>
    ```
    
    **Parameter description**
    
    **Parameter**
    
    **Example value**
    
    **How to obtain**
    
    **mysql url**
    
    ld-bp187uwcx5f40\*\*\*\*-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060
    
    The [MySQL-compatible endpoint](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7) of LindormTable. For more information about connection configurations, see [Connection configuration](#f8cab3b704ml0).
    
    **username**
    
    user
    
    The [username](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **password**
    
    test
    
    The [password](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **Important**
    
    -   If you forget the password, [change the user password](/help/en/doc-detail/174671.html#section-n3z-64v-v73) in the LindormTable cluster management system.
        
    -   After you change the password, restart the engine in the console.
        
    
    **Connection configuration**
    
    **Supported connection configuration**
    
    **Description**
    
    `mysql://` protocol header
    
    Add the `mysql://` protocol header to the beginning of the **mysql url**.
    
    Example: `mysql://ld-8vbn68478unu8****-proxy-sql-lindorm.lindorm.rds.aliyuncs.com:33060`.
    
    Server-side custom connection parameters
    
    Set server-side custom connection parameters after the **mysql url** in the format `key1=value1&key2=value2`.
    
    The following parameters are supported:
    
    **operationTimeout**: The query timeout period. The format is `<mysql url>?operationTimeout=<timeout_period>`. The timeout period is in milliseconds (ms). Example: `ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060?operationTimeout=120000`.
    
    **Important**
    
    Only LindormTable engine versions **2.7.7 and later** support the **operationTimeout** parameter. To view or upgrade the current version, see [LindormTable version guide](/help/en/lindorm/product-overview/release-notes-of-lindormtable) and [Perform a minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance).
    
    **Connection examples**
    
    ```
    lindorm-cli -url ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060 -username user -password test
    
    --Connect with the mysql:// protocol header
    lindorm-cli -url mysql://ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060 -username user -password test
    
    --Specify a query timeout period
    lindorm-cli -url mysql://ld-bp187uwcx5f40****-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060?operationTimeout=120000 -username user -password test
    ```
    
    If the connection is successful, the following result is returned:
    
    ```
    Connected to ld-bp187uwcx5f40****-proxy-sql-lindorm-public.lindorm.rds.aliyuncs.com:33060
    lindorm-cli version: 2.0.x
    ```
    
    In the output, `2.0.x` is the version number of Lindorm-cli.
    

##### **Method 2**

Double-click the \`Lindorm-cli.exe\` file and run the following command:

```
connect <mysql url> <username> <password>
```

**Connection example**

```
connect ld-bp13y790c91f4****-proxy-lindorm-pub.lindorm.aliyuncs.com:33060  user test
```

No message is returned for a successful connection.

### **Connect to LindormTable using the Avatica protocol**

#### **Client deployed on Linux or macOS**

1.  Navigate to the directory that contains `Lindorm-cli`.
    
    ```
    cd <directory_of_Lindorm-cli>
    ```
    
2.  Run the following statement to connect to the wide table engine.
    
    ```
    ./lindorm-cli -url <url> -username <username> -password <password>
    ```
    
    **Parameter description**
    
    **Parameter**
    
    **Example value**
    
    **How to obtain**
    
    **jdbc url**
    
    jdbc:lindorm:table:url=http://ld-bp17j28j2y7pm\*\*\*\*-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30060
    
    The [LindormTable SQL endpoint](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7) of LindormTable.
    
    **Username**
    
    user
    
    The [username](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **Password**
    
    test
    
    The [password](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **Important**
    
    -   If you forget the password, [change the user password](/help/en/doc-detail/174671.html#section-n3z-64v-v73) in the LindormTable cluster management system.
        
    -   After you change the password, restart the engine in the console.
        
    
    **Example connection**
    
    ```
    ./lindorm-cli -url jdbc:lindorm:table:url=http://ld-bp17j28j2y7pm****-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30060 -username user -password test
    ```
    
    If the connection is successful, the following result is returned:
    
    ```
    lindorm-cli version: 2.0.xx
    ```
    
    In the result, `2.0.xx` is the version number of Lindorm-cli.
    

#### **Client deployed on Windows**

##### **Method 1**

1.  Open Command Prompt (CMD) and navigate to the directory that contains `lindorm-cli.exe`.
    
    ```
    cd <directory_of_lindorm-cli.exe>
    ```
    
2.  In the command prompt, run the following statement to connect to the wide table engine.
    
    ```
    lindorm-cli -url <jdbc url> -username <username> -password <password>
    ```
    
    **Parameter description**
    
    **Parameter**
    
    **Example value**
    
    **How to obtain**
    
    **jdbc url**
    
    jdbc:lindorm:table:url=http://ld-bp17j28j2y7pm\*\*\*\*-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30060
    
    The [wide table SQL address](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7) for LindormTable.
    
    **Username**
    
    user
    
    The [username](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **Password**
    
    test
    
    The [password](/help/en/lindorm/user-guide/connect-to-an-apsaradb-for-lindorm-instance#concept-2090785) to connect to LindormTable.
    
    **Important**
    
    -   If you forget the password, [change the user password](/help/en/doc-detail/174671.html#section-n3z-64v-v73) in the LindormTable cluster management system.
        
    -   After you change the password, restart the engine in the console.
        
    
    **Example connection**
    
    ```
    lindorm-cli -url jdbc:lindorm:table:url=http://ld-bp13y790c91f4****-proxy-lindorm-pub.lindorm.aliyuncs.com:30060 -username user -password test
    ```
    
    If the connection is successful, the following result is returned:
    
    ```
    Connected to jdbc:lindorm:table:url=http://ld-bp13y790c91f4****-proxy-lindorm-pub.lindorm.rds.aliyuncs.com:30060
    lindorm-cli version: 2.0.xx
    ```
    
    In the result, `2.0.xx` is the version number of Lindorm-cli.
    

##### **Method 2**

Double-click the Lindorm-cli.exe file and run the following statement:

```
connect <jdbc url> <username> <password>
```

**Example connection**

```
connect jdbc:lindorm:table:url=http://ld-bp13y790c91f4****-proxy-lindorm-pub.lindorm.aliyuncs.com:30060 user test
```

A successful connection does not produce any output.

## **Usage**

You can use Lindorm-cli to execute SQL statements and access LindormTable in interactive or non-interactive mode.

### **Execute SQL statements in interactive mode**

In most cases, you can start Lindorm-cli in interactive mode to manage LindormTable. The procedure is as follows:

1.  **Start Lindorm-cli**  
    For example, after you connect to LindormTable using one of the protocols described in the Connection methods section, your terminal enters the Lindorm-cli interactive interface and waits for you to enter the next command.  
      
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0076058671/p1043899.png)
    
    **Note**
    
    If you double-click the \`lindorm-cli.exe\` file on Windows, a command prompt window appears. This starts the Lindorm-cli interactive interface, but a connection to LindormTable is not yet established. You must use the \`connect\` subcommand to establish a connection before you can run subsequent SQL statements. For more information, see [Client deployed on Windows](#ae557f162dwta) and [Method 2](#7ec8850b94pgx).
    
2.  **Enter SQL statements to access LindormTable**  
    After Lindorm-cli establishes a connection and enters the interactive interface, you can enter SQL statements to access LindormTable. The following figure shows an example of how to create a database, create a table, write data, and query data in interactive mode.  
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0076058671/p1043914.png)  
      
      
      
      
    
    **Note**
    
    For more information about the SQL statements supported by LindormTable, see [SQL reference](/help/en/lindorm/developer-reference/lindorm-query-language/).
    
3.  **Exit Lindorm-cli**  
    After you run the required statements in the Lindorm-cli interactive interface, you can use the `exit` subcommand or the `Ctrl+D` keyboard shortcut to exit Lindorm-cli.  
      
    

**Note**

When you start `lindorm-cli` in interactive mode and successfully connect to LindormTable, the client maintains a connection session with LindormTable until you exit. All SQL operations during this period are executed in the same session. Note that if a session is idle for a long period of time, the system automatically disconnects the connection to release resources.

### **Execute SQL statements in non-interactive mode**

If you are writing an O&M script and need to run Lindorm SQL statements without entering the interactive command line, you can use the non-interactive mode of `lindorm-cli` to manage LindormTable. In this mode, SQL statements are run directly using command parameters and the results are returned. This mode is suitable for automated tasks, such as running queries or statistical operations.

To run an SQL statement in non-interactive mode from a shell terminal, append the `-execute` parameter followed by the SQL statement enclosed in single or double quotation marks to the connection parameters described in the [Connection methods](#de38cfd48892l) section, such as the host address and port. This action establishes a short-lived connection and runs the command. For example:

```
lindorm-cli -url mysql://ld-xxxxxx-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060 -username user -password XXXX -execute "CREATE TABLE tb (id VARCHAR, name VARCHAR, address VARCHAR,  PRIMARY KEY(id, name));"
```

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0076058671/p1044214.png)

You can also export the query results of a wide table to a CSV file in non-interactive mode.

**Important**

The feature that lets you export CSV files requires Lindorm-cli 2.2.0 or later. To check the current version, perform one of the following operations:

-   Query from the command line: Run the `lindorm-cli -version` command to obtain the version number.
    
-   Check the startup prompt in interactive mode: When you enter the interactive interface, the initial welcome message displays the version number.
    

```
lindorm-cli -url mysql://ld-xxxxxx-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060 -username user -password XXXX -format csv -output ~/result.csv -execute "SELECT * FROM tb;"
```

**Note**

-   Short-lived connection mechanism: In non-interactive mode, Lindorm-cli establishes a separate connection for each SQL statement and closes the connection immediately after the statement is executed.
    
-   Output control: By default, the execution result is printed to the terminal (stdout). To redirect the output to a file, you can use the `-output` parameter.
    

## **Command-line parameters and subcommands**

### **Command-line parameters**

When you start Lindorm-cli in a terminal, you can specify the following command-line parameters:

**Parameter name**

**Requires value**

**Parameter value**

**Description**

url

Yes

Protocol name + SQL connection string (including port) for LindormTable

Specifies the protocol and connection string information that lindorm-cli uses to connect to LindormTable.

-   To connect using the MySQL protocol, specify the [MySQL-compatible endpoint](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7) of LindormTable.
    
-   To connect using the Avatica protocol, specify the [LindormTable SQL endpoint](/help/en/lindorm/user-guide/view-endpoints#section-i3a-42q-7c7) of LindormTable.
    

username

Yes

The username for the connection

The specified username must be a Lindorm user that has been created in LindormTable.

password

Yes

The password for the username

\-

database

Yes

The name of the database to connect to

If not specified, the default database is connected. If specified, it must be a database that has been created in LindormTable.

execute

Yes

The SQL statement to execute

If you specify the execute parameter, lindorm-cli runs in non-interactive mode. The SQL statement specified in the parameter value must be enclosed in single or double quotation marks.

**Note**

When you use double quotation marks to enclose an SQL statement, you can escape the double quotation marks within the SQL statement with a backslash (`\`). However, if you use single quotation marks, you cannot use escape characters.

output

Yes

The output location for SQL execution results in non-interactive mode

In non-interactive mode, if output is not specified, the SQL execution result is printed to standard output. If output is specified, the SQL execution result is written to the specified file at the specified path. If the file does not exist, lindorm-cli attempts to create it.

format

Yes

One of the following:

horizontal, vertical, csv, json, column

Changes the format of the SQL execution result returned by the LindormTable server. If not specified, the default format is column.

-   column: Displays results in a standard table format.
    
-   horizontal: Displays data horizontally, column by column.
    
-   vertical: Displays data row by row, with each row's columns output vertically. Similar to the `\G` format in the MySQL command line.
    
-   csv: Displays results in CSV format without table lines.
    
-   json: Displays results in JSON format.
    

pretty

No

\-

Use with format set to JSON.

When the pretty switch is on, the information returned by the server is output in Pretty-printed JSON format. If not specified, the output is in compressed JSON format.

csvNoHeader

No

\-

Use with format set to CSV.

When the csvNoHeader switch is on, the information returned by the server is output in CSV format without the result set header (column names).

nullString

Yes

A string to replace NULL

Use with format set to CSV.

When nullString is specified, NULL values in the query result returned by the server are replaced with the specified string.

If nullString is not specified, NULL values in the query result are output in the following default format:

-   When a connection is established using the MySQL protocol, NULL values are represented by `\N`.
    
-   When a connection is established using the Avatica protocol, NULL values are represented by an empty string.
    

version

No

\-

Displays the version information of lindorm-cli. In this case, lindorm-cli is not actually started, and it does not enter interactive mode.

**Note**

All Lindorm-cli command-line parameters must be prefixed with a hyphen (`-`).

### **Common subcommands**

When you start the Lindorm-cli tool in interactive mode, you can enter Lindorm-cli subcommands in the interactive interface to control the behavior of Lindorm-cli, in addition to sending SQL statements to LindormTable. The common subcommands are described in the following table:

**Subcommand**

**Command parameters**

**Description**

connect

<url> <username> <password>

When lindorm-cli is started and enters interactive mode without an initial connection, you can use the connect subcommand to establish a connection to LindormTable.

The url, username, and password fields have the same meaning as the `url`, `username`, and `password` command-line parameters.

format

One of the following:

horizontal, vertical, csv, json

Same as the `format` parameter.

help

None

View a collection of common subcommands.

history

None

View recently executed SQL statements or subcommands.

exit or quit

None

Exit lindorm-cli and disconnect from LindormTable.

## **FAQ**

### **Why do connections time out or fail?**

A connection timeout or failure may return an error message such as `Failed to connect to <wide table endpoint> connection check failed` or `connection timeout`.

Check the following possible causes to resolve the issue:

**Cause**

**Solution**

The public IP address for a public network connection is not added to the whitelist.

Add the public IP address of the client to the [Lindorm whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#ff57dfa072opq).

To find the public IP address of the client, you can run the `curl ipinfo.io/ip` or `curl ifconfig.me` command in the command prompt.

The connection times out even after the public IP address is added to the whitelist.

Your network connectivity may be unstable. We recommend switching to a Virtual Private Cloud (VPC) connection.

The IP address of the ECS instance is not added to the Lindorm whitelist.

[Retrieve the IP address of the ECS instance](/help/en/ecs/user-guide/ip-address/#10a7bff6c9th3) and [add it to the Lindorm whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#ff57dfa072opq).

The correct endpoint is not used.

Lindorm provides different endpoints for **VPC** access and **public network** access. Ensure that you use the correct endpoint for your network environment.

If the issue persists, contact Lindorm technical support on DingTalk. The DingTalk ID is s0s3eg3.

## **References**

-   For more information about Lindorm wide table SQL syntax, see [SQL reference](/help/en/lindorm/developer-reference/lindorm-query-language/).
    
-   For other connection methods, see [Connect to and use LindormTable using the MySQL command line](/help/en/lindorm/user-guide/connect-and-use-the-wide-table-engine-from-the-mysql) and [Use the MySQL protocol (Recommended)](/help/en/lindorm/user-guide/using-the-mysql-protocol/).
