To prevent business losses caused by outbound transfers of sensitive files over multiple channels, we recommend that you use the asset mapping feature of Secure Access Service Edge (SASE). The feature can monitor file content and structures and intelligently generate rules to help you detect and control outbound file transfers. This topic describes how to create and manage an asset mapping task.

## **Prerequisites**

-   Internet Access DLP of SASE is purchased. For more information, see [Billing overview](/help/en/sase/product-overview/billing-overview) and [Get started with SASE](/help/en/sase/getting-started/how-to-use-the-office-security-platform).
    
-   Information about your employees and departments is added. For more information, see [Connect an LDAP IdP to SASE](/help/en/sase/user-guide/connect-an-ldap-identity-source#task-2037093) and [Configure a user group](/help/en/sase/user-guide/manage-user-groups#section-l42-a13-48u).
    
-   The version of the SASE client that is installed on terminals is V4.3.1 or later.
    

## **Step 1: Create an asset mapping task**

Before you use the functionalities of the asset mapping feature in SASE, you must create and run an asset mapping task to scan files on terminals.

-   A scheduled asset mapping task scans the files on terminals on a regular basis.
    
-   An immediate asset mapping task immediately scans the files on terminals. An immediate asset mapping task is valid for 72 hours. If a user does not log on to the SASE client during the validity period, the system cannot scan the files on the terminal of the user.
    

## Create an immediate asset mapping task

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Data Loss Prevention** > **Asset Map**.
    
3.  On the **Asset Map** page, click **Start Asset Mapping**.
    
4.  In the **Start Asset Mapping** panel, configure the following parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    The name of the asset mapping task.
    
    **Report by Sensitivity Level**
    
    The sensitivity level of the files that are reported. The system classifies files by sensitivity level based on identification rules and reports only the files of the specified sensitivity level.
    
    **Scan Mode**
    
    The scan mode for the task.
    
    -   **Quick Scan**: scans the key paths of the system, including the services, drivers, startup items, running processes, downloads directory, desktop directory, and documents directory.
        
    -   **Custom Scan**: scans the paths that you specify. You can specify multiple paths.
        
        -   **Instructions**
            
            1\. A file path is supported.
            
            2\. A folder path is supported.
            
            3\. A system drive letter is supported.
            
            4\. A Windows environment variable is supported.
            
        -   **Examples**
            
            1\. Example value for scanning a file path: C:\\scan\_dir\\scan\_file.exe.
            
            2\. Example value for scanning all files in a folder: C:\\scan\_dir.
            
            3\. Example value for scanning all files in a disk: C:\\.
            
            4\. Example value for scanning all files in the APPDATA folder: %APPDATA%.
            
    -   **Full Disk Scan**: scans all files.
        
    -   **Excluded Scan Path**: the paths that are not scanned.
        
    
    **Performance Preference**
    
    The performance preference mode for the task. The resource consumption of the task varies based on the mode. You can select one of the following modes:
    
    -   **Experience First**: In this mode, resource consumption is minimized to maintain an optimal user experience. In specific cases, scan tasks may be suspended or canceled.
        
    -   **Balanced Mode**: In this mode, resources are evenly allocated between system performance and security scanning to ensure that scan tasks are complete without affecting the user experience.
        
    -   **Security First**: In this mode, scan tasks are preferentially run to ensure security but more resources are consumed.
        
    
    **Applicable User**
    
    The applicable user group for the task.
    
    1.  **All Users**: The task is applicable to all users whose terminals are installed with the SASE client.
        
    2.  **Some Users**: The task is applicable to specific users. You must select the user groups whose terminals you want to scan.
        
    
    **Exception User**
    
    The users who are excluded from the task. You can enter multiple usernames. Separate multiple usernames with commas (,).
    

## Create a scheduled asset mapping task

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Data Loss Prevention** > **Asset Map**.
    
3.  On the **Asset Map** page, click **Asset Mapping Tasks**.
    
4.  On the **Asset Mapping Tasks** page, click **Create Asset Mapping Task**.
    
5.  In the Create Scheduled Asset Mapping Task panel, configure the following parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    The name of the task.
    
    **Priority**
    
    The priority of the task. Valid values: 1 to 100. A small value indicates a high priority.
    
    **Report by Sensitivity Level**
    
    The sensitivity level of the files that you want to report. The system classifies files by sensitivity level based on identification rules and reports only the files of the specified sensitivity level. For more information about identification rules, see [Configure identification rules for files transferred outbound](/help/en/sase/user-guide/configure-classification-and-classification-detection-rules-for-outgoing-files).
    
    **Status**
    
    Specifies whether to enable the task.
    
    **Scan Mode**
    
    The scan mode for the task.
    
    -   **Quick Scan**: scans the key paths of the system, including the services, drivers, startup items, running processes, downloads directory, desktop directory, and documents directory.
        
    -   **Custom Scan**: scans the paths that you specify. You can specify multiple paths.
        
        -   **Instructions**
            
            1\. A file path is supported.
            
            2\. A folder path is supported.
            
            3\. A system drive letter is supported.
            
            4\. A Windows environment variable is supported.
            
        -   **Examples**
            
            1\. Example value for scanning a file path: C:\\scan\_dir\\scan\_file.exe.
            
            2\. Example value for scanning all files in a folder: C:\\scan\_dir.
            
            3\. Example value for scanning all files in a disk: C:\\.
            
            4\. Example value for scanning all files in the APPDATA folder: %APPDATA%.
            
    -   **Full Disk Scan**: scans all files.
        
    -   **Excluded Scan Path**: the paths that are not scanned.
        
    
    **Frequency**
    
    The frequency for running the task.
    
    **Performance Preference**
    
    The performance preference mode for the task. The resource consumption of the task varies based on the mode. You can select one of the following modes:
    
    -   **Experience First**: In this mode, resource consumption is minimized to maintain an optimal user experience. In specific cases, scan tasks may be suspended or canceled.
        
    -   **Balanced Mode**: In this mode, resources are evenly allocated between system performance and security scanning to ensure that scan tasks are complete without affecting the user experience.
        
    -   **Security First**: In this mode, scan tasks are preferentially run to ensure security but more resources are consumed.
        
    
    **Applicable User**
    
    The applicable user group for the task.
    
    1.  **All Users**: The task is applicable to all users whose terminals are installed with the SASE client.
        
    2.  **Some Users**: The task is applicable to specific users. You must select the user groups whose terminals you want to scan.
        
    
    **Exception User**
    
    The users who are excluded from the task. You can enter multiple usernames. Separate multiple usernames with commas (,).
    

## **Step 2: View the asset mapping task**

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Data Loss Prevention** > **Asset Map**.
    
3.  On the Asset Map page, click **Task Management**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2877403471/p913996.png)
    
