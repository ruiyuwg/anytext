If your employees work in an office zone and do not require the SASE App to redirect traffic to the internal network for some or all applications, you can define the office zone by setting specific conditions. The SASE App uses these conditions to detect whether a user's device is in the zone and then executes the corresponding traffic redirection policy. This topic describes how to configure a trusted office zone.

## Office zone traffic redirection policies

By default, after you connect to SASE, traffic from employees who access business applications is redirected to SASE for permission verification and forwarding. Based on your office network topology, you can configure policies to prevent the SASE App from redirecting traffic when employees are in an office zone. This avoids unnecessary consumption of Internet egress bandwidth.

SASE supports the following two non-redirection policies for office zones:

-   **When in an office zone, the** SASE **App does not redirect traffic**
    
    This policy is for scenarios where the office network can access all required business applications. You do not need SASE to establish network channels.
    
-   **When in an office zone, the** SASE **App does not redirect traffic for specific business applications**
    
    This policy is for scenarios where the office network can access only some business applications. For applications that cannot be accessed, SASE is required to establish network channels.
    

## Procedure

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Private Access** > ****Terminal Access****.
    
3.  On the **Access Point Management** tab, click **Office Zone Identification**, and then select a traffic redirection policy for the office zone.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9559685371/p897782.png)
    
4.  At the bottom of the **Office Zone Identification** page, click **Create Identification Rule**. Add an office zone identification condition as described in the following table.
    
    You can set one or more office zone identification conditions. If multiple conditions are set, SASE identifies the area as an office zone if any of the conditions are met.
    
    **Configuration item**
    
    **Description**
    
    **Rule Name**
    
    The name of the condition. The name must be 2 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (\_).
    
    **Conditions**
    
    Set one or more of the following values for the condition:
    
    -   **Office Zone SSID**: Enter the SSID of your office zone. A Service Set Identifier (SSID) is the name of a wireless local area network (WLAN).
        
    -   **Accessible Internal IP Address**: An internal IP address that can only be accessed from the office network environment. The SASE client automatically probes this IP address. If the connection is successful, it is used as one of the characteristics for office zone identification.
        
    -   **Accessible Internal Domain**: An internal domain name that can only be accessed from the office network environment. The SASE client automatically probes this domain name. If the connection is successful, it is used as one of the characteristics for office zone identification.
        
    -   **Office CIDR Block**: Set the IP address range for the office network. The range must include the IP address of the current device.
        
    
    Set the logical relationship between multiple conditions to **OR** or **AND**. The default is OR. Click **OR** to switch the logical relationship to **AND**.
    
5.  If you select the policy that does not redirect traffic for specific applications, you must associate the relevant applications.
    
    Click **Configure**. In the **Add Application** panel, add the relevant internal business applications by application tag or application name.
    
6.  Click **Save**.
    

## Other operations

Perform the following operations as needed:

-   Edit: Click **Edit Rule** to modify a configured identification condition.
    
-   Delete: Click ****Edit Rule**** and then click **Delete** to delete the specified identification condition.
    
    **Important**
    
    After an identification condition is deleted, SASE no longer uses it to identify an office zone. Perform this operation with caution.
    

## References

-   To use SASE to establish network channels, select a method based on your network topology:
    
    -   [Service resources are deployed in a VPC-connected instance (CEN is not associated)](/help/en/sase/user-guide/service-resources-are-deployed-in-vpcs)
        
    -   [Service resources are deployed in a VPC-connected instance (CEN is associated)](/help/en/sase/user-guide/service-resources-are-deployed-in-vpcs-cen)
        
    -   [Use an SASE connector to establish network connectivity](/help/en/sase/user-guide/using-the-sase-connector)
        
    -   [Use other Alibaba Cloud network instances (VBR, CCN, or VPN Gateway)](/help/en/sase/user-guide/use-other-alibaba-cloud-connectors)
        
-   If your service traffic must be audited and analyzed by SASE, you can configure access policies for applications. For more information, see [Configure zero-trust policies](/help/en/sase/user-guide/configure-a-zero-trust-policy).
