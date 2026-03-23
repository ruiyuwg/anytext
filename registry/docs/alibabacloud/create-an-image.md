You can use a custom image to quickly create multiple cloud computers with identical settings, eliminating the need to repeat creation tasks. This topic describes how to create a custom image.

## **Background information**

Images are region-bound resources. You cannot use images to create cloud computers across regions. When you create a custom image, make sure that the image and the cloud computer that you want to create from the image belong to the same region. For example, if you want to create a cloud computer in the China (Hangzhou) region, you must use a custom image from the China (Hangzhou) region.

You can create a custom image based on a cloud computer or snapshot. You can also import an image from your on-premises device to the Elastic Desktop Service (EDS) Enterprise console and use the imported image to generate a custom image.

**Note**

-   You cannot delete a custom image that is being created.
    
-   The time required to create a custom image depends on the amount of data stored on the cloud computer used for creating the image.
    
-   Avoid shutting down or restarting the cloud computer during image creation, as it will cause the process to fail.
    

## **Prerequisites**

-   If you want to use a cloud computer or a many-to-many share to create an image, make sure that the cloud computer or many-to-many is created. For more information, see [Create cloud computers](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3) or [Create and manage many-to-many shares](/help/en/wuying-workspace/user-guide/create-shared-cloud-computers).
    
