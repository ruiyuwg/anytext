This topic describes how to create a custom image to store the data of a simple application server. You can share the custom image with Elastic Compute Service (ECS) or use the image to create simple application servers that have the same configurations.

## Precautions

-   The custom image and the source simple application server must reside in the same region.
    
-   You can directly create a custom image only based on the system disk snapshot of a simple application server. If you want a custom image to contain the data on the data disk of the simple application server, you must select a data disk snapshot in addition to a system disk snapshot when you create the custom image.
    
-   If a simple application server is released due to expiration or refunds, the custom images that are created based on the server are also released.
    
-   If you reset a simple application server by changing the OS of the server or replace the image of the server, the disk data on the server is deleted. Back up your data before you change the OS or replace the image of a simple application server.
    

## **Limits**

-   The maximum number of custom images you can create is three times the number of servers you have created, but no more than 15.
    
-   After an instance expires, its data is retained for 15 days. During this period, you cannot create images from the instance. Renewing the instance restores it and re-enables image creation.
    

## **Billing**

You are not charged for creating custom images.

## Procedure

1.  Select a method to create a custom image based on your business requirements.
    
    ## Create a custom image from a simple application server
    
    If you want to create a custom image that contains data on the system disk and data disk (if attached), you can create a custom image from a simple application server.
    
    1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
        
    2.  In the card of the simple application server from which you want to create a custom image, choose **More** > **Create Custom Image**.
        
        Alternatively, click the server ID in the server card. Below the **Image Information** field of the **Basic Information** section on the Server Overview tab, click **Create Custom Image**.
        
    3.  In the **Create Custom Image** dialog box, configure parameters based on your business requirements. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name for the custom image. The name must be unique. The name must be 2 to 128 characters in length and can contain periods (.), underscores (\_), hyphens (-), and colons (:). The name cannot start with a special character or a digit.
        
        **Description**
        
        Enter a description for the custom image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
        
    
    ## Create a custom image from a system disk
    
    If you want to create a custom image that contains only the data on the system disk, we recommend that you use this method.
    
    1.  (Conditionally required) If you do not have a system disk snapshot, you must first create a system disk snapshot. For more information, see [Create a snapshot](/help/en/simple-application-server/user-guide/manage-snapshots#section-fup-p30-12b).
        
        If you want to create a custom image that contains the data on the system disk and data disk, you must also create a data disk snapshot in advance.
        
    2.  In the left-side navigation pane, click **Snapshots**.
        
    3.  Find the system disk snapshot based on which you want to create a custom image and click **Create Custom Image** in the **Actions** column.
        
    4.  In the **Create Custom Image** dialog box, configure parameters based on your business requirements.
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Required. Enter a name for the custom image. The name must be 2 to 128 characters in length and can contain periods (.), underscores (\_), hyphens (-), and colons (:). The name cannot start with a special character or a digit.
        
        **Description**
        
        Required. Enter a description for the custom image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
        
        **Data Disk Snapshot**
        
        Optional. If you want the custom image to contain the data on the data disk, select a data disk snapshot from the drop-down list. Otherwise, the custom image contains only the data on the system disk.
        
    
2.  Click **Confirm**.
    
3.  In the left-side navigation pane, click **Image** to view the created custom image.
    

## **FAQ**

### **Question:** Can I still create a custom image after a Simple Application Server instance expires?

Answer: No. After expiration, the instance is inaccessible and you cannot create images. However, data is retained for 15 days after expiration. Renew the instance to restore access, and then you can create images.

### **Question: Can I export custom images from Simple Application Server?**

Answer: You cannot directly export custom images from Simple Application Server. To export a custom image of a simple application server, perform the following steps:

1.  Share the simple application server image with ECS. For more information, see [Share an image to ECS](/help/en/simple-application-server/user-guide/share-a-custom-image).
    
2.  On the **Shared Images** tab in the ECS console, you can copy the image to create a custom image. For more information, see [Copy custom image](/help/en/ecs/user-guide/copy-an-image).
    
3.  You can export the custom image from the **Custom Images** tab in the ECS console. For more information, see [Export custom image](/help/en/ecs/user-guide/export-a-custom-image).
    
    **Note**
    
    Due to image copyright restrictions, you cannot export custom images created from application images or images of the Windows Server operating system.
    

## What to do next

You can perform the following operations after you create the custom image:

-   Share the image to ECS to back up data or create ECS instances. For more information, see [Share an image to ECS](/help/en/simple-application-server/user-guide/share-a-custom-image#task-2023045).
    
-   Create new simple application servers based on the custom image. For more information, see [Use a custom image to create one or more simple application servers](/help/en/simple-application-server/user-guide/use-a-custom-image-to-create-simple-application-servers#task-2023069).
    
-   Copy the custom image to a different region to migrate the data on the server. For more information, see [Copy a custom image](/help/en/simple-application-server/user-guide/copy-a-custom-image#task-2111295).
