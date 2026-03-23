Checks whether the hotlink protection feature is enabled and a referer whitelist is configured for each Object Storage Service (OSS) bucket. If so, the evaluation result is Compliant.

## Scenarios

You can enable the hotlink protection feature and configure a referer whitelist for an OSS bucket. This prevents the data of the OSS bucket from being tampered by unauthorized clients.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the hotlink protection feature is enabled and a referer whitelist is configured for each OSS bucket, the evaluation result is Compliant.
-   If the hotlink protection feature is disabled for an OSS bucket, the evaluation result is Incompliant. If the hotlink protection feature is enabled but no referer whitelist is configured for an OSS bucket, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

oss-bucket-referer-limit

Rule identifier

oss-bucket-referer-limit

Tag

OSS and Bucket

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

-   `allowEmptyReferer`
-   `allowReferers`

## Incompliance remediation

Enable the hotlink protection feature for an OSS bucket. For more information, see [Configure hotlink protection for a bucket](/help/en/oss/configure-hotlink-protection#concept-dwx-xxd-vdb "You can enable the hotlink protection feature to configure a Referer whitelist for a bucket to prevent unauthorized access and associated unexpected fees.").
