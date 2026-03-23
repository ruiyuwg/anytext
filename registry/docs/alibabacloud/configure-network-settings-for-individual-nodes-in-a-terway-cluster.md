If your cluster uses the Terway network plug-in, all nodes in the cluster use the network settings in the eni-config ConfigMap that belongs to the `kube-system` namespace. If you want to configure network settings, such as vSwitches and security groups, for nodes, you can create another ConfigMap. Terway merges the new configurations with the default configurations in the [MergePatch(rfc7396)](https://tools.ietf.org/html/rfc7396) format. This topic describes how to configure network settings for nodes in a cluster that uses Terway.

## Prerequisites

vSwitches and security groups are created. For more information, see [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575) and [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb).

## Scenario

Configure separate egress NAT IP addresses and bandwidth values for specific pods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4982077371/CAEQJhiBgMCkl92L_xgiIDRlODA1NTE5NDI3MzQ0Mjg5Mzk5Yzk5Njg4OTlkOTA13963382_20230830144006.372.svg)

## Usage notes

If you want the existing elastic network interfaces (ENIs) to use the specified vSwitches and security groups, you must recreate the ENIs. The existing ENIs use only the original vSwitches and security groups. We recommend that you configure these network settings for new nodes.

## Procedure

1.  In the `kube-system` namespace, create a ConfigMap named `foo`.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
        
    3.  On the **ConfigMap** page, select **kube-system** from the **Namespace** drop-down list and click **Create** in the upper-right corner.
        
    4.  In the **Create** panel, set the **ConfigMap Name** parameter to **foo**. Click **Add**. Set the **Name** parameter to **eni\_conf** and enter the following content in the **Value** field. Replace the values of the vswitches and security\_group parameters with the actual values.
        
        ```
        {
            "vswitches": {
                "cn-hangzhou-g": [
                    "vsw-10000"
                ],
                "cn-hangzhou-i": [
                    "vsw-10001"
                ]
            },
            "security_group": "sg-10000",
            "security_groups": [
                "sg-10000",
                "sg-10001"
            ]
        }
        ```
        
        **Parameter**
        
        **Description**
        
        vswitches
        
        The vSwitch IDs and the zone IDs of the vSwitches.
        
        Log on to the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/vpc). In the left-side navigation pane, click **vSwitch**. On the vSwitch page, you can view vSwitch IDs and the zone IDs of the vSwitches. Take note of the following items when you specify vSwitch IDs and zone IDs.
        
        -   Make sure that the vSwitches that you specify reside in the same zone as the nodes that you want to manage. If the vSwitches reside in a different zone, this parameter does not take effect.
            
        -   If you want to use the sample settings, you do not need to modify the values of the `vswitches` parameter.
            
        
        security\_group
        
        -   To add only one security group, specify the `security_group` parameter and set the `security_groups` parameter to null.
            
        -   To add one or more security groups, specify the `security_groups` parameter and set the `security_group` parameter to null.
            
        -   The system uses all the security groups specified in the `security_group` parameter and the `security_groups` parameter. Make sure that all security groups are associated with the same VPC and are of the same type. You can add up to five security groups. For more information about how to configure multiple security groups, see [Associate multiple security groups for an ENI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-multiple-security-groups-with-an-eni#task-2160715).
            
        -   If you want to use the sample settings, you do not need to modify the parameters.
            
        
        security\_groups
        
    5.  Click **OK**.
        
2.  Add labels to nodes.
    
    -   Add labels to the existing nodes.
        
        1.  Add labels.
            
            1.  In the left-side navigation pane of the cluster details page, choose **Nodes** > **Nodes**. In the upper-right corner of the Nodes page, click **Manage Labels and Taints**.
                
            2.  On the **Labels** tab, select the nodes to which you want to add labels and click **Add Label**.
                
            3.  In the **Add** dialog box, set the **Name** parameter to **terway-config** and the **Value** parameter to **foo**. Then, click **OK**.
                
        2.  Restart the Terway pods to make the modification take effect.
            
            1.  In the left-side navigation pane of the cluster details page, choose **Workloads** > **Pods**.
                
            2.  In the upper part of the Pods page, select **kube-system** from the **Namespace** drop-down list, enter `terway-eniip` in the search box, and then click the search icon. Select all the pods displayed on the page and click **Batch Delete**.
                
            3.  In the Delete Pod message, click **OK**. After you delete the pods, the system automatically recreates the Terway pods.
                
                On the Pods page, if **Running** is displayed in the **Status** column of the pods whose names start with `terway-eniip`, the Terway pods are restarted. The specified vSwitches and security groups are used after the Terway pods are recreated.
                
    -   Add labels to new nodes.
        
        When you create a node pool, add a label to the node. Set the **key** to **terway-config** and the **value** to **foo**. For more information about how to create a node pool, see the [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-eq0-lmv-4a7) section of the "Create a node pool" topic.
        
    
3.  Check whether the ENI that is used to allocate IP addresses to Terway pods is associated with the specified vSwitches and security groups.
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com). In the left-side navigation pane, choose **Instances & Images** > **Instances**.
        
    2.  Click the name of the ECS instance that you want to manage. On the instance details page, click the **ENIs** tab. Check whether the ENI that is used to allocate IP addresses to pods is associated with the specified vSwitches and security groups.
        
    
    **Note**
    
    For more information about how to resolve the issue that the configuration does not take effect, see the [What do I do if the IP address of a newly created pod does not fall within the vSwitch CIDR block in Terway mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-t4a-ene-hcq) section of the "FAQ about container networks" topic.
