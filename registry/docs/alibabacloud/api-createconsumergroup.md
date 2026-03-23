Creates a consumer group for a change tracking instance.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer automatically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts&api=CreateConsumerGroup&type=RPC&version=2020-01-01)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

CreateConsumerGroup

The operation that you want to perform. Set the value to **CreateConsumerGroup**.

ConsumerGroupName

String

Yes

Test Consumer Group

The name of the consumer group. The name cannot exceed 128 characters in length. We recommend that you use an informative name for easy identification.

ConsumerGroupPassword

String

Yes

Test123456

The password that corresponds to the username of the consumer group.

-   A password must contain two or more of the following characters: uppercase letters, lowercase letters, digits, and special characters.
-   A password must be 8 to 32 characters in length.

ConsumerGroupUserName

String

Yes

dtstest

The username of the consumer group.

-   A username must contain one or more of the following characters: uppercase letters, lowercase letters, digits, and underscores (\_).
-   A username cannot exceed 16 characters in length.

SubscriptionInstanceId

String

Yes

dtsg2m10r1x15a\*\*\*\*

The ID of the change tracking instance. You can call the DescribeSubscriptionInstances operation to query the instance ID.

RegionId

String

No

cn-hangzhou

The ID of the region where the change tracking instance resides. For more information, see [List of supported regions](/help/en/dts/developer-reference/supported-regions).

AccountId

String

No

12323344\*\*\*\*

The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.

## Response parameters

   

Parameter

Type

Example

Description

ConsumerGroupID

String

dtswc411cg617p\*\*\*\*

The ID of the consumer group.

ErrCode

String

InternalError

The error code returned if the call failed.

ErrMessage

String

The request processing has failed due to some unknown error.

The error message returned if the call failed.

RequestId

String

6063641E-BAD1-4BA7-B70B-26FFFD18\*\*\*\*

The ID of the request.

Success

String

true

Indicates whether the call was successful.

## Examples

Sample requests

```
http(s)://dts.aliyuncs.com/?Action=CreateConsumerGroup
&ConsumerGroupName=Test Consumer Group
&ConsumerGroupPassword=Test123456
&ConsumerGroupUserName=dtstest
&SubscriptionInstanceId=dtsg2m10r1x15a****
&<Common request parameters>
```

Sample responses

`XML` format

```
<CreateConsumerGroupResponse>
      <ConsumerGroupID>dtswc411cg617p****</ConsumerGroupID>
      <RequestId>6063641E-BAD1-4BA7-B70B-26FFFD18****</RequestId>
      <Success>true</Success>
</CreateConsumerGroupResponse>
```

`JSON` format

```
{
    "ConsumerGroupID": "dtswc411cg617p****",
    "RequestId": "6063641E-BAD1-4BA7-B70B-26FFFD18****",
    "Success": true
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Dts).
