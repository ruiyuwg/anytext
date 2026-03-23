PrivateLink lets you privately access various Alibaba Cloud services. The following table lists the services that are integrated with PrivateLink.

## **Interface endpoints**

**Note**

Some Alibaba Cloud services in the following table are in **public preview**. If you cannot select one of these services when you create an endpoint, contact the service provider to add your account to the service whitelist.

**Alibaba Cloud service**

**Service name**

**Prerequisites**

[Alibaba Cloud Model Studio](/help/en/model-studio/access-model-studio-through-privatelink#9311b0072178f)

com.aliyuncs.dashscope

\-

Artificial Intelligence Platform - DLC (Distributed Training)

com.aliyuncs.privatelink.{**RegionId**}.pai-dlc

\-

[Platform of Artificial Intelligence (PAI) - Elastic Algorithm Service (EAS)](/help/en/pai/user-guide/dedicated-service-gateway/)

The endpoint is managed by the Alibaba Cloud service.

\-

PAI-AI WorkSpace

com.aliyuncs.privatelink.cn-hangzhou.aiworkspace

Request authorization for the **Service Whitelist**

Simple Log Service

com.aliyuncs.privatelink.{**RegionId**}.log

Request **Service Whitelist** authorization

[Object Storage Service](/help/en/oss/user-guide/access-oss-via-privatelink-network)

com.aliyuncs.privatelink.{**RegionId**}.oss

Request **Service Whitelist** authorization

MaxCompute

com.aliyuncs.privatelink.{**RegionId**}.maxcompute.frontend

Request **Service Whitelist** authorization

com.aliyuncs.privatelink.{**RegionId**}.maxcompute.tunnel.share

[Simple Message Queue (formerly MNS)](/help/en/mns/use-cases/access-smq-by-using-privatelink)

com.aliyuncs.{**RegionId**}.smq

Request **Service Whitelist** authorization

Virtual Private Cloud (VPC)

com.aliyuncs.privatelink.{**RegionId**}.vpc

Request **Service Whitelist** authorization

> Authorization is not required in the China (Beijing) region.

VPC Peering Connection

com.aliyuncs.privatelink.{**RegionId**}.vpcpeer

\-

Elastic Container Instance

com.aliyuncs.privatelink.{**RegionId**}.eci

Request **Service Whitelist** authorization

Content Moderation

com.aliyuncs.privatelink.{**RegionId**}.green-cip

Request **Service Whitelist** authorization

Voice Service

com.aliyuncs.privatelink.{**RegionId**}.dyvmsapi

Request **Service Whitelist** authorization

Realtime Compute for Apache Flink

com.aliyuncs.privatelink.{**RegionId**}.ververica

\-

Container Registry

com.aliyuncs.privatelink.{**RegionId**}.cr

Request **Service Whitelist** authorization

OpenSearch Intelligent Search

com.aliyuncs.{**RegionId**}.opensearch

\-

[Vector Retrieval Service (DashVector)](/help/en/vrs/latest/proprietary-network)

com.aliyuncs.{**RegionId**}.dashvector

\-

[Elasticsearch](/help/en/es/user-guide/configure-a-private-connection-for-an-elasticsearch-cluster)

The endpoint is managed by the Alibaba Cloud service.

\-

Elasticsearch Serverless

\*.private.{RegionId}.es-serverless.aliyuncs.com

\-

[ApsaraMQ for RabbitMQ](/help/en/apsaramq-for-rabbitmq/user-guide/private-network-connection-access-point)

The endpoint is managed by the Alibaba Cloud service.

\-

[ApsaraMQ for RocketMQ](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/user-guide/manage-instances)

Endpoints are hosted by Alibaba Cloud services.

\-

[AnalyticDB for MySQL](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster)

The endpoint is managed by the Alibaba Cloud service.

\-

[Bastionhost Basic and Enterprise Editions](/help/en/bh/bastionhost/user-guide/enable-o-m-over-a-private-network)

The endpoint is managed by the Alibaba Cloud service.

\-

[Alibaba Cloud DevOps (Tongyi Lingma Enterprise Edition)](/help/en/yunxiao/network-configuration)

Endpoints are hosted on Alibaba Cloud services.

\-

Security Center

The endpoint is managed by the Alibaba Cloud service.

Request **Service Whitelist** authorization

[Data Security Center](/help/en/dsc/data-security-center/user-guide/audit-configuration)

\-

\-

[Compute Nest](/help/en/compute-nest/configure-private-access-to-a-service-over-an-vpc)

\-

\-

Key Management Service

-   [Cloud Hardware Security Module (HSM)](/help/en/kms/cloud-hardware-security-module/product-overview/what-is-a-dedicated-hsm)
    
-   [Key Management Service (KMS)](/help/en/kms/key-management-service/user-guide/manage-external-keys)
    

\-

\-

DataV

com.aliyuncs.privatelink.cn-hangzhou.epsrv-bp15bqkt8q4mxmyrmjku

Request **Service Whitelist** authorization

CloudFlow

com.aliyuncs.{RegionId}.fnf

Request **Service Whitelist** authorization

Cloud Control API

com.aliyuncs.privatelink.cn-zhangjiakou.cloudcontrol-api

Request **Service Whitelist** authorization

E-MapReduce Spark

com.aliyuncs.privatelink.{RegionId}.emrspark

\-

Resource Access Management (RAM)

com.aliyuncs.privatelink.{RegionId}.ram

\-

[FeatureDB](/help/en/pai/user-guide/featuredb-overview)

\-

\-

## **Reverse endpoints**

**Alibaba Cloud service**

**Service name**

[Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/configure-a-private-dns-domain-name-resolution-endpoint)

Endpoints are hosted by Alibaba Cloud services.

[Data Transmission Service (DTS)](/help/en/dts/user-guide/what-is-a-vpc-data-channel)

An endpoint is hosted by an Alibaba Cloud service.
