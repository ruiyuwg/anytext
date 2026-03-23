You can establish connection from your on-premises data center to Alibaba Cloud by leasing a line from an Internet Service Provider, or an ISP. Compared to the Internet, Express Connect circuit is more secure, faster with lower latency.

## **Access methods**

Two access methods are supported:

-   **Dedicated circuit**
    
    You run a dedicated circuit from your on-premises IDC to an Alibaba Cloud access point, exclusively occupying a physical port at the access point. The construction period is 1-3 months, with bandwidth of up to 100 Gbps. You need to apply through the console. For more information, see [Procedure of dedicated Express Connect circuit access](/help/en/express-connect/user-guide/process-of-creating-a-dedicated-physical-connection/).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0083630771/CAEQUxiBgIDpxM3H4RkiIDg2ZGYzZjQ1MDk1MzRkZjdiMTVhMDE0ZmQwNTgzYjU06460557_20260205160443.246.svg)
-   **Shared circuit**
    
    Some partners (compliant ISPs) have pre-established connection to Alibaba Cloud access points. Contact a partner to connect your on-premises IDC to their access point. Compared to dedicated circuit, partner access points have broader geographic coverage and shorter construction periods (typically within 1 month). The connection between partners and Alibaba Cloud is shared among multiple tenants. For more information, see [Connection process for hosted connections over Express Connect circuits](/help/en/express-connect/user-guide/overview-of-hosted-connections/).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0083630771/CAEQUxiBgMD.2M7H4RkiIGFiMTUxZWQ5MjkzMjRjM2RiNjM5YjQ4ZDVkYjQyZjdh4120456_20231218171752.018.svg)

## Port specifications

-   **Dedicated circuit**:
    
    -   **Connection types**: MSTP, MPLS VPN, and direct fiber connection are supported.
        
    -   **Port standards**: 1000Base-LX and 10GBase-LR optical ports (LC connector, 10 km transmission distance) are supported by default.
        
    -   **Transmission rates**: 1 Gbps to 100 Gbps are supported.
        
    
    > Some legacy electrical port devices do not support the advanced features of Express Connect. If you are still using electrical ports, contact your carrier to migrate your connection to optical ports.
    
-   **Shared circuit**: Contact the partner for details.
    

## Access point locations

For the geographic locations of Alibaba Cloud access points and partner access points, see [Endpoints](/help/en/express-connect/getting-started/locations-of-access-points).

To get more location details:

-   Dedicated circuit:
    
    -   **Method** **1**: After your [LOA application](/help/en/express-connect/user-guide/classic-mode#section-lzc-lxr-wqi) is approved, download the Letter of Authorization (LOA) file to find the detailed location.
        
    -   **Method** **2**: In [Quota Center](https://quotas.console.alibabacloud.com/products/expressconnect/quotas?query=ec_can_get_pconn_address), submit an application for the `ec_can_get_pconn_address` quota. After the application is approved, you can find the Access Point in the console:
        
        > If you cannot find this quota, contact your account manager.
        
        -   **View the Access Point location**: In the **Access Point** column for the target Physical Connection, hover over the ![叹号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2330417861/p569360.png) icon to view its location.
            
        -   **View the Access Device Location**: Click the Physical Connection ID. On the details page, find the **Access Device Location**.
            
-   Shared circuit: Contact the partner for details.
