Terraform is an open source tool that allows you to preview, configure, and manage cloud infrastructure and resources in a secure and efficient manner.

## Introduction to Terraform

Terraform is a tool provided by HashiCorp to automate IT infrastructure orchestration. Terraform allows you to use code to manage and maintain IT resources. Terraform also allows you to define infrastructure resources such as virtual machines (VMs), storage accounts, and network interfaces in the configuration files that describe cloud resource topologies. The CLI of Terraform allows you to use a template syntax to define, preview, and deploy infrastructure in Alibaba Cloud. You can use Terraform to create, modify, and delete cloud resources, such as Elastic Compute Service (ECS) instances, virtual private clouds (VPCs), ApsaraDB RDS instances, and Server Load Balancer (SLB) instance. For more information, visit [HashiCorp Terraform](https://www.terraform.io/?spm=a2c4g.11186623.0.0.114671f6frliX6).

This document describes how to use Terraform to create and use an ApsaraDB RDS for PostgreSQL instance.

## Benefits

-   Multi-cloud infrastructure deployment
    
    Terraform is suitable for multi-cloud scenarios in which similar infrastructure is deployed on Alibaba Cloud, clouds of other providers, and data centers. Terraform allows developers to use the same tools and similar configuration files to manage infrastructure resources that are built on clouds of different providers.
    
-   Automated infrastructure management
    
    Terraform can create configuration file templates to define and provision ECS resources in a repeatable and predictable manner. This reduces human errors during deployment and management. Terraform can deploy the same template multiple times to create identical development, test, and production environments.
    
-   Infrastructure as code
    
    In Terraform, you can use code to manage and maintain resources. Terraform stores a copy of the current state of your infrastructure. This way, you can track changes made to components in the infrastructure as code (IaC) and share infrastructure configurations with other users.
    
-   Reduced development costs
    
    You can use Terraform to create development and deployment environments based on your business requirements. This way, your development and deployment costs can be reduced. In addition, you can evaluate development costs before you make changes to your system.
    

## Scenarios

For information about the use scenarios of Terraform, see [IaC - Terraform Solution](/help/en/terraform/application-scenarios).

## References

-   [Alibaba Cloud provider](https://www.terraform.io/docs/providers/alicloud/index.html?spm=a2c4g.11186623.0.0.11462bebRdnhCz)
    
-   [Alibaba Cloud GitHub](https://github.com/alibaba/terraform-provider)
    
-   [Alibaba Cloud modules in Terraform Registry](https://registry.terraform.io/browse?provider=alicloud)
    
-   [ApsaraDB RDS documentation on Terraform](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/db_account)
