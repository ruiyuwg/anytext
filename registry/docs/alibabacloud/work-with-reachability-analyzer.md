The reachability analyzer is used to analyze configurations and is suitable for various scenarios. These scenarios include communication between Elastic Compute Service (ECS) instances, communication between ECS instances and public IP addresses, communication between ECS instances and private IP addresses, and communication between instances deployed in virtual private clouds (VPCs) and on-premises sites. You can use the reachability analyzer to check whether the path from a source to a destination is reachable and diagnose the connection issues caused by incorrect network configurations.

## Overview

### **How the reachability analyzer works**

When you use the reachability analyzer to analyze a path, Network Intelligence Service (NIS) generates hop-by-hop information about the virtual network path between the source and the destination. If the destination is unreachable, the reachability analyzer checks the location where the network connection issue occurs and the reason why the issue occurs. The reachability analyzer is mainly used to check instance status and network configurations, such as the status of network instances, configurations of security groups, configurations of network access control lists (ACLs), configurations of route tables, and configurations of Server Load Balancer (SLB) instances.

The reachability analyzer does not send data packets or analyze the data plane. You need to only specify a path for transferring data from the source to the destination. For example, you can specify an ECS instance within your Alibaba Cloud account as the source, another ECS instance within the account as the destination, port 22 as the destination port, and TCP as the transmission protocol. Then, the reachability analyzer can check whether the source ECS instance can connect to the destination ECS instance over SSH.

**Note**

You can use the reachability analyzer to analyze only a path from a source instance to a destination instance. To analyze the path from the destination instance to the source instance, switch their roles.

### **Intermediate nodes supported by the reachability analyzer**

The following intermediate nodes are supported by the reachability analyzer: vSwitches, vRouters, elastic network interfaces (ENIs), elastic IP addresses (EIPs), Classic Load Balancer (CLB) instances, transit routers, virtual border routers (VBRs), Internet NAT gateways, Cloud Firewall instances, VPN gateways, IPv4 gateways, and Express Connect routers (ECRs).

## **Scenarios**

The reachability analyzer applies to the following scenarios:

-   Communication between two ECS instances that are deployed in different regions. The ECS instances are connected by using Cloud Enterprise Network (CEN) instances, VPC peering connections, or transit routers. In addition, VPC firewalls can be identified. In this scenario, the source ECS instance and the destination ECS instance can belong to different Alibaba Cloud accounts.
    

-   Communication between two ECS instances that are deployed in the same region. The ECS instances are connected by using CEN instances, VPC peering connections, or transit routers. In addition, VPC firewalls can be identified.
    
-   Communication between an ECS instance and a public IP address. In this scenario, Internet firewalls can be identified.
    
-   Communication between a public IP address and an internal-facing CLB instance.
    
-   Communication between an ECS instance and an Internet-facing CLB instance.
    
-   Access from an ECS instance to the Internet based on the SNAT entries of an Internet NAT gateway.
    
-   Access to an ECS instance over the Internet based on the DNAT entries of an Internet NAT gateway.
    
-   Communication between an ECS instance and a private IP address by using VPN gateways.
    
-   Communication between an instance deployed in a VPC and an on-premises site by using VBRs. In this scenario, VPC firewalls can be identified.
    

## **Limits**

You can specify the following types of resources as the source or destination:

-   Source: ECS instance, public IP address, vSwitch, VBR, VPN gateway, and on-premises private IP address.
    
-   Destination: ECS instance, public IP address, vSwitch, VBR, VPN gateway, on-premises private IP address, and CLB instance.
    

**Important**

If public IP addresses are specified as both the source and the destination, make sure that at least one of the public IP addresses is the public IP address of an ECS instance. Otherwise, the reachability analyzer cannot work as expected.

The following table describes the resource quotas that are related to the reachability analyzer for a single Alibaba Cloud account.

**Item**

**Upper limit**

**Adjustable**

Number of paths

100

N/A

Number of analysis records

1000

Number of concurrent analyses

5

## Create a path

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Self-service Diagnostics** > **Reachability Analyzer**.
    
3.  On the **Reachability Analyzer** page, click **Start Analyzing**.
    
