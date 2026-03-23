This rule checks the data protection score for your Object Storage Service (OSS) bucket backups. If a bucket's backup score is higher than the specified star rating, the bucket is considered compliant.

## **Risk level**

Default risk level: High risk.

You can change the risk level as needed.

## **Detection logic**

-   An OSS bucket is considered compliant if its data protection score for backups is higher than the specified star rating.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the data protection score for OSS bucket backups

Rule identifier

[oss-bucket-backup-score-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-backup-score-check)

Tag

OSS

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::OSS::Bucket

Input parameters

starThreshold (Default value: 1)

## **Remediation**

For information about how to remediate non-compliant resources, see [Data protection score](/help/en/bdrc/user-guide/data-protection-score).
