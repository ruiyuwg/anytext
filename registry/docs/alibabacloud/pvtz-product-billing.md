## **I. Billing methods**

**Private Zone** uses a **pay-as-you-go** billing method. You are charged for **Authoritative Zone**, **Cache**, **Forward Zone**, **Inbound Endpoint**, and **Traffic Analysis**. Bills are generated daily. You can view the charges for the previous day on the current day.

## **II. Billable items**

### **1\.** **Authoritative Zone**

**Billable item**

**Billing standard**

**Billing cycle**

**Billing trigger condition**

**Billing description**

Number of **User Defined Zones** (billing conversion)

USD 0.015/domain/day

Daily

A **User Defined Zones** is added to **Authoritative Zone**.

The total number of **Authoritative Zone** zones under your account is calculated. The actual number of billable domain names is converted based on the number of DNS records. The conversion logic is as follows:

-   **Acceleration region (default)**: If the number of DNS records is 1,000 or less, the zone is counted as one domain name. If the number of DNS records is greater than 1,000, the number of billable domain names is calculated by rounding up the result of **Actual number of DNS records / 1,000**. The default quota is 100,000 DNS records per zone. To increase the quota, submit a ticket.
    
-   **Regular region (legacy)**: If the number of DNS records is 100,000 or less, the zone is counted as one domain name. If the number of DNS records is greater than 100,000, the number of billable domain names is calculated by rounding up the result of **Actual number of DNS records / 100,000**. The default quota is 100,000 DNS records per zone. To increase the quota, submit a ticket.
    

Number of DNS queries for **User Defined Zones**

USD 0.004/10,000 requests

Daily

DNS queries are made to a **Authoritative Zone** zone.

-   Acceleration region: The number of queries is based on the queries directly initiated by devices. Queries within the cloud are not affected by the TTL.
    
-   Regular region: The number of queries is based on the number of origin-pull DNS queries that are sent after the TTL expires.
    

### **2\.** **Cache**

**Billable item**

**Billing standard**

**Billing cycle**

**Billing trigger condition**

**Billing description**

Number of **Domain Name**

USD 0.015/domain/day

Daily

A **Domain Name** is added.

You are charged for the total number of **Domain Name** under your account. The cache reserve feature uses the exact-match domain name pattern.

Number of **Clear Cache**

USD 15/operation

Daily

A **Clear Cache** is manually triggered for an added **Domain Name**.

You are charged for the total number of times the **Clear Cache** feature is used under your account.

### **3\.** **Forward Zone**

**Billable item**

**Billing standard**

**Billing cycle**

**Billing trigger condition**

**Billing description**

Number of **Source IP Addresses of Outbound Traffic**

USD 0.15/unit/hour

Hourly

An **Outbound Endpoint** is added.

You are charged for the total number of **Source IP Addresses of Outbound Traffic** under your account.

Number of DNS queries forwarded by **Outbound Endpoint**

USD 0.004/10,000 requests

Daily

DNS queries are forwarded to external DNS systems through an **Outbound Endpoint**.

You are charged for the total number of DNS queries forwarded by all **Outbound Endpoint** under your account.

### **4\.** **Inbound Endpoint**

**Billable item**

**Billing standard**

**Billing cycle**

**Billing trigger condition**

**Billing description**

Number of **Inbound service IP addresses**

USD 0.15/IP/hour

Hourly

An **Inbound Endpoint** is added.

You are charged for the total number of **Inbound service IP addresses** under your account.

Number of DNS queries received by **Inbound Endpoint**

USD 0.004/10,000 requests

Daily

DNS queries are received by an **Inbound Endpoint**.

You are charged for the total number of DNS queries received by all **Inbound Endpoint** under your account.

### **5\.** **Traffic Analysis**

**Billable item**

**Billing standard**

**Billing cycle**

**Billing trigger condition**

**Billing description**

Number of parsing log analysis entries

USD 0.015/10,000 entries

Daily

Traffic analysis feature enabled

A log entry is recorded for each DNS query. You are charged for the total number of log entries that are analyzed under your account.

(1) Calculation rule for total number of parsing log entries: Total number of parsing log entries = global traffic resolution requests + authoritative traffic resolution requests + cache traffic resolution requests + forwarding traffic resolution requests + recursive traffic resolution requests

(2) After enabling the traffic analysis feature, the parsing log collection feature is enabled by default, and no separate fee is charged for parsing log collection

**Note**

**Global traffic resolution requests**: The number of domain resolution requests directly initiated by all ECS/containers and other terminals in your internal network × 2. One DNS query request includes both request logs and acknowledgement logs.

Number of **Private Zone** **traffic resolution queries**: The number of DNS queries that hit the **Private Zone** module (including acceleration regions and regular regions) and receive a response.

**Cache traffic resolution requests**: The number of DNS resolution requests that hit the cache module and obtain resolution results.

**Forwarding traffic resolution requests**: The number of DNS resolution requests that hit the forwarding module and obtain resolution results × 2, including forwarding module acknowledgement logs and external DNS acknowledgement logs.

