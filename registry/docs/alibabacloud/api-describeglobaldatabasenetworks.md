Describes all global database networks (GDNs) in your account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeGlobalDatabaseNetworks)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeGlobalDatabaseNetworks)

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

polardb:DescribeGlobalDatabaseNetworks

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

FilterRegion

string

No

Queries the list of GDNs in which a secondary cluster can be created in the specified region.

cn-beijing

DBClusterId

string

No

The cluster ID.

**Note**

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query information about all clusters in a region, including cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PageSize

integer

No

The number of records per page. Default value: 30. Valid values:

-   30
    
-   50
    
-   100
    

30

PageNumber

integer

No

The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.

1

GDNDescription

string

No

The description of the GDN. The description must meet the following requirements:

-   It cannot start with http:// or https://.
    
-   It must start with a letter.
    
-   It can contain letters, digits, underscores (\_), and hyphens (-).
    
-   It must be 2 to 126 characters in length.
    

test

GDNId

string

No

The GDN ID.

gdn-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalRecordCount

integer

The total number of records.

1

PageRecordCount

integer

The number of records on the current page.

30

RequestId

string

The request ID.

69A85BAF-1089-4CDF-A82F-0A140F\*\*\*\*\*\*

PageNumber

integer

The page number.

1

Items

array<object>

The details of the GDN.

array<object>

DBVersion

string

The database engine version. Only **8.0** is supported.

8.0

GDNId

string

The GDN ID.

gdn-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

CreateTime

string

The time when the GDN was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and is displayed in UTC.

2020-03-23T05:46:54Z

GDNStatus

string

The status of the GDN. Valid values:

-   **creating**: The GDN is being created.
    
-   **active**: The GDN is running.
    
-   **deleting**: The GDN is being deleted.
    
-   **locked**: The GDN is locked. In this state, you cannot perform any operations on the clusters in the GDN.
    
-   **removing\_member**: The secondary cluster is being removed from the GDN.
    

active

DBClusters

array<object>

The details of the clusters in the GDN.

object

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Role

string

The role of the cluster. Valid values:

-   **primary**: The primary cluster.
    
-   **standby**: The secondary cluster.
    

**Note**

A GDN contains one primary cluster and up to four secondary clusters. For more information, see [Global Database Network (GDN)](/help/en/polardb/polardb-for-mysql/user-guide/create-and-release-a-gdn).

primary

RegionId

string

The region ID.

cn-hangzhou

DBType

string

The type of the database engine. Only **MySQL** is supported.

MySQL

GDNDescription

string

The description of the GDN. The description must meet the following requirements:

-   It cannot start with http:// or https://.
    
-   It must start with a letter.
    
-   It can contain letters, digits, underscores (\_), and hyphens (-).
    
-   It must be 2 to 126 characters in length.
    

test

Labels

object

GDNVersion

string

## Examples

Success response

`JSON` format

```
{
  "TotalRecordCount": 1,
  "PageRecordCount": 30,
  "RequestId": "69A85BAF-1089-4CDF-A82F-0A140F******",
  "PageNumber": 1,
  "Items": [
    {
      "DBVersion": "8.0",
      "GDNId": "gdn-****************",
      "CreateTime": "2020-03-23T05:46:54Z",
      "GDNStatus": "active",
      "DBClusters": [
        {
          "DBClusterId": "pc-****************",
          "Role": "primary",
          "RegionId": "cn-hangzhou"
        }
      ],
      "DBType": "MySQL",
      "GDNDescription": "test",
      "Labels": {
        "GDNVersion": ""
      }
    }
  ]
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

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeGlobalDatabaseNetworks#workbench-doc-change-demo) for a complete list.
