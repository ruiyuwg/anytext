Checks whether the Encryption Method parameter of the server-side encryption feature of each Object Storage Service (OSS) bucket is set to KMS. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to use customer master keys (CMKs) managed by Key Management Service (KMS) to encrypt the data at rest of OSS buckets. This helps meet compliance requirements and ensure the storage security of business data.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the Encryption Method parameter of the server-side encryption feature of each OSS bucket is set to KMS, the evaluation result is Compliant.
    
-   If the Encryption Method parameter of the server-side encryption feature of an OSS bucket is not set to KMS, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).
    

## Rule details

**Item**

**Description**

Rule name

oss-default-encryption-kms

Rule identifier

oss-default-encryption-kms

Tag

OSS and Bucket

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

None

## Incompliance remediation

Set the Encryption Method parameter of the server-side encryption feature of an OSS bucket to KMS. For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db).
