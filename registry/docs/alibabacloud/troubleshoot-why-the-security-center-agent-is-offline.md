When the Security Center console reports an agent as offline, the corresponding server is no longer protected. This leaves the server vulnerable to compromise. Follow the steps in this article to troubleshoot the issue and bring the agent back online.

## Background

Security Center provides a one-click Agent Troubleshooting feature. If an agent on your server is offline, we recommend using this feature to diagnose the issue. For more information, see [Use the agent troubleshooting feature](/help/en/security-center/user-guide/use-the-agent-troubleshooting-feature#task-2113456).

## Procedure

1.  Log on to your server and check whether the Security Center agent processes (`AliYunDun` and `AliYunDunUpdate`) are running.
    
    **Note**
    
    If the agent processes are not running, the agent will be offline. You should restart the server or reinstall the agent. For more information about agent installation, see [Install Agent](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).
    
    -   **Windows**
        
        Use Task Manager to verify that the agent processes are running.
        
        ![Windows](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7601029951/p4635.png)
        
    -   **Linux**
        
        Run the `ps aux | grep AliYunDun` command to check if the agent processes are running.
        
        ![linux](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7601029951/p4636.png)
        
    
2.  If the agent protection status is still **Off** after a fresh installation:
    
    -   On Linux, you may need to manually restart the agent. Run the following commands in sequence:
        
        ```
        killall AliYunDun
        killall AliYunDunUpdate
        /usr/local/aegis/aegis_client/aegis_10_xx/AliYunDun
        ```
        
        **Note**
        
        In the third command, replace `xx` with the largest two-digit number from the aegis\_10\_xx directory name. This number indicates the latest agent version. The aegis\_10\_xx directories are in the /usr/local/aegis/aegis\_client directory. For example, if this directory contains aegis\_10\_70, aegis\_10\_73, and aegis\_10\_75, replace `xx` in the command with `75`.
        
    -   On Windows, restart the two agent services from the Services console: `Alibaba Security Aegis Detect Service` and `Alibaba Security Aegis Update Service`. Right-click each service and select **Restart**.![Restart](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7601029951/p4637.png)
        
    
3.  Run a ping command on your server to test your server's network connection to Security Center.
    
    -   Servers with public IP addresses (such as servers in the Classic Network, with Elastic IP addresses (EIPs), or External Servers).
        
        -   Windows: Run the `ping jsrv.aegis.aliyun.com -l 1000` command.
            
        -   Linux: Run the `ping jsrv.aegis.aliyun.com -s 1000` command.
            
    -   Servers without public IP addresses (such as servers in Finance Cloud or a Virtual Private Cloud (VPC)).
        
        -   Windows: Run the `ping jsrv2.aegis.aliyun.com -l 1000` command.
            
        -   Linux: Run the `ping jsrv2.aegis.aliyun.com -s 1000` command.
            
    
4.  If the `ping` command to Security Center domains fails:
    
    1.  First, verify that your server's DNS service is running properly. A DNS failure will prevent the server from resolving the endpoint domain names. If the service has failed, restart your server or troubleshoot the DNS configuration.
        
    2.  Next, check for firewall rules or Alibaba Cloud security group rules that might be blocking outbound traffic. You must add the Security Center service IP addresses to your outbound allow list. For more information on configuring security groups, see [Create Security Group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb). For Cloud Firewall configuration, see [Configure Internet Firewall Access Control Policies](/help/en/cloud-firewall/cloudfirewall/user-guide/create-inbound-and-outbound-access-control-policies-for-the-internet-firewall#concept-xx1-wgr-ggb).
        
        **Note**
        
        Ensure that outbound traffic on TCP ports 80 and 443 is allowed to the following CIDR blocks: \`100.100.0.0/16\`, \`106.11.0.0/16\`, and \`100.103.0.0/16\`. No inbound rules are required.
        
    3.  If the \`ping\` command succeeds but the agent is still offline, a firewall may be blocking the required TCP ports. Use the \`telnet\` command to test connectivity to port 80 of the resolved IP address. If the connection fails, it confirms a firewall is blocking the port.
        
    
5.  Check for persistently high CPU or memory utilization (for example, 95% or 100%), which can prevent the agent's processes from running correctly.
    
6.  Check whether third-party antivirus product is interfering with the Security Center agent.
    
    Some antivirus software can block the agent's network access or processes. To rule this out, temporarily disable the third-party product and then reinstall the Security Center agent.
