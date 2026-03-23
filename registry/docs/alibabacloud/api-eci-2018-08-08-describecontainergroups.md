You can call DescribeContainerGroups to query information about multiple ECI instances.

## Operation description

-   When an ECI instance stops running, its underlying computing resources are reclaimed. Other resources that are created with the instance, such as EIPs, are released with the instance by default.
    
-   The metadata of instances in a terminal state (Failed, Succeeded, or Expired) is retained as follows:
    -   All metadata of instances created within the last hour is retained.
        
    -   For instances that are older than one hour, only the metadata of the last 100 instances in each region is retained.
        
-   If you make the query using a RAM user or RAM role that does not have the required API permissions, an empty list is returned.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eci/2018-08-08/DescribeContainerGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eci/2018-08-08/DescribeContainerGroups)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

eci:DescribeContainerGroups

get

ContainerGroup

`acs:eci:{#regionId}:{#accountId}:containergroup/*`

ContainerGroup

`acs:eci:{#regionId}:{#accountId}:containergroup/{#containergroupId}`

-   eci:tag

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID of the instance.

cn-hangzhou

RegionId

string

Yes

The region ID of the instance.

cn-hangzhou

ZoneId

string

No

The zone where the instance is located. If you leave this parameter empty, the system selects a zone.

The default value is empty.

cn-hangzhou-h

VSwitchId

string

No

The ID of the virtual switch to which the instance is connected.

vsw-bp1jrgfqqy54kg5hc\*\*\*\*

NextToken

string

No

The token that marks the start of the next query. If this parameter is empty, no more results are returned.

**Note**

You do not need to set this parameter for the first query. The token for a subsequent query is obtained from the response to the previous query.

d78f2dd8-5979-42fe-\*\*\*\*-b16db43be5bc

Limit

integer

No

The number of resources to return. If you do not set this parameter, the default value is 20. The maximum value is 20.

**Note**

The number of returned resources may be less than but will not be greater than the specified value.

20

ContainerGroupIds

string

No

The IDs of the instances. You can specify up to 20 IDs. The value must be a JSON-formatted string.

\["eci-bp17gw49eu09yiwm\*\*\*\*", "eci-bp19aq49du01abcm\*\*\*\*", "eci-2zegym1qhbmdfr1s\*\*\*\*"\]

ContainerGroupName

string

No

The name of the instance, which is also the name of the container group.

test

Status

string

No

The status of the instance. Valid values:

-   Pending: The instance is starting.
    
-   Running: The instance is running.
    
-   Succeeded: The instance ran successfully.
    
-   Failed: The instance failed to run.
    
-   Scheduling: The instance is being created.
    
-   ScheduleFailed: The instance failed to be created.
    
-   Restarting: The instance is being restarted.
    
-   Updating: The instance is being updated.
    
-   Terminating: The instance is being stopped.
    
-   Expired: The instance has expired.
    

Running

ResourceGroupId

string

No

The ID of the resource group to which the instance belongs.

rg-aekzh43v\*\*\*\*\*

WithEvent

boolean

No

Specifies whether to return event information.

true

Tag

array<object>

No

The tags of the instances.

object

No

The tags of the instances.

Key

string

No

The tag key of the instance.

name

Value

string

No

The tag value of the instance.

test

ComputeCategory

string

No

The computing power category. Valid values:

-   economy: economy
    
-   general: general-purpose
    

economy

SecurityGroupId

string

No

The ID of the security group to which the instance belongs.

sg-uf66jeqopgqa9hdn\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The number of instances.

1

NextToken

string

The token that marks the start of the next query.

d78f2dd8-5979-42fe-\*\*\*\*-b16db43be5bc

RequestId

string

The request ID, which is a unique identifier.

89945DD3-9072-47D0-A318-353284CFC7B3

ContainerGroups

array<object>

The list of instance information.

array<object>

The list of instance information.

Status

string

The status of the instance. Possible values:

-   Pending: The instance is starting.
    
-   Running: The instance is running.
    
