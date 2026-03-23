Queries the Alibaba Cloud regions that are available for Elastic Desktop Service (EDS).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeRegions)

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

ecd:DescribeRegions

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

RegionId

string

Yes

The region ID.

cn-hangzhou

AcceptLanguage

string

No

The display name of the region, which varies based on the current language.

Enumeration Value:

-   en: en.
-   zh: zh.

zh

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

Regions

array<object>

The information about regions.

Region

object

RegionEndpoint

string

The endpoint of the region.

ecd.cn-hangzhou.aliyuncs.com

RegionId

string

The region ID.

cn-hangzhou

LocalName

string

The display name of the region, which varies based on the current language.

China (Hangzhou)

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "Regions": [
    {
      "RegionEndpoint": "ecd.cn-hangzhou.aliyuncs.com",
      "RegionId": "cn-hangzhou",
      "LocalName": "China (Hangzhou)"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
