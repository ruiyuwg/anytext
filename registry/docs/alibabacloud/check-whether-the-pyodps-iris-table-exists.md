PyODPS is MaxCompute SDK for Python. You can create and run PyODPS nodes in the DataWorks console. This topic describes the limits on using PyODPS in DataWorks and how to create a PyODPS node. This topic also provides examples on how to use PyODPS.

## Limits

-   **Limits on usage**
    
    If the memory usage exceeds the upper limit, the system reports **Got killed** and the system terminates the related processes. We recommend that you commit data processing tasks to MaxCompute for distributed execution instead of downloading data from a PyODPS node and processing the data in DataWorks. For more information about the comparison between the two methods, see the "Precautions" section in [Overview](/help/en/maxcompute/user-guide/pyodps-3/#section-wy0-8st-f60).
    
-   **Limits on packages**
    
    -   The features of PyODPS nodes may be limited in the following aspects due to the lack of packages, such as matplotlib:
        
        -   The use of the plot function of DataFrame is affected.
            
        -   DataFrame user-defined functions (UDFs) can be used only after the DataFrame UDFs are committed to MaxCompute. You can use only pure Python libraries and the NumPy library to run UDFs based on the requirements of the Python sandbox. You cannot use other third-party libraries, such as pandas.
            
        -   However, you can use the NumPy and pandas libraries that are pre-installed in DataWorks to run non-UDFs. Third-party packages that contain binary code are not supported.
            
    -   PyODPS nodes in DataWorks do not support the Python package atexit. You can use try-finally to enable the related features.
        
-   **Limits on the number of data records that can be read**
    
    By default, the options.tunnel.use\_instance\_tunnel parameter is set to False for a PyODPS node in DataWorks. This indicates that up to 10,000 data records can be read. If you want to read more data records, you must set the options.tunnel.use\_instance\_tunnel parameter to True to globally enable InstanceTunnel.
    

## Procedure

1.  Create a PyODPS node.
    
    Go to the **DataStudio** page of DataWorks to create a PyODPS node. PyODPS nodes are classified into PyODPS 2 nodes and PyODPS 3 nodes.
    
    -   The underlying Python version of PyODPS 2 is Python 2.
        
    -   The underlying Python version of PyODPS 3 is Python 3.
        
    
    You can create a PyODPS node based on the Python version that you use. For more information about how to create a PyODPS node, see [Develop a PyODPS 2 task](/help/en/dataworks/user-guide/create-a-pyodps-2-node#task-2502633) and [Develop a PyODPS 3 task](/help/en/dataworks/user-guide/create-a-pyodps-3-node#task-2503258).![新建节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0551330061/p11645.png)
    
2.  Develop code for the PyODPS node.
    
    After you create the PyODPS node, refer to the examples in the following sections to obtain information about the main capabilities of PyODPS.
    
    -   [MaxCompute entry point](#section-rfp-skg-cfb)
        
    -   [Execution of SQL statements](#section-h21-vkg-cfb)
        
    -   [DataFrame](#section-hlv-plg-cfb)
        
    -   [Obtain scheduling parameters](#section-f5s-lmg-cfb)
        
    -   [Configure the hints parameter](#section-74o-7xb-8rg)
        
    
    For more information about how to use PyODPS, see [Overview of basic operations](/help/en/maxcompute/overview-18#concept-wnh-bmf-cfb) and [Overview of DataFrame](/help/en/maxcompute/user-guide/dataframe-13/#concept-tpg-yr4-cfb). For more information about how to perform simple end-to-end operations on a PyODPS node, see [Use a PyODPS node to segment Chinese text based on Jieba](/help/en/dataworks/user-guide/use-a-pyodps-node-to-segment-chinese-text-based-on-jieba#task-1079380).
    
3.  Configure scheduling parameters. Then, save, commit, and deploy the node. This way, the node can run at regular intervals.
    

## MaxCompute entry point

Each PyODPS node in DataWorks contains the global variable `odps` or `o`, which is the MaxCompute entry point. You do not need to specify the MaxCompute entry point. Sample statement:

```
# Check whether the pyodps_iris table exists.
print(o.exist_table('pyodps_iris'))
```

If `True` is returned, the `pyodps_iris` table exists.

**Note**

The authentication information used by the entry object `o` supports access only to MaxCompute and cannot be used to access other cloud services. During the execution of a PyODPS node, DataWorks provides only this authentication information. Additional authentication information **cannot be obtained** by using methods on the MaxCompute entry object, such as the `o.from_global` method.

## Execution of SQL statements

### General capabilities

-   Execute SQL statements on a PyODPS node. For example, you can execute SQL statements by using execute\_sql()/run\_sql(). You can execute only data definition language (DDL) and data manipulation language (DML) SQL statements.
    
    **Note**
    
    Specific SQL statements that can be executed on the MaxCompute client may fail to be executed by using the `execute_sql()` and `run_sql()` methods of the MaxCompute entry object. You must use other methods to execute non-DDL or non-DML statements. For example, you must use the `run_security_query` method to execute GRANT or REVOKE statements, and use the `run_xflow` or `execute_xflow` method to call API operations.
    
-   Read SQL execution results from a PyODPS node. For example, you can use the open\_reader() method to read SQL execution results.
    

For more information about SQL-related operations on a PyODPS node, see [SQL](/help/en/maxcompute/user-guide/sql#concept-hqh-5vf-cfb).

### Limits on data format and number of records

Due to historical compatibility reasons, Instance Tunnel is not enabled by default on DataWorks. In this case, the Result interface is called to run instance.open\_reader, and up to 10,000 data records can be read, and it also has issues with supporting complex data types. If your project does not have a [data protection](/help/en/maxcompute/security-and-compliance/project-data-protection) mechanism enabled, and you need to iteratively fetch all data, or if you need to read complex data type fields such as Arrays, you must enable Instance Tunnel and disable the `limit`.

-   Disable the `limit` during code execution.
    
    You can execute the following statements to globally enable InstanceTunnel and remove the `limit`.
    
    ```
    options.tunnel.use_instance_tunnel = True
    options.tunnel.limit_instance_tunnel = False  # Remove the limit on the number of data records that can be read. 
    
    with instance.open_reader() as reader:
    # Use InstanceTunnel to read all data. 
    # You can use reader.count to obtain the number of data records.
    ```
    
-   Disable the `limit` only for the current Reader.
    
    You can also add `tunnel=True` to the open\_reader() method to enable InstanceTunnel for the current open\_reader() method. You can add `limit=False` to the open\_reader() method to remove the `limit` on the number of data records that can be read for the current open\_reader() method.
    
    ```
    with instance.open_reader(tunnel=True, limit=False) as reader:
    # The current open_reader() method is called by using InstanceTunnel, and all data can be read.
    ```
    

For more information about Instance Tunnel and data reading limitations, see [Obtain the execution results of SQL statements](/help/en/maxcompute/user-guide/sql#section-uv2-1pm-cfb).

## DataFrame

-   Execution methods
    
    To perform operations on [DataFrames](/help/en/maxcompute/user-guide/dataframe-quick-start#concept-odx-wwf-cfb) in DataWorks, you must explicitly call [immediately executed methods](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb), such as `execute` and `persist`. The following code shows an example.
    
    ```
    # Call an immediately executed method to process each data record and display all data records whose iris.sepalwidth is less than 3 in the pyodps_iris table. 
    from odps.df import DataFrame
    iris = DataFrame(o.get_table('pyodps_iris'))
    for record in iris[iris.sepalwidth < 3].execute():  
        print(record)
    ```
    
-   Display of details
    
    By default, `options.verbose` is enabled in DataWorks. This indicates that the details of a PyODPS node in DataWorks, such as Logview, are displayed. You can configure this option to specify whether to display the details, such as Logview.
    

For more information about DataFrame operations, see [DataFrame (not recommended)](/help/en/maxcompute/user-guide/dataframe-13/#concept-tpg-yr4-cfb).

## Obtain scheduling parameters

When you use a PyODPS node in DataWorks to develop code, you can also use scheduling parameters. For example, you can use scheduling parameters to obtain the data timestamp of the node. PyODPS nodes and SQL nodes in DataWorks use the same method to specify scheduling parameters. However, the scheduling parameters are referenced by using different methods in the code of PyODPS nodes and SQL nodes.

-   A string, such as ${param\_name}, is used in the code of an SQL node.
    
-   Before the code of a PyODPS node is run, a dictionary named `args` is added to the global variables. This prevents the negative impact on the code. The code uses the args\[param\_name\] method to obtain the value of a scheduling parameter, instead of replacing ${param\_name} with the scheduling parameter in the code.
    

For example, on the Scheduling configuration tab of a PyODPS node in DataWorks, you can specify the scheduling parameter `ds=${yyyymmdd}` in the **Parameters** field in the **Basic properties** section. Then, you can specify the following commands in the code of the node to obtain the parameter value:

-   Obtain the value of the `ds` parameter.
    
    ```
    print('ds=' + args['ds'])
    # Obtain the time that is specified by the ds parameter, such as ds=20161116.
    ```
    
-   Obtain the data in the partition that is specified by `ds=${yyyymmdd}`.
    
    ```
    o.get_table('table_name').get_partition('ds=' + args['ds'])
    # Obtain data from the partition specified by ds in the table specified by table_name.
    ```
    

For more information about scheduling parameters, see [Configure and use scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters#task-2187092).

## Configure the hints parameter

You can use the `hints` parameter to configure runtime parameters. The value of the hints parameter is of the DICT type.

```
o.execute_sql('select * from pyodps_iris', hints={'odps.sql.mapper.split.size': 16})
```

You can globally configure the sql.settings parameter. The relevant runtime parameters are automatically added during each execution.

```
from odps import options
options.sql.settings = {'odps.sql.mapper.split.size': 16}
o.execute_sql('select * from pyodps_iris') # The hints parameter is automatically configured based on global settings.
```

## Use a third-party package

The following table describes the third-party packages that are pre-installed for DataWorks nodes and the versions of the packages for the nodes.

**Package name**

**Package version for a Python 2 node**

**Package version for a Python 3 node**

requests

2.11.1

2.26.0

numpy

1.16.6

1.18.1

pandas

0.24.2

1.0.5

scipy

0.19.0

1.3.0

scikit\_learn

0.18.1

0.22.1

pyarrow

0.16.0

2.0.0

lz4

2.1.4

3.1.10

zstandard

0.14.1

0.17.0

If the third-party package that you want to use is not included in the preceding table, you can use the `load_resource_package` method that is provided by DataWorks to download the package from MaxCompute resources. After you use `pyodps-pack` to generate a package, you can use the `load_resource_package` method to load the third-party package. Then, you can import the content in the package to DataWorks. For more information about how to use `pyodps-pack`, see [Generate a third-party package for PyODPS](/help/en/maxcompute/user-guide/generate-a-third-party-package-for-pyodps#task-2320426) and [Reference a third-party package in a PyODPS node](/help/en/maxcompute/user-guide/reference-a-third-party-package-in-a-pyodps-node-1#task-2321015).

**Note**

If you generate a package for a Python 2 node, add the `--dwpy27` parameter to `pyodps-pack` when you generate the package.

Example:

1.  Run the following command to package IP addresses:
    
    ```
    pyodps-pack -o ipaddress-bundle.tar.gz ipaddress
    ```
    
2.  After you upload and submit the `ipaddress-bundle.tar.gz` package as a resource, you can use the package for a PyODPS 3 node by using the following method:
    
    ```
    load_resource_package("ipaddress-bundle.tar.gz")
    import ipaddress
    ```
    

The total size of downloaded packages cannot exceed 100 MB. If you want to skip the operation of packaging the pre-installed packages, you can use the `--exclude` parameter that is provided by `pyodps-pack` during packaging. For example, the following packaging method excludes the NumPy and pandas packages that exist in the DataWorks environment.

```
pyodps-pack -o bundle.tar.gz --exclude numpy --exclude pandas <YOUR_PACKAGE>
```

## **Use another account to access MaxCompute**

In specific scenarios, you may want to use another Alibaba Cloud account to access a MaxCompute project within the current Alibaba Cloud account. In this case, you can use the `as_account` method of the ODPS entry object to create an entry object that uses the new account. By default, the new entry object is independent of the `o` instance that is provided by the system.

**Important**

The `as_account` method is supported in PyODPS 0.11.3 and later. If you do not configure PyODPS 0.11.3 or later for your DataWorks node, you cannot use the `as_account` method.

### **Procedure**

1.  Grant the new account the permissions on the project. For more information, see [Appendix: Grant permissions to another account](#7e90ca902ablb).
    
2.  Use the `as_account` method to switch to the new account and create an entry object for the account in the PyODPS node.
    
    ```
    import os
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID to the AccessKey ID of the Alibaba Cloud account. 
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET to the AccessKey secret of the Alibaba Cloud account. 
    # We recommend that you do not directly use the AccessKey ID or AccessKey secret.
    new_odps = o.as_account(
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'),
        os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
    )
    ```
    
3.  Check whether the account is switched.
    
    Query information about the current user. Add the following statement to the code that you want to run. If the user information in the returned result is the ID of the new account, you are using the new account to access MaxCompute.
    
    ```
    print(new_odps.get_project().current_user)
    ```
    
    **Note**
    
    new\_odps: the entry object of the new account.
    

### Example

1.  Create a table and import data to the table.
    
    1.  Download the dataset iris.data from [iris](https://archive.ics.uci.edu/static/public/53/iris.zip) and rename iris.data as iris.csv.
        
    2.  Create a table named pyodps\_iris and upload the dataset iris.csv to the table. For more information, see [Create tables and upload data](/help/en/dataworks/create-tables-and-upload-data#task-2363400).
        
        Sample statement:
        
        ```
        CREATE TABLE if not exists pyodps_iris
        (
        sepallength  DOUBLE comment 'sepal length (cm)',
        sepalwidth   DOUBLE comment 'sepal width (cm)',
        petallength  DOUBLE comment ''petal length (cm)',
        petalwidth   DOUBLE comment 'petal width (cm)',
        name         STRING comment 'type'
        );
        ```
        
2.  Create an ODPS SQL node and grant permissions on the node to the new account. For more information, see [Appendix: Grant permissions to another account](#7e90ca902ablb).
    
3.  Create a PyODPS node and switch to the new account. For more information, see [Develop a PyODPS 3 task](/help/en/maxcompute/user-guide/create-a-pyodps-3-node).
    
    ```
    from odps import ODPS
    import os
    import sys
    
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID to the AccessKey ID of your Alibaba Cloud account. 
    # Set the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET to the AccessKey secret of the Alibaba Cloud account. 
    # We recommend that you do not directly use the AccessKey ID or AccessKey secret.
    os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID'] = '<accesskey id>'
    os.environ['ALIBABA_CLOUD_ACCESS_KEY_SECRET'] = '<accesskey secret>'
    od = o.as_account(os.getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'), 
             os.getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
            )
    iris = DataFrame(od.get_table('pyodps_iris'))
    # Return the result based on a WHERE clause. 
    with od.execute_sql('select * from pyodps_iris WHERE sepallength > 5 ').open_reader() as reader4:
        print(reader4.raw)
        for record in reader4:
            print(record["sepallength"],record["sepalwidth"],record["petallength"],record["petalwidth"],record["name"])
    # Return the ID of the current user.
    print(od.get_project().current_user)
    ```
    
4.  Run the code and view the result.
    
    ```
    Executing user script with PyODPS 0.11.4.post0
    
    "sepallength","sepalwidth","petallength","petalwidth","name"
    5.4,3.9,1.7,0.4,"Iris-setosa"
    5.4,3.7,1.5,0.2,"Iris-setosa"
    5.8,4.0,1.2,0.2,"Iris-setosa"
    5.7,4.4,1.5,0.4,"Iris-setosa"
    5.4,3.9,1.3,0.4,"Iris-setosa"
    5.1,3.5,1.4,0.3,"Iris-setosa"
    5.7,3.8,1.7,0.3,"Iris-setosa"
    5.1,3.8,1.5,0.3,"Iris-setosa"
    5.4,3.4,1.7,0.2,"Iris-setosa"
    5.1,3.7,1.5,0.4,"Iris-setosa"
    5.1,3.3,1.7,0.5,"Iris-setosa"
    5.2,3.5,1.5,0.2,"Iris-setosa"
    5.2,3.4,1.4,0.2,"Iris-setosa"
    5.4,3.4,1.5,0.4,"Iris-setosa"
    5.2,4.1,1.5,0.1,"Iris-setosa"
    5.5,4.2,1.4,0.2,"Iris-setosa"
    5.5,3.5,1.3,0.2,"Iris-setosa"
    5.1,3.4,1.5,0.2,"Iris-setosa"
    5.1,3.8,1.9,0.4,"Iris-setosa"
    5.1,3.8,1.6,0.2,"Iris-setosa"
    5.3,3.7,1.5,0.2,"Iris-setosa"
    7.0,3.2,4.7,1.4,"Iris-versicolor"
    6.4,3.2,4.5,1.5,"Iris-versicolor"
    6.9,3.1,4.9,1.5,"Iris-versicolor"
    5.5,2.3,4.0,1.3,"Iris-versicolor"
    6.5,2.8,4.6,1.5,"Iris-versicolor"
    5.7,2.8,4.5,1.3,"Iris-versicolor"
    6.3,3.3,4.7,1.6,"Iris-versicolor"
    6.6,2.9,4.6,1.3,"Iris-versicolor"
    5.2,2.7,3.9,1.4,"Iris-versicolor"
    5.9,3.0,4.2,1.5,"Iris-versicolor"
    6.0,2.2,4.0,1.0,"Iris-versicolor"
    6.1,2.9,4.7,1.4,"Iris-versicolor"
    5.6,2.9,3.6,1.3,"Iris-versicolor"
    6.7,3.1,4.4,1.4,"Iris-versicolor"
    5.6,3.0,4.5,1.5,"Iris-versicolor"
    5.8,2.7,4.1,1.0,"Iris-versicolor"
    6.2,2.2,4.5,1.5,"Iris-versicolor"
    5.6,2.5,3.9,1.1,"Iris-versicolor"
    5.9,3.2,4.8,1.8,"Iris-versicolor"
    6.1,2.8,4.0,1.3,"Iris-versicolor"
    6.3,2.5,4.9,1.5,"Iris-versicolor"
    6.1,2.8,4.7,1.2,"Iris-versicolor"
    6.4,2.9,4.3,1.3,"Iris-versicolor"
    6.6,3.0,4.4,1.4,"Iris-versicolor"
    6.8,2.8,4.8,1.4,"Iris-versicolor"
    6.7,3.0,5.0,1.7,"Iris-versicolor"
    6.0,2.9,4.5,1.5,"Iris-versicolor"
    5.7,2.6,3.5,1.0,"Iris-versicolor"
    5.5,2.4,3.8,1.1,"Iris-versicolor"
    5.5,2.4,3.7,1.0,"Iris-versicolor"
    5.8,2.7,3.9,1.2,"Iris-versicolor"
    6.0,2.7,5.1,1.6,"Iris-versicolor"
    5.4,3.0,4.5,1.5,"Iris-versicolor"
    6.0,3.4,4.5,1.6,"Iris-versicolor"
    6.7,3.1,4.7,1.5,"Iris-versicolor"
    6.3,2.3,4.4,1.3,"Iris-versicolor"
    5.6,3.0,4.1,1.3,"Iris-versicolor"
    5.5,2.5,4.0,1.3,"Iris-versicolor"
    5.5,2.6,4.4,1.2,"Iris-versicolor"
    6.1,3.0,4.6,1.4,"Iris-versicolor"
    5.8,2.6,4.0,1.2,"Iris-versicolor"
    5.6,2.7,4.2,1.3,"Iris-versicolor"
    5.7,3.0,4.2,1.2,"Iris-versicolor"
    5.7,2.9,4.2,1.3,"Iris-versicolor"
    6.2,2.9,4.3,1.3,"Iris-versicolor"
    5.1,2.5,3.0,1.1,"Iris-versicolor"
    5.7,2.8,4.1,1.3,"Iris-versicolor"
    6.3,3.3,6.0,2.5,"Iris-virginica"
    5.8,2.7,5.1,1.9,"Iris-virginica"
    7.1,3.0,5.9,2.1,"Iris-virginica"
    6.3,2.9,5.6,1.8,"Iris-virginica"
    6.5,3.0,5.8,2.2,"Iris-virginica"
    7.6,3.0,6.6,2.1,"Iris-virginica"
    7.3,2.9,6.3,1.8,"Iris-virginica"
    6.7,2.5,5.8,1.8,"Iris-virginica"
    7.2,3.6,6.1,2.5,"Iris-virginica"
    6.5,3.2,5.1,2.0,"Iris-virginica"
    6.4,2.7,5.3,1.9,"Iris-virginica"
    6.8,3.0,5.5,2.1,"Iris-virginica"
    5.7,2.5,5.0,2.0,"Iris-virginica"
    5.8,2.8,5.1,2.4,"Iris-virginica"
    6.4,3.2,5.3,2.3,"Iris-virginica"
    6.5,3.0,5.5,1.8,"Iris-virginica"
    7.7,3.8,6.7,2.2,"Iris-virginica"
    7.7,2.6,6.9,2.3,"Iris-virginica"
    6.0,2.2,5.0,1.5,"Iris-virginica"
    6.9,3.2,5.7,2.3,"Iris-virginica"
    5.6,2.8,4.9,2.0,"Iris-virginica"
    7.7,2.8,6.7,2.0,"Iris-virginica"
    6.3,2.7,4.9,1.8,"Iris-virginica"
    6.7,3.3,5.7,2.1,"Iris-virginica"
    7.2,3.2,6.0,1.8,"Iris-virginica"
    6.2,2.8,4.8,1.8,"Iris-virginica"
    6.1,3.0,4.9,1.8,"Iris-virginica"
    6.4,2.8,5.6,2.1,"Iris-virginica"
    7.2,3.0,5.8,1.6,"Iris-virginica"
    7.4,2.8,6.1,1.9,"Iris-virginica"
    7.9,3.8,6.4,2.0,"Iris-virginica"
    6.4,2.8,5.6,2.2,"Iris-virginica"
    6.3,2.8,5.1,1.5,"Iris-virginica"
    6.1,2.6,5.6,1.4,"Iris-virginica"
    7.7,3.0,6.1,2.3,"Iris-virginica"
    6.3,3.4,5.6,2.4,"Iris-virginica"
    6.4,3.1,5.5,1.8,"Iris-virginica"
    6.0,3.0,4.8,1.8,"Iris-virginica"
    6.9,3.1,5.4,2.1,"Iris-virginica"
    6.7,3.1,5.6,2.4,"Iris-virginica"
    6.9,3.1,5.1,2.3,"Iris-virginica"
    5.8,2.7,5.1,1.9,"Iris-virginica"
    6.8,3.2,5.9,2.3,"Iris-virginica"
    6.7,3.3,5.7,2.5,"Iris-virginica"
    6.7,3.0,5.2,2.3,"Iris-virginica"
    6.3,2.5,5.0,1.9,"Iris-virginica"
    6.5,3.0,5.2,2.0,"Iris-virginica"
    6.2,3.4,5.4,2.3,"Iris-virginica"
    5.9,3.0,5.1,1.8,"Iris-virginica"
    5.4 3.9 1.7 0.4 Iris-setosa
    5.4 3.7 1.5 0.2 Iris-setosa
    5.8 4.0 1.2 0.2 Iris-setosa
    5.7 4.4 1.5 0.4 Iris-setosa
    5.4 3.9 1.3 0.4 Iris-setosa
    5.1 3.5 1.4 0.3 Iris-setosa
    5.7 3.8 1.7 0.3 Iris-setosa
    5.1 3.8 1.5 0.3 Iris-setosa
    5.4 3.4 1.7 0.2 Iris-setosa
    5.1 3.7 1.5 0.4 Iris-setosa
    5.1 3.3 1.7 0.5 Iris-setosa
    5.2 3.5 1.5 0.2 Iris-setosa
    5.2 3.4 1.4 0.2 Iris-setosa
    5.4 3.4 1.5 0.4 Iris-setosa
    5.2 4.1 1.5 0.1 Iris-setosa
    5.5 4.2 1.4 0.2 Iris-setosa
    5.5 3.5 1.3 0.2 Iris-setosa
    5.1 3.4 1.5 0.2 Iris-setosa
    5.1 3.8 1.9 0.4 Iris-setosa
    5.1 3.8 1.6 0.2 Iris-setosa
    5.3 3.7 1.5 0.2 Iris-setosa
    7.0 3.2 4.7 1.4 Iris-versicolor
    6.4 3.2 4.5 1.5 Iris-versicolor
    6.9 3.1 4.9 1.5 Iris-versicolor
    5.5 2.3 4.0 1.3 Iris-versicolor
    6.5 2.8 4.6 1.5 Iris-versicolor
    5.7 2.8 4.5 1.3 Iris-versicolor
    6.3 3.3 4.7 1.6 Iris-versicolor
    6.6 2.9 4.6 1.3 Iris-versicolor
    5.2 2.7 3.9 1.4 Iris-versicolor
    5.9 3.0 4.2 1.5 Iris-versicolor
    6.0 2.2 4.0 1.0 Iris-versicolor
    6.1 2.9 4.7 1.4 Iris-versicolor
    5.6 2.9 3.6 1.3 Iris-versicolor
    6.7 3.1 4.4 1.4 Iris-versicolor
    5.6 3.0 4.5 1.5 Iris-versicolor
    5.8 2.7 4.1 1.0 Iris-versicolor
    6.2 2.2 4.5 1.5 Iris-versicolor
    5.6 2.5 3.9 1.1 Iris-versicolor
    5.9 3.2 4.8 1.8 Iris-versicolor
    6.1 2.8 4.0 1.3 Iris-versicolor
    6.3 2.5 4.9 1.5 Iris-versicolor
    6.1 2.8 4.7 1.2 Iris-versicolor
    6.4 2.9 4.3 1.3 Iris-versicolor
    6.6 3.0 4.4 1.4 Iris-versicolor
    6.8 2.8 4.8 1.4 Iris-versicolor
    6.7 3.0 5.0 1.7 Iris-versicolor
    6.0 2.9 4.5 1.5 Iris-versicolor
    5.7 2.6 3.5 1.0 Iris-versicolor
    5.5 2.4 3.8 1.1 Iris-versicolor
    5.5 2.4 3.7 1.0 Iris-versicolor
    5.8 2.7 3.9 1.2 Iris-versicolor
    6.0 2.7 5.1 1.6 Iris-versicolor
    5.4 3.0 4.5 1.5 Iris-versicolor
    6.0 3.4 4.5 1.6 Iris-versicolor
    6.7 3.1 4.7 1.5 Iris-versicolor
    6.3 2.3 4.4 1.3 Iris-versicolor
    5.6 3.0 4.1 1.3 Iris-versicolor
    5.5 2.5 4.0 1.3 Iris-versicolor
    5.5 2.6 4.4 1.2 Iris-versicolor
    6.1 3.0 4.6 1.4 Iris-versicolor
    5.8 2.6 4.0 1.2 Iris-versicolor
    5.6 2.7 4.2 1.3 Iris-versicolor
    5.7 3.0 4.2 1.2 Iris-versicolor
    5.7 2.9 4.2 1.3 Iris-versicolor
    6.2 2.9 4.3 1.3 Iris-versicolor
    5.1 2.5 3.0 1.1 Iris-versicolor
    5.7 2.8 4.1 1.3 Iris-versicolor
    6.3 3.3 6.0 2.5 Iris-virginica
    5.8 2.7 5.1 1.9 Iris-virginica
    7.1 3.0 5.9 2.1 Iris-virginica
    6.3 2.9 5.6 1.8 Iris-virginica
    6.5 3.0 5.8 2.2 Iris-virginica
    7.6 3.0 6.6 2.1 Iris-virginica
    7.3 2.9 6.3 1.8 Iris-virginica
    6.7 2.5 5.8 1.8 Iris-virginica
    7.2 3.6 6.1 2.5 Iris-virginica
    6.5 3.2 5.1 2.0 Iris-virginica
    6.4 2.7 5.3 1.9 Iris-virginica
    6.8 3.0 5.5 2.1 Iris-virginica
    5.7 2.5 5.0 2.0 Iris-virginica
    5.8 2.8 5.1 2.4 Iris-virginica
    6.4 3.2 5.3 2.3 Iris-virginica
    6.5 3.0 5.5 1.8 Iris-virginica
    7.7 3.8 6.7 2.2 Iris-virginica
    7.7 2.6 6.9 2.3 Iris-virginica
    6.0 2.2 5.0 1.5 Iris-virginica
    6.9 3.2 5.7 2.3 Iris-virginica
    5.6 2.8 4.9 2.0 Iris-virginica
    7.7 2.8 6.7 2.0 Iris-virginica
    6.3 2.7 4.9 1.8 Iris-virginica
    6.7 3.3 5.7 2.1 Iris-virginica
    7.2 3.2 6.0 1.8 Iris-virginica
    6.2 2.8 4.8 1.8 Iris-virginica
    6.1 3.0 4.9 1.8 Iris-virginica
    6.4 2.8 5.6 2.1 Iris-virginica
    7.2 3.0 5.8 1.6 Iris-virginica
    7.4 2.8 6.1 1.9 Iris-virginica
    7.9 3.8 6.4 2.0 Iris-virginica
    6.4 2.8 5.6 2.2 Iris-virginica
    6.3 2.8 5.1 1.5 Iris-virginica
    6.1 2.6 5.6 1.4 Iris-virginica
    7.7 3.0 6.1 2.3 Iris-virginica
    6.3 3.4 5.6 2.4 Iris-virginica
    6.4 3.1 5.5 1.8 Iris-virginica
    6.0 3.0 4.8 1.8 Iris-virginica
    6.9 3.1 5.4 2.1 Iris-virginica
    6.7 3.1 5.6 2.4 Iris-virginica
    6.9 3.1 5.1 2.3 Iris-virginica
    5.8 2.7 5.1 1.9 Iris-virginica
    6.8 3.2 5.9 2.3 Iris-virginica
    6.7 3.3 5.7 2.5 Iris-virginica
    6.7 3.0 5.2 2.3 Iris-virginica
    6.3 2.5 5.0 1.9 Iris-virginica
    6.5 3.0 5.2 2.0 Iris-virginica
    6.2 3.4 5.4 2.3 Iris-virginica
    5.9 3.0 5.1 1.8 Iris-virginica
    <User 139xxxxxxxxxxxxx>
    ```
    

## **Diagnostics**

If no response is returned for your code during the execution, and no output is returned, you can add the following comment to the code header. DataWorks returns the stacks of all threads every 30 seconds.

```
# -*- dump_traceback: true -*-
```

**Note**

This method is suitable for PyODPS 3 nodes of versions later than 0.11.4.1.

## **View** the PyODPS version

You can run Python code to query the PyODPS version. You can also view the PyODPS version in the runtime log of the PyODPS node.

-   Run code in the PyODPS node to query the PyODPS version.
    
    ```
    # Run the following code:
    import odps; print(odps.__version__)
    
    # The following result is returned:
    0.11.2.3
    ```
    
-   View the PyODPS version in the runtime log of the PyODPS node. The following figure shows an example.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8724561961/p698121.png)
    

## **Appendix: Grant permissions to another account**

If you want to use another Alibaba Cloud account to access projects and tables within the current Alibaba Cloud account in DataWorks, you must create an ODPS SQL node in DataWorks and run the following commands to grant the required permissions to the account. For more information about how to create an ODPS SQL node, see [Create an ODPS SQL node](/help/en/maxcompute/user-guide/create-an-odps-sql-node#section-xho-wy5-t8l). For more information about permissions, see [Users and permissions](/help/en/maxcompute/user-guide/users-and-permissions).

```
-- Add the Alibaba Cloud account that you want to use to a project.
add user ALIYUN$<account_name>;

-- Grant the CreateInstance permission on the project to the account.
grant CreateInstance on project <project_name> to USER ALIYUN$<account_name>;

-- Grant the Describe and Select permissions on tables to the account.
grant Describe, Select on table <table_name> to USER ALIYUN$<account_name>;

-- View the authorization result.
show grants for ALIYUN$<account_name>;
```

The following figure shows a sample result.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9848471961/p697663.png)

## Appendix: Sample data

You can create a table named _pyodps\_iris_ in the DataWorks console and import data to the table. For more information about how to create a table and import data to the table, see Step 1 in [Use a PyODPS node to query data based on specific criteria](/help/en/maxcompute/user-guide/use-a-pyodps-node-to-query-data-based-on-specific-criteria#step-1sy-kvz-l2s). The pyodps\_iris table is used in the examples.

## **References**

You can view all task records you have run within the last three days in the DataWorks data development interface, stop running tasks, and save SQL statements from the **Runtime Logs** as a temporary file. For more details, see [View operating history](/help/en/dataworks/user-guide/view-operating-history).
