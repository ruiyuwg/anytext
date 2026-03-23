This topic describes the aggregate operations supported by DataFrame, including implementation methods for grouping and aggregation and how to write custom aggregation. DataFrame also provides information about HyperLogLog counting based on columns.

```
from odps.df import DataFrame
iris = DataFrame(o.get_table('pyodps_iris'))
```

You can perform the following common aggregation operations on the preceding DataFrame:

-   Call the `describe` function to view the quantity, maximum value, minimum value, mean value, and standard deviation of numerical columns in the DataFrame.
    
    ```
    print(iris.describe())
    ```
    
    The following result is returned:
    
    ```
        type  sepal_length  sepal_width  petal_length  petal_width
    0  count    150.000000   150.000000    150.000000   150.000000
    1   mean      5.843333     3.054000      3.758667     1.198667
    2    std      0.828066     0.433594      1.764420     0.763161
    3    min      4.300000     2.000000      1.000000     0.100000
    4    max      7.900000     4.400000      6.900000     2.500000
    ```
    
-   Perform aggregation operations in a single column.
    
    ```
    iris.sepallength.max()
    ```
    
    The following result is returned:
    
    ```
    7.9
    ```
    
-   To aggregate over a distinct sequence of data records, call the `unique` function before you call the related aggregate function.
    
    ```
    iris.name.unique().cat(sep=',')
    ```
    
    The following result is returned:
    
    ```
    u'Iris-setosa,Iris-versicolor,Iris-virginica'
    ```
    
-   If all columns support the same aggregation operation, perform this aggregation operation on the entire DataFrame.
    
    ```
    iris.exclude('category').mean()
    ```
    
    The following result is returned:
    
    ```
       sepal_length  sepal_width  petal_length  petal_width
    1      5.843333     3.054000      3.758667     1.198667
    ```
    
-   Call the count function to calculate the total number of rows in the DataFrame.
    
    ```
    iris.count()
    ```
    
    The following result is returned:
    
    ```
    150
    ```
    
    **Note**
    
    If you want to display the result in logs, run the `print(iris.count().execute())` command.
    

The following table describes the aggregation operations that PyODPS supports.

**Aggregation**

**Description**

count or size

Calculates the number of rows.

unique

Calculates the number of distinct values.

min

Calculates the minimum value.

max

Calculates the maximum value.

sum

Calculates the total sum of specified values.

mean

Calculates the mean value.

median

Calculates the median value.

quantile(p)

Calculates the p-quantile. This function returns accurate results only if integers are calculated.

var

Calculates the variance.

std

Calculates the standard deviation.

moment

Calculates the Nth central moment or the Nth moment.

skew

Calculates the sample skewness. This function returns unbiased estimation results.

kurtosis

Calculates the sample kurtosis. This function returns unbiased estimation results.

cat

Concatenates character strings with a separator.

tolist

Aggregates a column into a list.

**Note**

PyODPS DataFrames ignore null values of aggregation operations on columns in MaxCompute and the pandas backend. This is different from pandas DataFrames but is similar to the logic of SQL.

## Group and aggregate data

You can use the following methods to group and aggregate data:

-   PyODPS DataFrames provide the `groupby` function to group data. After the data is grouped, call the `agg` or `aggregate` function to aggregate the data. The result columns include the grouped column and the aggregated column.
    
    ```
    iris.groupby('name').agg(, smin=.min())
    ```
    
    The following result is returned:
    
    ```
                  name  sepallength_max  smin
    0      Iris-setosa              5.8   4.3
    1  Iris-versicolor              7.0   4.9
    2   Iris-virginica              7.9   4.9
    ```
    
-   PyODPS DataFrame provides the `value_counts` function. After the data is grouped based on a specified column, you can sort the groups in descending order based on the number of distinct values in each group.
    
    -   Call the `groupby` function.
        
        ```
        iris.groupby('name').agg(count=iris.name.count()).sort('count', ascending=False).head(5)
        ```
        
        The following result is returned:
        
        ```
                      name  count
        0   Iris-virginica     50
        1  Iris-versicolor     50
        2      Iris-setosa     50
        ```
        
    -   Call the `value_counts` function.
        
        ```
        iris['name'].value_counts().head(5)
        ```
        
        The following result is returned:
        
        ```
                      name  count
        0   Iris-virginica     50
        1  Iris-versicolor     50
        2      Iris-setosa     50
        ```
        
