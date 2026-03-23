Checks whether the Bucket ACL parameter of each Object Storage Service (OSS) bucket is set to Private or the bucket policy of each OSS bucket allows access only from specified IP addresses. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to configure a bucket policy for an OSS bucket based on the principle of least privilege (PoLP). This helps reduce security risks that may be caused by excessive permissions.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the Bucket ACL parameter of each OSS bucket is set to Private or the bucket policy of each OSS bucket allows access only from specified IP addresses, the evaluation result is Compliant.
-   If the Bucket ACL parameter of an OSS bucket is set to Public Read/Write, the evaluation result is Incompliant. If the bucket policy of each OSS bucket allows access from all IP addresses, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-cpo-m0e-yhf).

## Rule details

 

Item

Description

Rule name

oss-bucket-authorize-specified-ip

Rule identifier

oss-bucket-authorize-specified-ip

Tag

OSS, Bucket, and BucketPolicy

Automatic remediation

Not supported

Trigger Type

Configuration change

Supported resource type

OSS bucket

Input parameter

None.

## Incompliance remediation

Configure a bucket policy that allows only access from specified IP addresses to an OSS bucket. For more information, see [Tutorial: Share data across departments based on bucket policies](/help/en/oss/user-guide/cross-departmental-data-sharing-based-on-bucket-policy#task-1942071 "This topic describes how to implement data sharing across different departments or projects of an enterprise so that the data shared by a department can be only downloaded but cannot be written or deleted by users of other departments. This reduces the risk of accidental deletion and modification of the shared data.").
