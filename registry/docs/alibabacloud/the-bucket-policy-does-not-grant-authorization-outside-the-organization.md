An Object Storage Service (OSS) bucket is considered compliant if its policy does not grant permissions to accounts outside your organization. It is 'non-compliant' if its policy grants permissions to accounts outside your resource directory. The rule is not applicable if the bucket policy cannot be analyzed.

## **Threat level**

Default threat level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An OSS bucket is considered compliant if its policy does not grant permissions to accounts outside the organization.
    
-   An OSS bucket is considered non-compliant if its policy grants permissions to an account outside the resource directory.
    
-   The rule is 'not applicable' if the bucket policy cannot be analyzed.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Bucket policy does not grant permissions outside the organization

Rule identifier

[oss-bucket-policy-unauthorized-outside-organization](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oss-bucket-policy-unauthorized-outside-organization)

Tag

\[OSS\]

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

\[ACS::OSS::Bucket\]

Input parameters

None

## **Remediation guide**

For remediation steps, see [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).
