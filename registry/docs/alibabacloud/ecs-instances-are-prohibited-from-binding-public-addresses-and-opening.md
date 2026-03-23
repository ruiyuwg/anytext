An ECS instance is considered compliant if it is not attached to a public IPv4 address or an Elastic IP Address, or if its associated security group does not allow access from 0.0.0.0/0.

## **Threat level**

Default threat level: Medium.

You can change the risk level as needed.

## **Detection logic**

An ECS instance is considered compliant if it is not attached to a public IPv4 address or an Elastic IP Address, or if its associated security group does not allow access from 0.0.0.0/0.

## **Rule details**

**Parameter**

**Description**

Rule name

Disallow public IP addresses and any-IP access for ECS instances

Rule identifier

[ecs-instance-no-public-and-anyip](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ecs-instance-no-public-and-anyip)

Tag

\[ECS\]

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

\[ACS::ECS::Instance\]

Input parameters

None

## **Remediation**

For more information, see [Create a custom instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
