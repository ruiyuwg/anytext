If you use a domain name to accelerate a service, you must configure DNS to map the accelerated domain name to the CNAME address that is allocated by the Global Accelerator instance. This topic describes how to add a CNAME record for a domain name using Alibaba Cloud DNS.

## **Prerequisites**

You have created a standard Global Accelerator instance, and configured an acceleration area, a listener, and an endpoint group for the Global Accelerator instance. For more information, see the following topics:

-   [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances)
    
-   [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas)
    
-   [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners)
    
-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    

## Step 1: Obtain the CNAME of the domain name that you want to accelerate

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the Global Accelerator instance that you want to manage and click the instance ID.
    
3.  Click the **Instance Information** tab.
    
4.  In the **Basic Information** section, find **CNAME** and click **Copy** to the right of the CNAME value.
    
    ![cname](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6003035071/p83352.png)
    

## Step 2: Add a CNAME record

1.  Log on to the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/#/dns/domainList).
    
2.  If your domain name is not registered with Alibaba Cloud Domain Names, you must add your domain name to the Alibaba Cloud DNS console.
    
    **Note**
    
    If your domain name is not registered using Alibaba Cloud Domains, you must add your domain name to Alibaba Cloud DNS before you can configure a DNS record. For more information, see [Add a domain name](/help/en/dns/domain-management#topic-2035895). If your domain name is registered using Alibaba Cloud Domains, skip this step.
    
3.  On the **Public Zone** page, find the domain name that you want to manage and click **DNS Settings** in the **Actions** column.
    
4.  On the **DNS Settings** page, click **Add DNS Record**.
    
5.  In the **Add Record** panel, add a CNAME record based on the following information, and then click **OK**.
    
    For more information about configuring a CNAME record, see [CNAME record](/help/en/dns/pubz-add-parsing-record#e75b2ff9a3eie).
    
    **Configuration**
    
    **Description**
    
    **Record Type**
    
    Select **CNAME**.
    
    **Hostname**
    
    Enter the prefix of the accelerated domain name.
    
    -   If your accelerated domain name is `www.aliyun.com`, the host record is `www`.
        
    -   If your accelerated domain name is `aliyun.com`, the host record is `@`.
        
    -   If your accelerated domain name is `*.aliyun.com`, the host record is `*`.
        
    -   If your accelerated domain name is `mail.aliyun.com`, the host record is `mail`.
        
    
    **DNS Request Source**
    
    Keep the default value.
    
    **TTL**
    
    Indicates the cache time of DNS records on DNS servers. The smaller the value, the faster the modified records take effect globally.
    
    This topic uses the default value of 10 minutes.
    
    **Record Value**
    
    Paste the CNAME value that you copied in [Step 1: Obtain the CNAME address of the accelerated domain name](#section-3hx-e4l-3t7).
    

**Note**

-   If you want to return resolution results based on the region where a client resides, make sure that Alibaba Cloud DNS is upgraded to Enterprise Standard Edition or Enterprise Ultimate Edition. For more information, see the [Upgrade](/help/en/dns/renewal#section-pf7-cok-x5h) section of the Renewal and upgrade topic.
    
    After the upgrade is complete, you can change the default resolution line of an existing A record to a specific regional resolution line and add a CNAME record that points to the CNAME address assigned by the Global Accelerator instance.
    
-   If the backend service type of the endpoint is a custom domain name, the actual amount of time it takes for the DNS record to take effect depends on the following factors:
    
    -   The TTL value for DNS server caching: You can specify the value when you configure DNS records.
        
    -   The TTL value for GA caching: By default, GA obtains DNS records every 15 seconds.
        

## Step 3: Check whether the CNAME record takes effect

### **View the regions where the CNAME record takes effect**

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the target Global Accelerator instance and click **View DNS Records** in the **CNAME** column.
    
3.  On the **Network Detect Tool** page, you can view the CNAME resolution results.
    
    After you navigate to the **Network Detect Tool** page, the default detection points used to initiate network probes depend on the acceleration area configuration:
    
    -   If the acceleration area contains only regions in the Chinese mainland, the system uses the detection points in each region.
        
    -   If the acceleration area contains only regions outside the Chinese mainland, the system uses the detection points in each region.
        
    -   If the acceleration area contains regions inside and outside the Chinese mainland, or contains China (Hong Kong), the system uses all detection points.
        
    
    You can select the Internet service provider (ISP) and region to perform instant detection as needed.
    
    You can view the resolution result of each detection point. If the resolution result is the same as the accelerated IP address in the acceleration area, it indicates that the CNAME record takes effect in the region.
    

### **Check whether the CNAME record takes effect**

#### **Automated Authentication Using a Network Probe Tool**

1.  Click [Synthetic Tests](https://cloudmonitor.console.alibabacloud.com/disposableTest) to go to the Instant Detections page.
    
2.  On the DNS Tests tab, select an operator and a region, enter an accelerated domain name, and then click **Test Now**.
    
3.  In the **Probe Check Result** section below, click ![Filter.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8951935071/p731499.png) to the right of the **Detection Point City** column, enter the name of the accelerated region, and then click **Confirm**.
    
4.  View the detection result.
    
    If the resolution result for the detection point matches the CNAME value or accelerated IP address of Global Accelerator, it indicates that the CNAME configuration has taken effect.
    
    ![DNS生效检测 INTL.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4410625271/p746659.png)
    

#### Use a CLI

1.  Open Command Prompt on a client in the region where the access point is located.
    
    In this topic, the Alibaba Cloud Linux 3 system is used as an example.
    
2.  Run the ping command to ping the accelerated domain name.
    
    If the returned resolution result is the same as the CNAME value provided by Global Accelerator, the CNAME record has taken effect.![Verifying that the CNAME record has taken effect](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7003035071/p442850.png)
    

## **References**

-   To learn how to configure Global Accelerator to accelerate access to the backend service of a specific domain name, see [Accelerate access to the backend service of a specific domain name](/help/en/ga/getting-started/accelerate-transmission-of-network-traffic-destined-for-a-specified-domain-name).
    
-   For information about how to test the acceleration performance, see [Test the acceleration performance of GA](/help/en/ga/use-cases/use-the-network-dial-test-tool-to-test-the-acceleration).
