You can renew a subscription AnalyticDB for MySQL cluster to extend its subscription period. Renewing a cluster costs the same as purchasing a new one. Pay-as-you-go clusters are billed by actual usage, never expire, and don’t require renewal. You only need to keep a sufficient balance in your Alibaba Cloud account. AnalyticDB for MySQL clusters can be automatically or manually renewed. This topic describes how to renew a subscription to AnalyticDB for MySQL cluster.

## Usage notes

-   We recommend that you enable auto-renewal to ensure business continuity.
    
-   If you did not enable auto-renewal for subscription clusters, we recommend that you manually renew the clusters before they expire. If a cluster is not renewed in a timely manner, service interruptions or data loss may occur after the cluster expires.
    

## **Auto-renewal**

If you are worried about forgetting to manually renew subscription AnalyticDB for MySQL clusters, you can enable auto-renewal.

### **Auto-renewal policy**

-   You can enable auto-renewal for subscription AnalyticDB for MySQL clusters.
    
-   The system attempts to automatically deduct the renewal fee at the following times: 3 days before expiration, 1 day before expiration, on the expiration date, 6 days after expiration, and 14 days after expiration. When the deduction is successful, the system stops attempting to deduct the renewal fee.
    
-   If you manually renew your cluster before the renewal fee is automatically deducted, the system calculates the next auto-renewal date based on the new expiration date.
    
-   If your cluster expires on the next day, you can only manually renew the cluster. Auto-renewal is not supported.
    
-   Make sure that you have sufficient balances, credits, or available vouchers in your Alibaba Cloud account.
    
-   You can use coupons for auto-renewal.
    

### **Enable auto-renewal when you create a subscription cluster**

When you [create a subscription AnalyticDB for MySQL cluster](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster#task1307), select **Auto-renewal**.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0777237461/p298358.png)

### **Enable auto-renewal in the Expenses and Costs console**

If you did not select Auto-renewal when you created a subscription cluster, you can enable auto-renewal for the cluster in the Expenses and Costs console.

**Important**

You cannot enable auto-renewal for expired subscription clusters in the Expenses and Costs console.

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses > Renewal Management**.
    
3.  Find the cluster that you want to renew by specifying the **Expired At**, **Commodity Name**, and **Region** parameters.
    
4.  Select the cluster that you want to renew and click **Enable Autp-renewal** in the **Actions** column.
    
5.  In the **Enable Auto-renewal** dialog box, select an **Auto-renewal Period** and click ****Enable Auto-renewal****.
    

## **Manual renewal**

If you want to extend the validity period of a subscription AnalyticDB for MySQL cluster, you can manually renew the cluster.

### **Manually renew a subscription cluster in the Expenses and Costs console**

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses > Renewal Management**.
    
3.  Find the cluster that you want to renew by specifying the **Expired At**, **Commodity Name**, and **Region** parameters.
    
4.  Select the cluster that you want to renew and click **Renew** in the **Actions** column.
    
5.  Select a renewal duration, read and select the Terms of Service, and then click **Buy Now**.
    
6.  On the **Purchase** page, confirm the order and the payment method, and then click **Subscribe**.
    

### Manually renew a subscription cluster in the AnalyticDB for MySQL console

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/).
    
2.  In the upper-left corner of the page, select a region.
    
3.  In the left-side navigation pane, click **Clusters**.
    
4.  Find the cluster that you want to renew and click **Renew** in the Actions column.
    
5.  Select a renewal duration, read and select the Terms of Service, and then click **Buy Now**.
    
6.  On the **Purchase** page, confirm the order and the payment method, and then click **Subscribe**.
