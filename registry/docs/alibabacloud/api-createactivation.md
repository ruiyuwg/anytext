Creates an activation code. The activation code is used to register servers that are not provided by Alibaba Cloud as Alibaba Cloud managed instances.

## Operation description

## [](#usage-notes)[](#)Usage notes

After you use an activation code to register a server that is not provided by Alibaba Cloud as an Alibaba Cloud managed instance, you can use various online services of Alibaba Cloud, such as Cloud Assistant, CloudOps Orchestration Service (OOS), and Apsara Devops, on the managed instance.

If a server is not provided by Alibaba Cloud, you can register the server as an Alibaba Cloud managed instance only if the server has Internet connectivity and runs one of the following operating systems:

-   Alibaba Cloud Linux 2, Alibaba Cloud Linux 3, or later
-   CentOS 6, CentOS 7, CentOS 8, or later
-   Debian 8, Debian 9, Debian 10, or later
-   Ubuntu 12, Ubuntu 14, Ubuntu 16, Ubuntu 18, or later
-   CoreOS
-   OpenSUSE
-   Red Hat 5, Red Hat 6, Red Hat 7, or later
-   SUSE Linux Enterprise Server 11, SUSE Linux Enterprise Server 12, SUSE Linux Enterprise Server 15, or later
-   Windows Server 2012, Windows Server 2016, Windows Server 2019, or later

You can have up to 5,000 activation codes per Alibaba Cloud region. When the number of activation codes exceeds 1,000, the usage of the activation codes must be greater than 50% before you can create additional activation codes.

**Note** To obtain the usage of activation codes, go to the **ECS Cloud Assistant** page in the Elastic Compute Service (ECS) console, click the **Manage Instances** tab, and then click **Register Instance**.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateActivation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateActivation)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:CreateActivation

create

\*Activation

`acs:ecs:{#regionId}:{#accountId}:activation/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. Supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia). You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceName

string

No

The default instance name prefix. The prefix must be 2 to 50 characters in length and can contain letters, digits, periods (.), underscores (\_), hyphens (-), and colons (:). The prefix must start with a letter and cannot start with a digit, a special character, `http://`, or `https://`.

If you use the activation code that is created by calling the CreateActivation operation to register managed instances, the instances are assigned sequential names that include the value of this parameter as a prefix. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.

If you specify InstanceName when you register a managed instance, an instance name in the `<InstanceName>-<Number>` format is generated. The number of digits in the <Number> value varies based on the number of digits in the `InstanceCount` value. Example: `001`. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.

test-InstanceName

Description

string

No

The description of the activation code. The description must be 1 to 100 characters in length.

This is description.

InstanceCount

integer

No

The maximum number of times that you can use the activation code to register managed instances. Valid values: 1 to 1000.

Default value: 10.

10

TimeToLiveInHours

long

No

The validity period of the activation code. After the validity period ends, you can no longer use the activation code to register managed instances. Unit: hours.

Default value: 4.

4

IpAddressRange

string

No

The IP addresses of hosts that can use the activation code. The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.

0.0.0.0/0

ResourceGroupId

string

No

The ID of the resource group to which to assign the activation code.

rg-123\*\*\*\*\*\*

Tag

array<object>

No

The tags to add to the activation code.

object

No

The tags to add to the activation code.

Key

string

No

The key of tag N to add to the activation code. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags, call [ListTagResources](/help/en/ecs/api-listtagresources) .

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N to add to the activation code. Valid values of N: 1 to 20. The tag value can be an empty string.

It can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

4ECEEE12-56F1-4FBC-9AB1-890F1234\*\*\*\*

ActivationCode

string

The value of the activation code. The value is returned only once after the CreateActivation operation is called and cannot be queried afterward. Properly save the return value.

a-hz0ch3SwhOlE1234+Xo32lAZC\*\*\*\*

ActivationId

string

The ID of the activation code.

4ECEEE12-56F1-4FBC-9AB1-890F1234\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4ECEEE12-56F1-4FBC-9AB1-890F1234****",
  "ActivationCode": "a-hz0ch3SwhOlE1234+Xo32lAZC****",
  "ActivationId": "4ECEEE12-56F1-4FBC-9AB1-890F1234****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RegionId.ApiNotSupported

The api is not supported in this region.

The API operation cannot be called in the specified region. Check whether the specified RegionId parameter is valid.

400

InstanceName.ExceedLimit

Default instance name prefix length exceeds.

The length of the instance name prefix exceeds the upper limit.

400

InstanceName.InvalidPattern

Default instance name prefix pattern invalid.

The instance name prefix is invalid.

400

ActivationDesc.ExceedLimit

Activation description length exceeds.

The length of the activation code description exceeds the upper limit.

400

ActivationLimitation.Invalid

The specified parameter InstanceCount exceeds the limit of %s.

\-

400

AddressRange.InvalidPattern

Address range should be ipv4 address or cidr.

The IP addresses of hosts that can use the activation code must be IPv4 addresses, IPv6 addresses, or CIDR blocks.

400

ActivationCount.ExceedLimit

The count of activation in current region exceeds the limit of %s.

\-

400

ActivationTTL.ExceedLimit

The specified parameter TimeToLiveInHours exceeds the limit of %s.

The specified parameter TimeToLiveInHours exceeds the limit of% s.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

NumberExceed.Tags

The Tags parameter number is exceed.

The number of tags exceeds the maximum limit.

400

MissingParameter.TagKey

You must specify Tag.N.Key.

The tag key is not specified.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

InvalidStatus.ResourceGroup

You cannot perform an operation on a resource group that is being created or deleted.

Operation not allowed while resource group is being created or deleted.

403

RealNameAuthenticationError

Your account has not passed the real-name authentication yet.

You have not completed real-name verification. Complete real-name verification and try again.

403

ManagedInstanceCountExceedLimit

The count of managed instance in current region exceeds the limit of %s.

The number of managed instances in the current region exceeds the limit of% s.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

500

InternalError.Dispatch

An error occurred when dispatch the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2024-12-05#workbench-doc-change-demo)

2024-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2024-10-30#workbench-doc-change-demo)

2024-09-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2024-09-18#workbench-doc-change-demo)

2024-07-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2024-07-31#workbench-doc-change-demo)

2023-10-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2023-10-24#workbench-doc-change-demo)

2021-10-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2021-10-15#workbench-doc-change-demo)

2021-10-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateActivation?updateTime=2021-10-15#workbench-doc-change-demo)
