Modifies the status of a VPC firewall that protects traffic between network instances in a Cloud Enterprise Network (CEN) and a specified VPC.

## Operation description

This operation modifies the status of a VPC firewall. The firewall protects traffic between network instances in a Cloud Enterprise Network (CEN) and a specified Virtual Private Cloud (VPC). The network instances include VPCs, Virtual Border Routers (VBRs), and Cloud Connect Network (CCN) instances. If the firewall is enabled, it protects traffic between the network instances in the CEN and the specified VPC. If the firewall is disabled, it no longer protects this traffic.

Before you call this operation, you must create a VPC firewall by calling the [CreateVpcFirewallCenConfigure](/help/en/cloud-firewall/api-createvpcfirewallcenconfigure) operation.

## Limits

This operation is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled. Throttling may affect your business. Plan your calls accordingly.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/ModifyVpcFirewallCenSwitchStatus)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/ModifyVpcFirewallCenSwitchStatus)

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

You can call the [DescribeVpcFirewallCenList](/help/en/cloud-firewall/api-describevpcfirewallcenlist) operation to query the instance ID of the VPC firewall.

vfw-m5e7dbc4y\*\*\*\*

FirewallSwitch

string

Yes

The status of the VPC firewall. Valid values:

-   **open**: Enable.
    
-   **close**: Disable.
    

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

400

ErrorVpcFirewallId

The VPC firewall ID is invalid.

The VPC firewall ID is invalid.

400

ErrorFirewallSwitch

The firewall enabling parameter is incorrect. Please select again.

The specified switch of the firewall is invalid. Enter another value.

400

ErrorDBTxError

A database transaction error occurred.

The error message returned because an internal error has occurred in the database transaction.

400

ErrorDBUpdateError

A database update error occurred.

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

ErrorCenTRManualModifySwitchStatus

CEN-TR manual mode does not support modifying the firewall status, if you need to close it, please delete the VPC firewall.

CEN-TR manual mode does not support modifying the firewall status, if you need to disable it, please delete the VPC boundary firewall.

400

ErrorCenRouteMapExist

cen route map is exist.

Creating a VPC perimeter firewall is not allowed RouteMap it already exists. Please contact the cloud firewall after-sales technical support.

400

ErrorFirewallNotConfig

Firewall not config

The firewall is not configured.

400

ErrorFirewallStatusClosed

firewall is already closed.

The firewall is turned off.

400

ErrorNetworkInterfaceNotFound

The NIC of the firewall is invalid. Check its configurations.

The NIC of the firewall is invalid. Check the parameter.

400

ErrorRecordLog

record operation log error.

Update operation log error.

400

ErrorBandwidthPenalty

Cloud Firewall bandwidth is being overused.

Cloud Firewall bandwidth is being overused.

400

ErrorFirewallVSwitchCidrConflict

Firewall switch network segment conflicts with business network segment.

Firewall switch network segment conflicts with business network segment

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/ModifyVpcFirewallCenSwitchStatus#workbench-doc-change-demo) for a complete list.
