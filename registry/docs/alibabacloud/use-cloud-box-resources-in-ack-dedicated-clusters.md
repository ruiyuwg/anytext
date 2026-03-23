CloudBox is a fully managed cloud service that integrates Alibaba Cloud public cloud hardware and software components (computing, storage, and network) into your on-premises data center. This integration addresses specific business requirements including data security, on-premises data processing, and low latency. ACK dedicated clusters support the creation of CloudBox node pools to utilize resources deployed in the CloudBox.

**Important**

To use CloudBox resources in an ACK dedicated cluster, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request permission to create an ACK dedicated cluster.

## Prerequisites

-   A CloudBox is created, resources are purchased, CloudBox acceptance is completed, and the CloudBox operates normally. For more information about the billing and specifications of computing resources deployed in a CloudBox, see [Compute SKU specifications](/help/en/cloud-box/product-overview/computing-resources#section-pqy-1zc-joq).
    
-   The CloudBox is connected to the public cloud over a highly-available and low-latency connection. To ensure a better user experience, we recommend that you establish a connection with bandwidth of 50 Mbit/s or higher. For more information, see [Deployment requirements](/help/en/cloud-box/product-overview/deployment-requirements#concept-2158459).
    
-   A vSwitch is created in the zone of the CloudBox. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    

## Limits

**Limit**

**Description**

Region limits

The ACK dedicated cluster that needs to use CloudBox resources and the CloudBox must be deployed in the same region.

Network limits

-   You cannot create Application Load Balancer (ALB) instances or Internet NAT gateways in the zone of the CloudBox for the ACK dedicated cluster. You can create an Internet NAT gateway in a zone of the public cloud.
    
-   You cannot associate elastic IP addresses (EIPs) with pods, Server Load Balancer (SLB) instances, or worker nodes that are deployed in the CloudBox.
    

Cluster network mode limits

Only ACK dedicated clusters that use the Flannel network plug-in support CloudBox resources. ACK clusters that use the Terway network plug-in do not support CloudBox resources.

Service limits

-   When you create a LoadBalancer Service in the CloudBox, you need to specify the zone of the CloudBox for the Service. For more information, see [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).
    
-   LoadBalancer Services in the CloudBox can be associated only with ECS instances that are deployed in the same CloudBox. LoadBalancer Services in the public cloud can be associated only with ECS instances that are deployed on the public cloud.
    

Node and node pool limits

-   You cannot create ECS instances that use encrypted disks or preemptible instances as worker nodes in the zone of the CloudBox.
    
-   Node pools that use CloudBox resources and have auto scaling enabled do not support policies related to preemptible instances.
    

## Usage notes

When the connection between the CloudBox and public cloud is interrupted, the ECS nodes added from the CloudBox to the ACK cluster can still work normally. However, you cannot manage the workloads deployed on these nodes or add new ECS nodes from the CloudBox to the ACK cluster. In this scenario, we recommend that you check the network of the CloudBox and restore the connection as soon as possible.

## Procedure

You can create a CloudBox node pool in an ACK dedicated cluster to utilize the resources deployed in the CloudBox. You can perform the following steps to create control planes and node pools in the zone of the CloudBox.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click **Create Kubernetes Cluster**.
    
3.  Click the **ACK Dedicated Cluster** tab, configure the key parameters based on the following table, and create an ACK dedicated cluster by following the instructions.
    
    The following table describes the key parameters involved when using CloudBox resources. For more information about detailed parameter descriptions, see [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/).
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select the region of the CloudBox.
    
    **Configure SNAT for VPC**
    
    Clear the **Configure SNAT for VPC** check box.
    
    **vSwitch**
    
    Select a vSwitch in the zone of the CloudBox.
    
    **Expose API server with EIP**
    
    Clear the **Expose API server with EIP** check box.
    
    **Network Plug-in**
    
    Select **Flannel**.
    
    After the cluster is created, you can find it on the **Clusters** page in the Container Service for Kubernetes console.
