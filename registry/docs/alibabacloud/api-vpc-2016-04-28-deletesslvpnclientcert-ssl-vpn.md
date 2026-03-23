Deletes an SSL client certificate.

## Operation description

-   If you delete an SSL client certificate, all SSL-VPN client connections to the SSL server are disconnected. You need to reinitiate connections from SSL clients.
    
    For example, SSL client certificate 1 and SSL client certificate 2 are created on an SSL server. After you delete certificate 1, all client connections associated with certificate 1 and certificate 2 are disconnected from the SSL server.
    
    -   If clients associated with certificate 1 require SSL-VPN connections, you need to install other certificates on the clients and reinitiate connections from the clients.
    -   If clients associated with certificate 2 require SSL-VPN connections, you can directly reinitiate connections from the clients.
-   **DeleteSslVpnClientCert** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeVpnGateway](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-describevpngateway-ssl-vpn) operation to query the status of the task.
    
    -   If the VPN gateway is in the **updating** state, the SSL client certificate is being deleted.
    -   If the VPN gateway is in the **active** state, the SSL client certificate is deleted.
-   You cannot call **DeleteSslVpnClientCert** within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteSslVpnClientCert)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteSslVpnClientCert)

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

vpc:DeleteSslVpnClientCert

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

RegionId

string

Yes

The ID of the region where the SSL client certificate is created.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-0016e04115b

SslVpnClientCertId

string

Yes

The ID of the SSL client certificate.

vsc-bp1n8wcf134yl0osr\*\*\*\*

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

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "606998F0-B94D-48FE-8316-ACA81BB230DA"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

VpnGateway.Configuring

The specified service is configuring.

The service is being configured. Try again later.

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
