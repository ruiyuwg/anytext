When you create an alert rule, you can use an alert rule expression to configure complex alert conditions. This topic describes the basic elements, historical functions, and scenarios of alert rule expressions.

## Elements

Cloud Monitor calculates the aggregate data of metrics or a metric of an instance based on the alert rule expression that you configure. If the monitoring data meets the expression, an alert is triggered. An alert rule expression consists of metric names, metric members, operators, functions, and monitoring data. Example: `@cpu_total[60].$instanceId != 'i-2ze3jvsy7620giru****' && @cpu_total[60].$Average > 60`.

-   **Metric names**
    
    For more information about the metrics of different cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).
    
    The alert rule expression for a metric is in the `@Metric name[Aggregation period]` format. For example, to monitor an Elastic Compute Service (ECS) instance based on the CPUUtilization metric, you can set the alert rule expression to `@CPUUtilization[60]`.
    
    **Note**
    
    -   The aggregation period of metrics for ECS is displayed in the **Min Periods** column of the table on the [Metric List page for ECS](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ecs_dashboard/ecs). To view the aggregation period of metrics for another cloud service, select the cloud service from the drop-down list.
        
    -   A metric name must conform to the regular expression `[a-zA-Z][_a-zA-Z0-9]*`. If a metric name does not conform to the regular expression, use the `@(Metric name)[Aggregation period]` format, for example, `@('vm.DiskIORead')[60]`.
        
    
    In an alert rule expression, metric names must be used in conjunction with metric members to specify the range of monitoring data.
    
-   **Metric members**
    
    Metric members are used to specify the range of monitoring data for the related metrics. A metric member must start with a dollar sign ($). You must specify the alert rule expression in the `@Metric name[Aggregation period].$Metric member` format. For example, the statistical methods for the CPUUtilization metric of ECS are Average, Minimum, and Maximum. The alert rule expression for the average value of the metric is `@CPUUtilization[60].$Average`. The dimensions for the CPUUtilization metric of ECS are `userId` and `instanceId`. The alert rule expression for the CPUUtilization metric of a specified instance is `@CPUUtilization[60].$instanceId`.
    
    **Note**
    
    The members of metrics for ECS are displayed in the **Dimensions** and **Statistics** columns of the table on the [Metric List page for ECS](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_ecs_dashboard/ecs). To view the members of metrics for another cloud service, select the cloud service from the drop-down list.
    
-   **Operators**
    
    Operators are used to calculate whether the monitoring data meets the alert condition.
    
    -   Basic operators
        
        **Category**
        
        **Operator and description**
        
        Mathematical operators
        
        -   `+`: addition
            
        -   `-`: subtraction
            
        -   `*`: multiplication
            
        -   `/`: division
            
        -   `%`: modulo
            
        -   `**`: exponentiation
            
        
        Comparison operators
        
        -   `==`: equal to
            
        -   `! =`: not equal to
            
        -   `>`: greater than
            
        -   `>=`: greater than or equal to
            
        -   `<`: less than
            
        -   `<=`: less than or equal to
            
        
        Logical operators
        
        -   `&&` or `and`: AND
            
        -   `||` or `or`: OR
            
        -   `!` or `not`: NOT
            
        
        Example: `$Average > 50 && $instanceId != 'i-not-exist'`.
        
        **Note**
        
        If the values on the two sides of a mathematical operator or a comparison operator are not of the same type, a string is converted to a number, for example, `'123' + 321 == 123 + '321' == 444`.
        
    -   String operators
        
        **String operator**
        
        **Description**
        
        **Example**
        
        matches
        
        Matches a regular expression.
        
        The logical operator NOT and the `matches` operator are used to determine whether a string matches a regular expression.
        
        `!("hello" matches "^fo.+")`
        
        **Note**
        
        The `!` operator has higher priority than the matches operator. Therefore, you must enclose the regular expression in parentheses ().
        
        contains
        
        Contains a string.
        
        `'abcdef' contains 'cde'`
        
        startsWith
        
        Checks whether a string starts with a specified prefix.
        
        `'abcdef' startsWith 'abc'`
        
        endsWith
        
        Checks whether a string ends with a specified suffix.
        
        `'abcdef' endsWith 'def'`
        
    -   Membership operators
        
        **Membership operator**
        
        **Description**
        
        **Example**
        
        in
        
        Contains
        
        -   `userld in [120886317861****, 425876]`
            
            The value of `userld` is `120886317861****` or `20654616023382****`.
            
        -   `"foo" in {'foo':1, 'bar':2}`
            
            The value of foo is `foo` or `bar`.
            
        
        not in
        
        Does not contain
        
        -   `userld not in [120886317861****, 425876]`
            
            The value of `userld` is not `120886317861****` or `20654616023382****`.
            
        -   `"foo" not in {'foo1':1, 'bar':2}`
            
            The value of foo is not `foo1` or `bar`.
            
        
    -   Ternary operators
        
        `?:`: The operator has the same effect as the ternary operators in C and Java languages, for example, @CPUUtilization\[60\].$Average > 30? "ok": "lower".
        
    
