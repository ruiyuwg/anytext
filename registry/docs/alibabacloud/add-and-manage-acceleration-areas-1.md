After you create a basic Global Accelerator (GA) instance, add an acceleration area to define where clients connect to the Alibaba Cloud global transmission network. Clients send requests to an accelerated IP address in the nearest acceleration region, and GA routes traffic through the Alibaba Cloud backbone network to your backend service.

## How acceleration areas work

An acceleration area is a collection of Alibaba Cloud regions. Each basic GA instance supports one acceleration area with one acceleration region. Within that region, assign accelerated IP addresses and associate them with endpoints to create traffic routing mappings.

By default, Elastic IP Addresses (EIPs) are used as accelerated IP addresses. Only IPv4 is supported. You can accelerate access from IPv4 clients to IPv4 services. Each accelerated IP address has one of the following states:

-   **Associated** -- Mapped to an endpoint. GA distributes traffic to the corresponding backend service based on this mapping.
    
-   **Idle** -- Not mapped to any endpoint.
    

### Bandwidth

The bandwidth of an acceleration region depends on the bandwidth metering method of the GA instance:

-   **Pay-By-Data-Transfer** -- Specify the bandwidth when adding the acceleration area. Range: 2 Mbit/s to 20,000 Mbit/s.
    
-   **Pay-By-Bandwidth** -- Bandwidth is determined by the maximum bandwidth of the basic bandwidth plan associated with the GA instance.
    

### Instance version differences

Basic GA instances created after August 1, 2023 support multiple accelerated IP addresses per acceleration region and internal-facing Network Load Balancer (NLB) instances as endpoints.

Basic GA instances created before August 1, 2023 have the following limits unless upgraded by contacting your account manager:

-   Only one acceleration area and one acceleration region per instance.
    
-   Only one endpoint group and one endpoint per instance.
    
-   NLB instances cannot be used as endpoints.
    
-   No need to add or associate accelerated IP addresses.
    

## Add an acceleration area

### Prerequisites

Before you begin, make sure that you have:

-   A basic GA instance. For details, see [Create and manage basic GA instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances)
    
-   (Subscription instances only) A basic bandwidth plan purchased and associated with the GA instance
    

### Procedure

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the target instance and click the instance ID.
    
4.  On the instance details page, click the **Acceleration Areas** tab, and then click **Add Acceleration Area**.
    
5.  In the **Add Acceleration Area** dialog box, configure the following parameters and click **OK**. **ISP Line Type** options:
    
    -   **BGP (multi-isp)** -- High-quality BGP lines covering multiple regions worldwide. The optimal line is automatically selected across Internet service providers (ISPs) to maintain network stability. Supported in all acceleration regions. This is the default option.
        
    -   **BGP (multi-isp) Pro** -- Optimizes traffic from outside the Chinese mainland to users in the Chinese mainland (excluding data centers) by routing through Chinese mainland ISP services, which reduces network latency. Available only in the China (Hong Kong) and Japan (Tokyo) regions.
        
    
    **Important**
    
    If you specify a small bandwidth value, throttling may occur and packets may be dropped. Set the bandwidth based on your actual traffic requirements.
    
    **Parameter**
    
    **Description**
    
    **Regions**
    
    The region where acceleration is required. If the client is not in a GA-supported acceleration region, select the closest available region. Client traffic enters the Alibaba Cloud global network through the accelerated IP address in that region. For supported regions, see [Acceleration areas](/help/en/ga/user-guide/overview-1/#section-99j-n10-9c3).
    
    **Bandwidth**
    
    The bandwidth of the acceleration region in Mbit/s. Applies only to **Pay-By-Data-Transfer** instances. Range: 2 to 20,000 Mbit/s. For **Pay-By-Bandwidth** instances, the bandwidth is determined by the associated basic bandwidth plan.
    
    **Internet Protocol**
    
    The IP version for connecting to GA. Only **IPv4** is supported.
    
    **ISP Line Type**
    
    The ISP line type. Available only for **Pay-By-Data-Transfer** instances.
    
6.  If your pay-as-you-go basic GA instance uses the pay-by-data-transfer bandwidth metering method, an endpoint group is configured, and your service requires cross-border acceleration, complete the following steps in the **Enable Cross-border Acceleration** dialog box:
    
    1.  Read the **Compliance Commitments Regarding Cross-border Data Transfers**.
        
    2.  Select **Agree to the Preceding Compliance Agreement**.
        
    3.  Click **Enable**.
        
    
    **Important**
    
    Cross-border acceleration covers network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macau), and China (Taiwan), or between different countries and regions. Enterprise real-name verification is required.
    

## Add an accelerated IP address

After you add an acceleration area and region, add accelerated IP addresses so that clients can connect to the Alibaba Cloud global transmission network.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the target instance and click the instance ID.
    
4.  On the instance details page, click the **Acceleration Areas** tab, and then click **Add Accelerated IP Address**.
    
