Deletes a DHCP options set.

## Operation description

## [](#description)[](#)Description

-   **DeleteDhcpOptionsSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetDhcpOptionsSet](/help/en/vpc/api-getdhcpoptionsset) operation to query the status of the task.
    
    -   If the DHCP options set is in the **Deleting** state, the DHCP options set is being deleted.
    -   If you cannot query the DHCP options set, the DHCP options set is deleted.
-   You cannot repeatedly call the **DeleteDhcpOptionsSet** operation to delete a DHCP options set within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteDhcpOptionsSet)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteDhcpOptionsSet)

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

vpc:DeleteDhcpOptionsSet

delete

\*DhcpOptionsSet

`acs:vpc:{#regionId}:{#accountId}:dhcpoptionsset/{#DhcpOptionsSetId}`

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

The region of the DHCP options set to be deleted. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DhcpOptionsSetId

string

Yes

The ID of the DHCP options set to be deleted.

dopt-o6w0df4epg9zo8isy\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

**true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.

**false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

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

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectStatus.DhcpOptionsSet

The DhcpOptionsSet status does not support this operation.

The DHCP options set that is associated with the VPC is being configured. As a result, the DHCP options set does not support this operation. You can perform the operation after the status of the DHCP options set is stable.

400

OperationUnsupported.DhcpOptionsSet

The DHCP options set feature in this region is not supported.

The current region does not support the DHCP options sets feature.

400

DependencyViolation.VpcAttachment

DhcpOptionsSet cannot be deleted when it is attached to VPC.

The DHCP options set is associated with a VPC and cannot be deleted.

400

InvalidDhcpOptionsSetId.NotFound

The specified dhcpOptionsSetId does not exist.

The DHCP options set does not exist. Check whether the parameter is set to a valid value.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteDhcpOptionsSet?updateTime=2025-12-12#workbench-doc-change-demo)
