This topic describes the billing methods, overdue payment policy, and frequently asked questions (FAQ) for ACK Edge clusters.

## Billing

**Cluster type**

**Cluster management fees**

**Node management fees**

**Cloud service fees**

ACK Edge Pro clusters

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p961103.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p961104.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p961104.png)

ACK Edge Basic clusters

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p961105.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p961104.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p961106.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1922091771/CAEQThiBgIC.pY_ozBkiIGMwNzVkYTIwOWNhZDRmNDg4MWVkMDAxOWM2ZGQ0NTU54755304_20241122150432.489.svg)

**Note**

The following billing examples are for reference only. The actual fees are subject to the prices displayed on the purchase page in the console.

### Cluster management fees

Alibaba Cloud Container Service for Edge integrates Alibaba Cloud's capabilities in virtualization, storage, networking, and security. It simplifies cluster operations and maintenance (O&M) so that you can focus on developing and managing containerized applications. For this reason, a management fee is charged for each ACK Edge Pro cluster.

**Billing method**

**Price**

Pay-as-you-go

USD 0.090/hour per cluster

### Node management fees

Alibaba Cloud Container Service for Edge supports a wide range of heterogeneous edge resources, such as on-premises data centers, [ENS](https://www.aliyun.com/product/ens) instances, IoT devices, and nodes that use the x86 or ARM architecture. Container Service for Edge also supports the hybrid scheduling of heterogeneous resources. Therefore, a management fee is charged for non-ECS nodes. For example, if your cluster has three nodes with 4 vCPUs and 8 GB of memory each (one ECS instance and two ENS instances or on-premises nodes), the daily node management fee is calculated as follows: 0.029vU/day×2×4 vCPUs. If a node is used for less than one day, the usage is rounded up to a full day.

By default, node management fees are charged on a pay-as-you-go basis. You can also purchase a [resource plan](#5c9c221df5iu2) to offset the fees.

#### **Pay-as-you-go**

**Billing method**

**Price**

Pay-as-you-go

USD 0.029/vCPU/day

#### **Container Service Edge Node Resource Plan**

**Purchase a resource plan**

The ACK Edge resource plan is available in a single specification. You can purchase multiple plans, and the vCPU quotas of the plans can be stacked.

**Specification**

**Description**

**Price**

**Validity period**

500 vCPU

Each resource plan provides a fixed daily credit that offsets the pay-as-you-go bills for 500 vCPUs of edge nodes over 365 days.

USD 1,688

365 days.

You can activate the plan immediately after purchase or on a specified day within the next six months.

**Use a resource plan**

After you purchase an ACK Edge resource plan, it is automatically applied to your Alibaba Cloud account to offset the management fees for edge nodes in your ACK Edge clusters. No action is required.

The following rules apply to deductions:

-   A management fee is deducted daily for 500 vCPU cores of edge nodes (non-cloud ECS nodes).
    
-   The resource plan cannot cover charges incurred before its activation.
    
-   After the resource plan is used up or expires, edge node management fees are charged on a pay-as-you-go basis.
    
-   If your edge nodes have more vCPUs than a single plan covers, you can purchase multiple plans. For example, you can purchase two resource plans to cover 1,000 vCPUs. The plans are applied in the order they were purchased. Note the activation date of each plan.
    

**View resource plan usage**

After you purchase an ACK Edge resource plan, you can query its usage and set alerts for the remaining quota.

1.  Log on to the Expenses and Costs page.
    
    **Note**
    
    The following steps use the new console as an example.
    
2.  In the left-side navigation pane, select **Account** > **Resource Plan**.
    
3.  For **Resource Dimension**, select **Resource Packages**. In the list of resource packages, set the **Resource Plan Type** filter to **ACK Edge Resource Plan**.
    
    **Note**
    
    Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p875246.png) icon in the upper-right corner of the list to customize the columns. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p875249.png) icon to export the list as a CSV file.
    
4.  If needed, perform the following:
    
    ## Query overall usage
    
    1.  On the **Instance Summary** tab, find the ACK Edge resource plan that you want to manage and click **Statistics** in the **Actions** column.
        
    2.  In the page that appears, you can view the information and usage of the ACK Edge resource plan. This includes the expiration time, remaining quota, and instance deduction details.
        
    
    ## View usage details
    
    1.  Select the **Usage Details** tab.
        
    2.  Set the search criteria and click **Search**.
        
    3.  You can view the usage details of the ACK Edge resource plan. This includes the deducted amount, the ID of the cluster to which the deduction was applied, and the deduction period.
        
    
    ## Set alerts for remaining quota
    
    1.  Click **Quota Alert Settings** in the upper right corner of the page.
        
    2.  In the dialog box that appears, find the ACK Edge resource plan, enable alerts, set a threshold percentage, and then click **OK**.
        
    

