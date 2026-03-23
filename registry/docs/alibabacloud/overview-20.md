After you purchase Lingjun resources or general computing resources, you can create resource quotas to allocate resources effectively. You can then associate these resources with workspaces for AI development and inference services.

**Important**

For Lingjun resources, confirm that all nodes share the same hz value to ensure high-speed network connectivity between them.

## **Prerequisites**

Before you create a resource quota, complete the following preparations:

-   Purchase [Lingjun resources](/help/en/pai/user-guide/create-and-manage-intelligent-computing-lingjun-resources) or [general computing resources](/help/en/pai/user-guide/create-and-manage-general-training-resources/).
    
-   (Required only for Lingjun resource quotas) Create a [virtual private cloud (VPC)](/help/en/vpc/user-guide/create-and-manage-a-vpc), a [vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc), and a [security group](/help/en/ecs/user-guide/create-a-security-group-1).
    

## **Create a resource quota**

To create a resource quota, perform the following steps:

1.  Log on to the PAI console. In the left-side navigation pane, choose [AI Computing Resources > Resource Quota](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/quota).
    
2.  On the **Intelligent Computing Lingjun resources** or **General Computing Resources** tab, click **Add Resource Quota**. Configure the following parameters and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Name**
    
    The name of the resource quota.
    
    **Associate Workspace**
    
    After you select a workspace, the resource quota is associated with the workspace. You can use the resource quota in this workspace.
    
    **Resource Information**
    
    **Source Type**
    
    The following two source types are supported:
    
    -   **Lingjun Intelligent Computing Resource Group**: Allocate resources from a dedicated resource group to the resource quota. The created resource quota is a root resource quota.
        
    -   **Existing Resource Quota**: Allocate resources from an existing resource quota to the resource quota. The created resource quota is a child resource quota.
        
    
    For more information about the relationship between parent and child resource quotas, see [Resource quota](/help/en/pai/user-guide/resource-quota/).
    
    **Source**
    
    The source of resources that are used to create the resource quota. Select a dedicated resource group or an existing resource quota from the drop-down list.
    
    **Node/Specification**
    
    Click **Add** and select node specifications from an existing resource quota or dedicated resource group.
    
    > In a Lingjun AI Computing Service scenario, you can select nodes with the same high-speed network interconnection zone (hz) number to enable the high-speed network communication feature between them.
    
    **Scheduling Information**
    
    **Scheduling Policy**
    
    The scheduling policy that you want to use to improve resource utilization. Valid values:
    
    -   Intelligent
        
    -   Balance
        
    -   Traversal policy
        
    -   First In, First Out (FIFO)
        
    
    For more information about scheduling policies, see [Scheduling policies](/help/en/pai/user-guide/scheduling-policies).
    
    **Child-level Preemption**
    
    If you turn on this switch, when resources are limited, queued tasks in the current resource quota are allowed to preempt running tasks in child resource quotas. For more information, see [Enable child computing power preemption](/help/en/pai/user-guide/resource-quota-quota-preemption-policy#5d72d78b28t4u).
    
    **Self-level Preemption**
    
    If you turn on this switch, when resources are limited, queued tasks in the current resource quota are allowed to preempt running tasks at the same level. For more information, see [Enable same-level computing power preemption](/help/en/pai/user-guide/resource-quota-quota-preemption-policy#fa60b3a42d6rb).
    
    **Idle Sharing**
    
    This switch is turned on by default. This indicates that resources in resource quotas at the same level and child levels can be used by idle tasks.
    
    **Network Information**
    
    **VPC**
    
    You need to configure network information only when you create a resource quota for Lingjun resources. You can configure network information to control the network scope of the resource quota and ensure the rationality and security of resource allocation.
    
    Select a VPC, a vSwitch, and a security group from the drop-down lists. If you need to access the Internet, you can turn on the **Default Internet Gateway** switch and select a **NAT Gateway** and an **Elastic IP Address**.
    
    **Security Group**
    
    **vSwitch**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9975802571/p983558.png)
    

## **Use a resource quota**

-   Attach workspace
    
    Before you use a resource quota to perform AI development and inference services, you must associate the resource quota with a workspace. To associate a resource quota with a workspace, perform the following steps:
    
    **Note**
    
    If you have associated the resource quota with a workspace when you created the resource quota, you can skip this step.
    
    1.  On the **Resource Quota** page, click the name of the resource quota.
        
    2.  On the **Overview** tab, in the **Basic Information** section, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9975802571/p808225.png) next to **Workspace** to add or modify the workspace for the resource quota.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9975802571/p934024.png)
        
    
    After you associate the resource quota with a workspace, you can configure resource quota usage policies in the **Scheduling Configuration** section on the workspace details page. For more information, see [Workspace scheduling center](/help/en/pai/workspace-scheduling-center).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9975802571/p934027.png)
    
-   Use a resource quota that is associated with a workspace for AI development and inference services.
    
    -   Select an image
        
        To submit a Deep Learning Containers (DLC) training job by using a resource quota for Lingjun resources involves the integration of hardware and software, such as the servers, networks, drivers, and training frameworks. Therefore, we recommend that you use the official PAI image or build an image based on the official PAI image.
        
        **Note**
        
        If you use a custom image, you may need to update the drivers, frameworks, and software to appropriate versions to make full use of the high-performance Lingjun resources.
        
    -   Use resource quotas
        
        -   [Create a distributed training (DLC) job](/help/en/pai/user-guide/create-a-training-task/)
            
        -   [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances)
            
        -   [Deploy an EAS service](/help/en/pai/user-guide/service-deployment/)
