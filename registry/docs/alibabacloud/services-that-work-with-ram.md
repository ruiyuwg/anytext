This topic lists the Alibaba Cloud services that work with Resource Access Management (RAM), the authorization granularity and system policies for each service, and the links of related topics.

## Overview

Each table in this topic contains the following columns:

-   Service: the name of the Alibaba Cloud service that supports RAM.
    
-   Sub-service or sub-module: the sub-service or sub-module of the service. A hyphen (-) indicates that this does not apply.
    
-   RAM code: the unique code used in RAM to identify the service.
    
-   Console: indicates whether RAM can be used for access control in the service's console. Supported indicates support, Unsupported indicates no support, and a circle (○) indicates that the service does not have a console.
    
-   API: indicates whether RAM can be used for access control when calling the service's API. Supported indicates support, Unsupported indicates no support, and a circle (○) indicates that the service does not provide an API.
    
-   Authorization granularity: the most specific level at which permissions can be granted for the service. A hyphen (-) indicates that a specific granularity is not defined.
    
    The following authorization granularities are defined:
    
    -   Service level: Permissions are granted to the entire service. A RAM user or role can either access all resources within the service or none.
        
    -   Operation level: Permissions are granted for specific API operations on certain types of resources within the service.
        
    -   Resource level: Permissions are granted for specific operations on individual resources. This is the most granular level. For example, you can authorize a RAM user to restart a specific Elastic Compute Service (ECS) instance.
        
-   System policy: the system policies that RAM provides for the service. A hyphen (-) indicates that no system policies are provided.
    
-   References: links to relevant documentation about RAM integration for the service. A hyphen (-) indicates that no specific documentation is available.
    

## Elastic computing

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

ECS

ECS

ecs

Supported

Supported

Resource

-   AliyunECSFullAccess
    
-   AliyunECSReadOnlyAccess
    
-   AliyunECSAssistantFullAccess
    
-   AliyunECSAssistantReadonlyAccess
    
-   AliyunECSNetworkInterfaceManagementAccess
    
-   AliyunECSWorkbenchFullAccess
    

[RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram)

Elastic Block Storage (EBS)

EBS

ecs

Supported

Supported

Resource

-   AliyunECSFullAccess
    
-   AliyunECSReadOnlyAccess
    
-   AliyunECSAssistantFullAccess
    
-   AliyunECSAssistantReadonlyAccess
    
-   AliyunECSNetworkInterfaceManagementAccess
    

\-

EBS

EBS

ebs

Supported

Supported

Resource

-   AliyunEBSFullAccess
    
-   AliyunEBSReadOnlyAccess
    

\-

ECS

Elastic GPU Service

ecs

Supported

Supported

Resource

-   AliyunECSFullAccess
    
-   AliyunECSReadOnlyAccess
    
-   AliyunECSAssistantFullAccess
    
-   AliyunECSAssistantReadonlyAccess
    
-   AliyunECSNetworkInterfaceManagementAccess
    

[RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram)

ECS

ECS Bare Metal Instance

ecs

Supported

Supported

Resource

-   AliyunECSFullAccess
    
-   AliyunECSReadOnlyAccess
    
-   AliyunECSAssistantFullAccess
    
-   AliyunECSAssistantReadonlyAccess
    
-   AliyunECSNetworkInterfaceManagementAccess
    

[RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram)

ECS

Dedicated Host (DDH)

ecs

Supported

Supported

Resource

-   AliyunECSFullAccess
    
-   AliyunECSReadOnlyAccess
    
-   AliyunECSAssistantFullAccess
    
-   AliyunECSAssistantReadonlyAccess
    
-   AliyunECSNetworkInterfaceManagementAccess
    

[RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram)

ECS

Alibaba Cloud Linux 2

ecs

Supported

Supported

Resource

-   AliyunECSFullAccess
    
-   AliyunECSReadOnlyAccess
    
-   AliyunECSAssistantFullAccess
    
-   AliyunECSAssistantReadonlyAccess
    
-   AliyunECSNetworkInterfaceManagementAccess
    

[RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram)

Auto Scaling

\-

ess

Supported

Supported

Operation

-   AliyunESSFullAccess
    
-   AliyunESSReadOnlyAccess
    

