Split billing reallocates cloud resource costs based on your internal management, analysis needs, or resource granularity. Split bill details show finer-grained allocations for internal cost allocation within your organization. The final split bill details for the current month are published at 12:00 p.m. on the 4th day of the following month. Data before that time is for reference only and cannot be used for reconciliation.

## **About split billing**

-   For some Alibaba Cloud services—such as Alibaba Cloud CDN and Object Storage Service (OSS)—costs shown in **Bill Details** cannot be split by domain name or bucket. Their billing granularity differs from their resource management granularity. Alibaba Cloud **Split Bill Details** automatically splits these costs. In such cases, the **attached resource ID** maps to the resource-level granularity.
    
    Example: OSS billing granularity is per region, but resource management granularity is per bucket. During split billing, the system breaks down region-level charges into bucket-level entries. In the split bill details, the **attached resource ID** shows the corresponding bucket name.
    
    To view the Alibaba Cloud services that support resource-level splitting in split bill details, click here:
    
    **Product code**
    
    **Product name**
    
    **Attached resource**
    
    **Description**
    
    oss\_deepcoldarchive\_public\_cn
    
    OSS Deep Cold Archive Storage Capacity
    
    bucket
    
    Allocates costs for OSS Deep Cold Archive Storage Capacity across buckets.
    
    Costs for the billing items EarlyDeletionDeepCA and ChargedDatasizeDeepCA are allocated across buckets using the attached resource.
    
    oss
    
    Object Storage Service (OSS)
    
    bucket
    
    Allocates OSS costs across buckets.
    
    cbwp
    
    Internet Shared Bandwidth (pay-as-you-go)
    
    Elastic IP Address (EIP)
    
    Allocates Internet Shared Bandwidth costs across EIPs.
    
    snapshot
    
    Snapshot
    
    ECS instance ID
    
    Allocates snapshot costs across ECS instances.
    
    cdn
    
    Content Delivery Network (CDN)
    
    Domain Names
    
    Costs for the content delivery network (CDN) are allocated by domain name.
    
    dcdn
    
    Full-Site Acceleration
    
    Domain Names
    
    Costs for Dynamic Route for CDN (DCDN) are allocated per domain name.
    
    live
    
    ApsaraVideo Live
    
    Domain Names
    
    Allocates ApsaraVideo Live costs across domain names.
    
    vod
    
    ApsaraVideo VOD
    
    Domain Names
    
    Allocates ApsaraVideo VOD costs across domain names.
    
    dysms\_system
    
    System SMS
    
    SMS template
    
    Allocates System SMS costs across SMS templates.
    
    dysms\_operation
    
    Promotional message
    
    SMS template
    
    Allocates promotional message costs across SMS templates.
    
    newdysms\_digital
    
    Digital message
    
    SMS template
    
    Allocates digital message costs across SMS templates.
    
    dysms\_intl
    
    International SMS
    
    SMS template
    
    Allocates International SMS costs across SMS templates.
    
    dysms\_card\_public\_cn
    
    Card SMS
    
    SMS template
    
    Allocates Card SMS costs across SMS templates.
    
    dyvms\_obmccagent\_public\_cn
    
    Cloud Contact Center for Industries
    
    Voice number
    
    The cost of the Industry Cloud Contact Center is allocated based on voice numbers.
    
    dyvms\_voiceIvr\_public\_cn
    
    Voice IVR
    
    Voice number
    
    Allocates Voice IVR costs across voice numbers.
    
    dyvms\_voiceCaptcha\_public\_cn
    
    Voice Captcha
    
    Voice number
    
    Allocates Voice Captcha costs across voice numbers.
    
    dyvms\_voiceDoubleCall\_public\_cn
    
    Incoming and outgoing calls
    
    Voice number
    
    Allocates incoming and outgoing call costs across voice numbers.
    
    dyvms\_voiceNotify\_public\_cn
    
    Voice call
    
    Voice number
    
    Allocates voice call costs across voice numbers.
    
    dyvms\_voiceSip\_public\_cn
    
    Voice SIP
    
    Voice number
    
    Allocates Voice SIP costs across voice numbers.
    
    dyvms\_voiceNumber\_public\_cn
    
    Voice number
    
    Voice number
    
    Allocates voice number costs across voice numbers.
    
    dyvms\_voiceSmartcall\_public\_cn
    
    Intelligent Voice Robot
    
    Voice number
    
    Allocates Intelligent Voice Robot costs across voice numbers.
    
    dyvms\_voiceData\_public\_cn
    
    Data and Voice Service
    
    Voice number
    
    Allocates Data Voice Service costs across voice numbers.
    
    dypls\_smartlogistics\_public\_cn
    
    E-commerce Smart Privacy Communication
    
    Privacy number pool
    
    Allocates E-commerce Smart Privacy Communication costs across privacy number pools.
    
    dypls\_ecommerce\_public\_cn
    
    E-commerce AXN Extension Number
    
    Privacy number pool
    
    Allocates E-commerce AXN Extension Number costs across privacy number pools.
    
    dypls\_addedService\_public\_cn
    
    Privacy Number Value-Added Service
    
    Privacy number pool
    
    Allocates Privacy Number Value-Added Service costs across privacy number pools.
    
    dypls\_privateSMS\_public\_cn
    
    Privacy Number SMS
    
    Privacy number pool
    
    Allocates Privacy Number SMS costs across privacy number pools.
    
    dypls\_privateCall\_public\_cn
    
    Privacy Number Call
    
    Privacy number pool
    
    Allocates Privacy Number Call costs across privacy number pools.
    
    dypls\_privateNumber\_public\_cn
    
    Privacy Number
    
    Privacy number pool
    
    Allocates Privacy Number costs across privacy number pools.
    
    dypns\_verify
    
    Phone Number Verification
    
    Authentication scheme
    
    Allocates Phone Number Verification costs across verification plans.
    
    dypns\_omniVerify\_public\_cn
    
    Unified Authentication
    
    Authentication scheme
    
    Allocates Omni-Channel Verification costs across verification plans.
    
    dypns\_bioassay\_public\_cn
    
    Liveness Detection
    
    Authentication scheme
    
    Allocates Liveness Detection costs across verification plans.
    
    dypns\_smsverifyPro\_public\_cn
    
    SMS Verification
    
    Authentication Scheme
    
    Allocates SMS Verification costs across verification plans.
    
