This topic describes how to create a custom image from an instance or by using an image builder.

## **Usage notes**

-   After you create or import a custom image, the image is in the **usable** state. You can use the image to create instances, share the image with other Alibaba Cloud accounts, or export the image to an Object Storage Service (OSS) bucket. You can also delete the image if you no longer need the image.
    
-   After you create an Edge Node Service (ENS) instance, you can customize the instance by performing operations such as installing software and deploying application environments, and then create a custom image from the instance. Instances that are created by using the custom image contain all the custom items. This eliminates the need to configure the items for new instances.
    

## **Create a custom image from an instance**

**Note**

-   When you **create a custom image from an instance**, only instances of the following types are supported: x86-based computing instance, x86-based physical machine, x86-based bare metal instance, Arm-based computing instance, heterogeneous VM, and heterogeneous bare metal instance.
    
-   An ENS instance is created. For more information, see [Create an instance](/help/en/ens/create-an-instance).
    
-   Sensitive data is removed from the instance. This helps prevent data security risks.
    
-   Make sure that the created instance is in the **Stopped** state.
    

1.  Log on to the [ENS console](https://ens.console.alibabacloud.com/instance/list#/instance/list).
    
2.  In the left-side navigation pane, choose **Computing Capacity and Images** **>** **Instances**.
    
3.  On the **Instances** page, find the instance from which you want to create an image, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2597970961/p687130.png) icon in the **Actions** column, and then click **Create Image**.
    
4.  In the **Create Image** dialog box, configure the **Image Name** parameter.
    
5.  Click **OK**.
    

## **Create a custom image by using an image builder**

**Note**

-   If you **create a custom image by using an image builder**, only x86 images are supported.
    
-   When you create an image by using an image builder, parameters in the **Advanced Options** section are optional. If you want to verify the mounting and partitioning of a data disk, you can expand the Advanced Options section and specify the data disk size. Then, you can mount the data disk when you create an image.
    
-   When you upload the image that is created by using an image builder, make sure that the image builder is in the **Stopped** state.
    

1.  Log on to the [ENS console](https://ens.console.alibabacloud.com/instance/list#/image/building).
    
2.  In the left-side navigation pane, choose **Computing Capacity and Images** **>** **Images**.
    
3.  On the **Image Builder** tab, click **Create Image**.
    
4.  Click **OK**.
    
5.  On the **Image Builder** tab, obtain the IP address of an image builder. Then, log on to the image builder by using SSH and deploy the software and application on the image builder.
    
6.  Click **Upload Image**. After the image is uploaded, click **Release Builder**.
