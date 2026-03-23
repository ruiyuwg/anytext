If the engine version of an MSE registry and configuration center instance exceeds the default value, the instance is considered compliant.

## **Scenarios**

The engine version detection feature of the MSE registry and configuration center assists in monitoring the version status of your current registry and configuration services. This ensures that your system runs on the latest stable version, enhancing service compatibility and security.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Detection logic**

If the engine version of an MSE registry and configuration center instance exceeds the default value, the instance is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

MSE registry and configuration center engine version detection

Rule template identity

[mse-cluster-stable-version-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mse-cluster-stable-version-check)

Automatic remediation

Not supported

Trigger Type

24-hour cycle, configuration change

Resource type evaluated by the rule

ACS::MSE::Cluster

Input parameter

None

## **Remediation guidance**

For more information, see [Upgrade Nacos engine version](/help/en/mse/user-guide/update-a-nacos-version).
