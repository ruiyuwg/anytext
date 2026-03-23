Checks whether the connection format for the primary endpoint of each PolarDB cluster is the same as a specified format. If so, the evaluation result is Compliant.

## Scenarios

Standardizing the connection format for the primary endpoint of each PolarDB cluster can provide enterprises with better management, performance, security, and extensibility. It is an effective way to standardize and optimize database management. This rule can detect the PolarDB clusters that do not meet format requirements.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the connection format for the primary endpoint of each PolarDB cluster is the same as a specified format, the evaluation result is Compliant.
    
-   If the connection format for the primary endpoint of a PolarDB cluster is different from a specified format, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

polardb-primary-address-check

Rule ID

[polardb-primary-address-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=polardb-primary-address-check)

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

PolarDB cluster

Input parameter

addressFormat. Default value:{ResourceName}-ma.rwlb.rds.aliyuncs.com:3306

## **Non-compliance remediation**

Ensure that the connection format for the primary endpoint of each PolarDB cluster is the same as a specified format. For more information, see [Modify or delete an endpoint](/help/en/polardb/polardb-for-oracle/modify-or-delete-an-endpoint-1).
