Modifies the configurations of a Cloud Assistant feature.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyCloudAssistantSettings)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyCloudAssistantSettings)

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

ecs:ModifyCloudAssistantSettings

update

\*ServiceSettings

`acs:ecs:{#regionId}:{#accountId}:servicesettings/{#servicesettingId}`

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

SettingType

string

Yes

The Cloud Assistant feature. Set SettingType to one of the following valid values:

-   SessionManagerDelivery: the Session Record Delivery configurations.
-   InvocationDelivery: the Operation Content and Result Delivery configurations.
-   AgentUpgradeConfig: the Cloud Assistant Agent Upgrade configurations.
-   SessionManagerConfig: Cloud Assistant the SessionManager configuration.

SessionManagerDelivery

OssDeliveryConfig

object

No

The configurations for delivering records to Object Storage Service (OSS).

Enabled

boolean

No

Specifies whether to deliver records to OSS. Default value: false.

false

BucketName

string

No

The name of the OSS bucket.

example-bucket

Prefix

string

No

The prefix of the OSS bucket directory. The prefix must meet the following requirements:

-   The prefix can be up to 254 characters in length.
-   The prefix cannot start with a forward slash (/) or a backslash (\\).

Note: If you do not need a directory prefix, specify a pair of double quotation marks ("") for this parameter to clear the directory prefix that you specified.

sessionmanager/audit

EncryptionType

string

No

The OSS encryption method. Valid values:

-   Inherit: the encryption method used by the specified bucket.
-   OssManaged: server-side encryption by using OSS-managed keys (SSE-OSS).
-   KMS: server-side encryption by using Key Management Service managed keys (SSE-KMS).

Inherit

EncryptionAlgorithm

string

No

The OSS encryption algorithm. Valid values:

-   AES256
-   SM4

AES256

EncryptionKeyId

string

No

The ID of the customer master key (CMK) when EncryptionType is set to KMS.

a807\*\*\*\*7a70e

SlsDeliveryConfig

object

No

The configurations for delivering records to Simple Log Service.

Enabled

boolean

No

Specifies whether to deliver records to Simple Log Service. Default value: false.

false

ProjectName

string

No

The name of the Simple Log Service project.

example-project

LogstoreName

string

No

The name of the Logstore.

example-logstore

AgentUpgradeConfig

object

No

The configurations for upgrading Cloud Assistant Agent.

Enabled

boolean

No

Specifies whether to enable custom upgrade for Cloud Assistant Agent. If you set this parameter to false, an upgrade attempt is performed for Cloud Assistant Agent every 30 minutes.

Default value: false.

true

AllowedUpgradeWindow

array

No

The time windows during which Cloud Assistant Agent can be upgraded. The time windows can be accurate to minutes. The Coordinated Universal Time (UTC) time zone is used by default.

Make sure that the upgrade windows specified by this parameter are not shorter than 1 hour.

Specify each upgrade window in the following format: <Start time in the HH:mm format>-<End time in the HH:mm format>.

For example, \[ "02:00-03:00", "05:00-06:00" \] specifies that Cloud Assistant Agent can be upgraded from 2:00:00 to 3:00:00 and from 5:00:00 to 6:00:00 every day in the UTC time zone.

string

No

The time windows during which Cloud Assistant Agent can be upgraded. The time windows can be accurate to minutes. The default time zone is UTC.

Make sure that the upgrade windows specified by this parameter are not shorter than 1 hour.

Specify each upgrade window in the following format: <Start time in the HH:mm format>-<End time in the HH:mm format>.

For example, \[ "02:00-03:00", "05:00-06:00" \] specifies that Cloud Assistant Agent can be upgraded from 2:00:00 to 3:00:00 and from 5:00:00 to 6:00:00 every day in the UTC time zone.

\[ "02:00-03:00", "05:00-06:00" \]

TimeZone

string

No

The time zone of the time windows. Default value: UTC. You can specify a time zone in the following forms:

