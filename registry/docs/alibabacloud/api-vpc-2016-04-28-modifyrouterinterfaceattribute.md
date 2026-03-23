Modifies the configuration of a router interface.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyRouterInterfaceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyRouterInterfaceAttribute)

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

vpc:ModifyRouterInterfaceAttribute

update

\*RouterInterface

`acs:vpc:{#regionId}:{#accountId}:routerinterface/{#RouterInterfaceId}`

-   vpc:TargetAccountRDId

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

The region ID of the router interface.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

RouterInterfaceId

string

Yes

The ID of the router interface.

ri-2zeo3xzyf38r4urz\*\*\*\*

Name

string

No

The name of the router interface.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter.

TEST

Description

string

No

The description of the router interface.

The value must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.

The description of the router interface.

OppositeInterfaceId

string

No

The ID of the peer router interface.

ri-2zeo3xzyf38r4urz\*\*\*\*

OppositeRouterId

string

No

The ID of the peer router.

vrt-bp1jcg5cmxjbl9xgc\*\*\*\*

OppositeRouterType

string

No

The type of router to which the peer router interface belongs. Valid values:

-   **VRouter**
-   **VBR** (default)

VBR

OppositeInterfaceOwnerId

long

No

The ID of the Alibaba Cloud account to which the peer router interface belongs.

28768383240243\*\*\*\*

HealthCheckSourceIp

string

No

The source IP address that is used to perform health checks. The source IP address must be an idle IP address of the local virtual private cloud (VPC).

**Note** You can set this parameter when an Express Connect circuit is used.

116.62.XX.XX

HealthCheckTargetIp

string

No

The destination IP address that is used to perform health checks.

**Note** This parameter is required when **HealthCheckSourceIp** is specified.

116.62.XX.XX

HcThreshold

integer

No

The healthy threshold. Unit: packets. We recommend that you set the value to **8**. This value specifies the number of probe packets that are sent during a health check.

8

HcRate

integer

No

The rate of health checks. Unit: milliseconds. The recommended value is **2000**. This value specifies the interval at which probe packets are sent during a health check.

In this example, **HcThreshold** is set to **8** and **HcRate** is set to **2000**. In this example, probe packets are sent from **HealthCheckSourceIp** (source address) to **HealthCheckTargetIp** (destination address) every 2,000 seconds. If no response is returned for eight consecutive times, the health check fails.

2000

DeleteHealthCheckIp

boolean

No

Specifies whether to delete the health check IP addresses configured on the router interface. Valid values:

-   **true**
-   **false** (default)

false

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

4EC47282-1B74-4534-BD0E-403F3EE64CAF

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4EC47282-1B74-4534-BD0E-403F3EE64CAF"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectStatus

RouterInterface can be operated by this action only when the status is Active,idle or inactive.

This operation is supported only when a router interface is in the Active, Idle, or Inactive state.

400

Forbidden.FinancialLocked

This RouterInterface is financiel locked because of bills outstanding.

\-

400

InvalidName.Malformed

The attribute name is illegal.

\-

400

InvalidOppositeRouterType.ValueNotSupported

The specified OppositeRouterType is not valid.

The value of the OppositeRouterType parameter is invalid.

400

InvalidDescription.Malformed

The Description is illegal.

\-

400

Forbbiden

The Router instance owner error

\-

400

LinkRole.NotSupport

This linkrole is not supported

This link is not supported.

400

Forbbiden.ModifyIdAndType

Opposite is VBR, cannot modify the ID and type

\-

400

InvalidParam.ModifyRouterInterface

Modify routerinterface param invalid

\-

400

InvalidParam.ModifyRouterInterface

Modify routerinterface health check source ip invalid

\-

400

InvalidParam.ModifyRouterInterface

healthCheck Ip is conflicted with DeleteHealthCheckIp option

\-

400

INSTANCE\_IN\_PROCESSIONG

Instance is in processing,please wait and try again

\-

400

IllegalParam.HcThreshold

%s

\-

400

IllegalParam.HcRate

%s

\-

400

InvalidHealthCheckIP.Malformd

Healthcheck sourceip or targetip is not valid.

\-

400

IllegalParam.HcSourceIp

The specified healthCheck Ip is not valid.

The IP address used for health checks is invalid.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidRouterInterfaceId.NotFound

The specified RouterInterfaceId does not exist in our records.

The specified router interface does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouterInterfaceAttribute?updateTime=2024-06-13#workbench-doc-change-demo)

2023-12-21

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouterInterfaceAttribute?updateTime=2023-12-21#workbench-doc-change-demo)

2021-11-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouterInterfaceAttribute?updateTime=2021-11-17#workbench-doc-change-demo)

2021-11-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouterInterfaceAttribute?updateTime=2021-11-17#workbench-doc-change-demo)
