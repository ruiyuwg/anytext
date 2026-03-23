You can delete clusters that you no longer need from the ACK console. The **Delete Cluster** panel displays the existing resources in the cluster. You can view the resources that will be deleted and choose whether to retain them. Read the prompts on the page carefully to ensure that you understand the risks before you delete the cluster.

## Before you begin

-   **Disable deletion protection (if enabled).** If deletion protection is enabled for the cluster, the console blocks the delete operation. To disable it: on the **Clusters** page, locate the cluster, then choose **More** > **Disable Deletion Protection** in the **Actions** column.
    
-   **Review billing impact.** Cloud resources that are not released continue to incur charges. See [Billing impact](#h2-5c09cce0) for details.
    

## Delete a cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster. In that row, choose **More** > **Delete**.
    
3.  In the **Delete Cluster** panel, review the resources that will be automatically deleted, such as ECS, ECI, and ACS instances. Deselect any resources you want to retain, read the notes about resource deletion and billing, and follow the on-screen instructions to delete the cluster.
    

## Node release rules

When you delete a cluster, its node pools are deleted sequentially. The release behavior depends on whether a desired number of nodes is specified for the node pool.

**Condition**

**Pay-as-you-go nodes**

**Subscription nodes**

**System disk**

Desired number of nodes **specified**

Released

Not released

Released with the node

Desired number of nodes **not specified**

Released (except manually or automatically added nodes)

Not released

Released with the node

To release subscription nodes after cluster deletion, convert them to pay-as-you-go nodes in the [ECS console](https://ecs.console.alibabacloud.com/), and then release them. For more information, see [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1).

> To check whether a desired number of nodes is specified for a node pool, go to the [ACK console](https://cs.console.alibabacloud.com), navigate to the cluster's **Nodes** > **Node Pools** page, click the node pool name, and look for a quantity value in the **Scaling Configurations** section on the **Overview** tab.

## Clean up remaining resources

After cluster deletion, some resources may remain. Check the resource prompts in the console and release any resources you no longer need. Use the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) to view all resources under your account.

**Resource**

**Console method**

**API method**

Subscription ECS nodes

[Convert to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1), then [release the instance](/help/en/ecs/user-guide/release-an-instance)

[ModifyInstanceChargeType](/help/en/ecs/api-modifyinstancechargetype), then [release the instance](/help/en/ecs/user-guide/release-an-instance)

Virtual private cloud (VPC)

[Force delete a VPC](/help/en/vpc/unable-to-delete-vpc)

[DeleteVpc](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletevpc)

Simple Log Service (SLS) project

[Manage a project](/help/en/sls/manage-a-project/)

[DeleteProject](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteproject)

NAT Gateway

[Delete an internet NAT gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access)

[DeleteNatGateway](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-deletenatgateway-natgws)

vSwitch

[Delete a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch)

[DeleteVSwitch](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletevswitch)

Security group

[Delete a security group](/help/en/ecs/user-guide/manage-security-groups)

[DeleteSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesecuritygroup)

MSE cloud-native gateway

[Release an MSE cloud-native gateway](/help/en/mse/user-guide/release-the-cloud-native-api-gateway-instance)

[DeleteGateway](/help/en/mse/developer-reference/api-mse-2019-05-31-deletegateway)

## Billing impact

Cloud resources that are not released continue to incur charges after the cluster is deleted or enters the **Deletion Failed** state.

**Cluster type**

**Cluster management fee**

**Cloud resource fee**

ACK managed Basic

Not applicable

Continues until resources are released

ACK dedicated

Not applicable

Continues until resources are released

ACK managed Pro

Stops during **Deleting** and **Deletion Failed** states

Continues until resources are released

For ACK managed Pro clusters, the cluster management fee also stops in the following states: **Initializing**, **Failed**, **Inactive**, **Unavailable**, and **Deleted**. Clusters in the **Deleted** state are not visible in the console.

> ACK managed Basic and ACK dedicated clusters are not charged a cluster management fee. Only ACK managed Pro clusters incur this fee.

When an ACK managed Pro cluster enters the **Inactive** or **Unavailable** state, ACK scales in the control plane. After the scale-in completes, the cluster management fee stops, but cloud resource fees continue.

For more information, see [Cluster lifecycle](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-abnormal-states) and [Billing rules](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing).

## Troubleshoot deletion failures

If cluster deletion fails, the cluster status changes to **Deletion Failed**.

![Deletion Failed status](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3034208471/p957480.png)

Deletion typically fails because of resource dependency conflicts. When ACK releases the resources you selected for deletion, it checks dependencies. If a resource scheduled for deletion depends on another resource not created by the cluster, the deletion fails.

**Example:** A NAT Gateway automatically created by the cluster contains SNAT or DNAT entries added outside the cluster. These external entries block the deletion.

![NAT Gateway deletion failure example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3034208471/p960058.png)

To view the failure cause, click **View** in the **Cluster Status** column.

**To resolve the issue:**

-   **Retain the resource and clean up later.** Retry the deletion and deselect the resource that failed to release. After the cluster is deleted, manage the resource manually.
    
-   **Fix the dependency and retry.** Remove the entries or resources blocking the deletion, then retry.
    

If deletion fails for other reasons, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
