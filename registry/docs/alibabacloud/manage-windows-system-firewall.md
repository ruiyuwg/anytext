Windows Firewall is a built-in security tool in Windows operating systems that helps you control inbound and outbound network traffic to prevent unauthorized access and intrusions. If you enable the system firewall (Windows Firewall) on a Windows Elastic Compute Service (ECS) instance and configure firewall rules to block external access, you may be unable to connect to the instance. This topic describes how to view the status of the system firewall, enable or disable the system firewall, and configure firewall rules on a Windows ECS instance.

## **Check the status of the system firewall**

You can check whether the system firewall is enabled based on the status of the system firewall.

1.  Connect to a Windows ECS instance by using Virtual Network Computing (VNC). For more information, see [Connect to an instance by using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc).
    
2.  In the menu bar, choose **Start** > **Control Panel**.
    
3.  In the upper-right corner of the All Control Panel Items window, set **View by** to **Small icons**. Then, click **Windows Defender Firewall**.
    
    **Note**
    
    The display name of the system firewall may vary based on the Windows operating system version. If ****Windows Defender Firewall**** is unavailable, select **Windows Firewall**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872875.png)
    
4.  In the **Windows Defender Firewall** window, click **Advanced settings**.
    
5.  In the **Windows Defender Firewall with Advanced Security** window, you can view the status of the system firewall in the **Overview** section in the middle pane.
    
    **Note**
    
    When you enable or disable the system firewall, we recommend that you enable or disable the firewall across all profiles: **domain profile**, **private profile**, and **public profile**. When you check the status of the system firewall, we recommend that you check whether the firewall status of the **domain profile**, **private profile**, and **public profile** is the same. If the firewall status of a profile is different from the firewall status of the other profiles, enable or disable the system firewall for the profile.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p873015.png)
    

## **Enable or disable the system firewall**

Enable or disable the system firewall based on your business requirements. After you enable the system firewall, you need to [configure firewall rules](#628ef4de69rs1).

## Enable the system firewall

After you enable the system firewall on a Windows ECS instance, the system firewall monitors and controls the inbound and outbound network traffic of the instance based on the configured firewall rules.

1.  In the **Windows Defender Firewall with Advanced Security** window, click **Windows Defender Firewall Properties**.
    
    **Note**
    
    For information about how to open the **Windows Defender Firewall with Advanced Security** window, see the [Check the status of the system firewall](#51be2dcbd8z6m) section of this topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872877.png)
    
2.  Select **On (recommended)** from the Windows state drop-down list and click **Apply** to enable the system firewall.
    
    **Note**
    
    We recommend that you enable the system firewall on the **Domain Profile**, **Private Profile**, and **Public Profile** tabs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872878.png)
    

## Disable the system firewall

After you disable the system firewall on a Windows ECS instance, the firewall no longer controls the inbound and outbound network traffic of the instance.

1.  In the **Windows Defender Firewall with Advanced Security** window, click **Windows Defender Firewall Properties**.
    
    **Note**
    
    For information about how to open the **Windows Defender Firewall with Advanced Security** window, see the [Check the status of the system firewall](#51be2dcbd8z6m) section of this topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872999.png)
    
2.  Select **Off** from the Windows state drop-down list and click **Apply** to disable the system firewall.
    
    **Note**
    
    We recommend that you disable the system firewall on the **Domain Profile**, **Private Profile**, and **Public Profile** tabs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p873000.png)
    

## **Configure firewall rules**

After you enable the system firewall, you need to configure firewall rules to control specific access. This section describes how to add a port rule and a predefined rule in the system firewall on a Windows ECS instance to allow access to the instance. You can configure firewall rules in the system firewall based on your business requirements. For more information about configuring firewall policies, see [Configure firewall rules for an ECS instance that runs Windows Server](/help/en/ecs/user-guide/windows-system-firewall-policy-configuration-guide).

## Method 1: Add a port rule

Configure an inbound firewall rule to open the Remote Desktop Services (RDS) port to allow access to the Windows ECS instance. The default RDS port is TCP port 3389.

**Note**

If you changed the RDS port number, use the actual RDS number to configure an inbound firewall rule in the system firewall.

1.  In the left-side navigation pane of the **Windows Defender Firewall with Advanced Security** window, click **Inbound Rules**. Then, click **New Rule...** in the Actions pane.
    
    **Note**
    
    For information about how to open the **Windows Defender Firewall with Advanced Security** window, see the [Check the status of the system firewall](#51be2dcbd8z6m) section of this topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872881.png)
    
2.  On the **Rule Type** page of the **New Inbound Rule Wizard** window, select **Port** and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872883.png)
    
3.  On the **Protocol and Ports** page, select **TCP**, enter a port number in the **Specific local ports** field, and then click **Next**.
    
    **Note**
    
    **Specify the actual RDS port number. The default RDS port number is 3389.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872884.png)
    