### Cloud service fees

If you use other Alibaba Cloud services with an ACK Edge cluster, you are billed for these services according to their respective billing rules. The fees are collected by each service. If you do not use other Alibaba Cloud services, no additional fees are charged.

**Cloud Product Name**

**Type**

**Description**

**Can I use a subscription?**

**Support for Resource Plans**

**Billing**

[Elastic Computing Service (ECS)](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome)

Required

Creates nodes for an ACK Edge cluster.

Supported

Not supported

[Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db)

[Edge Node Service (ENS)](/help/en/ens/product-overview/what-is-ens)

Optional

Adds edge nodes to an ACK Edge cluster.

Supported

Not supported

[Billing overview of ENS](/help/en/ens/product-overview/overview-5#concept-1828715)

[Virtual Private Cloud (VPC)](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

Required

Builds the network environment and routing rules for the cluster.

Not supported

Not supported

[Product billing](/help/en/vpc/product-overview/product-billing#concept-1357436)

[Classic Load Balancer (CLB)](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

Required

Creates a load balancer for an ACK Edge cluster.

Not supported

Not supported

[CLB billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/)

[CLB product billing](/help/en/slb/pay-as-you-go-2#concept-dph-vfs-wdb)

[Auto Scaling (ESS)](/help/en/auto-scaling/product-overview/what-is-auto-scaling#concept-25857-zh)

Required

Creates nodes and implements auto scaling for an ACK Edge cluster.

Not supported

Not supported

[Product billing](/help/en/auto-scaling/product-overview/billing-rules#concept-nw2-h3m-qfb)

[Container Registry (ACR)](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)

Recommended

Provides security hosting and full lifecycle management for cloud-native assets.

Supported

**Note**

ACR Enterprise Edition instances support only the subscription billing method. For more information, see [Billing of Enterprise Edition instances](/help/en/acr/product-overview/billing-of-container-registry-enterprise-edition-instances#task-2273187).

Not supported

[Billing](/help/en/acr/product-overview/billing-description#concept-2047822)

[Elastic IP Address (EIP)](/help/en/eip/product-overview/what-is-eip#concept-zmv-hd3-vdb)

Recommended

Enables communication between cloud resources and the Internet.

Not supported

Not supported

[Billing overview](/help/en/eip/billing-overview#concept-645525)

[Elastic Container Instance](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079)

Recommended

Deploys clusters.

Not supported

Not supported

[Billing overview](/help/en/eci/product-overview/billing-overview#topic-1860085)

[Service Mesh (ASM)](/help/en/asm/product-overview/what-is-asm#concept-2366983)

Recommended

Provides unified traffic management for applications in multiple clusters based on a Service Mesh.

Not supported

Supported

[Billing](/help/en/asm/product-overview/billing-rules#concept-2370573)

[Simple Log Service (SLS)](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb)

Recommended

Collects and retrieves logs of cluster components and applications.

Not supported

Supported

**Note**

Purchase a resource plan as needed. For more information, see [Purchase resource plans](/help/en/sls/purchase-a-resource-plan#task-2190130).

[Billing overview](/help/en/sls/billing-overview#concept-2086667)

[CloudMonitor (CMS)](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor#concept-2452587)

Recommended

Monitors the running status of cluster nodes and applications.

Not supported

Supported

**Note**

Purchase a resource plan as needed. For more information, see [Overview](https://www.alibabacloud.com/help/zh/cloudmonitor/latest/overview-history-intl).

[Overview](https://www.alibabacloud.com/help/zh/cloudmonitor/latest/overview-history-intl)

[Managed Service for Prometheus](/help/en/arms/prometheus-monitoring/product-overview/what-is-prometheus#concept-662038)

Recommended

Monitors and triggers alerts for clusters based on Prometheus.

Not supported

Not supported

[Pay-as-you-go](/help/en/arms/prometheus-monitoring/product-overview/pay-as-you-go#concept-2372659)

[NAT Gateway](/help/en/nat-gateway/product-overview/what-is-nat-gateway#concept-wpm-kfy-ydb)

Optional

Enables public network access for the cluster and allows the cluster to pull images from the Internet.

Not supported

Supported

**Note**

Purchase a resource plan as needed. For more information, see [NAT Gateway resource plans](/help/en/nat-gateway/nat-resource-plans#concept-2121008).

[Billing of NAT Gateway](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb)

[Security Center](/help/en/security-center/product-overview/what-is-security-center#concept-bjv-y5w-ydb)

Optional

Monitors security events and alerts for cluster applications at runtime.

Not supported

Not supported

[Billing overview](/help/en/security-center/product-overview/billing-overview#concept-z2v-2bc-zdb)

[File Storage NAS](/help/en/nas/product-overview/what-is-nas#concept-qpg-wrt-1fb)

Optional

Provides file storage for cluster applications based on NAS.

Not supported

Supported

**Note**

Purchase a resource plan as needed. For more information, see [Purchase resource plans](/help/en/nas/product-overview/purchase-resource-plans#concept-53974-zh).

[Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548) and [Billing of Extreme NAS file systems](/help/en/nas/product-overview/billing-of-extreme-nas-file-systems#task-2567605)

[Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss#concept-ybr-fg1-tdb)

Optional

Provides object storage for cluster application data based on OSS.

Not supported

Supported

**Note**

Purchase a resource plan as needed. For more information, see [Resource Plan Purchase Guide](/help/en/oss/purchase-resource-plans#task-2190990).

[Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb)

[Key Management Service (KMS)](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh)

Optional

Manages application keys for clusters and enables encryption at rest for keys in Pro clusters.

Not supported

Not supported

[Billing of KMS 1.0](/help/en/kms/key-management-service/support/billing-of-kms#concept-52608-zh)

[Cloud Backup](/help/en/cloud-backup/product-overview/what-is-hbr#concept-62362-zh)

Optional

Provides backup, disaster recovery, and policy-based data archiving.

Supported

Supported

**Note**

Purchase a resource plan as needed. For more information, see [Resource Plan Purchase Guide](/help/en/cloud-backup/product-overview/purchase-resource-plans#concept-2531739).

[Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh)

[Cloud Enterprise Network (CEN)](/help/en/cen/product-overview/what-is-cen/#concept-2090845)

Optional

Builds private network communication channels between VPCs across regions, and between VPCs and on-premises data centers.

Support

**Note**

Bandwidth plans support the subscription billing method.

Bandwidth plans are supported.

**Note**

Select and operate a bandwidth plan as needed. For more information, see [Use bandwidth plans](/help/en/cen/user-guide/work-with-a-bandwidth-plan).

[Billing](/help/en/cen/product-overview/billing-rules#concept-1985505)

## Overdue payments

If your account has an insufficient balance to pay your bill, your ACK Edge cluster will have an overdue payment. You can no longer access the API server of the cluster, but the workloads on the nodes can still run. If the payment is overdue for more than 15 days, Alibaba Cloud suspends the service. The associated nodes are removed from your cluster but are not released. Your ACK Edge cluster and its container instances are deleted. Container instances that are released because the ACK Edge cluster is deleted cannot be restored.

## Refund policy

The pay-as-you-go billing method does not support refunds.

## Billing cycle

ACK Edge fees are billed on a 24-hour cycle. Alibaba Cloud measures your usage from the previous day, generates a bill, and deducts the billed amount from your Alibaba Cloud account. Bills are typically generated within 8 to 10 hours after the billing cycle ends.

## View bills

For instructions on how to view bills, see [View bills](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/view-your-bills#task-2260050).

## **Billing FAQ**

-   Why does my daily bill amount suddenly increase or decrease?
    
    -   If you scale nodes out or in, the system adjusts the billing based on the total number of vCPUs of the nodes managed by the cluster. The new fee is reflected in the bill on the following day.
        
    -   If you remove a node without using the Container Service console, for example, by running the `kubectl delete node` command, the node may still be billed for the day it is removed. Therefore, you should remove nodes using the Container Service console.
        
-   I deleted my ACK Edge cluster. Why did I still receive a bill and get charged today?
    
    The management fee for an ACK Edge cluster is calculated daily from 00:00:00 to 23:59:59 and charged on the next day. If you deleted an ACK Edge cluster yesterday, the charges for that day were already recorded and will appear on today's bill. You will not be billed again on the following day.
    
-   How do I stop billing for an ACK Edge cluster?
    
    To stop billing, you must delete all ACK Edge clusters in all regions. Before you delete the clusters, make sure to back up your applications and data.
    
-   Are nodes in the NotReady state billed?
    
    Yes, they are. An ACK Edge cluster manages a node regardless of whether its status is Ready or NotReady. Therefore, nodes in the NotReady state are still billed. To stop billing for a node, you must remove it using the Container Service console.
