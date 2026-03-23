To make sure that your Express Connect service works as expected, you must renew the subscription of your Express Connect circuits before they expire. We recommend that you enable auto-renewal to prevent service suspensions caused by overdue payments.

## Payers for renewal

Connection type

Payer for renewal

Renewal method

**Dedicated Express Connect circuits**

Use a dedicated Express Connect circuit to connect to Alibaba Cloud. For more information, see [Connect to Alibaba Cloud through a dedicated Express Connect circuit](/help/en/express-connect/user-guide/process-of-creating-a-dedicated-physical-connection/#concept-2365500).

**Tenant**

For more information about how to renew a dedicated Express Connect circuit, see [Renew a dedicated Express Connect circuit](#section-guy-nd7-rmk).

**Shared Express Connect circuits**

Use a shared Express Connect circuit pre-installed by an Express Connect partner to connect to Alibaba Cloud. For more information, see [Overview of hosted connections](/help/en/express-connect/user-guide/overview-of-hosted-connections/#task-2359306).

-   If the tenant pays the fee when a shared Express Connect circuit is used, the **tenant** is the payer for renewal.
-   If the Express Connect partner pays the fee when a shared Express Connect circuit is used, the **Express Connect partner** is the payer for renewal.

For more information about how to renew a shared Express Connect circuit, see [Renew a shared Express Connect circuit](#section-tgg-69f-gre).

## Background information

You can manually renew Express Connect circuits, enable auto-renewal, or choose not to renew Express Connect circuits. The following list shows how to manage renewal in different scenarios:

-   You can manually renew Express Connect circuits or enable auto-renewal before the Express Connect circuits expire.
-   Expired Express Connect circuits cannot be automatically renewed. If an Express Connect circuit is expired, you must manually renew the Express Connect circuit. Then, you can enable auto-renewal for the Express Connect circuit.
-   If you no longer need an Express Connect circuit, you can disable auto-renewal and choose not to renew the Express Connect circuit after the Express Connect circuit expires.

## Renew a dedicated Express Connect circuit

On the Renewal page, you can manage the renewal of your dedicated Express Connect circuits based on your business requirements.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
2.  You can use one of the following methods to navigate to the Renewal page:
    
    -   Navigate to the Renewal page from the Physical Connection page.
        1.  In the top navigation bar, select a region.
        2.  On the Physical Connection page, find the dedicated Express Connect circuit that you want to renew and click Auto Renew in the Actions column.
        3.  On the Renewal page, click the Manual, Auto, or Nonrenewal tab to manage renewal.
    -   Navigate to the Renewal page in Billing Management.
        1.  In the top navigation bar, choose Expenses > Renewal Management.
        2.  In the Instances section of the Renewal page, select Express Connect - Charge for rental (Prepaid).
        3.  Click the Manual, Auto, or Nonrenewal tab to manage renewal.
    
3.  You can use one of the following methods to manage the renewal of a dedicated Express Connect circuit:
    
    -   Manual renewal
        
        **Note** To renew multiple dedicated Express Connect circuits at a time, select the dedicated Express Connect circuits that you want to renew and click Batch Renew. Then, perform the operations as prompted.
        
        1.  On the Renewal page, find the dedicated Express Connect circuit that you want to renew and click Renew in the Actions column.
        2.  On the Renew page, specify a duration and select Terms of Service.
        3.  Click Buy Now and complete the payment.
    -   Auto-renewal
        1.  On the Renewal page, find the dedicated Express Connect circuit that you want to renew and click Enable Auto Renewal in the Actions column.
        2.  In the Enable Auto Renewal dialog box, specify the renewal period and click Auto Renew.
            
            After you enable auto-renewal for the dedicated Express Connect circuit, you can view the order on the Auto tab.
            
            **Note**
            
            -   After you enable auto-renewal, the auto-renewal feature takes effect the next day.
            -   Make sure that you have sufficient balance for renewal.
            -   If your instance expires on the next day, you can only manually renew the instance. Auto-renewal is not supported.
            After you enable auto-renewal for the dedicated Express Connect circuit, Alibaba Cloud deducts fees from your account balance to pay for the order nine days before the subscription expires. To prevent auto-renewal failures, make sure that your account balance is sufficient.
    -   Disable renewal: After you disable auto-renewal for the dedicated Express Connect circuit, Alibaba Cloud sends a notification before the dedicated Express Connect circuit expires. The dedicated Express Connect circuit is suspended after it expires. You can change the auto-renewal setting before the dedicated Express Connect circuit is suspended.
        1.  On the Renewal page, find the dedicated Express Connect circuit that you do not want to renew and click Nonrenewal in the Actions column.
        2.  In the Set as Nonrenewal dialog box, click OK.
            
            After you disable auto-renewal for the dedicated Express Connect circuit, you can view the record on the Nonrenewal tab.
            
    

## Renew a shared Express Connect circuit

To renew a shared Express Connect circuit, you must log on to the console with the Alibaba Cloud account of a tenant.

On the Renewal page, you can manage the renewal of shared Express Connect circuits based on your business requirements.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
2.  You can use one of the following methods to navigate to the Renewal page:
    
    -   Navigate to the Renewal page from the Physical Connection page.
        1.  In the top navigation bar, select a region.
        2.  On the Physical Connection page, find the shared Express Connect circuit that you want to renew and click Auto Renew in the Actions column.
        3.  On the Renewal page, click the Manual, Auto, or Nonrenewal tab to manage renewal.
    -   Navigate to the Renewal page in Billing Management.
        1.  In the top navigation bar, choose Expenses > Renewal Management.
        2.  In the Instances section of the Renewal page, select Express Connect - Charge for rental (Prepaid).
        3.  Click the Manual, Auto, or Nonrenewal tab to manage renewal.
    
3.  Perform [Step](#step-7sz-hre-qw6) [3](#step-7sz-hre-qw6) to manually renew the shared Express Connect circuit, enable auto-renewal, or choose not to renew the shared Express Connect circuit.

## Renew a shared port

**Note**

-   If a tenant pays for the Express Connect circuit, log on to the console with the Alibaba Cloud account of the tenant to renew a shared port. If the Express Connect partner pays for the Express Connect circuit, contact the Express Connect partner to renew a shared port.
-   If the Express Connect partner pays for the Express Connect circuit, you can also log on to the console with the Alibaba Cloud account of the Express Connect partner to renew a shared port.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
2.  You can use one of the following methods to navigate to the Renewal page:
    
    -   Navigate to the Renewal page from the Physical Connection page.
        1.  In the top navigation bar, select a region.
        2.  On the Physical Connection page, find the Express Connect circuit that you want to renew and click Auto Renew in the Actions column.
        3.  On the Physical Connection page, click the ID of the dedicated Express Connect circuit that you want to manage.
        4.  On the Express Connect circuit details page, click the Shared Physical Connection tab.
        5.  Find the shared port that you want to renew and click Renew in the Actions column.
        6.  On the Renewal page, click the Manual, Auto, or Nonrenewal tab to manage renewal.
    -   Navigate to the Renewal page in Billing Management.
        1.  In the top navigation bar, choose Expenses > Renewal Management.
        2.  In the Instances section of the Renewal page, select Express Connect - Charge for rental (Prepaid).
        3.  Click the Manual, Auto, or Nonrenewal tab to manage renewal.
    
3.  Perform [Step](#step-7sz-hre-qw6) [3](#step-7sz-hre-qw6) to manually renew the shared port, enable auto-renewal, or choose not to renew the shared port.

## Renew a VBR

On the Renewal page, you can manage the renewal of a virtual border router (VBR) based on your business requirements.

If billing for outbound data transfer is enabled, you are not charged VBR fees. Otherwise, you must renew a VBR before it expires.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
2.  You can use one of the following methods to navigate to the Renewal page:
    
    -   Navigate to the Renewal page from the Physical Connection page.
        1.  In the top navigation bar, select a region.
        2.  On the Physical Connection page, find the Express Connect circuit that you want to manage and click its ID.
        3.  On the Physical Connection details page, click the VBR tab, find the VBR that you want to renew, and then choose ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5995629261/p251242.png) > Auto Renew in the Actions column.
        4.  On the Renewal page, click the Manual, Auto, or Nonrenewal tab to manage renewal.
    -   Navigate to the Renewal page in Billing Management.
        1.  In the top navigation bar, choose Expenses > Renewal Management.
        2.  In the Instances section of the Renewal page, select Express Connect - VBR Instance fee.
        3.  Click the Manual, Auto, or Nonrenewal tab to manage renewal.
    
3.  Perform [Step](#step-7sz-hre-qw6) [3](#step-7sz-hre-qw6) to manually renew the VBR, enable auto-renewal, or choose not to renew the VBR.

## Renew an Express Connect circuit with non-renewal configured

After you disable auto-renewal for an Express Connect circuit, you can still renew the Express Connect circuit before it expires.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
2.  You can use one of the following methods to navigate to the Renewal page:
    
    -   Navigate to the Renewal page from the Physical Connection page.
        1.  In the top navigation bar, select a region.
        2.  On the Physical Connection page, find the dedicated Express Connect circuit that you want to renew and click Auto Renew in the Actions column.
    -   Navigate to the Renewal page in Billing Management.
        
        In the top navigation bar, choose Expenses > Renewal Management.
        
    
3.  On the Renewal page, click the Nonrenewal tab.
4.  Find the Express Connect circuit that you want to renew and click Renew in the Actions column.
    
    **Note** You can also click Enable Auto Renewal or Enable Manual Renewal. Then, perform the operations as prompted.
    
5.  On the Renew page, specify a duration and select Terms of Service.
6.  Click Buy Now and complete the payment.
