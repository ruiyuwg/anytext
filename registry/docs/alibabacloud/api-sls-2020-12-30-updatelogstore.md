Updates the properties of a Logstore.

## Operation description

### Usage notes

-   Before you update a Logstore, call the GetLogStore operation to retrieve the configuration of the Logstore. Then, modify the configuration and pass it to the UpdateLogStore operation.
    
-   The Host in the request syntax consists of a project name and a Simple Log Service (SLS) endpoint. You must specify the project in the Host.
    
-   Obtain an AccessKey pair. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    

An AccessKey pair for an Alibaba Cloud account has permissions on all API operations. This poses a high security risk. We recommend that you create and use a Resource Access Management (RAM) user to make API calls or perform routine O&M. The RAM user must be granted the required permissions to operate SLS resources. For more information, see [Create and authorize a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   Obtain the project name, the Logstore name, and the region where the project resides. For more information, see [Manage projects](/help/en/sls/manage-a-project/) and [Manage Logstores](/help/en/sls/manage-a-logstore).
    

### Authorization

The following table describes the authorization required for this operation. To grant a RAM user or RAM role permission to call this operation, add the required action to the Action element of a RAM policy.

Action

Resource description in an authorization policy

`log:UpdateLogStore`

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/UpdateLogStore)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/UpdateLogStore)

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

log:UpdateLogStore

update

\*LogStore

`acs:log:{#regionId}:{#accountId}:project/{#project}/logstore/{#logstore}`

-   log:TLSVersion
-   log:Encrypted

None

## Request syntax

```
PUT /logstores/{logstore} HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

logstore

string

Yes

The name of the Logstore.

test-logstore

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

ali-test-project

body

object

Yes

The request body.

logstoreName

string

Yes

The name of the Logstore.

test-logstore

shardCount `deprecated`

integer

No

The number of shards.

**Note**

You cannot update the number of shards with this operation. To change the number of shards, call the SplitShard or MergeShards operation.

2

ttl

integer

Yes

The data retention period. Unit: days. Valid values: 1 to 3650. If you set this parameter to 3650, the data is permanently retained.

30

encrypt\_conf

[EncryptConf](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-encryptconf)

No

The encryption configuration.

autoSplit

boolean

No

Specifies whether to automatically split a shard.

-   true: automatically splits a shard.
    
-   false: does not automatically split a shard.
    

true

enable\_tracking

boolean

No

Specifies whether to enable web tracking. Default value: false.

-   true: enables web tracking.
    
-   false: does not enable web tracking.
    

false

appendMeta

boolean

No

Specifies whether to record public IP addresses. Default value: false.

-   true: records public IP addresses.
    
-   false: does not record public IP addresses.
    

false

maxSplitShard

integer

No

The maximum number of shards to which a shard can be split. The value must be an integer from 1 to 256.

**Note**

This parameter is required if autoSplit is set to true.

64

telemetryType `deprecated`

string

No

The type of observable data. Valid values:

-   None: logs. This is the default value.
    
-   Metrics: metrics.
    

None

hot\_ttl

integer

No

The retention period of data in the hot tier of the Logstore. Minimum value: 7. Unit: days. Valid values: 7 to 3000. After the retention period of the hot tier ends, the data is moved to the Infrequent Access (IA) storage class. For more information, see [Automatic Storage Tiering](/help/en/sls/enable-hot-and-cold-tiered-storage-for-a-logstore).

60

mode

string

No

SLS provides two types of Logstores: Standard and Query.

-   **standard**: supports one-stop data analytics. This type of Logstore is suitable for scenarios such as real-time monitoring, interactive analysis, and building a complete observability system.
    
-   **query**: supports high-performance queries. The index traffic cost of a Query Logstore is about half that of a Standard Logstore. However, a Query Logstore does not support SQL analysis. This type of Logstore is suitable for scenarios that involve large data volumes, long retention periods of weeks or months, and no log analysis.
    

standard

infrequentAccessTTL

integer

No

The retention period for data in the IA storage class. Data in this storage class has no minimum retention period. Data must be stored for at least 30 days before it is moved to Archive storage.

30

shardingPolicy

[ShardingPolicy](/help/en/sls/developer-reference/api-sls-2020-12-30-shardingpolicy)

No

The hash-based write configuration.

## Response elements

**Element**

**Type**

**Description**

**Example**

None defined.

## Examples

Success response

`JSON` format

```
{}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/UpdateLogStore#workbench-doc-change-demo) for a complete list.