4.  On the **Start Analyzing** page, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Source**
    
    Valid values of **Source Type**:
    
    -   **ECS**: Select an ECS instance as the source. After you select an ECS instance, you can select a private IP address of the ECS instance. If you do not select a private IP address of the ECS instance, the primary IP address of the ECS instance is used by default.
        
    -   **Public IP Address**: Enter a public IP address as the source.
        
        You can specify the static public IP address of an ECS instance, an EIP, or a public IP address that is not provided by Alibaba Cloud as the source. However, you must make sure that either the source or the destination is a public IP address provided by Alibaba Cloud.
        
    -   **vSwitch**: Select a vSwitch as the source.
        
    -   **VBR**: Select a VBR as the source.
        
    -   **VPN gateway**: Select a VPN gateway as the source.
        
    -   **Private IP Address**: Enter an on-premises private IP address as the source. If you set Source Type to Private IP Address, you must enter an on-premises private IP address. In this case, the private IP address can access the destination by using VPN gateways or VBRs.
        
    
    **Destination**
    
    Valid values of **Destination Type**:
    
    -   **ECS**: Select an ECS instance as the destination. After you select an ECS instance, you can select a private IP address of the ECS instance. If you do not select a private IP address of the ECS instance, the primary IP address of the ECS instance is used by default.
        
    -   **Public IP Address**: Enter a public IP address as the destination.
        
        You can specify the static public IP address of an ECS instance, an EIP, or a public IP address that is not provided by Alibaba Cloud as the source. However, you must make sure that either the source or the destination is a public IP address provided by Alibaba Cloud.
        
    -   **vSwitch**: Select a vSwitch as the destination.
        
    -   **VBR**: Select a VBR as the destination.
        
    -   **VPN gateway**: Select a VPN gateway as the destination.
        
    -   **Private IP Address**: Enter an on-premises private IP address as the destination. If you set Destination Type to Private IP Address, you must enter an on-premises private IP address. In this case, the private IP address can be accessed by the source by using VPN gateways or VBRs.
        
    -   **CLB**: Select a CLB instance as the destination.
        
    
    **Protocol**
    
    Default value: **TCP**. Valid values:
    
    -   **TCP**: Transmission Control Protocol
        
    -   **UDP**: User Datagram Protocol
        
    -   **ICMP**: Internet Control Message Protocol
        
    
    **Destination Port**
    
    Enter the port number of the destination. Default value: **80**. This parameter is optional. If you do not specify a port number, the reachability analyzer checks whether all ports of the destination are reachable for the source.
    
5.  Specify whether to save the path parameters. Default value: **No**. If you select **Yes**, the path parameters are saved for repeated analysis after the path is created.
    
6.  Click **Start Analyzing**.
    

## Analyze the path

1.  On the **Reachability Analyzer** page, find the path that you want to analyze and click **Start Analyzing** in the **Actions** column.
    
2.  In the message that appears, click **OK**.
    
3.  On the **path analysis details** page, view the analysis result.
    
    -   The path analysis details page displays information about the reachability of the path from the source to the destination and the nodes that the path traverses. If the path is unreachable, the page displays the corresponding error message.
        
    -   If the status of the path is unknown, the path analysis details page displays the corresponding error message.
        
    

## Analyze the results

The reachability analyzer may return one of the following results:

-   The path is reachable.
    
    The following figure shows the analysis result of a path from an ECS instance to a vSwitch in different VPCs. The ECS instance and the vSwitch are connected by using a VPC peering connection. The result indicates that the source ECS instance can reach the destination vSwitch and that the two VPCs are connected.![可访问](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2344368861/p302982.png)
    
    You can click the ![下拉箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377443561/p302608.png) icon next to a node on the path to view details.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7351727071/p690118.png)
    
-   The path is unreachable.
    
    The following figure shows the analysis result of a path from an ECS instance to a NAT gateway in the same VPC. The following error message is returned: **The entries of the Internet NAT gateway do not match. Check the configurations of the Internet NAT gateway.** The result indicates that the source ECS instance cannot reach the destination NAT gateway.![不可访问](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2344368861/p302985.png)
    
    You can click the ![下拉箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377443561/p302608.png) icon next to an abnormal node to view details.
    

-   The path has an analysis error.
    
    The following figure shows a path analysis error. The following error message is returned: **The resource does not exist. Check whether the resource is already deleted.**
    
    ![未知](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2344368861/p304090.png)The following error messages may be returned by the reachability analyzer:
    
    -   The source resource cannot be the same as the destination resource.
        
    -   The reachability analyzer is not supported because the path has an unsupported intermediate node.
        
    -   The resource does not exist. Check whether the resource is already deleted.
        
    -   The resource is in an invalid state. Check whether the resource is running as expected.
        
    -   The route is unreachable. Check the configuration of the route.
        
    -   The request does not match security group rules and is rejected by the default rule.
        
    -   The request matches the deny rule of the security group.
        
    -   The request does not match network ACL rules and is denied by the default rule.
        
    -   The request matches the deny rule of the network ACL.
        
    -   The result is unknown because an error occurred. Try again later.
        
    -   The system has an internal error. Try again later.
        
    -   The request matches the specified CLB instance denylist and is denied.
        
    -   The request does not match the CLB instance allowlist and is denied by the default rule.
        
    -   The entries of the Internet NAT gateway do not match. Check the configurations of the Internet NAT gateway.
        
    -   Internet connections cannot be established. Configure an EIP.
        
    -   The IPv4 gateway route is unreachable. Add a route that points to the IPv4 gateway to the VPC route table.
        
    -   Internet connections cannot be established because the IPv4 gateway is deleted after you activate the IPv4 gateway. Create an IPv4 gateway, activate the IPv4 gateway, and then add a route that points to the IPv4 gateway to the VPC route table.
        
    -   The route is unreachable. Check the route configuration of the IPv4 gateway.
        
    -   The VPN gateway does not have a return route that points to the source IP address.
        

