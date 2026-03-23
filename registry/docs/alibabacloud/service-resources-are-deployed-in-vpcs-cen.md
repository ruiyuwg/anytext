If your business resources are deployed in Alibaba Cloud virtual private clouds (VPCs) that are attached to a Cloud Enterprise Network (CEN) instance, you can use the Secure Access Service Edge (SASE) gateway to connect your on-premises network to these resources. After the connection is established, users with the SASE client can access the resources over an internal network.

## Prerequisites

Before you begin, ensure that you have:

-   An activated SASE Private Access subscription
    
-   A CEN instance with one or more VPCs attached
    

**Important**

CIDR blocks of all business resources must be unique across your network. If CIDR blocks conflict, SASE cannot determine destination addresses. Common conflict scenarios include:

-   Cross-region VPCs that use the same CIDR block
    
-   A VPC and a data center that use the same CIDR block Verify that no CIDR block conflicts exist before you enable network connections.
    

## Network architecture

The following diagram shows how SASE connects to business resources in VPCs attached to a CEN instance.

![Network connection diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2469720371/CAEQJxiBgMDIuJPNgxkiIDEwYjM2MTc2MDk0NTQ4OWQ5ZTZjODU0MmFlOTQ2YTZm4110753_20231211114436.763.svg)

## Enable network connection

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Private Access** > **Network Settings**.
    
3.  On the **Services on Alibaba Cloud** > **CEN Instance** tab, review the synchronized business resources.
    
    **Parameter**
    
    **Description**
    
    **CEN Instance ID/Name**
    
    The ID and name of the CEN instance. Instances within your management account and added member accounts are displayed.
    
    **Owner Account**
    
    The account that owns the CEN instance. This can be either the management account or a member account.
    
    **Back-to-origin Address**
    
    The address used by the SASE gateway to reach resources through the CEN instance. For Elastic Compute Service (ECS) instances in VPCs connected to the CEN instance, the system automatically adds a security group rule to allow this address. If you connect a virtual border router (VBR) or Smart Access Gateway (SAG) instance to the CEN instance and the VBR or SAG instance is configured with access control lists (ACLs), you must configure an ACL to allow the back-to-origin address.
    
4.  Find the CEN instance or VPC and turn on the **Network Connection** toggle. You can enable **Network Connection** at either the CEN level or the VPC level:
    
    -   **CEN-level connection** A back-to-origin link is established between the SASE gateway and all network resources connected to the CEN instance. The SASE gateway verifies access traffic based on zero trust policies and then forwards traffic to destination addresses. All CEN-connected VPCs are connected to the network of the SASE client users. When you turn on **Network Connection**, select a VPC for back-to-origin traffic. ![Select a back-to-origin VPC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1769520371/p865543.png) After you select the VPC, the console displays the back-to-origin VPC and the automatically assigned back-to-origin address. ![Back-to-origin VPC and address](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1769520371/p865548.png) > **Note:** After you select a back-to-origin VPC for a CEN instance, the back-to-origin addresses that are configured for your VPC, VBR, and SAG instance are automatically released. The system also adds a security group rule to allow the back-to-origin address for ECS instances in VPCs connected to the CEN instance.
        
    -   **VPC-level connection** Only the specified VPC is connected to the network of the SASE client users. Other VPCs attached to the same CEN instance are not connected to the user network. ![VPC-level network connection](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1769520371/p865554.png) After you turn on **Network Connection**, the console displays the default back-to-origin address assigned in that VPC.
        

## Add custom CIDR blocks

If your business application is deployed in a VPC and uses other connected resources whose CIDR blocks are not automatically synchronized to SASE (and do not appear on the **Services on Alibaba Cloud** or **Services Outside Alibaba Cloud** tab), manually add the CIDR blocks to connect SASE to those resources.

**Important**

After you add a custom CIDR block for a VPC, the back-to-origin address of the VPC is also used as the back-to-origin address of the custom CIDR block. Make sure that access from the VPC to the applications that use the custom CIDR block is available.

![Add custom CIDR block](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1769520371/p865565.png)

## Allow the back-to-origin address

SASE accesses origin servers in proxy mode. If access control policies are configured on an origin server, the server may identify the back-to-origin address as suspicious and block the forwarded traffic. To prevent this, add the back-to-origin address to the whitelist in the access control policies on the origin server.

## Change the back-to-origin VPC

To change the back-to-origin VPC for a CEN instance, click **Select Back-to-origin VPC** in the **Actions** column.

![Change back-to-origin VPC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2469720371/p865935.png)

## Multi-account VPC management

If you want to manage VPCs within a member of your resource directory, you must add the member first. After the member is added, you can view the VPCs within the management account and added member on the **Private Access** > **Network Settings** > **Services on Alibaba Cloud** page. If no member is added, you can view only the VPCs within the management account on the page.

For details, see [Use the multi-account management feature](/help/en/sase/user-guide/multi-account-management#task-2065914).

## Disable network connection

Turn off **Network Connection** for a VPC or CEN instance to terminate the back-to-origin link between the SASE gateway and the associated resources. After the connection is disabled, users can no longer access those resources from the SASE client.

**Warning**

Disabling network connection immediately cuts off internal network access to office applications through the SASE client. Proceed with caution.

## Next steps

After you enable network connections, complete the following tasks:

-   [Configure office applications](/help/en/sase/user-guide/application-management) to define which applications users can access
    
-   [Configure zero trust policies](/help/en/sase/user-guide/configure-a-zero-trust-policy) to control access based on identity and context
    

## References

-   [Configure an office application whitelist](/help/en/sase/user-guide/application-management#1a186b932fvo8) to allow traffic from specific IP addresses
    
-   [Enable network connections for services outside Alibaba Cloud](/help/en/sase/user-guide/non-alibaba-cloud-business/) to connect SASE to non-Alibaba Cloud business applications
    
-   [Enable network connections for applications in global office scenarios](/help/en/sase/user-guide/open-up-the-network-channel-of-global-office) to connect SASE to applications in global offices
