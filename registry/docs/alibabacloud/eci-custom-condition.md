Pod status conditions can provide information about the status and health of pods. This topic describes the conditions of elastic container instances (pods). This topic also provides descriptions of the conditions.

## **ContainerInstanceCreated**

The ContainerInstanceCreated condition is used to describe the creation status of a pod. The following table lists the reasons, messages, and descriptions related to the condition.

**reason**

**message**

**Description**

Creating

Creating

The pod is being created.

StockExhaust

The stock of the specified zones will be used up. %s

The resources of elastic container instances in the current zone are about to be exhausted. We recommend that you select another zone.

NoStock

Create ECI failed because the specified instance is out of stock. %s

The resource inventory of elastic container instances in the current zone is insufficient. You can configure multiple zones and multiple instance specifications to improve the success rate when you create a pod.

StockClose

Create ECI failed because current zone closed or limited without living instance. %s

The pod failed to be created because the current zone is unavailable. Select another zone.

FailedScheduling

Unknown error occurred.

The pod failed to be scheduled due to an unknown error. Submit a ticket to resolve the issue.

FailedScheduling

Schedule eci failed:%s

The pod failed to be scheduled. Try again.

UnknownError

The ECI service is under heavy load while creating container group resources, please wait and try again later

The Elastic Container Instance service is overloaded. Try to create the pod later.

SpotToBeReleased

Spot ECI will be released in %s minutes

The preemptible instance is about to expire. Perform compatibility processing in business at the earliest opportunity.

DiskCapacityQuotaFull

Your disk capacity quota is exceeded

The disk capacity reached the quota limit. You can apply for a quota increase in the [Quota Center console](https://quotas.console.alibabacloud.com/products/ecs/quotas).

UnknownError

An unknown error occurred for %s

An unknown error occurred. Submit a ticket to resolve the issue.

CpuOptionsNotSupported

The cpu options is not supported for your instanceType\[%s\] in current region

Your pods do not support custom CPU options in the current zone.

CpuOptionsNotValid

The cpu options is not valid for your instanceType\[%s\]

Your pods do not support custom CPU options.

SystemFailureReboot

The Specified ContainerGroup is rebooting

The pod is being restarted.

SystemReboot

It is strongly recommended that you re-create this instance within 48 hours because of %s, otherwise, the pod will be forced to restart.

We recommend that you re-create the pod within 48 hours. Otherwise, the system forcibly restarts the pod.

Throttling

The request was denied due to system flow control, please wait and try again later

The request is rejected due to traffic throttling. Try again later.

SpotDegraded

Spot \[%s\] will be degraded because the specified instance is out of stock

When you create a preemptible instance, a pay-as-you-go instance is automatically created because no resource inventory meets the requirements of the preemptible instance.

AutoInstanceTypeMatch

The most-matched instanceType for current eci instance is %s

The specifications of the pod are adjusted upwards.

MultiZoneRecommendations

%s

We recommend that you configure multiple zones to create the pod.

## **SandboxReady**

The SandboxReady condition is used to describe the availability of a sandbox. The following table lists the reasons, messages, and descriptions related to the condition. A reason indicates an active O&M event. A message is a system event message.

**reason**

**message**

**Description**

SystemFailure.Reboot

%s

The pod is restarted due to a system error.

InstanceFailure.Reboot

%s

The pod is restarted due to an operating system error.

SystemFailure.Redeploy

%s

The pod is redeployed due to a system error.
