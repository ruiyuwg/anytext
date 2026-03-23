You can create network access control list (ACL) policies to restrict API calls made with AccessKey pairs to specific source IP addresses. This adds a layer of security by helping ensure that your AccessKey pairs are used only from trusted network environments.

## **Policy types**

Resource Access Management (RAM) provides the following types of network ACL policies for AccessKey pairs:

-   **Account-level policies**
    
    An account-level policy applies to **all AccessKey pairs in an Alibaba Cloud account**, including those belonging to all RAM users.
    
-   **AccessKey pair-level policies**
    
    An AccessKey pair-level policy applies only to **a specific AccessKey pair**.
    

An AccessKey pair-level policy takes precedence over an account-level policy. If an AccessKey-level policy is attached to a pair, the account-level policy does not apply to that pair.

The following flowchart illustrates the policy evaluation process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8676373371/p856175.png)

## **Considerations**

-   These policies apply only to AccessKey pairs for the Alibaba Cloud account and RAM users. They do not apply to temporary credentials obtained from the Security Token Service (STS).
    
-   To control network access for console logons, use logon masks instead. For more information, see [Network access control settings](/help/en/ram/user-guide/manage-security-settings-of-ram-users).
    
-   We strongly recommend that you test policies in a non-production environment with a test AccessKey pair. This helps prevent misconfigurations that could disrupt your production workloads.
    
-   When an application on Alibaba Cloud makes an API call, the source IP address is determined by the network path. If the call is routed over the Internet, add the resource's public IP address to a public network policy. If the call is routed through a private network (such as, to a VPC endpoint), add the resource's private IP address to a VPC network policy.
    

## **Limitations**

-   Network ACLs for AccessKey pairs are not supported by the following services: ApsaraMQ for RocketMQ, ApsaraMQ for RabbitMQ, ApsaraMQ for MQTT, EventBridge, Simple Message Queue (MNS), Cloud Monitor (for reporting event monitoring data over HTTP), and Hologres. Any updates to this list will be announced by the individual service teams.
    
-   You can attach a maximum of eight network ACL policies to an Alibaba Cloud account or to a single AccessKey pair. Each target can have only one public network ACL policy.
    
-   Each policy can contain a maximum of 50 IP addresses or CIDR blocks.
    

## **Configure policies**

Before you create a policy, we recommend that you identify all trusted IP addresses by reviewing your audit logs and consulting your network administrators. This helps ensure that you do not inadvertently block legitimate traffic.

### **Configure an account-level policy**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, click **Settings**. In the **Network Access Control** section, click **Modify** next to **Allowed source network address while calling APIs by AccessKey**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8676373371/p856552.png)
    
3.  In the **Account-level Network Access Control** panel, configure the public network and VPC network policies, set **Policy Status** to **Enable**, and click **Submit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3076370471/p921597.png)
    
    -   **Policy Status**: Select **Enable** to activate the policy.
        
    -   **Public Network Policy**: Click **Add Public Network Policy** and enter the public IP addresses or CIDR blocks (IPv4 and IPv6) to allow. If you do not create a policy, all access from public networks is denied. To allow access from all public networks, click **Allow All Public Network Access**. This adds a policy with the CIDR blocks `0.0.0.0/0` and `::/0`.
        
    -   **VPC Network Policy**: Click **Add VPC (Virtual Private Cloud) Policy** and enter a VPC ID and the IP addresses or CIDR blocks within that VPC to allow. If you do not create a policy, all access from VPCs is denied. To allow access from all VPCs in any account, click **Allow All VPC Network Access**. This adds a policy with the VPC ID `AllowAllVPC` and the CIDR blocks  `0.0.0.0/0` and `::/0`.
        
    
    **Note**
    
    You can enter multiple IP addresses or CIDR blocks in a single policy. Separate multiple entries with spaces, commas (,), or semicolons (;).
    