-   You can retrieve the column name of a single aggregated column. However, this operation restricts you to use only aggregate functions to manage the values in the aggregated column.
    
    ```
    iris.groupby('name').petallength.sum()
    ```
    
    The following result is returned:
    
    ```
       petallength_sum
    0             73.2
    1            213.0
    2            277.6
    ```
    
    ```
    iris.groupby('name').agg(iris.petallength.notnull().sum())
    ```
    
    The following result is returned:
    
    ```
                  name  petallength_sum
    0      Iris-setosa               50
    1  Iris-versicolor               50
    2   Iris-virginica               50
    ```
    
-   You can also group data by constant value. This operation requires Scalar initialization.
    
    ```
    from odps.df import Scalar
    iris.groupby(Scalar(1)).petallength.sum()
    ```
    
    The following result is returned:
    
    ```
       petallength_sum
    0            563.8
    ```
    

## Write custom aggregations

Use the `agg` or `aggregate` function to call custom aggregations on columns. A custom aggregation requires a class to provide the following methods:

-   `buffer()`: returns a mutable object such as LIST or DICT. The `buffer` size must not increase with the amount of data.
    
-   `__call__(buffer, *val)`: aggregates values to `buffer`.
    
-   `merge(buffer, pbuffer)`: aggregates `pbuffer` to `buffer`.
    
-   `getvalue(buffer)`: returns the final value.
    

The following sample code provides an example on how to calculate the mean value.

```
class Agg(object):

    def buffer(self):
        return [0.0, 0]

    def __call__(self, buffer, val):
        buffer[0] += val
        buffer[1] += 1

    def merge(self, buffer, pbuffer):
        buffer[0] += pbuffer[0]
        buffer[1] += pbuffer[1]

    def getvalue(self, buffer):
        if buffer[1] == 0:
            return 0.0
        return buffer[0] / buffer[1]
```

```
iris.sepalwidth.agg(Agg)
```

The following result is returned:

```
3.0540000000000007
```

When you write custom aggregations, take note of the following points:

-   If the data type of the output is different from the data type of the input, you must specify the data type for the output.
    
    ```
    iris.sepalwidth.agg(Agg, 'float')
    ```
    
-   You can use custom aggregations to group and aggregate data.
    
    ```
    iris.groupby('name').sepalwidth.agg(Agg)
    ```
    
    The following result is returned:
    
    ```
       petallength_aggregation
    0                    3.418
    1                    2.770
    2                    2.974
    ```
    
-   You can use the `agg` function to call custom aggregations on multiple columns.
    
    ```
    class Agg(object):
    
        def buffer(self):
            return [0.0, 0.0]
    
        def __call__(self, buffer, val1, val2):
            buffer[0] += val1
            buffer[1] += val2
    
        def merge(self, buffer, pbuffer):
            buffer[0] += pbuffer[0]
            buffer[1] += pbuffer[1]
    
        def getvalue(self, buffer):
            if buffer[1] == 0:
                return 0.0
            return buffer[0] / buffer[1]
    ```
    
    ```
    from odps.df import agg
    to_agg = agg([iris.sepalwidth, ], Agg, rtype='float')  # Call a user-defined aggregate function (UDAF) to aggregate data in two columns.
    iris.groupby('name').agg(val=to_agg)
    ```
    
    The following result is returned:
    
    ```
                  name       val
    0      Iris-setosa  0.682781
    1  Iris-versicolor  0.466644
    2   Iris-virginica  0.451427
    ```
    
-   To call an existing UDAF in MaxCompute, you need to only specify the name of the UDAF.
    
    ```
    iris.groupby('name').agg(iris.sepalwidth.agg('your_func'))  # Aggregate the values in a single column. 
    to_agg = agg([iris.sepalwidth, ], 'your_func', rtype='float')
    iris.groupby('name').agg(to_agg.rename('val'))  # Aggregate the values in multiple columns.
    ```
    
    **Note**
    
    Due to the limits of Python user-defined functions (UDFs), you cannot specify the LIST or DICT type as the input or output data type for custom aggregations.
    

## HyperLogLog counting

PyODPS DataFrame provides the `hll_count` operation, which is a HyperLogLog operation. You can call this operation to count the number of distinct values in a column. This operation returns an estimated number. If a large amount of data is calculated, you can call this operation to estimate the number of distinct values.

For example, you can call this operation to calculate the number of unique visitors (UVs) and obtain an estimated number in a short period of time.

**Note**

The following example uses a Pandas package. You can run the code in this example in an on-premises environment. If you run the code in a DataWorks environment, you must import the Pandas package by using a third-party package.

```
from odps.df import DataFrame
import pandas as pd
import numpy as np
df = DataFrame(pd.DataFrame({'a': np.random.randint(100000, size=100000)}))
df.a.hll_count()
```

The following result is returned:

```
63270
```

```
df.a.nunique()
```

The following result is returned:

```
63250
```

**Note**

The `splitter` parameter is used to split columns and calculate the number of distinct values.
