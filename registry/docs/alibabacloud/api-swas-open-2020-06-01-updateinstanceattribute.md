Modifies the information of a simple application server, including the server name and the password that you use to log on to the server.

## Operation description

## [](#)Usage notes

After you change the password of a simple application server, you must restart the server by calling the [RebootInstance](/help/en/simple-application-server/api-rebootinstance) operation for the new password to take effect.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/SWAS-OPEN/2020-06-01/UpdateInstanceAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/SWAS-OPEN/2020-06-01/UpdateInstanceAttribute)

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

swas-open:UpdateInstanceAttribute

update

\*Instance

`acs:swas-open:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

Yes

The ID of the simple application server.

ace0706b2ac4454d984295a94213\*\*\*\*

RegionId

string

Yes

The region ID of the simple application server.

cn-hangzhou

Password

string

No

The new password of the simple application server. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:

```
()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
```

For Windows instances, the password cannot start with a forward slash (/).

**Note**

For security reasons, we recommend that you use HTTPS to send requests if `Password` is specified.

Test123!

InstanceName

string

No

The name of the simple application server. The name must be 2 to 50 characters in length. It can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter or digit. Domain names are supported.

test-InstanceName

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

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

## Examples

Success response

`JSON` format

```
{
  "RequestId": "20758A-585D-4A41-A9B2-28DA8F4F534F"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidPassword.ValueNotSupported

The specified parameter Password is invalid.

400

InvalidInstanceName.ValueNotSupported

The specified parameter InstanceName is invalid.

400

RegionIdNotMatchHost

The parameter regionId does not match the endpoint host.

500

InternalError

An error occurred while processing your request.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

See [Error Codes](https://api.alibabacloud.com/document/SWAS-OPEN/2020-06-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/SWAS-OPEN/2020-06-01/UpdateInstanceAttribute#workbench-doc-change-demo) for a complete list.
