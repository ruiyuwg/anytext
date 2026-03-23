This topic describes how to upgrade monitoring components integrated with Application Real-Time Monitoring Service (ARMS), and how to access upgraded dashboards, alert rules, and metrics.

## **Prerequisites**

-   Managed Service for Prometheus is [activated](/help/en/prometheus/product-overview/billing-description/#e83b4ff3ba1v9).
    
-   The monitoring components are [integrated with ARMS](/help/en/prometheus/user-guide/data-access-overview).
    

## **Upgrade a monitoring component**

**Important**

Existing data remains intact and unaffected during the upgrade.

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home). In the left-side navigation pane, click **Integration Management**.
    
2.  On the **Integrated Environments** tab, click the target environment.
    
    The following uses a container environment as an example.
    
3.  On the **Component Management** tab, click the component you want to upgrade in the lower-left corner. Then, click **Upgrade** in the **Actions** column on the right and upgrade it as prompted. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9379352471/p931807.png)
    
    A message indicating successful upgrade will appear.
    

## **View information after the upgrade**

You can view:

-   Upgraded dashboards on the **Dashboards** tab of **Component Management**![88](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9379352471/p931951.jpg)![87](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9379352471/p931952.jpg)
    
-   Upgraded alert rules on the **Alert Rule** tab of **Component Management**
    
    ![90](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9379352471/p931946.jpg)
    
-   Upgraded metrics on the **Metric Scraping** tab
    
    ![89](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9379352471/p931948.jpg)
    

## **Related steps**

### **Upgrade the ack-arms-prometheus component**

After upgrading a monitoring component in a container environment, you'll need to upgrade the ack-arms-prometheus component.

1.  Log on to the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com). In the cluster list, click the target cluster.
    
2.  In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the page that appears, click the **Logs and Monitoring** tab. Then, check if a new version is available for the ack-arms-prometheus component. If so, click **Upgrade**.
    

### **Upgrade a managed agent**

To upgrade a managed agent, take the following steps:

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, click **Integration Management**.
    
3.  On the **Integrated Environments** tab, click **Cloud Service Region**. Then, click the environment containing your target agent.
    
4.  On the page that appears, check if a new version is available for the agent on the **Configure Agent** tab. If so, click **Upgrade**.
    

![85](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9379352471/p931960.jpg)
