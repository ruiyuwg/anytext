To meet the security needs of different business scenarios, the application protection feature provides monitoring and protection modes. It also offers tiered attack detection rules and various protection policy groups, such as the business first group, to provide fine-grained security protection. This topic describes protection policies and how to configure them.

## **Protection modes**

The application protection feature provides the following two protection modes:

-   **Monitor**: Monitors attack behavior but does not block it. When an attack is detected, an alert with the action set to **Monitor** is generated.
    
-   **Block**: Monitors and blocks attack behavior, and also monitors important operations. When an attack is blocked, an alert with the action set to **Block** is generated.
    

When you create an application group, the protection mode is set to **Monitor** by default. We recommend that you run the application group in **Monitor** mode for 2 to 5 days. If no false positives are reported, you can switch the protection mode to **Block**. If false positives are reported, you can add protection whitelist rules to ignore the detection types that cause the false positives. For more information, see [Add an alert to a whitelist](/help/en/security-center/user-guide/alert-handling#8b1fe9f78b551).

## **Protection policy groups**

### **Default protection policy groups**

To meet the security needs of different business scenarios, the application protection feature provides tiered attack detection rules and the following built-in protection policy groups: Business First (default loose rule group), Normal Operations (default standard rule group), and Protection First (default strict rule group).

The detection mode is the same for all rules within a default protection policy group. For example, all attack rules in the Business First (default loose rule group) use the Loose detection mode. You can use the appropriate rule group or create a custom rule group as needed.

### **Detection modes**

To balance the false positive rate and attack protection strength for different business scenarios, the application protection feature defines multiple detection modes: Loose, Standard, and Strict. These modes are listed in ascending order of protection capability and false positive rate.

-   Loose: Covers only known attack features and has a very low false positive rate.
    
-   Standard (default): Covers common attack features and has some generalized inference capabilities. This mode is suitable for daily O&M scenarios.
    
-   Strict: Detects more hidden attack behaviors. This mode is suitable for major event support scenarios but has a certain risk of false positives.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5057726371/p751576.png)

### **Create a protection policy group**

If the built-in protection policy groups do not meet your needs, you can create a custom policy group. You can also click **Copy** in the Actions column for an existing protection policy group to quickly create a new one.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Protection Configuration** > **Application Protection**. In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Application Configurations** tab, click **Management Settings** in the upper-right corner.
    
4.  In the **Management Settings** panel, on the **Manage Protection Policy** tab, click **Create Protection Policy Group**.
    
5.  In the **Create Protection Policy Group** panel, enter a name for the policy group, select an application language, and click **Select** to the right of **Threat Type** to configure detection types.
    
6.  In the **Select Threat Type** panel, select the required detection types, set the **Detection Mode**, and then click **OK**.
    
    For example, if you encounter many false positives for SQL injection in existing alerts, you can change the detection mode for the SQL injection check item to **Loose**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7204023371/p751598.png)
    
7.  Click **OK**.
    

## **Configure a protection whitelist**

### **Add a protection whitelist rule based on an alert**

If you confirm that an attack alert is a false positive triggered by legitimate business access, you can add the alert to the protection whitelist to prevent similar alerts. When you add an alert to the protection whitelist, a rule is automatically created based on the alert information. This rule applies to the application group that contains the attacked process. For more information, see [Add an alert to a whitelist](/help/en/security-center/user-guide/alert-handling#594c382ca4w8z).

### **View the list of protection whitelist rules**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Protection Configuration** > **Application Protection**. In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Application Configurations** tab, click **Management Settings** in the upper-right corner.
    
    Alternatively, on the **Attack Alerts** tab, click **Protection Whitelist** to view the list of protection whitelist rules.
    
4.  In the **Management Settings** panel, on the **Protection Whitelist** tab of the **Manage Protection Policy** tab, you can view the list of whitelist rules.
    
    You can manage whitelist rules in the following ways:
    
    -   Enable or disable: Toggle the switch in the **Rule Switch** column for a whitelist rule to enable or disable it.
        
    -   Edit or delete: Click **Edit** or **Delete** in the Actions column for a whitelist rule to modify or delete it.
        

### **Create a protection whitelist**

You can create a whitelist rule to ignore multiple detection types across multiple application groups.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Protection Configuration** > **Application Protection**. In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Application Configurations** tab, click **Management Settings** in the upper-right corner.
    
    Alternatively, on the **Attack Alerts** tab, click **Protection Whitelist**.
    
4.  In the **Management Settings** panel, on the **Protection Whitelist** tab of the **Manage Protection Policy** tab, click **Create Whitelist**.
    
5.  In the **Create Whitelist** panel, configure the whitelist rule and click **OK**.
    
    The following table describes some of the parameters. For information about other parameters, see the instructions in the console.
    
    -   **Match Method**: Select a match method for the whitelist rule. The following match methods are available:
        
        -   **Exact Match**: Alerts are not generated if the transmitted content is identical to the match content.
            
        -   **Partial Match**: Alerts are not generated if the transmitted content contains the match content.
            
        -   **Prefix Match**: Alerts are not generated if the transmitted content starts with the match content.
            
        -   **Suffix Match**: Alerts are not generated if the transmitted content ends with the match content.
            
    -   **Content to Match**: Specify the content to match based on the selected match method. You can use the value of **Malicious Characteristics**, **Specified Parameters**, or **Request URL** from the alert details page as the match content.
        

## **Modify the protection policy for an application group**

To modify the protection policy for an application group, perform the following steps.

1.  On the **Application Configurations** tab of the **Application Protection** page, click **Protection Policy** in the Actions column for the desired application group.
    
2.  In the **Protection Policy** panel, modify parameters such as **Protection Status**, **Protection Mode**, **Protection Policy Group**, **Detection Policy**, and **Common Settings**.
    
3.  Click **OK**.
    
4.  (Optional) On the **Application Configurations** tab, you can perform batch operations as described below.
    
    -   Change to protection mode: Select one or more application groups and click **Protect All** below the list to change the protection mode of the selected application groups to **Block**.
        
    -   Change to Monitoring mode: Select one or more application groups and click **Monitor All** below the list to change the protection mode of the selected application groups to ****Monitor****.
        
    -   Disable detection or protection: Select one or more application groups and click **Cancel Protection** below the list to disable the protection capabilities for the selected application groups. This action disables the protection feature for application instances within the selected application groups. No attack behavior is detected or blocked.
        
    -   Enable detection or protection: Select one or more application groups and click **Enable All** below the list to enable the selected application groups.
