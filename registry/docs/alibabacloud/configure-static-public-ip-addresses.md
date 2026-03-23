The default outbound IP address of Function Compute is dynamic and does not belong to any fixed CIDR block. If Function Compute needs to access databases, WeChat mini programs, or other third-party services, you must configure an IP address whitelist. You can use the static IP address feature provided by Function Compute to configure a static IP address and add the IP address to the whitelist. This topic describes how to configure an outbound static public IP address in the Function Compute console.

## Usage notes

-   To use a static public IP address, you must have an Internet NAT gateway in a virtual private cloud (VPC). Specifically, you need to create an Internet NAT gateway, and associate an elastic IP address (EIP) with and create a source network address translation (SNAT) entry for the NAT gateway. This way, VPC-connected instances can use the EIP to access the Internet. The client IP address that you can obtain from the acceptor is the EIP that is associated with the NAT gateway.
    
-   NAT gateways and EIPs are available only in specific zones of a region. If the NAT gateway and EIP that you purchased reside in a zone different from that of your function in Function Compute, you must use a vSwitch to establish cross-zone Internet connections. For more information, see [Zones where Function Compute is available](/help/en/functioncompute/fc/user-guide/configure-network-settings#section-40g-39j-s9a).
    
-   An EIP can be shared among functions in the same region.
    
-   If you want a Resource Access Management (RAM) user to use the static IP address feature, use your Alibaba Cloud account to log on to the [RAM console](https://ram.console.alibabacloud.com/overview) and attach the following policies to the RAM user: `AliyunECSFullAccess`, `AliyunVPCFullAccess`, `AliyunEIPFullAccess`, AliyunRAMFullAccess, and `AliyunNATGatewayFullAccess`.
    

## Billing

When you configure a static public IP address, a NAT gateway and an EIP may be created and fees may be generated. For more information, see [Billing of Internet NAT gateways](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb) and [Billing overview](/help/en/eip/billing-overview#concept-645525).

## Configure static public IP addresses for the first time

### Prerequisites

-   The network is configured and the required permissions to access VPC resources are granted. For more information, see [Configure network settings and roles](/help/en/functioncompute/fc/user-guide/configure-network-settings#section-rjq-d08-jfe).
    
-   The **Access to VPC** parameter is set to **Yes** in network settings. For more information, see [Configure network settings](/help/en/functioncompute/fc/user-guide/configure-network-settings).
    

### **Procedure**

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com). In the left-side navigation pane, click **Functions**.
    
2.  In the top navigation bar, select a region. On the **Functions** page, click the function that you want to manage.
    
3.  On the function details page, click the **Configurations** tab.
    
4.  In the left-side navigation pane, click **Network** and then **Modify**. In the Network panel, set the **Static Public IP Address** parameter to **Yes** and the **Allow Default NIC to Access Internet** parameter to **No**.
    
    **Note**
    
    To ensure that the function can access the Internet as expected, you can set **Allow Default NIC to Access Internet** to **Yes** and wait for the static public IP address setting to take effect before you set **Allow Default NIC to Access Internet** to **No**.
    
5.  Click **OK**. In the **Static Public IP Address Configurations** dialog box, read the message, select the check box, and then click **OK**.
    
    The network configuration takes 1 to 2 minutes to complete. After that, you can view the network configurations. You can also go to the [VPC console](https://vpc.console.alibabacloud.com/) to view the information about the resources that are associated or created.
    

### **Verify configurations**

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com). In the left-side navigation pane, click **Functions**.
    
2.  In the top navigation bar, select a region. On the **Functions** page, click the function that you want to manage.
    
3.  On the function details page, click the **Code** tab and write code in the code editor.
    
    In this example, the function code is written in Python.
    
    ```
    # -*- coding: utf-8 -*-
    import logging
    import requests
    
    def handler(event, context):
      logger = logging.getLogger()
      try:
        r = requests.get('https://myip.ipip.net')
        clientIP = r.content.split()[1]
        logger.info('Client IP: ' + clientIP)
      except:
        r = requests.get('http://ipinfo.io')
        clientIP = r.json()['ip']
        logger.info('Client IP: ' + clientIP)
      return clientIP
    ```
    
4.  After you write your code, click **Deploy** and then **Test Function**.
    

After the code is executed, you can view the client IP address in the response. The client IP address is the assigned static public IP address.

## Add a static public IP address

To add a static public IP address, perform the following steps:

1.  On the function details page, click the **Configurations** tab. Then click **Network** in the left-side navigation pane and click **Modify**. In the Network panel, click **Create EIP** below **Static Public IP Address**.
    
    You are navigated to the [VPC console](https://vpc.console.alibabacloud.com/).
    
2.  In the [VPC console](https://vpc.console.alibabacloud.com/), create an EIP and associate it with the NAT gateway that you use. For more information, see [Apply for an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).
    
    After you complete the operation in the VPC console, go back to the network configuration page in the Function Compute console to view the saved settings.
    

## More operations

If you want to disable the static public IP address feature or delete assigned IP addresses, set the **Allow Default NIC to Access Internet** parameter to **Yes** in the Function Compute console, and then go to the [VPC console](https://vpc.console.alibabacloud.com/) to delete all NAT gateways that are associated with your VPC.
