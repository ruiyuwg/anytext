In Container Service for Kubernetes (ACK) dedicated clusters, master nodes require manual administration. As your cluster scales or workload patterns change, these nodes may experience resource constraints or idle capacity. This topic provides guidelines for modifying resource specifications of the master node.

## Prerequisite

An [ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/) is created.

## Considerations

**Important**

This operation may involve unexpected risks. Make sure to back up your data before proceeding.

-   Resource scaling requires node reboot. We recommend that you schedule these operations during off-peak hours to minimize business impact.
    
-   To modify the configurations of multiple master nodes, perform operations node-by-node to maintain cluster availability. Parallel modifications may trigger API server disruptions.
    
-   OS replacement is not supported in master nodes.
    

## Procedure

This section describes how to modify the specification for pay-as-you-go master nodes. For alternative scaling approaches, see [Overview of instance configuration changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Nodes** > **Nodes**.
    
3.  Locate the target master node requiring specification changes within your cluster. Click its instance ID to view details such as instance specifications on the **Instance Details** tab.
    
4.  In the **Configuration Information** section of the **Instance Details** tab, click **Change** on the right side of the instance type. The **Change Instance Type** dialog box appears.
    
5.  Select the new instance type that you want to use, confirm the estimated cost, and then click **Stop Instances and Proceed**.
    
    For recommended node specifications, see [Choose ECS specifications to create master nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster#section-g2v-jry-nfb).
    
6.  In the **Stop Instance** dialog box, set the **Stopped By** parameter and click **Confirm**. For more information about how to stop an instance, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance).
    
7.  After the configuration change is complete, click **Start Instance And Return**. In the **Start Instance** dialog box, click **OK**. Wait until the node is re-added to the cluster and enters the **Ready** state to finalize the resource specification change.
