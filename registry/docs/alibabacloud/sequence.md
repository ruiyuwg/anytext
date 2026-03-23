SequenceExpr represents a column in a two-dimensional dataset. You cannot manually create a SequenceExpr object. You can only retrieve one from a collection object.

## **Prerequisites**

Before you retrieve a column, make sure the following requirements are met:

-   A sample table named **pyodps\_iris** is prepared. For more information, see [DataFrame data processing](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
    
-   A DataFrame object is created. For more information, see [Create a DataFrame object](/help/en/maxcompute/user-guide/create-a-dataframe-object#e9474fb0378zg).
    

## Retrieve a column

-   Use `collection.column_name` to retrieve a column. Sample command:
    
    ```
    print(iris.sepallength.head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength
    0          4.9
    1          4.7
    2          4.6
    3          5.0
    4          5.4
    ```
    
-   If the name of a column is stored in a string variable, use `df[column_name]` to retrieve the column. Sample command:
    
    ```
    print(iris['sepallength'].head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength
    0          4.9
    1          4.7
    2          4.6
    3          5.0
    4          5.4
    ```
    

## Column types

DataFrame has its own type system. When a table is initialized, data types of MaxCompute are converted into the related data types of DataFrame. This way, more types of computing backends are supported. The DataFrame execution backend supports MaxCompute SQL, Pandas, and databases, such as MySQL and Postgres.

The following table describes the mappings between data types of DataFrame and data types of MaxCompute.

**Data type of MaxCompute**

**Data type of DataFrame**

BIGINT

INT64

DOUBLE

FLOAT64

STRING

STRING

DATETIME

DATETIME

BOOLEAN

BOOLEAN

DECIMAL

DECIMAL

ARRAY<VALUE\_TYPE>

LIST<VALUE\_TYPE>

MAP<KEY\_TYPE, VALUE\_TYPE>

DICT<KEY\_TYPE, VALUE\_TYPE>

If you specify `options.sql.use_odps2_extension=True`, the mappings between the following data types are also supported.

TINYINT

INT8

SMALLINT

INT16

INT

INT32

FLOAT

FLOAT32

Take note of the following points:

-   If the fields in a table are of the LIST and DICT types, you must specify the types of elements in the table. If you do not specify the types of the elements, an error occurs.
    
-   DataFrame does not support the TIMESTAMP and STRUCT types that are introduced in MaxCompute V2.0.
    
-   You can obtain the data type by using `sequence.dtype` in a sequence object. Sample code:
    
    ```
    print(iris.sepallength.dtype)
    ```
    
    The following result is returned:
    
    ```
    FLOAT64
    ```
    
-   You can use the `astype` method to change the type of a column. If you use this method, a type is required as the input value and the converted sequence object is returned. Sample code:
    
    ```
    print(iris.sepallength.astype('int').head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength
    0            4
    1            4
    2            4
    3            5
    4            5
    ```
    

## Column names

-   In DataFrame computing, a sequence object must have a column name. In most cases, DataFrame automatically creates a name for each sequence object. Sample code:
    
    ```
    print(iris.groupby('name').sepalwidth.max().head(5))
    ```
    
    The following result is returned:
    
    ```
       sepalwidth_max
    0             4.4
    1             3.4
    2             3.8
    ```
    
    **Note**
    
    In the preceding example, `sepalwidth` is named `sepalwidth_max` after the maximum value of sepalwidth is obtained. For example, if you add a scalar field to a specified sequence object, the returned result is automatically named as the name of the sequence object. In other cases, you need to manually name a sequence object.
    
-   A sequence object provides the `rename` method to rename a column. Sample code:
    
    ```
    print(iris.sepalwidth.rename('sepal_width').head(5))
    ```
    
    The following result is returned:
    
    ```
       sepal_width
    0          3.0
    1          3.2
    2          3.1
    3          3.6
    4          3.9
    ```
    

## Column calculations

-   You can perform operations on a sequence to obtain a new sequence. This operation is similar to the calculation of simple Python variables. For numeric columns, arithmetic operations are supported. For string columns, only string concatenations are supported. Sample code:
    
    ```
    print((iris.sepallength + 5).head(5))
    ```
    
    The following result is returned:
    
    ```
       sepallength
    0          9.9
    1          9.7
    2          9.6
    3         10.0
    4         10.4
    ```
    
-   If two columns are used for calculations, PyODPS cannot determine the column name that is displayed. You must manually specify the column name. Sample code:
    
    ```
    print((iris.sepallength + iris.sepalwidth).rename('sum_sepal').head(5))
    ```
    
    The following result is returned:
    
    ```
       sum_sepal
    0        7.9
    1        7.9
    2        7.7
    3        8.6
    4        9.3
    ```
    
    **Note**
    
    For more information about column calculations, see [Column operations](/help/en/maxcompute/user-guide/column-operations#concept-sx2-sbg-cfb).
