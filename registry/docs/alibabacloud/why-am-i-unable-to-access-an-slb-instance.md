## Issue

Clients cannot access a Server Load Balancer (SLB) instance.

## Solution

The ports and IP addresses in this topic are for reference only. When you troubleshoot the issue that clients cannot access an SLB instance, configure the ports and internal IP addresses based on the actual scenario.

Cause

Solution

The backend servers of a Layer 4 listener cannot access an SLB instance due to the following reasons:

-   The backend servers of a Layer 4 listener of Classic Load Balancer (CLB) cannot be used as clients and servers at the same time.
-   The client IP preservation feature is enabled for a server group of a Layer 4 listener of Network Load Balancer (NLB). The backend servers in the server group cannot be used as clients and servers at the same time.
    
    **Note** After you disable the client IP preservation feature for a server group of NLB, the backend servers in the server group can be used as clients and servers at the same time.
    

-   CLB: N/A
-   NLB: Disable the client IP preservation feature for the server group.

A health check exception occurs.

To troubleshoot health check exceptions, see [How do I troubleshoot health check exceptions of a layer-4 (TCP/UDP) listener?](/help/en/slb/layer-4-tcp-udp-listener-health-check-exception-troubleshooting#task-j5n-rgz-xfb) and [How do I troubleshoot a health check exception of a layer-7 (HTTP/HTTPS) listener?](/help/en/slb/layer-7-listener-http-https-health-check-exception-troubleshooting#task-o13-vjz-xfb).

You cannot use SLB to deploy FTP, Trivial File Transfer Protocol (TFTP), H323, and Session Initiation Protocol (SIP) services.

If you want to deploy an FTP service, use the following methods:

-   For a Linux system, you can configure a forwarding rule that uses port 22, and use Secure File Transfer Protocol (SFTP) to transmit data.
-   You can associate an elastic IP address (EIP) with an FTP server in cut-through mode to provide external FTP services. For more information, see [Associate an EIP with an FTP server](/help/en/eip/use-cases/associate-an-eip-with-an-ftp-server#task-pfc-syx-yfb).

The internal firewall of a server does not allow traffic on port 80.

You can use the following methods to temporarily disable the firewall:

-   For Windows servers, run the following command:
    
    `firewall.cpl`
    
-   For Linux servers, run the following command:
    
    `/etc/init.d/iptables stop`
    

A backend port exception occurs.

Troubleshoot backend port exceptions based on the following information:

-   For a Layer 4 SLB instance, if you run the following command and a response is returned, the backend port works as expected:
    
    `telnet 10.XX.XX.1 80`
    
-   For a Layer 7 SLB instance, you can check the returned HTTP status code. The status code must be a status code that indicates a healthy state, such as 200. You can use the following methods to check whether the backend port works as expected:
    -   Windows: Run the following command to access the internal IP address of the Elastic Compute Service (ECS) instance:
        
        `http://10.XX.XX.1`
        
    -   Linux: Run the following command to check whether the returned value is `HTTP/1.1 200 OK`.
        
        `curl -I 10.XX.XX.1`
        

The rp\_filter parameters conflict with a policy-based route of the Linux Virtual Server (LVS) of SLB.

1.  Log on to the ECS instance that is associated with the Layer 4 SLB instance. The ECS instance runs Linux.
2.  Modify the /etc/sysctl.conf file and set the following parameters in the system configuration file to 0:
    
    ```
     net.ipv4.conf.default.rp_filter = 0
     net.ipv4.conf.all.rp_filter = 0
     net.ipv4.conf.eth0.rp_filter = 0
    ```
    
3.  Run the `sudo sysctl -p` command for the configurations to take effect.

A listener exception occurs.

Run the following commands on the server. If `10.XX.XX.1:80` or `0.0.0.0:80` is returned, the listener works as expected. Then, troubleshoot based on the actual scenario.

-   For Windows servers, run the following command:
    
    `netstat -ano | findstr :80`
    
-   For Linux servers, run the following command:
    
    `netstat -anp | grep :80`
    

No listeners are configured for the SLB instance.

Configure listeners. For more information, see [Listener overview](/help/en/slb/classic-load-balancer/user-guide/listener-overview/#concept-xvg-qmn-vdb).

The SLB instance cannot be accessed by using its domain name. This may be caused by an error in domain name resolution.

N/A.

An exception occurs on the on-premises network of the client or the intermediate link of the Internet service provider (ISP).

Test the connectivity on the service port of the SLB instance in different regions and network environments.

If the exception occurs only when the SLB instance is accessed from the on-premises network, the issue is caused by a network exception. You can perform ping and MTR tests for further troubleshooting and analysis.

The client IP address is blocked by Alibaba Cloud Security.

1.  Obtain the public IP address of the client network.
2.  Add the IP address to the whitelist of the SLB instance to allow access from the IP address.
    
    **Note** This operation may pose security risks. Make sure that the IP addresses in the whitelist do not initiate attacks on SLB.
    

After you switch from Anti-DDoS Pro/Premium to Anti-DDoS Origin, the whitelist is not disabled.

Disable the whitelist. For more information, see [Configure the IP address blacklist and whitelist for an Anti-DDoS Pro or Anti-DDoS Premium instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/set-blacklist-and-whitelist-for-anti-ddos-pro-instance-ip#task-2346802).
