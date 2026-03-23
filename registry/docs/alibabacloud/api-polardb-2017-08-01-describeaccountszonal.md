Queries the edge clusters for PolarDB on ENS.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAccountsZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAccountsZonal)

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

polardb:DescribeAccountsZonal

list

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

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

No

The account name.

test\_acc

NodeType

string

No

The node type. This parameter is required when you query the accounts of a PolarDB Search node.

-   Search
    

Search

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0. The default value is 1.

1

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   30
    
-   50
    
-   100
    

The default value is 30.

30

MaxResults

integer

No

The maximum number of entries to return in a single request.

10

NextToken

string

No

The token to retrieve the next page of results. You do not need to specify this parameter for the first request. In a subsequent request, set this parameter to the NextToken value returned in the previous response.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageRecordCount

integer

The number of entries on the current page.

1

RequestId

string

The request ID.

155462B9-205F-4FFC-BB43-4855FE\*\*\*\*\*\*

PageNumber

integer

The page number.

1

Accounts

array<object>

The details of the accounts.

array<object>

The details of the accounts.

AccountDescription

string

The description of the account.

test

AccountStatus

string

The status of the account. Valid values:

Creating: The account is being created.

Available: The account is active.

Deleting: The account is being deleted.

Available

AccountLockState

string

The lock state of the account. Valid values:

-   UnLock: The account is not locked.
    
-   Lock: The account is locked.
    

UnLock

AccountPasswordValidTime

string

The time when the password expires.

undefined

AccountType

string

The type of the account. Valid values:

-   Normal: A standard account.
    
-   Super: A privileged account.
    
-   ReadOnly: A global read-only account.
    

Normal

DatabasePrivileges

array<object>

The details of the database permissions that the account has.

object

The details of the database permissions that the account has.

AccountPrivilege

string

The permissions of the account.

ReadOnly

DBName

string

The name of the database.

DBtest

AccountName

string

The name of the account.

test\_acc

NextToken

string

The token to retrieve the next page of results. If the results are not fully returned, this token is returned. You can use this token in the next request to retrieve the remaining results.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

MaxResults

integer

The maximum number of entries returned in the request.

10

## Examples

Success response

`JSON` format

```
{
  "PageRecordCount": 1,
  "RequestId": "155462B9-205F-4FFC-BB43-4855FE******",
  "PageNumber": 1,
  "Accounts": [
    {
      "AccountDescription": "test",
      "AccountStatus": "Available",
      "AccountLockState": "UnLock",
      "AccountPasswordValidTime": "undefined",
      "AccountType": "Normal",
      "DatabasePrivileges": [
        {
          "AccountPrivilege": "ReadOnly",
          "DBName": "DBtest"
        }
      ],
      "AccountName": "test_acc"
    }
  ],
  "NextToken": "212db86sca4384811e0b5e8707e******",
  "MaxResults": 10
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

The specified PageSize parameter is invalid.

400

InvalidPageNumber.Malformed

The specified parameter PageNumber is not valid.

The specified PageNumber parameter is invalid.

400

Database.ConnectError

db instance %s connect failed, please check instance status and database processlist

Failed to connect to the database cluster. Check the cluster status and database process list.

400

Account.QueryError

Instance %s query account error

Failed to query accounts for cluster %s.

400

Connect.Timeout

Service can not connect to instance temporarily.

Failed to connect to the cluster.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeAccountsZonal#workbench-doc-change-demo) for a complete list.
