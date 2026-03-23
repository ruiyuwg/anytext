You can use Cloud Enterprise Network (CEN) to connect cloud computers across office networks or between an office network and a data center. This topic describes how to attach and detach an office network to and from a CEN instance.

## Background

CEN leverages Alibaba Cloud capabilities to provide global private networks that feature high-reliability, high performance, and low latency. You can use CEN to establish communication channels in different regions across virtual private clouds (VPCs) or between VPCs and data centers. CEN also helps improve network convergence, communication quality, and security. For more information, see [What is CEN?](/help/en/cen/product-overview/what-is-cen/#concept-2090845)

After you create a CEN instance, you can attach the CEN instance to an office network to establish communication between the office network and other instances in services such as Virtual Private Cloud (VPC), Virtual Border Route (VBR), and Cloud Connect Network (CCN), or across office networks.

### **Limits**

-   You can attach only an advanced office network to a CEN instance.
    
-   When you create an enterprise Active Directory (AD) office network, you must attach the office network to a CEN instance. You cannot detach the CEN instance from the office network.
    
-   An advanced office network can be attached to only one CEN instance.
    

### **Billing**

If you use CEN instances to establish communication between instances that are deployed in the same region, you do not need to purchase premium bandwidth plans. If instances are not deployed in the same region, you must purchase premium bandwidth plans. For more information, see [Billing rules](/help/en/cen/product-overview/billing-rules).

## Prerequisites

A CEN instance is created. For more information, see [CEN instances](/help/en/cen/user-guide/cen-instances-1).

## Attach an office network to a CEN instance

1.  Log on to the [Elastic Desktop Service console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Office Network (Formerly Workspace)** page, find the office network that you want to manage and click **Attach to CEN Instance** in the **Actions** column.
    
5.  In the **Attach to CEN Instance** dialog box, select a CEN instance from your Alibaba Cloud account or another Alibaba Cloud account and proceed as prompted.
    
    **Note**
    
    To ensure that cloud computers in the office network can run as expected, check whether the CIDR blocks of the office network and the route of the CEN instance overlap. If overlapping occurs, you must specify a new CIDR block for the office network or select another CEN instance.
    
6.  Click **OK**.
    
    After you attach the office network to the CEN instance, the VPC of the office network can communicate with other instances that are attached to the CEN instance. Traffic that is destined for cloud computers in Elastic Desktop Service is managed based on security group policies. By default, only outbound traffic is allowed. If you want to access cloud computers, add inbound security group rules. For more information, see [Configure a security group](/help/en/wuying-workspace/wuying-workspace-pro-edition/configure-a-security-group#task-2221309).
    

## Detach an office network from a CEN instance

**Warning**

After you detach an office network from a CEN instance, communication across office networks or between office networks and data centers become unavailable. This may cause network downtime. Proceed with caution.

1.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Office Network (Formerly Workspace)** page, find the office network that you want to manage and click **Detach from CEN Instance** in the **Actions** column.
    
4.  In the message that appears, click **OK**.
