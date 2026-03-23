Use open-source strongSwan to quickly establish an IPsec-VPN connection with an Alibaba Cloud standard VPN gateway, enabling private connectivity between cloud and on-premises resources.

## Scenario

An enterprise has created a VPC in the China (Hangzhou) region and now needs to connect it to its on-premises data center (IDC) using a standard VPN gateway and strongSwan.

In this scenario, the IDC has only one public IP address and establishes a dual-tunnel IPsec-VPN connection with the Alibaba Cloud VPN gateway:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4153993771/CAEQVBiBgMDJn9uW6BkiIDkzYWMwMWY0NzhkMzQxOTM4YzRmMzU3OTk1NGFkMDUz4146783_20240109141140.646.svg)

## Resource planning

-   **Cloud resources**: VPC CIDR block is 10.0.0.0/16 in the China (Hangzhou) region
    
    -   vSwitch 1: Zone I, CIDR block 10.0.0.0/24
        
    -   vSwitch 2: Zone J, CIDR block 10.0.1.0/24
        
    -   ECS instance: Deployed in vSwitch 1, IP address 10.0.0.1
        
    -   VPN gateway: After creation, the system assigns two public IP addresses:
        
        -   IPsec address 1 (for the active tunnel): XX.XX.1.1
            
        -   IPsec address 2 (for the standby tunnel): XX.XX.2.2
            
-   **On-premises resources**: IDC CIDR block is 172.16.0.0/16
    
    -   strongSwan device: Private IP address 172.16.0.1
        
    -   Public egress IP: XX.XX.3.3
        
-   **Encryption algorithms**: Use console defaults (AES128, SHA1, DH Group 2). Encryption algorithms, authentication algorithms, and DH groups must match on both sides.
    
-   **Routing method**: Use static routing with protected data flows mode. In this mode, you define which traffic flows through the VPN tunnel by specifying the CIDR blocks on both ends. Traffic between these blocks becomes the protected data flow. The system automatically routes this traffic through the tunnel and creates corresponding routes.
    

**Important**

This topic covers only the single-public-IP and static-routing scenario. For dual-public-IP or BGP dynamic routing scenarios, see [strongSwan configuration examples](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-strongswan).

## Prerequisites

-   The VPC CIDR block must not overlap with the on-premises IDC CIDR block.
    
-   You have created a VPC and deployed one vSwitch in each of two different zones, as planned. At least one ECS instance is running in the VPC for connectivity testing.
    
-   You have deployed a Linux server in your on-premises IDC (CentOS Stream 9 in this example). The server has one public egress IP address. You will install strongSwan on this server to act as the on-premises gateway.
    

## Step 1: Create a standard VPN gateway

