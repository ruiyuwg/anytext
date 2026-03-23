Build and test models using Designer workflows. Create from templates, blank canvases, or imports.

## **Prerequisites**

Create a workspace. For more information, see [Create and manage workspaces](/help/en/pai/user-guide/create-and-manage-workspaces#task-2121913).

## **Create a workflow**

Log on to the [PAI console](https://pai.console.alibabacloud.com/?regionId=cn-hangzhou#/swi?path=/designer). Select your target workspace and go to the Designer page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1145046371/p864484.png)

Create a workflow in one of the following ways:

## Use a preset template

Designer includes dozens of built-in templates for different frameworks and industry scenarios. Create a workflow from a preset template and modify components or configurations to quickly build a model.

**Parameter**

**Description**

Workflow name

Custom workflow name.

Workflow data storage

OSS Bucket storage path for temporary data and models generated during runtime. If not configured, uses default workspace storage.

For each run, Designer automatically creates a temporary folder at `workflow_storage_path/task_ID/node_ID`, simplifying OSS storage path configuration for each component and enabling easier data management.

Visibility

-   **Visible to Me**: Creates workflow in the **My Pipelines** folder, visible only to you and workspace administrators.
    
-   **Visible to Current Workspace**: Creates workflow in the **Pipelines Visible to Workspaces** folder, visible to everyone in the workspace.
    

## Create blank pipeline

Add components to a blank canvas and build a model from scratch.

**Parameter**

**Description**

Workflow name

Custom workflow name.

Workflow data storage

OSS Bucket storage path for temporary data and models generated during runtime. If not configured, uses default workspace storage.

For each run, Designer automatically creates a temporary folder at `workflow_storage_path/task_ID/node_ID`, simplifying OSS storage path configuration for each component and enabling easier data management.

Visibility

-   **Visible to Me**: Creates workflow in the **My Pipelines** folder, visible only to you and workspace administrators.
    
-   **Visible to Current Workspace**: Creates workflow in the **Pipelines Visible to Workspaces** folder, visible to everyone in the workspace.
    

## Use custom template

In enterprise scenarios, algorithm experts develop algorithm flows and convert stable workflows into templates. Business experts use these templates to quickly build, deploy, and validate models.

Designer provides custom templates to support this workflow. Generate a custom template from a successfully run workflow and share it with other algorithm developers in the workspace. Other members can then create workflows directly from this template.

### **Use custom template**

Members with the **Developer** role can clone a workflow from a template and continue development.![28117303ba0cef6df713e3daaab40294](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5435815371/p766628.png)

**Parameter**

**Description**

Workflow name

Custom workflow name.

Workflow data storage

OSS Bucket storage path for temporary data and models generated during runtime. If not configured, uses default workspace storage.

For each run, Designer automatically creates a temporary folder at `workflow_storage_path/task_ID/node_ID`, simplifying OSS storage path configuration for each component and enabling easier data management.

Visibility

-   **Visible to Me**: Creates workflow in the **My Pipelines** folder, visible only to you and workspace administrators.
    
-   **Visible to Current Workspace**: Creates workflow in the **Pipelines Visible to Workspaces** folder, visible to everyone in the workspace.
    

If you do not have a custom template, see [Create custom template](#71dd05a069y3x).

### Create custom template

After creating a custom template, other algorithm developers in the workspace can view it and create workflows from it.

1.  Double-click a successfully run workflow name to open its details page.
    
2.  Click **Publish as Template** above the canvas.
    
3.  In the **Publish as Template** dialog box, configure **Template Name**, **Description**, and **Documentation Link** (optional), then click **Publish**.
    
    For **Documentation Link**, enter an accessible HTTP address that describes the custom template.
    
4.  After publishing the template, click **OK**. Designer automatically redirects you to the **Custom Templates** tab to view the created template.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5435815371/p766625.png)
    

## Import existing workflow

Import a workflow file in JSON format to create a new workflow in your workspace. Designer imports components and their configurations from the original workflow. Modify components or configurations to build a model.

**Parameter**

**Description**

Workflow name

Custom workflow name.

Workflow data storage

OSS Bucket storage path for temporary data and models generated during runtime. If not configured, uses default workspace storage.

For each run, Designer automatically creates a temporary folder at `workflow_storage_path/task_ID/node_ID`, simplifying OSS storage path configuration for each component and enabling easier data management.

Visibility

-   **Visible to Me**: Creates workflow in the **My Pipelines** folder, visible only to you and workspace administrators.
    
-   **Visible to Current Workspace**: Creates workflow in the **Pipelines Visible to Workspaces** folder, visible to everyone in the workspace.
    

## **References**

-   After creating a workflow, build and test the model. For more information, see [Build and test a model](/help/en/pai/user-guide/build-and-debug-models#task-2171555).
    
-   For quick start with Designer workflow processes, use a [template workflow](/help/en/pai/user-guide/creating-a-pipeline-by-using-a-template) or a [custom pipeline](/help/en/pai/user-guide/creating-a-custom-pipeline).
    
-   Click **Export Pipeline** above the Designer workflow canvas to export the workflow to local machine.
