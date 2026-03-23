Call the ListTransitRouterRouteTables operation to query the route tables associated with an Enterprise Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterRouteTables)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterRouteTables)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:ListTransitRouterRouteTables

get

TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/{#centransitrouterroutetableId}`

TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/*`

TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/{#centransitrouterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

MaxResults

integer

No

The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.

20

NextToken

string

No

The token that is used for the next query. Valid values:

-   If this is your first query or no next query is to be sent, do not specify this parameter.
    
-   If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
    

dd20\*\*\*\*

TransitRouterRouteTableType

string

No

The type of the route table. Valid values:

-   **Custom**: a custom route table.
    
-   **System**: the default route table.
    

Custom

TransitRouterId

string

No

The ID of the Enterprise Edition transit router.

tr-uf654ttymmljlvh2x\*\*\*\*

TransitRouterRouteTableStatus

string

No

The status of the route table. Valid values:

-   **Creating**: The route table is being created.
    
-   **Deleting**: The route table is being deleted.
    
-   **Active**: The route table is available.
    

Active

TransitRouterRouteTableNames

array

No

The name of the route table.

You can query multiple route tables at a time. The maximum value of **N** is **20**.

**Note**

If you query route tables using both **TransitRouterRouteTableNames.N** and **TransitRouterRouteTableIds.N**, make sure that the names and IDs match.

testname

string

No

The name of the route table.

You can query multiple route tables at a time. The maximum value of **N** is **20**.

**Note**

If you query route tables using both **TransitRouterRouteTableNames.N** and **TransitRouterRouteTableIds.N**, make sure that the names and IDs match.

testname

TransitRouterRouteTableIds

array

No

The ID of the route table.

You can query multiple route tables at a time. The maximum value of **N** is **20**.

vtb-bp1l8awdb4iuo9uwu\*\*\*\*

string

No

The ID of the route table.

You can query multiple route tables at a time. The maximum value of **N** is **20**.

vtb-bp1dudbh2d5na6b50\*\*\*\*

Tag

array<object>

No

The tag.

You can specify up to 20 tags.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://` .

You can specify up to 20 tag keys.

test

Value

string

No

The tag value.

The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://` .

Each tag key must have a corresponding tag value. You can specify up to 20 tag values.

test

RouteTableOptions

object

No

The features of the route table.

MultiRegionECMP

string

No

The multi-region equal-cost multi-path (ECMP) routing feature. Valid values:

-   **disable**: Disables multi-region ECMP routing. After this feature is disabled, for routes that are learned from different regions and have the same prefix and other attributes, the system selects the transit router with the smallest region ID as the next hop. Region IDs are sorted in alphabetical order. This changes the latency and bandwidth consumption between different regions. Make sure that you fully evaluate the impact before you disable the feature.
    
-   **enable**: Enables multi-region ECMP routing. After this feature is enabled, for routes that are learned from different regions and have the same prefix and other attributes, ECMP routing is formed. This changes the latency and bandwidth consumption between different regions. Make sure that you fully evaluate the impact before you enable the feature.
    

disable

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response that was returned.

NextToken

string

The token that is used for the next query. Valid values:

-   If **NextToken** is empty, it indicates that no next query is to be sent.
    
-   If a value is returned for **NextToken**, the value is the token that is used for the next query.
    

dd20\*\*\*\*

RequestId

string

The request ID.

82678F4A-C9F7-4CC1-8BF0-D619A63BFC57

TotalCount

integer

The total number of entries returned.

1

MaxResults

integer

The number of entries returned per page.

20

TransitRouterRouteTables

array<object>

The list of route tables.

object

TransitRouterRouteTableStatus

string

The status of the route table.

-   **Creating**: The route table is being created.
    
-   **Deleting**: The route table is being deleted.
    
-   **Active**: The route table is available.
    

Active

TransitRouterRouteTableType

string

The type of the route table.

-   **Custom**: a custom route table.
    
-   **System**: the default route table.
    

System

CreateTime

string

The time when the route table was created.

The time is displayed in the YYYY-MM-DDThh:mmZ format in UTC.

2021-03-15T09:39Z

TransitRouterRouteTableId

string

The route table ID.

vtb-bp1dudbh2d5na6b50\*\*\*\*

TransitRouterRouteTableName

string

The name of the route table.

testname

TransitRouterRouteTableDescription

string

The description of the route table.

testdesc

Tags

array<object>

The list of tags.

object

Key

string

The tag key.

test

Value

string

The tag value.

test

RouteTableOptions

object

The features of the route table.

MultiRegionECMP

string

The multi-region ECMP routing feature. Valid values:

-   **disable**: Disables multi-region ECMP routing. After this feature is disabled, for routes that are learned from different regions and have the same prefix and other attributes, the system selects the transit router with the smallest region ID as the next hop. Region IDs are sorted in alphabetical order. This changes the latency and bandwidth consumption between different regions. Make sure that you fully evaluate the impact before you disable the feature.
    
-   **enable**: Enables multi-region ECMP routing. After this feature is enabled, for routes that are learned from different regions and have the same prefix and other attributes, ECMP routing is formed. This changes the latency and bandwidth consumption between different regions. Make sure that you fully evaluate the impact before you enable the feature.
    

disable

RegionId

string

The ID of the region where the Enterprise Edition transit router is deployed.

cn-beijing

TransitRouterId

string

The ID of the transit router.

tr-8vb8bie2koduo5awz\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "dd20****",
  "RequestId": "82678F4A-C9F7-4CC1-8BF0-D619A63BFC57",
  "TotalCount": 1,
  "MaxResults": 20,
  "TransitRouterRouteTables": [
    {
      "TransitRouterRouteTableStatus": "Active",
      "TransitRouterRouteTableType": "System",
      "CreateTime": "2021-03-15T09:39Z",
      "TransitRouterRouteTableId": "vtb-bp1dudbh2d5na6b50****",
      "TransitRouterRouteTableName": "testname",
      "TransitRouterRouteTableDescription": "testdesc",
      "Tags": [
        {
          "Key": "test",
          "Value": "test"
        }
      ],
      "RouteTableOptions": {
        "MultiRegionECMP": "disable"
      },
      "RegionId": "cn-beijing",
      "TransitRouterId": "tr-8vb8bie2koduo5awz****"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.NextToken

NextToken is illegal

The error message returned because the NextToken parameter is set to an invalid value.

400

InvalidTransitRouterId.NotFound

TransitRouterId is not found.

The error message returned because the ID of the transit router does not exist.

400

IllegalParam.TagValue

The tag values are not valid.

The error message returned because the specified tag value is invalid.

400

IllegalParam.TagKey

The tag keys are not valid.

The error message returned because the specified tag key is invalid.

400

MissingParam.TransitRouterIdOrTransitRouterRouteTables

Either TransitRouterId or TransitRouterRouteTables must be specified.

The error message returned because you must set at least one of the TransitRouterId and TransitRouterRouteTables parameters.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterRouteTables#workbench-doc-change-demo) for a complete list.