-   Succeeded: The instance ran successfully.
    
-   Failed: The instance failed to run.
    
-   Scheduling: The instance is being created.
    
-   ScheduleFailed: The instance failed to be created.
    
-   Restarting: The instance is being restarted.
    
-   Updating: The instance is being updated.
    
-   Terminating: The instance is being stopped.
    
-   Expired: The instance has expired.
    

Running

CreationTime

string

The time when the system created the instance after receiving the request. The time is in UTC and follows the RFC3339 standard.

2018-08-02T15:00:00Z

VpcId

string

The ID of the VPC to which the instance belongs.

vpc-1vzjjflab6wvjox\*\*\*\*

InternetIp

string

The public IP address.

192.0.XX.XX

TenantSecurityGroupId

string

This parameter is not available.

sg-xxx

SecurityGroupId

string

The security group ID.

sg-bp12ujq5zpxuyjfo3o8r

HostAliases

array<object>

The custom mapping between a hostname and an IP address for a container in the instance.

object

The custom mapping between a hostname and an IP address for a container in the instance.

Hostnames

array

The host information.

string

The hostname.

\['hehe.com', 'haha.com'\]

Ip

string

The IP address.

192.0.XX.XX

Tags

array<object>

The tags of the instance.

object

The tags of the instance.

Key

string

The tag key.

name

Value

string

The tag value.

test-xh

Events

array<object>

The event information. A maximum of 50 events can be returned.

object

The event information. A maximum of 50 events can be returned.

Type

string

The event type. Possible values:

-   Normal
    
-   Warning
    

Normal

LastTimestamp

string

The time when the event ended.

2018-08-02T15:00:00Z

Message

string

The event message.

Started container

Name

string

The name of the object to which the event belongs.

test-xxx

Reason

string

The event name.

Created

Count

integer

The number of events.

20

FirstTimestamp

string

The time when the event started.

2018-08-02T15:00:00Z

SucceededTime

string

The time when all containers successfully exited. The time is in UTC and follows the RFC3339 standard.

2019-12-11T04:33:42Z

SpotStrategy

string

The preemption policy for the instance. Valid values:

-   NoSpot (default): A regular pay-as-you-go instance.
    
-   SpotWithPriceLimit: A spot instance with a user-defined maximum hourly price.
    
-   SpotAsPriceGo: A spot instance for which the system automatically bids based on the current market price.
    

NoSpot

SpotPriceLimit

number

The maximum hourly price for the spot instance.

This parameter is returned only when SpotStrategy is set to SpotWithPriceLimit.

0.025

EphemeralStorage

integer

The size of the temporary storage space. Unit: GiB.

20

TenantEniInstanceId

string

This parameter is not available.

i-xxx

Discount

integer

The discount.

9

RestartPolicy

string

The restart policy of the container group. Valid values:

-   Never: Does not restart.
    
-   Always: Always restarts.
    
-   OnFailure: Restarts upon failure.
    

Never

Memory

number

The memory size of the instance. Unit: GiB.

4.0

TenantVSwitchId

string

This parameter is not available.

vsw-xxx

Containers

array<object>

The list of containers in the instance.

array<object>

The list of containers in the instance.

LivenessProbe

object

The liveness probe.

SuccessThreshold

integer

The minimum number of consecutive successes for the probe to be considered successful after having failed. The default value is 1. The value must be 1.

1

InitialDelaySeconds

integer

The time when the check starts to be performed, calculated from when the container starts.

10

FailureThreshold

integer

The minimum number of consecutive failures for the probe to be considered failed after having been successful. The default value is 3.

3

TimeoutSeconds

integer

The timeout period for the check. The default value is 1 second. The minimum value is 1 second.

10

TcpSocket

object

The TCP socket.

Host

string

The hostname.

1.2.3.4

Port

integer

The port number.

80

Execs

array

The command to execute.

string

The command to execute.

\["/bin/sh", "-c", "echo Hello world > /usr/share/message"\]

