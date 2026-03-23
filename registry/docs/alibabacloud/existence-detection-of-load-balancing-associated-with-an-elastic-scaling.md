An Auto Scaling group is considered compliant if it is associated with a Classic Load Balancer (CLB) or an Application Load Balancer (ALB).

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An Auto Scaling group is considered compliant if it is associated with a CLB or an ALB.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check whether an Auto Scaling group is associated with a Server Load Balancer instance

Rule identifier

[ess-scaling-group-loadbalancer-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ess-scaling-group-loadbalancer-check)

Tags

ESS, ScalingGroup

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::ESS::ScalingGroup

Input parameters

None

## **Remediation**

To fix a non-compliant resource, see [Modify a scaling configuration](/help/en/auto-scaling/modify-a-scaling-configuration).
