## **1\. Access control**

### **1.1 Authentication**

DataHub supports multiple identity types, including Alibaba Cloud accounts, RAM users, and RAM roles. It also supports authentication using AccessKey ID and AccessKey Secret, Multi-Factor Authentication (MFA), and delegated authorization through [Security Token Service (STS)](/help/en/maxcompute/security-and-compliance/sts-authorization).

See also: [What is RAM?](/help/en/ram/product-overview/what-is-ram), [AccessKey pair management](/help/en/ram/user-guide/accesskey-pair-management/), [Overview](/help/en/ram/user-guide/ram-role-overview), and [What is STS?](/help/en/ram/user-guide/what-is-sts)

### **1.2 Authorization**

DataHub is integrated with Resource Access Management (RAM) to support resource-level authorization for projects, topics, and subscriptions. By using RAM, you can precisely control which resources each account can access and what operations they can perform, enabling least-privilege access management.

**Resource**

**Description**

Project

acs:dhs:$region:$accountid:projects/$projectName

Topic

acs:dhs:$region:$accountid:projects/$projectName/topics/$topicName

Subscription

acs:dhs:$region:$accountid:projects/$projectName/topics/$topicName/subscriptions/$subId

Supported security conditions:

**Condition**

**Function**

**Valid values**

acs:SourceIp

Specify the IP address range.

Standard IP addresses. The asterisk (\*) wildcard is supported.

acs:SecureTransport

Specify whether the protocol is HTTPS.

true/false

acs:MFAPresent

Specify whether MFA is enabled.

true/false

acs:CurrentTime

Specify the access time.

ISO 8601 format

For more information, see [Policy Management](https://www.alibabacloud.com/help/en/ram/user-guide/policy-management/?spm=a2c63.p38356.help-menu-28625.d_2_3.575f6389emrzct) and [Access control](/help/en/datahub/access-control).

### **1.3** IP whitelist

DataHub supports the use of RAM to restrict access from source IP addresses and source VpcIds. You can also apply IP and VpcId restrictions to AccessKeys. IPv6 is not currently supported.

For more information, see [Policy elements](/help/en/ram/policy-elements) and [Restrict an AccessKey pair with network ACL policies](/help/en/ram/user-guide/accesskey-network-access-restriction-policy).

## 2\. Data integrity, confidentiality, and availability

### **2.1** Data encryption in transit

DataHub provides both public and VPC endpoints. The VPC network uses Alibaba Cloud's dedicated network tunnels. When connecting to DataHub through client SDKs or OpenAPI, you must use HTTPS TLS v1.2 encryption protocol. This prevents data from being intercepted or tampered with in plaintext during transmission.

For more information, see [DataHub domain names](/help/en/datahub/product-overview/endpoints).

### **2.2** Data storage integrity and confidentiality

DataHub uses the distributed file system to automatically create multiple replicas (three by default) of stored data. These replicas are distributed across different physical machines and racks to prevent data loss from a single point of failure, ensuring data durability and integrity.

Data is stored in the Apsara Distributed File System, which provides a flat, linear storage space. This space is divided into chunks. Each chunk has three replicas stored on different nodes across the cluster according to a specific policy.

This strategy prevents data from becoming unavailable due to the failure of a single server or rack. All user operations, such as adding, modifying, or deleting data, are synchronized across all three replicas to ensure data integrity and consistency. When a user deletes data, the storage space is reclaimed, access from other users is prohibited, and the data is erased to ensure it cannot be restored.

## 3\. Operability and observability

### **3.1 Supported** monitoring **metrics**

You can view multiple metrics in the console, including read/write QPS, RPS, throughput, throughput (Uncompressed), latency, and failures. Historical traffic trends are also available.

All metric data is integrated with CloudMonitor and can be directly retrieved through the CloudMonitor API.

**Name**

**Metric**

readMetric

Data Consumption Requests per Second(count)

ReadThroughput(KiB)

ReadRawThroughput(KiB)

ReadFails(count)

ReadRps(count)

ReadLantency(us)

writeMetric

WriteQps(count)

WriteThroughput(KiB)

WriteRawThroughput(B)

WriteFails(count)

WriteRps(count)

WriteLantency(us)

Subscription consumption

consume record stacked (count)

consume delay time(s)

subscription delay time(s)

### **3.2 Supported alert types**

For all metrics integrated with CloudMonitor, you can configure corresponding alarms. For example, you can set an alarm to trigger when throughput exceeds a specified threshold. You can also configure threshold alarms for consumption latency and consumption backlog.

For more information, see [CloudMonitor alerting](/help/en/datahub/user-guide/configure-monitoring-and-alerting-in-cloudmonitor).

### **3.3** Audit logs

DataHub is integrated with Alibaba Cloud ActionTrail.
