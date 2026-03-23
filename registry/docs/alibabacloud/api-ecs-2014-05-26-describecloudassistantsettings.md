Queries the configurations of Cloud Assistant features.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCloudAssistantSettings)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCloudAssistantSettings)

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

ecs:DescribeCloudAssistantSettings

list

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

SettingType

array

Yes

The Cloud Assistant configurations.

string

Yes

The type of Cloud Assistant configurations. Set SettingType to one of the following valid values:

-   SessionManagerDelivery: the Session Record Delivery configurations.
-   InvocationDelivery: the Operation Content and Result Delivery configurations.
-   AgentUpgradeConfig: the Cloud Assistant Agent Upgrade configurations.
-   SessionManagerConfig: Cloud Assistant the SessionManager configuration.

SessionManagerDelivery

RegionId

string

Yes

The region ID.

cn-hangzhou

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

OssDeliveryConfigs

array<object>

The configurations for delivering items to Object Storage Service (OSS).

OssDeliveryConfig

object

EncryptionType

string

The OSS encryption method. Valid values:

-   Inherit: the encryption method used by the specified bucket.
-   OssManaged: server-side encryption by using OSS-managed keys (SSE-OSS).
-   KMS: server-side encryption with Key Management Service (SSE-KMS).

Inherit

EncryptionAlgorithm

string

The OSS encryption algorithm. Valid values:

-   AES256
-   SM4

AES256

DeliveryType

string

The type of items to be delivered. Valid values:

-   SessionManager: session records.
-   Invocation: task execution records.

SessionManager

Enabled

boolean

Indicates whether to deliver the specified items to OSS.

false

BucketName

string

The name of the OSS bucket.

example-bucket

Prefix

string

The prefix of the OSS bucket directory.

sessionmanager/audit

EncryptionKeyId

string

The ID of the customer master key (CMK) when EncryptionType is set to KMS.

a807\*\*\*\*7a70e

SlsDeliveryConfigs

array<object>

The configurations for delivering items to Simple Log Service.

SlsDeliveryConfig

object

DeliveryType

string

The type of items to be delivered. Valid values:

-   SessionManager: session records.
-   Invocation: task execution records.

SessionManager

LogstoreName

string

The name of the Logstore.

example-logstore

Enabled

boolean

Indicates whether to deliver the specified items to Simple Log Service.

false

ProjectName

string

The name of the Simple Log Service project.

example-project

AgentUpgradeConfig

object

The configurations for upgrading Cloud Assistant Agent.

Enabled

boolean

Indicates whether custom upgrade is enabled for Cloud Assistant Agent. If the value is false or empty, an upgrade attempt is performed for Cloud Assistant Agent every 30 minutes.

true

AllowedUpgradeWindows

array

The time windows during which Cloud Assistant Agent can be upgraded.

AllowedUpgradeWindow

string

The time windows during which Cloud Assistant Agent can be upgraded.

\[ "02:00-03:00", "05:00-06:00" \]

TimeZone

string

The time zone of the time windows.

Asia/Shanghai

SessionManagerConfig

object

Cloud Assistant Session Manager configuration.

SessionManagerEnabled

boolean

Specify whether to enable Cloud Assistant Session Manager. Valid values:

-   true: Enables the feature.
-   false: Disables the feature.

Note:

-   The feature applies to all regions.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "OssDeliveryConfigs": {
    "OssDeliveryConfig": [
      {
        "EncryptionType": "Inherit",
        "EncryptionAlgorithm": "AES256",
        "DeliveryType": "SessionManager",
        "Enabled": false,
        "BucketName": "example-bucket",
        "Prefix": "sessionmanager/audit",
        "EncryptionKeyId": "a807****7a70e"
      }
    ]
  },
  "SlsDeliveryConfigs": {
    "SlsDeliveryConfig": [
      {
        "DeliveryType": "SessionManager",
        "LogstoreName": "example-logstore",
        "Enabled": false,
        "ProjectName": "example-project"
      }
    ]
  },
  "AgentUpgradeConfig": {
    "Enabled": true,
    "AllowedUpgradeWindows": {
      "AllowedUpgradeWindow": [
        [
          "02:00-03:00",
          "05:00-06:00"
        ]
      ]
    },
    "TimeZone": "Asia/Shanghai"
  },
  "SessionManagerConfig": {
    "SessionManagerEnabled": true
  }
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

No change history
