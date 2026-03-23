If applications in your Container Service for Kubernetes (ACK) cluster need to access external resources over the Internet, such as pulling container images or downloading dependency packages, configure SNAT rules on a NAT gateway in the cluster's virtual private cloud (VPC).

> This topic covers outbound Internet access from your cluster. To allow inbound access to the API server over the Internet (for example, connecting with kubectl from outside the cluster), see [Control public access to the API server of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster).

## Prerequisites

Before you begin, make sure that you have the following:

-   An ACK cluster with node pools
    
-   Knowledge of which network plugin your cluster uses (Terway or Flannel), because this determines which vSwitches require SNAT entries
    
-   The required permissions to create and manage NAT gateways and elastic IP addresses (EIPs)
    

## Billing

Configuring SNAT rules involves the following billable services:

**Service**

**Description**

**Billing details**

[NAT Gateway](/help/en/nat-gateway/product-overview/what-is-nat-gateway#concept-wpm-kfy-ydb)

Provides fully managed NAT gateways that enable instances to access the Internet without exposing their private addresses.

[Billing of Internet NAT gateways](/help/en/nat-gateway/nat-gateway-billing)

[Elastic IP Address](/help/en/eip/product-overview/what-is-eip)

Provides independent public IP addresses that you can associate with cloud resources for Internet access.

[Pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb)

## Terway vs. Flannel: vSwitch requirements

The vSwitches that require SNAT entries depend on your cluster's network plugin.

**Network plugin**

**Required vSwitches for SNAT**

**Reason**

Terway

Node vSwitches **and** pod vSwitches

Terway assigns vSwitch-based IP addresses to pods, so both node and pod subnets need outbound routes.

Flannel

Node vSwitches only

Flannel uses overlay networking, so pod traffic exits through the node's network interface.

## Enable SNAT for an existing cluster

To enable Internet access for an existing ACK cluster, create a NAT gateway, associate an EIP, and configure SNAT entries for the cluster's vSwitches.

> You cannot use API operations to enable SNAT for existing clusters.

The following figure shows the overall workflow.

![Workflow for enabling SNAT on an existing cluster](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6218682471/CAEQORiBgID_8JCsrhkiIGY2NmI3NTYyMjI1MzQ5ZDJiZjgxMTE5YmJhOGQxNWQ14947776_20250304144800.532.svg)

### Step 1: Create a NAT gateway

Create an Internet NAT gateway in the same region as your cluster.

1.  Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat).
    
2.  In the left navigation pane, choose **NAT Gateway** > **Internet NAT Gateway**.
    
3.  On the **Internet NAT Gateway** page, click **Create Internet NAT Gateway**.
    