-   **Data operations**
    
    -   Data types
        
        **Data type**
        
        **Description**
        
        **Example**
        
        string
        
        A string enclosed in single quotation marks or double quotation marks.
        
        `"hello", 'hello'`
        
        number
        
        A numeric value. The value can be an integer or a floating-point number.
        
        **Note**
        
        If the value is an integer, you can use underscores (\_) as separators to improve readability and facilitate management.
        
        -   `103, 2.5, .5, 2e+6`
            
        -   `1_000_000`
            
        
        array
        
        An array.
        
        `[1, 2, 3]`
        
        map or dict
        
        A dictionary.
        
        `{"foo":"bar"}`
        
        bool
        
        A Boolean value.
        
        `true` or `false`
        
        nil
        
        An empty value.
        
        `nil`
        
    -   Built-in functions
        
        **Built-in function**
        
        **Description**
        
        `len(array|map|string)`
        
        Returns the length of an array, map, or string.
        
        `now()`
        
        Returns a UTC timestamp in milliseconds.
        
        `abs(number)`
        
        Returns the absolute value (a floating-point number).
        
        `rand()`
        
        Returns a floating-point number between `[0, 1)`.
        
        `rand(N)`
        
        Returns a floating-point number between `[0, N)`.
        
        `toLower(string)`
        
        Converts a string to lowercase.
        
        `toUpper(string)`
        
        Converts a string to uppercase.
        
    -   Comparison
        
        **Note**
        
        -   Example of a metric: `@cpu_total[60]`.
            
        -   An aggregation method is a string. Example: `'$Average'`.
            
        -   The comparison result is a Boolean value. If the metric value of the current period is greater than the metric value of the previous period, the comparison result is `true`. If the metric value of the current period is less than the metric value of the previous period, the comparison result is `false`.
            
        
        **Function**
        
        **Description**
        
        `CompareLastPeriod(metric, aggregation method, comparison result)`
        
        Obtains the data compared with the previous period, for example, `CompareLastPeriod(@cpu_total[60], '$Average', true)`.
        
        If the average value of cpu\_total in the current period is 20% and the average value of cpu\_total in the previous period is 15%. the returned value of this function depends on the comparison result.
        
        -   If the comparison result is `true`, this function returns (20 - 15) × 100/20.
            
        -   If the comparison result is `false`, this function returns (15 - 20) × 100/20.
            
        
        `CompareLastHour(metric, aggregation method, comparison result)`
        
        Obtains the data compared with the previous hour.
        
        `CompareLastHour(@cpu_total[60], '$Average', true) > 10`: If the average value of cpu\_total increases by 10% compared with yesterday, an alert is triggered.
        
        `CompareLastWeek(metric, aggregation method, comparison result)`
        
        Obtains the data compared with yesterday.
        
        `CompareYesterday(@cpu_total[60], '$Average', true) > 10`: If the average value of cpu\_total increases by 10% compared with the previous week, an alert is triggered.
        
        `CompareLastWeek(metric, aggregation method, comparison result)`
        
        Obtains the data compared with the previous week.
        
        `CompareLastWeek(@cpu_total[60], '$Average', true) > 10`: If the average value of cpu\_total increases by 10% compared with the previous week, an alert is triggered.
        
        `ComparePast(metric, aggregation method, comparison result, seconds)`
        
        Obtains the data compared with the specified number of `seconds` prior to the current time.
        
        The preceding four functions are simplified forms of this function.
        
        -   `CompareLastHour(@cpu_total[60], '$Average', true)` is equivalent to `ComparePast(@cpu_total[60], '$Average', true, 3600)`.
            
        -   `CompareYesterday(@cpu_total[60], '$Average', true)` is equivalent to `ComparePast(@cpu_total[60], '$Average', true, 24*60*60)`.
            
        -   `CompareLastWeek(@cpu_total[60], '$Average', true)` is equivalent to `ComparePast(@cpu_total[60], '$Average', true, 7*24*60*60)`.
            
        
    -   Historical functions
        
        **Function**
        
        **Description**
        
        `LastPeriod(metric)`
        
        Obtains the data of the previous period. Example: `LastPeriod(@cpu_total[60]).$Average > 75`. If the average value of `cpu_total` in the previous period exceeds 75%, an alert is triggered.
        
        `LastHour(metric)`
        
        Obtains the data of the previous hour. Example: `LastHour(@cpu_total[60]).$Average > 75`. If the average value of `cpu_total` in the previous hour exceeds 75%, an alert is triggered.
        
        `Yesterday(metric)`
        
        Obtains the data of the previous day. Example: `Yesterday(@cpu_total[60]).$Average > 75`. If the average value of `cpu_total` on the previous day exceeds 75%, an alert is triggered.
        
        `LastWeek(metric)`
        
        Obtains the data of the previous week. Example: `LastWeek(@cpu_total[60]).$Average > 75`. If the average value of `cpu_total` in the previous week exceeds 75%, an alert is triggered.
        
        `Past(metric, seconds)`
        
        Obtains the data in the specified number of seconds prior to the current time. The number is an integral multiple of the metric aggregation period. The preceding functions are simplified forms of this function. For example, `Past(@cpu_total[60], 3600) > 75` is equivalent to `LastHour(@cpu_total[60]).$Average > 75`.
        

