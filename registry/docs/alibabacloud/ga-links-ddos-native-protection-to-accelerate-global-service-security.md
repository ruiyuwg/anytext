When expanding businesses globally, enterprises often face threats such as network latency and DDoS attacks. By deploying Global Accelerator (GA) with Anti-DDoS protection products, you can accelerate global user access and effectively defend against DDoS attacks. This ensures high availability and security for your services, improves the user experience, and reduces security risks.

## **Introduction to GA and DDoS protection products**

A DDoS attack is a malicious network attack that targets a system to make its services unavailable. You can select one of the following DDoS protection products based on your security protection requirements:

**Protection product**

[**Anti-DDoS Origin Basic**](/help/en/anti-ddos/basic-ddos-protection/product-overview/what-is-anti-ddos-basic)

[**Anti-DDoS Origin**](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin)

[**Anti-DDoS Pro and Anti-DDoS Premium**](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium)

**Mitigation capabilities**

Low

GA is integrated with Alibaba Cloud DDoS protection. You do not need to enable it. It provides up to 5 Gbps of basic DDoS protection for the accelerated IP addresses and public IP addresses of endpoints of GA instances free of charge. The maximum free mitigation capability varies by region.

High

Anti-DDoS Origin lets you add GA instances as protected objects. It provides unlimited protection of up to several hundred Gbps for the accelerated IP addresses and public IP addresses of endpoints of GA instances. The maximum mitigation capability varies by region.

High

GA can be connected to Anti-DDoS Pro and Anti-DDoS Premium. Based on the capabilities of Alibaba Cloud's global scrubbing centers, it provides mitigation capabilities of up to several Tbps for the secure CNAME (secure accelerated IP address) of the GA instance.

**How it works**

Anti-DDoS Basic uses a default scrubbing threshold, which you can also set manually. When traffic meets the conditions for scrubbing, Anti-DDoS Basic filters and scrubs all inbound traffic from the Internet to defend against common network-layer and transport-layer attacks, such as UDP reflection attacks and SYN/ACK Flood attacks. However, Anti-DDoS Basic does not defend against application-layer attacks, such as HTTP Flood attacks and CC attacks.

In addition to the BPS and PPS scrubbing thresholds that you configure, Anti-DDoS Basic uses AI-based intelligent analysis. By leveraging the big data capabilities of Alibaba Cloud, Anti-DDoS Basic learns your traffic patterns and uses algorithms to detect attacks. Traffic scrubbing is triggered only when the AI-based intelligent analysis detects a DDoS attack and the inbound traffic reaches the BPS or PPS threshold that you set. This method prevents false positives that can be caused by fixed thresholds, for example, when normal service traffic fluctuations exceed the scrubbing threshold.

If inbound traffic exceeds the mitigation capability (the blackhole triggering threshold), the cloud product is subject to blackhole filtering. This prevents DDoS attacks from causing further damage to the cloud product or affecting other assets. Blackhole filtering means that Alibaba Cloud temporarily blocks all inbound traffic from the Internet to the cloud product. For more information, see [Blackhole filtering policy of Alibaba Cloud](/help/en/anti-ddos/product-overview/blackhole-filtering-policy-of-alibaba-cloud).

Anti-DDoS Origin primarily mitigates Layer 3 and Layer 4 DDoS attacks. When traffic exceeds the default scrubbing threshold, Anti-DDoS Origin automatically triggers traffic scrubbing to mitigate DDoS attacks.

Anti-DDoS Origin uses passive scrubbing as its primary mitigation method and active blocking as a supplementary method. It uses standard technologies such as reverse detection, blacklists and whitelists, and packet compliance to mitigate DDoS attacks. This ensures that your protected cloud service can continue to operate normally during an attack. Anti-DDoS Origin works by deploying a DDoS attack detection and traffic scrubbing system at the egress of an Alibaba Cloud data center. This system is deployed in bypass mode.

Based on the forwarding rule that you configure for your service in Anti-DDoS Pro and Anti-DDoS Premium (that is, specify the website domain name and use the secure CNAME of GA as the server address), GA redirects traffic by pointing the DNS domain name resolution or service IP address of the service to the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance.

