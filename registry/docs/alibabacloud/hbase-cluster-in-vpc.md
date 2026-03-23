Checks whether the network type of each ApsaraDB for HBase cluster is set to VPC if you do not specify the vpcIds parameter. Checks whether the VPC in which ApsaraDB for HBase clusters reside matches the specified setting if you specify the vpcids parameter.

## Scenarios

We recommend that you deploy an ApsaraDB for HBase cluster in a VPC. A VPC is an isolated network that ensures network security in the cloud.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If you do not specify the vpcIds parameter, the system checks whether the network type of each ApsaraDB for HBase cluster is set to VPC. If yes, the evaluation result is compliant. If you specify the vpcIds parameter, the system checks whether the VPC in which ApsaraDB for HBase clusters reside matches the specified setting. If yes, the evaluation result is compliant.
-   If you do not specify the vpcIds parameter, the system checks whether the network type of each ApsaraDB for HBase cluster is set to the classic network. If yes, the evaluation result is non-compliant. If you specify the vpcIds parameter, the system checks whether the VPC in which ApsaraDB for HBase clusters reside matches the specified setting. If no, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-rsd-dwe-ff9).

## Rule details

**Item**

**Description**

Rule name

hbase-cluster-in-vpc

Rule ID

hbase-cluster-in-vpc

Tag

HBase and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for HBase cluster

Input parameter

`vpcIds`

**Note** Separate multiple parameter values with commas (,).

## Non-compliance remediation

Purchase an instance of ApsaraDB for HBase Performance-enhanced Edition. For more information, see [Purchase a cluster](/help/en/hbase/getting-started/purchase-a-performance-enhanced-edition-cluster#task-2046768).
