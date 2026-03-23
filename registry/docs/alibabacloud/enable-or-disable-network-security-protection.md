If you want to use the Secure Access Service Edge (SASE) client to access the office applications of your enterprise, you must enable network protection for private access. This topic describes how to enable or disable network protection.

## Prerequisites

-   The SASE client is installed, and logon to the client is complete. For more information, see [Install and log on to the SASE client](/help/en/sase/user-guide/install-and-log-on-to-sase-client).
    
-   Private access, office applications, and zero trust policies are configured by the administrator of your enterprise. For more information, see [Private access](/help/en/sase/user-guide/private-access/).
    

## **Enable network protection**

On the **Network** page of the SASE client, click **Connect** to enable network protection.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4945620371/p865641.png)

## **Configure an access point**

On the **Network** page of the SASE client, click the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6812610271/p671327.png) icon in the lower-right corner of the page. In the **Connection Settings** dialog box, select an access point based on your business requirements. To prevent network latency, we recommend that you select the nearest access point.

-   Manually select an access point
    
    You can switch between the access points that are provided by the SASE client.
    
-   Automatically select an access point
    
    After you click **Auto POP Access point**, the SASE client automatically connects to the nearest access point.
    

## **Configure a DNS service**

If Alibaba Cloud DNS PrivateZone is configured for the applications that you want to access, Alibaba Cloud DNS PrivateZone is used to resolve the domain names of the applications. If you want to access an application of your enterprise and the DNS record provided by Alibaba Cloud DNS PrivateZone does not match the internal CIDR block of the enterprise, the system uses the default DNS service that is configured by the administrator to resolve the domain name of the application.

The SASE client automatically connects to the default DNS service that is configured by the administrator of an enterprise to resolve the domain names of the enterprise office applications.

-   Add a custom DNS service
    
    Click **Add custom DNS address** to add a DNS service.
    
-   Switch between DNS services
    
    On the **Network** page of the SASE client, click the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6812610271/p671327.png) icon in the lower-right corner to switch between DNS services.
    

## **Disable network protection**

If your terminal no longer requires the SASE client to access the office applications of your enterprise, click **Disconnect** to disable network protection.

**Important**

After you disable network protection, your terminal can no longer access the office applications over the internal network. Proceed with caution.

## **References**

-   For more information about how to configure private access, see [Configure network settings](/help/en/sase/user-guide/network-configuration/).
    
-   For more information about how to configure office applications for private access, see [Configure office applications](/help/en/sase/user-guide/application-management).
    
-   For more information about how to configure access control policies for private access, see [Configure zero trust policies](/help/en/sase/user-guide/configure-a-zero-trust-policy).
    
-   For more information about how to configure policies for domain name resolution in SASE, see [Configure policies for domain name resolution](/help/en/sase/user-guide/application-management#b527face777ob).
