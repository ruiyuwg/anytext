You can call the DescribeDBInstanceIPArrayList operation to query the IP address whitelists of an ApsaraDB RDS instance.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeDBInstanceIPArrayList&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeDBInstanceIPArrayList

The operation that you want to perform. Set the value to **DescribeDBInstanceIPArrayList**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the instance.

WhitelistNetworkType

String

No

VPC

The network type of IP address whitelist to query. Valid values:

-   **Classic**: classic network type. This value applies in enhanced whitelist mode.
-   **VPC**: VPC network type. This value applies in enhanced whitelist mode.
-   **MIX**: classic and VPC network types. This value applies in standard whitelist mode.

This operation returns IP address whitelists of all network types by default.

## Response parameters

   

Parameter

Type

Example

Description

Items

Array

An array that consists of IP address whitelists.

DBInstanceIPArray

DBInstanceIPArrayName

String

rds\_default

The name of the IP address whitelist.

DBInstanceIPArrayAttribute

String

hidden

The attribute of the IP address whitelist. This parameter is empty by default.

**Note** The IP address whitelists that have the hidden attribute are not displayed in the ApsaraDB RDS console. These IP address whitelists are used to access Alibaba Cloud services such as Data Transmission Service (DTS).

SecurityIPList

String

192.168.1.0/24

An array that consists of IP addresses in the IP address whitelist.

SecurityIPType

String

IPv4

The type of the IP address.

RequestId

String

E2B6AF71-DC32-4055-B477-43B348798D10

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=DescribeDBInstanceIPArrayList
&DBInstanceId=rm-uf6wjk5xxxxxxx
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeDBInstanceIPArrayListResponse>
      <Items>
            <DBInstanceIPArray>
                  <DBInstanceIPArrayName>rds_default</DBInstanceIPArrayName>
                  <DBInstanceIPArrayAttribute></DBInstanceIPArrayAttribute>
                  <WhitelistNetworkType>VPC</WhitelistNetworkType>
                  <SecurityIPList>192.168.1.0/24</SecurityIPList>
                  <SecurityIPType>IPv4</SecurityIPType>
            </DBInstanceIPArray>
      </Items>
      <RequestId>E2B6AF71-DC32-4055-B477-43B348798D10</RequestId>
</DescribeDBInstanceIPArrayListResponse>
```

`JSON` format

```
{
    "Items": {
        "DBInstanceIPArray": [
            {
                "DBInstanceIPArrayName": "rds_default",
                "DBInstanceIPArrayAttribute": "",
                "WhitelistNetworkType": "VPC",
                "SecurityIPList": "192.168.1.0/24",
                "SecurityIPType": "IPv4"
            }
        ]
    },
    "RequestId": "E2B6AF71-DC32-4055-B477-43B348798D10"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
