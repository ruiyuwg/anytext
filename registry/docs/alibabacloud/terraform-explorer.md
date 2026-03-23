## Overview

[Terraform Explorer](https://api.aliyun.com/api-tools/terraform) is an online tool provided by Alibaba Cloud based on the open-source Terraform version for debugging Terraform configuration files. It simplifies the process of writing Terraform configuration files and operating Terraform, helping developers reduce the barriers to using Terraform. With Terraform Explorer, developers can automatically generate and transform Terraform configuration files through form filling and run Terraform online with simple button operations.

## **Features**

### **Terraform configuration files**

Terraform configuration files define infrastructure resources in a code-based way. Writing Terraform configuration files is the first step in the [IaC workflow](/help/en/terraform/introduction-of-terraform-1#6378f9961dxzt). After defining the required Alibaba Cloud resources (such as ECS instances, RDS database instances) and dependencies between resources in the configuration file, Terraform automatically creates and configures the defined resources based on the file content, achieving automated deployment and operations. Terraform Explorer supports both automatic generation of configuration files and online editing of configuration file templates by developers.

Feature set

Feature point

Feature description

Writing configuration files

Automatically generating configuration files

After developers select a cloud product and related resource type, and click the "Start Debugging" button, Terraform Explorer will automatically generate a configuration file for the selected resource type. You can then continuously improve the configuration file by filling in some or all parameters through the form on the left.

Online editing of configuration files

Terraform Explorer provides one or more example templates for each resource type. If you do not want to fill in too many parameters or want to create multiple resources, you can select a specific example template after selecting the resource type, click the "Start Debugging" button to view the template details and start debugging.

If the content of the example template does not meet your requirements, you can click the "Edit Mode" button in the upper right corner of the template to add or modify content in the existing template online, save it, and continue to start debugging.

### **Terraform online execution**

Initialization, preview, and execution are the workflow nodes of Terraform after the configuration file is written. Terraform Explorer uses debugging tasks as carriers to implement Terraform workflow nodes through task execution. Each debugging task execution completes initialization, preview, and execution actions in sequence.

Feature set

Feature point

Feature description

Executing configuration files

Online initialization

Initialization is the first step for preview and execution, so it runs as part of preview and execution in Terraform Explorer.

Online preview

Click Preview. Terraform Explorer creates a new debugging task or runs `terraform init` and `terraform plan` in an existing debugging task. After completion, it generates a Terraform execution plan and displays the plan details on the page. Preview the plan and choose to continue or cancel execution.

Online execution

When the execution plan meets your expectations, click Execute to run it. Terraform Explorer runs `terraform apply` to create or modify the resources in the plan.

Click Preview and Execute to skip manual confirmation and run the plan automatically. Terraform Explorer runs `terraform init`, `terraform plan`, and `terraform apply` in sequence.

Resource destruction

When you finish debugging and want to destroy resources, click Destroy Resources. Terraform Explorer uses `terraform plan` to generate a destruction plan. After you confirm, Terraform Explorer runs `terraform apply` to destroy all resources in the task.

## **Benefits**

Terraform Explorer supports online management of the main functions of the Terraform open-source version, with advantages such as no environment installation required, no code writing required, and no state management required.

### **No environment installation required**

Terraform Explorer supports online hosting of the Terraform client and accelerated download of the Alibaba Cloud Provider when executing Terraform commands. You no longer need to worry about environment issues such as Terraform installation, configuration, or slow Provider downloads.

### **No code writing required**

Terraform Explorer provides the ability to automatically generate template configuration files through forms for single resources. You no longer need to worry about not knowing how to write Terraform code or finding it troublesome to write. Additionally, it is equipped with related example templates for each resource type, which can be run with one click by selecting a template.

Furthermore, Terraform Explorer helps you save the templates and parameters used for each Terraform execution by default. When you initiate a new debugging task, you can choose to load content from historical templates and parameters.

### **No state management required**

State management is an important part of Terraform, divided into local state and remote state. Terraform Explorer supports the management of these two states, using local state management by default. It helps you host the running state of each Terraform execution to ensure that the same configuration file can be run multiple times, while maintaining the native state management mechanism of Terraform and ensuring state security.

## **Terms**

Concept

Description

Version

The version of Alibaba Cloud Terraform Provider. The minimum supported version is currently 1.202.0

Product

The list of cloud products supported by each Provider version, supporting fuzzy search by keywords

Resource type

The resource types supported by the selected cloud product in each Provider version, supporting fuzzy search by keywords

Template

A Terraform configuration file, which is a text file in HCL format with UTF-8 encoding. You can automatically generate it by filling in form parameters or reference an example template under a certain resource type.

Template version

Each time a debugging task is executed, the template used will be saved as a template version. You can view the details of different template versions.

Task

Whenever a new debugging action is initiated through the "Start Debugging" button, Terraform Explorer will create a new debugging task. Each task corresponds to a unique state file, so only one preview or execution operation can be performed at a time.

Debugging record

Each run (preview or preview and execute) of each task will generate a debugging record. New debugging records are generated and executed based on the previous debugging record.

Debugging history

All debugging tasks for each resource type are recorded in the debugging history. You can select a historical task and continue debugging based on the latest debugging record.

## **access control**

When accessing Terraform Explorer, some functions require authorization first, such as creating debugging tasks, previewing, previewing and executing, destroying resources, viewing debugging history, viewing resource details, and more. The APIs and functions used by Terraform Explorer that require authentication are shown in the following table:

API name

API description

Related feature points (buttons)

CreateExplorerModule

Save template content

Preview, Preview and Execute

GetExplorerModule

Get template content

View template

CreateExplorerModuleVersion

Each time you continue debugging, the template content is saved as a new version

Preview, Preview and Execute, Continue Debugging

ListExplorerModules

List templates

Display example templates

UpdateExplorerModuleAttribute

Update template content

Edit example templates

DeleteExplorerModule

Delete template

Delete example templates

CreateExplorerTask

Create debugging task

Preview, Preview and Execute

GetExplorerTask

Get debugging task details

Debugging results

DeleteExplorerTask

Delete debugging task

Delete task

UpdateExplorerTaskAttribute

Update debugging task

Destroy resources

CreateJob

Create job, run debugging task

Preview, Preview and Execute, Destroy resources

GetJob

Get debugging task execution details

Debugging results

OperateJob

Operate job, execute debugging task after preview completes

Preview and Execute, Execute, Destroy resources

ListJobs

Get job list—the execution records of debugging tasks

Debugging records

CreateExplorerHistory

Record each debugging task

Debugging history

ListExplorerHistories

Get debugging history details and historical parameters

Debugging history, Use historical parameters

ListResources

Get list and details of successfully created resources

Resource details

ExportTerraformCode

Export Terraform code for the selected resources

Online experience

Before using Terraform Explorer, you can implement fine-grained access control through the APIs above, or you can complete quick authorization through the following access policy:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:CreateExplorerModuleVersion",
        "iacservice:GetExplorerModule",
        "iacservice:CreateExplorerModule",
        "iacservice:ListExplorerModules",
        "iacservice:UpdateExplorerModuleAttribute",
        "iacservice:DeleteExplorerModule"
      ],
      "Resource": "acs:iacservice:*:*:explorermodule/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:CreateExplorerTask",
        "iacservice:UpdateExplorerTaskAttribute",
        "iacservice:GetExplorerTask",
        "iacservice:DeleteExplorerTask"
      ],
      "Resource": "acs:iacservice:*:*:explorertask/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:CreateJob",
        "iacservice:GetJob",
        "iacservice:listJobs",
        "iacservice:OperateJob"
      ],
      "Resource": "acs:iacservice:*:*:explorertask/*/job/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:ListResources",
        "iacservice:ListExplorerHistories",
        "iacservice:CreateExplorerHistory",
        "iacservice:ExportTerraformCode",
        "iacservice:ListRecentCalls"
      ],
      "Resource": "*"
    }
  ]
}
```
