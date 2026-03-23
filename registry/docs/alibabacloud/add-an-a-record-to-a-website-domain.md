Configure Domain Name System (DNS) records for a web server. This allows users to access your website using a domain name, such as `example.com`, instead of an IP address. This topic describes how to complete a basic website DNS configuration in five minutes.

## **Preparations**

1.  **Have a domain name.**
    
    The domain name must be in the domain name list of [Alibaba Cloud DNS - Public DNS](https://dnsnext.console.alibabacloud.com/authoritative). If the domain name is not listed:
    
    1.  If you purchased the domain name from Alibaba Cloud, it is added automatically. If you do not have a domain name, you can purchase one from [Alibaba Cloud Domain Names](https://www.alibabacloud.com/domain).
        
    2.  If you purchased the domain name from a third-party registrar, you must manually add it to **Public Zone** and change the DNS server addresses of the domain name. For more information, see [Smoothly migrate a domain name to Alibaba Cloud DNS](/help/en/dns/pubz-how-to-smoothly-migrate-domain-name-resolution-to-alibaba-cloud-dns).
        
2.  **You can obtain the public IP address of the server.**
    
    -   If your service is deployed on an Elastic Compute Service (ECS) instance, you can log on to the ECS console to view the public IP address of the instance. For example, 47.100.XX.XX.
        
    -   If you purchased web hosting space, you can contact your provider to obtain the service endpoint.
        
3.  **Ensure that the website service is functioning properly**.
    
    The web application is running on the server and can be accessed using its IP address. The server's firewall or security group must allow inbound traffic on port 80 (HTTP) and port 443 (HTTPS).
    

## **Procedure**

### **Step 1. Add a DNS record for the root domain (@)**

1.  Go to the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page, find the target domain name, and click **Settings**.
    
2.  Click **Add Record**. Add a DNS record and set the **Hostname** parameter to `@`. For more information about the parameters, see [Add a DNS record](/help/en/dns/pubz-add-parsing-record).
    
    **Parameter**
    
    **Recommended Value**
    
    **Description**
    
    **Record Type**
    
    `A`
    
    Points a domain name to an IPv4 address.
    
    **Hostname**
    
    `@`
    
    Represents the root domain.
    
    **Query Source**
    
    Default
    
    Applies to requests from all sources.
    
    **Record Value**
    
    `Your server's public IP address`
    
    Enter the IP address that you obtained in the [Preparations](#8a5b4243cf2df) section.
    
    **TTL**/**Record Values Load Strategy**
    
    10 minutes (600 seconds)
    
    Keep the default value. For more information, see [Add a DNS record](/help/en/dns/pubz-add-parsing-record).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4942761671/p994782.png)
    

### **Step 2. Verify that the DNS record is effective**

DNS records take time to propagate globally. The propagation is usually complete within the 10-minute TTL that you set. You can verify the record in the following ways:

-   Browser access: In a browser, enter `http://your-domain.com` and confirm that you can access your website.
    
-   Command-line tool: On your computer, open a terminal or command prompt and run the following commands. Check whether the returned IP address matches the one that you configured.
    
    ```
    nslookup your-domain.com
    dig your-domain.com
    ```
    

## **Limits**

### **DNS and ports**

The core function of DNS is to translate a domain name into an IP address. DNS cannot detect or specify a port number.

-   When you access a domain name in a browser, the browser sends a request to port `80` (HTTP) or port `443` (HTTPS) on the server by default.
    
-   If your web service runs on a non-standard port, such as `8080`, users must include the port number when they access the service, for example, `http://example.com:8080`. Non-standard ports are generally not suitable for public websites.
    

Solution: To use a non-standard port, you can configure a reverse proxy, such as a [self-managed Nginx reverse proxy](/help/en/dns/build-an-nginx-based-url-forwarding-structure), on the server or use Application Load Balancer (ALB) to forward traffic from port `80` or `443` to the actual port of the backend service. This hides the port details from users.

## **Billing**

-   The **Public Zone** feature includes a free tier. Adding basic DNS records such as `A` and `CNAME` records is free.
    
-   The Free Edition does not provide a Service-Level Agreement (SLA). For higher quality and more stable DNS services, you can purchase a paid instance. For more information, see [Purchase and bind domain names](/help/en/dns/pubz-instance-purchase-and-domain-name-binding).
    

## **FAQ**

### **Why is my domain name still inaccessible after I add the DNS record?**

You can troubleshoot the issue by performing the following steps:

1.  Wait for DNS propagation: DNS changes take time to propagate globally. Wait for at least 10 minutes and then try again.
    
2.  If you enter only the domain name in a browser, the browser sends a request over `HTTPS` by default. If your website is not configured with an HTTPS certificate, the browser displays an access error. Change `HTTPS` to `HTTP` in the browser's address bar.
    
3.  Check the local cache: Clear your browser cache, or flush your local DNS cache by running the `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (macOS) command.
    
4.  Check the server configuration: Confirm that your server's firewall or ECS security group allows traffic on ports `80` and `443`.
    
5.  Check the web service: Log on to your server and confirm that your web service, such as Nginx or Apache, is running.
    
6.  Check the domain name and ICP filing status: If your server is in the Chinese mainland, make sure that your domain name has completed its ICP filing.
    

### **How do I point all undefined subdomains, such as** `**blog.example.com**`**, to the root website?**

You can add a wildcard DNS record and set the host to `*`.

**Parameter**

**Recommended Value**

**Description**

Record Type

`CNAME`

Points the `*` domain name to another domain name.

Host

`*`

This has the lowest priority and serves as a fallback for all undefined subdomains.

Resolution Line

Default

Applies to requests from all sources.

Record Value

`example.com`

Enter your root domain name.

TTL

10 minutes (600 seconds)

Keep the default value.

### **What do I do if a "DNS record conflict" error occurs?**

This error usually means that the record you are trying to add conflicts with an existing record. For example, a host, such as `@`, cannot have a CNAME record and any other type of record at the same time. For more information, see [Rules for DNS record conflicts](/help/en/dns/pubz-dns-record-conflict-rules). Delete the conflicting record and then add the new record.

## Related topics

-   For a detailed description of the parameters for adding a DNS record, see [Add a DNS record](/help/en/dns/pubz-add-parsing-record).
    
-   You can also see [Methods for testing DNS record validity](/help/en/dns/pubz-parsing-effectiveness-test-methods) to confirm that the record is effective. If the DNS record is not effective, see [Quickly troubleshoot DNS resolution failures](/help/en/dns/pubz-quick-troubleshooting-of-problems-not-effective).
    
-   If a DNS record conflict error occurs when you add a record, see [Rules for DNS record conflicts](/help/en/dns/pubz-dns-record-conflict-rules).
    
-   To add a wildcard DNS record with the host set to **\***, see [Wildcard domain names](/help/en/dns/pubz-domain-name-resolution-rules).
    
-   If you encounter issues during the setup, see the following documents:
    
    -   For issues that occur when you add a DNS record, see [FAQ about adding DNS records](/help/en/dns/pubz-faq-related-to-domain-name-resolution-resolution-records).
        
    -   If the DNS record is not effective after configuration and you cannot identify the cause, see [FAQ about DNS resolution failures or website inaccessibility](/help/en/dns/pubz-parse-does-not-take-effect-unable-to-access-website-faq).
