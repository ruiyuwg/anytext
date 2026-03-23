Resets the password of the root account in an ApsaraDB for MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ResetAccountPassword)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ResetAccountPassword)

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

dds:ResetAccountPassword

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The instance ID.

dds-bpxxxxxxxx

AccountName

string

Yes

The account whose password needs to be reset. Set the value to **root**.

root

AccountPassword

string

Yes

The new password.

-   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! # $ % ^ & * ( ) _ + - =`
    
-   The password must be 8 to 32 characters in length.
    

Ali!123456

CharacterType

string

No

The role of the instance.

-   If the instance is a sharded cluster instance, this parameter is required. Valid values: db and cs.
    
-   If the instance is a replica set instance, you can leave this parameter empty or set the parameter to normal.
    

db

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

06CBD06E-ABC9-4121-AB93-3C3820B3E7E6

## Examples

Success response

`JSON` format

```
{
  "RequestId": "06CBD06E-ABC9-4121-AB93-3C3820B3E7E6"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidAccountPassword.Malformed

Specified parameter AccountPassword is not valid.

The specified parameter AccountPassword is invalid.

400

InvalidAccountName.NotFound

The AccountName provided does not exist in our records.

400

InvalidAccountName.Malformed

The specified parameter AccountName is not valid.

403

OperationDenied.AccountStatus

The operation is not permitted due to status of account.

403

OperationDenied.AccountType

The operation is not permitted due to type of account.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ResetAccountPassword#workbench-doc-change-demo) for a complete list.
