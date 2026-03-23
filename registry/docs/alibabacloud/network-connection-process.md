MaxCompute runs in an isolated network by default and cannot access external services. To reach public endpoints, VPC resources, or other Alibaba Cloud services from MaxCompute -- or to reach MaxCompute from your VPC -- configure a network connection first.

This topic describes the six available network solutions, their applicable scenarios, supported regions, and limitations.

## How it works

MaxCompute connects to external services through a proxy layer. The following diagram shows the network structure between MaxCompute and target services.

![Network structure between MaxCompute and target services](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7048435671/CAEQTxiBgMD2qO2b2BkiIDUwOWI2ZmNlYTMyMzRlOGRiYjNjYWU0YzhmZTMxYWMx5024557_20250327170528.732.svg)

Six network solutions are available in two categories:

-   **Outbound access** (MaxCompute reaching external services): Internet access, VPC dedicated connection, and Alibaba Cloud service access.
    
-   **Inbound access** (external services reaching MaxCompute): VPC PrivateLink, VPC peering, and Cloud Enterprise Network (CEN).
    

## Choose a network solution

Use the following table to identify the right solution for your scenario.

**Solution**

**Direction**

**When to use**

**Supported compute engines**

[Internet access](/help/en/maxcompute/user-guide/access-public-network-scheme)

Outbound

Access a public IP address or domain name from MaxCompute

UDF, Spark, MapReduce (MR), PyODPS/Mars

[VPC dedicated connection](/help/en/maxcompute/user-guide/access-vpc-solution-direct-connection)

Outbound

Access VPC resources such as RDS, HBase clusters, or Hadoop clusters from MaxCompute

SQL, UDF, Spark, PyODPS/Mars, foreign table, data lakehouse architecture

[Alibaba Cloud service access](/help/en/maxcompute/user-guide/accessing-specific-alibaba-cloud-services)

Outbound

Access OSS, DLF, Tablestore, or Hologres through internal network addresses

SQL, UDF, Spark, PyODPS/Mars, foreign table, data lakehouse architecture

[VPC PrivateLink](/help/en/maxcompute/user-guide/vpc-private-link-maxcompute)

Inbound

Connect to MaxCompute over a private endpoint from your VPC

\--

[VPC peering](/help/en/maxcompute/user-guide/vpc-peer-to-peer-link-practice-solution)

Inbound

Access MaxCompute from a VPC in a different region

\--

[CEN interconnection](/help/en/maxcompute/user-guide/use-the-cen-solution-to-complete-vpc-network-interconnection)

Inbound

Interconnect VPCs across regions using Cloud Enterprise Network (CEN)

\--

## Outbound access solutions

### Internet access

Access a public IP address or domain name from a user-defined function (UDF), Spark, MapReduce (MR), or PyODPS/Mars task.

**Setup overview**:

1.  For standard public IPs or domain names (such as aliyun.com), add or remove them directly in the [Project Management](/help/en/maxcompute/user-guide/manage-projects-in-the-new-maxcompute-console#section-i4f-gve-stz) section of the MaxCompute console.
    
2.  If automatic validation fails, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl). The review takes up to three business days. After approval, MaxCompute can access the target IP address or domain name, provided it has no security restrictions.
    
3.  If the target has access control restrictions, contact the service administrator to remove them so MaxCompute can reach the endpoint.
    

### VPC dedicated connection

Access services in a virtual private cloud (VPC) -- such as RDS, HBase clusters, and Hadoop clusters -- from MaxCompute SQL, UDF, Spark, PyODPS/Mars, foreign table, or data lakehouse architecture workloads.

**Setup overview**:

1.  Log on to the VPC console and grant permissions to MaxCompute.
    
2.  Create a connection between MaxCompute and the VPC in the MaxCompute console.
    
3.  After the connection is created, an elastic network interface (ENI) appears in the MaxCompute console. The security group you specified during connection creation controls access rules for this ENI.
    
4.  If the target service has access control enabled, add the ENI IP address or the vSwitch CIDR block to its whitelist.
    

**Important**

MaxCompute establishes a network connection to one specific VPC ID only. To reach other VPCs in the same or different regions, connect them to the configured VPC through VPC peering, CEN, or other VPC interconnection solutions.

### Alibaba Cloud service access

Access Alibaba Cloud services such as OSS, DLF, Tablestore, and Hologres through internal network addresses from MaxCompute SQL, UDF, Spark, PyODPS/Mars, foreign table, or data lakehouse architecture workloads.

