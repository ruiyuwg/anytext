You can create custom transfer rules based on conditions such as resource name, tag, Virtual Private Cloud (VPC), or vSwitch. Once configured, the system first scans your existing resources and moves any that match the rules to the specified resource group. It then continuously monitors for new or modified resources, ensuring that all resources are correctly assigned to their designated groups according to these rules.

## **Prerequisites**

The automatic resource transfer feature is enabled. For more information, see [Enable the Automatic Resource Transfer feature](/help/en/resource-management/resource-group/user-guide/turn-on-or-off-automatic-resource-transfer#e76fa610f855j).

## **Create a custom transfer rule**

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Automatic Resource Transfer**.
    
3.  On the **Transfer Based on Custom Rules** tab, click **Create Rule**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p869642.png)
    
4.  Configure the customer transfer rule.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    The name of the custom transfer rule.
    
    It can be up to 128 characters in length and can contain letters, digits, hyphens (`-`), and underscores (`_`).
    
    **Rule Description**
    
    The description of the custom transfer rule.
    
    The description can be up to 512 characters in length.
    
    **Effective Scope**
    
    -   **All Resources**: indicates all resources that support custom rule-based automatic transfer. For information about the supported resource types, see [Resource types that support custom rule-based automatic transfer](#9a13b121747nd).
        
        **Note**
        
        Selecting **All Resources** automatically includes newly supported resource types.
        
    -   **Custom Resource Scope**: You can specify a resource range by resource type, resource group, region, or resource.
        
    
    **Destination Resource Group**
    
    The resource group to which you want resources to transfer.
    
    **Transfer Conditions**
    
    If a resource meets the transfer conditions, it is automatically transferred to the specified destination resource group.
    
    Transfer conditions consist of the following parts:
    
    -   Resource property: the condition key used to filter resources. You can filter resources by name, tag, VPC, or vSwitch.
        
        **Note**
        
        Transfers based on tags, VPCs, or vSwitches will not work for resource types that lack these properties. Before you configure automatic transfer rules, you must check whether the target resources have the relevant properties in [Resource Center](https://resourcemanager.console.alibabacloud.com/resource-center).
        
    -   Operator: the comparison logic between resource properties and expected values. The StringEqualsAny, NotStringEqualsAll, and StringMatch operators are supported.
        
    -   Expected value: the specific content used for comparison with the actual properties of resources. The formats of expected values vary based on the operator.
        
    
    You can use one of the following methods to configure transfer conditions:
    
    -   Single Condition: This method is suitable for simple resource filtering.
        
    -   Combined Conditions: You can use the `and` or `or` logical operator to connect sub-conditions and implement nested conditions. This method is suitable for complex resource filtering.
        
    
    **Example 1**: Enable the system to automatically transfer all resources with the `project:project A` tag to the Project-A resource group.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p869896.png)
    
    **Example 2**: Enable the system to automatically transfer the Elastic Compute Service (ECS) instances to which the `project:project A` tag is added or whose names contain `projectA` to the Project-A resource group.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p869904.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p869908.png)
    
5.  Click **Query Matching Resources** to view the resources that meet the specified conditions, and check whether the resources meet your expectations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p872077.png)
    
6.  Click **OK**.
    

## **View a custom transfer rule and transfer records**

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Automatic Resource Transfer**.
    
3.  On the **Transfer Based on Custom Rules** tab, find the desired custom transfer rule and click its name in the Rule Name column or **View** in the Actions column.
    
4.  View rule details and transfer records.
    
    -   On the **Rule Information** tab, view the details of the rule, including the basic information, content, and effective scope of the rule.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p870507.png)
        
    -   On the **Transfer Records** tab, view the records of transfer based on the rule.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p870577.png)
        
    

## **Modify or delete a custom transfer rule**

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Automatic Resource Transfer**.
    
3.  On the **Transfer Based on Custom Rules** tab, find the desired custom transfer rule. In the Actions column, click **Modify**, or click the More icon and select **Delete**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7685273371/p870509.png)
    

After the rule is modified or deleted, automatic transfer based on the rule is stopped. This does not change the relationships between resource groups and the resources that have been successfully transferred based on the rule.

## **Resource types that support custom rule-based automatic transfer**

**Cloud service**

**Resource type name**

**Resource type code**

ECS

Instance

ACS::ECS::Instance

Dedicated host

ACS::ECS::DedicatedHost

Image

ACS::ECS::Image

AccessKey pair

ACS::ECS::KeyPair

Launch template

ACS::ECS::LaunchTemplate

Security group

ACS::ECS::SecurityGroup

Snapshot policy

ACS::ECS::AutoSnapshotPolicy

Object Storage Service (OSS)

Bucket

ACS::OSS::Bucket

Elasticsearch

Cluster

ACS::Elasticsearch::Instance

Logstash

ACS::Elasticsearch::Logstash

ApsaraDB for MongoDB

Instance

