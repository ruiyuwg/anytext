Checks whether a specified high-risk port is added to a listener of a Server Load Balancer (SLB) instance. If not, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to add ports to a listener. We recommend that you disable unnecessary ports. This prevents your system from being exposed to high-risk networks.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If no specified high-risk port is added to a listener of an SLB instance, the evaluation result is Compliant.
-   If a specified high-risk port is added to a listener of an SLB instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-5bm-8p2-j85).

## Rule details

**Item**

**Description**

Rule name

slb-listener-risk-ports-check

Rule identifier

slb-listener-risk-ports-check

Tag

SLB and Listener

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB

Input parameter

`ports`

**Note** Separate multiple values with commas (,).

## Incompliance remediation

Configure a listener for an SLB instance.

For more information, see [CLB listeners](/help/en/slb/classic-load-balancer/user-guide/listener-overview/#concept-xvg-qmn-vdb).
