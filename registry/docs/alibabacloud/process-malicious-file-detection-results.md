When the Security Center software development kit (SDK) for malicious file detection detects a malicious file, such as a webshell, mining program, or trojan horse, on an Elastic Compute Service (ECS) instance or in Object Storage Service (OSS), Security Center generates an alert. This topic describes how to assess risks, select and apply a response, and perform security hardening to complete the emergency response process.

## Choose a handling method

The **Malicious File Detection** service provides multiple methods for handling detected malicious files. You can choose a method based on your business scenario.

**Method**

**Effect duration**

**Impact on subsequent scans**

**Scenarios**

**Add to whitelist**

Permanent

Files that match a whitelist rule are automatically marked as **Added to Whitelist** and no longer trigger DingTalk robot notifications.

Use this for files that are required for your business and that you want to permanently allow.

**Ignore**

This time only

No impact.

Use this for temporary or low-priority alerts, or for potential false positives that require further analysis.

**Block access**

Permanent

The current file is no longer scanned.

Use this for OSS files that are confirmed to be malicious and must be immediately isolated to prevent access.

**I have handled it manually**

This time only

No impact.

Use this when you have already handled the threat by other means, such as logging on to the server to manually delete the file.

## **Investigate and assess risks**

1.  Log on to the [Security Center console - Risk Governance - Malicious File Detection](https://yundun.console.alibabacloud.com/?p=sas#/sdk/risk/ap-southeast-1). In the top-left corner of the page, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  Go to the file details page.
    
    -   On the **At-risk File Overview** tab, find the file that you want to manage and click **Details** in the **Actions** column.
        
    -   On the **OSS File Check** tab:
        
        1.  Set the **Whether Risk is Detected** filter to **At Risk**. Then, find the bucket that you want to manage and click **Details** in the **Actions** column.
            
        2.  In the **At-risk File Details** section of the details page, find the file that you want to manage and click **Details** in the **Actions** column.
            
3.  Assess the business impact.
    
    Review information such as File Path, Associated Process, and **First Discovered Time**. Use the following methods to perform a comprehensive assessment:
    
    -   **Confirm file ownership**: Contact your developers or O&M engineers to confirm whether the file is a normal business file, a test file, or a known unnecessary file.
        
    -   **Trace the file source**: Check the directory environment. For example, if the file is in an open-source application directory, such as WordPress, check whether the application has known vulnerabilities and whether the file is a back door created by an exploit.
        
    -   **Review official recommendations**: On the details page, in the **Incident Description** section, view the analysis and handling guidance provided by the system.
        

## **Perform handling operations**

You can handle detected malicious files in the Security Center console or handle the files manually based on the suggestions on the details page. The following sections describe how to handle malicious files in the console.

### **Handling steps**

1.  Go to the handling page.
    
    -   On the **At-risk File Overview** tab, set the filter to **Unhandled**. Then, find the file that you want to manage and click **Handle** in the **Actions** column.
        
    -   On the **OSS File Check** tab:
        
        1.  Set the **Whether Risk is Detected** filter to **At Risk**. Then, find the bucket that you want to manage and click **Details** in the **Actions** column.
            
        2.  In the **At-risk File Details** section of the details page, find the file that you want to manage and click **Handle** in the **Actions** column.
            
2.  **Handling threat files**
    
    1.  Configure a **Handling Method**.
        
        In the **Malicious Script Handling** dialog box, choose a handling method based on your risk assessment and configure the related rules. For more information, see [Detailed handling methods](#64e9bdc9eb0et).
        
    2.  Configure batch processing (Optional).
        
        To handle multiple similar alerts at the same time, select **Handle similar alerts simultaneously**.
        
        1.  On the **Same File Content** or **Same Alert Type** tab, click **Show** to view the details of similar alerts.
            
        2.  Based on your business scenario and the similar alert information, determine which alerts to handle at the same time.
            
            1.  **Based on same file content**: all alerts for files that have the same SHA256 hash.
                
            2.  **Based on same alert type**: all alerts for the same risk type, such as "Webshell", that are detected by the same DPI engine.
                

### **Detailed handling methods**

#### **Add to Whitelist**

-   Set a whitelist rule.
    
    1.  On the **Add to Whitelist** tab, click **Create Rule** to add a rule.
        
    2.  Configure rule details.
        
        **Important**
        
        If you set multiple rules, the rules are joined by an OR operator. The file is added to the whitelist if it matches any of the rules.
        
        Each rule has four configuration fields from left to right. The following list describes the fields:
        
        1.  **File Information Field**: You can match files by file name, file MD5, SHA256, or the name of the bucket where the file is located.
            
        2.  **Condition Type**: You can use operations such as regular expression match, equals, and contains. The following list provides configuration examples:
            
            -   **Regular expression example**: To match all temporary files that end with `.tmp`, you can set the file information field to **File Name**, the condition type to **Regular Expression Match**, and the condition value to `.*\.tmp$`.
                
            -   **File name matching**: To match all temporary files whose file names contain `post`, set the file information field to **File Name**, the condition type to **Contain**, and the condition value to `post`.
                
        3.  **Condition Value**: You can use constants and regular expressions.
            
-   **Handling details**:
    
    -   The status of the current file is changed to **Added to Whitelist**.
        
    -   This operation creates a whitelist rule. You can view and manage the rule on the **Policy Configuration** page of the console. For more information, see [Manage whitelists](#a8fc716c033do).
        
    -   When a malicious file that matches the whitelist rule is detected again, its status is automatically set to **Added to Whitelist**, and no DingTalk robot notification is sent.
        
-   **Security recommendations**
    
    -   **Use exact matches**: To prevent real malicious files from being added to the whitelist by mistake, use **File MD5** or **SHA256** for matching.
        
    -   **Use full path matching**: To match by filename, use a combination of **Bucket Name** and **File Name Match** to prevent the creation of an overly broad rule.
        

#### **Denied Access**

**Important**

This method is available only for OSS files.

-   **Handling details**:
    
    -   The status of the current file is changed to **Denied Access**. Files that have the same content will not be scanned in the future.
        
    -   An `mfd_forbidden` tag and the following bucket policy are added to the file to block access and operations.
        
        **Note**
        
        -   You can view the tag and policy in the OSS console. For more information, see [Restore a file with blocked access](#a171dfb0c4ncs), [Object tagging](/help/en/oss/user-guide/object-tagging-8), and [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).
            
        -   If you have already deleted the file in the OSS console, the tag and policy are not added.
            
        
        ```
        {
        		"Effect": "Deny",
        		"Action": [
        			"oss:GetObject"
        		],
        		"Principal": [
        			"*"
        		],
        		"Resource": [
        			"acs:oss:*:*:${BucketName}/*"
        		],
        		"Condition": {
        			"StringEquals": {
                		"oss:ExistingObjectTag/mfd_forbidden": [
        					"true"
        				]
        			}
        		}
        	}
        ```
        
-   **Security recommendation**:
    
    This operation may interrupt business functions that depend on the file. Before you perform this operation, make sure that no normal business functions rely on this file.
    

#### Ignored

-   **Handling details**:
    
    This operation marks only the current alert as "Ignored". This is an alert status management operation and does not resolve the underlying security issue that triggered the alert.
    
-   **Security recommendations**:
    
    -   Use this option only after you confirm that the alert is a false positive or an accepted risk. This helps prevent real attacks from being overlooked.
        
    -   Periodically review the list of ignored alerts, for example, weekly or monthly.
        
    -   To stop receiving this type of alert, use the **Add to whitelist** feature.
        

#### **Manually Handled**

-   **Handling details**: This operation updates the status of the detected file to **Manually Handled**. This operation does not verify the actual security status of the file.
    
-   **Security recommendation**: Select this option after you have handled the file by other means, such as logging on to the server to manually delete the file.
    

## **Manage handling results**

### **Change the handling method**

1.  Log on to the [Security Center console - Risk Governance - Malicious File Detection](https://yundun.console.alibabacloud.com/?p=sas#/sdk/risk/ap-southeast-1). In the top-left corner of the page, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  Open the Change Status dialog box.
    
    1.  Find the file that you want to manage.
        
        -   On the **At-risk File Overview** tab, set the filter to a handled status, such as **Added to Whitelist**, and then find the file that you want to manage.
            
        -   On the **OSS File Check** tab:
            
            1.  Set the **Whether Risk is Detected** filter to **At Risk**. Then, find the bucket that you want to manage and click **Details** in the **Actions** column.
                
            2.  In the **At-risk File Details** section of the details page, set the filter to a handled status, such as **Added to Whitelist**, and then find the file that you want to manage.
                
    2.  **Perform the operation**
        
        Click **Change Status** in the **Actions** column of the file that you want to manage.
        
3.  **Change the handling method**
    
    In the Change Status dialog box, select a new handling method and configure the related rules. For more information, see [Handle the malicious file](#61ad0add5dame).
    
    **Important**
    
    You can reset the status to **Unhandled**.
    

### **Revoke whitelisting or ignoring**

-   **Method 1: Reset the status**
    
    Follow the instructions in [Change the handling method](#02e55522b7xeh) to change the handling method to **Unhandled**.
    
-   **Method 2: Use the** **Remove from Whitelist** **and** **Cancel Ignore** **operations**
    
    1.  Find the file that you want to manage.
        
        -   On the **At-risk File Overview** tab, set the filter to **Added to Whitelist** or **Ignored**, and then find the file that you want to manage.
            
        -   On the **OSS File Check** tab:
            
            1.  Set the **Whether Risk is Detected** filter to **At Risk**. Then, find the bucket that you want to manage and click **Details** in the **Actions** column.
                
            2.  In the **At-risk File Details** section of the details page, set the file status filter to **Added to Whitelist** or **Ignored**, and then find the file that you want to manage.
                
    2.  **Perform the cancel operation**
        
        Select the checkboxes of the files that you want to manage, and then click **Remove from Whitelist** or **Cancel Ignore** at the bottom-left of the list.
        

### **Restore a file with blocked access**

-   **Method 1: Reset the status**
    
    Follow the instructions in [Change the handling method](#02e55522b7xeh) to change the handling method to **Unhandled**.
    
-   **Method 2: Handle manually in the OSS console**
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). Then, click the name of the target bucket.
        
    2.  **Remove tags**
        
        1.  In the navigation pane on the left, choose **Objects**. In the Actions column of the target file, click **![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9371173671/p1027779.jpg)** > **Tags**.
            
        2.  On the Tags page, remove the corresponding `mfd_forbidden` tag.
            
    3.  **Delete the authorization policy (Use with caution)**
        
        **Warning**
        
        This operation affects all files that have the `mfd_forbidden` tag. Do not perform this operation unless necessary.
        
        1.  In the navigation pane on the left, choose **Permission Control** > **Bucket Policy**.
            
        2.  On the **Bucket Policy** page, on the **Add by Syntax** tab, delete the [syntax related to mfd\_forbidden](#6d8b31ca51db2).
            

### **Manage whitelists**

-   **Add or modify rules**
    
    1.  In the upper-right corner of the **Policy Management** page, click the **Whitelists** tab. Then, click **Add Rule** or click **Edit** in the Actions column of the target rule.
        
    2.  Follow the instructions in [Configure rule details](#122b89f6a9vdq) to complete the configuration, and then click **OK**.
        
-   **Delete rules**
    
    In the upper-right corner of the **Policy Management** page, click the **Whitelists** tab. Then, find the rule that you want to delete and click **Delete** in the Actions column.
    
    **Important**
    
    After you delete a whitelist rule, the status of files that are already on the whitelist does not change. However, files that match the rule will no longer be automatically added to the whitelist.