[API usage notes](/help/en/auto-scaling/developer-reference/api-usage-instructions#concept-25925-zh)

Container Service for Kubernetes (ACK)

\-

cs

Supported

Supported

Resource

-   AliyunCSFullAccess
    
-   AliyunCSReadOnlyAccess
    

[RAM authorization](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/ram-authorization#concept-960699)

Batch Compute

\-

batchcompute

Supported

Supported

Service

\-

\-

Resource Orchestration Service (ROS)

\-

ros

Supported

Supported

Resource

-   AliyunROSFullAccess
    
-   AliyunROSReadOnlyAccess
    

[Use RAM to control access to resources](/help/en/ros/user-guide/use-ram-to-control-access-to-resources#concept-48754-zh)

Function Compute

\-

fc

Supported

Supported

Resource

-   AliyunFCFullAccess
    
-   AliyunFCReadOnlyAccess
    
-   AliyunFCInvocationAccess
    

[Grant permissions across Alibaba Cloud accounts by using RAM roles](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-permissions-by-using-a-ram-role#task-2078146)

Simple Application Server

\-

swas

Supported

○

Service

AliyunSWASFullAccess

\-

Elastic High Performance Computing (E-HPC)

\-

ehpc

Supported

Supported

Service

-   AliyunEHPCFullAccess
    
-   AliyunEHPCReadOnlyAccess
    

\-

Container Registry

\-

cr

Supported

Supported

Resource

-   AliyunContainerRegistryFullAccess
    
-   AliyunContainerRegistryReadOnlyAccess
    

[RAM authentication rules](/help/en/acr/user-guide/ram-authorization-information#task-2092160)

Elastic Desktop Service (EDS)

EDS

ecd

Supported

Supported

Operation

-   AliyunECDFullAccess
    
-   AliyunECDReadOnlyAccess
    
-   AliyunECDRamUserAccess
    
-   AliyunECDTagFullAccess
    
-   AliyunECDOfficeSiteFullAccess
    
-   AliyunECDUserFullAccess
    
-   AliyunECDPolicyGroupFullAccess
    
-   AliyunECDDesktopFullAccess
    
-   AliyunECDTechnicalSupportFullAccess
    

[Attach EDS Enterprise system policies to a RAM user](/help/en/wuying-workspace/user-guide/grant-a-ram-user#task-2090313)

Elastic Container Instance

\-

eci

Supported

Supported

Resource

-   AliyunECIFullAccess
    
-   AliyunECIReadOnlyAccess
    

[Grant permissions to a RAM user](/help/en/eci/user-guide/grant-permissions-to-ram-users)

CloudFlow

\-

fnf

Supported

Supported

Resource

-   AliyunFnFFullAccess
    
-   AliyunFnFReadOnlyAccess
    

[RAM authorization](/help/en/serverless-workflow/latest/api-fnf-2019-03-15-ram)

Web App Service

\-

webplus

Supported

Supported

Operation

-   AliyunWebPlusFullAccess
    
-   AliyunWebPlusReadOnlyAccess
    

\-

Compute Nest

\-

-   computenest
    
-   computenestsupplier
    

Supported

○

Resource

-   AliyunComputeNestSupplierFullAccess
    
-   AliyunComputeNestUserFullAccess
    
-   AliyunComputeNestUserReadOnlyAccess
    
-   AliyunComputeNestSupplierReadOnlyAccess
    

\-

Distributed Cloud Container Platform for Kubernetes (ACK One)

\-

adcp

Supported

Supported

Operation

-   AliyunAdcpFullAccess
    
-   AliyunAdcpReadOnlyAccess
    

\-

## Databases

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

ApsaraDB RDS

ApsaraDB RDS

rds

Supported

Supported

Resource

-   AliyunRDSFullAccess
    
-   AliyunRDSReadOnlyAccess
    
-   AliyunRDSGADFullAccess
    
-   AliyunRDSGADReadOnlyAccess
    
-   AliyunRDSReadOnlyWithSQLLogArchiveAccess
    

[Use RAM for resource authorization](/help/en/rds/use-ram-for-resource-authorization#reference-lnh-1mn-12b)

ApsaraDB RDS

ApsaraDB RDS for MySQL

rds

Supported

Supported

Resource

-   AliyunRDSFullAccess
    
-   AliyunRDSReadOnlyAccess
    

[Use RAM for resource authorization](/help/en/rds/use-ram-for-resource-authorization#reference-lnh-1mn-12b)

ApsaraDB RDS

ApsaraDB RDS for SQL Server

rds

Supported

Supported

Resource

-   AliyunRDSFullAccess
    
-   AliyunRDSReadOnlyAccess
    

[Use RAM for resource authorization](/help/en/rds/use-ram-for-resource-authorization#reference-lnh-1mn-12b)

ApsaraDB RDS

ApsaraDB RDS for PostgreSQL

rds

Supported

Supported

Resource

-   AliyunRDSFullAccess
    
-   AliyunRDSReadOnlyAccess
    

[Use RAM for resource authorization](/help/en/rds/use-ram-for-resource-authorization#reference-lnh-1mn-12b)

ApsaraDB RDS

ApsaraDB for MyBase

rds

Supported

Supported

Resource

-   AliyunRDSFullAccess
    
-   AliyunRDSReadOnlyAccess
    

\-

Tair (Redis® OSS-Compatible)

\-

kvstore

Supported

Supported

Resource

-   AliyunKvstoreFullAccess
    
-   AliyunKvstoreReadOnlyAccess
    

[RAM authorization](/help/en/redis/ram-authorization#reference-rv2-slq-kfb)

ApsaraDB for MongoDB

\-

dds

Supported

Supported

Resource

-   AliyunMongoDBFullAccess
    
-   AliyunMongoDBReadOnlyAccess
    

\-

AnalyticDB for PostgreSQL

\-

gpdb

Supported

Supported

Resource

-   AliyunGPDBFullAccess
    
-   AliyunGPDBReadOnlyAccess
    

\-

Data Transmission Service (DTS)

\-

dts

Supported

Supported

Operation

-   AliyunDTSFullAccess
    
-   AliyunDTSReadOnlyAccess
    

[Use a system policy to authorize a RAM user to manage DTS instances](/help/en/dts/user-guide/use-a-system-policy-to-authorize-a-ram-user-to-manage-dts-instances#concept-47568-zh)

Data Management

\-

dms

Supported

Supported

Service

-   AliyunDMSFullAccess
    
-   AliyunDMSReadOnlyAccess
    

[Authorize DMS to access cloud resources](/help/en/dms/authorize-dms-to-access-alibaba-cloud-resources#task-2106799)

AnalyticDB for MySQL

\-

adb

Supported

Supported

Operation

-   AliyunADBFullAccess
    
-   AliyunADBReadOnlyAccess
    
-   AliyunADBDeveloperAccess
    

[RAM users and permissions](/help/en/analyticdb/analyticdb-for-mysql/user-guide/manage-ram-users-and-permissions#multiTask1017)

PolarDB for Xscale (PolarDB-X)

\-

-   drds
    
-   polardbx
    

Supported

Supported

Resource

-   AliyunDRDSReadOnlyAccess
    
-   AliyunDRDSFullAccess
    
-   AliyunDRDSReadOnlyWithSQLLogArchiveAccess
    

[Use RAM for resource authorization](/help/en/polardb/polardb-for-xscale/user-guide/use-ram-for-resource-authorization)

ApsaraDB for HBase

\-

hbase

Supported

Supported

Resource

-   AliyunHBaseFullAccess
    
-   AliyunHBaseReadOnlyAccess
    

[Customize a RAM policy](/help/en/hbase/developer-reference/customize-a-ram-policy#concept-1954244)

Advanced Database & Application Migration

\-

adam

Supported

○

Service

-   AliyunADAMReadOnlyAccess
    
-   AliyunADAMFullAccess
    

[Logon accounts](/help/en/dts/user-guide/logon-accounts#concept488)

PolarDB

\-

polardb

Supported

Supported

Operation

-   AliyunPolardbReadOnlyAccess
    
-   AliyunPolardbFullAccess
    
-   AliyunPolardbReadOnlyWithSQLLogArchiveAccess
    

[Create and grant permissions to a RAM user](/help/en/polardb/polardb-for-mysql/user-guide/create-and-authorize-a-ram-user#concept-y33-t4q-tdb)

Data Disaster Recovery

\-

dbs

Supported

Supported

Service

-   AliyunDBSFullAccess
    
-   AliyunDBSReadOnlyAccess
    

\-

Database Autonomy Service (DAS)

\-

hdm

Supported

Supported

Service

-   AliyunHDMReadOnlyAccess
    
-   AliyunHDMFullAccess
    
-   AliyunHDMReadOnlyWithSQLLogArchiveAccess
    

[How do I use DAS as a RAM user?](/help/en/das/support/what-do-i-do-if-i-do-not-have-permissions-to-access-das-as-a-ram-user)

ApsaraDB for OceanBase

\-

oceanbase

Supported

○

Service

-   AliyunOceanBaseFullAccess
    
-   AliyunOceanBaseReadOnlyAccess
    

\-

ApsaraDB for Cassandra

\-

cassandra

Supported

Supported

Resource

-   AliyunCassandraFullAccess
    
-   AliyunCassandraReadOnlyAccess
    

[Manage RAM users](/help/en/apsaradb-for-cassandra/latest/manage-ram-users#topic262)

ApsaraDB for ClickHouse

\-

clickhouse

Supported

Supported

Resource

-   AliyunClickHouseFullAccess
    
-   AliyunClickHouseReadOnlyAccess
    

[Authorize RAM users to access resources](/help/en/clickhouse/authorize-ram-users-to-access-resources#reference941)

Database Gateway (DG)

\-

dg

Supported

Supported

Resource

-   AliyunDGFullAccess
    
-   AliyunDGReadOnlyAccess
    

\-

ApsaraDB for SelectDB

\-

selectdb

Supported

Supported

Operation

-   AliyunSelectDBFullAccess
    
-   AliyunSelectDBReadOnlyAccess
    

[RAM authorization](/help/en/selectdb/api-selectdb-2023-05-22-ram)

## Storage

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Object Storage Service (OSS)

\-

oss

Supported

Supported

Resource

-   AliyunOSSFullAccess
    
-   AliyunOSSReadOnlyAccess
    
-   AliyunOSSImportReadOnlyAccess
    
-   AliyunOSSImportFullAccess
    

[RAM policies](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb)

File Storage NAS (NAS)

\-

nas

Supported

Supported

Resource

-   AliyunNASFullAccess
    
-   AliyunNASReadOnlyAccess
    

[Perform access control based on RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies#task-960740)

Tablestore

\-

ots

Supported

Supported

Resource

-   AliyunOTSFullAccess
    
-   AliyunOTSReadOnlyAccess
    
-   AliyunOTSWriteOnlyAccess
    

[Create a custom policy](/help/en/tablestore/custom-permissions-of-tablestore#concept-27362-zh)

Cloud Storage Gateway (CSG)

\-

hcs-sgw

Supported

Supported

Service

AliyunHCSSGWFullAccess

[Use RAM to implement account-based access control](/help/en/csg/use-cases/use-ram-to-implement-account-based-access-control#task-2005140)

Cloud Backup

\-

hbr

Supported

Supported

Resource

-   AliyunHBRFullAccess
    
-   AliyunHBRReadOnlyAccess
    

[Create a RAM user and authorize the RAM user to access Cloud Backup](/help/en/cloud-backup/use-cases/create-a-ram-user-and-authorize-the-ram-user-to-access-hbr#concept-64817-zh)

Hybrid Cloud Storage

Hybrid Cloud Storage

hgw

Supported

○

Operation

-   AliyunHgwFullAccess
    
-   AliyunHgwReadOnlyAccess
    

\-

Hybrid Cloud Storage

Remote Service

asrs

Supported

○

Resource

-   ASRSFullAccess
    
-   ASRSReadonlyAccess
    

\-

## Cloud communication

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Short Message Service (SMS)

\-

dysms

Supported

Supported

Service

\-

\-

## Networking

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Virtual Private Cloud (VPC)

\-

vpc

Supported

Supported

Resource

-   AliyunVPCFullAccess
    
-   AliyunVPCReadOnlyAccess
    
-   AliyunVPCNetworkIntelligenceReadOnlyAccess
    
-   AliyunVPCPrefixListAccess
    
-   AliyunVPCPrefixListReadOnlyAccess
    
-   AliyunVpcPeerFullAccess
    
-   AliyunVpcPeerReadOnlyAccess
    

[RAM authorization](/help/en/vpc/developer-reference/api-vpc-2016-04-28-ram)

Server Load Balancer (SLB)

Classic Load Balancer (CLB)

slb

Supported

Supported

Resource

-   AliyunSLBReadOnlyAccess
    
-   AliyunSLBFullAccess
    

[RAM authorization](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-ram)

SLB

Application Load Balancer (ALB)

alb

Supported

Supported

Resource

-   AliyunALBFullAccess
    
-   AliyunALBReadOnlyAccess
    

[RAM authorization](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-ram)

SLB

Network Load Balancer (NLB)

nlb

Supported

Supported

Resource

-   AliyunNLBFullAccess
    
-   AliyunNLBReadOnlyAccess
    

[RAM authorization](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-ram)

SLB

Gateway Load Balancer (GWLB)

gwlb

Supported

Supported

Resource

-   AliyunGWLBFullAccess
    
-   AliyunGWLBReadOnlyAccess
    

[RAM authorization](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-ram)

Express Connect

\-

vpc

Supported

Supported

Resource

-   AliyunExpressConnectFullAccess
    
-   AliyunExpressConnectReadOnlyAccess
    

[Policies and examples](/help/en/doc-detail/465335.html#concept-2267853)

Elastic IP Address (EIP)

EIP

vpc

Supported

Supported

Resource

-   AliyunEIPFullAccess
    
-   AliyunEIPReadOnlyAccess
    

[Grant permissions to a RAM user](/help/en/vpc/security-and-compliance/grant-permissions-to-ram-user#reference-ow1-hkk-qdb)

EIP

Anycast Elastic IP Address (Anycast EIP)

eipanycast

Supported

Supported

Resource

-   AliyunAnycastEIPFullAccess
    
-   AliyunAnycastEIPReadOnlyAccess
    

[RAM authorization](/help/en/anycast-eip/developer-reference/api-eipanycast-2020-03-09-ram)

NAT Gateway

\-

vpc

Supported

Supported

Resource

-   AliyunNATGatewayReadOnlyAccess
    
-   AliyunNATGatewayFullAccess
    

[Grant permissions to a RAM user](/help/en/vpc/security-and-compliance/grant-permissions-to-ram-user#reference-ow1-hkk-qdb)

VPN Gateway

\-

vpc

Supported

Supported

Resource

-   AliyunVPNGatewayFullAccess
    
-   AliyunVPNGatewayReadOnlyAccess
    

[Grant permissions to a RAM user](/help/en/vpc/security-and-compliance/grant-permissions-to-ram-user#reference-ow1-hkk-qdb)

Internet Shared Bandwidth

\-

vpc

Supported

Supported

Resource

-   AliyunCommonBandwidthPackageReadOnlyAccess
    
-   AliyunCommonBandwidthPackageFullAccess
    

\-

Global Accelerator (GA)

\-

ga

Supported

Supported

Resource

-   AliyunGlobalAccelerationReadOnlyAccess
    
-   AliyunGlobalAccelerationFullAccess
    

[Grant permissions to a RAM user](/help/en/vpc/security-and-compliance/grant-permissions-to-ram-user#reference-ow1-hkk-qdb)

Smart Access Gateway (SAG)

\-

smartag

Supported

Supported

Resource

\-

[RAM authentication](/help/en/sag/ram-authentication#concept-avx-2vm-l2b)

Cloud Enterprise Network (CEN)

\-

cen

Supported

Supported

Resource

-   AliyunCENReadOnlyAccess
    
-   AliyunCENFullAccess
    

[RAM authentication](/help/en/cen/developer-reference/ram-authentication#concept-hp4-vcz-sdb)

PrivateLink

\-

privatelink

Supported

Supported

Resource

-   AliyunPrivateLinkFullAccess
    
-   AliyunPrivateLinkReadOnlyAccess
    
-   AliyunPrivatelinkEndpointServiceReadOnlyAccess
    
-   AliyunPrivatelinkEndpointServiceFullAccess
    
-   AliyunPrivatelinkEndpointReadOnlyAccess
    
-   AliyunPrivatelinkEndpointFullAccess
    

[RAM authorization](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-ram#main-107864)

Alibaba Cloud DNS PrivateZone

\-

pvtz

Supported

Supported

Resource

-   AliyunPvtzFullAccess
    
-   AliyunPvtzReadOnlyAccess
    

[RAM](/help/en/privatezone/latest/ram)

Cloud Data Transfer (CDT)

\-

cdt

Supported

Supported

Operation

-   AliyunCDTFullAccess
    
-   AliyunCDTReadOnlyAccess
    

[System policies for CDT](/help/en/cdt/security-and-compliance/cdt)

VPC peering connection

\-

vpc

Supported

Supported

Resource

-   AliyunVpcPeerFullAccess
    
-   AliyunVpcPeerReadOnlyAccess
    

\-

IPv6 Gateway

\-

vpc

Supported

Supported

Resource

-   AliyunIpv6FullAccess
    
-   AliyunIpv6ReadOnlyAccess
    

\-

## O&M and management

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Application Real-Time Monitoring Service (ARMS)

\-

arms

Supported

Supported

Service

-   AliyunARMSFullAccess
    
-   AliyunARMSReadOnlyAccess
    

[Use RAM users to manage permissions](/help/en/arms/security-and-compliance/use-ram-users-to-manage-permissions-1#concept-74784-zh)

CloudMonitor

\-

cms

Supported

Supported

Operation

-   AliyunCloudMonitorFullAccess
    
-   AliyunCloudMonitorReadOnlyAccess
    
-   AliyunCloudMonitorMetricDataReadOnlyAccess
    

[RAM authentication](/help/en/cms/cloudmonitor-1-0/developer-reference/ram-authentication#concept-z4m-23b-wdb)

Intelligent Advisor

\-

advisor-intl

Supported

Supported

Operation

-   AliyunAdvisorFullAccess
    
-   AliyunAdvisorReadOnlyAccess
    

\-

Cloud Shell

\-

cloudshell

Supported

○

Operation

AliyunCloudShellFullAccess

\-

Cloud Config

\-

config

Supported

Supported

Operation

-   AliyunConfigFullAccess
    
-   AliyunConfigReadOnlyAccess
    

[RAM user authorization](/help/en/cloud-config/latest/ram-user-authorization-1#concept-swt-ff3-mgb)

Logic Composer

\-

composer

Supported

Supported

Resource

-   AliyunLogicComposerFullAccess
    
-   AliyunLogicComposerReadOnlyAccess
    

[Grant permissions to a RAM user](/help/en/logic-composer/user-guide/grant-permissions-to-a-ram-user#task427)

CloudOps Orchestration Service (OOS)

\-

oos

Supported

Supported

Resource

-   AliyunOOSFullAccess
    
-   AliyunOOSReadOnlyAccess
    

[RAM authorization](/help/en/oos/developer-reference/api-oos-2019-06-01-ram#main-107864)

Cloud Governance Center (CGC)

CGC

governance

Supported

○

Operation

-   AliyunGovernanceFullAccess
    
-   AliyunGovernanceReadOnlyAccess
    

\-

CGC

Service Catalog

servicecatalog

Supported

Supported

Resource

-   AliyunServiceCatalogAdminFullAccess
    
-   AliyunServiceCatalogEndUserFullAccess
    
-   AliyunServiceCatalogAdminReadOnlyAccess
    
-   AliyunServiceCatalogEndUserReadOnlyAccess
    

-   [Grant permissions to an end user](/help/en/service-catalog/security-and-compliance/grant-permissions-to-an-end-user#task-406175)
    
-   [Grant permissions to the administrator](/help/en/service-catalog/security-and-compliance/grant-permissions-to-the-administrator#task-2182801)
    

## Middleware

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Enterprise Distributed Application Service (EDAS)

\-

edas

Supported

Supported

Resource

-   AliyunEDASFullAccess
    
-   AliyunEDASReadOnlyAccess
    
-   AliyunEDASApplicationFullAccess
    
-   AliyunEDASApplicationReadOnlyAccess
    
-   AliyunEDASResourceReadOnlyAccess
    
-   AliyunEDASResourceFullAccess
    

[Manage RAM users](/help/en/edas/user-guide/manage-ram-users#topic2508)

ApsaraMQ

ApsaraMQ for RocketMQ

mq

Supported

Supported

Resource

-   AliyunMQFullAccess
    
-   AliyunMQReadOnlyAccess
    
-   AliyunMQPubOnlyAccess
    
-   AliyunMQSubOnlyAccess
    

[Grant permissions to RAM users](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/security-and-compliance/grant-permissions-to-ram-users#concept-2047141)

ApsaraMQ

ApsaraMQ for MQTT

mq

Supported

Supported

Resource

-   AliyunMQFullAccess
    
-   AliyunMQReadOnlyAccess
    
-   AliyunMQPubOnlyAccess
    
-   AliyunMQSubOnlyAccess
    

[Grant permissions to RAM users](/help/en/apsaramq-for-mqtt/mqtt-upgraded/security-and-compliance/grant-permissions-to-ram-users#concept-2022295)

ApsaraMQ

ApsaraMQ for RabbitMQ

amqp

Supported

Supported

Resource

-   AliyunAMQPFullAccess
    
-   AliyunAMQPReadOnlyAccess
    

[Grant permissions to RAM users](/help/en/apsaramq-for-rabbitmq/security-and-compliance/grant-permissions-to-ram-users#task-1962097)

Simple Message Queue (formerly MNS) (SMQ)

\-

mns

Supported

Supported

Resource

-   AliyunMNSFullAccess
    
-   AliyunMNSReadOnlyAccess
    

[Authorize a RAM user](/help/en/mns/security-and-compliance/grant-permissions-to-a-ram-user#task810)

ApsaraMQ for Kafka

\-

alikafka

Supported

Supported

Resource

-   AliyunKafkaFullAccess
    
-   AliyunKafkaReadOnlyAccess
    

[Grant permissions to RAM users](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/security-and-compliance/grant-permissions-to-ram-users#task-dip-qqp-ene)

Application High Availability Service

\-

ahas

Supported

Supported

Service

-   AliyunAHASFullAccess
    
-   AliyunAHASReadOnlyAccess
    

\-

Alibaba Cloud Service Mesh (ASM)

\-

servicemesh

Supported

Supported

Resource

-   AliyunASMFullAccess
    
-   AliyunASMReadOnlyAccess
    

[Authorization overview](/help/en/asm/sidecar/authorization-overview)

EventBridge

\-

eventbridge

Supported

Supported

Resource

-   AliyunEventBridgeFullAccess
    
-   AliyunEventBridgeReadOnlyAccess
    
-   AliyunEventBridgeResourceCreatePolicy
    
-   AliyunEventBridgeResourceDeletePolicy
    
-   AliyunEventBridgeResourceUpdatePolicy
    
-   AliyunEventBridgePutEventsPolicy
    

[Policies and examples](/help/en/eventbridge/policies#task-2475558)

## Media services and CDN

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

CDN

\-

cdn

Supported

Supported

Resource

-   AliyunCDNFullAccess
    
-   AliyunCDNReadOnlyAccess
    

[RAM authorization](/help/en/cdn/developer-reference/api-cdn-2018-05-10-ram#main-107864)

ApsaraVideo Media Processing (MPS)

\-

mts

Supported

Supported

Service

-   AliyunMTSFullAccess
    
-   AliyunMTSPlayerAuth
    

\-

ApsaraVideo VOD (VOD)

\-

vod

Supported

Supported

Operation

-   AliyunVODFullAccess
    
-   AliyunVODReadOnlyAccess
    
-   AliyunVODPlayAuth
    
-   AliyunVODUploadAuth
    

\-

ApsaraVideo Live

\-

live

Supported

Supported

Resource

-   AliyunLiveFullAccess
    
-   AliyunLiveReadOnlyAccess
    

[Authentication rules on API requests](/help/en/live/developer-reference/authentication-rules-on-api-requests#concept-67880-zh)

Real-Time Communication

\-

rtc

Supported

Supported

Resource

\-

\-

Dynamic Content Delivery Network (DCDN)

\-

dcdn

Supported

Supported

Resource

-   AliyunDCDNFullAccess
    
-   AliyunDCDNReadOnlyAccess
    

\-

Edge Security Acceleration (ESA)

\-

esa

Supported

Supported

Resource

-   AliyunESAFullAccess
    
-   AliyunESAReadOnlyAccess
    

[RAM authorization](/help/en/edge-security-acceleration/esa/api-esa-2024-09-10-ram)

## Enterprise applications

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Direct Mail

\-

dm

Supported

Supported

Operation

-   AliyunDirectMailFullAccess
    
-   AliyunDirectMailReadOnlyAccess
    

\-

API Gateway

\-

apigateway

Supported

Supported

Service

-   AliyunApiGatewayFullAccess
    
-   AliyunApiGatewayReadOnlyAccess
    

[Use RAM to manage the permissions on API resources](/help/en/api-gateway/traditional-api-gateway/user-guide/use-ram-to-manage-the-permissions-on-api-resources#topic5052)

Alibaba Mail

\-

alimail

Supported

○

Operation

-   AliyunAlimailFullAccess
    
-   AliyunAlimailReadOnlyAccess
    

\-

Resource Management

Resource Management

resourcemanager

Supported

Supported

Operation

-   AliyunResourceDirectoryFullAccess
    
-   AliyunResourceDirectoryReadOnlyAccess
    

[RAM authorization](/help/en/resource-management/resource-directory/developer-reference/ram-authorization#concept-354415)

Resource Management

Resource Sharing

resourcesharing

Supported

Supported

Operation

-   AliyunResourceSharingFullAccess
    
-   AliyunResourceSharingReadOnlyAccess
    

\-

Resource Management

Tag

tag

Supported

Supported

Operation

-   AliyunTagManagerAccess
    
-   AliyunTAGReadOnlyAccess
    
-   AliyunTagAdministratorAccess
    

[RAM authorization](/help/en/resource-management/resource-directory/developer-reference/ram-authorization#section-zqv-es3-ege)

Resource Management

Resource Center

resourcecenter

Supported

Supported

Operation

-   AliyunResourceCenterFullAccess
    
-   AliyunResourceCenterReadOnlyAccess
    

[Grant a RAM user the permissions to use Resource Center](/help/en/resource-management/resource-center/user-guide/permissions-for-a-ram-user-to-access-resource-center#task-2295197)

Blockchain as a Service (BaaS)

BaaS

baas

Supported

Supported

Resource

-   AliyunBaaSFullAccess
    
-   AliyunBaaSReadOnlyAccess
    

[Hyperledger Fabric RAM authentication](/help/en/blockchain-as-a-service/latest/hyperledger-fabric-ram-authentication#concept-1375180)

CloudQuotation (CQ)

\-

assettech

Supported

○

Service

-   AliyunCQLoudFullAccess
    
-   AliyunCQLoudReadOnlyAccess
    

\-

BizWorks

\-

bizworks

Supported

○

Service

-   AliyunBizWorksFullAccess
    
-   AliyunBizWorksReadOnlyAccess
    

\-

## Domains and websites

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Alibaba Cloud DNS (DNS)

DNS

alidns

Supported

Supported

Resource

-   AliyunDNSFullAccess
    
-   AliyunDNSReadOnlyAccess
    

-   [Manage permissions of a RAM user](/help/en/dns/permission-management#topic-2035939)
    
-   [RAM authorization](/help/en/dns/api-alidns-2015-01-09-ram)
    

DNS

Alibaba Cloud Public DNS

pubdns

Supported

Supported

Resource

-   AliyunPubDNSReadOnlyAccess
    
-   AliyunPubDNSFullAccess
    

\-

Domain Names and Websites

\-

domain

Supported

Supported

Resource

-   AliyunDomainFullAccess
    
-   AliyunDomainReadonlyAccess
    

[Authentication rules for the Domains API](/help/en/dws/developer-reference/authentication-rules-for-the-domains-api#concept-d3r-f2d-n2b)

## AI

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Intelligent Speech Interaction

Intelligent Speech Interaction

nls

Supported

Supported

Service

-   AliyunNLSFullAccess
    
-   AliyunNLSReadOnlyAccess
    
-   AliyunNLSSpeechServiceAccess
    
-   AliyunNLSSlpAccess
    

\-

Platform for AI (PAI)

\-

pai

Supported

Supported

Service

\-

\-

PAI

\-

paiplugin

○

Supported

Operation

-   AliyunPaiPluginFullAccess
    
-   AliyunPaiPluginReadOnlyAccess
    

\-

Image Search

\-

imagesearch

Supported

Supported

Resource

-   AliyunImagesearchReadOnlyAccess
    
-   AliyunImagesearchFullAccess
    

[Grant permissions to RAM users](/help/en/image-search/grant-permissions-to-ram-users)

Machine Translation

\-

alimt

Supported

Supported

Operation

-   AliyunMTFullAccess
    
-   AliyunMTReadOnlyAccess
    

\-

Alibaba Cloud Model Studio

\-

sfm

Unsupported

Supported

Resource

-   AliyunSFMFullAccess
    
-   AliyunSFMReadOnlyAccess
    
-   AliyunBailianFullAccess
    
-   AliyunBailianReadOnlyAccess
    

[Configure permissions for team collaboration](/help/en/model-studio/permission-management-overview)

## IoT

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

IoT Platform

\-

iot

Supported

Supported

Resource

-   AliyunIOTFullAccess
    
-   AliyunIOTReadOnlyAccess
    
-   AliyunIOTConsoleCommonAccess
    

[Access IoT Platform as a RAM user](/help/en/iot/user-guide/access-iot-platform-as-a-ram-user#concept-xxr-nw4-tdb)

Link IoT Edge

\-

iot

Supported

Supported

Resource

-   AliyunIOTFullAccess
    
-   AliyunIOTReadOnlyAccess
    
-   AliyunIOTConsoleCommonAccess
    

[Access resources of other Alibaba Cloud services](/help/en/iot-edge/support/access-resources-of-other-alibaba-cloud-services#concept-utg-gqc-wfb)

Lindorm

Time Series Database (TSDB)

hitsdb

Supported

Supported

Operation

\-

\-

## Analytics computing

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

DataWorks

\-

dataworks

Supported

Supported

Operation

-   AliyunDataWorksFullAccess
    
-   AliyunDataWorksReadOnlyAccess
    
-   AliyunDataWorksExclusiveResourceGroupModify
    
-   AliyunDataWorksAccessingRdsReadOnlyPolicy
    
-   AliyunDataWorksAccessingDLFReadOnlyPolicy
    
-   AliyunDataWorksAccessingEMRReadOnlyPolicy
    
-   AliyunDataWorksAccessingAlikafkaPolicy
    

[Manage permissions on the DataWorks services and the entities in the DataWorks console by using RAM policies](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#task-2154716)

Quick BI

\-

\-

Supported

Supported

Service

\-

\-

DataV

\-

datav

Supported

○

Service

AliyunDataVFullAccess

\-

Realtime Compute for Apache Flink

\-

stream

Supported

Supported

Resource

-   AliyunStreamFullAccess
    
-   AliyunStreamReadOnlyAccess
    

[Grant permissions to a RAM user](/help/en/flink/realtime-flink/user-guide/ram-based-authorization#task-2569065)

Elasticsearch

\-

elasticsearch

Supported

Supported

Resource

-   AliyunElasticsearchReadOnlyAccess
    
-   AliyunElasticsearchFullAccess
    
-   AliyunElasticsearchServerlessFullAccess
    
-   AliyunElasticsearchServerlessReadOnlyAccess
    

[Elasticsearch objects supported for authorization](/help/en/es/security-and-compliance/objects-supported-for-authorization#concept-lx1-mts-zgb)

E-MapReduce (EMR)

E-MapReduce

emr

Supported

Supported

Service

-   AliyunEMRFullAccess
    
-   AliyunEMRFlowAdmin
    
-   AliyunEMRDevelopAccess
    
-   AliyunEMRDlsFullAccess
    
-   AliyunEMRDlsReadOnlyAccess
    

[Grant permissions to RAM users](/help/en/emr/emr-on-ecs/user-guide/grant-permissions-to-ram-users-1)

Simple Log Service (SLS)

\-

log

Supported

Supported

Resource

-   AliyunLogFullAccess
    
-   AliyunLogReadOnlyAccess
    
-   AliyunLogPutOpenEventPolicy
    
-   AliyunLogInvokeFCAccess
    

[Authorization rules](/help/en/sls/developer-reference/ram-authentication-rules-1#reference-hkk-n5q-12b)

Hologres

\-

hologram

Supported

Supported

Resource

-   AliyunHologresFullAccess
    
-   AliyunHologresReadOnlyAccess
    

[Grant permissions to a RAM user](/help/en/hologres/getting-started/grant-permissions-to-a-ram-user#task-1917535)

## Developer services

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Alibaba Cloud DevOps

\-

rdc

Supported

Supported

Resource

-   AliyunRDCFullAccess
    
-   AliyunRDCReadOnlyAccess
    

\-

Managed Service for OpenTelemetry

\-

xtrace

Supported

Supported

Operation

-   AliyunTracingAnalysisFullAccess
    
-   AliyunTracingAnalysisReadOnlyAccess
    

\-

## Security

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Security Center

\-

-   yundun-sas
    
-   yundun-aegis
    

Supported

Supported

Operation

-   AliyunYundunSASFullAccess
    
-   AliyunYundunSASReadOnlyAccess
    

\-

Server Guard

\-

yundun-aegis

Supported

Supported

Service

-   AliyunYundunAegisFullAccess
    
-   AliyunYundunAegisReadOnlyAccess
    

\-

Anti-DDoS

Anti-DDoS

yundun-ddos

Supported

Supported

Service

-   AliyunYundunDDosFullAccess
    
-   AliyunYundunDDosReadOnlyAccess
    
-   AliyunYundunDDoSRewardsReadOnlyA
    
-   AliyunYundunDDoSRewardsFullAccess
    

\-

Anti-DDoS

Anti-DDoS Proxy (Chinese Mainland)

-   yundun-high
    
-   yundun-ddoscoo
    

Supported

Supported

Service

-   AliyunYundunHighFullAccess
    
-   AliyunYundunHighReadOnlyAccess
    

\-

Anti-DDoS

Anti-DDoS Proxy (Outside Chinese Mainland)

-   yundun-high
    
-   yundun-ddoscoo
    

Supported

○

Service

-   AliyunYundunAntiDDoSPremiumFullAccess
    
-   AliyunYundunAntiDDoSPremiumReadOnlyAccess
    

\-

Web Application Firewall (WAF)

WAF

yundun-waf

Supported

Supported

Operation

-   AliyunYundunWAFFullAccess
    
-   AliyunYundunWAFReadOnlyAccess
    
-   AliyunYundunWAFv3FullAccess
    
-   AliyunYundunWAFv3ReadOnlyAccess
    

\-

Certificate Management Service (Original SSL Certificate)

\-

yundun-cert

Supported

Supported

Service

-   AliyunYundunCertFullAccess
    
-   AliyunYundunCertReadOnlyAccess
    

\-

Cloud Firewall

\-

yundun-cloudfirewall

Supported

Supported

Resource

-   AliyunYundunCloudFirewallReadOnlyAccess
    
-   AliyunYundunCloudFirewallFullAccess
    

[RAM authorization](/help/en/cloud-firewall/cloudfirewall/developer-reference/api-cloudfw-2017-12-07-ram)

Managed Security Service (MSSP)

\-

mssp

Supported

○

Service

\-

\-

Content Moderation

\-

yundun-greenweb

Supported

Supported

Service

-   AliyunYundunGreenWebFullAccess
    
-   AliyunYundunGreenWebConsoleOnlyAccess
    
-   AliyunYundunGreenWebReadOnlyAccess
    

\-

Bastionhost

Bastionhost

yundun-bastionhost

Supported

○

Service

-   AliyunYundunBastionHostFullAccess
    
-   AliyunYundunBastionHostReadOnlyAccess
    
-   AliyunYundunBastionHostOperateOnlyAccess
    
-   AliyunYundunBastionHostAuditOnlyAccess
    

\-

Data Security Center (DSC)

\-

yundun-sddp

Supported

Supported

Service

-   AliyunYundunSDDPFullAccess
    
-   AliyunYundunSDDPReadOnlyAccess
    
-   AliyunYundunSDDPDataManager
    

\-

Identity as a Service (IDaaS)

IDaaS

yundun-idaas

Supported

○

Operation

-   AliyunYundunIdaasFullAccess
    
-   AliyunYundunIdaasReadOnlyAccess
    

\-

Key Management Service (KMS)

\-

kms

Supported

Supported

Resource

-   AliyunKMSFullAccess
    
-   AliyunKMSReadOnlyAccess
    
-   AliyunKMSSecretUserAccess
    
-   AliyunKMSCryptoAdminAccess
    
-   AliyunKMSCryptoUserAccess
    
-   AliyunKMSSecretAdminAccess
    

[Use RAM to control access to KMS resources](/help/en/kms/key-management-service/support/use-ram-to-control-access-to-kms-resources#concept-28953-zh)

Resource Access Management (RAM)

RAM

-   ram
    
-   sts
    
-   ims
    

Supported

Supported

Resource

-   AliyunRAMFullAccess
    
-   AliyunRAMReadOnlyAccess
    

[RAM authorization](/help/en/ram/ram-authentication#concept-az3-vrl-lgb)

RAM

CloudSSO

cloudsso

Supported

○

Resource

-   AliyunCloudSSOReadOnlyAccess
    
-   AliyunCloudSSOFullAccess
    

\-

ActionTrail

\-

actiontrail

Supported

Supported

Operation

\-

[RAM account authentication](/help/en/actiontrail/developer-reference/ram-account-authentication#concept-swt-ff3-mgb)

## Technical support

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Ticket Management

\-

support

Supported

Supported

Service

AliyunSupportFullAccess

\-

## Marketplace

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Alibaba Cloud Marketplace

\-

acm

Supported

Unsupported

Service

AliyunMarketplaceFullAccess

\-

## Other

**Service**

**Sub-service or sub-module**

**RAM code**

**Console**

**API**

**Authorization granularity**

**System policies**

**References**

Expenses and Costs

\-

-   bss
    
-   bssapi
    
-   efc
    

Supported

Supported

Operation

-   AliyunBSSFullAccess
    
-   AliyunBSSReadOnlyAccess
    
-   AliyunBSSOrderAccess
    
-   AliyunBSSRefundAccess
    
-   AliyunBSSRenewReadOnlyAccess
    
-   AliyunBSSRenewFullAccess
    
-   AliyunBSSCartReadOnlyAccess
    
-   AliyunBSSCartFullAccess
    
-   AliyunBSSMyFreetierFullAccess
    

\-

ICP Filing

\-

-   beian
    
-   bsn
    

Supported

○

Service

AliyunBeianFullAccess

\-
