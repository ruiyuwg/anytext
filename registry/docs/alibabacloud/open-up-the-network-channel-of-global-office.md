The global office feature allows users to access business resources of your enterprise from the Secure Access Service Edge (SASE) client. The feature allows users outside the Chinese mainland to access business resources in and outside the Chinese mainland, and users in the Chinese mainland to access business resources outside the Chinese mainland. This topic describes how to use SASE together with the private cross-border leased lines of your enterprise to build a secure global office solution.

## **How cross-border networks work**

The global office feature of SASE is designed based on the principle of dynamic routing. When users reside outside the Chinese mainland, the enterprise administrator can establish secure network connections for global office by using specific points of presence (POPs), a SASE connector, and the access route of the private cross-border leased line. When users reside in the Chinese mainland where a large number of POP clusters are available, the SASE client can use intelligent routing to establish network connections. You need to only create a SASE connector in the Chinese mainland based on the region where your business resources are deployed.

The following figure shows the cross-border access scenarios and network topologies.

-   **Users outside the Chinese mainland access business resources outside the Chinese mainland**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712880371/CAEQLxiBgIDj3bqCmBkiIDg5MTJlNmZiYTU0NDRjZjRhMjU2ZjIyZGM4OWUyN2Mx4023836_20231008114314.945.svg)
-   **Users outside the Chinese mainland access enterprise business in the Chinese mainland**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4712880371/CAEQLxiBgMCQq7uCmBkiIDhmODJjNzczMjY4ZDQ0Yjk5MTE1OTIzODdjMThhZDZl4023836_20231008114314.945.svg)
-   **Users in the Chinese mainland access business resources outside the Chinese mainland**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5712880371/CAEQLxiBgIDv.buCmBkiIDg5OTgwYmU5YjQ2MjQ1YmQ5ZjNlZTcyM2YyYjI5Nzg14023836_20231008114314.945.svg)

## **Prerequisites**

-   The Private Access Advanced Edition of SASE is enabled. For more information, see [Billing overview](/help/en/sase/product-overview/billing-overview).
    
-   The cross-border leased line of the enterprise is registered with carriers. The private cross-border leased line of the enterprise can connect office zones.
    
-   A SASE connector is created. For more information, see [Enable network connections for services outside Alibaba Cloud](/help/en/sase/user-guide/non-alibaba-cloud-business/#section-psz-eo4-mht).
    
    To reduce network latency, users must connect to a SASE POP cluster that is closest to their office zone. In this case, you must create a SASE connector closest to the SASE POP cluster.
    

## **Procedure**

### **Step 1: Enable the global office feature**

If you enable the global office feature, the system synchronizes the configurations of application management and zero trust policies to the SASE POP cluster outside the Chinese mainland. This allows users outside the Chinese mainland to access the nearest SASE server for authentication.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Private Access** > **Network Settings**.
    
3.  On the **Global Office** tab, click **Authorization Management**.
    
4.  In the **Authorization Management** dialog box, turn on Global Office and select authorized SASE POP clusters outside the Chinese mainland.
    
    The following POP clusters outside the Chinese mainland are supported:
    
    -   POP Cluster (Singapore)
        
    -   POP Cluster (Virginia)
        
    -   POP Cluster (Silicon Valley)
        

### **Step 2: Create a dynamic route**

The enterprise administrator creates a dynamic route in the SASE console, associates the route with the private cross-border leased line of the enterprise, and enables network connections between SASE POP clusters and business resources by using a SASE connector.

1.  On the **Global Office** tab, click **Create Route**.
    
2.  In the **Create Route** panel, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Route Name**
    
    The name of the route.
    
    **Route Description**
    
    The description of the route.
    
    **Priority**
    
    The priority of the route.
    
    **Routing Mode**
    
    The value is fixed as Private Leased Line.
    
    **Note**
    
    If you use the private leased line mode, make sure that the cross-border connections between office zones are enabled.
    
    **Select Application**
    
    Select the office applications that you allow users to access.
    
    **POP Access Point**
    
    Select authorized POP clusters outside the Chinese mainland.
    
    **Status**
    
    The status of the route. The route takes effect only when you enable the route.
    
3.  Click **Next** to select an existing SASE connector. Click **OK**.
    

## **What to do next**

After users log on to the SASE client, users can access business applications across borders by selecting the corresponding POP access point. For more information, see [Install and log on to the SASE client](/help/en/sase/user-guide/install-and-log-on-to-sase-client) and [Enable or disable network protection for private access on the SASE client](/help/en/sase/user-guide/enable-or-disable-network-security-protection).

## **FAQ**

#### If I select different business applications when I configure a SASE **connector and dynamic route**, **which application can users access?**

Users can access the application that is associated with the dynamic route. Dynamic routes have a higher priority than SASE connectors. If your SASE connector and dynamic route are associated with different applications, users can access the application that is associated with the dynamic routes.
