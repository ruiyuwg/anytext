Queries multi-factor authentication (MFA) devices.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/ListVirtualMFADevices)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/ListVirtualMFADevices)

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

ram:ListVirtualMFADevices

list

\*MFADevice

`acs:ram::{#accountId}:mfa/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Marker

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.\`\`

When you call the operation for the first time, if the total number of returned entries exceeds the value of `MaxItems`, the entries are truncated. The system returns entries based on the value of `MaxItems` and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and `Marker` is returned. In the next call, you can use the value of `Marker` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of the `IsTruncated` parameter becomes `false`. This way, all entries are returned.

EXAMPLE

MaxItems

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 100.

100

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

VirtualMFADevices

object

VirtualMFADevice

array<object>

The information about the MFA device.

array<object>

SerialNumber

string

The serial number of the MFA device.

acs:ram::177242285274\*\*\*\*:mfa/test

User

object

The information of the RAM user that has an MFA device bound.

UserPrincipalName

string

The logon name of the RAM user.

test@177242285274\*\*\*\*.onaliyun.com

DisplayName

string

The display name of the RAM user.

test

UserId

string

The ID of the RAM user.

20732900249392\*\*\*\*

ActivateDate

string

The time when the MFA device was activated.

2020-10-16T06:02:09Z

RequestId

string

The request ID.

32272612-DF82-485E-8BA9-AFA4E0C3D0BA

IsTruncated

boolean

Indicates whether the response is truncated. Valid values:

-   true
    
-   false
    

true

Marker

string

The pagination token that is used in the next request to retrieve a new page of results.

**Note**

This parameter is returned only when `IsTruncated` is `true`.

EXAMPLE

## Examples

Success response

`JSON` format

```
{
  "VirtualMFADevices": {
    "VirtualMFADevice": [
      {
        "SerialNumber": "acs:ram::177242285274****:mfa/test",
        "User": {
          "UserPrincipalName": "test@177242285274****.onaliyun.com",
          "DisplayName": "test",
          "UserId": "20732900249392****"
        },
        "ActivateDate": "2020-10-16T06:02:09Z"
      }
    ]
  },
  "RequestId": "32272612-DF82-485E-8BA9-AFA4E0C3D0BA",
  "IsTruncated": true,
  "Marker": "EXAMPLE"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/ListVirtualMFADevices#workbench-doc-change-demo) for a complete list.
