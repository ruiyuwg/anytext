Parameter

Type

Description

Example

object

The log configurations of the function.

logstore

string

The Logstore name.

test-prj

project

string

The project name.

test-logstore

enableRequestMetrics

boolean

Specifies whether to enable request-level metrics. If you enable this feature, you can view the amount of time and memory consumed for a specific invocation of each function in the service. Valid values:

-   **false**: disables request-level metrics.
-   **true** (default): enables request-level metrics.

true

enableInstanceMetrics

boolean

Specifies whether to enable instance-level metrics. If you enable this feature, you can view instance-level core metrics, such as CPU utilization, memory usage, instance network conditions, and requests within an instance. Valid values:

-   **false** (default): disables instance-level metrics.
-   **true**: enables instance-level metrics.

true

logBeginRule

string

The log segmentation rule. Logs are segmented based on rules. Log segments are written to Simple Log Service.

-   **None** (default): disables log segmentation.
-   **DefaultRegex**: sets the log segmentation rule to the default regex rule. If you set this parameter to DefaultRegex, logs are segmented based on date-containing lines. For example, if a line is 2021-10-10 in a log, the log is segmented based on the line, and the line is used as the first line of a continuous segment of log data until another date-containing line is detected. The segment is written to Simple Log Service as a whole.

DefaultRegex
