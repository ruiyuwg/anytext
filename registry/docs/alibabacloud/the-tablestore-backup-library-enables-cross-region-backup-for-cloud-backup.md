A Tablestore backup vault in Cloud Backup is considered compliant if cross-region backup is enabled. This rule depends on the detection results from Backup Disaster Recovery Center (BDRC). If BDRC is not enabled or no detection results are available, the rule is considered not applicable.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   A Tablestore backup vault in Cloud Backup is considered compliant if cross-region backup is enabled. This rule depends on the detection results from BDRC. If BDRC is not enabled or no detection results are available, the rule is considered not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Cross-region backup is enabled for Tablestore backup vaults in Cloud Backup

Rule identifier

[ots-instance-remote-replication](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ots-instance-remote-replication)

Tag

OTS

Automatic remediation

Not supported

Trigger type

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::OTS::Instance

Input parameters

None

## **Remediation guide**

To fix a non-compliant resource, see [Check Tablestore resources](/help/en/bdrc/user-guide/tablestore-instances).
