Detaches tags from a PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/UntagResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/UntagResources)

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

polardb:UntagResources

delete

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

None

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

The region ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view available regions.

cn-hangzhou

ResourceType

string

Yes

The resource type. Set the value to **cluster**.

cluster

All

boolean

No

Specifies whether to detach all tags. Valid values: **true** and **false**. Default value: **false**.

**Note**

This parameter takes effect only when the `TagKey.n` parameter is empty.

true

ResourceId

array

Yes

The ID of the target cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

string

No

The ID of the target cluster. To detach tags from multiple clusters at the same time, click **Add** to add more cluster IDs.

**Note**

You can detach tags from up to 50 clusters at a time.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

TagKey

array

No

The tag key.

type

string

No

The tag key. To detach multiple tags from a cluster at once, click **Add** to add more tag keys.

**Note**

You can add up to 20 tag keys at a time.

type

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2D69A58F-345C-4FDE-88E4-BF5189\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2D69A58F-345C-4FDE-88E4-BF5189******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NumberExceed.Tags

The Tags parameter\`s number is exceed.

The maximum number of tags is reached.

400

InvalidTagKey.Malformed

The specified parameter TagKey.n is not valid.

The specified TagKey.n parameter is invalid.

400

InvalidParameter.TagKeysOrAll

The specified parameter TagKeys or All is not valid.

The parameter of the key of the tag or the parameter of whether to delete all tags of the resource is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/UntagResources#workbench-doc-change-demo) for a complete list.
