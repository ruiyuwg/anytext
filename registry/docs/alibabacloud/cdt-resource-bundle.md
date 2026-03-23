Cloud Data Transfer (CDT) resource plans are subscription-based data transfer packages. You can customize the specifications of a resource plan to offset CDT traffic at a lower price.

## Product overview

### **Product features**

-   **Flexible specifications**: You can purchase plans on demand with customizable specifications to meet your offset requirements.
    
-   **Automatic offset**: After a resource plan takes effect, it automatically offsets CDT traffic.
    
-   **Cost-effective**: CDT resource plans are typically less expensive than the pay-as-you-go billing method for CDT.
    
    > For example, a customer used 1,020 GB of CDT Internet BGP (Multi-ISP) traffic in Chinese mainland regions in June. The first 20 GB of traffic is covered by the free quota. If the customer uses the pay-as-you-go billing method, the fee is calculated as follows: (1,020 GB - 20 GB) × USD 0.118/GB = USD 118. If the customer purchases a 1,000 GB CDT resource plan for Chinese mainland regions, the discounted price is USD 108.56. This saves the customer USD 9.44.
    
-   **Tiered pricing compatibility**: CDT resource plans can offset CDT Internet traffic across all pricing tiers after the free quota is used up.
    

### **Plan specifications**

> Before you use a CDT resource plan, go to the [CDT console](https://cdt.console.alibabacloud.com/overview) to ensure that your products are upgraded to the CDT billing mode. This prevents offset failures.

-   **Region:** Chinese mainland, Asia-Pacific, Europe, North America, South America, and Middle East.
    
-   **Line Type**: BGP (Multi-ISP). (BGP (Multi-ISP) Pro lines are not supported.)
    
-   **Quantity:** 1 by default. The maximum value is 50.
    
-   **Plan Capacity**: Customizable capacity from 50 GB to 102,400 GB. The minimum increment is 1 GB.
    
-   **Subscription Period**: 1 year.
    
-   **Activation Schedule**: **Activate Immediately** or specify a time within 180 days for the resource plan to take effect. This setting cannot be changed after the payment for the resource plan is completed.
    

### **Offset rules**

-   **Applicable products and use cases:** CDT resource plans can offset Internet traffic from CDT-billed products that exceeds the free quota. If a CDT resource plan is used up within its validity period, the excess traffic is billed based on the tiered pricing of CDT. The offset traffic is also included in the cumulative usage of CDT.
    
    > The free quota for CDT Internet traffic is 220 GB per month. 20 GB per month can be used in Chinese mainland regions and 200 GB per month can be used in regions outside the Chinese mainland.
    
-   **Applicable line type:** BGP (Multi-ISP). (Fees for BGP (Multi-ISP) Pro lines cannot be offset.)
    
-   **Offset order:** If you have multiple CDT resource plans, the one that expires earliest is used first to offset traffic.
    
-   **Unused traffic upon expiration:** After a CDT resource plan expires, the unused traffic becomes invalid and cannot be used to offset traffic.
    

### **Sales areas**

CDT resource plans are sold by area. The following table describes the regions included in each area.

**Sales area**

**Supported regions**

**Chinese mainland**

China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Wuhan - Local Region), China (Shenzhen), China (Heyuan), China (Guangzhou), and China (Chengdu)

**Asia-Pacific**

China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), Thailand (Bangkok), South Korea (Seoul), and Philippines (Manila)

**Europe**

Germany (Frankfurt), UK (London), and France (Paris)

**North America**

US (Silicon Valley) and US (Virginia)

**South America**

Brazil (Sao Paulo)

**Middle East**

UAE (Dubai), SAU (Riyadh - Partner Region)

### **Billing**

For pricing details, see the [CDT resource plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=cdt_Resource_dp_intl).

### **Limitation**

Each Alibaba Cloud account can have a maximum of 50 active CDT resource plans. This quota cannot be increased.

## Purchase a CDT resource plan

Before you purchase a CDT resource plan, go to the [CDT console](https://cdt.console.alibabacloud.com/overview) to confirm that your products have been upgraded to the CDT billing mode.

> After a product is upgraded to the CDT billing mode, all pay-by-data-transfer instances are billed through CDT. Pay-by-bandwidth instances continue to be billed by their original cloud product. You can go to the Expenses and Costs console to view CDT bills on the bill details page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213047571/p985448.png)

Go to the [CDT resource plan buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=cdt_Resource_dp_intl). Set **Region**, **Quantity**, and **Plan Capacity**, then specify an **Activation Schedule**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2213047571/p985733.png)

## View the usage of a CDT resource plan

Go to the [CDT console - Resource Plans page](https://cdt.console.alibabacloud.com/resource_packages) to view the usage of your CDT resource plans.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1777764671/p1005133.png)

## **FAQ**

### **How do I renew a CDT resource plan after its capacity is used up?**

CDT resource plans cannot be renewed. You can purchase multiple CDT resource plans to use them at the same time.

### **What are the unsubscription rules for CDT resource plans?**

You can request a refund for an unused resource plan within five days of purchase.

### **What are the differences between CDT resource plans and** Data Transfer Plans**?**

Both CDT resource plans and Data Transfer Plans can offset CDT Internet traffic, but they differ in the following ways.

**Item**

**CDT resource plan**

**Data Transfer Plan**

Applicable CDT pricing tiers

All pricing tiers of CDT Internet traffic can be offset.

Only the first pricing tier (0 to 10 TB) of CDT Internet traffic can be offset.

Available specifications

Customizable specifications from 50 GB to 102,400 GB are supported. The minimum increment is 1 GB.

Only defined specifications are supported.

Activation time

You can activate the plan immediately or schedule it to take effect at a specific time within 180 days.

You can only activate the plan immediately.

Applicable products

Can be used to offset BGP (Multi-ISP) Internet traffic from products that are upgraded to the CDT billing mode.

For more information, see [Data Transfer Plan](/help/en/dtp/product-overview/what-is-a-data-transfer-plan).

### **If I have both a CDT resource plan and a** Data Transfer Plan**, what is the offset order?**

Deductions are first taken from the CDT resource plan or the general-purpose data transfer plan, whichever expires first.

Data Transfer Plans can offset only the first pricing tier of CDT Internet traffic. Internet traffic that exceeds the first pricing tier of CDT is offset by CDT resource plans.
