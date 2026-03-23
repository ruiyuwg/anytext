Creates a DHCP options set.

## Operation description

-   **CreateDhcpOptionsSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call [GetDhcpOptionsSet](/help/en/vpc/developer-reference/api-vpc-2016-04-28-getdhcpoptionsset) to query the status of the task.
    
    -   If the vSwitch is in the **Pending** state, the DHCP options set is being configured.
    -   If the vSwitch is in the **Available** state, the DHCP options set is available.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateDhcpOptionsSet)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateDhcpOptionsSet)

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

vpc:CreateDhcpOptionsSet

create

\*DhcpOptionsSet

`acs:vpc:{#regionId}:{#accountId}:dhcpoptionsset/*`

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

The region to which the DHCP options set belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DomainNameServers

string

Yes

The IP address of the DNS server. You can enter at most four DNS server IP addresses. Separate IP addresses with commas (,).

**Note** If no IP address is specified, the Elastic Compute Service (ECS) instance uses the IP addresses 100.100.2.136 and 100.100.2.138, which are provided by Alibaba Cloud by default.

192.XX.XX.123

DhcpOptionsSetName

string

No

The name of the DHCP options set.

The name must be 1 to 128 characters in length and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

name

DhcpOptionsSetDescription

string

No

The description of the DHCP options set.

The description must be 1 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

description

DomainName

string

No

The root domain. For example, you can set the value to example.com.

After a DHCP options set is associated with a virtual private cloud (VPC), the root domain in the DHCP options set is automatically synchronized with the ECS instances in the VPC.

example.com

ResourceGroupId

string

No

The ID of the resource group to which the DHCP options set belongs.

rg-acfmxazb4ph\*\*\*\*

Tag

array<object>

No

The tag of the resource.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

A tag key can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request.

**true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.

**false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

LeaseTime

string

No

The lease time of the IPv4 addresses for the DHCP options set.

-   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
-   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.

**Note** When you enter a value, you must also specify the unit.

3650d

Ipv6LeaseTime

string

No

The lease time of the IPv6 addresses for the DHCP options set.

-   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
-   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.

**Note** When you enter a value, you must also specify the unit.

3650d

## Response parameters

Parameter

Type

Description

Example

object

The ID of the DHCP options set that is created.

DhcpOptionsSetId

string

The ID of the DHCP options set that is created.

dopt-o6w0df4epg9zo8isy\*\*\*\*

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

ResourceGroupId

string

The ID of the resource group to which the DHCP options set belongs.

rg-acfmxazb4ph\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DhcpOptionsSetId": "dopt-o6w0df4epg9zo8isy****",
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "ResourceGroupId": "rg-acfmxazb4ph****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationUnsupported.DhcpOptionsSet

The DHCP options set feature in this region is not supported.

The current region does not support the DHCP options sets feature.

400

InvalidDomainNameServers.Malformed

The specified format of DomainNameServers is invalid.

The format of the value of DomainNameServers is invalid. Check whether the parameter is set to a valid value.

400

QuotaExceeded.DomainNameServers

The maximum number of domain name servers cannot exceed 4.

DomainNameServers is set to a value greater than four.

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

400

QuotaExceeded.RegionDhcpOptionsSet

The quota of dhcpOptionsSet in the region is exceeded.

The number of DHCP options sets reaches the upper limit.

400

OperationUnsupported.DhcpLeaseTime

The DhcpOptionsSet of this region does not support custom LeaseTime.

DHCP options sets in the region do not support a custom lease time.

400

IllegalParam.LeaseTime

LeaseTime \[%s\] is illegal.

The specified LeaseTime parameter is illegal

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

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2025-12-12#workbench-doc-change-demo)

2023-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2023-09-27#workbench-doc-change-demo)

2023-09-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2023-09-21#workbench-doc-change-demo)

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2023-07-05#workbench-doc-change-demo)

2023-05-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2023-05-18#workbench-doc-change-demo)

2023-03-23

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2023-03-23#workbench-doc-change-demo)

2021-11-17

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateDhcpOptionsSet?updateTime=2021-11-17#workbench-doc-change-demo)