**Recursive traffic resolution requests**: The number of DNS resolution requests that hit the recursive module and obtain resolution results.

## **III. Examples**

### **Scenario 1:** **Authoritative Zone**

Account A has two **User Defined Zones**: example.com and example.aliyundoc.com. example.com is in an acceleration region and has 5,050 DNS records. example.aliyundoc.com is in a regular region and has 105,000 DNS records.

In one day, the domain example.aliyundoc.com has 100,000 DNS origin queries, and the domain example.com receives 200,000 DNS query requests from terminal devices.

-   example.com is an acceleration area domain, and 5,050 resolution records are converted to 6 domains for calculation. example.aliyundoc.com is a regular area domain, and 105,000 resolution records are converted to 2 domains for calculation. So Account A is billed for 8 domains.
    
-   Therefore, the daily usage fee for Account A is the sum of user domain fees + regular area domain origin resolution request fees + acceleration area domain request fees:
    
    USD 0.24 = USD 0.12 (8 × USD 0.015/domain) + USD 0.04 (10 × USD 0.004/10,000 requests) + USD 0.08 (20 × USD 0.004/10,000 requests).
    

**Note**

-   **Acceleration region (default):**
    
    You are charged based on the number of DNS queries initiated by devices, such as ECS instances and containers. The billing is not affected by the TTL value. We recommend that you enable Name Service Cache Daemon (NSCD) for your ECS instances to reduce the number of DNS queries that result from the absence of a local cache.
    
-   **Regular region:**
    
    You are charged based on the actual number of origin requests for **User Defined Zones**.
    
    For example: If the TTL of domain www.example.com is set to 30 seconds, when an internal terminal accesses this domain, theoretically all requests within 30 seconds will hit the TTL cache, and after the 30-second TTL expires, DNS will make 1 origin query. So in 10 minutes, the number of origin queries for this domain is 10 × 60/30 = 20 times. You can view the number of origin requests on the request analysis page in the console.
    
    -   The longer the TTL setting time, the slower the frequency of DNS server origin requests, the longer the domain change takes effect, and the less the corresponding charge.
        
    -   The shorter the TTL setting time, the faster the frequency of DNS server origin requests, the faster the domain change takes effect, and the more the corresponding charge.
        

**Note**

**Because internal DNS provides services through clusters, DNS query requests are distributed across multiple servers in the cluster. Only when each server in the cluster has a cache can it hit the cache 100% without making origin requests. Therefore, when you compare test data with the data on the console's request analysis page, it is normal for the number of origin queries displayed on the console to be larger than the data you calculated theoretically, especially when the request volume is not high.**

### **Scenario 2:** **Cache**

Account B has three **Domain Name**: www.example.com, test.example.com, and api.example.com. You update the DNS records because of an urgent business adjustment. To make the updated DNS records of the **Domain Name** take effect immediately, you perform a **Clear Cache** for www.example.com and test.example.com.

-   A **Clear Cache** is performed once for www.example.com and once for test.example.com. This is counted as two **Clear Cache**.
    
-   The daily fee for Account B is the sum of the **Domain Name** fee and the **Clear Cache** fee: USD 30.045 = USD 0.045 (3 × USD 0.015/FQDN) + USD 30 (2 × USD 15/purge).
    

### **Scenario 3:** **Forward Zone**

Account C adds a forwarding rule for the domain name example.top and configures two **Source IP Addresses of Outbound Traffic**. In one day, the **Outbound Endpoint** forward 1 million DNS queries for this domain name.

-   The daily fee for Account C is the sum of the **Source IP Addresses of Outbound Traffic** fee and the **Outbound Endpoint** forwarded DNS query fee: USD 7.6 = USD 7.2 (2 × 24 hours × USD 0.15/IP address/hour) + USD 0.4 (100 × USD 0.004/10,000 queries).
    

### **Scenario 4:** **Inbound Endpoint**

Account D adds two **Inbound service IP addresses**. In one day, the **Inbound Endpoint** receive 1 million DNS queries.

-   The daily fee for Account D is the sum of the **Inbound service IP addresses** fee and the **Inbound Endpoint** received DNS query fee: USD 7.6 = USD 7.2 (2 × 24 hours × USD 0.15/IP address/hour) + USD 0.4 (100 × USD 0.004/10,000 queries).
    

### **Scenario 5:** **Traffic Analysis**

Account E enables **Traffic Analysis** and generates 1 million log entries in one day.

Therefore, the daily usage fee for Account E is the parsing log fee: USD 1.5 = 100 × USD 0.015/10,000 entries.

## **IV. Overdue payments**

Alibaba Cloud DNS provides service suspension protection, which lets you continue using Alibaba Cloud services within a specific credit limit or for a certain period. Your existing pay-as-you-go services, purchased resource plans, and subscription resources can continue to be used. The service suspension process is initiated only if your usage exceeds the protection scope. For more information, see [Pay-as-you-go service suspension protection](/help/en/user-center/grace-period).