4.  In the **Confirm Submission** dialog box, enter the account ID and click **OK**.
    
    **Important**
    
    The policy may take several minutes to propagate across all services. Remember that an AccessKey pair-level policy always overrides the account-level policy.
    

### **Configure an AccessKey pair-level policy for a RAM user**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, click the username of the target RAM user.
    
4.  On the **Authentication** tab, in the **AccessKey** section, find the target AccessKey pair and click **Network Access Control** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7560703471/p857073.png)
    
5.  In the **AccessKey-level Network Access Control** panel, configure the public network and VPC network policies, set **Policy Status** to **Enable**, and click **Submit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3076370471/p921618.png)
    
    -   **Policy Status**: Select **Enable** to activate the policy.
        
    -   **Public Network Policy**: Click **Add Public Network Policy** and enter the public IP addresses or CIDR blocks (IPv4 and IPv6) to allow. If you do not create a policy, all access from public networks is denied. To allow access from all public networks, click **Allow All Public Network Access**. This adds a policy with the CIDR blocks `0.0.0.0/0` and `::/0`.
        
    -   **VPC Network Policy**: Click **Add VPC (Virtual Private Cloud) Policy** and enter a VPC ID and the IP addresses or CIDR blocks within that VPC to allow. If you do not create a policy, all access from VPCs is denied. To allow access from all VPCs in any account, click **Allow All VPC Network Access**. This adds a policy with the VPC ID `AllowAllVPC` and the CIDR blocks  `0.0.0.0/0` and `::/0`.
        
    
    **Note**
    
    You can enter multiple IP addresses or CIDR blocks in a single policy. Separate multiple entries with spaces, commas (,), or semicolons (;).
    
6.  In the **Confirm Submission** dialog box, enter the AccessKey ID and click **OK**.
    
    **Important**
    
    The policy may take several minutes to propagate across all services. Remember that an AccessKey pair-level policy always overrides the account-level policy.
    

### Configure an AccessKey pair-level policy for **an Alibaba Cloud account**

1.  Log on to the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com) by using your Alibaba Cloud account.
    
2.  Hover over the profile picture in the upper-right corner and click **AccessKey**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4266393371/p801260.png)
    
3.  In the **Main Account AccessKey is not recommended** dialog box, confirm and select **I am aware of the security risks of using a main account AccessKey** and click **use Main Account AccessKey**.
    
4.  On the page that appears, find the target AccessKey pair and click **Network Access Control** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7560703471/p921733.png)
    
5.  In the **AccessKey-level Network Access Control** panel, configure the public network and VPC network policies, set **Policy Status** to **Enable**, and click **Submit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3076370471/p921618.png)
    
    -   **Policy Status**: Select **Enable** to activate the policy.
        
    -   **Public Network Policy**: Click **Add Public Network Policy** and enter the public IP addresses or CIDR blocks (IPv4 and IPv6) to allow. If you do not create a policy, all access from public networks is denied. To allow access from all public networks, click **Allow All Public Network Access**. This adds a policy with the CIDR blocks `0.0.0.0/0` and `::/0`.
        
    -   **VPC Network Policy**: Click **Add VPC (Virtual Private Cloud) Policy** and enter a VPC ID and the IP addresses or CIDR blocks within that VPC to allow. If you do not create a policy, all access from VPCs is denied. To allow access from all VPCs in any account, click **Allow All VPC Network Access**. This adds a policy with the VPC ID `AllowAllVPC` and the CIDR blocks  `0.0.0.0/0` and `::/0`.
        
    
    **Note**
    
    You can enter multiple IP addresses or CIDR blocks in a single policy. Separate multiple entries with spaces, commas (,), or semicolons (;).
    
6.  In the **Confirm Submission** dialog box, enter the AccessKey ID and click **OK**.
    
    **Important**
    
    The policy may take several minutes to propagate across all services. Remember that an AccessKey pair-level policy always overrides the account-level policy.
    

## **Configuration examples**

**Scenario**

