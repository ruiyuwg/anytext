Before you use the private network in Secure Access Service Edge (SASE) to access an office application, you must add the IP address or endpoint of the office application to SASE. This way, users can use the SASE client to access the office application. This topic describes the types of applications that can be added to SASE, how to add an office application to SASE, and how to resolve the domain name of the office application.

## **Types of applications that can be added to SASE**

-   Applications that can be accessed by using private IP addresses or private endpoints
    
    Private applications are office IT resources, such as internal application services, servers, and databases. Private applications can be accessed only by specific users.
    
-   Applications for which the whitelist mechanism is configured and can be accessed by using public IP addresses or public endpoints
    
    The enterprise configures the whitelist mechanism for public IP addresses or public endpoints of office applications. For example, an Elastic Compute Service (ECS) security group or an access control policy of Cloud Firewall is configured to allow users to access the applications only from specific CIDR blocks.
    

## **Add an office application to SASE**

When you add an office application to SASE, SASE **automatically creates a policy that denies all access** based on the zero-trust security principle. After you add the application to SASE, you must configure a policy that allows access to the application. For more information, see [Configure a zero trust policy](/help/en/sase/user-guide/configure-a-zero-trust-policy).

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Private Access** > **Application Management**.
    
3.  On the **Office Application** page, click **Add Application** and perform the following operations to configure the application.
    
    You can configure the application by using the manual configuration or batch import method.
    
    -   **Manual Configuration**
        
        1.  On the **Manual Configuration** tab, configure the application. The following table describes the parameters that you must configure.
            
            **Parameter**
            
            **Description**
            
            **Application Name**
            
            The name of the application.
            
            The name must be 2 to 100 characters in length and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
            
            **Tag**
            
            The tags that you want to use to classify, search, and manage applications.
            
            **Note**
            
            You can create custom tags to help you classify, search, and manage applications. You can also use the default tags.
            
            **Status**
            
            The status of the application. You can enable or disable the application.
            
            **Access Mode**
            
            The access mode for the application.
            
            -   **Client-based Access**: You must install the SASE client to access office applications. The SASE client supports access to Layer 4 and Layer 7 applications to meet work and O&M requirements. The SASE client also supports various terminal security detection and control policies.
                
            -   **Browser-based Access**: You can access web office applications from a browser without the need to install the SASE client. In this mode, terminal security detection and control policies are not supported.
                
            
        2.  Click **Next**. Configure the application address. The parameters vary based on the access mode that you select in the Basic Configuration step. The following tables describe the parameters.
            
            -   **Client-based Access**
                
                **Parameter**
                
                **Description**
                
                **Application Address**
                
                Enter the address, port information, and protocol type of the office application that SASE uses to access the office application.
                
                The following types of application addresses are supported:
                
                -   IP addresses. Example: 10.10.XX.XX.
                    
                -   CIDR blocks. Examples: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/24.
                    
                -   Specific domain names. Example: www.aliyun.com.
                    
                -   Wildcard domain names. For example, if you enter \*.aliyun.com, the system matches subdomains of \*.aliyun.com based on the port information that you specified. This way, SASE can access specific subdomains of the wildcard domain name.
                    
                
                Configure the Port parameter based on the following rules:
                
                -   If the port numbers are consecutive, enter a port range. Example: 80 to 8080.
                    
                -   If the port numbers are not consecutive, enter specific port numbers. Example: 80 and 8080.
                    
                -   If you want to access the office application by using only one port number, enter the same number for the start port number and the end port number. Example: 80 to 80.
                    
                
                The protocols that are used by the office application. The following protocols are supported:
                
                -   TCP
                    
                -   UDP
                    
                
                **Port**
                
                **Protocol**
                
                **Advanced Settings** > ****Web Application Access Reinforcement****
                
                If you want to perform security verification or access tracing on access traffic of the web application, you can configure the following security reinforcement policies:
                
                -   **Security Verification**
                    
                    **Check the Host request header to prevent malicious bypass.**
                    
                -   **Access Tracing**
                    
                    **Add information such as the username to the HTTP header for access tracing.**
                    
                    Add the selected tracing information to the request header in the HTTP request. The business system must obtain and parse the newly added request headers, including X-Csas-Client-IP (device IP address), X-Csas-Username (user name), and X-Csas-Device-Tag (device unique ID).
                    
                
            -   **Browser-based Access**
                
                **Parameter**
                
                **Description**
                
                **Application Address**
                
                Enter the address, port information, and protocol type of the office application that SASE uses to access the office application.
                
                The following types of application addresses are supported:
                
                -   IP addresses. Example: 10.10.XX.XX.
                    
                -   Specific domain names. Example: www.aliyun.com.
                    
                
                **Port**
                
                Specify a port number. Example: 80 to 80.
                
                **Protocol**
                
                The protocols that are used by the office application. The following protocols are supported:
                
                -   HTTPS
                    
                -   HTTP
                    
                
                **Proxy Domain Name (SaaS Proxy Gateway)**
                
                Configure a proxy gateway by using domain name mappings or CNAME records. Select one of the following methods based on your business requirements:
                
                -   **Domain Name Mapping**: SASE creates a domain name to map the original application address. Users can access the application by using the new domain name.
                    
                -   **CNAME**: You can configure a CNAME record to resolve the original application address to the zero-trust gateway of SASE, which ensures smooth user experience.
                    
                    -   **Custom Proxy Domain Name**: Configure a CNAME record.
                        
                        **Warning**
                        
                        Configure a CNAME record to resolve the custom proxy domain name to the domain name of the SASE access point.
                        
                    -   **Internal DNS Server**: Select the DNS server address that is used to resolve internal domain names.
                        
                    -   **SSL Certificate**: Select a certificate.
                        
                
                **Browser Access Settings**
                
                Select a browser access method. Select one of the following methods based on your business requirements:
                
                -   **HTML-based Internal Domain Rewriting**: You can use HTML-based URL rewrite techniques to map domain names. In this case, you must configure the Address Before Rewriting and Address After Rewriting parameters.
                    
                -   **JavaScript-based Internal Request Rewriting**: You can use JavaScript-based URL rewrite techniques to map domain names. In this case, you must configure the Address Before Rewriting and Address After Rewriting parameters.
                    
                -   **Anonymous Access**: You can specify a whitelist of IP addresses and CIDR blocks and a whitelist of request paths. Requests that are initiated from IP addresses and CIDR blocks in the whitelist to access the request paths in the whitelist are allowed.
                    
                
                **Advanced Settings**
                
                Rewrite the headers and query parameters in the gateway requests for finer-grained control.
                
                -   **Headers Rewrite**: You can dynamically add, configure, or delete specific parameters in request headers and response headers to implement flexible request control and response optimization.
                    
                -   **Query Parameter Rewriting**: You can dynamically add, configure, or delete specific query parameters.
                    
                
    -   **Batch Import**
        
        You can configure the **Access Mode** parameter. Valid values are **Client-based Access** and **Browser-based Access**.
        
        -   **Client-based Access**: You must install the SASE client to access office applications. The SASE client supports access to Layer 4 and Layer 7 applications to meet work and O&M requirements. The SASE client also supports various terminal security detection and control policies.
            
            1.  Click **Layer 4 Download Template** and fill in the template based on instructions.
                
            2.  Click **Upload Local File** to upload a template file that you prepared.
                
        -   **Browser-based Access**: You can access web office applications from a browser without the need to install the SASE client. In this mode, terminal security detection and control policies are not supported.
            
            1.  Click **Layer 7 Download Template** and fill in the template based on instructions.
                
            2.  Click **Upload Local File** to upload a template file that you prepared.
                
        
        **Note**
        
        Files in the XLSX format are supported. A file can be up to 100 MB in size.
        
    
