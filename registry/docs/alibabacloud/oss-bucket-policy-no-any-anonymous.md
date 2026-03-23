Checks whether the read and write permissions are granted to anonymous accounts in the bucket policy of each Object Storage Service (OSS) bucket or a bucket policy is configured for each OSS bucket. If no read or write permissions are granted or no bucket is configured, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to grant permissions on an OSS bucket based on the principle of least privilege (PoLP). This prevents data leaks due to excessive permissions and ensures system security.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If no read or write permissions are granted to anonymous accounts in the bucket policy of each OSS bucket, the evaluation result is Compliant. If no bucket policy is configured for each OSS bucket, the evaluation result is also Compliant.
-   If the read and write permissions are granted to an anonymous account, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-z8x-jq0-shy).

## Rule details

 

Item

Description

Rule name

oss-bucket-policy-no-any-anonymous

Rule identifier

oss-bucket-policy-no-any-anonymous

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

Grant the read and write permissions on an OSS bucket to specified users. For more information, see [Tutorial: Share data across departments based on bucket policies](/help/en/oss/user-guide/cross-departmental-data-sharing-based-on-bucket-policy#task-1942071 "This topic describes how to implement data sharing across different departments or projects of an enterprise so that the data shared by a department can be only downloaded but cannot be written or deleted by users of other departments. This reduces the risk of accidental deletion and modification of the shared data.").
