After you create a custom image of a cloud computer, you can share the image with an Alibaba Cloud account. The recipient Alibaba Cloud account can use the image to create cloud computers that have identical configurations as the cloud computer. If you no longer want to share the image with the recipient account, you can unshare the image. This topic describes how to share or unshare a custom image.

## Prerequisites

-   Before you share a custom image, make sure that all sensitive data and files in the image are removed.
    
-   You must share an object with an **Alibaba Cloud account**.
    
    To obtain the ID of an Alibaba Cloud account, move the pointer over the profile picture in the upper-right corner of the Alibaba Cloud Management Console. If the account is displayed as **Main Account** in the user information panel, the account ID that appears is the Alibaba Cloud account ID.
    

## Usage notes

Before you share a custom image, take note of the following items:

**Warning**

Elastic Desktop Service does not guarantee the integrity and security of shared images. If you receive a shared image, make sure that the image comes from a trusted Alibaba Cloud account.

### Alibaba Cloud accounts that share custom images

-   You cannot share a custom image that is encrypted.
    
-   You can share a custom image with only one Alibaba Cloud account at a time.
    
-   You can share custom images within your account for up to 50 times in total.
    
-   You cannot share a custom image with Resource Access Management (RAM) users.
    
-   You can share a custom image that is created only by your Alibaba Cloud account. If you receive a shared image, you cannot share it to another account.
    
-   You can share a custom image between accounts on the China site (aliyun.com) and the International site (alibabacloud.com).
    
-   Before you can delete a custom image that is shared with another Alibaba Cloud account, you must unshare the custom image. For more information, see [Unshare a custom image](#sc-unshare) or [Delete a custom image](/help/en/wuying-workspace/user-guide/delete-images#task-1964169).
    
-   You can share images across accounts only within the same region. To share a custom image across regions, you must copy the image to the destination region. For more information, see [Copy images between regions](/help/en/wuying-workspace/user-guide/copy-an-image#task-2229650).
    

### Alibaba Cloud accounts that receive shared images

-   Although you share an image with an Alibaba Cloud account, the recipient account can still share custom images with others for up to 50 times. Recipient accounts are not charged for using shared images. That is, the recipient accounts are not charged for using the shared images to create cloud computers.
    
-   Recipient accounts can use shared images but cannot delete the shared images.
    

## Share a custom image

This section describes how to share an image. To share an image, perform the following steps:

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Custom Image** tab of the **Images** page, find the image that you want to share and click **View/Share Image** in the **Actions** column.
    
5.  In the **Shared Image** dialog box, enter the ID of account with which you want to share the image in the **Account** field, read the information below, select the check box, and then click **Confirm**.
    
    **Note**
    
    You can share a custom image only with an Alibaba Cloud account, instead of a RAM user.
    
    After the image is shared, you can view the shared image on the **Shared Image** tab of the **Images** page in the Elastic Desktop Service console.
    
    The recipient account can use the image to perform the following operations:
    
    -   Create a cloud computer template. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#task-1964296).
        
    -   Change the image of a cloud computer. For more information, see [Change the image of a cloud computer or a cloud computer pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools#task-2074648).
        
    

## Unshare an image

If you no longer want to share an image with an Alibaba Cloud account, you can unshare the image from the account. Before you unshare the image, take note of the following items:

-   The recipient account can no longer query the image by using the Elastic Desktop Service console or calling the Elastic Desktop Service API.
    
-   The recipient account can no longer create cloud computers by using the image.
    
-   The recipient account can longer replace the image of a cloud computer with the shared image.
    
-   After you unshare the image, cloud computer templates that are created by the recipient account from the image become unavailable. The recipient must manually delete the templates.
    

1.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Custom Image** tab of the **Images** page, find the custom image that you want to unshare and click **View/Share Image** in the **Actions** column.
    
4.  In the **Shared Image** dialog box, click the **Shared Account** drop-down list.
    
5.  Find the ID of the Alibaba Cloud account from which you want to unshare the image in the **Account ID** column and click **Unshare** in the **Actions** column.
