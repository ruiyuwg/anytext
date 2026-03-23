This operation queries the applications of all PolarDB instances in a specified region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeApplications)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeApplications)

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

polardb:DescribeApplications

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

RegionId

string

Yes

The region ID.

cn-beijing

ApplicationIds

string

No

The IDs of the applications. If you specify this parameter, the operation returns information only about the specified applications.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

The default value is **30**.

30

PageNumber

integer

No

The page number to return. The default value is 1.

1

DBClusterId

string

No

The ID of the PolarDB cluster. If you specify this parameter, the operation returns information only about the applications that are associated with the specified PolarDB cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ApplicationTypes

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF

TotalRecordCount

integer

The total number of records.

1

PageRecordCount

integer

The number of records on the current page.

1

PageNumber

integer

The current page number.

1

Items

object

Applications

array<object>

The list of applications.

array<object>

Application information.

Status

string

The status of the application. Valid values:

-   Creating: The application is being created.
    
-   Activated: The application is running.
    
-   Maintaining: The application is under maintenance.
    
-   ClassChanging: The application configuration is being changed.
    
-   Transing: The application is being migrated.
    
-   MinorVersionUpgrading: The minor version is being upgraded.
    
-   NetCreating: The endpoint is being created.
    
-   NetDeleting: The endpoint is being deleted.
    
-   NetModifying: The endpoint is being modified.
    
-   Restarting: The application is restarting.
    
-   Locking: The application is being locked.
    
-   Locked: The application is locked.
    
-   Unlocking: The application is being unlocked.
    
-   Deleting: The application is being deleted.
    

Activated

Description

string

The description or remarks of the application.

myapp

EngineVersion

string

The database engine version.

1.0.0

ZoneId

string

The zone.

cn-hangzhou-b

Expired

string

Indicates whether the application has expired.

false

PayType

string

The billing method. This parameter is empty if the application is not billed.

Postpaid

PolarFSInstanceId

string

The ID of the PolarFileSystem (PolarFS) instance that is associated with the application.

pcs-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Endpoints

object

endpoint

array<object>

The list of application endpoints.

object

The application endpoint.

IP

string

The IP address.

192.168.0.3

Port

string

The port.

8080

NetType

string

The type of the endpoint. Valid values:

-   Private: VPC endpoint
    
-   Public: public endpoint
    

Public

ApplicationType

string

The application type.

supabase

CreationTime

string

The creation time.

2025-03-25T09:37:10Z

RegionId

string

The region.

cn-hangzhou

ApplicationId

string

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ExpireTime

string

The expiration time.

2025-06-25T09:37:10Z

DBClusterId

string

pc-xxxxxx

Tags

object

Tag

array<object>

object

Key

string

testKey

Value

string

testValue

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF",
  "TotalRecordCount": 1,
  "PageRecordCount": 1,
  "PageNumber": 1,
  "Items": {
    "Applications": [
      {
        "Status": "Activated",
        "Description": "myapp",
        "EngineVersion": "1.0.0",
        "ZoneId": "cn-hangzhou-b",
        "Expired": "false",
        "PayType": "Postpaid",
        "PolarFSInstanceId": "pcs-**************\n",
        "Endpoints": {
          "endpoint": [
            {
              "IP": "192.168.0.3",
              "Port": "8080",
              "NetType": "Public"
            }
          ]
        },
        "ApplicationType": "supabase",
        "CreationTime": "2025-03-25T09:37:10Z",
        "RegionId": "cn-hangzhou",
        "ApplicationId": "pa-**************",
        "ExpireTime": "2025-06-25T09:37:10Z",
        "DBClusterId": "pc-xxxxxx",
        "Tags": {
          "Tag": [
            {
              "Key": "testKey",
              "Value": "testValue"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeApplications#workbench-doc-change-demo) for a complete list.
