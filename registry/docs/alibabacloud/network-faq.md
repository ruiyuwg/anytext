This topic describes the frequently asked questions (FAQ) about networking for Elastic Desktop Service (EDS) Enterprise.

## Can I connect my on-premises data center to a cloud computer through a VPN?

Yes. Connect to cloud computers through any of the following options:

-   IPsec-VPN
    
-   SSL-VPN
    
-   Smart Access Gateway (SAG)
    
-   Express Connect circuit
    

For setup instructions, see [Access over an enterprise private network](/help/en/wuying-workspace/use-cases/access-over-private-networks/).

## Why can't my cloud computer access the internet?

Work through the following checks in order. Most internet access issues fall into the first two categories.

### 1\. Check that internet bandwidth is enabled

The most common cause is that the cloud computer does not have a premium bandwidth plan, or the plan is not active.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Premium Bandwidth Plans**.
    
3.  On the **Premium Bandwidth Plans** page, find the premium bandwidth plan associated with your office network and check its **Status** column:
    
    **Status**
    
    **Action**
    
    **In Use**
    
    The plan is active. Move on to the next check.
    
    **Expired/Overdue**
    
    In the **Actions** column, click **Renew** and follow the instructions.
    
    **Released**
    
    Click **Enable Premium Bandwidth** to create a new plan.
    
    **Creating**
    
    Wait for provisioning to finish. The status changes to **In Use** automatically.
    

If no premium bandwidth plan exists, enable one first. For details, see [Manage Internet access](/help/en/wuying-workspace/user-guide/manage-internet-access).

### 2\. Check that the office network allows internet access

Even with an active premium bandwidth plan, the office network may not grant internet access to the cloud computer.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
3.  On the **Office Networks** page, find the office network of the cloud computer. Go to the details page in one of the following ways:
    
    -   In the **Actions** column, click **Internet Access Control**.
        
    -   In the **Name/ID** column, click the office network ID.
        
4.  In the **Public Bandwidth** section, set **Internet Access Control** to **Allow all cloud computers to access the Internet. You can configure a list of cloud computers that are not allowed to access the Internet**.
    

### 3\. Check for policies that block access

A policy attached to the cloud computer may contain rules that block outbound traffic or restrict domain name resolution.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, find the policy associated with the cloud computer and click the policy ID to open the details page.
    
4.  In the **Policy Configuration** section, check the following:
    
    -   Choose **Security** > **Network Access**.
        
        -   In the **Security Group Control** section, click the **Outbound** tab. Look for any security group rules that block outbound traffic.
            
        -   In the **Domain Name Access Control** section, look for any access policies that restrict domain name resolution.
            
    -   Choose **Network Redirection (Cloud)**. Check whether cloud network redirection is enabled.
        
5.  If restrictive rules exist, remove them and save the changes. Disconnect from and reconnect to the cloud computer, then test internet access again.
    

### 4\. Check for proxy, NIC, route, or software issues

If the first three checks all pass, the issue is likely inside the cloud computer itself.

#### Proxy server

A proxy configured on the cloud computer may interfere with internet access. To check, run a remote command that reads the proxy registry key:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select the target region.
    
4.  On the **Cloud Computers** page, find the cloud computer and send a remote command in one of the following ways:
    
    -   In the **Actions** column, click **More**, then choose **Send Remote Commands**.
        
    -   Click the cloud computer ID, click the **Remote Commands** tab, then click **Send Remote Commands**.
        
5.  In the **Send Remote Commands** dialog box, enter the following commands and click **Execute**.
    
    ```
    $ProfileLists=Get-ChildItem -Path "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" -Name;
    $SidLists=$ProfileLists | Where-Object { $_ -like "S-1-5-21-*" -and $_ -notlike "*-500" };
    Foreach ($Sid IN $SidLists) {
      $a=(Get-ItemProperty -ErrorAction SilentlyContinue -Path "Registry::HKEY_USERS\$Sid\Software\Microsoft\Windows\CurrentVersion\Internet Settings" -Name ProxyEnable).ProxyEnable;
      if ($a -ne 1) {
        Write-output "proxy is off"
      } else {
        Write-output "proxy is on"
      }
    }
    ```
    

If the output shows "proxy is on" and you cannot access certain websites, consider disabling the proxy.

#### Network interface controller (NIC) status

Check the NIC inside the cloud computer for these issues:

-   IPv4 protocol is not enabled on the NIC.
    
-   The NIC is disabled.
    
-   The hop count of the management NIC is greater than the hop count of the user NIC.
    

To fix NIC issues, use Cloud Computer Manager. For details, see [Use Cloud Computer Manager](/help/en/wtc/user-guide/use-cloud-computer-manager).

#### Route table

Check the route table inside the cloud computer for these issues:

-   The default route `0.0.0.0` is missing.
    
-   The management service routes `100.64.0.0` and `100.100.100.200` are missing.
    

To fix route table issues, use Cloud Computer Manager. For details, see [Use Cloud Computer Manager](/help/en/wtc/user-guide/use-cloud-computer-manager).

#### Security software or VPN software

Third-party security software or VPN software installed on the cloud computer may interfere with network connectivity. EDS detects only common security software and VPN software. If such software is installed and you cannot access certain websites, consider disabling the software and try again.

#### Firewall

The following steps use a Windows OS as an example. The firewall on the cloud computer may block required ports. To disable it:

1.  Go to **Control Panel** > **System and Security** > **Windows Defender Firewall**.
    
2.  In the left-side navigation pane, click **Turn Windows Defender Firewall on or off**.
    
3.  On the **Customize Settings** page, select **Turn off Windows Defender Firewall** and click **OK**.
    

## How do I change the peak internet bandwidth of a cloud computer?

Adjust the bandwidth in the premium bandwidth plan:

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Premium Bandwidth Plans**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Premium Bandwidth Plans** page, find the target premium bandwidth plan and click **Modify** in the **Actions** column.
    
5.  In the **Edit** panel, in the **Bandwidth** section, adjust the bandwidth as needed and click **Confirm**.
    

## Why can't I ping a cloud computer from a public IP address?

Cloud computers deny all inbound access and allow all outbound access by default. This means ping requests from a public IP address are dropped. This is expected behavior and does not indicate a network problem.

For more information about default network security rules, see [What is Elastic Desktop Service (EDS) Enterprise?](/help/en/wuying-workspace/product-overview/what-is-elastic-desktop-service#section-fj8-aur-qgf).

## Why can't I access a cloud computer after I enable the firewall?

Enabling the firewall may block some ports that EDS requires for logon and connection. Open the required ports manually to restore access. For the full list of ports, see [Port requirements](/help/en/wuying-workspace/user-guide/port-overview#task-2260661).
