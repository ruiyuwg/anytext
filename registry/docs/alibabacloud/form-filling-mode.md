**Important**

-   From April 30, 2025 (UTC+8), the zones created by new users of PrivateZone are acceleration zones by default.
    
-   By April 30, 2026 (UTC+8), all built-in authoritative zones in regular zones will be switched to acceleration zones. This may lead to increased DNS requests and higher costs. We recommend that you [mitigate the throttling of DNS requests initiated by ECS instances](/help/en/dns/how-can-the-speed-limit-of-ecs-dns-query-requests) to avoid increased DNS requests when local cache is unavaliable.
    

After you add a built-in authoritative zone, you must set the corresponding Domain Name System (DNS) records before you can set an effective scope for the built-in authoritative zone. Within the effective scope, the intranet DNS records rather than the Internet DNS records take effect for the built-in authoritative zone.

## **Procedure**

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. On the page that appears, click **Configuration Mode** in the upper-right corner, click the **Built-in Authoritative Module** tab, and then click the **User Defined Zones** tab.
    
3.  On the **User Defined Zones** tab, find the desired zone and click **Resource Records Settings** in the **Actions** column.
    
4.  On the **Resource Records Settings** tab, click **Add Record**. In the panel that appears, click **Form Editor Mode**.
    
5.  Set the required parameters and click **OK**.
    
6.  In the **Change Resource Record Confirmation** message, verify that the settings are correct and click **OK**.
    
7.  Go back to the **User Defined Zones** tab. Find the desired zone and click **Effective Scope Settings** in the **Actions** column. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638329961/p723213.png)
    
    **Note**
    
    The procedure for configuring DNS records for a built-in authoritative regular zone is the same as the procedure for configuring DNS records for a built-in authoritative acceleration zone. Built-in authoritative acceleration zones support custom intranet DNS lines and weight settings for A, AAAA, and CNAME records.
    
    For more information about the types of DNS records supported by Private DNS, see [DNS record types supported by Private DNS](/help/en/dns/types-of-resolution-records-supported-by-intranet-dns-resolution).
    

## **Examples of adding DNS records**

### **A record**

The following figure shows an example of adding an **A** record for a built-in authoritative zone.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4638329961/p723214.png)

### AAAA record

The following figure shows an example of adding an **AAAA** record for a built-in authoritative zone.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638329961/p723215.png)

### **CNAME record**

The following figure shows an example of adding a **CNAME** record for a built-in authoritative zone.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638329961/p723216.png)

### **MX record**

The following figure shows an example of adding an **MX** record for a built-in authoritative zone.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638329961/p723217.png)

### **TXT record**

The following figure shows an example of adding a **TXT** record for a built-in authoritative zone.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638329961/p723218.png)

### **PTR record**

Before you add a PTR record, you must configure a reverse lookup zone. For more information, see [Add PTR records](/help/en/dns/reverse-parsing-and-ptr-records).

### **SRV record**

An SRV record is used to specify a server that hosts a specific service. SRV records are commonly used in directory management for Microsoft operating systems.

-   Record Type: Select **SRV**.
    
-   Hostname: Enter a hostname in the format of Service name.Protocol type.
    
    Example: \_sip.\_tcp.
    
-   Record Value: Enter a record value in the format of Priority Weight Port Destination domain name. Separate these items with spaces.
    
    Example: 0 5 5060 sipserver.example.com.
    
-   TTL: Enter a time-to-live (TTL) value for the record. A smaller value indicates a shorter period of time to apply record updates.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638329961/p723219.png)
