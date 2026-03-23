Queries the details of an SSL client certificate.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeSslVpnClientCert)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeSslVpnClientCert)

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

vpc:DescribeSslVpnClientCert

get

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

The region ID of the SSL client certificate. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

SslVpnClientCertId

string

Yes

The ID of the SSL client certificate that you want to query.

vsc-bp17r58rjf5r1gjyr\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Status

string

The status of the SSL client certificate. Valid values:

-   **expiring-soon**
-   **normal**
-   **expired**

normal

CreateTime

long

The timestamp that indicates when the SSL client certificate was created. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1552550980000

ClientKey

string

The client key.

The key of the client

RegionId

string

The ID of the region where the SSL client certificate is created.

cn-hangzhou

ClientConfig

string

The client configuration.

Client configuration

EndTime

long

The timestamp that indicates when the SSL client certificate expires. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1647158980000

RequestId

string

The request ID.

5BE01CD7-5A50-472D-AC14-CA181C5C03BE

ClientCert

string

The client certificate.

Client certificate

CaCert

string

The CA certificate.

CA certificate

SslVpnClientCertId

string

The ID of the SSL client certificate.

vsc-bp13k5mp4tg8v3z9b\*\*\*\*

SslVpnServerId

string

The ID of the SSL server.

vss-bp155e9yclsg1xgq4\*\*\*\*

Name

string

The name of the SSL client certificate.

nametest

ResourceGroupId

string

The ID of the resource group to which the SSL client certificate belongs.

The SSL client certificate and the SSL server associated with the SSL client certificate belong to the same resource group. You can call the [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) operation to query resource groups.

rg-acfmzs372yg\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Status": "normal",
  "CreateTime": 1552550980000,
  "ClientKey": "The key of the client",
  "RegionId": "cn-hangzhou",
  "ClientConfig": "Client configuration",
  "EndTime": 1647158980000,
  "RequestId": "5BE01CD7-5A50-472D-AC14-CA181C5C03BE",
  "ClientCert": "Client certificate",
  "CaCert": "CA certificate",
  "SslVpnClientCertId": "vsc-bp13k5mp4tg8v3z9b****",
  "SslVpnServerId": "vss-bp155e9yclsg1xgq4****",
  "Name": "nametest",
  "ResourceGroupId": "rg-acfmzs372yg****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceId.NotFound

The InstanceId is not found.

The InstanceId is not found.

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-10-19

API Description Update. The API operation is not deprecated.. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeSslVpnClientCert?updateTime=2023-10-19#workbench-doc-change-demo)
