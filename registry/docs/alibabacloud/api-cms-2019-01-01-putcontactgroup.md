You can call the PutContactGroup operation to create or modify an alert contact group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/PutContactGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/PutContactGroup)

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

cms:PutContactGroup

create

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

ContactGroupName

string

Yes

The name of the alert contact group.

考勤系统组

Describe

string

No

The description of the alert contact group.

告警测试

EnableSubscribed

boolean

No

Specifies whether to enable the subscription feature. Valid values:

-   true: The feature is enabled.
    
-   false: The feature is disabled.
    

true

ContactNames

array

No

The names of the alert contacts.

Alice

string

No

The name of an alert contact.

lucy

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The HTTP status code.

**Note**

A status code of 200 indicates that the request was successful.

200

Message

string

The message returned for the request.

Illegal parameters.

RequestId

string

The request ID.

B4E30DB6-F069-5D0B-A589-2A89F7D62A57

Success

boolean

Indicates whether the operation was successful. Valid values:

-   true: The operation was successful.
    
-   false: The operation failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "Illegal parameters.",
  "RequestId": "B4E30DB6-F069-5D0B-A589-2A89F7D62A57",
  "Success": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameterValue

Illegal parameters.

Illegal parameters.

500

InternalError

The request processing has failed due to some unknown error.

403

InvalidAuthorization

Permission denied

Permission denied.

404

ContactGroup.NotExists

ContactGroup not exists

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/PutContactGroup#workbench-doc-change-demo) for a complete list.