4.  Configure the parameters and click **Buy Now**. For more information about the parameters, see [Create and manage an Internet NAT gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#task-491095).
    

**Important**

When you create the first Internet NAT gateway in a VPC, the system automatically adds a route with destination CIDR block `0.0.0.0/0` and the Internet NAT gateway as the next hop to the VPC's system route table. This route directs traffic to the NAT gateway. If your VPC uses a custom route table or contains multiple Internet NAT gateways, you must add routes manually. For more information, see [Create and manage a route table](/help/en/vpc/user-guide/create-and-manage-route-table#section-p9h-bmf-xyz).

### Step 2: Create an EIP (optional)

Skip this step if you already have an EIP that you want to use.

1.  In the left-side navigation pane, choose **Access to Internet** > **Elastic IP Addresses**.
    
2.  On the **Elastic IP Addresses** page, click **Create EIP**.
    
3.  Select the same region as your NAT gateway, configure the remaining parameters, and then click **Buy Now**.
    

### Step 3: Associate the EIP with the NAT gateway

1.  In the left-side navigation pane, choose **NAT Gateway** > **Internet NAT Gateway**.
    
2.  On the **Internet NAT Gateway** page, find the NAT gateway that you created, and then choose **![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2425674161/p140355.png)** > **Associate EIP** in the **Actions** column.
    
3.  In the **Associate EIP** dialog box, select a resource group from the **Resource Group** drop-down list, select the EIP from the **Select Existing EIP** drop-down list, and then click **OK**.
    

### Step 4: Create SNAT entries

1.  On the **Internet NAT Gateway** page, find the NAT gateway that you created, and then click **Manage** in the **Actions** column.
    
2.  On the gateway details page, click the **SNAT Management** tab, and then click **Create SNAT Entry**.
    
3.  On the **Create SNAT Entry** page, configure the following parameters and click **OK**. For more information, see [Create an SNAT entry](/help/en/nat-gateway/create-a-snat-entry#section-ass-g58-26u).
    
    **Parameter**
    
    **Description**
    
    **SNAT Entry**
    
    Select **Specify vSwitch** and select the vSwitches used by your cluster. For Terway clusters, select both node vSwitches and pod vSwitches. For Flannel clusters, select only node vSwitches.
    
    **Select EIP**
    
    Select one or more EIPs for outbound Internet access.
    

After the SNAT entry is created, your cluster can access the Internet through the NAT gateway.

The following figure shows a NAT gateway configured for an ACK cluster that uses the Terway plugin, with SNAT rules enabling Internet access.

![NAT gateway with SNAT rules configured](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1726778761/p550139.png)

**Find your cluster's vSwitch IDs**

#### Find node vSwitch IDs

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the Node Pools page, click the name of the node pool that you want to check. On the node pool details page, click the **Overview** tab. In the **Node Configurations** section, find the node vSwitch IDs.
    

![Node vSwitch IDs in the Node Configurations section](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6218682471/p923721.png)

#### Find pod vSwitch IDs (Terway only)

1.  On the **Clusters** page, find the target cluster and click its name. In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
    
2.  In the upper part of the **ConfigMap** page, select **kube-system** from the **Namespace** drop-down list. Find and click the **eni-config** ConfigMap.
    
3.  On the **eni-config** page, locate the `vswitches` field to find the pod vSwitch IDs.
    

![Pod vSwitch IDs in the eni-config ConfigMap](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2857588761/p571373.png)

## Enable SNAT during cluster creation

If you are creating a new ACK cluster, you can enable SNAT during the cluster creation process:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  When you create an ACK cluster, select **Configure SNAT for VPC** in the **Network Settings** section. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    

![Configure SNAT for VPC option during cluster creation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6218682471/p921326.png)

**Important**

When you create the first Internet NAT gateway in a VPC, the system automatically adds a route with destination CIDR block `0.0.0.0/0` and the Internet NAT gateway as the next hop to the VPC's system route table. This route directs traffic to the NAT gateway. If your VPC uses a custom route table or contains multiple Internet NAT gateways, you must add routes manually. For more information, see [Create and manage a route table](/help/en/vpc/user-guide/create-and-manage-route-table#section-p9h-bmf-xyz).

## Verify Internet access

After you configure SNAT, verify that your cluster nodes can access the Internet.

1.  [Log on to a node in the cluster](/help/en/ecs/user-guide/connect-to-instance).
    
2.  Run a connectivity test to confirm Internet access:
    
    ```
       ping -c 4 www.alibabacloud.com
    ```
    
3.  Verify that the outbound IP address matches the EIP you configured. The output should display the EIP associated with the NAT gateway:
    
    ```
       curl ifconfig.me
    ```
    

![Connectivity test result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5028162261/p140471.png)

## FAQ

### How do I find the public IP address used by my ACK cluster?

1.  Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat).
    
2.  In the left-side navigation pane, choose **NAT Gateway** > **Internet NAT Gateway**.
    
3.  On the **Internet NAT Gateway** page, find the NAT gateway associated with your cluster and click **Manage** in the **Actions** column.
    
4.  Click the **SNAT Management** tab. In the **SNAT Entry List** section, view the EIPs used by the cluster.
    

![EIPs in the SNAT Entry List](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7564121471/p259134.png)

## References

-   For notes on configuring pods to access external networks, including domain name resolution, network policies, and security groups, see [Notes for configuring a pod to access an external network](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-pod-to-access-an-external-network).
    
-   For recommended security group rules, see [Configure security groups for clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters).
    
-   Do not configure SNAT entries and IPv4 gateways for an ACK cluster at the same time. For more information about using an IPv4 gateway, see [Use IPv4 gateway to centralize control over Internet access](/help/en/vpc/use-ipv4-gateway-to-unify-public-network-ingress-and-egress).
