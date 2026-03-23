Burstable instances (t5/t6) support both standard and unlimited modes to meet different business requirements. Learn how to view, enable, or disable unlimited mode for your instances.

## Background information

-   **Standard mode**: The performance of a burstable instance is constrained by its CPU credits. After the initial and accrued CPU credits are depleted, the instance's performance cannot exceed its baseline performance.
    
-   **Unlimited mode**: A burstable instance can burst beyond its available CPU credit limits. It can maintain CPU utilization above its baseline performance at any time by overdrawing or paying for CPU credits.
    

**Important**

In unlimited mode, a burstable instance may incur additional fees. For more information, see [Additional fees](/help/en/ecs/user-guide/billing#section-lqi-vqf-dsc).

The system automatically selects a performance mode for a burstable instance in the following scenarios:

-   When you create a burstable instance, it uses **standard mode** by default.
    
-   If a burstable instance is in the **Stopped** state and has economical mode enabled, it defaults to standard mode after it is started.
    
-   If a burstable instance in the **Stopped** state does not have economical mode enabled, its performance mode is unchanged when you restart it.
    
-   If your account has an overdue payment, unlimited mode is automatically disabled for your burstable instances. It is automatically re-enabled after you pay the bill.
    

## View the performance mode

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  **(Optional)** If the **Unlimited Mode** column is not displayed on the **Instance** page, customize the instance list.
    
    1.  Click the ![自定义列表项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6495558161/p96779.png) icon in the upper-right corner.
        
    2.  In the **Instance List Settings** dialog box, find **Unlimited Mode** in the **Columns Not Displayed** section, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2229737171/p745842.png) icon to the right, and then click **Continue**.
        
4.  In the **Unlimited Mode** column, view the mode of the burstable instance.
    
    -   **Disabled**: The instance is in standard mode.
        
    -   **Enabled**: The instance is in unlimited mode.
        
    

## Enable unlimited mode

If your business occasionally experiences high CPU usage spikes, you can enable unlimited mode.

**Note**

Make sure that the burstable instance is in the **Running** state. Otherwise, you cannot switch its performance mode.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  Find the burstable instance in standard mode and choose one of the following methods:
    
    -   For a single instance: Choose **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801148761/p477856.png)** > **Instance Attributes** > **Enable Unlimited Mode** in the **Actions** column. ![打开性能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1875107961/p549624.png)
        
    -   For one or more instances: Select the instances and choose **More** > **Instance Attributes** > **Enable Unlimited Mode** in the lower-left corner of the Instance page.
        
3.  In the **Enable Unlimited Mode** dialog box, select **I am aware of the costs and risks.** and then click **Confirm**.![打开性能确定](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1875107961/p549623.png)
    

## Disable unlimited mode

If the instance's baseline CPU performance meets your business requirements, you can disable unlimited mode.

**Note**

Make sure that the burstable instance is in the **Running** state. Otherwise, you cannot switch its performance mode.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  Find the burstable instance in unlimited mode and choose one of the following methods:
    
    -   For a single instance: Choose **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801148761/p477856.png)** > **Instance Attributes** > **Disable Unlimited Mode** in the **Actions** column. ![关闭突发性能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1875107961/p549617.png)
        
    -   For one or more instances: Select the instances and choose **More** > **Instance Attributes** > **Disable Unlimited Mode** in the lower-left corner of the Instance page.
        
3.  In the **Disable Unlimited Mode** dialog box, click **Confirm**.![关闭性能确定](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1875107961/p549620.png)
    

## FAQs

### **How do I view CPU credit changes?**

On the instance details page of a burstable instance (t5/t6), click the **Monitoring** tab to view **Consumed CPU Credits**, **Accrued CPU Credits**, **Surplus CPU Credit**, and **Advance CPU Credits**.

Be aware that additional fees may apply in unlimited mode. The billing rules are as follows:

-   If an instance uses up its advance CPU credits and continues to consume overdrawn CPU credits, you are billed hourly for the overdrawn credits.
    
-   If an instance consumes advance CPU credits and then, before these credits are paid back, you stop the instance (with economical mode enabled), modify its configuration, release it, or switch it to standard mode, you are charged a one-time fee for the used advance CPU credits.
    

For more information, see [Billing](/help/en/ecs/user-guide/billing#section-lqi-vqf-dsc).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2229737171/p745994.png)

### **How do I** **check when unlimited mode was enabled****?**

Go to the [Operation Logs](https://ecs.console.alibabacloud.com/log/region/cn-hangzhou) page for ECS. For **Operation Name**, select **ModifyInstanceAttribute**, and then click **View Details** for a specific event. In the operation details, a `CreditSpecification` parameter set to `Unlimited` indicates that unlimited mode was enabled.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2229737171/p746015.png)
