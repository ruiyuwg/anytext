In data processing, you often need to dynamically generate partitions or filenames based on a task's runtime. To do this, you can use system-provided parameters to inject dynamic time values, such as the business date-based `${...}` and the scheduled time-based `$[...]`. This topic compares the core differences between these parameter formats, focusing on precision, offset calculation, and use cases.

**Important**

For more information about base time definitions and how to transform custom parameters, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters).

## Comparison of custom parameter formats

Assume that the current time is `November 01, 2025`, and a task is scheduled to run daily at `00:00`. The following table shows how different custom parameters are assigned.

**Note**

Assume that the parameter is referenced in the code as `pt=${datetime}`.

**Parameter format**

**Description**

**Scheduling parameter assignment**

**Parameter replacement result**

`${yyyymmdd}`

Gets the business time.

`datetime=${yyyymmdd}`

`datetime=20251031`

`$[yyyymmddhh24miss]`

Gets the scheduled time, accurate to the second.

`datetime=$[yyyymmddhh24miss]`

`datetime=20251101000000`

`$bizdate`

Gets the business time.

`datetime=$bizdate`

`datetime=20251031`

`$cyctime`

Gets the scheduled time, accurate to the second.

`datetime=$cyctime`

`datetime=20251101000000`

`$gmtdate`

Gets the current time, accurate to the day.

`datetime=$gmtdate`

`datetime=20251101`

`$bizmonth`

Gets the business month. The logic is as follows:

-   If the business time and current time are in the same month, the value is the previous month.
    
-   Otherwise, the value is the month of the business time.
    

`datetime=$bizmonth`

For example, if the current time is `November 01, 2025`:

-   If the business time is `November 02, 2025` (in the same month as the current time), then `datetime=202510`.
    
-   If the business time is `October 31, 2025` (in a different month from the current time), then `datetime=202510`.
    

## Core differences between ${…} and $\[…\] parameters

The following table compares the core differences between the `${…}` and `$[…]` parameters.

**Comparison**

`**${...}**` **(based on business date)**

`**$[...]**` **(based on scheduling time)**

**Time baseline**

Business date (T-1)

Scheduling time (T)

**Time precision**

Day (year, month, day)

Second (year, month, day, hour, minute, second)

**Offset calculation capability**

Supports offsets for years, months, weeks, and days.

Supports offsets for days, hours, and minutes.

**Core limitations**

You cannot format or calculate offsets for smaller time units such as hours, minutes, or seconds.

Does not support direct year or month offsets using syntax such as `$[yyyy±N]` or `$[mm±N]`. Use the `add_months` function.

**Equivalent system parameters**

`${yyyymmdd}` is equivalent to `$bizdate`

`$[yyyymmddhh24miss]` is equivalent to `$cyctime`

-   For more information about how to use the `${…}` and `$[…]` parameters, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254).
    
