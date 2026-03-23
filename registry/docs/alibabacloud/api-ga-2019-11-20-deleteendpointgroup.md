Deletes an endpoint group.

## Operation description

-   **DeleteEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](/help/en/ga/api-describeendpointgroup) operation to query the status of the endpoint group.
    
    -   If the endpoint group is in the **deleting** state, it indicates that the endpoint group is being deleted. In this case, you can perform only query operations.
    -   If the endpoint group cannot be queried, it indicates that the endpoint group is deleted.
-   The **DeleteEndpointGroup** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ga/2019-11-20/DeleteEndpointGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ga/2019-11-20/DeleteEndpointGroup)

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

ga:DeleteEndpointGroup

delete

\*EndpointGroup

`acs:ga:{#regionId}:{#accountId}:endpointgroup/{#endpointGroupId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

AcceleratorId

string

No

The GA instance ID.

ga-bp1odcab8tmno0hdq\*\*\*\*

EndpointGroupId

string

Yes

The ID of the endpoint group that you want to delete.

epg-bp1dmlohjjz4kqaun\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8\t"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Resource.QuotaFull

The resource quota is exceeded.

The number of resources has reached the upper limit.

400

NotExist.EndPointGroup

The endpoint group does not exist.

The endpoint group does not exist.

400

StateError.EndPointGroup

The specified state of endpoint group is invalid.

The endpoint group is in an invalid state.

400

NotExist.Listener

The listener does not exist.

The listener does not exist.

400

NotActive.Listener

The state of the listener is not active.

The listener is unstable.

400

NotExist.Accelerator

The accelerated instance does not exist.

The GA instance does not exist.

400

StateError.Accelerator

The state of the accelerated instance is invalid.

The status of the GA instance is invalid.

400

StateError.Accelerator

The status of the GA instance is invalid.

\-

403

Forbbiden.SubUser

You are not authorized to operate on the specified resource because your account was created by another user.

The current account is a RAM user and does not have permissions to manage the specified resources.

403

Forbidden

The user is not authorized to operate on the specified resource.

The current account does not have permissions to manage the specified resources.

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
