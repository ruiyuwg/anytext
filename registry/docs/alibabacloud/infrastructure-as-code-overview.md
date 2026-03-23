Managing cloud infrastructure, such as creating ECS instances, configuring networks, and setting up storage, typically relies on manual operations in the console. As infrastructure scales, manual processes often lead to configuration errors, inconsistent environments, and changes that are difficult to trace. Infrastructure as Code (IaC) replaces manual processes with code-based definitions, deployments, and management. This enables automated and repeatable infrastructure delivery.

## Why use IaC

### **How IaC works**

Mainstream IaC tools use configuration files to describe infrastructure. These tools interact with cloud services through APIs to automatically create and configure resources based on the definitions in the files.

Consider a typical scenario where an application is deployed across development, testing, and production environments. Each environment includes an ECS instance, an RDS database, and an SLB load balancer. Creating these resources manually in the console requires you to repeat the same steps three times, and it is difficult to guarantee identical configurations. With IaC, you can write a single configuration file and use different environment variables to automatically create three identical environments. To scale this process for hundreds of applications and permission sets, you can convert the configuration into a template and inject variables. You can then integrate the template into your CI/CD pipeline for automated delivery.

The basic IaC workflow is as follows:

1.  **Define infrastructure**: Write a configuration file using a configuration language or a programming language to describe the required resources and their dependencies.
    
2.  **Automate deployment**: The IaC tool uses the configuration file and cloud service APIs to automatically create and configure resources.
    
3.  **Manage changes**: When the configuration file is modified, the tool detects the differences and incrementally updates the infrastructure to match the new state.
    

### **Benefits of IaC**

-   **Reusability**: You can use the same configuration file to create and manage multiple environments, such as development, testing, and production, to ensure consistency.
    
-   **Automation**: Automate the creation and management of cloud resources and integrate IaC directly into CI/CD pipelines for continuous delivery.
    
-   **Process-oriented**: Treat infrastructure changes the same as application code changes. You can review configuration updates, validate them automatically, and manage them through defined workflows.
    
-   **Auditability**: Store configuration files in a version control system to maintain a complete change history for auditing and rollbacks.
    

## How to choose an IaC tool

Alibaba Cloud supports multiple IaC tools. These tools differ in their configuration methods, level of integration with Alibaba Cloud services, and ideal use cases:

**Authoring method**

**Tool**

**Use case**

Graphical interface. No coding required.

[Terraform Explorer](#f8ae4e6dc6h7m)

Quickly try IaC. Visually generate and execute configurations.

HCL configuration language

[Terraform (recommended)](#087de7f11euic)

Multi-cloud management, team collaboration, production environments.

JSON/YAML templates

[ROS](#9efa604605n8d)

Alibaba Cloud-only environments. Deep integration with the Alibaba Cloud Management Console.

General-purpose programming languages

[CDKTF](#d78aad642aweu)

Your development team prefers Java, Python, Go, or TypeScript.

YAML Playbook

[Ansible](#feb641ce537tq)

Configuration management, application deployment, automated O&M.

**Note**

Pulumi and other tools also offer Alibaba Cloud providers. However, their coverage of Alibaba Cloud services is not as comprehensive as Terraform's. We recommend choosing from the tools listed above. If you are new to all of them, start with Terraform.

## IaC tools supported by Alibaba Cloud

Alibaba Cloud integrates with many IaC tools. Choose the one that is right for your use case:

**Tool**

**Description**

**Learn more**

**Terraform Explorer**

A visual tool built on Terraform. Generates configurations and executes them automatically. No client installation, no configuration writing, and no state management required.

[Introduction to Explorer](/help/en/terraform/introduction-to-terraform-explorer)

**Terraform (recommended)**

An open-source, declarative tool from HashiCorp. Uses HCL to define cloud and on-premises resources. Supports version control, template reuse, and automated workflows. Alibaba Cloud is one of Terraform’s four official major cloud providers. Its provider is updated regularly.

[Introduction to Alibaba Cloud Terraform](/help/en/terraform/what-is-terraform)

**ROS**

An Alibaba Cloud-native automated deployment service. Free to use. Defines resources using JSON or YAML templates. Offers a visual interface and template library. Supports one-click deployment and managed Terraform templates.

[What is Resource Orchestration Service?](/help/en/ros/product-overview/what-is-ros)

**CDKTF**

Uses general-purpose programming languages—such as Java, Go, Python, and TypeScript—to auto-generate Terraform configurations and run deployments. Combines the automation of declarative models with the flexibility of imperative models.

[CDK for Terraform](https://developer.hashicorp.com/terraform/cdktf)

**Terraform Cloud / Enterprise**

A HashiCorp enterprise product for Terraform. Manages infrastructure resources at the organization level.

[Terraform Editions](https://developer.hashicorp.com/terraform/intro/terraform-editions)

**Pulumi**

Uses general-purpose programming languages to define infrastructure. However, its coverage of Alibaba Cloud services is less complete than Terraform’s. Prefer CDKTF instead.

[Pulumi Alicloud](https://www.pulumi.com/registry/packages/alicloud/)

**Ansible**

Focused on automated O&M. Supports configuration management and application deployment. Agentless architecture—no client installation required on target machines.

[Ansible for Alibaba Cloud](https://www.alibabacloud.com/help/zh/ansible/)

## FAQ

**Do I need programming experience to use IaC?**

No, you do not. Declarative tools such as Terraform use a simple, purpose-built configuration language (HCL) and do not require programming experience. Terraform Explorer provides a graphical interface to generate configurations without writing any code. Only tools such as CDKTF and Pulumi require knowledge of programming languages such as Java or Python.

**Can I use the same IaC configuration files across cloud platforms?**

It depends on the tool. Tools such as Terraform and Pulumi support multicloud deployments. However, because each cloud platform has its own provider and resource definitions, configuration files cannot be reused directly across different clouds. Despite this, modular project structures and common workflow logic can often be reused. ROS works only with Alibaba Cloud.

**Is Terraform free?**

The Terraform CLI (open-source edition) is free. Terraform Cloud offers a free tier and paid plans, and Terraform Enterprise is a paid product. Using Terraform to manage resources on Alibaba Cloud does not incur costs for the tool itself. However, the cloud resources that you create are billed according to standard Alibaba Cloud pricing.

## References

-   [Introduction to Terraform](/help/en/terraform/what-is-terraform)
    
-   [Introduction to Explorer](/help/en/terraform/introduction-to-terraform-explorer)
    
-   [What is Resource Orchestration Service?](/help/en/ros/product-overview/what-is-ros)
