When you encounter abnormal situations such as website inaccessibility or DNS records not taking effect, you can use the following methods to first check the domain name status, and then troubleshoot the effectiveness of DNS records.

## Use dig/nslookup commands for queries

The commonly used command query methods are dig (detailed information, suitable for debugging) or nslookup (supported by Windows by default).

**Important**

Determination method: If the result returned by the DNS query is consistent with what you set in Alibaba Cloud DNS, it means the resolution has taken effect.

If they are inconsistent, check the cache time. If the cache has not expired, wait until the cache expires before testing again.

If the cache has expired and the results are still inconsistent, see [Quick troubleshooting for ineffective resolution](/help/en/dns/pubz-quick-troubleshooting-of-problems-not-effective).

### **Dig command**

**1\. The most commonly used query command**

**Note**

Command: dig your domain name (Example: dig example.com)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917534.png)

**2\. Query according to record type, such as MX, CNAME, NS, PTR, etc., just add the type after the command.**

**Note**

Command: dig your domain name record type (Example: dig example.com NS)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917666.png)

Example of a scenario where resolution is not effective or no resolution record is set (Example: dig example.com CNAME).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917538.png)

**3\. Command to test whether resolution is effective by specifying the domain name DNS server. The following examples demonstrate how to check if resolution is effective using Alibaba Cloud DNS servers and public DNS servers.**

**Note**

Alibaba Cloud DNS server command: dig your domain name @ns1.alidns.com (Example: dig example.com @ns1.alidns.com)

Public DNS server command: dig your domain name @223.5.5.5 (Example: dig example.com @223.5.5.5)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917713.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917709.png)

**4\. Use** `**dig +trace**` **parameter. After using this parameter, the process of querying from the root domain level by level will be displayed. The trace query can show the addresses of the authoritative servers for the root domain, top-level domain, and primary domain name, along with their respective return results, which is very helpful for tracking problems in DNS resolution.**

**Note**

Command: dig <your domain name> +trace (Example: dig example.com +trace)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917774.png)

**5\. Obtain DNS egress IP by querying a special domain name to return the client's egress IP (i.e., the public IP of the local DNS server), confirming the real request source address after NAT or proxy (affecting CDN scheduling).**

**Note**

Command: dig +short TXT whoami.ds.akahelp.net

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917794.png)

**6\. Query the DNS servers used by a domain name.**

**Note**

Command: dig ns your domain name (enter the primary domain name here)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917802.png)

**7\. You can determine the accuracy of intelligent resolution scheduling by specifying the client IP to query the resolution address returned by the authoritative DNS.**

**Note**

Command: dig @authoritative DNS server domain name +subnet=specified client IP (Example: dig @ns1.alidns.com example.com +subnet=10.10.10.10)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917819.png)

### **Nslookup command**

**1\. View local DNS resolution results.**

**Note**

Command: nslookup <your domain name> (Example: nslookup example.com)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917887.png)

**2\. Specify public DNS to check resolution effectiveness.**

**Note**

Command: nslookup your domain name public DNS (Example using Alibaba Cloud public DNS server: nslookup example.com 223.5.5.5)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917885.png)**3\. Query according to record type, such as MX, CNAME, NS, PTR, etc.**

**Note**

Command: nslookup -type=record type your domain name (Example: nslookup -type=NS example.com)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917882.png)

**4\. View the resolution results of a domain name on a specified authoritative server.**

**Note**

Command: nslookup your domain name authoritative server (Example: nslookup example.com ns1.alidns.com)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2790010571/p917890.png)
