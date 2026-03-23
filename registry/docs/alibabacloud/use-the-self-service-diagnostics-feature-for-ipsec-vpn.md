VPN Gateway allows you to view the logs and error codes of IPsec-VPN connections. VPN Gateway can work with Network Intelligence Service (NIS) to provide features such as VPN gateway diagnostics and reachability analyzer. If you encounter issues when you use IPsec-VPN connections, you can troubleshoot the issues based on related documentation.

## Diagnostics features and references

The following table describes the diagnostics features and references for IPsec-VPN connection issues.

**Issue**

**Applicable diagnostics features and references**

IPsec-VPN negotiation exceptions

-   [VPN gateway diagnostics](/help/en/vpn/sub-product-ipsec-vpn/user-guide/diagnose-a-vpn-gateway-for-ipsec-vpn#task-2298260) (recommended feature)
    
    You can use this feature to troubleshoot issues that occur when you use a VPN gateway, such as IPsec negotiation failures, incorrect route configurations of the VPN gateway, and abnormal status of the VPN gateway. The system provides suggestions based on the issue that is detected.
    
-   [Troubleshoot IPsec-VPN connection issues](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#task-2288402) (feature and documentation)
    
    This topic provides answers to the frequently asked questions (FAQ) about IPsec-VPN connections. You can troubleshoot an IPsec-VPN connection issue based on the error code and log data of the IPsec-VPN connection displayed in the VPN Gateway console. For more information, see the [Common IPsec-VPN connection issues and solutions](/help/en/vpn/sub-product-ipsec-vpn/support/troubleshoot-ipsec-vpn-connection-issues#section-dn5-avx-7r8) section of the "Troubleshoot IPsec-VPN connection issues" topic.
    
-   [FAQ about IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-ipsec-vpn-connections#concept-pkd-53h-xdb) (documentation)
    
    This topic describes the common causes of IPsec-VPN negotiation issues and connectivity issues and provides solutions to these issues. This topic also provides solutions to help you address these issues.
    

Data transfer issues after IPsec-VPN negotiations succeed

-   [Reachability analyzer](/help/en/vpn/sub-product-ipsec-vpn/user-guide/work-with-reachability-analyzer#task-2313449) (recommended feature)
    
    You can use this feature to check the connectivity between resources that use a VPN gateway. This helps you troubleshoot data transfer issues.
    
-   [FAQ about IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-ipsec-vpn-connections#concept-pkd-53h-xdb) (documentation)
    
    This topic describes the common causes of IPsec-VPN negotiation issues and connectivity issues and provides solutions to these issues. This topic also provides solutions to help you address these issues.
    

The status of the VPN gateway is abnormal

[VPN gateway diagnostics](/help/en/vpn/sub-product-ipsec-vpn/user-guide/diagnose-a-vpn-gateway-for-ipsec-vpn#task-2298260) (feature)

Billing issues

[Billing](/help/en/vpn/sub-product-ipsec-vpn/billing-for-ipsec-vpn) (documentation)

Insufficient resource quotas

[Quotas for IPsec-VPN connections](/help/en/vpn/sub-product-ipsec-vpn/user-guide/quotas-for-ipsec-vpn/#concept-2273696) (documentation)

Other issues

[VPN gateway diagnostics](/help/en/vpn/sub-product-ipsec-vpn/user-guide/diagnose-a-vpn-gateway-for-ipsec-vpn#task-2298260) (feature)

## Methods to use the self-service diagnostics feature

### **Quick diagnostics**

You can quickly troubleshoot IPsec-VPN connection issues on the **Troubleshooting** page in the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/vpc).

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, click **Troubleshooting**.
    
3.  On the Troubleshooting page, click the **VPN Gateway** tab.
    
4.  Select an issue category and obtain the documentation and suggestions as prompted, or troubleshoot the issue.
    
    For information about how to use the VPN gateway diagnostics and reachability analyzer features during troubleshooting, see [Diagnose a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/diagnose-a-vpn-gateway-for-ipsec-vpn#task-2298260) and [Work with reachability analyzer](/help/en/vpn/sub-product-ipsec-vpn/user-guide/work-with-reachability-analyzer#task-2313449).
    

### **Other methods**

The following methods are provided for you to use the VPN gateway diagnostics and reachability analyzer features to check IPsec-VPN connections. You can select a method based on your business requirements.

### Method 1: Perform operations on the VPN Gateways page

Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn). On the **VPN Gateways** page, find the VPN gateway that you want to manage, click **Diagnose** in the **Diagnose** column, and then select Instance Diagnosis or Reachability Analyzer.

### **Method 2: Perform operations on the VPN gateway details page**

1.  Log on to the [VPN Gateway console](https://vpc.console.alibabacloud.com/vpn).
    
2.  On the **VPN Gateways** page, find the VPN gateway that you want to manage and click its ID.
    
3.  On the VPN gateway details page, click the **Diagnose** tab. Then, click the Instance Diagnostics or Reachability Analyzer tab.
    

### **Method 3: Perform operations in the NIS console**

For more information, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics) and [Work with the reachability analyzer](/help/en/nis/user-guide/work-with-reachability-analyzer).