## Delete an analysis record

You can delete an analysis record that is no longer needed.

1.  On the **Reachability Analyzer** page, find the path whose analysis records you want to delete and click the path ID in the **Path ID** column.
    
2.  In the **Historical Analysis** section of the path analysis details page, find the analysis record that you want to delete and click **Delete** in the **Actions** column.
    
3.  In the message that appears, click **OK**.
    

## Delete a path

You can delete a path that you no longer need to analyze.

1.  On the **Reachability Analyzer** page, delete the path.
    
    -   Delete a path: Find the path that you want to delete and click **Delete** in the **Actions** column.
        
    -   Delete multiple paths at a time: Select multiple paths and click **Delete** below the list.
        
2.  In the message that appears, click **OK**.
    

## **Manage tags**

The reachability analyzer allows you to add tags to paths or remove tags from paths. You can use tags to mark and group paths. This way, you can search for and manage paths by tags.

-   Add tags to multiple paths at a time
    

1.  On the **Reachability Analyzer** page, select the paths to which you want to add tags and choose **Add Tag** > **Batch Add Tags** below the list.
    
2.  In the **Edit Tag** dialog box, specify **Tag Key** and **Tag Value**, and then click **OK**.
    

-   Remove tags from multiple paths at a time
    

1.  On the **Reachability Analyzer** page, select the paths from which you want to remove tags and choose **Add Tag** > **Batch Delete Tags** below the list.
    
2.  In the message that appears, click **OK**. For more information about tags, see [Tag overview](/help/en/resource-management/tag/product-overview/tag-overview).
    

## Related operations

**Operation**

**Procedure**

View an analysis record

In the **Historical Analysis** section of the path analysis details page, view the historical analysis results.

Re-analyze a path

On the path analysis details page, click **Start Analyzing**.

Then, a path analysis record is added to the list in the **Historical Analysis** section. You can select a record to view based on the date in the **Analyzed At** column.

## FAQ

### Why does the reachability analyzer return the error message "The reachability analyzer is not supported because the path has an unsupported intermediate node"?

If the path that you created is not supported by the reachability analyzer, the error message is returned.

### Why does the reachability analyzer return the error message "The request matches the deny rule of the security group"?

For example, the security group rules of ECS instances in VPC 2 allow access only from ECS instances that are attached to vSwitch 1 in VPC 1. Access from ECS instances that are attached to other vSwitches in VPC 1 is denied. If you specify ECS 1 that is attached to vSwitch 2 in VPC 1 as the source and an ECS instance in VPC 2 as the destination, the reachability analyzer returns the error message "The request matches the deny rule of the security group". On the ENI of the destination ECS instance, you can find that access from ECS 1 is blocked by security group rules. To resolve this issue, modify the security group rules.

### **Why does the reachability analyzer return the error message "**The route is unreachable. Check the configuration of the route**"?**

If two ECS instances in different regions are connected by using a VPC peering connection, you must configure routes that point to the destination CIDR blocks in the route tables for the vRouters in the two regions. For example, VPC 1 is deployed in Region 1, and VPC 2 is deployed in Region 2. If you do not configure a route that points to VPC 2 for VPC 1, ECS 1 in Region 1 cannot connect to ECS 2 in Region 2. If you specify ECS 1 in VPC 1 as the source and ECS 2 in VPC 2 as the destination, the path is blocked by the vRouter in VPC 1. The reachability analyzer returns the error message "The route is unreachable. Check the configuration of the route".

## **References**

[CreateNetworkPath](/help/en/nis/developer-reference/api-nis-2021-12-16-createnetworkpath): creates a network path for reachability analysis.

[CreateNetworkReachableAnalysis](/help/en/nis/developer-reference/api-nis-2021-12-16-createnetworkreachableanalysis): creates a task for analyzing network reachability.

[CreateAndAnalyzeNetworkPath](/help/en/nis/developer-reference/api-nis-2021-12-16-createandanalyzenetworkpath): initiates a task for analyzing network reachability.

[GetNetworkReachableAnalysis](/help/en/nis/developer-reference/api-nis-2021-12-16-getnetworkreachableanalysis): obtains the result of network reachability analysis.

[DeleteNetworkPath](/help/en/nis/developer-reference/api-nis-2021-12-16-deletenetworkpath): deletes a network path.

[DeleteNetworkReachableAnalysis](/help/en/nis/developer-reference/api-nis-2021-12-16-deletenetworkreachableanalysis): deletes a task for analyzing network reachability.
