Connecting your on-premises data center to the cloud using a leased line can be a complex process, requiring coordination between your business, Internet Service Provider (ISP), and Alibaba Cloud. To streamline this, Alibaba Cloud offers the **one-stop cloud connectivity service**, a managed service designed to simplify your deployment. We match you with qualified suppliers experienced in deploying Express Connect circuits. A dedicated Alibaba Cloud service manager will assist you through the entire lifecycle from planning and supplier selection to deployment and acceptance. **Note that Alibaba Cloud does not deliver any Express Connect circuits. You sign a contract with the supplier, who delivers the resources to you**. Alibaba Cloud provides coordination and support to help you plan your cloud connection, accelerate deployment, and improve response times.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1826303671/CAEQTxiBgMCMh8z00xkiIGE4MWRkYTQ5MzQ1MDQ4Y2U4Y2U3M2I0MTc1ODI0OTI05784957_20251011153723.832.svg)

## Process

The following table outlines the process of the one-stop cloud connectivity service.

Step

Stage

Owner

Description

1

Application

Customer

Submit an application that includes data center location and bandwidth. An Alibaba Cloud service manager will contact you within 72 hours.

2

Analysis

Supplier

After confirming your application, the service manager invites you to a dedicated service group and connects you with a supplier. The supplier then preliminarily analyzes your requirements.

3

Resource Survey

Supplier

The supplier conducts a site survey of your data center, checking equipment specifications like optical transceiver modules and cables, planning the physical cabling, and defining security measures.

4

Contract signing

Customer and Supplier

You and the supplier confirm and sign the contract.

5

Delivery

Supplier

An ISP begins on-site installation.

6

Completion

Supplier

The supplier submits a completion report, and you can begin the acceptance process.

7

Acceptance

Customer

The service concludes once you complete the acceptance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1826303671/CAEQTxiBgMD_n8j00xkiIDk5YWZjMzA2Y2VkMTRhZjA5ZWJhMzJhZTlkMjU0MTg45784957_20251011144729.800.svg)

## Submit an application

To begin the process, you must submit an application with details about your on-premises location and expected access points. This helps supplier provide an accurate quote and plan the site survey. After you submit the application, an Alibaba Cloud service manager will contact you within 72 hours.

Go to the **[One-stop cloud connectivity](https://expressconnect.console.alibabacloud.com/cloudlink)** page in the Express Connect console. Click **Create application** and configure the following parameters:

1.  **Requester**: Your on-premises data center or IT room, which is the source of the leased line connection.
    
    1.  **Exact Data Center Location**: Enter the precise address of your data center.
        
    2.  **Access Bandwidth Spec**: The supported bandwidth ranges from 1 Mbps to 100 Gbps.
        
    3.  **Line Provider**: Select a supplier supported by your data center. Confirm with the building or property management or your colocation provider.
        
    4.  **Duration**: Select a duration from 1 to 3 years.
        
    5.  **Contact Person** and **Phone Number**: Enter your contact information.
        
2.  **Access Point**: The network access point on the Alibaba Cloud or supplier side, which is the destination of the Express Connect circuit connection. The circuit connects to the cloud network at this point to enable communication with cloud resources.
    
    This service supports two types of access points:
    
    -   **Alibaba Cloud access points**: Operated by Alibaba Cloud, typically located in regions with Alibaba Cloud data centers. It supports high bandwidth (1 Gbps to 100 Gbps) but has limited geographical coverage. For a list of supported access points, see [Alibaba Cloud access points](/help/en/express-connect/getting-started/locations-of-access-points#section-34q-7ht-5fe).
        
    -   **Partner access points**: Operated by a third-party supplier. Bandwidth is limited (less than 10 Gbps) but offers broader coverage and more connection options. The supplier first connects your circuit to the nearest partner access point and forwards the traffic through its own network to an Alibaba Cloud access point.
        
    
    Parameters:
    
    -   **Region**: Select the destination region.
        
    -   **Express Connect Circuit Provider**: Select your preferred ISP. You can choose more than one ISP. The access point locations and port specifications vary by ISP. View the details in the dropdown lists.
        
    -   **Access Point**: Connection fees are impacted by the geographical distance between your data center and the access point. A longer distance typically results in higher costs. We recommend choosing the nearest access point.
        
        > For Alibaba Cloud access points, use the [Recommended mode](/help/en/express-connect/user-guide/recommend-mode) to check the network latency of each access point.
        
    -   **Port Spec**: Select the bandwidth for the physical port at the access point.
        
        -   The supported bandwidth for an Alibaba Cloud access point is 1 Gbps to 100 Gbps. The corresponding physical port is a `dedicated` port, which means you have exclusive use of a circuit.
            
            -   If you have already determined the access point, click **I agree to create the port** and submit the application.
                
            -   If not, click **OK** without creating a port. During the **Delivery** stage, the system will automatically create a port for you. You must then manually associate with this connection.
                
        -   The supported bandwidth for a partner access point is less than 10 Gbps. After resource delivery, you are assigned a `shared` port, which means you share the connection with other tenants.
            

## Track progress

1.  An Alibaba Cloud service manager will contact you within 72 hours. Keep your phone line open. For faster support, you can join the service group by scanning the QR code. Find the target connection in the list, click **Get Help** in the **Actions** column to find the QR code.
    
2.  During deployment, view the status in the **Line Delivery Progress** column for your connection. The responsible party and start time are updated at each stage.
    
3.  During the **Requirement Submission** and **Requirement Analysis** stages, click **Edit** in the **Actions** column to modify your application. After **Resource Survey** begins, you cannot modify it.
    

## Update bandwidth

You can upgrade the bandwidth only when the status is **Acceptance Completed**. To do this, find the target circuit and click **Upgrade/Downgrade** in the **Actions** column. After you submit the upgrade request, the status changes to **Requirement Submission**, initiating a new service process.

## Billing

While the one-stop cloud connectivity service is free of charge, you must [pay for the associated Express Connect resources](/help/en/express-connect/product-overview/billing-overview/).
