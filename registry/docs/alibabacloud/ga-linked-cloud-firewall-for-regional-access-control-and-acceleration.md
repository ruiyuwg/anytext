Global applications process requests from users around the world and require centralized management of inbound and outbound traffic. Global Accelerator (GA) relies on the high-quality BGP bandwidth and global transmission network of Alibaba Cloud to provide reliable and high-performance network acceleration services. The Internet firewall of Cloud Firewall provides fine-grained traffic control and protection capabilities. You can use GA together with Cloud Firewall to improve the security, performance, and stability of applications.

## **Scenario**

An enterprise application is deployed in the US (Silicon Valley) region, and most clients are located in China. The enterprise faces the following issues:

-   The cross-border network is unstable. Network issues, such as high network latency, network jitter, and packet loss, frequently occur.
    
-   Malicious attacks, crawlers, and requests from non-users in regions outside China threaten application security, increase server loads, and affect overall performance.
    

To resolve the preceding issues and improve user experience, the enterprise uses GA. The enterprise also uses the access control feature of the Internet firewall of Cloud Firewall to block traffic from regions outside China.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3368334371/CAEQMRiBgMC5lca6nhkiIDdkYjY5YTVkY2M3MjQxOTdiYTA1ODkzMzBjMGZlMGRk4093456_20231123151942.235.svg)

## **Limits**

The Internet firewall of Cloud Firewall protects the following types of assets: GA instances and accelerated IP addresses of the **elastic IP address (EIP) type**. The accelerated IP addresses must meet the following requirements:

-   The GA instance to which the accelerated IP addresses belong must be a **standard GA instance**.
    
-   The accelerated IP addresses must be of the **EIP** type.
    
