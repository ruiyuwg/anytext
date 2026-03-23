Checks whether each Tablestore instance uses the zone-redundant storage (ZRS) architecture. If so, the evaluation result is Compliant.

## **Scenarios**

If a Tablestore instance uses the ZRS architecture, critical data can be synchronized in real time across multiple data centers within the same city. This ensures high availability and rapid fault recovery.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If each Tablestore instance uses the ZRS architecture, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule template name

ots-instance-multi-zone

Rule template identifier

[ots-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ots-instance-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::OTS::Instance

Input parameter

None

## **Non-compliance remediation**

For more information, see [Zone-redundant storage](/help/en/tablestore/metro-redundancy-of-tablestore).
