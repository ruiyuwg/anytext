Checks whether the network type of an ApsaraDB for MongoDB instance is virtual private cloud (VPC) or whether an ApsaraDB for MongoDB instance is deployed in a specified VPC.

## Scenario

We recommend that you deploy an ApsaraDB for MongoDB instance in a VPC. A VPC is an isolated network that ensures network security in the cloud.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the vpcIds parameter is not specified and the ApsaraDB for MongoDB instance is deployed in a VPC, the configuration is considered compliant. If the vpcIds parameter is specified and the ApsaraDB for Redis instance is deployed in a specified VPC, the configuration is also considered compliant.
-   If the vpcIds parameter is not specified and the ApsaraDB for MongoDB instance is deployed in the classic network, the configuration is considered non-compliant. If the vpcIds parameter is specified but the ApsaraDB for MongoDB instance is not deployed in a specified VPC, the configuration is also considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

mongodb-instance-in-vpc

Rule ID

mongodb-instance-in-vpc

Tag

MongoDB and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

`vpcIds`

**Note** Separate multiple parameter values with commas (,).

## Non-compliance remediation

Change the network type of the ApsaraDB for MongoDB instance to VPC. For more information, see [Switch the network type of an instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-f3s-fys-2fb).
