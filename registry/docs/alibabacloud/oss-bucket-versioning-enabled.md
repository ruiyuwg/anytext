Checks whether the versioning feature is enabled for each Object Storage Service (OSS) bucket.

## Scenarios

After you enable versioning for an OSS bucket, OSS saves the overwritten and deleted objects as previous versions in the bucket. You can recover a previous version as needed. This helps you prevent data from being accidentally deleted.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the versioning feature is enabled for each OSS bucket, the evaluation result is compliant.
-   If the versioning feature is disabled for an OSS bucket, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-versioning-enabled

Rule ID

oss-bucket-versioning-enabled

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

## Non-compliance remediation

For more information about how to enable versioning for OSS buckets, see [Configure versioning](/help/en/oss/redundancy-for-fault-tolerance-configure-versioning#task-2326148 "OSS allows you to configure versioning for a bucket to protect objects stored in the bucket. After you enable versioning for a bucket, objects that are overwritten or deleted in the bucket are saved as previous versions. You can use versioning to recover a previous version of an object that was accidentally overwritten or deleted.").
