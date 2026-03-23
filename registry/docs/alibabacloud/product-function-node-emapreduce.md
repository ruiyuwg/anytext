## **EMR on ECS**

**Category**

**Feature**

**Description**

**References**

Cluster management

Create a cluster

You can build and run open source big data frameworks, such as Hadoop, Spark, Hive, and Presto, for large-scale data processing and analysis.

[Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page)

Release a cluster

If you no longer require an E-MapReduce (EMR) cluster, you can release the cluster at the earliest opportunity. This helps prevent unnecessary costs.

[Release a cluster](/help/en/emr/emr-on-ecs/user-guide/release-a-cluster)

View cluster information

You can view basic information about clusters that belong to your Alibaba Cloud account and the details of a cluster.

[Query clusters](/help/en/emr/emr-on-ecs/user-guide/query-clusters)

Log on to a cluster

After a connection to the master node of your cluster is established in SSH mode, you can run Linux commands to manage the cluster and interact with the cluster.

[Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster)

View cluster types

Alibaba Cloud EMR provides various types of clusters, such as DataLake, online analytical processing (OLAP), Dataflow, and DataServing clusters. This provides powerful, flexible, and efficient computing resources for big data processing and analysis.

-   [DataLake cluster](/help/en/emr/emr-on-ecs/user-guide/datalake-cluster)
-   [DataServing cluster](/help/en/emr/emr-on-ecs/user-guide/dataserving-cluster)

Node management

Manage node groups

Node groups are key resources used to manage nodes in an EMR cluster. In most cases, node groups consist of Elastic Compute Service (ECS) instances of the same instance type.

-   [Manage node groups](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters)
-   [Manage node groups](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters)
-   [Manage node groups](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters)

Scale out a node group

You can add core nodes or task nodes to scale out an EMR cluster that has insufficient computing or storage resources.

-   [Scale out an EMR cluster](/help/en/emr/emr-on-ecs/user-guide/scale-out-an-emr-cluster)
-   [Scale out an EMR cluster](/help/en/emr/emr-on-ecs/user-guide/scale-out-an-emr-cluster)
-   [Scale out an EMR cluster](/help/en/emr/emr-on-ecs/user-guide/scale-out-an-emr-cluster)

Scale in a node group

When large amounts of computing resources remain idle in an EMR cluster, you can reduce the number of task nodes in the cluster.

-   [Scale in a cluster](/help/en/emr/emr-on-ecs/user-guide/scale-in-a-cluster-1)
-   [Scale in a cluster](/help/en/emr/emr-on-ecs/user-guide/scale-in-a-cluster-1)
-   [Scale in a cluster](/help/en/emr/emr-on-ecs/user-guide/scale-in-a-cluster-1)

Expand a disk

If the disk space of a cluster is insufficient, you can expand the data disks of the cluster.

-   [Expand a disk](/help/en/emr/emr-on-ecs/user-guide/expand-a-disk)
-   [Extend a disk](/help/en/emr/emr-on-ecs/user-guide/expand-a-disk)
-   [Expand a disk](/help/en/emr/emr-on-ecs/user-guide/expand-a-disk)

Upgrade node configurations

If the vCPUs or memory of ECS instances in a node group cannot meet your business requirements, you can upgrade the instance configurations of the node group.

-   [Upgrade node configurations](/help/en/emr/emr-on-ecs/user-guide/upgrade-node-configurations-20)
-   [Upgrade node configurations](/help/en/emr/emr-on-ecs/user-guide/upgrade-node-configurations-20)
-   [Upgrade node configurations](/help/en/emr/emr-on-ecs/user-guide/upgrade-node-configurations-20)

View the health status of nodes

You can check whether a node runs as expected based on the health status of the node. The health status is formed based on the check results of multiple health check items.

-   [View the health status of nodes](/help/en/emr/emr-on-ecs/user-guide/view-the-node-health-status)
-   [View the health status of nodes](/help/en/emr/emr-on-ecs/user-guide/view-the-node-health-status)
-   [View the health status of nodes](/help/en/emr/emr-on-ecs/user-guide/view-the-node-health-status)

Service management

