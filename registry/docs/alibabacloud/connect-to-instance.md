Alibaba Cloud offers several connection methods. Choose the one that best suits your needs based on the Elastic Compute Service (ECS) instance's operating system, security requirements, convenience, and network environment.

## **Choose a connection tool**

**Connection tool**

**Supported OS**

**Local installation required**

[Public network access](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth) **required**

**Password-free login supported**

**Alibaba Cloud login required**

Workbench **(browser)**

Windows, Linux

No

No

Yes

Yes

Session Manager **(browser)**

Windows, Linux

No

No

Yes

Yes

VNC **(browser)**

Windows, Linux

No

No

No

Yes

Alibaba Cloud Client

Windows, Linux

Yes

No

Yes

Yes

SSH client **(third-party)**

Linux

Yes

Yes

No

No

RDP client **(third-party)**

Windows

Yes

Yes

No

No

## **Connection tools and guides**

### **Workbench**

[Workbench](/help/en/ecs/user-guide/workbench-overview/) is a browser-based remote connection tool provided by Alibaba Cloud that requires no local installation. It supports features such as file transfer and multi-terminal.

**References**

-   [Connect to a Linux instance by using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key)
    
-   [Connect to a Windows instance by using Workbench](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench)
    

### **Alibaba Cloud Client**

[Alibaba Cloud Client](/help/en/ecs/user-guide/overview-of-alibaba-cloud-client) is official software for managing your resources. After installing the client, you can connect to your ECS instances.

**References**

-   [Connect to a Linux instance by using Alibaba Cloud Client (SSH)](/help/en/ecs/user-guide/use-alibaba-cloud-client-to-manage-ecs-instances#p-roi-wbv-6an)
    
-   [Connect to a Windows instance by using Alibaba Cloud Client (RDP)](/help/en/ecs/user-guide/use-alibaba-cloud-client-to-manage-ecs-instances#3e0f634facoan)
    

### **Session Manager**

[Session Manager](/help/en/ecs/user-guide/connect-to-an-instance-by-using-session-manager-2/) is a high-security connection feature provided by Cloud Assistant. It eliminates the need for a public IP address, which protects your instance from external attacks. It also provides a full audit trail of all operations.

**References**

-   [Connect to an instance by using Session Manager in the console](/help/en/ecs/user-guide/connect-to-an-instance-by-using-session-manager-1)
    
-   [Connect to an instance by using the Session Manager command-line interface (CLI)](/help/en/ecs/user-guide/connect-to-an-instance-by-using-ali-instance-cli/)
    

### **SSH client (third-party)**

To use a third-party SSH client, your instance must have a public IP address or an Elastic IP Address (EIP).

Common SSH clients include **OpenSSH**, **PuTTY**, and **XShell**.

**Reference**

[Use an SSH key pair to connect to a Linux instance from an OpenSSH or Xshell client](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair)

### **VNC**

VNC lets you view the real-time interface of the operating system on an instance. You can view the system interface even during instance startup or shutdown. Because VNC operates independently of Security Group rules and software on the instance, you can use it to troubleshoot connection issues when other methods fail.

**Reference**

[Connect to an instance by using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc)

### **RDP client (third-party)**

To use a third-party RDP client to connect to a Windows instance, assign a public IP address or an EIP to the instance.

Common RDP clients include **Microsoft Remote Desktop**, **Windows Remote Desktop**, and **Windows App**.

**References**

[Use a password to connect to a Windows instance](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password)

## **FAQ**

-   #### **How do I check if an instance is assigned a public IP address?**
    
    Check the **Instance** page to see if your instance has a public IP address. If no public IP address is assigned, [enable public bandwidth](/help/en/ecs/user-guide/best-practices-for-configuring-public-bandwidth).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2601825371/p895565.png)
    
-   #### How do I **check the operating system of an ECS instance?**
    
    You can view the instance's operating system information on the **Instance** page. Most non-Windows operating systems are Linux-based. The following image shows an ECS instance running Windows.
    
    To change the operating system, see [Replace the operating system (system disk)](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2601825371/p895567.png)
