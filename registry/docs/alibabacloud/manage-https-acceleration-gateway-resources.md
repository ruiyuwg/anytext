After you purchase an HTTPS acceleration gateway instance, you must add a domain name to the HTTPS acceleration gateway instance. After you add the domain name, the system assigns a CNAME for the domain name. You must map the CNAME to the domain name in the system of your Domain Name System (DNS) service provider. This way, encrypted transmission is implemented between the client and the HTTPS acceleration gateway instance, and the delivery of static resources on the website is accelerated.

## **Prerequisites**

-   An HTTPS acceleration gateway instance is purchased. For more information, see [Purchase guide for the HTTPS acceleration gateway feature](/help/en/ssl-certificate/purchase-https-acceleration-gateway-resources).
    
-   An origin server that runs in a stable manner is available.
    
-   A domain name for which you want to implement HTTPS acceleration is deployed. In most cases, the domain name is a subdomain.
    

## **Step 1: Add a domain name to an HTTPS acceleration gateway instance**

1.  Log on to the [Certificate Management Service console](https://account.alibabacloud.com/login/login.htm?spm=5176.12901015-2.0.0.57a4525c5R9Yj3).
    
2.  In the left-side navigation pane, choose **Certificate and Domain Application Services** > **HTTPS Acceleration Gateway**.
    
3.  On the **Domain Name Management** tab, find the HTTPS acceleration gateway instance to which you want to add a domain name and click **Domain Names** in the **Actions** column.
    
4.  On the **Domain Names** page, click **Add Domain Name**. In the **Add Domain Name** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Domains**
    
    Specify a domain name for the HTTPS acceleration gateway instance based on the edition of the instance.
    
    -   The domain name must meet the following requirements:
        
        -   The domain name must be 1 to 67 characters in length.
            
        -   The domain name can contain lowercase letters, digits, and hyphens (-). Example: `example.com`.
            
            The domain name cannot contain consecutive hyphens (-), consist of only one hyphen (-), or start or end with a hyphen (-).
            
        -   The domain name cannot contain Chinese characters, uppercase letters, or special characters other than hyphens (-).
            
        -   If the domain name contains Chinese characters, the Chinese characters must be transcoded to English letters by using [the transcoding tool](/help/en/ssl-certificate/use-the-certificate-toolkit#03304f7125nsd). Example: `xn--fiq****.xn--eq****`.
            
    -   Make sure that Internet Content Provider (ICP) filing is complete for the domain name. A website or an application can provide services in the Chinese mainland only after ICP filling is complete for the related domain name. We recommend that you complete ICP filing in [Alibaba Cloud ICP Filing System](https://beian.aliyun.com/pcContainer/myorder). Before you perform ICP filing for the domain name, you must complete the required preparations and checks. For more information, see [Check the filing server](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check#concept-m5j-vrl-zdb).
        
    -   Make sure that no other proxy-based access acceleration services, such as Alibaba Cloud CDN, Dynamic Content Delivery Network (DCDN), and Web Application Firewall (WAF), are used for the domain name.
        
    -   Top-level, second-level, and third-level wildcard domain names are supported. A third-level domain name contains three periods (.). Example: `*.example.aliyundoc.com`.
        
    
    **Important**
    
    -   You can specify a wildcard domain name to implement HTTPS acceleration for all subdomains of the wildcard domain name. For example, if you add `*.aliyundoc.com` to an HTTPS acceleration gateway instance, HTTPS encryption and resource delivery acceleration are implemented for all subdomains of \*.aliyundoc.com after you map `*.aliyundoc.com` to the CNAME that is assigned. The subdomains include `example.aliyundoc.com` and `demo.aliyundoc.com`.
        
    
    -   If you specify a wildcard domain name, the HTTPS acceleration gateway instance matches only the subdomains at the same level. For example, if you add `*.aliyundoc.com` to an HTTPS acceleration gateway instance, the instance matches subdomains at the same level, such as `demo.aliyundoc.com, learn.aliyundoc.com, and example.aliyundoc.com`. The instance does not match subdomains at different levels, such as `guide.demo.aliyundoc.com and developer.demo.aliyundoc.com`.
        
    -   If the parent domain name of a wildcard domain name is a top-level domain name, the HTTPS acceleration gateway instance automatically takes effect on the parent domain name free of charge. For example, if you add `*.aliyundoc.com` to an HTTPS acceleration gateway instance, the instance automatically takes effect on the parent domain name `aliyundoc.com` free of charge. If you add `*.demo.aliyundoc.com` to an HTTPS acceleration gateway instance, the instance does not automatically take effect on `demo.aliyundoc.com` or `aliyundoc.com`.
        
    -   To ensure that a parent domain name, such as example.com, and a domain name that starts with www, such as www.example.com, can be accessed over encrypted connections, you must separately add the domain names to the HTTPS acceleration gateway instance.
        
    -   For more information about domain hierarchy, see [Domain hierarchy](/help/en/dns/basic-concepts).
        
    
    **Force HTTPS Access**
    
    If you enable this feature, all HTTP requests that are initiated from browsers to the domain name are redirected to HTTPS requests.
    
    **Alert Contact**
    
    Select a contact from the drop-down list. The list provides information about each contact, such as the email address and the mobile phone number. The contact is used to receive information such as notifications for certificate expiration and the remaining capacity of resources. You can select up to 10 contacts.
    
    If no contact exists, you can click **Create Contact** in the drop-down list to create a contact. Certificate Management Service saves the created contact for subsequent use. For more information about how to create a contact, see [Manage contacts](/help/en/ssl-certificate/manage-contacts#section-3ao-ncx-vkt).
    
    **Origin Server**
    
    Specify the address of the origin server to which you want the HTTPS acceleration gateway instance to forward requests. You can specify up to 20 addresses.
    
    -   **IP**: You can specify one or more IP addresses as origin server addresses. Only public IP addresses are supported. Example: `1.1.x.x`.
        
    -   **Origin Server Address**: You can specify one or more domain names as origin server addresses. Example: `aliyundoc.com,example.com`.
        
        **Note**
        
        The domain name that you specify must be different from the domain name that is added to the HTTPS acceleration gateway instance. Otherwise, a DNS resolution loop occurs, and requests cannot be forwarded to the origin server.
        
    -   **Port**: You can select a port based on the protocol of the origin server that you specify. You can select only port 80 or 443.
        
        -   If the protocol of the origin server is HTTP, select port 80.
            
        -   If the protocol of the origin server is HTTPS, select port 443.
            
    
5.  In the message that appears, read the information and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4099944371/p821505.png)
    
    **Important**
    
    If your website contains illegal content or is under DDoS attacks, the HTTPS acceleration gateway service is interrupted, and you are notified. In this case, contact your account manager.
    
6.  Find the HTTPS acceleration gateway instance and click **Verify** in the **Actions** column.
    
7.  In the **Verify Information** step, complete domain name ownership verification and click **OK**.
    
    **Scenario**
    
    **Procedure**
    
    The domain name is hosted on Alibaba Cloud DNS, and Alibaba Cloud DNS is activated within the current Alibaba Cloud account
    
    After you authorize Certificate Management Service to access Alibaba Cloud resources, the system automatically adds a record for the domin name in the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/). You can use the record to complete domain name ownership verification. The verification requires approximately 5 minutes to complete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7593324271/p821523.png)
    
    After the verification is passed, perform [Step 2: Configure CNAME settings to forward business requests](#3d0e04205ds53).
    
    The domain name is not hosted on Alibaba Cloud DNS, or Alibaba Cloud DNS is not activated within the current Alibaba Cloud account
    
    You must manually add a CNAME or TXT record to the system of your DNS service provider to complete domain name ownership verification.
    
    In the following procedure, a TXT record is added.
    
    1.  On the **TXT** tab of the **Verify Information** step, copy the values displayed in the **Host Record** and **Record Value** columns.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5177602371/p857754.png)
        
    2.  Log on to the system of your DNS service provider and add a DNS record for the domain name.
        
        The following example demonstrates how to add a DNS record for a domain name in the Alibaba Cloud DNS console. If the domain name is registered with a third-party DNS service provider, go to the website of the DNS service provider and add a DNS record for the domain name.
        
        1.  [Log on to the Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/) by using the Alibaba Cloud account of the domain name owner.
            
        2.  On the **Authoritative DNS Resolution** page, find the domain name that is bound to your certificate and click the domain name.
            
        3.  On the **DNS Settings** tab, click **Add DNS Record**.
            
        4.  In the **Add DNS Record** dialog box, configure the Record Type, Hostname, and Record Value parameters and click **OK**.
            
    
    The verification requires approximately 10 minutes to 15 minutes to complete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7593324271/p821523.png)
    
    After the verification is passed, perform [Step 2: Configure CNAME settings to forward business requests](#3d0e04205ds53).
    

## **Step 2: Configure CNAME settings to forward business requests**

After you add a domain name and complete domain name ownership verification, the HTTPS acceleration gateway feature assigns a CNAME for the domain name. You must map the CNAME to the domain name in the system of your DNS service provider. This way, requests are forwarded to the HTTPS acceleration gateway instance.

1.  On the **Domain Names** page, find the domain name that you want to manage and obtain the CNAME record value.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7593324271/p821532.png)
    
