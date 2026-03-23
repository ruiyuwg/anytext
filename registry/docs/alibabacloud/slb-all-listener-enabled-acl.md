Checks whether the access control feature is configured for the listeners of each Server Load Balancer (SLB) instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to configure the access control feature. This feature helps you reduce network exposure and ensures network security in cloud environments.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the access control feature is configured for the listeners of each SLB instance, the evaluation result is Compliant.
-   If the access control feature is not configured for a running listener of an SLB instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-hxx-rd5-l4t).
-   This rule does not apply to SLB instances for which no listeners are configured.

## Rule details

**Item**

**Description**

Rule name

slb-all-listener-enabled-acl

Rule identifier

slb-all-listener-enabled-acl

Tag

SLB and Listener

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

SLB

Input parameter

None.

## Incompliance remediation

Configure the access control feature for a listener of a running SLB instance. This way, you can perform access control based on listeners. For more information, see [Access control](/help/en/slb/classic-load-balancer/user-guide/overview-3#concept-2167216).
