A Tablestore instance is considered compliant if the Cloud Backup feature is enabled. This rule depends on detection results from BDRC. If BDRC is not activated or does not provide detection results, this rule does not apply.

## **Threat level**

Default threat level: High.

You can change the risk level as needed.

## **Detection logic**

-   A Tablestore instance is considered compliant if the Cloud Backup feature is enabled. This rule depends on detection results from BDRC. If BDRC is not activated or does not provide detection results, this rule does not apply.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable Cloud Backup for Tablestore instances

Rule identifier

[ots-instance-backup-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ots-instance-backup-enable)

Tag

OTS

Automatic remediation

Not supported

Rule trigger

Periodic execution

Trigger frequency

24 hours

Supported resource types

ACS::OTS::Instance

Input parameters

None

## **Remediation**

To fix a resource that is not compliant with this rule, see [Check Tablestore resources](/help/en/bdrc/user-guide/tablestore-instances).
