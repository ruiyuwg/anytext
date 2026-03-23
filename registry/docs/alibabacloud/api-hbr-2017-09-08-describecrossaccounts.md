Queries information about cross-account management relationships.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeCrossAccounts)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeCrossAccounts)

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

hbr:DescribeCrossAccounts

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

PageNumber

integer

No

The page number for paging. Pages start from 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request succeeded.

-   true: succeeded
    
-   false: failed
    

true

Code

string

The return code. A value of 200 indicates success.

200

Message

string

A description of the response. Successful requests return "successful". Failed requests return an error message.

successful

PageNumber

integer

The page number for paging. Pages start from 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.

10

TotalCount

integer

The total number of records.

22

CrossAccounts

object

CrossAccount

array<object>

The list of cross-account information.

object

OwnerId

integer

The account ID of the current account.

184164xxxxx49795

CrossAccountUserId

integer

The original account ID of the cross-account backup managed by the current account.

15897534xxxxx625

CrossAccountRoleName

string

The name of the RAM role created in the original account for cross-account backup managed by the current account.

BackupRole

Alias

string

The alias. It can be up to 32 characters long.

content

Id

integer

The type ID.

1

CreatedTime

integer

The creation time. This is a UNIX timestamp in seconds.

1654570439

UpdatedTime

integer

The update time. This is a UNIX timestamp in seconds.

1640157098

CrossAccountType

string

The cross-account type.

CROSS\_ACCOUNT

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 22,
  "CrossAccounts": {
    "CrossAccount": [
      {
        "OwnerId": 0,
        "CrossAccountUserId": 0,
        "CrossAccountRoleName": "BackupRole",
        "Alias": "content",
        "Id": 1,
        "CreatedTime": 1654570439,
        "UpdatedTime": 1640157098,
        "CrossAccountType": "CROSS_ACCOUNT"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeCrossAccounts#workbench-doc-change-demo) for a complete list.
