This topic describes the main billing information for ACK managed clusters and ACK dedicated clusters, including billable items and billing methods.

## **Billing overview**

ACK managed clusters and ACK dedicated clusters incur fees for [cluster management](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee), [cloud product resources](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services), and [Lingjun node management](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/lingjun-node-management-fee). The following table describes the billable items for each cluster type:

**Cluster type**

**Cluster management fees**

**Associated resource fees**

**Cloud resource fees**

**Lingjun node management fees**

ACK managed Pro cluster

Involved

Involves

Included only when a Lingjun node pool is configured

ACK managed Basic cluster

Not included

Involves

Not applicable

ACK dedicated cluster

Not included

involve

Not included

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6693622771/CAEQUxiBgMCU.dOM5RkiIDQ4MTM5OWIwYTk3ZDRhMGFiNWI0NTY4YTRjZjNhYjdk4755304_20241122150432.489.svg)

## **Cluster management fees**

Only ACK managed Pro clusters incur cluster management fees. Fees are calculated per cluster and per hour of usage.

### **Billing method**

-   **Pay-as-you-go**: The fee for managing one cluster is USD 0.09 per hour. Prices may vary by region. Your actual bill reflects the final charge.
    

### **Billing cycle**

Billing occurs hourly, aligned to the top of the hour (for example, 10:00–11:00). The first billing cycle after cluster creation and the last cycle before cluster release are not charged. Bills usually appear 10–30 minutes after the end of each cycle.

> For a detailed billing example, see [Billing cycle for cluster management fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/cluster-management-fee#a99a4b08abyw7).

**Important**

You are charged cluster management fees when your cluster is in the **Running**, **Upgrading**, **Draining**, **Removing**, or **configuring** state.

## **Cloud resource fees**

Using ACK clusters requires other Alibaba Cloud services. You pay for those services based on their individual billing rules. For details, see [Cloud resource fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services).

**Resource type**

**Purpose**

**Billing details**

Elastic Compute Service (ECS)

Serves as cluster nodes (only worker nodes are charged for managed clusters; both master and worker nodes are charged for dedicated clusters)

[ECS billing overview](/help/en/ecs/billing-overview)

Server Load Balancer (SLB)

Associates a Classic Load Balancer (CLB) instance with the API server (required; deleting it makes the cluster unavailable); uses CLB or Network Load Balancer (NLB) when creating a LoadBalancer-type Service; associates an Application Load Balancer (ALB) instance when using ALB Ingress

[CLB billing](/help/en/slb/classic-load-balancer/product-overview/billing-overview/), [NLB billing](/help/en/slb/network-load-balancer/product-overview/nlb-billing-overview/#DAS), [ALB billing](/help/en/slb/application-load-balancer/product-overview/billing-overview/)

NAT Gateway

Provides Internet access for the cluster (for example, pulling public container images)

[NAT Gateway billing](/help/en/nat-gateway/nat-gateway-billing)

Elastic IP Address (EIP)

Associates with the API server or NAT gateway to enable public network access

[EIP billing overview](/help/en/eip/billing-overview)

Storage

Cloud disks, File Storage NAS, and Object Storage Service (OSS) provide persistent storage

[Cloud disk billing](/help/en/ecs/block-storage-devices), [NAS billing](/help/en/nas/product-overview/overview-1), [OSS billing](/help/en/oss/billing-overview#DAS)

Observability

Simple Log Service (SLS) collects logs. Managed Service for Prometheus monitors the cluster

[SLS billing](/help/en/sls/billing-overview#concept-2086667), [Container monitoring billing](/help/en/arms/prometheus-monitoring/product-overview/container-cluster-monitoring-pro-version-billing-rule)

Container Registry

Manages and distributes container images

[ACR billing](/help/en/acr/product-overview/billing-description#concept-2047822)

> The list above includes common cloud services. Actual charges depend on the services you enable and use. Use the [pricing calculator](https://www.alibabacloud.com/zh/pricing-calculator) to estimate costs.

## **View billing details**

Use the Cost Insights feature in the cost management suite to view associated costs for your cluster. This helps you optimize costs. For more detailed billing information, go to [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) to view your bill. For steps, see [Query bills](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/view-your-bills).

## **Overdue payments and refunds**

### **Impact of overdue payments**

Your account is considered overdue when your available balance—including your Alibaba Cloud account balance and vouchers—is less than the amount due. Overdue payments affect your services as follows:

-   ACK managed Pro cluster: If payment is overdue, the cluster enters the **Inactive** state for 15 days. During this time, you cannot access the API server. Pay-as-you-go cloud resources may be stopped or released. After 15 days, the cluster is deleted.
    
-   ACK managed Basic cluster and ACK dedicated cluster: Cluster status remains unchanged. However, pay-as-you-go cloud resources may be stopped or released. After 15 days, the cluster is deleted.
    

Recharge your account and settle overdue bills as soon as possible on the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) page. For more information, see [Overdue payments](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/overdue-payments).

### **Unsubscribing and refunds**

If you no longer need ACK, delete the cluster and its associated cloud resources to stop billing.

-   **Cluster management fees**: Not refunded (charged based on actual usage).
    
-   **Cloud resource fees**: Refund policies vary by service. See the billing documentation for each service.
    

For more information, see [Unsubscription and refund policies](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/unsubscribe-and-refund-instructions).

## **References**

-   [Billing FAQ](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/resource-billing)
    
-   [Best practices for reducing cluster costs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cluster-cost-optimization-recommendations)
    
-   [Cost management suite](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-suite/)
