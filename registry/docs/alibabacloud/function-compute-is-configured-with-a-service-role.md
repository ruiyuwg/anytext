Checks whether a service role is enabled for Function Compute. If so, the evaluation result is Compliant. This prevents security risks that are caused by the exposure of Alibaba Cloud account secrets.

## Scenarios

This rule applies when you need to use a service role to improve the security, reliability, performance, and scalability of Function Compute. A service role is a recommended mechanism for security authorization and access control.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If a service role is enabled for Function Compute, the evaluation result is Compliant.
    
-   If a service role is not enabled for Function Compute, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

fc-service-bind-role

Rule identifier

[fc-service-bind-role](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=fc-service-bind-role)

Tag

Role

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Function Compute

Input parameter

None

## **Non-compliance remediation**

Enable a service role for Function Compute. For more information, see [Grant permissions to a RAM user by using an Alibaba Cloud account](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-permissions-to-a-ram-user-by-using-an-alibaba-cloud-account).
