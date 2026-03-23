Switch a Tair (Redis OSS-Compatible) instance from the classic network to a Virtual Private Cloud (VPC) for stronger network isolation and lower latency.

## Before you begin

-   The instance uses the classic network. Check the network type in the **Basic Information** section on the instance details page.
    

## Impacts

-   **Irreversible:** After switching to VPC, you cannot switch back to the classic network.
    
-   **Brief disconnection:** The instance may disconnect for a few seconds during the switch. We recommend that you perform this operation during off-peak hours and make sure that your applications can automatically reconnect to the instance.
    

## VPC vs. classic network

**Network type**

**Description**

[VPC](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb) (recommended)

A private network dedicated to your Alibaba Cloud account. VPCs are logically isolated from each other at Layer 2, providing higher security and performance. Connect an [Elastic Compute Service (ECS)](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome) instance to a Tair instance over a VPC for lower latency.

Classic network

Cloud services on the classic network are not isolated. Unauthorized access can only be blocked by security groups or whitelists.

**Note**

A client deployed in a VPC cannot connect to a Tair instance deployed in the classic network. Switch the instance to the same VPC as the client to establish connectivity.

## Switch the network type

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  On the right side of the **Connection Information** section, click **Switch to VPC Network**.
    
3.  Configure the following parameters in the panel that appears.
    
    ![切换为专有网络](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3209503261/p1960.png)
    
    **Parameter**
    
    **Description**
    
    **VPC Network**
    
    Select the VPC to use. The VPC must be in the same region as the instance.
    
    **Virtual Switch:**
    
    Select the vSwitch to use. The vSwitch must be in the same zone as the instance. If no VPC or vSwitch appears in the drop-down list, no VPC or vSwitch is available in the region or zone where the instance resides. Create them first. See [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) and [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575). For example, if the instance is in Hangzhou Zone E, create a vSwitch in Hangzhou Zone E.
    
    **Retain the connection address of the classic network**
    
    Choose whether to keep the classic network endpoint.
    
    -   **Yes** -- The instance uses both the classic network and VPC endpoints. The classic network endpoint stays unchanged, but update your client to the VPC endpoint before the classic network endpoint expires.
        
    -   **No** -- The VPC endpoint remains the same as the original classic network endpoint. You do not need to modify the connection string on the client. However, the instance is accessible only over the VPC.
        
    
    **Retention Days**
    
    Set the number of days to keep the classic network endpoint. You can change this value later. See [Modify the expiration date of a classic network endpoint](/help/en/redis/user-guide/modify-the-expiration-date-of-a-classic-network-endpoint#concept-k1m-jcg-vdb).
    
4.  Click **OK**.
    

## FAQ

-   No vSwitch appears when I switch the network type
    
    No VPC or vSwitch exists in the region or zone where the instance resides. Create a VPC and vSwitch first. See [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) and [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
    For example, if the instance is in Hangzhou Zone E and no vSwitch appears after you select a VPC, create a vSwitch in Hangzhou Zone E, then try again.
    
-   Can an ECS instance and a Tair instance connect if they are in the same VPC but different vSwitches or zones?
    
    Yes. Instances in the same VPC within the same region have full network connectivity, regardless of their vSwitch or zone. Add the internal IP address of the ECS instance to the [IP address whitelist](/help/en/redis/user-guide/configure-whitelists) of the Tair instance.
    

## Related API operations

**API operation**

**Description**

[SwitchNetwork](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-switchnetwork-redis)

Switches the network type of an instance from classic network to VPC.

## References

-   [How do I troubleshoot connection issues in Tair?](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb)
    
-   [Change the VPC or vSwitch of an instance](/help/en/redis/user-guide/change-the-vpc-or-vswitch-of-an-instance#task-2038839)
