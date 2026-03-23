Checks whether a dynamic ApsaraDB RDS secret is created for each ApsaraDB RDS instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to create dynamic ApsaraDB RDS secrets and enable periodical auto-rotation for the secrets. This reduces the risk of secret leaks.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If a dynamic ApsaraDB RDS secret is created for each ApsaraDB RDS instance, the evaluation result is Compliant.
-   If no dynamic ApsaraDB RDS secret is created for each ApsaraDB RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-fh2-dmp-a2u).

## Rule details

 

Item

Description

Rule name

rds-account-managed-by-kms

Rule identifier

rds-account-managed-by-kms

Tag

RDS

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB RDS instance

Input parameter

None.

## Incompliance remediation

Create a dynamic ApsaraDB RDS secret for an ApsaraDB RDS instance. For more information, see [Manage dynamic ApsaraDB RDS secrets](/help/en/kms/key-management-service/support/manage-dynamic-apsaradb-rds-secrets#task-2074642 "You can create a dynamic ApsaraDB RDS secret that is automatically rotated on a regular basis. This reduces the risks of ApsaraDB RDS secret leaks. This topic describes how to create, delete, and restore a dynamic ApsaraDB RDS secret in the Key Management Service (KMS) console.").
