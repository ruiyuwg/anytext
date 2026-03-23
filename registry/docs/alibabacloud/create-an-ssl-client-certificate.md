This topic describes how to create and manage an SSL client certificate. After you create an SSL client certificate, you must download and install the certificate on the client for identity authentication and data encryption. Only the client that passes the identity authentication can establish an SSL-VPN connection to Alibaba Cloud.

## Prerequisites

An SSL server is created. For more information, see [Create and manage an SSL server](/help/en/vpn/sub-product-ssl-vpn/user-guide/create-an-ssl-server#task-2071402).

## Create an SSL client certificate

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **SSL Clients**.
    
3.  In the top navigation bar, select the region of the SSL client.
4.  On the **SSL Clients** page, click **Create SSL Client**.
    
5.  In the **Create SSL Client** panel, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the SSL client certificate.
    
    **Resource Group**
    
    The resource group to which the SSL client certificate belongs.
    
    The resource group to which the SSL client certificate belongs must be the same as the resource group to which the SSL server belongs.
    
    **SSL Server**
    
    The SSL server with which you want to associate the SSL client certificate.
    

### **What to do next**

After the SSL client certificate is created, you must download the certificate and install the certificate on the client. For more information, refer to the following section and topic:

-   [Download an SSL client certificate](/help/en/vpn/download-an-ssl-client-certificate)
    
-   The [Step 4: Configure the client](/help/en/vpn/sub-product-ssl-vpn/getting-started/connect-a-client-to-a-vpc#section-zny-zwz-wdb) section of the "Connect a client to a VPC" topic
    

## **Download an SSL client certificate**

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **SSL Clients**.
    
3.  In the top navigation bar, select the region of the SSL client.
4.  On the **SSL Clients** page, find the SSL client certificate that you want to download and click **Download Certificate** in the **Actions** column.
    

## **Delete an SSL client certificate**

**Important**

If you delete an SSL client certificate, the SSL-VPN connections of all clients to the SSL server are interrupted. You need to reinitiate SSL-VPN connections from the clients.

For example, SSL client certificate 1 and SSL client certificate 2 are created for an SSL server. If you delete SSL client certificate 1, all SSL-VPN connections associated with SSL client certificate 1 and SSL client certificate 2 are interrupted.

-   If you want to establish SSL-VPN connections for the clients associated with SSL client certificate 1, you must first install new certificates for the clients.
    
-   If you want to establish SSL-VPN connections for the clients associated with SSL client certificate 2, you can directly reinitiate SSL-VPN connections from the clients.
    

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **SSL Clients**.
    
3.  In the top navigation bar, select the region of the SSL client.
4.  On the **SSL Clients** page, find the SSL client certificate that you want to delete and click **Delete** in the **Actions** column.
    
5.  In the message that appears,**Are you sure that you want to delete the client certificates?** confirm the information and click **Delete**.
    

## **Create and manage an SSL client certificate by calling API operations**

You can call API operations to create, query, or delete an SSL client certificate by using [Alibaba Cloud SDKs](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud Command Line Interface (Alibaba Cloud CLI)](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), or [Resource Orchestration Service (ROS)](/help/en/openapi/ros). We recommend that you call API operations by using Alibaba Cloud SDKs. For more information about the related API operations, see the following topics:

-   [CreateSslVpnClientCert](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-createsslvpnclientcert-ssl-vpn)
    
-   [DeleteSslVpnClientCert](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-deletesslvpnclientcert-ssl-vpn)
    
-   [ModifySslVpnClientCert](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-modifysslvpnclientcert-ssl-vpn)
    
-   [DescribeSslVpnClientCerts](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-describesslvpnclientcerts-ssl-vpn)
    
-   [DescribeSslVpnClientCert](/help/en/vpn/sub-product-ssl-vpn/developer-reference/api-vpc-2016-04-28-describesslvpnclientcert-ssl-vpn)
