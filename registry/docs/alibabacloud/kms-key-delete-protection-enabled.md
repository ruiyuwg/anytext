Checks whether the deletion protection feature is enabled for Key Management Service (KMS) customer master keys (CMKs). If this feature is enabled, the configuration is considered compliant.

## Scenarios

You can enable the deletion protection feature for KMS CMKs to prevent business disruption that can be caused by accidental deletion of the KMS CMKs.

## Risk level

Default risk level: medium.

When you configure this rule, you can change the risk level based on your business requirements

## Compliance evaluation logic

-   If the deletion protection feature is enabled for KMS CMKs, the configuration is considered compliant.
-   If the deletion protection feature is disabled for KMS CMKs, the configuration is considered non-compliant. For more information about how to remediate the non-compliant configuration, see [Non-compliance remediation](#section-amv-qih-73y).

## Rule details

 

Item

Description

Rule name

kms-key-delete-protection-enabled

Rule ID

kms-key-delete-protection-enabled

Tag

KMS and Key

Automatic remediation

Supported

Trigger type

Periodic execution

Time interval

All day

Supported resource type

KMS CMKs

Input parameter

None

## Non-compliance remediation

Enable the deletion protection feature for KMS CMKs. For more information, see [Enable deletion protection](/help/en/kms/key-management-service/support/enable-deletion-protection#task-2084627 "If you enable deletion protection for a customer master key (CMK), the CMK cannot be deleted regardless of whether you use the Key Management Service (KMS) console or call API operations. This prevents CMKs from being deleted by mistake. This topic describes how to enable deletion protection.").
