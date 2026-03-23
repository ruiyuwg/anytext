Resolving private domain names within your enterprise is a common requirement in hybrid or multi-cloud environments. The default DNS servers for an Elastic Compute Service (ECS) instance (`100.100.2.136` and `100.100.2.138`) resolve only public domain names and Alibaba Cloud internal domain names. To resolve private domain names on an ECS instance, configure a custom DNS server.

## Procedures

### **Option 1:** Automatically configure DNS by using a DHCP options set (recommended)

A [DHCP options set](/help/en/vpc/dhcp-option-set-and-dns-hostname) centrally configures the DNS server IP addresses and domain names for all ECS instances within a virtual private cloud (VPC). After configuration, instances can communicate with each other by using hostnames or fully qualified domain names (FQDNs), eliminating the need for fixed IP addresses. This method supports centralized management, dynamic configuration updates, is independent of the operating system, and reduces manual effort and the risk of errors.

### **Option 2:** Manually configure DNS on the instance

#### Alibaba Cloud Linux, CentOS, and **Red Hat**

1.  Log on to the ECS instance.
    
    1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance. Click **Connect** and select **Workbench**. Follow the on-screen prompts to log on and access the terminal page.
        
    
2.  Add the following line to the top of the `/etc/resolv.conf` file, replacing `<DNS_IP>` with your DNS server's IP address. The system prioritizes the DNS server listed first.
    
    ```
    nameserver <DNS_IP>
    ```
    
3.  Lock the `/etc/resolv.conf` file to prevent it from being overwritten on system or network restarts.
    
    > To unlock the file, run the `chattr -i /etc/resolv.conf` command.
    
    ```
    sudo chattr +i /etc/resolv.conf
    ```
    
4.  Verify the DNS configuration. In the command output, confirm that the `Server` address matches the IP address you configured.
    
    > If `nslookup` is not installed, run `sudo yum install bind-utils` to install it.
    
    ```
    sudo nslookup <domain_name>
    ```
    

#### **Windows Server**

This example uses Windows Server 2022.

1.  Log on to the ECS instance.
    
    1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  On the details page of the target instance, click **Connect** and select **Workbench**. The connection method is **Terminal**. Follow the on-screen prompts to enter your username (for example, Administrator) and password.
        
2.  Open **Settings** and go to the **Network & Internet** interface.
    
3.  Select **Ethernet**, click **Network**, and then click **Edit** in the **DNS server assignment** area.
    
4.  In the **Edit DNS settings** dialog box, switch the pattern to **Manual** and enable **IPv4**.
    
5.  In the **Preferred DNS** field, enter a custom DNS address. To ensure that internal Alibaba Cloud services are resolved correctly, enter `100.100.2.136` in the **Alternate DNS** field. Click **Save**.
