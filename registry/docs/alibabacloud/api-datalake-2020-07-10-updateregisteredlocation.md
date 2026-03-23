Updates a registered location.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/UpdateRegisteredLocation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/UpdateRegisteredLocation)

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

dlf:UpdateRegisteredLocation

\*All Resource

`*`

None

None

## Request syntax

```
PUT /webapi/locations HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

body

object

No

The request body.

LocationId

string

Yes

The location ID.

**Note**

Call the RegisterLocation operation to obtain the location ID.

LOC-AB8FBC17F95A4AF5

InventoryCollectEnabled

boolean

No

Specifies whether to enable OSS inventory.

true

OssLogCollectEnabled

boolean

No

Specifies whether to enable OSS logging.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

RequestId

string

The request ID.

8030C902-C25B-1839-867D-E6F70A5B9810

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Data

object

The returned data.

LocationId

string

The location ID.

LOC-AB8FBC17F95A4AF5

StorageCollectTaskOperationResultList

array

The results for updating collection tasks.

[StorageCollectTaskOperationResult](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-storagecollecttaskoperationresult)

The result for updating a collection task.

## Examples

Success response

`JSON` format

```
{
  "RequestId": "8030C902-C25B-1839-867D-E6F70A5B9810",
  "Success": true,
  "Data": {
    "LocationId": "LOC-AB8FBC17F95A4AF5",
    "StorageCollectTaskOperationResultList": [
      {
        "Success": true,
        "TaskId": "",
        "TaskType": "",
        "DlfCreated": true,
        "ErrCode": "",
        "ErrMessage": ""
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/UpdateRegisteredLocation#workbench-doc-change-demo) for a complete list.
