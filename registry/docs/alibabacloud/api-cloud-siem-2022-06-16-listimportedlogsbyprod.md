Queries the log ingestion details for a specific product.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/cloud-siem/2022-06-16/ListImportedLogsByProd)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/cloud-siem/2022-06-16/ListImportedLogsByProd)

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

yundun-sas:ListImportedLogsByProd

list

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProdCode

string

Yes

The code of the product.

qcloud\_waf

CloudCode

string

Yes

The multicloud code. Valid values:

-   qcloud: Tencent Cloud.
    
-   aliyun: Alibaba Cloud.
    
-   hcloud: Huawei Cloud.
    

hcloud

RoleType

integer

No

The view type.

-   0: The view of the current Alibaba Cloud account.
    
-   1: The view of all accounts within the enterprise.
    

1

RoleFor

integer

No

The user ID that the administrator uses to switch to the perspective of a member.

113091674488\*\*\*\*

RegionId

string

No

The region where the Data Management hub of threat analysis is deployed. Select the region where your assets are located. Valid values:

-   cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
    
-   ap-southeast-1: Your assets are outside China.
    

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

CloudSiemSuccessResponse<List\>

Data

array<object>

The data returned.

object

The data returned.

ProdCode

string

The code of the product to which the log belongs.

qcloud\_waf

LogCode

string

The code of the log.

cloud\_siem\_waf\_xxxxx

LogMdsCode

string

The display code of the log.

${siem.prod. cloud\_siem\_waf\_xxxxx}

ImportedUserCount

integer

The number of users who have ingested the log.

2

UnImportedUserCount

integer

The number of users who have not ingested the log.

3

TotalUserCount

integer

The total number of users for the log.

5

ModifyTime

string

The time when the log was last ingested.

2023-11-23 12:30:00

Imported

integer

Indicates whether the log is ingested. Valid values:

-   1: The log is ingested.
    
-   0: The log is not ingested.
    

2023-11-23 12:30:00

AutoImported

integer

Indicates whether logs are automatically ingested for new accounts. Valid values:

-   1: Logs are automatically ingested.
    
-   0: Logs are not automatically ingested.
    

2023-11-23 12:30:00

LogType

integer

The log type. Valid values:

-   1: Ingested on the threat analysis side.
    
-   2: Predefined Simple Log Service log. -3: Custom Simple Log Service log.
    

2023-11-23 12:30:00

CloudCode

string

The multicloud code. Valid values:

-   qcloud: Tencent Cloud.
    
-   aliyun: Alibaba Cloud.
    
-   hcloud: Huawei Cloud.
    

hcloud

RequestId

string

The request ID.

6276D891-\*\*\*\*\*-55B2-87B9-74D413F7\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "Data": [
    {
      "ProdCode": "qcloud_waf",
      "LogCode": "cloud_siem_waf_xxxxx",
      "LogMdsCode": "${siem.prod. cloud_siem_waf_xxxxx}",
      "ImportedUserCount": 2,
      "UnImportedUserCount": 3,
      "TotalUserCount": 5,
      "ModifyTime": "2023-11-23 12:30:00",
      "Imported": 0,
      "AutoImported": 0,
      "LogType": 0,
      "CloudCode": "hcloud"
    }
  ],
  "RequestId": "6276D891-*****-55B2-87B9-74D413F7****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalError

The request processing has failed due to some unknown error.

See [Error Codes](https://api.alibabacloud.com/document/cloud-siem/2022-06-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/cloud-siem/2022-06-16/ListImportedLogsByProd#workbench-doc-change-demo) for a complete list.
