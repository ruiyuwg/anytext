This topic describes the billing rules for registered clusters, multi-cluster management, workflow clusters, and backup center in Distributed Cloud Container Platform for Kubernetes (ACK One).

## Billing overview

The multi-cluster management and backup center features are free of charge. In addition, no cluster management fee is charged for registered clusters or Kubernetes clusters for distributed Argo workflows (workflow clusters).

However, when you use ACK One resources and related features, you need to use and pay for other Alibaba Cloud services. For more information about the billing rules of these Alibaba Cloud services, see the billing topics of the relevant Alibaba Cloud services. Examples:

-   If you associate clusters with master instances, you are charged for the associated clusters. For more information, see [Billing](/help/en/ack/billing-information#concept-kjv-shc-5db) and [Billing of ACK Serverless clusters](/help/en/ack/serverless-kubernetes/product-overview/ack-serverless-cluster-billing-instructions).
    
-   The backup center uses Object Storage Service (OSS) buckets to store backups of cluster resources, such as related YAML files. It uses cloud disk snapshots to back up volumes that use Alibaba Cloud disks and the Hybrid Backup Recovery (HBR) to back up other types of volumes. If you use this backup feature, you are charged for the associated storage fees. For more information, see [Billing](/help/en/oss/billing-overview#concept-n4t-mwg-tdb), [Snapshots](/help/en/ecs/snapshots-1), and [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items).
    
-   If you use Elastic Compute Service (ECS) instances, you are charged for the ECS instances. For more information, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).
    

## **Cloud resource billing for registered clusters**

If other Alibaba Cloud services are used when you use registered clusters, you are charged based on the billing rules of the services. If your registered clusters do not use other Alibaba Cloud services, no additional fees are charged.

**Alibaba Cloud service**

**Activation**

**Description**

**Subscription**

**Resource plan**

**Billing rule**

Virtual Private Cloud (VPC)

Required

This service can be used to build networks and create routing rules for ACK clusters.

For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

Not supported

Not supported

[Billing](/help/en/vpc/product-overview/product-billing#concept-1357436)

Classic Load Balancer (CLB)

Required

This service is used to create CLB instances for the Kubernetes API servers of registered clusters.

For more information, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

Not supported

Not supported

[CLB pay-as-you-go billing](/help/en/slb/pay-as-you-go-2#concept-dph-vfs-wdb)

Container Registry

Recommended

This service ensures the security of cloud-native applications that are fully managed on the cloud and allows you to manage the lifecycle of these applications.

For more information, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)

Not supported

Not supported

[Billing rules](/help/en/acr/product-overview/billing-description#concept-2047822)

Simple Log Service

Recommended

This service allows you to collect and query the log data of cluster components and applications.

For more information, see [What is Simple Log Service?](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb)

Not supported

Supported

For more information about how to select resource plans based on your business requirements, see [Purchase a resource plan](/help/en/sls/purchase-a-resource-plan#task-2190130).

[Billing overview](/help/en/sls/billing-overview#concept-2086667)

Managed Service for Prometheus

Recommended

This service is used to monitor ACK clusters and generate alerts when exceptions are detected.

For more information, see [What is Managed Service for Prometheus?](/help/en/arms/prometheus-monitoring/product-overview/what-is-prometheus#concept-662038)

Not supported

Not supported

[Pay-as-you-go](/help/en/arms/prometheus-monitoring/product-overview/pay-as-you-go#concept-2372659)

Elastic Compute Service (ECS)

Optional

This service is used to add new nodes to a node pool.

For more information, see [What is ECS?](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome)

Supported

Not supported

[Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db)

Auto Scaling

Optional

This service is used to add new nodes to a node pool.

For more information, see [What is Auto Scaling?](/help/en/auto-scaling/product-overview/what-is-auto-scaling#concept-25857-zh)

Not supported

Not supported

[Billing overview](/help/en/auto-scaling/product-overview/billing-rules#concept-nw2-h3m-qfb)

Elastic Container Instance

Optional

This service is used to create elastic container instances.

For more information, see [What is Elastic Container Instance?](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079)

Not supported

Not supported

[Billing overview](/help/en/eci/product-overview/billing-overview#topic-1860085)

## **Cloud resource billing for multi-cluster management**

If other Alibaba Cloud services are used when you use the multi-cluster management feature to manage associated clusters, you are charged based on the billing rules of the services. If your registered clusters do not use other Alibaba Cloud services, no additional fees are charged. For example, if you use GitOps to manage associated clusters, you must purchase a CLB instance and an elastic container instance that has 2 vCores and 4 GB of memory.

**Alibaba Cloud service**

**Activation**

**Description**

**Subscription**

**Resource plan**

**Billing rule**

Virtual Private Cloud (VPC)

Required

This service can be used to build networks and create routing rules for ACK clusters.

For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

Not supported

Not supported

[Billing](/help/en/vpc/product-overview/product-billing)

Elastic IP Address (EIP)

Optional

This service is used to provide public network access to the API server of the cluster.

For more information, see [What is an Elastic IP Address?](/help/en/eip/product-overview/what-is-eip)

Supported

Not supported

[Billing overview](/help/en/eip/billing-overview)

Classic Load Balancer (CLB)

Required

When you create a Fleet instance, ACK One automatically creates a standard I (slb.s2.small) CLB instance by default. This CLB instance provides load balancing for the API server of the workflow cluster.

For more information, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

Not supported

Not supported

[CLB pay-as-you-go billing](/help/en/slb/pay-as-you-go-2#concept-dph-vfs-wdb)

**Note**

CLB instances that are used by GitOps use the pay-as-you-go billing method and the pay-by-specification metering method.

Optional

If you use GitOps to manage associated clusters, ACK One creates a CLB instance for accessing the GitOps API and UI.

For more information, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

Not supported

Not supported

Elastic Container Instance

Optional

If you use GitOps to manage associated clusters, ACK One creates an elastic container instance that has 2 vCores and 4 GB of memory.

For more information, see [What is Elastic Container Instance?](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079)

Not supported

Not supported

[Billing overview](/help/en/eci/product-overview/billing-overview#topic-1860085)

## **Cloud resource billing for workflow clusters**

If other Alibaba Cloud services are used when you use workflow clusters to manage associated clusters, you are charged based on the billing rules of the services. If your workload clusters do not use other Alibaba Cloud services, no additional fees are charged.

**Alibaba Cloud service**

**Activation**

**Description**

**Subscription**

**Resource plan**

**Billing rule**

Virtual Private Cloud (VPC)

Required

This service can be used to build networks and create routing rules for ACK clusters.

For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

Not supported

Not supported

[Billing](/help/en/vpc/product-overview/product-billing#concept-1357436)

Classic Load Balancer (CLB)

Required

If you create a workflow cluster, ACK One automatically creates a Standard I (slb.s2.small) CLB instance by default. This CLB instance provides load balancing for the API server of the workflow cluster.

For more information, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

Not supported

Not supported

[CLB pay-as-you-go billing](/help/en/slb/pay-as-you-go-2#concept-dph-vfs-wdb)

Elastic Container Instance

Required

This service is used to run workloads.

For more information, see [What is Elastic Container Instance?](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079)

Not supported

Not supported

[Billing overview](/help/en/eci/product-overview/billing-overview#topic-1860085)

Elastic IP Address (EIP)

Optional

This service is used to provide public network access to the API server of the workflow cluster.

For more information, see [What is an Elastic IP Address?](/help/en/eip/product-overview/what-is-eip)

Supported

Not supported

[Billing overview](/help/en/eip/billing-overview)

Simple Message Queue (formerly MNS) (SMQ)

Optional

This service is used to provide an event source for the eventing feature of the workflow cluster.

For more information, see [What is SMQ?](/help/en/mns/product-overview/what-is-mns)

Not supported

Not supported

[Billing overview](/help/en/mns/product-overview/billing-overview)

Object Storage Service (OSS)

Optional

This service is used to provide an event source for the eventing feature of the workflow cluster.

For more information, see [What is OSS?](/help/en/oss/user-guide/what-is-oss)

Not supported

Supported

For more information about how to select resource plans based on your business requirements, see [Resource plans](/help/en/oss/resource-plan/).

[Billing](/help/en/oss/billing-overview)

Simple Log Service

Recommended

This service allows you to collect and query the log data of cluster components and applications.

For more information, see [What is Simple Log Service?](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb)

Not supported

Supported

For more information about how to select resource plans based on your business requirements, see [Purchase a resource plan](/help/en/sls/purchase-a-resource-plan#task-2190130).

[Billing overview](/help/en/sls/billing-overview#concept-2086667)

Managed Service for Prometheus

Recommended

This service is used to monitor ACK clusters and generate alerts when exceptions are detected.

For more information, see [What is Managed Service for Prometheus?](/help/en/arms/prometheus-monitoring/product-overview/what-is-prometheus#concept-662038)

Not supported

Not supported

[Pay-as-you-go](/help/en/arms/prometheus-monitoring/product-overview/pay-as-you-go#concept-2372659)