**Policy configuration**

Disable network ACLs for all AccessKey pairs

Set **Policy Status** to **Disable** for all account-level and AccessKey pair-level policies.

Allow API calls from all public IP addresses

In the public network policy, specify the CIDR blocks `0.0.0.0/0` or `::/0`.

Allow API calls from any VPC

In the VPC network policy, specify the VPC ID `AllowAllVPC` and the CIDR blocks`0.0.0.0/0` or `::/0`.

Deny API calls from all public IP addresses

Enable the policy, but do not create a public network policy.

Deny API calls from all VPCs

Enable the policy, but do not create a VPC network policy.

Create an exception to allow a specific AccessKey pair to be used from any IP address, overriding a restrictive account-level policy

For the specific AccessKey pair, enable an AccessKey pair-level policy with the following rules:

-   **Public Network Policy**: Add a policy that specifies the CIDR blocks `0.0.0.0/0` or `::/0`.
    
-   **VPC Network Policy**: Add a policy that specifies the VPC ID `AllowAllVPC` and the CIDR blocks `0.0.0.0/0` or `::/0`.
    

Allow all AccessKey pairs in an account to be used only from a specific public IP (such as`203.0.113.1`) and a specific CIDR block (such as `192.168.0.0/16`) within VPC `vpc-m5ekxe1zi8zwgqrtc****`

Enable an account-level policy with the following rules:

-   **Public Network Policy**: Add a policy that specifies the IP address `203.0.113.1`.
    
-   **VPC Network Policy**: Add a policy that specifies the VPC ID `vpc-m5ekxe1zi8zwgqrtc****` and the CIDR block `192.168.0.0/16`.
    

For more information, see the "[Configure an account-level policy](#378217b36660c)" section in this topic.

Allow a specific AccessKey pair to be used only from a specific public IP (such as`203.0.113.1`) and a specific CIDR block (such as `192.168.0.0/16`) within VPC `vpc-m5ekxe1zi8zwgqrtc****`

For the specific AccessKey pair, enable an AccessKey pair-level policy with the following rules:

-   **Public Network Policy**: Add a policy that specifies the IP address `203.0.113.1`.
    
-   **VPC Network Policy**: Add a policy that specifies the VPC ID `vpc-m5ekxe1zi8zwgqrtc****` and the CIDR block `192.168.0.0/16`.
    

This AccessKey pair-level policy overrides any account-level policies for this AccessKey pair.

For more information, see the "[Configure an AccessKey pair-level policy for a RAM user](#e11273eccfjgf)" and "[Configure an AccessKey pair-level policy for an Alibaba Cloud account](#ef655076a7dij)" sections in this topic.

## **FAQ**

### **How do I determine the trusted IP addresses for my policy?**

#### **Review historical API call data in ActionTrail**

You can use audit logs from [ActionTrail](/help/en/actiontrail/product-overview/what-is-actiontrail) to find the source IP addresses of successful previous API calls. The following methods are available:

