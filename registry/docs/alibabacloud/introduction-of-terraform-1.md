Building on your understanding of Infrastructure as Code (IaC), this topic provides a deep dive into Terraform.

## Overview

Terraform is an open source IaC tool developed by HashiCorp. Terraform allows you to use declarative configuration files to define Alibaba Cloud resources.

Resources that can be managed by Terraform encompass a wide range, from fundamental components such as VMs, containers, storage resources, and network resources, to configuration components such as security group rules, Domain Name System (DNS) entries, and policies. Terraform even allows you to manage specific software as a service (SaaS) features.

Terraform translates infrastructure blueprints into code by using a simple and human-readable language known as the HashiCorp Configuration Language (HCL). Terraform reads code configuration files and generates an execution plan that outlines proposed changes. This plan can be previewed, validated, and finally applied to provision and manage your infrastructure on Alibaba Cloud.

Alibaba Cloud provides dedicated Terraform providers that allow O&M engineers to define, codify, and automate the deployment of Alibaba Cloud resources.

## **Terraform features**

Terraform has the following features:

-   **Multi-cloud and multi-API support**: In addition to Alibaba Cloud, Terraform supports all major cloud service providers. Terraform also integrates with the APIs of platforms such as GitHub and Kubernetes.
    
-   **Open core architecture**: Terraform is available in three editions that range from self-managed to fully managed and offers enterprise-grade features.
    
-   **Large community**: Terraform provides an open registry to support online registration and management of all providers and modules, including those of Alibaba Cloud.
    
-   **Infrastructure configurations**: Terraform manages the lifecycle including creation, modification, deletion, and inspection of infrastructure resources. Terraform does not manage the configurations of infrastructure systems, such as starting services, installing dependencies, installing applications, or running updates.
    

Terraform on Alibaba Cloud provides the following capabilities:

-   **Configure resources**: You can use Terraform to define and configure Alibaba Cloud resources. You can use resource blocks to define infrastructure resources such as VMs, network resources, storage resources, and firewalls.
    
-   **Create resource relationships**: You can create explicit dependencies between resources to ensure that resources are created in the specified order.
    
-   **Standardize modules**: You can create reusable modules to standardize how specific resources are created. Alibaba Cloud provides some standardized modules. You can directly reference these modules.
    

## **IaC workflow**

This section describes the standard IaC workflow.

-   **Define the scope of required resources**
    
    Before you start a Terraform workflow, you must define the scope of resources required for your project or application. For example, a typical two-layer architecture requires a web server pool for database creation. Therefore, you must identify the required Alibaba Cloud resources and plan their interconnections in this scoping phase.
    
-   **Create a template**
    
    The first step in a Terraform workflow is to create a template by defining the desired infrastructure as code in configuration files such as main.tf, variables.tf, and .tfvars files.
    
-   **Initialize the working directory of Terraform**
    
    During initialization, Terraform automatically downloads and installs any necessary plug-ins or modules required by your code configuration. You need to run the terraform init command to initialize the working directory of Terraform and install the Alibaba Cloud Terraform provider.
    
-   **Preview the execution plan**
    
    In the execution plan preview phase, you need to run the terraform plan command. The command is used to preview the execution plan in which you create, change, or destroy resources based on the resource configurations defined in the template creation phase. Before the execution plan is applied to your Alibaba Cloud infrastructure, you can review the execution plan to ensure that the execution plan meets your expectations.
    
-   **Execute the execution plan**
    
    After you review the resource configurations described in the execution plan, you need to run the terraform apply command to create actual infrastructure resources or update or destroy the existing infrastructure resources. When you run the command, the corresponding status file is created or the existing status file is modified.
    

As you progress through this tutorial, you can gain a deeper understanding of Terraform workflows.

## **Scenarios**

This section describes the common scenarios of Terraform.

-   **Infrastructure management**
    
    Terraform uses an immutable method to manage infrastructure. The code that you write helps reduce the complexity of upgrading or modifying services and infrastructure.
    
-   **Change tracking**
    
    Terraform can be used to track infrastructure changes. When a new infrastructure change is previewed or executed, Terraform requires you to confirm the change before the status of the infrastructure is changed. When you create infrastructure, Terraform automatically generates a status file. The status file reflects the current status of your infrastructure and displays the number and types of Alibaba Cloud resources modified in the configuration template.
    
-   **Automated changes**
    
    Terraform can be used to automate changes. The template configuration file is declarative. Therefore, you need to only define the final status of infrastructure instead of writing detailed commands to create the infrastructure. Then, Terraform automatically manages dependencies and creates infrastructure resources.
    
-   **Configuration standardization**
    
    Terraform can be used to standardize configurations. You can use custom modules or the public modules provided in the Terraform registry to improve efficiency and implement best practices. Terraform supports automated enforcement policies to limit the types of resources that can be configured and used by your team.
