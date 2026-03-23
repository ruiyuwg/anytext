This topic describes the execution methods that you can use for DataFrame operations.

## **Prerequisites**

Make sure that the following requirements are met:

-   A sample table named **pyodps\_iris** is prepared. For more information, see [DataFrame data processing](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
    
-   A DataFrame object is created. For more information, see the "Create a DataFrame object from a MaxCompute table" section in [Create a DataFrame object](/help/en/maxcompute/user-guide/create-a-dataframe-object#e9474fb0378zg).
    

## Deferred execution

DataFrame operations are executed only when you explicitly call the `execute` method or when you call the methods that internally call the `execute` method. The following table lists the methods that internally call the execute method.

**Method**

**Description**

**Return value**

persist

Saves the execution results to MaxCompute tables.

PyODPS DataFrame

execute

Executes the operations and returns all the results.

ResultFrame

head

Executes the operations and returns the first N rows of result data.

ResultFrame

tail

Executes the operations and returns the last N rows of result data.

ResultFrame

to\_pandas

Converts a Collection object into a pandas DataFrame object or converts a Sequence object into a Series object. If the wrap parameter is set to True, a PyODPS DataFrame object is returned.

-   If the wrap parameter is set to True, a PyODPS DataFrame object is returned.
    
-   If the wrap parameter is set to False, a pandas DataFrame object is returned. The default value of the wrap parameter is False.
    

plot, hist, and boxplot

Plotting methods.

N/A

**Note**

In an interactive environment, PyODPS DataFrame automatically calls the `execute` method when PyODPS DataFrame displays result data or calls the `repr` method. You do not need to manually call the `execute` method.

**Examples**

```
# In a non-interactive environment, you need to manually call the execute method.
print(iris[iris.sepallength < 5][:5].execute())

# In an interactive environment, the system automatically calls the execute method.
print(iris[iris.sepallength < 5][:5])
```

The following result is returned:

```
   sepallength  sepalwidth  petallength  petalwidth         name
0          4.9         3.0          1.4         0.2  Iris-setosa
1          4.7         3.2          1.3         0.2  Iris-setosa
2          4.6         3.1          1.5         0.2  Iris-setosa
3          4.6         3.4          1.4         0.3  Iris-setosa
4          4.4         2.9          1.4         0.2  Iris-setosa
```

If you need to disable the system from automatically calling the execute method in an interactive environment, manual operations are required. The following code shows an example:

```
from odps import options
options.interactive = False

print(iris[iris.sepallength < 5][:5])
```

The following result is returned:

```
Collection: ref_0
  odps.Table
    name: hudi_mc_0612.`iris3`
    schema:
      sepallength           : double      # Sepal length (cm)
      sepalwidth            : double      # Sepal width (cm)
      petallength           : double      # Petal length (cm)
      petalwidth            : double      # Petal width (cm)
      name                  : string      # Type
Collection: ref_1
  Filter[collection]
    collection: ref_0
    predicate:
      Less[sequence(boolean)]
        sepallength = Column[sequence(float64)] 'sepallength' from collection ref_0
        Scalar[int8]
          5
Slice[collection]
  collection: ref_1
  stop:
    Scalar[int8]
      5
```

After you disable automatic calls, an entire abstract syntax tree (AST) is displayed when the `repr` object is displayed. In this case, you must manually call the `execute` method if you need to use the method.

## **Retrieve execution results**

If a `ResultFrame` is returned after you call the `execute` or `head` method, you can retrieve results from the ResultFrame.

**Note**

A ResultFrame is a result set and cannot be used in subsequent calculations.

-   You can iteratively retrieve all records from the ResultFrame. The following code shows an example:
    
    ```
    result = iris.head(3)
    for r in result:
        print(list(r))
    ```
    
    The following result is returned:
    
    ```
    [4.9, 3.0, 1.4, 0.2, 'Iris-setosa']
    [4.7, 3.2, 1.3, 0.2, 'Iris-setosa']
    [4.6, 3.1, 1.5, 0.2, 'Iris-setosa']
    ```
    
-   If pandas is installed, a ResultFrame can be converted into a pandas DataFrame or a PyODPS DataFrame that uses the pandas backend.
    
    ```
    # Return a pandas DataFrame. 
    pd_df = iris.head(3).to_pandas()
    
    # Return a PyODPS DataFrame that uses the pandas backend. 
    wrapped_df = iris.head(3).to_pandas(wrap=True)  
    ```
    

## Save results to MaxCompute tables

-   You can call the `persist` method to return a new DataFrame object for a Collection object. The persist method uses the table name as the parameter.
    
    ```
    iris2 = iris[iris.sepalwidth < 2.5].persist('pyodps_iris')
    print(iris2.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          4.5         2.3          1.3         0.3      Iris-setosa
    1          5.5         2.3          4.0         1.3  Iris-versicolor
    2          4.9         2.4          3.3         1.0  Iris-versicolor
    3          5.0         2.0          3.5         1.0  Iris-versicolor
    4          6.0         2.2          4.0         1.0  Iris-versicolor
    ```
    
-   You can specify the `partitions` parameter in the `persist` method to create a partitioned table. The table is partitioned based on the columns that are specified by `partitions`.
    
    ```
    iris3 = iris[iris.sepalwidth < 2.5].persist('pyodps_iris_test', partitions=['name'])
    print(iris3.data)
    ```
    
    The following result is returned:
    
    ```
    odps.Table
      name: odps_test_sqltask_finance.`pyodps_iris`
      schema:
        sepallength           : double
        sepalwidth            : double
        petallength           : double
        petalwidth            : double
      partitions:
        name                  : string
    ```
    
-   To write data to a partition of an existing table, you can specify the `partition` parameter in the `persist` method. The partition parameter specifies the partition to which data is written. For example, set the partition parameter to `ds=******`. The table must contain all columns of the DataFrame object and the columns must be of the same type. The `drop_partition` and `create_partition` parameters are valid only if the partition parameter is specified. The drop\_partition parameter specifies whether to drop the specified partition if the partition exists. The create\_partition parameter specifies whether to create the specified partition if the partition does not exist.
    
    ```
    print(iris[iris.sepalwidth < 2.5].persist('pyodps_iris_partition', partition='ds=test', drop_partition=True, create_partition=True).head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name    ds
    0          4.5         2.3          1.3         0.3      Iris-setosa  test
    1          5.5         2.3          4.0         1.3  Iris-versicolor  test
    2          4.9         2.4          3.3         1.0  Iris-versicolor  test
    3          5.0         2.0          3.5         1.0  Iris-versicolor  test
    4          6.0         2.2          4.0         1.0  Iris-versicolor  test
    ```
    
-   When you write data to a table, you can specify the time-to-live (TTL) of the table. For example, the following statement sets the TTL of the table to 10 days.
    
    ```
    print(iris[iris.sepalwidth < 2.5].persist('pyodps_iris', lifecycle=10).head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          4.5         2.3          1.3         0.3      Iris-setosa
    1          5.5         2.3          4.0         1.3  Iris-versicolor
    2          4.9         2.4          3.3         1.0  Iris-versicolor
    3          5.0         2.0          3.5         1.0  Iris-versicolor
    4          6.0         2.2          4.0         1.0  Iris-versicolor
    ```
    
-   If the data source does not contain MaxCompute objects and only contains pandas objects, you must manually specify the MaxCompute entrance object or mark the entrance object as a global object when you call the `persist` method.
    
    ```
    # The entrance object is o. 
    # Specify the entrance object. 
    df.persist('table_name', odps=o)
    # Alternative operation: Mark the entrance object as a global object. 
    o.to_global()
    df.persist('table_name')
    ```
    

## Save results to pandas DataFrame

You can call the `to_pandas` method to save results to a pandas DataFrame object. If the `wrap` parameter is set to True, a PyODPS DataFrame object is returned.

-   Example 1: Call the `to_pandas` method to return a pandas DataFrame object.
    
    ```
    print(type(iris[iris.sepalwidth < 2.5].to_pandas()))
    ```
    
    The following result is returned:
    
    ```
    <class 'pandas.core.frame.DataFrame'>
    ```
    
-   Example 2: Set the `wrap` parameter to True to return a PyODPS DataFrame object.
    
    ```
    print(type(iris[iris.sepalwidth < 2.5].to_pandas(wrap=True)))
    ```
    
    The following result is returned:
    
    ```
    <class 'odps.df.core.DataFrame'>
    ```
    

**Note**

You can call the `open_reader` method in PyODPS and use `reader.to_pandas()` to convert the results into a pandas DataFrame object. For more information, see [Tables](/help/en/maxcompute/user-guide/tables#concept-lhx-tmf-cfb).

## Configure runtime parameters

You can configure the runtime parameters for immediately executed methods, such as `execute`, `persist`, and `to_pandas`. This setting is valid only for the MaxCompute SQL backend.

-   Configure global parameters. For more information, see [SQL](/help/en/maxcompute/user-guide/sql#section-jr3-w4m-cfb).
    
-   Specify the `hints` parameter in these methods. This ensures that the specified runtime parameters are valid only for the current calculation.
    
    ```
    print(iris[iris.sepallength < 5].to_pandas(hints={'odps.sql.mapper.split.size': 16}))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          4.5         2.3          1.3         0.3      Iris-setosa
    1          4.9         2.4          3.3         1.0  Iris-versicolor
    ```
    

## Display details at runtime

-   To view the LogView information of an instance at runtime, you must modify the global configurations. The following code shows an example:
    
    ```
    from odps import options
    options.verbose = True
    
    print(iris[iris.sepallength < 5].exclude('sepallength')[:5].execute())
    ```
    
    The following result is returned:
    
    ```
    Sql compiled:
    SELECT t1.`sepalwidth`, t1.`petallength`, t1.`petalwidth`, t1.`name`
    FROM odps_test_sqltask_finance.`pyodps_iris` t1
    WHERE t1.`sepallength` < 5
    LIMIT 5
    Instance ID:
      Log view:http://logview
      
       sepalwidth  petallength  petalwidth             name
    0         2.3          1.3         0.3      Iris-setosa
    1         2.4          3.3         1.0  Iris-versicolor
    ```
    
-   You can specify a logging function. The following code shows an example:
    
    ```
    my_logs = []
    def my_logger(x):
        my_logs.append(x)
    options.verbose_log = my_logger
    print(iris[iris.sepallength < 5].exclude('sepallength')[:5].execute())
    
    print(my_logs)
    ```
    
    The following result is returned:
    
    ```
       sepalwidth  petallength  petalwidth             name
    0         2.3          1.3         0.3      Iris-setosa
    1         2.4          3.3         1.0  Iris-versicolor
    
    ['Sql compiled:', 'CREATE TABLE tmp_pyodps_24332bdb_4fd0_4d0d_aed4_38a443618268 LIFECYCLE 1 AS \nSELECT t1.`sepalwidth`, t1.`petallength`, t1.`petalwidth`, t1.`name` \nFROM odps_test_sqltask_finance.`pyodps_iris` t1 \nWHERE t1.`sepallength` < 5 \nLIMIT 5', 'Instance ID: 20230815034706122gbymevg*****', '  Log view:]
    ```
    

## Cache intermediate calculation results of Collection objects

During the DataFrame calculation process, some Collection objects are used multiple times. To view the execution results of an intermediate process, you can call the `cache` method to mark a Collection object that you want to calculate first. The following code shows an example.

**Note**

The execution of the `cache` method is deferred. Automatic calculation is not immediately triggered after the `cache` method is called.

```
cached = iris[iris.sepalwidth < 3.5]['sepallength', 'name'].cache()
df = cached.head(3)
print(df)

# The following result is returned:
   sepallength             name
0          4.5      Iris-setosa
1          5.5  Iris-versicolor
2          4.9  Iris-versicolor

# You can immediately retrieve the calculation result because cached is calculated. 
print(cached.head(3))

# The following result is returned:
   sepallength             name
0          4.5      Iris-setosa
1          5.5  Iris-versicolor
2          4.9  Iris-versicolor
```

## Asynchronous and parallel execution

### **Asynchronous execution**

PyODPS DataFrame supports asynchronous execution. You can specify the `async` parameter to enable asynchronous execution for the following immediately executed methods: `execute`, `persist`, `head`, `tail`, and `to_pandas`. The `timeout` parameter specifies the timeout period. Asynchronous operations return [Future](https://docs.python.org/3/library/concurrent.futures.html#future-objects) objects.

```
future = iris[iris.sepalwidth < 10].head(10, async_=True)
print(future.result())

# The following result is returned:
   sepallength  sepalwidth  petallength  petalwidth             name
0          4.5         2.3          1.3         0.3      Iris-setosa
1          5.5         2.3          4.0         1.3  Iris-versicolor
2          4.9         2.4          3.3         1.0  Iris-versicolor
3          5.0         2.0          3.5         1.0  Iris-versicolor
4          6.0         2.2          4.0         1.0  Iris-versicolor
5          6.2         2.2          4.5         1.5  Iris-versicolor
6          5.5         2.4          3.8         1.1  Iris-versicolor
7          5.5         2.4          3.7         1.0  Iris-versicolor
8          6.3         2.3          4.4         1.3  Iris-versicolor
9          5.0         2.3          3.3         1.0  Iris-versicolor
```

### **Parallel execution**

You can call the newly introduced `Delay API` operation to defer the following immediately executed methods: `execute`, `persist`, `head`, `tail`, and `to_pandas`. Then, [Future](https://docs.python.org/3/library/concurrent.futures.html#future-objects) objects are returned. When the Delay API operation is called, the system finds the dependency and executes the methods based on the specified concurrency. In this case, asynchronous execution is supported.

```
from odps.df import Delay
delay = Delay()  # Create a Delay object. 

df = iris[iris.sepal_width < 5].cache()  # Common dependency of subsequent expressions. 
future1 = df.sepal_width.sum().execute(delay=delay)  # Return a Future object. The execution is not started. 
future2 = df.sepal_width.mean().execute(delay=delay)
future3 = df.sepal_length.max().execute(delay=delay)
delay.execute(n_parallel=3)  # The execution starts with three concurrent threads. 
|==========================================|   1 /  1  (100.00%)        21s
print(future1.result())

# The following result is returned:
25.0
 
print(future2.result())

# The following result is returned:
2.272727272727273
```

In the preceding example, PyODPS DataFrame first executes the object of the shared dependency. Then, PyODPS DataFrame sets the concurrency to 3 and executes objects from `future1` to `future3`.

You can specify the `async` parameter in `delay.execute` to specify whether to enable asynchronous execution. If asynchronous execution is enabled, you can also use the `timeout` parameter to specify the timeout period.
