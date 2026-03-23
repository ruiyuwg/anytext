Modifies the name of an SSL-VPN client certificate.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifySslVpnClientCert)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifySslVpnClientCert)

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

vpc:ModifySslVpnClientCert

\*SslVpnClientCert

`acs:vpc:{#regionId}:{#accountId}:sslvpnclientcert/{#SslVpnClientCertId}`

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

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-0016e04115b

RegionId

string

Yes

The ID of the region where the SSL client certificate is created.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

SslVpnClientCertId

string

Yes

The ID of the SSL client certificate.

vsc-bp1n8wcf134yl0osrc\*\*\*\*

Name

string

No

The new name of the SSL client certificate. This parameter cannot be left empty.

The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.

cert2

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

606998F0-B94D-48FE-8316-ACA81BB230DA

Name

string

The name of the SSL client certificate.

cert2

SslVpnClientCertId

string

The ID of the SSL client certificate.

vsc-bp1n8wcf134yl0osr\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "606998F0-B94D-48FE-8316-ACA81BB230DA",
  "Name": "cert2",
  "SslVpnClientCertId": "vsc-bp1n8wcf134yl0osr****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidName

The name is not valid

The name format is invalid.

403

Forbbiden.SubUser

User not authorized to operate on the specified resource as your account is created by another user.

You are unauthorized to perform this operation on the specified resource. Acquire the required permissions and try again.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

404

InvalidRegionId.NotFound

The specified region is not found during access authentication.

The specified area is not found during authentication.

404

InvalidSslVpnClientCertId.NotFound

The specified SSL VPN client cert id does not exist.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
