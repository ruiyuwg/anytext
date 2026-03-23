This topic describes window functions that are supported by the DataFrame API.

## **Usage examples**

-   Use window functions to group the iris dataset by the name column, returning a DataFrameGroupBy object called `grouped`. Subsequent operations are then performed independently on each group.
    
    **Note**
    
    For more information about the source of the iris dataset, see [Use DataFrame to process data](/help/en/maxcompute/user-guide/dataframe-quick-start#section-z6t-wdm-hjz).
    
    ```
    iris = DataFrame(o.get_table('pyodps_iris'))
    grouped = iris.groupby('name')
    print(grouped.mutate(grouped.sepallength.cumsum(), grouped.sort('sepallength').row_number()).head(10))
    ```
    
    The following result is returned:
    
    ```
                name  sepallength_sum  row_number
    0  Iris-setosa            250.3           1
    1  Iris-setosa            250.3           2
    2  Iris-setosa            250.3           3
    3  Iris-setosa            250.3           4
    4  Iris-setosa            250.3           5
    5  Iris-setosa            250.3           6
    6  Iris-setosa            250.3           7
    7  Iris-setosa            250.3           8
    8  Iris-setosa            250.3           9
    9  Iris-setosa            250.3          10
    ```
    

-   Use window functions to select columns.
    
    ```
    iris = DataFrame(o.get_table('pyodps_iris'))
    print(iris['name', 'sepallength', iris.groupby('name').sort('sepallength').sepallength.cumcount()].head(5))
    ```
    
    The following result is returned:
    
    ```
              name  sepallength  sepallength_count
    0  Iris-setosa          4.3                  1
    1  Iris-setosa          4.4                  2
    2  Iris-setosa          4.4                  3
    3  Iris-setosa          4.4                  4
    4  Iris-setosa          4.5                  5
    ```
    
-   Use window functions to aggregate data by scalar. The processing method is the same as group-based aggregation.
    
    ```
    from odps.df import Scalar
    iris = DataFrame(o.get_table('pyodps_iris'))
    iris.groupby(Scalar(1)).sort('sepallength').sepallength.cumcount()
    ```
    

## **Function introduction**

The following table lists the window functions that are supported by the DataFrame API.

**Window function**

**Description**

cumsum

Calculates the cumulative sum.

cummean

Calculates the cumulative mean.

cummedian

Calculates the cumulative median.

cumstd

Calculates the cumulative standard deviation.

cummax

Calculates the cumulative maximum.

cummin

Calculates the cumulative minimum.

cumcount

Calculates the cumulative sum.

lag

Retrieves the value of a row at a given offset that precedes the current row. The system determines the number of the row to retrieve the value based on the following formula: Number of the current row - Offset value.

lead

Retrieves the value of a row at a given offset that follows the current row. The system determines the number of the row to retrieve the value based on the following formula: Number of the current row + Offset value.

rank

Calculates the rank of a row in an ordered group.

dense\_rank

Calculates the dense rank of a row in an ordered group.

percent\_rank

Calculates the relative rank of a row in an ordered group.

row\_number

Calculates the row number. Row numbers start from 1.

qcut

Divides a group of data into N bins based on the data sequence and returns the number of the bin that contains the current data. If data is not evenly distributed in bins, more data is distributed to the first bin by default.

nth\_value

Retrieves the Nth value in the group.

cume\_dist

Calculates the proportion of rows whose values are no greater than the current value to all rows in a group.

## **Parameter description**

-   The `rank`, `dense_rank`, `percent_rank`, and `row_number` window functions support the following parameters.
    
    **Parameter**
    
    **Description**
    
    sort
    
    The keyword that is used to sort rows. This parameter is an empty string by default.
    
    ascending
    
    Specifies whether to sort rows in ascending order. This parameter is set to True by default.
    
-   The `lag` and `lead` window functions support the following parameters in addition to the parameters that are supported by the `rank` function.
    
    **Parameter**
    
    **Description**
    
    offset
    
    The number of rows that are between the current row and the row where you want to retrieve data.
    
    default
    
    The value to return if the row at the specified offset does not exist.
    
-   The `cumsum`, `cummax`, `cummin`, `cummean`, `cummedian`, `cumcount`, and `cumstd` window functions support the following parameters in addition to the parameters that are supported by the `rank` function.
    
    **Parameter**
    
    **Description**
    
    unique
    
    Specifies whether to enable data deduplication. This parameter is set to False by default.
    
    preceding
    
    The start of a window.
    
    following
    
    The end of a window.
