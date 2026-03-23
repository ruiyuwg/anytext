After Security Center completes baseline checks, review the results organized by baseline or by check item. Follow the fixing suggestions for each risky configuration to strengthen your system security.

## **View check results and suggestions**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner, select the region where your assets are located: **China** or **Outside China**.
    
2.  Go to **Risk Governance** > **CSPM** (Cloud Security Posture Management), then click the **Baseline Risks** tab.
    
3.  On the **Risk Details** tab, view risks and fixing suggestions by check item name.
    
    -   Expand the **Pass Rate** section to view the pass rate of baselines. Hover over the pass rate line to view the counts of high-risk (red), medium-risk (orange), low-risk (yellow), and failed (gray) check items.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933232.png)
        
    -   In the **Check Item Statistics** section, click the number under **Failed** or **Total Check Items Handled** to display the corresponding check items in the list below.
        
        **Note**
        
        Failed check items include data from the last 30 days. Total handled check items cover the last 365 days and exclude released assets.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3695392471/p876515.png)
        
    -   Use the search component above the list to filter check items by risk level, status, and type, or enter the check item name to search.
        
        Click **Actions** > **Details** for a check item to view the **Description**, **Suggestions**, **Related Baselines**, and the list of affected assets.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933528.png)
        
4.  On the **Baseline Check Policy** tab, view risks and fixing suggestions by baseline name.
    
    -   **Check the results of all baseline check policies or a specific policy**
        
        In the policy overview section of the **Baseline Check Policy** tab, click the ![triangle](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8024550661/p469979.png) icon to view all baseline check policies, and select **All Policies** or a specific policy. The tab displays policy information such as **Checked Servers**, **Baselines**, **High Weak Password Risk**, and **Last Check Pass Rate**. By default, the **Baseline Check Policy** tab shows the **Default** policy.
        
        Click the number below **High Weak Password Risk** to view all detected high weak password risks.
        
        **Important**
        
        -   Weak password risks are of **High Risk** severity. Fix these high-risk items as soon as possible. For guidance on improving password security and changing passwords in common systems, see [Reinforce password security](/help/en/security-center/use-cases/reinforce-password-security).
            
        -   The color indicators for the number below **Last Check Pass Rate** have the following meanings:
            
            -   Green: high pass rate of check items.
                
            -   Red: low pass rate of check items. Review the details of each check item and fix the detected baseline risks.
                
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3695392471/p876476.png)
        
    -   **View baseline check results by baseline name**
        
        1.  In the list of baseline check results, click the baseline name to open the details panel. The panel shows affected assets, **Passed Items**, and **Risk Item** for that baseline.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933535.png)
            
        2.  In the baseline details panel, find an affected asset and click **View** in the **Actions** column. The **Risk Item** panel lists all baseline risks for that asset.
            
            **Note**
            
            If a check item is **Passed**, no risks exist in the server's configuration.
            
            For example, if a Redis database has no password but is bound to the IP address 127.0.0.1, access is restricted to the local host. In this case, the baseline check for unauthorized access passes, and no related baseline risks are reported. Decide whether to implement access control policies based on your business requirements.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933537.png)
            
        3.  In the **Risk Item** panel, locate the risk item and click **Details** in the **Actions** column. A message appears with information about the risk item, including **Description**, **Check Tips**, and **Suggestions**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933539.png)
            
        4.  **Optional.** Return to the baseline details panel. In the upper-right corner above the list of baseline check results, click the ![export](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4731864561/p431903.png) icon. In the **Select Baseline Export Task** dialog box, select an export method and click **Export**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933545.png)
            
            The following export methods are available:
            
            -   **Export Weak Password in Plaintext**: Exports check results with weak passwords displayed in plaintext.
                
            -   **Mask and Export Weak Password**: Exports check results with weak passwords masked.
                
            

## **Handle failed check items**

Handle baseline risks by check item on the **Risk Details** tab, or by baseline on the **Baseline Check Policy** tab.

The following example shows how to handle baseline risks by baseline, using the **Suggestions** in the **Risk Item** panel.