-   You can also allocate costs using cost centers, cost allocation tags, or resource groups. After assigning resource fees by cost center, cost allocation tag, or resource group, you can view those costs in split bill details by different dimensions.
    

**Note**

For products that Alibaba Cloud automatically splits by **attached resource** in split bill details, if both the product instance and its attached resource have tags or resource groups configured, split bill details use the tags or resource groups configured on the **attached resource**.

Example: For Internet Shared Bandwidth (pay-as-you-go), the attached resource is an Elastic IP Address (EIP). If the Internet Shared Bandwidth instance has tag A and the EIP has tag B, split bill details automatically use tag B from the EIP.

### **Enable split bill details**

If you are using split bill details for the first time, enable the feature before you can use it. Go to the [Split Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the Expenses and Costs console and click **Enable Now**. Split bill details are free to use. Accurate split bill data appears the day after you enable the feature.

**Note**

-   By default, an enterprise master account can view cost data for all member accounts.
    
-   A member account must enable the feature separately to use it.
    

### **View and export split bill details**

On the [Split Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the Expenses and Costs console, select a **statistical period**, then set your data range.

-   **Customize column fields:** Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9255746371/p839342.png) button in the top-right corner of the report to customize and save column fields. Customized columns affect only the fields you see in the console—not the exported report.
    
-   **Export split bill details:** Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9255746371/p839344.png) button in the top-right corner of the report to export. Go to the [Export Records](https://usercenter2-intl.console.alibabacloud.com/finance/export-record) page to download the exported file.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9255746371/p893219.png)
