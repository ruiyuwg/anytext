Retrieves a paginated list of activation codes associated with your account. You can filter the results by order ID or specific hardware identifiers.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActivationCodes)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActivationCodes)

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

polardb:DescribeActivationCodes

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

The ID of the Alibaba Cloud order (including virtual orders) used to purchase the activation codes.

2233\*\*\*\*445566

PageNumber

integer

No

Page number

1

PageSize

integer

No

Number of records to return per page

30

MacAddress

string

No

Filters the list to return only the activation code matching the specified MAC address.

aa:bb:cc:dd:ee:ff

SystemIdentifier

string

No

Filters the list to return only the activation code matching the specified system identifier.

3312548696141831911

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Items

array<object>

List of activation codes

object

ActivateAt

string

Effective period

2024-10-16 16:46:20

Description

string

Activation code description

testCode

ExpireAt

string

Expiration time

2054-10-16 16:46:20

GmtCreated

string

Creation time

2024-10-16 16:46:20

GmtModified

string

Update time

2024-10-16 16:46:20

Id

integer

Activation code ID

123

MacAddress

string

MAC address

12:34:56:78:98:00

Name

string

Activation code name

testName

SystemIdentifier

string

Unique identifier in the database

1234567890123456

PageNumber

integer

Current page number

1

PageRecordCount

integer

Number of records on the current page

1

RequestId

string

The unique ID generated for this request.

65D7ACE6-4A61-4B6E-B357-8CB24A\*\*\*\*\*\*

TotalRecordCount

integer

Total number of records

1

## Examples

Success response

`JSON` format

```
{
  "Items": [
    {
      "ActivateAt": "2024-10-16 16:46:20\n",
      "Description": "testCode",
      "ExpireAt": "2054-10-16 16:46:20\n",
      "GmtCreated": "2024-10-16 16:46:20\n",
      "GmtModified": "2024-10-16 16:46:20\n",
      "Id": 123,
      "MacAddress": "12:34:56:78:98:00",
      "Name": "testName",
      "SystemIdentifier": "\t\n1234567890123456"
    }
  ],
  "PageNumber": 1,
  "PageRecordCount": 1,
  "RequestId": "65D7ACE6-4A61-4B6E-B357-8CB24A******",
  "TotalRecordCount": 1
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeActivationCodes#workbench-doc-change-demo) for a complete list.
