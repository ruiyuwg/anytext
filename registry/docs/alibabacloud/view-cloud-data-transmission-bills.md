You can view the usage of Internet data transfers in the current month in the Cloud Data Transfer (CDT) console. You can also view the details about bills generated in CDT and specific data transfer usage in the Expenses and Costs console.

## Query bills

1.  Log on to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) console.
    
2.  In the left-side navigation pane, choose **Bills** > **Bill Details**. On the Bill Details page, click the desired tab to view the consumption information about Alibaba Cloud services in CDT.
    
    **Note**
    
    -   By default, CDT generates the bills of data transfers within a maximum of 6 hours. For example, at 19:00, you can view bills that are generated before 13:00.
        
    -   Beginning June 1, 2025, the quota of free Internet data transfers provided by CDT is increased from 200 GB per month to 220 GB per month. Among the 220 GB of free Internet data transfers, 20 GB can be used in **regions in the Chinese mainland** and the other 200 GB can be used only in **regions outside the Chinese mainland.**
        
        **The query of bills for free Internet data transfers is supported.** In the bills for Internet data transfers in CDT, if you find that an instance has data transfers with tier 0 or find data transfers with a unit price of 0, such data transfers enjoy the benefit of free Internet data transfers. Internet data transfers exceeding the free quota are billed according to the tiered unit prices in CDT.
        
    
    -   **Consumption by Bill** tab: You can view the consumption bills of all Alibaba Cloud services on this tab.
        
        After you select **Cloud Data Transfer** for **Product Name**, you can view the billing information in CDT on an hourly basis, such as Pretax Gross Amount, Invoice Discount, Round Down Discount, Amount Payable, and Deducted By Coupons.
        
    -   **Billing Details** tab: You can view detailed information about the bills of all Alibaba Cloud services.
        
        After you select **Cloud Data Transfer** for **Product**, **Billing Item** for **Statistic Item**, and **Billing Period** for **Statistic Period**, you can view the consumption information for each instance in CDT on an hourly basis, including the instance ID, unit price, usage, price, and fee that is offset by using resource plans.
        
        For example, if you select **cloud data transfer-internet** for Product Details, you can view information such as the specific Alibaba Cloud services that consume data transfers, the instance IDs of the Alibaba Cloud services, data transfer tiers, and billable items. You can click **Export Billing Overview (CSV)** to export the bill details as a CSV file for data analysis. The following table describes the key fields.
        
        **Field**
        
        **Description**
        
        **Example**
        
        Instance ID
        
        A CDT-Internet instance ID consists of four parts: product instance ID, region, ISP type, and tier.
        
        -   **product instance id**: the instance ID of the Alibaba Cloud service supported by CDT.
            
        -   **region**: the region of the Alibaba Cloud service.
            
        -   **isp type**: BGP or BGP\_PRO.
            
        -   **range**:
            
            -   0: Data transfers in tier 0 are free of charge. The first 220 GB of Internet data transfers in every month are free of charge.
                
                -   Regions in the Chinese mainland: 20 GB per month.
                    
                -   Regions outside the Chinese mainland: 200 GB per month.
                    
            -   1: 0 TB to 10 TB, including 10 TB.
                
            -   2: 10 TB to 50 TB, including 50 TB.
                
            -   3: 50 TB to 150 TB including 150 TB.
                
            -   4 or higher: more than 150 TB.
                
        
        i-xxxxxxxxxx;cn-beijing;BGP;0
        
        Region
        
        The region where data transfers are consumed.
        
        China (Beijing)
        
        Billing Item
        
        The Alibaba Cloud service that consumes data transfers.
        
        The Cloud Data Transfer - Internet category has the following billable items:
        
        -   Outbound data transfer fee for EIP
            
        -   Outbound data transfer fee for Internet-facing CLB instances
            
        -   Outbound data transfer fee for Internet Shared Bandwidth
            
        -   Outbound data transfer fee for IPv6 gateway
            
        -   Outbound data transfer fee for ECS instance with static public IP addresses
            
        -   Internet data transfer fee for Anycast EIP
            
        -   Internet data transfer fee for GA
            
        -   Outbound data transfer fee for Function Compute
            
        -   Outbound data transfer fee for Cloud-native API Gateway
            
        -   Outbound data transfer fee for Microservices Engine (MSE) cloud-native gateways
            
        
        List Price
        
        The unit price of data transfers. It is determined by the ISP type, data transfer tier, and region. Unit: USD/GB
        
        **Note**
        
        If the unit price is 0, the customer enjoys the benefit of free Internet data transfers.
        
        0.118
        
        Usage
        
        The data transfer usage. Unit: GB.
        
        10.00017
        
    -   **Usage Records** tab: You can download the usage information about an Alibaba Cloud service on this tab.
        
        After you select **cdt** for **Product**, **CdtInternetFlow** for **Billable Item**, the time period that you want to view the usage information for **Time Period**, and **Hour** for **Time Unit**, and click **Export CSV**, you can view the data transfer usage of instances billed on an hourly basis in CDT.
        

## **Query the usage of Internet data transfers in the current month**

**Note**

The CDT console allows you to query the usage of Internet data transfers that are billed in CDT for each region. For more information about how to view the data transfer usage of instances billed on an hourly basis in CDT, see [Query bills](#2a2fda772cnpi).

1.  Log on to the [CDT console](https://cdt.console.alibabacloud.com/overview).
    
2.  In the **Monthly Internet Data Transfer** section, select a region from the region drop-down list and select the line type that you want to query to view the usage of Internet data transfers.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0037538171/p800532.png)
    
    The following table describes the key fields.
    
    **Field**
    
    **Description**
    
    **Example**
    
    Total Data Transfer
    
    Displays only the total usage of Internet data transfers for the current region and line in the current month. Unit: GB.
    
    **Note**
    
    If you want to know the total usage of Internet data transfers in the current month, you can add up the Internet data transfers in each region to obtain the total usage.
    
    10.217 GB
    
    Current Tier
    
    -   1: 0 TB to 10 TB, including 10 TB.
        
    -   2: 10 TB to 50 TB, including 50 TB.
        
    -   3: 50 TB to 150 TB, including 150 TB.
        
    -   4 or higher: more than 150 TB.
        
    
    0~10 TB
    
    Service
    
    Displays the Alibaba Cloud service that uses CDT billing for the current line in the current region.
    
    GA
    
    Usage
    
    Displays the usage of the Internet data transfers of the Alibaba Cloud service that uses CDT billing for the current line in the current region. Unit: GB.
    
    0.04096 GB