-   If you want to use a system disk snapshot to create an image, make sure that the system disk snapshot is created. For more information, see [Use snapshots (public preview)](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#task-2013589).
    

## **Create an image by using a cloud computer**

You can create a custom image by using a cloud computer to save or replicate its operating system or data. This image can then be used to create additional cloud computers with identical settings.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  Use one of the following methods to create a custom image:
    
    #### **Create on the** **Cloud Computers** page
    
    1.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
        
    2.  In the upper-left corner of the top navigation bar, select a region.
        
    3.  On the **Cloud Computers** page, find the cloud computer from which you want to create a custom image and click the ⋮ icon in the **Actions** column. Then, click Create Image.
        
    4.  In the **Create Image** panel, configure the following parameters as needed and click **Create**.
        
        **Parameter**
        
        **Description**
        
        **Image Name**
        
        The name of the custom image. Make sure that the name meets the naming conventions.
        
        **Note**
        
        The name must be 2 to 128 characters in length, and can contain letters, digits, colons (.), underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (\_), and hyphens (-).
        
        **Clean Personal Residual Data**
        
        Specifies whether to clean personal data. By default, **Clean Personal Residual Data** is turned on to prevent personal data and logon information from being retained in the custom image that you want to create.
        
        **Note**
        
        If you use an encrypted cloud computer, this parameter is unavailable.
        
        Before you enable or disable this feature, pay attention to the following notes:
        
        -   Turn on **Clean Personal Residual Data**
            
            The system clears user personal data, which may extend image creation time by approximately 20 minutes.
            
            The data cleared by the system varies depending on the type of cloud computers.
            
            -   Linux cloud computers
                
                This cleanup operation affects only generated image files. The system will remove regular user data and data within user directories under the `/home` path. Root user data, system-installed applications, and system data will remain unaffected.
                
            -   Windows cloud computers
                
                This cleanup operation affects only generated image files. The system will remove user files and data, except for those in `C:\Users\Administrator` and `C:\Users\Public`. Data in these directories, as well as system-installed applications and system data, will remain unaffected.
                
        -   Turn off **Clean Personal Residual Data**
            
            The system does not clear personal data. The generated image may contain data identical to that on the source cloud computer, potentially exposing personal information.**Clean Personal Residual Data**
            
        
        **Scope**
        
        Valid values:
        
        -   **System Disk and Data Disk**: The image that you want to create contains data from the system and data disks of the source cloud computer. Cloud computers created from this image will have the same data on their system and data disks as the source cloud computer.
            
        -   **System Disk Only**: The image that you want to create contains only data from the system disk of the source cloud computer. Cloud computers created from the image will have identical system disk data to the source cloud computer, but their data disks will be empty.
            
        
        **Important**
        
        If you create a custom image based on a Linux cloud computer and set the Scope parameter to **System Disk and Data Disk**, the **Clean Personal Residual Data** feature is unavailable.
        
        **Description**
        
        The description of the custom image that you want to create. If this parameter is not specified, the image name is used as the default image description.
        
    
    #### **Create from a** **many-to-many share**
    
    1.  In the left-side navigation pane, choose **Resources** > **Shared Cloud Computer**.
        
    2.  In the upper-left corner of the top navigation bar, select a region.
        
    3.  On the **Many-to-Many** page, find the many-to-many share from which you want to create an image and click its ID.
        
    4.  On the **Cloud Computer Information** tab, find the cloud computer that you want to use to create a custom image, click the ⋮ icon in the **Actions** column, and then click **Create Image**.
        
    5.  In the **Create Image** panel, configure the following parameters as needed and click **Create**.
        
        **Parameter**
        
        **Description**
        
        **Image Name**
        
        The name of the custom image. Make sure that the name meets the naming conventions.
        
        **Note**
        
        The name must be 2 to 128 characters in length, and can contain letters, digits, colons (.), underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (\_), and hyphens (-).
        
        **Clean Personal Residual Data**
        
        Specifies whether to clear personal data. By default, **Clean Personal Residual Data** is turned on to prevent personal data and logon information from being retained in the custom image that you want to create.
        
        **Note**
        
        If you use an encrypted cloud computer, this parameter is unavailable.
        
        Before you enable or disable this feature, pay attention to the following notes:
        
        -   Turn on **Clean Personal Residual Data**
            
            The system clears user personal data, which may extend image creation time by approximately 20 minutes.
            
            The data cleared by the system varies depending on the type of cloud computers.
            
            -   Linux cloud computers
                
                This cleanup operation affects only generated image files. The system will remove regular user data and data within user directories under the `/home` path. Root user data, system-installed applications, and system data will remain unaffected.
                
            -   Windows cloud computers
                
                This cleanup operation affects only generated image files. The system will remove user files and data, except for those in `C:\Users\Administrator` and `C:\Users\Public`. Data in these directories, as well as system-installed applications and system data, will remain unaffected.
                
        -   Turn off **Clean Personal Residual Data**
            
            The system does not clear personal data. The generated image may contain data identical to that on the source cloud computer, potentially exposing personal information.**Clean Personal Residual Data**
            
        
        **Scope**
        
        Valid values:
        
        -   **System Disk and Data Disk**: The image that you want to create contains data from the system and data disks of the source cloud computer. Cloud computers created from this image will have the same data on their system and data disks as the source cloud computer.
            
        -   **System Disk Only**: The image that you want to create contains only data from the system disk of the source cloud computer. Cloud computers created from the image will have identical system disk data to the source cloud computer, but their data disks will be empty.
            
        
        **Important**
        
        If you create a custom image based on a Linux cloud computer and set the Scope parameter to **System Disk and Data Disk**, the **Clean Personal Residual Data** feature is unavailable.
        
        **Description**
        
        The description of the custom image that you want to create. If this parameter is not specified, the image name is used as the default image description.
        
    

## **Export an image from a cloud computer**

You can directly export an image from a cloud computer.

**Note**

The feature is in invitational preview. If you want to use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Images Center** > **Images**.
    
3.  On the **Images** page, click **Create Image**.
    
4.  In the **Create Image** panel, click the **Export Image from Cloud Computer** tab.
    
5.  In the **Create Image** panel, configure the following parameters as needed and click **Create**.
    
    **Parameter**
    
    **Description**
    
    **Image Name**
    
    The name of the custom image. Make sure that the name meets the naming conventions.
    
    **Note**
    
    The name must be 2 to 128 characters in length, and can contain letters, digits, colons (.), underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
    
    **Region**
    
    The region of the cloud computer from which you want to export an image.
    
    **Note**
    
    If you want to choose more regions, choose Image Center > Images > Configure Region after the image is created.
    
    **Clean Personal Residual Data**
    
    Specifies whether to clear personal data. By default, **Clean Personal Residual Data** is turned on to prevent personal data and logon information from being retained in the custom image that you want to create.
    
    **Note**
    
    If you use an encrypted cloud computer, this parameter is unavailable.
    
    Before you enable or disable this feature, pay attention to the following notes:
    
    -   Turn on **Clean Personal Residual Data**
        
        The system clears user personal data, which may extend image creation time by approximately 20 minutes.
        
        The data cleared by the system varies depending on the type of cloud computers.
        
        -   Linux cloud computers
            
            This cleanup operation affects only generated image files. The system will remove regular user data and data within user directories under the `/home` path. Root user data, system-installed applications, and system data will remain unaffected.
            
        -   Windows cloud computers
            
            This cleanup operation affects only generated image files. The system will remove user files and data, except for those in `C:\Users\Administrator` and `C:\Users\Public`. Data in these directories, as well as system-installed applications and system data, will remain unaffected.
            
    -   Turn off **Clean Personal Residual Data**
        
        The system does not clear personal data. The generated image may contain data identical to that on the source cloud computer, potentially exposing personal information.**Clean Personal Residual Data**
        
    
    **Scope**
    
    Valid values:
    
    -   **System Disk and Data Disk**: The image that you want to create contains data from the system and data disks of the source cloud computer. Cloud computers created from this image will have the same data on their system and data disks as the source cloud computer.
        
    -   **System Disk Only**: The image that you want to create contains only data from the system disk of the source cloud computer. Cloud computers created from the image will have identical system disk data to the source cloud computer, but their data disks will be empty.
        
    
    **Important**
    
    If you create a custom image based on a Linux cloud computer and set the Scope parameter to **System Disk and Data Disk**, the **Clean Personal Residual Data** feature is unavailable.
    
    **Description**
    
    The description of the custom image that you want to create. If this parameter is not specified, the image name is used as the default image description.
    
    **Select Cloud Computer**
    
    The cloud computer from which you want to export an image.
    
    **Note**
    
    The cloud computers in the selected region are displayed.in the **Select Cloud Computer** list.
    

## Create an image by using an online image builder

You can use an online image builder to create custom images easily.

**Note**

The feature is in invitational preview. If you want to use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).

