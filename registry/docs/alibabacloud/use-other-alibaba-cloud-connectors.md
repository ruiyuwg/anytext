If the business resources of an enterprise are deployed outside Alibaba Cloud and Alibaba Cloud network instances are deployed in the network topology of the enterprise, you can use the Secure Access Service Edge (SASE) gateway and the Alibaba Cloud network instances to connect the on-premises network of the enterprise to the business resources outside Alibaba Cloud. This way, the users of the enterprise can access the business resources over an internal network. The Alibaba Cloud network instances refer to virtual border routers (VBRs), Cloud Connect Network (CCN) instances, and VPN gateways. This topic describes how to synchronize Alibaba Cloud network instances as connectors, configure a back-to-origin virtual private cloud (VPC), and turn on or turn off Network Connection.

## Manage business resources across multiple Alibaba Cloud accounts

If you want to manage connectors within a member of your resource directory, you must add the member first. After the member is added, you can view the VBRs, IPsec-VPN connections, and Smart Access Gateway (SAG) instances within the management account and added member on the Private Access > **Network Settings** > **Services Outside Alibaba Cloud** page of the SASE console. If no member is added, you can view only the VBRs, IPsec-VPN connections, and SAG instances within the management account on the page. For more information, see [Use the multi-account management feature](/help/en/sase/user-guide/multi-account-management#task-2065914).

## **Network connection diagram**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6618510271/CAEQJxiBgIDPrtvMgxkiIDdkMDEzMGY3Y2YxYTQ3NGViY2Q1NmMxODNjYjRlZGMy4104278_20231215103717.805.svg)

## **Turn on Network Connection**

### **Step 1: Synchronize Alibaba Cloud network instances**

SASE automatically synchronizes your Alibaba Cloud network instances. The following table describes the parameters that you can view after synchronization.

**Parameter**

**Description**

**Connector Type**

The type of the connector. SASE supports only the following types of connectors: VBR Leased Line, CCN, and VPN Gateway.

**Instance ID/Name**

The ID of the instance that is synchronized to generate the connector. The instance can be a VBR, CCN instance, or VPN gateway.

**Owner Account**

The account to which the connector belongs. The account can be the management account or a member.

**Network Channel**

The network channel of the connector.

If the connector type is VBR Leased Line, the network channel is **Leased Line**. If the connector type is CCN, the network channel is **SAG**. If the connector type is VPN Gateway, the network channel is **IPsecVPN**.

**Internal CIDR Block:**

The internal CIDR block of your on-premises network or the CIDR block of vSwitches in your VPC on Alibaba Cloud.

-   If the network channel is **SAG** or **IPsecVPN**, SASE automatically obtains the internal CIDR block. In this case, you do not need to configure this parameter.
    
-   If the network channel is **Leased Line**, SASE does not automatically obtain the internal CIDR block. In this case, you must specify a value for this parameter.
    

Separate multiple CIDR blocks with commas (,).

### **Step 2: Configure a back-to-origin VPC**

If your on-premises network is connected to the cloud network of Alibaba Cloud over the **SAG**, **IPsecVPN**, or **Leased Line** network channel, SASE can access the on-premises network over a VPC that is connected to the on-premises network. This type of VPC is referred to as a back-to-origin VPC.

-   If the connector type is **VPN Gateway**, you cannot change the back-to-origin VPC because only one VPC is connected to the on-premises network.
    
-   If the connector type is **VBR Leased Line**, you must specify a back-to-origin address in the **Back-to-origin VPC** column.
    
-   If the connector type is **CCN**, you can click **Select Back-to-origin VPC** in the **Actions** column to select back-to-origin VPCs.
    
    **Note**
    
    In theory, all VPCs added to the CCN instance are connected to the on-premises network. However, if you configured routing or security policies, you must select the back-to-origin VPCs from which access to the on-premises network is allowed.
    

### **Step 3: Turn on Network Connection**

On the **Cloud Network Instance** tab, find the required connector and turn on the switch in the **Network Connection** column. This way, the users can access services outside Alibaba Cloud from the SASE client.

## **Turn off Network Connection**

If you no longer need a network channel, you can turn off **Network Connection** for the network channel.

**Important**

After you turn off Network Connection, the users can no longer access office applications from the SASE client. Proceed with caution.

## What to do next

After you enable network connections, you must configure applications to allow users to access the applications. For more information, see [Configure office applications](/help/en/sase/user-guide/application-management) and [Configure zero trust policies](/help/en/sase/user-guide/configure-a-zero-trust-policy).

## **References**

-   If you want to allow traffic from specific IP addresses after you configure applications, you can configure an application whitelist. For more information, see [Configure an office application whitelist](/help/en/sase/user-guide/application-management#1a186b932fvo8).
    
-   You can connect SASE to business applications that are deployed on Alibaba Cloud. For more information, see [Enable network connections for services on Alibaba Cloud](/help/en/sase/user-guide/alibaba-cloud-business/).
    
-   You can connect SASE to applications in global offices. For more information, see [Enable network connections for applications in global office scenarios](/help/en/sase/user-guide/open-up-the-network-channel-of-global-office).
