Parameter

Type

Description

Example

object

The custom health check configurations of custom runtimes and Custom Container runtimes.

httpGetUrl

string

The custom health check URL of the container. The URL length cannot exceed 2,048 characters.

/ready

initialDelaySeconds

integer

The duration after the container is started before health checks are initiated. Valid values: 0 to 120. Unit: seconds. Default value: 0.

1

periodSeconds

integer

The interval between two consecutive health checks. Valid values: 1 to 120. Unit: seconds. Default value: 3.

1

timeoutSeconds

integer

The timeout period of a health check. Valid values: 1 to 3. Unit: seconds. Default value: 1.

2

failureThreshold

integer

The threshold for health check failures. When this value is reached, the system considers the check failed. Valid values: 1 to 120. Unit: seconds. Default value: 3.

1

successThreshold

integer

The threshold for health check successes. When this value is reached, the system considers the check succeeded. Valid values: 1 to 120. Unit: seconds. Default value: 1.

2
