Checks whether the bucket policy of each Object Storage Service (OSS) bucket whose Bucket ACL parameter is set to Public Read/Write is configured and the read and write permissions are not granted to anonymous accounts in the bucket policy. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to configure a bucket policy for an OSS bucket. We recommend that you do not grant the read and write permissions on an OSS bucket to anonymous accounts in a bucket policy. This helps prevent unauthorized access to the OSS bucket and ensures data security.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the bucket policy of each OSS bucket whose Bucket ACL parameter is set to Public Read/Write is configured and the read and write permissions are not granted to anonymous accounts in the bucket policy, the evaluation result is Compliant.
-   This rule does not apply to OSS buckets whose Bucket ACL parameter is set to Private.
-   If the bucket policy of an OSS bucket whose Bucket ACL parameter is set to Public Read/Write is not configured, the evaluation result is Incompliant. If the bucket policy of an OSS bucket whose Bucket ACL parameter is set to Public Read/Write is configured but the read and write permissions are granted to anonymous accounts in the bucket policy, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-bp4-nv1-qwy).

## Rule details

 

Item

Description

Rule name

oss-bucket-anonymous-prohibited

Rule identifier

oss-bucket-anonymous-prohibited

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

Grant specified users the permissions on an OSS bucket. For more information, see [Overview](/help/en/oss/user-guide/oss-bucket-policy/#concept-2071378 "You can configure policies for a bucket to grant permissions to other users to access specified Object Storage Service (OSS) resources.").
