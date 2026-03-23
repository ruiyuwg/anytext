DataWorks provides shared resource groups, which include the shared resource group for scheduling and the shared resource group for DataService Studio. When you activate DataWorks, the system provides you with shared resource groups. You can use these resource groups to perform operations such as data development, task running, and task testing. Shared resource groups are used by multiple tenants. During peak hours, tasks within different tenants may compete for resources in shared resource groups. This topic provides an overview of shared resource groups.

**Important**

-   Due to product iteration, we recommend that you do not use shared resource groups. When you activate DataWorks, the system automatically creates a pay-as-you-go serverless resource group for you. You can use the serverless resource group to perform operations such as data synchronization, task scheduling and running, and API calling and management. For more information, see [Create and use a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
-   If you have never activated DataWorks before June 10, 2024, you can purchase and use only serverless resource groups after you activate DataWorks, and **you cannot purchase or use old-version resource groups**.
    

## Scenarios

We recommend that you use a shared resource group only if the number of nodes that you want to run is small and the requirement for the timeliness of data output is low.

## Limits

Resources in a shared resource group are used by multiple tenants. During peak hours, the tenants may compete for resources, and the resources may be insufficient.

**Note**

-   A maximum of 40 nodes can be run in parallel on the shared resource group for scheduling. During the peak hours from 00:00 to 09:00, nodes may compete for resources in the shared resource group for scheduling. In this case, the maximum number of nodes that can be run in parallel on the shared resource group for scheduling may be less than 40.
    
-   The shared resource group for DataService Studio cannot meet requirements for frequent and highly concurrent API calls.
    

If you want to use sufficient exclusive resources to run your tasks, we recommend that you purchase serverless resource groups. For more information, see [Create and use a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

## Billing and related operations

### Billing rules

**Note**

After you activate DataWorks, you can use the shared resource groups that are provided by DataWorks. You do not need to separately purchase shared resource groups.

You are charged based on items such as Elastic Compute Service (ECS) instances in the shared resource groups and the data synchronization threads that are used. The shared resource groups support the pay-as-you-go billing method. For more information about the billing of the shared resource groups, see the following topics:

-   [Billing of the shared resource group for scheduling (pay-as-you-go)](/help/en/dataworks/billing-of-the-shared-resource-group-for-scheduling#concept-2040707)
    
-   [DataService Studio](/help/en/dataworks/dataservice-studio-1#concept-2042966)
    

### Deduction and overdue payments

The settlement method for deductions and overdue payments varies based on the types of shared resource groups in DataWorks. For more information, see [Deduction and overdue payments](/help/en/dataworks/deduction-and-overdue-payments#concept-2210046).

## Use a shared resource group

To ensure service efficiency, you can select an appropriate type of shared resource group to run nodes for data integration or data development based on your business requirements.

-   A shared resource group is a public resource pool. Tasks that use resources in a shared resource group may not be run as scheduled if resources in the resource group are insufficient. If you want your tasks to be run as expected, use a serverless resource group. For more information, see [Create and use a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
-   For information about how to obtain the address information of the machines in a shared resource group and add the address information to the IP address whitelist of a data source when you establish a network connection between the resource group and the data source, see [Configure an IP address whitelist](/help/en/dataworks/user-guide/configure-an-ip-address-whitelist-1#concept-jz3-bl5-q2b) and [Whitelist of shared Data Integration resource groups](/help/en/dataworks/user-guide/public-resource-group-whitelist-for-data-integration).
    
-   You cannot modify the underlying network configurations of a shared resource group or configure an IP address whitelist for a shared resource group. If you want to associate a resource group with a virtual private cloud (VPC) or configure an IP address whitelist for a resource group, use a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    

**Note**

-   A maximum of five nodes can be run in parallel on the shared resource group for Data Integration when the shared resource group is not in use. When you run nodes on the shared resource group for Data Integration, other nodes may compete for resources in the resource group. Therefore, the maximum number of nodes that are run in parallel on the shared resource group for Data Integration may be less than five. The maximum number nodes that are actually run in parallel on the shared resource group for Data Integration varies based on the resource usage of the resource group.
    
-   You cannot change the memory size of a shared resource group. Instead, you can change the number of nodes that can be run in parallel on the shared resource group.
    
    The memory size of a shared resource group is calculated by using the following formula: Memory size = `Number of nodes that are run in parallel on the resource group × 512 MB`.
    

## Network connectivity solutions

A DataWorks resource group is a group of Alibaba Cloud ECS instances. To run nodes for data integration or data development, you must make sure that resource groups and data sources are connected to each other. You must also make sure that special security settings such as an IP address whitelist do not affect the connections between resource groups and data sources.

-   Network connectivity
    
    A network connection can be established between a shared resource group and a data source that belongs to Alibaba Cloud. The network connectivity between a data source and a shared resource group varies based on the network environment of the data source:
    
    -   Shared resource group for scheduling
        
        -   If you want the shared resource group for scheduling to access a public IP address, you must add the public IP address or domain name and port number to a sandbox whitelist on the Workspace page in Management Center in the DataWorks console. If the shared resource group for scheduling cannot access the public IP address after you perform the preceding operation, we recommend that you use a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
            
        -   You can use the shared resource group for scheduling to access only the data sources for which no IP address whitelist is configured. To access a data source for which an IP address whitelist is configured or a data source that is deployed in a virtual private cloud (VPC), we recommend that you use a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
            
        
        **Note**
        
        We recommend that you use a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) to access a data source that is deployed on the Internet or in a VPC.
        
    -   Shared resource group for DataService Studio
        
        The following table describes the network connectivity between the shared resource group for DataService Studio and data sources that are deployed in different network environments.
        
        **Network environment**
        
        **Accessible**
        
        Internet
        
        Yes
        
        Classic network
        
        Yes
        
        VPC
        
        No
        
    
-   Whitelist settings
    
    The shared resource group for scheduling provides the security sandbox feature for nodes. This feature can be used to limit access to the resource group from unknown IP addresses. If you want to access the resource group for scheduling, you must add the IP address that you use to the IP address whitelist of the security sandbox. For more information, see the [Security Settings](/help/en/dataworks/user-guide/create-and-manage-workspaces/#task-2481177) section of the "Create and manage workspaces" topic.
