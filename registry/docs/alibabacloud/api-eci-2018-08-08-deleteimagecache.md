You can call this operation to delete an image cache.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eci/2018-08-08/DeleteImageCache)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eci/2018-08-08/DeleteImageCache)

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

eci:DeleteImageCache

delete

\*ImageCache

`acs:eci:{#regionId}:{#accountId}:imagecache/{#ImageCacheId}`

-   eci:tag

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

RegionId

string

Yes

The region ID.

cn-hangzhou

ImageCacheId

string

Yes

The ID of the image cache.

imc-2zebxkiifuyzzlhl\*\*\*\*

ClientToken

string

No

A client token to ensure the idempotence of the request. The token must be unique among different requests. It can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The unique ID of the request.

89945DD3-9072-47D0-A218-354284CFC7A2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "89945DD3-9072-47D0-A218-354284CFC7A2"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Eci/2018-08-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eci/2018-08-08/DeleteImageCache#workbench-doc-change-demo) for a complete list.
