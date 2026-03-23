Checks whether a specified IP address is the IP address of a CDN point of presence (POP).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeIpInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeIpInfo)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:DescribeIpInfo

get

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

IP

string

Yes

The IP address. You can specify only one IP address.

192.168.0.1

## Response parameters

Parameter

Type

Description

Example

object

CdnIp

string

Indicates whether the IP address belongs to an Alibaba Cloud CDN POP.

-   **True**:Yes.
-   **False**:No.

True

RequestId

string

The ID of the request.

123847FA-9A00-4426-83B8-B4B45D475930

RegionEname

string

The name of the region.

China-Guizhou-guiyang

Region

string

The name of the region in Chinese.

IspEname

string

The name of the ISP.

telecom

ISP

string

The name of the ISP in Chinese.

## Examples

Sample success responses

`JSON`format

```
{
  "CdnIp": "True",
  "RequestId": "123847FA-9A00-4426-83B8-B4B45D475930",
  "RegionEname": "China-Guizhou-guiyang",
  "Region": "",
  "IspEname": "telecom",
  "ISP": ""
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidIP.ValueNotSupported

The specified value of parameter IP is not supported.

Illegal IP parameters

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeIpInfo?updateTime=2024-12-18#workbench-doc-change-demo)
