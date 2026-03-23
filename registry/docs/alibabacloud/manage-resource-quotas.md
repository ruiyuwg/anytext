You can manage the resource quotas that you created. For example, you can add parent-child resource quotas, scale up or down resource quotas, and view resource quota lists and details.

**Important**

For Lingjun resources, confirm that all nodes have the same frequency to ensure high-speed network connectivity between them.

## **Create parent-child quotas**

On the [Resource Quota](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/quota) page, follow these steps to create parent and child resource quotas. After creation, resource quotas form a tree structure (QuotaTree) to achieve flexible and fine-grained resource management and allocation. For more information about the parent-child relationship diagram, see [Features](/help/en/pai/user-guide/resource-quota/#669ea9307d65m).

-   Create a parent resource quota: Click **New Resource Quota** to create a root resource quota. For more information, see [Cloud-native resource quotas](/help/en/pai/user-guide/cloud-native-resource-quota/).
    
-   Create a child resource quota: Create a new resource quota, or find an existing resource quota and click **New Child-level Resource Quota** in the **Actions** column.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1324004471/p934062.png)

## **Scale quotas**

After a resource quota is created, you can adjust its size for effective cost management.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1324004471/p934059.png)

On the [Resource Quota](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/quota) page, find the resource quota that you want to manage and click **Scale** in the **Actions** column. On the page that appears, modify the **Source** and **Node/Specification** parameters to scale up or down the resource quota.

-   Scale-up: Add or adjust the source or specifications of resources to increase available resources for the resource quota.
    
-   Scale-down: Reduce the number of nodes for associated resource specifications or remove specific resource specifications to release idle resources.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p983489.png)

## **View quota lists**

On the [Resource Quota](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/quota) page, go to the **Intelligent Computing Lingjun resources** or **General Computing Resources** tab to view the created resource quotas.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1324004471/p934090.png)

The list displays basic information about resource quotas, including name, type, associated workspace, status, and resource amounts (including GPU cards, CPU cores, and memory). You can perform the following operations:

-   **Filter resource quotas**: You can filter resource quotas by **Name/ID** or **Status**.
    
-   **Sort by resource amount**: You can view the scheduled and total amount of resources, and sort by CPU, memory, or GPU resource totals and scheduled amounts to understand resource distribution and usage.
    

## **View quota details**

On the [Resource Quota](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/quota) page, go to the **Intelligent Computing Lingjun resources** or **General Computing Resources** tab, and click a resource quota name to view its details. You can view resource quota details and modify configurations from the following dimensions:

### **Overview**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p934285.png)

On the details page, go to the **Overview** tab to view and update related configurations:

-   **Basic Information**: Includes resource quota name, ID, and associated workspace.
    
    -   Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2454570271/p808811.png) to update the **resource quota name**, **associated workspace**, and **tags**.
        
    -   After binding to a workspace, click the workspace name to navigate to its details page and use the resource quota for AI development in the workspace.
        
