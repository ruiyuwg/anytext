Alibaba Cloud ENS is built on more than 3,200 edge nodes that cover all regions and ISPs in the Chinese mainland and more than 70 countries and regions outside the Chinese mainland. More than 900 public cloud edge nodes are open around the world. Edge nodes differ in network architecture and devices used and thus provide different capabilities. The **capability map** is now available to help you quickly query capabilities supported by each edge node. This topic describes the capability map.

## Benefits

Capabilities of ENS are divided into general capabilities and specialized capabilities based on distribution. General capabilities are independent of edge node differences and are supported by all edge nodes. Examples: security groups and key pairs. Specialized capabilities are supported by specific edge nodes. You can use the capability map to query specialized capabilities.

**Note**

By default, all edge nodes support the following capabilities: images, key pairs, security groups, vSwitches, and network access control lists (ACLs).

## Scenarios

The capability map is applicable to the following scenarios. You can determine whether to use this feature based on your business requirements.

1.  ENS is activated and used on some edge nodes. You want to know the support of the edge nodes for other capabilities to determine whether to expand business scenarios.
    
2.  You know capabilities required for your business scenarios and want to query which edge nodes support the capabilities for subsequent deployment.
    

## Procedure

1.  Log on to the [ENS console](https://ens.console.alibabacloud.com/#/overview). In the left-side navigation pane, click **Overview**.
    
2.  On the **Overview** page, click **Capability Map**.
    

## Metrics

### View capabilities of an edge node

-   **Basic query**
    
    -   In the upper-left corner of the **Query Capabilities by Nodes** tab, click **Select a node**, and select edge nodes that you want to query.
        
    -   All edge nodes are classified by region. You can select edge nodes based on your business requirements and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5710510571/p928695.png)
        
-   **Simplified display**
    
    -   You can also filter capabilities based on the capability level.
        
    -   In the results section, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8400532471/p928099.png) icon next to **Primary Capability**.
        
        **Note**
        
        ENS capabilities are divided into multiple levels. For example, disks is a primary capability, and all-flash disks is a secondary capability.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8400532471/p928693.png)
        
-   **Additional description**
    
    -   **Status description**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5710510571/p928513.png)
        
        -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8400532471/p928121.png) indicates that the edge node supports the ENS capability.
            
        -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8400532471/p928119.png) indicates that the edge node does not support the capability. You can contact your business manager to apply for the capability.
            
            **Note**
            
            Note: You may be added to whitelists of edge nodes in which the capability is supported. If an edge node is not found when you purchase the capability, contact your business manager to add you to the whitelist.
            
    -   **Page layout:** You can select **Columns per Page** in the lower-right corner to fit the UI of devices with different display widths. Valid values: 6, 8, and 10.
        

### View edge nodes that support a capability

-   **Basic query**
    
    -   On the **Capacity Map** tab, click **Query Nodes by Capacities**.
        
    -   In the filter box, select capabilities that you want to query. ENS displays edge nodes that support the selected capabilities. After you select edge nodes on which you want to deploy the capabilities, you can click **Copy Selected Nodes** in the upper-right corner of the page and save the edge nodes for your subsequent use.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5710510571/p928545.png)
        
-   **Create resources based on edge nodes**
    
    If the selected capabilities meet the specific rules, the **More operations** feature is triggered to generate resource creation options. You can select edge nodes from the query results and create resources on the edge nodes. This prevents repeated redirections.
    
    **Example**
    
    -   After you select X86 Compute Instances and VPC and select the edge nodes that you require, the **Capability Map** feature generates the **Create x86 Compute Instance** option. You can click **Create x86 Compute Instance** in the lower-left corner to select a creation method.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5710510571/p928726.png)
        
        -   **VPC Hosting**
            
            After you select VPC, the ENS redirects to the instance creation page. For more information about how to create an instance, see [Create an instance](/help/en/ens/create-an-instance).
            
        -   **Self-managed VPC**
            
            After you select Self-managed VPC, a dialog box appears and you can create an instance on an edge node where a VPC has been created. ENS pre-fills the required parameters, such as the VPC and edge node.
            
            **Note**
            
            ENS automatically checks whether a VPC exists on the selected edge node. If you have not created a VPC on the edge node, create one and try again. For more information about how to create a VPC and vSwitch, see [Create and manage VPCs and vSwitches](/help/en/ens/create-and-manage-vpc-and-vswitch).
