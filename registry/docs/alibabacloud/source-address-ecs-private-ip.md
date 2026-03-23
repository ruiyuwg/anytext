After you create an SNAT entry for a NAT Gateway and traffic flows through the gateway, SNAT sessions are recorded as logs to support traceability and monitoring.

## How it works

### **Log collection and delivery mechanism**

Session logs capture SNAT sessions and write them to Simple Log Service (SLS). Each session log records a 5-tuple network flow within a time window of approximately 10 minutes. During this period, the session log service aggregates the data and then delivers it to your SLS project. Data delivery typically completes within 5 minutes.

-   Because session logs follow a best-effort delivery model, logs may arrive later than expected. Network transmission delays or SLS processing delays may prevent 100% of sessions from being delivered.
    
-   Session log collection occurs outside the network traffic path and **does not affect** the network throughput or latency of NAT Gateways.
    

### **Difference between session logs and flow logs**

Both VPC flow logs and NAT Gateway session logs record network traffic that passes through a NAT Gateway:

-   VPC flow logs: Capture each packet flowing through an Elastic Network Interface (ENI) at the network layer, in each direction. Use them to troubleshoot network connectivity or security policy issues.
    
-   Session logs: Record NAT sessions as single units. Each log entry aggregates the private IP address, NAT-translated address, public IP address, and bidirectional traffic for one session. Use them to audit public network access or analyze SNAT port usage trends.
    

#### **Example scenario**

An ECS instance in a VPC (private IP `172.16.20.21`) accesses a public server `106.XX.XX.203:12180` using SNAT on a NAT Gateway. The NAT Gateway translates the ECS source address to `172.16.10.13:48155`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9006612771/CAEQUxiBgICrxKb15BkiIDg1YjFjZDIxZjIyYzQ3ODU4YjI3MDdmYjIwYWFlZjZl5048749_20250410180207.517.svg)

