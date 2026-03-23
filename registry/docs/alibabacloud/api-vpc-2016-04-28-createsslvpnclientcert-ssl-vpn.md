Creates an SSL client certificate.

## Operation description

Before you create an SSL client certificate, make sure that an SSL server is created on the VPN gateway. For more information, see [CreateSslVpnServer](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-createsslvpnserver-ssl-vpn) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateSslVpnClientCert)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateSslVpnClientCert)

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

vpc:CreateSslVpnClientCert

create

\*SslVpnClientCert

`acs:vpc:{#regionId}:{#accountId}:sslvpnclientcert/*`

\*SslVpnServer

`acs:vpc:{#regionId}:{#accountId}:sslvpnserver/{#SslVpnServerId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** may be different for each API request.

02fb3da4-130e-11e9-8e44-0016e04115b

RegionId

string

Yes

The ID of the region where the VPN gateway is created.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

SslVpnServerId

string

Yes

The ID of the SSL server.

vss-m5et0q3iy1qex328w\*\*\*\*

Name

string

No

The name of the SSL client certificate.

The name must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.

SslVpnClientCert1

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

079874CD-AEC1-43E6-AC03-ADD96B6E4907

Name

string

The name of the SSL client certificate.

SslVpnClientCert

SslVpnClientCertId

string

The ID of the SSL client certificate.

vsc-m5euof6s5jy8vs5kd\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "079874CD-AEC1-43E6-AC03-ADD96B6E4907",
  "Name": "SslVpnClientCert",
  "SslVpnClientCertId": "vsc-m5euof6s5jy8vs5kd****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Resource.QuotaFull

The quota of resource is full

The resource quota is exhausted.

400

VpnGateway.Configuring

The specified service is configuring.

The service is being configured. Try again later.

400

VpnGateway.FinancialLocked

The specified service is financial locked.

The service is suspended due to overdue payments. Top up your account first.

400

InvalidName

The name is not valid

The name format is invalid.

400

SslVpnClientCreateTimes.ReachLimits

The number of client cert creation operations reaches the upper limit.

\-

400

CreateSslCertsQuotaFull.QuotaFull

Create the number of SSL certificates that exceed the quota limit.

Create the number of SSL certificates that exceed the quota limit.

400

Resource.QuotaFull

The resources you are operating have reached the upper limit of the quota. Please increase the quota or use other solutions to avoid it according to the VPN operation document.

The resources you are operating have reached the upper limit of the quota. Please refer to the VPN operation document to increase the quota or use other schemes to avoid it.

403

Forbbiden.SubUser

User not authorized to operate on the specified resource as your account is created by another user.

You are unauthorized to perform this operation on the specified resource. Acquire the required permissions and try again.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

404

InvalidSslVpnServerId.NotFound

The specified SSL VPN server id does not exist.

\-

404

InvalidRegionId.NotFound

The specified region is not found during access authentication.

The specified area is not found during authentication.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-04

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateSslVpnClientCert?updateTime=2024-01-04#workbench-doc-change-demo)
