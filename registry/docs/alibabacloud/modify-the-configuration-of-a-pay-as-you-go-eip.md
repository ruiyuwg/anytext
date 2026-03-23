A pay-as-you-go Elastic IP Address (EIP) incurs charges for Internet access and EIP configuration (public IP address holding fee). It supports two Internet billing methods:

-   Pay-by-data-transfer: Use this method for short-term workloads with highly variable traffic peaks, such as gaming or video streaming. The peak bandwidth is not a service commitment. It serves only as a reference value and the maximum allowed bandwidth. During resource contention, your actual bandwidth may be throttled.
    
-   Pay-by-bandwidth: Use this method for short-term workloads with stable traffic peaks. The peak bandwidth is a service commitment. During resource contention, your peak bandwidth is guaranteed.
    

## Billing principle

A pay-as-you-go EIP incurs charges for Internet access and EIP configuration (public IP address holding fee).

-   Internet access fee: This fee covers the public network access capability provided by the EIP. The fee type depends on your selected Internet billing method — either a data transfer fee or a bandwidth fee.
    
    -   Data transfer fee: Charged when you select pay-by-data-transfer. Calculated based on the actual outbound data transfer (GB) from Alibaba Cloud data centers to the Internet.
        
    -   Bandwidth fee: Charged when you select pay-by-bandwidth. Calculated based on your configured peak bandwidth (Mbps), regardless of actual data transfer volume.
        
-   EIP configuration fee (public IP address holding fee): This fee covers the cost of reserving a public IP address for your EIP.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4739493771/CAEQVBiBgMDexb6e6BkiIGRkZWIyMTZkOWUxMDQxZGY4M2I4MWZjNjFiMTg5ZDdi4811797_20250430180729.811.svg)

## Pay-by-data-transfer

An EIP billed by data transfer is charged hourly based on actual outbound data transfer over the public network. You can release it at any time.

### Billing items and pricing

#### **Internet access fee (data transfer fee)**

**Important**

-   Starting 00:00 on December 17, 2024 (UTC+8), if you create your first pay-by-data-transfer EIP, its data transfer fee is billed through CDT. CDT supports tiered pricing based on cumulative monthly data transfer — the more data you transfer, the lower the unit price. For details about CDT billing rules and discounts, see [Internet traffic](/help/en/cdt/internet-data-transfers/).
    
-   Before 00:00 on December 17, 2024 (UTC+8), if you previously created a pay-by-data-transfer EIP, its data transfer fee continues to follow the billing rules in this topic. You can upgrade to CDT billing manually at any time using [Upgrade to CDT billing](/help/en/cdt/user-guide/upgrade-to-cdt-billing). After a successful upgrade, all existing and new pay-by-data-transfer EIPs use CDT for unified billing.
    

The billing cycle for a pay-by-data-transfer EIP is one hour. If your EIP is active for less than one hour within a billing cycle, it is billed for one full hour.

```
Data transfer fee for one billing cycle = Unit price (USD/GB) × Data transferred (GB)
```

-   Data transferred: Total outbound traffic (from Alibaba Cloud data centers to the Internet) for the EIP. Inbound traffic is not billed.
    
    -   Set your peak bandwidth according to actual needs. This helps avoid unexpected high bills caused by application errors or malicious traffic.
        
    -   Customers in the European Union (EU) or European Economic Area (EEA) may request a fee waiver for eligible use cases under EU Regulation (EU) 2023/2854 (the Data Act). For more information, contact us via [Support and Services](https://smartservice.console.alibabacloud.com/console.htm).
        
-   Unit price: EIPs support two line types — BGP (Multi-ISP) and BGP (Multi-ISP) Premium — each with different unit prices.
    

> The following tables show public cloud pricing. Region and price information are for reference only. For accurate pricing, see the [Purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=eip_intl&regionId=cn-hangzhou-dg-a01#/buy).

Table 1. Data transfer unit price for BGP (Multi-ISP) EIPs

**Region**

**Region**

**Unit price (USD/GB)**

Asia-Pacific — China

China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Ulanqab), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Wuhan - Local Region)

