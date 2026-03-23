Scheduling parameters are a core DataWorks feature that dynamically replaces time-based values in your code during automated task runs. This eliminates the need to hard-code dates in recurring tasks, allowing your workflows to automatically adapt to different business dates and execution times. This topic describes the supported formats for **parameter values** and how to use them.

**Important**

Before you read this topic, make sure you understand how to configure scheduling parameters. For more information, see [Configure and use scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters).

## Core concepts: Time baselines

**Time parameters** are the primary use case for scheduling parameters. They are used to dynamically replace various time strings when a task runs. All dynamic time parameters in DataWorks are based on the following two core time baselines.

**Concept**

**Definition**

**Default parameter value**

**Custom format**

**Time precision**

Business date

The date of the data being processed, which is **the day before** the task's scheduled run date. In T+1 offline computing scenarios, this represents the date when the business data occurred.

> For example, if you calculate yesterday's sales revenue today, yesterday is the date when the transactions occurred, which is the business date.

`${yyyymmdd}`

`${...}`

Year, month, day

Scheduling time

The **[scheduling time](/help/en/dataworks/user-guide/configure-time-properties/)** set in the scheduling configuration. When a task runs, the system replaces this with the date on which the task instance runs (**today**). It is the theoretical run time of the task and **does not** shift due to resource queuing or delays during the actual run.

`$[yyyymmddhh24miss]`

`$[...]`

Year, month, day, hour, minute, second

Concept equivalence summary:

-   Business date ≈ Yesterday (the date of the data)
    
-   Scheduling time ≈ Today (when the task runs)
    

A typical T+1 task starts in the early morning of **today** (scheduling time) to process data from **yesterday** (business date).

## **Parameter value expressions**

Scheduling parameters support multiple assignment types, including the following:

