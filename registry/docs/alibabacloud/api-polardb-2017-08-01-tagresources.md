Adds tags to PolarDB clusters.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/TagResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/TagResources)

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

polardb:TagResources

create

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/{#resource-id}`

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

cn-hangzhou

ResourceType

string

Yes

The resource type. Set the value to **cluster**.

cluster

ResourceId

array

Yes

The ID of the target cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

string

No

The ID of a target cluster. To add tags to multiple clusters at once, click **Add** to specify multiple cluster IDs.

**Note**

You can add tags to a maximum of 50 clusters at a time.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Tag

array<object>

Yes

The list of tags.

object

No

Key

string

No

The tag key. To add multiple tags to the cluster at once, click **Add** to specify multiple tag keys.

**Note**

You can add a maximum of 20 tag pairs at a time. `Tag.n.Key` corresponds to `Tag.n.Value`.

type

Value

string

No

The tag value. To add multiple tags to the cluster at once, click **Add** to specify multiple tag values.

**Note**

You can add a maximum of 20 tag pairs at a time. `Tag.n.Value` corresponds to `Tag.n.Key`.

test

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

1CB5286F-AF5A-4E09-BFE9-588D4C\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CB5286F-AF5A-4E09-BFE9-588D4C******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NumberExceed.Tags

The number of tags is exceed , Valid : 20

The tag number cannot exceed 20.

400

InvalidTagKey.Malformed

The specified parameter TagKey.n is not valid.

The specified TagKey.n parameter is invalid.

400

Duplicate.TagKey

The specified parameter Tag.n.Key is duplicated.

The specified Tag.n.Key parameter is the same as an existing tag key.

400

InvalidTagValue.Malformed

The specified parameter Tag.n.Value is not valid.

The specified Tag.n.Value parameter is invalid.

400

InvalidParameter.ResourceId

The specified parameter ResourceId.n is not valid.

The specified ResourceId.n parameter is invalid.

400

NumberExceed.ResourceIds

The ResourceIds parameter's number is exceed.

The number of ResourceIds parameters exceeds the limit.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/TagResources#workbench-doc-change-demo) for a complete list.
