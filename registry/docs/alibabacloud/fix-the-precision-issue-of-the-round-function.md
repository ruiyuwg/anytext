The ROUND function rounds input values based on the number of decimal places that you specify. This topic describes the precision issue of the ROUND function and provides a solution and an example for reference.

## Example

The returned result of the [ROUND](/help/en/maxcompute/user-guide/mathematical-functions/#section-ocf-jrm-vdb) function in SQL code does not meet the expectation. Sample statement:

```
select round(0.25375,4);
```

The returned result is expected to be 0.2538 based on the logic of the ROUND function. However, the input value is not rounded up, and 0.2537 is returned.

## Cause

MaxCompute converts the input value of the function to the DOUBLE type before the function is executed. During the data type conversion, loss of precision occurs. As a result, the returned result of the ROUND function is inaccurate. In this example, 0.25375 is converted to 0.2536999999... As a result, 0.2537 is returned.

When you use the ROUND function to process data in a table, the actual data types of the table fields are read. In this case, the precision issue cannot occur.

## Solution

To ensure the precision of input values, you can use the [CAST](/help/en/maxcompute/user-guide/other-functions/#section-bpc-dy1-wdb) function to convert the input values that you specified to the DECIMAL type. The precision issue does not occur on data of the DECIMAL type. Sample statements:

Returned results when the `set odps.sql.hive.compatible=false;` configuration is used:

-   ```
    select round(cast(0.25375 as decimal), 4);
    ```
    
    The returned result is 0.2538.
-   ```
    select round(cast(0.25375 as decimal(20,5)), 4);
    ```
    
    The returned result is 0.2538.

Returned results when the `set odps.sql.hive.compatible=true;` configuration is used:

-   ```
    select round(cast(0.25375 as decimal), 4);
    ```
    
    The returned result is 0.
-   ```
    select round(cast(0.25375 as decimal(20,5)), 4);
    ```
    
    The returned result is 0.2538.
