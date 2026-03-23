Checks whether the available bandwidth of each Server Load Balancer (SLB) instance is greater than or equal to the value specified by the input parameter.

## Scenario

You can use this rule to check whether the available bandwidth of each SLB instance meets business requirements. This prevents business interruptions caused by insufficient bandwidth.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the available bandwidth of each SLB instance is greater than or equal to the value specified by the input parameter, the evaluation result is compliant.
-   If the available bandwidth of an SLB instance is less than the value specified by the input parameter, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

slb-loadbalancer-bandwidth-limit

Rule ID

slb-loadbalancer-bandwidth-limit

Tag

SLB and Bandwidth

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB instance

Input parameter

`bandwidth`. Default value: 10.

## Non-compliance remediation

Modify the bandwidth limit of the SLB instance. For more information, see [Maximum bandwidth](/help/en/slb/classic-load-balancer/user-guide/maximum-bandwidth#reference-dcf-hpn-vdb).
