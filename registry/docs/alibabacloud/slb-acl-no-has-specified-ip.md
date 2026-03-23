Checks whether the whitelist of each listener of each Server Load Balancer (SLB) instance allows access from a specified IP address or Classless Inter-Domain Routing (CIDR) block. If not, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to add IP addresses or CIDR blocks to the whitelist of a listener of an SLB instance. This helps reduce network exposure and ensures the network security of cloud environments.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If no whitelists of the listeners of each SLB instance allow access from a specified IP address or CIDR block, the evaluation result is Compliant.
-   If the whitelist of a listener of an SLB instance allows access from a specified IP address or CIDR block, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-t2i-u98-hpe).

## Rule details

 

Item

Description

Rule name

slb-acl-no-has-specified-ip

Rule identifier

slb-acl-no-has-specified-ip

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

SLB

Input parameter

`IpAddress`

## Incompliance remediation

Configure a whitelist or blacklist for a listener of an SLB instance. For more information, see [Enable access control](/help/en/slb/classic-load-balancer/user-guide/enable-access-control#task-1597735 "This topic describes how to enable access control for a listener. You can enable access control for each listener of a Classic Load Balancer (CLB) instance. You can set whitelists or blacklists for different listeners to regulate network access control.").
