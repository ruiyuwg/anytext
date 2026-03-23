Deletes an Express Connect Router (ECR) connection from an Enterprise Edition transit router.

## Operation description

DeleteTransitRouterEcrAttachment is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterEcrAttachments operation to query the status of an ECR connection.

If the ECR connection is in the Detaching state, the ECR connection is being deleted. In this case, you can query the ECR connection but cannot perform other operations on the ECR connection. If the ECR connection cannot be found, the ECR connection is deleted. Before you call the DeleteTransitRouterEcrAttachment operation, make sure that all request parameters are valid. If a request is invalid, a request ID is returned but the ECR connection is not deleted.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterEcrAttachment)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterEcrAttachment)

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

cen:DeleteTransitRouterEcrAttachment

delete

\*TransitRouterEcrAttachment

`acs:cen:*:{#accountId}:centransitrouterattachment/{#TransitRouterAttachmentId}`

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

02fb3da4\*\*\*\*

TransitRouterAttachmentId

string

Yes

The ID of the ECR connection.

tr-attach-r6g0m3epjehw57\*\*\*\*

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **false** (default): performs a dry run and performs the actual request.
-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, a request ID is returned.

false

Force

boolean

No

Specifies whether to forcibly delete the ECR connection. Valid values:

-   **false** (default): checks for resource dependencies such as associated forwarding and route learning before deleting the ECR connection. If such resources exist, the ECR connection is not deleted and an error message is returned.
-   **true**: deletes the ECR connections and all dependent resources.

false

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationFailed.RouteTableAssociationExist

Operation failed because TransitRouterRouteTable exists

The error message returned because you cannot perform the operation when the connection is associated with a route table.

400

OperationFailed.RouteEntryExist

Operation failed because the TransitRouterAttachment exists in RouteTable.

\-

400

OperationFailed.RouteTablePropagationExist

The specified TransitRouterAttachment has configured RouteTablePropagation. Please remove the configuration first.

The error message returned because you cannot perform the operation when a route learning correlation is configured for the network instance connection. Disassociate from the route learning correlation and try again.

400

OperationFailed.FlowLogExistOrNisOpened

Operation failed because FlowLog exists or Nis opened.

The error message returned because this operation is not supported when a flow log exists or the NIS service is activated.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

OperationFailed.NotSupportForceDelete

Not support force delete attachment.

The error message returned because the specified resource cannot be forcefully deleted.

400

InvalidTransitRouterAttachmentId.NotFound

The TransitRouterAttachmentId is not found.

The error message returned because the specified transit router attachment ID (TransitRouterAttachmentId) does not exist.

400

OperationFailed.PrefixListExist

Operation failed because PrefixList exists.

The error message returned because a prefix list exists.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

IncorrectStatus.EcrResource

The ECR resource is not in a valid state for the attachment operation.

The ECR resource is not in a valid state for the attachment operation.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
