Parameter

Type

Description

Example

object

The data queried by BatchExport.

Namespace

string

The namespace of the cloud service.

acs\_ecs\_dashboard

Metric

string

The metric that is used to monitor the cloud service.

cpu\_idle

Period

integer

The time interval based on which the metric value is measured.

Unit: seconds.

60

Timestamp

long

The timestamp of the monitoring data. Unit: milliseconds.

1641454680000

Dimensions

array

The dimension information that is used to identify the monitored object (instance).

Dimension

[Dimension](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-struct-dimension)

The dimension information that is used to identify the monitored object (instance).

Associated

object

The additional information about the monitored object (instance).

string

The additional information about the monitored object (instance).

{"group":"test\*\*\*\*", "name":"Alice"}

Measurements

object

The measured value of the metric. The parameter contains multiple values by default.

any

The measured value of the metric. The parameter contains multiple values by default.

{"Average":60,"Maximum":85}

LogTime

long

The recorded time of the monitoring data. Unit: milliseconds. For non-raw data (aggregated data), the value of LogTime is NULL.

1683686550073
