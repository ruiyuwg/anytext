Updates a key rotation policy.

## Operation description

When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.

An automatic key rotation policy cannot be configured for the following keys:

-   Asymmetric key
-   Service-managed key
-   Bring your own key (BYOK) that is imported into KMS
-   Key that is not in the **Enabled** state

In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Kms/2016-01-20/UpdateRotationPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Kms/2016-01-20/UpdateRotationPolicy)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

KeyId

string

Yes

The ID of the customer master key (CMK). The ID must be globally unique.

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

EnableAutomaticRotation

boolean

Yes

Specifies whether to enable automatic key rotation. Valid values:

-   true: enables automatic key rotation.
-   false: disables automatic key rotation.

true

RotationInterval

string

No

The period of automatic key rotation. Specify the value in the integer\[unit\] format. The following units are supported: d (day), h (hour), m (minute), and s (second). For example, you can use either 7d or 604800s to specify a seven-day period. The period can range from 7 days to 730 days.

**Note** If you set the EnableAutomaticRotation parameter to true, you must also specify this parameter. If you set the EnableAutomaticRotation parameter to false, you can leave this parameter unspecified.

30d

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request, which is used to locate and troubleshoot issues.

efb1cbbd-a093-4278-bc03-639dd4fcc207

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "efb1cbbd-a093-4278-bc03-639dd4fcc207"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter

The specified parameter is not valid.

An invalid value is specified for the parameter.

404

InvalidAccessKeyId.NotFound

The Access Key ID provided does not exist in our records.

\-

404

Forbidden.KeyNotFound

The specified Key is not found.

The error message returned because the specified CMK does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Kms/2016-01-20/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Kms/2016-01-20/UpdateRotationPolicy?updateTime=2023-12-20#workbench-doc-change-demo)