## Scenarios

The following table describes the use scenarios of alert rule expressions.

**Scenario**

**Alert rule expression**

**Description**

Configure a high-priority exclusive threshold for a specific instance in an application group and a different threshold for other instances

`@cpu_total[60].$Average > (@cpu_total[60].$instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`

For the instance `i-io8kfvcpp7x5****`, if the average value of cpu\_total exceeds 80, an alert is triggered. For other instances, if the average value of cpu\_total exceeds 50, an alert is triggered.

Configure a blacklist for a specific instance

`@cpu_total[60].$instanceId != 'i-io8kfvcpp7x5****' && @cpu_total[60].$Average > 50`

For the instance `i-io8kfvcpp7x5****`, `false` is returned and no alert is triggered. For other instances, if the average value of cpu\_total exceeds 50, an alert is triggered.

Configure an alert condition based on multiple metrics

`@cpu_total[60].$Average > 50 && @memory_usage[60].$Average > 80`

If the average value of cpu\_total for an instance exceeds 50% and the average value of memory\_usage for the instance exceeds 80%, an alert is triggered.

Monitor the metric reporting latency

`now() - @heartbeat[60].$reportTime > 60_000`

If the heartbeat timeout exceeds one minute, an alert is triggered.

**Note**

The reportTime parameter indicates the time when a metric is reported. It is a built-in parameter of each metric. The `now()` function is a built-in function that returns a UTC timestamp in milliseconds.
