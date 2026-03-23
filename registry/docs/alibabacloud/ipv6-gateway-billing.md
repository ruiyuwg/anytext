IPv6 gateway Internet bandwidth is billed on a pay-as-you-go basis using one of two methods, pay-by-bandwidth or pay-by-data-transfer.

When choosing a billing method, consider your required maximum bandwidth and the average bandwidth utilization of your workloads.

Consider the average bandwidth utilization:

-   For workloads with low average bandwidth utilization (below 20%), the pay-by-data-transfer method is recommended.
    
-   For workloads with high average bandwidth utilization (above 35%), the pay-by-bandwidth method is recommended.
    
-   For workloads with moderate bandwidth utilization, choose a method based on your operational experience.
    

> IPv6 Internet bandwidth is billed independently of IPv4 Internet bandwidth. For more information about IPv4 Internet bandwidth billing, see [Internet bandwidth billing](/help/en/ecs/public-bandwidth).

## Pay-by-bandwidth

With the pay-by-bandwidth method, you are charged for IPv6 Internet bandwidth based on the peak bandwidth that you specify and the billing duration.

-   The billing cycle is one day. If your usage is less than a full day, you are still charged for the entire day.
    
-   The Internet bandwidth fee uses tiered pricing based on a 5 Mbps threshold.
    
    -   If the peak bandwidth is from 1 Mbps to 5 Mbps:
        
        ```
        Bandwidth fee = (Unit price for bandwidth from 1 to 5 Mbps) (USD/Mbps/day) × [Billing duration (hours) / 24] (days) × Peak bandwidth (Mbps)
        ```
        
    -   If the peak bandwidth is greater than 5 Mbps:
        
        ```
        Bandwidth fee = [(Unit price for bandwidth from 1 to 5 Mbps) (USD/Mbps/day) × 5 + (Unit price for bandwidth greater than 5 Mbps) (USD/Mbps/day) × (n - 5)] × [Billing duration (hours) / 24] (days)
        ```
        
        Where n is the peak bandwidth.
        
-   You can change the peak bandwidth at any time. If you change the peak bandwidth within a billing cycle, you are billed based on the highest value set during that cycle.
    

> If the regions and prices in the console differ from the information in this topic, the information in the console prevails.

**Region**

**Unit price for 1–5 Mbps (USD/Mbps/day)**

**Unit price for >5 Mbps (USD/Mbps/day)**

China (Qingdao)

0.11

0.46

China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Wuhan - Local Region), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), South Korea (Seoul), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), Mexico

0.14

0.5

Japan (Tokyo)

0.17

0.57

SAU (Riyadh - Partner Region)

0.6

0.6

## Pay-by-data-transfer

**Important**

-   If you have activated Cloud Data Transfer (CDT), IPv6 Internet bandwidth fees are billed through CDT. For CDT billing rules and promotions, see [Internet traffic](/help/en/cdt/internet-data-transfers/) and [Cross-region traffic](/help/en/cdt/inter-region-data-transfers).
    
-   If you have not activated CDT, IPv6 Internet bandwidth is billed according to the rules in this document. To be billed by CDT, go to the [Cloud Data Transfer](https://cdt.console.alibabacloud.com/overview) page to upgrade your billing method.
    

```
In a billing cycle, Traffic fee = Unit price of traffic (USD/GB) × Traffic usage (GB)
```

-   The billing cycle and settlement cycle are both one hour. Partial hours are billed as full hours.
    
-   You are charged for the total outbound data transfer from your IPv6 address. Inbound data transfer is not billed. Outbound data flows from an Alibaba Cloud data center to the internet, while inbound data flows from the internet to the data center.
    
-   You can use a [Data Transfer Plan](/help/en/dtp/product-overview/what-is-a-data-transfer-plan) to offset pay-by-data-transfer IPv6 Internet bandwidth.
    
-   Changing the peak bandwidth does not affect the unit price. However, to avoid excessive charges from programming errors or malicious traffic, we recommend setting a bandwidth limit that matches your actual needs.
    
-   The data transfer fees for each region are listed in the table below.
    
    > If the regions and prices in the console differ from the information in this topic, the information in the console prevails.
    
    **Region**
    
    **Unit price (USD/GB)**
    
    China (Qingdao)
    
    0.11
    
    China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Wuhan - Local Region), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), South Korea (Seoul), Mexico
    
    0.123
    
    China (Hong Kong)
    
    0.153
    
    Japan (Tokyo)
    
    0.087
    
    Indonesia (Jakarta)
    
    0.09
    
    Philippines (Manila), Thailand (Bangkok), Singapore
    
    0.081
    
    Malaysia (Kuala Lumpur), US (Silicon Valley)
    
    0.077
    
    US (Virginia)
    
    0.076
    
    Germany (Frankfurt), UK (London)
    
    0.07
    
    SAU (Riyadh - Partner Region)
    
    0.097
    

## **Overdue payments**

The following suspension policy applies to overdue payments for pay-as-you-go instances:

-   After a payment becomes overdue, the instance continues to run for 15 days before it is suspended.
    
    Billing stops after the instance is suspended.
    
-   If the payment remains overdue for 15 days after the service is suspended, the instance is released.
    
    You will receive an email reminder one day before the instance is released. After an instance is released, its configurations and data are permanently deleted and are unrecoverable.
