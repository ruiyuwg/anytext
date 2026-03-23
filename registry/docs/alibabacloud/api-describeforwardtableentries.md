Queries DNAT entries.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeForwardTableEntries)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeForwardTableEntries)

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

vpc:DescribeForwardTableEntries

get

\*ForwardTable

`acs:vpc:{#regionId}:{#accountId}:forwardtable/{#ForwardTableId}`

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

The ID of the region where you want to create the NAT gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ForwardTableId

string

No

The ID of the DNAT table.

\*\*

**Description** You must specify at least one of **ForwardTableId** and **NatGatewayId**.

ftb-bp1mbjubq34hlcqpa\*\*\*\*

ForwardEntryId

string

No

The ID of the DNAT entry.

fwd-8vbn3bc8roygjp0gy\*\*\*\*

ExternalIp

string

No

-   The elastic IP addresses (EIPs) that can be accessed over the Internet when you query DNAT entries of Internet NAT gateways.
-   The NAT IP addresses that can be accessed by external networks when you query DNAT entries of Virtual Private Cloud (VPC) NAT gateways.

116.28.XX.XX

ExternalPort

string

No

-   The external port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways.
    
    -   Valid values: **1** to **65535**.
    -   If you want to query a port range, separate the first port and last port with a forward slash (/), such as `10/20`.
    -   If you set **ExternalPort** to a port range, you must also set **InternalPort** to a port range, and the number of ports specified by these parameters must be the same. For example, if you set **ExternalPort** to `10/20`, you can set **InternalPort** to `80/90`.
-   The port that is used when the NAT IP address can be accessed by external networks when you query DNAT entries of VPC NAT gateways. Valid values: **1** to **65535**.
    

8080

InternalIp

string

No

The private IP address.

-   The private IP address of the ECS instance that uses DNAT entries to communicate with the Internet when you query DNAT entries of Internet NAT gateways.
-   The private IP address that uses DNAT entries for communication when you query DNAT entries of VPC NAT gateways.

192.168.XX.XX

InternalPort

string

No

-   The internal port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways. Valid values: **1** to **65535**.
-   The port of the destination ECS instance to be mapped when you query DNAT entries of VPC NAT gateways. Valid values: **1** to **65535**.

80

IpProtocol

string

No

The protocol. Valid values:

-   **TCP**
-   **UDP**
-   **Any**

TCP

ForwardEntryName

string

No

The name of the DNAT entry.

The name must be 2 to 128 characters in length, and can contain digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

ForwardEntry-1

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

NatGatewayId

string

No

The ID of the NAT gateway.

\*\*

**Description** You must specify at least one of **ForwardTableId** and **NatGatewayId**.

ngw-bp1uewa15k4iy5770\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

A6C4A8B1-7561-4509-949C-20DEB40D71E6

PageNumber

integer

The page number.

1

TotalCount

integer

The number of entries returned.

5

ForwardTableEntries

array<object>

The details of DNAT entries.

ForwardTableEntry

object

Status

string

The status of the DNAT entry. Valid values:

-   **Pending**
-   **Available**
-   **Deleting**

Available

ForwardEntryId

string

The ID of the DNAT entry.

fwd-119smw5tk\*\*\*\*

InternalIp

string

The private IP address.

-   The private IP address of the ECS instance that uses DNAT entries to communicate with the Internet when you query DNAT entries of Internet NAT gateways.
-   The private IP address that uses DNAT entries when you query DNAT entries of VPC NAT gateways.

192.168.XX.XX

InternalPort

string

-   The internal port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways.
-   The destination ECS instance port to be mapped when you query DNAT entries of VPC NAT gateways.

25

ForwardEntryName

string

The name of the DNAT entry.

ForwardEntry-1

ForwardTableId

string

The ID of the DNAT table to which the DNAT entry belongs.

ftb-11tc6xgmv\*\*\*\*

IpProtocol

string

The protocol. Valid values:

-   **TCP**
-   **UDP**
-   **Any**

TCP

ExternalPort

string

-   The external port or port range that is used for port forwarding when you query DNAT entries of Internet NAT gateways.
-   The port that is used when the NAT IP address can be accessed by external networks when you query DNAT entries of VPC NAT gateways.

80

ExternalIp

string

-   The EIPs that can be accessed over the Internet when you query DNAT entries of Internet NAT gateways.
-   The NAT IP addresses that can be accessed by external networks when you query DNAT entries of VPC NAT gateways.

139.79.XX.XX

NatGatewayId

string

The ID of the NAT gateway to which the DNAT entry belongs.

ngw-bp1uewa15k4iy5770\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "A6C4A8B1-7561-4509-949C-20DEB40D71E6",
  "PageNumber": 1,
  "TotalCount": 5,
  "ForwardTableEntries": {
    "ForwardTableEntry": [
      {
        "Status": "Available",
        "ForwardEntryId": "fwd-119smw5tk****",
        "InternalIp": "192.168.XX.XX",
        "InternalPort": 25,
        "ForwardEntryName": "ForwardEntry-1",
        "ForwardTableId": "ftb-11tc6xgmv****",
        "IpProtocol": "TCP",
        "ExternalPort": 80,
        "ExternalIp": "139.79.XX.XX",
        "NatGatewayId": "ngw-bp1uewa15k4iy5770****"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorretForwardEntryStatus

Some Forward entry status blocked this operation..

The operation is not supported because one or more DNAT entries in the DNAT table are in the Pending or Modifying state.

400

DESCRIBE\_FORWARD\_PARAM\_INVALID

ForwardTableId and natGatewayId can not both be null

\-

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidForwardTableId.NotFound

Specified forwardTableId does not exist

The specified DNAT table does not exist. Check the parameter and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeForwardTableEntries?updateTime=2025-11-04#workbench-doc-change-demo)

2023-08-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeForwardTableEntries?updateTime=2023-08-09#workbench-doc-change-demo)

2023-03-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeForwardTableEntries?updateTime=2023-03-01#workbench-doc-change-demo)
