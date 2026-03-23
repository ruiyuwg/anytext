If the current billing method of your PolarDB cluster does not meet your business requirements, you can change the billing method.

## **Usage notes**

-   A Serverless cluster uses the pay-as-you-go billing method, which cannot be changed.
    
    **Note**
    
    You cannot convert a non-Serverless cluster (subscription or pay-as-you-go cluster) into a Serverless cluster. However, you can migrate the cluster to a Serverless cluster or enable the Serverless feature for the cluster. For more information, see [FAQ](#0969ec04ebu1f).
    
-   Make sure that your account balance is sufficient to prevent downtime caused by overdue payments after you change the billing method to pay-as-you-go.
    

## **Impact**

Your business operations are not affected when you change the billing method.

## **Refunding**

After you change the billing method from subscription to pay-as-you-go, the remaining subscription payment is refunded to your original payment account. Take note that only the actual paid amount is refunded to the original payment channel. Vouchers or coupons that are used are not refunded. For information about how the refund is calculated when the billing method is changed from subscription to pay-as-you-go, see [Request a refund after the change of the billing method from subscription to pay-as-you-go](/help/en/user-center/refund-rules#X0JDx).

## Change the billing method from subscription **to** pay-as-you-go

### **Prerequisites**

-   Your cluster is in the **Running** state.
    
-   Your cluster does not have a temporary upgrade task in progress or scheduled configuration change tasks.
    

### **Procedure**

Go to the **[PolarDB console](https://polardb.console.alibabacloud.com/)**. On the **Clusters** page, find the cluster that you want to manage, and then choose **More** > **Switch to Pay-as-you-go** in the **Actions** column. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3817785371/p899073.png)

**Note**

If you cannot find the cluster, check whether you are in the region in which the cluster resides.

## Change the billing method from pay-as-you-go **to** subscription

### **Prerequisites**

-   Your cluster is in the **Running** state.
    
-   No unpaid orders exist in the cluster. If you have an unpaid order, go to the **Expenses and Costs** > **Orders** page to pay for or cancel the order.
    
-   Some historical specifications, such as the dedicated specifications of 2 cores and 4 GB of memory, are no longer available for purchase. If your cluster uses specifications that are no longer available for purchase, you cannot directly change the billing method to the Subscription. You must [manually change the specifications](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301) and then change the billing method to Subscription.
    

### **Procedure**

Go to the **[PolarDB console](https://polardb.console.alibabacloud.com/)**. On the **Clusters** page, find the cluster that you want to manage, and then choose **More** > **Switch to Subscription** in the **Actions** column. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3817785371/p899075.png)

**Note**

-   If you cannot find the cluster, check whether you are in the region in which the cluster resides.
    
-   This operation generates a **Switch to Subscription** order. The operation takes effect only after the order is paid.
    
-   If the order is unpaid or the payment fails, an unfinished order appears on the orders page. You cannot purchase a new cluster or switch the billing method to subscription before you complete the payment. You must pay for or cancel the order.
    
-   For the PSL4 and PSL5 **storage types**:
    
    -   If you select the **pay-as-you-go** billing method for your cluster when it is purchased, the storage billing method of the cluster cannot be changed to subscription. As a result, when you change the billing method of your cluster from **pay-as-you-go** **to** **subscription**, the storage still uses the **pay-as-you-go** billing method and generates pay-as-you-go bills.
        
    -   If the billing method combination of your cluster was changed from **subscription** for compute nodes and storage to **pay-as-you-go** for compute nodes and storage, when you change the billing method of your cluster from **pay-as-you-go** **to** **subscription**, the storage billing method is changed to **subscription**.
        
-   For the Enhanced SSD **storage type**, the storage billing method is changed to subscription.
    

## **FAQ**

### **What do I do if a message that indicates the presence of ineffective orders appears when I switch the billing method of the cluster from subscription to pay-as-you-go?**

Go to the **Expenses and Costs** > **Orders** > **My Orders** page to check whether a renewal order fails to take effect. If you want to cancel an order that does not take effect, go to the **Expenses and Costs** > **Cost Management** > **Unsubscribe** page, unsubscribe from the resources.

### **How do I migrate a non-****serverless** **cluster (subscription or pay-as-you-go cluster) to a** **serverless** **cluster?**

You can migrate a non-serverless cluster to a serverless cluster by using Data Transmission Service (DTS). For more information, see [Migrate data between PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-between-polardb-for-mysql-clusters).

### **Can I upgrade a non-****serverless** **cluster (subscription or pay-as-you-go cluster)** to a serverless **cluster?**

You can enable the serverless feature for a non-serverless cluster (subscription or pay-as-you-go cluster). For more information, see [Enable the serverless feature for a cluster with defined specifications](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters).
