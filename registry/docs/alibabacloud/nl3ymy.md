Checks whether public IP addresses are associated with each Server Load Balancer (SLB) instance.

## Scenario

SLB instances cannot be associated with public IP addresses. This prevents your business from being exposed to the Internet and reduces network security risks.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If no public IP addresses are associated with each SLB instance, the evaluation result is compliant.
-   If public IP addresses are associated with an SLB instance, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

slb-no-public-ip

Rule ID

slb-no-public-ip

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB instance

Input parameter

None

## Non-compliance remediation

Create an internal-facing SLB instance. For more information, see [Create a CLB instance](/help/en/slb/classic-load-balancer/getting-started/create-a-clb-instance#task-bh5-dll-vdb "This topic describes how to create an Internet-facing instance. After you create an Internet-facing CLB instance, the system allocates a public IP address to the CLB instance. Then, you can resolve your domain names to the public IP address.").
