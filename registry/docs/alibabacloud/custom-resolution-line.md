**Private Zone** supports smart DNS resolution. This feature returns preset DNS records based on the source of a DNS query. Supported line types include **Default Line**, **Alibaba Cloud Line**, and **Custom ACLs**.

## **Supported line types**

### **1\. Default line**

This is equivalent to a global line. Configure this line as a fallback to ensure that a DNS record is returned if no other smart line is hit.

### **2\. Alibaba Cloud line**

This line supports region-level and zone-level lines.

**Line categorization**

**Region line**

**Granular zone line**

Public Cloud

China (Beijing)

Zone A, Zone B, Zone C, Zone D, Zone E, Zone F, Zone G, Zone H, Zone I, Zone J, Zone K, Zone L

Public Cloud

China (Chengdu)

Zone A, Zone B

Public Cloud

China (Guangzhou)

Zone A, Zone B

Public Cloud

China (Hangzhou)

Zone B, Zone C, Zone D, Zone E, Zone F, Zone G, Zone H, Zone I, Zone J, Zone K

Public Cloud

China (Heyuan)

Zone A, Zone B

Public Cloud

China (Hohhot)

Zone A, Zone B

Public Cloud

China (Nantong)

Zone A, Zone B

Public Cloud

China (Qingdao)

Zone B

Public Cloud

China (Shanghai)

Zone A, Zone B, Zone C, Zone D, Zone E, Zone F, Zone G, Zone H, Zone I, Zone J, Zone K, Zone L, Zone M, Zone N, Zone Z

Public Cloud

China (Shenzhen)

Zone A, Zone B, Zone C, Zone D, Zone E, Zone F, Zone G

Public Cloud

China (Ulanqab)

Zone A, Zone B, Zone C

Public Cloud

China (Zhangjiakou)

Zone A, Zone B, Zone C, Zone D

Public Cloud

US (Silicon Valley)

Zone A, Zone B

Public Cloud

US (Virginia)

Zone A, Zone B

Public Cloud

Japan (Tokyo)

Zone A, Zone B, Zone C

Public Cloud

Singapore

Zone A, Zone B, Zone C

Public Cloud

Malaysia (Kuala Lumpur)

Zone A, Zone B

Public Cloud

Indonesia (Jakarta)

Zone A, Zone B, Zone C

Public Cloud

China (Hong Kong)

Zone B, Zone C, Zone D

Public Cloud

Germany (Frankfurt)

Zone A, Zone B, Zone C

Public Cloud

UK (London)

Zone A, Zone B

Public Cloud

Middle East 1 (Dubai)

Zone A

Public Cloud

South Korea (Seoul)

Zone A

Public Cloud

Philippines (Manila)

Zone A

Public Cloud

Thailand (Bangkok)

Zone A

Public Cloud

SAU (Riyadh - Partner Region)

Zone A, Zone B

Public Cloud

China (Fuzhou - Local Region - Decommissioning)

Zone A

Public Cloud

China (Nanjing - Local Region - Decommissioning)

Zone A

Public Cloud

China (Wuhan - Local Region)

Zone A

### **3\.** **Custom ACLs**

This line lets you return a specific IP address for DNS queries from a specified IP address range.

1.  Go to [Alibaba Cloud DNS - Custom Lines](https://dnsnext.console.alibabacloud.com/customLines).
    
2.  Click the **Add ACL** button.
    
3.  Complete the form to create a custom line. The following table describes the limits:
    
    **Limit**
    
    **Description**
    
    **ACL Name**
    
    The name must be 1 to 20 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, hyphens (-), and underscores (\_).
    
    **ACL Type**
    
    Select **Intranet**.
    
    **IP Address Range**
    
    Formats:
    
    -   A single IP address, such as `192.168.0.1`.
        
    -   A CIDR block, such as `192.168.0.0/24`.
        
    -   An IP address range, such as `192.169.0.1-192.168.0.100`.
        
    
    Limits:
    
    -   IP address ranges cannot overlap.
        
    -   The maximum value is 100.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5113633671/p977751.png)
    

## **Set up smart lines**

1.  Go to [Alibaba Cloud DNS - PrivateZone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Authoritative Zone** > **User Defined Zones**. Find the domain name that you want to manage and click the **Settings** button in the Actions column.
    
3.  On the **Settings** page, click the **Add Record** button.
    
4.  Complete the form. For **Query Source**, specify a smart line.
    
    **Alibaba Cloud line**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5900271571/p982585.png)
    
    **Custom line**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5900271571/p982586.png)
