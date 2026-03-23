Checks whether the hot standby storage cluster feature is enabled for each PolarDB cluster and data is distributed across multiple zones. If so, the evaluation result is Compliant.

## Scenarios

Enabling the hot standby storage cluster feature for each PolarDB cluster and distributing data across multiple zones can improve the reliability, persistence, and security of data. It is an ideal enterprise-level Data Disaster Recovery and restoration solution.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the hot standby storage cluster feature is enabled for each PolarDB cluster and data is distributed across multiple zones, the evaluation result is Compliant.
    
-   If the hot standby storage cluster feature is disabled for a PolarDB cluster, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

polardb-cluster-multi-zone

Rule ID

[polardb-cluster-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=polardb-cluster-multi-zone)

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

PolarDB cluster

Input parameter

None
