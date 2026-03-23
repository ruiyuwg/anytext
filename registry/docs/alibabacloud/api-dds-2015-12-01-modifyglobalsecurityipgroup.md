Modifies the global IP whitelist template associated with an ApsaraDB for MongoDB instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyGlobalSecurityIPGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyGlobalSecurityIPGroup)

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

dds:ModifyGlobalSecurityIPGroup

update

\*All Resources

`*`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

GlobalIgName

string

Yes

The name of the IP whitelist template.

dps

GlobalSecurityGroupId

string

Yes

The ID of the IP whitelist template.

g-fwjk62egbsrp4sftxmmr

GIpList

string

Yes

The IP addresses in the whitelist template.

**Note** Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.

27.16.214.10,111.60.117.181

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

A0181AC4-F186-46ED-87CA-100C70B86729

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A0181AC4-F186-46ED-87CA-100C70B86729"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RequiredParam.NotFound

Required input param is not found.

\-

400

InvalidSecurityIPList.QuotaExceeded

Specified security IP list is not valid: Exceeding the allowed amount of IP address in the list.

\-

400

InvalidSecurityIPList.Format

Specified security IP list format is not valid.

The specified SecurityIPList parameter is invalid. Specify a valid whitelist. A whitelist can contain up to 1,000 different IP addresses. Separate multiple IP addresses with commas (,). Supported formats include 0.0.0.0/0, 10.23.12.24 (IP address), and 10.23.12.24/24 (CIDR block). /24 indicates the prefix of the CIDR block is 24-bit. You can replace 24 with a value ranging from 1 to 32.

400

InvalidSecurityIPList.Duplicate

Specified security IP list is not valid: Duplicate IP address in the list

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
