Add DNS records by using the Form Editor mode or Visual Editor mode.

After adding an authoritative domain name, you must set the authoritative records for it before setting the effective scope. Within the effective scope, the private zone records of the domain name will overwrite its public zone records.

## Form Editor

1.  Visit [Alibaba Cloud DNS - Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Choose **Authoritative Zone**, and click **User Defined Zones**.
    
3.  Find the target zone, click **Settings** in the **Actions** column of the target domain name.
    
4.  On the **Settings** tab, click **Add Record**, and select **Form Editor Mode** in the dialog box.
    
5.  In the **Add Record** dialog box, configure the records and click **OK**.
    
6.  In the **Change Resource Record Confirmation** dialog box, verify the configurations and click **OK**.
    
7.  Return to the **User Defined Zones** tab, click **Effective Scope** in the **Actions** column of the target domain name, and select a VPC as an effective scope.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3639430671/p979098.png)
    
    **Note**
    
    The ways of configuring DNS records for standard zone and acceleration zone are the same. However, acceleration zones support custom ACLs and weight settings for A, AAAA, and CNAME records.
    
    For more about supported record types and their usage, see [Record types supported by private zone](/help/en/dns/pvtz-analysis-of-records-management/#6e243be78frfd).
    

## **Examples of adding DNS records**

### **A record**

Refer to the following figure to add an **A** record for an authoritative domain name.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3900271571/p982574.png)

### AAAA record

Refer to the following figure to add an **AAAA** record for an authoritative domain name.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3900271571/p982575.png)

### **CNAME record**

Refer to the following figure to add a **CNAME** record.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3900271571/p982576.png)

### **MX record**

Refer to the following figure to add an **MX** record.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3900271571/p982577.png)

### **TXT record**

Refer to the following figure to add a **TXT** record.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3900271571/p982578.png)

### **PTR record**

Before adding a PTR record, you must configure a reverse lookup zone. For more information, see [Reverse lookup and PTR records](/help/en/dns/pvtz-reverse-parsing-and-ptr-records).

### **SRV record**

SRV records are used to identify which server is using a specific service, commonly found in directory management in Microsoft system.

-   Record Type: Select **SRV**.
    
-   Host Record: The format is **service name.protocol type**.
    
    For example: \_sip.\_tcp
    
-   Record Value: The format is **priority weight port target**, with each item separated by a space.
    
    For example: 0 5 5060 sipserver.example.com
    
-   TTL: Cache time. The smaller the value, the faster the record modification takes effect across regions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3900271571/p982579.png)
    

## Visual Editor

The Visual Editor mode supports complex multi-line, multi-record type traffic scheduling, making domain name resolution traffic routing clearer. The rules are as follows:

-   In this mode, the host record and TTL are set uniformly, meaning all records in the group have the same host record and TTL.
    
-   You can set the source line for multiple resolution queries at a time. By default, one line is added when adding a record. Add more lines by clicking the **\+ Query Source** button on the page.
    
-   Under the same line, you can add multiple record types such as A, AAAA, and CNAME, by clicking the **\+ Record Type** button on the page.
    
-   Under the same source and record type, you can add multiple record values by clicking the **+** button after the value box.
    

## **Procedure**

1.  Visit [Alibaba Cloud DNS - Private Zone](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Authoritative Zone**, and then click **User Defined Zones** on this tab.
    
3.  Find the target zone, click **Settings** in the **Actions** column of the target domain name.
    
4.  On the **Settings** tab, click **Add Record**, and select **Visual Editor Mode** in the dialog box.
    
5.  In the **Add Record** dialog box, configure the DNS record parameters and click **OK**.
    
6.  In the **Change Resource Record Confirmation** dialog box, verify the configurations, and click **OK**.
    
7.  On the **User Defined Zones** tab, click **Effective Scope** in the **Actions** column of the target domain name, and select a VPC.
    

### **Adding DNS records for standard zone**

**Note**

Standard zone domain names do not support custom lines and weight settings.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2318329961/p723222.png)

**Note**

-   When there are multiple A or AAAA records, all addresses are returned when a DNS query hits.
    
-   When multiple CNAME records are hit, only one CNAME record is returned each time.
    

### **Adding DNS records for acceleration zone**

The steps for adding records for acceleration zone domain names are the same as those for standard zone domain names. However, when configuring parameters, A and AAAA records support both round robin and weight modes. When set to weight mode, you can change the weight after the record value.

**Note**

-   CNAME records only have weight mode and support weight value adjustment.
    
-   In the round robin mode, all addresses are returned.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2318329961/p723221.png)

For more about supported record types and usage, see [Record types supported by private zone](/help/en/dns/pvtz-analysis-of-records-management/#6e243be78frfd).
