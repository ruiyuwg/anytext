Queries the details of an activation code.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActivationCodeDetails)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActivationCodeDetails)

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

polardb:DescribeActivationCodeDetails

get

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

AliyunOrderId

string

Yes

The Alibaba Cloud order ID, including virtual orders.

2233\*\*\*\*445566

ActivationCodeId

integer

No

The ID of the activation code.

123

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

ActivateAt

string

The effective time.

2024-10-16 16:46:20

CertContentB64

string

The content of the activation code. Decode the Base64 content and save it to the license.lic file for PolarDB to read during startup.

AAEAA\*\*\*\*\*\*AAA=

Description

string

The description of the activation code.

testCode

ExpireAt

string

The expiration time.

2054-10-09 16:46:20

GmtCreated

string

The time when the activation code was created.

2024-10-16 16:46:20

GmtModified

string

The time when the activation code was last updated.

2024-10-16 16:46:20

Id

integer

The ID of the activation code.

123

MacAddress

string

The MAC address.

12:34:56:78:98:00

Name

string

The name of the activation code.

testName

RequestId

string

The ID of the request.

F2A9EFA7-915F-4572-8299-85A307\*\*\*\*\*\*

SystemIdentifier

string

The unique identifier of the database.

1234567890123456

## Examples

Success response

`JSON` format

```
{
  "ActivateAt": "2024-10-16 16:46:20",
  "CertContentB64": "AAEAA******AAA=",
  "Description": "testCode",
  "ExpireAt": "2054-10-09 16:46:20",
  "GmtCreated": "2024-10-16 16:46:20\n",
  "GmtModified": "2024-10-16 16:46:20",
  "Id": 123,
  "MacAddress": "12:34:56:78:98:00",
  "Name": "testName",
  "RequestId": "F2A9EFA7-915F-4572-8299-85A307******",
  "SystemIdentifier": "1234567890123456"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeActivationCodeDetails#workbench-doc-change-demo) for a complete list.
