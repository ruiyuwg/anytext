Create a Lingjun cluster to organize compute nodes and connection instances into node groups.

## Prerequisites

-   Purchase compute nodes and Lingjun connection instances. For more information, see [Purchase products](/help/en/pai/user-guide/cluster-management#task-2232375).
    
-   Purchase and configure Alibaba Cloud services: Cloud Enterprise Network (CEN), Application Real-Time Monitoring Service (ARMS), and Virtual Private Cloud (VPC). For more information, see [Purchase and configure other cloud products](/help/en/pai/user-guide/purchase-and-configure-other-cloud-products#task-2234450).
    

## Open the cluster creation page

1.  Log on to the [Lingjun console](https://lingjun.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Resources & Nodes** > **Cluster Management**.
    
3.  Click **Create Cluster**.
    
4.  Click the **Basic Lingjun Cluster Service** card.
    
    Complete [cluster and group configuration](#section-xec-d71-aoh) and [network configuration](#section-fps-ysg-mm5).
    

## Configure cluster and node groups

Plan clusters and organize compute nodes into node groups to improve resource utilization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069123771/CAEQTxiBgMDe1tOa2BkiIGM3MzkzZDAyZTAzMjQxOWFiM2Q1N2JiZDNiN2E1NDlj3963382_20230830144006.372.svg)

1.  Configure cluster information.
    
    Enter cluster name, root password for cluster nodes, and resource group. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group).
    
2.  Click **Create Group** to configure node group information.
    
    1.  Configure group name and node information: node model and runtime image.
        
    2.  Click **Select Node Instances** to choose nodes to add to this group.
        
3.  Click **Save and Next: Network Configuration**.
    

## Configure network

By default, clusters run in isolated network environments. To connect a cluster to public cloud, use a Lingjun connection instance and CEN instance, and specify a VPC to monitor network connectivity.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0069123771/CAEQUBiBgMCHkZmI2RkiIDNiYmRiYWQ2MWRhYjQxOTBhOWNkZGVhYTYyOTc3ZGMw3963382_20230830144006.372.svg)

Network configuration involves these networks:

-   **Cluster CIDR block**: Private CIDR block to assign IP addresses to compute nodes.
    
-   **Monitoring network**: VPC to monitor network connectivity.
    

Ensure CIDR blocks do not overlap.

**Note**

After configuring cluster network, verify CEN network configuration. For more information, see [Purchase and configure CEN](/help/en/pai/user-guide/purchase-and-configure-other-cloud-products#task-2234450/section-otd-kt9-pbi).

1.  Configure the cluster CIDR block.
    
    -   Enter a valid private CIDR block to assign IP addresses to compute nodes.
        
    -   The cluster subnet is a subnet of the cluster CIDR block. For more information, see [Manage Lingjun CIDR blocks](/help/en/pai/user-guide/lingjun-cidr-block).
        
    
    **Note**
    
    -   Cluster CIDR block cannot overlap with other connected networks: VPCs or on-premises data centers.
        
    -   Available IP addresses in the cluster CIDR block determine maximum nodes. Reserve a sufficiently large CIDR block (mask length less than 22 recommended) for future scaling.
        
    
2.  (Optional) Configure cluster subnet bond allocation policy. This policy configures allocation of bond interfaces on physical network cards. Configure bond interfaces using a bond policy, model policy, or node policy.
    
    ## Add a bond policy
    
    Node models have different numbers of bond interfaces. The cluster bond interface count is determined by the model with the most bond interfaces. Bond interfaces are named bondx, where x uses zero-based numbering.
    
    For example, if a cluster has two node models with 3 and 4 bond interfaces, the cluster has 4 bond interfaces: bond0 through bond3. The 3-interface model uses policies for bond0 through bond2.
    
    **Note**
    
    Configure only one bond allocation policy per cluster.
    
    ### Steps
    
    1.  Configure the bond policy for the cluster.
        
    2.  (Optional) Configure the default bond. This policy applies to bond interfaces without specific policies. Select **Apply to all** to apply the default policy to all bond interfaces.
        
    
    ## Add a model policy
    
    Specify a model allocation policy for each node model. Create up to the number of groups in the cluster.
    
    ### Procedure
    
    1.  Select the node model from the drop-down list.
        
    2.  Configure the bond policy. The policy applies to all node instances of the selected model.
        
    
    ## Add a node policy
    
    Configure a node allocation policy for each node instance. Different bond ports of the same node can connect to different Lingjun CIDR blocks or subnets.
    
    ### Procedure
    
    1.  Select the node instance from the drop-down list.
        
    2.  Configure the bond policy. The policy applies to the selected node instance.
        
    
3.  Configure a Lingjun connection instance.
    
    1.  Click **Authorize** to grant required permissions to the Lingjun connection instance.
        
        The Lingjun connection instance connects to CEN and accesses cloud products. Grant Lingjun permissions to access these products. For more information, see [Appendix: Service-linked role for Lingjun connection instances](/help/en/pai/user-guide/appendix-cloud-service-associated-roles).
        
    2.  From the drop-down list, select the Lingjun connection instance ID for cluster connection to cloud.
        
    3.  From the drop-down list, select the Cloud Enterprise Network instance to connect through the Lingjun connection instance.
        
        **Important**
        
        Create a transit router in CEN. The transit router region must match the Lingjun node region. For more information, see [Transit router instances](/help/en/cen/user-guide/transit-routers).
        
4.  Configure monitoring network information.
    
    1.  Create a new VPC or connect an existing VPC to the transit router in the selected CEN instance. For more information, see [Enable and configure CEN](/help/en/pai/user-guide/purchase-and-configure-other-cloud-products#section-otd-kt9-pbi). Ensure the vSwitch in the VPC has at least one available IP address. Lingjun uses this vSwitch to monitor Lingjun connection instance connectivity.
        
        **Important**
        
        -   Select a VPC from the drop-down list only after connecting the VPC to the selected transit router.
            
        -   The cluster CIDR block and monitoring VPC CIDR block cannot overlap. The monitoring VPC CIDR block also cannot overlap with other connected networks: VPCs or on-premises data centers.
            
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7794423071/p488467.png) icon next to the VPC and vSwitch drop-down lists. Select the VPC and vSwitch.
        
5.  Click **Save and Next: Basic Software Instance Parameters**.
    

## Confirm configuration

On the **Confirm Configuration** page, review cluster basic information, network information, and software instance parameters. If the information is correct, click **Submit Configuration** to create the cluster. After creation completes, you are redirected to **Cluster Management**.
