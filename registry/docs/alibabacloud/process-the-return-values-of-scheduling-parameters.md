When you schedule tasks, the standard time format returned by a scheduling parameter may not meet the requirements of complex business scenarios, such as obtaining the end of a month, a quarter, or a custom time offset. In these cases, you can use engine functions to post-process the return value and generate the required time format. You can convert the value directly in a compute node or pre-process it using an assignment node.

## **Business scenarios**

In data development and extract, transform, and load (ETL) flows, task scheduling often depends on specific time dimensions. Examples include monthly settlements that are based on a financial cycle, such as the last day of the previous month, and incremental data synchronization that uses time windows at the hour or minute level. Because scheduling parameters return a standard time format by default, they cannot directly generate these complex, non-standard time strings. You must post-process their return values.

## **Solutions**

There are two main ways to post-process scheduling parameters. You can process them directly within a node that supports function computation, such as an ODPS SQL node. Alternatively, you can pre-process them using an assignment node and pass the result to a downstream node. The method you choose depends on whether the target node supports direct function execution in its code.

-   **Direct Processing**: In nodes that support function computation, such as ODPS SQL nodes, you can directly use engine functions in the code to transform the return values of scheduling parameters.
    
-   **Indirect Processing**: If a target node, such as a batch synchronization node, does not support function execution in its code, you can add an upstream [assignment node](/help/en/dataworks/user-guide/configure-an-assignment-node#task-2485378). This assignment node performs the function transformation and passes its output to the downstream node as a **context parameter**.
    

## Implementation

For the following scenarios, assume that the scheduled time (CYCTIME) of the task instance is `20250727000500`.

### Scenario 1: Directly process return values in an SQL node

This scenario uses an ODPS SQL node as an example. ODPS SQL nodes support the direct use of MaxCompute SQL functions in SQL statements to process scheduling parameters. For other types of SQL nodes, you can refer to the function types supported by the specific engine.

#### Get the last day of the previous month

Obtain the last day of the previous month in yyyymmdd format. This is often used for partitioning or settling monthly data.

1.  **Parameter configuration**: Configure a scheduling parameter to obtain the year and month of the current task's scheduled time.
    
    `last_month=$[yyyy-mm]`
    
2.  **Processing logic**: In the ODPS SQL code, you can first construct the first day of the current month. Then, use the `DATEADD` function to subtract one day to obtain the last day of the previous month. Finally, use the `REPLACE` function to remove the separators.
    
    ```
    SELECT REPLACE(DATEADD(date'${last_month}-01',-1,'dd'),'-','');
    ```
    
3.  **Example**: The value of the `last_month` parameter is `2025-07`. After the function processes the value, the **returned result** is `20250630`.
    

#### Get the current quarter

Calculate the quarter (1, 2, 3, or 4) to which the task's scheduled time belongs, based on the month.

1.  **Parameter configuration**: Configure a scheduling parameter to obtain the month.
    
    `month=$[mm]`
    
2.  **Processing logic**: In the ODPS SQL code, you can divide the month by 3 and round up to the nearest integer to calculate the quarter.
    
    ```
    SELECT CEIL(CAST('${month}' AS INT)/3);
    ```
    
3.  **Example**: The value of the `month` parameter is `07`. After the function processes the value, the **returned result** is `3`.
    

#### Get time components 15 minutes before the scheduled time

In scenarios that require data slicing at a precise point in time, you can obtain any time offset relative to the scheduled time.

1.  **Parameter configuration**: Use the mathematical operation `-15/24/60` in the scheduling parameters to directly obtain the year, month, day, hour, and minute from 15 minutes ago.
    
    `year=$[yyyy-15/24/60]`
    
    `month=$[yyyymm-15/24/60]`
    
    `day=$[yyyymmdd-15/24/60]`
    
    `hour=$[hh24-15/24/60]`
    
    `mi=$[mi-15/24/60]`
    
2.  **Processing logic**: You can reference these pre-calculated parameters directly in the SQL statement.
    
    ```
    select 'year=${year} month=${month} day=${day} hour=${hour} mi=${mi}';
    ```
    
3.  **Example**: After the cross-day calculation, the **returned result** is `year=2025 month=202507 day=20250726 hour=23 mi=50`.
    

### Scenario 2: Generate time intervals for incremental synchronization

You can generate time parameters for batch synchronization tasks that require a specified time interval. Assume that these scenarios require the time format to be `yyyymmddhh24miss` and use a left-closed, right-open interval.

#### Scheduling interval of one day

Obtain the time interval from `00:00:00` yesterday to `00:00:00` today.

1.  **Parameter configuration**: Obtain the dates for yesterday and today.
    
    `beginDateTime=$[yyyymmdd-1]`
    
    `endDateTime=$[yyyymmdd]`
    
2.  **Processing logic**: In the \`WHERE\` clause for data filtering, you can concatenate strings to complete the hour, minute, and second parts.
    
    ```
    event_time >= '${beginDateTime}000000' AND event_time < '${endDateTime}000000'
    ```
    
3.  **Example**: The start time of the **returned result** is `20250726000000`, and the end time is `20250727000000`.
    

#### Scheduling interval of one hour

Obtain the time interval from `00:00` of the previous hour to `00:00` of the current hour.

1.  **Parameter configuration**: Use a mathematical operation to obtain the previous hour and the current hour.
    
    `beginDateTime=$[yyyymmddhh24-1/24]`
    
    `endDateTime=$[yyyymmddhh24]`
    
2.  **Processing logic**: In the \`WHERE\` clause for data filtering, you can concatenate strings to complete the minute and second parts.
    
    ```
    event_time >= '${beginDateTime}0000' AND event_time < '${endDateTime}0000'
    ```
    
3.  **Example**: The start time of the **returned result** is `20250726230000`, and the end time is `20250727000000`.
    

### Scenario 3: Pre-process parameters for downstream nodes using an assignment node

If a target node, such as a batch synchronization node, cannot directly process scheduling parameters using functions, you can use an assignment node for pre-processing. For example, if a batch synchronization task needs to use a timestamp field for incremental synchronization, you can follow these steps:

1.  Create an [assignment node](/help/en/dataworks/user-guide/configure-an-assignment-node#task-2485378).
    
2.  In the assignment node, use an engine function, such as `unix_timestamp`, to convert a standard scheduling parameter such as `$[yyyymmddhh24miss]` to the timestamp format.
    
3.  Use the converted timestamp, which is the output of the assignment node, as an input parameter for the downstream batch synchronization node. For more information, see [Configure node context](/help/en/dataworks/user-guide/configure-input-and-output-parameters).
