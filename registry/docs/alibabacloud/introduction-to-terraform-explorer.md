## Overview

[Terraform Explorer](https://api.aliyun.com/api-tools/terraform) is a tool provided by Alibaba Cloud to debug Terraform configuration files online based on open source Terraform. Terraform Explorer is designed to help developers simplify the processes of writing Terraform configuration files and operating Terraform and lower the barrier to entry for using Terraform. With Terraform Explorer, developers can write a form to automatically generate and convert Terraform configuration files, and use a simple button-based interface to run Terraform online.

## **Features**

### **Terraform configuration file**

Terraform configuration files define infrastructure resources by using code. Writing a Terraform configuration file is the first step in an [Infrastructure as Code (IaC) workflow](/help/en/terraform/introduction-of-terraform-1#6378f9961dxzt). After you define the required Alibaba Cloud resources, such as Elastic Compute Service (ECS) instances and ApsaraDB RDS instances, and dependencies between the resources in the configuration file, Terraform automatically creates and configures the defined resources based on the configuration file. This implements automated deployment and O&M. Terraform Explorer can automatically generate configuration files and allows developers to edit configuration files online.

Feature category

Feature

Description

Write a configuration file

Automatically generate a configuration file

After you select a cloud service and a resource type on the Terraform Explorer page of OpenAPI Explorer, click Initiate Debugging. Terraform Explorer automatically generates a configuration file for the selected resource type. Then, you can configure some parameters or all of the parameters in the left-side form of the Terraform Explorer page to continuously improve the configuration file.

Edit a configuration file online

Terraform Explorer provides one or more sample templates for each resource type. If you do not want to configure numerous parameters or want to create multiple resources at a time, select a resource type and a sample template. The details of the sample template are displayed. Then, click Initiate Debugging.

If the sample template cannot meet your requirements, turn on Edit in the upper-right corner of the template to add content to the template or modify the template online. After you save the template, you can continue debugging.

### **Run Terraform online**

In a Terraform workflow, after you write a configuration file, you need to initialize the working directory of Terraform, and then preview and execute an execution plan. On the Terraform Explorer page of OpenAPI Explorer, you can implement a Terraform workflow by running a debugging task. Each time you run a debugging task, you must perform the initialization, preview, and execution steps in sequence.

Feature category

Feature

Description

Execute a configuration file

Initialize the working directory of Terraform online

Before you preview and execute an execution plan in Terraform Explorer, you need to initialize the working directory of Terraform.

Preview an execution plan online

If you click Plan, Terraform Explorer creates a debugging task or runs the `terraform init` and `terraform plan` commands in sequence in an existing debugging task. Then, a Terraform execution plan is generated, and the details of the execution plan are displayed on the Apply Details tab. You can preview the execution plan, and then execute the execution plan or abort the execution of the execution plan.

Execute the execution plan online

If the execution plan meets your expectations, click Apply to execute the execution plan. Then, Terraform Explorer runs the `terraform apply` command to create or change the resource defined in the execution plan.

If you click Plan & Apply, Terraform Explorer automatically executes the generated execution plan without manual confirmation. In other words, Terraform Explorer runs the `terraform init`, `terraform plan`, and `terraform apply` commands in sequence.

Destroy resources

If you want to destroy a resource after you complete the debugging, click Destroy Resources. Then, Terraform Explorer runs the `terraform plan` command to generate an execution plan for destroying the resource. After you confirm that you want to destroy the resource, Terraform Explorer runs the `terraform apply` command to execute the execution plan. This way, the resource defined in the execution plan is released.

## **Benefits**

Terraform Explorer offers an online platform for managing the core features of open source Terraform. It requires no installation, coding, or manual status management.

### **Free of installation**

Terraform Explorer provides a managed online Terraform client. When a Terraform command is run, Terraform Explorer accelerates the download of the Alibaba Cloud Terraform provider. You do not need to worry about environment issues such as the installation and configuration of Terraform and slow provider downloads.

### **Free of coding**

Terraform Explorer simplifies single-resource deployments by automatically generating configuration files based on user-provided parameters, eliminating the complexity of writing Terraform code. In addition, Terraform Explorer provides one or more sample templates for each resource type. You can select a sample template to execute an execution plan with just a few clicks.

Furthermore, Terraform Explorer automatically saves the template and parameters used in each Terraform run. When you initiate a new debugging task, you can select a template and parameters that you used before.

### **Free of manual status management**

Terraform supports both local and remote status management. Terraform Explorer also allows you to manage local and remote status. By default, Terraform Explorer uses local status management. However, Terraform Explorer stores a history of the status of each Terraform run. This ensures status security across repeated applications of the same configuration file while retaining the native status management mechanism of Terraform.

## **Terms**

Term

Description

version

The version of the Alibaba Cloud Terraform provider. The minimum version supported is 1.202.0.

service

The cloud services that are supported by each provider version. Fuzzy searches by keyword are supported.

resource type

The resource types that are supported by the selected cloud service in each provider version. Fuzzy searches by keyword are supported.

template

A Terraform configuration file that is in the HashiCorp Configuration Language (HCL) format. The file is encoded in UTF-8. You can configure parameters to automatically generate a template, or reference a sample template that is provided for a resource type.

template version

The version of a template. Each time a debugging task is run, a new version of the used template is saved. You can view the details of each template version.

task

A debugging task. If you initiate debugging by clicking Initiate Debugging, Terraform Explorer creates a debugging task. Each debugging task corresponds to a unique status file. Therefore, you can preview or execute only one execution plan at a time.

debugging record

A debugging record. Each time a debugging task is run by clicking Plan or Plan & Apply, a debugging record is generated. For each new debugging record, an execution plan is generated and executed based on the previous debugging record.

debugging history

The debugging history. All debugging tasks of each resource type are recorded in the debugging history. You can select a historical task and continue debugging based on the latest debugging record.

## **Access control**

If you want to access Terraform Explorer to use some features, you must grant the required permissions. Such features include creating debugging tasks, previewing execution plans, previewing and executing execution plans, destroying resources, viewing the debugging history, and viewing resource details. The following table lists the API operations that require authorization in Terraform Explorer.

Operation

Description

Involved feature

CreateExplorerModule

Saves a template.

Preview an execution plan and preview and execute the execution plan.

GetExplorerModule

Queries the details of a template.

View a template.

CreateExplorerModuleVersion

Saves the template content as a new version each time when debugging continues.

Preview an execution plan, preview and execute the execution plan, and continue debugging

CreateExplorerTask

Creates a debugging task.

Preview an execution plan and preview and execute the execution plan.

GetExplorerTask

Queries the details of a debugging task.

View debugging results.

UpdateExplorerTaskAttribute

Updates a debugging task.

Destroy resources.

CreateJob

Creates and executes a debugging task.

Preview an execution plan, preview and execute the execution plan, and destroy resources.

GetJob

Queries the execution details of a debugging task.

View debugging results.

OperateJob

Operates a debugging task. After you preview an execution plan, execute the debugging task.

Preview and execute an execution plan, execute the execution plan, and destroy resources.

ListJobs

Queries the execution records of a debugging task.

View debugging records.

CreateExplorerHistory

Records all debugging tasks.

View the debugging history.

ListExplorerHistory

Queries the debugging history and historical parameters.

View the debugging history and use historical parameters.

ListResources

Queries the created resources and the details of the created resources.

View resource details.

Before you use Terraform Explorer, you can use the preceding API operations to implement fine-grained access control. You can also use the following policy to grant the required permissions:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:CreateExplorerModuleVersion",
        "iacservice:GetExplorerModule",
        "iacservice:CreateExplorerModule"
      ],
      "Resource": "acs:iacservice:*:*:explorermodule/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:CreateExplorerTask",
        "iacservice:UpdateExplorerTaskAttribute",
        "iacservice:GetExplorerTask"
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
      "Resource": "acs:iacservice:*:*:task/*/job/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iacservice:ListResources",
        "iacservice:ListExplorerHistories",
        "iacservice:CreateExplorerHistory"
      ],
      "Resource": "*"
    }
  ]
}
```
