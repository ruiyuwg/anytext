If the business resources of an enterprise are deployed in virtual private clouds (VPCs) of Alibaba Cloud and the VPCs are not connected to Cloud Enterprise Network (CEN) of Alibaba Cloud, you can use the Secure Access Service Edge (SASE) gateway to connect the on-premises network of the enterprise to the business resources in Alibaba Cloud. This way, the users of the enterprise can access the business resources over an internal network. This topic describes how to turn on and turn off Network Connection. This topic also describes how to change the back-to-origin address of the SASE gateway.

## **Manage VPCs across multiple Alibaba Cloud accounts**

If you want to manage VPCs within a member of your resource directory, you must add the member first. After the member is added, you can view the VPCs within the management account and added member on the Private Access > **Network Settings** > **Services on Alibaba Cloud** page of the SASE console. If no member is added, you can view only the VPCs within the management account on the page. For more information, see [Multi-account management](/help/en/sase/user-guide/multi-account-management#task-2065914).

## **Precautions**

If CIDR blocks conflict, SASE cannot determine destination addresses. For example, if cross-region VPCs use the same CIDR block, a conflict occurs. If a VPC and a data center use the same CIDR block, a conflict occurs. Before you enable network connections, make sure that the CIDR blocks of your business resources do not conflict.

## **Network connection diagram**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9468910371/CAEQJxiBgICmjM7agxkiIDYzNjY0Y2YxNmJlNzRiOTQ4YWNjYjQxOGI4ZWZiNWJj4110753_20231211111315.359.svg)

## **Turn on Network Connection**

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Private Access** > **Network Settings**.
    
3.  On the **Services on Alibaba Cloud** > **VPCs (No CEN Instances Associated)** tab of the **Network Settings** page, view the business resources that are synchronized to SASE.
    
    **Parameter**
    
    **Description**
    
    **Instance ID/Name**
    
    The ID and name of the VPC. VPCs within the management account and the added member of your resource directory are displayed.
    
    **Owner Account**
    
    The account to which the VPC belongs. The account can be the management account or a member.
    
    **Region**
    
    The region where the VPC resides.
    
    **VPC CIDR Block**
    
    The CIDR block of vSwitches in the VPC.
    
4.  Find the VPC that you want to manage and turn on the switch in the Network Connection column.
    
    After you turn on **Network Connection**, the SASE console displays the default back-to-origin address that is assigned in the VPC.
    
    The back-to-origin address is the IP address to which the origin server sends responses after the SASE gateway initiates access requests.
    

## **Enable network connections for other VPC-connected business resources**

Assume that your business application is deployed in a VPC and is configured with other business resources that are connected to the VPC. If the business resources cannot be synchronized to SASE and you cannot view the resources on the Services on Alibaba Cloud or Services Outside Alibaba Cloud tab, you can manually add CIDR blocks of the resources to connect SASE to the business resources.

**Important**

After you add a custom CIDR block for a VPC, the back-to-origin address of the VPC is also used as the back-to-origin address of the custom CIDR block. Make sure that access from the VPC to the applications that use the custom CIDR block is available.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1311489271/p863616.png)

## **Allow a back-to-origin address**

SASE accesses origin servers in proxy mode. If access control policies are configured on an origin server, the server identifies a back-to-origin address as suspicious based on the policies. In this case, the traffic forwarded by the proxy server to the origin server is blocked. As a result, your application or website cannot be accessed. To resolve this issue, you must allow the back-to-origin address in the access control policies on the origin server.

## **Change a back-to-origin IP address**

If you want to change a back-to-origin address, you can move the pointer over the address in the **Back-to-origin Address** column and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7859410271/p745995.png)icon in the popover that appears.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1311489271/p755762.png)

**Important**

After you change the back-to-origin address, the connection between the VPC and SASE is interrupted, and the interruption lasts for approximately 1 minute. Proceed with caution.

## **Turn off Network Connection**

If you turn off **Network Connection** for a VPC, the back-to-origin link between the SASE gateway and resources in the VPC is terminated. The users can no longer access the resources from the SASE client.

**Warning**

If you turn off Network Connection, users can no longer use the SASE client to access office applications over an internal network. Proceed with caution.

## What to do next

After you enable network connections, you must configure applications to allow users to access the applications. For more information, see [Configure office applications](/help/en/sase/user-guide/application-management) and [Configure zero trust policies](/help/en/sase/user-guide/configure-a-zero-trust-policy).

## **References**

-   You can connect SASE to business applications that are not deployed on Alibaba Cloud. For more information, see [Enable network connections for services outside Alibaba Cloud](/help/en/sase/user-guide/non-alibaba-cloud-business/).
    
-   You can connect SASE to applications in global offices. For more information, see [Enable network connections for applications in global office scenarios](/help/en/sase/user-guide/open-up-the-network-channel-of-global-office).
    
-   If you want to allow traffic from specific IP addresses after you configure applications, you can configure an application whitelist. For more information, see [Configure an office application whitelist](/help/en/sase/user-guide/application-management#1a186b932fvo8).
