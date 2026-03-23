Checks whether each Server Load Balancer (SLB) instance is in the Active state. If so, the evaluation result is Compliant.

## Scenarios

When an SLB instance is in an abnormal state, your business may be interrupted. This rule allows you to identify an abnormal SLB instance at the earliest opportunity.

## Risk level

Default risk level: high.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If each SLB instance is in the Active state, the evaluation result is Compliant.
-   If an SLB instance is in the Stopped state, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

## Rule details

Item

Description

Rule name

slb-status-active-check

Rule identifier

slb-status-active-check

Tag

SLB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB

Input parameter

None.

## Incompliance remediation

Enable an SLB instance. For more information, see [Create and manage a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb).
