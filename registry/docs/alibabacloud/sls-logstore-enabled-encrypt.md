Checks whether data encryption is enabled for a Logstore in Log Service.

## Scenarios

Log Service allows you to use Key Management Service (KMS) to encrypt data for secure storage and static protection.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If data encryption is enabled for the Logstore in Log Service, the evaluation result is compliant.
-   If data encryption is disabled for the Logstore in Log Service, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-9o5-7pj-bn8).

## Rule details

**Item**

**Description**

Rule name

sls-logstore-enabled-encrypt

Rule ID

sls-logstore-enabled-encrypt

Tag

SLS and LogStore

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Time interval

24 hours

Supported resource type

Log Service flow logs

Input parameter

None

## Non-compliance remediation

Enable data encryption for the Logstore in Log Service. For more information, see [Data encryption](/help/en/sls/developer-reference/encrypt-data#concept-1964942).
