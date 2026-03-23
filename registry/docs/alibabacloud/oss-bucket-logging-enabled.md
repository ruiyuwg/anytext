Checks whether the access logging feature is enabled for each Object Storage Service (OSS) bucket.

## Scenarios

If you enable access logging for an OSS bucket, all read and write access to the bucket is recorded in logs. This helps you analyze unusual access and review data leaks.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the access logging feature is enabled for each OSS bucket, the evaluation result is compliant.
-   If the access logging feature is disabled for an OSS bucket, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-logging-enabled

Rule ID

oss-bucket-logging-enabled

Tag

OSS, Bucket, and AuditBaseline

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

None

## Non-compliance remediation

For more information about how to enable the access logging feature for OSS buckets, see [Configure logging](/help/en/oss/configure-logging#concept-lgv-phz-5db "When you access Object Storage Service (OSS), a large number of access logs are generated. You can enable logging to facilitate log queries. After you enable and configure logging for a bucket, OSS generates an object on an hourly basis based on the predefined naming conventions. This way, access logs are written as objects to a specified bucket.").
