Checks whether the bucket policy of each OSS bucket allows read and write operations over HTTPS and denies access over HTTP. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to configure a bucket policy that allows only access over HTTPS for an OSS bucket. This ensures the security of data transmission.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the bucket policy of each OSS bucket allows read and write operations over HTTPS and denies access over HTTP, the evaluation result is Compliant.
-   If the bucket policy of an OSS bucket allows read and write operations over HTTP, the evaluation result is Incompliant. If the bucket policy of an OSS bucket does not deny access over HTTP, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-2mu-2tk-w9o).

## Rule details

 

Item

Description

Rule name

oss-bucket-only-https-enabled

Rule identifier

oss-bucket-only-https-enabled

Tag

OSS, Bucket, and BucketPolicy

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

None.

## Incompliance remediation

Grant specified users the permissions on an OSS bucket. For more information, see [Configure bucket policies to authorize users to access OSS resources](/help/en/oss/configure-bucket-policies-to-authorize-other-users-to-access-oss-resources#concept-ahc-tx4-j2b "You can configure bucket policies to grant permissions to other users to access specified Object Storage Service (OSS) resources.").