**Endpoint rules**:

**Access method**

**Required endpoint type**

OSS or Tablestore foreign table

Internal endpoint only

UDF calling OSS or Tablestore

Public endpoint only

Hologres foreign table

Classic network domain name (see the **Classic Network** address in [Endpoints](/help/en/tablestore/product-overview/endpoints#concept-bsx-btj-bfb))

## Inbound access solutions

**Solution**

**When to use**

**Details**

[VPC PrivateLink](/help/en/maxcompute/user-guide/vpc-private-link-maxcompute)

Connect to MaxCompute over a private endpoint from your VPC

See the linked topic

[VPC peering](/help/en/maxcompute/user-guide/vpc-peer-to-peer-link-practice-solution)

Access MaxCompute from a VPC in a different region

See the linked topic

[CEN interconnection](/help/en/maxcompute/user-guide/use-the-cen-solution-to-complete-vpc-network-interconnection)

Interconnect VPCs across regions using CEN

See the linked topic

## Supported regions

Internet access and VPC dedicated connection are available only in the following regions.

### Internet access

**Supported regions:**

-   China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), and China (Hong Kong)
    
-   Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), US (Silicon Valley), and US (Virginia)
    

**Supported targets:** Public IP addresses or domain names.

### VPC dedicated connection

**Supported regions and zones:**

**Region**

**Zones**

China (Hangzhou)

H, I, J, K

China (Beijing)

F, G, H, I, L

China (Shanghai)

B, E, G, M, N

China (Zhangjiakou)

A, B, C

China (Ulanqab)

B, C

China (Shenzhen)

C, D, E, F

China (Hong Kong)

B, C

China (Shanghai) Finance Cloud

F

Japan (Tokyo)

A, B

Singapore

A, B, C

Malaysia (Kuala Lumpur)

A, B

Indonesia (Jakarta)

A, B

Germany (Frankfurt)

A, B, C

US (Silicon Valley)

A, B

US (Virginia)

A, B

**Supported targets:** VPC IP addresses or domain names, RDS, HBase clusters, Hadoop clusters.

## Limitations

Internet and VPC outbound access from MaxCompute is a **free service** with the following limitations:

**Limitation**

**Description**

Failover reruns

Network connectivity is guaranteed, but the platform may rerun nodes due to failover for network operations triggered by your code. Make sure your code is idempotent. Perform data read operations whenever possible. For write operations, implement safeguards against dirty data from repeated writes.

Proxy capacity

Access goes through a proxy with limited forwarding capabilities. Use persistent connections and limit the number of nodes. Excessive concurrency or too many connections can cause network requests to fail.

No bandwidth guarantee

Bandwidth is not guaranteed, which may cause tasks to run slowly. Alibaba Cloud is not responsible for performance degradation caused by bandwidth limitations.

Limited egress IPs

The number of egress IP addresses used by the proxy is limited. If you encounter abnormal connection behavior, contact Alibaba Cloud technical support.

Egress IP changes

Egress IP addresses may change. Do not enable IP address-based access control on the target service. If you add proxy egress IPs to a whitelist, Alibaba Cloud cannot guarantee they will remain unchanged.

**Important**

After establishing a network connection for MaxCompute, you may still encounter access issues when running jobs. These issues can stem from network restrictions in the tool you use to run jobs. For example, if you use DataWorks for data synchronization or data cleaning, make sure the DataWorks resource group can connect to the data source and that the DataWorks sandbox whitelist allows access. For details on DataWorks network connectivity and sandbox configuration, see [Network connection solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).

## FAQ

### DNS resolution fails under high concurrency

During a UDF or Spark task, a large number of concurrent requests to a target domain name can overwhelm DNS resolution.

To avoid this, resolve the domain name to an IP address during the task initialization phase, then use the resolved IP address for all requests during execution. For details, see [High concurrency causes DNS resolution failures](/help/en/maxcompute/use-cases/dns-resolution-fails-due-to-high-concurrency).

### HTTPS access fails when using an IP address directly

When a Spark or UDF task accesses a remote VPC service (such as KMS or OSS) over HTTPS, connecting by IP address instead of domain name causes a certificate validation error.

Add the domain name to the `Host` header of the request. This resolves the validation error that occurs when accessing an HTTPS service by IP address. For details, see [Use an IP address to access an HTTPS service](/help/en/maxcompute/use-cases/dns-resolution-failure-solution).