Add services

After you create a cluster, you can add services that are not deployed to the cluster.

-   [Add services](/help/en/emr/emr-on-ecs/user-guide/add-services)
-   [Add services](/help/en/emr/emr-on-ecs/user-guide/add-services)
-   [Add services](/help/en/emr/emr-on-ecs/user-guide/add-services)

Restart a service

After you modify the configuration items of a service, you must restart the service for the modifications to take effect. If a service is faulty or abnormal, you can try to restore the service by restarting the service.

-   [Restart a service](/help/en/emr/emr-on-ecs/user-guide/restart-a-service)
-   [Restart a service](/help/en/emr/emr-on-ecs/user-guide/restart-a-service)
-   [Restart a service](/help/en/emr/emr-on-ecs/user-guide/restart-a-service)

Manage configuration items

You can modify and view the configuration items of services that are deployed in a cluster in the EMR console. You can also add configuration items to the services.

-   [Manage configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items)
-   [Manage configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items)
-   [Manage configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items)

Roll back the configurations of a service

After you perform operations on the configuration items of a service in the EMR console, you can roll back the configurations of the service.

-   [Roll back the configurations of a service](/help/en/emr/emr-on-ecs/user-guide/roll-back-configurations-of-a-service)
-   [Roll back the configurations of a service](/help/en/emr/emr-on-ecs/user-guide/roll-back-configurations-of-a-service)
-   [Roll back the configurations of a service](/help/en/emr/emr-on-ecs/user-guide/roll-back-configurations-of-a-service)

Customize software configurations

You can use the Custom Software Configuration feature provided by EMR to modify existing configurations or add configuration items when you create a cluster.

-   [Customize software configurations](/help/en/emr/emr-on-ecs/user-guide/configure-custom-software)
-   [Customize software configurations](/help/en/emr/emr-on-ecs/user-guide/configure-custom-software)
-   [Customize software configurations](/help/en/emr/emr-on-ecs/user-guide/configure-custom-software)

Export and import service configurations

EMR allows you to export service configurations in the XML or JSON format. This way, you can back up, migrate, or restore the service configurations of an EMR cluster. You can import service configurations that are exported in the JSON format to a new cluster as the preset configurations of the cluster.

-   [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations)
-   [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations)
-   [Export and import service configurations](/help/en/emr/emr-on-ecs/user-guide/export-and-import-service-configurations)

Access the web UIs of open source components

You can access the web UIs of open source components that are deployed in an EMR cluster on the Access Links and Ports tab of the cluster in the EMR console.

-   [Access the web UIs of open source components](/help/en/emr/emr-on-ecs/user-guide/access-the-web-uis-of-open-source-components)
-   [Access the web UIs of open source components](/help/en/emr/emr-on-ecs/user-guide/access-the-web-uis-of-open-source-components)
-   [Access the web UIs of open source components](/help/en/emr/emr-on-ecs/user-guide/access-the-web-uis-of-open-source-components)

View information about cluster services

You can view information about the services that are deployed in an EMR cluster. For example, you can view the status, components, and configuration items of services such as HDFS and YARN.

-   [View the information about cluster services](/help/en/emr/emr-on-ecs/user-guide/view-cluster-service-information)
-   [View the information about cluster services](/help/en/emr/emr-on-ecs/user-guide/view-cluster-service-information)
-   [View the information about cluster services](/help/en/emr/emr-on-ecs/user-guide/view-cluster-service-information)

View the health status of services

You can check whether a service runs as expected based on the health status of the service. The health status is formed based on the check results of multiple health check items.

-   [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components)
-   [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components)
-   [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components)

Component management

Perform operations on components

A series of big data services can be deployed in an EMR cluster. This helps you process, analyze, and store a large amount of data. EMR provides operation guides and advanced practices on components.

-   [Component operations](/help/en/emr/emr-on-ecs/user-guide/component-operation-guide/)
-   [Component operations](/help/en/emr/emr-on-ecs/user-guide/component-operation-guide/)
-   [Component Operation](/help/en/emr/emr-on-ecs/user-guide/component-operation-guide/)

View the deployment information of service components

