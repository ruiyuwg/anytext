Alibaba Cloud ACK LINGJUN clusters are a cluster type offered by Container Service for Kubernetes (ACK) for Intelligent Computing LINGJUN. They provide a standard Kubernetes service with a fully managed, high-availability control plane and allow you to use LINGJUN compute nodes as worker nodes in a Kubernetes cluster. This topic describes the billing methods, pricing, and other billing details for ACK LINGJUN clusters.

## Index

-   [Billing components](#section-yhw-2bv-8f3)
    
-   [Overdue payments](#section-tkp-blx-a7p)
    
-   [Refund policy](#section-1i0-exy-f0r)
    
-   [Billing cycle](#section-gyt-y8q-9ao)
    
-   [View bills](#section-wg5-x4h-ck6)
    
-   [References](#section-zgt-wlc-lmh)
    

## Billing components

The fees for an ACK LINGJUN cluster include cluster management fees, node management fees, and fees for related cloud resources.

![Billing components](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3439574961/p523088.jpg)

### Cluster management fees

ACK LINGJUN clusters have the same enterprise-grade features as ACK Pro clusters. These features include a managed, high-availability control plane that ensures cluster stability, reliability, and security. These features meet the needs of large-scale production environments and simplify cluster setup and O&M, which lets you focus on developing and managing containerized applications.

**Billable item**

**Unit price**

**Billing method**

**Billing cycle**

Cluster management fee

USD 0.09 per cluster per hour

Pay-as-you-go

Billed hourly. Usage for less than one hour is billed as one hour.

### Node management fees

ACK LINGJUN clusters support the batch addition and management of LINGJUN compute nodes and provide automated O&M capabilities. This simplifies node O&M and provides a management experience consistent with that of ECS nodes. By default, ACK LINGJUN clusters also provide heterogeneous resource scheduling capabilities, such as GPU sharing and topology-aware scheduling, to improve application performance and overall cluster resource utilization. They offer various scheduling policies and task priority queues for tasks such as AI and High-Performance Computing (HPC). This optimizes the scheduling efficiency for AI training and inference tasks and standardizes the management and delivery of AI resources and payloads.

**Billable item**

**Unit price (tiered based on the maximum daily reported data value)**

**Billing method**

**Billing cycle**

Number of GPUs

For 100 or fewer GPUs

USD 1.5625 per GPU-day

Pay-as-you-go

**Note**

The system periodically reports the number of GPUs in the cluster nodes.

Billed daily

**Note**

The system automatically selects the maximum daily reported value for billing.

For the portion of GPUs from 101 to 500

USD 1.25 per GPU-day

For the portion of GPUs from 501 to 1,000

USD 0.9375 per GPU-day

For more than 1,000 GPUs

USD 0.625 per GPU-day

### Cloud resource fees

If you use other Alibaba Cloud resources with your ACK LINGJUN cluster, you are charged for those resources according to their respective billing rules. Each Alibaba Cloud service collects its own fees. No additional cloud resource fees are incurred if you do not use other Alibaba Cloud services.

The following table describes the Alibaba Cloud services that can be used with ACK LINGJUN clusters and provides links to their billing information.

**Important**

Currently, you can create ACK LINGJUN clusters only in the Intelligent Computing LINGJUN console. The billing support for associated cloud services depends on the information provided in the Intelligent Computing LINGJUN console.

**Cloud service**

**Activation type**

**Description**

**Subscription supported**

**Resource plan supported**

**Billing information**

ECS

Required

Used to create nodes for ACK clusters.

For more information, see [What is Elastic Compute Service?](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome)

No

No

[Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db)

VPC

Required

Used to build the cluster network environment and routing rules.

For more information, see [What is a virtual private cloud (VPC)?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

No

No

[Product billing](/help/en/vpc/product-overview/product-billing#concept-1357436)

Classic Load Balancer (CLB)

Required

Used to create load balancers for the cluster.

For more information, see [What is Classic Load Balancer (CLB)?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

No

No

[Pay-as-you-go](/help/en/slb/pay-as-you-go-2#concept-dph-vfs-wdb)

Auto Scaling (ESS)

Required

Used to create nodes and implement automatic scaling for the cluster.

For more information, see [What is Auto Scaling?](/help/en/auto-scaling/product-overview/what-is-auto-scaling#concept-25857-zh)

No

No

[Product billing](/help/en/auto-scaling/product-overview/billing-rules#concept-nw2-h3m-qfb)

Container Registry (ACR)

Recommended

Used for secure hosting and lifecycle management of cloud-native assets.

For more information, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)

Yes

**Note**

ACR Enterprise instances only support the subscription billing method. For more information, see [Billing of Enterprise instances](/help/en/acr/product-overview/billing-of-container-registry-enterprise-edition-instances#task-2273187).

No

[Billing](/help/en/acr/product-overview/billing-description#concept-2047822)

Elastic IP Address (EIP)

Recommended

Used for communication between cloud resources and the Internet.

For more information, see [What is an Elastic IP Address?](/help/en/eip/product-overview/what-is-eip#concept-zmv-hd3-vdb)

No

No

[Billing overview](/help/en/eip/billing-overview#concept-645525)

Simple Log Service (SLS)

Recommended

Used for log collection and retrieval for cluster components and applications.

For more information, see [What is Simple Log Service?](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb)

No

Yes

**Note**

For more information, see [Purchase a resource plan](/help/en/sls/purchase-a-resource-plan#task-2190130). Purchase a resource plan that meets your business needs.

[Billing overview](/help/en/sls/billing-overview#concept-2086667)

Alibaba Cloud Prometheus

Recommended

Used for cluster monitoring and alerting based on Prometheus.

For more information, see [What is Prometheus Monitoring?](/help/en/arms/prometheus-monitoring/product-overview/what-is-prometheus#concept-662038)

Yes

No

[Pay-as-you-go](/help/en/arms/prometheus-monitoring/product-overview/pay-as-you-go#concept-2372659)

NAT Gateway

Optional

Used to enable internet access and pull images from the internet for the cluster.

For more information, see [What is a NAT gateway?](/help/en/nat-gateway/product-overview/what-is-nat-gateway#concept-wpm-kfy-ydb)

No

Yes

**Note**

For more information, see [NAT gateway resource plans](/help/en/nat-gateway/nat-resource-plans#concept-2121008). Purchase a resource plan that meets your business needs.

[NAT gateway billing](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb)

Object Storage Service (OSS)

Optional

Used to implement an object storage solution for cluster application data based on OSS.

For more information, see [What is Object Storage Service?](/help/en/oss/user-guide/what-is-oss#concept-ybr-fg1-tdb)

No

Yes

**Note**

For more information, see [Resource plan purchase guide](/help/en/oss/purchase-resource-plans#task-2190990). Purchase a resource plan that meets your business needs.

[Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb)

## Overdue payments

If your account balance is insufficient to pay your bill, your ACK LINGJUN cluster enters an overdue state. In this state, you cannot access the cluster's API server, but services on the nodes continue to run. If the payment remains overdue for more than 15 days, Alibaba Cloud suspends the service. The corresponding nodes are removed from the cluster but are not released. The ACK LINGJUN managed cluster and its container instances are deleted. Container instances that are released due to cluster deletion cannot be recovered.

## Refund policy

The pay-as-you-go billing method does not involve refunds.

## Billing cycle

The billing cycle for the cluster management fees of an ACK LINGJUN cluster is one hour. Alibaba Cloud measures your usage from the previous hour, generates a bill, and then deducts the billed amount from your Alibaba Cloud account. Bills are typically generated within 10 to 30 minutes after a billing cycle ends. After a bill is generated, the system automatically deducts the amount from your account if the balance is sufficient. If you create a cluster less than 30 minutes before the top of the hour, you are not billed for that partial hour. For example:

-   If you create an ACK LINGJUN managed cluster at 10:15:00, the billing cycle ends at 11:00:00. The bill is generated between 11:10:00 and 11:30:00.
    
-   If you create an ACK LINGJUN managed cluster at 10:50:00, the billing cycle does not end at 11:00:00. The first billing cycle ends at 12:00:00. The bill is generated between 12:10:00 and 12:30:00.
    

## View bills

1.  Log on to the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com/).
    
2.  In the top menu bar, click **Expenses** to go to the **Expenses and Costs** page.
    
    **Note**
    
    If you are logged on with an Alibaba Cloud account, choose **Expenses** > **Bills** in the top menu bar.
    
3.  In the navigation pane on the left, choose **Billing** > **Bill Details**.
    
4.  The details include product details, consumption type, price, and deduction information. To query bills for an ACK LINGJUN managed cluster, click **Product Name**, select **Alibaba Cloud Container Service for Kubernetes** from the product list, and then select **ACK - Lingjun Node Management** for **Commodity Name**.
    
    **Note**
    
    -   In the upper-right corner of the query results list, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p875246.png) icon to customize the displayed columns. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882860671/p875249.png) icon to export the list as a CSV file.
        
    -   For more information about billing details, see [Billing details](/help/en/user-center/user-guide/billing#topic-2059547).
        
    

## References

-   [What is ACK LINGJUN Edition?](/help/en/ack/ack-lingjun-managed-clusters/product-overview/overview-14#task-2271006)
    
-   [Create an ACK LINGJUN cluster](/help/en/ack/ack-lingjun-managed-clusters/user-guide/create-an-ack-lingjun-managed-cluster#task-2271051)
