Adds custom route entries to the route table of a vRouter in a virtual private cloud (VPC).

## Operation description

## [](#references)[](#)References

-   **CreateRouteEntries** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeRouteEntryList](/help/en/vpc/api-describerouteentrylist) operation to query the status of the task.
    
    -   If the route entry is in the **Creating** state, the route entry is being created.
    -   If the route entry is in the **Created** state, the route entry is created.
-   You cannot repeatedly call the **CreateRouteEntries** operation to create the same route entry within the specified period of time.
    

**When you call this operation to add custom route entries to the route table of a vRouter, take note of the following items:**

-   A route table can contain up to 200 custom route entries.
-   The destination CIDR block (**DstCidrBlock**) of a custom route entry cannot be the same as or overlap with the CIDR block of a vSwitch in the VPC.
-   The destination CIDR block (**DstCidrBlock**) of a custom route entry cannot be 100.64.0.0/10 or its subnets.
-   The destination CIDR blocks (**DstCidrBlock**) of route entries in the same route table must be unique.
-   If you do not include the mask length when you specify the destination CIDR block (**DstCidrBlock**), the destination CIDR block is considered a host IP address whose mask length is 32 bits.
-   Multiple custom route entries can point to the same next hop (**NextHop**).
-   The next hop (**NextHop**) of a custom route entry must belong to the same VPC as the route table.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateRouteEntries)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateRouteEntries)

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

vpc:CreateRouteEntries

create

\*RouteEntry

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

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

The region ID of the route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RouteEntries

array<object>

Yes

The routes.

object

Yes

DstCidrBlock

string

Yes

The destination CIDR block of the custom route. IPv4 CIDR blocks, IPv6 CIDR blocks, and prefix lists are supported. You can enter up to 50 destination CIDR blocks. Make sure that the following requirements are met:

-   The destination CIDR block cannot point to 100.64.0.0/10 or belong to 100.64.0.0/10.
-   The destination CIDR block of each route in the route table is unique.

192.168.0.0/24

RouteTableId

string

Yes

The ID of the route table to which you want to add custom route s. You can specify at most 50 route table IDs.

vtb-bp145q7glnuzd\*\*\*\*

IpVersion

integer

No

The IP version. Valid values: You can specify at most 50 IP versions. Valid values:

-   **4**: IPv4
-   **6**: IPv6

IPv4

NextHop

string

Yes

The ID of the next hop for the custom route. You can specify at most 50 instance IDs.

i-j6c2fp57q8rr4jlu\*\*\*\*

NextHopType

string

Yes

The type of next hop. You can specify at most 50 next hop types. Valid values:

-   **Instance**: Elastic Compute Service (ECS) instance. This is the default value.
-   **HaVip**: high-availability virtual IP address (HaVip).
-   **RouterInterface**: router interface.
-   **NetworkInterface**: elastic network interface (ENI).
-   **VpnGateway**: VPN gateway.
-   **IPv6Gateway**: IPv6 gateway.
-   **NatGateway**: NAT gateway.
-   **Attachment**: transit router.
-   **VpcPeer**: VPC peering connection.
-   **Ipv4Gateway**: IPv4 gateway.
-   **GatewayEndpoint**: gateway endpoint.
-   **CenBasic**: CEN does not support transfer routers.
-   **Ecr**: Express Connect Router (ECR).

RouterInterface

Name

string

No

The name of the custom route that you want to add. You can specify at most 50 names.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

test

Description

string

No

The description of the custom route. You can specify at most 50 descriptions.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

test

DryRun

boolean

No

Specifies whether to only precheck the request. Valid values:

-   **true**: prechecks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
-   **false** (default): sends the request. After the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.

true

## Response parameters

Parameter

Type

Description

Example

object

The number of completed tasks.

SuccessCount

integer

The number of custom route entries that were successfully added.

2

FailedCount

integer

The number of custom route entries that failed to be added.

2

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

FailedRouteEntries

array<object>

The details about the custom route entry that failed to be added.

FailedRouteEntries

object

DstCidrBlock

string

The destination CIDR block of the custom route entry that failed to be added.

192.168.0.0/24

NextHop

string

The ID of the next hop of the custom route entry that failed to be added.

i-j6c2fp57q8rr4jlu\*\*\*\*

FailedCode

string

The error code.

VPC\_ROUTE\_ENTRY\_CIDR\_BLOCK\_DUPLICATE

FailedMessage

string

The error message.

Specified CIDR block is already exists, entry.cidrBlock=xxxx

RouteEntryIds

array

The information about the ID of the custom route entry that was successfully added.

RouteEntryIds

string

The ID of the custom route entry that was successfully added.

rte-sn6vjkioxte1gz83z\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "SuccessCount": 2,
  "FailedCount": 2,
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "FailedRouteEntries": [
    {
      "DstCidrBlock": "192.168.0.0/24",
      "NextHop": "i-j6c2fp57q8rr4jlu****",
      "FailedCode": "VPC_ROUTE_ENTRY_CIDR_BLOCK_DUPLICATE",
      "FailedMessage": "Specified CIDR block is already exists, entry.cidrBlock=xxxx"
    }
  ],
  "RouteEntryIds": [
    "rte-sn6vjkioxte1gz83z****"
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The request passed the dry run.

400

MissingParam.RouteTableId

The parameter RouteTableId is missing.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntries?updateTime=2025-05-19#workbench-doc-change-demo)

2025-02-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntries?updateTime=2025-02-10#workbench-doc-change-demo)

2023-08-07

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntries?updateTime=2023-08-07#workbench-doc-change-demo)

2023-03-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntries?updateTime=2023-03-30#workbench-doc-change-demo)
