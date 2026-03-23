A NAS file system is considered compliant if its data protection score is higher than the specified star rating.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   A NAS file system is compliant if its data protection score is higher than the specified star rating.
    

## **Rule details**

**Parameter**

**Description**

Rule name

NAS file system data protection score check

Rule identifier

[nas-filesystem-backup-score-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=nas-filesystem-backup-score-check)

Tag

NAS

Automatic remediation

Supported

[ACS-NAS-BulkyEnableRecycleBin](https://oos.console.alibabacloud.com/ap-southeast-1/template/public/detail/ACS-NAS-BulkyEnableRecycleBin)

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::NAS::FileSystem

Input parameters

starThreshold (Default value: 1)

## **Remediation**

For instructions on how to remediate non-compliant resources, see [Data Protection Score](/help/en/bdrc/user-guide/data-protection-score).
