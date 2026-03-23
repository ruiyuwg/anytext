The firewall of a simple application server is a virtual firewall that uses firewall rules to control the inbound traffic of the simple application server. This ensures the security of the server. This topic describes how to create, modify, disable, enable, and delete firewall rules for a simple application server. This topic also provides information about the ports preset for the firewall feature, FAQ about firewalls, and related documents.

## **Feature description**

By default, the firewall of a simple application server enables specific ports based on the operating system of the server and disables other ports. You can create firewall rules to enable more ports based on your business requirements. The following list describes the default ports that are enabled on a simple application server:

-   Servers that use the TCP protocol:
    
    -   Windows servers: ports 3389, 80, and 443.
        
    -   Linux servers: ports 22, 80, and 443.
        
-   Servers that use the ICMP protocol: The value for the port range is -1, which specifies that all ports are enabled and access from all IP addresses is allowed.
    

If you remove or disable these default ports in the Simple Application Server console, the Firewall tab of the Servers page displays a message similar to `You disabled or deleted the default port 22 allow rule on the firewall, which affects the remote connection feature`. You can add or enable the corresponding ports based on your requirements.

## Limits

-   You can create a maximum of 50 firewall rules for a simple application server.
    
-   Port 25 is the default email service port. For security reasons, this port is disabled for simple application servers by default. To send emails, use port 465.
    
-   A firewall controls only the inbound traffic of a simple application server. All outbound traffic of a simple application server is allowed by default.
    
    **Note**
    
    -   Inbound traffic: the traffic generated when data is transmitted to a simple application server over the Internet or an internal network.
        
    -   Outbound traffic: the traffic generated when data is transmitted from a simple application server over the Internet or an internal network.
        
    

## Manage a firewall

**Note**

If you have created a firewall template, you can quickly configure firewall rules based on the firewall template. For more information, see the [Configure firewall rules based on a firewall template](/help/en/simple-application-server/user-guide/manage-firewall-templates#0c54857327qdd) section of the "Manage firewall templates" topic.

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  Find the simple application server for which you want to create a firewall rule, and click the server ID in the card of the server.
    
3.  Click the **Firewall** tab.
    
4.  In the upper-left corner of the **Firewall** tab, click **Add Rule**.
    
5.  In the **Add Firewall Rule** dialog box, configure parameters based on your business requirements and click **OK**.
    
    **Warning**
    
    -   When you create a firewall rule, configure the port range and IP addresses that are allowed to access the server based on your requirements and follow the principle of least privilege to prevent network attacks.
        
    -   If the ports, protocol, and IP addresses that you specify for the firewall rule are the same as the ports, protocol, and IP addresses of an existing rule, the existing rule is overwritten regardless of whether the existing rule is enabled or disabled.
        
    
    ### **Select a preset firewall rule**
    
    You can create a firewall rule with ease by selecting a preset firewall rule. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Application Type**
    
    The application type. Select an application type such as **RDP**, **FTP**, **TELNET**, **MYSQL**, **All Use TCP**, **All Use UDP**, or **All Use TCP and UDP** from the drop-down list based on your business requirements. For more information, see the [Preset port information](#section-npp-cua-f2o) section of this topic.
    
    **Protocol**
    
    The protocol. The displayed protocol is used by default and the value cannot be changed.
    
    **Port Range**
    
    The port range. The displayed port range is used by default and the value cannot be changed.
    
    **Source IP Address**
    
    The source IP addresses. The default value is 0.0.0.0/0, which specifies all IPv4 addresses.
    
    **Important**
    
    Configure IP addresses based on your requirements and follow the principle of least privilege to prevent network attacks on your server.
    
    **Remarks**
    
    Enter the remarks of the firewall rule for subsequent management.
    
    ### **Create a custom firewall rule**
    
    If the preset firewall rules cannot meet your business requirements, you can create one or more custom firewall rules. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Application Type**
    
    The application type. Select **Specify a custom value**.
    
    **Protocol**
    
    The protocol. Select TCP, UDP, or ICMP.
    
    **Port Range**
    
    The port range. Valid values: 1 to 65535. You can use one of the following methods to configure this parameter:
    
    -   Specify a single port.
        
        Enter the number of the port that you want to enable. For example, if you want to allow traffic on MySQL listening port 3306, enter `3306` in the Port Range field.
        
    -   Specify a port range.
        
        Use a forward slash (/) to separate the start port number and the end port number. For example, if you want to allow traffic over the port range 20000 to 30000 that you specify in the FTP configuration file, enter `20000/30000` in the Port Range field.
        
    
    **Source IP Address**
    
    The source IP addresses. The default value is 0.0.0.0/0, which specifies all IPv4 addresses. You can also specify the IPv4 addresses that are allowed to access the server:
    
    -   Specify a single IPv4 address.
        
        Enter a single IPv4 address. Example: 192.168.0.100.
        
    -   Specify all IPv4 addresses within a CIDR block.
        
        Enter an IPv4 CIDR block. Example: 192.168.0.0/24.
        
    
    **Remarks**
    
    Enter the remarks of the firewall rule for subsequent management.
    
    You can click **Add Rule** to create firewall rules and the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2322395271/p837858.png) icon to delete firewall rules as needed.
    

## **Modify, disable, enable, and delete a firewall rule**

After you create a firewall rule, you can perform the following operations based on your business requirements.

**Operation**

**Description**

**Procedure**

Modify a firewall rule

If the firewall rules that are created or automatically created do not meet your business requirements, you can modify the firewall rules.

1.  Click **Modify** in the **Actions** column of the firewall rule that you want to modify.
    
2.  In the **Modify** dialog box, modify the Protocol, Port Range, Source IP Address, and Remarks parameters based on your business requirements.
    
3.  Click **Confirm**.
    

Disable a firewall rule

You can temporarily disable a port. If you want to allow traffic on the port later, you can enable it directly without the need to create a firewall rule again.

**Important**

If a firewall rule is disabled, the port specified in the rule cannot be accessed. This affects your business. We recommend that you disable a firewall rule with caution. Make sure that this operation does not affect your business.

1.  Click **Disable** in the **Actions** column of the firewall rule that you want to disable.
    
2.  In the **Disable** message, click **Confirm**.
    

Enable a firewall rule

You can enable a disabled port.

1.  Click **Enable** in the **Actions** column of the disabled firewall rule that you want to enable.
    
2.  In the **Enable** message, click **Confirm**.
    

Delete a firewall rule

You can delete a firewall rule that you no longer use.

**Note**

If the number of firewall rules does not reach the upper limit of 50, we recommend that you temporarily disable a firewall rule for later use.

## Delete a single firewall rule

1.  Click **Delete** in the **Actions** column of the firewall rule that you want to delete.
    
2.  In the **Delete** message, click **Confirm**.
    

## Delete multiple firewall rules at a time

1.  Select the firewall rules that you want to delete and click **Delete** in the lower-left corner of the rule list.
    
2.  In the **Delete** message, click **Confirm**.
    

## Preset port information

The following table describes the common firewall rules preset in firewalls provided by Alibaba Cloud. You can create firewall rules with ease by using these preset firewall rules. For more information about common ports, see [Common ports](/help/en/ecs/user-guide/common-ports).

**Application type**

**Protocol**

**Port range**

**Source IP address**

**Description**

**HTTP**

TCP

80

0.0.0.0/0

**Important**

-   The source IP addresses. The default value is 0.0.0.0/0, which specifies all IPv4 addresses.
    
-   Configure IP addresses based on your requirements and follow the principle of least privilege to prevent network attacks on your server.
    

The default HTTP port. The port is used to access website services such as Internet Information Services (IIS), Apache, and NGINX. For more information, see [Create Linux server from OS image](/help/en/simple-application-server/getting-started/quickly-create-a-server-using-a-system-image).

**HTTPS**

TCP

443

The default HTTPS port. For more information, see [Install an SSL certificate on a Linux simple application server with Node.js](/help/en/simple-application-server/use-cases/install-an-ssl-certificate-in-a-node-js-runtime).

**RDP**

TCP

3389

The default Remote Desktop Protocol (RDP) port. The port is used to connect to a Windows server by using Remote Desktop. For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely).

