Queries a list of MaxCompute projects.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/MaxCompute/2022-01-04/ListProjects)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/MaxCompute/2022-01-04/ListProjects)

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

odps:ListProjects

list

Project

`acs:odps:{#regionId}:{#accountId}:projects/*`

none

none

## Request syntax

```
GET /api/v1/projects HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

tenantId

string

No

The tenant ID. You can log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com), and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.

549532154333697

region

string

No

The region ID.

cn-beijing

quotaNickName

string

No

The quota nickname. You can log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com), choose **Workspace** > **Quotas** from the left-side navigation pane, and then view the quota nickname on the **Quotas** page.

quotaA

quotaName

string

No

The quota name that is automatically generated. You can log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com), choose **Workspace** > **Quotas** from the left-side navigation pane, and then view the quota name on the **Quotas** page.

"hsajkdgbkaubh"

prefix

string

No

Specifies the marker after which the returned list begins.

a

marker

string

No

The maximum number of entries to return on each page.

cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==

maxItem

integer

No

The maximum number of entries per page. Default value: 10.

10

saleTags

string

No

The instance ID and billing method of the default computing quota.

"aaaa-bbbb"

type

string

No

The project type. Valid values:

-   **managed**: internal project
-   **external**: external project

"managed"

listSystemCatalog

boolean

No

Specifies whether to list the built-in **SYSTEM\_CATALOG** projects that are used to provide data such as project metadata and historical usage data. For more information, see [Tenant-level Information Schema](/help/en/maxcompute/user-guide/tenant-level-information-schema).

Valid values:

-   true: The built-in SYSTEM\_CATALOG projects are listed.
-   false: The built-in SYSTEM\_CATALOG projects are not listed.

true

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

requestId

string

The request ID.

0b16399216671970335563173e2340

data

object

The data returned.

projects

array<object>

The list of projects.

projects

object

The project information.

name

string

The name of the project.

odps\_project

owner

string

The account information of the project owner.

1139815775606813

type

string

The project type. Valid values:

-   **managed**: internal project
-   **external**: external project

managed

comment

string

The project description.

maxcompute projects

defaultQuota

string

The default computing quota that is used to allocate computing resources. If you do not specify a computing quota for your project, the jobs that are initiated by your project consume the computing resources in the default quota. For more information about how to use computing resources, see [Use quota groups for computing resources](/help/en/maxcompute/user-guide/use-of-computing-resources)

quotaA

status

string

The project status. Valid values:

-   **AVAILABLE**
-   **READONLY**
-   **FROZEN**
-   **DELETING**

AVAILABLE

costStorage

string

The total storage usage. The storage space that is occupied by your project, which is the logical storage space after your project data is collected and compressed.

16489027

regionId

string

The region ID.

cn-beijing

createdTime

long

The creation time.

1704380838000

properties

object

The basic properties of the project.

timezone

string

The time zone that is used by your project. The time zone is the same as the time zone specified by `odps.sql.timezone`.

Asia/Shanghai

retentionDays

long

The retention period for backup data. Unit: days. During the retention period, you can restore data of the version in use to the backup data of any version. Valid values: \[0,30\]. Default value: 1. The value 0 indicates that the backup feature is disabled.

1

allowFullScan

boolean

Indicates whether a full table scan is allowed in the project. A full table scan occupies a large number of resources, which reduces data processing efficiency. By default, the full table scan feature is disabled.

false

typeSystem

string

The data type edition. Valid values:

-   **1**: MaxCompute V1.0 data type edition
-   **2**: MaxCompute V2.0 data type edition
-   **hive**: Hive-compatible data type edition

For more information about the differences among the three data type editions, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions).

2

enableDecimal2

boolean

Indicates whether the DECIMAL type of the MaxCompute V2.0 data type edition is enabled.

true

sqlMeteringMax

string

The maximum consumption threshold of a single SQL statement. Formula: Amount of scanned data (GB) × Complexity.

1500

tableLifecycle

object

The table lifecycle properties.

type

string

The lifecycle type. Valid values:

-   **mandatory**: The lifecycle clause is required in a table creation statement.
-   **optional**: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
-   **inherit**: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.

optional

value

string

The table lifecycle. Unit: days. Valid values: 1 to 37231. Default value: 37231.

37231

encryption

object

The storage encryption properties.

enable

boolean

Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see

[Storage encryption](/help/en/maxcompute/security-and-compliance/storage-encryption).

true

algorithm

string

The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.

SHA1

key

string

The type of key that is used for data encryption. You can select MaxCompute Default Key or Bring Your Own Key (BYOK) as the key type. If you select MaxCompute Default Key, the default key that is created by MaxCompute is used.

dafault

tunnelQuota

string

The [Tunnel](/help/en/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.

-   Default resource group: The Tunnel shared resource group is used. You cannot use the subscription-based Tunnel resource group for the project. The default resource group is automatically used by the Tunnel service of your project, regardless of the parameter setting.
-   Subscription-based Tunnel resource group: You can use the subscription-based Tunnel resource group for the project.

quota\_tunnel

enableTunnelQuotaRoute

boolean

Indicates whether the routing of the Tunnel resource group is enabled.

-   true: The data transfer tasks that are submitted by the project by default use the Tunnel resource group that is bound to the project.
-   false: The data transfer tasks that are submitted by the project by default use the Tunnel shared resource group.

true

externalProjectProperties

object

The properties of the external project.

isExternalCatalogBound

string

Indicates whether the external project is an external project for [data lakehouse solution 2.0](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).

true

securityProperties

object

The permission properties.

usingAcl

boolean

Indicates whether the [ACL-based access control](/help/en/maxcompute/user-guide/acl-based-access-control) feature is enabled. By default, this feature is enabled.

true

usingPolicy

boolean

Indicates whether the [policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1) feature is enabled. By default, this feature is enabled.

true

objectCreatorHasAccessPermission

boolean

Indicates whether to allow the object creator to have the access permissions on the object. The default value is true, which indicates that the object creator has the access permissions on the object.

true

objectCreatorHasGrantPermission

boolean

Indicates whether the object creator has the authorization permissions on the object. The default value is true, which indicates that the object creator has the authorization permissions on the object.

true

labelSecurity

boolean

Indicates whether the [label-based access control](/help/en/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.

false

enableDownloadPrivilege

boolean

Indicates whether the [download control](/help/en/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.

false

projectProtection

object

The properties of the [data protection mechanism](/help/en/maxcompute/security-and-compliance/project-data-protection).

protected

boolean

Indicates whether the [data protection mechanism](/help/en/maxcompute/security-and-compliance/project-data-protection) is enabled for the project. This allows or denies data transfer across projects. By default, the data protection mechanism is disabled.

true

exceptionPolicy

string

If you enable the project data protection mechanism, you can configure exception or trusted projects. This allows specified users to transfer data of a specified object to a specified project. The project data protection mechanism does not take effect in all the situations that are specified in the exception policy.

{ "Version": "1", "Statement": \[ { "Effect": "Allow", "Principal": "", "Action": \[ "odps:\[, , ...\]" \], "Resource": "acs:odps:\*:", "Condition": { "StringEquals": { "odps:TaskType": \[ "" \] } } } \] }

ipWhiteList

object

The information about the IP address whitelist.

ipList

string

The IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services.

**Note** If you configure only the IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services, the access over the Internet or the network for interconnecting with other Alibaba Cloud services is subject to configurations, and access over a virtual private cloud (VPC) is not allowed.

10.88.111.3

vpcIpList

string

The IP address whitelist for access over a VPC.

**Note** If you configure only the IP address whitelist for access over a VPC, the access over a VPC is subject to configurations, and the access over the Internet or the network for interconnecting with other Alibaba Cloud services is not allowed.

10.88.111.3

saleTag

object

The instance ID and billing method of the default computing quota.

resourceId

string

The instance ID of the default computing quota.

"aaaa-bbbb"

resourceType

string

The billing method of the default computing quota.

"project"

threeTierModel

boolean

Indicates whether data storage by schema is supported. MaxCompute supports the schema feature. This feature allows you to classify objects such as tables, resources, and user-defined functions (UDFs) in a project by schema. You can create multiple schemas in a project. For more information, see [Schema-related operations](/help/en/maxcompute/user-guide/schema-related-operations).

Valid values:

-   true: supported
-   false: not supported

true

marker

string

Indicates the marker after which the returned list begins.

cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==

maxItem

integer

The maximum number of entries returned per page.

10

NextToken

string

A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.

AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb

## Examples

Sample success responses

`JSON`format

```
{
  "requestId": "0b16399216671970335563173e2340",
  "data": {
    "projects": [
      {
        "name": "odps_project",
        "owner": 1139815775606813,
        "type": "managed",
        "comment": "maxcompute projects\n",
        "defaultQuota": "quotaA",
        "status": "AVAILABLE",
        "costStorage": 16489027,
        "regionId": "cn-beijing",
        "createdTime": 1704380838000,
        "properties": {
          "timezone": "Asia/Shanghai\n",
          "retentionDays": 1,
          "allowFullScan": false,
          "typeSystem": 2,
          "enableDecimal2": true,
          "sqlMeteringMax": 1500,
          "tableLifecycle": {
            "type": "optional",
            "value": 37231
          },
          "encryption": {
            "enable": true,
            "algorithm": "SHA1",
            "key": "dafault"
          },
          "tunnelQuota": "quota_tunnel",
          "enableTunnelQuotaRoute": true,
          "externalProjectProperties": {
            "isExternalCatalogBound": true
          }
        },
        "securityProperties": {
          "usingAcl": true,
          "usingPolicy": true,
          "objectCreatorHasAccessPermission": true,
          "objectCreatorHasGrantPermission": true,
          "labelSecurity": false,
          "enableDownloadPrivilege": false,
          "projectProtection": {
            "protected": true,
            "exceptionPolicy": {
              "Version": 1,
              "Statement": [
                {
                  "Effect": "Allow",
                  "Principal": "",
                  "Action": [
                    "odps:[, , ...]"
                  ],
                  "Resource": "acs:odps:*:",
                  "Condition": {
                    "StringEquals": {
                      "odps:TaskType": [
                        ""
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        "ipWhiteList": {
          "ipList": "10.88.111.3",
          "vpcIpList": "10.88.111.3"
        },
        "saleTag": {
          "resourceId": "aaaa-bbbb",
          "resourceType": "project"
        },
        "threeTierModel": true
      }
    ],
    "marker": "cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==",
    "maxItem": 10,
    "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/MaxCompute/2022-01-04/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-09-12

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/ListProjects?updateTime=2024-09-12#workbench-doc-change-demo)

2024-07-31

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/ListProjects?updateTime=2024-07-31#workbench-doc-change-demo)

2024-01-08

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/ListProjects?updateTime=2024-01-08#workbench-doc-change-demo)

2023-11-14

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/ListProjects?updateTime=2023-11-14#workbench-doc-change-demo)

2023-09-21

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/ListProjects?updateTime=2023-09-21#workbench-doc-change-demo)

2023-08-23

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/ListProjects?updateTime=2023-08-23#workbench-doc-change-demo)