### Prerequisites

To create a custom image by using an online image builder, make sure that all of the following conditions are met:

-   The basic image uses either Windows Server 2019 or Windows Server 2022 as its operating system.
    
-   The basic image version must be V2.3.0 or later.
    
-   The basic image is in the **Available** state.
    
-   This feature is supported only in the following regions:
    
    **Note**
    
    To enable this feature in a region outside the following listed regions, configure one of the listed regions as the available region for the custom image. For more information, see [Configure an image region (new version)](/help/en/wuying-workspace/user-guide/copy-an-image#sc-configure-image-regions).
    
    -   China (Beijing)
        
    -   China (Shanghai)
        
    -   China (Hangzhou)
        
    -   China (Shenzhen)
        
    -   China (Zhangjiakou)
        
    -   China (Hong Kong)
        
    -   Singapore
        
    -   Germany (Frankfurt)
        
    -   US (Silicon Valley)
        

### **Step 1: Configure an online image builder**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Images Center** > **Images**.
    
3.  On the **Images** page, click **Create Image**.
    
4.  In the **Create Image** panel, click the **Custom Image (Beta)** tab.
    
5.  In the **Enter Basic Information** step, configure the following parameters as needed and click **Next**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Limitation**
    
    **Example**
    
    **Custom Image Name**
    
    Yes
    
    The name of the custom image.
    
    The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
    
    TestImage01
    
    **Region**
    
    No
    
    The region where you want to create the custom image.
    
    None
    
    China (Hangzhou)
    
    **Office Network**
    
    No
    
    The office network in which you want to create the custom image.
    
    In the image builder environment, you can select only a convenience office network created on or after December 1, 2024.
    
    Office Network
    
    **Description**
    
    No
    
    The description of the custom image.
    
    The description must be 2 to 256 characters in length and can contain letters, digits, special characters, and spaces. You can use carriage returns to separate lines. The description cannot start with `http://` or `https://`.
    
    Test
    
    **Basic Image**
    
    Yes
    
    The basic image on which the image that you want to create depends.
    
    Valid values:
    
    -   Custom Image
        
    -   System Image
        
    
    You can select a system image. You can also select a custom image that you created.
    
    System Image
    
    **Language**
    
    Yes
    
    The initialization language for the system.
    
    You can select the initialization language only for system images. Valid values:
    
    -   Chinese
        
    -   Traditional Chinese (Hong Kong)
        
    -   English
        
    -   Japanese
        
    
    Chinese
    
6.  In the **Configure Online Builder** step, configure the following parameters as needed and click **Next**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Limitation**
    
    **Example**
    
    **Instance Specification**
    
    Yes
    
    The computing resource type of the online image builder.
    
    Valid values:
    
    -   Enterprise Office (Non-GPU)
        
    -   Graphics (GPU)
        
    
    Enterprise Office
    
    **Storage Capacity**
    
    Yes
    
    The storage capacity of the online image builder.
    
    -   System Disk (required): The storage size ranges from 40 GiB to 300 GiB. You can increase the capacity at increments of 10 GiB. The value of this parameter must be greater than or equal to the storage capacity of the basic image that you selected.
        
    -   Data Disk (optional): The storage size ranges from 40 GiB to 500 GiB. You can increase the capacity at increments of 10 GiB. The value of this parameter must be greater than or equal to the storage capacity of the basic image that you selected. You can also set the value to 0.
        
    
    100 GiB
    
    **File**
    
    No
    
    The application installation package or file package to be installed on cloud computers. Uploaded files are placed on the desktop of the online image builder.
    
    -   For files smaller than 5 GiB, select Local File. For files 5 GiB or larger, select OSS URL.
        
    -   No restrictions are applied to file types.
        
    -   You can upload up to five files.
        
    
    Local File
    
7.  In the **(Optional) Install Peripheral Driver** step, select an Alibaba Cloud Workspace drive or custom enterprise drive to install and click **Next**.
    
    **Note**
    
    -   Only Windows images currently support installing peripheral and printer drivers. Other operating systems do not support this feature.
        
    -   You can select up to 20 drivers.
        
    
8.  In the **Confirm** step, check whether the information is correct. To modify incorrect information, click **Modify**. To confirm the information and begin image creation, click **Confirm and Start**.
    
    -   The online image builder opens on the page that appears. Environment preparation may take a few minutes. Complete the image creation process on this page.
        
        **Note**
        
        -   The image creation environment is available for a limited time (a few hours). Ensure the creation process is properly arranged to prevent failure in case of a timeout.
            
        -   The region where the image is created is determined by the region of the selected basic image. To add additional regions, configure an image region after the creation is complete. For more information, see [Configure an image region (new version)](/help/en/wuying-workspace/user-guide/copy-an-image#sc-configure-image-regions).
            
        
    -   If the page of the online image builder does not open, check whether it is blocked by your browser.
        
    -   If the page closes while an image is being created, choose **Image Center** > **Images**. On the next page, click **Continue Creating** in the **Status** column to reopen the page of the online image builder.
        

### **Step 2: Create and publish a custom image**

After the online image builder is created, you can perform the following steps on the page that appears to create a custom image:

#### **Text tutorial**

1.  In the **Builder Environment Preparation** step, wait a few minutes for the environment to be fully prepared. In the message that appears, click **Start to Build**.
    
2.  In the **Build and Configuration** step, install applications, store files, or modify the registry as needed, and click **Next**.
    
    **Note**
    
    The file uploaded in the Configure Online Builder step will be accessible on the desktop of the production environment. To upload additional files, such as application installation packages, you can click the floating icon on the desktop and select **Upload**.
    
3.  On the **Configure Image** tab of the **Configuration** dialog box, select the wallpaper and desktop shortcut of the custom image. Click **Next**.
    
4.  View the peripheral driver installation results on the **Peripheral Driver Installation Results** tab. Confirm the settings and click **Next**.
    
5.  On the **Test** tab of the Configuration dialog box, check the file directory and registry directory that are temporarily generated in the production environment and are not retained in the official image. Click **Test Now**.
    
6.  Preparing the environment for testing typically takes 1 to 5 minutes. Please wait for the process to complete.
    
7.  After the test environment is ready, click **Test** in the **Perform an image test** dialog box.
    
8.  Fully test your image in the test environment. After the test is complete, click **Test Passed**. In the message that appears, click **Confirm**.
    
9.  In the **Perform an image test** dialog box, click **Publish**. In the **Do you want to publish now?** dialog box, select the regions where you want to publish the image and click **Publish Now**.
    
10.  In the confirmation dialog box, click **Go Now** to return to the EDS Enterprise console and monitor the image publish progress and results.
     

## Create an image by using a snapshot

A snapshot captures the data on a disk at a specific moment, enabling data backup and restoration. A snapshot allows you to create a custom image that captures the operating system and data of a cloud computer. This custom image can then be used to create additional cloud computers with identical settings.

**Note**

Take note that only the system disk of a cloud computer can be used to create a custom image.

1.  Use one of the following methods to create a custom image:
    
    ### **Create on the Snapshots tab**
    
    1.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
        
    2.  In the upper-left corner of the top navigation bar, select a region.
        
    3.  On the **Cloud Computers** page, find the cloud computer whose system disk snapshot you want to use and click its ID.
        
    4.  On the **Snapshots** tab, find the system disk snapshot that you want to use to create a custom image and click **Create Image** in the **Actions** column.
        
    
    ### **Create on the Snapshots page**
    
    1.  In the left-side navigation pane, choose **Operation & Maintenance** > **Snapshots**.
        
    2.  In the upper-left corner of the top navigation bar, select a region.
        
    3.  On the **Snapshots** tab, find the system disk snapshot that you want to use to create a custom image and click **Create Image** in the **Actions** column.
        
    
2.  In the **Create Image** panel, configure the **Image Name** and **Description** parameters and click **Create**.
    

## **Create an image by using an imported image**

You can create an image on your on-premises computer and import the image to the EDS Enterprise console to generate a custom image. For more information, see [Import an image](/help/en/wuying-workspace/user-guide/import-image).

## **View and manage a custom image**

In the left-side navigation pane, choose **Operation & Maintenance** > **Images**. On the **Custom Image** tab, you can view the status and creation progress of images.

-   If an image is created, the status of the image changes from **Creating** to **Available**, and the creation progress of the image changes to 100%.
    
-   If an image fails to be created, the status of the image changes from **Creating** to **Failed**. In this case, you can click **Delete** in the **Actions** column to delete the image and try to create a custom image again.
    

## **What to do next**

After you create a custom image, you can perform the following operations:

-   Create a cloud computer template based on the custom image. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#section-dbp-f13-95u).
    
-   Use a cloud computer template that contains the custom image to create cloud computers or many-to-many shares. For more information, see [Create cloud computers](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3) or [Create and manage many-to-many shares](/help/en/wuying-workspace/user-guide/create-shared-cloud-computers).
