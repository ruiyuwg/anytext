Community images are publicly available. You can use a community image to quickly deploy Elastic Compute Service (ECS) instances whose operating systems, applications, and data meet your business requirements. This topic describes how to use a community image to create an ECS instance.

## **Prerequisites**

A community image is created in your account and the region where you want to create an ECS instance. For information about community images, see [Community images](/help/en/ecs/user-guide/overview-12).

## **Billing**

-   Community images are custom images that Alibaba Cloud community members made available for others to use. If a community image is derived from a paid image, you are charged a license fee when you use the community image to create ECS instances. For more information, see [Images](/help/en/ecs/images).
    
-   When you use a community image to create ECS instances, you are charged for other resources used by the instances, such as vCPUs, memory, storage, public bandwidth, and snapshots. For information about the billing details, see [Billing overview](/help/en/ecs/billing-overview).
    

## **Method 1: Select a community image on the ECS instance buy page**

1.  Go to the [instance buy page](https://ecs-buy.alibabacloud.com/wizard/#/) in the ECS console.
    
2.  Click the **Custom Launch** tab.
    
3.  Configure the Billing Method, Region, and Instance Type parameters.
    
    For information about how to configure the parameters, see [Custom launch](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
    
4.  In the Image section, click **Community Images**, and then click **View All Community Images**.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2219126861/p673217.png)
    
    You are redirected to the community image list on the Images page. Community images that belong to the specified region are displayed.
    
5.  On the Community Images tab, enter a keyword such as CentOS and click the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1004886861/p673226.png) icon.
    
6.  Find the community image of the operating system version that you want to use, move the pointer over the ID of the community image, and then click the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1004886861/p673228.png) icon to copy the ID.
    
7.  Go back to the instance buy page and paste the ID of the community image in the Image section. Read and agree to the terms and agreements related to community images, and then proceed to create the instance.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2219126861/p673233.png)
    
    **Note**
    
    -   If you are purchasing community images for the first time and the **Supplier Name** column that corresponds to the community image that you want to purchase is empty, you must sign the terms and agreements related to community images.
        
    -   If the error message "**The community image does not exist or does not support the selected instance type. Specify a different image**" appears after you enter a community image ID, the error may be due to following reasons. We recommend that you use a community image that does not match the following reasons:
        
        -   The community image does not belong to the region that you specify for the instance.
            
        -   The community image does not support the instance type that you specify for the instance.
            
    

## **Method 2: Select a community image in the community image list to create an ECS instance**

1.  Go to [ECS console - Images](https://ecs.console.alibabacloud.com/image).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Images** page, click the **Community Images** tab.
    
4.  On the Community Images tab, enter a keyword such as CentOS and click the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1004886861/p673226.png) icon.
    
5.  Find the community image of the operating system version that you want to use and click **Create Instance** in the **Actions** column.
    
6.  On the instance buy page, configure the parameters to create one or more instances.
    
    The Region and Image parameters are automatically populated. Configure other parameters based on your business requirements. For information about how to configure the parameters, see [Custom launch](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
