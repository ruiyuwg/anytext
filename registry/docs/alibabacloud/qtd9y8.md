Checks whether an IP address whitelist is configured for each Server Load Balancer (SLB) instance and 0.0.0.0/0 is not added to the IP address whitelist.

## Scenario

If you add 0.0.0.0/0 to the IP address whitelist of an SLB instance, the SLB instance can be accessed from all CIDR blocks. This exposes your business to the Internet and poses potential risks of malicious attacks. We recommend that you do not add 0.0.0.0/0 to the IP address whitelist.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If an IP address whitelist is configured for each SLB instance and 0.0.0.0/0 is not added to the IP address whitelist, the evaluation result is compliant.
-   If an IP address whitelist is configured for each SLB instance but 0.0.0.0/0 is added to the IP address whitelist, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

Item

Description

Rule name

slb-acl-public-access-check

Rule ID

slb-acl-public-access-check

Tag

SLB and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Access control list

Input parameter

None

## Non-compliance remediation

Remove 0.0.0.0/0 from the IP address whitelist. For more information, see [Delete IP entries](/help/en/slb/classic-load-balancer/user-guide/delete-ip-entries#task-1597731).
