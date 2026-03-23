Queries existing activation codes and their usage information.

## Operation description

## [](#usage-notes)[](#)Usage notes

You can use one of the following methods to check the responses:

-   Method 1: During a paged query, when you call the DescribeActivations operation to retrieve the first page of results, use `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which you can use in the next request to retrieve a new page of results. When you call the DescribeActivations operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.
-   Method 2: Use `PageSize` to specify the number of entries to return on each page, and then use `PageNumber` to specify the number of the page to return. You can use only one of the preceding methods. If you specify `MaxResults` or `NextToken`, the `PageSize` and `PageNumber` request parameters do not take effect and the `TotalCount` response parameter is invalid.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeActivations)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeActivations)

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

ecs:DescribeActivations

get

Activation

`acs:ecs:{#regionId}:{#accountId}:activation/*`

Activation

`acs:ecs:{#regionId}:{#accountId}:activation/{#activationId}`

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

The region ID. Supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ActivationId

string

No

The ID of the activation code.

4ECEEE12-56F1-4FBC-9AB1-890F1234\*\*\*\*

InstanceName

string

No

The default instance name prefix.

test-InstanceName

PageNumber

long

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

long

No

The number of entries per page.

Valid values: 1 to 50.

Default value: 10.

10

MaxResults

integer

No

The maximum number of entries per page.

Valid values: 1 to 50.

Default value: 10.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

AAAAAdDWBF2\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the activation code belongs.

rg-123\*\*\*\*\*\*

Tag

array<object>

No

The tags of the activation code.

object

No

The tag of the activation code.

Key

string

No

The key of tag N of the activation code. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag can be returned. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags can be returned. To query more than 1,000 resources that have specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N of the activation code. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

PageSize

long

The number of entries per page.

10

RequestId

string

The request ID.

4ECEEE12-56F1-4FBC-9AB1-890F74625134

PageNumber

long

The page number.

1

TotalCount

long

The total number of entries returned.

1

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2\*\*\*\*

ActivationList

array<object>

The activation codes and their usage information.

Activation

object

CreationTime

string

The time when the activation code was created.

2021-01-20T06:00:00Z

DeregisteredCount

integer

The number of instances that were deregistered.

1

InstanceCount

integer

The maximum number of times that the activation code can be used to register managed instances.

1

Description

string

The description of the activation code.

This is description.

RegisteredCount

integer

The number of instances that were registered.

1

InstanceName

string

The default instance name prefix.

test-InstanceName

Disabled

boolean

Indicates whether the activation code is disabled.

false

IpAddressRange

string

The IP addresses of hosts that are allowed to use the activation code.

0.0.0.0/0

TimeToLiveInHours

long

The validity period of the activation code. Unit: hours.

4

ActivationId

string

The ID of the activation code.

4ECEEE12-56F1-4FBC-9AB1-890F1234\*\*\*\*

ResourceGroupId

string

The ID of the resource group to which the activation code belongs.

rg-123\*\*\*\*\*\*

Tags

array<object>

The tags of the activation code.

Tag

object

The tag of the activation code.

TagKey

string

The tag key of the activation code.

owner

TagValue

string

The tag value of the activation code.

zhangsan

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "4ECEEE12-56F1-4FBC-9AB1-890F74625134",
  "PageNumber": 1,
  "TotalCount": 1,
  "NextToken": "AAAAAdDWBF2****",
  "ActivationList": [
    {
      "CreationTime": "2021-01-20T06:00:00Z",
      "DeregisteredCount": 1,
      "InstanceCount": 1,
      "Description": "This is description.",
      "RegisteredCount": 1,
      "InstanceName": "test-InstanceName",
      "Disabled": false,
      "IpAddressRange": "0.0.0.0/0",
      "TimeToLiveInHours": 4,
      "ActivationId": "4ECEEE12-56F1-4FBC-9AB1-890F1234****",
      "ResourceGroupId": "rg-123******",
      "Tags": [
        {
          "TagKey": "owner",
          "TagValue": "zhangsan"
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

400

RegionId.ApiNotSupported

The api is not supported in this region.

The API operation cannot be called in the specified region. Check whether the specified RegionId parameter is valid.

400

InvalidParam.PageNumber

The specified parameter is invalid.

The specified PageNumber parameter is invalid.

400

InvalidParam.PageSize

The specified parameter is invalid.

The specified PageSize parameter is invalid.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

NumberExceed.Tags

The Tags parameter number is exceed.

The number of tags exceeds the maximum limit.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

MissingParameter.TagKey

You must specify Tag.N.Key.

The tag key is not specified.

400

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is illegal.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The specified parameter MaxResults is illegal.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeActivations?updateTime=2024-12-05#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeActivations?updateTime=2023-12-21#workbench-doc-change-demo)

2023-10-24

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeActivations?updateTime=2023-10-24#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeActivations?updateTime=2022-02-25#workbench-doc-change-demo)
