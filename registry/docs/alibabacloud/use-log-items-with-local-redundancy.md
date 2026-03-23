This rule checks whether each Simple Log Service project uses the zone-redundant storage (ZRS) architecture. If so, the evaluation result is considered compliant.

## **Scenarios**

Enterprises configure zone-redundant storage for log projects to ensure high availability and disaster recovery capabilities of log data. This helps maintain data security and accessibility during regional failures.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

This rule checks whether each Simple Log Service project uses the ZRS architecture. If so, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Use zone-redundant storage for log projects

Rule identifier

[sls-project-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=sls-project-multi-zone)

Automatic remediation

Not supported

Trigger frequency

Periodic: Every 24 hours

Supported resource types

ACS::SLS::Project

Input parameters

None

## **Remediation guidance**

For more information, see [Storage redundancy](/help/en/sls/storage-redundancy).
