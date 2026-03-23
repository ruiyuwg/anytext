Queries the configuration of an access control list (ACL).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeAccessControlListAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeAccessControlListAttribute)

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

slb:DescribeAccessControlListAttribute

get

\*acl

`acs:slb:{#regionId}:{#accountId}:acl/{#aclId}`

-   slb:tag

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID of the ACL.

You can call the [DescribeRegions](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-describeregions) operation to query the most recent region list.

cn-hangzhou

AclId

string

Yes

The ID of the ACL that you want to query.

acl-bp1ut10zzvh1y8dfs\*\*\*\*

AclEntryComment

string

No

The remarks of the ACL entry.

test

Page

integer

No

The number of the page to return.

1

PageSize

integer

No

The number of entries to return on each page. Maximum value: **50**. Default value: **10**.

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

AclId

string

The ACL ID.

acl-bp1ut10zzvh1y8dfs\*\*\*\*

Tags

object

Tag

array<object>

The tags added to the ACL.

object

The tags.

TagKey

string

The tag key.

TestKey

TagValue

string

The tag value.

TestValue

AddressIPVersion

string

The IP version. Valid values: **ipv4** and **ipv6**.

ipv4

RequestId

string

The ID of the request.

C9906A1D-86F7-4C9C-A369-54DA42EF206A

ResourceGroupId

string

The resource group ID.

rg-acfmz3jksig\*\*\*\*

AclName

string

The ACL name.

doctest

AclEntrys

object

AclEntry

array<object>

The information about the access control policy.

object

The information about the access control policy.

AclEntryComment

string

The remarks of the ACL entry.

The remarks of the ACL entry.

AclEntryIP

string

The IP entry in the ACL.

192.168.0.1

RelatedListeners

object

RelatedListener

array<object>

The listeners with which the ACL is associated.

object

The listeners that are associated with the network ACL.

ListenerPort

integer

The frontend port of the listener with which the ACL is associated.

443

AclType

string

The type of ACL. Valid values:

-   **black**
    
-   **white**
    

white

Protocol

string

The type of protocol that the associated listener uses.

https

LoadBalancerId

string

The CLB instance ID.

lb-bp1qpzldlm38bnexl\*\*\*\*

CreateTime

string

The time when the ACL was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.

2022-08-31T02:49:05Z

TotalAclEntry

integer

The total number of ACL entries.

200

## Examples

Success response

`JSON` format

```
{
  "AclId": "acl-bp1ut10zzvh1y8dfs****",
  "Tags": {
    "Tag": [
      {
        "TagKey": "TestKey",
        "TagValue": "TestValue"
      }
    ]
  },
  "AddressIPVersion": "ipv4",
  "RequestId": "C9906A1D-86F7-4C9C-A369-54DA42EF206A",
  "ResourceGroupId": "rg-acfmz3jksig****",
  "AclName": "doctest",
  "AclEntrys": {
    "AclEntry": [
      {
        "AclEntryComment": "The remarks of the ACL entry.",
        "AclEntryIP": "192.168.0.1"
      }
    ]
  },
  "RelatedListeners": {
    "RelatedListener": [
      {
        "ListenerPort": 443,
        "AclType": "white",
        "Protocol": "https",
        "LoadBalancerId": "lb-bp1qpzldlm38bnexl****"
      }
    ]
  },
  "CreateTime": "2022-08-31T02:49:05Z",
  "TotalAclEntry": 200
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/DescribeAccessControlListAttribute#workbench-doc-change-demo) for a complete list.