2.  Add a CNAME record to your DNS service provider.
    
    The configuration method varies based on the DNS server type. In the following procedure, the Alibaba Cloud DNS console is used as an example.
    
    1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com) by using the **Alibaba Cloud account to which the domain name belongs**.
        
    2.  On the **Domain Name Resolution** page, find the domain name and click **DNS Settings** in the **Actions** column.
        
        **Note**
        
        If the domain name is not registered with Alibaba Cloud, you must add the domain name to Alibaba Cloud DNS before you can add a DNS record for the domain name. For more information, see [Domain management](/help/en/dns/domain-management).
        
    3.  Click **Add DNS Record**, configure the following parameters to add a CNAME record, and then click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Record Type**
        
        Select CNAME from the drop-down list.
        
        **Hostname**
        
        -   If the domain name is a top-level or root domain name, enter `@`**.** Examples:
            
            -   If the domain name is aliyundoc.com, the host record is `@`.
                
            -   If the domain name is aliyundoc.com.cn, the host record is `@`.
                
        -   If the domain name is a wildcard domain name, the host record may be `*`. Examples:
            
            -   If the domain name is \*.aliyundoc.com, the host record is `*`.
                
            -   If the domain name is \*.aliyundoc.com.cn, the host record is `*`.
                
            -   If the domain name is \*.example.aliyundoc.com, the host record is `*.example`.
                
            -   If the domain name is \*.example.aliyundoc.com.cn, the host record is `*.example`.
                
        -   If the domain name is a subdomain, the host record is the prefix of the subdomain. Examples:
            
            -   If the domain name is example.aliyundoc.com, the host record is `example`.
                
            -   If the domain name is example.aliyundoc.com.cn, the host record is `example`.
                
            -   If the domain name is www.example.aliyundoc.com, the host record is `www.example`.
                
            -   If the domain name is www.example.aliyundoc.com.cn, the host record is `www.example`.
                
        
        For more information about domain hierarchy, see [Domain hierarchy](/help/en/dns/basic-concepts).
        
        **DNS Request Source**
        
        Retain the default value.
        
        **Record Value**
        
        Enter the CNAME record value of the domain name. Example: `example.com.w.kunlunhuf.com`.
        
        **TTL**
        
        We recommend that you retain the default value. Enter a time-to-live (TTL) value for the CNAME record. A smaller value indicates that the record is updated faster. The default TTL is 10 minutes.
        
    4.  Click **OK**.
        
        If you add a CNAME record in the Alibaba Cloud DNS console, the CNAME record immediately takes effect. If you modify the CNAME record, the modification takes effect after the TTL elapses. The default TTL is 10 minutes. The value displayed in the CNAME Status column is only for reference because latency exists in the Certificate Management Service console. If you can use the domain name to access the required website, the CNAME record takes effect.
        

