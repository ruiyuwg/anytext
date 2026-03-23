Use open-source strongSwan to quickly establish an IPsec-VPN connection associated with a Transit Router, enabling connectivity between your VPC and on-premises data center.

## Scenario overview

A company created a VPC in the China (Hangzhou) region and now needs to connect its on-premises IDC to the VPC over IPsec-VPN. Unlike directly associating a VPN Gateway, this scenario associates the IPsec-VPN connection with a **Transit Router**. The Transit Router, managed by the Cloud Enterprise Network (CEN), centrally manages cloud networks. You can later flexibly add more VPCs or enable inter-region communication.

In this scenario, the IDC has only one public IP address. Use this IP address to establish a dual-tunnel IPsec-VPN connection with Alibaba Cloud:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5933993771/CAEQVBiBgID8sved6BkiIGE3Y2NmODExZWMxMzRjZDhiZTczMDk3MjUxY2ZkYmYx4146783_20240109141140.646.svg)

### **Resource planning**

-   **Cloud resources**: VPC CIDR block 10.0.0.0/16 in the China (Hangzhou) region
    
    -   vSwitch 1: zone H, CIDR block 10.0.0.0/24
        
    -   vSwitch 2: zone J, CIDR block 10.0.2.0/24
        
    -   ECS instance: deployed in a vSwitch, IP address 10.0.0.1 (used to verify connectivity)
        
    -   CEN instance: used to host the Transit Router
        
    -   Transit router: created in the China (Hangzhou) region, TR CIDR block 10.10.10.0/24 (must not overlap with the VPC or IDC CIDR blocks)
        
-   **On-premises resources**: on-premises IDC CIDR block 172.16.0.0/16
    
    -   strongSwan device: private IP address 172.16.0.1
        
    -   Public egress IP: XX.XX.3.3
        
-   **Encryption algorithms**: IKEv2, AES-128-CBC, SHA-1, and DH Group 2. Configure identical encryption parameters on both ends of the tunnel.
    
-   **Routing method**: Use destination-based routing. Add a static route in the Transit Router route table to forward traffic destined for the IDC CIDR block to the VPN connection.
    

### **Prerequisites**

-   The VPC CIDR block must not overlap with the on-premises IDC CIDR block.
    
-   Create a VPC and create one vSwitch in each of two different zones. Deploy at least one ECS instance in the VPC to verify connectivity.
    
-   A CEN instance and a Transit Router (TR) have been created, and the following conditions are met:
    
    -   [Attach the VPC to the Transit Router](/help/en/cen/user-guide/connect-vpcs)
        
    -   Enable [route learning](/help/en/cen/user-guide/route-learning) and [route synchronization](/help/en/cen/user-guide/route-synchronization) between the VPC and the Transit Router
        
    -   TR has been configured with an [address segment](/help/en/cen/user-guide/transit-router-cidr-blocks).
        
-   Deploy a Linux server in your on-premises IDC. This topic uses CentOS Stream 9 as an example. The server must have one public egress IP address. You will install strongSwan on this server to act as the on-premises gateway.
    

## Step 1: Create a customer gateway

A customer gateway records the public IP address of your on-premises gateway device in Alibaba Cloud. In this scenario, the IDC has only one public egress IP address. Create one customer gateway.

