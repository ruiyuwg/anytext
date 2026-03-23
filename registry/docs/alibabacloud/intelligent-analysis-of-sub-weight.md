Weighted DNS resolution for private zones lets you configure multiple IP addresses or domain names for the same host record and DNS query source. When the system responds to a DNS query, it returns different DNS records based on preset weights. This feature distributes traffic across different servers to achieve load balancing.

## **Prerequisites**

-   Weight configuration is supported only for domains in the acceleration zone of **Private Zone**. It is not supported for domains in the standard zone of **Private Zone**.
    
-   The domain name must have multiple A, AAAA, or CNAME records for the same host record and DNS query source.
    

## **Limits**

**Category**

**Support**

**Not supported**

**Private Zone** Domain Name

Accelerated region

Normal region

Record type

A, AAAA, and CNAME records.

Other record types.

DNS record limit

100 items

Not applicable.

Weight value rules

You can set the weight value to an integer from 0 to 100. The default weight ratio is 1:1. If you set the weight value to 0, **Private Zone** does not return the value of the corresponding DNS record. If the weight values of all records are set to 0, the values of all DNS records are returned.

Not applicable.

Analyze the request source

Default, Alibaba Cloud, and custom lines.

**Note**

The weights for different DNS query source lines are independent of each other.

DNS records from different DNS query sources.

**Note**

For the same host record and DNS query source:

-   You can only set the weight pattern when the record value contains multiple domain names.
    
-   If the record value contains multiple IPv4 addresses, you can configure a weight-based load balancing policy.
    
-   If a record value contains multiple IPv6 addresses, you can set a weighted load balancing policy.
    

## **Procedure**

This example shows how to set weights for multiple A records.

1.  Go to [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Authoritative Zone** > **User Defined Zones**, and then find the target domain name.
    
3.  Click the **Settings** button in the Actions column.
    
4.  On the **Settings** page, click **Add Record**.
    
5.  In the **Add Record** dialog box, set the **Record Values Load Strategy** to **Ratio**. Then, in the **Record Values** section, configure multiple record values and set their weights.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5900271571/p982587.png)
    

**Note**

By default, the polling load balancing policy returns all DNS records. However, if multiple CNAME records exist, only one is returned at a time.
