This rule evaluates whether each AnalyticDB instance employs a multi-zone architecture. If it does, the evaluation result is considered compliant.

## **Scenarios**

Utilizing cloud-native data warehouse AnalyticDB instances with a multi-zone architecture for real-time analysis of critical business data enhances reliability and disaster recovery capabilities. This supports meeting enterprise requirements for data security and compliance.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

This rule checks whether each AnalyticDB instance uses the multi-zone architecture. If so, the evaluation result is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Use cloud-native data warehouse AnalyticDB instances with multi-zone architecture

Rule identifier

[gpdb-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=gpdb-instance-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::GPDB::DBInstance

Input parameter

None

## **Remediation guidance**

For specific remediation operations, see [Cross-zone disaster recovery (applicable to 7.0 instances)](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/7-0-version-cross-zone-disaster-recovery).
