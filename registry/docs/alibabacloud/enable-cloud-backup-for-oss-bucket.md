An Object Storage Service (OSS) bucket is considered compliant if it is backed up by Cloud Backup. This rule depends on detection results from the Backup Disaster Recovery Center (BDRC). If BDRC is not activated or no results are found, this rule does not apply.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An OSS bucket is considered compliant if it is backed up by Cloud Backup. This rule depends on detection results from BDRC. If BDRC is not activated or no results are found, this rule does not apply.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable Cloud Backup for OSS buckets

Rule identifier

[oss-bucket-backup-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-backup-enable)

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

None

## **Remediation**

To remediate a non-compliant resource, see [Check Object Storage Service (OSS) resources](/help/en/bdrc/user-guide/oss-buckets).
