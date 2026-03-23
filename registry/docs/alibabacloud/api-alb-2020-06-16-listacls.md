Queries the access control lists (ACLs) in a region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Alb/2020-06-16/ListAcls)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Alb/2020-06-16/ListAcls)

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

alb:ListAcls

list

\*Acl

`acs:alb:{#regionId}:{#accountId}:acl/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AclIds

array

No

Filter access control lists (ACLs) by ACL ID. You can specify at most 20 ACL IDs in each call.

string

No

The ACL ID.

acl-hp34s2h0xx1ht4nwo\*\*\*\*

AclNames

array

No

The ACL names. You can specify up to 10 ACL names in each call.

string

No

The ACL name.

test-acl

ResourceGroupId

string

No

The ID of the resource group. You can filter the query results based on the specified ID.

rg-atstuj3rtopty\*\*\*\*

NextToken

string

No

The token that is used for the next query. Valid values:

-   If this is your first query or no next query is to be sent, ignore this parameter.
    
-   If a next query is to be sent, set the value to the value of NextToken that is returned from the last call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return. This parameter is optional. Valid values: **1** to **100**. Default value: **20**.

50

Tag

array<object>

No

The tags.

object

No

The tags.

Key

string

No

The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

env

Value

string

No

The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

product

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

Acls

array<object>

A list of ACLs.

array<object>

The network ACLs.

AclId

string

The ACL ID.

acl-hp34s2h0xx1ht4nwo\*\*\*\*

AclName

string

The name of the ACL.

test-acl

AclStatus

string

The status of the ACL. Valid values:

-   **Creating**: The network ACL is being created.
    
-   **Available**: The network ACL is available.
    
-   **Configuring**
    

Available

AddressIPVersion

string

The IP version of the ACL. Only **IPv4** may be returned.

IPv4

ResourceGroupId

string

The ID of the resource group.

rg-atstuj3rtopty\*\*\*\*

ConfigManagedEnabled

boolean

Indicates whether configuration management is enabled. Valid values:

-   **true**
    
-   **false**
    

false

CreateTime

string

The time when the ACL was created. The follows the `YYYY-MM-DDThh:mm:ssZ` format.

2023-02-15T07:37:33Z

Tags

array<object>

The tags.

object

The tags.

Key

string

The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

env

Value

string

The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

product

MaxResults

integer

The maximum number of network ACLs returned. This parameter is optional. Valid values: **1** to **100**. If this parameter is not set, the default value **20** is returned.

20

NextToken

string

The token that is used for the next query. Valid values:

-   If **NextToken** is empty, it indicates that no next query is to be sent.
    
-   If **NextToken** is returned, the value indicates the token that is used for the next query.
    

FFmyTO70t\*\*\*\*

RequestId

string

The request ID.

593B0448-D13E-4C56-AC0D-FDF\*\*\*\*\*\*

TotalCount

integer

The total number of entries returned.

10

## Examples

Success response

`JSON` format

```
{
  "Acls": [
    {
      "AclId": "acl-hp34s2h0xx1ht4nwo****",
      "AclName": "test-acl",
      "AclStatus": "Available",
      "AddressIPVersion": "IPv4",
      "ResourceGroupId": "rg-atstuj3rtopty****",
      "ConfigManagedEnabled": false,
      "CreateTime": "2023-02-15T07:37:33Z",
      "Tags": [
        {
          "Key": "env",
          "Value": "product"
        }
      ]
    }
  ],
  "MaxResults": 20,
  "NextToken": "FFmyTO70t****",
  "RequestId": "593B0448-D13E-4C56-AC0D-FDF******",
  "TotalCount": 10
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

403

Forbidden.Acl

ACL authentication has failed.

See [Error Codes](https://api.alibabacloud.com/document/Alb/2020-06-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Alb/2020-06-16/ListAcls#workbench-doc-change-demo) for a complete list.