HttpGet

object

The HTTP GET request.

Scheme

string

HTTP or HTTPS.

HTTP

Path

string

The path for the HTTP GET request check.

/usr/nginx/

Port

integer

The port for the HTTP GET request check.

80

PeriodSeconds

integer

The interval at which the check is performed. The default value is 10 seconds. The minimum value is 1 second.

5

Commands

array

The container startup command.

string

The container startup command.

\[/bin/sh echo\]

VolumeMounts

array<object>

The information about the mounted volumes.

object

The information about the mounted volumes.

MountPropagation

string

The mount propagation setting of the volume. Mount propagation allows volumes mounted by a container to be shared with other containers in the same pod, or even with other pods on the same node. Possible values:

-   None: The volume does not receive any subsequent mounts that are performed on this volume or any of its subdirectories.
    
-   HostToContainer: The volume receives all subsequent mounts that are performed on this volume or any of its subdirectories.
    
-   Bidirectional: This is similar to HostToContainer. The volume receives mount operations. In addition, the volume is propagated back to the host and to all containers of all pods that use the same volume.
    

None

MountPath

string

The mount path. The content in the mount path of the container is overwritten by the content of the volume.

/usr/share/

ReadOnly

boolean

Specifies whether the volume is read-only.

false

Name

string

The name of the volume.

test-empty

SubPath

string

The subdirectory within the volume. This allows an instance to mount different directories from the same volume to different directories in the container.

/usr/sub

Args

array

The container startup arguments.

string

The container startup arguments.

\["hello"\]

Image

string

The container image.

mysql

Ports

array<object>

The exposed port and protocol.

object

The exposed port and protocol.

Protocol

string

The protocol type.

TCP

Port

integer

The port number. Possible values: 1 to 65535.

8080

RestartCount

integer

The number of restarts.

0

ImagePullPolicy

string

The image pull policy. Possible values:

-   Always: Always pulls the image.
    
-   IfNotPresent: Pulls the image if it is not present locally.
    
-   Never: Never pulls the image. Uses the local image.
    

Always

StdinOnce

boolean

If stdin is true, the standard input stream remains open across multiple attach sessions. If StdinOnce is set to true, stdin is opened when the container starts and remains empty until the first client attaches to stdin. After that, it remains open and receives data until the client disconnects. At that point, stdin is closed and remains closed until the container is restarted.

true

Cpu

number

The vCPU size of the container.

2.0

PreviousState

object

The previous state.

StartTime

string

The time when the container started running.

2021-12-02T15:00:00Z

FinishTime

string

The time when the container stopped running.

2021-12-02T15:01:00Z

DetailStatus

string

The details of the status.

working

State

string

The container status. Possible values:

-   Waiting: The container is starting.
    
-   Running: The container is running.
    
-   Terminated: The container has stopped.
    

Terminated

Message

string

The container status message.

Back-off 5m0s restarting failed container=test pod=test\_eci-xxx(xxx)

Signal

integer

The container status signal.

1

ExitCode

integer

The exit code of the container.

0

Reason

string

The reason for the container status.

Completed

Tty

boolean

Specifies whether to enable interaction. The default value is false. For example, if you set Command to `/bin/bash`, you must set this parameter to true.

false

WorkingDir

string

The working directory.

/usr/local/nginx

CurrentState

object

The current status of the container.

StartTime

string

The start time of the container.

2021-12-02T15:00:00Z

FinishTime

string

The time when the container stopped running.

2021-12-02T15:01:00Z

DetailStatus

string

The detailed status of the container.

working

State

string

The status of the container. Possible values:

-   Waiting
    
-   Running
    
-   Terminated
    

Terminated

Message

string

The status message of the container.

Back-off 5m0s restarting failed container=test pod=test\_eci-xxx(xxx)

Signal

integer

The status signal of the container.

1

ExitCode

integer

The exit code of the container.

0

Reason

string

The reason for the container status.

Started

Ready

boolean

Indicates whether the container passed its readiness probe.

