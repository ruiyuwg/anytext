Queries the available minor engine versions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBMiniEngineVersions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBMiniEngineVersions)

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

polardb:DescribeDBMiniEngineVersions

get

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

DBType

string

Yes

The database type. The only valid value is **MySQL**.

-   **MySQL**.
    

MySQL

CreationCategory

string

No

The product series. Valid values:

-   **Normal**: Cluster Edition (default)
    
-   **SENormal**: Standard Edition
    

For more information about product series, see [Product series](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series).

Normal

DBVersion

string

Yes

The major version of the database engine. Valid values:

-   **8.0**
    
-   **5.7**
    
-   **5.6**
    

5.6

DBMinorVersion

string

No

The minor version of the database engine.

-   If `DBVersion` is set to **8.0**, valid values are:
    
    -   **8.0.2**
        
    -   **8.0.1**
        
-   If `DBVersion` is set to **5.7**, the valid value is **5.7.28**.
    
-   If `DBVersion` is set to **5.6**, the valid value is **5.6.16**.
    

8.0.1

Architecture

string

No

The CPU architecture. Valid values:

-   **X86**
    
-   **ARM**
    

X86

RegionId

string

Yes

The region ID.

cn-hangzhou

ZoneId

string

No

The zone.

cn-hangzhou-g

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DBRevisionVersionList

array<object>

A list of information about the versions available for an upgrade.

object

The information about a version available for an upgrade.

ReleaseNote

string

The release notes of the version.

ReleaseNote

ReleaseType

string

The release state of the database version. Valid values:

-   **Stable**: The version is stable.
    
-   **Old**: The version is outdated. Upgrading to this version is not recommended.
    
-   **HighRisk**: The version has a critical bug. Upgrading to this version is not recommended.
    
-   **Beta**: The version is a beta version.
    

Stable

RevisionVersionCode

string

The code of the database engine revision version. Use this code to specify the target version for an upgrade.

20230707

RevisionVersionName

string

The number of the database engine revision version.

8.0.1.1.35.1

RequestId

string

The ID of the request.

2921D843-433A-5FB3-A03B-4EC093B219F8

## Examples

Success response

`JSON` format

```
{
  "DBRevisionVersionList": [
    {
      "ReleaseNote": "ReleaseNote",
      "ReleaseType": "Stable",
      "RevisionVersionCode": "20230707",
      "RevisionVersionName": "8.0.1.1.35.1"
    }
  ],
  "RequestId": "2921D843-433A-5FB3-A03B-4EC093B219F8"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBMiniEngineVersions#workbench-doc-change-demo) for a complete list.