You can view the deployment information of service components on each node of an EMR cluster.

-   [View the deployment information of service components](/help/en/emr/emr-on-ecs/user-guide/view-component-deployment-information)
-   [View the deployment information of service components](/help/en/emr/emr-on-ecs/user-guide/view-component-deployment-information)
-   [View the deployment information of service components](/help/en/emr/emr-on-ecs/user-guide/view-component-deployment-information)

View the health status of components

You can check whether a component runs as expected based on the health status of the component. The health status is formed based on the check results of multiple health check items.

-   [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components)
-   [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components)
-   [View the health status of services and components](/help/en/emr/emr-on-ecs/user-guide/view-the-health-status-of-services-and-components)

User management

Add a user

You can add an existing RAM user as an EMR user. This way, you can use the RAM user to manage EMR clusters or other cloud service resources.

-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)

Remove a user

You can remove an existing user from an EMR cluster in the EMR console.

-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)

Reset the password of a user

You can reset the password of a user.

-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)

Download authentication credentials

Authentication credentials can be downloaded only in high-security clusters. You can download the keytab file of a user account.

-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)
-   [Manage users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management)

Auto scaling

Add auto scaling rules

If your business workloads fluctuate, you can enable auto scaling for your EMR cluster and configure auto scaling rules. This way, EMR automatically increases or decreases the number of task nodes to handle business workloads during peak or off-peak hours. This ensures efficient task processing, maximizes resource utilization, and reduces operating costs.

-   [Add auto scaling rules](/help/en/emr/emr-on-ecs/user-guide/creating-a-custom-auto-scaling-policy)
-   [Add auto scaling rules](/help/en/emr/emr-on-ecs/user-guide/creating-a-custom-auto-scaling-policy)
-   [Add auto scaling rules](/help/en/emr/emr-on-ecs/user-guide/creating-a-custom-auto-scaling-policy)

View auto scaling activities

You can view the changes to nodes in a cluster and the execution records of auto scaling activities.

-   [View auto scaling activities](/help/en/emr/emr-on-ecs/user-guide/view-auto-scaling-records)
-   [View auto scaling activities](/help/en/emr/emr-on-ecs/user-guide/view-auto-scaling-records)
-   [View auto scaling activities](/help/en/emr/emr-on-ecs/user-guide/view-auto-scaling-records)

View the overview information about cluster resources

The auto scaling feature of EMR helps you analyze changes to cluster resources and provides recommended auto scaling rules.

-   [View the overview information about cluster resources](/help/en/emr/emr-on-ecs/user-guide/view-yarn-resources-in-an-emr-cluster)
-   [View the overview information about cluster resources](/help/en/emr/emr-on-ecs/user-guide/view-yarn-resources-in-an-emr-cluster)
-   [View the overview information about cluster resources](/help/en/emr/emr-on-ecs/user-guide/view-yarn-resources-in-an-emr-cluster)

View auto scaling cost analysis results in a visualized manner

You can view the resource usage and cost allocation from multiple dimensions. This way, you can evaluate the cost savings brought by auto scaling and optimize the resource usage of your cluster.

-   [View auto scaling cost analysis in a visualized manner](/help/en/emr/emr-on-ecs/user-guide/elastic-visual-cost-analysis)
-   [View auto scaling cost analysis in a visualized manner](/help/en/emr/emr-on-ecs/user-guide/elastic-visual-cost-analysis)
-   [View auto scaling cost analysis in a visualized manner](/help/en/emr/emr-on-ecs/user-guide/elastic-visual-cost-analysis)

Bootstrap action management

Manage bootstrap actions

You can use bootstrap actions to install third-party software and modify the runtime environment of your cluster.

-   [Manage bootstrap actions](/help/en/emr/emr-on-ecs/user-guide/bootstrap-action-execution-script)
-   [Manage bootstrap actions](/help/en/emr/emr-on-ecs/user-guide/bootstrap-action-execution-script)
-   [Manage bootstrap actions](/help/en/emr/emr-on-ecs/user-guide/bootstrap-action-execution-script)

Manually run scripts