4.  On the **Task Management** page, view the immediate and scheduled asset mapping tasks that are created.
    
    -   You can filter tasks by **Scan Mode**, **Performance Preference Mode**, and **Task Status**.
        
    -   Click **Cancel Task** in the **Actions** column to cancel a task.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2877403471/p914146.png)
    

## **Step 3: View the reported files**

The system runs an asset mapping task to scan the files on terminals and report files of the specified sensitivity level. You can view the file information in the file list.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Data Loss Prevention** > **Asset Map**.
    
3.  On the **Asset Map** page, view the file information.
    
    1.  You can filter files by time range, sensitivity level, file name, username, department, device name, device IP address, and device Media Access Control (MAC) address.
        
    2.  Click **Preview** in the **Actions** column to preview file content.
        

## **Related operations**

### **Run an intelligent learning task to generate rules**

After you complete an asset mapping task, you can select files whose data is more reliable to perform foundation model-based intelligent learning and generate identification rules. Then, you can add the identification rules to the intelligent recommendation library to facilitate identification rule configuration. For more information about how to configure the intelligent recommendation library, see [Configure identification rules for files transferred outbound](/help/en/sase/user-guide/configure-classification-and-classification-detection-rules-for-outgoing-files).

**Important**

SASE provides the first-time users of the foundation model-based intelligent learning feature with three sessions free of charge. If the three sessions are exhausted, SASE provides you with an additional session free of charge each month.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Data Loss Prevention** > **Asset Map**.
    
3.  On the Asset Map page, click **Intelligently Generate Rule**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2877403471/p914203.png)
    
4.  In the **Intelligently Generate Rule** panel, click **Start New Learning Task**. Configure the parameters for the intelligent learning task and click **Start**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Files for Learning**
    
    The number of files that are used for learning. If you want to obtain more effective and precise rules, make sure that the files for learning are no less than 5,000.
    
    **Detected At**
    
    The time period when the files are detected. The system uses the files that are reported within the time period for learning.
    
    **File Size**
    
    The size of the files that are used for learning. Files that are 10 KB or larger in size can be filtered.
    
    **File Format**
    
    Documents in the following formats are supported: .ppt, .pptx, .pptm, .keynote, .key, .pages, .page, .dps, .xls, .xlsx, .xlsm, .xlam, .xlsb, .csv, .numbers, .lbx, .et, .doc, .docx, .docm, .dotm, .wps, .pdf, and .ofd.
