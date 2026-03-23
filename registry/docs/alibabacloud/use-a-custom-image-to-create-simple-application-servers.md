You can use a custom image to create one or more simple application servers with the same or higher configurations.

## Prerequisites

A custom image is created. For more information, see [Create a custom image](/help/en/simple-application-server/user-guide/create-a-custom-image#task-2022970).

## Important constraints

Before you begin, review the following constraints:

-   **Region restriction**: You can use a custom image to create simple application servers only in the same region.
    
-   **Disk size requirements**: When you create a server from a custom image, the sizes of the system disk and data disk cannot be smaller than the **total disk capacity** of the source image.
    
    **Note**
    
    If you share a custom image that contains a data disk across accounts, the custom image received by the peer account does not contain the data disk.
    
-   **Cross-account image sharing**: If you share a custom image that contains a data disk across accounts, the custom image received by the peer account does not contain the data disk.
    
-   **Do not modify source resources during creation**: While a simple application server is being created from a custom image, do not perform any of the following operations. Otherwise, the server creation will fail.
    
    -   Delete the custom image.
        
    -   Delete the source snapshot of the custom image.
        
    -   Reset the system or replace the image of the source simple application server.
        
    -   Release the source simple application server from which the custom image was created.
        
-   **Image lifecycle**: After a custom image is released or deleted, you cannot reset the servers that were created from that image.
    

## **Procedure**

You can create a simple application server from a custom image by using one of the following methods:

-   **Method 1**: Create a server directly from the Images page. Use this method when you already know which custom image to use.
    
-   **Method 2**: Select a custom image when creating a server from the Servers page. Use this method when you want to configure all server settings together.
    

### **Method 1: Create a server directly from an image**

1.  Go to the [Image page](https://swas.console.alibabacloud.com/images/) in the Simple Application Server console.
    
2.  In the **Actions** column of the target custom image, click **Create Simple Application Server (SAS)**.
    
3.  On the purchase page, complete the server configuration items.
    
    The system automatically sets the **Region** and **Image** configuration items based on the custom image. You only need to complete the other configuration items as needed. The following table describes the configuration items.
    
    **Configuration item**
    
    **Description**
    
    **Instance**
    
    The system sets a default plan based on the size of the system disk data in your custom image. You can also select a plan with higher specifications than the default plan as needed. You are charged for outbound Internet traffic that exceeds the amount included in the plan. For more information, see [Billing overview](/help/en/simple-application-server/product-overview/overview#concept-2081703).
    
    **Data Disk**
    
    Optional. If your business requires a larger storage device, you can select a data disk of a custom size.
    
    **Note**
    
    If the custom image contains data disk data, the default value of the **Data Disk** configuration item is greater than or equal to the size of the data disk data in the custom image.
    
    **Duration**
    
    Select a subscription duration for the server. To enable auto-renewal, select **Enable Auto-renewal**.
    
    **Quantity**
    
    The number of servers to purchase. The default value is 1.
    
4.  Click **Buy Now** and follow the on-screen instructions to create the server.
    

### **Method 2: Select a custom image when creating a server**

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  Click **Create Server**.
    
3.  On the purchase page, complete the server configuration.
    
    **Note**
    
    If your custom image contains a data disk, click **Back to Old Version** in the upper-right corner of the purchase page and follow the on-screen instructions to purchase the server.
    
    The following table describes the configuration items.
    
    **Configuration item**
    
    **Description**
    
    **Region**
    
    Select the region where the custom image is located.
    
    **Important**
    
    Servers in regions outside the Chinese mainland, such as China (Hong Kong) and Singapore, provide international bandwidth. You may experience high network latency when you access these servers from the Chinese mainland. For more information, see [Regions and network connectivity](/help/en/simple-application-server/product-overview/regions-and-network-connectivity#concept-2579961).
    
    **Instance**
    
    The system disk capacity of the selected instance must be greater than or equal to the system disk capacity of the custom image. See the instance configuration details below this table.
    
    -   **Select an instance family**: Options include General-purpose, CPU-optimized, Multi-IP, International, and Larger-capacity. For information about the scenarios and features of different instance families, see [Instance families](/help/en/simple-application-server/product-overview/instance-families/#10c4b0ad70bu1).
        
    -   **Select a plan**: Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3914721571/p957894.png) to view more plans. A plan includes specifications for vCPUs, memory, the system disk, and the data transfer plan. For more information, see [Instance specifications](/help/en/simple-application-server/product-overview/instance-families/#832e712ea1hob).
        
    
    **Important**
    
    To create a server that runs a Windows image, select a plan with a system disk larger than 40 GiB.
    
    **Image**
    
    Click **Custom Image** and select the custom image that you want to use.
    
    **Purchase Settings**
    
    Configure the quantity, subscription duration, and auto-renewal settings. See the purchase configuration details below this table.
    
    -   **Quantity**: The number of servers to purchase. The default value is 1.
        
    -   **Duration**: The subscription duration. The default value is 1 month.
        
        -   Monthly subscription: 1 month.
            
        -   Yearly subscription: 1 year, 2 years, or 3 years.
            
    -   **Enable Auto-renewal**: Enabled by default to prevent business interruptions caused by subscription expiration. For more information, see [Auto-renewal](/help/en/simple-application-server/product-overview/upgrade-and-renew-a-simple-application-server#9950c5359dafj).
        
        -   Monthly subscription: The renewal period is 1 month.
            
        -   Yearly subscription: The renewal period is 1 year.
            
    
4.  Click **Buy Now** and follow the on-screen instructions to create the server.
