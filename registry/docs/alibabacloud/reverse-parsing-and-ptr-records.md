A forward DNS lookup maps a domain name to an IP address. A reverse DNS lookup maps an IP address to a domain name.

## **What is a reverse DNS lookup**

Multiple domain names can use the same IP address. A reverse DNS lookup finds the domain name associated with an IP address. However, traversing the entire DNS system to find a matching domain name for an IP address is not feasible. To solve this problem, RFC 1035 defines the Pointer (PTR) record. A PTR record maps an IP address to a domain name.

## **Configuration flow**

1.  Create a reverse lookup zone for the IP address network.
    
2.  Add a PTR record to the reverse lookup zone.
    

For example, if your network address range is `**192.168.0.1-192.168.0.255**`, which is part of the `**192.168.0.0/24**` class C IP address range, the corresponding reverse lookup zone is `**0.168.192.in-addr.arpa**`. If you add a PTR record for host **1** in the zone `**0.168.192.in-addr.arpa**` that points to `**www.example.com**`, a reverse DNS lookup for the IP address `**192.168.0.1**` resolves to `**www.example.com**`.

In a private network environment, you can manage the following reserved address ranges and create reverse lookup zones.

-   10.0.0.0 - 10.255.255.255
    
-   172.16.0.0 - 172.31.255.255
    
-   192.168.0.0 - 192.168.255.255
    

**Important**

To add a PTR record for a public IP address, see [What is a reverse DNS lookup](/help/en/dns/what-is-reverse-parsing).

## **Add a PTR record in internal DNS**

Follow these steps to add a reverse lookup domain (zone) for the **192.168.1.0/24** address range:

**Note**

The name of the reverse lookup zone for this address range is **1.168.192.in-addr.arpa**. The **.in-addr.arpa** suffix is a standard requirement.

1.  Go to [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **Authoritative Zone** page, select the **User Defined Zones** tab and click **Add Zone**.
    
3.  In the **Authoritative Zone** field, enter **1.168.192.in-addr.arpa** and submit the form.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4553164671/p1029478.png)
    
4.  On the **User Defined Zones** tab, find the newly added built-in authoritative domain, and in the Actions column, click **Settings**.
    
5.  Click **Add Record**. Add a **PTR** record, set the host to **1**, and point the record to the host `**host001.example.com**`.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7767329961/p723235.png)
    
6.  Submit the form.
    

## **Set the scope**

1.  On the **User Defined Zones** tab, find the target domain name. In the Actions column, click the **Effective Scope** button and select a VPC.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4553164671/p1030946.png)
