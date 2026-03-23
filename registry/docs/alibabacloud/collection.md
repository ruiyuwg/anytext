CollectionExpr supports all operations on DataFrame two-dimensional datasets. It can be considered as a MaxCompute table or a spreadsheet. DataFrame objects are also CollectionExpr objects. CollectionExpr supports various operations on two-dimensional datasets, such as column operations, data filtering, and data transformation.

## **Prerequisites**

Make sure that the following requirements are met:

-   A table named **pyodps\_iris** is prepared. For more information, see the "DataFrame data processing" section in [Getting started](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
    
-   A DataFrame object is created. For more information, see the "Create a DataFrame object from a MaxCompute table" section in [Create a DataFrame object](/help/en/maxcompute/user-guide/create-a-dataframe-object#e9474fb0378zg).
    

## Retrieve types

You can use the `dtypes` method to retrieve the types of all columns in a CollectionExpr object. In this example, the `dtypes` method returns a [Schema type](/help/en/maxcompute/user-guide/tables#concept-jll-wmf-cfb). The following code shows an example:

```
print(iris.dtypes)
```

The following result is returned:

```
odps.Schema {
  sepallength           float64
  sepalwidth            float64
  petallength           float64
  petalwidth            float64
  name                  string
}
```

## Select, add, and delete columns

### **Select columns**

You can use the `expr[columns]` syntax to select specific columns from a CollectionExpr object to create a dataset. The following code shows an example:

```
print(iris['name', 'sepallength'].head(5))
```

The following result is returned:

```
          name  sepallength
0  Iris-setosa          4.9
1  Iris-setosa          4.7
2  Iris-setosa          4.6
3  Iris-setosa          5.0
4  Iris-setosa          5.4
```

**Note**

If only one column is required, you need to add a comma (,) after the column name or explicitly mark the column as a list, such as `iris[iris.sepallength,]` or `iris[[iris.sepallength]]`. Otherwise, a Sequence object, instead of a Collection object, is returned.

### **Delete columns**

-   You can use the `exclude` method to exclude specific columns of the original dataset from the new dataset. The following code shows an example:
    
    ```
    print(iris.exclude('sepallength', 'petallength')[:5].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepalwidth  petalwidth         name
    0         3.0         0.2  Iris-setosa
    1         3.2         0.2  Iris-setosa
    2         3.1         0.2  Iris-setosa
    3         3.6         0.2  Iris-setosa
    4         3.9         0.4  Iris-setosa
    ```
    
-   In PyODPS version 0.7.2 or later, you can use a new syntax to directly exclude specific columns from a dataset. The following code shows an example:
    
    ```
    del iris['sepallength']
    del iris['petallength']
    print(iris[:5].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepalwidth  petalwidth         name
    0         3.0         0.2  Iris-setosa
    1         3.2         0.2  Iris-setosa
    2         3.1         0.2  Iris-setosa
    3         3.6         0.2  Iris-setosa
    4         3.9         0.4  Iris-setosa
    ```
    

### **Add columns**

-   You can use the `expr[expr, new_sequence]` syntax to add a transformed column to an existing Collection object. The new column is a part of the new Collection object.
    
    In the following example, a new column is created by adding one to each value in the `sepalwidth` column of the `iris` table. The new column is renamed as `sepalwidthplus1`, and appended to the existing dataset to create another dataset. The following code shows an example:
    
    ```
    print(iris[iris, (iris.sepalwidth + 1).rename('sepalwidthplus1')].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name  \
    0          4.9         3.0          1.4         0.2  Iris-setosa   
    1          4.7         3.2          1.3         0.2  Iris-setosa   
    2          4.6         3.1          1.5         0.2  Iris-setosa   
    3          5.0         3.6          1.4         0.2  Iris-setosa   
    4          5.4         3.9          1.7         0.4  Iris-setosa   
    
       sepalwidthplus1  
    0              4.0  
    1              4.2  
    2              4.1  
    3              4.6  
    4              4.9  
    ```
    
-   If you use the `expr[expr, new_sequence]` syntax, the transformed column may have the same name as the original column. Rename the new column if you want to merge it with the original Collection object. In PyODPS version 0.7.2 or later, you can directly append a column to the current dataset. The following code shows an example:
    
    ```
    iris['sepalwidthplus1'] = iris.sepalwidth + 1
    print(iris.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name  \
    0          4.9         3.0          1.4         0.2  Iris-setosa   
    1          4.7         3.2          1.3         0.2  Iris-setosa   
    2          4.6         3.1          1.5         0.2  Iris-setosa   
    3          5.0         3.6          1.4         0.2  Iris-setosa   
    4          5.4         3.9          1.7         0.4  Iris-setosa  
    
       sepalwidthplus1  
    0              4.0  
    1              4.2  
    2              4.1  
    3              4.6  
    4              4.9 
    ```
    

### **Add and delete columns simultaneously**

-   You can use the `exclude` method to exclude the original column and append the new column to the dataset. This way, you do not need to rename the new column. The following code shows an example:
    
    ```
    print(iris[iris.exclude('sepalwidth'), iris.sepalwidth * 2].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  petallength  petalwidth         name  sepalwidth
    0          4.9          1.4         0.2  Iris-setosa         6.0
    1          4.7          1.3         0.2  Iris-setosa         6.4
    2          4.6          1.5         0.2  Iris-setosa         6.2
    3          5.0          1.4         0.2  Iris-setosa         7.2
    4          5.4          1.7         0.4  Iris-setosa         7.8
    ```
    
-   In PyODPS version 0.7.2 or later, you can directly use a new column to overwrite the original column on the current dataset. The following code shows an example:
    
    ```
    iris['sepalwidth'] = iris.sepalwidth * 2
    print(iris.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          4.9         6.0          1.4         0.2  Iris-setosa
    1          4.7         6.4          1.3         0.2  Iris-setosa
    2          4.6         6.2          1.5         0.2  Iris-setosa
    3          5.0         7.2          1.4         0.2  Iris-setosa
    4          5.4         7.8          1.7         0.4  Iris-setosa
    ```
    
-   To add and delete columns at the same time, you can also call the `select` method to create a Collection object. To perform such operation, you need to use the selected columns as input parameters. You can use the `keyword` parameter to rename a column. The following code shows an example:
    
    ```
    print(iris.select('name', sepalwidthminus1=iris.sepalwidth - 1).head(5))
    ```
    
    The following result is returned:
    
    ```
              name  sepalwidthminus1
    0  Iris-setosa               2.0
    1  Iris-setosa               2.2
    2  Iris-setosa               2.1
    3  Iris-setosa               2.6
    4  Iris-setosa               2.9
    ```
    
-   You can also pass a lambda expression, which takes the result from the previous operation as a parameter. During the execution, PyODPS checks the lambda expression and passes in the Collection object generated from the previous operation and replaces it with the valid columns. The following code shows an example:
    
    ```
    print(iris['name', 'petallength'][[lambda x: x.name]].head(5))
    ```
    
    The following result is returned:
    
    ```
              name
    0  Iris-setosa
    1  Iris-setosa
    2  Iris-setosa
    3  Iris-setosa
    4  Iris-setosa
    ```
    
-   In PyODPS version 0.7.2 or later, conditional assignments are supported. The following code shows an example:
    
    ```
    iris[iris.sepallength > 5.0, 'sepalwidth'] = iris.sepalwidth * 2
    print(iris.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          4.9         3.0          1.4         0.2  Iris-setosa
    1          4.7         3.2          1.3         0.2  Iris-setosa
    2          4.6         3.1          1.5         0.2  Iris-setosa
    3          5.0         3.6          1.4         0.2  Iris-setosa
    4          5.4         7.8          1.7         0.4  Iris-setosa
    ```
    

## Introduce constants and random numbers

### **Introduce constants**

-   DataFrame allows you to append a column of constants to a Collection object. `Scalar` is required for introducing constants. To introduce constants, you need to manually specify the column name. The following code shows an example:
    
    ```
    from odps.df import Scalar
    print(iris[iris, Scalar(1).rename('id')][:5].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name  id
    0          4.9         3.0          1.4         0.2  Iris-setosa   1
    1          4.7         3.2          1.3         0.2  Iris-setosa   1
    2          4.6         3.1          1.5         0.2  Iris-setosa   1
    3          5.0         3.6          1.4         0.2  Iris-setosa   1
    4          5.4         3.9          1.7         0.4  Iris-setosa   1
    ```
    
-   You can use `NullScalar` to specify a null column. In this case, you need to specify the field type. The following code shows an example:
    
    ```
    from odps.df import NullScalar
    print(iris[iris, NullScalar('float').rename('fid')][:5].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name   fid
    0          4.9         3.0          1.4         0.2  Iris-setosa  None
    1          4.7         3.2          1.3         0.2  Iris-setosa  None
    2          4.6         3.1          1.5         0.2  Iris-setosa  None
    3          5.0         3.6          1.4         0.2  Iris-setosa  None
    4          5.4         3.9          1.7         0.4  Iris-setosa  None
    ```
    
-   In PyODPS version 0.7.12 or later, a simpler syntax is provided. The following code shows an example:
    
    ```
    iris['id'] = 1
    print(iris.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name  id
    0          4.9         3.0          1.4         0.2  Iris-setosa   1
    1          4.7         3.2          1.3         0.2  Iris-setosa   1
    2          4.6         3.1          1.5         0.2  Iris-setosa   1
    3          5.0         3.6          1.4         0.2  Iris-setosa   1
    4          5.4         3.9          1.7         0.4  Iris-setosa   1
    ```
    
    If you use the syntax, the types of null values cannot be automatically identified. Therefore, you need to use the following code to add null columns.
    
    ```
    iris['null_col'] = NullScalar('float')
    print(iris.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name null_col
    0          4.9         3.0          1.4         0.2  Iris-setosa     None
    1          4.7         3.2          1.3         0.2  Iris-setosa     None
    2          4.6         3.1          1.5         0.2  Iris-setosa     None
    3          5.0         3.6          1.4         0.2  Iris-setosa     None
    4          5.4         3.9          1.7         0.4  Iris-setosa     None
    ```
    

### **Introduce random numbers**

DataFrame also allows you to append a column of random numbers to a Collection object. The column type is FLOAT and the value range is 0-1. Each row has different values. `RandomScalar` is required for this operation, and its parameter is an optional random seed. The following code shows an example:

```
from odps.df import RandomScalar
iris[iris, RandomScalar().rename('rand_val')][:5]
```

The following result is returned:

```
   sepallength  sepalwidth  petallength  petalwidth         name  rand_val
0          4.9         3.0          1.4         0.2  Iris-setosa  0.000471
1          4.7         3.2          1.3         0.2  Iris-setosa  0.799520
2          4.6         3.1          1.5         0.2  Iris-setosa  0.834609
3          5.0         3.6          1.4         0.2  Iris-setosa  0.106921
4          5.4         3.9          1.7         0.4  Iris-setosa  0.763442
```

## Filter data

A Collection object allows you to filter data. You can use AND (&), OR (|), NOT (~), `filter`, lambda expressions, and multiple query methods to filter data.

-   Example 1: Query data whose `sepallength` value is greater than 5.
    
    ```
    print(iris[iris.sepallength > 5].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          5.4         3.9          1.7         0.4  Iris-setosa
    1          5.4         3.7          1.5         0.2  Iris-setosa
    2          5.8         4.0          1.2         0.2  Iris-setosa
    3          5.7         4.4          1.5         0.4  Iris-setosa
    4          5.4         3.9          1.3         0.4  Iris-setosa
    ```
    
-   Example 2: Use the AND (&) condition.
    
    ```
    print(iris[(iris.sepallength < 5) & (iris['petallength'] > 1.5)].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          4.8         3.4          1.6         0.2      Iris-setosa
    1          4.8         3.4          1.9         0.2      Iris-setosa
    2          4.7         3.2          1.6         0.2      Iris-setosa
    3          4.8         3.1          1.6         0.2      Iris-setosa
    4          4.9         2.4          3.3         1.0  Iris-versicolor
    ```
    
-   Example 3: Use the OR (|) condition.
    
    ```
    print(iris[(iris.sepalwidth < 2.5) | (iris.sepalwidth > 4)].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          5.7         4.4          1.5         0.4      Iris-setosa
    1          5.2         4.1          1.5         0.1      Iris-setosa
    2          5.5         4.2          1.4         0.2      Iris-setosa
    3          4.5         2.3          1.3         0.3      Iris-setosa
    4          5.5         2.3          4.0         1.3  Iris-versicolor
    ```
    
    **Note**
    
    You must use an ampersand (`&`) to represent the AND operator and use a vertical bar (`|`) to represent the OR operator. `and` and `or` cannot be used.
    
-   Example 4: Use the NOT (~) condition.
    
    ```
    print(iris[~(iris.sepalwidth > 3)].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          4.9         3.0          1.4         0.2  Iris-setosa
    1          4.4         2.9          1.4         0.2  Iris-setosa
    2          4.8         3.0          1.4         0.1  Iris-setosa
    3          4.3         3.0          1.1         0.1  Iris-setosa
    4          5.0         3.0          1.6         0.2  Iris-setosa
    ```
    
-   Example 5: Explicitly call the `filter` method and specify multiple AND conditions.
    
    ```
    print(iris.filter(iris.sepalwidth > 3.5, iris.sepalwidth < 4).head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          5.0         3.6          1.4         0.2  Iris-setosa
    1          5.4         3.9          1.7         0.4  Iris-setosa
    2          5.4         3.7          1.5         0.2  Iris-setosa
    3          5.4         3.9          1.3         0.4  Iris-setosa
    4          5.7         3.8          1.7         0.3  Iris-setosa
    ```
    
-   Example 6: Use a lambda expression for continuous operations.
    
    ```
    print(iris[iris.sepalwidth > 3.8]['name', lambda x: x.sepallength + 1].head(5))
    ```
    
    The following result is returned:
    
    ```
              name  sepallength
    0  Iris-setosa          6.4
    1  Iris-setosa          6.8
    2  Iris-setosa          6.7
    3  Iris-setosa          6.4
    4  Iris-setosa          6.2
    ```
    
-   Example 7: For a Collection object that contains a column of the BOOLEAN type, use the column as a filter condition.
    
    ```
    # Query the schema.
    print(df.dtypes)
    # Obtain the returned result.
    odps.Schema {
      a boolean
      b int64
    }
    
    # Use Column a of the BOOLEAN type to filter data.
    print(df[df.a])
    # Obtain the returned result.
          a  b
    0  True  1
    1  True  3
    ```
    
    When you retrieve a single Sequence from a Collection object, only the column of the BOOLEAN type can be used as a valid filter condition.
    
    ```
    df[df.a, ]       # Retrieve a one-column collection. 
    df[[df.a]]       # Retrieve a one-column collection. 
    df.select(df.a)  # Explicitly retrieve a one-column collection. 
    df[df.a]         # Use Column a of the BOOLEAN type to filter data. 
    df.a             # Retrieve a column from a collection. 
    df['a']          # Retrieve a column from a collection.
    ```
    
-   Example 8: Use the `query` method in Pandas to filter data by using a query statement and directly use a column name such as `sepallength` in an expression to perform operations. In a query statement, both `&` and `and` indicate the AND operator, and both `|` and `or` indicate the OR operator.
    
    ```
    print(iris.query("(sepallength < 5) and (petallength > 1.5)").head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          4.8         3.4          1.6         0.2      Iris-setosa
    1          4.8         3.4          1.9         0.2      Iris-setosa
    2          4.7         3.2          1.6         0.2      Iris-setosa
    3          4.8         3.1          1.6         0.2      Iris-setosa
    4          4.9         2.4          3.3         1.0  Iris-versicolor
    ```
    
    If a local variable is required in an expression, add an at sign (`@`) before the variable name.
    
    ```
    var = 4
    print(iris.query("(sepalwidth < 2.5) | (sepalwidth > @var)").head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth             name
    0          5.7         4.4          1.5         0.4      Iris-setosa
    1          5.2         4.1          1.5         0.1      Iris-setosa
    2          5.5         4.2          1.4         0.2      Iris-setosa
    3          4.5         2.3          1.3         0.3      Iris-setosa
    4          5.5         2.3          4.0         1.3  Iris-versicolor
    ```
    
    The following table describes the syntax of the `query` method.
    
    **Syntax**
    
    **Description**
    
    name
    
    All columns that do not have the at sign (`@`) prefix are treated as column names. If columns have such prefix, local variables are retrieved.
    
    operator
    
    The following operators are supported: `+`, `-`, `*`, `/`, `//`, `%`, `**`, `==`, `!=`, `<`, `<=`, `>`, `>=`, `in`, and `not in`.
    
    bool
    
    The AND or OR operation. `&` and `and` represent the AND operator. `|` and `or` represent the OR operator.
    
    attribute
    
    The attribute of the object.
    
    index, slice, subscript
    
    The slice operations.
    

## Convert a column into rows

-   You can use the `explode` method to convert a column of the LIST or MAP type into multiple rows. You can also use the `apply` method for the multi-row output operation. For operations such as aggregation, you need to merge output rows with the columns in the original table. In this case, you can use the multi-row output feature of DataFrame. This feature allows you to map a set of data generated by the multi-row output function to the column names in the original set. The following example shows how to use the multi-row output feature.
    
    -   Query sample data.
        
        ```
        print(df)
        ```
        
        The following result is returned:
        
        ```
           id         a             b
        0   1  [a1, b1]  [a2, b2, c2]
        1   2      [c1]      [d2, e2]
        ```
        
    -   Example 1:
        
        ```
        print(df[df.id, df.a.explode(), df.b])
        ```
        
        The following result is returned:
        
        ```
           id   a             b
        0   1  a1  [a2, b2, c2]
        1   1  b1  [a2, b2, c2]
        2   2  c1      [d2, e2]
        ```
        
    -   Example 2:
        
        ```
        print(df[df.id, df.a.explode(), df.b.explode()])
        ```
        
        The following result is returned:
        
        ```
           id   a   b
        0   1  a1  a2
        1   1  a1  b2
        2   1  a1  c2
        3   1  b1  a2
        4   1  b1  b2
        5   1  b1  c2
        6   2  c1  d2
        7   2  c1  e2
        ```
        
    
-   If the explode method does not produce output for an input row, the input row does not appear in the output by default. To retain the row in the output, you can add the configuration `keep_nulls=True`. In this case, null values are listed in the row. The following code shows an example:
    
    -   Query sample data.
        
        ```
        print(df)
        ```
        
        The following result is returned:
        
        ```
           id         a
        0   1  [a1, b1]
        1   2        []
        ```
        
    -   Example 1:
        
        ```
        print(df[df.id, df.a.explode()])
        ```
        
        The following result is returned:
        
        ```
           id   a
        0   1  a1
        1   1  b1
        ```
        
    -   Example 2:
        
        ```
        print(df[df.id, df.a.explode(keep_nulls=True)])
        ```
        
        The following result is returned:
        
        ```
           id     a
        0   1    a1
        1   1    b1
        2   2  None
        ```
        
    
-   For more information about how to use the `explode` method to implement multi-row output, see the "Collection-related operations" section in [Column operations](/help/en/maxcompute/user-guide/column-operations#section-n5m-1b4-cfb).
    

## Output limits

-   Return the first three rows of data.
    
    ```
    print(iris[:3].execute())
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          4.9         3.0          1.4         0.2  Iris-setosa
    1          4.7         3.2          1.3         0.2  Iris-setosa
    2          4.6         3.1          1.5         0.2  Iris-setosa
    ```
    
-   In MaxCompute SQL, backend slice operations do not support the `start` and `step` methods, but support the `limit` method.
    
    ```
    print(iris.limit(3).execute())
    ```
    
    The following result is returned:
    
    ```
       sepallength  sepalwidth  petallength  petalwidth         name
    0          4.9         3.0          1.4         0.2  Iris-setosa
    1          4.7         3.2          1.3         0.2  Iris-setosa
    2          4.6         3.1          1.5         0.2  Iris-setosa
    ```
    
    **Note**
    
    You can perform slice operations on Collection objects, not Sequence objects.
