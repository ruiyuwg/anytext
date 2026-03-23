Checks whether zone-redundant storage (ZRS) is enabled for each Object Storage Service (OSS) bucket.

## Scenarios

The ZRS feature of OSS distributes data to multiple zones to improve data availability and ensure business continuity. This feature also provides disaster recovery capabilities at the data center level.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If ZRS is enabled for each OSS bucket, the evaluation result is compliant.
-   If ZRS is disabled for an OSS bucket, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-zrs-enabled

Rule ID

oss-zrs-enabled

Tag

OSS, Bucket, and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

None

## Non-compliance remediation

For more information about how to enable ZRS for OSS buckets, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb "A bucket is a container for objects stored in Object Storage Service (OSS). You must create a bucket before you upload an object to OSS. This topic describes how to create a bucket in the OSS console.").