5.  In the **Associate Endpoint** dialog box, select an endpoint and click **OK**. This step is optional.
    
    > \- Make sure that an endpoint exists that is not already associated with another accelerated IP address. For details, see [Add and manage endpoint groups and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915). - The system automatically allocates an accelerated IP address to the acceleration region before you select an endpoint. If you click **Cancel** without selecting an endpoint, the IP address status becomes **Idle**.
    

## Associate an idle accelerated IP address with an endpoint

Associate an idle accelerated IP address with an endpoint to create a routing mapping. GA distributes traffic to the backend service based on this mapping.

Before you begin, make sure that an endpoint exists that is not already associated with another accelerated IP address. For details, see [Add and manage endpoint groups and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the target instance and click the instance ID.
    
4.  On the instance details page, click the **Acceleration Areas** tab, find the idle accelerated IP address, and then click **Associate Endpoint** in the **Associate Endpoint** column.
    
5.  In the **Associate Endpoint** dialog box, select the endpoint and click **OK**.
    

## Modify the bandwidth of an acceleration region

Bandwidth modification is available only for pay-as-you-go basic GA instances whose bandwidth metering method is **Pay-By-Data-Transfer**.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Instances** page, find the target instance and click the instance ID.
    
4.  On the instance details page, click the **Acceleration Areas** tab and click **Modify Bandwidth**.
    
5.  In the **Modify Bandwidth** dialog box, modify the bandwidth and click **OK**. Bandwidth range: 2 Mbit/s to 20,000 Mbit/s.
    

## Disassociate an accelerated IP address from an endpoint

After you disassociate an accelerated IP address from an endpoint, the IP address status changes to **Idle**. When the number of idle accelerated IP addresses reaches the upper limit (10 by default), you cannot disassociate accelerated IP addresses from endpoints.

1.  On the **Acceleration Areas** tab, find the accelerated IP address and click **Disassociate** in the **Actions** column.
    
2.  In the message that appears, click **UnBind**.
    

## Delete an accelerated IP address

1.  On the **Acceleration Areas** tab, find the accelerated IP address and click **Delete** in the **Actions** column.
    
2.  Delete the accelerated IP address based on its status:
    
    -   If the IP address is **Idle**: In the message that appears, click **Delete**.
        
    -   If the IP address is **Associated**: In the dialog box that appears, select **Delete Accelerated IP Address Only** or **Delete Endpoint Bound to Accelerated IP Address**, and then click **Delete**.
        

## Delete an acceleration area

**Warning**

After you delete an acceleration area, GA stops providing acceleration services in that area.

Before you delete an acceleration area:

-   All accelerated IP addresses must be in the **Idle** state. Disassociate all accelerated IP addresses from endpoints first.
    
-   When you delete the area, the system also deletes all idle accelerated IP addresses in the area.
    

1.  On the **Acceleration Areas** tab, find the acceleration area and click **Delete** in the **Actions** column.
    
2.  In the message that appears, click **OK**.
    

## Quotas

**Resource**

**Default quota**

**Adjustable**

**Quota name**

Accelerated IP addresses per instance

25

Yes

`gaplus_quota_basic_gaip_limit`

Idle accelerated IP addresses per instance

10

No

`gaplus_quota_basic_gaip_idle_limit`

To request a quota increase, go to the [Quota Management](https://ga.console.alibabacloud.com/quota) page. For details, see the [Adjust quotas](/help/en/ga/user-guide/manage-ga-quotas) section of the Manage GA quotas topic.

> When the number of idle accelerated IP addresses reaches the upper limit (10 by default), you cannot add idle accelerated IP addresses or disassociate accelerated IP addresses from endpoints.

## API reference

**API**

**Description**

[CreateBasicIpSet](/help/en/ga/api-createbasicipset#doc-api-Ga-CreateBasicIpSet)

Add an acceleration region to a basic GA instance

[DeleteBasicIpSet](/help/en/ga/api-deletebasicipset#doc-api-Ga-DeleteBasicIpSet)

Delete an acceleration region from a basic GA instance

[CreateBasicAccelerateIp](/help/en/ga/api-createbasicaccelerateip#doc-api-Ga-CreateBasicAccelerateIp)

Create an accelerated IP address for a basic GA instance

[DeleteBasicAccelerateIp](/help/en/ga/api-deletebasicendpointip#doc-api-Ga-DeleteBasicAccelerateIp)

Delete an accelerated IP address from a basic GA instance

[CreateBasicAccelerateIpEndpointRelation](/help/en/ga/api-createbasicaccelerateipendpointrelation#doc-api-Ga-CreateBasicAccelerateIpEndpointRelation)

Associate an accelerated IP address with an endpoint

[CreateBasicAccelerateIpEndpointRelations](/help/en/ga/api-createbasicaccelerateipendpointrelations#doc-api-Ga-CreateBasicAccelerateIpEndpointRelations)

Associate accelerated IP addresses with endpoints in batch

[DeleteBasicAccelerateIpEndpointRelation](/help/en/ga/api-deletebasicaccelerateipendpointrelation#doc-api-Ga-DeleteBasicAccelerateIpEndpointRelation)

Disassociate an accelerated IP address from an endpoint
