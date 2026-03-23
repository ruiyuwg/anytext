An Auto Scaling configuration is considered compliant if its image is a valid resource.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An Auto Scaling configuration is considered compliant if its image is a valid resource.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Image check for Auto Scaling configurations

Rule identifier

[ess-scaling-configuration-image-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ess-scaling-configuration-image-check)

Tag

Image

Automatic remediation

Not supported

Rule trigger mechanism

Configuration changes

Supported resource types

ACS::ESS::ScalingConfiguration

Input parameters

None

## **Remediation**

To remediate a non-compliant resource, see [Modify a scaling configuration](/help/en/auto-scaling/modify-a-scaling-configuration).
