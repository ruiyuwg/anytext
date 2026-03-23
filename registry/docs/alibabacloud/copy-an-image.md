An image contains the necessary configurations and operating system required to create cloud computers. To create cloud computers or back up data across regions by using a custom image, you can copy the image from the source region to the destination region. This topic describes how to copy an image between regions.

## Prerequisites

A custom image is created and set to the **Available** state. For more information, see [Create an image](/help/en/wuying-workspace/user-guide/create-an-image#task-1963850) or [Create an image by using a snapshot](/help/en/wuying-workspace/create-an-image-from-a-snapshot#task-2101285).

**Note**

Only custom images can be copied. System, shared, and community images cannot be copied.

## Copy an image (old version)

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**.
    
3.  On the **Custom Image** tab of the **Images** page, find the custom image that you want to copy and click **Copy Image** in the **Actions** column.
    
4.  In the **Copy Image** panel, select the destination region in the **Region** section, configure the **Image Name** parameter, and click **Copy**.
    
    **Note**
    
    -   You cannot delete or share the image during the copy process.
        
    -   Image copy time varies depending on the image size, network speed, and the number of concurrent tasks in the queue.
        
    
    On the **Custom Image** tab of the **Images** page, find the custom image and check the copy progress in the **Progress** column.
    

## Configure an image region (new version)

For images stored in a central repository or server, you can configure regions directly rather than copying images between regions.

**Note**

This feature is in invitational preview. If you want to use the feature, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**.
    
3.  On the **Custom Image** tab of the **Images** page, find the custom image and click **Configure Region** in the **Actions**.
    
    Alternatively, click the image ID to go to the image details page and click **Configure Region** in the **Regions** section.
    
    **Note**
    
    The number in the **Region** column represents the total regions where the custom image is available. You can click the number to open the **Region Details** panel and view specific regions.
    
4.  In the **Region** section of the **Copy** panel, select one or more destination regions and click **Copy**.
    
5.  In the message that appears, click **Confirm**.
    
    **Note**
    
    -   You cannot delete or share the image during the copy process.
        
    -   Image copy time varies depending on the image size, network speed, and the number of concurrent tasks in the queue.
        
    
    Click the image ID to view the configuration progress in the **Regions** section of the image details page.
    

## What to do next

-   Create a cloud computer template from the image copy in the destination region. For more information, see [Create and manage custom templates](/help/en/wuying-workspace/user-guide/create-cloud-computer-templates#task-1964296).
    
-   Replace an existing image with the image copy in the destination region. For more information, see [Change the image of a cloud computer or a cloud computer pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools#task-2074648).
    
-   Share the image copy to another account. For more information, see [Share or unshare a custom image](/help/en/wuying-workspace/user-guide/share-or-unshare-a-custom-image#task-2229651).
