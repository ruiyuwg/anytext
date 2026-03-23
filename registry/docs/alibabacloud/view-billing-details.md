This topic describes the billing methods, billable items, and billing cycles of Global Accelerator (GA).

**Note**

To participate in a free trial, submit an [application](https://page-intl.aliyun.com/form/act857014000/index.htm). Free trials are available only for subscription standard GA instances. For more information about free trials and the supported instance specifications, see [Time-limited one-month free trials of GA](/help/en/ga/product-overview/time-limited-one-month-free-trials-of-ga#concept-2471776).

## Overview of billing methods

-   GA instances support the pay-as-you-go and subscription billing methods.
    
-   The bandwidth that is used to connect to the global transmission network of Alibaba Cloud supports the **pay-by-data-transfer** and **pay-by-bandwidth** metering methods.
    
    -   **Pay-by-data-transfer**: Data transfer fees are managed by Cloud Data Transfer (CDT). CDT supports the pay-as-you-go billing method.
        
        You do not need to associate a basic bandwidth plan with your GA instance. The system calculates the fees based on where your service is deployed. The fees include Internet data transfer fees and inter-region data transfer fees. For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer#concept-2261223).
        
    -   **Pay-by-bandwidth**: You are charged for bandwidth plans. Bandwidth plans support the subscription billing method.
        
        If you use this metering method, you must associate a basic bandwidth plan with your GA instance. For more information about how to select a basic bandwidth plan, see the "Bandwidth plan type" section of the [Select and purchase GA resources](/help/en/ga/product-overview/select-and-purchase-ga-resources#8bbcaa602chih) topic.
        

**Instance billing method**

**Bandwidth metering method**

**Scenario**

[Pay-as-you-go](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)

**Pay-by-data-transfer**

-   Temporary traffic spikes.
    
-   Multiple cloud resources that use the pay-by-data-transfer metering method are activated within your Alibaba Cloud account.
    
-   Large traffic fluctuations.
    

If you cannot estimate the resource usage and the amount of data transfer, we recommend that you use pay-as-you-go GA instances.

[Subscription](/help/en/ga/product-overview/billing-of-ga-instances)

**Pay-by-bandwidth**

-   You can estimate the usage period of resources.
    
-   Traffic is stable.
    
-   Resources are required for a long term.
    

**Important**

-   The first time you use a pay-as-you-go GA instance, you must go to the [Activate Service](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) page to activate the pay-as-you-go Global Accelerator service.
    
-   You can purchase GA resource plans to offset the Capacity Unit (CU) fees and instance fees of pay-as-you-go GA instances. Resource plans are more cost-effective than the pay-as-you-go billing method. For more information, see [GA resource plans](/help/en/ga/product-overview/resource-package).
    
-   You can select the billing method only when you purchase a GA instance. The billing method cannot be changed after a GA instance is created.
    

## Billable items

### **Billable items of** **standard** GA instances

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2805345671/CAEQUBiBgMDvxMGw2BkiIDNhMDMwYTMwM2ZlYTQ1YWNhOWIzN2VjZDk2MGU3Mjli3926471_20230822152343.335.svg)

### Billable items of basic GA instances

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2805345671/CAEQUBiBgMDvmcKw2BkiIDU2ODI5NTljYWZkNTQyMjZiN2FhOTBiYmIzYTQwMjhk3926471_20230822152343.335.svg)

## Billing cycles

The following table describes the billing cycles of GA.

**Billing cycle**

**Bill release time**

**Billable item**

Hourly

A bill is generated within 1 hour after the current billing cycle ends. The time when bills are generated is determined by the system.

