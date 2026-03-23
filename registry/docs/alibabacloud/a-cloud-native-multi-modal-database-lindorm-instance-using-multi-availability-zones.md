Checks whether each Lindorm instance uses the multi-zone architecture. If so, the evaluation result is compliant.

## **Scenarios**

Multi-zone Lindorm instances can be used to build high availability, elastically scalable data storage solutions that meet the requirements for efficient processing of various data models in cross-region scenarios.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

Checks whether each Lindorm instance uses the multi-zone architecture. If so, the evaluation result is compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Using multi-zone Lindorm instances

Rule template identity

[lindorm-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=lindorm-instance-multi-zone)

Automatic remediation

Not supported

Trigger frequency

Periodic: Every 24 hours

Supported resource types

ACS::Lindorm::Instance

Input parameters

None

## **Remediation guidance**

For more information, see [Multi-zone (High-availability Edition) deployment](/help/en/lindorm/user-guide/cross-zone-deployment).
