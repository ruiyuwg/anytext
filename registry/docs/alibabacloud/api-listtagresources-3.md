Queries the tags that are attached to one or more PolarDB clusters, or the PolarDB clusters that are attached to one or more tags.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ListTagResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ListTagResources)

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

polardb:ListTagResources

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

The region ID. You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view the available region IDs.

cn-hangzhou

ResourceType

string

Yes

The resource type. Set the value to **cluster**.

cluster

NextToken

string

No

A token to retrieve the next page of results. You do not need to specify this parameter for the first request. If the first request does not return all results, the response returns a token. You can use this token in the next request to continue the query.

212db86sca4384811e0b5e8707\*\*\*\*\*\*\*

ResourceId

array

No

The ID of a cluster. You can specify multiple cluster IDs to query the tags of multiple clusters.

**Note**

-   You must specify either the `ResourceId.N` parameter or the `Tag.N.Key` parameter.
    
-   If you specify the `ResourceId.N` parameter, you can add up to 50 cluster IDs.
    

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

string

No

The ID of a cluster. You can specify multiple cluster IDs to query the tags of multiple clusters.

**Note**

-   You must specify either the `ResourceId.N` parameter or the `Tag.N.Key` parameter.
    
-   If you specify the `ResourceId.N` parameter, you can add up to 50 cluster IDs.
    

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Tag

array<object>

No

The list of tags.

object

No

Key

string

No

The key of a tag. You can specify multiple tags to query for resources that have all of the specified tags.

**Note**

-   You must specify either the `ResourceId.N` parameter or the `Tag.N.Key` parameter.
    
-   If you specify the `Tag.N.Key` parameter, you can add up to 20 tag pairs.
    

type

Value

string

No

The tag value that corresponds to the tag key. An empty string is allowed.

test

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NextToken

string

A token to retrieve more results. This parameter is returned if a query does not return all results. You can use the token in a subsequent query to continue retrieving results.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

RequestId

string

The request ID.

688C04E4-23F8-409F-8A38-B954D5\*\*\*\*\*\*

TagResources

object

TagResource

array<object>

The information about the queried clusters and tags.

object

ResourceType

string

The resource type. The value is **cluster**.

cluster

TagValue

string

The tag value that corresponds to the tag key.

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

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NumberExceed.Tags

The Tags parameter\`s number is exceed.

The maximum number of tags is reached.

400

MissParameter.TagOrResourceId

The parameter Tag.n or ResourceId.n is needed.

The Tag.n or ResourceId.n parameter must be specified.

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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ListTagResources#workbench-doc-change-demo) for a complete list.
