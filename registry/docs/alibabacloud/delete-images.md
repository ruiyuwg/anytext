If you no longer require a custom image, you can delete the image. This topic describes how to delete a custom image and precautions you must take note of when you delete a custom image.

## **Precautions**

-   The image that you want to delete must be a custom image. You cannot delete a system, shared, or community image.
    
-   The image that you want to delete must be in the **Available** state. You cannot delete a custom image that is in another state, such as **Creating** or **Copying**.
    
-   The image that you want to delete must not be a shared image. Before you delete a custom image, make sure that the image is not shared to another Alibaba Cloud account. For more information, see [Share or unshare a custom image](/help/en/wuying-workspace/user-guide/share-or-unshare-a-custom-image).
    
-   The image that you want to delete must not be used by a cloud computer pool. If the image that you want to delete is being used by a cloud computer pool, use another image to replace the image and then delete the image. For more information, see [Change the image of a cloud computer or a cloud computer pool](/help/en/wuying-workspace/user-guide/change-the-images-of-cloud-computers-or-cloud-computer-pools).
    

## **Impacts of image deletion**

Before you delete a custom image, make sure that you understand the impacts of image deletion.

-   After you delete a custom image, the cloud computers created from the image remain unaffected and can be used as expected.
    
-   If the custom image that you want to delete is being used in a cloud computer template, the template is also deleted when you delete the custom image.
    
-   Deleting a custom image may impact cloud computers that are currently using it in the following ways:
    
    -   If you delete the custom image, the scheduled reset tasks for the cloud computers will not work as expected.
        
    -   If no scheduled reset task is configured for the cloud computers, you cannot create scheduled reset tasks by using the custom image after you delete the custom image.
        

## Procedure

1.  Log on to [the EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Images**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Custom Image** tab of the **Images** page, find the custom image that you want to delete and click **Delete** in the **Actions** column.
    
5.  In the message that appears, confirm the impacts of the delete operation and click **OK**.
