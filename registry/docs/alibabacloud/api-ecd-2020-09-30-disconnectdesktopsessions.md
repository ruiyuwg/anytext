Disconnects cloud computer sessions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DisconnectDesktopSessions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DisconnectDesktopSessions)

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

ecd:DisconnectDesktopSessions

update

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/describeregions) operation to query the most recent region list.

cn-hangzhou

Sessions

array<object>

Yes

The session details.

object

Yes

EndUserId

string

No

The end user ID.

wy01

DesktopId

string

No

The cloud desktop ID.

ecd-90g15fkhsxxxn0unj

PreCheck

boolean

No

Specifies whether to perform precheck. If you perform precheck, the system does not disconnect from desktop sessions. Only the sessions that do not meet specific conditions are returned.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

2507CFA8-FEAB-5208-98F5-5E028C50XXXX

InvalidSessions

array<object>

The list of invalid sessions.

InvalidSession

object

EndUserId

string

The end user ID.

wy01

DesktopId

string

The cloud desktop ID.

ecd-2jv6wugbkp65pxxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2507CFA8-FEAB-5208-98F5-5E028C50XXXX",
  "InvalidSessions": [
    {
      "EndUserId": "wy01",
      "DesktopId": "ecd-2jv6wugbkp65pxxxx"
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
