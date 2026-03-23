Creates a DBLink.

## Operation description

A DBLink provides connectivity between two PolarDB for PostgreSQL (Oracle-compatible) clusters, or between a PolarDB for PostgreSQL (Oracle-compatible) cluster and a self-managed PostgreSQL database on an Elastic Compute Service (ECS) instance. This lets you query data across clusters.

**Note**

-   Each cluster supports a maximum of 10 DBLinks.
    
-   A DBLink consumes one DBLink quota from both the source cluster and the destination cluster.
    
-   The source cluster and the destination cluster or destination ECS instance must be in the same region.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDBLink)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDBLink)

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

polardb:CreateDBLink

create

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/{#resource-id}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterId

string

Yes

The ID of the source cluster for the DBLink.

**Note**

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-oracle/api-describedbclusters-2) operation to query the list of PolarDB clusters.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*

DBLinkName

string

Yes

The name of the DBLink.

-   It must contain lowercase letters, and can also contain digits and underscores (\_).
    
-   It must start with a letter and end with a letter or a digit.
    
-   It must be no more than 64 characters in length.
    

dblink\_test

TargetDBInstanceName

string

No

The ID of the destination cluster for the DBLink.

**Note**

-   If the destination is a self-managed Oracle database that runs on an ECS instance, set this parameter to `null`.
    
-   You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-oracle/api-describedbclusters-2) operation to query the list of PolarDB clusters.
    

pc-b\*\*\*\*\*\*\*\*\*\*\*\*

TargetDBAccount

string

Yes

The account of the destination database.

**Note**

You can call the [DescribeAccounts](/help/en/polardb/polardb-for-oracle/api-describeaccounts-2) operation to query the database accounts of a PolarDB cluster.

testacc

TargetDBPasswd

string

Yes

The password for the destination database account.

Test1111

TargetDBName

string

Yes

The name of the destination database.

**Note**

You can call the [DescribeDatabases](/help/en/polardb/polardb-for-oracle/api-describedatabases-2) operation to query information about databases in a PolarDB cluster.

testdb2

SourceDBName

string

Yes

The name of the source database.

**Note**

You can call the [DescribeDatabases](/help/en/polardb/polardb-for-oracle/api-describedatabases-2) operation to query information about databases in a PolarDB cluster.

testdb1

TargetIp

string

No

The IP address of the self-managed Oracle database that runs on an ECS instance.

192.\*\*.\*\*.46

TargetPort

string

No

The port number of the self-managed Oracle database that runs on an ECS instance.

1521

VpcId

string

No

The ID of the virtual private cloud (VPC).

**Note**

You can call the [DescribeVpcs](/help/en/vpc/api-describevpcs) operation to query the details of VPCs.

vpc-bp1qpo0kug3a20qqe\*\*\*\*

RegionId

string

No

The region ID.

**Note**

You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the details of regions.

cn-hangzhou

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. The client generates the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and must not exceed 64 ASCII characters in length.

6000170000591aed949d0f54a343f1a4233c1e7d1c5c\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

F9F1CB1A-B1D5-4EF5-A53A-\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F9F1CB1A-B1D5-4EF5-A53A-************"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBLinkName.Malformed

The specified parameter DBLinkName is not valid.

The specified DBLinkName parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

DBLinkSourceDBNotFound

Specified source db does not exist.

The specified source database does not exist.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateDBLink#workbench-doc-change-demo) for a complete list.
