If your servers are deployed in data centers, on hybrid clouds, or on Alibaba Cloud virtual private clouds (VPCs), you cannot directly add the servers to Alibaba Cloud Security Center for protection because the servers are inaccessible over the Internet. In this scenario, you can configure a proxy server to add the servers to Security Center. The servers include hosts and containers. This topic describes how to add servers to Security Center by using the proxy access feature.

## Scenarios

## VPC that cannot be directly added to Security Center

If your VPC has multiple access restrictions and you cannot directly add an Elastic Compute Service (ECS) instance in the VPC to Security Center, you can use the proxy access feature to add the ECS instance to Security Center for protection.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4347282671/CAEQTxiBgICww8zC0xkiIDQ3MjhkZDkwMTZkYjRiYTE5MmQzMTgxZDVkMjFlODU14059762_20231031101103.904.svg)

### Data center

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4347282671/CAEQTxiBgMCS4fq00xkiIDJkOTgxMGI4MWZiNTQwOWFhYWM2OWQ1MGNmOGJjNDY34059762_20231031101103.904.svg)

### Hybrid cloud

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4347282671/CAEQTxiBgIChi_200xkiIGQ2NGQ3YzdhNjY4NjQ5MGE4NDdlNTRjNmFmZTEzOGQ54059762_20231031101103.904.svg)

## Limits

-   You can configure only Linux servers as proxy servers.
    
