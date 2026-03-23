If you want the system to periodically schedule a node, you must define scheduling properties such as the scheduling cycle, dependencies, and scheduling parameters for the node. This topic provides an overview of the configuration of scheduling properties.

## Prerequisites

-   A node is created. Data development in DataWorks is based on nodes. Tasks of different types of compute engines are encapsulated into different types of nodes in DataWorks. You can select a specific type of node for data development based on your business requirements. For more information, see [General development process](/help/en/dataworks/user-guide/common-development-process#task-2295204).
    
-   The Periodic scheduling switch is turned on. A node can be automatically scheduled based on its scheduling properties only if **Periodic scheduling** is turned on for the workspace to which the node belongs on the Scheduling Settings tab of the Settings page in DataStudio. For information about how to turn on the switch on the **Settings** page in DataStudio, see [Configure scheduling settings](/help/en/dataworks/user-guide/configure-scheduling-settings#task-2170344).
    

## Precautions

-   Scheduling configurations defined for a node are the scheduling properties used to run the node. The node can be scheduled based on the scheduling properties only after the node is deployed to the production environment.
    
-   The scheduling time specified for a node in DataStudio is the expected running time of an instance that is generated for the node. The actual running time of the instance is affected by the execution of ancestor instances of the current instance. For information about the conditions that must be met before a node starts to run, see [Use the Intelligent Diagnosis feature](/help/en/dataworks/user-guide/use-the-intelligent-diagnosis-feature#task-2286474).
    
-   DataWorks allows you to configure scheduling dependencies between nodes that have different scheduling frequencies. Before you configure scheduling dependencies, we recommend that you view the [Principles and samples of scheduling configurations in complex dependency scenarios](/help/en/dataworks/user-guide/principles-and-samples-of-scheduling-configurations-in-complex-dependency-scenarios#task-2268397) topic to understand the principles and samples of scheduling configurations in complex dependency scenarios.
    
-   In DataWorks, an auto triggered node generates [instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances#concept-nlb-nxh-r2b) based on the scheduling frequency and the number of scheduling cycles of the node. For example, the number of instances generated for a node scheduled by hour every day is the same as the number of scheduling cycles of the node every day. The node is run as an instance.
    
-   If you configure [scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254), the input parameters in the code of an auto triggered node in each scheduling cycle are determined by the scheduling time of the node in the specific scheduling cycle and the expressions of the scheduling parameters. For information about the replacement relationship between input parameters in node code and configurations of scheduling parameters, see [Supported formats of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#section-9l6-rzz-bui).
    

## Go to the Properties tab

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and Governance** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  Go to the Properties tab.
    
    1.  On the DataStudio page, find the desired node and go to the configuration tab of the node.
        
    2.  On the configuration tab of the node, click **Properties** in the right-side navigation pane. The Properties tab appears.
        

## Configure scheduling properties

On the Properties tab, you can configure scheduling properties for a node in different sections. The following table describes the scheduling properties.

**Section**

**Description**

[General](/help/en/dataworks/user-guide/configure-basic-properties#concept-dlk-2lq-p2b)

In this section, you can view or configure basic information about the node, such as the node name, node ID, node type, and owner.

-   Node ID: The unique ID of the node. The ID is generated when the node is committed for the first time.
    
-   Owner: The owner of the node. The default owner is the creator of the node. You can select a member of the current DataWorks workspace as the owner.
    

[(Optional) Scheduling Parameter](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254)

In this section, you can configure the scheduling parameters that are used to define how the node is scheduled. The scheduling parameters provided by DataWorks can be classified into custom parameters and built-in variables based on their value assignment methods. Scheduling parameters support dynamic parameter settings for node scheduling.

**Note**

If you define a variable when you edit node code, you must assign a value to the variable.

[Schedule](/help/en/dataworks/user-guide/configure-time-properties-1#task-2119752)

In DataWorks, a node can run as an instance. In this section, you can configure time properties for a node to determine how the node is scheduled to run in the production environment after you commit and deploy the node to the production environment.

-   Instance Generation Mode: specifies the mode in which instances generated for the node take effect in the production environment.
    
-   Recurrence: specifies the mode in which the node is run in the production environment.
    
-   Scheduling Calendar: specifies the scheduling dates and scheduling methods of the node. DataWorks provides a default calendar for common scenarios. You can also configure a custom calendar to meet the requirements for flexible configuration of scheduling time. For more information about how to configure a custom calendar, see [Configure a scheduling calendar](/help/en/dataworks/user-guide/scheduling-calendar-configuration).
    
-   Scheduling Cycle: specifies the scheduling frequency of the node.
    
-   Scheduled time: specifies the expected scheduling time of the node.
    
-   Timeout definition: specifies the timeout period for the node. If the node does not finish running within the specified timeout period, the node automatically exits.
    
-   Rerun: specifies whether to allow the node to be rerun.
    
-   Auto Rerun upon Failure: specifies whether to automatically rerun a node if an error occurs. After you select this check box, you can specify the interval at which the node is rerun after it fails to run as expected.
    
-   Validity Period: specifies the period of time during which the node is scheduled to run. No instances are generated for the node in the period of time that falls out of the specified time range.
    

[Resource Group](/help/en/dataworks/user-guide/configure-the-resource-property#task-2479302)

In this section, you can select the resource group for scheduling that you want to use to deploy the node to the production environment.

[Dependencies](/help/en/dataworks/user-guide/scheduling-dependency-configuration-guide#concept-2201251)

In this section, you can configure scheduling dependencies for the node. Nodes are scheduled to run in sequence based on scheduling dependencies. The descendant nodes start to run after the ancestor nodes finish running. This ensures that valid business data is generated at the earliest opportunity. You can use the automatic parsing feature to parse node dependencies from code. You can also manually configure scheduling dependencies for nodes.

-   If a node is the root node of the desired workflow or the node does not depend on other nodes and you want the node to be quickly deployed and scheduled to run, you can configure settings to allow the node to depend on the root node of the current workspace.
    
-   If a workflow contains multiple input or output nodes or a workspace contains complex workflows, you can use a [zero load node](/help/en/dataworks/user-guide/create-and-use-a-zero-load-node#task-2230164) to manage workflows. For example, you can use a zero load node to specify the scheduling time for nodes in a workflow.
    

**Note**

-   If your nodes belong to the same workflow, you can draw lines to connect nodes on the configuration tab of the workflow to configure scheduling dependencies for the nodes.
    
-   After a workspace is created, DataWorks automatically generates a root node for the workspace. The root node is a zero load node. In most cases, you can use the node as a start node when you schedule an entire workflow to run.
    
    -   The node is named in the format of `Workspace name_root`.
        
    -   The node is scheduled to run at `00:00` the next day after the desired workspace is created.
        
    -   The scheduling system does not run the node but directly returns a success response when the scheduling time of the node arrives. This way, the node does not occupy resources, and you are not charged for the node.
        
    
    For more information about zero load nodes, see [Create and use a zero load node](/help/en/dataworks/user-guide/create-and-use-a-zero-load-node). For more information about dry-run scheduling, see [Dry-run instances](/help/en/dataworks/dry-run-instances).
    

[(Optional) Input and Output Parameters](/help/en/dataworks/user-guide/configure-input-and-output-parameters#task-ycz-ts4-kfb)

In this section, you can define input and output parameters to transmit data between ancestor and descendant nodes. After you define an output parameter for a node and specify a value for the output parameter, you can define an input parameter for the descendant node of the node and configure the descendant node to reference the value of the output parameter in the input parameter.

## What to do next: Commit and debug a node

After you configure scheduling properties for a node, you can commit and debug the node to check whether the scheduling configurations for the node meet your business requirements. For more information, see [Debugging procedure](/help/en/dataworks/user-guide/debugging-procedure#task-2195039). After the node is debugged, you can [deploy](/help/en/dataworks/user-guide/deploy-nodes#task-2470114) the node to the production environment for periodic scheduling. You can perform O&M operations on the node in the production environment. For more information, see [Perform basic O&M operations on auto triggered nodes](/help/en/dataworks/user-guide/perform-basic-maintenance-operations-on-auto-triggered-nodes#concept-2175789).
