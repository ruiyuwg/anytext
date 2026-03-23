Checks if a Serverless MSE instance or the Microservices Registry Professional Edition of the Microservices Engine (MSE) is used with nodes deployed across multiple availability zones. If this condition is met, the evaluation result is considered compliant.

## **Scenarios**

Utilizing a high-availability MSE registry configuration center ensures stability in service registration and configuration management during hardware failures or network disruptions, thereby enhancing the system's overall reliability and fault tolerance.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Detection logic**

Checks if a Serverless MSE instance or the Microservices Registry Professional Edition of the Microservices Engine (MSE) is used with nodes deployed across multiple availability zones. If this condition is met, the evaluation result is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Use high-availability MSE registry configuration center

Rule template identity

[mse-cluster-multi-availability-area-architecture-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mse-cluster-multi-availability-area-architecture-check)

Automatic remediation

Not supported

Trigger Type

24-hour cycle, configuration change

Resource type evaluated by the rule

ACS::MSE::Cluster

Input parameter

None

## **Remediation guidance**

For more information, see [Manage instances](/help/en/mse/user-guide/manage-instances).
