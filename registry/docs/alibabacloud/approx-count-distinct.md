This topic describes how to use the APPROX\_COUNT\_DISTINCT function to improve the performance of your deployments.

## Limits

This function is supported only in Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 3.0.0 or later.

## Background information

When you optimize the COUNT DISTINCT function, distinct key information must be saved in the state data of the aggregate node. If a large number of distinct keys exist, the read/write overhead of state data is high. This causes a bottleneck in the performance optimization of deployments. In many cases, accurate computation is not necessary. If you want to achieve high deployment performance at the expense of a small portion of accuracy, you can use the APPROX\_COUNT\_DISTINCT function. APPROX\_COUNT\_DISTINCT supports miniBatch and local-global optimization on the aggregate node. When you use this function, make sure that the following requirements are met:

-   The input data does not contain retract messages.
    
-   A large number of distinct keys, such as unique visitors (UVs), exist. The APPROX\_COUNT\_DISTINCT function cannot bring obvious benefits if only a small number of distinct keys exist.
    

## Syntax

```
APPROX_COUNT_DISTINCT(col [, accuracy])
```

## Input parameters

**Parameter**

**Data type**

**Description**

col

All data types

The name of the field.

accuracy

FLOAT

The computation accuracy. This parameter is optional. A larger value indicates a higher accuracy, which leads to a higher state overhead. A higher state overhead weakens the performance of the APPROX\_COUNT\_DISTINCT function. Valid values: (0.0, 1.0). Default value: 0.99.

## Example

-   Test data
    
    Table 1. T1
    
    **a (VARCHAR)**
    
    **b (BIGINT)**
    
    Hi
    
    1
    
    Hi
    
    2
    
    Hi
    
    3
    
    Hi
    
    4
    
    Hi
    
    5
    
    Hi
    
    6
    
    Hello
    
    1
    
    Hello
    
    2
    
    Hello
    
    3
    
    Hello
    
    4
    
-   Test statements
    
    ```
    SELECT 
      a,
      APPROX_COUNT_DISTINCT(b) as b,
      APPROX_COUNT_DISTINCT(b, 0.9) as c
    FROM T1
    GROUP BY a;
    ```
    
-   Test results
    
    **a (VARCHAR)**
    
    **b (BIGINT)**
    
    **c (BIGINT)**
    
    Hi
    
    6
    
    6
    
    Hello
    
    4
    
    4
