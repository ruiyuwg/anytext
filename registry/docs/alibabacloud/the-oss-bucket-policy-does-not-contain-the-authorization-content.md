Checks whether parameter-defined authorization documents are included in custom Object Storage Service (OSS) bucket policies. If not, the evaluation result is Compliant.

## **Scenarios**

In enterprise data security management scenarios, if OSS bucket policies do not contain parameter-defined authorization documents, unauthorized users cannot access sensitive data. This ensures the least privilege principle for data access.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If parameter-defined authorization documents are not included in custom OSS bucket policies, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule template name

oss-policy-no-has-specified-document

Rule template identifier

[oss-policy-no-has-specified-document](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-policy-no-has-specified-document)

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ACS::OSS::Bucket

Input parameter

principal, resource, effect, and action

## **Non-compliance remediation**

If parameter-defined authorization documents that contain non-compliant resources are not included in OSS bucket policies, refer to [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/) for specific remediation operations.