4.  On the **Action** page, select **Allow the connection** and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872885.png)
    
5.  On the **Profile** page, use the default settings and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872886.png)
    
6.  On the **Name** page, specify a name for the rule, such as `RemoteDesktop`, and click **Finish**.
    
7.  Configure the scope.
    
    Configure the scope of the firewall rule to apply the rule to network traffic only from specific IP addresses. After you configure the scope of the firewall rule, only the IP addresses specified in the scope can connect to the Windows ECS instance.
    
    1.  In the **Windows Firewall with Advanced Security** window, right-click the `RemoteDesktop` inbound firewall rule that you created in the middle pane and select **Properties**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8668426371/p890040.png)
        
    2.  On the **Scope** tab, select **These IP addresses:** in the **Remote IP address** section, click **Add...** to add one or more IP addresses or CIDR blocks, such as the public IP address of your computer, and then click **OK**.
        
        **Important**
        
        If you want to use Workbench to connect to the Windows ECS instance, add `47.96.60.0/24` and `118.31.243.0/24` to the scope.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8668426371/p890012.png)
        
8.  Connect to the Windows ECS instance. In the Computer field, enter the IP address and the RDS port number of the Windows ECS instance in the <IP address>:<RDS port number> format. Click **Show options**, and then enter a username of the Windows ECS instance in the User name field. In this example, `192.168.1.2:3389` is entered in the Computer field and `Administrator` is entered in the User name field.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872980.png)
    

## Method 2: Configure a predefined rule

Add an RDS-related inbound firewall rule from the predefined rule list to allow RDS connections to the Windows ECS instance.

**Important**

You can use this method if you use the default RDS port. The default RDS port is TCP port 3389.

1.  In the left-side navigation pane of the **Windows Defender Firewall with Advanced Security** window, click **Inbound Rules**. Then, click **New Rule...** in the Actions pane.
    
    **Note**
    
    For information about how to open the **Windows Defender Firewall with Advanced Security** window, see the [Check the status of the system firewall](#51be2dcbd8z6m) section of this topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872881.png)
    
2.  On the **Rule Type** page of the **New Inbound Rule Wizard** window, select **Predefined**, select **Remote Desktop** from the Predefined drop-down list, and then click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872987.png)
    
3.  On the **Predefined Rules** page, select **Remote Desktop - User Mode (TCP-In)** and click **Next**.
    
    **Note**
    
    If you use an earlier version of Windows and **Remote Desktop - User Mode (TCP-In)** is unavailable, select **Remote Desktop (TCP-In)**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872991.png)
    
4.  On the **Action** page, select **Allow the connection** and click **Finish**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872992.png)
    
5.  Configure the scope.
    
    Configure the scope of the firewall rule to apply the rule to network traffic only from specific IP addresses. After you configure the scope of the firewall rule, only the IP addresses specified in the scope can connect to the Windows ECS instance.
    
    1.  In left-side navigation pane of the **Windows Firewall with Advanced Security** window, click **Inbound Rules**. In the middle pane, right-click the inbound firewall rule that you created and select **Properties**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8668426371/p890036.png)
        
    2.  On the **Scope** tab, select **These IP addresses:** in the **Remote IP address** section, click **Add...** to add one or more IP addresses or CIDR blocks, such as the public IP address of your computer, and then click **OK**.
        
        **Important**
        
        If you want to use Workbench to connect to the Windows ECS instance, add `47.96.60.0/24` and `118.31.243.0/24` to the scope.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8668426371/p890012.png)
        
6.  Connect to the Windows ECS instance. In the Computer field, enter the IP address and the RDS port number of the Windows ECS instance in the <IP address>:<RDS port number> format. Click **Show options**, and then enter the username of the Windows ECS instance in the User name field. In this example, `192.168.1.2:3389` is entered in the Computer field and `Administrator` is entered in the User name field.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8277352371/p872980.png)
    

## References

-   [RDP connection issues](/help/en/ecs/remote-desktop-connection-issue/)
    
-   [What do I do if I cannot connect to a Windows instance?](/help/en/ecs/solution-to-failure-in-remote-connection-to-windows-instance)
    
-   [Enable or disable the system firewall on a Linux ECS instance](/help/en/ecs/user-guide/enable-or-disable-the-system-firewall-in-a-linux-instance)
