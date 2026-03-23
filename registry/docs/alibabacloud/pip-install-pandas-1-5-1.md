Psycopg is a newly designed PostgreSQL database adapter for the Python programming language. You can access Hologres by using Psycopg because Hologres is compatible with PostgreSQL 11. This topic describes how to access Hologres by using Psycopg 3.

## **Prerequisites**

Python 3.7 or later is installed.

## Install Psycopg 3

Run the following commands to [install Psycopg 3](https://www.psycopg.org/psycopg3/docs/basic/install.html):

```
pip  install   --upgrade pip             # Upgrade pip to version 20.3 or later.
pip install "psycopg[binary]"
```

## Connect to Hologres

After Psycopg 3 is installed, you can perform the following operations to connect to Hologres.

1.  Load Psycopg 3.
    
    You can run the following command to load the installed Psycopg 3:
    
    ```
    import psycopg
    ```
    
2.  Create a database connection.
    
    You can use the `psycopg.connect()` function to connect to Hologres. The following code shows the syntax and parameters:
    
    ```
    conn = psycopg.connect(
        host="<Endpoint>",
        port=<Port>, 
        dbname="<databases>", 
        user="<Access ID>", 
        password="<Access Key>",
        keepalives=<keepalives>, 
        keepalives_idle=<keepalives_idle>,
        keepalives_interval=<keepalives_interval>, 
        keepalives_count=<keepalives_count>
    )
    ```
    
    **Parameter**
    
    **Description**
    
    Endpoint
    
    The endpoint and port number of the Hologres instance.
    
    Go to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance). In the navigation pane on the left, click **Instances**. Click the target instance. On the **Instance Details** page, find the endpoint and port in the **Network Information** section.
    
    **Important**
    
    Select the correct endpoint and port number based on the network environment in which the code is run. Otherwise, the connection fails.
    
    Port
    
    databases
    
    The name of the Hologres database.
    
    Access ID
    
    The AccessKey ID of the Alibaba Cloud account used to connect to the Hologres instance.
    
    You can go to the [AccessKey](https://ram.console.alibabacloud.com/profile/access-keys) page to obtain the AccessKey ID.
    
    Access Key
    
    The AccessKey secret of the Alibaba Cloud account used to connect to the Hologres instance.
    
    keepalives
    
    Optional. The connection method. We recommend that you configure this parameter. Valid values:
    
    -   1: uses a persistent connection.
        
    -   0: uses a non-persistent connection.
        
    
    keepalives\_idle
    
    The interval at which a keepalive message is sent when the connection to the Hologres database enters the idle state. Unit: seconds.
    
    keepalives\_interval
    
    The interval at which a keepalive message is sent again if no response is returned. Unit: seconds.
    
    keepalives\_count
    
    The maximum number of times a keepalive message is sent.
    
    Example:
    
    ```
    conn = psycopg.connect(
        host="<Endpoint>",
        port=<Port>, 
        dbname="<databases>", 
        user="<Access ID>", 
        password="<Access Key>",
        keepalives=1, # Maintain the connection.
        keepalives_idle=130, # Send a keepalive message every 130 seconds when the connection is idle.
        keepalives_interval=10, # Wait 10 seconds before resending a keepalive message if no response is returned.
        keepalives_count=15, # Send a keepalive message up to 15 times.
        application_name="<Application Name>"
    )
    ```
    
    **Note**
    
    Configuring the Application Name parameter helps you quickly view the application that initiated the request in the historical slow query list.
    

## Use Hologres

After you connect to the Hologres database, you can perform data development operations by using Psycopg 3. You can perform the following steps to create a table, insert data into the table, query the data, and then release resources. If you want to use the fixed plan feature to achieve higher performance for read and write operations, you need to configure the related GUC parameters. For more information, see [Accelerate SQL execution with Fixed Plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947).

1.  Create a cursor.
    
    Before you perform data development operations, you need to run the `cur = conn.cursor()` command to create a cursor for the connection.
    
2.  Perform data development operations.
    
    1.  Create a table.
        
        You can run the following command to create a table named `holo_test` and define the data type of the table as integer. You can set a custom table name and specify a custom data type based on your business requirements.
        
        ```
        cur.execute("CREATE TABLE holo_test (num integer);")
        ```
        
    2.  Insert data into the table.
        
        You can run the following command to insert data from 1 to 1000 into the created `holo_test` table.
        
        ```
        cur.execute("INSERT INTO holo_test SELECT generate_series(%s, %s)", (1, 1000))
        ```
        
    3.  Query data from the table.
        
        ```
        cur.execute("SELECT sum(num) FROM holo_test;")
        cur.fetchone()
        ```
        
    
3.  Commit transactions.
    
    The preceding example involves DDL, DML, and DQL operations. You need to run the `conn.commit()` command after each SQL statement to commit the transaction and ensure that the operation is committed. We recommend that you set the autocommit parameter to true after the `conn` connection code to automatically commit SQL commands. The following code provides examples:
    
    -   Synchronous invocation example
        
        ```
        conn = psycopg.connect(
            host="<Endpoint>",
            port=<Port>, 
            dbname="<databases>", 
            user="<Access ID>", 
            password="<Access Key>",
            keepalives=1, # Maintain the connection.
            keepalives_idle=130, # Send a keepalive message every 130 seconds when the connection is idle.
            keepalives_interval=10, # Wait 10 seconds before resending a keepalive message if no response is returned.
            keepalives_count=15, # Send a keepalive message up to 15 times.
            application_name="<Application Name>"
        )
        conn.autocommit = "True"
        ```
        
    -   Asynchronous invocation example
        
        ```
        async with await psycopg.AsyncConnection.connect(
            host="<Endpoint>",
            port=<Port>, 
            dbname="<databases>", 
            user="<Access ID>", 
            password="<Access Key>",
            application_name="<Application Name>",
            autocommit = "True"
            ) as aconn:
            async with aconn.cursor() as acur:
                await acur.execute(
                    "INSERT INTO test (num, data) VALUES (%s, %s)",
                    (100, "abc'def"))
                await acur.execute("SELECT * FROM test")
                await acur.fetchone()
                # will return (1, 100, "abc'def")
                async for record in acur:
                    print(record)
        ```
        
4.  Release resources.
    
    To ensure that subsequent operations are not affected, after the preceding operations are complete, run the following commands to close the cursor and disconnect Psycopg 3 from your Hologres database:
    
    ```
    cur.close()
    conn.close()
    ```
    

## Best practice of efficiently importing DataFrames to Hologres

When you use Python, it is common to use Pandas to convert data entries into a DataFrame, process the DataFrame, and then import the DataFrame to Hologres. In these situations, you may want to quickly complete the import.

```
# pip install Pandas==1.5.1
```

We recommend that you use the COPY mode for data import. The following Python code provides an example:

```
import psycopg
import pandas as pd

# Connect to Hologres.
conn = psycopg.connect(
    host="hgpostcn-cn-xxxxx-cn-hangzhou.hologres.aliyuncs.com",
    port=80,
    dbname="db",
    user="xxx",
    password="xxx",
    application_name="psycopg3"
)

cur = conn.cursor()

# Delete redundant tables.
cur.execute("""
            DROP TABLE IF EXISTS df_data;
            """)
conn.commit()

# Create a test table for data import.
cur.execute("""
            CREATE TABLE IF NOT EXISTS df_data(
                col1 int,
                col2 int,
                col3 int,
                primary key(col1)
            );
            """)
conn.commit()

# Build a DataFrame.
data = [('1','1','1'),('2','2','2')]
cols = ('col1','col2','col3')
pd_data = pd.DataFrame(data, columns=cols)




# Write data in batches.
# Use StringIO to convert the DataFrame into a CSV-formatted string.
from io import StringIO

# Create a buffer.
buffer = StringIO()
        
# Write the DataFrame to the buffer in CSV format.
pd_data.to_csv(buffer, index=False, header=False)
        
# Reset the buffer position to the beginning.
buffer.seek(0)

with cur.copy("COPY df_data(col1,col2,col3) FROM STDIN WITH (STREAM_MODE TRUE,ON_CONFLICT UPDATE,FORMAT CSV);") as copy:
    while data := buffer.read(1024):
        copy.write(data)
conn.commit()

# Query the data.
cur.execute("SELECT * FROM df_data")
cur.fetchone()
cur.commit()
```

View the historical queries to verify that data has been imported to Hologres by using the COPY mode.