-   **Resource Information:** Includes the resource group, parent resource quota, and child resource quotas. To understand the differences and relationships between parent and child resource quotas, see the diagram in the [Create parent-child quotas](#961ac1b52516s) section. Click a resource name to navigate to the target page for details.
    
-   **Network Information**: Displays network resource quota limits, including virtual private cloud (VPC), security group, and NAT gateway. Configure network information to control the network-layer usage scope of resource quotas, ensuring reasonable and secure resource allocation.
    
-   **Scheduling Information**: Displays scheduling information related to resource quotas and supports configuration updates on this page.
    
    -   **Scheduling policy**: Choose an appropriate scheduling policy based on implementation principles to improve queue efficiency and computing resource utilization. For more information about configuring scheduling policies, see [Scheduling policies](/help/en/pai/user-guide/scheduling-policies).
        
    -   **Child-level preemption** & **Self-level preemption**: When resources are limited, allow queued tasks on the current resource quota to preempt running tasks on child-level or self-level resource quotas. For more information about the relationship between self-level and child-level resource quotas and how to configure preemption policies, see [Preemption policies](/help/en/pai/user-guide/resource-quota-quota-preemption-policy).
        
    -   **Idle Scheduling**: Enabled by default, indicating that resources from self-level and child-level quotas can be used by idle tasks.
        
-   **Resource Change History**: View records of creation, scaling, and deletion operations. Records display change type, initiator, status, and target specifications details.
    
-   **Advanced Information:**
    
    -   Local cache: For Lingjun resource quotas, you can enable this switch to use the node's local disk data cache feature. This feature effectively reduces the overhead of repeated data transmission. For more information, see [Local cache acceleration for Lingjun AI Computing Service](/help/en/pai/user-guide/accelerate-data-reads-using-local-cache).
        

### **Node**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p814460.png)

On the details page, go to the **Node** tab to view and manage node information for the resource quota:

-   **Node details**: Includes **node specifications**, **dedicated resource group name**, **resource usage and total amounts** (including GPU card type, GPU card count, CPU cores), the available zone (**az**), the high-speed network interconnect zone (**hz**), and **number of tasks** and **instances** created using the node.
    
    -   **Task and instance details**: In the **Number of Tasks** and **Number of Instances** columns for a target node, click the corresponding number to view specific task and instance details.
        
    -   **Filter nodes**: You can filter by node status or order status, and sort by resource amount.
        
    -   **hz**: In a Lingjun AI Computing Service scenario, hz indicates the high-speed network area where the underlying computing resources are located. Resources with the same hz value can communicate with each other over a high-speed network.
        
-   **Node status**: Status descriptions are as follows:
    
    -   **Ready**: The computing node is available.
        
    -   **Not Ready**: The computing node is being initialized.
        
    -   **Scheduling Disabled**: The node cannot be scheduled. To troubleshoot the issue, perform the following operations:
        
        -   **Stopped by User**: The node is manually stopped for scheduling by the user.
            
        -   **Expired**: The node order has expired.
            
        -   **Recovering**: The node is in the recovery process. If there are running tasks on this node, stop them promptly to ensure normal recovery progress.
            
        -   **Unknown**: Other reasons, contact your account manager.
            
-   **Manage nodes:**
    
    -   **Stop/Start scheduling**: Find the target node and click **Stop Scheduling** or **Start Scheduling** in the **Actions** column to pause or enable resource usage for the node.
        
    -   **Clear node**: Find the target node and click **Clear Node** in the **Actions** column to clear all tasks (including DSW, DLC, or EAS) created on the node.
        

### **Job**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p968393.png)

On the details page, go to the **Job** tab to view quota task information. The page displays resource usage for **Queued** and **Dequeued** tasks, including task status, resource quota used, instance information, GPU card count, CPU cores, and memory size.

-   **Filter tasks**: You can filter by **Type** or **Task Status**.
    
-   **View details**: Click a task name, resource quota name, or workspace name to navigate to the target page for details.
    
-   **Filter current resource quota tasks**: Turn on **View Current Resource Quota** to filter tasks created using the current resource quota.
    

### **User**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p968403.png)

On the details page, go to the **User** tab to view resource usage by users within the quota, including GPU card count, CPU cores, memory size, and task volume.

-   **Filter current resource quota users**: Turn on **View Current Resource Quota Users** to view only users who submitted tasks to the current resource quota, excluding users who submitted tasks to child-level resource quotas.
    
-   **View task details**: Find the target user and click **Details** in the **Number of Tasks** column to view tasks submitted by that user. You can also click a task name on the task information page to navigate to the target task page for details.
    

### **Monitoring**

On the details page, go to the **Monitoring** tab to view quota monitoring information.

-   You can view GPU computing power heat map (real-time usage), resource usage levels, and task status distribution.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p968414.png)
    
-   You can view monitoring information from both quota and node dimensions, covering CPU, memory, disk, network, and GPU monitoring metrics. For more information about monitoring metrics and how to view monitoring data, configure monitoring alerts, and subscribe to monitoring metrics through [Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor) and [ARMS](/help/en/arms/product-overview/what-is-arms), see [Quota monitoring and alerting](/help/en/pai/user-guide/resource-quota-monitoring-and-alerting).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p960120.png)
    

### **Topology**

On the details page, go to the **Topology** tab to view quota topology information. The following two resource topology structures are supported:

-   **Resource View**: Displays the allocation of CPU, memory, and GPU resources for current-level and child-level resource quotas.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p968252.png)
    
-   **Task View**: Displays the total number of tasks created through current-level and child-level resource quotas, and the number of tasks in each status.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p968246.png)
    

## **Delete quotas**

On the **Resource Quota** page, you can click **Delete** in the **Actions** column to remove resource quotas that are no longer in use. If the resource quota is bound to a workspace, first unbind it before deletion. For more information, see [Overview](#f5470b40a8ybr).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3777802571/p983533.png)