-   If you add a server to Security Center by using the proxy access feature, you can use most of the features provided by Security Center. However, you cannot use the features listed in the following table. For more information about all features supported by Security Center, see [Functions and features](/help/en/security-center/product-overview/functions-and-features#concept-fc1-xvb-zdb).
    
    **Unsupported features**
    
    **Module**
    
    **Feature**
    
    Assets
    
    -   [Batch O&M and CloudMonitor](/help/en/security-center/user-guide/manage-servers#section-tyj-o4j-0mf)
        
    -   [Container assets](/help/en/security-center/user-guide/view-security-information-about-containers#task-2424021)
        
    -   [Cloud services](/help/en/security-center/user-guide/view-information-about-cloud-services#task-1813905)
        
    -   [Websites](/help/en/security-center/user-guide/view-website-information#task-1813737)
        
    
    Risk Governance
    
    -   [Asset exposure analysis](/help/en/security-center/user-guide/asset-exposure-analysis#task-2011667)
        
    -   [CSPM Overview](/help/en/security-center/user-guide/cspm#concept-kn2-wdm-3gb)
        
    -   [Detection of AccessKey pair leaks](/help/en/security-center/user-guide/detection-of-accesskey-pair-leaks#concept-vb5-3jw-f2b)
        
    -   [Cloud honeypot](/help/en/security-center/user-guide/overview-10#concept-2206251)
        
    -   [Log analysis - network logs](/help/en/security-center/user-guide/overview-3#concept-b5x-z2y-kfb)
        
    
    Protection Configuration
    
    [Defense rules against brute-force attacks](/help/en/security-center/user-guide/configure-alert-settings#section-as4-ms9-bwe)
    
    [Anti-ransomware](/help/en/security-center/user-guide/overview-2#concept-1944277)
    
    System Configuration
    
    [Playbook](/help/en/security-center/user-guide/use-the-playbook-feature#task-2236819)
    

## Preparations

-   Prepare one or more servers that can access the Internet as proxy servers. Make sure that the proxy servers meet the following requirements:
    
    -   Sufficient network bandwidth is reserved. A proxy server must reserve a bandwidth of 10 Kbit/s to connect to a server that you want to add to Security Center. For example, if you want to connect 50 servers to a proxy server, make sure that the proxy server reserves a bandwidth of 500 Kbit/s.
        
    -   Port 80, port 443, and port 8080 are enabled on the proxy servers to allow access from the servers that you want to connect to the proxy servers.
        
    -   If you want to use multiple proxy servers, we recommend that you use a domain name for connection. Make sure that you apply for a domain name for the proxy servers in advance and the domain name can be resolved to the IP addresses of the proxy servers, the IP addresses for load balancing, or virtual IP addresses.
        
    
    **Important**
    
    -   A single 8-core, 16-GB proxy server can connect to up to 6,000 hosts or containers. Plan the specifications and quantity of proxy servers based on your business requirements.
        
    -   If you do not use a domain name for connection, we recommend that you use multiple proxy servers to create a proxy cluster to ensure connection stability. For example, if you connect a proxy server to Security Center by using a public IP address, you can use multiple proxy servers to create a proxy cluster.
        
    
-   In hybrid cloud scenarios, connect third-party cloud servers to Alibaba Cloud VPCs.
    

## Step 1: Create a proxy cluster

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Feature Settings**.
    
3.  On the **Agent** > ****Proxy Access**** tab, click **Create Cluster**.
    
4.  In the **Create Cluster** dialog box, configure the Cluster name, Address, and Description parameters. Then, click **OK**.
    
    **Address**: Enter the IP address or domain name of your proxy server. After the proxy cluster is created, hosts and containers in the cluster connect to the proxy server by using the address that you specified for the **Address** parameter.
    
    **Important**
    
    -   If you set the **Address** parameter to an IP address, you can configure only one proxy server. If you need to add only a small number of hosts or containers, such as 5, to Security Center, we recommend that you use this method.
        
    -   If you want to configure multiple proxy servers, we recommend that you set the **Address** parameter to a domain name. Make sure that the domain name can be resolved to the IP addresses of the proxy servers, the IP addresses for load balancing, or virtual IP addresses.
        
    -   After a proxy cluster is created, you cannot change the name or address of the cluster. We recommend that you enter an informative cluster name and a reachable address.
        
    

## Step 2: Deploy a proxy server

1.  On the **Agent** > ****Proxy Access**** tab, find the created cluster and click **Deploy Proxy** in the **Actions** column.
    
2.  In the **Deploy Proxy Server** panel, select a deployment mode and complete the configurations.
    
    If the Security Center agent is installed on your proxy server and the agent is online, you can select Quick Deployment. If the Security Center agent is not installed on your proxy server, you must select Manual Deployment.
    
    -   Quick Deployment
        
        If you select **Quick Deployment**, you must select a Linux server that you want to configure as a proxy server from the Select Servers section and click **OK**.
        
    -   Manual Deployment
        
        If you select **Manual Deployment**, you must copy the manual deployment command based on the on-screen instructions. Then, use the administrator account to log on to the proxy server and run the manual deployment command in the command-line interface.
        
    
    Approximately 5 minutes after deployment, you can view the status of the proxy server on the **Agent** > ****Proxy Access**** tab.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7546872961/p694870.png)
    

**Note**

After you deploy the proxy server, the server can provide only proxy capabilities. The protection features provided by Security Center are not supported if the Security Center agent is not installed on the proxy server. The protection features include vulnerability detection and baseline check. If you want to use Security Center to protect the proxy server, you must install the Security Center agent on the proxy server. For more information, see [Install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).

## Step 3: Connect a server to the proxy cluster

After you create the proxy cluster and deploy the proxy server, you can connect a server to the cluster as a client. This way, the server is added to Security Center over the proxy server and is protected.

**Important**

-   A single 8-core, 16-GB proxy server can connect to up to 6,000 hosts or containers.
    
-   You can connect up to 500 hosts to a proxy cluster in a batch, regardless of whether you directly select servers or run installation commands on servers to connect the servers to the proxy cluster. The interval between batches must be greater than 1 minute.
    

1.  On the **Agent** > ****Proxy Access**** tab, find the created cluster and click **Install Agent** in the **Actions** column.
    
2.  In the ****Install Agent**** panel, select an access mode and complete the configurations.
    
    If the Security Center agent is installed on the server that you want to connect to the proxy cluster and the agent is online, you can directly select the server. If the Security Center agent is not installed on the server that you want to connect to the proxy cluster, you can run an installation command on the server.
    
    -   Select a server
        
        In the asset list, select the server that you want to connect to the proxy cluster and click **OK**.
        
    -   Run an installation command
        
        1.  Click **Generate Installation Command**.
            
        2.  On the **Agent** > ****Installation Command**** tab, click **Create Installation Command**.
            
        3.  In the **Create Installation Command** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
            
            **Parameter**
            
            **Description**
            
            **Expiration Time**
            
            The time when the installation command expires.
            
            **Service Provider**
            
            The provider of your server.
            
            **Default Group**
            
            The group to which you want to add the server. You can view groups on the Host page of the Security Center console.
            
            **OS**
            
            The operating system of the server.
            
            **Create Image System**
            
            Retain the default value **No**. This parameter specifies whether to create an image for the server.
            
            **Select Proxy**
            
            Select **Self-managed Proxy Cluster** and select the proxy cluster to which you want to connect the server.
            
        4.  In the installation command list, view and copy the generated installation command. ![代理接入命令](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7828872571/p582466.png)
            
        5.  Log on to the server by using the administrator account and run the installation command based on the operating system of the server.
            
            Wait for 5 minutes after the installation command is run. Then, you can click the number in the **Client Connected** column to view the list of servers that are connected to the proxy cluster.
            

## **Step 4:** (Optional) Configure a proxy cluster policy

By default, the Send Data Back to Management Center transmission mode is used, and the network bandwidth and frequency of transmissions are not limited. In this mode, data collected by a proxy server is sent to Security Center. To change the transmission mode or limit the network bandwidth and frequency of transmissions, perform the following steps:

1.  On the **Agent** > ****Proxy Access**** tab, find the created cluster and click **Proxy Settings** in the **Actions** column.
    
2.  In the **Proxy Settings** dialog box, configure the parameters and click **OK**.
    
    The following transmission modes are supported: **Send Data Back to Management Center** and **Directly Cache to Specified Directory**.
    
    **Transmission mode**
    
    **Description**
    
    **Send Data Back to Management Center**
    
    Data is sent to Security Center for risk and threat detection.
    
    If you select this mode, you can manually configure the network bandwidth and transmission frequency for communication between the proxy server and Security Center. Valid values:
    
    -   **Unlimited**: The network bandwidth and transmission frequency are not limited.
        
    -   **Custom**: You can specify the upper limits of network bandwidth and transmission frequency based on your business requirements.
        
    
    **Important**
    
    When you configure the upper limit of network bandwidth or transmission frequency for a proxy cluster, make sure that the required bandwidth does not exceed 60% of the total bandwidth and resources required for communication processes do not exceed 60% of the total resources.
    
    **Directly Cache to Specified Directory**
    
    Data is cached in data centers or VPCs for risk and threat detection. Only specific data types are supported.
    
    If you select this mode, related logs are cached in the /usr/local/aegis/proxy/log/export.log file of the proxy server by default. You can change the cache directory.
    
    **Note**
    
    The cache directory can store up to 10 GB of data. If the upper limit is exceeded, the system cyclically overwrites the earliest logs.
    

## What to do next

### View information about the proxy cluster

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Feature Settings**.
    
3.  On the **Agent** > ****Proxy Access**** tab, perform the following operations:
    
    -   View basic information about the proxy cluster
        
        You can view the name, address, number of connected servers, and status of the proxy cluster. A proxy cluster can be in one of the following states:
        
        -   Online: At least one proxy server in the proxy cluster is online.
            
        -   Offline: No proxy server exists in the proxy cluster, or all proxy servers in the proxy cluster are offline.
            
    -   View the list of proxy servers
        
        Find the proxy cluster and click the ![服务器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7020071861/p582589.png) icon in the **Server Information** column. In the panel that appears, find the proxy server whose basic information you want to view and move the pointer over the server in the Asset Information column. **Agent Status** indicates whether the Security Center agent is online. ![代理服务器列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1903986171/p582616.png)
        
    -   View the list of connected servers
        
        Find the proxy cluster and click the number in the **Client Connected** column. You can view the following information about each connected server: asset information, group information, operating system type, service provider, and region. You can also view the tags that are added to the server and the status of the Security Center agent that is installed on the server.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7546872961/p695588.png)
        

### Delete the proxy cluster

If you no longer need to use Security Center to protect the servers that are added by using the proxy access feature, you can perform the following operations to delete the proxy cluster:

1.  Disconnect the added servers from the proxy cluster.
    
    1.  On the **Agent** > ****Proxy Access**** tab, find the proxy cluster and click **Install Agent** in the **Actions** column.
        
    2.  In the **Install Agent** panel, clear all selected servers and click **OK**.
        
    
    This operation disconnects all added servers from the proxy cluster but does not uninstall the Security Center agent from the servers. You can run commands on the servers to uninstall the Security Center agent. For more information, see [Uninstall the Security Center agent by running a command](/help/en/security-center/user-guide/uninstall-the-security-center-agent#section-noh-6g3-n24).
    
2.  Delete the proxy server.
    
    You can delete a proxy server only when it is offline. You can stop the aegis proxy process to bring a proxy server offline.
    
    1.  Log on to the proxy server by using the administrator account. Then, run the following commands to stop the aegis proxy process:
        
        ```
        ps -ef | grep aegis
        kill PID # /usr/local/aegis/proxy/ID of the SasClientProxy process
        ```
        
        **Note**
        
        If you do not have permissions to stop the process, disable the client protection feature. For more information, see [Enable features on the Agent Settings tab](/help/en/security-center/user-guide/enable-features-on-the-agent-settings-tab).
        
    2.  On the **Agent** > ****Proxy Access**** tab, find the proxy cluster and click the ![服务器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7020071861/p582589.png) icon in the **Server Information** column.
        
    3.  In the **Server Information** panel, click **Delete** in the Actions column for each proxy server.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7546872961/p695635.png)
        
3.  After you delete all proxy servers from the proxy cluster, find the proxy cluster in the proxy cluster list and click **Delete** in the **Actions** column.
    

### Upgrade the version of the proxy server

To improve connection performance, Security Center continuously detects and displays the latest version of the proxy server. You can determine whether to upgrade your proxy server to the latest version based on your business requirements.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Feature Settings**.
    
3.  On the **Agent** > ****Proxy Access**** tab, find the proxy cluster and click the ![服务器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7020071861/p582589.png) icon in the **Server Information** column.
    
4.  In the **Server Information** panel, find the proxy server whose version you want to upgrade and click **Upgrade** in the **Actions** column.
    
    If the **Upgrade** button is dimmed, the proxy server runs the latest version, or the Security Center agent is offline. If the Security Center agent is offline, you must troubleshoot why the agent is offline. After the agent is online, upgrade the version again. For more information, see [Troubleshoot why the Security Center agent is offline](/help/en/security-center/user-guide/troubleshoot-why-the-security-center-agent-is-offline#task-fkr-2lc-zdb).
    

## **FAQ**

### **Does the Security Center proxy support cross-account installation?**

An ECS instance cannot use a proxy cluster from a different Alibaba Cloud account to connect to Security Center.

You can use the multi-account security management feature in Security Center to centrally manage security configurations, such as asset onboarding, and handle security risks across multiple Alibaba Cloud accounts. For more information, see[Use the multi-account management feature](/help/en/security-center/user-guide/use-the-multi-account-management-feature).
