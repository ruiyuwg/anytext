An Object Storage Service (OSS) bucket is considered compliant if public-read access is disabled and no authorizations are granted to accounts outside your organization. A bucket is considered non-compliant if its bucket policy cannot be analyzed. If all authorizations in the bucket policy are for accounts within your resource directory, the bucket is considered compliant. If an authorization is granted to an account outside your resource directory, it is considered an authorization outside the organization, and the bucket is considered non-compliant.

## **Risk level**

Default risk level: Medium.

You can change the risk level of this rule as needed.

## **Detection logic**

-   An OSS bucket is considered compliant if public-read access is disabled and no authorizations are granted to accounts outside your organization. A bucket is considered non-compliant if its bucket policy cannot be analyzed. If all authorizations in the bucket policy are for accounts within your resource directory, the bucket is considered compliant. If an authorization is granted to an account outside your resource directory, it is considered an authorization outside the organization, and the bucket is considered non-compliant.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for authorizations outside the organization in bucket policies

Rule identifier

[oss-bucket-policy-outside-organization-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-policy-outside-organization-check)

Tag

OSS

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::OSS::Bucket

Input parameters

None

## **Remediation guide**

To fix a non-compliant resource, see [Access control](/help/en/oss/user-guide/permissions-and-access-control-overview).