-   **Custom time parameters**: Such as `${...}` and `$[...]`, which can be transformed based on the two time baselines (business date and scheduling time). For more information, see [Custom time parameters](#1bf43193bfg6s).
    
-   **Built-in system parameters**: Such as `$bizdate`, `$bizmonth`, and `$jobid`, which you can use to retrieve the business date, business month, workflow ID, and other information. They are not limited to time-based values. For more information, see [Built-in system parameters](#46fa247a23hry).
    
-   **Constants**: Such as `'123'` and `'abc'`.
    

**Important**

**Special character restriction**: Parameter expressions do not support spaces or the `=` character.

## Basic usage principles

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9642710771/CAEQUxiBgICe75b34BkiIGJiODQ4NmFjYjMwYzQ5ZTFhMDEzYzc4MjRjMzZhYTNi6321649_20260122203625.745.svg)

You can define the assignment logic for scheduling parameters by setting a **parameter name** and a **parameter value** in the **Scheduling** > **Scheduling Parameters** section. After you define a parameter, you can reference it in your code using the `${parameter_name}` format. For more information about how to configure parameters, see [Configure and use scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters).

-   You can directly use the [built-in system parameters](#21eaf3e35cuxq) `$bizdate` and `$cyctime` for the business date and scheduling time, respectively. They are equivalent to the following:
    
    -   `$bizdate` = `${yyyymmdd}`
        
    -   `$cyctime` = `$[yyyymmddhh24miss]`
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3807221671/p1016935.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3807221671/p1017010.png)
        
        > The figures compare the parameter definitions for $bizdate and ${yyyymmdd}, and for $cyctime and $\[yyyymmddhh24miss\]. The figures also show the preview results when the business date is October 16, 2025.
        
-   If the return values of the **baseline time** parameters do not meet your requirements, you can create custom time parameters using `${...}` and `$[...]`. Custom time parameters are transformations based on the two time baselines.
    

## Custom time parameters

DataWorks lets you use `**${...}**` and `**$[...]**` to retrieve the business time and scheduling time. It also supports transformations to adjust the time as needed. The following examples assume that the node is configured with daily scheduling and a scheduling time of 02:30:45. If the business date is 20251031, the baseline times are as follows:

-   **Business date**: The value of ${yyyymmdd} is 20251031.
    
-   **Scheduling time**: The value of $\[yyyymmddhh24miss\] is 20251101023045.
    

### Core differences between `${...}` and `$[...]`

The `${...}` and `$[...]` formats have fundamental differences in their time baselines and calculation capabilities. Using the wrong format will cause data errors.

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

### **Time formatting**

You can use curly braces `${...}` or square brackets `$[...]` combined with a custom combination of `yyyy`, `yy`, `mm`, and `dd` to generate time parameters. This lets you retrieve dates N years, months, or days before or after the business date.

**Code**

**Description**

`**${...}**` **(based on business date)**

`**$[...]**` **(based on scheduling time)**

**Assignment method**

**Result**

**Assignment method**

**Result**

`yyyy`

4-digit year

`${yyyy}`

`2025`

`$[yyyy]`

`2025`

`mm`

2-digit month

`${mm}`

`10`

`$[mm]`

`11`

`dd`

2-digit day

`${dd}`

`31`

`$[dd]`

`01`

`hh24`

Hour in 24-hour format

Not supported (day precision)

\-

`$[hh24]`

`02`

`hh` / `hh12`

Hour in 12-hour format

\-

`$[hh]`

`02`

`mi`

Minute

\-

`$[mi]`

`30`

`ss`

Second

\-

`$[ss]`

`45`

`yyyymm`

Get year and month

`${yyyymm}`

`202510`

`$[yyyymm]`

`202511`

`yyyy-mm-dd`

Format with hyphens

`${yyyy-mm-dd}`

`2025-10-31`

`$[yyyy-mm-dd]`

`2025-11-01`

`yyyy-mm-dd hh24:mi:ss`

Format with hyphens, including time

Not supported (day precision)

\-

For supported methods, see [String Concatenation: Case 2](#dbbad9e25dwvn).

### **Offset calculations**

Offset calculation is a core feature of dynamic parameters that lets you add or subtract time from the business date or scheduling time. For example, you can retrieve dates N years, months, or days before or after the baseline. You can also retrieve times N hours or minutes before or after the baseline, but this is supported only for scheduling time. The `${...}` and `$[...]` formats support different ranges because they have different time baseline precisions.

1.  Offset calculation in `${...}` mode
    
    -   **Core capability**: Supports integer offsets for years, months, weeks, and days.
        
        **Important**
        
        Hour or minute offsets are not supported. For example, syntax such as ${yyyy-mm-dd-1/24} is invalid.
        
    -   **Syntax:** `**${<time_format><±N>}**`. In this format, N corresponds to the smallest unit of the time format. For example, if the format is yyyymm, N represents an offset in months (mm). If the format is yyyymmdd, N represents an offset in days (dd).
        
        **Date offset period**
        
        **Offset unit**
        
        **Method**
        
        **Example**
        
        **N years before/after**
        
        Year
        
        `${yyyy±N}` or `${yy±N}`
        
        Previous year: `${yyyy-1}`
        
        **N months before/after**
        
        Month
        
        `${yyyymm±N}`
        
        Previous month: `${yyyymm-1}`
        
        **N weeks before/after**
        
        Week
        
        `${yyyymmdd±7*N}`
        
        Previous week: `${yyyymmdd-7*1}`
        
        **N days before/after**
        
        Day
        
        `${yyyymmdd±N}`
        
        Day before yesterday: `${yyyymmdd-1}`
        
2.  Offset calculation in `**$[...]**` **mode**
    
    -   Core capability: Supports fractional offsets for days, hours, and minutes.
        
        **Important**
        
        The `**$[...]**` format does not support year or month offsets using formats such as `$[yyyy-N]` or `$[mm-N]`. To perform offset calculations on years or months, use the `add_months` function.
        
    -   **Syntax:** `**$[<time_format><±N>]**`. To specify an hour offset, use N/24. To specify a minute offset, use N/24/60. In these expressions, N is the number of hours or minutes for the offset.
        
        **Scenario**
        
        **Offset unit**
        
        **Method**
        
        **Example**
        
        **N years before/after**
        
        Year
        
        `$[add_months(yyyymmdd,12*N)]` (N years after)  
        `$[add_months(yyyymmdd,-12*N)]` (N years before)
        
        Previous year: `$[add_months(yyyymmdd,-12)]`
        
        **N months before/after**
        
        Month
        
        `$[add_months(yyyymmdd,N)]` (N months after)  
        `$[add_months(yyyymmdd,-N)]` (N months before)
        
        Previous month: `$[add_months(yyyymmdd,-1)]`
        
        **N weeks before/after**
        
        Week
        
        `$[yyyymmdd±7*N]`
        
        Previous week: `$[yyyymmdd±7*1]`
        
        **N days before/after**
        
        Day
        
        `$[yyyymmdd±N]`
        
        Yesterday: `$[yyyymmdd-1]`
        
        **N hours before/after**
        
        Hour
        
        Available formats:
        
        -   `$[hh24miss±N/24]`, `$[hh24±N/24]`
            
        -   `$[Custom time format±N/24]`.
            
        
        Previous hour in different formats:
        
        -   Month: `$[mm-1/24]`.
            
        -   Year: `$[yyyy-1/24]`.
            
        -   Year and month: `$[yyyymm-1/24]`.
            
        -   Year, month, and day: `$[yyyymmdd-1/24]`.
            
        -   Previous day and previous hour: `$[yyyymmdd-1-1/24]`
            
        
        **N minutes before/after**
        
        Minute
        
        Available formats:
        
        -   `$[hh24miss±N/24/60]`
            
        -   `$[yyyymmddhh24miss±N/24/60]`
            
        -   `$[mi±N/24/60]`
            
        -   `$[custom time format±N/24/60]`
            
        
        15 minutes before the scheduling time in different formats:
        
        -   `$[yyyy-15/24/60]`
            
        -   `$[yyyymm-15/24/60]`
            
        -   `$[yyyymmdd-15/24/60]`
            
        -   `$[hh24-15/24/60]`
            
        -   `$[mi-15/24/60]`
            
        
        **Complex combined offset**
        
        Day + Hour
        
        `$[yyyymmdd±N±M/24]`, where N is the day offset and M is the hour offset.
        
        Example: Get the previous day and previous hour → `$[yyyymmdd-1-1/24]`
        
        **Note**
        
        -   When you perform offset calculations for hours and minutes, a cross-day issue may occur. For more information about how to handle cross-day parameter replacements, see [How do I handle cross-day parameter replacement when I subtract one hour from a scheduling parameter?](/help/en/dataworks/scheduling-parameters#title-z76-qqz-hyq).
            
        -   When you perform a month offset calculation on a month-end date, if the target month does not have that date, the result is automatically calibrated to the last day of the target month. For example, if the current date is 2025-03-31 and you subtract one month, the result is 2025-02-28 because February does not have a 31st day.
            
        

### **Secondary transformations using engine functions**

If the built-in formatting and offset features cannot generate the value you need (for example, retrieving the last day of the previous month), you can use the built-in functions of the target node's compute engine or an assignment node to perform a secondary transformation on the time parameter when you call it.

> For more information, see [Typical scenarios for secondary processing of scheduling parameter return values](/help/en/dataworks/user-guide/process-the-return-values-of-scheduling-parameters).

### **String concatenation**

You can use this method to construct specific date strings that are not supported by the built-in syntax but follow a regular pattern. This method combines the date part generated by a scheduling parameter with a fixed constant string.

**Case 1: Dynamically retrieve the first day of every month.**

-   Scenario: Regardless of which day a task runs, you need a string representing the first day of the current month in `yyyymm01` format.
    
-   Implementation:
    
    1.  Extract the year and month: Use `${yyyymm}` to retrieve the year and month of the current business date. For example, if the business date is `20231027`, the result is `202310`.
        
    2.  Concatenate a constant: Concatenate the extracted year and month with the string `'01'`.
        
    3.  Parameter call: `first_day_of_month=${yyyymm}01`
        
-   Result: When the task runs, `${first_day_of_month}` is replaced with `20231001`.
    

**Case 2: Retrieve a time in** `**yyyy-mm-dd hh24:mi:ss**` **format.**

-   Scenario: You need to obtain a time in the `**yyyy-mm-dd hh24:mi:ss**` format, such as `2023-11-01 02:30:45`.
    
-   Implementation:
    
    1.  Set the `datetime1` parameter to `datetime1=$[yyyy-mm-dd]` and the `datetime2` parameter to `datetime2=$[hh24:mi:ss-1/24/60]`.
        
    2.  Concatenate the parameters: Concatenate `datetime1` and `datetime2` with a space.
        
    3.  Parameter call: pt=`${datetime1}` `${datetime2}`.
        
-   Result: When the task runs, `${datetime1}` `${datetime2}` is replaced with `2023-11-01 02:30:45`.
    

## **Built-in system parameters**

DataWorks supports the following system parameters, which you can use to set the values of scheduling parameters. However, this method offers less flexibility and uses fixed time formats. We recommend that you use custom time parameters because they support flexible transformations.

**Built-in parameter**

**Definition**

**$bizdate**

The business date, in `yyyymmdd` format. It has the same value as the custom parameter `${yyyymmdd}`.

This parameter is widely used. In daily scheduling, the business date defaults to the day before the task's expected run time.

**$cyctime**

The task's scheduling time, in `yyyymmddhh24miss` format. It has the same value as the custom parameter `$[yyyymmddhh24miss]`.

**$gmtdate**

The current date, in `yyyymmdd` format.

This parameter defaults to the current day. When you perform a data backfill operation, the value is the `business date + 1`.

**$bizmonth**

The business month, in `yyyymm` format.

-   If the month of the business date is the same as the current month, then `$bizmonth = business date month - 1`.
    
-   If the month of the business date is different from the current month, then `$bizmonth = business date month`.
    

**$jobid**

The ID of the workflow to which the task belongs.

**$nodeid**

The node ID.

**$taskid**

The instance ID generated by the node.

## Parameter replacement examples in actual scenarios

A scheduling parameter's replacement value is determined when the instance is generated and does not change based on the instance's actual start time. This principle applies to all scenarios.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9642710771/CAEQUxiBgMD6jJL34BkiIDY4M2FjMzZiNTc4NzQ3Zjk5OWUwYzdjN2U0YTAxZmM56321649_20260122200759.809.svg)

#### Scenario 1: Normal scheduling

In a normal automated scheduling scenario, the parameter replacement logic corresponds directly to the two time baselines: the business date and the scheduling time.

-   `${...}` (business date): Its value is determined by the instance's own business date.
    
-   `$[...]` (scheduling time): Its value is determined by the instance's own scheduling time.
    

Example: Assume a daily scheduling task A is scheduled to run at `00:00` every day and has two parameters configured:

-   `yesterday=${yyyymmdd}`
    
-   `today=$[yyyymmddhh24miss]`
    

The following table shows the replacement logic for one of its instances.

**Instance's scheduling time**

**Instance's business date**

**Parameter: yesterday=${yyyymmdd}**

**Parameter: today=$\[yyyymmddhh24miss\]**

`2025-3-15 00:00:00`

`2025-3-14`

`20250314`

`2025031500000000`

#### Scenario 2: Data backfill

When you manually run a data backfill task, the parameter replacement logic changes based on the manually selected business date, especially for the scheduling time.

-   `${...}` (business date): Its baseline is the manually selected business date.
    
-   `$[...]` (scheduling time): Its baseline is the manually selected business date + 1 day.
    

Example: Assume you manually run a data backfill for the same task A and select the business date `2025-03-15`.

**Manually selected business date**

**Parameter: yesterday=${yyyymmdd}**

**Parameter: today=$\[yyyymmddhh24miss\]**

`2025-03-15`

`20250315`

`20250316000000` (The baseline is `2025-03-15 + 1 day`)

## FAQ

For answers to common questions about using scheduling parameters, see [Scheduling parameters FAQ](/help/en/dataworks/scheduling-parameters).

## **References**

-   [Configure and use scheduling parameters](/help/en/dataworks/user-guide/configure-and-use-scheduling-parameters)
    
-   [Typical scenarios for secondary processing of scheduling parameter return values](/help/en/dataworks/user-guide/process-the-return-values-of-scheduling-parameters)
    
-   [Differences between custom parameter values](/help/en/dataworks/user-guide/compare-custom-parameters)
    
-   [Configuration examples of scheduling parameters for different types of nodes](/help/en/dataworks/user-guide/configure-scheduling-parameters-for-different-types-of-nodes)