4.  Click **OK**.
    
    The office application that you added is displayed in the application list.
    

## **Resolve the domain name of the office application**

### **Domain name resolution policy**

1.  After a private access user initiates a domain name resolution request, SASE queries whether the domain name is resolved by Alibaba Cloud DNS PrivateZone in the Alibaba Cloud DNS PrivateZone console. If the domain name is resolved, SASE returns the resolution result.
    
    **Note**
    
    If Alibaba Cloud DNS PrivateZone is deployed in your business network, SASE automatically synchronizes the DNS records of PrivateZone. You do not need to configure PrivateZone information in the SASE console. For more information about PrivateZone, see [What is Private DNS?](/help/en/dns/introduction-to-intranet-analysis)
    
2.  If the domain name resolution request does not receive the resolution result in Alibaba Cloud DNS PrivateZone, the system determines whether a custom DNS service is configured by using the **default DNS service** or **other DNS services**. If a custom DNS service is configured, the system forwards the request to the custom DNS service and returns the resolution result.
    
    -   If the user does not switch the DNS service on the SASE client, the **default DNS service** is used to resolve the domain name.
        
    -   If the user switches to a specific DNS service on the SASE client, the **specific DNS service** is used to resolve the domain name.
        
    
3.  If no custom DNS service is configured, the domain name resolution request is sent to the default DNS service that is configured for the ECS instance and the resolution result is returned.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7486463471/CAEQORiBgMDaneXlrxkiIDgyZmFkNTNhMzZlZjRhOGU5MTA3M2UyZjE4ZGNjZDA14049003_20231219105705.986.svg)

### Configure a **custom DNS service**

1.  On the **Office Applications** tab of the Application Management page, click **Internal DNS Configuration**.
    
2.  In the **DNS Address** dialog box, configure **Default DNS Service** and **Other DNS Service**.
    
    You can configure multiple server IP addresses for a DNS service. If the domain name fails to be resolved by using a server IP address, the domain name resolution request is sent to another server of the DNS service for resolution.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0704489271/p748512.png)
    

## **Add an office application to a whitelist**

### **Scenario**

If you do not need to audit network traffic in an office application, you can add the IP address or endpoint of the application to the private access whitelist. After the application is added to the whitelist, network traffic in the application is not audited by SASE.

For example, you configure the wildcard domain name \*.abc.com on the Application Management page, and the enterprise considers that business traffic in the 123.abc.com subdomain name is secure and does not need to use SASE to audit the traffic. In this case, you can add the 123.abc.com subdomain name to the whitelist.

### **Configure an office application whitelist**

To add multiple office applications to a whitelist, add the IP addresses, CIDR blocks, specific domain names, or wildcard domain names of the applications. For information about how to configure a whitelist, see [Configure a private access whitelist](/help/en/sase/user-guide/settings#f1936632ebpz1).

## **Delete and modify an office application**

You can perform the following operations based on your business requirements:

-   Modify an office application: On the Office Application page, find the office application that you want to modify. Click **Details** in the Actions column to view the details of the office application or modify information about the application in the **Details** panel.
    
-   Delete an office application: On the Office Application page, find the office application that you want to delete. Click **Delete** in the Actions column to delete the office application.
    
    **Important**
    
    After the office application is deleted, users cannot access the application. Proceed with caution.
    

## References

-   For information about how to create an access control policy for an office application, see [Configure a zero trust policy](/help/en/sase/user-guide/configure-a-zero-trust-policy#task-2037063).
    
-   If users work in an office zone that you can trust and you do not need to analyze and audit the traffic that is generated when users access office applications, you can configure a trusted office zone. For more information, see [Configure a trusted office zone](/help/en/sase/user-guide/configure-a-trusted-office-area).
