The Public Domain Name Monitoring service monitors the HTTPS status of your public websites. Use it to detect SSL certificate issues, centrally manage HTTPS for your sites, and reduce the risk of service disruptions caused by human error.

## Use cases

If you manage multiple HTTPS sites, you may face the complexity of maintenance, such as renewing different certificates at different times of the year. Public Domain Name Monitoring centralizes this task. After you enable monitoring, Certificate Management Service periodically checks the HTTPS status for issues such as a missing SSL certificate or an expired certificate and displays the results in the console. This lets you check the HTTPS status of your sites at any time, quickly identify problems, and view recommended actions.

**Note**

For more information, see [Billing of public domain name monitoring](/help/en/ssl-certificate/product-overview/billing-of-domain-name-monitoring).

## Purchase the Public Domain Name Monitoring service

1.  Go to the [Public Domain Name Monitoring](https://yundun.console.alibabacloud.com/?p=cas#/websiteSecurity/domain/public/) page. In the **Remaining Monitoring Quota** area, click **Buy Now**.
    
2.  Configure the parameters based on the following table, click **Buy Now**, and complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Service type**
    
    The **Public domain** service monitors the HTTPS availability of domain names on the Internet. This includes monitoring and alerts for HTTPS access, certificates, and certificate chains.
    
    **Method of purchase**
    
    Only **Purchase by package** is supported.
    
    **Package**
    
    Select a package. The number **1** means the package includes a monitoring quota for one domain name. Each monitoring quota covers a single, fully qualified domain name. For example, `example.com` and `www.example.com` are considered two separate domains and require two separate monitoring quotas. The unit price of a package varies by specification, with greater discounts for larger purchases.
    
    **Quantity**
    
    The number of packages to purchase.
    
    **Time**
    
    The service duration for domain name monitoring is **1 Year** by default. This provides 365 days of monitoring for a single domain name.
    
    The validity period starts on the day you enable monitoring for your domain name and lasts for 365 consecutive days. For example, if you purchase and enable monitoring for a domain name on June 1, 2022, the service expires on May 31, 2023. If you temporarily disable the monitoring service, the expiration date does not change.
    

## Add a domain name and enable monitoring

After you enable domain name monitoring, the system sends you a notification by SMS or email when it detects an HTTPS issue on your domain. **Notifications are sent once a day**. Customize notification settings for specific events, such as certificate expiration, and add multiple recipients. For more information, see [Configure notifications for domain name monitoring](/help/en/ssl-certificate/configure-notifications-for-domain-name-monitoring).

### **Procedure**

1.  Go to the [Public Domain Name Monitoring](https://yundun.console.alibabacloud.com/?p=cas#/websiteSecurity/domain/public/) page and click **Add Domain Names**.
    
2.  In the **Add Domain Name** dialog box, configure the parameters based on the following table and click **OK**.
    
    After you add a domain, it appears in the domain list. If you enabled monitoring for the domain, the domain's **Status** changes to **Enabling**. This means Certificate Management Service is checking the HTTPS status of the domain. This process typically takes 1 to 5 minutes. After the check is complete, the **Status** updates to show the result. For a list of possible statuses, see [Monitoring status description](#section-status-description).
    
    **Parameter**
    
    **Description**
    
    **Domain Name/IP Address**
    
    The domain name or IP address to monitor.
    
    Enter a single domain name or multiple domain names separated by commas (,). To add domains in bulk, click **Upload Domain Name** on the **Public Domain Name Monitoring** page to add domains by using a template.
    
    **Important**
    
    -   The domain must be accessible over the public internet. Otherwise, its HTTPS status cannot be monitored.
        
        If your service uses a whitelist for access control, you must add all egress IP addresses of the Public Domain Name Monitoring service to your whitelist. The egress IP address ranges are:
        
        -   203.119.128.0/17
            
        -   59.82.0.0/16
            
        -   140.205.0.0/16
            
        -   106.11.0.0/16
            
    -   Monitoring for domains with the `.id` suffix is not supported.
        
    
    **Alert Contact**
    
    Select the contacts to receive notifications. Add up to three contacts. If no contacts are available, click **+Add** to create a new one.
    
    **HTTPS Port**
    
    The HTTPS port on the domain's server, such as 443 or 8443.
    
    The default HTTPS port is 443. If your server uses a different port, enter the custom port number.
    
    **Important**
    
    Ensure that the server provides HTTPS services on this port. Otherwise, enabling domain monitoring will fail. Common misconfigurations include entering port 80 or 8080.
    
    **Enable Monitoring**
    
    Turn on this switch to start monitoring the domain's HTTPS status immediately after adding it.
    
    After you enable domain monitoring, customize notifications for events such as an expiring SSL certificate or an incomplete certificate chain. Choose to receive notifications through various channels, including email and DingTalk. This helps you stay informed about domain issues and prevent website unavailability or security problems caused by certificate issues.
    
    **Important**
    
    After you enable this switch, the consumption of monitoring-days begins, and refunds are no longer available.
    
3.  **Optional:** If you did not enable monitoring when adding the domain, turn on the switch for the domain in the **Enable Monitoring** column of the domain list.
    

## Monitoring status description

After Certificate Management Service completes the HTTPS status check for your domain, the **Status** can be one of the following:

-   **Secure**: The domain is configured with an SSL certificate. Certificate Management Service has retrieved the certificate's brand and validity period.
    
-   **Abnormal**: The domain has an insecure HTTPS configuration. The following table describes the possible causes.
    
    **Cause**
    
    **Description**
    
    **Suggested** **actions**
    
    Network connectivity failed.
    
    The network connection times out.
    
    Check if your server's network is functioning correctly. If you find an issue, contact your network administrator to resolve it.
    
    No SSL certificate is configured.
    
    The domain is not configured with an SSL certificate and does not support HTTPS. This poses a security risk to communications.
    
    Purchase and configure an SSL certificate for the domain name. For more information, see [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) and [Create an SSL certificate](/help/en/ssl-certificate/create-a-certificate).
    
    Certificate mismatch.
    
    The domain name does not match the domain name bound to the certificate.
    
    Revoke the current certificate and then apply for or purchase a new one. For more information, see [Revoke and delete SSL certificates](/help/en/ssl-certificate/revoke-and-delete-a-certificate) and [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate).
    
    Certificate chain authentication failed.
    
    There is an issue with the domain's SSL certificate chain, such as an incomplete or untrusted chain.
    
    Contact your account manager..
    
    Certificate is about to expire
    
    The domain's certificate will expire in less than 30 calendar days.
    
    Renew the certificate promptly to prevent service interruptions. For more information, see [What is the managed service?](/help/en/ssl-certificate/overview-1#task-2516632).
    
    Certificate expired
    
    The domain's certificate has expired.
    
    Purchase and configure a new SSL certificate for the domain name. For more information, see [Purchase a commercial certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) and [Create an SSL certificate](/help/en/ssl-certificate/create-a-certificate).
    
-   **Enable Failed**: Monitoring for the domain name was not enabled successfully. The following table describes the possible causes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4037467571/p928137.png)
    
    **Cause**
    
    **Description**
    
    **Solution**
    
    Connection failed.
    
    Certificate Management Service cannot connect to the domain name.
    
    Check if your server's network is functioning correctly. If you find an issue, contact your network administrator to resolve it.
    
    Invalid IP.
    
    Certificate Management Service cannot retrieve the IP address for the domain.
    
    Check if the domain's DNS resolution is functioning correctly. If you find an issue, contact your DNS provider or network administrator to resolve it.
    
    Invalid domain name
    
    The domain is not accessible over the Internet.
    
    Verify that the domain you entered is correct. The domain must be accessible over the Internet. Edit the domain settings and try to enable monitoring again.
    
    Invalid port
    
    The specified port does not provide HTTPS services.
    
    Verify that the port you entered is correct. The port must provide HTTPS services. Edit the port settings and try to enable monitoring again.
    

## **View the domain name monitoring report**

On the [Public Domain Name Monitoring](https://yundun.console.alibabacloud.com/?p=cas#/websiteSecurity/domain/public/) page, find the target domain and click **Monitoring Details** in the **Actions** column to view the domain monitoring report.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1070840671/p937231.png)

-   **Monitoring Details**: View the domain's monitored port, remaining service duration, and monitoring status.
    
-   **ATS Check**: Check if the server and certificate comply with Apple's App Transport Security (ATS) protocol standards.
    
-   **IP Content**: View the IP addresses to which the domain resolves.
    
-   **Certificate Information**: View the certificate's remaining validity, brand, and status.
    
-   **Certificate Chain Information**: View the issuers and validity periods of the certificates in the certificate chain.
    
-   **Contact Information**: View the name, phone number, and email address of the contacts configured for domain monitoring.
    
-   **Domain Name Update**: View the domain's holder change history.
    

## **Download the domain** **name** **monitoring report**

On the [Public Domain Name Monitoring](https://yundun.console.alibabacloud.com/?p=cas#/websiteSecurity/domain/public/) page, find the target domain, click **Monitoring Details** in the **Actions** column. On the details page, click **Download Report**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9336160671/p1015942.png)

## **Download the monthly domain name monitoring report**

On the [Public Domain Name Monitoring](https://yundun.console.alibabacloud.com/?p=cas#/websiteSecurity/domain/public/) page, click **Download Monthly Report**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9336160671/p1016138.png)
