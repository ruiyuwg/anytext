Queries SSL client certificates.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeSslVpnClientCerts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeSslVpnClientCerts)

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

vpc:DescribeSslVpnClientCerts

list

SslVpnClientCert

`acs:vpc:{#regionId}:{#accountId}:sslvpnclientcert/*`

SslVpnClientCert

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

The region ID of the SSL client certificate.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

SslVpnServerId

string

No

The ID of the SSL server.

vss-bp18q7hzj6largv4v\*\*\*\*

SslVpnClientCertId

string

No

The ID of the SSL client certificate.

vsc-bp1n8wcf134yl0osr\*\*\*\*

Name

string

No

The name of the SSL client certificate.

cert1

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Default value: **10**. Valid values: **1** to **50**.

10

ResourceGroupId

string

No

The ID of the resource group to which the SSL client certificate belongs.

The SSL client certificate and its associated SSL server belong to the same resource group. You can call the [DescribeSslVpnServers](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-describesslvpnservers-ssl-vpn) operation to query the ID of the resource group to which the SSL server belongs.

rg-acfmzs372yg\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

5BE01CD7-5A50-472D-AC14-CA181C5C03BE

PageNumber

integer

The number of the page to return.

1

TotalCount

integer

The number of entries returned.

1

SslVpnClientCertKeys

array<object>

The information about the SSL client certificates.

SslVpnClientCertKey

object

Status

string

The status of the SSL client certificate. Valid values:

-   **expiring-soon**: The certificate expires in one week.
-   **normal**
-   **expired**

normal

EndTime

long

The timestamp generated when the SSL client certificate expires. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

1494966335000

CreateTime

long

The timestamp generated when the SSL client certificate was created. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

1492747187000

SslVpnClientCertId

string

The ID of the SSL client certificate.

vsc-bp1n8wcf134yl0osr\*\*\*\*

SslVpnServerId

string

The ID of the SSL server.

vss-bp18q7hzj6largv4v\*\*\*\*

Name

string

The name of the SSL client certificate.

cert1

RegionId

string

The region ID of the SSL client certificate.

cn-hangzhou

ResourceGroupId

string

The ID of the resource group to which the SSL client certificate belongs.

You can call the [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) operation to query resource groups.

rg-acfmzs372yg\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "5BE01CD7-5A50-472D-AC14-CA181C5C03BE",
  "PageNumber": 1,
  "TotalCount": 1,
  "SslVpnClientCertKeys": {
    "SslVpnClientCertKey": [
      {
        "Status": "normal",
        "EndTime": 1494966335000,
        "CreateTime": 1492747187000,
        "SslVpnClientCertId": "vsc-bp1n8wcf134yl0osr****",
        "SslVpnServerId": "vss-bp18q7hzj6largv4v****",
        "Name": "cert1",
        "RegionId": "cn-hangzhou",
        "ResourceGroupId": "rg-acfmzs372yg****"
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

API Description Update. The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeSslVpnClientCerts?updateTime=2023-10-19#workbench-doc-change-demo)
