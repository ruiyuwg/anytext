You can group your resources based on usage, permissions, and regions. This way, you can manage resources based on users and projects in a hierarchical manner. Each resource belongs to only one resource group. Resource groups do not affect the association among resources. In E-MapReduce (EMR), you can specify resource groups only for clusters and projects. This topic describes how to specify resource groups for resources and provides related examples.

## Background information

When you use resource groups, take note of the following points:

-   A resource group can contain resources in different regions. For example, Resource Group A contains clusters in the China (Hangzhou) region and clusters in the China (Shanghai) region.
-   A resource group can contain different types of resources. For example, Resource Group A contains resources such as clusters, ECS instances, and projects.
-   Clusters and projects that belong to the same Alibaba Cloud account and reside in the same region can be associated across resource groups. For example, your Alibaba Cloud account can access Resource Group A and Resource Group B. Resource Group A contains a project that resides in the China (Beijing) region. Resource Group B contains a cluster that also resides in the China (Beijing) region. In this case, you can run a job of the project in the cluster.
-   RAM users have access to resource groups as authorized. For example, if you authorize a RAM user to manage all Alibaba Cloud resources in your Alibaba Cloud account, all resource groups in your Alibaba Cloud account are accessible to the RAM user.

## Limits

-   You can create and manage a resource group and authorize RAM users to access the resource group only in the Resource Management console. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
-   In EMR, you can specify resource groups only for clusters and projects. When you create or scale out a cluster or move a cluster across resource groups, all nodes in the cluster are moved to the same resource group as the cluster. The following node resources can be managed in resource groups: Elastic Compute Service (ECS) instances, disks, images, Elastic Network Interfaces (ENIs), security groups, and key pairs.
-   You cannot move resources across resource groups that belong to different Alibaba Cloud accounts.
    
    **Important** If you move a node resource to a different resource group, the cluster to which the node resource belongs remains in the original resource group. To manage resources and grant permissions in a centralized manner, we recommend that you manage node resources in the same resource group as the cluster.
    

## Specify a resource group

A resource must belong to a resource group. If you do not specify a resource group when you create a resource, the resource is added to the default resource group. This section describes how to specify resource groups when you create a cluster and a project.

**Note** When you create a resource, you can specify only a resource group to which you have access.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  In the top navigation bar, select the region where you want to create a cluster and select a resource group based on your business requirements.
    
3.  On the EMR on ECS page, click **Create Cluster**.
    
4.  Configure parameters in the Software Configuration and Hardware Configuration steps. In the **Basic Configuration** step, click **Advanced Settings** and select an existing resource group for **Resource Group**.
    
    If you want to create a resource group, click the **Create Resource Group** link in the Resource Group section. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Note**
    
    For more information about how to create a cluster, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    

## Scenarios

Resource groups can be used in the following scenarios:

-   Scenario 1: Add cloud resources to different resource groups based on their usage for separate management.
    
-   Scenario 2: Designate an independent administrator for each resource group to manage users and their permissions based on resource groups.
    

**Note** RAM users can view resources as authorized. A RAM user may have access only to some of the resource groups in an Alibaba Cloud account. In this case, if the RAM user selects **All Resources** in the top navigation bar, a message that indicates the RAM user is not authorized to access all resources appears.

### Scenario 1: Group resources based on their usage

You can add clusters to be used in a test environment and clusters to be used in a production environment to different resource groups. During tests, select a cluster from the resource group for the test environment. This prevents misoperations that may occur on production clusters. When you launch a service, select a cluster from the resource group for the production environment to ensure that the service works as expected.

1.  Create the following resource groups: **Test Environment** and **Production Environment**.
    
    For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
2.  Set the same administrator for the **Test Environment** and **Production Environment** resource groups.
    
    For more information, see [Add RAM authorization](/help/en/resource-management/resource-group/user-guide/add-ram-authorization#task-sst-wjm-4fb).
    
3.  Create clusters **TestEnv1** and **TestEnv2**.
    
    Specify the **Test Environment** resource group for the clusters.
    
4.  Create clusters **ProdEnv1** and **ProdEnv2**.
    
    Specify the **Production Environment** resource group for the clusters.
    
5.  Use the administrator account of the **Test Environment** and **Production Environment** resource groups to log on to the [EMR console](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A%2F%2Femr.console.alibabacloud.com%2F&clearRedirectCookie=1&lang=en#/region/cn-hangzhou/resource/all/overview).
    
6.  Select one of the resource groups from the top navigation bar.
    
    The clusters in the selected resource group are displayed in the cluster list. For example, if you select **Test Environment**, the TestEnv1 and TestEnv2 clusters are displayed.
    

### Scenario 2: Manage users and their permissions based on resource groups

You can add clusters and projects of a department to an independent resource group and configure an independent administrator for the resource group. This way, you can separately manage the users and user permissions of each resource group. In the following procedure, resource groups for a **development department** and a **test department** are created.

1.  Create resource groups **Develop Dept** and **Test Dept**.
    
    For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
2.  Set different administrators for the **Develop Dept** and **Test Dept** resource groups.
    
    For more information, see [Add RAM authorization](/help/en/resource-management/resource-group/user-guide/add-ram-authorization#task-sst-wjm-4fb).
    
3.  Create a cluster named **ITCluster** and specify the resource group named **Develop Dept** for the cluster.
    
    For more information about how to create a cluster, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
4.  Create a cluster named **FinanceCluster1** and specify a resource group named **Test Dept** for the cluster.
    
5.  Use the administrator account of the Test Dept resource group to [EMR console](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A%2F%2Femr.console.alibabacloud.com%2F&clearRedirectCookie=1&lang=en#/region/cn-hangzhou/resource/all/overview).
    
6.  Select the **Test Dept** resource group from the top navigation bar.
    
    The FinanceCluster1 cluster is displayed in the cluster list.
