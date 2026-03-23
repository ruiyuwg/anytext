Checks whether each MaxCompute project uses the zone-disaster recovery architecture. If so, the evaluation result is considered compliant.

## **Scenarios**

The zone-disaster recovery architecture of MaxCompute projects provides high availability and rapid recovery capabilities for data processing tasks. This ensures business continuity and data reliability in the event of local failures.

## **Risk level**

Default risk level: high.

You can change the risk level as needed.

## **Detection logic**

Checks whether each MaxCompute project uses the zone-disaster recovery architecture. If so, the evaluation result is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

MaxCompute project uses zone-disaster recovery architecture

Rule template identity

[maxcompute-project-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=maxcompute-project-multi-zone)

Automatic remediation

Not supported

Rule trigger

Configuration change, 24-hour cycle

Supported resource types

ACS::MaxCompute::Project

Input parameters

None

## **Remediation guidance**

For more information, see [Zone-disaster recovery](/help/en/maxcompute/user-guide/disaster-recovery-in-the-same-city).