**FTP**

TCP

21

The default FTP port. The port is used to upload and download files. For more information, see [Set up an FTP server (Linux)](/help/en/simple-application-server/use-cases/build-an-ftp-server-on-a-windows-instance).

**SSH**

TCP

22

The SSH port. The port is used to log on to Linux simple application servers by using a CLI tool or remote connection software such as PuTTY, Xshell, and SecureCRT. For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely).

**TELNET**

TCP

23

The default Telnet port.

**MySQL**

TCP

3306

The default MySQL port. For more information, see [Use DMS to connect to a database on a simple application server](/help/en/simple-application-server/use-cases/use-dms-to-connect-to-a-database-on-a-simple-application-server).

**SQLServer**

TCP

1433

The default SQL Server port.

**All Use TCP**

TCP

1~65535

All TCP ports.

**All Use UDP**

UDP

1~65535

All UDP ports.

**All Use TCP and UDP**

TCP+UDP

1~65535

All TCP and UDP ports.

**Specify a custom value**

TCP, UDP, or ICMP

1~65535

The custom port range.

## **FAQ**

Q1: What is the difference between a simple application server firewall and an operating system firewall?

-   Simple application server firewall: The Simple Application Server console provides a visualized management interface. You can configure firewall rules with ease. However, the firewall of a simple application server can control only inbound traffic.
    
-   Operating system firewall: A system administrator can configure firewall rules for an operating system to control both inbound and outbound traffic. The system administrator must be familiar with the corresponding firewall software, such as iptables on Linux systems. In addition, Linux users must be familiar with CLIs.
    

Q2: How do I check port connectivity by running the Telnet command?

Run the following command to check whether a port can be accessed:

```
telnet <IP address of the simple application server> <Port>
```

In this example, port 80 is used. The following command outputs are returned:

## Windows

-   The port can be accessed.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221884071/p744159.png)
    
-   The port cannot be accessed.
    
    ```
    C:\Users\Administrator>telnet 120.55.XX.XX 80
    Connecting To 120.55.XX.XX...Could not open connection to the host,   on port 80: Connect failed
    ```
    

