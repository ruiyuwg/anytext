When you create a Scheduled SQL task, you can specify a SQL time window. When the Scheduled SQL task runs, Simple Log Service analyzes logs that are generated only within the SQL time window. This topic describes the time expression syntax that is used to specify an SQL time window.

## Operators

The following table describes the operators that are supported by the time expression syntax.

**Operator**

**Description**

+

The plus operator.

\-

The minus operator.

@

The rounding operator, which is used to round down a time value to the nearest integer. For example, 01:40 is rounded down to the nearest hour 01:00.

The format of a time expression can be±{num}{unit} or @{unit}. The {num} variable is a positive integer and the {unit} variable is a time unit.

-   If the operators are plus (+) and minus (-), the format is ±{num}{unit}. The {num} variable can be omitted. If it is omitted, the default value is 1. For example, if the time expression is \-h, it indicates minus 1 hour.
    
-   If the operator is the at sign (@), the format is @{unit}.
    

## Time units

The time units in the following table are supported by the time expression syntax:

**Time unit**

**Description**

h

Hour

m

Minute

s

Second

## Examples

The following table describes some time expression examples.

**Time expression**

**Description**

\-15m@m

Subtracts 15 minutes from a time value and then rounds down the time value to the nearest integer minute.

For example, when you create a Scheduled SQL task, you can select **Daily00:00** from the drop-down list of the **Specify Scheduling Interval** field, set the **SQL Timeout Maximum Time** parameter to **30**, and then set the **SQL Time Window** parameter to **\[-15m@m,-5m@m)**. This indicates that the task is run at 00:00:30 to analyze the data that is generated within the time range \[23:45~23:55).

\-h@h

Subtracts 1 hour from a time value and then rounds down the time value to the nearest integer hour.

For example, when you create a Scheduled SQL task, you can select **Daily00:00** from the drop-down list of the **Specify Scheduling Interval** field, set the **SQL Timeout Maximum Time** to **30**, and then set the **SQL Time Window** parameter to **\[-h@h,-5m@m)**. This indicates that the task is run at 00:00:30 to analyze the data that is generated within the time range \[23:00~23:55).

\-50m@h

Subtracts 50 minutes from a time value and then rounds down the time value to the nearest integer hour.

For example, when you create a Scheduled SQL task, you can select **Daily00:00** from the drop-down list of the **Specify Scheduling Interval** field, set the **SQL Timeout Maximum Time** parameter to **30**, and then set the **SQL Time Window** parameter to **\[-50m@h,-5m@m)**. This indicates that the task is run at 00:00:30 to analyze the data that is generated within the time range \[23:00~23:55).

\-12h+5m

Subtracts 12 hours from a time value and then adds 5 minutes to the time value. In total, 11 hours and 55 minutes are subtracted from the time value.

For example, when you create a Scheduled SQL task, you can select **Daily00:00** from the drop-down list of the **Specify Scheduling Interval** field, set the **SQL Timeout Maximum Time** to **30**, and then set the **SQL Time Window** to **\[-12h+5m,-5m)**. This indicates that the task is run at 00:00:30 to analyze the data that is generated within the time range \[12:05~23:55).
