Attaches a specified PolarLakeBase cold-storage instance to a PolarDB application.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/AttachApplicationPolarFS)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/AttachApplicationPolarFS)

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

polardb:AttachApplicationPolarFS

none

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

ApplicationId

string

Yes

Application ID

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PolarFSInstanceId

string

Yes

PolarLakeBase cold-storage instance ID

Only the following applications support cold-storage instances:

-   Supabase
    

pcs-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PolarFSAccessKeyId

string

No

AccessKey ID of the Alibaba Cloud account or RAM user. Ensure that you granted permissions to this account or user when you created the PolarLakeBase instance.

LT\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PolarFSAccessKeySecret

string

No

AccessKey secret of the Alibaba Cloud account or RAM user

H3\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema

RequestId

string

Request ID

3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF

ApplicationId

string

Application ID

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PolarFSInstanceId

string

PolarLakeBase instance ID

pcs-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF",
  "ApplicationId": "pa-**************",
  "PolarFSInstanceId": "pcs-**************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/AttachApplicationPolarFS#workbench-doc-change-demo) for a complete list.
