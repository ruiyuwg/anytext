A running elastic container group is considered compliant if Security Center protection is enabled. This rule does not apply to container groups that are not running. These container groups are considered not applicable.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   A running elastic container group is considered compliant if Security Center protection is enabled. This rule does not apply to container groups that are not running. These container groups are considered not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable Security Center protection for running elastic container groups

Rule identifier

[eci-container-group-enabled-security-protection](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=eci-container-group-enabled-security-protection)

Tags

ECI, SecurityCenter

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::ECI::ContainerGroup

Input parameters

None

## **Remediation**

For instructions on how to remediate a non-compliant resource, see [Install the client](/help/en/security-center/user-guide/install-the-security-center-agent).
