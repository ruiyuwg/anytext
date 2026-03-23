Queries information about all access control policy groups for a VPC firewall.

## Operation description

You can call this operation to query information about all access control policy groups for a VPC firewall.

## QPS limit

The queries per second (QPS) limit for this operation is 10 for each user. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallAclGroupList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallAclGroupList)

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

yundun-cloudfirewall:DescribeVpcFirewallAclGroupList

get

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

Lang

string

No

The language of the response message.

-   **zh** (default): Chinese
    
-   **en**: English
    

zh

FirewallConfigureStatus

string

No

The configuration status of the VPC firewall.

-   **configured**: The VPC border firewall is configured, which means that a firewall is created.
    
-   If you leave this parameter empty, the access control policies of all VPC border firewalls are queried.
    

configured

CurrentPage

string

No

The number of the page to return. Default value: 1.

1

PageSize

string

No

The number of entries to return on each page. Maximum value: 50.

10

FirewallId

string

No

The instance ID of the VPC border firewall.

vfw-tr-5b202e7f0be64611\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of access control policy groups for the VPC firewall.

1

RequestId

string

The ID of the request.

CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D

AclGroupList

array<object>

The information about the access control policy groups for the VPC firewall.

object

AclGroupId

string

The ID of the access control policy group for the VPC border firewall.

Valid values:

-   If the VPC border firewall protects a Cloud Enterprise Network (CEN) instance, the ID of the CEN instance is used as the policy group ID.
    
    Example: cen-ervw0g12b5jbw\*\*\*\*
    
-   If the VPC border firewall protects an Express Connect circuit, the instance ID of the VPC border firewall is used as the policy group ID.
    
    Example: vfw-a42bbb7b887148c9\*\*\*\*
    

vfw-a42bbb7b887148c9\*\*\*\*

AclGroupName

string

The name of the access control policy group for the VPC border firewall.

-   If the VPC border firewall protects a CEN instance, the name of the CEN instance is used.
    
-   If the VPC border firewall protects an Express Connect circuit, the name of the VPC border firewall is used.
    

group\_test

MemberUid

string

The ID of the member account.

258039427902\*\*\*\*

AclRuleCount

integer

The number of policies in the access control policy group for the VPC border firewall.

9

IsDefault

boolean

Indicates whether this is the default firewall. Valid values:

-   **true**: yes
    
-   **false**: no
    

true

AclConfig

object

The ACL engine mode.

StrictMode

integer

Indicates whether strict mode is enabled.

-   1: enabled
    
-   0: disabled
    

1

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "RequestId": "CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D",
  "AclGroupList": [
    {
      "AclGroupId": "vfw-a42bbb7b887148c9****",
      "AclGroupName": "group_test",
      "MemberUid": "258039427902****",
      "AclRuleCount": 9,
      "IsDefault": true,
      "AclConfig": {
        "StrictMode": 1
      }
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

ErrorAliUid

The aliuid is invalid.

The aliuid is invalid.

400

ErrorDBSelectError

A database select error occurred.

The error message returned because an internal error has occurred in querying the database.

400

ErrorPageNo

Either page number or page size is invalid.

Either page number or page size is invalid.

400

ErrorInvalidMemberUid

Member uid is invalid

The member is invalid.

400

ErrorConfigureStatus

firewall configure status invalid.

Firewall status parameter error, please re-select.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/DescribeVpcFirewallAclGroupList#workbench-doc-change-demo) for a complete list.
