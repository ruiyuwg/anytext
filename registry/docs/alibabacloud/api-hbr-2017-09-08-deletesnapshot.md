Deletes a backup snapshot.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DeleteSnapshot)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DeleteSnapshot)

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

hbr:DeleteSnapshot

delete

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

Token

string

No

The token used for the deletion.

02WJDOE7

VaultId

string

No

The ID of the backup repository.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ClientId

string

No

The client ID. To delete an ECS File Backup snapshot, specify either this parameter or **InstanceId**.

c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SnapshotId

string

Yes

The ID of the backup snapshot.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SourceType

string

No

The type of the backup source. Valid values:

-   **ECS\_FILE**: ECS File Backup snapshot.
    
-   **OSS**: OSS backup snapshot.
    
-   **NAS**: NAS backup snapshot.
    
-   **UDM\_ECS**: ECS instance backup snapshot.
    

ECS\_FILE

InstanceId

string

No

The ID of the ECS instance. To delete an ECS File Backup snapshot, specify either this parameter or **ClientId**.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Force `deprecated`

boolean

No

This parameter is deprecated.

已弃用。

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The return code. A value of 200 indicates success.

200

Message

string

The returned message. If the request is successful, "successful" is returned. If the request fails, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DeleteSnapshot#workbench-doc-change-demo) for a complete list.
