An Object Storage Service (OSS) backup vault that uses Cloud Backup is considered compliant if cross-region replication is enabled. This rule relies on detection results from Backup Disaster Recovery Center (BDRC). If BDRC is not activated or no detection results are available, this rule does not apply.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An OSS backup vault that uses Cloud Backup is considered compliant if cross-region replication is enabled. This rule relies on detection results from BDRC. If BDRC is not activated or no detection results are available, this rule does not apply.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable cross-region replication for OSS bucket backup vaults

Rule identifier

[oss-bucket-backup-remote-replication](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-backup-remote-replication)

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

For more information about remediating non-compliant resources, see [Check Object Storage Service (OSS) resources](/help/en/bdrc/user-guide/oss-buckets).
