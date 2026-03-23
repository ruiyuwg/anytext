Get the stream collaboration credentials for remote assistance or shared collaboration.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/GetCoordinateTicket)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/GetCoordinateTicket)

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

ecd:GetCoordinateTicket

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the most recent region list.

cn-hangzhou

CoId

string

Yes

The ID of the stream collaboration. You can obtain the value of this parameter based on the value of `Coid` that is returned by the `ApplyCoordinationForMonitoring` operation.

co-0sot77uale3\*\*\*\*

TaskId

string

No

The ID of the cloud computer connection task. The first time you initiate the request, you do not need to specify the ID of the cloud computer connection task. If no ticket is returned after you initiate the first request, you must specify the value of taskId that is returned for the first request in the subsequent request.

39cc15e5-6998-4b9f-9b2c-7a4cc3e2\*\*\*\*

EndUserId

string

No

The name of the convenience user account. If you initiate the request as an administrator, you do not need to specify this parameter.

Alice

UserType

string

Yes

The type of the user.

Set the value to TENANT\_ADMIN.

-   The value of
    
    TENANT\_ADMIN
    
    specifies an administrator.
    

TENANT\_ADMIN

## Response parameters

Parameter

Type

Description

Example

object

CoId

string

The ID of the stream collaboration.

co-0sot77uale3\*\*\*\*

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

TaskStatus

string

The task status.

Possible values:

-   Finished
    
-   Failed
    
-   Running
    

Finished

TaskId

string

The ID of the cloud computer connection task.

39cc15e5-6998-4b9f-9b2c-7a4cc3e2\*\*\*\*

Ticket

string

The credentials of the stream collaboration.

W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "CoId": "co-0sot77uale3****",
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "TaskStatus": "Finished",
  "TaskId": "39cc15e5-6998-4b9f-9b2c-7a4cc3e2****",
  "Ticket": "W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
