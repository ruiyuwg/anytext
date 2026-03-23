When the system detects a failure in an Express Connect circuit, the system performs a failover within a few seconds. To accelerate failovers, you can add virtual border routers (VBRs) to a failover group. After the system detects failures on a VBR by using Bidirectional Forwarding Detection (BDF), the system can seamlessly switch workloads to the standby VBR in the failover group within less than one second. This accelerates route convergence.

## Limits

-   You can add only VBRs that have BFD enabled to failover groups.
    
-   Each failover group can contain only two VBRs and each VBR can be added to only one failover group.
    
-   VBRs in the same failover group must be deployed in the same region and associated with the same Express Connect Router (ECR) or Cloud Enterprise Network (CEN) instance.
    
-   If [a failover group is already configured](/help/en/express-connect/user-guide/ecr-supports-multiple-vbr-configurations-for-fast-switching-groups) for a VBR specified by ECR, you need to delete the failover group before you configure a failover group for the VBR.
    
-   You must configure the VBRs in a failover group as active and standby VBRs and configure load balancing for the VBRs.
    

## Prerequisites

-   Two [VBRs](/help/en/express-connect/user-guide/create-and-manage-a-vbr) are created in the same region and each VBR is connected to your data center over an Express Connect circuit.
    
-   Two VBRs are associated with the same [ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr) or CEN instance.
    
-   [BFD](/help/en/express-connect/user-guide/create-and-manage-a-vbr) is configured for the VBRs.
    

## Create a failover group

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region and click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
    
3.  On the **Virtual Border Routers (VBRs)** page, click the ID of the VBR.
    
4.  On the VBR details page, click the **Failover Groups** tab, and click **Configure Backup Next Hop**.
    
5.  In the **Configure Backup Next Hop** dialog box, set the following parameters and click **OK**:
    
    **Parameter**
    
    **Description**
    
    **Forwarding Gateway**
    
    The system automatically displays the ECR or CEN instance that is associated with the VBR.
    
    If the VBR is not associated with an ECR or CEN instance, click **Attach Now** and proceed as prompted.
    
    **Region**
    
    The system automatically displays the region where the VBR is deployed.
    
    **Failover Group Name**
    
    Enter a name for the failover group.
    
    The name must be 2 to 128 characters in length and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`.
    
    **Description**
    
    Enter a description for the failover group.
    
    **Standby VBR**
    
    Select a standby VBR from the drop-down list.
    
    The system automatically lists all VBRs that are deployed in the same region, associated with the same ECR or CEN instance, and have BFD enabled.
    
    After you complete the preceding steps, the status of the failover group changes to Normal.
    
    **Note**
    
    You cannot modify the configuration of a failover group after the failover group is created. If the configuration of a failover group does not meet your business requirements, click **Delete** in the **Actions** column to delete the failover group. Then, create another failover group that meets your business requirements.
    

## Test the failover group

After you complete the preceding steps, you can perform the following operations to test the failover group:

1.  Log on to an Elastic Compute Service (ECS) instance. For more information, see [Connection method overview](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Run the `ping` command on the ECS instance to check the connectivity between the ECS instance and your data center.
    
    If you can receive echo reply packets, it indicates that the connection is established.
    
3.  Disconnect the active VBR from the data center.
    
4.  Run the `ping` command again on the ECS instance to check the connectivity between the ECS instance and your data center.
    
    If you can receive echo reply packets, it indicates that the connection is switched to the standby VBR in the failover group.
