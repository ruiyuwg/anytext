If applications provided by Alibaba Cloud Workspace cannot meet your business requirements, you can upload in-house applications of your enterprise or third-party applications to Elastic Desktop Service (EDS). This topic describes how to upload and manage your in-house or third-party applications.

## Upload an application

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Apps** > **Apps**.
    
3.  On the **Apps** page, click **Add**.
    
4.  In the **Upload App** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Application Type
    
    The type of the application that you want to upload. Valid values: **Cloud Computer Apps** and **Web Apps**.
    
    Name
    
    The name of the application.
    
    Version
    
    The version of the application.
    
    Developer
    
    The developer of the application.
    
    Description
    
    The purpose and features of the application.
    
    Details
    
    The detailed information about the application.
    
    Icon
    
    The icon of the application. Click **Upload** and select an image from your on-premises computer as the application icon.
    
    **Note**
    
    You can upload a PNG, SVG, JPG, or JPEG image. The image size cannot exceed 1 MB.
    
    Category
    
    The category into which the application falls. Select a value from the drop-down list.
    
    Application Tag
    
    The tags that you want to add to the application. You can quickly search for an application by tag. You can add up to five tags.
    
    Upload Method
    
    The installation method of the application. This parameter is required if you set the Application Type parameter to Cloud Computer Apps.
    
    You can select **Upload File** or **Use OSS Object URL** based on your business requirements.
    
    -   Upload a file
        
        Select **Upload File**, click **View Local File**, and then select a desired file.
        
        **Note**
        
        You can upload only an EXE, MIS, or ZIP file. The file size cannot exceed 5 GB. If the size of the file that you want to upload exceeds 5 GB, we recommend that you select Use OSS Object URL.
        
    -   Use an OSS object URL
        
        1.  Select **Use OSS Object URL**.
            
        2.  Obtain an Object Storage Service (OSS) object URL. You can move the pointer over the question mark (?) next to **Use OSS Object URL** and click **the help documentation** in the tooltip that appears to learn how to obtain an OSS object URL.
            
            ![bt_get_oss_link.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5565576271/p820706.png)
            
        3.  In the **Use OSS Object URL** field, enter the OSS object URL that you obtained in the previous step.
            
    
    Application URL
    
    The URL of the application. This parameter is required if you set the Application Type parameter to Web Apps.
    
    You need to enter the URL of the web application.
    
    Privilege Escalation for Application Installation
    
    After you turn on Privilege Escalation for Application Installation, you can install the application even if you do not have local administrator permissions.
    
    **Note**
    
    Only cloud computers whose images are of V2.0.0 or later support this feature.
    
    Registration Terms
    
    Select **I have read and agree to Non-Infringement Commitment and Disclaimer**.
    

## Modify a self-managed application

1.  In the left-side navigation pane, choose **Apps** > **Apps**.
    
2.  On the **Apps** page, find the desired application and click **View Details** in the **Actions** column.
    
3.  In the **View Details** dialog box, click **Modify**.
    
4.  In the **Modify** panel, modify the application information, such as the name, developer, or description of the application, based on your business requirements and click **OK**.
    

## Modify the version information or upload a new version

If a self-managed application has a new version released, you can modify the version information or upload a new version.

1.  In the left-side navigation pane, choose **Apps** > **Apps**.
    
2.  On the **Apps** page, find the desired application and perform the following operations based on your business requirements:
    
    ### **Cloud computer applications**
    
    -   Modify the current version
        
        1.  Click the drop-down arrow in the leftmost column. In the panel that appears, click **Edit** in the **Actions** column.
            
        2.  In the **Modify Version** panel, update the version information and click **OK**.
            
    -   Upload a new version
        
        1.  In the **Actions** column, click the ⋮ icon and select **Upload**.
            
        2.  In the **Upload** panel, configure the parameters and click **OK**.
            
        3.  On the **Apps** page, find the application, click the drop-down arrow in the leftmost column, find the new version that you uploaded in the previous step, and then click **Publish** in the **Actions** column.
            
    
    ### **Web applications**
    
    1.  Click the drop-down arrow in the leftmost column. In the panel that appears, click **Edit** in the **Actions** column.
        
    2.  In the **Modify Version** panel, enter the new URL of the application and click **OK**.
        
    

## Configure application visibility

You can use the Application Visibility and Select User parameters to specify whether an application is visible and specify the users to which the application is visible.

1.  In the left-side navigation pane, choose **Apps** > **Apps**.
    
2.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
    
    -   Single application: Find the desired application and click **Configure Visibility** in the **Actions** column.
        
    -   Multiple applications: Select multiple applications and click **Batch Configure Visibility** in the lower part of the page.
        
3.  In the **Configure Visibility** panel or the **Batch Configure Visibility** panel, perform the following operations based on your business requirements:
    
    -   If you want to make the applications invisible to all users, turn off **Configure Visibility**.
        
    -   If you want to make the applications visible to all users, turn on **Configure Visibility** and select **All User** for the Select User parameter.
        
    -   If you want to make the applications visible to specified users, turn on **Configure Visibility** and select **Specific User** for the Select User parameter.
        
4.  Click **OK**.
    

## Enable automatic installation and automatic uninstallation

Sandbox applications provided by EDS support automatic installation and automatic uninstallation.

1.  In the left-side navigation pane, choose **Apps** > **Apps**.
    
2.  Perform the following operations based on your business requirements:
    
    #### **Automatic installation**
    
    1.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
        
        -   Single application: Find the desired application and click **Auto Installation** in the **Actions** column.
            
        -   Multiple applications: Select multiple applications and click **Batch Auto Installation** in the lower part of the page.
            
    2.  In the **Auto Installation** panel or the **Batch Auto Installation** panel, perform the following operations based on your business requirements:
        
        -   If you want to enable automatic installation for all users, select **All User**.
            
        -   If you want to enable automatic installation for specified users, select **Specific User**, and select an account type and specific users.
            
    
    #### **Automatic uninstallation**
    
    **Note**
    
    Only cloud computers whose images are of V2.1.0 or later support automatic uninstallation of sandbox applications.
    
    1.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
        
        -   Single operation: Click **Automatically Uninstall** in the **Actions** column of an application.
            
        -   Batch operation: Select multiple applications and click **Batch Automatically Uninstall** in the lower part of the page.
            
    2.  In the **Automatically Uninstall** panel, perform the following operations based on your business requirements:
        
        -   If you want to enable automatic uninstallation for all users, select **All User**.
            
        -   If you want to enable automatic uninstallation for specified users, select **Specific User**, and select an account type and specified users.
            
    
3.  Click **OK**.
    

## Delete a self-managed application

If you no longer require a self-managed application, you can delete it.

1.  In the left-side navigation pane, choose **Apps** > **Apps**.
    
2.  On the **Apps** page, find one or more applications and perform the following operations based on your business requirements:
    
    -   Single application: Find the desired application and click **Delete** in the **Actions** column. In the message that appears, click **OK**.
        
    -   Multiple applications: Select multiple applications and click **Batch Delete** in the lower part of the page. In the message that appears, click **OK**.
