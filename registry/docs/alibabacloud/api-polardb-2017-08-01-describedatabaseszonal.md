Describes the databases in a PolarDB on ENS cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDatabasesZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDatabasesZonal)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBName

string

No

The database name.

test\_db

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. The default value is 1.

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

The maximum number of entries to return for the current request.

10

NextToken

string

No

The query token. This is the NextToken value from the previous API call. If there are no more results, do not specify this parameter.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageRecordCount

integer

The number of entries returned on the current page.

7

Databases

array<object>

The details of the databases.

object

DBDescription

string

The description of the database.

test\_des

DBStatus

string

The status of the database. Valid values:

-   **Creating**
    
-   **Running**
    
-   **Deleting**
    

Running

DBName

string

The name of the database.

test\_db

Engine

string

The database engine type. Valid values:

-   **MySQL**
    
-   **Oracle**
    
-   **PostgreSQL**
    

MySQL

MasterID

string

The ID of the primary node that corresponds to the database in a Multi-master Cluster (Database/Table) edition cluster.

2

CharacterSetName

string

The character set.

utf8mb4

Accounts

array<object>

The details of the database accounts.

**Note**

If the cluster is a PolarDB for MySQL cluster, privileged accounts are not included.

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

-   **Creating**
    
-   **Available**
    
-   **Deleting**
    

Available

AccountPrivilege

string

The permissions of the account. Valid values:

-   **ReadWrite**
    
-   **ReadOnly**
    
-   **DMLOnly**
    
-   **DDLOnly**
    
-   **ReadIndex**
    

ReadOnly

AccountName

string

The account name.

**Note**

If the cluster is a PolarDB for MySQL cluster, privileged accounts are not included.

test\_acc

RequestId

string

The request ID.

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

PageNumber

integer

The page number.

1

MaxResults

integer

The maximum number of entries returned for the current request.

10

NextToken

string

The query token. This is the NextToken value from the previous API call. If there are no more results, do not specify this parameter.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PageRecordCount": 7,
  "Databases": [
    {
      "DBDescription": "test_des",
      "DBStatus": "Running",
      "DBName": "test_db",
      "Engine": "MySQL",
      "MasterID": "2",
      "CharacterSetName": "utf8mb4",
      "Accounts": [
        {
          "PrivilegeStatus": "Empowered",
          "AccountStatus": "Available",
          "AccountPrivilege": "ReadOnly",
          "AccountName": "test_acc"
        }
      ]
    }
  ],
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******",
  "PageNumber": 1,
  "MaxResults": 10,
  "NextToken": "212db86sca4384811e0b5e8707e******"
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDatabasesZonal#workbench-doc-change-demo) for a complete list.
