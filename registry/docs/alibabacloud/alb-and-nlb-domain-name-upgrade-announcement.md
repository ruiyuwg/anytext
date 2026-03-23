To enhance product security, Alibaba Cloud will upgrade the domain names for Application Load Balancer (ALB) and Network Load Balancer (NLB) instances at 00:00:00 on November 15, 2024 (UTC+8). Please read the following details carefully and modify your application configurations.

## Upgrade details

For ALB and NLB instances created at or after 00:00:00 on November 15, 2024 (UTC+8), you must use the following domain names:

-   ALB instances:
    
    -   In regions within Chinese Mainland: xxx.alb.aliyuncsslb.com
        
    -   In regions outside Chinese Mainland: xxx.alb.aliyuncsslbintl.com
        
-   NLB instances:
    
    -   In regions within Chinese Mainland: xxx.nlb.aliyuncsslb.com In regions outside Chinese Mainland: xxx.nlb.aliyuncsslbintl.com
        

Default domain names provided by Alibaba Cloud DNS can no longer be used to access ALB and NLB instances.

**Note**

ALB and NLB instances created before 00:00:00 on November 15, 2024 (UTC+8) are not affected by this upgrade.

## Recommendations

In the Alibaba Cloud DNS console, use CNAME records to map custom domain names of your application to the new domain name of your ALB or NLB instance. For more information, see [ALB Getting Started](/help/en/slb/application-load-balancer/getting-started/) and [NLB Getting Started](/help/en/slb/network-load-balancer/getting-started/).

## Contact us

The preceding changes may affect your business. We recommend that you modify your application configurations. If you have questions or need technical assistance or instructions, contact Alibaba Cloud customer service or your account manager.
