If your service deployed on Application Load Balancer (ALB) is accessible to global users, user experience may be reduced by high network latency, network jitters, and packet loss caused by poor Internet quality. To address the preceding issues, you can integrate ALB with Global Accelerator (GA) to allow user requests to be routed to the nearest access points, which forward requests to servers over Alibaba Cloud internal networks. After ALB is integrated with GA, you can enable GA in the ALB console. This simplifies GA configurations.

## GA overview

GA uses stable BGP lines and the congestion-free global network of Alibaba Cloud to accelerate Internet-facing applications. GA can reduce network latency, network jitters, and packet loss when your business system is deployed across regions or accessible to global users. Users can access your business system by connecting to the nearest access points worldwide. GA ensures high availability and high performance of web applications. For more information about GA, see [What is Global Accelerator?](/help/en/ga/product-overview/what-is-global-accelerator/)

After ALB is integrated with GA, you can enable GA in the ALB console, without the need to configure or manage GA in the GA console. This greatly simplifies the configuration process.

### **Key features**

-   Application acceleration: Requests from global users are routed to the nearest access points to improve user experience.
    
-   Simplified configurations: GA can be configured and enabled in the ALB console after simple configurations.
    

### **Use scenarios**

GA is ideal for accelerating access from global users in multiple regions, such as in the following scenarios:

-   Game platform acceleration: Game platforms, such as logon systems and e-commerce systems, can use GA to reduce user complaints about slow logons.
    
-   Enterprise application acceleration: Multinational corporations can use GA to improve collaboration efficiency and experience of global employees.
    
-   Internet application acceleration: Internet applications can use GA to improve user experience and loyalty. GA helps you increase product popularity.
    

## **Examples**

A company deployed a high-availability service on ALB in a region, and the service is accessible to global users in multiple regions. Due to poor Internet quality, some users experience high network latency.

To address the preceding issues, the company integrates ALB with GA to route user requests to the nearest access points, which greatly improves user experience.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2025795671/CAEQUBiBgMC.mNyx2BkiIDBlODkyODQ4MTJkNTQxNDFiNTc3NDIzYTg0MDU0YTcz4052370_20231025141545.309.svg)

## **Limits**

-   Each ALB instance can be associated with only one GA instance.
    