-   For more information about how to configure and use custom parameters, see [Configure and use scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters#task-2187092).
    

This topic uses an ODPS SQL node as an example. Assume that the scheduled time for the task is `10:30:00 on July 20, 2025`. The following table shows the time value configurations for the `${…}` and `$[…]` parameters.

**Time value**

**${…} parameter**

**$\[…\] parameter**

Obtain the year: 2025

-   Scheduling parameter assignment: `datetime=${yyyy}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2025`
    

-   Scheduling parameter assignment: `datetime=$[yyyy]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2025`
    

Obtain the year: 25

-   Scheduling parameter assignment: `datetime=${yy}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=25`
    

-   Scheduling parameter assignment: `datetime=$[yy]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=25`
    

Obtain the year: 2024

-   Scheduling parameter assignment: `datetime=${yyyy-1}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2024`
    

-   Scheduling parameter assignment: `datetime=$[add_months(yyyymmdd,-12)]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2024`
    

Obtain the month: 07

-   Scheduling parameter assignment: `datetime=${mm}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=07`
    

-   Scheduling parameter assignment: `datetime=$[mm]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=07`
    

Obtain the day of the month: 20

-   Scheduling parameter assignment: `datetime=${dd}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=20`
    

-   Scheduling parameter assignment: `datetime=$[dd]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=20`
    

Obtain the date: June 20, 2025

-   Scheduling parameter assignment: `datetime=${yyyy-mm-dd-29}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2025-06-20`
    

**Important**

This method is not recommended because you must account for the number of days in the month. Use the `$[]` format to obtain the corresponding date in the previous month.

-   Scheduling parameter assignment: `datetime=$[add_months(yyyymmdd,-1)]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2025-06-20`
    

Obtain the date: July 19, 2025

-   Scheduling parameter assignment: `datetime=${yyyy-mm-dd}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2025-07-19`
    

-   Scheduling parameter assignment: `datetime=$[yyyy-mm-dd-1]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2025-07-19`
    

Obtain the date: July 20, 2024

-   Scheduling parameter assignment: `datetime=${yyyy-mm-dd-364}`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2024-07-20`
    

**Important**

This method is not recommended because you must account for leap years. Use the `$[]` format to obtain the corresponding date in the previous year.

-   Scheduling parameter assignment: `datetime=$[add_months(yyyymmdd,-12)]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=2024-07-20`
    

Obtain the time: 10:30:00

Not supported

-   Scheduling parameter assignment: `datetime=$[hh24:mi:ss]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result: `pt=10:30:00`
    

Obtain the time: 2025-07-20 10:30:00

Not supported

-   Scheduling parameter assignment: `datetime1=$[yyyy-mm-dd] datetime2=$[hh24:mi:ss]`
    
    **Note**
    
    Define two custom parameters, datetime1 and datetime2, separated by a space.
    
-   Code reference: `pt=${datetime1} ${datetime2}`
    
-   Parameter replacement result:
    
    -   `datetime1=$[yyyy-mm-dd]=2025-07-20`
        
    -   `datetime2=$[hh24:mi:ss]=10:30:00`
        
    -   `pt=2025-07-20 10:30:00`
        

Obtain the time: 2025-07-20 10:29:00

Not supported

-   Scheduling parameter assignment: `datetime1=$[yyyy-mm-dd] datetime2=$[hh24:mi:ss-1/24/60]`
    
    **Note**
    
    Define two custom parameters, datetime1 and datetime2, separated by a space.
    
-   Code reference: `pt=${datetime1} ${datetime2}`
    
-   Parameter replacement result:
    
    -   `datetime1=$[yyyy-mm-dd]=2025-07-20`
        
    -   `datetime2=$[hh24:mi:ss-1/24/60]=10:29:00`
        
    -   `pt=2025-07-20 10:29:00`
        

Obtain the time: 2025-07-20 09:30:00

Not supported

-   Scheduling parameter assignment: `datetime1=$[yyyy-mm-dd] datetime2=$[hh24:mi:ss-1/24]`
    
    **Note**
    
    Define two custom parameters, datetime1 and datetime2, separated by a space.
    
-   Code reference: `pt=${datetime1} ${datetime2}`
    
-   Parameter replacement result:
    
    -   `datetime1=$[yyyy-mm-dd]=2025-07-20`
        
    -   `datetime2=$[hh24:mi:ss-1/24]=09:30:00`
        
    -   `pt=2025-07-20 09:30:00`
        

Obtain the previous day's time, accurate to the second, with no space between the date and time:

2025071910:30:00

Not supported

-   Scheduling parameter assignment: `datetime=$[yyyymmddhh24miss-1]`
    
-   Code reference: `pt=${datetime}`
    
-   Parameter replacement result:
    
    -   `datetime=$[yyyymmddhh24miss-1]=2025071910:30:00`
        
    -   `pt=2025071910:30:00`
        

Obtain the previous day's time, accurate to the second, with a space between the date and time:

20250719 10:30:00

Not supported

**Important**

Scheduling parameter assignment expressions do not support spaces. To include a space, you can define two scheduling parameters and then join them with a space in your code reference.

-   Scheduling parameter assignment: `datetime1=$[yyyymmdd-1] datetime2=$[hh24:mi:ss]`
    
    **Note**
    
    Define two custom parameters, datetime1 and datetime2, separated by a space.
    
-   Code reference: `pt=${datetime1} ${datetime2}`
    
-   Parameter replacement result:
    
    -   `datetime1=$[yyyymmdd-1]=20250719`
        
    -   `datetime2=$[hh24:mi:ss]=10:30:00`
        
    -   `pt=20250719 10:30:00`