1.  Go to the [VPN Gateway](https://vpc.console.alibabacloud.com/vpn) page in the console. Click **Create VPN Gateway**. Configure the following key parameters:
    
    -   **Instance Name**: Enter a meaningful name, such as `vpn-gw-docdev`.
        
    -   **Region and zone**: Select the region where your VPC is located. In this example, select **China (Hangzhou)**.
        
    -   **Gateway Type**: Select **Standard**.
        
    -   **Network Type**: Select **Public**.
        
    -   **VPC**: Select the target VPC to connect.
        
    -   **vSwitch 1**: Select the vSwitch in Zone I.
        
    -   **vSwitch 2**: Select the vSwitch in Zone J. This vSwitch must be in a different zone than **vSwitch 1** to ensure cross-zone high availability. If no vSwitch is available, create one first.
        
    -   **Bandwidth**: Choose bandwidth based on business needs. In this example, use the default value.
        
    -   **IPsec-VPN**: Select **Enable**.
        
    -   **SSL-VPN**: **Close**.
        
    -   **Billing Cycle**: Use the default value.
        
    -   **Create Service-Linked Role**: Ensure the service-linked role is created. The VPN gateway uses this role to access other cloud resources.
        
2.  Click **Buy Now** and complete payment. VPN gateway initialization takes about 1–5 minutes. The system assigns two public IP addresses to the VPN gateway—one for the active tunnel and one for the standby tunnel.
    

## Step 2: Create a customer gateway

A customer gateway records the public IP address of your on-premises gateway device in Alibaba Cloud. In this scenario, the IDC has only one public egress IP, so create only one customer gateway.

1.  In the navigation pane on the left of the VPN Gateway console, click **Customer Gateways**.
    
2.  Click **Create Customer Gateway** and configure the following:
    
    -   **Name**: Enter a name for the customer gateway, such as `cgw-idc-docdev`.
        
    -   **IP Address**: Enter the public egress IP address of your on-premises IDC (XX.XX.3.3).
        

## Step 3: Create an IPsec-VPN connection

1.  In the navigation pane on the left of the VPN Gateway console, click **IPsec Connections**. Then click **Bind VPN Gateway**.
    
2.  Configure the basic parameters for the IPsec-VPN connection:
    
    -   **Name**: Enter a meaningful name, such as `ipsec-docdev`.
        
    -   **Region**: Select **China (Hangzhou)**.
        
    -   **Bind VPN Gateway**: Select the VPN gateway created in Step 1.
        
    -   **Routing Mode**: Select **Destination Routing Mode**. In this mode, define the CIDR blocks on both ends. The system automatically routes matching traffic through the tunnel and creates corresponding routes.
        
    -   **Local Network**: Enter the VPC CIDR block `10.0.0.0/16`.
        
    -   **Remote Network**: Enter the IDC CIDR block `172.16.0.0/16`.
        
    -   **Effective Immediately**: Select **Yes**. Alibaba Cloud initiates negotiation with the peer side. After you finish configuring the peer side, the connection establishes quickly.
        
    -   **Enable BGP**: Do not enable BGP in this example.
        
3.  Configure tunnel parameters:
    
    -   **Tunnel 1 (Primary)**:
        
        -   **Customer Gateway**: Select the customer gateway created in Step 2.
            
        -   **Pre-Shared Key**: A shared key used for identity authentication during IPsec tunnel negotiation. Both sides must use the same pre-shared key. Otherwise, the tunnel fails to establish. Use a strong password that includes uppercase letters, lowercase letters, digits, and special characters.
            
        -   **Encryption Configuration**: Keep the default values. This example uses the default encryption algorithm (AES128), authentication algorithm (SHA1), and DH group (group2).
            
    -   **Tunnel 1 (Backup)**:
        
        -   **Customer Gateway**: Select the same customer gateway as Tunnel 1 (the IDC has only one public egress IP in this scenario).
            
        -   **Pre-Shared Key**: Use the same key as Tunnel 1.
            
        -   **Encryption Configuration**: Match Tunnel 1. Keep the default values.
            
4.  After clicking **OK**, the system prompts you to publish routes. First, click **Cancel**.
    
    > IPsec-VPN connection initialization takes about 5 minutes (status shows **Preparing**). You cannot configure routes yet. Proceed to Step 4 to configure the strongSwan device. Route configuration is completed in Step 5.
    
5.  Record the public IP addresses of the two tunnels on Alibaba Cloud. You need them later when configuring strongSwan:
    
    -   Return to the **IPsec-VPN connection** list page and locate the IPsec-VPN connection you just created.
        
    -   In the **Gateway IP Address** column, record IPsec address 1 and IPsec address 2. In this example, they are XX.XX.1.1 and XX.XX.2.2.
        

## Step 4: Configure the strongSwan device

**Important**

The third-party product information in this section is for reference only. Alibaba Cloud makes no guarantees or commitments regarding the performance, reliability, or potential impacts of operations involving third-party products.

This section uses `CentOS Stream 9 64-bit` as an example to configure strongSwan. For other operating systems, refer to the [strongSwan official documentation](https://docs.strongswan.org/docs/5.9/install/install.html).

### 1\. Allow firewall policies

On the strongSwan device, allow the `ESP protocol (IP protocol number 50)`, `UDP port 500`, and `UDP port 4500` to permit access from the two IPsec addresses on the cloud.

For example, if you use iptables, adjust the commands based on your actual firewall tool:

```
iptables -I INPUT -s XX.XX.1.1,XX.XX.2.2 -p esp -j ACCEPT
iptables -I INPUT -s XX.XX.1.1,XX.XX.2.2 -p udp --dport 500 -j ACCEPT
iptables -I INPUT -s XX.XX.1.1,XX.XX.2.2 -p udp --dport 4500 -j ACCEPT
```

### 2\. Enable IP forwarding

```
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf
sudo sysctl -p
```

### 3\. Install strongSwan

```
dnf install epel-release -y
dnf install strongswan -y
```

### 4\. Configure strongSwan

1.  Back up the original configuration file: `mv /etc/strongswan/swanctl/swanctl.conf /etc/strongswan/swanctl/swanctl.conf.bak`
    
2.  Create a new configuration file: `vi /etc/strongswan/swanctl/swanctl.conf`
    
3.  Add and save the following configuration. Replace the sample IP addresses and pre-shared keys with your actual values:
    
    ```
    # strongSwan dual-tunnel IPsec-VPN configuration for: Alibaba Cloud standard VPN gateway + single public egress on-premises + protected data flows
    #
    # Only parameters marked "Modify as needed" require changes. All others can remain at default.
    # Algorithm note: aes128-sha1-modp1024 = AES-128 / SHA-1 / DH Group 2 (console default)
    # Active/standby logic: vco1 (priority=1) is the active tunnel; vco2 (priority=2) is the standby tunnel. Automatic failover occurs if the active tunnel fails.
    
    connections {
    
       # === Tunnel 1 (active) ===
       vco1 {
          version = 2
          dpd_delay = 10
          rekey_time = 84600
          over_time = 1800
          proposals = aes128-sha1-modp1024
          encap = yes
    
          local_addrs  = 172.16.0.1                # strongSwan device's network interface IP (Modify as needed: use private IP in NAT environments; use public IP if the interface is bound directly to the public egress IP)
          local {
             auth = psk
             id = XX.XX.3.3                        # On-premises public egress IP (Modify as needed)
          }
    
          remote_addrs = XX.XX.1.1                 # Alibaba Cloud tunnel 1 public IP (Modify as needed)
          remote {
             auth = psk
             id = XX.XX.1.1                        # Alibaba Cloud tunnel 1 public IP, must match remote_addrs above (Modify as needed)
          }
    
          children {
             vco_child1 {
                local_ts  = 172.16.0.0/16          # On-premises protected data flow CIDR block (Modify as needed)
                remote_ts = 10.0.0.0/16            # Alibaba Cloud protected data flow CIDR block (Modify as needed)
                mode = tunnel
                rekey_time = 85500
                life_time = 86400
                dpd_action = restart
                start_action = start
                close_action = start
                esp_proposals = aes128-sha1-modp1024
                priority = 1                       # Set as active tunnel. Do not modify.
             }
          }
       }
    
       # === Tunnel 2 (standby) ===
       vco2 {
          version = 2
          dpd_delay = 10
          rekey_time = 84600
          over_time = 1800
          proposals = aes128-sha1-modp1024
          encap = yes
    
          local_addrs  = 172.16.0.1                # strongSwan device's network interface IP, same as tunnel 1 (Modify as needed)
          local {
             auth = psk
             id = XX.XX.3.3                        # On-premises public egress IP, same as tunnel 1 (Modify as needed)
          }
    
          remote_addrs = XX.XX.2.2                 # Alibaba Cloud tunnel 2 public IP (Modify as needed)
          remote {
             auth = psk
             id = XX.XX.2.2                        # Alibaba Cloud tunnel 2 public IP, must match remote_addrs above (Modify as needed)
          }
    
          children {
             vco_child2 {
                local_ts  = 172.16.0.0/16          # On-premises protected data flow CIDR block, same as tunnel 1 (Modify as needed)
                remote_ts = 10.0.0.0/16            # Alibaba Cloud protected data flow CIDR block, same as tunnel 1 (Modify as needed)
                mode = tunnel
                rekey_time = 85500
                life_time = 86400
                dpd_action = restart
                start_action = start
                close_action = start
                esp_proposals = aes128-sha1-modp1024
                priority = 2                       # Set as standby tunnel. Do not modify.
             }
          }
       }
    }
    
    secrets {
       ike-vco1 {
          id = XX.XX.1.1                           # Alibaba Cloud tunnel 1 public IP (Modify as needed)
          secret = your-psk-here                   # Pre-shared key for tunnel 1, must match Alibaba Cloud (Modify as needed)
       }
       ike-vco2 {
          id = XX.XX.2.2                           # Alibaba Cloud tunnel 2 public IP (Modify as needed)
          secret = your-psk-here                   # Pre-shared key for tunnel 2, must match Alibaba Cloud (Modify as needed)
       }
    }
    ```
    

### 5\. Start and verify tunnel status

```
sudo systemctl restart strongswan
swanctl --load-all
watch swanctl --list-sas
```

If both tunnels show `ESTABLISHED` and CHILD\_SA shows `INSTALLED`, the IPsec-VPN connection between the strongSwan device and the Alibaba Cloud VPN gateway is successfully established.

## Step 5: Configure cloud-side routing

Because this example uses protected data flows mode, the system automatically creates route entries in the VPN gateway's **Policy-based Route Table**.

You can publish this route to the VPC route table with one click. This routes traffic from ECS instances in the VPC to the IDC CIDR block through the VPN gateway:

1.  Return to the VPN Gateway list page. Click the instance ID of the VPN gateway created in Step 1 to open its details page.
    
2.  Click the **Policy-based Route Table** tab. You can see the destination route entry automatically generated by the system after the IPsec-VPN connection uses protected data flows mode (destination CIDR block 172.16.0.0/16, next hop is the IPsec-VPN connection).
    
3.  In the **Actions** column for the destination route entry, click **Advertise** to publish the route to the VPC route table.
    
    After publishing, the VPC route table adds a new route with destination CIDR block 172.16.0.0/16 and next hop set to the VPN gateway. Traffic from ECS instances in the VPC to the IDC CIDR block automatically flows through the VPN tunnel.
    

## Verification and testing

### Verify connectivity

1.  First, ensure the ECS security group rules [allow ICMP traffic](/help/en/ecs/user-guide/start-using-security-groups#24fc8c00cbmv6). Then log on to the strongSwan device and run the following command to ping the ECS instance in the cloud:
    
    ```
    ping 10.0.0.1
    ```
    
    If you receive reply packets, the cloud VPC and on-premises IDC are successfully connected.
    
2.  First, ensure your local firewall allows ICMP traffic. Then log on to the ECS instance (10.0.0.1) in the VPC and ping the private IP address of the strongSwan device:
    
    ```
    ping 172.16.0.1
    ```
    
    If you receive reply packets, reverse connectivity is also working.
    

### Verify high availability

1.  Keep the ECS instance pinging the IDC server continuously:
    
    ```
    ping 172.16.0.1 -c 10000
    ```
    
2.  Break the active tunnel: In the Alibaba Cloud console, change the pre-shared key for the active tunnel (so the keys on both sides differ). The active tunnel breaks.
    
3.  Observe the ping results: Traffic briefly stops and then resumes. This confirms automatic failover to the standby tunnel.
    
4.  Restore the active tunnel: Change the pre-shared key for the active tunnel back to the correct value. After the active tunnel recovers, traffic automatically switches back.
    

## Troubleshooting

Common issues and solutions:

**Symptom**

**Possible cause**

**Solution**

Console shows negotiation failure for the tunnel

Network unreachable

Check whether the strongSwan device can ping the Alibaba Cloud IPsec addresses. Confirm that the local IDC firewall allows UDP ports 500 and 4500.

Pre-shared key mismatch

Verify that the pre-shared keys on both sides match exactly (including case and special characters).

IKE parameter mismatch

Check that IKE version, encryption algorithm, authentication algorithm, and DH group match on both sides. Standard VPN gateways do not support multiple algorithm compatibility. Parameters must match exactly.

Tunnel is established but ping fails

Missing route configuration

Check whether the destination route for the VPN gateway is published in the VPC route table.

Security group restriction

Check whether the ECS security group allows ICMP traffic from the IDC CIDR block (172.16.0.0/16).

Local firewall restriction

Check whether the IDC firewall allows traffic from the VPC CIDR block (10.0.0.0/16).

Missing route on strongSwan side

Confirm that IP forwarding is enabled on the strongSwan device. Also confirm that other servers in the IDC have routes to the VPC CIDR block (with the strongSwan device as the next hop).