true

Gpu

integer

The number of GPUs.

1

SecurityContext

object

The security context of the instance.

ReadOnlyRootFilesystem

boolean

Indicates whether the root file system is read-only. Currently, only \`true\` is supported.

true

RunAsUser

integer

The user ID that runs the container.

1000

Capability

object

The specific permissions granted to processes in the container.

Adds

array

The specific permissions for processes in the container.

string

A specific capability granted to the processes in the container.

\[NET\_ADMIN\]

Memory

number

The memory size of the container. The unit is GiB.

2.0

Stdin

boolean

Specifies if the container runtime should allocate a buffer for the container's standard input. If it does not, reading from standard input returns an End-of-File (EOF). The default is false.

true

Name

string

The container name.

nginx

EnvironmentVars

array<object>

The environment variables.

array<object>

The environment variables.

Key

string

The name of the environment variable.

PATH

Value

string

The value of the environment variable.

/usr/bin/

ValueFrom

object

The source of the environment variable value. This parameter cannot be used if the Value parameter is not empty.

FieldRef

object

The specified field.

FieldPath

string

The path of the field.

status.podIP

ReadinessProbe

object

The readiness probe for the application. It checks whether the container is ready to serve requests.

SuccessThreshold

integer

The minimum number of consecutive successes for the probe to be considered successful after having failed. The default is 1. The value must be 1.

1

InitialDelaySeconds

integer

The number of seconds after the container starts before the check is initiated.

5

FailureThreshold

integer

The number of consecutive failures after the last successful probe for the probe to be considered failed. The default value is 3.

3

TimeoutSeconds

integer

The probe timeout in seconds. The default value is 1 second. The minimum value is 1 second.

1

TcpSocket

object

The health check uses a TCP socket.

Host

string

The hostname or IP address.

1.2.3.4

Port

integer

The port number.

8888

Execs

array

The commands to execute in the container for a command-line health check.

string

The command to execute in the container for a command-line health check.

\["/bin/sh", "-c", "echo Hello world > /usr/share/message"\]

HttpGet

object

The health check is performed using an HTTP request.

Scheme

string

HTTP/HTTPS.

HTTP

Path

string

The path for the HTTP GET check.

/usr/local

Port

integer

The port number for the HttpGet check.

8080

PeriodSeconds

integer

The period for executing the check. The default is 10 seconds. The minimum is 1 second.

1

EniInstanceId

string

The ID of the elastic network interface (ENI).

eni-bp14rzqi6fd8satm\*\*\*\*

InitContainers

array<object>

A list of init containers.

array<object>

The list of init containers.

VolumeMounts

array<object>

The volumes mounted to the init container.

object

The volume mounted to the init container.

MountPropagation

string

The mount propagation setting for the volume. Mount propagation lets you share a volume mounted by a container with other containers in the same pod. You can also share the volume with other pods on the same node. The possible values are:

-   None: The volume does not receive any subsequent mounts that are performed on this volume or its subdirectories.
    
-   HostToContainer: The volume receives subsequent mounts that are performed on this volume or its subdirectories.
    
-   Bidirectional: Similar to HostToContainer, this setting allows the volume to receive mount operations. It also propagates the volume mount back to the host and to all containers of all pods that use the same volume.
    

None

MountPath

string

The mount path in the container. The content of the volume overwrites any existing content at this path.

/usr/share/

ReadOnly

boolean

Indicates whether the volume is read-only.

false

Name

string

The name of the volume. This must be the same as the Name of the Volume.

test-empty

Args

array

The startup arguments.

string

The startup arguments.

\['hello world'\]

Image

string

The image.

nginx

Ports

array<object>

The exposed ports and protocols.

object

The exposed port and protocol.

Protocol

string

The protocol type.

TCP

Port

integer

The port number. Valid values: 1 to 65535.

8888

RestartCount

integer

The restart count.

5

ImagePullPolicy

string

The image pull policy. Valid values:

-   Always: The image is always pulled.
    
-   IfNotPresent: The image is pulled only if it does not exist locally.
    
-   Never: The image is never pulled. Only the local image is used.
    

Always

PreviousState

object

The previous state.

StartTime

string

The time when the container started.

2021-12-02T15:00:00Z

FinishTime

string

The time when the container stopped running.

2021-12-02T15:01:00Z

DetailStatus

string

The details of the status.

working

State

string

The status of the container. The enumeration values are Waiting, Running, and Terminated.

Terminated

Message

string

The status message of the container.

Started container

Signal

integer

The status signal of the container.

1

ExitCode

integer

The exit code of the container.

0

Reason

string

The reason for the container status.

completed

WorkingDir

string

The working directory.

/usr/test

Cpu

number

The vCPU size.

1.0

CurrentState

object

The current status.

StartTime

string

The time when the container started running.

2021-12-02T15:00:00Z

FinishTime

string

The time when the container finished running.

2021-12-02T15:01:00Z

DetailStatus

string

The detailed status.

working

State

string

The status of the container. Possible values:

-   Waiting
    
-   Running
    
-   Terminated
    

Running

Message

string

The event message.

Created container

Signal

integer

The signal for the container status.

1

ExitCode

integer

The exit code of the container.

0

Reason

string

The reason for the container status.

Started

Command

array

The startup command.

string

The startup command.

\[/bin/sh echo\]

Ready

boolean

Indicates whether the container passed its readiness probe.

true

Gpu

integer

The number of GPUs.

1

SecurityContext

object

The security context of the container.

ReadOnlyRootFilesystem

boolean

Indicates whether the root file system is read-only. Currently, only true is supported.

true

RunAsUser

integer

The UID used to run the entry point of the container process.

1557

Capability

object

The specific permissions for the processes in the container.

Adds

array

The specific permissions that processes in the container have.

string

The specific permission granted to processes in the container.

NET\_ADMIN

Memory

number

The memory size of the init container, in GiB.

2.0

Name

string

The name of the container.

Init-xxx

EnvironmentVars

array<object>

The environment variables.

array<object>

The environment variable.

Key

string

The name of the environment variable.

PATH

Value

string

The value of the environment variable.

/usr/local/bin

ValueFrom

object

The source of the value for the environment variable. This parameter is unavailable if the Value parameter is set.

FieldRef

object

The specified field.

FieldPath

string

The path of the field to select from the specified version. Currently, only `status.podIP` is supported.

status.podIP

ContainerGroupId

string

The ID of the instance.

eci-bp1jrgfqqy54kg5hc\*\*\*\*

TenantEniIp

string

This parameter is not available.

10.10.XX.XX

InstanceType

string

The specified ECS instance type.

ecs.g5.large

IntranetIp

string

The intranet IP address.

172.16.XX.XX

Ipv6Address

string

The IPv6 address.

2001:XXXX:4:4:4:4:4:4

RegionId

string

The region ID of the instance.

cn-hangzhou

DnsConfig

object

The DNS configuration.

Searches

array

A list of DNS search domains.

string

The DNS search domain.

svc.local.kubenetes

Options

array<object>

A list of option objects. Each object consists of a Name and an optional Value.

object

A list of option objects. Each object consists of a Name and an optional Value.

Value

string

The value of the variable.

value

Name

string

The name of the object variable.

name

NameServers

array

The IP addresses of the DNS servers.

string

The IP address.

\[10.2.\*.\*\]

Volumes

array<object>

Volume information.

array<object>

Describes a volume.

Type

string

The type of the volume. Valid values are:

-   EmptyDirVolume
    
-   NFSVolume
    
-   ConfigFileVolume
    
-   FlexVolume
    

EmptyDirVolume

DiskVolumeDiskId

string

The ID of the DiskVolume.

d-xxxx

NFSVolumeReadOnly

boolean

Indicates whether the volume is read-only.

false

ConfigFileVolumeConfigFileToPaths

array<object>

The list of configuration file paths.

object

A list of configuration file paths.

Path

string

The relative path of the file.

/usr/bin/

Content

string

The content of the configuration file. The size is limited to 32 KB.

hello world

FlexVolumeFsType

string

The type of the file system to mount. The default value depends on the FlexVolume script.

ntfs

FlexVolumeDriver

string

The name of the driver for FlexVolume.

flexvolume

DiskVolumeFsType

string

The type of the volume.

xfs

FlexVolumeOptions

string

The list of options for the FlexVolume object.

\[nolock,tcp,noresvport\]

NFSVolumeServer

string

The address of the NFS server.

0eafxxxxx-xxxxx.cn-hangzhou.nas.aliyuncs.com

NFSVolumePath

string

The path of the NFS volume.

/eci

Name

string

The name of the volume.

test-empty

EmptyDirVolumeMedium

string

The storage medium for the emptyDir volume. The default value is empty, which means the node's file system is used. Valid values:

-   Memory: Uses memory.
    
-   LocalRaid0: Combines local disks into a RAID 0 array. This value is valid only when you create an instance with local disks and attach them. For more information, see [Create an instance with local disks](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-an-elastic-container-instance/).
    

Memory

EmptyDirVolumeSizeLimit

string

The size of the EmptyDir volume.

256Mi

RamRoleName

string

The name of the instance RAM role. ECI and ECS share instance RAM roles. For more information, see [Use an instance RAM role using the API](/help/en/doc-detail/61178.html).

ram:PassRole

VSwitchId

string

The virtual switch ID.

vsw-bp1vzjjflab6wvjox\*\*\*\*

Cpu

number

The number of vCPUs of the instance.

2.0

ExpiredTime

string

The time when the instance failed to run because of an overdue payment. The time is in UTC and is formatted according to RFC 3339.

2018-08-02T15:00:00Z

ResourceGroupId

string

The ID of the resource group.

rg-8db03793gfrz\*\*\*\*

ZoneId

string

The zone to which the instance belongs.

cn-hangzhou-h

ContainerGroupName

string

The name of the container group.

test

EciSecurityContext

object

The security context of the container group.

Sysctls

array<object>

The sysctl parameters.

object

The sysctl parameter.

Value

string

The value of the sysctl parameter.

65536

Name

string

The name of the sysctl parameter.

kernel.msgmax

FailedTime

string

The time when the instance failed. The time is in UTC and complies with the RFC 3339 standard.

2018-08-02T15:00:00Z

ComputeCategory

string

The computing power category. Possible values:

-   economy: Economy
    
-   general: General-purpose
    

economy

DnsPolicy

string

The DNS policy. Valid values:

-   None: Uses the DNS settings from the DnsConfig field.
    
-   Default: Inherits the DNS settings from the runtime environment.
    

None

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "NextToken": "d78f2dd8-5979-42fe-****-b16db43be5bc",
  "RequestId": "89945DD3-9072-47D0-A318-353284CFC7B3",
  "ContainerGroups": [
    {
      "Status": "Running",
      "CreationTime": "2018-08-02T15:00:00Z",
      "VpcId": "vpc-1vzjjflab6wvjox****",
      "InternetIp": "192.0.XX.XX",
      "TenantSecurityGroupId": "sg-xxx",
      "SecurityGroupId": "sg-bp12ujq5zpxuyjfo3o8r",
      "HostAliases": [
        {
          "Hostnames": [
            "['hehe.com', 'haha.com']"
          ],
          "Ip": "192.0.XX.XX"
        }
      ],
      "Tags": [
        {
          "Key": "name",
          "Value": "test-xh"
        }
      ],
      "Events": [
        {
          "Type": "Normal",
          "LastTimestamp": "2018-08-02T15:00:00Z",
          "Message": "Started container",
          "Name": "test-xxx",
          "Reason": "Created",
          "Count": 20,
          "FirstTimestamp": "2018-08-02T15:00:00Z"
        }
      ],
      "SucceededTime": "2019-12-11T04:33:42Z",
      "SpotStrategy": "NoSpot",
      "SpotPriceLimit": 0.025,
      "EphemeralStorage": 20,
      "TenantEniInstanceId": "i-xxx",
      "Discount": 9,
      "RestartPolicy": "Never",
      "Memory": 4,
      "TenantVSwitchId": "vsw-xxx",
      "Containers": [
        {
          "LivenessProbe": {
            "SuccessThreshold": 1,
            "InitialDelaySeconds": 10,
            "FailureThreshold": 3,
            "TimeoutSeconds": 10,
            "TcpSocket": {
              "Host": "1.2.3.4",
              "Port": 80
            },
            "Execs": [
              "[\"/bin/sh\", \"-c\", \"echo Hello world > /usr/share/message\"]"
            ],
            "HttpGet": {
              "Scheme": "HTTP",
              "Path": "/usr/nginx/",
              "Port": 80
            },
            "PeriodSeconds": 5
          },
          "Commands": [
            "[/bin/sh echo]"
          ],
          "VolumeMounts": [
            {
              "MountPropagation": "None",
              "MountPath": "/usr/share/",
              "ReadOnly": false,
              "Name": "test-empty",
              "SubPath": "/usr/sub"
            }
          ],
          "Args": [
            "[\"hello\"]"
          ],
          "Image": "mysql",
          "Ports": [
            {
              "Protocol": "TCP",
              "Port": 8080
            }
          ],
          "RestartCount": 0,
          "ImagePullPolicy": "Always",
          "StdinOnce": true,
          "Cpu": 2,
          "PreviousState": {
            "StartTime": "2021-12-02T15:00:00Z",
            "FinishTime": "2021-12-02T15:01:00Z",
            "DetailStatus": "working",
            "State": "Terminated",
            "Message": "Back-off 5m0s restarting failed container=test pod=test_eci-xxx(xxx)",
            "Signal": 1,
            "ExitCode": 0,
            "Reason": "Completed"
          },
          "Tty": false,
          "WorkingDir": "/usr/local/nginx",
          "CurrentState": {
            "StartTime": "2021-12-02T15:00:00Z",
            "FinishTime": "2021-12-02T15:01:00Z",
            "DetailStatus": "working",
            "State": "Terminated",
            "Message": "Back-off 5m0s restarting failed container=test pod=test_eci-xxx(xxx)",
            "Signal": 1,
            "ExitCode": 0,
            "Reason": "Started"
          },
          "Ready": true,
          "Gpu": 1,
          "SecurityContext": {
            "ReadOnlyRootFilesystem": true,
            "RunAsUser": 1000,
            "Capability": {
              "Adds": [
                "[NET_ADMIN]"
              ]
            }
          },
          "Memory": 2,
          "Stdin": true,
          "Name": "nginx",
          "EnvironmentVars": [
            {
              "Key": "PATH",
              "Value": "/usr/bin/",
              "ValueFrom": {
                "FieldRef": {
                  "FieldPath": "status.podIP"
                }
              }
            }
          ],
          "ReadinessProbe": {
            "SuccessThreshold": 1,
            "InitialDelaySeconds": 5,
            "FailureThreshold": 3,
            "TimeoutSeconds": 1,
            "TcpSocket": {
              "Host": "1.2.3.4",
              "Port": 8888
            },
            "Execs": [
              "[\"/bin/sh\", \"-c\", \"echo Hello world > /usr/share/message\"]"
            ],
            "HttpGet": {
              "Scheme": "HTTP",
              "Path": "/usr/local",
              "Port": 8080
            },
            "PeriodSeconds": 1
          }
        }
      ],
      "EniInstanceId": "eni-bp14rzqi6fd8satm****",
      "InitContainers": [
        {
          "VolumeMounts": [
            {
              "MountPropagation": "None",
              "MountPath": "/usr/share/",
              "ReadOnly": false,
              "Name": "test-empty"
            }
          ],
          "Args": [
            "['hello world']"
          ],
          "Image": "nginx",
          "Ports": [
            {
              "Protocol": "TCP",
              "Port": 8888
            }
          ],
          "RestartCount": 5,
          "ImagePullPolicy": "Always",
          "PreviousState": {
            "StartTime": "2021-12-02T15:00:00Z",
            "FinishTime": "2021-12-02T15:01:00Z",
            "DetailStatus": "working",
            "State": "Terminated",
            "Message": "Started container",
            "Signal": 1,
            "ExitCode": 0,
            "Reason": "completed"
          },
          "WorkingDir": "/usr/test",
          "Cpu": 1,
          "CurrentState": {
            "StartTime": "2021-12-02T15:00:00Z",
            "FinishTime": "2021-12-02T15:01:00Z",
            "DetailStatus": "working",
            "State": "Running",
            "Message": "Created container",
            "Signal": 1,
            "ExitCode": 0,
            "Reason": "Started"
          },
          "Command": [
            "[/bin/sh echo]"
          ],
          "Ready": true,
          "Gpu": 1,
          "SecurityContext": {
            "ReadOnlyRootFilesystem": true,
            "RunAsUser": 1557,
            "Capability": {
              "Adds": [
                "NET_ADMIN"
              ]
            }
          },
          "Memory": 2,
          "Name": "Init-xxx",
          "EnvironmentVars": [
            {
              "Key": "PATH",
              "Value": "/usr/local/bin",
              "ValueFrom": {
                "FieldRef": {
                  "FieldPath": "status.podIP"
                }
              }
            }
          ]
        }
      ],
      "ContainerGroupId": "eci-bp1jrgfqqy54kg5hc****",
      "TenantEniIp": "10.10.XX.XX",
      "InstanceType": "ecs.g5.large",
      "IntranetIp": "172.16.XX.XX",
      "Ipv6Address": "2001:XXXX:4:4:4:4:4:4",
      "RegionId": "cn-hangzhou",
      "DnsConfig": {
        "Searches": [
          "svc.local.kubenetes"
        ],
        "Options": [
          {
            "Value": "value",
            "Name": "name"
          }
        ],
        "NameServers": [
          "[10.2.*.*]"
        ]
      },
      "Volumes": [
        {
          "Type": "EmptyDirVolume",
          "DiskVolumeDiskId": "d-xxxx",
          "NFSVolumeReadOnly": false,
          "ConfigFileVolumeConfigFileToPaths": [
            {
              "Path": "/usr/bin/",
              "Content": "hello world"
            }
          ],
          "FlexVolumeFsType": "ntfs",
          "FlexVolumeDriver": "flexvolume",
          "DiskVolumeFsType": "xfs",
          "FlexVolumeOptions": "[nolock,tcp,noresvport]",
          "NFSVolumeServer": "0eafxxxxx-xxxxx.cn-hangzhou.nas.aliyuncs.com",
          "NFSVolumePath": "/eci",
          "Name": "test-empty",
          "EmptyDirVolumeMedium": "Memory",
          "EmptyDirVolumeSizeLimit": "256Mi"
        }
      ],
      "RamRoleName": "ram:PassRole",
      "VSwitchId": "vsw-bp1vzjjflab6wvjox****",
      "Cpu": 2,
      "ExpiredTime": "2018-08-02T15:00:00Z",
      "ResourceGroupId": "rg-8db03793gfrz****",
      "ZoneId": "cn-hangzhou-h",
      "ContainerGroupName": "test",
      "EciSecurityContext": {
        "Sysctls": [
          {
            "Value": "65536",
            "Name": "kernel.msgmax"
          }
        ]
      },
      "FailedTime": "2018-08-02T15:00:00Z",
      "ComputeCategory": "economy",
      "DnsPolicy": "None"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.MismatchInstanceType

The instanceId mismatch instance type.

See [Error Codes](https://api.alibabacloud.com/document/Eci/2018-08-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eci/2018-08-08/DescribeContainerGroups#workbench-doc-change-demo) for a complete list.
