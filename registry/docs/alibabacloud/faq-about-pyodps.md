This topic introduces frequently asked questions when using PyODPS.

**Problem Category**

**FAQ**

Install PyODPS

-   [What do I do if the error message "Warning: XXX not installed" appears when I install PyODPS?](#section-10s-oig-woi)
    
-   [What do I do if the error message "Project Not Found" appears when I install PyODPS?](#section-vky-irq-hfk)
    
-   [What do I do if the error message "Syntax Error" appears when I install PyODPS?](#section-s54-r38-ehp)
    
-   [What do I do if the error message "Permission Denied" appears when I install PyODPS in macOS?](#section-120-dt8-mnd)
    
-   [What do I do if the error message "Operation Not Permitted" appears when I install PyODPS in macOS?](#section-oay-zxk-uma)
    

Import modules

-   [What do I do if the error message "No Module Named ODPS" appears when I run the from odps import ODPS code?](#section-ppc-0hj-x5l)
    
-   [What do I do if the error message "Cannot Import Name ODPS" appears when I run the "from odps import ODPS" code?](#section-vyf-xmn-ekt)
    
-   [What do I do if the error message "Cannot Import Module odps" appears when I run the "from odps import ODPS" code?](#section-rwq-duq-p3a)
    
-   [What do I do if the error message "ImportError" appears when I use PyODPS in IPython or Jupyter Notebook?](#section-uhu-1d8-2b0)
    

Use PyODPS

-   [What does the size field mean in o.gettable('table\_name').size?](#section-ww0-bzs-ejq)
    
-   [How do I configure a Tunnel endpoint?](#section-q3b-726-a2j)
    
-   [How do I use a third-party package that contains CPython in PyODPS?](#section-530-ga5-516)
    
-   [How much data can a DataFrame in PyODPS handle, and is there a limit on the size of the table?](#section-in0-l11-y97)
    
-   [How do I use max\_pt in a DataFrame?](#section-hwr-dxe-ilf)
    
-   [What is the difference between the open\_writer() and write\_table() methods when you use PyODPS to write data to a table?](#section-0fe-cmz-wbw)
    
-   [Why is the amount of data queried on the DataWorks PyODPS node less than the result of local execution?](#section-gkc-ue9-8fz)
    
-   [How to obtain the actual number of counts in a DataFrame?](#section-r88-iug-15y)
    
-   [What do I do if the error message "sourceIP is not in the white list" appears when I use PyODPS?](#section-s8y-rtd-9fm)
    
-   [What do I do if I fail to configure the runtime environment of MaxCompute by using "from odps import options options.sql.settings"?](#section-bx8-8tf-p2d)
    
-   [Why does the error message "IndexError:listindexoutofrange" appears when I call the head method of a DataFrame?](#section-fzn-by1-ndb)
    
-   [What do I do if the error message "ODPSError" appears when I upload a Pandas DataFrame to MaxCompute?](#section-uem-jg7-d92)
    
-   [What do I do if the error message "lifecycle is not specified in mandatory mode" appears when I use a DataFrame to write data to a table?](#section-msv-weo-od8)
    
-   [What do I do if the error message "Perhaps the datastream from server is crushed" appears when I use PyODPS to write data to a table?](#section-1hp-dgg-o2s)
    
-   [What do I do if the error message "Project is protected" appears when I use PyODPS to read data from a table?](#section-e6t-ly5-wl4)
    
-   [What do I do if the error message "ConnectionError: timed out try catch exception" occasionally appears when I run a PyODPS script task?](#section-9bx-fiz-5w2)
    
-   [What do I do if the error message "is not defined" appears when I use PyODPS to execute the get\_sql\_task\_cost function?](#section-cko-37o-hvn)
    
-   [When I use PyODPS to display logs, Chinese characters are automatically converted to encoded display. How do I retain Chinese characters in the logs?](#section-wdt-gun-mmu)
    
-   [When setting options.tunnel.use\_instance\_tunnel = False, why is the field defined as DATETIME type in MaxCompute, but the data obtained using the SELECT statement is of STRING type?](#section-eny-rhk-8nw)
    
-   [How to use Python language features to achieve rich functionality?](#section-lw1-3kp-4dm)
    
-   [How do I use the Pandas DataFrame backend to debug local PyODPS programs?](#section-i4p-hgw-vnx)
    
-   [What do I do if the nested loop execution is slow?](#section-0h4-cwm-sxk)
    
-   [How do I prevent downloading data to a local directory?](#section-0zr-hg8-7y6)
    
-   [In which scenarios can I download PyODPS data to my on-premises machine to process the data?](#section-vd0-1no-q2i)
    
-   [A maximum of 10,000 records can be obtained by using open\_reader. How do I obtain more than 10,000 records?](#section-ly0-6jf-bty)
    
-   [Why am I recommended to use built-in operators instead of UDFs?](#section-40u-pd9-nbl)
    
-   [Why is the partition value of a partitioned table obtained through DataFrame().schema.partitions empty?](#section-row-6lz-qmy)
    
-   [How do I use PyODPS DataFrame to perform the Cartesian product operation?](#section-lt3-4rg-w11)
    
-   [How do I use a PyODPS node to segment Chinese text based on Jieba?](#section-3x4-2pm-x37)
    
-   [How do I use PyODPS to download full data?](#section-bmn-2i8-2vm)
    
-   [Can I use execute\_sql or a DataFrame to compute the percentage of null values of a field?](#section-adl-oug-g98)
    
-   [How do I configure data types for PyODPS?](#section-zk8-h1o-7bp)
    
-   [What do I do if the error message "ValueError" appears when I use PyODPS?](#section-wtq-017-9rp)
    
-   [How do I troubleshoot the issue that the speed of executing SQL statements through PyODPS is slow?](#10845e39ceqpu)
    

## What do I do if the error message "Warning: XXX not installed" appears when I install PyODPS?

This issue arises from missing components. Identify the name of the missing component from the XXX information in the error message, and install it using the `pip` command.

## What do I do if the error message "Project Not Found" appears when I install PyODPS?

The cause of this issue is:

-   The Endpoint configuration is incorrect and must be modified to the Endpoint of the target project. For more information about the endpoints, see [Endpoints](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
-   The parameter position of the MaxCompute entry object is invalid. Ensure it is filled in correctly. For more information on MaxCompute entry object parameters, see [Migrate PyODPS nodes from DataWorks to an on-premises environment](/help/en/maxcompute/user-guide/migrate-pyodps-nodes-from-dataworks-to-an-on-premises-environment#concept-vr4-nwf-cfb).
    

## What do I do if the error message "Syntax Error" appears when I install PyODPS?

This error is caused by an unsupported Python version. Python 2.5 or earlier is not supported by PyODPS. Use mainstream versions supported by PyODPS, such as Python 2.7.6 or later minor versions, Python 3.3 or later minor versions, and Python 2.6.

## What do I do if the error message "Permission Denied" appears when I install PyODPS in macOS?

To install PyODPS, use the command `sudo pip install pyodps`.

## What do I do if the error message "Operation Not Permitted" appears when I install PyODPS in macOS?

This error occurs due to System Integrity Protection (SIP). To resolve it, restart your device and press **⌘** + **R** during the boot process. Afterwards, execute the command below in the terminal.

```
csrutil disable
reboot       
```

For more information, see [Operation Not Permitted when on root - El Capitan (rootless disabled)](https://stackoverflow.com/questions/32659348/operation-not-permitted-when-on-root-el-capitan-rootless-disabled).

## What do I do if the error message "No Module Named ODPS" appears when I run the from odps import ODPS code?

This error indicates that the ODPS package cannot be loaded. The possible reasons are as follows:

-   Reason 1: Multiple Python versions are installed.
    
    Solution: Ensure that the search path, which is typically the current directory, includes both a `odps.py` or `init.py` file and a directory named odps.
    
    -   If it is a folder with the same name, change the folder name.
        
    -   If you have previously installed a Python package named odps, you can remove it using `sudo pip uninstall odps`.
        
    
-   Reason 2: Both Python 2 and Python 3 versions are installed.
    
    Solution: Ensure that only Python 2 or Python 3 is installed on the device.
    
-   Reason 3: PyODPS is not installed under the current Python version.
    
    Solution: Install PyODPS. For installation methods, see [Install PyODPS](/help/en/maxcompute/user-guide/install-pyodps#concept-e14-gjf-cfb).
    

## What do I do if the error message "Cannot Import Name ODPS" appears when I run the "from odps import ODPS" code?

Please check the presence of a file named **odps.py** in the current working directory. If such a file exists, rename it prior to performing the import operation.

## What do I do if the error message "Cannot Import Module odps" appears when I run the "from odps import ODPS" code?

This error usually results from dependency issues encountered by PyODPS. Click [link](https://wx-in-i.dingtalk.com/yydy/yq.html?encodeDeptId=null&corpId=dingb682fb31ec15e09f35c2f4657eb6378f&inviterUid=null&scene=allMemberConversationDetail-copyLink&cid=6465538762&inviteCode=GKO5lWJbFEZkWl7&origin=2&originMeta=globalGroup&method=copyLink) to join the PyODPS technical support DingTalk group and contact the group administrator for assistance.

## What do I do if the error message "ImportError" appears when I use PyODPS in IPython or Jupyter Notebook?

At the beginning of the code, add `from odps import errors`. If the error persists, the Ipython dependency may be missing. You can resolve this issue by executing `sudo pip install -U jupyter`.

## What does the size field mean in o.gettable('table\_name').size?

The SIZE field indicates the physical storage size of the table.

## How do I configure a Tunnel endpoint?

You can configure the setting using `options.tunnel.endpoint`. For more information, see [aliyun-odps-python-sdk](https://github.com/aliyun/aliyun-odps-python-sdk/blob/master/docs/source/options.rst).

## How do I use a third-party package that contains CPython in PyODPS?

We recommend that you generate a wheel package that contains CPython. For more information, see [Create a crcmod that can be used in MaxCompute](https://developer.aliyun.com/article/691754).

## How much data can a DataFrame in PyODPS handle, and is there a limit on the size of the table?

PyODPS has no limit on the size of the table. The size of a DataFrame created by local Pandas is limited by the size of local memory.

## How do I use max\_pt in a DataFrame?

Utilize the `odps.df.func` module to invoke MaxCompute's built-in functions.

```
from odps.df import func
df = o.get_table('your_table').to_df()
df[df.ds == func.max_pt('your_project.your_table')]  # ds is a partition field.     
```

## What is the difference between the open\_writer() and write\_table() methods when you use PyODPS to write data to a table?

Each invocation of `write_table()` results in the creation of a new file on the server, which can be time-consuming and may lead to reduced query performance and potential memory shortages if too many files are generated. To mitigate this, we recommend that you write multiple datasets simultaneously or use a Generator object with the `write_table()` method. For guidance on employing the `write_table()` method, see [Write data to a table](/help/en/maxcompute/user-guide/examples-of-using-the-sdk-for-python-tables#section-ye5-602-j8m).

`open_writer()` function writes to the Block by default.

## Why is the amount of data queried on the DataWorks PyODPS node less than the result of local execution?

By default, Instance Tunnel is not enabled in DataWorks, meaning that `instance.open_reader` utilizes the Result interface, which is capable of retrieving a maximum of 10,000 records.

Once Instance Tunnel is enabled, you can retrieve the record count by using `reader.count`. To iterate and retrieve all data, you must remove the limit restriction by setting `options.tunnel.limit_instance_tunnel = False`.

## How to obtain the actual number of counts in a DataFrame?

1.  After installing PyODPS, execute the following command in the Python environment to create a MaxCompute table and initialize the DataFrame.
    
    ```
    iris = DataFrame(o.get_table('pyodps_iris'))        
    ```
    
2.  Perform a Count operation on the DataFrame to obtain the total number of rows.
    
    ```
    iris.count()      
    ```
    
3.  Since DataFrame operations do not execute immediately, they are only executed when the user explicitly calls the Execute method or an immediate execution method. To ensure the Count method executes promptly, use the following command.
    
    ```
    df.count().execute()    
    ```
    

For methods to obtain the actual number of DataFrames, see [Aggregation](/help/en/maxcompute/user-guide/aggregation#concept-iv4-kcg-cfb). For details on PyODPS method delay operations, see [Execution](/help/en/maxcompute/user-guide/execution#concept-hv4-mx4-cfb).

## What do I do if the error message "sourceIP is not in the white list" appears when I use PyODPS?

The MaxCompute project accessed by PyODPS has whitelist protection. Contact the project owner to add your device to the IP whitelist. For more on IP whitelist information, see [Manage IP address whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#task-2330709).

## What do I do if I fail to configure the runtime environment of MaxCompute by using "from odps import options options.sql.settings"?

-   Problem description
    
    When running SQL by using PyODPS, set the MaxCompute runtime environment through the following code before applying for a MaxCompute instance.
    
    ```
    from odps import options
    options.sql.settings = {'odps.sql.mapper.split.size': 32}     
    ```
    
    After initiating the task, only 6 Mappers launched, indicating that the setting was not applied. However, when the command `set odps.stage.mapper.split.size=32` was executed on the client, the task completed in one minute.
    
-   Cause
    
    There is an inconsistency between the parameters set in the client and PyODPS. The client uses the parameter `odps.stage.mapper.split.size`, whereas PyODPS uses `odps.sql.mapper.split.size`.
    
-   Solution
    
    Change the parameter in PyODPS to `odps.stage.mapper.split.size`.
    

## Why does the error message "IndexError:listindexoutofrange" appears when I call the head method of a DataFrame?

This occurs either because `list[index]` contains no elements or `list[index]` is beyond the permissible range.

## What do I do if the error message "ODPSError" appears when I upload a Pandas DataFrame to MaxCompute?

-   Problem description
    
    When uploading a Pandas DataFrame to MaxCompute, the following error is returned.
    
    ```
    ODPSError: ODPS entrance should be provided.
    ```
    
-   Cause
    
    The error is due to the absence of a global MaxCompute object entry.
    
-   Solution
    
    -   When you utilize the Room mechanism `%enter`, it configures a global entry.
        
    -   Invoke the `to_global` method on the MaxCompute object entry.
        
    -   Use the parameter `DataFrame(pd_df).persist('your_table', odps=odps)`.
        

## What do I do if the error message "lifecycle is not specified in mandatory mode" appears when I use a DataFrame to write data to a table?

-   Problem description
    
    When writing a table through a DataFrame, the following error is returned.
    
    ```
    table lifecycle is not specified in mandatory mode
    ```
    
-   Cause
    
    The lifecycle of the table is not set.
    
-   Solution
    
    The project requires setting the lifecycle for each table, so you must set the following information each time you execute.
    
    ```
    from odps import options
    options.lifecycle = 7  # Set the value of lifecycle here. The value of lifecycle is an integer, in days.      
    ```
    

## What do I do if the error message "Perhaps the datastream from server is crushed" appears when I use PyODPS to write data to a table?

This error is caused by dirty data. Check whether the number of data columns is consistent with the target table.

## What do I do if the error message "Project is protected" appears when I use PyODPS to read data from a table?

The security policy on the project prohibits reading data from the table. To use all the data, consider the following methods:

-   Contact the project owner to add an exception rule.
    
-   Use DataWorks or other masking tools to mask the data, export it to a non-protected project, and then read it.
    

To view part of the data, use the following methods:

-   You can execute the command `o.execute_sql('select * from <table_name>').open_reader()` to retrieve data from the specified table.
    
-   You can convert a table to a DataFrame using `o.get_table('<table_name>').to_df()`.
    

## What do I do if the error message "ConnectionError: timed out try catch exception" occasionally appears when I run a PyODPS script task?

The possible causes of this error are:

-   Connection timeout. The default timeout for PyODPS is 5 seconds. Use one of the following solutions to address the issue:
    
    -   To increase the timeout interval, add the following code at the beginning of your script:
        
        ```
        # workaround
        from odps import options
        options.connect_timeout=30
        ```
        
    -   Implement exception handling to catch errors and attempt retries.
        
-   Sandbox restrictions may prevent some machines from accessing the network. Use an exclusive resource group for scheduling to execute tasks and resolve this issue.
    

## What do I do if the error message "is not defined" appears when I use PyODPS to execute the get\_sql\_task\_cost function?

-   Problem description
    
    When running the get\_sql\_task\_cost function using PyODPS, the following error is returned.
    
    ```
    NameError: name 'get_task_cost' is not defined.
    ```
    
-   Solution
    
    The function name is invalid.
    
-   Solution
    
    Use execute\_sql\_cost instead of get\_sql\_task\_cost.
    

## When I use PyODPS to display logs, Chinese characters are automatically converted to encoded display. How do I retain Chinese characters in the logs?

Enter Chinese characters by writing the code in the format similar to `print ("我叫 %s" % ('abc'))`. These issues occur only in Python 2.

## When setting options.tunnel.use\_instance\_tunnel = False, why is the field defined as DATETIME type in MaxCompute, but the data obtained using the SELECT statement is of STRING type?

When calling Open\_Reader, PyODPS will call the legacy Result interface by default. At this time, the data obtained from the server is in CSV format, so DATETIME is of STRING type.

When Instance Tunnel is enabled by setting `options.tunnel.use_instance_tunnel = True`, PyODPS defaults to using Instance Tunnel, effectively resolving this issue.

## How to use Python language features to achieve rich functionality?

-   Write Python functions.
    
    There are various methods to calculate the distance between two points, such as Euclidean distance and Manhattan distance. Define a series of functions and call the appropriate function according to the specific situation during calculation.
    
    ```
    def euclidean_distance(from_x, from_y, to_x, to_y):
        return ((from_x - to_x) ** 2 + (from_y - to_y) ** 2).sqrt()
    
    def manhattan_distance(from_x, from_y, to_x, to_y):
       return (from_x - to_x).abs() + (from_y - to_y).abs()                      
    ```
    
    Call as follows.
    
    ```
    In [42]: df
         from_x    from_y      to_x      to_y
    0  0.393094  0.427736  0.463035  0.105007
    1  0.629571  0.364047  0.972390  0.081533
    2  0.460626  0.530383  0.443177  0.706774
    3  0.647776  0.192169  0.244621  0.447979
    4  0.846044  0.153819  0.873813  0.257627
    5  0.702269  0.363977  0.440960  0.639756
    6  0.596976  0.978124  0.669283  0.936233
    7  0.376831  0.461660  0.707208  0.216863
    8  0.632239  0.519418  0.881574  0.972641
    9  0.071466  0.294414  0.012949  0.368514
    
    In [43]: euclidean_distance(df.from_x, df.from_y, df.to_x, df.to_y).rename('distance')
       distance
    0  0.330221
    1  0.444229
    2  0.177253
    3  0.477465
    4  0.107458
    5  0.379916
    6  0.083565
    7  0.411187
    8  0.517280
    9  0.094420
    
    In [44]: manhattan_distance(df.from_x, df.from_y, df.to_x, df.to_y).rename('distance')
       distance
    0  0.392670
    1  0.625334
    2  0.193841
    3  0.658966
    4  0.131577
    5  0.537088
    6  0.114198
    7  0.575175
    8  0.702558
    9  0.132617                       
    ```
    
-   Utilize conditional and loop statements in Python.
    
    If the table that the user wants to calculate is stored in the database, it is necessary to process the fields of the table according to the configuration, then perform UNION or JOIN operations on all tables. If implemented with SQL, it is quite complex, but it is very simple to process with DataFrame.
    
    For example, if you have 30 tables that need to be combined into one table, if you use SQL, you need to perform UNION ALL operations on 30 tables. If you use PyODPS, the following code can complete the task.
    
    ```
    table_names = ['table1', ..., 'tableN']
    dfs = [o.get_table(tn).to_df() for tn in table_names]
    reduce(lambda x, y: x.union(y), dfs) 
    
    ## The reduce statement is equivalent to the following code.
    df = dfs[0]
    for other_df in dfs[1:]:
        df = df.union(other_df)       
    ```
    

## How do I use the Pandas DataFrame backend to debug local PyODPS programs?

Perform local debugging in the following two ways. Apart from the initialization method, the subsequent code is completely consistent:

-   PyODPS DataFrame created through Pandas DataFrame can use Pandas to perform local calculations.
    
-   DataFrame created using MaxCompute tables can be executed on MaxCompute.
    

Sample code is as follows.

```
df = o.get_table('movielens_ratings').to_df()
DEBUG = True
if DEBUG:
    df = df[:100].to_pandas(wrap=True)       
```

When all subsequent code is written, the local test speed is very fast. After the test is completed, you can change the Debug value to False, so that subsequent calculations can be executed on MaxCompute.

We recommend that you use MaxCompute Studio to debug local PyODPS programs.

## What do I do if the nested loop execution is slow?

To optimize performance, we recommend that you obtain the results of each loop by using a Dict data structure and then import them to a DataFrame object after the loop concludes. If you place the DataFrame object code `df=XXX` in the outer loop, a DataFrame object is generated for each loop calculation. As a result, the execution speed of the nested loop is slow.

## How do I prevent downloading data to a local directory?

For more information, see [Use a PyODPS node to download data to a local directory for processing or to process data online](/help/en/maxcompute/use-cases/use-a-pyodps-node-to-download-data-to-a-local-directory-for-processing-or-to-process-data-online#concept-2348137).

## In which scenarios can I download PyODPS data to my on-premises machine to process the data?

PyODPS data can be downloaded for local processing in the following situations:

-   The data volume is small.
    
-   For operations where one row becomes multiple rows or applying a Python function to a single row of data, use PyODPS DataFrame to leverage the parallel computing power of MaxCompute effectively.
    
    For example, to expand a JSON string data into a row based on Key-Value pairs, use the following code:
    
    ```
    In [12]: df
                   json
    0  {"a": 1, "b": 2}
    1  {"c": 4, "b": 3}
    
    In [14]: from odps.df import output
    
    In [16]: @output(['k', 'v'], ['string', 'int'])
        ...: def h(row):
        ...:     import json
        ...:     for k, v in json.loads(row.json).items():
        ...:         yield k, v
        ...:   
    
    In [21]: df.apply(h, axis=1)
       k  v
    0  a  1
    1  b  2
    2  c  4
    3  b  3                          
    ```
    

## A maximum of 10,000 records can be obtained by using open\_reader. How do I obtain more than 10,000 records?

You can save the SQL result as a table using `create table as select ...`, and then read it with `table.open_reader`.

## Why am I recommended to use built-in operators instead of UDFs?

UDFs are executed slower than built-in operators during calculation. Therefore, we recommend that you use built-in operators.

If you need to process millions of rows of data and you use a UDF for a row, the execution time is increased from 7 seconds to 27 seconds. If larger datasets or more complex operations are required, the gap in time may be larger.

## Why is the partition value of a partitioned table obtained through DataFrame().schema.partitions empty?

DataFrame does not distinguish between partition fields and regular fields, so the partition fields of the partitioned table are treated as regular fields. Filter out partition fields as follows:

```
df = o.get_table().to_df()
print(df[df.ds == ''].execute())
```

For more information about how to configure partitions or read data from partitions, see [Tables](/help/en/maxcompute/user-guide/tables#concept-lhx-tmf-cfb).

## How do I use PyODPS DataFrame to perform the Cartesian product operation?

For more information, see [PyODPS DataFrame Handling Cartesian Product](https://developer.aliyun.com/article/705184).

## How do I use a PyODPS node to segment Chinese text based on Jieba?

For more information, see [Use a PyODPS node to segment Chinese text based on Jieba](/help/en/dataworks/user-guide/use-a-pyodps-node-to-segment-chinese-text-based-on-jieba#task-1079380).

## How do I use PyODPS to download full data?

By default, PyODPS does not limit the amount of data that can be read from an instance. However, the amount of data that can be downloaded for a protected project by using Tunnel commands is limited. If you do not specify `options.tunnel.limit_instance_tunnel`, the limit is automatically enabled, and the number of data records that can be downloaded is limited based on the configurations of the MaxCompute project. In most cases, a maximum of 10,000 data records can be downloaded at a time. If you need to iteratively obtain all data, you must disable the `limit` on the amount of data. You can execute the following statements to enable `Instance Tunnel` and disable the `limit`:

```
options.tunnel.use_instance_tunnel = True
options.tunnel.limit_instance_tunnel = False  # Disable the limit restriction to read all data.

with instance.open_reader() as reader:
    # All data can be read through Instance Tunnel.
```

## Can I use execute\_sql or a DataFrame to compute the percentage of null values of a field?

We recommend that you use a DataFrame to perform aggregate operations because of its high aggregate performance.

## How do I configure data types for PyODPS?

Enable new data types in PyODPS as follows:

-   By enabling new data types with the `execute_sql` method, you can run `o.execute_sql('set odps.sql.type.system.odps2=true;query_sql', hints={"odps.sql.submit.mode" : "script"})`.
    
-   To enable new data types through DataFrame, such as persist, execute, or to\_pandas, set it through the hints parameter. The illustrated setting method is only effective for a single job.
    
    ```
    from odps.df import DataFrame
    users = DataFrame(o.get_table('odps2_test'))
    users.persist('copy_test',hints={'odps.sql.type.system.odps2':'true'})
    ```
    
    When using DataFrame, if you require global effects, set the Option parameter `options.sql.use_odps2_extension = True`.
    

## What do I do if the error message "ValueError" appears when I use PyODPS?

Resolve this issue in the following ways:

-   Upgrade the SDK to version V0.8.4 or later.
    
-   Add the following statement in SQL:
    
    ```
    from odps.types import Decimal
    Decimal._max_precision=38
    ```
    

## How do I troubleshoot the issue that the speed of executing SQL statements through PyODPS is slow?

If SQL tasks execute slowly, it is often not related to PyODPS. Troubleshoot using the following steps:

1.  Check network and server latency
    
    -   Verify whether there is a delay in the proxy server or network link used to submit the task.
        
    -   Determine whether there is a delay in the server's task queue.
        
    
2.  Evaluate data reading efficiency
    
    If your SQL execution involves reading large volumes of data, check whether the reading speed is reduced due to the excessive size of the data or an overabundance of data shards. Here's how you can proceed:
    
    First, consider separating the task submission from data reading. Use run\_sql to submit the task, then instance.wait\_for\_success to wait for its completion. Afterward, read the data with instance.open\_reader. This will help you identify the delay caused by each operation. See the following examples for before and after splitting:
    
    -   Before splitting:
        
        ```
        with o.execute_sql('select * from your_table').open_reader() as reader:
            for row in reader:
                print(row)
        ```
        
    -   After splitting:
        
        ```
        inst = o.run_sql('select * from your_table')
        inst.wait_for_success()
        with inst.open_reader() as reader:
            for row in reader:
                print(row)
        ```
        
    
3.  Verify DataWorks job status (If Applicable)
    
    For jobs submitted in DataWorks, confirm whether there are SQL tasks that have been submitted correctly but fail to generate Logview, particularly when the PyODPS version is below 0.11.6. These tasks typically use the execute\_sql or run\_sql methods.
    
4.  Local environment factor analysis
    
    To ascertain whether the issue is tied to the local environment, enabling the debug log function is recommended. PyODPS will record all requests and responses, allowing you to pinpoint the source of the delay by examining the logs.
    
    An example is provided below:
    
    ```
    import datetime
    import logging
    from odps import ODPS
    
    logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    o = ODPS(...)  #  Fill in the account here. If the environment has provided MaxCompute Entry, ignore it.
    # Print the local time to determine the time when the local operation was initiated
    print("Check time:", datetime.datetime.now())
    # Submit task
    inst = o.run_sql("select * from your_table")
    ```
    
    Your standard output should resemble the result shown here:
    
    ```
    Check time: 2025-01-24 15:34:21.531330
    2025-01-24 15:34:21,532 - odps.rest - DEBUG - Start request.
    2025-01-24 15:34:21,532 - odps.rest - DEBUG - POST: http://service.<region>.maxcompute.aliyun.com/api/projects/<project>/instances
    2025-01-24 15:34:21,532 - odps.rest - DEBUG - data: b'<?xml version="1.0" encoding="utf-8"?>\n<Instance>\n  <Job>\n    <Priority>9</Priority>\n    <Tasks>\n      <SQL>\n        ....
    2025-01-24 15:34:21,532 - odps.rest - DEBUG - headers: {'Content-Type': 'application/xml'}
    2025-01-24 15:34:21,533 - odps.rest - DEBUG - request url + params /api/projects/<project>/instances?curr_project=<project>
    2025-01-24 15:34:21,533 - odps.accounts - DEBUG - headers before signing: {'Content-Type': 'application/xml', 'User-Agent': 'pyodps/0.12.2 CPython/3.7.12', 'Content-Length': '736'}
    2025-01-24 15:34:21,533 - odps.accounts - DEBUG - headers to sign: OrderedDict([('content-md5', ''), ('content-type', 'application/xml'), ('date', 'Fri, 24 Jan 2025 07:34:21 GMT')])
    2025-01-24 15:34:21,533 - odps.accounts - DEBUG - canonical string: POST
    
    application/xml
    Fri, 24 Jan 2025 07:34:21 GMT
    /projects/maxframe_ci_cd/instances?curr_project=maxframe_ci_cd
    2025-01-24 15:34:21,533 - odps.accounts - DEBUG - headers after signing: {'Content-Type': 'application/xml', 'User-Agent': 'pyodps/0.12.2 CPython/3.7.12', 'Content-Length': '736', ....
    2025-01-24 15:34:21,533 - urllib3.connectionpool - DEBUG - Resetting dropped connection: service.<region>.maxcompute.aliyun.com
    2025-01-24 15:34:22,027 - urllib3.connectionpool - DEBUG - http://service.<region>.maxcompute.aliyun.com:80 "POST /api/projects/<project>/instances?curr_project=<project> HTTP/1.1" 201 0
    2025-01-24 15:34:22,027 - odps.rest - DEBUG - response.status_code 201
    2025-01-24 15:34:22,027 - odps.rest - DEBUG - response.headers:
    {'Server': '<Server>', 'Date': 'Fri, 24 Jan 2025 07:34:22 GMT', 'Content-Type': 'text/plain;charset=utf-8', 'Content-Length': '0', 'Connection': 'close', 'Location': ....
    2025-01-24 15:34:22,027 - odps.rest - DEBUG - response.content: b''
    ```
    
    This output reveals the times at which the code initiates the task (2025-01-24 15:34:21.531), sends the request (2025-01-24 15:34:21.533), and receives the server's response (2025-01-24 15:34:22.027), thus clarifying the duration of each stage.
