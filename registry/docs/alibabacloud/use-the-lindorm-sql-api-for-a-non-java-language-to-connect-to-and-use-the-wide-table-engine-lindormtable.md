This topic describes how to use Python DB-API to develop applications based on LindormTable and provides examples.

## Prerequisites

-   Python 3.7 or later is installed.
    
-   The IP address of your client has been added to the [Lindorm whitelist](/help/en/lindorm/getting-started/configure-a-whitelist#undefined).
    

## Limits

The Python DB-API cannot be used to connect to LindormTable of a Lindorm Serverless instance.

## Procedure

1.  Run the `pip install phoenixdb` command to install phoenixdb. The following sample command shows how to install phoenixdb V1.2.0:
    
    ```
    pip install phoenixdb==1.2.0
    ```
    
2.  Specify parameters required to establish a connection to the database, including the name of the database that you want to access and the username and password that are used to access the database.
    
    ```
    connect_kw_args = {'lindorm_user': '<userName>', 'lindorm_password': '<userPassword>', 'database': '<database>'}
    ```
    
    Parameter descriptions
    
    **Parameter**
    
    **Description**
    
    lindorm\_user
    
    The username and password that are used to connect to the Lindorm instance.
    
    If you forget the password, you can [change the password](/help/en/doc-detail/174671.html#topic2090) in the cluster management system of LindormTable.
    
    lindorm\_password
    
    database
    
    The name of the database that you want to access. You can connect to existing databases that you have permissions to access.
    
    If you do not specify a database, you are connected to the default database.
    
3.  Specify the database\_url and connect\_kw\_args parameters to establish a connection to the database.
    
    ```
    database_url = '<lindorm_sql_url>'
    connection = phoenixdb.connect(database_url, autocommit=True, **connect_kw_args)
    ```
    
    Parameter descriptions
    
    **Parameter**
    
    **Description**
    
    database\_url
    
    The endpoint used to access LindormTable using SQL. For more information about how to obtain the endpoint, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).
    
    If your client is deployed on an Elastic Compute Service (ECS) instance that is located in the same virtual private network (VPC) as your Lindorm instance, you can use the VPC endpoint to access LindormTable. Otherwise, enable the public endpoint of LindormTable, and then use the public endpoint to access LindormTable.
    
    When you set this parameter to an endpoint, delete the string before `http` from the endpoint that you obtain from the Lindorm console.
    
    Example: `database_url = 'http://ld-bp10m54739kg9****-proxy-lindorm.lindorm.rds.aliyuncs.com:30060'`
    
    autocommit
    
    Specify whether to automatically commit the command. This parameter must be set to True.
    
    \*\*connect\_kw\_args
    
    The parameter settings of connect\_kw\_args specified in Step 2. The settings are passed to the phoenixdb.connect() method to establish a connection to the database.
    
4.  After you are connected to the database, you can perform DDL and DML operations in the database. The following code provides an example of how to perform DDL and DML operations:
    
    ```
    with connection.cursor() as statement:
        # Create a table.
        sql_create_table = "create table if not exists test_python(c1 integer, c2 integer, primary key(c1))"
        print(sql_create_table)
        statement.execute(sql_create_table)
    
        # Insert a row of data.
        sql_upsert = "upsert into test_python(c1, c2) values(1,1)"
        print(sql_upsert)
        statement.execute(sql_upsert)
    
        # Insert multiple rows of data.
        with connection.cursor() as stat:
            sql_upsert = "upsert into test_python(c1, c2) values(?,?)"
            print(sql_upsert)
            stat.executemany(sql_upsert, [(2, 2), (3, 3)])
    
        # Delete data.
        sql_delete = "delete from test_python where c1=2"
        print(sql_delete)
        statement.execute(sql_delete)
    
        # Modify data in the table.
        sql_update = "upsert into test_python(c1, c2) values(1,10)"
        print(sql_update)
        statement.execute(sql_update)
    
        # Query data.
        sql_select = "select * from test_python"
        print(sql_select)
        statement.execute(sql_select)
        rows = statement.fetchall()
        print(rows)
    
        # Disable a table. If the LindormTable version of your instance is later than 2.2.16 and earlier than 2.4.1. You must disable a table before you delete the table.
        sql_offline_table = "offline table test_python"
        print(sql_offline_table)
        statement.execute(sql_offline_table)
    
        # Delete a table.
        sql_drop_table = "drop table if exists test_python"
        print(sql_drop_table)
        statement.execute(sql_drop_table)
    
    # Close the connection to the database.
    connection.close()
    ```
    
    **Note**
    
    For the complete sample code, see [Python examples](https://github.com/aliyun/aliyun-apsaradb-hbase-demo/blob/master/lindormsql-python/demo.py).
    

## References

For more information, see [SQL reference for LindormTable](https://www.alibabacloud.com/help/zh/lindorm/latest/lindorm-query-language).
