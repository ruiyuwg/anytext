Queries for the details of databases in a specified PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDatabases)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDatabases)

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

polardb:DescribeDatabases

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBName

string

No

The name of the database.

**Note**

You cannot specify multiple database names.

test\_db

PageNumber

integer

No

The number of the page to return. The value must be an integer that is greater than 0 and does not exceed the maximum value of an integer. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: **30**.

30

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageRecordCount

integer

The number of entries returned on the current page.

1

Databases

object

Database

array<object>

The details of the databases.

array<object>

DBDescription

string

The description of the database.

test\_des

DBStatus

string

The status of the database. Valid values:

-   **Creating**: The database is being created.
    
-   **Running**: The database is in use.
    
-   **Deleting**: The database is being deleted.
    

Running

DBName

string

The name of the database.

test\_db

Engine

string

The type of the database engine. Valid values:

-   **MySQL**
    
-   **Oracle**
    
-   **PostgreSQL**
    

MySQL

MasterID

string

The ID of the primary node for the database in a Multi-master Cluster (Database/Table) edition cluster.

2

CharacterSetName

string

The character set. For more information, see [Character sets](/help/en/polardb/polardb-for-mysql/character-set-tables).

utf8mb4

Accounts

object

Account

array<object>

The details of the database accounts.

**Note**

For PolarDB for MySQL clusters, privileged accounts are not returned.

object

PrivilegeStatus

string

The authorization status. Valid values:

-   **Empowering**: Permissions are being granted.
    
-   **Empowered**: Permissions are granted.
    
-   **Removing**: Permissions are being revoked.
    

Empowered

AccountStatus

string

The status of the account. Valid values:

-   **Creating**: The account is being created.
    
-   **Available**: The account is available.
    
-   **Deleting**: The account is being deleted.
    

Available

AccountPrivilege

string

The permissions of the account. Valid values:

-   **ReadWrite**: Read and write.
    
-   **ReadOnly**: Read-only.
    
-   **DMLOnly**: DML only.
    
-   **DDLOnly**: DDL only.
    
-   **ReadIndex**: Read and index.
    

ReadOnly

AccountName

string

The name of the account.

**Note**

For PolarDB for MySQL clusters, privileged accounts are not returned.

test\_acc

RequestId

string

The ID of the request.

E1DF8CA6-2300-448B-9ABF-760C4B\*\*\*\*\*\*

PageNumber

integer

The page number.

1

## Examples

Success response

`JSON` format

```
{
  "PageRecordCount": 1,
  "Databases": {
    "Database": [
      {
        "DBDescription": "test_des",
        "DBStatus": "Running",
        "DBName": "test_db",
        "Engine": "MySQL",
        "MasterID": "2",
        "CharacterSetName": "utf8mb4",
        "Accounts": {
          "Account": [
            {
              "PrivilegeStatus": "Empowered",
              "AccountStatus": "Available",
              "AccountPrivilege": "ReadOnly",
              "AccountName": "test_acc"
            }
          ]
        }
      }
    ]
  },
  "RequestId": "E1DF8CA6-2300-448B-9ABF-760C4B******",
  "PageNumber": 1
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

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

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDatabases#workbench-doc-change-demo) for a complete list.
