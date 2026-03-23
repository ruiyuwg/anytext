Set baseline risk check policies based on policy type, baseline whitelists, or custom weak password rules. Then, run these checks on target servers to obtain accurate, tailored results.

## **Prerequisites**

1.  [Activate baseline risk check](/help/en/security-center/user-guide/authorize-and-activate-cspm#2f4fb040f0t6t).
    
2.  The servers that you want to check must have the Security Center agent installed and be added to Security Center. For more information, see [Install the agent](/help/en/security-center/user-guide/install-the-security-center-agent) and [Manage servers](/help/en/security-center/user-guide/manage-servers#section-szp-09j-9di).
    

## **Set check policies**

The default baseline check policy includes more than 70 baseline check items and checks for several baseline types. You can configure additional check items and policies as needed.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the upper-right corner of the **Risk Governance** > **Cloud Security Posture Management** page, click **Policy Management**.
    
3.  In the **Policy Management** panel, configure baseline check policies as needed.
    
    ### **Configure scan policies**
    
    On the **Baseline Check Policy** tab, you can configure and add scan policies as needed.
    
    -   **Set the baseline scan coverage level.**
        
        Select one or more levels from **High**, **Medium**, and **Low**. This setting applies to all scan policies.
        
    -   **Add scan policies.**
        
        Add standard policies to improve baseline configuration checks for your assets. Or, add custom policies to check for risks in your operating system's custom baseline configurations. Security Center runs baseline checks on your assets based on the policy you create.
        
        1.  Click **Create Standard Policy** or **Create Custom Policy**.
            
        2.  In the **Baseline Check Policy** panel, enter a **Policy Name**, select a **Detection Cycle** and **Check Start Time**, and choose the **Baseline Category** and **Baseline Name** to check.
            
            For more information about baseline check items, see [Baseline check items](/help/en/security-center/user-guide/baseline-check/#section-22c-wk3-yyo).
            
            **Note**
            
            You can customize parameters for some custom baselines as needed.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3865704471/p933151.png)
            
        3.  Select the servers to which the policy applies, and then click **OK**.
            
            **Parameter**
            
            **Description**
            
            **Scan Method**
            
            Select how to scan servers. Options:
            
            -   **Group**: Scan servers by server group. Select one or more groups.
                
            -   **ECS**: Scan ECS instances. Select some or all ECS instances across server groups.
                
            
            **Effective Server**
            
            Select the servers to which this policy applies.
            
            **Note**
            
            -   Newly purchased servers belong to **All Groups** > **Ungrouped** by default. To apply this policy automatically to newly purchased servers, select **Ungrouped**. To create or modify a server group, see [Manage servers](/help/en/security-center/user-guide/manage-servers#task-2228799).
                
            -   You can assign only one custom policy per server group. If a server group already has a custom policy, that group appears dimmed and cannot be selected when creating a new custom policy.
                
            
        
        After you finish configuring a scan policy, you can click **Actions** > **Edit** or **Delete** to modify or remove it.
        
        **Note**
        
        Deleted policies cannot be restored.
        
        You cannot delete the **Default Policy** or change its baseline check items. You can only change the **Check Start Time** and the **Effective Server**.
        
    
    ### **Configure custom weak passwords**
    
    Security Center provides built-in weak password rules. You can customize these rules. Security Center then uses your custom rules to check your assets for weak password risks.
    
    On the **Custom Weak Password Rule** tab, you can add or generate new custom weak password rules by uploading a file or using a custom dictionary.
    
    **Important**
    
    -   File upload limits:
        
        -   Files must not exceed 40 KB.
            
        -   Each line must contain exactly one weak password. Multiple passwords per line result in inaccurate detection.
            
        -   Files can contain up to 3,000 weak passwords.
            
        -   Uploaded files **overwrite all** existing custom weak password rules.
            
    -   The custom dictionary supports two modes: **Overwrite** and **Add**.
        
    
    ### **Generate new custom weak password rules by uploading a file**
    
    Security Center checks your assets for weak password risks using your uploaded rules.
    
    1.  On the **Upload File** tab, click **Download Template**, and then add your custom weak passwords to the downloaded template.
        
    2.  Click the **Drag and Drop File to Upload** area to upload the template and complete the configuration.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3865704471/p933174.png)
    
    ### **Use the custom dictionary to overwrite or add custom weak password rules**
    
    1.  On the **Custom Dictionary** tab, click **Generate** (if you are generating a dictionary for the first time) or **Regenerate**.
        
    2.  Configure the custom dictionary with your asset's **Domain Name**, **Company name:**, and **Keyword** to include in the weak password dictionary.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3865704471/p933188.png)
        
    3.  Click **Generate Weak Password in Dictionary**.
        
        You can view all generated weak passwords in the **Weak Password in Dictionary** section. You can manually add, edit, or delete weak passwords.
        
    4.  Complete the dictionary configuration using one of the following methods:
        
        -   Click **Add**, and then click **OK** to add the generated dictionary to your existing weak password rules.
            
        -   If you are regenerating the dictionary, click **Overwrite**, and then click **OK** to replace all existing weak password rules.
            
    
    ### **Configure baseline whitelists**
    
    If a baseline check item does not pose a security risk to some or all of your servers, you can add the item to the **Baseline Whitelist**. During subsequent baseline checks, Security Center ignores the risks that are related to the whitelisted item on the specified servers.
    
    1.  On the **Whitelist Policy** > **By Host Baseline** tab, click **Create Rule**.
        
    2.  In the **Create Baseline Whitelist Rule** panel, select the **Check Item Type** and the corresponding **Check Item**.
        
    3.  Select the **Rule Scope**: **All Servers** or **Specific Servers**.
        
    4.  Click **Save**.
        
    5.  Optional: On the **Baseline Whitelist** tab, find the rule that you want to manage:
        
        -   Click **Actions** > **Edit** to update the **Rule Scope**, or add or remove servers from the whitelist.
            
        -   Click **Actions** > **Delete** to remove the rule. After the rule is removed, baseline checks for the item resume on the specified servers.
            
    

## **Execute a baseline check policy**

Baseline checks support scheduled automatic checks and on-demand manual checks:

-   **Scheduled automatic checks**: Security Center runs baseline checks automatically based on your default, standard, or custom policies. The default policy runs a full check every two days between 00:00 and 06:00, or at the check start time that you specify.
    
-   **On-demand manual checks**: If you create or modify a check policy, you can run an immediate check to view baseline risks in real time. To do this, go to the **Baseline Check** page, click the **Baseline Check Policy** tab, select the policy, and then run an immediate check.
    

To run an immediate baseline check, go to the **Risk Governance** > **CSPM** page, click the **Baseline Risk** tab, and then follow these steps:

-   **(Recommended)** On the **Risk Details** tab:
    
    1.  In the **Check Item Statistics** section, click **Scan Now** on the right.
        
    2.  In the **Scan By Policy** panel, select the target policy, and click **Scan** in the Actions column to run a baseline check.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7464033371/p876547.png)
    
-   On the **Baseline Check Policy** tab:
    
    1.  Click the ![triangle](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8024550661/p469979.png) icon to expand the scan policy menu, and then select the policy that you want to use for an immediate manual check.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3695392471/p876396.png)
        
    2.  Click **Check Item Scan** > **Check Now** on the right.
        
        After the scan starts, the **Check Now** button is disabled until the scan is complete.
        

## **What to do next**

After the baseline check is complete, go to the **Baseline Risk** > **Risk Details** tab to review the details of failed check items. Fix the identified risks promptly. For more information, see [View and fix baseline risks](/help/en/security-center/user-guide/view-and-handle-baseline-risks).
