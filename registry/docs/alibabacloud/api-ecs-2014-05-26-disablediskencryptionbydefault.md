Disables account-level default encryption of Elastic Block Storage (EBS) resources in a region. After you disable account-level default encryption of EBS resources in a region, the encryption status of existing disks in the region does not change. When you create a disk, you can still choose to encrypt the disk.

## Operation description

-   **Instructions**
    
    -   You must grant the RAM user the `AliyunECSFullAccess` permissions. For information about how to grant permissions to a RAM user, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
-   **Considerations**
    
    -   After Account-level EBS Default Encryption is disabled, the encryption status of existing cloud disks is not affected.
    -   After Account-level EBS Default Encryption is disabled, you can still choose to encrypt new cloud disks when you purchase the disks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DisableDiskEncryptionByDefault)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DisableDiskEncryptionByDefault)

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

The ID of the region for which you want to disable Account-level EBS Default Encryption. You can call the [DescribeRegions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

Abs.InvalidAction.RegionNotSupport

This region does not support this action.

The operation is not supported in the region.

403

InvalidParameter.RegionIdNotExists

The specified region does not exists.

The region does not exist.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidDefaultEncryption.NotFound

You have not configured default encryption setting in this region.

Cloud disk encryption by default has not been enabled for the region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
