Microservices Engine (MSE) cloud-native gateways charge you based on the instance specifications (CPU cores and memory) and the number of nodes you provision. This topic describes the billable items, billing methods, pricing, and auxiliary costs for common instances of cloud-native gateways.

Cloud-native gateways are available in two editions: **Standard Edition** and **Professional Edition**. The edition you choose determines which cost components apply to your deployment.

## Standard Edition vs. Professional Edition

**Item**

**Standard Edition**

**Professional Edition**

Gateway instance fees

Billed separately (pay-as-you-go or subscription)

Billed separately (pay-as-you-go or subscription)

Server Load Balancer (SLB) fees

Billed separately from MSE fees; deducted directly from your Alibaba Cloud account

Included in gateway fees; no additional SLB charges

Load Balancer Capacity Units (LCUs)

N/A

Billed separately; see [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items)

Internet data transfer fees

N/A

Billed separately based on [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt)

Hardware-accelerated GZIP decompression

Not available

Available for 8 cores / 16 GiB and 16 cores / 32 GiB nodes; can reduce network bandwidth fees by about 40% when CPU utilization is extremely low

## Billable items

### Standard Edition

You are charged for the managed common gateway instances. For each common gateway instance that uses Standard Edition, an [SLB](https://www.alibabacloud.com/zh/product/server-load-balancer) instance serves as a traffic ingress. You can associate multiple Internet-facing or internal-facing SLB instances with a gateway instance to adapt to different network environments. When you create a gateway, MSE automatically purchases an SLB instance based on the specifications you select. The SLB instance is billed separately, and the fees are deducted directly from your Alibaba Cloud account. MSE does not charge fees for SLB instances.

### Professional Edition

You are charged for the managed common gateway instances. When you create a gateway, the gateway fees include the fees of the purchased SLB instance. No additional SLB charges are incurred. You are separately billed for Load Balancer Capacity Units (LCUs) and Internet data transfers.

Professional Edition is deeply integrated with SLB and implements GZIP decompression based on hardware acceleration. If CPU utilization is extremely low, this feature can reduce network bandwidth fees by about 40%. Hardware-accelerated GZIP decompression applies to nodes with the following specifications: 8 cores and 16 GiB of memory, or 16 cores and 32 GiB of memory.

## Billing methods

MSE cloud-native gateways support two billing methods: **pay-as-you-go** and **subscription**. For both methods, you select the instance specifications and the number of nodes based on your business requirements.

### Pay-as-you-go

-   The billing duration is measured in hours. If a gateway runs for less than one hour, the usage duration is counted as one hour.
    
-   Fees are calculated every hour, and a bill is generated at an interval of 24 hours.
    
-   Fees are automatically deducted from the balance of your Alibaba Cloud account.
    

### Subscription

-   The billing duration is measured in months. If you select a duration of 1 year, the total fees equal the monthly fees multiplied by 12.
    
-   Fees are automatically deducted from the balance of your Alibaba Cloud account.
    

## Billing formulas

The unit price for common gateway instance specifications applies to a single gateway node. If you configure multiple nodes for a gateway, the total fees are determined based on the number of nodes.

### Pay-as-you-go

**Formula:**

```
Total fees = Unit price of instance specifications x Number of hours x Number of nodes
```

**Example:** You select a region in the Chinese mainland, choose the specifications of 2 CPU cores and 4 GiB of memory, configure 3 nodes for a gateway, and run it for 5 hours.

```
Total fees = 0.136 x 5 x 3 = USD 2.04
```

### Subscription

**Formula:**

```
Total fees = Unit price of instance specifications x Number of months x Number of nodes
```

**Example:** You select a region in the Chinese mainland, choose the specifications of 2 CPU cores and 4 GiB of memory, configure 3 nodes for a gateway, and select a duration of 1 year.

```
Total fees = 69 x 12 x 3 = USD 2,484
```

### Subscription with auto scaling

When a subscription gateway uses auto scaling, elastic nodes that are added during a scale-out are billed separately at the pay-as-you-go rate for elastic nodes. The elastic node unit price is higher than the regular node unit price.

**Example:** You purchase a subscription cloud-native gateway deployed in a region in the Chinese mainland. The specifications are 2 CPU cores and 4 GiB of memory, and 3 nodes are configured. The system automatically triggers scale-out and adds 1 elastic node to run during the period from 20:00 to 22:00 every day. In a 30-day month, the total monthly fees are calculated as follows:

```
Total monthly fees = (69 x 3 x 1) + (0.341 x 1 x 2 x 30) = USD 227.46
```

Where:

-   `69 x 3 x 1` = Subscription cost for 3 nodes for 1 month
    
-   `0.341 x 1 x 2 x 30` = Elastic node cost for 1 node running 2 hours per day for 30 days
    

## Gateway pricing

The prices described in this topic are for reference only. For the actual prices, see the [MSE buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=mse_ingresspre_public_cn®ionId=cn-hangzhou&request=%7B%22region%22%3A%22cn-hangzhou%22%2C%22engine_specification%22%3A%22MSE_GTW_2_4_200_c%22%2C%22node_number%22%3A2%2C%22vpc_id%22%3A%22VPC_IS_NULL%22%2C%22vswitch_id%22%3A%22vsw-bp1r9zms4yc6fy2c8dl0b%22%2C%22vswitch_id_2%22%3A%22vsw-bp1r9zms4yc6fy2c8dl0b%22%2C%22internet_slb_spec%22%3A%22slb.s1.small%22%2C%22slb_spec%22%3A%22SLB%22%2C%22enterprise_security_group%22%3A%22true%22%2C%22monitor_module%22%3A%22Prometheus%22%2C%22instance_name%22%3A%22123%22%2C%22hw_acceleration%22%3Atrue%7D).

Common gateway instances support auto scaling. You can specify the automatic scale-out period to handle traffic bursts during peak hours. Elastic nodes that are added after a scale-out are billed separately. The unit price of elastic nodes is higher than that of regular nodes. In bill details, the Product Details field shows **Cloud-native Gateway (Elastic Node)**.

All prices in the following tables are per single node.

### Regions in the Chinese mainland

Excludes the China (Hong Kong), China (Macau), and China (Taiwan) regions.

**CPU cores**

**Memory**

**Pay-as-you-go (USD/hour)**

**Subscription (USD/month)**

**Elastic node (USD/hour)**

2 cores

4 GiB

0.136

69

0.341

4 cores

8 GiB

0.273

137

0.681

8 cores

16 GiB

0.544

274

1.357

16 cores

32 GiB

1.088

548

2.716

### China (Hong Kong) and Japan (Tokyo)

**CPU cores**

**Memory**

**Pay-as-you-go (USD/hour)**

**Subscription (USD/month)**

**Elastic node (USD/hour)**

2 cores

4 GiB

0.205

103

0.511

4 cores

8 GiB

0.409

206

1.022

8 cores

16 GiB

0.816

411

2.038

16 cores

32 GiB

1.632

822

4.074

### Singapore, Indonesia (Jakarta), and Germany (Frankfurt)

**CPU cores**

**Memory**

**Pay-as-you-go (USD/hour)**

**Subscription (USD/month)**

**Elastic node (USD/hour)**

2 cores

4 GiB

0.188

95

0.471

4 cores

8 GiB

0.376

189

0.941

8 cores

16 GiB

0.751

378

1.873

16 cores

32 GiB

1.501

757

3.750

### US (Virginia) and US (Silicon Valley)

**CPU cores**

**Memory**

**Pay-as-you-go (USD/hour)**

**Subscription (USD/month)**

**Elastic node (USD/hour)**

2 cores

4 GiB

0.164

82

0.410

4 cores

8 GiB

0.327

164

0.819

8 cores

16 GiB

0.653

329

1.630

16 cores

32 GiB

1.306

658

3.260

### Malaysia (Kuala Lumpur)

**CPU cores**

**Memory**

**Pay-as-you-go (USD/hour)**

**Subscription (USD/month)**

**Elastic node (USD/hour)**

2 cores

4 GiB

0.175

88

0.438

4 cores

8 GiB

0.352

177

0.879

8 cores

16 GiB

0.702

354

1.751

16 cores

32 GiB

1.404

708

3.503

## Auxiliary costs

### SLB fees (Standard Edition)

For each common gateway instance that uses Standard Edition, the purchased SLB instance is billed separately. For billing details, see [NLB billing](/help/en/slb/network-load-balancer/product-overview/nlb-billing-overview/) or [CLB billing](/help/en/slb/classic-load-balancer/product-overview/billing-overview/). To replace an SLB instance, perform the operation in the MSE console.

For each common gateway instance that uses Professional Edition, the gateway fees include the fees of the purchased SLB instance. No additional charges are incurred.

### Internet data transfer fees (Professional Edition)

If you use Professional Edition common instances of cloud-native gateways, you are charged for Internet data transfers based on [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt). For more information, see [Internet data transfers](/help/en/cdt/internet-data-transfers/).

### LCU fees (Professional Edition)

For more information, see [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items).

## Total cost summary

The following table summarizes all potential cost components by edition.

**Cost component**

**Standard Edition**

**Professional Edition**

Gateway instance fees (pay-as-you-go or subscription)

Yes

Yes

Elastic node fees (if auto scaling is used)

Yes

Yes

SLB instance fees

Billed separately

Included in gateway fees

LCU fees

N/A

Billed separately

Internet data transfer fees

N/A

Billed separately

## References

If the cloud-native gateways that you purchased are no longer used, you can unsubscribe from resources to prevent unexpected charges on your bill. For more information, see [Refund policy](/help/en/mse/product-overview/refund-policy-2).
