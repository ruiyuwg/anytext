An Auto Scaling (ESS) scaling configuration is compliant if its security group does not allow access from 0.0.0.0/0.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An ESS scaling configuration is compliant if its security group does not allow access from 0.0.0.0/0.
    

## **Rule details**

**Parameter**

**Description**

Rule name

The security group of an ESS scaling configuration should not be set to 0.0.0.0/0

Rule identifier

[ess-scaling-configuration-sg-public-acess](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ess-scaling-configuration-sg-public-acess)

Tags

ESS, ScalingConfiguration

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource types

ACS::ESS::ScalingConfiguration

Input parameters

None

## **Remediation**

For more information about how to remediate a non-compliant resource, see [CreateScalingConfiguration](/help/en/auto-scaling/developer-reference/api-createscalingconfiguration).
