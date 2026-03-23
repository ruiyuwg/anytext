To securely access your Alibaba Cloud Elasticsearch cluster, whether over the Internet or within a Virtual Private Cloud (VPC), you must whitelist the IP addresses of authorized devices. This topic guides you through configuring and managing these IP address whitelists.

## Security best practices

Configuring IP address whitelists is a critical security measure. Please review the following best practices:

-   **Prioritize VPC access:** For optimal security and stability, always use VPC access. Internet access is inherently less secure and may experience instability.
    
-   **Least privilege principle:** Always specify the most restrictive IP addresses or CIDR blocks possible.
    
    -   Avoid `0.0.0.0/0` or `::/0`: These CIDR blocks grant access from any IP address and are highly discouraged for production environments due to significant security risks. Use them only for temporary testing or when absolutely necessary, and remove them immediately after use.
        
-   **Regular review:** Periodically review and update your whitelists. Remove any unused IP addresses to minimize potential exposure.
    
-   **Dynamic IPs:** If your client's IP addresses are dynamic, use the smallest possible CIDR block that covers all required addresses instead of individual IPs.
    

## Prerequisite

[An Alibaba Cloud Elasticsearch cluster is created](/help/en/es/user-guide/create-an-alibaba-cloud-elasticsearch-cluster#task-2277894).

## Understand IP addresses and whitelist rules

Before configuring your whitelist, it's essential to know which IP addresses to add and how to format them.

### How to obtain your IP address

The method to obtain the correct IP address depends on your access scenario:

**Scenario**

**IP address to obtain**

**Method**

On-premises machine

Public IP address

Run `curl ipinfo.io/ip` from your machine.

**Note**

For home or office LAN connections, this will be your Internet egress IP address.

Client over the Internet (e.g., ECS in a different VPC)

Public IP address of the client (e.g., your ECS instance's public IP)

For ECS instances:

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left navigation pane, click **Instances**.
    
3.  Select the region where the ECS instance resides.
    
4.  Find the ECS instance and view its IP address.
    

Client over a VPC (e.g., ECS in the same VPC)

Private IP address of the client (e.g., your ECS instance's private IP)

### **IP address formats and limits**

When configuring an IP address whitelist, follow these rules:

**Rule**

**Description**

Supported formats

Individual IP addresses or CIDR blocks.

Example: `192.168.0.1` or `192.168.0.0/24`.

**Note**

For CIDR blocks, the IP address before the forward slash (/) must be the first IP address in the subnet range.

Maximum entries

Up to 300 IP addresses or CIDR blocks per whitelist, separated by commas (`,`).

IPv6 support

Supported only in the China (Hangzhou) region.

Example: `2401:b180:1000:24::5` or `2401:b180:1000::/48`.

### **Default whitelist values**

Alibaba Cloud Elasticsearch clusters come with the following default whitelist settings:

**Whitelist type**

**Default value**

**Effect**

Public IP address whitelist

`127.0.0.1`

Blocks all IPv4 access over the Internet.

Private IP address whitelist

`0.0.0.0/0`

Allows all IPv4 access over the VPC.

**Note**

Some regions and cluster versions do not allow `0.0.0.0/0`.

IPv6 (deny all)

`::1`

Blocks all IPv6 access.

IPv6 (allow all)

`::/0`

Allows all IPv6 access. Not recommended for security reasons.

**Note**

Some cluster versions do not support this value.

## Configure an IP address whitelist

1.  Log on to the [Alibaba Cloud Elasticsearch console](https://elasticsearch.console.alibabacloud.com/#/home).
    
2.  In the left navigation menu, choose **Elasticsearch Clusters**.
    
3.  Navigate to the target cluster.
    
    1.  In the top navigation bar, select the resource group to which the cluster belongs and the region where the cluster resides.
        
    2.  On the **Elasticsearch Clusters** page, find the cluster and click its ID.
        
4.  In the left navigation menu, choose **Configuration and Management** > **Security**.
    
5.  Select whitelist type:
    
    -   To configure a public IP address whitelist, locate **Public Network Access** and toggle the switch to On (if not already enabled), then click **Modify** next to **Public IP Address Whitelist**.
        
    -   To configure a private IP address whitelist, click **Modify** next to **Private IP Address Whitelist**.
        
6.  In the panel, click **Configure** within the **\- default** section.
    
    This action adds an IP address to the default IP whitelist.
    
    Alternatively, to create a new, named whitelist group, click **Add a new IP whitelist group**.
    
7.  In the dialog box, add the IP address or CIDR blocks you obtained earlier (following the [IP address formats and limits](#dc59a6e102qvb)).
    
8.  Click **OK**.
    

## Manage existing IP address whitelist

Once whitelists are configured, you can view, modify, or delete them.

1.  Log on to the [Alibaba Cloud Elasticsearch console](https://elasticsearch.console.alibabacloud.com/#/home), navigate to your cluster, and go to **Configuration and Management** > **Security**.
    
2.  Locate either the **Public IP Address Whitelist** or **Private IP Address Whitelist** section.
    

### View whitelisted IP addresses

-   The IP addresses in your whitelist groups are displayed directly on the **Security** page. If an entry is truncated, hover over it to view the complete list.
    

### Modify a whitelist group

1.  Click **Modify** next to the relevant whitelist type (Public or Private).
    
2.  In the panel, find the whitelist group you want to change and click **Configure**.
    
3.  In the dialog box, update the **IP Addresses in Whitelist** field as needed.
    
    **Note**
    
    The whitelist group's name cannot be changed.
    
4.  Click **OK**.
    

### Delete a Whitelist Group

1.  Click **Modify** next to the relevant whitelist type (Public or Private).
    
2.  In the panel, find the whitelist group you wish to delete and click **Delete** next to its name.
    
3.  In the confirmation message, click **OK**.
    

## Troubleshooting

Q: I've configured a whitelist, but still can't access my Elasticsearch cluster. What should I do?

A:

-   Verify IP Addresses: Double-check that you've whitelisted the correct IP address(es) for your client.
    
-   Test Connectivity: Use a cURL command from your client to test cluster access directly. For guidance, see [Connect to a cluster from the command line](/help/en/es/user-guide/use-curl-commands-and-api-operations-to-manage-an-elasticsearch-cluster#section-mj5-ewv-c1u).
    
-   Check Network Path: Ensure no other network firewalls or security groups are blocking the connection.
    

Q: What if the number of IP addresses I need exceeds the 300-entry limit?

A: Try to consolidate individual IP addresses into larger CIDR blocks where possible to reduce the overall count. For example, `192.168.1.1, 192.168.1.2, 192.168.1.3` could be replaced by `192.168.1.0/24` if all IPs in that range are valid.

## References

-   API operations for network access:
    
    -   [TriggerNetwork](/help/en/es/developer-reference/api-triggernetwork#doc-api-elasticsearch-TriggerNetwork)
        
    -   [UpdatePublicNetwork](/help/en/es/developer-reference/api-updatepublicnetwork#doc-api-elasticsearch-UpdatePublicNetwork)
        
-   API operations for whitelist management:
    
    -   [UpdatePrivateNetworkWhiteIps](/help/en/es/developer-reference/api-updateprivatenetworkwhiteips#doc-api-elasticsearch-UpdatePrivateNetworkWhiteIps)
        
    -   [UpdatePublicWhiteIps](/help/en/es/developer-reference/api-updatepublicwhiteips#doc-api-elasticsearch-UpdatePublicWhiteIps)
        
    -   [UpdateWhiteIps](/help/en/es/developer-reference/api-updatewhiteips#doc-api-elasticsearch-UpdateWhiteIps)
        
    -   [ModifyWhiteIps](/help/en/es/developer-reference/api-modifywhiteips#doc-api-elasticsearch-ModifyWhiteIps)
