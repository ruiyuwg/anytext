A Hologram instance with remote backup data is considered compliant.

## **Scenarios**

The remote backup feature of Hologram instances enables cross-region redundant storage of data, ensuring data security and business continuity during emergencies.

## **Risk level**

Default risk level: high.

You can change the risk level as needed.

## **Detection logic**

A Hologram instance with remote backup data is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Hologram instance has remote backup data

Rule template identity

[hologram-instance-remote-backup-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=hologram-instance-remote-backup-enable)

Automatic remediation

Not supported

Trigger Type

Periodic: Every 24 hours

Resource type evaluated by the rule

ACS::Hologram::Instance

Input parameter

None

## **Remediation guidance**

For more information, see [Cross-region backup and recovery](/help/en/hologres/user-guide/cross-region-backup).
