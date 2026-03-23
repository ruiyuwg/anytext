If the Server Load Balancer(SLB) instance is deployed across zones, the evaluation result is Compliant.

## Scenario

Zone-disaster recovery can be implemented for multi-zone SLB instances to ensure service continuity when errors occur in the primary zone.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SLB instance is deployed across zones, the evaluation result is Compliant.
-   If the SLB instance is deployed in a single zone, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-yud-xw0-c7e)" section of this topic.

## Rule details

Item

Description

Rule name

slb-instance-multi-zone

Rule identifier

slb-instance-multi-zone

Tag

LoadBalancer and SLB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB instance

Input parameter

None

## Incompliance remediation

Deploy the SLB instance across zones. For more information, see [Create a CLB instance](/help/en/slb/classic-load-balancer/getting-started/create-a-clb-instance#task-bh5-dll-vdb).
