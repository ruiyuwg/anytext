Checks whether the hotlink protection feature is enabled for each Object Storage Service (OSS) bucket.

## Scenario

You can enable the hotlink protection feature for an OSS bucket. Hotlink protection prevents data and resource leaks by using IP address whitelist.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the hotlink protection feature is enabled for each OSS bucket, the evaluation result is compliant.
-   If the hotlink protection feature is disabled for an OSS bucket, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

oss-bucket-referer-enabled

Rule ID

oss-bucket-referer-enabled

Tag

OSS and Bucket

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

`allowEmptyReferer`. Default value: true.

## Non-compliance remediation

Enable the hotlink protection feature for the OSS bucket. For more information, see [Configure hotlink protection for a bucket](/help/en/oss/configure-hotlink-protection#concept-dwx-xxd-vdb).