0.123

China (Qingdao)

0.110

China (Hong Kong)

0.153

Asia-Pacific — Other

Japan (Tokyo)

0.087

Singapore, Philippines (Manila), Thailand (Bangkok)

0.081

Malaysia (Kuala Lumpur)

0.077

Indonesia (Jakarta)

0.090

South Korea (Seoul)

0.123

Europe and Americas

US (Virginia)

0.076

US (Silicon Valley)

0.077

Germany (Frankfurt), UK (London), Mexico

0.070

Middle East

UAE (Dubai)

0.153

SAU (Riyadh – Partner Region): Partner Operations

0.097

Table 2. Data transfer unit price for BGP (Multi-ISP) Premium EIPs

**Region**

**Region**

**Unit price (USD/GB)**

Asia-Pacific — China

China (Hong Kong)

0.452

Asia-Pacific — Other

Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), Thailand (Bangkok)

0.452

Singapore

0.778

#### **EIP configuration fee (public IP address holding fee)**

The EIP configuration fee is the public IP address holding fee. It is calculated based on the public IP address unit price and billing duration.

-   No EIP configuration fee (public IP address holding fee) is charged in the following cases:
    
    -   EIP you can directly attach to a VPC-type ECS instance or ECI instance, and the number of EIPs that an Alibaba Cloud account can maintain (that is, quota, not actual usage) is ≤ 2000.
        
        > When you bind an EIP to an elastic network interface (ENI), the configuration fee (public IP retention fee) is still charged if you select an ENI that is **Already Attached To The Primary NIC**.
        
    -   EIPs allocated from an IP address pool incur no EIP configuration fee. Public IP address fees are charged as [public IP address holding fees for IP address pools](/help/en/eip/create-and-manage-ip-address-pools#section-dvp-jcd-45x).
        
    -   You migrate a public IP address from an on-premises environment to Alibaba Cloud.
        
-   You are charged an EIP configuration fee (public IP address holding fee) for all other scenarios that are not explicitly mentioned.
    

For pay-by-data-transfer EIPs, the EIP configuration fee (public IP address holding fee) is billed hourly.

```
EIP configuration fee (public IP address holding fee) = Public IP address unit price (USD/hour/EIP) × Billing duration × Number of EIPs
```

EIPs support two line types — BGP (Multi-ISP) and BGP (Multi-ISP) Premium — each with different public IP address unit prices.

> The following tables show public cloud pricing. Region and price information are for reference only. For accurate pricing, see the [Purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=eip_intl&regionId=cn-hangzhou-dg-a01#/buy).

Table 3. Public IP address unit price for pay-by-data-transfer EIPs — BGP (Multi-ISP) line

**Region**

**Region**

**Public IP address unit price (USD/hour/EIP)**

Asia-Pacific — China

The available regions include the following: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Ulanqab), China (Nanjing - Local Region), China (Fuzhou - Local Region), and China (Wuhan - Local Region).

0.003

China (Hong Kong)

0.009

Asia-Pacific — Other

Singapore, Philippines (Manila), Indonesia (Jakarta), Thailand (Bangkok)

0.006

Japan (Tokyo)

0.005

Malaysia (Kuala Lumpur), South Korea (Seoul)

0.003

Europe and Americas

US (Virginia), US (Silicon Valley)

0.005

Germany (Frankfurt), UK (London)

0.006

Mexico

0.005

Middle East

UAE (Dubai)

0.009

SAU (Riyadh - Partner Region)

0.008

Table 4. Public IP address unit price for pay-by-data-transfer EIPs — BGP (Multi-ISP) Premium line

**Region**

**Region**

**Public IP address unit price (USD/hour/EIP)**

Asia-Pacific — China

China (Hong Kong)

0.009

Asia-Pacific — Other

Japan (Tokyo)

0.005

Malaysia (Kuala Lumpur)

0.003

Philippines (Manila), Thailand (Bangkok), Singapore

0.006

Indonesia (Jakarta)

0.006

##### **Public IP address holding fee example**

-   Directly request a pay-as-you-go EIP
    
    Account A has an EIP quota of 500. It purchases 450 pay-as-you-go (pay-by-data-transfer) EIPs in China (Beijing). Of these, 400 EIPs are attached to Classic Load Balancer (CLB) instances (subject to EIP configuration fee), and 50 EIPs are attached to ECS instances (exempt from EIP configuration fee). The EIP configuration fee (public IP address holding fee) for one billing cycle is 400 × USD 0.003/hour/EIP × 1 hour + 50 × USD 0/hour/EIP × 1 hour = USD 1.2.
    
    Account A expects business growth and increases its EIP quota to 3,000. It adds 2,000 new EIPs attached to ECS instances, bringing the total to 2,450 EIPs. Because the quota now exceeds 2,000, all 2,450 EIPs incur the EIP configuration fee (public IP address holding fee). The EIP configuration fee (public IP address holding fee) for one billing cycle is 2,450 × USD 0.003/hour/EIP × 1 hour = USD 7.35.
    
-   Request a pay-as-you-go EIP from an IP address pool
    
    Account B creates an IP address pool in China (Beijing) and adds a CIDR block containing 256 public IP addresses. Of these, 50 public IP addresses are allocated as EIPs and attached to ECS instances. The 50 EIPs allocated from the IP address pool, plus the remaining 206 unallocated public IP addresses, are billed as [public IP address holding fees for IP address pools](/help/en/eip/create-and-manage-ip-address-pools#section-dvp-jcd-45x). The public IP address holding fee for one billing cycle is 256 × USD 0.007/hour/EIP × 1 hour = USD 1.792.
    

### Billing cycle and billing time

The billing cycle for a pay-by-data-transfer EIP is one hour. If your usage duration is less than one hour within a billing cycle, it is billed for one full hour.

Billing occurs hourly. Each hour, at the top of the hour (UTC+8), the system settles the fee for the previous hour. The bill is generated shortly after the current billing cycle ends, typically within the next hour. Actual billing time depends on system processing.

### Billing example

Assume you create a pay-by-data-transfer EIP on a given day at 09:30:00 in Singapore. You configure it with BGP (Multi-ISP) line and a peak bandwidth of 10 Mbps. You immediately attach it to a NAT Gateway and start your workload.

Total traffic for the day is 60 GB. You change the peak bandwidth twice:

-   At 17:00:00, you increase it from 10 Mbps to 20 Mbps.
    
-   At 23:00:00, you decrease it from 20 Mbps to 15 Mbps.
    

![计费示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2109039951/p2124.png)

> Pricing in this example is for reference only. For current pricing, see the console [Purchase page](https://common-buy-intl.alibabacloud.com/eip/postpay).

> Changing peak bandwidth does not affect the total cost for a pay-by-data-transfer EIP.

Total cost = Data transfer fee + Configuration fee (public IP address holding fee) = USD 4.86 + USD 0.09 = USD 4.95

-   Data transfer fee:
    
    -   Unit price: The data transfer unit price for Singapore is USD 0.081/GB.
        
    -   Data transferred: Total traffic for the EIP on that day is 60 GB.
        
    -   Data transfer fee for the day: Unit price × Data transferred = USD 0.081/GB × 60 GB = USD 4.86.
        
-   Configuration fee:
    
    -   Public IP address unit price: The public IP address unit price for Singapore is USD 0.006/hour/EIP.
        
    -   Billing duration: The EIP was used for 14.5 hours. Rounding up, the billing duration is 15 hours.
        
    -   Configuration fee (public IP address holding fee) for the day: Public IP address unit price × Billing duration = USD 0.006/hour/EIP × 15 hours × 1 EIP = USD 0.09.
        

## Pay-by-bandwidth

A pay-by-bandwidth EIP is charged based on your configured peak bandwidth and billing duration. You can release it at any time.

### Billing items and pricing

#### **Internet access fee (bandwidth fee)**

A pay-by-bandwidth EIP incurs a bandwidth fee based on your configured peak bandwidth and billing duration. Both the billing cycle and billing period are one day. The bandwidth fee supports hourly billing and daily settlement.

```
Bandwidth fee = Bandwidth unit price (USD/Mbps/day) × [Billing duration (hours)/24] (days) × Peak bandwidth (Mbps)
```

-   Billing duration: The time during which you hold the pay-by-bandwidth EIP. If less than one hour, it is billed for one full hour. For example, if you create an EIP at 09:00:00 and release it at 12:30:00, the billing duration is (4/24) days.
    
-   Bandwidth unit price:
    
    -   EIPs support two line types — BGP (Multi-ISP) and BGP (Multi-ISP) Premium — each with different unit prices.
        
    -   For BGP (Multi-ISP) lines, bandwidth fees use tiered pricing with a threshold of 5 Mbps. Unit prices differ for bandwidths of 1–5 Mbps and >5 Mbps.
        
        If your peak bandwidth exceeds 5 Mbps, the billing formula is (where n is the peak bandwidth):
        
        ```
        Bandwidth fee = [(Unit price for 1–5 Mbps bandwidth) (USD/Mbps/day) × 5 + (Unit price for >5 Mbps bandwidth) (USD/Mbps/day) × (n − 5)] × [Billing duration (hours)/24] (days)
        ```
        
-   Peak bandwidth: You can modify your peak bandwidth at any time. If you change it on the same day (increase or decrease), the billing uses the highest peak bandwidth set that day.
    

> The following tables show public cloud pricing. Region and price information are for reference only. For accurate pricing, see the [Purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=eip_intl&regionId=cn-hangzhou-dg-a01#/buy).

Table 5. Bandwidth unit price for BGP (Multi-ISP) EIPs

**Region**

**Region**

**Bandwidth unit price (USD/Mbps/day)**

**1–5 Mbps**

**\>5 Mbps**

Asia-Pacific — China

China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), China (Ulanqab), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Wuhan - Local Region)

0.14

0.5

China (Qingdao)

0.11

0.46

Asia-Pacific — Other

Japan (Tokyo)

0.17

0.57

Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), South Korea (Seoul), Thailand (Bangkok)

0.14

0.5

Europe and Americas

US (Virginia), US (Silicon Valley), Germany (Frankfurt), UK (London), Mexico

0.14

0.5

Middle East

SAU (Riyadh - Partner Region) - Partner Operations

0.17

0.60

Table 6. Bandwidth unit price for BGP (Multi-ISP) Premium EIPs

**Region**

**Region**

**Bandwidth unit price (USD/Mbps/day)**

Asia-Pacific — China

China (Hong Kong)

1.430

Asia-Pacific — Other

Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), Thailand (Bangkok)

