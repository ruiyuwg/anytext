Data Transmission Service (DTS) requires network access to your on-premises database for data migration, synchronization, or change tracking. If the database connects to Alibaba Cloud through an IPsec-VPN tunnel, you must add the DTS server CIDR blocks to the IPsec connection so that DTS traffic can pass through the tunnel.

**Important**

DTS uses multiple CIDR blocks per region. IKEv1 supports only one CIDR block in the **Local Network** field. Your IPsec connection must use **ikev2**. If your existing connection uses IKEv1, upgrade to IKEv2 before you proceed.

## Prerequisites

Before you begin, ensure that you have:

-   An IPsec-VPN connection between your on-premises data center and an Alibaba Cloud Virtual Private Cloud (VPC). For setup instructions, see [Connect a VPC to a data center in single-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/product-overview/connect-a-data-center-to-a-vpc)
    
-   The CIDR blocks of DTS servers in your region. For the full list, see [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases)
    

## Procedure

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Interconnections** > **VPN** > **IPsec Connections**.
    
3.  Modify the IPsec connection with the following settings:
    
    1.  Set **Routing Mode** to **Protected Data Flows**.
        
    2.  In the **Local Network** field, enter the CIDR blocks of all DTS servers in your region.
        
    3.  In the **Remote Network** field, enter the IP address of your data center.
        
    4.  In the **IKE Configurations** section, select **ikev2** from the **Version** drop-down list.
        
    
    ![IPsec connection configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2171783861/p630880.jpg)
    
4.  Download the updated IPsec-VPN connection configuration and apply it to the gateway device in your data center. For detailed steps, see [Load the IPsec-VPN connection configuration to the gateway device](/help/en/vpn/sub-product-ipsec-vpn/product-overview/connect-a-data-center-to-a-vpc).
    
    **Note**
    
    When you update the VPN configuration on your gateway device, add only the CIDR blocks of the VPC and your data center. Do not add DTS server CIDR blocks to the gateway device configuration. For example, on an H3C firewall, enter the data center and VPC CIDR blocks in the **Source IP Address** and **Destination IP Address** fields. Leave the DTS server CIDR blocks out.
    
5.  Add a static route on the gateway device in your data center. Set the destination to the [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases) and the next hop to the IPsec-VPN tunnel interface.
    

## Troubleshooting

If the IPsec connection fails after configuration, see [Troubleshoot IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-ipsec-vpn-connections).

## Next steps

After you configure the VPN route, create a DTS task to start migrating or synchronizing data:

1.  When you configure data migration, data synchronization, or change tracking, select **Express Connect, VPN Gateway, or Smart Access Gateway** as the access method.
    
2.  Select the VPC that is connected to your on-premises database.
    
3.  Specify the on-premises database as the source or destination database.
    

For supported scenarios, see [Data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301) or [Data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh).
