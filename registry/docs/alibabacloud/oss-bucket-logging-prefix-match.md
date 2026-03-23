If the log storage feature is enabled for the Object Storage Service (OSS) bucket and the specified log prefix is not used, the evaluation result is Compliant.

## Scenario

OSS logs can help you perform operations such as auditing, analyzing access requests, tracking exceptions, and troubleshooting issues.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the log storage feature is enabled for the OSS bucket and the specified log prefix is not used, the evaluation result is Compliant.
-   If the log storage feature is not enabled for the OSS bucket, the evaluation result is Incompliant. If the log storage feature is enabled for the OSS bucket but the specified log prefix is used, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-6dt-iom-0p7)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

oss-bucket-logging-prefix-match

Rule identifier

oss-bucket-logging-prefix-match

Tag

OSS and Prefix

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OSS bucket

Input parameter

`LogPrefix`: The default value is `oss-accesslog/`.

## Incompliance remediation

Enable the log storage feature of OSS buckets and change the prefix of logs. For more information, see [Log storage](/help/en/oss/user-guide/logging#concept-t3h-4hd-5db).
