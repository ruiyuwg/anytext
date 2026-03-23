Enables or disables a VPC firewall. A VPC firewall protects traffic between two VPCs that are connected by an Express Connect circuit.

## Operation description

This API call modifies the status of a VPC firewall. A VPC firewall protects traffic between two virtual private clouds (VPCs) that are connected by an Express Connect circuit. When the VPC firewall is enabled, it protects traffic between the two VPCs. When the VPC firewall is disabled, it no longer protects traffic between the two VPCs.

Before you make this API call, you must create a VPC firewall using the [CreateVpcFirewallConfigure](/help/en/cloud-firewall/api-createvpcfirewallconfigure) API call.

## QPS limit

The queries per second (QPS) limit for this API call is 10 for each Alibaba Cloud account. If you exceed the limit, your API calls are throttled, which may affect your business. Plan your API calls accordingly.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/ModifyVpcFirewallSwitchStatus)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/ModifyVpcFirewallSwitchStatus)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the request and response. Valid values:

-   **zh** (default): Chinese.
    
-   **en**: English.
    

zh

VpcFirewallId

string

Yes

The instance ID of the VPC firewall.

**Note**

Call the [DescribeVpcFirewallList](/help/en/cloud-firewall/api-describevpcfirewalllist) API call to query the instance ID of the VPC firewall.

vfw-m5e7dbc4y\*\*\*\*

FirewallSwitch

string

Yes

The status of the VPC firewall. Valid values:

-   **open**: enabled.
    
-   **close**: disabled.
    

open

MemberUid

string

No

The UID of the member account.

258039427902\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

850A84D6-0DE4-4797-A1E8-00090125afj2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "850A84D6-0DE4-4797-A1E8-00090125afj2"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

200

ErrorDBUpdateError

A database update error occurred.

A database update error occurred.

400

ErrorFirewallSwitch

The firewall enabling parameter is incorrect. Please select again.

The specified switch of the firewall is invalid. Enter another value.

400

ErrorDBTxError

A database transaction error occurred.

The error message returned because an internal error has occurred in the database transaction.

400

ErrorRecordLog

An error occurred while updating the operation log.

An error occurred while updating the operation log.

400

ErrorAliUid

Aliuid invalid.

The aliuid is invalid.

400

ErrorInvalidMemberUid

Member uid is invalid

The member is invalid.

400

ErrorFirewallId

Firewall ID is invalid.

The ID of the firewall is invalid.

400

ErrorVpcFirewallNotFound

Vpc firewall not found.

The specified VPC firewall does not exist. Select another one.

400

ErrorDBSelectError

A database select error occurred.

The error message returned because an internal error has occurred in querying the database.

400

ErrorNetworkInterfaceNotFound

The NIC of the firewall is invalid. Check its configurations.

The NIC of the firewall is invalid. Check the parameter.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/ModifyVpcFirewallSwitchStatus#workbench-doc-change-demo) for a complete list.
