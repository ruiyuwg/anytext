After you create a pay-as-you-go E-MapReduce (EMR) cluster or a subscription cluster that contains pay-as-you-go node groups, you can switch the billing method of the pay-as-you-go cluster or node groups to subscription. The subscription billing method allows you to reserve resources in advance and provides more cost savings.

## Prerequisites

**Note**

Make sure that the balance in your account is sufficient to cover the related fees.

-   The cluster whose billing method you want to switch meets the following requirements:
    
    -   The cluster belongs to your Alibaba Cloud account.
        
    -   The cluster does not have an unpaid order for billing method switching.
        
        If an unpaid order for billing method switching exists, you must cancel the unpaid order and place another order to switch the billing method.
        
    -   Your cluster is in the Running state.
        
-   The node groups whose billing method you want to switch meet the following requirements:
    
    -   The node groups are in the Running state and contain nodes.
        
    -   No auto scaling rule is associated with the node groups.
        

## **Switch the billing method from pay-as-you-go to subscription at the cluster level**

You can switch the billing method of a cluster from pay-as-you-go to subscription.

### **Limits**

The billing method of the cluster is pay-as-you-go.

### **Procedure**

**Warning**

After you switch the billing method of a cluster from pay-as-you-go to subscription, you cannot switch the billing method back to pay-as-you-go from subscription.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  In the top navigation bar, select the region where your cluster resides and select a resource group based on your business requirements.
    
3.  On the **EMR on ECS** page, find the cluster whose billing method you want to switch, move the pointer over the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5799738861/p680718.png) icon in the Actions column, and then select **Switch to Subscription**.
    
4.  In the message that appears, click **OK**.
    
5.  In the **Switch to Subscription** dialog box, configure the following parameters:
    
    1.  **Node Group Type**: By default, master and core node groups are selected. You can select other node groups based on your business requirements. You cannot switch the billing method of a task node group for which auto scaling rules are configured from pay-as-you-go to subscription.
        
    2.  **Subscription Duration**: Select an option from the drop-down list based on your business requirements.
        
    3.  **Auto-renewal**: By default, the switch is turned on, and the system renews your subscription for another month seven days before the expiration date. You can turn off the switch. We recommend that you turn on the switch to prevent your business from being affected due to instance expiration.
        
6.  Click **OK**.
    

## **Switch the billing method from pay-as-you-go to subscription at the node group level**

You can switch the billing method of node groups in a subscription cluster from pay-as-you-go to subscription.

### **Limits**

-   The billing method of the cluster is subscription.
    
    **Note**
    
    You cannot switch the billing method of a node group in a pay-as-you-go cluster from pay-as-you-go to subscription.
    
-   You cannot switch the billing method of a node group for which auto scaling rules are configured from pay-as-you-go to subscription.
    

### **Procedure**

**Warning**

After you switch the billing method from pay-as-you-go to subscription for a node group, you cannot switch the billing method back to pay-as-you-go from subscription.

1.  Go to the Nodes tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select the region where your cluster resides and select a resource group based on your business requirements.
        
    3.  On the **EMR on ECS** page, find the desired cluster and click **Nodes** in the Actions column.
        
2.  On the Nodes tab, find the desired node group, move the pointer over the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5799738861/p680718.png) icon, and then select **Switch to Subscription**.
    
3.  In the **Switch to Subscription** dialog box, configure the following parameters:
    
    1.  **Subscription Duration**: Select an option from the drop-down list based on your business requirements.
        
    2.  **Auto-renewal**: By default, the switch is turned on, and the system renews your subscription for another month seven days before the expiration date. You can turn off the switch. We recommend that you turn on the switch to prevent your business from being affected due to instance expiration.
        
4.  Click **OK**.