-   The time zone name. Examples: Asia/Shanghai and America/Los\_Angeles.
-   The time offset from GMT. Examples: GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). You cannot add leading zeros to the hour value.

Asia/Shanghai

SessionManagerConfig

object

No

Cloud Assistant Session Manager configuration.

SessionManagerEnabled

boolean

No

Specify whether to enable Cloud Assistant Session Manager. Valid values:

-   true: Enables the feature.
-   false: Disables the feature.

Notes:

-   The feature applies to all regions.

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.SettingType

The specified parameter SettingType is not valid.

The specified parameter SettingType is illegal.

400

InvalidParameter.OssEncryptionType

The specified parameter OssDeliveryConfig.EncryptionType is not valid.

The specified parameter OssDeliveryConfig.EncryptionType is not valid.

400

InvalidParameter.OssEncryptionAlgorithm

The specified parameter OssDeliveryConfig.EncryptionAlgorithm is not valid.

The specified parameter OssDeliveryConfig.EncryptionAlgorithm is illegal.

400

InvalidParameter.OssEncryptionKeyId

The specified parameter OssDeliveryConfig.EncryptionKeyId is not valid.

The specified parameter OssDeliveryConfig.EncryptionKeyId is illegal.

400

InvalidParameter.OssBucketName

The specified parameter OssDeliveryConfig.BucketName is not valid.

The specified parameter OssDeliveryConfig.BucketName is illegal.

400

InvalidParameter.OssPrefix

The specified parameter OssDeliveryConfig.Prefix is not valid.

\-

400

InvalidOssBucketName.InOtherRegion

The specified parameter OssDeliveryConfig.BucketName is in another region.

The OSS bucket corresponding to the specified parameter OssDeliveryConfig.BucketName is in another region.

400

InvalidParameter.SlsProjectName

The specified parameter SlsDeliveryConfig.ProjectName is not valid.

\-

400

InvalidParameter.SlsLogstoreName

The specified parameter SlsDeliveryConfig.LogstoreName is not valid.

\-

400

InvalidParameter.AllowedUpgradeWindow

The specified parameter AgentUpgradeConfig.AllowedUpgradeWindow is not valid.

The specified parameter AgentUpgradeConfig.AllowedUpgradeWindow is illegal.

400

InvalidAllowedUpgradeWindow.DurationTooShort

The duration of the specified parameter AgentUpgradeConfig.AllowedUpgradeWindow cannot be less than one hour.

\-

400

InvalidParameter.TimeZone

The specified parameter AgentUpgradeConfig.TimeZone is not valid.

\-

400

InvalidAllowedUpgradeWindow.Required

The specified parameter AgentUpgradeConfig.AllowedUpgradeWindow is required.

\-

403

CreateServiceLinkedRole.NoPermission

You do not have permission to create ServiceLinkedRole.

\-

403

InvalidOperation.OssEncryptionUnsupported

The configuration of OSS Encryption is not supported.

The current service does not support setting the OSS encryption mode.

403

InvalidAllowedUpgradeWindow.CountLimitExceeded

The count of the parameter AgentUpgradeConfig.AllowedUpgradeWindow exceeds the limit of 5.

The number of parameters AgentUpgradeConfig.AllowedUpgradeWindow exceeds the limit of 5.

403

InvalidOperation.SessionManagerDeliveryUnsupported

The delivery configuration of Session Manager is not supported.

\-

404

InvalidSlsProjectName.NotFound

The specified parameter SlsDeliveryConfig.ProjectName does not exist.

\-

404

InvalidSlsLogstoreName.NotFound

The specified parameter SlsDeliveryConfig.LogstoreName does not exist.

\-

404

InvalidOssBucketName.NotFound

The specified parameter OssDeliveryConfig.BucketName does not exist.

\-

404

InvalidRegionId.NotFound

The specified parameter RegionId does not exist.

\-

500

InternalError

An error occurred when you dispatched the request.

An error occurred while sending the request, please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCloudAssistantSettings?updateTime=2025-04-21#workbench-doc-change-demo)
