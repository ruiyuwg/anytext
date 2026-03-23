## What is DNSSEC

DNS Security Extensions (DNSSEC) helps prevent attacks such as DNS spoofing and cache pollution. It uses digital signatures to verify the authenticity and integrity of DNS response messages. This protects users from being redirected to malicious or unexpected addresses, increases trust in the Internet, and safeguards your core business.

## Important notes for using DNSSEC

1.  DNSSEC is available to all paid Alibaba Cloud DNS users, regardless of subscription plan.
    
2.  DNSSEC is not supported if you use independent DNS hosting for a subdomain.
    
3.  DNSSEC is not supported if you use the [Secondary DNS](/help/en/dns/secondary-dns-1/) feature.
    
4.  DNSSEC is not supported if your domain has a DNS record of type [ALIAS record](/help/en/dns/pubz-add-parsing-record#e0432576fegfw).
    
5.  If your paid DNS subscription expires and you no longer plan to use it, first delete the DS record at your domain name registrar, then disable DNSSEC in the Alibaba Cloud DNS console to avoid resolution failures.
    
6.  If DNSSEC is enabled and you transfer a domain between accounts—for example, from Account A to Account B—first delete the DS record at your domain name registrar, then disable DNSSEC in the Alibaba Cloud DNS console to avoid resolution failures.
    
7.  If DNSSEC is enabled and you transfer DNS resolution for a domain between accounts—for example, from Account A to Account B—first delete the DS record at your domain name registrar, then disable DNSSEC in the Alibaba Cloud DNS console to avoid resolution failures.
    
8.  If DNSSEC is enabled and you detach a domain, first delete the DS record at your domain name registrar, then disable DNSSEC in the Alibaba Cloud DNS console to avoid resolution failures.
    
9.  DNSSEC requires support from both your DNS hosting provider and your domain name registrar to take effect. Both Alibaba Cloud DNS and Alibaba Cloud domain registration services support DNSSEC.
    

## How to enable DNSSEC

1.  Log on to the [Alibaba Cloud DNS - Public Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative) page. Select the domain for which you want to enable DNSSEC, then choose More > **DNSSEC Settings**.
    
2.  On the DNSSEC Settings page, enable DNSSEC.
    
3.  Copy the DS record information, such as **Key Tag**, **Algorithm**, **Digest Type**, and **Digest**. Then add the DS record at your domain name registrar.
    
4.  If you use Alibaba Cloud as your domain name registrar, see the [Configure DNSSEC](/help/en/dws/user-guide/configure-dnssec-domain-name-system-security-extensions#concept-szx-dqd-3gb) document.
    

## How to test DNSSEC activation

You can use the [testing tool](https://dnsviz.net/) to run a test.

**Check whether DNSSEC is enabled**

For example, with dns-example.com, if the highlighted area does not show a **DS** record, DNSSEC is not enabled.

![未开启DNSSEC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7370169071/p332953.png)

**DNSSEC is active**

If **DS** appears at each level on the test page and no red error boxes are displayed, DS is enabled and active.

![DNSSEC已生效](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7370169071/p332954.png)

**DNSSEC is not active**

If the test page shows a red error box, DNSSEC is not active. Submit a ticket for troubleshooting.

![未生效报错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7370169071/p332955.png)

## How to disable DNSSEC

### **Step 1: Delete the DS record at your domain name registrar.**

**If your domain is registered with Alibaba Cloud:**

1.  Log on to the [Domain Names console](https://dc.console.alibabacloud.com/).
    
2.  On the Domain Names List page, click **Manage** in the Actions column for your target domain.
    
3.  In the navigation pane on the left, under **DNS Management**, click **DNSSEC Settings**, then click **Delete** next to the DS record.
    

### **Step 2: Disable DNSSEC in the Alibaba Cloud DNS console**

1.  Go to the [Alibaba Cloud DNS - Public Authoritative Zone](https://dnsnext.console.alibabacloud.com/authoritative) page. Select the domain for which you want to disable DNSSEC, then choose More > **DNSSEC Settings**.
    
2.  On the DNSSEC Settings page, disable DNSSEC.
    
    **Warning**
    
    Always complete Step 1 before Step 2. Otherwise, domain resolution may fail.
    

## **FAQ**

### **Does a yellow warning in DNSSEC validation affect my domain?**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7524912671/p1022812.png)

Yellow warnings do not affect DNSSEC functionality for your domain. Alibaba Cloud authoritative DNS uses intelligent resolution, so minor differences between the IP addresses returned by authoritative DNS servers and the glue address records are normal.
