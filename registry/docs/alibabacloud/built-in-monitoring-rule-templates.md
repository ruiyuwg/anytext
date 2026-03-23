Data Quality in DataWorks offers a variety of built-in monitoring templates. This topic describes the verification logic of Data Quality and the available built-in monitoring rule templates.

## Description of built-in rule templates

Use built-in rule templates to swiftly establish monitoring rules for single or multiple tables. For more details, see [the referenced document](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#task-2458316) or [the referenced document](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#task-2157268).

**Template Classification**

**Template Name**

**Description**

Number of Rows

Fixed Value

Row count.

Table Not Empty

Verifies that the table contains more than zero rows.

1-Day Difference

The daily change in the table's row count.

**Note**

The baseline is the previous day's partition row count.

Change in table row count since the previous epoch

Compares the current day's row count with the last cycle's partition to detect fluctuations, which are then compared against set thresholds.

1, 7, 30 Days and 1st of Month Volatility

Compares the current day's row count with counts from the previous day, seven days ago, 30 days ago, and the first day of the current month to detect fluctuations, which are then compared against set thresholds. Alerts are issued for any threshold breaches.

1, 7, 30 Day Volatility

Compares the current day's row count with counts from the previous day, seven days ago, and 30 days ago to detect fluctuations.

**Note**

Fluctuations are compared against set thresholds, with alerts issued for any threshold breaches.

1 Day Volatility

Compares the current day's row count with the previous day's to detect fluctuations, which are then compared against set thresholds. Alerts are issued for any threshold breaches.

30-Day Volatility

Compares the current day's row count with that from 30 days prior to detect fluctuations, which are then compared against set thresholds. Alerts are issued for any threshold breaches.

7-Day Volatility

Compares the current day's row count with that from seven days prior to detect fluctuations, which are then compared against set thresholds. Alerts are issued for any threshold breaches.

Table Rows

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, the system automatically determines fluctuation thresholds using intelligent algorithms, triggering alerts or blocks upon detecting anomalies.

30-Day Average Volatility

Monitors fluctuations in the number of table rows against the 30-day average, which is calculated by dividing the total row count of the last 30 days by 30.

7-Day Average Volatility

Monitors fluctuations in the number of table rows against the 7-day average, which is calculated by dividing the total row count of the last seven days by seven.

Upper Cycle Volatility

Compares the current day's row count with the last cycle's partition to detect fluctuations.

Custom range of table rows

Allows customization of the comparison method and threshold range for the number of table rows according to business requirements.

Percent on Condition

Percentage of matched conditions and custom range

Allows customization of the comparison method and threshold range for the match rate of filter conditions according to business requirements.

Table Size

Fixed value for table size.

The size of the table in bytes.

Table Size: Periodic Difference

The change in the table's storage size over the last 24 hours (in bytes).

Table Size: Periodic Difference

The change in table size since the previous epoch (bytes).

Table Size: 1-Day Volatility

This template monitors table size fluctuations by comparing the current day's table size with the previous day's. Data Quality calculates the fluctuation and compares it to predefined thresholds. Alerts are generated if the fluctuation exceeds these thresholds.

For instance, you can set a warning threshold at 5% and an error threshold at 10%. A warning alert is issued if the fluctuation exceeds 5% but is 10% or less. An error alert is issued if the fluctuation exceeds 10%.

Table Size: 30-Day Volatility

This monitoring template tracks the changes in table size over a 30-day period. Data Quality measures the current day's table size against that of 30 days prior to determine the fluctuation. It then compares this fluctuation to predefined thresholds, and if exceeded, Data Quality triggers an alert.

Table Size: 7-Day Volatility

This monitoring template tracks changes in table size by comparing the current day's table size with that from seven days prior. Data Quality calculates the fluctuation and compares it to predefined thresholds. Alerts are issued if the fluctuation exceeds these thresholds.

Table Size

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. Intelligent algorithms allow the system to automatically determine the thresholds. In the event of data anomalies, the system promptly triggers alerts or implements blocks.

Null Value Count

Number of null values: a fixed value

Data Quality assesses the number of null values in a field against a predetermined fixed value.

**Note**

A value is considered null if it is identified by the SQL `IS NULL` operator.

No Null Values in Single Field

Verifies that a field contains no null values.

Null Value Count / Table Count

Number of nulls / total number of rows: fixed value

Data Quality measures the ratio of the number of null values in a field to the total number of rows, using a fixed decimal value.

**Note**

The fixed value is expressed as a decimal.

Format Verification

Regular Expression Verification

Verifies that a field conforms to the specified regular expression.

Date Format Verification

Verifies that a field conforms to the specified date format.

Email Format Verification

Verifies that a field conforms to the email format.

ID Card Format Verification

Verifies that the field conforms to the ID card format.

Mobile Phone Number Format Verification

Verifies that a field conforms to the mobile phone number format.

Currency Format Verification

Verifies that a field conforms to the currency format.

Numeric Format Verification

Verifies that a field conforms to the numeric format.

Telephone Number Format Verification

Verifies that the field conforms to the telephone number format.

Duplicate Value Count

Repeated value, fixed value

Data Quality assesses the number of a field's duplicate values against a predetermined fixed value.

No duplicate values in a single field

Verifies that a field contains no duplicate values.

Distinct Count Across Multiple Fields

No Duplicate Values Across Fields

Verifies that there are zero instances of duplicate values across multiple fields.

Duplicate values to total rows ratio

Ratio of repeated values to total rows, fixed value

Data Quality assesses the ratio of a field's duplicate values to the total number of rows, comparing it against a fixed value.

Distinct Count

Unique value, fixed value

Data Quality assesses the number of unique values in a field post-deduplication against a predetermined value.

Unique value count: daily, 7-day, and 30-day volatility

Data Quality assesses the volatility of a field's unique values by comparing the count post-deduplication on the current day with those from the previous day, seven days prior, and thirty days prior. It then evaluates these fluctuations against predefined thresholds.

Unique value

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. Intelligent algorithms enable the system to establish thresholds autonomously. Upon detecting data anomalies, the system promptly initiates alerts or blocks.

Unique values to total rows ratio

Unique values to total rows ratio, fixed value

Data Quality assesses the proportion of unique values within a field against the overall row count, using a predetermined value.

Min Value

Minimum: 1, 7, 30-day volatility

Data Quality assesses the minimum value of a field for the current day against the average values from the previous day, seven days, and thirty days prior to detect fluctuations. It then compares these fluctuations against predefined thresholds. Should fluctuations exceed these thresholds, Data Quality triggers an alert.

Minimum value for a dynamic threshold.

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is not required. Intelligent algorithms enable the system to establish thresholds autonomously. In the event of data anomalies, the system promptly initiates alerts or blocks.

Minimum value: 1-day volatility

Data Quality assesses the minimum value of a field by comparing the current day's figure with the previous day's, to calculate the fluctuation. It then evaluates this fluctuation against predefined thresholds.

Minimum value of the volatility from the previous epoch

Data Quality evaluates the minimum value of a field for the current day against the previous cycle's to determine the fluctuation. It then compares this fluctuation to predefined thresholds, and if the fluctuation exceeds any threshold, an alert is triggered.

User-Defined Minimum Value Condition

You can define the comparison method and threshold range for a field's minimum value to meet specific business requirements.

Maximum

Maximum: 1, 7, 30-day volatility

Data Quality assesses the maximum value of a field for the current day against the average values from the previous day, seven days, and 30 days prior to determine volatility. It then compares this volatility against predefined thresholds. Should the volatility exceed any threshold, Data Quality triggers an alert.

Maximum value and dynamic threshold

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. Intelligent algorithms enable the system to autonomously determine thresholds. Upon detecting data anomalies, the system promptly triggers alerts or implements blocks.

Maximum Daily Volatility

Data Quality assesses the maximum value fluctuation of a field by comparing its current day's value with the previous day's. It then evaluates this fluctuation against predefined thresholds.

Maximum value and the volatility of the previous epoch

Data Quality evaluates the maximum value of a field for the current day against the last cycle's maximum to determine the fluctuation. It then assesses this fluctuation against predefined thresholds. Should the fluctuation exceed any threshold, Data Quality triggers an alert.

Maximum Value with User-Defined Condition

You can define the comparison method and set the threshold range for a field's maximum value according to your business needs.

Average

Average 1, 7, 30-day volatility

Data Quality calculates the average value of a field for the current day and compares it with the averages from the previous day, seven days prior, and thirty days prior to assess fluctuations. It then compares these fluctuations against predefined thresholds. Should a fluctuation exceed any threshold, Data Quality will issue an alert.

**Note**

Data Quality calculates the average value of a field for the current day and compares it with the values from the previous day, seven days prior, and thirty days prior.

Average-Value Dynamic Threshold

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. Intelligent algorithms are employed by the system to determine these thresholds automatically. In the event of data anomalies, the system promptly triggers alerts or takes preventive actions.

Average Daily Volatility

Data Quality calculates the average daily fluctuation of a field by comparing its current day's average value with the previous day's. It then evaluates this fluctuation against predefined thresholds.

Average Value with User-Defined Conditions

You can define the comparison method and set the threshold range for a field's average value to meet your business needs.

Sum

Summary Value: 1, 7, 30-Day Volatility

Data Quality assesses the sum of a field's value for the current day and compares it with the average values from the previous day, seven days, and 30 days prior to detect fluctuations. These fluctuations are then compared to predefined thresholds. If a fluctuation exceeds any of these thresholds, Data Quality triggers an alert.

Aggregated Value and Dynamic Threshold

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. The system employs intelligent algorithms to establish thresholds and, upon detecting data anomalies, initiates alerts or blocks promptly.

Summary Value: 1-Day Volatility

Data Quality calculates the daily fluctuation by comparing the sum of a field's values for the current day against the previous day. It then evaluates this fluctuation against predefined thresholds.

Summary: Period Volatility of Value

Data Quality calculates the sum of a field's values for the current day and compares it with the sum from the previous cycle to determine fluctuations. It then compares these fluctuations against predefined thresholds. If the fluctuation exceeds any threshold, Data Quality triggers an alert.

Sum Value with User-Defined Conditions

You can define the comparison method and set the threshold range for the aggregated field value according to your business needs.

Enumeration

The enumeration value does not correspond with the expected number of unique values.

Data Quality checks whether the count of unmatched enumeration items aligns with a predetermined value.

The enumeration value does not correspond to the number of rows; it is a fixed value.

Data Quality checks the occurrence of rows with unmatched enumeration items against a predetermined fixed value.

Enumeration value mismatch when the row count is 0

Expected normal status: The fixed value and comparison method should be set to =0. An alert is triggered if the count of rows with unmatched enumeration values exceeds 0.

Enumeration value: custom, fixed value.

You can customize the enumeration items' count, row number, comparison method, thresholds, and additional statistical metrics.

Discrete Values

Discrete value (status value), fixed value

Data Quality assesses the count of values within each group of a field against a predetermined fixed value.

Discrete Value (Number of Groups): Fixed Value

The number of groups returned by the \`group by\` operation is compared with the static field.

Discrete Value (Number of Groups)

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. Intelligent algorithms are employed by the system to determine thresholds. In the event of data anomalies, the system promptly triggers alerts or implements blocks.

Discrete Value (Status Value)

When the Comparison Method parameter is set to Intelligent Dynamic Threshold, manual configuration of fluctuation thresholds or expected values is unnecessary. Intelligent algorithms determine the thresholds, and the system promptly triggers alerts or blocks upon detecting data anomalies.

Discrete value (number of groups): 1-day volatility

The fluctuation rate is calculated by comparing the number of groups after the \`group by\` operation with the number of groups from the previous day's sample.

Discrete values (number of groups and status values): 1-day, 7-day, and 30-day volatility

The volatility rate is calculated by comparing the number of groups and the count for each group from a \`group by\` operation with the same metrics from 1, 7, and 30 days ago.

**Note**

E-MapReduce (EMR) tables do not support table-size-based monitoring rules.

## Description of calculation formula

The fluctuation rate is calculated using the following formula: `(Current Value - Baseline Value) / Baseline Value`. The **Current Value** is the actual metric value for the current check. The **Baseline Value** is determined by the selected template. For example:

-   For an **N-day fluctuation rate** template, the baseline value is the metric value from N days ago.
    
-   For an **N-day average fluctuation rate** template, the baseline value is the average of the metric values over the past N days.
    
-   For a **previous-cycle fluctuation rate** template, the baseline value is the metric value from the previous scheduling cycle.
    

## Verification logic

Data Quality supports three verification methods: **comparison with a fixed value**, **fluctuation comparison**, and **dynamic threshold**.

**Verification method**

**Verification logic**

**Comparison with a fixed value**

Calculates the verification expression and returns a Boolean value. The following comparison operators are supported: `>`, `<`, `>=`, `<=`, and `!=`. If the result is `true`, the status is Normal. Otherwise, an error alert is triggered.

**Fluctuation comparison**

This method monitors the magnitude of change in a metric. It supports three comparison types:

-   **Absolute value**: Monitors the magnitude of change, regardless of an increase or decrease. For example, an alert is triggered if the row count fluctuates by more than 10%.
    
-   **Increase**: Monitors only abnormal increases in the metric. For example, when monitoring costs, you are only concerned if costs rise significantly.
    
-   **Decrease**: Monitors only abnormal decreases in the metric. For example, when monitoring order volume, the main concern is a sudden drop.
    

The system determines the alert level based on the warning and error thresholds you set.

**Dynamic threshold**

You do not need to set thresholds. The system automatically checks the metrics in real time based on algorithm models. If the value of a metric falls outside a reasonable range, an alert is reported.

## **Appendix 1: Description of the upper period**

The last cycle's task can serve as the baseline, excluding any with the same **data timestamp**. Tasks are ordered by data timestamp in descending order, with the earliest executed task as the baseline. For further information, refer to the table below:

**Scheduling type**

**Data timestamp**

**Baseline comparison method**

**FAQ**

Daily scheduling

Historical data timestamps:

-   2024-06-01
    
-   2024-06-02
    
-   2024-06-03
    
-   2024-06-04
    
-   2024-06-05
    

When the instance whose data timestamp is June 6, 2024 starts to be checked based on monitoring rules, the instance whose data timestamp is June 5, 2024 is used as the baseline.

**Data backfill scenario**:

**Background**:

The scheduling node is run as expected from June 1, 2024 to June 5, 2024. After the instance whose data timestamp is June 5, 2024 finishes running, a data backfill operation is performed to backfill the data on July 1, 2024 to the scheduling node. In this case, what is the baseline that can be used for comparison when the instance whose data timestamp is June 6, 2024 starts to be checked based on monitoring rules?

**Conclusion**:

The instance whose data timestamp is June 6, 2024 uses the instance whose data timestamp is July 1, 2024 as the baseline. The instance whose data timestamp is July 1, 2024 is used as the baseline before the instance whose data timestamp is July 2, 2024 finishes running.

Hourly scheduling

Historical data timestamps:

-   2024-06-01
    
-   2024-06-02
    
-   2024-06-03
    

A task is scheduled by hour and run three times a day.

When an instance whose data timestamp is June 4, 2024 starts to be checked based on monitoring rules, the last instance whose data timestamp is June 3, 2024 is used as the baseline.

**Hourly scheduling scenario**:

**Background**:

Three instances are generated for each day from June 1, 2024 to June 3, 2024 and run as expected, and the first instance whose data timestamp is June 4, 2024 is also run as expected. In this case, what is the baseline that can be used for comparison when the second instance whose data timestamp is June 4, 2024 starts to be checked based on monitoring rules?

**Conclusion**:

The first instance whose data timestamp is June 4, 2024 is excluded. The last instance whose data timestamp is June 3, 2024 is used as the baseline.

## **Appendix 2: Description of the sample value collected N days ago for hourly tasks**

For hourly tasks, the sample value from N days ago is determined by sorting tasks by **running time** (not scheduled time) on the Nth day. The first instance's result data is used as the sample for comparison. For further information, refer to the table below:

**Scheduling type**

**Data timestamp**

**Fluctuation comparison method**

**FAQ**

Hourly scheduling

Historical data timestamps:

-   2024-06-01
    
-   2024-06-02
    
-   ……
    
-   2024-06-08
    

A task is scheduled by hour and run three times a day.

If you want to obtain a seven-day fluctuation, a sample value is extracted from the output data of the last instance whose running time is June 1, 2024 when an instance whose running time is June 8, 2024 starts to be checked based on monitoring rules.

**Hourly scheduling scenario**:

**Background**:

Three instances are generated for each day from June 1, 2024 to June 8, 2024. In this case, what is the sample value that can be used for comparison to obtain a seven-day fluctuation when the second instance whose running time is June 8, 2024 starts to be checked based on monitoring rules?

**Conclusion**:

When the second instance whose running time is June 8, 2024 starts to be checked based on monitoring rules, the output data of the last instance whose running time is June 1, 2024 is used as the sample value for comparison to obtain a seven-day fluctuation.
