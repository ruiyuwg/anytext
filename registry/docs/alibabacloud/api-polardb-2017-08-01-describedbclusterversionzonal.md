Queries the version of a PolarDB edge cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterVersionZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterVersionZonal)

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

polardb:DescribeDBClusterVersionZonal

get

\*All Resource

`*`

None

None

## Request syntax

```
GET  HTTP/1.1
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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DescribeType

string

No

Specifies whether to return information about the latest version or a list of upgradable versions. Valid values:

-   LATEST\_VERSION: Queries information about the latest version.
    
-   AVAILABLE\_VERSION: Queries the list of upgradable versions.
    

LATEST\_VERSION

## Response elements

**Element**

**Type**

**Description**

**Example**

object

IsLatestVersion

string

Indicates whether the current database kernel version is the latest version. Valid values:

-   true
    
-   false
    

true

IsProxyLatestVersion

string

Indicates whether the current database proxy version is the latest version. Valid values:

-   true
    
-   false
    

true

DBVersion

string

The major version of the database engine. Valid values:

-   8.0
    
-   5.7
    
-   5.6
    

5.6

DBRevisionVersion

string

The patch version of the database engine.

8.0.1.1.7

RequestId

string

The request ID.

47921222-0D37-4133-8C0D-017DC3\*\*\*\*\*\*

DBVersionStatus

string

The status of the current minor version of the database. Valid values:

-   Stable: The current version is stable.
    
-   Old: The current version is outdated. Upgrade to the latest version.
    
-   HighRisk: The current version has critical bugs. Upgrade to the latest version immediately.
    
-   Beta: The current version is a beta version.
    

Stable

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBMinorVersion

string

The minor version of the database engine.

-   If `DBVersion` is **8.0**, the valid values are:
    
    -   **8.0.2**
        
    -   **8.0.1**
        
-   If `DBVersion` is **5.7**, the value is **5.7.28**.
    
-   If `DBVersion` is **5.6**, the value is **5.6.16**.
    

8.0.1

ProxyRevisionVersion

string

The version of the database proxy.

2.4.15

ProxyVersionStatus

string

The status of the database proxy version. Valid values:

-   Stable: The current version is stable.
    
-   Old: The current version is outdated. Upgrade to the latest version.
    
-   HighRisk: The current version has critical bugs. Upgrade to the latest version immediately.
    
-   Beta: The current version is a beta version.
    

Stable

ProxyLatestVersion

string

The latest version of the database proxy.

2.4.17

DBLatestVersion

string

The latest version of the database kernel.

8.0.1.1.16

DBRevisionVersionList

array<object>

The list of upgradable versions.

object

ReleaseType

string

The release status of the database version. Valid values:

-   **Stable**: The current version is stable.
    
-   **Old**: The current version is outdated. Do not upgrade to this version.
    
-   **HighRisk**: The current version has critical bugs. Do not upgrade to this version.
    
-   **Beta**: The current version is a beta version.
    

Stable

RevisionVersionCode

string

The code of the patch version for the database engine. Use this code to specify the target version for an upgrade.

20230707

RevisionVersionName

string

The patch version of the database engine.

8.0.1.1.35.1

ReleaseNote

string

The release notes.

ReleaseNote

ProxyRevisionVersionList

array<object>

The list of upgradable database proxy versions.

-   **Stable**: The current version is stable.
    
-   **Old**: The current version is outdated. Do not upgrade to this version.
    
-   **HighRisk**: The current version has critical bugs. Do not upgrade to this version.
    
-   **Beta**: The current version is a beta version.
    

object

ReleaseType

string

The release type. Valid values:

-   **LTS**: Long-Term Support (LTS) version.
    
-   **BETA**: Preview version.
    

LTS

RevisionVersionCode

string

The code of the patch version for the database proxy. Use this code to specify the target version for an upgrade.

20230707

RevisionVersionName

string

The patch version of the database proxy.

2.8.24

ReleaseNote

string

The release notes.

ReleaseNote

## Examples

Success response

`JSON` format

```
{
  "IsLatestVersion": "true",
  "IsProxyLatestVersion": "true",
  "DBVersion": "5.6",
  "DBRevisionVersion": "8.0.1.1.7",
  "RequestId": "47921222-0D37-4133-8C0D-017DC3******",
  "DBVersionStatus": "Stable",
  "DBClusterId": "pc-****************",
  "DBMinorVersion": "8.0.1",
  "ProxyRevisionVersion": "2.4.15",
  "ProxyVersionStatus": "Stable",
  "ProxyLatestVersion": "2.4.17",
  "DBLatestVersion": "8.0.1.1.16",
  "DBRevisionVersionList": [
    {
      "ReleaseType": "Stable",
      "RevisionVersionCode": "20230707",
      "RevisionVersionName": "8.0.1.1.35.1",
      "ReleaseNote": "ReleaseNote"
    }
  ],
  "ProxyRevisionVersionList": [
    {
      "ReleaseType": "LTS",
      "RevisionVersionCode": "20230707",
      "RevisionVersionName": "2.8.24",
      "ReleaseNote": "ReleaseNote"
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

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

400

InvalidDBVersion.Malformed

The Specified DBVersion is not valid.

The specified DBVersion parameter is invalid.

400

InvalidEngineVersion.Older

The primary cluster version is too old, please upgrade it.

The version of the primary cluster instance is out-of-date. Please upgrade the instance version.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterVersionZonal#workbench-doc-change-demo) for a complete list.