**VPC flow log — 4 entries (**[Full list of flow log fields](/help/en/vpc/vpc-flow-logs#58f7eb84c7jge)**)**

**NAT session log — 1 entry (**[Full session log format description](#1f3da47df603b)**)**

```
①  ECS → NAT Gateway (before address translation)
    srcaddr: 172.16.20.21    srcport: 47176
    dstaddr: 106.XX.XX.203   dstport: 12180
    direction: in  bytes: 487  packets: 6

②  NAT Gateway → Internet (after address translation)
    srcaddr: 172.16.10.13    srcport: 48155
    dstaddr: 106.XX.XX.203   dstport: 12180
    direction: out bytes: 487  packets: 6

③  Internet → NAT Gateway (response arrives)
    srcaddr: 106.XX.XX.203   srcport: 12180
    dstaddr: 172.16.10.13    dstport: 48155
    direction: in  bytes: 449  packets: 4

④  NAT Gateway → ECS (reverse translation)
    srcaddr: 106.XX.XX.203   srcport: 12180
    dstaddr: 172.16.20.21    dstport: 47176
    direction: out bytes: 449  packets: 4
```

```
# Source address (ECS private IP)
pri_ip: 172.16.20.21       pri_port: 47176
# NAT address translation
nat_ip: 172.16.10.13       nat_port: 48155
# Destination address (EIP)
pub_ip: 106.XX.XX.203      pub_port: 12180
# Traffic from VPC side
bytes_from_vpc: 417        pkts_from_vpc: 6
# Traffic from Internet side
bytes_from_pub: 421        pkts_from_pub: 4
```

## **Applicability**

-   You cannot enable session logs for pay-by-specification NAT Gateways (no longer available for purchase).
    
-   The NAT Gateway and the Simple Log Service project must be in the same region.
    
-   Session logs do not capture DNAT sessions.
    

## Billing

You are not charged for generating session logs. However, SNAT sessions captured by session logs are stored in Simple Log Service. You are charged for storage and retrieval in Simple Log Service. For more information, see [Billing of Simple Log Service](/help/en/sls/billable-items).

## **Configure session logs**

### **Start session logs**

1.  Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat/ap-southeast-1/nats). In the top navigation bar, select the region where the NAT Gateway resides.
    
2.  In the navigation pane on the left, click **Internet NAT Gateway** or **VPC NAT Gateway**. Find the NAT Gateway and click its ID.
    
3.  On the **Monitoring and Logging** > **Session Log** tab, click **Enable Session Log**.
    
    Select a Project and Logstore: When creating session logs for the first time, you can **Create Project** and **Create Logstore** to isolate session log data from other data. To centralize analysis of multiple session logs, use the same Logstore.
    

### **Disable session logs**

In the **Session Log Status** column, click **Stop** for the target session log. Stopping session logs does not delete existing logs. You can view them in the SLS Project.

### **View session log status**

Go to the **Monitoring and Logging** > **Session Log** tab of the target NAT Gateway.

**Item**

**Description**

**Session Log Status**

The current status of the session log. After enabling the session log, the status shows as **Enabled**.

After you start the session log, the system automatically creates the `<a baseurl="t2714254_v1_2_7.xdita" data-node="4747792" data-root="16523" data-tag="xref" href="t2607841.xdita#" id="cf1675d0bbl4v">AliyunServiceRolePolicyForNatgwLogDelivery</a>` service-linked role and grants authorization to the LogStore that you created to deliver data.

**Delivery Status**

The delivery status of the session log. Valid values:

-   **Success**: The session log was delivered to Simple Log Service.
    
-   **Modifying**: An intermediate state indicating that the session log is being modified or started.
    
-   **Failed**: The session log failed to deliver to Simple Log Service. For details, see [More information](#ed0cbd210cw6n).
    

**Delivery Type**

The destination type for session log delivery. Set the value to `sls`.

**Destination Information**

In the **Destination Information** column, click the Logstore link to open the Simple Log Service console. Before viewing and analyzing logs, manually [create an index](/help/en/sls/create-indexes) for the Logstore used for session log delivery.

## **More information**

### **Session log format**

**Field**

**Description**

instance

The NAT Gateway instance ID.

vpc\_id

The ID of the virtual private cloud (VPC) to which the NAT Gateway belongs.

protocol

In the IANA [protocol numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml), 1 represents ICMP, 6 represents TCP, and 17 represents UDP.

pri\_ip

The source IP address.

pri\_port

The source port.

> For ICMP packets, pri\_port corresponds to the ICMP ID field.

pub\_ip

The destination IP address.

pub\_port

The destination port.

nat\_ip

-   Internet NAT gateway instance:
    
    -   In NAT mode: the private IP address of the Elastic IP Address (EIP) associated with the Internet NAT Gateway.
        
    -   In Multi-EIP-to-ENI mode: the EIP associated with the Internet NAT Gateway.
        
    
    > Call the [DescribeNatGateways](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-describenatgateways-natgws#api-detail-table-response-200.schema.properties.NatGateways.items.properties.EipBindMode) operation to query the `EipBindMode` parameter and confirm the EIP binding mode.
    
    > Call the [ModifyNatGatewayAttribute](/help/en/nat-gateway/developer-reference/api-vpc-2016-04-28-modifynatgatewayattribute-natgws#api-detail-table-param-5.schema) operation to modify the `EipBindMode` parameter. You can only change Multi-EIP-to-ENI mode to NAT mode.
    
-   VPC NAT Gateway instance: Indicates the NAT IP addresses bound to the VPC NAT Gateway instance.
    

nat\_port

-   For an Internet NAT Gateway: the port used by the EIP associated with the Internet NAT Gateway.
    
-   For a VPC NAT Gateway: the port used by the NAT IP address associated with the VPC NAT Gateway.
    

bytes\_from\_pub

-   For an Internet NAT Gateway: the size of packets from the Internet.
    
-   For a VPC NAT Gateway: the size of packets from another VPC or a data center.
    

Unit: byte.

pkts\_from\_pub

-   For an Internet NAT Gateway: the number of packets from the Internet.
    
-   For a VPC NAT Gateway: the number of packets from another VPC or a data center.
    

This field counts network-layer packets—not application-layer or transport-layer messages. Therefore, when IP fragmentation occurs, the count may differ from endpoint packet captures. For accurate data volume, use byte count instead.

bytes\_from\_vpc

The size of packets from the VPC. Unit: byte.

pkts\_from\_vpc

The number of packets from the VPC.

start\_time

The time when the session log was created.

end\_time

The time when the session log stopped.

### **Delivery error codes**

**Error code**

**Description**

ProjectNotExist

The destination project does not exist.

LogStoreNotExist

The destination Logstore does not exist.

ProjectForbidden

The project is disabled, possibly due to overdue payment.

InvalidAccessKeyId

The service-linked role was not created when you enabled the session log.

Unauthorized

The service-linked role was not created to grant permissions to the Logstore when you enabled the session log.

UnavaliableTarget

If any of the following errors occur—Unauthorized, ProjectNotExist, LogStoreNotExist, or ProjectForbidden—the system disables delivery to the destination for 5 minutes. After 5 minutes, if new data needs delivery, the system attempts one test delivery to the Logstore. If the test fails, delivery remains disabled for another 5 minutes. If the test succeeds, normal delivery resumes.

WriteQuotaExceed

Your project’s write traffic quota is exceeded. By default, all Logstores in a project support up to 30 GB of write traffic per minute.

ShardWriteQuotaExceed

The log traffic is large and your Logstore has insufficient shards. We recommend that you split more shards to support higher write traffic. For more information, see [Manage shards](/help/en/sls/manage-shards).
