DataWorks provides the PyODPS 3 node, allowing you to write MaxCompute jobs directly in Python and configure periodic scheduling.

## **Overview**

PyODPS is the Python Software Development Kit (SDK) for MaxCompute. Its simple programming interface lets you write jobs, query tables and views, and manage MaxCompute resources. For more information, see [PyODPS](/help/en/maxcompute/user-guide/pyodps-3/). In DataWorks, you can use a PyODPS node to schedule and run Python tasks and integrate them with other jobs.

## Considerations

-   When you run a PyODPS node on a DataWorks resource group, you can install a third-party package on a [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) if your code requires it. For more information, see [Custom images](/help/en/dataworks/user-guide/custom-image).
    
    **Note**
    
    This method does not support User-Defined Functions (UDFs) that reference a third-party package. For the correct configuration method, see [UDF example: Use third-party packages in Python UDFs](/help/en/maxcompute/user-guide/reference-third-party-packages-in-python-udfs#task-1994991).
    
-   To upgrade the PyODPS version, run the [Custom images](/help/en/dataworks/user-guide/custom-image) command. You can replace `0.12.1` with the version you want to upgrade to. On a Serverless resource group, run the command by following the instructions in `Install a third-party package`. On an exclusive resource group for scheduling, follow the instructions in [O&M Assistant](/help/en/dataworks/user-guide/use-the-maintenance-assistant-feature#concept-2347122).
    
-   If your PyODPS task needs to access a specific network environment, such as a data source or service in a VPC network or an IDC, use a Serverless resource group. Configure network connectivity between the Serverless resource group and the target environment. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
    
-   For more information about PyODPS syntax, see the [PyODPS documentation](/help/en/maxcompute/overview-18#concept-wnh-bmf-cfb).
    
-   PyODPS nodes are available in two types, PyODPS 2 and PyODPS 3, which use Python 2 and Python 3, respectively. Create the node type that matches the Python version you use.
    
-   If SQL statements executed in a PyODPS node do not generate the correct data lineage in Data Map, you can manually set the runtime parameters for DataWorks scheduling in your task code. To view data lineage, see [View data lineage](/help/en/dataworks/user-guide/maxcompute-table-data#2c5f965030qh0). To set parameters, see [Set runtime parameters (hints)](/help/en/maxcompute/user-guide/use-pyodps-in-dataworks#section-74o-7xb-8rg). You can use the following sample code to obtain the required runtime parameters.
    
    ```
    import os
    ...
    # Get DataWorks scheduler runtime parameters
    skynet_hints = {}
    for k, v in os.environ.items():
        if k.startswith('SKYNET_'):
            skynet_hints[k] = v
    ...
    # Set hints when you submit a task
    o.execute_sql('INSERT OVERWRITE TABLE XXXX SELECT * FROM YYYY WHERE ***', hints=skynet_hints)
    ...
    ```
    
-   The maximum log output for a PyODPS node is 4 MB. Avoid printing large data results directly to the logs. Instead, focus on outputting valuable information, such as alert logs and progress updates.
    

## Limitations

-   When you use an exclusive resource group for scheduling to run a PyODPS node, the amount of data processed locally within the node should not exceed 50 MB. This limit is determined by the specifications of the exclusive resource group for scheduling. Processing excessive local data can exceed the operating system's threshold and cause an Out of Memory (OOM) error, indicated by a \`Got Killed\` message. Avoid writing data-intensive processing logic in PyODPS nodes. For more information, see [Best practices for using PyODPS efficiently](https://developer.aliyun.com/article/745029).
    
-   When you use a Serverless resource group to run a PyODPS node, you can configure the CUs for the node based on the amount of data it needs to process.
    
    **Note**
    
    A single task can be configured with a maximum of `64` CUs, but using more than `16` CUs is not recommended, as it can cause resource shortages that affect task startup.
    
-   A **Got Killed** error indicates that the process was terminated due to an Out of Memory (OOM) condition. Therefore, try to minimize local data operations. SQL and DataFrame tasks initiated through PyODPS, except for `to_pandas`, are not subject to this limitation.
    
-   Code that is not part of a User-Defined Function (UDF) can use the pre-installed Numpy and Pandas packages. Other third-party packages that contain binary code are not supported.
    
-   For compatibility reasons, `options.tunnel.use_instance_tunnel` is set to `False` by default in DataWorks. To globally enable `instance tunnel`, you must manually set this value to `True`.
    
-   The bytecode definitions differ between minor versions of Python 3, such as Python 3.8 and Python 3.7.
    
    MaxCompute currently uses Python 3.7. Using syntax from other Python 3 versions, such as the `finally` block in Python 3.8, will cause an execution error. We recommend that you use Python 3.7.
    
-   PyODPS 3 can run on a Serverless resource group. To purchase and use this resource, see [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
-   A single PyODPS node does not support the concurrent execution of multiple Python tasks.
    
-   To print logs from a PyODPS node, use the `print` function. The `logger.info` function is not currently supported.
    

## **Before you begin**

Bind a MaxCompute [compute resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb6140ogu) to your DataWorks workspace.

## **Procedure**

1.  In the PyODPS 3 node editor, perform the following development steps.
    
    #### PyODPS 3 code examples
    
    After you create a PyODPS node, you can edit and run code. For more information about PyODPS syntax, see [Overview](/help/en/maxcompute/overview-18#concept-wnh-bmf-cfb). This section provides five code examples. Select the example that best suits your business needs.
    
    ### ODPS entry point
    
    DataWorks provides the global variable `odps` (or `o`) as the ODPS entry point, so you do not need to define it manually.
    
    ```
    print(odps.exist_table('PyODPS_iris'))
    ```
    
    ### Execute SQL statements
    
    You can execute SQL statements in a PyODPS node. For more information, see [SQL](/help/en/maxcompute/user-guide/sql#concept-hqh-5vf-cfb).
    
    -   In DataWorks, `instance tunnel` is disabled by default. This means `instance.open_reader` uses the Result interface, which returns a maximum of 10,000 records. You can use `reader.count` to get the record count. To iterate through all data, you must disable the `limit`. You can use the following statements to enable `instance tunnel` globally and disable the `limit`.
        
        ```
        options.tunnel.use_instance_tunnel = True
        options.tunnel.limit_instance_tunnel = False  # Disable the limit to read all data.
        
        with instance.open_reader() as reader:
          # You can read all data through the Instance Tunnel.
        ```
        
    -   Alternatively, you can add `tunnel=True` to the `open_reader` call to enable `instance tunnel` only for that specific operation. You can also add `limit=False` to disable the `limit` for that operation.
        
        ```
        # Use the Instance Tunnel interface for this open_reader operation to read all data.
        with instance.open_reader(tunnel=True, limit=False) as reader:
        ```
        
    
    ### Set runtime parameters
    
    -   You can set runtime parameters by using the `hints` parameter, which is a `dict` type. For more information about hints, see [SET operations](/help/en/maxcompute/user-guide/set-operations#concept-yys-xby-rfb).
        
        ```
        o.execute_sql('select * from PyODPS_iris', hints={'odps.sql.mapper.split.size': 16})
        ```
        
    -   If you configure `sql.settings` globally, the specified runtime parameters are added to every execution.
        
        ```
        from odps import options
        options.sql.settings = {'odps.sql.mapper.split.size': 16}
        o.execute_sql('select * from PyODPS_iris')  # Add hints based on the global configuration.
        ```
        
    
    ### Reading execution results
    
    An instance running an SQL statement can directly perform an `open_reader` operation in the following two scenarios:
    
    -   The SQL statement returns structured data.
        
        ```
        with o.execute_sql('select * from dual').open_reader() as reader:
        	for record in reader:  # Process each record.
        ```
        
    -   The SQL statement is a command like `desc`. You can use the `reader.raw` attribute to get the raw SQL execution result.
        
        ```
        with o.execute_sql('desc dual').open_reader() as reader:
        	print(reader.raw)
        ```
        
        **Note**
        
        When running a PyODPS 3 node directly from the editor, you must hardcode custom scheduling parameter values because the node does not automatically replace placeholders.
        
    
    ### DataFrame
    
    You can also use a [DataFrame (not recommended)](/help/en/maxcompute/user-guide/dataframe-13/#concept-tpg-yr4-cfb) to process data.
    
    -   Execution
        
        In DataWorks, you must explicitly call an [immediate execution method](/help/en/maxcompute/user-guide/dataframe-quick-start#concept-odx-wwf-cfb) to execute a [DataFrame](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb).
        
        ```
        from odps.df import DataFrame
        iris = DataFrame(o.get_table('pyodps_iris'))
        for record in iris[iris.sepal_width < 3].execute():  # Call an immediate execution method to process each Record.
        ```
        
        If you need to trigger immediate execution with a `print` statement, you must enable `options.interactive`.
        
        ```
        from odps import options
        from odps.df import DataFrame
        options.interactive = True  # Enable the option at the beginning.
        iris = DataFrame(o.get_table('pyodps_iris'))
        print(iris.sepal_width.sum())  # Immediate execution is triggered by print().
        ```
        
    -   Printing detailed information
        
        You can set the `options.verbose` option to print detailed information. In DataWorks, this option is enabled by default and prints details such as the Logview URL during execution.
        
    
    #### Developing PyODPS 3 code
    
    The following example shows how to use a PyODPS node:
    
    1.  Prepare a dataset. Create the **pyodps\_iris** sample table. For instructions, see [Use DataFrame to process data](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
        
    2.  Create a DataFrame. For more information, see [Create a DataFrame object from a MaxCompute table](/help/en/maxcompute/user-guide/create-a-dataframe-object#e9474fb0378zg).
        
    3.  Enter the following code into the PyODPS node and run it.
        
        ```
        from odps.df import DataFrame
        
        # Create a DataFrame from an ODPS table.
        iris = DataFrame(o.get_table('pyodps_iris'))
        print(iris.sepallength.head(5))
        ```
        
    
    #### **Run the PyODPS task**
    
    1.  In the **Run Configuration** section, configure the **Compute resources**, **Compute quota**, and **DataWorks resource group**.
        
        **Note**
        
        -   To access data sources in a public network or VPC network, you must use a resource group for scheduling that has passed the connectivity test with the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        -   You can configure the **Image** based on the task requirements.
            
        
    2.  In the parameters dialog box in the toolbar, select the MaxCompute data source that you created and click **Run**.
        
    
2.  To run the node task on a schedule, configure its scheduling properties based on your business requirements. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
    Unlike SQL nodes in DataWorks, PyODPS nodes do not replace strings like \`${param\_name}\` in the code to avoid unintended string substitution. Instead, before the code is executed, a `dict` named `args` is added to the global variables. You can retrieve scheduling parameters from this `dict`. For example, if you set **ds=${yyyymmdd}** in the `Parameters` tab, you can retrieve this parameter in your code as follows.
    
    ```
    print('ds=' + args['ds'])
    ds=20240930
    ```
    
    **Note**
    
    To get the partition named `ds`, you can use the following method.
    
    ```
    o.get_table('table_name').get_partition('ds=' + args['ds'])
    ```
    
3.  After you configure the node task, you must deploy it. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is deployed, you can view the status of the scheduled task in the Operations Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## **Running a node with an associated role**

You can [associate a specific RAM role](/help/en/dataworks/user-guide/node-scheduling/#cd68d00e6fu9l) to run a node task. This enables fine-grained permission control and enhanced security.

## Next steps

[PyODPS FAQ](/help/en/maxcompute/user-guide/faq-about-pyodps): Learn about common PyODPS execution issues to help you quickly troubleshoot and resolve exceptions.