-   During normal service access, traffic is not forwarded through the Anti-DDoS instance. Instead, it is directly accelerated by GA to the origin server without increasing latency.
    
-   When the service is under attack, GA automatically switches the CNAME to point to the IP address of the Anti-DDoS instance. The traffic is scrubbed by the Anti-DDoS instance and then sent to GA through the secure CNAME (secure accelerated IP address) of GA for acceleration. This ensures that the service remains stable and efficient during attacks.
    

**References**

[View the basic protection threshold of a GA instance](/help/en/ga/user-guide/anti-ddos-origin-basic)

[Connect GA to Anti-DDoS Origin](/help/en/ga/use-cases/ga-links-ddos-native-protection-to-accelerate-global-service-security#0b89d606ec8me)

[Connect GA to Anti-DDoS Pro and Anti-DDoS Premium](/help/en/ga/use-cases/ga-links-ddos-native-protection-to-accelerate-global-service-security#eeb340f24000f)

## Use cases

## **Connect GA to Anti-DDoS** Origin

A company's website is deployed on Alibaba Cloud in the US (Silicon Valley) region and serves end users in multiple regions worldwide through a custom domain name. The forwarding port is HTTP port 80. The website currently faces the following issues:

-   Unstable cross-border public networks that often experience issues such as latency, jitter, and packet loss.
    
-   Frequent high-volume DDoS attacks that lead to unstable service responses.
    

You can solve the problems that are faced by cross-domain website services by deploying GA with Anti-DDoS Origin.

-   [GA](/help/en/ga/product-overview/what-is-global-accelerator/): Client access requests can connect to the Alibaba Cloud acceleration network from the nearest acceleration area. GA uses smart routing and automatic network scheduling to forward requests to the origin server in the US (Silicon Valley) region, which effectively improves service access speed. Additionally, you can enable [health checks](/help/en/ga/user-guide/enable-and-manage-health-checks) to enhance business reliability and availability and prevent abnormal nodes from affecting the service.
    
-   [Anti-DDoS Origin](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin): Anti-DDoS Origin lets you add GA instances as protected objects to protect the accelerated IP addresses and public IP addresses of GA endpoints. When traffic exceeds the default scrubbing threshold of Anti-DDoS Origin, traffic scrubbing is automatically triggered to mitigate DDoS attacks.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9263216671/CAEQUBiBgICN16HB2RkiIGM2MjY3Mzc4MzBhNDRmY2Q4MmRlNWIyZGM0OGIyMTBk3963382_20230830144006.372.svg)

### Limits

Anti-DDoS Origin is available for direct purchase only in the Chinese mainland. To purchase an instance in a region outside the Chinese mainland, contact your account manager for assistance. For more information about how to contact your account manager, see [Contact us](/help/en/anti-ddos/anti-ddos-origin/support/contact-us).

### **Prerequisites**

-   Your services are deployed on ECS01 and ECS02 servers in the US (Silicon Valley) region. This topic uses Alibaba Cloud Linux 3 as an example and configures an HTTP 80 service using Nginx.
    
    **Example: Deploy a test service on ECS01**
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World ! This is ECS01, service running on port 80." > index.html
    ```
    
-   You have [configured a DNS record](/help/en/dns/add-a-dns-record#topic-2035899) for your custom domain name. You have configured an A record to point the domain name to the public IP addresses of the two backend servers.
    
    If you use a DNS service other than Alibaba Cloud DNS, see your DNS provider's instructions.
    
-   To provide services over HTTPS 443, you must [create and apply for a certificate](/help/en/ssl-certificate/product-overview/get-started-with-ssl-certificates-service) or upload a third-party certificate to the SSL Certificate service and bind it to your custom domain name.
    
-   You have [purchased an Anti-DDoS Origin instance](/help/en/anti-ddos/anti-ddos-origin/getting-started/purchase-an-anti-ddos-origin-enterprise-instance).
    

### **Procedure**

#### **Step 1: Configure Global Accelerator**

This topic uses a pay-as-you-go standard GA instance as an example.

1.  On the **Standard Instance** > **Instances** page of the [GA console](https://ga.console.alibabacloud.com/list), click **Create Standard Pay-as-you-go Instance**.
    
2.  In the **Basic Instance Configuration** step, configure the basic information and click **Next**.
    
    ![GA基础配置.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p842361.png)
    
3.  In the **Configure Acceleration Area** step, add an acceleration region, allocate bandwidth to the region, and then click **Next**.
    
    In this example, the **Acceleration Region** parameter is set to **China (Hong Kong)**, and the **ISP Line Type** parameter is set to **BGP (Multi-ISP)**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas).
    
    **Important**
    
    -   If the acceleration regions include regions in the Chinese mainland, you must apply for an [ICP number](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb) for the domain name to provide services.
        
    -   If you specify a small value for the maximum bandwidth, throttling may occur and packets may be dropped. Specify a maximum bandwidth based on your business requirements.
        
    
    ![GA加速区域.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p842369.png)
    
4.  In the **Configure listeners** step, configure the forwarding protocol and port, and then click **Next**.
    
    In this example, the **Routing Type** parameter is set to **Intelligent Routing**, the **Protocol** parameter is set to **HTTP**, and the **Port** parameter is set to **80**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners).
    
    **Note**
    
    If you want to use HTTPS 443 to provide external services, you can select HTTPS for Protocol and 443 for Port, associate the created certificate with the listener, and configure the mapping between listener port 443 and the backend service port 80 in the **Port Mapping** parameter of the endpoint group. This way, [users can securely access the HTTP website over HTTPS](/help/en/ga/use-cases/accelerate-http-websites-over-https).
    
    ![GA监听.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p834334.png)
    
5.  On the **Configure Endpoint Group** page of the wizard, configure the backend service for the endpoint and click **Next**.
    
    In this scenario, set the **Region** to **US (Silicon Valley)**. For **Backend Service**, configure ECS01 and ECS02 sequentially. Turn on the **Health Check** switch, then read and select the **Cross-border Data Transfer Compliance Commitment**. You can keep the default values for [other endpoint group parameters](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners) or modify them as needed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p927711.png)
    
    ![EPG 健康检查 INTL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928268.png)
    
6.  In the **Configuration Review** step, confirm the GA configurations and click **Submit**.
    
7.  On the Instances page, find the created GA instance and obtain the CNAME assigned to the GA instance in the **CNAME** column.
    
8.  On the backend server, allow the network segment that GA uses to connect to the backend service.
    
    In this scenario, GA connects to the backend ECS servers over a private network. You need to allow its vSwitch CIDR block in the [ECS security group](/help/en/ecs/user-guide/add-a-security-group-rule) and ensure that the number of available private IP addresses in this vSwitch CIDR block is 8 or more.
    

#### **Step 2: Configure Anti-DDoS Origin**

On the **Protected Objects** page of the [Anti-DDoS Origin console](https://yundun.console.aliyun.com/?spm=5176.12818093.console-base_search-panel.dtab-product_ddos.f7a116d04Fb8dW&p=ddos#/protectedAsset/ga/region-global), click **Add Protected Object** to add the GA instance as a protected object.

![添加防护对象](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928809.png)

After you add an asset, you can view the protected GA instance on the **GA Assets** tab of the **Protected Objects** page. You can also view the protected public IP addresses, including the GA accelerated IP addresses and the public IP addresses of the endpoint group, on the **IP Assets** tab.

#### **Step 3: Configure a CNAME record**

In actual business scenarios, we recommend that you use a custom domain name. You can create a CNAME record to map the custom domain name to the CNAME assigned by GA. This way, business traffic is switched to GA for accelerated access.

In this example, if you already created an A record that points to the backend server, you can specify the China (Hong Kong) region when you add a CNAME record that points to the GA instance. If the CNAME record works as expected, apply the CNAME record to other regions or retain only the CNAME record that points to the GA instance.

1.  On the [Authoritative DNS Resolution](https://dnsnext.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.9b0a5ad1tRuDNs#/dns/domainList) page, find the domain name that you want to use and click **DNS Settings** in the **Actions** column.
    
    **Note**
    
    For a domain name that is not registered with Alibaba Cloud, you must [add the domain name](/help/en/dns/domain-management#topic-2035895) to the Alibaba Cloud DNS console before you can configure DNS records.
    
2.  On the DNS Settings page, click **Add DNS Record**, configure a CNAME record, and then click **OK**.
    
    In this example, the **Record Type** parameter is set to **CNAME**, the **Hostname** parameter is set to **www**, the **DNS Request Source** parameter is set to **Asia\_Hong Kong**, and the **Record Value** parameter is set to the CNAME of the GA instance. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record).
    
    ![配置CNAME.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1770133571/p844615.png)
    

#### **Step 4: Verify the results**

##### **Verify the acceleration performance of GA**

This topic uses a probe point in Hong Kong (China) as an example. Before and after you configure GA, [use a network probe tool to test](/help/en/ga/use-cases/use-the-network-dial-test-tool-to-test-the-acceleration#141ed83897hqt) the custom domain name of the website and check the response time to understand the data latency.

1.  Test the network latency before you configure GA.
    
    You can view information such as the response time. The Resolved IP column shows the public IP address of the ECS instance.
    
    ![香港拨测 INTL EN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928894.png)
    
2.  Test the network latency after you configure GA.
    
    You can view information such as the response time. The Resolved IP column shows the accelerated IP address of the GA instance.
    
    ![加速后 INTL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928914.png)
    

The test result shows that GA reduces the latency for clients in Hong Kong (China) that access services in the US (Silicon Valley) region.

**Note**

The acceleration performance of GA is subject to the results of your business tests.

##### **Verify the health check feature of GA**

1.  Enter the custom domain name of the website in a browser to access the website that is deployed in the US (Silicon Valley) region.
    
    The test result shows that you can access the website that is deployed in the US (Silicon Valley) region through the custom domain name. After you refresh the browser multiple times, the responding server switches between ECS01 and ECS02.
    
    ![浏览器访问](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928918.png)
    
    ![浏览器访问-健康检查](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928924.png)
    
2.  Simulate a failure: Stop the ECS01 server.
    
    After a while, you can check the **Health Check Status** on the **Endpoint Group** tab of the GA instance.
    
    ![健康检查异常](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928930.png)
    
    After you refresh the browser multiple times, you can still access the business as normal, but the only responding server is ECS02.
    
    ![浏览器访问-健康检查](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928924.png)
    

##### **Verify the protection effect of Anti-DDoS Origin**

You can use the following features that are provided by Anti-DDoS Origin to check the protection effect.

-   The [Business Monitoring](https://yundun.console.aliyun.com/?spm=5176.12818093.console-base_search-panel.dtab-product_ddos.f7a116d04Fb8dW&p=ddos#/monitor/region-global) page provides real-time information, such as traffic trends and DDoS attack event records for protected assets.
    
-   The [Attack Analysis](https://yundun.console.aliyun.com/?spm=5176.12818093.console-base_search-panel.dtab-product_ddos.f7a116d04Fb8dW&p=ddos#/attack/analysis/instance/region-global) page lets you query and analyze the details of attack events on the Anti-DDoS Origin instance, including the attack type, attack traffic volume, and duration.
    
-   The [Mitigation Logs](https://yundun.console.aliyun.com/?spm=5176.12818093.console-base_search-panel.dtab-product_ddos.f7a116d04Fb8dW&p=ddos#/sls/region-global) page records how Anti-DDoS Origin handles traffic, including detailed information such as attack detection and traffic scrubbing. By analyzing the mitigation logs, you can further verify the effectiveness of the mitigation policies.
    

## **Connect GA to Anti-DDoS Pro/Premium**

A multinational game is deployed on Alibaba Cloud in the US (Silicon Valley) region and serves players in multiple regions worldwide through a custom domain name. The game currently faces the following issues:

-   Unstable cross-border public networks that often experience issues such as latency, jitter, and packet loss.
    
-   Frequent large-scale DDoS attacks that lead to complete service interruptions.
    

To solve these problems, the game company plans to deploy GA and connect it to Anti-DDoS Pro and Anti-DDoS Premium:

-   [GA](/help/en/ga/product-overview/what-is-global-accelerator/): Client access requests are routed to the nearest Alibaba Cloud acceleration network through a configured acceleration region. The requests are then forwarded to the origin server in the US (Silicon Valley) region using smart routing and automatic network scheduling to effectively improve service access speed. In addition, you can enable [health checks](/help/en/ga/user-guide/enable-and-manage-health-checks) to improve the reliability and availability of your services and prevent abnormal nodes from affecting your services.
    
-   [Anti-DDoS Pro/Premium](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium): After you connect GA to Anti-DDoS Anti-DDoS Pro or Premium, normal traffic is accelerated and sent directly to the origin server through GA without adding latency. During a large-scale DDoS attack, GA uses DNS resolution to reroute traffic to anti-DDoS scrubbing centers for scrubbing. The scrubbed traffic is then accelerated through the secure CNAME (secure accelerated IP address) of GA to the Alibaba Cloud acceleration network and finally forwarded to the server. This ensures stable access to the game server.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9263216671/CAEQUBiBgIDekazB2RkiIDRjYTg0ZjljYjU0NzQ2NTdhM2MyOWJjZWIzODdjZTJm3963382_20230830144006.372.svg)

### **Limits**

-   Connecting GA to Anti-DDoS Pro and Anti-DDoS Premium is not available by default. To use this feature, contact your business manager.
    
-   To purchase the Premium Edition of Anti-DDoS Pro and Anti-DDoS Premium (the Chinese mainland), or the Sec-MCA 1.0 or Sec-MCA 1.0 (Basic Edition) of Anti-DDoS Pro and Anti-DDoS Premium (outside the Chinese mainland), contact your business manager.
    
-   Only pay-as-you-go standard GA instances can be connected to Anti-DDoS Premium. Subscription-based standard GA instances and basic GA instances are not supported.
    

### **Prerequisites**

-   Your services are deployed on ECS01 and ECS02 servers in the US (Silicon Valley) region. This topic uses Alibaba Cloud Linux 3 as an example and configures an HTTP 80 service using Nginx.
    
    **Example: Deploy a test service on ECS01**
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World ! This is ECS01, service running on port 80." > index.html
    ```
    
-   You have [configured a DNS record](/help/en/dns/add-a-dns-record#topic-2035899) for your custom domain name. You have configured an A record to point the domain name to the public IP addresses of the two backend servers.
    
    If you use a DNS service other than Alibaba Cloud DNS, see your DNS provider's instructions.
    
-   To provide services over HTTPS 443, you must [create and apply for a certificate](/help/en/ssl-certificate/product-overview/get-started-with-ssl-certificates-service) or upload a third-party certificate to the SSL Certificate service and bind it to your custom domain name.
    
-   You have [purchased an Anti-DDoS Pro or Anti-DDoS Premium instance](/help/en/anti-ddos/anti-ddos-pro-and-premium/getting-started/purchase-an-anti-ddos-pro-or-anti-ddos-premium-instance#task-2415749).
    
    This topic uses an example of an Anti-DDoS Pro or Anti-DDoS Premium (Outside Chinese Mainland) instance with Mitigation Plan and Standard Function purchased for clients accessing the service from the Hong Kong (China) region.
    
    **Important**
    
    If your configured GA acceleration area (client region) includes the Chinese mainland, you also need to purchase an Anti-DDoS Pro or Anti-DDoS Premium (Chinese Mainland) instance and ensure that your custom domain name has completed [ICP filing](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview).
    

### **Procedure**

#### **Step 1: Configure Global Accelerator**

1.  On the **Standard Instance** > **Instances** page of the [GA console](https://ga.console.alibabacloud.com/list), click **Create Standard Pay-as-you-go Instance**.
    
2.  In the **Basic Instance Configuration** step, configure the basic information and click **Next**.
    
    ![GA基础配置.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p842361.png)
    
3.  In the **Configure Acceleration Area** step, add an acceleration region, allocate bandwidth to the region, and then click **Next**.
    
    In this example, the **Acceleration Region** parameter is set to **China (Hong Kong)**, and the **ISP Line Type** parameter is set to **BGP (Multi-ISP)**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas).
    
    **Important**
    
    -   If the acceleration regions include regions in the Chinese mainland, you must apply for an [ICP number](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb) for the domain name to provide services.
        
    -   If you specify a small value for the maximum bandwidth, throttling may occur and packets may be dropped. Specify a maximum bandwidth based on your business requirements.
        
    
    ![GA加速区域.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5914643371/p842369.png)
    
4.  In the **Configure listeners** step, configure the forwarding protocol and port, and then click **Next**.
    
    In this example, the **Routing Type** parameter is set to **Intelligent Routing**, the **Protocol** parameter is set to **HTTP**, and the **Port** parameter is set to **80**. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners).
    
    **Note**
    
    If you want to use HTTPS 443 to provide external services, you can select HTTPS for Protocol and 443 for Port, associate the created certificate with the listener, and configure the mapping between listener port 443 and the backend service port 80 in the **Port Mapping** parameter of the endpoint group. This way, [users can securely access the HTTP website over HTTPS](/help/en/ga/use-cases/accelerate-http-websites-over-https).
    
    ![GA监听.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p834334.png)
    
5.  On the **Configure an endpoint group** page, configure the backend service for the endpoint and click **Next**.
    
    In this scenario, the **Region** is set to **US (Silicon Valley)**. For **Backend Service**, add ECS01 and ECS02 sequentially. Enable the **Health Check** switch, and then read and select the **Compliance Commitments Regarding Cross-border Data Transfers**. Keep the default values for [other endpoint group parameters](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners) or modify them as needed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p927711.png)
    
    ![EPG 健康检查 INTL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928268.png)
    
6.  In the **Configuration Review** step, confirm the GA configurations and click **Submit**.
    
7.  On the Instances page, find the created GA instance and obtain the CNAME assigned to the GA instance in the **CNAME** column.
    
8.  On the backend server, allow the network segment that GA uses to connect to the backend service.
    
    In this scenario, GA connects to the backend ECS servers over a private network. You need to allow its vSwitch CIDR block in the [ECS security group](/help/en/ecs/user-guide/add-a-security-group-rule) and ensure that the number of available private IP addresses in this vSwitch CIDR block is 8 or more.
    

#### **Step 2: Connect the GA instance to Anti-DDoS Pro or Anti-DDoS Premium**

1.  On the **Standard Instance** > ****Instances**** page in the [Global Accelerator console](https://ga.console.alibabacloud.com/list), find the target GA instance and click **![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p952646.png)** > **Associate with Anti-DDoS Pro/Premium** in the **Actions** column.
    
2.  In the **Associate with Anti-DDoS Pro/Premium** dialog box, select an Anti-DDoS Pro or Anti-DDoS Premium instance and click **OK**.
    
    In this scenario, because the GA acceleration area is Hong Kong (China), select an **Anti-DDoS Pro or Anti-DDoS Premium (Outside Chinese Mainland)** instance. If your configured GA acceleration area (client region) includes the Chinese mainland, you must also select an **Anti-DDoS Premium** or **Anti-DDoS Pro (Chinese Mainland)** instance and follow [Step 3](#7bec40e7afqnh) to configure **Website Config** for the instance.
    
3.  To the right of the instance ID, hover over the Anti-DDoS Pro/Premium icon. In the **Anti-DDoS Proxy** tooltip, get the **Secure GA CNAME**.
    
    ![获取GA安全CNAME](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p952681.png)
    
    **Note**
    
    After you configure GA to connect to Anti-DDoS Pro and Anti-DDoS Premium, each acceleration area is assigned four accelerated IP addresses. Two of the IP addresses are secure accelerated IP addresses, which correspond to the GA secure CNAME record. When your service is under attack, traffic that is scrubbed by Anti-DDoS Pro and Anti-DDoS Premium is accelerated through the GA secure CNAME (secure accelerated IP address) to the Alibaba Cloud acceleration network.
    

#### **Step 3: Add a website to Anti-DDoS Pro or Anti-DDoS Premium**

1.  On the [Website Config](https://yundun.console.alibabacloud.com/?p=ddoscoo#/domain/list/ap-southeast-1) page of the **Anti-DDoS Pro Proxy (Outside Chinese Mainland)** console, click **Add Website**.
    
2.  In the **Add Website** panel, configure the settings in the **Website Config** wizard, and click **Next**.
    
    In this scenario, for **Instance**, select your purchased Anti-DDoS Pro or Anti-DDoS Premium instance. For **Websites**, enter your custom domain name. For **Server Address**, select **Origin Domain Name** and enter the **GA secure CNAME** from [Step 2](#241b614ae1nmr). The **Protocol Type** and **Server Port** must match the GA listener protocol and port (HTTP 80). Then, read and select the **Compliance Commitments Regarding Cross-border Data Transfer**. You can keep the default values for [other website configuration parameters](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/add-websites) or modify them as needed.
    
    **Warning**
    
    For the **Server Address**, select **GA secure CNAME** instead of the GA CNAME to prevent traffic loops.
    
    ![DDoS高防-域名接入01](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p952738.png)
    
    ![DDoS高防-域名接入02](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p952740.png)
    
3.  In the **Forwarding Settings** wizard, confirm the configuration and click **Next**.
    
    In this scenario, you can keep the default configurations.
    
4.  On the **Finish** page, click **Complete and Return to Domain Name List**.
    
5.  On the origin server, [add the back-to-origin IP addresses of Anti-DDoS Pro or Anti-DDoS Premium to the whitelist](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/allow-back-to-origin-ip-addresses-to-access-the-origin-server).
    
    You need to add the back-to-origin IP address ranges of Anti-DDoS Pro and Anti-DDoS Premium to the whitelist of your security software and security groups to prevent back-to-origin traffic from being blocked by mistake.
    

#### **Step 4: Configure a CNAME record**

In actual business scenarios, we recommend that you use a custom domain name. You can create a CNAME record to map the custom domain name to the CNAME assigned by GA. This way, business traffic is switched to GA for accelerated access.

In this example, if you already created an A record that points to the backend server, you can specify the China (Hong Kong) region when you add a CNAME record that points to the GA instance. If the CNAME record works as expected, apply the CNAME record to other regions or retain only the CNAME record that points to the GA instance.

1.  On the [Authoritative DNS Resolution](https://dnsnext.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.9b0a5ad1tRuDNs#/dns/domainList) page, find the domain name that you want to use and click **DNS Settings** in the **Actions** column.
    
    **Note**
    
    For a domain name that is not registered with Alibaba Cloud, you must [add the domain name](/help/en/dns/domain-management#topic-2035895) to the Alibaba Cloud DNS console before you can configure DNS records.
    
2.  On the DNS Settings page, click **Add DNS Record**, configure a CNAME record, and then click **OK**.
    
    In this example, the **Record Type** parameter is set to **CNAME**, the **Hostname** parameter is set to **www**, the **DNS Request Source** parameter is set to **Asia\_Hong Kong**, and the **Record Value** parameter is set to the CNAME of the GA instance. You can use the default values for other parameters or modify the parameters based on your business requirements. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record).
    
    ![配置CNAME.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1770133571/p844615.png)
    

#### **Step 5: Verify the results**

##### **Verify the acceleration performance of GA**

This topic uses a probe point in Hong Kong (China) as an example. Before and after you configure GA, [use a network probe tool to test](/help/en/ga/use-cases/use-the-network-dial-test-tool-to-test-the-acceleration#141ed83897hqt) the custom domain name of the website and check the response time to understand the data latency.

1.  Test the network latency before you configure GA.
    
    You can view information such as the response time. The Resolved IP column shows the public IP address of the ECS instance.
    
    ![GA前 INTL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p974748.png)
    
2.  Test the network latency after you configure GA.
    
    You can view information such as the response time. The Resolved IP column shows the accelerated IP address of the GA instance.
    
    ![GA后 INTL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p974750.png)
    

The test result shows that GA reduces the latency for clients in Hong Kong (China) that access services in the US (Silicon Valley) region.

**Note**

The acceleration performance of GA is subject to the results of your business tests.

##### **Verify the health check feature of GA**

1.  Enter the custom domain name of the website in a browser to access the website that is deployed in the US (Silicon Valley) region.
    
    The test result shows that you can access the website that is deployed in the US (Silicon Valley) region through the custom domain name. After you refresh the browser multiple times, the responding server switches between ECS01 and ECS02.
    
    ![浏览器访问](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928918.png)
    
    ![浏览器访问-健康检查](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928924.png)
    
2.  Simulate a failure: Stop the ECS01 server.
    
    After a while, you can check the **Health Check Status** on the **Endpoint Group** tab of the GA instance.
    
    ![健康检查异常](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928930.png)
    
    After you refresh the browser multiple times, you can still access the business as normal, but the only responding server is ECS02.
    
    ![浏览器访问-健康检查](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947225471/p928924.png)
    

##### **Verify that Anti-DDoS Pro or Anti-DDoS Premium effects**

1.  Use the `curl` command to connect to your custom domain name by specifying the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. If the connection is successful, the link between GA and Anti-DDoS Pro or Anti-DDoS Premium is clear. When your service is under attack, GA can reroute traffic to the anti-DDoS scrubbing centers for scrubbing.
    
    **Warning**
    
    After you connect GA to Anti-DDoS Pro and Anti-DDoS Premium, you must ensure that the following conditions are met to avoid traffic interruptions.
    
    -   Ensure that you have completed this connectivity test to confirm that the link between GA and Anti-DDoS Pro or Anti-DDoS Premium is clear.
        
    -   Before you release the GA instance, do not unsubscribe from the Anti-DDoS Pro or Anti-DDoS Premium instance. You must also ensure that the Anti-DDoS Pro or Anti-DDoS Premium instance has not expired to maintain its service status.
        
    
    ```
    curl 170.33.XX.XX -H "Host: <your custom domain name>"
    ```
    
    ![curl 连通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7420606671/p974766.png)
    
2.  You can use the following features that are provided by Anti-DDoS Pro and Anti-DDoS Premium to view the protection effect or be promptly notified of business anomalies.
    
    -   The [Attack Analysis](https://yundun.console.aliyun.com/?spm=5176.28197736.categories-n-products.dddospro.2ed349b1UzTu09&p=ddoscoo#/attack/analysis/ap-southeast-1) page lets you view the records and details of attack events on the Anti-DDoS Pro or Anti-DDoS Premium instance.
        
    -   The [Advanced Mitigation Logs](https://yundun.console.alibabacloud.com/?p=ddoscoo#/log/protect/ap-southeast-1) page lets you view the usage of advanced mitigation sessions. You must purchase an instance that includes advanced mitigation sessions or an additional global advanced mitigation session to view this information.
        
    -   The [CloudMonitor Alerts](https://yundun.console.alibabacloud.com/?p=ddoscoo#/cloudMonitor) page lets you set up alert monitoring and a real-time dashboard. When an anomaly occurs in your Anti-DDoS service, CloudMonitor can promptly send you an alert. This helps you shorten the response time and restore your business as soon as possible. You can also view monitoring details on the real-time dashboard for troubleshooting.
        

## **References**

-   GA fees include the [GA instance fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#section-29l-vls-0j9), [CU fee](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances#4af14fc025v6q), and [traffic fee](/help/en/ga/product-overview/pay-by-data-transfer).
    
-   For cross-border scenarios, premium bandwidth cross-border acceleration is used by default. If you require higher network quality, you can use leased line cross-domain acceleration. For more information, see [Acceleration configuration selection](/help/en/ga/product-overview/select-and-purchase-ga-resources#fc9d236067cct).
    
-   For more information about Anti-DDoS:
    
    -   [How to select an Anti-DDoS product](/help/en/anti-ddos/product-overview/scenario-specific-anti-ddos-solutions)
        
    -   [What is Anti-DDoS Origin?](/help/en/anti-ddos/anti-ddos-origin/product-overview/what-is-anti-ddos-origin#16db19106490a)
        
    -   [Anti-DDoS Origin product billing](/help/en/anti-ddos/anti-ddos-origin/product-overview/pay-as-you-go)
        
    -   [Anti-DDoS Pro and Anti-DDoS Premium instance types](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/what-are-anti-ddos-pro-and-anti-ddos-premium#section-l4d-g1m-25c)
        
    -   [Billing of Anti-DDoS Pro and Anti-DDoS Premium (the Chinese mainland)](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-anti-ddos-pro)
        
    -   [Billing of Insurance and Unlimited mitigation plans for Anti-DDoS Pro and Anti-DDoS Premium (outside the Chinese mainland)](/help/en/anti-ddos/anti-ddos-pro-and-premium/product-overview/billing-of-anti-ddos-premium-of-the-insurance-and-unlimited-mitigation-plans)
