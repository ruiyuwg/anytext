Queries an access control list (ACL).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ga/2019-11-20/GetAcl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ga/2019-11-20/GetAcl)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ga:GetAcl

get

\*Acl

`acs:ga:{#regionId}:{#accountId}:acl/{#aclId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The operation that you want to perform. Set the value to **GetAcl**.

cn-hangzhou

AclId

string

Yes

The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.

nacl-hp34s2h0xx1ht4nwo\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the network ACL.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

AclId

string

The ID of the request.

nacl-hp34s2h0xx1ht4nwo\*\*\*\*

AddressIPVersion

string

The ID of the network ACL.

IPv4

AclStatus

string

The IP version of the network ACL. Valid values:

-   **IPv4**
-   **IPv6**

active

AclEntries

array<object>

The entries of the ACL.

AclEntries

object

The list of network ACL entries that are returned. A maximum of 20 network ACL entries can be returned.

Entry

string

An IP address entry (192.168.XX.XX) or a CIDR block entry (10.0.XX.XX/24).

10.0.XX.XX/24

EntryDescription

string

The description of the ACL entry.

test-entry

RelatedListeners

array<object>

The listeners that are associated with the ACL.

RelatedListeners

object

The listeners that are associated with the network ACL.

ListenerId

string

The ID of the listener.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

AclType

string

The type of the ACL. Valid values:

-   **white**: Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists are suitable for scenarios in which you want to allow access from specific IP addresses to an application. If a whitelist is improperly configured, risks may arise. After a whitelist is configured for a listener, only requests from the IP addresses that are added to the whitelist are distributed by the listener. If a whitelist is enabled but no IP address is added to the whitelist, the listener forwards all requests.
-   **black**: All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists are suitable for scenarios in which you want to deny access from specific IP addresses to an application. If a blacklist is enabled but no IP address is added to the blacklist, the listener forwards all requests.

White

AcceleratorId

string

The ID of the GA instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

AclName

string

The ID of the GA instance.

test-acl

ResourceGroupId

string

The name of the network ACL.

rg-acfmx7itmygzsza

Tags

array<object>

The tag of the ACL.

Tags

object

The tag value.

Key

string

The key of tag N that is add to the ACL.

tag-key

Value

string

The value of tag N that is add to the ACL.

tag-value

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "AclId": "nacl-hp34s2h0xx1ht4nwo****",
  "AddressIPVersion": "IPv4",
  "AclStatus": "active",
  "AclEntries": [
    {
      "Entry": "10.0.XX.XX/24",
      "EntryDescription": "test-entry"
    }
  ],
  "RelatedListeners": [
    {
      "ListenerId": "lsr-bp1bpn0kn908w4nbw****",
      "AclType": "White",
      "AcceleratorId": "ga-bp1odcab8tmno0hdq****"
    }
  ],
  "AclName": "test-acl",
  "ResourceGroupId": "rg-acfmx7itmygzsza",
  "Tags": [
    {
      "Key": "tag-key",
      "Value": "tag-value"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode).

## Change history

Change time

Summary of changes

Operation

2021-04-27

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ga/2019-11-20/GetAcl?updateTime=2021-04-27#workbench-doc-change-demo)