## **What to do next**

### **Modify** information specified for an HTTPS acceleration gateway instance

If information such as the origin server and notification contact that you specified when you added a domain name to the HTTPS acceleration gateway instance is invalid, you can perform the following steps to modify the information:

1.  On the **Domain Name Management** tab, find the HTTPS acceleration gateway instance that you want to manage and click **Domain Names** in the **Actions** column.
    
2.  On the **Domain Names** page, find the domain name that you want to manage and click **Modify** in the **Actions** column.
    

**Important**

If the domain name or method that you specified for domain name ownership verification is invalid, you must reset the HTTPS acceleration gateway instance, and then change the domain name or the verification method. The reset operation deletes the configurations of the origin server and stops the forwarding of requests destined for the domain name. Make sure that your business is not affected when you perform the reset operation.

### **Reset an HTTPS acceleration gateway instance**

**Important**

-   If a domain name is added to an HTTPS acceleration gateway instance for more than 28 calendar days, you cannot reset the instance.
    
-   The reset operation deletes the configurations of the origin server and stops the forwarding of requests destined for the domain name. Make sure that your business is not affected when you perform the reset operation.
    

You can reset an HTTPS acceleration gateway instance that meets the following conditions to add a new domain name: The domain name or the verification method that you specified is invalid, the domain name is added to the HTTPS acceleration gateway instance within 28 calendar days, and the gateway resource calculation quantity (GRCQ) quota that you purchase is not consumed. The GRCQ quota can be used to offset the fees of website visits and outbound traffic. To reset an instance, go to the **Domain Name Management** tab, find the HTTPS acceleration gateway instance that you want to manage, and then click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5376078171/p806213.png)** > **Reset** in the **Actions** column.
