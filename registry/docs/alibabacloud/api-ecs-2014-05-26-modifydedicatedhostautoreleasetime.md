Sets the automatic release time for a pay-as-you-go dedicated host or cancels its automatic release.

## Operation description

## [](#usage-notes)Usage notes

A pay-as-you-go dedicated host can be automatically released at the specified time. Before you release a pay-as-you-go dedicated host, make sure that the host is no longer required and all necessary application data is backed up.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoReleaseTime)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoReleaseTime)

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

ecs:ModifyDedicatedHostAutoReleaseTime

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

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

The region ID of the dedicated host. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DedicatedHostId

string

Yes

The ID of the dedicated host.

dh-bp165p6xk2tlw61e\*\*\*\*

AutoReleaseTime

string

No

The automatic release time of the dedicated host. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.

-   The automatic release time must be at least 30 minutes later than the current time.
-   The automatic release time can be up to 3 years earlier than the current time.
-   If the value of the seconds (ss) is not 00, it is automatically set to 00.
-   If `AutoReleaseTime` is not configured, the automatic release feature is disabled, and the dedicated host will not be automatically released.

2019-06-04T13:35:00Z

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

DedicatedHostId should not be null.

The DedicatedHostId parameter is required.

400

UnsupportedParameter

The parameters is unsupported.

The specified parameter is invalid.

400

InvalidAutoReleaseTime.Malformed

The specified parameter AutoReleaseTime is not valid.

The specified automatic release time is invalid. Specify the time in UTC in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.

403

ChargeTypeViolation

The operation is not permitted due to charge type of the dedicated host.

\-

404

NoSuchResource

The specified resource is not found.

The specified resource does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDedicatedHostAutoReleaseTime?updateTime=2025-03-31#workbench-doc-change-demo)
