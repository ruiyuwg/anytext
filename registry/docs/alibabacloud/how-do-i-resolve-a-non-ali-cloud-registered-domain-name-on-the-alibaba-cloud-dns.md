When migrating your domain's DNS service from another provider to Alibaba Cloud DNS, your primary concern is to prevent downtime for critical services like your website and email. This topic outlines a proven, systematic process that covers risk assessment, record migration, service cutover, verification, monitoring, and emergency rollback. Follow these steps to complete a safe and efficient migration while ensuring business continuity.

## Prerequisites

1.  **Check and disable DNSSEC**
    
    Check if your domain has [Domain Name System Security Extensions (DNSSEC)](/help/en/dns/pubz-dnssec) enabled. If it is enabled, you must first go to your domain registrar to delete the DS Record and disable DNSSEC. You can re-enable DNSSEC in the Alibaba Cloud Console after completing the migration. If your domain does not have DNSSEC configured, skip this step.
    
    ```
    # Use the dig command to check the DNSSEC status of your domain.
    # If the response includes an RRSIG record, DNSSEC is enabled.
    dig +dnssec yourdomain.com
    ```
    
2.  **Unlock your domain**
    
    Log in to your domain registrar's console. Check for and disable any domain update locks, such as `serverUpdateProhibited` or `clientUpdateProhibited`. Otherwise, you cannot modify the NS server addresses.
    
3.  **Export your existing DNS records**
    
    From your current DNS provider's console, export all DNS records for the domain you want to migrate. If your provider does not support batch export, you must manually create a file of your DNS records according to the format specified in the [DNS record template](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250705/xtxhwd/alidns_record.xlsx). For instructions on how to format different record types, see [Add a DNS record](/help/en/dns/pubz-add-parsing-record).
    
    **Important**
    
    Do not delete the records from your original DNS provider during the migration. For up to 48 hours, DNS queries may still be sent to your previous provider. We recommend waiting one week after the migration before deleting them.
    

## Procedure

### **Step 1: Purchase a** **Public Zone** **instance**

Purchase a **Public Zone** instance to provide stable, high-quality public DNS resolution for your domain.

1.  Go to the [Instance](https://dnsnext.console.alibabacloud.com/instances) page on the Alibaba Cloud DNS console and select the **Public Zone** tab.
    
2.  Click **Buy Now**.
    

You can also choose the free Public Zone service. However, it does not include an availability guarantee or resolution nodes outside Chinese mainland. We do not recommend it for production environments, but it is suitable for product evaluation.

### **Step 2: Add a zone**

1.  Go to [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative).
    
2.  On the **Public Zone** tab, click **Add Zone**.
    
3.  Enter the domain that you want to configure, and select the **Public Zone** instance that you created. For detailed parameter descriptions, see [Purchase and bind a domain name](/help/en/dns/pubz-instance-purchase-and-domain-name-binding).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2826294671/p988087.png)
    

### **Step 3: Import DNS records**

1.  **Verify the DNS record format:** Check your exported DNS record file to ensure it is formatted correctly. Check that special characters are properly escaped, Time to Live (TTL) values are appropriate, and no duplicate or conflicting records exist.
    
2.  **Import the DNS records**: Click the target domain name to go to the **Settings** page. Click **Import/Export** and upload your DNS record file. For the initial import, we recommend selecting **Full Update**.
    
3.  **Verify DNS resolution**
    
    Use the [Network Detect Tool](https://boce.aliyun.com/detect/dns?spm=a2c4g.11186623.0.0.7214523cpBySyb) to verify the records. Enter your domain name, specify the record type to test, and enter a system-assigned DNS server address in the DNS server field. Click Detect Now. If the resolved value matches the record in your imported file, it means your DNS records are active on Alibaba Cloud DNS.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727157671/p859627.png)
    
    Alternatively, you can use the following commands to check if the DNS records are active.
    
    ```
    dig @ns1.alidns.com yourdomain.com A
    dig @ns1.alidns.com yourdomain.com MX
    ```
    

### **Step 4: Change your NS server addresses**

1.  **Find the NS server addresses assigned by Alibaba Cloud DNS**
    
    1.  On the [Alibaba Cloud DNS - Public Zone](https://dnsnext.console.alibabacloud.com/authoritative) page, find your target domain.
        
    2.  Hover over the **DNS Server IP Address** column to see the **System Assigned NS Address**. These are the authoritative name server addresses that Alibaba Cloud has assigned to your domain.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7933784671/p1032127.png)
        
2.  **Change the NS servers at your registrar**
    
    Go to your domain registrar's website and update the domain's NS records to use the addresses provided by Alibaba Cloud DNS. The method for changing NS servers varies by registrar:
    
    -   [How to change NS servers for Tencent Cloud domains](/help/en/dns/pubz-method-of-modifying-dns-server-for-tengxun-domain-name)
        
    -   [How to change NS servers for Xinnet domains](/help/en/dns/pubz-new-network-domain-name-modify-dns-method)
        
    -   [How to change NS servers for DNS.COM domains](/help/en/dns/pubz-new-network-domain-name-modify-dns-method)
        
    -   [How to change NS servers for Huawei Cloud domains](/help/en/dns/pubz-method-of-modifying-dns-servers-for-huawei-cloud-domain-names)
        
    -   [How to change NS servers for Baidu Smart Cloud domains](/help/en/dns/pubz-baidu-intelligent-cloud-domain-name-modification-dns-server-method)
        
    -   [How to change NS servers for West.cn domains](/help/en/dns/o1bujg)
        
    
    **Important**
    
    Change your domain's NS servers during off-peak hours. Continuously monitor your resolution traffic. If any resolution errors occur, immediately revert to your previous NS server addresses. If you roll back, preserve the configuration for troubleshooting before re-attempting the migration.
    

### **Step 5: Analyze traffic**

1.  Use the **Public Zone** feature in Alibaba Cloud DNS to check if resolution traffic is successfully switching to the **Public Zone**. In the Public Zone Traffic Analysis, use the **System Assigned NS Address** feature to see which regional ISPs' local DNS servers have started sending queries to Alibaba Cloud. Monitor the query data for at least 10 minutes. A gradual increase in query volume indicates that the migration is proceeding as expected. For more information, see [Domain resolution statistics](/help/en/dns/pubz-domain-name-resolution-statistics).
    
2.  Use your previous provider's analytics tools to monitor the corresponding decrease in resolution traffic.
    
3.  Monitor your applications and services for any anomalies.
    

### **Step 6: Wait for propagation (up to 48 hours)**

During the 48-hour global DNS propagation period, some DNS queries will still be directed to your old provider. Do not shut down your old DNS service during this time. Avoid adding or modifying DNS records. If a record change is unavoidable, you must make the change at both your old and new DNS providers to ensure consistency.

### **Step 7: Clean up old DNS records (optional)**

We recommend waiting at least one week after the migration to Alibaba Cloud is complete before deleting the DNS records from your previous provider.
