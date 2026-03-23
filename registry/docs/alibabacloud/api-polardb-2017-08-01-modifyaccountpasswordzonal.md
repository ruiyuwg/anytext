Modifies the password of an account in a PolarDB for Xscale cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAccountPasswordZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAccountPasswordZonal)

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

polardb:ModifyAccountPasswordZonal

update

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

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

AccountName

string

Yes

The account name.

testacc

NewAccountPassword

string

Yes

The new password for the account. The password must meet the following requirements:

-   Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   Be 8 to 32 characters in length.
    
-   The special characters are `!@#$%^&*()_+-=`.
    

Pw123456

PasswordType

string

No

The password type.

Tair

ClientToken

string

No

A client-generated, case-sensitive token that you can use to ensure the idempotence of the request. The token must be unique among different requests and can be up to 64 ASCII characters in length.

6000170000591aed949d0f5\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

925B84D9-CA72-432C-95CF-738C22\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "925B84D9-CA72-432C-95CF-738C22******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

EngineMigration.ActionDisabled

Specified action is disabled while custins is in engine migration.

The specified operation is disabled when custins is being migrated across engines.

400

LockTimeout

The request processing has failed due to lock timeout.

Failed to process the request due to a lock timeout.

400

InvalidAccountPassword.Malformed

The specified parameter AccountPassword is not valid.

The specified AccountPassword parameter is invalid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyAccountPasswordZonal#workbench-doc-change-demo) for a complete list.
