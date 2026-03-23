Terraform enables you to define infrastructure as code and use code to create, query, update, and delete infrastructure resources.

## Create infrastructure resources

You can use Terraform to create and manage infrastructure resources such as ECS instances, VPCs, and SLB instances.

For more information about how to create multiple ECS instances and attach data disks to the instances, see the [ecs-instance](https://registry.terraform.io/modules/alibaba/ecs-instance/alicloud) sample template.

## Load balance application traffic

You can distribute traffic to specific backend servers (ECS instances) based on configured forwarding rules to improve the service capability of applications and eliminate single points of failure.

For more information about how to deploy SLB instances, see the [ecs-slb](https://github.com/terraform-providers/terraform-provider-alicloud/tree/master/examples/ecs-slb) sample template.

## Create Auto Scaling resources

Auto Scaling automatically adjusts the volume of your elastic computing resources based on your business needs and policies. Based on the scaling rules that you set, Auto Scaling automatically adds ECS instances as your business needs grow to ensure that you have sufficient computing capabilities. When your business needs fall, Auto Scaling automatically reduces the number of ECS instances to save costs.

For more information about how to create scaling groups, scaling configurations, and scaling rules, see the [autoscaling](https://registry.terraform.io/modules/terraform-alicloud-modules/autoscaling/alicloud) and [autoscaling-rule](https://registry.terraform.io/modules/terraform-alicloud-modules/autoscaling-rule/alicloud) sample templates.

## Manage clusters

You can use Terraform to quickly create a Kubernetes cluster in a VPC.

You can also start a Kubernetes cluster in Alibaba Cloud and create resources such as VPCs, vSwitches, and NAT gateways in the cluster. For more information, see the [kubernetes module](https://registry.terraform.io/modules/aliyun/kubernetes/alicloud) sample template.

## Create Function Compute resources

Alibaba Cloud Function Compute is a fully-managed event-driven compute service. It allows you to focus on writing and uploading code without the need to manage infrastructure resources such as servers. With Function Compute, you can quickly build any type of applications or services without considering management or O&M.

You can use Terraform to quickly create a Function Compute runtime environment and configure multiple triggers in such categories as OSS, CDN, MNS, HTTP, and Log Service. For more information, see the [fc module](https://registry.terraform.io/modules/terraform-alicloud-modules/fc/alicloud) sample template.
