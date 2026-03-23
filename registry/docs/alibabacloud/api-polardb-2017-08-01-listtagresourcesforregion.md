Queries the tags that are attached to resources in a specified region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ListTagResourcesForRegion)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ListTagResourcesForRegion)

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

polardb:ListTagResourcesForRegion

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/*`

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

NextToken

string

No

The token that is used to retrieve the next page of results. Optional for the first request. If the query does not return all results, the response contains a token. You can use this token in the next request to continue the query.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

ResourceType

string

No

The resource type. Valid values:

-   cluster: cluster instance
    
-   aicluster: AI cluster instance
    

cluster

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NextToken

string

If the response does not return all results, this parameter is returned. You can use this token in the next request to continue the query.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

RequestId

string

The request ID.

688C04E4-23F8-409F-8A38-B954D5\*\*\*\*\*\*

TagResources

object

TagResource

array<object>

The information about the clusters and tags.

object

The tagged resource.

ResourceType

string

The resource type. Valid values:

-   cluster: cluster instance
    
-   aicluster: AI cluster instance
    

cluster

TagValue

string

The tag value.

test

ResourceId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

TagKey

string

The tag key.

type

## Examples

Success response

`JSON` format

```
{
  "NextToken": "212db86sca4384811e0b5e8707e******",
  "RequestId": "688C04E4-23F8-409F-8A38-B954D5******",
  "TagResources": {
    "TagResource": [
      {
        "ResourceType": "cluster",
        "TagValue": "test",
        "ResourceId": "pc-****************",
        "TagKey": "type"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ListTagResourcesForRegion#workbench-doc-change-demo) for a complete list.
