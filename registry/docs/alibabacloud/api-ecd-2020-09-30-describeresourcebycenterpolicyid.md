Queries cloud resources that are associated with a global policy.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeResourceByCenterPolicyId)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeResourceByCenterPolicyId)

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

ecd:DescribeResourceByCenterPolicyId

none

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PolicyGroupId

string

Yes

The policy ID.

pg-53iyi2aar0nd6\*\*\*\*

ProductType

string

No

The service type.

Valid values:

-   app: cloud applications.
-   resourceGroup: resource groups.
-   desktop: cloud computers.
-   desktopGroup: cloud computer shares.

desktop

MaxResults

integer

No

The number of entries per page.

-   Maximum value: 100.
-   Default value: 10.

10

NextToken

string

No

A pagination token.

AAAAAV3MpHK1AP0pfERHZN5pu6l69tQX7yFxx6/4dbooBAOc

ResourceId

string

No

The resource ID.

ecd-ia2zw38bi6cm7\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

48174475-5EB2-5F99-A9E9-6F892D645\*\*\*\*

ResourceModelList

array<object>

The resources.

ResourceModel

object

Status

string

The resource status.

Stopped

Cpu

integer

The number of vCPUs.

64

ResourceType

string

The resource type.

desktop

ProductType

string

The service type.

desktop

OsType

string

The OS type.

Linux

GpuCount

double

The number of GPUs.

0.125

Memory

long

The memory size. Unit: MiB.

10240

ResourceId

string

The resource ID.

ecd-7o96aa08fr\*\*\*\*

ResourceName

string

The resource name.

ProtocolType

string

The protocol type.

ASP

DesktopType

string

The cloud computer type. You can call the [DescribeDesktopTypes](/help/en/wuying-workspace/describedesktoptypes) operation to query the IDs of the cloud computer types supported by Alibaba Cloud Workspace.

eds.enterprise\_office.8c32g

PayType

string

The billing method.

postPaid

GpuSpec

string

The GPU type.

2GiB

ResourceGroupId

string

The resource group ID.

rg-d7pasxsd3b9nhq\*\*

ResourceGroupName

string

The resource group name.

test

ResourceGroupRelCount

integer

The number of associated resource groups

10

AppModelList

array<object>

The cloud applications.

appModel

object

AppId

string

The application ID. This parameter is only applicable to cloud applications.

18

AppName

string

The application name.

alipic-powergem

ResourceRegionId

string

The region ID of the resource.

cn-shenzhen

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a4883

Count

string

The total number of resources.

2

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "48174475-5EB2-5F99-A9E9-6F892D645****",
  "ResourceModelList": [
    {
      "Status": "Stopped",
      "Cpu": 64,
      "ResourceType": "desktop",
      "ProductType": "desktop",
      "OsType": "Linux",
      "GpuCount": 0.125,
      "Memory": 10240,
      "ResourceId": "ecd-7o96aa08fr****",
      "ResourceName": "",
      "ProtocolType": "ASP",
      "DesktopType": "eds.enterprise_office.8c32g",
      "PayType": "postPaid",
      "GpuSpec": "2GiB",
      "ResourceGroupId": "rg-d7pasxsd3b9nhq**",
      "ResourceGroupName": "test",
      "ResourceGroupRelCount": 10,
      "AppModelList": [
        {
          "AppId": 18,
          "AppName": "alipic-powergem"
        }
      ],
      "ResourceRegionId": "cn-shenzhen"
    }
  ],
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "Count": 2
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
