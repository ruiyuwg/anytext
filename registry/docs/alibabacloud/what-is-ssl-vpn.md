SSL-VPN is an OpenVPN-based network connection technology. It requires certificate installation to authenticate Internet clients and encrypt data transmission. You can use SSL-VPN to establish secure and reliable network connections between Internet clients and virtual private cloud (VPCs).

**Note**

Alibaba Cloud VPN Gateway provides services in compliance with the policies and regulations of the Chinese mainland. You can use VPN Gateway to establish only intra-border connections. For more information, see [What are cross-border connections and non-cross-border connections?](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-vpn-gateways#8ea8b9807d3r5)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1101795671/CAEQUBiBgMCh1KWw2RkiIDhlNTM4Mjc4NjA5NTQzZGJiMTYzMGZiZGIyMzMxZDhk4146783_20240109141140.646.svg)

## **SSL-VPN composition**

**Component**

**Description**

VPN gateway

Before you use SSL-VPN, you must purchase a VPN gateway and enable SSL-VPN for the VPN gateway. After you purchase a VPN gateway, Alibaba Cloud deploys VPN resources for you.

SSL server

You must create an SSL server based on the VPN gateway to control which networks and resources the client can access.

SSL client certificate

You must create an SSL client certificate based on the SSL server. After the certificate is created, it must be downloaded and installed on the client to authenticate the client and encrypt data.

VPN software

VPN software must be downloaded and installed on the client. The client must use the VPN software to establish an SSL-VPN connection with the VPN gateway.

Client

The client must have access to the Internet. After the VPN software and SSL client certificate are installed on the client, an SSL-VPN connection is established between the client and the VPN gateway over the Internet.

## **Supported client types**

Internet clients that run Windows, Linux, macOS, or Android can establish SSL-VPN connections with VPN gateways.

**Note**

Internet clients that run iOS can also establish VPN connections with VPN gateways. For more information, see [IPsec-VPN servers](/help/en/vpn/sub-product-ssl-vpn/user-guide/configure-ipsec-vpn-servers/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1101795671/CAEQUBiBgMDEj6aw2RkiIDU1ZmY3ZmNjMWQ1YzRlMjdiNjk4NTY4ZDNmM2Q3N2Rm4146783_20240109141140.646.svg)

## **References**

-   [Billing of SSL-VPN](/help/en/vpn/sub-product-ssl-vpn/product-overview/billing-rules-for-ssl-vpn)
    
-   [Overview](/help/en/vpn/sub-product-ssl-vpn/getting-started/ssl-vpn-overview)