1.  Go to the [VPN Gateway page](https://vpc.console.alibabacloud.com/vpn). In the navigation pane on the left, click **Customer Gateways**.
    
2.  In the top menu bar, select the **China (Hangzhou)** region.
    
3.  Click **Create Customer Gateway**. Configure the following settings:
    
    **Name**: Enter a name for the customer gateway, such as cgw-idc.
    
    **IP Address**: Enter the public egress IP address of the on-premises IDC (XX.XX.3.3).
    

## Step 2: Create an IPsec-VPN connection

1.  In the VPN Gateway console, click **IPsec Connections** in the navigation pane on the left.
    
2.  Click **Bind CEN**. Configure the basic parameters of the IPsec-VPN connection:
    
    -   **Name**: Enter a name for the resource, such as ipsec-demo.
        
    -   **Region**: Select **China (Hangzhou)**.
        
    -   **Gateway Type**: Select **Public**.
        
    -   **Bind CEN**: Select **Same Account**.
        
    -   **Associate Resource**: Select **Transit Router**.
        
    -   **CEN Instance ID**: Select the CEN instance that you created in the prerequisites.
        
    -   **Routing Mode**: Select **Destination Routing Mode**. Later, add a static route in the Transit Router route table to control traffic forwarding.
        
    -   **Effective Immediately**: Select **Yes. Start negotiations after the configuration is completed.**. Alibaba Cloud initiates negotiation with the peer side.
        
    -   **Advanced Configuration (including route table association and route forwarding)**: Select all options, including **Automatic Advertising**, **Automatically Associate with Default Route Table of Transit Router**, and **Automatically Advertise System Routes to Default Route Table of Transit Router**.
        
3.  Configure tunnel parameters:
    
    -   **Tunnel 1 (Primary)**:
        
        -   **Customer Gateways**: Select the customer gateway that you created in Step 1.
            
        -   **Pre-Shared Key**: Enter a password agreed upon by both sides to authenticate identity when establishing the tunnel. Use a complex password. The password must be identical on both sides.
            
    -   **Tunnel 1 (Backup)**:
        
        -   **Customer Gateways**: Select the same customer gateway as Tunnel 1 (the IDC has only one public egress IP address in this scenario).
            
        -   **Pre-Shared Key**: Use the same key as Tunnel 1.
            
            > Keep other encryption parameters at their default values. To manually specify algorithms, expand **Encryption Configuration** and modify them.
            
4.  Click **OK**. After successful creation, the system prompts you to publish routes. Click **Cancel**.
    
    > IPsec-VPN connection initialization takes about 5 minutes (status is **Preparing**). You cannot configure routes during this time. Record the public IP addresses of the cloud-side tunnels. Then proceed to Step 3 to configure routes.
    
5.  Record the public IP addresses of the two cloud-side tunnels. You need these addresses later to configure strongSwan:
    
    Return to the **IPsec Connections** list page. Find the IPsec-VPN connection that you just created. In the **Gateway IP Address** column, record **IPsec Address 1:** and **IPsec Address 2:**. This topic uses XX.XX.1.1 and XX.XX.2.2 as examples.
    

## Step 3: Add a static route to the Transit Router

Because you use destination-based routing, manually add a route to the IDC CIDR block in the Transit Router route table.

1.  Go to the [Cloud Enterprise Network console](https://cen.console.alibabacloud.com/). Click the CEN instance ID.
    
2.  On the **Transit Router** tab, find the Transit Router in the China (Hangzhou) region. Click its ID to go to the details page.
    
3.  Switch to the **Route Table** tab. The system route table appears by default.
    
4.  On the **Route Entry** tab of the system route table, click **Add Route Entry**.
    
    -   **Destination CIDR**: Enter the IDC CIDR block 172.16.0.0/16.
        
    -   **Blackhole Route**: Select **No**.
        
    -   **Next Hop**: Select the network instance connection corresponding to the VPN connection (automatically created after associating the IPsec-VPN connection with the Transit Router).
        
5.  Click **OK**.
    
    After adding the route, you see a static route in the route table: destination CIDR block 172.16.0.0/16, next hop is the VPN connection.
    
    > This route forwards traffic destined for the IDC CIDR block from the Transit Router into the IPsec tunnel. Routes on the VPC side are automatically configured by the Transit Router's route synchronization feature. You do not need to configure them manually.
    

## Step 4: Configure the strongSwan device

**Important**

The third-party product information below is for reference only. Alibaba Cloud makes no representations or warranties regarding the performance, reliability, or potential impact of operations involving third-party products.

This section uses CentOS Stream 9 (64-bit) as an example to configure strongSwan. For other operating systems, see the [strongSwan official documentation](https://docs.strongswan.org/docs/5.9/install/install.html).

### 1\. Allow firewall policies

On the strongSwan device, allow the `ESP protocol (IP protocol number 50)`, `UDP port 500`, and `UDP port 4500` from the two IPsec addresses on the cloud.

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
sudo dnf install epel-release -y
sudo dnf install strongswan -y
```

### 4\. Create XFRM tunnel interfaces and an updown script

In a dual-tunnel scenario, create XFRM virtual interfaces to distinguish traffic for each tunnel and avoid kernel routing policy conflicts.

```
# Create XFRM tunnel interfaces (for Tunnel 1 and Tunnel 2)
sudo ip link add xfrm1 type xfrm dev eth0 if_id 1
sudo ip link add xfrm2 type xfrm dev eth0 if_id 2
sudo ip link set xfrm1 up
sudo ip link set xfrm2 up

# Add equal-cost multi-path (ECMP) routes: distribute traffic destined for the cloud CIDR block across both tunnels
sudo ip route add 10.0.0.0/16 nexthop dev xfrm1 weight 1 nexthop dev xfrm2 weight 1
```

Create an updown script to automatically set the corresponding XFRM interface to DOWN when a tunnel goes down. This causes the Linux kernel to converge traffic to the active tunnel:

```
sudo tee /usr/local/bin/xfrm-updown.sh > /dev/null << 'EOF'
#!/bin/bash
XFRM_IF="xfrm${PLUTO_IF_ID_IN}"
case "${PLUTO_VERB}" in
    up-client)
        ip link set "${XFRM_IF}" up 2>/dev/null
        ;;
    down-client)
        ip link set "${XFRM_IF}" down 2>/dev/null
        ;;
esac
EOF
sudo chmod +x /usr/local/bin/xfrm-updown.sh
```

> To make XFRM interfaces and routes persistent after a reboot, add the XFRM interface and route commands to a startup script.

### 5\. Configure strongSwan

1.  Back up the original configuration file:
    
    ```
    mv /etc/strongswan/swanctl/swanctl.conf /etc/strongswan/swanctl/swanctl.conf.bak
    ```
    
2.  Create a new configuration file:
    
    ```
    vi /etc/strongswan/swanctl/swanctl.conf
    ```
    
3.  Add and save the following configuration. Replace the example IP addresses and keys with your actual values:
    
    ```
    # strongSwan dual-tunnel IPsec-VPN configuration
    # For: IPsec-VPN connections associated with Alibaba Cloud Transit Routers + single public egress on-premises + destination-based routing
    #
    # Only parameters marked "Modify" require changes. Keep other parameters at their defaults.
    # Use XFRM interfaces (if_id) to separate traffic for the two tunnels. Use ECMP for load balancing.
    
    connections {
    
       # === Tunnel 1 ===
       tunnel1 {
          version = 2
          dpd_delay = 10s
          rekey_time = 86400s
          proposals = aes128-sha1-modp1024
    
          local_addrs  = 172.16.0.1               # strongSwan device NIC IP (Modify: use private IP in NAT environments; use public IP if the NIC is bound to a public IP)
          local {
             auth = psk
             id = XX.XX.3.3                         # On-premises public egress IP (Modify)
          }
    
          remote_addrs = XX.XX.1.1                  # Alibaba Cloud Tunnel 1 public IP (Modify)
          remote {
             auth = psk
             id = XX.XX.1.1                         # Alibaba Cloud Tunnel 1 public IP, same as remote_addrs above (Modify)
          }
    
          children {
             tunnel1-child {
                local_ts  = 0.0.0.0/0
                remote_ts = 0.0.0.0/0
                mode = tunnel
                esp_proposals = aes128-sha1-modp1024
                dpd_action = restart
                start_action = start
                close_action = start
                updown = /usr/local/bin/xfrm-updown.sh
                if_id_in = 1                        # Corresponds to xfrm1 interface
                if_id_out = 1
             }
          }
    
          if_id_in = 1
          if_id_out = 1
       }
    
       # === Tunnel 2 ===
       tunnel2 {
          version = 2
          dpd_delay = 10s
          rekey_time = 86400s
          proposals = aes128-sha1-modp1024
    
          local_addrs  = 172.16.0.1               # strongSwan device NIC IP, same as tunnel 1 (Modify)
          local {
             auth = psk
             id = XX.XX.3.3                         # On-premises public egress IP, same as tunnel 1 (Modify)
          }
    
          remote_addrs = XX.XX.2.2                  # Alibaba Cloud Tunnel 2 public IP (Modify)
          remote {
             auth = psk
             id = XX.XX.2.2                         # Alibaba Cloud Tunnel 2 public IP, same as remote_addrs above (Modify)
          }
    
          children {
             tunnel2-child {
                local_ts  = 0.0.0.0/0
                remote_ts = 0.0.0.0/0
                mode = tunnel
                esp_proposals = aes128-sha1-modp1024
                dpd_action = restart
                start_action = start
                close_action = start
                updown = /usr/local/bin/xfrm-updown.sh
                if_id_in = 2                        # Corresponds to xfrm2 interface
                if_id_out = 2
             }
          }
    
          if_id_in = 2
          if_id_out = 2
       }
    }
    
    secrets {
       ike-tunnel1 {
          id-1 = XX.XX.3.3                          # On-premises public egress IP (Modify)
          id-2 = XX.XX.1.1                          # Alibaba Cloud Tunnel 1 public IP (Modify)
          secret = "your-psk-here"                  # Pre-shared key for Tunnel 1, must match Alibaba Cloud (Modify)
       }
       ike-tunnel2 {
          id-1 = XX.XX.3.3                          # On-premises public egress IP (Modify)
          id-2 = XX.XX.2.2                          # Alibaba Cloud Tunnel 2 public IP (Modify)
          secret = "your-psk-here"                  # Pre-shared key for Tunnel 2, must match Alibaba Cloud (Modify)
       }
    }
    ```
    
    **Important**
    
    -   The `if_id_in` and `if_id_out` parameters bind each tunnel to its corresponding XFRM interface (xfrm1 or xfrm2). This ensures traffic for each tunnel does not interfere with the other.
        
    -   Set `local_ts` and `remote_ts` to `0.0.0.0/0`. The XFRM interface route table determines which traffic enters the tunnel. In destination-based routing mode, the cloud-side traffic selectors are also `0.0.0.0/0`.
        
    

### 6\. Start and verify the tunnel status

```
sudo systemctl enable strongswan
sudo systemctl restart strongswan
sudo swanctl --load-all
sudo swanctl --list-sas
```

If both tunnels show `ESTABLISHED` and the CHILD\_SA shows `INSTALLED`, the IPsec-VPN connection between the strongSwan device and Alibaba Cloud is successfully established.

```
# Expected output example (some content omitted)
tunnel1: #1, ESTABLISHED, IKEv2
  tunnel1-child: #1, reqid 1, INSTALLED, TUNNEL-in-UDP, ESP:AES_CBC-128/HMAC_SHA1_96
tunnel2: #2, ESTABLISHED, IKEv2
  tunnel2-child: #2, reqid 2, INSTALLED, TUNNEL-in-UDP, ESP:AES_CBC-128/HMAC_SHA1_96
```

## Verification tests

### Verify connectivity

1.  First, ensure the **ECS security group rules allow ICMP traffic**. Then log on to the strongSwan device and run the following command to ping the cloud-side ECS:
    
    ```
    ping 10.0.0.1
    ```
    
    If replies are received, VPC and on-premises IDC connectivity is successful.
    
2.  First, ensure ICMP traffic is allowed on the strongSwan device or internal servers. Then log on to the ECS instance in the VPC (10.0.0.1) and ping the private IP address of the strongSwan device:
    
    ```
    ping 172.16.0.1
    ```
    
    If replies are received, reverse connectivity is normal.
    

### Verify high availability

By default, IPsec-VPN connections associated with a Transit Router use equal-cost multi-path (ECMP) routing across both tunnels. Traffic is load balanced between the tunnels. If one tunnel fails, traffic automatically converges to the other tunnel without manual intervention.

1.  Keep the ECS pinging the IDC server continuously:
    
    ```
    ping 172.16.0.1 -c 10000
    ```
    
2.  Break one tunnel: In the Alibaba Cloud console, change the pre-shared key for Tunnel 1 of the IPsec-VPN connection. This breaks the tunnel.
    
3.  Observe the ping results: After a brief interruption, connectivity resumes. This confirms traffic converged to Tunnel 2.
    
4.  Restore the tunnel: Change the pre-shared key for Tunnel 1 back to the correct value. After the tunnel restores, traffic resumes load balancing across both tunnels.
    

## Troubleshooting

Common issues and solutions:

Issue

Possible cause

Solution

Console shows negotiation failure for the tunnel

Network unreachable

Check whether the strongSwan device can ping the Alibaba Cloud IPsec address. Confirm the on-premises IDC firewall allows UDP ports 500 and 4500.

Pre-shared key mismatch

Verify that the pre-shared keys on both sides are identical, including case and special characters.

IKE parameter mismatch

Check whether IKE version, encryption algorithm, authentication algorithm, and DH group match on both sides.

Tunnel established but ping fails

Routes not configured

Check whether the VPC route table contains a route to the IDC CIDR block (next hop is the Transit Router). Also check whether the Transit Router route table contains a static route to the IDC CIDR block (next hop is the VPN connection). In destination-based routing mode, the Transit Router route table does not auto-generate routes. You must add them manually.

Security group restriction

Check whether the ECS security group allows ICMP traffic from the IDC CIDR block (172.16.0.0/16).

On-premises firewall restriction

Check whether the IDC firewall allows traffic from the VPC CIDR block (10.0.0.0/16).

Missing route on strongSwan side

Confirm that IP forwarding is enabled on the strongSwan device. Also confirm that other servers in the IDC have routes to the VPC CIDR block (next hop is the strongSwan device).
