Different types of Server Load Balancer (SLB) instances have different billing rules. This topic describes the billing rules for Application Load Balancer (ALB), Classic Load Balancer (CLB), and Network Load Balancer (NLB) instances.

## **Billing of different types of SLB instances**

**Service**

**References**

ALB

-   [ALB billing overview](/help/en/slb/application-load-balancer/product-overview/billing-overview/)
    
-   [Billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules)
    
-   [ALB resource plans](/help/en/slb/application-load-balancer/product-overview/introduction-to-alb-resource-plans)
    
-   [ALB overdue payments](/help/en/slb/application-load-balancer/product-overview/overdue-payments)
    
-   [View usage details of ALB](/help/en/slb/application-load-balancer/product-overview/view-resource-usage)
    
-   [Query ALB bills and consumption details](/help/en/slb/application-load-balancer/product-overview/query-billing-and-spending-details)
    

NLB

-   [NLB billing](/help/en/slb/network-load-balancer/product-overview/nlb-billing-overview/)
    
-   [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items)
    
-   [NLB overdue payments](/help/en/slb/network-load-balancer/product-overview/description-of-arrears)
    

CLB

-   [CLB billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/)
    
-   Pay-as-you-go:
    
    -   [Billing rules for pay-as-you-go CLB](/help/en/slb/pay-as-you-go-2)
        
    -   [Change the configuration of a pay-as-you-go CLB instance](/help/en/slb/classic-load-balancer/product-overview/modify-the-configurations-of-pay-as-you-go-clb-instances)
        
-   [Overdue payments](/help/en/slb/classic-load-balancer/product-overview/overdue-payments)
    
-   [FAQs about CLB billing](/help/en/slb/classic-load-balancer/product-overview/faq-about-billing)
    

## **Comparison of billing rules**

This section describes the billing methods and billable items of ALB, NLB, and CLB. We recommend that you view and learn about the billing methods and billable items of each service before you use the services.

### ALB

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6271592671/CAEQORiBgMCGjJf.qxkiIDZkOWM2NWZiZGU1MDRkYmZiNjY4NWY2YWFhYjU5ZWFj3926471_20230822152343.335.svg)

-   For more information about the resource plans of ALB, see [Introduction to ALB resource plans](/help/en/slb/application-load-balancer/product-overview/introduction-to-alb-resource-plans#concept-2113835).
    
-   For more information about the billing rules of pay-as-you-go ALB instances, see [Billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#concept-2012118).
    

### NLB

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6271592671/CAEQORiBgMCGkJX.qxkiIGNjNTMyZWE4YjI5MTQxMGI4M2Y0YThkZWJjZjE0ODE13926471_20230822152343.335.svg)

For more information about the billing rules of pay-as-you-go NLB instances, see [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#concept-2226387).

### CLB

The following figure shows the billable items of CLB. For more information about the billing rules of pay-as-you-go CLB instances, see [Pay-as-you-go](/help/en/slb/classic-load-balancer/product-overview/pay-as-you-go).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271592671/CAEQORiBgICvzq7.qxkiIDg3ODEyMTg4MDk5OTRhYWE5NDZhYmRjN2NkMDhhZDk23926471_20230822152343.335.svg)

The following table compares the billing rules and usage calculations of Load Balancer Capacity Units (LCUs) of ALB, NLB, and CLB.

**Service**

**LCU unit price**

**(USD/LCU/hour)**

**LCU definition**

**References**

ALB

0.007

An ALB **LCU provides the following resources:**

-   25 new connections per second
    
-   3,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    
-   Processing of 1,000 rules per hour
    
    **Note**
    
    Forwarding rules, lines of code in AScript, and additional certificates have the same quota, which is 25.
    

[LCU fees](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#section-e63-vy8-0h6)

NLB

0.005

**For TCP data transfer, an** NLB **LCU provides the following resources:**

-   800 new connections per second
    
-   100,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For UDP data transfer, an** NLB **LCU provides the following resources:**

-   400 new connections per second
    
-   50,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For SSL over TCP data transfer, an** NLB **LCU provides the following resources:**

-   50 new connections per second
    
-   3,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

[NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#section-vwu-of3-7db)

CLB

0.007

**For TCP data transfer, a** CLB **LCU provides the following resources:**

-   800 new connections per second
    
-   100,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For UDP data transfer, a** CLB **LCU provides the following resources:**

-   400 new connections per second
    
-   50,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    

**For HTTP or HTTPS data transfer, a** CLB **LCU provides the following resources:**

-   25 new connections per second
    
-   3,000 concurrent connections (sampled every minute)
    
-   1 GB of data transfer per hour
    
-   Processing of 1,000 rules per hour
    
    **Note**
    
    The number of rule evaluations is affected by the number forwarding rules. The free quota on forwarding rules is 25.
    

[Specification fee and LCU fee](/help/en/slb/pay-as-you-go-2#section-i1e-kna-oa3)
