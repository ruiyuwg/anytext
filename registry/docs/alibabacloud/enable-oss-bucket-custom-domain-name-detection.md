Checks whether a custom domain name is associated with an Object Storage Service (OSS) bucket. If not, the evaluation result is Non-compliant.

## **Scenarios**

If you associate a custom domain name with an OSS bucket, resources that are accessed by using the custom domain name are secure and compliant. This prevents risks of domain hijacking or unauthorized access.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If a custom domain name is not associated with an OSS bucket, the evaluation result is Non-compliant.

## **Rule details**

**Parameter**

**Description**

Rule template name

oss-bucket-cname-check

Rule template identifier

[oss-bucket-cname-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-cname-check)

Automatic remediation

Not supported

Trigger type

Configuration Change

Supported resource type

ACS::OSS::Bucket

Input parameter

None

## **Non-compliance remediation**

For more information, see [Access OSS through a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names).