1.  After viewing failed check items in the **Risk Item** panel, you can choose from the following operations in the **Actions** column to handle the corresponding risk items:
    
    ### **Fix risk items**
    
    Security Center can fix only some baseline risks. In the **Risk Item** panel, check whether the **Fix** button appears for each risk item.
    
    -   If the **Fix** button does not appear, the baseline risk cannot be fixed in the Security Center console. Log on to the server with the detected baseline risk and modify its configurations. After making changes, click **Verify** to check whether the baseline risk is resolved.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933581.png)
        
    -   If the **Fix** button appears, fix the baseline risk in the Security Center console:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933570.png)
        
        1.  In the **Risk Item** panel, click **Fix** in the **Actions** column for the target check item.
            
        2.  In the **Fix Risks for Assets** dialog box, configure the following parameters and click **Fix Now**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933572.png)
            
            The parameters are described as follows:
            
            **Parameter**
            
            **Description**
            
            **Fixing Method**
            
            The method to fix the baseline risk. The method varies based on the type of baseline risk. Configure this parameter based on your needs.
            
            **Batch Handle**
            
            Specifies whether to handle the same baseline risk for multiple assets at a time.
            
            **System Protection**
            
            Specifies whether to create snapshots to back up your system data.
            
            **Warning**
            
            Security Center may fail to fix baseline risks, which can impact your workload. Create a backup of your system before attempting to fix these risks. If Security Center fails to fix the risks, use the backup to restore your system to a previous snapshot.
            
            Two options are available:
            
            -   **Automatically Create Snapshot and Fix Risk** -- Requires the **Snapshot Name** and **Snapshot Retention Period** parameters. Snapshots incur charges. Click **Snapshot billing** to view the billing methods of the snapshot service.
                
            -   **Skip Snapshot and Fix** -- No snapshots are created before fixing baseline risks.
                
            
    
    #### **Roll back a fix**
    
    Before fixing baseline risks for an ECS instance, create a snapshot of the instance. This allows you to roll back the instance if a service interruption occurs due to unsuccessful risk resolution.
    
    To perform a rollback:
    
    1.  In the baseline details panel, locate the instance and click **Rollback** in the **Actions** column.
        
    2.  In the **Rollback** dialog box, select the snapshot and click **OK**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933602.png)
    
    The instance configurations are restored based on the snapshot.
    
    ### **Add to whitelist**
    
    If a check item with a status of **Not Passed** is trusted for a server, add it to the whitelist. Alerts generated for that check item on the server are then ignored.
    
    **Important**
    
    After adding a check item for a server to the whitelist, the corresponding baseline risks detected on that server are ignored.
    
    For example, if a non-root account is used to log in to an instance and this is necessary for normal workloads, add the risk item to the whitelist.
    
    **Add from the Risk Item panel**
    
    In the **Risk Item** panel of the server to manage, find the baseline check item and click **Add to Whitelist** in the **Actions** column. In the dialog box, specify the reason and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4865704471/p933599.png)
    
    To add multiple baseline check items to the whitelist, select the check items in **Not Passed** status and click **Add to Whitelist** in the lower-left corner.
    
    **Add from the Risk Details tab**
    
    -   **Whitelist specified check items for all assets**: On the **Risk Details** tab, find the baseline check item and click **Add to Whitelist** in the **Actions** column. To whitelist multiple items, select them and click **Add to Whitelist** in the lower-left corner of the check item list.
        
    -   **Whitelist specific assets for a single check item**: On the **Risk Details** tab, find the check item and click **Details** in the **Actions** column. In the details panel, select the servers to whitelist and click **Add to Whitelist** in the lower-left corner of the server list.
        
    
    #### **Remove from whitelist**
    
    To make a baseline check item trigger alerts again, remove it from the whitelist or add the previously removed servers back to the affected servers of the associated baseline check policy.
    
    In the **Risk Item** panel, find the check item and click **Remove from Whitelist** in the **Actions** column. In the dialog box, click **OK**. To remove multiple check items, select them and click **Remove from Whitelist** in the lower-left corner.
    
2.  Verify the handling results.
    
    In the **Risk Item** panel, find the baseline check item and click **Verify** in the **Actions** column. Check whether the baseline risk on the server is fixed. If the verification succeeds, the risk item count in the **Risk Item** column decreases, and the status of the risk item changes to **Passed**.
    
    **Note**
    
    Without manual verification, Security Center automatically checks whether the baseline risk is fixed according to the detection interval specified in your baseline check policy.
