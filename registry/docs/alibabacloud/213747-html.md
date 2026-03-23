This topic describes how to use the compliance package template **BestPracticesForECS** to quickly check the compliance of Elastic Compute Service (ECS) instances and deliver resource non-compliance events to Simple Log Service. This example helps you learn how to use Cloud Config to check the resource compliance of an Alibaba Cloud account.

## **Prerequisites**

-   You are using an independent Alibaba Cloud account that is not added to a resource directory by a management account.
    
-   Cloud Config is activated. For more information, see [Activate Cloud Config](/help/en/cloud-config/latest/activate-the-configuration-audit-service).
    
-   An ECS instance is created. For more information, see [Creation methods](/help/en/ecs/user-guide/create-instances/).
    
-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](/help/en/sls/getting-started#section-j4p-xt3-arc).
    
    **Important**
    
    You are not charged when you activate Simple Log Service. Cloud Config delivers resource data to Simple Log Service, and you are charged if you use the query and analysis features of Simple Log Service. For more information, see [Billing overview](/help/en/sls/billing-overview#concept-2086667).
    

## Step 1: View the resource list

After you create an ECS instance in the ECS console, the ECS instance is displayed as a resource on the **Global Resources** page of the Cloud Config console.

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  On the **Global Resources** page, enter the corresponding resource ID or set filter conditions to query the specified resource. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914513.png)
    

## Step 2: Create a compliance package

You can use the default rules in the compliance package template **BestPracticesForECS** to quickly check the compliance of the ECS instance.

1.  In the left-side navigation pane, choose **Compliance & Audit** > **Compliance Package**.
    
2.  On the **Compliance Package** page, click **Create Package**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914514.png)
    
3.  In the **Select Template (Optional)** step, find the compliance package template **BestPracticesForECS**, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5045741961/p689766.png) icon, and then click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914515.png)
    
4.  In the **Set Basic Properties** step, set the name of the compliance package and keep the default values for other parameters. Then, click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914516.png)
    
5.  In the **Select Rules** step, select all rules from the compliance package template **BestPracticesForECS** and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914517.png)
    
6.  In the **Set Rule Parameters** step, set the parameters for the rules and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914518.png)
    
    **Note**
    
    For more information about how to set parameters for the rules, see the **Resource type** column in [Supported resource types and relationships in Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config).
    

## Step 3: View the compliance evaluation results

You can view the evaluation results of the rules in the compliance package and remediate the non-compliant resources.

1.  In the left-side navigation pane, choose **Compliance & Audit** > **Compliance Package**.
    
2.  On the **Compliance Package** page, click the ID of the compliance package created in [Step 2](#section-lbc-wui-i6x).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914519.png)
    
3.  Click **Download Report** in the upper-right corner of the page that appears. In the **Download Compliance Report** message, click **OK**.
    
    Download the compliance report in the Excel format.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914520.png)
    
4.  Open the compliance report in the Excel format. On the **Non-compliant Resources** tab, filter all non-compliant rules by ECS instance ID and perform remediation based on the **Remediation Suggestions** column.
    

## **Step 4: Deliver resource non-compliance events to Simple Log Service**

You can configure the delivery of resource non-compliance events to a specified Logstore of Simple Log Service, and query and analyze the events.

1.  On the **Deliveries** page, click **Create Delivery** in the upper-left corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914521.png)
    
2.  On the **Create Delivery** page, set **Delivery Name**, select **Log Service** for **Channel Type**, **Noncompliance Resource Events** for **Content**, and **Create a new log item in this account** for **Logstore Source**, select an option from the **Project Region** drop-down list, and then set **Project Name** and **Logstore Name**. Retain the default values for Events Of Specified Resource Type, that is, retain all resource types.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7330429371/p914522.png)
    
3.  Click **OK**.
    
    In the Simple Log Service console, a Simple Log Service project is automatically created. A Logstore is automatically created under the project. Resource non-compliance events in Cloud Config are delivered to this Logstore.
    
    **Important**
    
    Cloud Config delivers resource data to Simple Log Service, and you are charged if you use the query and analysis features of Simple Log Service. If you do not want to incur fees, you can delete the Simple Log Service project in the Simple Log Service console. After you delete the Simple Log Service project, the delivery task in Cloud Config becomes invalid and the resource data is no longer delivered. For more information, see [Manage projects](/help/en/sls/manage-a-project/#section-on2-3gx-ndb).
    
4.  View the delivery results of resource non-compliance events, and query and analyze them.
    
    1.  On the **Deliveries** page, click the newly created delivery ID.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5420429371/p914523.png)
        
    2.  In the **Extended Information** section of the page that appears, click the name of the Logstore. You are redirected to the destination Logstore page in the Simple Log Service console.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5420429371/p914524.png)
        
    3.  In the **Error** message, click **Close**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5420429371/p914525.png)
        
        **Note**
        
        The indexing feature is not enabled for a Logstore created in the Cloud Config console by default, and the system reports an error.
        
    4.  Enable the indexing feature for the Logstore.
        
        For more information, see [Create indexes](/help/en/sls/create-indexes).
        
    5.  Query and analyze logs in the Logstore.
        
        For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis).
        
        **Note**
        
        For more information about the example files in the JSON format for resource non-compliance events, see [Example of resource non-compliance events](/help/en/cloud-config/latest/delivery-to-log-service-example-of-resource-non-compliance-events#concept-2108211).