1.430

Singapore

2.460

#### **EIP configuration fee (public IP address holding fee)**

The EIP configuration fee is the public IP address holding fee. It is calculated based on the public IP address unit price and billing duration.

-   No EIP configuration fee (public IP address holding fee) is charged in the following cases:
    
    -   EIP you can directly attach to a VPC-type ECS instance or ECI instance, and the number of EIPs that an Alibaba Cloud account can maintain (that is, quota, not actual usage) is ≤ 2000.
        
        > When you bind an EIP to an elastic network interface (ENI), the configuration fee (public IP retention fee) is still charged if you select an ENI that is **Already Attached To The Primary NIC**.
        
    -   EIPs allocated from an IP address pool incur no EIP configuration fee. Public IP address fees are charged as [public IP address holding fees for IP address pools](/help/en/eip/create-and-manage-ip-address-pools#section-dvp-jcd-45x).
        
    -   You migrate a public IP address from an on-premises environment to Alibaba Cloud.
        
-   You are charged an EIP configuration fee (public IP address holding fee) for all other scenarios that are not explicitly mentioned.
    

For pay-by-bandwidth EIPs, the EIP configuration fee (public IP address holding fee) is billed hourly and settled daily. Unit: USD/day/EIP.

```
EIP configuration fee (public IP address holding fee) = Public IP address unit price (USD/day/EIP) × Billing duration × Number of EIPs
```

EIPs support two line types — BGP (Multi-ISP) and BGP (Multi-ISP) Premium — each with different public IP address unit prices.

> The following tables show public cloud pricing. Region and price information are for reference only. For accurate pricing, see the [Purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=eip_intl&regionId=cn-hangzhou-dg-a01#/buy).

Table 7. Public IP address unit price for pay-by-bandwidth EIPs — BGP (Multi-ISP) line

**Region**

**Region**

**Public IP address unit price (USD/day/EIP)**

Asia-Pacific — China

China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Ulanqab), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Wuhan - Local Region)

