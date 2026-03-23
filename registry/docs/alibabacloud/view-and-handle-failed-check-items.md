After completing cloud service configuration checks, view the details of failed check items in the Security Center console. Follow the provided remediation solutions to fix any risky configurations. This will improve your cloud platform's security, performance, and reliability, ensuring smooth business operations and data security.

## View check results

Follow these steps to view the details of failed check items, identify risk items that need attention, and find their corresponding risky cloud services:

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  (Optional) On the **Risk Governance** > **CSPM** > **Risk Overview** tab, select the cloud provider of your assets (or leave it blank to view all) and view the risk data to comprehensively understand your configuration risks. This helps you promptly identify and resolve issues in cloud platform configurations.
    
    As shown in the following figure, the risk overview includes **Detected Threat Types**, ****At-risk Cloud Service Statistics****, **Check Item Pass Rate**, **Trend of Check Item Pass Rate**, **Trend of Asset-based Check**, and **Top 5 Objects with Excessive Permissions**.
    
    In the **At-risk Cloud Service Statistics** area, the pay-as-you-go mode displays **Used Quota**. The subscription mode displays **Remaining Quota**. You can click **Scale Out** to purchase more quotas.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p930412.png)
    
3.  On the ****Risk Governance** **CSPM**** \> ****Cloud Service Configuration Risk**** tab, view the check results for specific check items.
    
    1.  At the top of the page, you can see the **Pass Rate** for each check item. Hover over the pass rate line to view the counts of high-risk (red), medium-risk (orange), low-risk (yellow), and failed (gray) check items. 
        
        **Important**
        
        High-risk items pose major threats to your assets, so we recommend addressing related risks as soon as possible.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932939.png)
        
    2.  View the target risk items.
        
        -   In the ****All Check Items**** list on the left, click the type of check item to see the related risks in the risk list on the right.
            
        -   Use the filtering options above the list to refine your search based on dimensions such as risk level, status, check item name, and check item type.
            
            For instance, you can filter to view risk items that support one-click fixing in Security Center.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3862482471/p857512.png)
            
            You can also click **Fix Now** in the **Check Item Pass Rate** area on the **Risk Overview** tab to go to the ******Cloud Service Configuration Risk****** tab and view threats that support one-click fixing.
            
    3.  In the **Actions** column of the target risk item, click **Details** to view the **Check Item Description**, **Solution**, **Help**, and **Impact** in the check item details panel.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1855240961/p688946.png)
        

## Fix risky configurations

Based on the risk item details viewed above, we recommend referring to the **Solution** and **Help** information to promptly fix risky configurations.

1.  In the **Impact** area of the failed check item details panel, view the cloud services with configuration risks. In the **Actions** column, you can choose to fix or whitelist risks as needed.
    
    ### **Fix risks**
    
    -   **One-click Fix in Security Center**
        
        **Important**
        
        -   You can fix over 100 check items in Security Center. Manually adjust **Parameter Configurations** in the console to modify corresponding check item settings for your instances.
            
            In the **Impact** area, instances with a **Not Passed** status have a **Fix** button in the **Actions** column for one-click fixes. If the button is missing, the check item does not support one-click fixing.
            
            You can filter and view risk items that support one-click fixes in Security Center, as mentioned in the **_View check results_** section above.
            
        -   If your account lacks authorization to modify another account's configurations, click **Authorize** in the dialog box that appears.
            
        -   If there is no notice about rollback restrictions, you can later perform a **Rollback** to restore the previous configuration.
            
        -   After modifying configuration parameters, restart the instance if prompted.
            
        
        Click **Fix** in the **Actions** column of the target instance. In the fix panel, you can view the risky instance information, scan time, and fix parameters. Click **Fix Now**.
        
        If the configuration parameters can be modified, you can click **Check Item Parameters**, set **Edit Parameter** in the **Parameter Configuration** panel, and click **OK** to fix the parameter settings.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932969.png)
        
        You can also select risk items of multiple instances, and click **Fix** at the bottom of the risk list to perform one-click fix for multiple instances.
        
    -   **Fix risks in the target cloud services**
        
        Click the at-risk instance ID, account ID, or a policy name, to go to the console of the cloud service and fix the detected risks.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932970.png)
        
    
    ## Whitelist risks
    
    **Important**
    
    After adding a risk item to the whitelist, Cloud Security Posture Management (CSPM) will stop reporting that risk. Only add items to the whitelist after confirming they pose no threat.
    
    If you find that a detected risk item is safe, click **Add to Whitelist** to whitelist the risk item for the corresponding instance. Whitelisted risk items are not included in the total count of risk items.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932971.png)
    
    You can view whitelisted check items in the **Whitelist Rule** list under **Policy Management**. To remove a risk item from the whitelist, click **Delete**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932972.png)
    
2.  Verify fixes.
    
    If you have modified an instance's configurations based on the fixing suggestions, click **Verify** in the **Actions** column of the target risk item to check if the new configuration poses any security risks.
    
    To perform batch verification, select multiple risk items and click **Verify** at the bottom of the list.
    
    Once the modified configuration is verified and passes the check, the instance's status changes to ****Passed****. When all instance configurations under a risk item pass the verification, the risk item's status changes to **Passed**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932976.png)
    
3.  (Optional) For risk items with one-click fixes, after applying the fix, return to the **CSPM** page and click **Fixing Task Management** in the upper-right corner to view your fix history.
    
    You can view fix task ID, check item, and status, and **Roll Back** or **Verify** the fixes In the **Fixing Task Management** panel.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932973.png)
    
    Click **Details** to view the **Check Item Description**, **Solution**, **Help**, and **Fixing Timeline** of the check item.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749724471/p932974.png)
    

## **References**

-   [GetCheckProcess - Query the progress of a configuration check task](/help/en/security-center/developer-reference/api-sas-2018-12-03-getcheckprocess)
    
-   [AddCheckResultWhiteList - Whitelist check items](/help/en/security-center/developer-reference/api-sas-2018-12-03-addcheckresultwhitelist)
    
-   [ChangeCheckConfig - Modify check items](/help/en/security-center/developer-reference/api-sas-2018-12-03-changecheckconfig)
    
-   [GetCheckConfig - Get check item configurations](/help/en/security-center/developer-reference/api-sas-2018-12-03-getcheckconfig)
    
-   [GetCheckDetail - Get check item details](/help/en/security-center/developer-reference/api-sas-2018-12-03-getcheckdetail)
