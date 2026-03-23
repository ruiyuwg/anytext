Checks whether the encryption feature is enabled for each MaxCompute project. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to encrypt data for storage, ensure the security of static data, and meet the requirements of enterprise-level supervision and security compliance.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the encryption feature is enabled for each MaxCompute project, the evaluation result is Compliant.

## **Rule details**

**Item**

**Description**

Rule name

maxcompute-project-encryption-enabled

Rule identifier

[maxcompute-project-encryption-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=maxcompute-project-encryption-enabled)

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

\[ACS::MaxCompute::Project\]

Input parameter

None

## **Incompliance remediation**

Enable the encryption feature for a MaxCompute project. For more information, see [Data encryption](/help/en/maxcompute/security-and-compliance/storage-encryption).