ACS::MongoDB::DBInstance

Tair (Redis® OSS-Compatible)

Instance

ACS::Redis::DBInstance

PolarDB

Cluster

ACS::PolarDB::DBCluster

Application Load Balancer (ALB)

Instance

ACS::ALB::LoadBalancer

ACL

ACS::ALB::Acl

Security policy

ACS::ALB::SecurityPolicy

Server group

ACS::ALB::ServerGroup

Classic Load Balancer (CLB)

Instance

ACS::SLB::LoadBalancer

ACL

ACS::SLB::AccessControlList

Server certificate

ACS::SLB::ServerCertificate

Certificate authority (CA) certificate

ACS::SLB::CACertificate

ApsaraMQ for RocketMQ 5.0

Instance

ACS::RocketMQ::Instance

PolarDB for Xscale (PolarDB-X) 2.0

Cluster

ACS::DRDS::PolarDBXInstance

Container Service for Kubernetes (ACK)

Cluster

ACS::ACK::Cluster

ApsaraDB RDS

Instance

ACS::RDS::DBInstance

PolarDB-X 1.0

Cluster

ACS::DRDS::DBInstance

Bastionhost

Instance

ACS::Bastionhost::Instance

Microservices Engine (MSE)

Instance

ACS::MSE::Cluster

Gateway

ACS::MSE::Gateway

Network Load Balancer (NLB)

Instance

ACS::NLB::LoadBalancer

Security policy

ACS::NLB::SecurityPolicy

Server group

ACS::NLB::ServerGroup

VPC

VPC

ACS::VPC::VPC

DHCP options set

ACS::VPC::DhcpOptionsSet

Flow log

ACS::VPC::FlowLog

Gateway endpoint

ACS::VPC::GatewayEndpoint

High-availability virtual IP address (HAVIP)

ACS::VPC::HaVip

Prefix list

ACS::VPC::PrefixList

Filter for traffic mirroring

ACS::VPC::TrafficMirrorFilter

Traffic mirroring session

ACS::VPC::TrafficMirrorSession

VPN gateway

ACS::VPN::VpnGateway

AnalyticDB

Cluster

ACS::ADB::DBClusterLakeVersion

Alibaba Cloud DNS (DNS)

DNS record

ACS::Alidns::Domain

ApsaraMQ for Kafka

Instance

ACS::AliKafka::Instance

Application Real-Time Monitoring Service (ARMS)

Application monitoring

ACS::ARMS::TraceApp

Internet Shared Bandwidth

Instance

ACS::CBWP::CommonBandwidthPackage

Cloud Enterprise Network (CEN)

Bandwidth plan

ACS::CEN::CenBandwidthPackage

Instance

ACS::CEN::CenInstance

ApsaraDB for ClickHouse

Cluster

ACS::ClickHouse::DBCluster

Container Registry

Instance

ACS::CR::Instance

Edge Security Acceleration (ESA)

Domain name

ACS::DCDN::Domain

DataWorks

Workspace

ACS::DataWorks::Project

Data Transmission Service (DTS)

Instance

ACS::DTS::Instance

Elastic Container Instance

Container group

ACS::ECI::ContainerGroup

Enterprise Distributed Application Service (EDAS)

Application

ACS::EDAS::Application

Cluster

ACS::EDAS::Cluster

Intelligent Computing LINGJUN

Cluster

ACS::Eflo::Cluster

E-MapReduce

Cluster

ACS::EMR::Cluster

Auto Scaling

Scaling group

ACS::ESS::ScalingGroup

Realtime Compute for Apache Flink

Workspace

ACS::RealtimeCompute::VvpInstance

Global Accelerator (GA)

ACL

ACS::Ga::Acl

Bandwidth plan

ACS::Ga::BandwidthPackage

Basic instance

ACS::Ga::BasicAccelerator

AnalyticDB for PostgreSQL

Cluster

ACS::GPDB::DBInstance

Cloud Backup

SAP HANA instance

ACS::HBR::HanaInstance

Vault

ACS::HBR::Vault

Lindorm

Instance

ACS::Lindorm::Instance

Hologres

Instance

ACS::Hologram::Instance

Simple Log Service (SLS)

Project

ACS::SLS::Project

ApsaraDB for HBase

Cluster

ACS::HBase::Cluster

File Storage NAS (NAS)

File system

ACS::NAS::FileSystem

CloudOps Orchestration Service (OOS)

Common parameter

ACS::OOS::Parameter

Encrypted parameter

ACS::OOS::SecretParameter

Template

ACS::OOS::Template

Tablestore

Instance

ACS::OTS::Instance

PrivateLink

Endpoint

ACS::PrivateLink::VpcEndpoint

Endpoint service

ACS::PrivateLink::VpcEndpointService

Private Zone

Private Zone

ACS::PrivateZone::Zone

Resource Orchestration Service (ROS)

Stack

ACS::ROS::Stack