0.074

China (Hong Kong)

0.211

Asia-Pacific — Other

Singapore, Philippines (Manila), Indonesia (Jakarta), Thailand (Bangkok)

0.151

Japan (Tokyo)

0.113

Malaysia (Kuala Lumpur), South Korea (Seoul)

0.074

Europe and Americas

US (Virginia), US (Silicon Valley)

0.113

Germany (Frankfurt), UK (London)

0.151

Mexico

0.113

Middle East

SAU (Riyadh - Partner Region)

0.181

Table 8. Public IP address unit price for pay-by-bandwidth EIPs — BGP (Multi-ISP) Premium line

**Region**

**Region**

**Public IP address unit price (USD/day/EIP)**

Asia-Pacific — China

China (Hong Kong)

0.211

Asia-Pacific — Other

Japan (Tokyo)

0.113

Malaysia (Kuala Lumpur)

0.074

Philippines (Manila), Thailand (Bangkok), Singapore

0.151

Indonesia (Jakarta)

0.144

### Billing cycle and billing time

A pay-by-bandwidth EIP is billed daily. Usage for a given day is settled at 00:00:00 the next day (UTC+8). Bills are usually generated early the next day. Actual billing time depends on system processing.

### Billing example

Assume you create a pay-by-bandwidth EIP on a given day at 09:30:00 in Singapore. You configure it with BGP (Multi-ISP) line and a peak bandwidth of 10 Mbps. You immediately attach it to a NAT Gateway and start your workload.

