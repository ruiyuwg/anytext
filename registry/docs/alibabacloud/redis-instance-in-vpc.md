Checks whether the network type of an ApsaraDB for Redis instance is virtual private cloud (VPC) or whether an ApsaraDB for Redis instance is deployed in a specified VPC.

## Scenario

We recommend that you deploy an ApsaraDB for Redis instance in a VPC. A VPC is an isolated network that ensures network security in the cloud.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the vpcIds parameter is not specified and the ApsaraDB for Redis instance is deployed in a VPC, the configuration is considered compliant. If the vpcIds parameter is specified and the ApsaraDB for Redis instance is deployed in a specified VPC, the configuration is also considered compliant.
-   If the vpcIds parameter is not specified and the ApsaraDB for Redis instance is deployed in the classic network, the configuration is considered non-compliant. If the vpcIds parameter is specified but the ApsaraDB for Redis instance is not deployed in a specified VPC, the configuration is also considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

redis-instance-in-vpc

Rule ID

redis-instance-in-vpc

Tag

Redis and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

`vpcIds`

**Note** Separate multiple parameter values with commas (,).

## Non-compliance remediation

Change the network type of the ApsaraDB for Redis instance to VPC. For more information, see [Change the VPC or vSwitch of an instance](/help/en/redis/user-guide/change-the-vpc-or-vswitch-of-an-instance#task-2038839).
