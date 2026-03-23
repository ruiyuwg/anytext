Checks whether each Key Management Service (KMS) instance uses the multi-zone architecture. If so, the evaluation result is compliant.

## **Scenarios**

KMS instances that use the multi-zone architecture enable you to implement high availability key management and encryption services, ensuring data security and cross-region disaster recovery capabilities in distributed systems.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

Checks whether each Key Management Service (KMS) instance uses the multi-zone architecture. If so, the evaluation result is compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

KMS instance with multi-zone

Rule template identity

[kms-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=kms-instance-multi-zone)

Automatic remediation

Not supported

Trigger frequency

Periodic: Every 24 hours

Supported resource types

ACS::KMS::Instance

Input parameters

None

## **Remediation guidance**

For more information, see [Enable software key management instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#8262e33789q9p).
