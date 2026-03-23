Microservices Engine (MSE) cloud-native gateways are compatible with Kubernetes Ingresses and can discover services from Container Service for Kubernetes (ACK), Nacos, and other sources. Cloud-native gateways provide various security and O&M capabilities for your microservices. Creating a gateway takes 2 to 3 minutes.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with MSE activated
    
-   A Virtual Private Cloud (VPC) with at least one vSwitch in the region where you plan to deploy the gateway. To create a vSwitch, see [Create a vSwitch](https://vpc.console.alibabacloud.com/)
    
-   (Conditional) If you plan to use an NLB or CLB ingress, Server Load Balancer (SLB) activated in your account
    

## Limits

-   A single gateway instance supports up to 20 load balancers for NLB and CLB ingresses.
    
-   TLS hardware acceleration is available only in specific regions. For details, see [Limits](/help/en/mse/product-overview/what-is-cloud-native-gateway#72ad25c8d7qrs).
    
-   Single-node gateways risk service interruptions. Deploy at least two nodes for production workloads.
    

## Create the gateway

1.  Open the gateway creation page using one of the following methods:
    
    -   **From the MSE product page**: Go to the [MSE product page](https://www.alibabacloud.com/product/microservices-engine) and click **Buy Now**. Then click the **Cloud-native Gateway** tab.
        
    -   **From the MSE console**: Log on to the [MSE console](https://mse.console.alibabacloud.com/#/microgw). In the left-side navigation pane, choose **Cloud-native Gateway** > **Gateways**. Select a region in the top navigation bar, then in the upper-left corner of the **Gateways** page, click **Create Gateway**.
        
2.  Configure the gateway parameters described in the following sections, then click **Buy Now**.
    

### Billing and basic settings

**Parameter**

**Description**

**Billing Method**

Select **Subscription** or **Pay-as-you-go**.

**Region**

Select the region where you want to deploy the gateway.

**Gateway Name**

Enter a name of 1 to 64 characters. Use a name that reflects the environment or business type, such as `test` or `order-prod`.

**Duration**

Required for **Subscription** only. Select a billing duration. Enable **Auto-renewal** to prevent service interruptions when the subscription expires.

### Compute specifications

**Parameter**

**Description**

Gateway Engine Specifications

Select the instance size: **2 Cores, 4 GB**, **4 Cores, 8 GB**, **8 Cores, 16 GB**, or **16 Cores, 32 GB**.

**Gateway Nodes**

Specify the number of gateway nodes. Use at least two nodes for production environments. A single-node gateway risks service interruptions.

**Hardware Acceleration**

Select **Enable TLS Hardware Acceleration** to double TLS handshake performance. Available only in [supported regions](/help/en/mse/product-overview/what-is-cloud-native-gateway#72ad25c8d7qrs).

### Networking

**Parameter**

**Description**

**Resource Group**

Select a resource group from the drop-down list.

**VPC**

Select the VPC where your backend services are deployed.

**Gateway Ingress Type**

Select the load balancer type for incoming traffic: **NLB** ([What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/)), **CLB** ([CLB billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/)), or **None** (no load balancer). With **None**, you can add a load balancer later from the [Gateways page](https://mse.console.alibabacloud.com/#/microgw).

**Gateway Ingress Billing Method**

Only **Pay by Usage** is supported.

**Zone Location**

Select **Manual Selection** to choose a specific zone and vSwitch, or **Automatic Allocation** to select only a vSwitch.

Zone

Displayed when you select **Manual Selection**. Cloud-native gateways use the vSwitches in VPCs to communicate with backend services. Choose the same zone as your backend services.

**vSwitch**

Select a vSwitch in the VPC. If no vSwitch exists, [create one](https://vpc.console.alibabacloud.com/?spm=5176.28342990.commonbuy2container.12.2ae4778bzMEmWw). Place the vSwitch in the same zone as your backend services.

**Network Type**

Select the access method: **Internet** (public access only), **Private Network** (VPC access only), or **Private Network and Internet** (both). **Private Network and Internet** creates both an Internet-facing and an internal-facing SLB instance based on the selected SLB instance type automatically.

**Security Group Type**

Select a security group type. The default is **Advanced Security Group**. Use the same security group type as the Elastic Compute Service (ECS) instances that run your backend services. For more information, see [Security group overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

### Observability

**Parameter**

**Description**

**Gateway Monitoring**

**Managed Service for Prometheus** is enabled by default. It collects gateway metrics, displays dashboards, and manages alerts at no additional cost.

**Log Service**

Select **Use Log Service** to activate Simple Log Service for log shipping, analysis, and dashboards. For details, see [Enable log shipping for a cloud-native gateway](/help/en/mse/user-guide/enable-log-shipping-for-a-cloud-native-gateway#task-2129277).

**Tracing Analysis**

Select **Use Managed Service for OpenTelemetry** to activate Alibaba Cloud Managed Service for OpenTelemetry and enable distributed tracing for the gateway. For details, see [Enable Tracing Analysis for a cloud-native gateway](/help/en/mse/user-guide/enable-tracing-analysis-for-a-cloud-native-gateway#task-2129278).

### Permissions

**Parameter**

**Description**

**Service-linked Role**

A service-linked role is automatically created so the MSE cloud-native gateway can access other Alibaba Cloud services. No action is required.

## Result

After you click **Buy Now**, the system provisions the cloud-native gateway in 2 to 3 minutes.

## What to do next

After the gateway is running, complete the following tasks to start handling traffic:

1.  **Add backend services** -- Associate ACK clusters, Nacos registries, or other service sources with the gateway so it can discover your services.
    
2.  **Configure routes** -- Define routing rules that map incoming requests to backend services.
    
3.  **Set up security policies** -- Configure authentication, authorization, and rate limiting to protect your services.
    
4.  **Enable observability** -- Set up log shipping and distributed tracing to monitor gateway performance and troubleshoot issues.
