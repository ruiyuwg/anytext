This topic describes how to use a management account in a resource directory to quickly check the compliance of the buckets of two member accounts in an account group and deliver resource non-compliance events to Simple Log Service by using the compliance package template **BestPracticesForOSS**. As an example, this helps you know how to use Cloud Config to check the resource compliance of multiple accounts.

## **Prerequisites**

-   A resource directory is activated, and two member accounts are created in the resource directory. For more information, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-hyc-zp1-dhb) and [Create a member](/help/en/resource-management/resource-directory/user-guide/create-a-member#task-tzh-bs1-dhb).
    
-   Object Storage Service (OSS) is activated and buckets are created for two member accounts. For more information, see [Get started by using the OSS console](/help/en/oss/user-guide/console-quick-start).
    
-   Cloud Config is activated. For more information, see [Activate Cloud Config](/help/en/cloud-config/latest/activate-the-configuration-audit-service).
    
-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](/help/en/sls/getting-started#section-j4p-xt3-arc).
    
    **Important**
    
    You are not charged when you activate Simple Log Service. Cloud Config delivers resource data to Simple Log Service, and you are charged if you use the query and analysis features of Simple Log Service. For more information, see [Billing overview](/help/en/sls/billing-overview#concept-2086667).
    

## **Background information**

You can use the management account to view the resource list, resource configuration change history, and resource compliance status of all member accounts, and monitor resource configuration compliance. You can use member accounts to view the account group to which they belong, and the rules, compliance packages, and delivery tasks created by using the management account. Member accounts can also be used to check the resource compliance and configure deliveries on the **Current Account** tab.

## Step 1: Create an account group

After you create member accounts in the resource directory, you can create an account group in Cloud Config and add the member accounts to the account group. You can use the account group to centrally manage the resources and compliance of all member accounts in the account group.

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Account Group**.
    
3.  On the **Aggregators** page, click **Create Aggregator**.
    
4.  On the **Create** page, set Account Group Name and Description, select **Custom** for **Account Group Type**, and then click **Add Member**.
    
5.  In the **Resource Directories** section, select the two member accounts that were newly created and click **OK**.
    
6.  Click **Submit**.
    
    In the **Account Group** list, find the account group that you created. If the state of the account group is **Created**, the account group is created.
    

## Step 2: View the resource list

You can view the resources of the two member accounts in the account group across regions.

1.  In the upper-left corner, select the account group that you want to manage.
    
2.  In the left-side navigation pane, choose **Resources** > **Global Resources**.
    
3.  On the **Global Resources** page, enter a resource ID or set filter conditions to query the specified resource.
    

## Step 3: Create a compliance package

You can use the default rules in the compliance package template **BestPracticesForOSS** to quickly check the compliance of the buckets for the member accounts in the account group.

1.  In the left-side navigation pane, choose **Compliance & Audit** > **Compliance Package**.
    
2.  On the **Compliance Package** page, click **Create Package**.
    
3.  In the **Select Template (Optional)** step, find the compliance package template **BestPracticesForOSS**, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5045741961/p689766.png) icon, and then click **Next**.
    
4.  In the **Set Basic Properties** step, set the name of the compliance package and keep the default values for other parameters. Then, click **Next**.
    
5.  In the **Select Rules** step, select all rules from the compliance package template **BestPracticesForOSS** and click **Next**.
    
6.  In the **Set Rule Parameters** step, set the parameters for the rules and click **OK**.
    
    **Note**
    
    For more information about how to set parameters for the rules, see the **Resource type** column in [Alibaba Cloud services and resource types supported by Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config).
    

## Step 4: View the compliance evaluation results

You can view the evaluation results of the rules in the compliance package on the buckets of all member accounts in the account group, and remediate the non-compliant configurations.

1.  In the left-side navigation pane, choose **Compliance & Audit** > **Compliance Package**.
    
2.  On the **Compliance Package** page, click the ID of the compliance package created in [Step 3](#section-lbc-wui-i6x).
    
3.  Click **Download Report** in the upper-right corner of the page that appears. In the **Download Compliance Report** message, click **OK**.
    
    You will obtain a ZIP package. After you decompress the ZIP package, you will obtain two compliance reports in the Excel format that are named by member account ID and member account name.
    
4.  Open the compliance reports in the Excel format. On the **Non-compliant Resources** tab, filter all non-compliant rules by bucket ID or bucket name and perform remediation based on the **Remediation Suggestions** column.
    

## **Step 5: Deliver resource non-compliance events to Simple Log Service**

You can configure the delivery of resource non-compliance events of all member accounts in the account group to a specified Logstore of Simple Log Service, and query and analyze the events.

1.  On the **Deliveries** page, click **Create Delivery** in the upper-left corner.
    
2.  On the **Create Delivery** page, set **Delivery Name**, select **Log Service** for **Channel Type**, **Noncompliance Resource Events** for **Content**, and **Create a new log item in this account** for **Logstore Source**, select an option from the **Project Region** drop-down list, and then set **Project Name** and **Logstore Name**. Retain the default values for Events Of Specified Resource Type, that is, retain all resource types.
    
3.  Click **OK**.
    
4.  In the **Confirm Operation** message, click **OK**.
    
    The newly created delivery task takes effect only on all member accounts in the account group.
    
    In the Simple Log Service console, a Simple Log Service project is automatically created. A Logstore is automatically created under the project. Resource non-compliance events in Cloud Config are delivered to this Logstore.
    
    **Important**
    
    Cloud Config delivers resource data to Simple Log Service, and you are charged if you use the query and analysis features of Simple Log Service. If you do not want to incur fees, you can delete the Simple Log Service project in the Simple Log Service console. After you delete the Simple Log Service project, the delivery task in Cloud Config becomes invalid and the resource data is no longer delivered. For more information, see [Manage projects](/help/en/sls/manage-a-project/#section-on2-3gx-ndb).
    
5.  View the delivery results of resource non-compliance events, and query and analyze them.
    
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
