This topic describes how to use Express Connect circuits to create high-quality, reliable, and private connections between a data center and virtual private clouds (VPCs) in different regions.

## Features

You can use the following features of Express Connect to create a private connection between a data center and a VPC on Alibaba Cloud.

-   Express Connect circuit
    
    Connect to Alibaba Cloud through the nearest access point by using an Express Connect circuit. For more information, see [Functions and features](/help/en/express-connect/product-overview/functions-and-features#concept-zmz-dzs-ggb).
    
-   Peering connection
    
    Create a router interface to connect a virtual border router (VBR) and a VPC. This way, the data center and the VPC can communicate with each other through a private connection. For more information, see [Peering connections](/help/en/express-connect/user-guide/what-is-a-vbr-to-vpc-connection/#concept-nbd-tj3-dfb).
    

## Connect to Alibaba Cloud through the nearest access point

Before you use an Express Connect circuit to connect to Alibaba Cloud, you must choose an access point. Express Connect provides access points in different regions on a global scale. You can choose an access point of Alibaba Cloud or an Express Connect partner.

-   Alibaba Cloud access points
    
    Obtain the information about Alibaba Cloud access points. For more information, see [Locations of access points](/help/en/express-connect/getting-started/locations-of-access-points#concept-2089256).
    
-   Access points of Express Connect partners
    
    The access points of Express Connect partners are already connected to Alibaba Cloud through Express Connect circuits. You need only to connect your data center to an access point of an Express Connect partner. For more information about access points provided by partners, see [Alibaba Cloud partners](/help/en/express-connect/user-guide/overview-of-hosted-connections/#section-c8q-1yo-vk3).
    

Choose an access point based on the location of your data center:

-   Choose an access point in the city where your data center is located.
    
-   If no access point is deployed in the city where your data center is located, choose one that is nearest to your data center.
    
    For example, a company has a data center in Beijing, a data center in Tianjin, and a data center in Zhuozhou, the company can choose access points based on the following rules:
    
    -   Alibaba Cloud provides access points in the China (Beijing) region. To connect the data center in Beijing to Alibaba Cloud through an Express Connect circuit, the company can choose an access point in the China (Beijing) region.
        
    -   Alibaba Cloud does not provide access points in the China (Tianjin) region. However, Express Connect partners provide access points in Tianjin. To connect the data center in Tianjin to Alibaba Cloud through an Express Connect circuit, the company can choose an access point provided by an Express Connect partner.
        
    -   Neither Alibaba Cloud nor Express Connect partners provide access points in Zhuozhou. In this case, the company can choose an access point in the China (Beijing) region, which is the nearest access point to Zhuozhou.
        
    
    ![就近接入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2666245461/p378775.png)
    

## Enable communication between a data center and services on Alibaba Cloud

After you connect a data center to Alibaba Cloud through an Express Connect circuit, you can create peering connections to VPCs deployed in different regions. This way, the data center and the VPCs can communicate with each other.

For example, a company wants its data center in Beijing to communicate with a VPC in the China (Shenzhen) region and a VPC in the China (Beijing) region, the company must perform the following operations: Connect the data center to Alibaba Cloud through an Express Connect circuit. Then, create two router interfaces for the VBR that is associated with the Express Connect circuit. The router interfaces are used to enable communication between the VBR and the VPC. For more information, see [Create and manage a VBR-to-VPC connection](/help/en/express-connect/user-guide/create-and-manage-a-vbr-to-vpc-connection#task-j2d-hk3-dfb).

![云上云下互通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2666245461/p378777.png)
