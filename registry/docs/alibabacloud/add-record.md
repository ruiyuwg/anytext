To associate a private zone with a Virtual Private Cloud (VPC), you must first create a Domain Name System (DNS) record for the private zone. In the VPC with which the private zone is associated, the private zone record overrides the DNS record for the same domain name on the public network.

### Procedure

To create a DNS record for a private zone, follow these steps:

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.aliyun.com/dns/). In the left-side navigation pane, click **PrivateZone**.
    
2.  On the PrivateZone page that appears, find the target private zone and click the zone name to go to the Resolution Settings page.
    
3.  On the **Resolution Settings** page, click **Add Record**.In the dialog box that appears, set the parameters.  
    ![新增记录-1](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/64635/intl_en/1590373010842/%E6%96%B0%E5%A2%9E%E8%AE%B0%E5%BD%95.jpg)
    

For more information about the record types supported by PrivateZone and how to use the records, see [Record types supported by PrivateZone](/help/en/privatezone/latest/record-type-list).

### Examples

#### Create an A record

To create an **A** record for a private zone, see the configurations in the following figure.  
![A](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/64635/intl_en/1541997621468/A.jpg)

#### Create a CNAME record

To create a **CNAME** record for a private zone, see the configurations in the following figure.  
![cname](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/64635/intl_en/1541997641054/cname.jpg)**Note**: You cannot create two or more CNAME records with the Resource Records parameter set to the same value. Nor can other types of records be created with the Resource Records parameter set to the same value as the CNAME record.

#### Create an MX record

To create an **MX** record for a private zone, see the configurations in the following figure.  
![MX](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/64635/intl_en/1541997662006/MX.jpg)

#### Create a TXT record

To create a **TXT** record for a private zone, see the configurations in the following figure.  
![txt](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/64635/intl_en/1541997697533/TXT.jpg)

#### Create a PTR record

To create a pointer (PTR) record, you must first configure a reverse lookup zone. For more information, see [reverse lookup and PTR records](/help/en/privatezone/latest/reverse-lookup-and-ptr).