-   GA instance fee: [Instance fees of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#section-29l-vls-0j9)
    
-   CU fee: [CU fees of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#4af14fc025v6q)
    
-   Network transmission fee: [Data transfer fees](/help/en/ga/product-overview/pay-by-data-transfer)
    

Monthly

A bill is generated on the first day of the next calendar month after the end of a billing cycle. The time when bills are generated is determined by the system.

-   GA instance fee: [Instance fees of subscription GA instances](/help/en/ga/product-overview/billing-of-ga-instances#section-6im-nhh-v8n)
    
-   Specification fee: [Specification fees of subscription GA instances](/help/en/ga/product-overview/billing-of-ga-instances#section-7im-nhh-v8m)
    
-   Network transmission fee: [Bandwidth fee](/help/en/ga/product-overview/subscription-bandwidth-plans)
    

## Pricing

### **Standard GA instances**

The following tables show the pricing of billable items of standard GA instances in different billing methods.

#### **Pay-as-you-go**

**Billable item**

**Pricing**

**Instance fee** and **CU fee**

You can use the [GA (Pay-as-you-go) CU Calculator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/ga_afterpay_public_intl) to estimate the instance fee and CU fee of a pay-as-you-go standard GA instance.

**Data transfer fee**

The bills for data transfer fees are generated by CDT. For more information about CDT pricing, see [Internet data transfers](/help/en/cdt/internet-data-transfers/#94c859305617r) and [Cross-region data transfers](/help/en/cdt/inter-region-data-transfers#267dca50566kj).

**GA resource plans**

You can use GA resource plans to offset instance fees and CU fees. The prices on the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_cubag_dp_intl) in the GA console shall prevail.

#### **Subscription**

**Billable item**

**Pricing**

**Instance fee** and **specification fee**

You can view the actual prices on the [Create Standard Instance (Subscription)](https://ga.console.alibabacloud.com/buy/standard/prePay?commodityCode=ga_pluspre_public_intl&resourceGroupId=#/buy) page of the GA console or on your bills.

**Bandwidth fee**

Bandwidth plans are used to offset bandwidth fees. The prices of a basic bandwidth plan on the [buy page](https://common-buy-intl.aliyun.com/?commodityCode=ga_bwppreintl_public_intl#/buy) in the GA console shall prevail.

### Basic GA instances

The following tables show the pricing of billable items of pay-as-you-go and subscription basic GA instances in different billing methods.

#### **Pay-as-you-go**

**Billable item**

**Pricing**

**Instance fee**

You can view the actual instance fee on the [Create Basic GA Instance](https://ga.console.alibabacloud.com/buy/basic?commodityCode=ga_gapluspre_public_cn&resourceGroupId=#/buy) page of the GA console or on your bills.

**Pay-by-data-transfer**

The bills for data transfer fees are generated by CDT. For more information about CDT pricing, see [Internet data transfers](/help/en/cdt/internet-data-transfers/) and [Cross-region data transfers](/help/en/cdt/inter-region-data-transfers#267dca50566kj).

**GA resource plans**

Instance fees can be offset by GA resource plans. You can view the actual price of the GA resource plan on the [GA Resource Plans (International Site)](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_cubag_dp_intl) buy page in the GA console.

#### **Subscription**

**Billable item**

**Pricing**

**Instance fee**

You can view the actual instance fee on the [Create Basic GA Instance](https://ga.console.alibabacloud.com/buy/basic?commodityCode=ga_gapluspre_public_cn&resourceGroupId=#/buy) page of the GA console or on your bills.

**Bandwidth fee**

Bandwidth plans are used to offset bandwidth fees. You can view the actual price of a basic bandwidth plan on the [Global Accelerator Bandwidth Plan](https://common-buy-intl.aliyun.com/?commodityCode=ga_bwppreintl_public_intl#/buy) buy page in the GA console.

## References

### **Billing methods and rules**

-   Pay-as-you-go GA instances
    
    -   [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)
        
    -   [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer)
        
    -   [GA resource plans](/help/en/ga/product-overview/resource-package)
        
-   Subscription GA instances
    
    -   [Billing of subscription GA instances](/help/en/ga/product-overview/billing-of-ga-instances)
        
    -   [Subscription basic bandwidth plans](/help/en/ga/product-overview/subscription-bandwidth-plans)
        

### **More references**

-   [Change specifications](/help/en/ga/product-overview/change-specifications)
    
-   [Overdue payments](/help/en/ga/product-overview/overdue-payments)
    
-   [Refund policy](/help/en/ga/product-overview/refund-policies)
    
-   [Renew GA instances](/help/en/ga/product-overview/renewal)
    

## **More references**

### **Overdue payments**

#### **Overdue payments of pay-as-you-go GA instances**

**Instance billing method**

**Bandwidth metering method**

**Expiration and overdue payments**

**Renewal and top-up**

Pay-as-you-go

Pay-by-data-transfer

If your Alibaba Cloud account has overdue payments and bills for data transfer fees are not settled, you are notified by text message and email.

-   The GA instance continues providing services within 15 days after the payment becomes overdue.
    
-   If you do not complete the overdue payment, the GA instance is suspended on the 15th day.
    
    The billing stops when the instance is suspended.
    
-   If you do not complete the overdue payment 15 days after the GA instance is suspended, it is automatically released.
    
    You are notified by email one day before the instance is released. The configurations and related data are deleted and cannot be restored after the GA instance is released.
    

If your Alibaba Cloud account has overdue payments, we recommend that you top up your account at the earliest opportunity.

-   If you top up your account within 15 days after the payment becomes overdue, your service is not suspended.
    
-   If you top up your Alibaba Cloud account within 30 days after the payment becomes overdue, the GA instance immediately restores services.
    

#### **Overdue payments of subscription GA instances**

**Instance billing method**

**Bandwidth metering method**

**Expiration and overdue payments**

**Renewal and top-up**

Subscription GA instances

Pay-by-bandwidth

If you purchase a subscription GA instance whose bandwidth metering method is **pay-by-bandwidth**, the GA instance may be in one of the following states:

-   Normal: The GA instance is in the Normal state. After you create a GA instance, the GA instance remains in the Normal state until the instance expires.
    
    In this state, the GA instance works as expected as long as the associated basic bandwidth plan is in the Normal state.
    
-   FinancialLocked: The GA instance is locked due to overdue payments. A GA instance remains in this state within seven days after the instance expires.
    
    In this state, you cannot perform operations on the GA instance.
    
    If you do not renew the instance within seven days after expiration or if the renewal fails, the instance is released. After the instance is released, the configurations and data of the instance are deleted and cannot be restored.
    

You can renew the GA instance before the expiration date or within seven days after the expiration date.

#### **Overdue payments of bandwidth plans**

**Billing method**

**Expiration**

**Renewal policy**

Subscription

A subscription basic bandwidth plan may be in one of the following states:

-   Normal: The bandwidth plan remains in the Normal state until it expires.
    
    A basic bandwidth plan that is in the Normal state provides regular acceleration services.
    
-   FinancialLocked: A basic bandwidth plan is locked within seven days after it expires.
    
    In this case, the configurations of the basic bandwidth plan are retained. However, you cannot perform operations on the basic bandwidth plan, such as replacing the basic bandwidth plan.
    
    If you do not renew the basic bandwidth plan within seven days after expiration or if the renewal fails, the basic bandwidth plan is released. After the basic bandwidth plan is released, the configurations and data of the basic bandwidth plan are deleted and cannot be restored.
    

You can renew the basic bandwidth plan before the expiration date or within seven days after the expiration date.

#### **View the overdue amount**

1.  Log on to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview).
    
2.  On the **Account Overview** page, you can view overdue payments.
    

### **View bills and usage details**

On the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail) page, you can click the ****Consumption By Bill**, Billing Details**, and **View Usage Details** tabs to view the consumption and billing details. For more information, see [Consumption by bill](/help/en/user-center/bill-flow), [Billing details](/help/en/user-center/bill-details-2), and [Usage details](/help/en/user-center/usage-details).