-   The acceleration region to which the accelerated IP addresses belong cannot be an Alibaba Cloud point of presence (POP).
    
    To check whether an acceleration region is a POP of Alibaba Cloud, call the [ListAvailableBusiRegions](/help/en/ga/api-listavailablebusiregions#doc-api-Ga-ListAvailableBusiRegions) operation.
    

## **Prerequisites**

-   Applications are deployed on the origin server.
    
    In this example, the Alibaba Cloud Linux 3 operating system is used. NGINX is used to configure the backend HTTP service that uses port 80.
    
    **Sample commands for deploying test applications on ECS instances**
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World !  This is This is the Silicon Valley data center test page." > index.html
    ```
    
-   Cloud Firewall is purchased. For more information, see [Purchase Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/getting-started/purchase-cloud-firewall).
    

## **Procedure**

### **Step 1: Configure a GA instance**

In this example, a pay-as-you-go standard GA instance is used.

1.  On the **Standard Instance** > **Instances** page of the [GA console](https://ga.console.alibabacloud.com/list), click **Create Standard Pay-as-you-go Instance**.
    
2.  In the **Basic Instance Configuration** step, configure the basic information and click **Next**.
    
    ![GA基础配置.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p842361.png)
    
3.  In the **Configure Acceleration Area** step, add an acceleration region, allocate bandwidth to the region, and then click **Next**.
    
    In this example, the China (Hong Kong) region is used. The **Acceleration Area** parameter is set to **China (Hong Kong)** and the **ISP Line Type** parameter is set to **BGP (Multi-ISP)**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas).
    
    **Important**
    
    If you specify a small value for the maximum bandwidth, throttling may occur and packets may be dropped. Specify a maximum bandwidth based on your business requirements.
    
    ![GA加速区域.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p842369.png)
    
4.  In the **Configure listeners** step, configure the forwarding protocol and the port, and then click **Next**.
    
    In this example, the **Protocol** parameter is set to **HTTP** and the **Port** parameter is set to **80**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information about how to configure a listener, see [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners).
    
    ![HTTP监听.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p844604.png)
    
5.  In the **Configure an endpoint group** step, configure the endpoint and click **Next**.
    
    In this example, **Region** is set to **US (Silicon Valley)**, **Backend Service Type** is set to **Custom IP**, and **Backend Service** is set to the public IP address of the origin server. Read and select **Compliance Commitments Regarding Cross-border Data Transfers**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information about how to configure an endpoint group, see [Add and manage intelligent routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners).
    
    ![EPG.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p866287.png)
    
    ![GA 跨境合规 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p855993.png)
    
6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
    
7.  **(Optional)** After you create a GA instance, you can click the instance ID on the **Instances** page to view the configurations of the instance. On the instance details page, you can click tabs, such as **Instance Information**, **Listeners**, and **Acceleration Areas**, to view more details.
    
    For example, you can view the accelerated IP address of the GA instance from the **Acceleration Areas** tab.
    
    ![加速区域.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p866820.png)
    

### Step 2: Configure Cloud Firewall

1.  On the [Firewall Settings](https://yundun.console.aliyun.com/?p=cfwnext#/firewall/switch/internet) page in the **Cloud Firewall** console, click the **Internet Firewall** tab. On the **IPv4** tab, find the accelerated IP address of the GA instance and enable protection.
    
    You can set the asset type to **GA EIP** and enter a GA instance ID to filter assets. If **Protected** is displayed in the Firewall Status column, protection is enabled. For more information about how to enable the Internet firewall, see [Internet firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/internet-firewall).
    
    ![CFW-开启资产保护.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p869310.png)
    
2.  On the **Prevention Configuration** > ****Access Control**** > **[Internet Border](https://yundun.console.alibabacloud.com/cfw#/security/access/internet/inbound)** page of the **Cloud Firewall** console, click the **Inbound** tab and click **Create Policy**.
    
3.  In the **Create Inbound Policy** panel, click the **Create Policy** tab, configure the policy, and then click **OK**. Then, create an address book as prompted.
    
    In this example, you can refer to the following table for the configurations. You can modify the policy based on your business requirements. For more information, see [Create access control policies for the Internet firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/create-inbound-and-outbound-access-control-policies-for-the-internet-firewall).
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Source Type**
    
    The initiator of network traffic. You must select a source type and enter source addresses from which network traffic is initiated based on the selected source type.
    
    **Location**
    
    **Source**
    
    **All Locations Outside China**
    
    **Destination Type**
    
    The receiver of network traffic. You must select a destination type and enter destination addresses to which network traffic is sent based on the selected destination type.
    
    **IP**
    
    **Destination**
    
    Enter the accelerated IP address of GA. Use the /32 suffix.
    
    **Protocol Type**
    
    The transport layer protocol. Valid values: **TCP**, **UDP**, **ICMP**, and **ANY**. If you do not know the protocol type, select **ANY**.
    
    **ANY**
    
    **Port Type**
    
    The port type and port number of the destination.
    
    **Port**
    
    **Port**
    
    **0/0**, which indicates all ports
    
    **Application**
    
    The application type of traffic.
    
    **ANY**
    
    **Action**
    
    The action on the traffic if the traffic meets the preceding conditions that you specify for the access control policy. Valid values:
    
    -   **Allow**: The traffic is allowed.
        
    -   **Deny**: The traffic is denied, and no notifications are sent.
        
    -   **Monitor**: The traffic is recorded and allowed. You can observe the traffic for a period of time and change the policy action to **Allow** or **Deny** based on your business requirements.
        
    
    **Deny**
    
    **Priority**
    
    The priority of the access control policy. Default value: **Lowest**. Valid values:
    
    **Highest**
    
    **Policy Validity Period**
    
    The validity period of the access control policy. The policy can be used to match traffic only during the validity period.
    
    **Always**
    
    **Enabling Status**
    
    Specify whether to enable the policy. If you turn off Enabling Status when you create an access control policy, you can enable the policy in the list of access control policies.
    
    **Enabled**
    
    ![CFW 入向策略.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p869365.png)
    

### **Step 3: Verify the result**

#### **Verity the access control policy**

In this example, requests are sent from clients in the China (Hong Kong) and Germany (Frankfurt) regions.

1.  In the China (Hong Kong) and Germany (Frankfurt) regions, access the accelerated IP address of GA in a browser to check whether the backend service can be accessed.
    
    -   A client in the China (Hong Kong) region accesses the accelerated IP address of the GA instance. The following result is returned. ![HK 访问.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p869890.png)
        
    -   A client in the Germany (Frankfurt) region accesses the accelerated IP address of the GA instance. The following result is returned.
        
        ![海外 访问.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p869892.png)
        
    
    The results show that the access control policy of Cloud Firewall takes effect and traffic from regions outside China is blocked.
    
2.  In the [access control policy list](https://yundun.console.alibabacloud.com/cfw#/security/access/internet/inbound), view the number of hits in the **Hits**/**Last Hit At** column of the access policy. You can click the number of hits to go to the **Traffic Logs** page to view the traffic details.
    
    For example, you can set **Destination IP Address** to the accelerated IP address of GA and **Application Identification Status** to **Blocked by Policy** to view the details of blocked traffic.
    
    ![流量日志.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p869923.png)
    
    You can also view attacks and operation logs on the **Log Audit** page. For more information, see [Log audit](/help/en/cloud-firewall/cloudfirewall/user-guide/log-audit).
    
3.  On the Protection Status tab of the [Intrusion Prevention](https://yundun.console.alibabacloud.com/cfw#/security/ips/internet) page, you can view the statistics and details of protection data.
    
    For example, you can set the destination IP address to the accelerated IP address of GA to view the protection details.
    
    ![CFW 入侵防御.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p872305.png)
    
    For more information about intrusion prevention capabilities, see [Intrusion prevention](/help/en/cloud-firewall/cloudfirewall/user-guide/intrusion-prevention).
    

#### **Verify the GA acceleration performance**

In this example, the [instant detection tool](https://cloudmonitor.console.alibabacloud.com/disposableTest) is used in the China (Hong Kong) region. Before and after GA is configured, the public IP address of the origin server and the accelerated IP address of the GA instance are detected to check the acceleration performance. For more information, see [Use network detection tools to verify acceleration performance](/help/en/ga/use-cases/use-the-network-dial-test-tool-to-test-the-acceleration#141ed83897hqt).

1.  Initiate detection for the accelerated IP address of GA to check the network latency after GA is configured.
    
    ![加速后 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p870126.png)
    
2.  Initiate detection for the public IP address of the origin server to check the network latency before GA is configured.
    
    ![加速前 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p870128.png)
    

The test results show that the network latency of data transmission from the China (Hong Kong) region to the US (Silicon Valley) region is reduced.

**Note**

The acceleration performance varies based on the actual workload.

## **References**

-   For more information about how GA is billed, see [GA billing](/help/en/ga/product-overview/billing-overview/).
    
-   For more information on how Cloud Firewall is billed, see [Billing](/help/en/cloud-firewall/cloudfirewall/product-overview/billing-of-cloud-firewall).
    
-   For more information about the protection capabilities of Cloud Firewall, see [Functions and features](/help/en/cloud-firewall/cloudfirewall/product-overview/functions-and-features).
