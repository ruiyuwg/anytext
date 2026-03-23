DataWorks provides the PyODPS 2 node for developing tasks using PyODPS syntax. As the Python SDK for MaxCompute, PyODPS lets you write Python code to operate on MaxCompute directly within the node.

## Overview

PyODPS is the Python SDK for MaxCompute. It provides a programming interface to write jobs, query tables and views, and manage MaxCompute resources. For more information, see [PyODPS](/help/en/maxcompute/user-guide/pyodps-3/). In DataWorks, you can use a PyODPS node to run and schedule Python tasks and integrate them with other jobs.

## Usage notes

-   If your PyODPS code requires third-party packages, you can install them when running the node on a [Serverless Resource Group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups). For more information, see [Custom images](/help/en/dataworks/user-guide/custom-image).
    
    **Note**
    
    If your code includes a user-defined function (UDF) that references a third-party package, you cannot use the preceding method. For information about the correct configuration method, see [UDF example: Use third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs#task-1994991).
    
-   If your PyODPS task needs to access a specific network environment, such as a data source or service in a VPC or an IDC, use a Serverless Resource Group and establish a network connection between the Serverless Resource Group and the target environment. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
    
-   For more information about PyODPS syntax and other details, see the [PyODPS documentation](/help/en/maxcompute/overview-18#concept-wnh-bmf-cfb).
    
-   PyODPS nodes are available in two types: PyODPS 2 and PyODPS 3. The difference lies in the underlying Python version. The PyODPS 2 node uses Python 2, and the PyODPS 3 node uses Python 3. Create the node type that matches your Python version.
    
-   If an SQL statement in a PyODPS node fails to generate Data Lineage, which prevents it from being displayed in Data Map, you can manually configure the relevant Scheduling Parameters for DataWorks in your task code to resolve the issue. To view data lineage, see [View data lineage](/help/en/dataworks/user-guide/maxcompute-table-data#2c5f965030qh0). For information about parameter settings, see [Set runtime parameters (hints)](/help/en/maxcompute/user-guide/use-pyodps-in-dataworks#section-74o-7xb-8rg). You can use the following code to obtain the parameters required at runtime.
    
    ```
    import os
    # ...
    # Get DataWorks scheduler runtime parameters.
    skynet_hints = {}
    for k, v in os.environ.items():
        if k.startswith('SKYNET_'):
            skynet_hints[k] = v
    # ...
    # Set hints when submitting a task.
    o.execute_sql('INSERT OVERWRITE TABLE XXXX SELECT * FROM YYYY WHERE ***', hints=skynet_hints)
    # ...
    ```
    
-   Avoid printing large amounts of data to the logs. Instead, log only essential information, such as warnings and progress updates.
    

## Limitations

-   When you use an Exclusive Resource Group for Scheduling to run a PyODPS node, we recommend that the amount of data processed locally within the node does not exceed 50 MB. This operation is limited by the specifications of the Exclusive Resource Group for Scheduling. Processing excessive local data that surpasses the operating system's threshold can cause an Out-of-Memory (OOM) error, indicated by a "Got killed" message. Avoid writing extensive data processing code in PyODPS nodes. For more information, see [Best practices for efficient PyODPS usage](https://developer.aliyun.com/article/745029).
    
-   When you use a Serverless Resource Group to run a PyODPS node, you can configure the CUs for the node based on the amount of data it needs to process.
    
    **Note**
    
    When you run a task using a Serverless Resource Group, you can configure a maximum of `64 CU` for a single task. However, we recommend using no more than `16 CU` to prevent task startup failures from insufficient resources.
    
-   A **Got killed** error indicates that memory usage exceeded the limit, causing the process to be terminated. To prevent this, avoid performing data operations locally. SQL and DataFrame tasks initiated through PyODPS, except for `to_pandas`, are not subject to this limitation.
    
-   You can use the pre-installed Numpy and Pandas libraries in your code, but not within a UDF. Other third-party packages that contain binary code are not supported.
    
-   For compatibility, `options.tunnel.use_instance_tunnel` is `False` by default in DataWorks. To enable Instance Tunnel globally, you must manually set this value to `True`.
    
-   The underlying Python version for the PyODPS 2 node is 2.7.
    
-   Running multiple Python tasks concurrently within a single PyODPS node is not supported.
    
-   Use `print` to print logs in a PyODPS node. `logger.info` is not supported.
    

## **Preparations**

[Attach a MaxCompute compute engine](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb6140ogu) to the DataWorks workspace.

## **Procedure**

1.  On the PyODPS 2 node editing page, perform the following development operations.
    
    #### PyODPS 2 code examples
    
    After creating a PyODPS node, you can edit and run your code. For more information about PyODPS syntax, see [Overview](/help/en/maxcompute/overview-18#concept-wnh-bmf-cfb). This document provides five code examples. You can choose the one that best fits your business needs.
    
    ### ODPS entry point
    
    DataWorks PyODPS nodes include a global variable, `odps` or `o`, that serves as the ODPS entry point. You do not need to define it manually.
    
    ```
    print(odps.exist_table('PyODPS_iris'))
    ```
    
    ### Execute SQL
    
    You can execute SQL in a PyODPS node. For more information, see [SQL](/help/en/maxcompute/user-guide/sql#concept-hqh-5vf-cfb).
    
    -   By default, `Instance Tunnel` is not enabled in DataWorks, which means `instance.open_reader` uses the Result API and returns up to 10,000 records. You can use `reader.count` to get the number of records. To iterate through all data, you must disable the `limit` restriction. You can use the following statements to enable `Instance Tunnel` and disable the `limit` restriction globally.
        
        ```
        options.tunnel.use_instance_tunnel = True
        options.tunnel.limit_instance_tunnel = False  # Disable the limit to read all data.
        
        with instance.open_reader() as reader:
          # You can read all data through Instance Tunnel.
        ```
        
    -   You can also add `tunnel=True` to `open_reader` to enable `Instance Tunnel` only for the current `open_reader` operation. In addition, you can add `limit=False` to disable the `limit` restriction only for the current operation.
        
        ```
        # This open_reader operation uses the Instance Tunnel API and can read all data.
        with instance.open_reader(tunnel=True, limit=False) as reader:
        ```
        
    
    ### Set runtime parameters
    
    -   You can set runtime parameters by configuring the `hints` parameter, which is of the `dict` type. For more information about hints, see [SET operations](/help/en/maxcompute/user-guide/set-operations#concept-yys-xby-rfb).
        
        ```
        o.execute_sql('select * from PyODPS_iris', hints={'odps.sql.mapper.split.size': 16})
        ```
        
    -   If you configure `sql.settings` in the global settings, DataWorks adds these runtime parameters to every execution.
        
        ```
        from odps import options
        options.sql.settings = {'odps.sql.mapper.split.size': 16}
        o.execute_sql('select * from PyODPS_iris')  # Adds hints based on the global configuration.
        ```
        
    
    ### Read execution results
    
    An instance that runs SQL can directly execute an `open_reader` operation in the following two scenarios:
    
    -   The SQL returns structured data.
        
        ```
        with o.execute_sql('select * from dual').open_reader() as reader:
        	for record in reader:  # Process each record.
        ```
        
    -   A `DESC` or similar SQL statement is executed. You can use the `reader.raw` attribute to get the raw result of the SQL execution.
        
        ```
        with o.execute_sql('desc dual').open_reader() as reader:
        	print(reader.raw)
        ```
        
        **Note**
        
        When manually running a PyODPS 2 node that uses custom Scheduling Parameters, you must hardcode the time value. The PyODPS node cannot directly substitute the parameters.
        
    
    ### DataFrame
    
    You can also process data by using [DataFrame (not recommended)](/help/en/maxcompute/user-guide/dataframe-13/#concept-tpg-yr4-cfb).
    
    -   Execution
        
        In the DataWorks environment, executing a [DataFrame](/help/en/maxcompute/user-guide/dataframe-quick-start#concept-odx-wwf-cfb) requires an explicit call to an [immediate execution method](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb).
        
        ```
        from odps.df import DataFrame
        iris = DataFrame(o.get_table('pyodps_iris'))
        for record in iris[iris.sepal_width < 3].execute():  # Call an immediate execution method to process each record.
        ```
        
        To trigger immediate execution with `print`, enable `options.interactive`.
        
        ```
        from odps import options
        from odps.df import DataFrame
        options.interactive = True  # Enable the option at the beginning.
        iris = DataFrame(o.get_table('pyodps_iris'))
        print(iris.sepal_width.sum())  # Triggers immediate execution upon printing.
        ```
        
    -   Print detailed information
        
        You can set the `options.verbose` option. This is enabled by default in DataWorks, and detailed information such as the Logview URL is printed during execution.
        
    
    #### Develop PyODPS 2 code
    
    The following simple example shows how to use a PyODPS node:
    
    1.  Prepare the dataset by creating the **pyodps\_iris** sample table. For more information, see [Use DataFrame to process data](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
        
    2.  Create a DataFrame. For more information, see [Create a DataFrame object from a MaxCompute table](/help/en/maxcompute/user-guide/create-a-dataframe-object#e9474fb0378zg).
        
    3.  Enter the following code in the PyODPS node.
        
        ```
        from odps.df import DataFrame
        
        # Create a DataFrame from an ODPS table.
        iris = DataFrame(o.get_table('pyodps_iris'))
        print(iris.sepallength.head(5))
        ```
        
    
    #### **Run a PyODPS task**
    
    1.  In the **Run Configuration** **Resource** section, configure the **compute engine instance**, **compute quota**, and **DataWorks Resource Group**.
        
        **Note**
        
        -   To access a data source over the public network or in a VPC, you must use a Resource Group that can connect to that data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        -   You can configure the **Image** parameter based on your task requirements.
            
        
    2.  In the toolbar, click **Run** to run the PyODPS task.
        
    
2.  To run the node task on a schedule, configure its scheduling properties based on your business requirements. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
    Unlike SQL nodes in DataWorks, PyODPS nodes do not substitute strings like ${param\_name} in the code to avoid unintended modifications. Instead, before the code is executed, DataWorks adds a `dict` named `args` to the global variables. You can use this `dict` to retrieve Scheduling Parameters. For example, if you set the **Parameters** parameter to `ds=${yyyymmdd}`, you can access this parameter in your code as follows.
    
    ```
    print('ds=' + args['ds'])
    ds=20240930
    ```
    
    **Note**
    
    To get a `Partition` named `ds`, you can use the following method.
    
    ```
    o.get_table('table_name').get_partition('ds=' + args['ds'])
    ```
    
3.  After you configure the node task, you must publish it. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is published, you can go to Operation Center to view the running details of the Periodic Task. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## **Running a node with an associated role**

You can [associate a specific RAM role](/help/en/dataworks/user-guide/node-scheduling/#cd68d00e6fu9l) to run a node task. This enables fine-grained permission control and enhanced security.

## Next steps

[PyODPS FAQ](/help/en/maxcompute/user-guide/faq-about-pyodps): You can learn about common issues that may occur during PyODPS execution to quickly troubleshoot and resolve exceptions.
