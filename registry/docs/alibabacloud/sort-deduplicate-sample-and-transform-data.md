This topic describes the operations you can perform on a DataFrame. You can sort, deduplicate, sample, and scale data. You can also process null values.

## **Prerequisites**

Make sure that the following requirements are met:

-   A table named **pyodps\_iris** is prepared. For more information, see the "DataFrame data processing" section in [Getting started](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
    
-   A DataFrame is created.
    
    ```
    from odps.df import DataFrame
    iris = DataFrame(o.get_table('pyodps_iris'))
    ```
    

## Sort data

You can sort data only in a collection.

-   Call the `sort` or `sort_values` method to sort data.
    
    ```
    >>> iris.sort('sepalwidth').head(5)
       sepallength  sepalwidth  petallength  petalwidth             name
    0          5.0         2.0          3.5         1.0  Iris-versicolor
    1          6.2         2.2          4.5         1.5  Iris-versicolor
    2          6.0         2.2          5.0         1.5   Iris-virginica
    3          6.0         2.2          4.0         1.0  Iris-versicolor
    4          5.5         2.3          4.0         1.3  Iris-versicolor
    ```
    
-   Add the configuration `ascending=False;` to sort data in descending order.
    
    ```
    >>> iris.sort('sepalwidth', ascending=False).head(5)
       sepallength  sepalwidth  petallength  petalwidth         name
    0          5.7         4.4          1.5         0.4  Iris-setosa
    1          5.5         4.2          1.4         0.2  Iris-setosa
    2          5.2         4.1          1.5         0.1  Iris-setosa
    3          5.8         4.0          1.2         0.2  Iris-setosa
    4          5.4         3.9          1.3         0.4  Iris-setosa
    ```
    
-   Use `-` to sort data in descending order.
    
    ```
    >>> iris.sort(-iris.sepalwidth).head(5)
       sepallength  sepalwidth  petallength  petalwidth         name
    0          5.7         4.4          1.5         0.4  Iris-setosa
    1          5.5         4.2          1.4         0.2  Iris-setosa
    2          5.2         4.1          1.5         0.1  Iris-setosa
    3          5.8         4.0          1.2         0.2  Iris-setosa
    4          5.4         3.9          1.3         0.4  Iris-setosa
    ```
    
-   Sort data based on multiple fields.
    
    ```
    >>> iris.sort(['sepalwidth', 'petallength']).head(5)
       sepallength  sepalwidth  petallength  petalwidth             name
    0          5.0         2.0          3.5         1.0  Iris-versicolor
    1          6.0         2.2          4.0         1.0  Iris-versicolor
    2          6.2         2.2          4.5         1.5  Iris-versicolor
    3          6.0         2.2          5.0         1.5   Iris-virginica
    4          4.5         2.3          1.3         0.3      Iris-setosa
    ```
    
-   If you sort data based on multiple fields in different orders, you can use the `ascending` parameter to display a list of data to be sorted. The number of columns must be the same as the number of fields. The field values must be of the BOOLEAN type.
    
    ```
    >>> iris.sort(['sepalwidth', 'petallength'], ascending=[True, False]).head(5)
       sepallength  sepalwidth  petallength  petalwidth             name
    0          5.0         2.0          3.5         1.0  Iris-versicolor
    1          6.0         2.2          5.0         1.5   Iris-virginica
    2          6.2         2.2          4.5         1.5  Iris-versicolor
    3          6.0         2.2          4.0         1.0  Iris-versicolor
    4          6.3         2.3          4.4         1.3  Iris-versicolor
    ```
    
    The following sample code shows another example to sort data based on multiple fields.
    
    ```
    >>> iris.sort(['sepalwidth', -iris.petallength]).head(5)
       sepallength  sepalwidth  petallength  petalwidth             name
    0          5.0         2.0          3.5         1.0  Iris-versicolor
    1          6.0         2.2          5.0         1.5   Iris-virginica
    2          6.2         2.2          4.5         1.5  Iris-versicolor
    3          6.0         2.2          4.0         1.0  Iris-versicolor
    4          6.3         2.3          4.4         1.3  Iris-versicolor
    ```
    
    **Note**
    
    To sort data in Python on MaxCompute (PyODPS), you must configure the `options.df.odps.sort.limit` parameter to specify the number of rows that you want to sort. The default value of the options.df.odps.sort.limit parameter is 10000. You can set the parameter to a value greater than 10000. However, this setting may cause an out-of-memory (OOM) issue.
    

## Deduplicate data

-   To deduplicate data in a collection, call the `distinct` method to deduplicate data in the following ways:
    
    -   ```
        >>> iris[['name']].distinct()
                      name
        0      Iris-setosa
        1  Iris-versicolor
        2   Iris-virginica
        ```
        
    -   ```
        >>> iris.distinct('name')
                      name
        0      Iris-setosa
        1  Iris-versicolor
        2   Iris-virginica
        ```
        
    -   ```
        >>> iris.distinct('name', 'sepallength').head(3)
                  name  sepallength
        0  Iris-setosa          4.3
        1  Iris-setosa          4.4
        2  Iris-setosa          4.5
        ```
        
-   Call the `unique` method to deduplicate a sequence of data. However, the sequence that calls the `unique` method cannot be used to select columns.
    
    ```
    >>> iris.name.unique()
                  name
    0      Iris-setosa
    1  Iris-versicolor
    2   Iris-virginica
    ```
    
    Invalid sample code:
    
    ```
    >>> iris[iris.name, iris.name.unique()]
    ```
    

## Sample data

To sample data from a collection, you can call the `sample` method. PyODPS supports the following sampling methods:

**Note**

MaxCompute DataFrame must support XFlow in projects to execute the following sampling methods, except for sampling by part. If MaxCompute DataFrame does not support XFlow, you can only execute the sampling methods at the backend of Pandas DataFrame.

-   Sampling by part
    
    Data is divided into `parts` by using this sampling method. You can select the part by number.
    
    ```
    >>> iris.sample(parts=10)  # Split data into 10 parts and sample data of the part numbered 0 by default. 
    >>> iris.sample(parts=10, i=0)  # Split data into 10 parts and manually sample data of the part numbered 0. 
    >>> iris.sample(parts=10, i=[2, 5])   # Split data into 10 parts and sample data of the parts numbered 2 and 5. 
    >>> iris.sample(parts=10, columns=['name', 'sepalwidth'])  # Sample the data by name and sepalwidth.
    ```
    
-   Sampling by weight
    
    You can specify the weight column, the number of records, and the proportion of records that you want to sample when you use this method. To enable sampling with replacement, set the `replace` parameter to True.
    
    ```
    >>> iris.sample(n=100, weights='sepal_length')
    >>> iris.sample(n=100, weights='sepal_width', replace=True)
    ```
    
-   Stratified sampling
    
    To use this sampling method, you can specify the label column for stratification, and specify the sampling proportion or the number of records that you want to sample. You can configure the `frac` parameter to specify the sampling proportion and configure the `n` parameter to specify the number of records that you want to sample. This sampling method does not support sampling with replacement.
    
    ```
    >>> iris.sample(strata='category', n={'Iris Setosa': 10, 'Iris Versicolour': 10})
    >>> iris.sample(strata='category', frac={'Iris Setosa': 0.5, 'Iris Versicolour': 0.4})
    ```
    

## Scale data

A DataFrame supports data scaling based on the maximum value, minimum value, average value, or standard deviation. The following data shows an example.

```
name  id  fid
0  name1   4  5.3
1  name2   2  3.5
2  name2   3  1.5
3  name1   4  4.2
4  name1   3  2.2
5  name1   3  4.1
```

-   Use the `min_max_scale` method to normalize data.
    
    ```
    df.min_max_scale(columns=['fid'])
        name  id       fid
    0  name1   4  1.000000
    1  name2   2  0.526316
    2  name2   3  0.000000
    3  name1   4  0.710526
    4  name1   3  0.184211
    5  name1   3  0.684211
    ```
    
-   Use the `min_max_scale` method with the `feature_range` parameter to specify the output value range. The following example shows how to keep the output values in the range of (-1, 1):
    
    ```
    df.min_max_scale(columns=['fid'], feature_range=(-1, 1))
        name  id       fid
    0  name1   4  1.000000
    1  name2   2  0.052632
    2  name2   3 -1.000000
    3  name1   4  0.421053
    4  name1   3 -0.631579
    5  name1   3  0.368421
    ```
    
-   If you need to retain the original values, use the `preserve` parameter. The scaled data is added as a new column. By default, the new column is named by adding the \_scaled suffix to the original column name. You can use the `suffix` parameter to change the suffix name.
    
    ```
    df.min_max_scale(columns=['fid'], preserve=True)
        name  id  fid  fid_scaled
    0  name1   4  5.3    1.000000
    1  name2   2  3.5    0.526316
    2  name2   3  1.5    0.000000
    3  name1   4  4.2    0.710526
    4  name1   3  2.2    0.184211
    5  name1   3  4.1    0.684211
    ```
    
-   Use the `min_max_scale` method with the `group` parameter to specify one or more group columns and to retrieve the minimum and maximum values from the specified column to scale data.
    
    ```
    df.min_max_scale(columns=['fid'], group=['name'])
        name  id       fid
    0  name1   4  1.000000
    1  name1   4  0.645161
    2  name1   3  0.000000
    3  name1   3  0.612903
    4  name2   2  1.000000
    5  name2   3  0.000000
    ```
    
    The preceding example shows that data in both `name1` and `name2` is scaled based on the minimum and maximum values of the two groups.
    
-   Use the `std_scale` method to scale data based on the standard normal distribution. In the `std_scale` method, you can configure the `preserve` parameter to retain the original column, and configure the `group` parameter to group data.
    
    ```
    df.std_scale(columns=['fid'])
        name  id       fid
    0  name1   4  1.436467
    1  name2   2  0.026118
    2  name2   3 -1.540938
    3  name1   4  0.574587
    4  name1   3 -0.992468
    5  name1   3  0.496234
    ```
    

## Process null values

A DataFrame allows you to delete rows with null values and fill null values. Sample data:

```
id   name   f1   f2   f3   f4
0   0  name1  1.0  NaN  3.0  4.0
1   1  name1  2.0  NaN  NaN  1.0
2   2  name1  3.0  4.0  1.0  NaN
3   3  name1  NaN  1.0  2.0  3.0
4   4  name1  1.0  NaN  3.0  4.0
5   5  name1  1.0  2.0  3.0  4.0
6   6  name1  NaN  NaN  NaN  NaN
```

-   Use the `dropna` method to delete the rows that contain null values in the `subset` object.
    
    ```
    df.dropna(subset=['f1', 'f2', 'f3', 'f4'])
       id   name   f1   f2   f3   f4
    0   5  name1  1.0  2.0  3.0  4.0
    ```
    
-   To keep the rows that contain non-null values, add the configuration `how='all'`.
    
    ```
    df.dropna(how='all', subset=['f1', 'f2', 'f3', 'f4'])
       id   name   f1   f2   f3   f4
    0   0  name1  1.0  NaN  3.0  4.0
    1   1  name1  2.0  NaN  NaN  1.0
    2   2  name1  3.0  4.0  1.0  NaN
    3   3  name1  NaN  1.0  2.0  3.0
    4   4  name1  1.0  NaN  3.0  4.0
    5   5  name1  1.0  2.0  3.0  4.0
    ```
    
-   Use the `thresh` parameter to specify the minimum number of non-null values in a row.
    
    ```
    df.dropna(thresh=3, subset=['f1', 'f2', 'f3', 'f4'])
       id   name   f1   f2   f3   f4
    0   0  name1  1.0  NaN  3.0  4.0
    2   2  name1  3.0  4.0  1.0  NaN
    3   3  name1  NaN  1.0  2.0  3.0
    4   4  name1  1.0  NaN  3.0  4.0
    5   5  name1  1.0  2.0  3.0  4.0
    ```
    
-   Call the `fillna` method to replace null values with constants or values in an existing column.
    
    -   The following example shows how to replace null values with constants:
        
        ```
        df.fillna(100, subset=['f1', 'f2', 'f3', 'f4'])
           id   name     f1     f2     f3     f4
        0   0  name1    1.0  100.0    3.0    4.0
        1   1  name1    2.0  100.0  100.0    1.0
        2   2  name1    3.0    4.0    1.0  100.0
        3   3  name1  100.0    1.0    2.0    3.0
        4   4  name1    1.0  100.0    3.0    4.0
        5   5  name1    1.0    2.0    3.0    4.0
        6   6  name1  100.0  100.0  100.0  100.0
        ```
        
    -   The following example shows how to replace null values with values in an existing column:
        
        ```
        df.fillna(df.f2, subset=['f1', 'f2', 'f3', 'f4'])
           id   name   f1   f2   f3   f4
        0   0  name1  1.0  NaN  3.0  4.0
        1   1  name1  2.0  NaN  NaN  1.0
        2   2  name1  3.0  4.0  1.0  4.0
        3   3  name1  1.0  1.0  2.0  3.0
        4   4  name1  1.0  NaN  3.0  4.0
        5   5  name1  1.0  2.0  3.0  4.0
        6   6  name1  NaN  NaN  NaN  NaN
        ```
        
-   A DataFrame supports backward filling and forward filling to fill null values. The following table defines the valid values of the `method` parameter.
    
    **Value**
    
    **Description**
    
    bfill or backfill
    
    Backward filling
    
    ffill or pad
    
    Forward filling
    
    Example
    
    ```
    df.fillna(method='bfill', subset=['f1', 'f2', 'f3', 'f4'])
       id   name   f1   f2   f3   f4
    0   0  name1  1.0  3.0  3.0  4.0
    1   1  name1  2.0  1.0  1.0  1.0
    2   2  name1  3.0  4.0  1.0  NaN
    3   3  name1  1.0  1.0  2.0  3.0
    4   4  name1  1.0  3.0  3.0  4.0
    5   5  name1  1.0  2.0  3.0  4.0
    6   6  name1  NaN  NaN  NaN  NaN
    df.fillna(method='ffill', subset=['f1', 'f2', 'f3', 'f4'])
       id   name   f1   f2   f3   f4
    0   0  name1  1.0  1.0  3.0  4.0
    1   1  name1  2.0  2.0  2.0  1.0
    2   2  name1  3.0  4.0  1.0  1.0
    3   3  name1  NaN  1.0  2.0  3.0
    4   4  name1  1.0  1.0  3.0  4.0
    5   5  name1  1.0  2.0  3.0  4.0
    6   6  name1  NaN  NaN  NaN  NaN
    ```
    
    You can also use the `ffill` or `bfill` function to simplify the code. The `ffill` function is equivalent to `fillna(method='ffill')`. The `bfill` function is equivalent to `fillna(method='bfill')`.