-   GA is not supported in the following scenarios:
    
    -   The ALB instance is not associated with a listener.
        
    -   The ALB instance or listener is being modified.
        
    -   The ALB instance is associated with a QUIC listener.
        
    -   The HTTPS listener associated with the ALB instance is in the following scenarios:
        
        -   Mutual authentication is enabled for the HTTPS listener.
            
        -   The HTTPS listener uses a custom TLS policy.
            
        -   The HTTPS listener uses an additional certificate.
            
    -   A listener of the ALB instance is associated with a gRPC server group.
        
    -   GA is not available in the region of the ALB instance. For more information about the regions in which GA is available, see [Acceleration areas and regions](/help/en/ga/user-guide/overview-1/#05cc333029x1g).
        
    -   The public CIDR block of the endpoint used by the GA instance is on the IP blacklist of the listener associated with the Internet-facing ALB instance or overlaps with a CIDR block on the IP whitelist. For more information, see [How do I view the endpoint group IP addresses of a GA instance?](/help/en/ga/support/faq-about-endpoint-groups#title-uet-wl5-uio)
        

## **Prerequisites**

-   An Internet-facing or internal-facing ALB instance is created. For more information, see the [Create and manage an ALB instance](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances#task-1999195) topic.
    
-   A server group is created. For more information, see [Create and manage a server group](/help/en/slb/application-load-balancer/user-guide/create-and-manage-a-server-group#task-2022054).
    
-   Two Elastic Compute Service (ECS) instances are added to the server group, and applications are deployed on the ECS instances. In this example, the ECS instances are named ECS01 and ECS02.
    
    **Sample commands for deploying test applications on ECS instances**
    
    Sample command for deploying testing applications on ECS01:
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World !  This is ECS01." > index.html
    ```
    
    Sample command for deploying testing applications on ECS02:
    
    ```
    yum install -y nginx
    systemctl start nginx.service
    cd /usr/share/nginx/html/
    echo "Hello World !  This is ECS02." > index.html
    ```
    
-   A domain name is registered and an Internet content provider (ICP) number is obtained for the domain name. A CNAME record is created for the ALB instance. For more information, see [Register a generic domain name](/help/en/dws/user-guide/how-to-register-a-domain-name), [ICP filing process](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview), and [Configure a CNAME record for an ALB instance](/help/en/slb/application-load-balancer/user-guide/configure-cname-resolution-for-alb).
    
-   A listener is created. For more information, see [Add an HTTP listener](/help/en/slb/application-load-balancer/user-guide/add-an-http-listener#task-1960530) and [Add an HTTPS listener](/help/en/slb/application-load-balancer/user-guide/add-an-https-listener#task-2020924). To create an HTTPS listener, you must purchase or upload an SSL certificate in Certificate Management Service and associate the certificate with the domain name. For more information, see [Get started with Certificate Management Service](/help/en/ssl-certificate/product-overview/get-started-with-ssl-certificates-service).
    

## **Procedure**

### **Step 1: Enable application acceleration for the ALB instance**

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region in which the ALB instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  On the **Integrated Services** tab, click **Create GA**.
    
    1.  **Activate GA**: If GA is not activated within your Alibaba Cloud account, read and select the terms of service and activate GA.
        
    2.  **Acceleration Area**: Click the [Acceleration Area](/help/en/ga/user-guide/overview-1/) drop-down list to select an acceleration area. You can select the region where clients are located or the region that is nearest to the clients as the acceleration region of the GA instance. An acceleration area is a collection of Alibaba Cloud regions. Each acceleration area contains one or more Alibaba Cloud regions.
        
        **Note**
        
        -   If the acceleration area contains a Chinese mainland region or a backend server is deployed in the Chinese mainland, you must [apply for an Internet Content Provider (ICP) number](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview) for the domain name.
            
        -   If the acceleration area and the origin server are deployed across borders, read and select the **Compliance Commitments Regarding Cross-border Data Transfers**. By default, cross-border communication uses premium bandwidth for acceleration.
            
        
5.  After you complete the configurations, click **OK**.
    
    **Important**
    
    The first time you enable GA, all ALB listener information is synchronized to GA. However, listener configuration updates are not automatically synchronized to GA. You must manually update listener configurations in the GA console.
    

### **Step 2: Add a CNAME record to the GA instance**

After you enable GA for your ALB instance, the GA instance information, including the domain name, is displayed on the **Integrated Services** tab.

Copy the domain name and perform the following operations to add a CNAME record that maps the custom domain name to the domain name of the GA instance:

1.  Log on to the [Alibaba Cloud DNS Console](https://dnsnext.console.alibabacloud.com/#/dns/domainList). On the **Public Zone** page, find the domain name that you want to manage and click **DNS Settings** in the **Actions** column.
    
    **Note**
    
    If your domain name is not registered by using Alibaba Cloud Domains, you must add your domain name to Alibaba Cloud DNS before you can configure a DNS record. For more information, see [Manage domain names](/help/en/dns/domain-management#topic-2035895). If your domain name is registered by using Alibaba Cloud Domains, perform the following steps.
    
2.  On the **DNS Settings** tab of the domain name details page, click **Add Record**.
    
3.  In the **Add Record** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Record Type**
    
    The type of the DNS record. In this example, **CNAME** is selected from the drop-down list.
    
    **Hostname**
    
    The prefix of the domain name. In this example, @ is entered.
    
    **Note**
    
    If you use a root domain name, enter `@`.
    
    **Query Source**
    
    The region in which the domain name visitor is located and the carrier network that the domain name visitor uses. In this example, Default is selected.
    
    **Record Value**
    
    The CNAME of the domain name. In this example, the CNAME is the domain name of the GA instance.
    
    **TTL**
    
    The time-to-live (TTL) of the CNAME record to be cached on the DNS server. In this example, the default value is used.
    

### **Step 3: Test the acceleration result**

In this example, an Internet-facing ALB instance, a GA instance whose backend server is deployed in the US (Silicon Valley) region, and a client that uses the China (Hong Kong) acceleration area are used.

1.  Test the network latency after GA is enabled.
    
    1.  Visit `http://<GA domain name>` from a browser. The result shows that the browser can access the backend service. Refresh the browser multiple times. Requests are distributed between ECS01 and ECS02.
        
    2.  Run the command `curl -o /dev/null -s -w "time_connect: %{time_connect}\ntime_starttransfer: %{time_starttransfer}\ntime_total: %{time_total}\n" "http[s]://<GA domain name>"` to query the network latency after GA is enabled.
        
        The following figure shows the response.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6225023371/p846391.png)
        
    
2.  Test the network latency before GA is enabled.
    
    1.  Visit `http://<ALB domain name>` from a browser. The result shows that the browser can access the backend service. Refresh the browser multiple times. Requests are distributed between ECS01 and ECS02.
        
    2.  Run the command `curl -o /dev/null -s -w "time_connect: %{time_connect}\ntime_starttransfer: %{time_starttransfer}\ntime_total: %{time_total}\n" "http[s]://<ALB domain name>"` to query the network latency before GA is enabled.
        
        The following figure shows the response.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6225023371/p846393.png)
        
    
3.  Compare the results.
    
    Parameter descriptions:
    
    -   **time\_connect**: the period of time that is required for establishing a TCP connection. Unit: seconds.
        
    -   **time\_starttransfer**: the start time of data transfer. The start time refers to the period of time from when the client sends a request to the backend server to when the first byte is sent to the client. Unit: seconds.
        
    -   **time\_total**: the total connection time. The total connection time refers to the period of time from when the client sends a request to when the client receives the last byte from the backend server. Unit: seconds.
        
    
    **Parameter**
    
    **After GA acceleration (Unit: seconds)**
    
    **Before GA acceleration (Unit: seconds)**
    
    **Acceleration effect (Unit: seconds)**
    
    **Acceleration effect (Unit: percentage)**
    
    **time\_connect**
    
    0.006
    
    0.162
    
    0.156 seconds faster
    
    Speed increased by 96.3%
    
    **time\_starttransfer**
    
    0.008
    
    0.320
    
    0.312 seconds faster
    
    Speed increased by 97.5%
    
    **time\_total**
    
    0.008
    
    0.321
    
    0.313 seconds faster
    
    Speed increased by 97.5%
    
    **Note**
    
    The examples and data in this topic are for reference only. The actual acceleration effect on your service prevails.
    

## **What to do next**

### **View the acceleration status**

On the **Integrated Services** tab, the **Global Accelerator** card displays the ID, domain name, and status of the GA instance.

### **Disable application acceleration**

To disable application acceleration for an ALB instance, delete the GA instance in the GA console or delete the ALB listener and endpoint group that are associated with the GA instance.

## **FAQ**

### **What type of GA instance is created?**

A pay-as-you-go standard GA instance is created.

### **What additional fees are charged after GA is enabled?**

You are charged GA fees after GA is enabled. GA fees include GA instance fees, capacity unit (CU) fees, and data transfer fees. For more information, see [Billing of pay-as-you-go GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances).

### **After an ALB listener is added, why is GA not enabled for the listener?**

ALB listener information is synchronized to GA only the first time you enable GA. Listener updates are not automatically synchronized to GA. You must manually manage listener information in the GA console.

### **Why do the access control policies of ALB not take effect after GA is enabled?**

After GA is enabled, the accelerated domain name is the domain name of the GA instance. As a result, the ALB control policies do not take effect.

To control access from IP addresses, configure access control policies for the GA instance. For more information, see [GA access control](/help/en/ga/user-guide/access-control).

## **References**

By default, cross-border communication uses premium bandwidth for acceleration. If you require higher network quality, use the cross-border Express Connect circuits of China Unicom. For more information, see [Select and purchase GA resources](/help/en/ga/product-overview/select-and-purchase-ga-resources#fc9d236067cct).
