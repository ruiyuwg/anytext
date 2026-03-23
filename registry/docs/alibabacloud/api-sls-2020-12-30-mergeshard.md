Merges adjacent read/write shards.

## Operation description

### API description

-   The host consists of the project name and the Simple Log Service endpoint. You must specify the project in the host.
    
-   Each shard has a range, which is a left-closed, right-open MD5 interval of `[BeginKey,EndKey)`. The status of a shard can be readwrite or readonly. You can split and merge shards. For more information, see [Shards](/help/en/sls/shard).
    
-   You must have an AccessKey pair. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    

An AccessKey pair for an Alibaba Cloud account has access permissions for all APIs. This poses a high security threat. We recommend that you create and use a RAM user for API calls or routine O&M. The RAM user must have the required permissions to manage Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   You must have the project name, region, and Logstore name for the logs that you want to query. For more information, see [Manage projects](/help/en/sls/manage-a-project/) and [Manage Logstores](/help/en/sls/manage-a-logstore).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/MergeShard)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/MergeShard)

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

log:MergeShard

update

\*LogStore

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`

-   log:TLSVersion

None

## Request syntax

```
POST /logstores/{logstore}/shards/{shard}?action=merge HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The project name.

ali-test-project

logstore

string

Yes

The Logstore name.

ali-test-logstore

shard

integer

Yes

The shard ID.

3

## Response elements

**Element**

**Type**

**Description**

**Example**

array

The data structure of the shard.

[shard](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-shard)

An array that consists of three shard elements. The first element is the shard after the merge. The other two elements are the shards before the merge.

## Examples

Success response

`JSON` format

```
[
  {
    "shardID": 0,
    "status": "readwrite",
    "inclusiveBeginKey": "00000000000000000000000000000000",
    "exclusiveEndKey": "8000000000000000000000000000000",
    "serverIp": "203.0.113.10",
    "createTime": 1524222931
  }
]
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/MergeShard#workbench-doc-change-demo) for a complete list.
