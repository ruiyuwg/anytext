Modifies the configuration of a DHCP options set.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute)

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

vpc:UpdateDhcpOptionsSetAttribute

update

\*DhcpOptionsSet

`acs:vpc:{#regionId}:{#accountId}:dhcpoptionsset/{#DhcpOptionsSetId}`

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

The region where the DHCP options set is deployed. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DhcpOptionsSetId

string

Yes

The ID of the DHCP options set.

dopt-o6w0df4epg9zo8isy\*\*\*\*

DomainNameServers

string

No

The IP address of the DNS server. You can enter at most four DNS server IP addresses. Separate IP addresses with commas (,).

**Note** If you do not specify a DNS server IP address, Elastic Compute Service (ECS) instances use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.

192.XX.XX.123

DomainName

string

No

The root domain. For example, you can set the value to example.com.

After a DHCP options set is associated with a virtual private cloud (VPC), the root domain in the DHCP options set is automatically synchronized with the ECS instances in the VPC.

example.com

DhcpOptionsSetName

string

No

The name of the DHCP options set.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter.

name

DhcpOptionsSetDescription

string

No

Enter a description for the DHCP options set.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`. You can also leave the description empty.

description

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

**true**: performs a dry run. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.

**false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

LeaseTime

string

No

The lease time of the IPv4 addresses for the DHCP options set.

-   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
-   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.

**Note** If you specify a value, you must also specify the unit.

3650d

Ipv6LeaseTime

string

No

The lease time of the IPv6 addresses for the DHCP options set.

-   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
-   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.

**Note** If you specify a value, you must also specify the unit.

3650d

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDhcpOptionsSetId.NotFound

The specified dhcpOptionsSetId does not exist.

The DHCP options set does not exist. Check whether the parameter is set to a valid value.

400

IncorrectStatus.DhcpOptionsSet

The DhcpOptionsSet status does not support this operation.

The DHCP options set that is associated with the VPC is being configured. As a result, the DHCP options set does not support this operation. You can perform the operation after the status of the DHCP options set is stable.

400

IllegalParam.DomainNameServers

The specified DomainNameServers is invalid.

DomainNameServers is set to an invalid value.

400

IllegalParam.DomainName

The specified DomainName is invalid.

The error message returned because DomainName is set to an invalid value.

400

IllegalParam.DhcpOptionsSetName

The specified DhcpOptionsSetName is invalid.

DhcpOptionsSetName is set to an invalid value.

400

IllegalParam.DhcpOptionsSetDescription

The specified DhcpOptionsSetDescription is invalid.

DhcpOptionsSetDescription is set to an invalid value.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute?updateTime=2025-12-12#workbench-doc-change-demo)

2024-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute?updateTime=2024-12-13#workbench-doc-change-demo)

2024-04-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute?updateTime=2024-04-22#workbench-doc-change-demo)

2023-07-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute?updateTime=2023-07-05#workbench-doc-change-demo)

2021-11-16

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateDhcpOptionsSetAttribute?updateTime=2021-11-16#workbench-doc-change-demo)