-   **If your trail delivers events to a Simple Log Service (SLS) Logstore**, you can query the logs directly. In the [ActionTrail console](https://actiontrail.console.alibabacloud.com), open your trail's details page and click the Logstore name. In the SLS console, you can then query for source IP addresses (`event.sourceIpAddress`) associated with a specific AccessKey ID (`event.userIdentity.accessKeyId`) or VPC ID (`event.vpcId`). For more information, see [Query events in the Simple Log Service or OSS console](/help/en/actiontrail/user-guide/query-events-in-the-log-service-or-oss-console).
    
    Sample query statement:
    
    `* | SELECT "event.userIdentity.accessKeyId" AS access_key_id, "event.sourceIpAddress" AS source_ip_address, "event.vpcId" AS vpc_id FROM log WHERE "event.userIdentity.accessKeyId" = 'LTAI****************'`
    
-   **If your trail does not deliver events to an SLS Logstore**, you can use the event history in the [ActionTrail console](https://actiontrail.console.alibabacloud.com). Go to the **AccessKey Pair Audit** page, enter an AccessKey ID, and view the source IP addresses in the call records. For more information, see [Query the logs of an AccessKey pair](/help/en/actiontrail/user-guide/query-the-logs-of-an-accesskey-pair).
    

ActionTrail records management events for most Alibaba Cloud services. For data events, or for services not covered by ActionTrail, you may need to use the auditing features of the individual services. For more information, see [Audit events of supported cloud services](/help/en/actiontrail/product-overview/audit-events-of-supported-cloud-services/).

#### **Query network configurations**

##### **Applications deployed on Alibaba Cloud**

If your applications are deployed on Alibaba Cloud resources like Elastic Compute Service (ECS) or container services, you can find their assigned public IP addresses, VPC IDs, and private CIDR blocks in the console.

When these applications call the public endpoints of other services, the source IP address is the public egress IP address of the resource or its NAT gateway. When they call private VPC endpoints, the source IP address is a private IP address of the VPC.

##### **Calls between Alibaba Cloud services**

When one Alibaba Cloud service calls another, the source IP address might be an internal service IP address that is not predictable. In these cases, we strongly recommend using RAM roles for service-to-service authorization instead of embedding AccessKey pairs.

The following are reference configurations for calls between specific services:

-   **DataWorks**: To find the CIDR blocks used when DataWorks calls MaxCompute for data analysis, see [IP whitelist for Data Analysis](/help/en/dataworks/user-guide/ip-address-whitelist-for-dataanalysis). For metadata collection, see [Configure IP address whitelists for metadata collection](/help/en/dataworks/user-guide/configure-ip-address-whitelists-for-metadata-collection).
    
-   **SLS**: To transfer logs between accounts, we recommend using a RAM role instead of an AccessKey pair. For more information, see [Use custom roles to transfer data within the same Alibaba Cloud account](/help/en/sls/scenario-2-use-custom-roles-to-transfer-data-within-the-same-account).
    
-   **Application Real-Time Monitoring Service (ARMS)**: For cross-account integration, we recommend using a RAM role. For more information, see [Cross-account access](/help/en/arms/application-monitoring-ebpf/use-cases/cross-account-access).
    

##### **Dynamic IP addresses**

-   When cloud resources scale automatically, their IP addresses may change. You must update your network ACL policies with the new IP addresses.
    
-   **Function Compute**: By default, Function Compute uses dynamic public IP addresses. To use a predictable IP address, you must [configure static public IP addresses](/help/en/functioncompute/fc/user-guide/configure-static-public-ip-addresses) for the service.
    

##### **Applications deployed outside Alibaba Cloud**

You must manually determine the egress IP addresses of your external application environments.

##### **Office networks**

If you use an AccessKey pair for local development, contact your network administrator to obtain the egress IP address of your office network.

### **Why is my API call being denied by a network ACL policy?**

If an API call is made from an IP address that is not allowed by an active network ACL policy, the call is denied. You might receive one of the following error messages:

```
Message: The specified parameter "AccessKeyId.AccessPolicyDenied" is not valid.
```

```
Message: code: 400, Specified access key denied due to access policy. 
```

#### **Solution**

To resolve the issue, you must identify the correct source IP address and add it to the appropriate policy.

1.  Check whether an AccessKey pair-level policy is configured for the affected AccessKey pair.
    
    -   If a policy is present, add the required source IP address to it.
        
    -   If no AccessKey pair-level policies exist, proceed to the next step.
        
    
2.  Add the source IP address to the account-level policy.
    
3.  If API calls are still denied, verify that the IP address you added is correct and matches the actual source IP address of the client making the call.
    
4.  To find the correct source IP address, you can use ActionTrail to review successful API calls that were made before the policy was enabled. For more information, see the "[Review historical API call data in ActionTrail](#315c1f79bcvmc)" section in this topic.
