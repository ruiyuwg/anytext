Queries a list of permissions for a database role.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeEncryptionDBRolePrivilege)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeEncryptionDBRolePrivilege)

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

polardb:DescribeEncryptionDBRolePrivilege

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

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

DBClusterId

string

Yes

The cluster ID.

pc-wz9fb5nn44u1d\*\*\*\*

RolePrivilegeNameList

string

No

The name of the role permission to query. To query multiple permissions at a time, enter multiple permission names and separate them with commas (,).

**Note**

-   Call the [DescribeEncryptionDBRolePrivilege](/help/en/polardb/polardb-for-mysql/api-describemaskingrules) operation to view the details of all role access policy rules for the cluster. The details include the permission names.
    

test

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

D0CEC6AC-7760-409A-A0D5-E6CD86\*\*\*\*\*\*

Message

string

The response message.

**Note**

If the request is successful, \`Successful\` is returned. If the request fails, an error message, such as an error code, is returned.

Successful

Success

boolean

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

Data

object

The result set.

RolePrivilegeList

array<object>

A list of role access policies.

object

A role access policy.

RolePrivilegeName

string

The name of the role permission.

test

Negation

string

Other users.

test

Encryption

string

The regular users.

\[alton01\]

NotEncryption

string

The privileged users.

\[alton\]

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D0CEC6AC-7760-409A-A0D5-E6CD86******",
  "Message": "Successful",
  "Success": true,
  "Data": {
    "RolePrivilegeList": [
      {
        "RolePrivilegeName": "test",
        "Negation": "test",
        "Encryption": "[alton01]",
        "NotEncryption": "[alton]"
      }
    ]
  },
  "DBClusterId": "pc-****************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeEncryptionDBRolePrivilege#workbench-doc-change-demo) for a complete list.
