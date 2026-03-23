## Overview

You can add multiple domain names that are not registered with Alibaba Cloud to your Alibaba Cloud DNS domain name list in bulk. Domain names that are already registered with Alibaba Cloud are added to the list automatically.

This feature includes two methods: **Manual** and **Import by File**. If a domain name that you want to add is already managed by another Alibaba Cloud account, you can use the [Retrieve Domain Names](#h2-u627Eu56DEu57DFu540D4) feature to retrieve the domain names in bulk.

## **Manual**

1.  Log on to the [Alibaba Cloud DNS - Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative) console.
    
2.  Click the **Batch Operation** button. By default, you are directed to the **Domain Name** > **Add Zones** tab.
    
3.  Select **Manual**. In the text box, enter the domain names that are not registered with Alibaba Cloud, and then click the button to submit.
    
4.  After you submit the batch job, go to the **Batch Operation Logs** tab. Click **Download Log Details** to view the detailed results of the task execution.
    

## **Import by File**

1.  Log on to the [Alibaba Cloud DNS - Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative) console.
    
2.  Click the **Batch Operation** button. By default, you are directed to the **Domain Name** > **Add Zones** tab.
    
3.  Select **Import by File**. Click [**Download Template**](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/87683/cn_zh/1561354991788/alidns_batch_domain_template.xlsx) and fill out the template by following the sample format.
    
4.  Click the **Upload File** button, and then select and upload the completed file.
    
5.  After you submit the batch job, go to the **Batch Operation Logs** tab. Click **Download Log Details** to view the detailed results of the task execution.
    

## **Retrieve Zone Name**

When you add a domain name that is not registered with Alibaba Cloud, you may find that it is already managed by another Alibaba Cloud account. You can use the retrieve domain names feature to move the domain names to your account.

### **Rules**

-   This feature applies only to domain names that are registered but **not registered with Alibaba Cloud**. You cannot retrieve unregistered domain names.
    

**Warning**

After you retrieve a domain name, its existing DNS records are deleted. If the domain name was associated with a paid Alibaba Cloud DNS plan, this association is also removed.

### **Method**

1.  Log on to the [Alibaba Cloud DNS - Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative) console.
    
2.  Click the **Batch Operation** button. By default, you are directed to the **Domain Name** > **Add Zones** tab.
    
3.  Select **Retrieve Zone Name**.
    
4.  Enter the domain names you want to retrieve and add a TXT record for each domain name.
    
5.  Click the **Retrieve** button to submit the batch retrieval job.
    
6.  After you submit the batch job, go to the **Batch Operation Logs** tab. Click **Download Log Details** to view the detailed results of the task execution.
