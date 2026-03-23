This topic describes how to modify, delete, pause, enable, import, and export DNS records. It also describes how to group and search for records.

## Modify DNS records

If your public network services change, you must modify the DNS records for your domain name.

**Modify a record**: You can modify the host, record type, DNS request source, record value, TTL, and weight (acceleration region name) of a single DNS record. This method provides greater flexibility.

**Edit Record Set**: You can modify the TTL, load balancing policy, weight, and record value in batches for records that have the same record type, host, and DNS request source.

## **Revision History**

1.  On the [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/authoritative) page, click the **Settings** button for the target domain name.
    
2.  On the **Settings** tab, click the **Edit** button for the target DNS record.
    
3.  In the **Edit Record** dialog box, modify the parameters.
    

## **Edit Record Set**

1.  On the [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/authoritative) page, click the **Settings** button for the target domain name.
    
2.  On the **Settings** tab, click the **Edit Record Set** button for the target DNS record.
    
3.  In the **Edit Record** dialog box, set the **TTL**, **Record Values Load Strategy**, and **Record Values**.
    
4.  In the dialog box that appears, confirm the changes.
    

## **Delete DNS records**

**Warning**

Deleting a record immediately makes the corresponding service unavailable. Proceed with caution. Before you delete any records, export and back up your DNS data.

1.  On the [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/authoritative) page, click the **Settings** button for the target domain name.
    
2.  On the **Settings** tab, click the **Delete** button for the target DNS record.
    

## **Pause and enable records**

-   Pause a record: This operation pauses a DNS record in Alibaba Cloud DNS and takes effect immediately. Paused records cannot be queried. However, due to the cache on local DNS servers, a paused record might still be resolved for a short period. This period is determined by the TTL value of the record.
    
-   Enable a record: This operation enables a DNS record in Alibaba Cloud DNS and takes effect immediately.
    

**Note**

Some carriers may adjust the cache policies of their local DNS servers. This may cause a paused DNS record to remain resolvable for a long time. This behavior is controlled by the carrier and is not controlled by Alibaba Cloud.

1.  On the [Alibaba Cloud DNS](https://dnsnext.console.alibabacloud.com/authoritative) page, click the **Settings** button for the target domain name.
    
2.  On the **Settings** page, find the target DNS record.
    
3.  Click the toggle switch in the **Status** column to pause or enable the record.
    

## Import records

You can import a file that contains DNS data into the Alibaba Cloud DNS console.

### **Rule description**

-   **Incremental Update**: Existing DNS records are preserved, and new DNS records are added.
    
-   **Full Update**: All existing DNS records are deleted, and then the DNS records from the file are added.
    

### **Setting method**

1.  On the **Settings** page, click **Import/Export**.
    
2.  Select an update method and upload the file.
    

### **Template description**

The uploaded file must be in the .xls or .xlsx format. You can log on to the Alibaba Cloud DNS console to **download the template**. You must format the DNS data that you export from other platforms according to the rules in the template.

1.  The template provides examples of how to configure common records.
    
2.  The examples in the template are for reference only. You must delete these examples before you upload the file.
    
3.  For more information about how to specify a DNS line in the template, see [DNS line enumeration](/help/en/dns/pubz-resolve-line-enumeration/).
    
4.  The template supports importing remarks for records. Remarks are limited to 50 characters. Any content that exceeds this limit is not imported.
    
5.  The template supports importing the status of records. You can set the status to **Paused** or **Enabled**. If you do not specify a status, the record is set to **Enabled** by default.
    

## Export records

1.  On the **Settings** page, click the download icon.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7637662571/p986033.png)
    
2.  In the **Export Records** dialog box, select an export format and export the DNS records.
    

## **DNS record grouping**

If a domain name has multiple DNS records, you can group them to make them easier to find and maintain. For example, you can group records by type, such as A records, CNAME records, and MX records.

1.  On the **Settings** page, select the DNS records that you want to group, and then click **Change Group**.
    
2.  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7637662571/p986043.png)
    
3.  In the dialog box that appears, select an existing group or create a new one.
    

## **DNS record search**

If a domain name has multiple DNS records, you can quickly search for them by **Hostname**, **Record Type**, **Query Source**, **Record Value**, or **Status**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7637662571/p986046.png)
