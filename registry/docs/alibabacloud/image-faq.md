This topic provides answers to some commonly asked questions about cloud computer images.

## **Table of contents**

-   [Can cloud computers use public or custom images of Elastic Compute Service (ECS), or Alibaba Cloud Marketplace images in Elastic Desktop Service?](#faq-can-i-use-ecs-image)
    
-   [Can I change the image of a cloud computer?](#faq-can-i-change-image)
    
-   [How long does it take to create a custom image?](#faq-how-long-does-it-take)
    
-   [What do I do if I always fail to create a custom image?](#faq-what-to-do-after-failure)
    

## Can cloud computers use public or custom images of Elastic Compute Service (ECS), or Alibaba Cloud Marketplace images in Elastic Desktop Service?

No, cloud computers can use only built-in system images, shared images, and custom images in Elastic Desktop Service.

## **Which operating systems are supported by the EDS system images?**

The EDS system images support the following operating systems by default:

-   **Windows**: Windows 10 Pro, Windows Server 2019, and Windows Server 2022 (Windows 10 Enterprise is visible on the whitelist)
    
-   **Linux**: Ubuntu 20.04, Ubuntu 22.04, and Ubuntu 24.04
    

## Can I change the image of a cloud computer?

Yes, you can change the image of a cloud computer, regardless of whether the image is a system image, shared image, or custom image. You can select a method to change the image of a cloud computer based on the template used by the cloud computer.

### **Determine the template type of a cloud computer**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  On the **Cloud Computers** page, find the desired cloud computer and click its ID. On the **Cloud Computer Details** tab of the displayed page, view the values of **Template Name** and **Template ID**.
    
3.  Copy the **template ID** and paste it in the search box on the **Templates** page. Then, view the Type column of the searched template.
    

### **Change the image of a cloud computer**

#### **Cloud computers that are created based on system templates**

If the cloud computer whose image you want to change is created based on a system template, you can directly change the image. For more information, see [Change images](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools).

#### **Cloud computers that are created based on custom templates**

If the cloud computer whose image you want to change is created based on a custom template, you can use one of the following methods to change the image:

-   Change the image that is defined in the custom template. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#section-ima-n6m-oqx).
    
-   Create an image and then replace the image of the cloud computer with the new image. For more information, see [Create an image](/help/en/wuying-workspace/user-guide/create-an-image) and [Change images](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools).
    

## **How do I update the image of my cloud computer?**

The version of an image may determine whether specific features are available for cloud computers. We recommend that you update the images of your cloud computers at the earliest opportunity.

**Note**

-   Before you update the image of a cloud computer, save or back up data and files on the cloud computer to prevent data loss.
    
-   The update of an image takes 10 to 15 minutes, during which the cloud computer becomes unavailable.
    

### **Update an image as an administrator**

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**. On the **Images** page, click the **Image Updates** tab.
    
3.  On the **Image Updates** page, find the desired image version in the update task list.
    
4.  Click **View Involved Cloud Computer and Progress** in the **Actions** column.
    
5.  In the panel that appears, select one of the following update methods to proceed:
    
    -   Update the image of a single cloud computer
        
        1.  In the cloud computer list, find the cloud computer whose image you want to update and click **Update** in the **Actions** column.
            
            (Optional) You can also select the cloud computer whose image you want to update and click **Immediate/Schedule Update** in the lower part of the cloud computer list.
            
        2.  In the dialog box that appears, read the update precautions and select an update method based on your business requirements. Then, follow the on-screen instructions to complete the image update.
            
            During the image update process, the system automatically restarts the cloud computer. When the image update is complete, the cloud computer returns to the state before the image update. This indicates that the image update task is successful.
            
    -   Update the images of multiple cloud computers at the same time
        
        1.  In the cloud computer list, select the cloud computers whose images you want to update and click **Immediate/Schedule Update** in the lower part of the list.
            
        2.  In the dialog box that appears, read the update precautions and select an update method based on your business requirements. Then, follow the on-screen instructions to complete the image update.
            
            During the image update process, the system automatically restarts the cloud computer. When the image update is complete, the cloud computer returns to the state before the image update. This indicates that the image update task is successful.
            

For more information, see [Update an image](/help/en/wuying-workspace/user-guide/upgrade-mirror).

### **Update an image as an end user**

1.  Find the cloud computer that you want to upgrade and click **Upgrade** on its card.
    
2.  In the dialog box that appears, select the time to perform upgrade:
    
    -   If you want to perform upgrade now, select **Upgrade Now** and select **Remain in Current Status**, **Shut Down**, **Running**, or **Hibernate** from the **Status after Upgrade** drop-down list.
        
    -   If you want to perform upgrade later, select **Scheduled Upgrade** and select **Upgrade in 4 hours**, **Upgrade in 8 hours**, or **Upgrade in 12 hours** based on your business requirements.
        
3.  Click **OK**.
    
4.  In the **Upgraded** message that appears, click **Got it**.
    
    -   If you cannot connect to the cloud computer or want to roll back the cloud computer after the upgrade, perform the following operations: Click **Manage** on the card, choose **Restore Points** > **System Restore Points**, find the restore point of the system disk or data disk that is created at the point in time to which you want to restore the cloud computer, click **Restore**, select the system disk or data disk that you want to restore, and then click **Confirm Restore**. You can also contact your enterprise IT administrator to obtain technical support.
        
    -   If you fail to upgrade the cloud computer, retry or contact your enterprise IT administrator.
        
    

For more information, see [Manage cloud computers](/help/en/wtc/user-guide/manage-cloud-computers/).

## How long does it take to create a custom image based on an existing cloud computer?

It takes about 10 to 15 minutes to create a custom image based on an existing cloud computer. The actual required time varies with the data size of the cloud computer.

## What do I do if I always fail to create a custom image?

The following table describes the possible causes of an image creation failure and the corresponding solutions.

**Possible cause**

**Solution**

The administrator installs antivirus software on the cloud computer that is used to create the custom image. During image creation, the software disables the Elastic Desktop Service in the image. As a result, the image fails to be created.

Ask the administrator to uninstall such software from the cloud computer and then try to re-create the custom image.

During image creation, the administrator changes the image of the cloud computer that is used to create the custom image. As a result, an image conflict occurs and the image fails to be created.

Ask the administrator not to change the image of the cloud computer during image creation.

During image creation, the administrator deletes the cloud computer that is used to create the custom image. As a result, the image fails to be created.

Ask the administrator not to delete the cloud computer during image creation.
