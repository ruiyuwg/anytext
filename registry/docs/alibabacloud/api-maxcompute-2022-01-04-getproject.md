Queries the basic information about a MaxCompute project.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/MaxCompute/2022-01-04/GetProject)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/MaxCompute/2022-01-04/GetProject)

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

odps:GetProject

get

\*Project

`acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}`

None

None

## Request syntax

```
GET /api/v1/projects/{projectName} HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

projectName

string

Yes

The project name.

odps\_project

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

verbose

boolean

No

Specifies whether to include additional information, such as securityProperties and superAdmins.

true

withStorageTierInfo

boolean

No

Specifies whether to include additional information, such as properties.storageTierInfo.

true

withQuotaProductType

boolean

No

Specifies whether to include additional information, such as productType.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

requestId

string

The request ID.

0b87b7b316643495896551555e855b

httpCode

integer

The HTTP status code.

-   1xx: Informational response. The request is received and is being processed.
    
-   2xx: Success. The request is successfully received, understood, and accepted by the server.
    
-   3xx: Redirection. The request is redirected, and further actions are required to complete the request.
    
-   4xx: Client error. The request contains invalid request parameters or syntax, or specific request conditions cannot be met.
    
-   5xx: Server error. The server cannot fulfill the request for other reasons.
    

200

errorCode

string

The error code.

OBJECT\_NOT\_EXIST

errorMsg

string

The error message.

This object does not exist.

data

object

The data returned.

name

string

The project name.

odps\_project

owner

string

The account information of the project owner.

ALIYUN$odps\*\*\*\*@aliyunid.com

type

string

The project type. Valid values:

-   **managed**: an internal project.
    
-   **external**: an external project.
    

managed

comment

string

The project description.

BI\_Analysis

defaultQuota

string

The default computing quota. Quotas are used for resource allocation. If you do not specify a computing quota, jobs that are initiated in the project consume resources from the default quota. For more information, see [Use of computing resources](/help/en/maxcompute/user-guide/use-of-computing-resources).

os\_PayAsYouGoQuota

status

string

The project status. Valid values:

-   **AVAILABLE**: Normal
    
-   **READONLY**: read-only
    
-   **FROZEN**: frozen
    
-   **DELETING**: being deleted
    

AVAILABLE

productType

string

The billing method of the default computing quota.

PayAsYouGo

threeTierModel

boolean

Specifies whether data storage by schema is supported. MaxCompute supports schemas. A schema is an object in a project. It is used to classify objects such as tables, resources, and user-defined functions (UDFs). You can create multiple schemas in a project. For more information, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).

true

costStorage

string

The total storage usage. This value indicates the logical storage size after data is collected and compressed for the project. The storage usage is the same as the usage for billing.

16489027

regionId

string

The region ID.

cn-beijing

createdTime

integer

The time when the project was created.

1704380838000

properties

object

The basic properties of the project.

timezone

string

The time zone of the project. This parameter corresponds to the `odps.sql.timezone` property.

Asia/Shanghai

retentionDays

integer

The retention period of backup data. Unit: days. During this period, you can restore the current data version to any backup version. The value can be an integer from 0 to 30. The default value is 1. A value of 0 indicates that the backup feature is disabled.

1

allowFullScan

boolean

Specifies whether to allow a full table scan in the project. A full table scan consumes a large amount of resources and reduces processing efficiency. By default, this feature is disabled.

false

typeSystem

string

The data type edition. Valid values:

-   **1**: V1.0
    
-   **2**: V2.0
    
-   **hive**: Hive-compatible
    

For more information, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions).

2.0

enableDecimal2

boolean

Specifies whether to enable the DECIMAL data type of MaxCompute V2.0 for the project.

true

sqlMeteringMax

string

The maximum consumption threshold of a single SQL statement. Formula: Amount of scanned data (GB) × Complexity.

1500

tableLifecycle

object

The lifecycle properties of the table.

type

string

The lifecycle type. Valid values:

-   **mandatory**: The Lifecycle clause is required. You must set a lifecycle for the table.
    
-   **optional**: The Lifecycle clause is optional when you create a table. If you do not set a lifecycle for the table, the table is permanently valid.
    
-   **inherit**: If you do not set a lifecycle for a table when you create it, the lifecycle of the table is the value of odps.table.lifecycle.value.
    

optional

value

string

The lifecycle of the table. Unit: days. The value can be an integer from 1 to 37231. The default value is 37231.

37231

encryption

object

The storage encryption properties.

enable

boolean

Specifies whether to enable data encryption for the project. For more information, see [Storage encryption](/help/en/maxcompute/security-and-compliance/storage-encryption).

true

algorithm

string

The data encryption algorithm. Supported algorithms include AES256, AESCTR, and RC4.

AES256

key

string

The type of key used for data encryption. Valid values include MaxCompute Default Key and Bring-Your-Own-Key (BYOK). MaxCompute Default Key is a default key created within MaxCompute.

dafault

tunnelQuota

string

The [Data Transmission Service](/help/en/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.

-   Default (shared Data Transmission Service resource group): The project cannot use a subscription Data Transmission Service resource group. Regardless of the value of the default Data Transmission Service resource group, the Data Transmission Service automatically uses the Default resource group for data transmission tasks that are submitted by default in the project.
    
-   Subscription Data Transmission Service resource group: The project can use a subscription Data Transmission Service resource group.
    

Default

elderTunnelQuota

string

The parent resource group of the Data Transmission Service resource group that is bound to the project. This parameter is for internal use.

Default\_p

enableTunnelQuotaRoute

boolean

Specifies whether to enable routing for the Data Transmission Service resource group.

-   true: The data transmission tasks that are submitted by default in the project use the Data Transmission Service resource group that is bound to the project.
    
-   false: The data transmission tasks that are submitted by default in the project use the shared Data Transmission Service resource group.
    

true

storageTierInfo

object

The [tiered storage](/help/en/maxcompute/user-guide/tiered-storage) information.

storageTierSize

object

The [tiered storage](/help/en/maxcompute/user-guide/tiered-storage) information.

standardSize

integer

The Standard storage usage.

27649172

longTermSize

integer

The long-term storage usage.

21764917

lowFrequencySize

integer

The IA storage class usage.

767693

projectTotalSize

integer

The total storage usage.

56066037

projectBackupSize

integer

The backup storage size.

86672917

fdcQuota

string

The quota for external table caching.

fdc\_quota

enableFdcCacheForce

boolean

Specifies whether to forcefully enable external table caching.

true

enableTieredStorage

boolean

Specifies whether to enable [tiered storage](/help/en/maxcompute/user-guide/tiered-storage).

true

tableLifecycleConfig

object

The properties of the [tiered storage lifecycle rule](/help/en/maxcompute/user-guide/tiered-storage). After you set these properties, the system automatically triggers the conversion of storage classes based on the rule.

TierToLongterm

object

The identifier for the long-term storage class.

DaysAfterLastModificationGreaterThan

integer

The number of days after the data was last modified. After this period, the storage class is automatically changed. This corresponds to the `LastModifiedTime` of the table or partition.

180

DaysAfterLastAccessGreaterThan

integer

The number of days after the data was last accessed. After this period, the storage class is automatically changed. This corresponds to the `LastAccessTime` of the table or partition.

**Note**

If the LastAccessTime of the table or partition is empty:

-   For tables or partitions that were created before October 1, 2023, the last access time is considered 00:00:00 on October 1, 2023 (UTC+0).
    
-   For tables or partitions that were created on or after October 1, 2023, if the data has not been accessed, the creation time of the table or partition is considered the last access time.
    

180

DaysAfterLastTierModificationGreaterThan

integer

The number of days after the storage class was last changed.

1

TierToLowFrequency

object

The identifier for the IA storage class.

DaysAfterLastModificationGreaterThan

integer

The number of days after the data was last modified. After this period, the storage class is automatically changed. This corresponds to the `LastModifiedTime` of the table or partition.

30

DaysAfterLastAccessGreaterThan

integer

The number of days after the data was last accessed. After this period, the storage class is automatically changed. This corresponds to the `LastAccessTime` of the table or partition.

**Note**

If the LastAccessTime of the table or partition is empty:

-   For tables or partitions that were created before October 1, 2023, the last access time is considered 00:00:00 on October 1, 2023 (UTC+0).
    
-   For tables or partitions that were created on or after October 1, 2023, if the data has not been accessed, the creation time of the table or partition is considered the last access time.
    

30

DaysAfterLastTierModificationGreaterThan

integer

The number of days after the storage class was last changed.

1

externalProjectProperties

object

The properties of the external project.

isExternalCatalogBound

string

Specifies whether the project is an external project of [data lakehouse 2.0](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).

true

tableFormat

string

warehouse

string

foreignServerName

string

foreignServerType

string

externalCatalogId

string

enableAutoMv

boolean

autoMvQuotaGb

integer

enableDr

boolean

superAdmins

array

The list of members that are assigned the `Super_Administrator` role in the project.

string

The account information of a member that is assigned the `Super_Administrator` role in the project.

RAM$odps\*\*\*\*@aliyunid.com:RAM\_USER

securityProperties

object

The permission properties.

usingAcl

boolean

Specifies whether to use the [ACL-based access control](/help/en/maxcompute/user-guide/acl-based-access-control) feature. By default, this feature is enabled.

true

usingPolicy

boolean

Specifies whether to use the [policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1) feature. By default, this feature is enabled.

true

objectCreatorHasAccessPermission

boolean

Specifies whether the creator of an object has access permissions on the object. Default value: true.

true

objectCreatorHasGrantPermission

boolean

Specifies whether the creator of an object has grant permissions on the object. Default value: true.

true

labelSecurity

boolean

Specifies whether to use the [label-based access control](/help/en/maxcompute/user-guide/label-based-access-control) feature. By default, this feature is disabled.

false

enableDownloadPrivilege

boolean

Specifies whether to use the [download control](/help/en/maxcompute/user-guide/download-control) feature. By default, this feature is disabled.

false

projectProtection

object

The properties of the [data protection mechanism](/help/en/maxcompute/security-and-compliance/project-data-protection).

exceptionPolicy

string

If data protection is enabled for a project, you can configure an exception policy to specify exception or trusted projects. This policy allows specified users to transfer data from a specified object to a specified project. The data protection mechanism does not apply to the scenarios described in the exception policy.

{ "Version": "1", "Statement": \[ { "Effect": "Allow", "Principal": "", "Action": \[ "odps:\[, , ...\]" \], "Resource": "acs:odps:\*:", "Condition": { "StringEquals": { "odps:TaskType": \[ "" \] } } } \] }

protected

boolean

Specifies whether to enable the [data protection mechanism](/help/en/maxcompute/security-and-compliance/project-data-protection) for the project to prohibit or allow data to flow out of the project. By default, this mechanism is disabled.

true

ipWhiteList

object

The IP address whitelist.

ipList

string

The IP address whitelist for access over the Internet or a network that is used to interconnect with other Alibaba Cloud services.

**Note**

If you configure only this IP address whitelist, access over the Internet or the network that is used to interconnect with other Alibaba Cloud services is restricted based on the configuration, and access over a VPC is prohibited.

10.88.111.3

vpcIpList

string

The IP address whitelist for access over a VPC.

**Note**

If you configure only this IP address whitelist, access over a VPC is restricted based on the configuration, and access over the Internet or a network that is used to interconnect with other Alibaba Cloud services is prohibited.

10.88.111.3

saleTag

object

The instance ID and billing method of the default computing quota.

resourceId

string

The instance ID of the default computing quota.

b7afb7d1-\*\*\*\*-\*\*\*\*-\*\*\*\*-c393669c307b

resourceType

string

The billing method of the default computing quota.

PayAsYouGo

## Examples

Success response

`JSON` format

```
{
  "requestId": "0b87b7b316643495896551555e855b",
  "httpCode": 200,
  "errorCode": "OBJECT_NOT_EXIST",
  "errorMsg": "This object does not exist.",
  "data": {
    "name": "odps_project",
    "owner": "ALIYUN$odps****@aliyunid.com",
    "type": "managed",
    "comment": "BI_Analysis",
    "defaultQuota": "os_PayAsYouGoQuota",
    "status": "AVAILABLE",
    "productType": "PayAsYouGo",
    "threeTierModel": true,
    "costStorage": "16489027",
    "regionId": "cn-beijing",
    "createdTime": 1704380838000,
    "properties": {
      "timezone": "Asia/Shanghai",
      "retentionDays": 1,
      "allowFullScan": false,
      "typeSystem": "2.0",
      "enableDecimal2": true,
      "sqlMeteringMax": "1500",
      "tableLifecycle": {
        "type": "optional",
        "value": "37231"
      },
      "encryption": {
        "enable": true,
        "algorithm": "AES256",
        "key": "dafault"
      },
      "tunnelQuota": "Default",
      "elderTunnelQuota": "Default_p",
      "enableTunnelQuotaRoute": true,
      "storageTierInfo": {
        "storageTierSize": {
          "standardSize": 27649172,
          "longTermSize": 21764917,
          "lowFrequencySize": 767693
        },
        "projectTotalSize": 56066037,
        "projectBackupSize": 86672917
      },
      "fdcQuota": "fdc_quota",
      "enableFdcCacheForce": true,
      "enableTieredStorage": true,
      "tableLifecycleConfig": {
        "TierToLongterm": {
          "DaysAfterLastModificationGreaterThan": 180,
          "DaysAfterLastAccessGreaterThan": 180,
          "DaysAfterLastTierModificationGreaterThan": 1
        },
        "TierToLowFrequency": {
          "DaysAfterLastModificationGreaterThan": 30,
          "DaysAfterLastAccessGreaterThan": 30,
          "DaysAfterLastTierModificationGreaterThan": 1
        }
      },
      "externalProjectProperties": {
        "isExternalCatalogBound": "true",
        "tableFormat": "",
        "warehouse": "",
        "foreignServerName": "",
        "foreignServerType": "",
        "externalCatalogId": ""
      },
      "enableAutoMv": false,
      "autoMvQuotaGb": 0,
      "enableDr": false
    },
    "superAdmins": [
      "RAM$odps****@aliyunid.com:RAM_USER\n"
    ],
    "securityProperties": {
      "usingAcl": true,
      "usingPolicy": true,
      "objectCreatorHasAccessPermission": true,
      "objectCreatorHasGrantPermission": true,
      "labelSecurity": false,
      "enableDownloadPrivilege": false,
      "projectProtection": {
        "exceptionPolicy": "{\n      \"Version\": \"1\",\n      \"Statement\": [\n            {\n                  \"Effect\": \"Allow\",\n                  \"Principal\": \"\",\n                  \"Action\": [\n                        \"odps:[, , ...]\"\n                  ],\n                  \"Resource\": \"acs:odps:*:\",\n                  \"Condition\": {\n                        \"StringEquals\": {\n                              \"odps:TaskType\": [\n                                    \"\"\n                              ]\n                        }\n                  }\n            }\n      ]\n}",
        "protected": true
      }
    },
    "ipWhiteList": {
      "ipList": "10.88.111.3",
      "vpcIpList": "10.88.111.3"
    },
    "saleTag": {
      "resourceId": "b7afb7d1-****-****-****-c393669c307b",
      "resourceType": "PayAsYouGo"
    }
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/MaxCompute/2022-01-04/GetProject#workbench-doc-change-demo) for a complete list.