Total traffic for the day is 60 GB. You change the peak bandwidth twice:

-   At 17:00:00, you increase it from 10 Mbps to 20 Mbps.
    
-   At 23:00:00, you decrease it from 20 Mbps to 15 Mbps.
    

![计费示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2109039951/p2124.png)

> Pricing in this example is for reference only. For current pricing, see the console [Purchase page](https://common-buy-intl.alibabacloud.com/eip/postpay).

Total cost = Bandwidth fee + Configuration fee (public IP address holding fee) = USD 5.125 + USD 0.094375 = USD 5.22

-   Bandwidth fee:
    
    -   Peak bandwidth: Use the highest peak bandwidth set that day — 20 Mbps.
        
    -   Bandwidth unit price: For Singapore, the unit price for 1–5 Mbps is USD 0.14/Mbps/day, and for >5 Mbps is USD 0.5/Mbps/day.
        
    -   Billing duration: The EIP was used for 14.5 hours. Rounding up, the billing duration is 15 hours.
        
    -   Bandwidth fee for the day = \[0.14 × 5 + 0.5 × (20 − 5)\] × (15 hours ÷ 24 hours) = USD 5.125.
        
-   Configuration fee:
    
    -   Public IP address unit price: For Singapore, the public IP address unit price is USD 0.151/day/EIP.
        
    -   Billing duration: The EIP was used for 14.5 hours. Rounding up, the billing duration is 15 hours.
        
    -   Configuration fee (public IP address holding fee) for the day = USD 0.151/day/EIP × (15 hours ÷ 24 hours) × 1 EIP = USD 0.094375.
        

## Upgrade or downgrade

You can upgrade or downgrade the peak bandwidth or switch the Internet billing method for a pay-as-you-go EIP to meet changing business needs.

-   To upgrade or downgrade: Go to the [EIP](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) console. Click **Bandwidth** for the target EIP, then click **Modify Configuration**. Set a new **peak bandwidth**, or modify **traffic** to switch the Internet billing method.
    
-   Restrictions: If your upgrade or downgrade changes the Internet billing method, you cannot submit another upgrade or downgrade request to modify the peak bandwidth until the change takes effect.
    
-   Effective time:
    
    -   If you only modify the EIP peak bandwidth, the change takes effect immediately.
        
    -   If you switch the Internet billing method, the change takes effect at 00:00:00 the next day (UTC+8).
        
-   Billing impact: After the change takes effect, billing starts based on the new configuration.
    

## Switch between billing methods

-   The pay-by-data-transfer and pay-by-bandwidth public network billing methods support [mutual conversion](#68dd2ab216olu), and the conversion takes effect at 00:00:00 the next day (UTC+8).
    
-   You cannot switch from pay-as-you-go to subscription.
    
-   You can cancel an unconfirmed billing method switch order for a pay-as-you-go EIP. Click **Actions** for the target EIP, then click **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **Instance upgrade or downgrade** > **Cancel unconfirmed order**. Confirmed orders cannot be canceled. Canceling an unconfirmed order is irreversible. Proceed with caution.
    

## View bills and usage

-   View bills: Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) console. View your [consumption bill](/help/en/user-center/product-overview/quickly-understand-alibaba-cloud-billing).
    
-   View bills for this product: Go to the [Billing details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page. Select Elastic IP Address from the product filter. Choose a time range to view EIP-related billing details.
    
-   View usage: Go to the [EIP](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) console. Click the target EIP and select the **Monitoring and O&M** tab to view real-time bandwidth and traffic. Or use [Cloud Monitor](https://cloudmonitor.console.alibabacloud.com/) for more detailed monitoring data.
    
-   Invoices and tax rates: Request invoices after payment or billing. For instructions, see [Get an invoice](/help/en/user-center/get-invoice-international-station).
    

## Stop billing

A pay-as-you-go EIP incurs the EIP configuration fee (public IP address holding fee) even when not attached to any cloud resources. If you no longer need the EIP, [release the EIP promptly](/help/en/eip/elastic-ip-address#1a5d5f577by23) to stop billing.

-   You cannot release an EIP locked for security reasons.
    
-   After you release an EIP, billing stops. However, you may still receive a bill for the released EIP.
    
    Reason:
    
    -   Pay-by-data-transfer EIPs are billed hourly.
        
        For example, if you release an EIP at 10:30:00, you will receive a bill for data transfer from 10:00:00 to 11:00:00 at 11:00:00.
        
    -   Pay-by-bandwidth EIPs are billed daily.
        
        For example, if you release an EIP on January 1, 2025, you will receive a bill for bandwidth usage on January 1, 2025, at 00:00:00 on January 2, 2025.
        
    

## Overdue payments and top-ups

If a pay-as-you-go EIP incurs an overdue payment (a bill cannot be deducted), the account owner receives SMS and email notifications. Top up your account to resolve the overdue payment.

-   The EIP continues to operate normally for 15 days after the overdue payment. If you top up your account within 15 days, your service remains uninterrupted.
    
-   If the overdue payment remains unpaid for 15 days, the EIP enters the suspended state.
    
    -   EIPs not added to shared bandwidth: Bandwidth is limited to 1 Kbps.
        
    -   EIPs added to pay-as-you-go shared bandwidth: Shared bandwidth is limited to 1 Kbps. The EIP remains in the shared bandwidth and retains its attachment to the instance.
        
    -   EIPs added to subscription-based shared bandwidth (shared bandwidth not expired): Shared bandwidth is unaffected. The EIP remains in the shared bandwidth and retains its attachment to the instance.
        
-   If you top up your account within 15 days of entering the suspended state — without releasing the EIP — the system automatically pays all outstanding bills. Service resumes immediately after payment.
    
-   If the EIP remains suspended for 15 days without payment, it is automatically released. All configurations and data are permanently deleted and cannot be recovered.
