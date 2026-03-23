Cancels a remote assistance request to the end user.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/CancelCoordinationForMonitoring)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/CancelCoordinationForMonitoring)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the most recent region list.

cn-hangzhou

CoIds

array

Yes

The IDs of stream collaboration tasks.

string

Yes

The IDs of the stream collaboration task.

co-\*\*\*\*

UserType

string

No

The type of the user.

Valid value:

-   TENANT\_ADMIN: administrator.

TENANT\_ADMIN

EndUserId

string

No

The ID of the end user that initiates stream collaboration. If the initiator is the administrator, skip this parameter.

alice

## Response parameters

Parameter

Type

Description

Example

object

The response parameter.

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
