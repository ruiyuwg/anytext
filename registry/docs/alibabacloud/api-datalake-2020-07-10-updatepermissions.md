Updates the permissions of a user or a DLF role.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/DataLake/2020-07-10/UpdatePermissions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/DataLake/2020-07-10/UpdatePermissions)

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

dlf:UpdatePermissions

update

\*All Resource

`*`

None

None

## Request syntax

```
PUT /api/metastore/auth/permissions/ HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Body

object

No

The HTTP request body, in the JSON format.

Type

string

Yes

The authorization type. Only Hive is supported.

Hive

MetaResource

[MetaResource](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-metaresource)

Yes

The metadata resource to grant permissions.

Accesses

Accesses

Yes

The access permissions to grant.

DelegateAccesses

Accesses

Yes

The grantable access permissions. This parameter is not available.

Principal

[Principal](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-principal)

Yes

The user or role to grant permissions. The format is as follows:

-   RAM user: acs:ram::\[accountId\]:user/\[userName\].
    
-   RAM role: acs:ram::\[accountId\]:role/\[roleName\].
    
-   Data lake role: acs:dlf::\[accountId\]:role/\[roleName\].
    

CatalogId

string

No

The ID of the catalog.

1344371

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

Code

string

The response code.

OK

Message

string

The returned message.

.

RequestId

string

The request ID.

B7F4B621-E41E-4C84-B97F-42B5380A32BB

Success

boolean

Indicates whether the call was successful. Valid values:

-   true
    
-   false
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "OK",
  "Message": ".",
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/DataLake/2020-07-10/UpdatePermissions#workbench-doc-change-demo) for a complete list.
