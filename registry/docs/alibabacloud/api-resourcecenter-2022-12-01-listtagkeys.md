Queries the tag keys of resources within the current account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListTagKeys)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListTagKeys)

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

tag:ListTagKeys

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

MaxResults

integer

No

The maximum number of entries to return on each page.

Valid values: 1 to 100.

Default value: 20.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.

AAAAAUYb00R0gHZBE8FVDeoh2ME93VeeEPUHs\*\*\*\*

TagKey

string

No

The tag key.

test\_key

MatchType

string

No

The matching mode. Valid values:

-   Equals: equal match
    
-   Prefix: match by prefix
    

Equals

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

AAAAAUDnubHKJbVTCdlIGYUPtsu3EoN3bfdgjDA\*\*\*\*

RequestId

string

The ID of the request.

44C8A952-D6B0-5BC8-82D5-93BA02E26F2E

TagKeys

array

The tag keys.

string

A tag key.

test\_key

## Examples

Success response

`JSON` format

```
{
  "NextToken": "AAAAAUDnubHKJbVTCdlIGYUPtsu3EoN3bfdgjDA****",
  "RequestId": "44C8A952-D6B0-5BC8-82D5-93BA02E26F2E",
  "TagKeys": [
    "test_key"
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The MaxResults parameter is invalid.

409

InvalidParameter.MatchType

The specified parameter MatchType is not valid.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ListTagKeys#workbench-doc-change-demo) for a complete list.
