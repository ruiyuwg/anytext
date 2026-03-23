Creates a key pair for a simple application server.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/SWAS-OPEN/2020-06-01/CreateInstanceKeyPair)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/SWAS-OPEN/2020-06-01/CreateInstanceKeyPair)

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

swas-open:CreateInstanceKeyPair

create

\*Instance

`acs:swas-open:{#regionId}:{#accountId}:{#InstanceId}`

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

The region ID of the simple application server. You can call the [ListRegions](/help/en/simple-application-server/api-listregions) operation to query the most recent region list.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

InstanceId

string

Yes

The ID of the simple application server.

2ad1ae67295445f598017499dc\*\*\*\*

KeyPairName

string

Yes

The name of the key pair.

ceshi

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

20758A-585D-4A41-A9B2-28DA8F4F534F

KeyPairName

string

The name of the key pair.

ceshi

Fingerprint

string

The fingerprint of the key pair.

If2K1ItazA4GlKkWCEhdRj8Wd6czAvK9\*\*\*\*\*

PrivateKey

string

The private key.

\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "20758A-585D-4A41-A9B2-28DA8F4F534F\t",
  "KeyPairName": "ceshi",
  "Fingerprint": "If2K1ItazA4GlKkWCEhdRj8Wd6czAvK9*****",
  "PrivateKey": "***"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalError

An error occurred while processing your request.

See [Error Codes](https://api.alibabacloud.com/document/SWAS-OPEN/2020-06-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/SWAS-OPEN/2020-06-01/CreateInstanceKeyPair#workbench-doc-change-demo) for a complete list.