After you create a cluster, you can use the manual script execution feature to manually run a specific script on multiple nodes in the cluster at the same time based on your business requirements.

-   [Manually run scripts](/help/en/emr/emr-on-ecs/user-guide/manually-run-scripts)
-   [Manually run scripts](/help/en/emr/emr-on-ecs/user-guide/manually-run-scripts)
-   [Manually run scripts](/help/en/emr/emr-on-ecs/user-guide/manually-run-scripts)

Operation records

View operation records

You can view the operation records of clusters.

\-

Monitoring and alerting

Monitor clusters

You can view the details of the metrics for each service of your cluster.

\-

Manage alert rules

EMR allows you to create alert rules to monitor the usage of service resources in EMR clusters. If resource metrics meet specific alert conditions, alerts are triggered and CloudMonitor sends alert notifications. This way, you can identify and handle the exceptions of monitored clusters at the earliest opportunity.

-   [Manage alert rules](/help/en/emr/emr-on-ecs/user-guide/manage-alert-rules)
-   [Manage alert rules](/help/en/emr/emr-on-ecs/user-guide/manage-alert-rules)
-   [Manage alert rules](/help/en/emr/emr-on-ecs/user-guide/manage-alert-rules)

Manage logs

You can use the log management feature together with Simple Log Service to query the logs that are generated for open source components in the EMR console.

-   [Manage logs](/help/en/emr/emr-on-ecs/user-guide/manage-logs)
-   [Manage logs](/help/en/emr/emr-on-ecs/user-guide/manage-logs)
-   [Manage logs](/help/en/emr/emr-on-ecs/user-guide/manage-logs)

Health check

Enable real-time check and analysis

The real-time check feature of EMR Doctor can be used to check the status of a cluster in real time at an interval of 5 minutes. You can view the status of the cluster, related issues, and causes of the issues. Then, you can troubleshoot the issues based on the information. This helps ensure the stability of the cluster.

-   [Enable real-time check and analysis](/help/en/emr/emr-on-ecs/user-guide/start-health-diagnostics)
-   [Enable real-time check and analysis](/help/en/emr/emr-on-ecs/user-guide/start-health-diagnostics)
-   [Enable real-time check and analysis](/help/en/emr/emr-on-ecs/user-guide/start-health-diagnostics)

View daily cluster reports and analysis results in the reports

You can use the health check feature of an EMR cluster to obtain the health status of the cluster and resolve issues in the cluster based on suggestions. This helps ensure that the cluster remains in a healthy state.

-   [View daily cluster reports and analysis results in the reports](/help/en/emr/emr-on-ecs/user-guide/view-daily-cluster-reports-and-analysis-results-in-the-reports)
-   [View daily cluster reports and analysis results in the reports](/help/en/emr/emr-on-ecs/user-guide/view-daily-cluster-reports-and-analysis-results-in-the-reports)
-   [View daily cluster reports and analysis results in the reports](/help/en/emr/emr-on-ecs/user-guide/view-daily-cluster-reports-and-analysis-results-in-the-reports)

Gateway

Create a gateway cluster

You can use a gateway cluster to balance loads and isolate clusters for data security. You can also use the gateway cluster to submit jobs to an EMR cluster.

-   [Create a gateway cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-gateway-cluster-19)
-   [Create a gateway cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-gateway-cluster-19)
-   [Create a gateway cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-gateway-cluster-19)

Configure a gateway cluster

EMR provides the EMR-CLI tool that you can use to deploy a gateway on an Alibaba Cloud ECS instance.

-   [Use EMR-CLI to deploy a gateway](/help/en/emr/emr-on-ecs/use-cases/use-emr-cli-to-deploy-a-gateway)
-   [Use EMR-CLI to deploy a gateway](/help/en/emr/emr-on-ecs/use-cases/use-emr-cli-to-deploy-a-gateway)
-   [Use EMR-CLI to deploy a gateway](/help/en/emr/emr-on-ecs/use-cases/use-emr-cli-to-deploy-a-gateway)

## **EMR on ACK**

**Category**

**Feature**

**Description**

**References**

Cluster management

Create a cluster

