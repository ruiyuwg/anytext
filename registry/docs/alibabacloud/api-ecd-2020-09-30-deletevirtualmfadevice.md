Removes a virtual multi-factor authentication (MFA) device that is associated with an Active Directory (AD) account.

## Operation description

If an MFA device is deleted, the device is unbound, reset, and disabled. When an Active Directory (AD) user wants to connect to the cloud desktop that is bound to the MFA device, the AD user must bind a new MFA device.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DeleteVirtualMFADevice)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DeleteVirtualMFADevice)

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

ecd:DeleteVirtualMFADevice

delete

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

The region ID.

cn-hangzhou

SerialNumber

string

Yes

The serial number of the virtual MFA device, which is a unique identifier.

You can call the [DescribeVirtualMFADevices](/help/en/wuying-workspace/describevirtualmfadevices) operation to query the serial number of the virtual MFA device that is bound by AD users.

a25f297f-f2e1-4a44-bbf1-5f48a6e5\*\*\*\*

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
