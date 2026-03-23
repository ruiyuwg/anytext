Machine Learning Designer is a visualized modeling tool that is provided by Platform for AI (PAI) to implement end-to-end machine learning development. DataWorks provides PAI Designer nodes. You can use the nodes to load pipelines of Machine Learning Designer. This way, pipeline tasks can be periodically scheduled based on the scheduling configurations of the PAI Designer nodes.

## Prerequisites

-   DataWorks is authorized to access PAI.
    
    You can complete the authorization with a few clicks on the [authorization page](https://dataworks.console.aliyun.com/slr?request=%5B%22AliyunServiceRoleForDataworksEngine%22%5D). For more information about the service-linked role that is created based on the authorization, see [Role 1: AliyunServiceRoleForDataworksEngine](/help/en/dataworks/user-guide/service-linked-roles-used-by-dataworks-to-access-alibaba-cloud-services-to-which-compute-engines-belong/#section-5te-pml-k0s). Only an Alibaba Cloud account or a RAM user to which the **AliyunDataWorksFullAccess** policy is attached can perform one-click authorization.
    
-   A PAI Designer node is created.
    

## Step 1: Develop a task based on the PAI Designer node

On the configuration tab of the PAI Designer node, perform the following operations to develop a task based on the PAI Designer node:

### **Develop a task based on the PAI Designer node**

If you want to load an existing pipeline when you edit the PAI Designer node, you must create a pipeline in PAI in advance. This way, you can load the created pipeline by searching for the pipeline by name.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0579350471/p865161.png)

On the configuration tab of the PAI Designer node, you can create a pipeline by using one of the following methods:

-   Create a blank pipeline.
    
    You can create a blank pipeline, add components, and perform drag-and-drop operations on the components to build a model based on your business requirements. For more information, see [Create a blank pipeline](/help/en/pai/user-guide/create-a-blank-pipeline).
    
-   Create a preset template.
    
    Machine Learning Designer provides preset templates for you to quickly create pipelines that are similar to the templates. You can modify components in a preset template or the configurations of components to build a model. For more information, see [Create a pipeline from a preset template](/help/en/pai/user-guide/create-a-pipeline-from-a-preset-template).
    
-   Create a custom template.
    
    You can save a stable pipeline as a custom template for other members in your workspace to use and edit. For more information, see [Create a pipeline from a custom template](/help/en/pai/user-guide/create-a-pipeline-from-a-custom-template).
    

### **Configure scheduling parameters for the PAI Designer node**

If you want to periodically run a task on the created node, click **Properties** in the right-side navigation pane of the node configuration tab to configure the scheduling information of the node based on your business requirements.

DataWorks provides **scheduling parameters** whose values are dynamically replaced in the code of a node based on the configurations of the scheduling parameters in periodic scheduling scenarios. You can define variables in the node code in the `**${Variable}**` format and assign values to the variables in the **Scheduling Parameters** section of the **Properties** tab. For information about the supported formats of scheduling parameters, see [Supported formats of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters).

Sample code of scheduling parameters:

```
--command='echo '\''${Variable}'\'';' \ --You can assign a specific scheduling parameter to the variable.
```

After the configuration is complete, click **Save** to save the node.

## Step 2: Deploy and perform O&M operations on the node

1.  After the configurations of the node are saved, you must deploy the node. For more information, see [Deploy nodes](/help/en/dataworks/user-guide/task-release/).
    
2.  After you deploy the node, you can click **Perform O&M** below **Prod Online** to view the running status of the node in Operation Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    
    **Note**
    
    No entry point is provided for you to run PAI Designer nodes in Data Studio. If you want to run a PAI Designer node, go to Operation Center in the development environment and choose **Auto Triggered Node O&M** > **Auto Triggered Nodes** in the **Node O&M** section. On the page that appears, find the PAI Designer node that you want to manage and click **Test** or **Backfill Data** in the Actions column to run the node.
