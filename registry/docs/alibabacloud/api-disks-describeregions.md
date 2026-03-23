Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeRegions)

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

ebs:DescribeRegions

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

ResourceType

string

No

The type of resource. Valid values:

-   ear: async replication
-   lens: CloudLens for EBS
-   dbsc: Dedicated Block Storage Cluster

Default value: ear.

ear

AcceptLanguage

string

No

The language in which the regions and zones are named. This parameter corresponds to the `LocalName` response parameter. Valid values:

-   zh-CN: Chinese
-   en-US: English
-   ja: Japanese

Default value: zh-CN.

zh-CN

RegionId

string

No

The ID of the region.

cn-beijing

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The ID of the request.

17EE62D8-064E-5404-8B0D-72122478\*\*\*\*

Regions

array<object>

Details about the regions.

region

object

LocalName

string

The name of the region.

China (Hangzhou)

RegionEndpoint

string

The endpoint of the region.

ebs.cn-hangzhou.aliyuncs.com

RegionId

string

The ID of the region.

cn-hangzhou

Zones

array<object>

Details about the zones.

zone

object

LocalName

string

The name of the zone.

Hangzhou Zone H

ZoneId

string

The ID of the zone.

cn-hangzhou-h

ResourceTypes

array

The type of resource list.

resource

string

The type of resource. Valid values:

-   ear: async replication
    
-   lens: CloudLens for EBS
    
-   dbsc: Dedicated Block Storage Cluster
    

ear

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "17EE62D8-064E-5404-8B0D-72122478****",
  "Regions": [
    {
      "LocalName": "China (Hangzhou)",
      "RegionEndpoint": "ebs.cn-hangzhou.aliyuncs.com",
      "RegionId": "cn-hangzhou",
      "Zones": [
        {
          "LocalName": "Hangzhou Zone H",
          "ZoneId": "cn-hangzhou-h",
          "ResourceTypes": [
            "ear"
          ]
        }
      ]
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

Forbidden

User is not authorized to operate.

You are not authorized to manage the resource. Check the account permissions or contact the Alibaba Cloud account.

403

Forbidden.Action

User is not authorized to operate this action.

You are not authorized to perform this operation. Check the account permissions or contact the Alibaba Cloud account.

404

NoSuchResource

The specified resource does not exist.

The specified resource does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred.

504

RequestTimeout

The request is timeout, please try again later.

The request has timed out. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ebs/2021-07-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-02

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeRegions?updateTime=2024-02-02#workbench-doc-change-demo)

2023-06-26

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeRegions?updateTime=2023-06-26#workbench-doc-change-demo)
