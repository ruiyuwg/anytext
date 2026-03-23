Checks whether the Encryption Method parameter of each Object Storage Service (OSS) bucket is set to KMS. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to use a custom Key Management Service (KMS) key to encrypt the data of an OSS bucket to meet security compliance requirements. This ensures the security of your business data at rest.

## Risk level

Default risk level: medium.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the Encryption Method parameter of each OSS bucket is set to KMS, the evaluation result is Compliant.
-   If the Encryption Method parameter of an OSS bucket is not set to KMS, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-4t9-zcj-qxa).

## Rule details

Item

Description

Rule name

oss-encryption-byok-check

Rule identifier

oss-encryption-byok-check

Tag

OSS and Bucket

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS buckets

Input parameter

None

## Incompliance remediation

Set the Encryption Method parameter of an OSS bucket to KMS. For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db).
