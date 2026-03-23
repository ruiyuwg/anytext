Checks whether the name of each Object Storage Service (OSS) bucket follows the specified regular expression format.

## Scenarios

In IT management scenarios, such as permission management and internal accounting, resource names are used to classify the resources. You can use this rule to identify the resource whose name does not meet the requirements at the earliest opportunity.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the name of each OSS bucket follows the specified regular expression format, the evaluation result is compliant.
-   If the name of an OSS bucket does not follow the specified regular expression format, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-name-regex-match

Rule ID

oss-bucket-name-regex-match

Tag

OSS, Bucket, and ResourceName

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

`pattern`

## Non-compliance remediation

For more information about how to set the name that follows the specified regular expression format for an OSS bucket, see [Create buckets](/help/en/oss/manage-buckets-create-buckets#task-bcz-sbz-5db "A bucket is a container that is used to store objects in Object Storage Service (OSS). Before you upload an object to OSS, you must create a bucket.").