You can deploy open source big data services on top of Container Service for Kubernetes (ACK). You can use ACK to deploy services and manage containerized applications. This reduces the O&M costs of underlying cluster resources and helps you focus on big data jobs.

-   [Create a cluster](/help/en/emr/emr-on-ack/user-guide/create-a-cluster)
-   [Create a Data Science cluster](/help/en/emr/emr-on-ack/user-guide/create-a-data-science-cluster)

Release a cluster

If you no longer require a cluster, you can release the cluster to delete the namespace that corresponds to the cluster and all software services that are deployed in the namespace. However, no physical resource is released after you release the cluster.

[Release a cluster](/help/en/emr/emr-on-ack/user-guide/release-a-cluster-2)

View cluster information

You can view the list of clusters and the details of a cluster within your Alibaba Cloud account.

-   [View cluster information](/help/en/emr/emr-on-ack/user-guide/view-cluster-information)
-   [View cluster information](/help/en/emr/emr-on-ack/user-guide/view-cluster-information-1)

View cluster types

You can create different types of clusters on the EMR on ACK page.

[Create a cluster](/help/en/emr/emr-on-ack/user-guide/create-a-cluster)

Service management

Restart a service

After you modify the configuration items of a service, you must restart the service for the modifications to take effect.

[Restart a service](/help/en/emr/emr-on-ack/user-guide/restart-components-of-a-cluster)

Access the web UI of components

After you add a RAM user as an EMR user of an EMR cluster, you can use the RAM user to access the web UI of a service that is deployed in the EMR cluster.

\-

Manage configuration items

You can modify and add configuration items for an EMR cluster.

[Manage configuration items](/help/en/emr/emr-on-ack/user-guide/manage-configuration-items-1)

Job management

View information about a job

You can view the information about jobs in an EMR cluster.

[View jobs](/help/en/emr/emr-on-ack/user-guide/view-jobs)

## **EMR Workbench**

**Category**

**Feature**

**Description**

**References**

EMR Workflow

Manage workspaces

You can perform all configurations and run tasks and workflows in a specific workspace. The administrator of a workspace can add users to the workspace as members and assign specific roles to the members. This way, workspace members to which different roles are assigned can collaborate with each other.

\-

Manage resource groups for scheduling

Resource groups for scheduling are used to schedule and run tasks. If the default resource group for scheduling cannot meet your requirements, you can purchase a resource group for scheduling based on your business requirements.

\-

Manage projects

You can edit tasks and schedule workflows in a specific project.

[Create a project](/help/en/emr/emr-on-ecs/user-guide/create-a-project)

Manage workflows

A workflow is a directed acyclic graph (DAG) that you can create by dragging tasks and associating the tasks with each other.

[Manage a workflow](/help/en/emr/emr-on-ecs/user-guide/manage-workflows)

Manage workflow instances

A workflow instance is an instantiation of a workflow. A workflow instance is generated when a workflow is manually run or is scheduled to run.

[Manage workflow instances](/help/en/emr/emr-on-ecs/user-guide/manage-workflow-instances)

Manage tasks

After you save a workflow, you can perform operations on existing tasks.

[Manage tasks](/help/en/emr/emr-on-ecs/user-guide/manage-tasks)

Manage task instances

After you save a workflow, you can perform operations on existing task instances.

[Manage tasks](/help/en/emr/emr-on-ecs/user-guide/manage-tasks)

Manage manual tasks

You can create a manual task that is independent of a workflow. You must manually run this type of task.

\-

Manage manual task instances

A manual task instance is an instantiation of a manual task. Each time a manual task is manually triggered to run, a manual task instance is generated for the manual task.

\-

Manage resources

If you want to use a third-party JAR package or a custom script during scheduling, you can upload the required files in Resource Center.

[Resource management](/help/en/emr/emr-on-ecs/user-guide/resource-center)

Manage data sources

You can configure different data sources to meet different data storage and access requirements.

[Data source management](/help/en/emr/emr-on-ecs/user-guide/data-source-center)

Use Security Center

Security Center allows you to manage users, alert instances, alert groups, and audit logs. This helps you implement fine-grained permission management and security monitoring of operations.

\-
