Modifies the IP address whitelist and security group configuration for a PolarDB application.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyApplicationWhitelist)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyApplicationWhitelist)

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

polardb:ModifyApplicationWhitelist

none

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ApplicationId

string

Yes

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ComponentId

string

No

The ID of the application subcomponent. If you specify this parameter, the whitelist modification takes effect only for this subcomponent.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SecurityIPList

string

No

The IP addresses for the whitelist. Separate multiple IP addresses with commas.

127.0.0.1,172.17.0.0/24

SecurityIPArrayName

string

No

The name of the IP address group. The default value is `default`.

default

SecurityGroups

string

No

The list of security group IDs. Separate multiple IDs with commas.

sg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ModifyMode

string

No

The method to modify the whitelist. Valid values:

-   **Cover**: Overwrites the original IP address whitelist. This is the default value.
    
-   **Append**: Appends IP addresses.
    
-   **Delete**: Deletes IP addresses.
    

Append

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF

ApplicationId

string

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ComponentId

string

The ID of the application subcomponent.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF",
  "ApplicationId": "pa-**************",
  "ComponentId": "pac-**************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyApplicationWhitelist#workbench-doc-change-demo) for a complete list.