## Linux

-   The port can be accessed.
    
    ```
    [root@VM-4-10-centos ~]# telnet 120.55.XX.XX 80
    Trying 120.55.XX.XX...
    Connected to 120.55.XX.XX.
    Escape character is '^]'.
    ```
    
-   The port cannot be accessed.
    
    ```
    [root@VM-4-10-centos ~]# telnet 120.55.XX.XX 80
    Trying 120.55.XX.XX...
    telnet: connect to address 120.55.XX.XX: Connection refused
    ```
    

Q3: How do I check the service status and the listening status of a port?

In this example, the NGINX service on a simple application server is used. The default port is port 80. If you want to check the status of other services, replace the service name and the port number in the commands.

## Linux servers

In this example, a Linux simple application server that runs CentOS 7.9 is used. Operations may vary based on the operating system version of your Linux server.

1.  Connect to the Linux simple application server.
    
    For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely).
    
2.  Run the following command to check the status of NGINX:
    
    ```
    systemctl status nginx
    ```
    
    -   The following sample command output indicates that NGINX is started.
        
        ![2023-06-04_17-06-23..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221884071/p744060.png)
        
    -   If NGINX is not started, run the following command to start NGINX:
        
        ```
        systemctl start nginx
        ```
        
3.  Run the following command to check whether port 80 is listened on:
    
    ```
    netstat -an | grep 80
    ```
    
    -   If the following information is returned, port 80 is listened on.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221884071/p744154.png)
        
    -   If the command output is not as shown in the preceding figure, port 80 is not listened on.
        

## Windows servers

In this example, a simple application server that runs Windows Server 2012 is used. Operations for simple application servers that run other Windows Server versions are similar.

1.  Connect to the Windows simple application server.
    
    For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely).
    
2.  Choose **Start** > **Run**, enter `service.msc`, and then click **OK**. The **Services** page appears.
    
3.  Check the status of the nginx service.
    
    1.  If no status is displayed for the **nginx** service, right-click the **nginx** service and then click **Start(S)**.
        
    2.  If the status of the **nginx** service is **Running**, NGINX is started.
        
4.  Run the following command in Windows PowerShell to check whether port 80 is listened on:
    
    ```
    netstat -ano | findstr "80"
    ```
    
    -   If the following information is returned, port 80 is listened on.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9221884071/p744153.png)
        
    -   If the command output is not as shown in the preceding figure, port 80 is not listened on.
        

Q4: What do I do if the port of my simple application server cannot be accessed?

If your server is deployed outside the Chinese mainland, such as in the China (Hong Kong) region, unstable connections and high latency may occur due to the congestion of international links and outbound routing restrictions of Internet service providers (ISPs). Cross-border connections are established through the networks of ISPs. The connection quality is affected by many factors and ISPs cannot optimize their networks in a short time.

Solutions:

-   If your business is mainly for users in the Chinese mainland, we recommend that you unsubscribe from the existing simple application server after you create a server in a Chinese mainland region and migrate the data from the existing server to the new server. For more information, see [Migrate data between simple application servers](/help/en/simple-application-server/use-cases/migrate-data-between-simple-application-servers).
    
-   You cannot modify the connection of the simple application server by changing an IP address. If your server is deployed in the China (Hong Kong) region, you can use an Elastic Compute Service (ECS) instance that is associated with a BGP (Multi-ISP) Pro elastic IP address (EIP). In this case, a direct cross-border connection can be established without using the services of ISPs to deliver a better user experience. However, cross-border connection issues still exist and cannot be eliminated. For more information, see [Migrate data from a simple application server to an ECS instance by using a shared image](/help/en/simple-application-server/use-cases/migrate-data-from-a-server-to-an-ecs-instance), [Apply for EIPs](/help/en/eip/apply-for-new-eips), and [Associate an EIP with a cloud resource](/help/en/eip/bind-an-eip-to-a-cloud-resource/).
    

In other scenarios, troubleshoot the issue by using the following methods:

1.  Run the `netstat -tunlp` command to check whether the port of the server is listened on. If the port is not listened on, start the corresponding service to ensure that the port is listened on.
    
2.  Check whether restrictions are configured on the firewall of the server.
    
    -   For Ubuntu operating systems, run the `sudo ufw status` command to check.
        
    -   For operating systems of CentOS 7 and later, run the `firewall-cmd --list-ports` command to check. If the output indicates that ufw or firewall is not running, run the `iptables -L;iptables -t nat -L` command to check the firewall rules.
        
3.  Check whether a firewall rule that enables the port for the server is created in the Simple Application Server console.
    

## **References**

If you cannot access the website or the simple application server after you configure firewall rules, or the firewall of the server does not meet your business requirements, see the following topics:

-   [Remote connection FAQ](/help/en/simple-application-server/user-guide/faq-about-remote-connection)
    
-   [Comparison with Elastic Compute Service (ECS)](/help/en/simple-application-server/product-overview/comparison-between-simple-application-server-and-ecs)
    
-   [Overview of security groups](/help/en/ecs/user-guide/overview-44)
