Creates a prefix list.

## Operation description

You cannot repeatedly call the **CreateVpcPrefixList** operation within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateVpcPrefixList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateVpcPrefixList)

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

vpc:CreateVpcPrefixList

create

\*PrefixList

`acs:vpc:{#regionId}:{#accountId}:prefixlist/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PrefixListName

string

No

The name of the prefix list.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

name

PrefixListDescription

string

No

The description of the prefix list.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

description

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among all requests. ClientToken can contain only ASCII characters.

**Note** If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

MaxEntries

integer

No

The maximum number of CIDR blocks that you can specify in the prefix list. Default value: 50.

50

PrefixListEntries

array<object>

No

The CIDR block information specified in the prefix list.

object

No

Cidr

string

No

The CIDR block specified in the prefix list.

192.168.0.0/16

Description

string

No

The description of the CIDR block specified in the prefix list.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

CIDR

ResourceGroupId

string

No

The ID of the resource group to which the prefix list belongs.

rg-bp67acfmxazb4ph\*\*\*\*

RegionId

string

Yes

The ID of the region where you want to create the prefix list.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

IpVersion

string

No

The IP version. Valid values:

-   **IPv4** (default)
-   **IPv6**

IPv4

Tag

array<object>

No

The tag list.

object

No

Key

string

No

The key of tag N. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

## Response parameters

Parameter

Type

Description

Example

object

PrefixListId

string

The ID of the prefix list.

pl-0b700s2ee3\*\*\*

RequestId

string

The ID of the request.

54B48E3D-DF70-471B-AA93-08E683A1B45

ResourceGroupId

string

The ID of the resource group to which the prefix list belongs.

rg-bp67acfmxazb4ph\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PrefixListId": "pl-0b700s2ee3***",
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "ResourceGroupId": "rg-bp67acfmxazb4ph****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

UnsupportedFeature.IpVersion

The ipversion type is not supported.

\-

400

QuotaExceeded.PrefixListCidrCount

The quota of prefixListMaxEntry count is exceeded.

The value of entryCount exceeds the upper limit.

400

OperationFailed.CidrCountExceedMaxCount

The operation is failed because of cidrCountExceedMaxCount.

\-

400

IllegalParam.CidrBlock

The param of cidrBlock is illegal.

The error message returned because the value of the cidrBlock parameter is invalid.

400

IllegalParam.CidrName

The param of cidrName is illegal.

\-

400

DuplicatedParam.CidrBlock

The param of cidrBlock is duplicated.

The error message returned because a duplicate CIDR block is specified.

400

QuotaExceeded.PrefixListCount

The quota of prefixList count is exceeded.

The value of prefixList exceeds the upper limit.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpcPrefixList?updateTime=2023-07-05#workbench-doc-change-demo)
