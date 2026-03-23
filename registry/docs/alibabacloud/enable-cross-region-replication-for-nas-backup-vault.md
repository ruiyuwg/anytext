A NAS backup vault that uses Cloud Backup is considered compliant if cross-region backup is enabled. This rule relies on detection results from Backup Disaster Recovery Center (BDRC). If BDRC is not activated or no detection results are available, the rule is considered not applicable.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A NAS backup vault that uses Cloud Backup is considered compliant if cross-region backup is enabled. This rule relies on detection results from BDRC. If BDRC is not activated or no detection results are available, the rule is considered "not applicable".
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable cross-region replication for NAS backup vaults

Rule identifier

[nas-filesystem-backup-remote-replication](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=nas-filesystem-backup-remote-replication)

Tag

NAS

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::NAS::FileSystem

Input parameters

None

## **Remediation**

To remediate non-compliant resources detected by this rule, see [Check Apsara File Storage NAS resources](/help/en/bdrc/user-guide/nas-files).
