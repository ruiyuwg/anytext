Basic Global Accelerator (GA) instances provide point-to-point acceleration at Layer 3 (IP protocols). They use the high-quality global network bandwidth and transmission network of Alibaba Cloud to accelerate content delivery.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account (if not, [create one](https://account.alibabacloud.com/register/intl_register.htm))
    
-   (Pay-as-you-go only) GA activated on the [pay-as-you-go GA activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) (one-time step)
    
-   A resource group created in Resource Management (see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb))
    

## Create a basic GA instance

Basic GA instances support two billing methods: subscription and pay-as-you-go. For billing details, see [Billing of subscription GA instances](/help/en/ga/product-overview/billing-of-ga-instances) and [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Basic Instance**.
    
3.  On the **Basic GA Instance** page, click **Create Basic Instance**.
    
4.  On the **Create Basic GA Instance** page, configure the following parameters, click **Buy Now** or **Create**, and complete the payment. **Instance Billing Method** options:
    
    -   **Pay-As-You-Go**: The **Bandwidth Billing Method** is automatically set to **Pay-By-Data-Transfer**. Data transfer fees are managed by Cloud Data Transfer (CDT). No basic bandwidth plan is required. For details, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer#task-2261223) and [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).
        
    -   **Subscription**: The **Bandwidth Billing Method** is automatically set to **Pay-By-Bandwidth**. Bandwidth fees are offset by the basic bandwidth plan associated with the GA instance. You must associate a basic bandwidth plan after purchase. For details, see [Subscription basic bandwidth plans](/help/en/ga/product-overview/subscription-bandwidth-plans#concept-2358134) and [Billing of subscription GA instances](/help/en/ga/product-overview/billing-of-ga-instances).
        
    
    **Parameter**
    
    **Description**
    
    **Instance Billing Method**
    
    Select a billing method. See the descriptions below this table.
    
    **Bandwidth Billing Method**
    
    Automatically set based on **Instance Billing Method**. **Pay-By-Data-Transfer** for pay-as-you-go instances. **Pay-By-Bandwidth** for subscription instances.
    
    **Subscription Duration**
    
    (Subscription only) Select the subscription duration. Select **Auto-renewal. (Make sure that your account balance is sufficient.)** to enable automatic renewal.
    
    **Resource Group**
    
    Select the resource group to which the basic GA instance belongs. The resource group must be created in Resource Management by the current Alibaba Cloud account.
    
    **Coupon**
    
    (Subscription only) Select a coupon from the drop-down list. By default, **Do Not Use Coupons** is selected.
    
5.  Return to the **Basic GA Instance** page and verify that the instance is listed.
    

**Note**

After creation, hover over the instance ID on the **Basic GA Instance** page and click **Pending Configuration** to view the configuration progress and next step.

## What to do next

After you create a basic GA instance, complete the following steps to start using it.

For subscription instances, associate a basic bandwidth plan first:

1.  [Associate a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-i04-avr-dsj)
    

Then, for both subscription and pay-as-you-go instances:

1.  [Add an acceleration area and an accelerated IP address](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1)
    
2.  [Add an endpoint group and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915)
    
3.  [Associate idle accelerated IP addresses with endpoints](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1#section-sx7-j59-y9i) or [Associate accelerated IP addresses with endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#section-4jk-eet-5sy)
    

## Manage basic GA instances

### Rename an instance

1.  In the left-side navigation pane, click **Basic Instance**.
    
2.  On the **Basic GA Instance** page, find the instance, hover over the instance name, and click the edit icon.
    
3.  In the dialog box, enter a new name and click **OK**.
    

### Delete a pay-as-you-go instance

**Warning**

Deleting an instance immediately releases all resources, including accelerated IP addresses. Traffic is no longer forwarded, and the instance cannot be restored. Make sure that data migration is complete before deletion.

1.  In the left-side navigation pane, click **Basic Instance**.
    
2.  On the **Basic GA Instance** page, find the instance and click **Delete Instance** in the **Actions** column.
    
3.  In the confirmation message, click **OK**.
    

### Renew a subscription instance

1.  In the left-side navigation pane, click **Basic Instance**.
    
2.  On the **Basic GA Instance** page, find the instance and click **Renew** in the **Actions** column.
    
3.  On the **Renew** page, configure the **Duration** parameter, read and agree to the Terms of Service, and click **Buy Now** to complete the payment.
    

### Replace a basic bandwidth plan

The basic bandwidth plan associated with a subscription GA instance can be replaced. The GA instance continues to forward traffic during replacement. After replacement, the original plan is disassociated and the new plan takes effect.

Before you replace a plan, make sure that:

-   Another basic bandwidth plan is purchased. For details, see [Purchase and manage basic bandwidth plans](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-lrh-d9o-4y8).
    
-   The bandwidth of the new plan is greater than or equal to the total bandwidth allocated to acceleration areas.
    

1.  In the left-side navigation pane, click **Basic Instance**.
    
2.  On the **Basic GA Instance** page, find the instance and click **Replace Basic Bandwidth Plan** in the **Actions** column.
    
3.  In the **Replace Basic Bandwidth Plan** dialog box, configure the following parameters and click **OK**:
    
    -   **Resource Group**: Select the resource group of the bandwidth plan to use.
        
    -   **Bandwidth Plan to Use**: Select a basic bandwidth plan. Only plans in the **Idle** state are available.
        

### Unsubscribe from a subscription instance

Before you unsubscribe, verify that you meet the conditions for unsubscription and make sure that data migration is complete. For details, see [Refund policies](/help/en/ga/product-overview/refund-policies#task-2292765).

## Related API operations

**API**

**Description**

[CreateBasicAccelerator](/help/en/ga/api-createbasicaccelerator#doc-api-Ga-CreateBasicAccelerator)

Creates a basic GA instance.

[UpdateBasicAccelerator](/help/en/ga/api-updatebasicaccelerator#doc-api-Ga-UpdateBasicAccelerator)

Modifies a basic GA instance.

[GetBasicAccelerator](/help/en/ga/api-getbasicaccelerator#doc-api-Ga-GetBasicAccelerator)

Queries information about a basic GA instance.

[ListBasicAccelerators](/help/en/ga/api-listbasicaccelerators#doc-api-Ga-ListBasicAccelerators)

Queries basic GA instances.
