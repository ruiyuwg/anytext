This topic provides the services that work with Resource Group and the resource types that support Resource Group.

The following table lists the services that work with Resource Group. The table contains the following columns:

-   Service name: the name of the service that works with Resource Group.
    
-   Service code: the code of the service that works with Resource Group.
    
-   Console: indicates whether resource group-related operations can be performed in the console of the service.
    
-   API: indicates whether resource group-related operations can be performed by calling the API of the service.
    
    **Note**
    
    For resources in some services, you can call the related API operation provided by the service to move a resource to a different resource group or call the related API operation provided by Resource Group to move multiple resources to a different resource group at a time. We recommend that you use the API operation provided by Resource Group. This API operation can be used to move resources that reside in different regions or belong to different services or resource groups.
    
-   Resource type: the resource type that supports Resource Group.
    
-   Resource metadata: the resource metadata that is supported during resource searches in a resource group.
    
    **Note**
    
    Resource metadata except for resource IDs depends on the Resource Center service. For more information, see [What is Resource Center?](/help/en/resource-management/resource-center/product-overview/resource-center-overview#concept-2281139)
    
-   References: the related topics.
    

**Service name**

**Service code**

**Console**

**API**

**Resource type**

**Resource metadata**

**References**

Elastic Compute Service (ECS)

ecs

Yes

Yes

-   ddh: dedicated host
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [JoinResourceGroup](/help/en/ecs/api-joinresourcegroup#doc-api-Ecs-JoinResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    
-   Console: [Resource Group](/help/en/ecs/user-guide/resource-groups#concept-fdn-wtm-cgb)
    

-   disk: disk
    

Resource ID, resource name, and tag

-   eni: elastic network interface (ENI)
    

Resource ID, resource name, tag, and IP address

-   image: image
    

Resource ID, resource name, and tag

-   instance: instance
    

Resource ID, resource name, tag, and IP address

-   keypair: SSH key pair
    

Resource ID, resource name, and tag

-   launchtemplate: instance launch template
    

Resource ID, resource name, and tag

-   securitygroup: security group
    

Resource ID, resource name, and tag

-   snapshot: snapshot
    

Resource ID, resource name, and tag

-   snapshotpolicy: automatic snapshot policy
    

Resource ID

-   imagecomponent: image component
    

Resource ID

-   imagepipeline: image template
    

Resource ID

ApsaraDB RDS

rds

Yes

Yes

-   dbinstance: instance
    

Resource ID, resource name, and tag

None

Classic Load Balancer (CLB)

slb

Yes

Yes

-   certificate: SSL certificate
    

Resource ID and resource name

-   API operation for moving a resource to a different resource group:
    
    [MoveResourceGroup](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   loadbalancer: instance
    

Resource ID, resource name, tag, and IP address

-   acl: access control list (ACL)
    

Resource ID, resource name, and tag

Application Load Balancer (ALB)

alb

Yes

Yes

-   acl: ACL
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   loadbalancer: instance
    

Resource ID, resource name, and tag

-   securitypolicy: security policy
    

Resource ID, resource name, and tag

-   servergroup: server group
    

Resource ID, resource name, and tag

Network Load Balancer (NLB)

nlb

Yes

Yes

-   servergroup: server group
    

Resource ID

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   securitypolicy: security policy
    

Resource ID

-   loadbalancer: instance
    

Resource ID

Gateway Load Balancer (GWLB)

gwlb

Yes

Yes

-   loadbalancer: instance
    

Resource ID

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   servergroup: server group
    

Resource ID

Virtual Private Cloud (VPC)

vpc

Yes

Yes

-   vpc: VPC
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/vpc/api-moveresourcegroup#doc-api-Vpc-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   natgateway: NAT gateway
    

Resource ID, resource name, and tag

-   dhcpoptionsset: Dynamic Host Configuration Protocol (DHCP) options set
    

Resource ID, resource name, and tag

-   gatewayendpoint: gateway endpoint
    

Resource ID, resource name, and tag

-   ipv4gateway: IPv4 gateway
    

Resource ID, resource name, and tag

-   ipv6gateway: IPv6 gateway
    

Resource ID, resource name, and tag

-   trafficmirrorfilter: traffic mirror filter
    

Resource ID, resource name, and tag

-   trafficmirrorsession: traffic mirror session
    

Resource ID, resource name, and tag

-   publicipaddresspool: public IP address pool
    

Resource ID, resource name, and tag

-   vpngateway: VPN gateway
    

Resource ID

-   customergateway: customer gateway
    

Resource ID

-   sslvpnclientcert: SSL client
    

Resource ID

-   sslvpnserver: SSL server
    

Resource ID

-   ipsecserver: IPsec server
    

Resource ID

-   vpnconnection: IPsec-VPN connection
    

Resource ID

-   vpnattachment: IPsec-VPN connection associated with Cloud Enterprise Network (CEN) resources
    

Resource ID

-   peerconnection: peering connection
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [MoveResourceGroup](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   ipam: IP Address Manager (IPAM)
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/vpc/developer-reference/api-vpcipam-2023-02-28-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   ipampool: IPAM pool
    

Resource ID

-   ipamresourcediscovery: IPAM resource discovery
    

Resource ID

-   ipamscope: IPAM scope
    

Resource ID

Elastic IP Address (EIP)

eip

Yes

Yes

-   eip: EIP
    

Resource ID, IP address, resource name, and tag

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/vpc/api-moveresourcegroup#doc-api-Vpc-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Internet Shared Bandwidth

bandwidthpackage

Yes

Yes

-   bandwidthpackage: instance
    

Resource ID and resource name

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/vpc/api-moveresourcegroup#doc-api-Vpc-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Alibaba Cloud DNS (DNS)

alidns

Yes

Yes

-   domain: domain name
    

Resource ID and resource name

-   API operation for moving a resource to a different resource group: [MoveDomainResourceGroup](/help/en/dns/api-alidns-2015-01-09-movedomainresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Alibaba Cloud CDN (CDN)

cdn

Yes

Yes

-   domain: domain name
    

Resource ID and tag

-   API operation for moving a resource to a different resource group: [ModifyCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-modifycdndomain#main-107864)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Anti-DDoS Origin Enterprise

ddosbgp

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [MoveResourceGroup](/help/en/anti-ddos/anti-ddos-origin/developer-reference/api-ddosbgp-2018-07-20-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Anti-DDoS Proxy

ddoscoo

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Bastionhost

bastionhost

Yes

Yes

-   instance: instance
    

Resource ID and tag

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/bh/api-u09ijd#doc-api-Yundun-bastionhost-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Elasticsearch

elasticsearch

Yes

Yes

-   instance: instance
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/es/developer-reference/api-moveresourcegroup#doc-api-elasticsearch-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   logstash: Logstash
    

Resource ID, resource name, and tag

-   apm: application performance monitoring
    

Resource ID, resource name, and tag

Web Application Firewall (WAF) 2.0

waf

Yes

Yes

-   domain: domain name
    

Resource ID and IP address

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/waf/web-application-firewall-2-0/developer-reference/api-moveresourcegroup#doc-api-waf-openapi-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

WAF 3.0

wafv3

Yes

Yes

-   defenseresource: protected object
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/waf/web-application-firewall-3-0/developer-reference/api-waf-openapi-2021-10-01-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Tair (Redis® OSS-compatible)

kvstore

Yes

Yes

-   instance: instance
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [ModifyResourceGroup](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyresourcegroup-redis#main-107864)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

PolarDB

polardb

Yes

Yes

-   dbcluster: cluster
    

Resource ID, resource name, and tag

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

ApsaraDB for MongoDB

dds

Yes

Yes

-   dbinstance: instance
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [ModifyResourceGroup](/help/en/mongodb/api-modifyresourcegroup#doc-api-Dds-ModifyResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Container Service for Kubernetes (ACK)

cs

Yes

Yes

-   cluster: cluster
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [ModifyCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-modify-cluster-configurations#doc-api-CS-ModifyCluster)
    

E-MapReduce (EMR)

emr

Yes

Yes

-   cluster: cluster
    

Resource ID

-   API operation for moving a resource to a different resource group: [Add a resource to a resource group](/help/en/emr/emr-on-ecs/user-guide/api-add-to-a-resource-group#doc-api-Emr-JoinResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   flowproject: project
    

Resource ID

PolarDB for Xscale (PolarDB-X) 1.0

drds

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group: [UpdateResourceGroupAttribute](/help/en/polardb/api-updateresourcegroupattribute#doc-api-Drds-UpdateResourceGroupAttribute)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Dynamic Content Delivery Network (DCDN)

dcdn

Yes

Yes

-   domain: domain name
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [UpdateDcdnDomain](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-updatedcdndomain)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Elastic Container Instance

eci

Yes

Yes

-   containergroup: container group
    

Resource ID

-   API operation for moving a resource to a different resource group: [UpdateContainerGroup](/help/en/eci/developer-reference/api-eci-2018-08-08-updatecontainergroup#main-107864)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   imagecache: image cache
    

Resource ID

-   API operation for moving a resource to a different resource group: [UpdateImageCache](/help/en/eci/developer-reference/api-eci-2018-08-08-updateimagecache#main-107864)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

AnalyticDB for MySQL

adb

Yes

Yes

-   cluster: cluster
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [ModifyDBClusterResourceGroup](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2019-03-15-modifydbclusterresourcegroup#main-107864)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   dbclusterlakeversion: Data Lakehouse Edition cluster
    

Resource ID, resource name, and tag

ApsaraDB for Cassandra

cds

Yes

Yes

-   cluster: cluster
    

Resource ID

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/apsaradb-for-cassandra/latest/moveresourcegroup#doc-api-Cassandra-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

ApsaraDB for HBase

multimod

Yes

Yes

-   cluster: cluster
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/hbase/developer-reference/api-moveresourcegroup#doc-api-HBase-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Object Storage Service (OSS)

oss

Yes

Yes

-   bucket: bucket
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [PutBucketResourceGroup](/help/en/oss/developer-reference/putbucketresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Smart Access Gateway (SAG)

smartag

Yes

Yes

-   acl: ACL
    

Resource ID and resource name

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/sag/api-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   ccn: Cloud Connect Network (CCN) instance
    

Resource ID, resource name, and tag

-   intelligentrouting: intelligent routing
    

Resource ID, resource name, and tag

-   flowlog: flow log
    

Resource ID and resource name

-   qos: quality of service (QoS) policy
    

Resource ID and resource name

-   smartag: SAG instance
    

Resource ID and resource name

-   smartag\_s: SAG app instance
    

Resource ID

Resource Orchestration Service (ROS)

ros

Yes

Yes

-   stack: stack
    

Resource ID

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/ros/api-moveresourcegroup#doc-api-ROS-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   stackgroup: stack group
    

Resource ID

-   template: template
    

Resource ID

-   templatescratch: scenario
    

Resource ID

CloudOps Orchestration Service (OOS)

oos

Yes

Yes

-   template: template
    

Resource ID, resource name, and tag

-   API operation for moving a resource to a different resource group: [ChangeResourceGroup](/help/en/oos/developer-reference/api-oos-2019-06-01-changeresourcegroup#main-107864)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   execution: execution
    

Resource ID and tag

-   parameter: common parameter
    

Resource ID

-   secretparameter: encryption parameter
    

Resource ID

-   stateconfiguration: desired-state configuration
    

Resource ID

-   patchbaseline: patch baseline
    

Resource ID

Cloud Enterprise Network (CEN)

cen

Yes

Yes

-   cen: CEN instance
    

Resource ID

-   API operation for moving a resource to a different resource group: [MoveResourceGroup](/help/en/cen/developer-reference/api-moveresourcegroup#doc-api-Cbn-MoveResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   bandwidthpackage: bandwidth plan
    

Resource ID

ApsaraDB for OceanBase

oceanbase

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Cloud Architect Design Tools (CADT)

bpstudio

Yes

Yes

-   application: application
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/cadt/developer-reference/api-bpstudio-2021-09-31-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   template: template
    

Resource ID

Hologres

hologram

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/hologres/developer-reference/api-hologram-2022-06-01-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Cloud Backup

hbr

Yes

Yes

-   vault: vault
    

Resource ID

-   API operation for moving a resource to a different resource group: [ChangeResourceGroup](/help/en/cloud-backup/api-changeresourcegroup#doc-api-hbr-ChangeResourceGroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   hanainstance: SAP HANA instance
    

Resource ID

ApsaraMQ for Kafka

alikafka

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group: [ChangeResourceGroup](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/developer-reference/api-alikafka-2019-09-16-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

AnalyticDB for PostgreSQL

gpdb

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ModifyDBInstanceResourceGroup](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-modifydbinstanceresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Container Registry

cr

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   namespace: image namespace
    

Resource ID

-   repository: image repository
    

Resource ID

-   chartnamespace: chart namespace
    

Resource ID

-   chartrepository: chart repository
    

Resource ID

Microservices Engine (MSE)

mse

Yes

Yes

-   cluster: cluster
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   gateway: gateway
    

Resource ID

PrivateLink

privatelink

Yes

Yes

-   vpcendpoint: endpoint
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   vpcendpointservice: endpoint service
    

Resource ID

Data Transmission Service (DTS)

dts

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ConvertInstanceResourceGroup](/help/en/dts/developer-reference/api-convertinstanceresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Global Accelerator (GA)

ga

Yes

Yes

-   accelerator: standard instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   acl: ACL
    

Resource ID

-   basicaccelerator: basic instance
    

Resource ID

-   bandwidthpackage: bandwidth plan
    

Resource ID

DataWorks

dide

Yes

Yes

-   project: workspace
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceManagerResourceGroup](/help/en/dataworks/developer-reference/api-dataworks-public-2020-05-18-changeresourcemanagerresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   tenantresourcegroup: exclusive resource group
    

Resource ID

-   dwresourcegroup: DataWorks resource group
    

Resource ID

Logic Composer

composer

Yes

Yes

-   flow: workflow
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Domain Names

domain

Yes

Yes

-   domain: domain name
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Express Connect

expressconnect

Yes

Yes

-   physicalconnection: Express Connect circuit
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/vpc/developer-reference/api-vpc-2016-04-28-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   routerinterface: virtual border router (VBR)
    

Resource ID

-   virtualborderrouter: VBR-to-VPC connection
    

Resource ID

-   trafficqos: QoS policy
    

Resource ID

-   expressconnectrouter: Express Connect Router (ECR)
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [MoveResourceGroup](/help/en/express-connect/developer-reference/api-expressconnectrouter-2023-09-01-moveresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Server Migration Center (SMC)

smc

Yes

Yes

-   replicationjob: migration task
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   sourceserver: migration source
    

Resource ID

ApsaraVideo VOD

vod

Yes

Yes

-   storage: storage
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/vod/developer-reference/api-vod-2017-03-21-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   appinfo: application information
    

Elastic Block Storage (EBS)

ebs

Yes

Yes

-   dedicatedblockstoragecluster: dedicated block storage cluster
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/ecs/developer-reference/api-ebs-2021-07-30-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   diskreplicagroup: replication pair-consistent group
    

Resource ID

-   diskreplicapair: replication pair
    

Resource ID

-   enterprisesnapshotpolicy: enterprise-level snapshot policy
    

Resource ID

-   solutioninstance: solution instance
    

Resource ID

-   disk: cloud disk
    

Resource ID

Auto Scaling

ess

Yes

Yes

-   scalinggroup: scaling group
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Data Disaster Recovery

dbs

Yes

Yes

-   backupplan: backup schedule
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/dms/developer-reference/api-dbs-2021-01-01-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Application Real-Time Monitoring Service (ARMS)

arms

No

Yes

-   application: application monitoring
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/arms/application-monitoring/developer-reference/api-arms-2019-08-08-changeresourcegroup-apps)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   prometheus: monitoring service
    

Resource ID

-   web: browser monitoring
    

Resource ID

Yes

Yes

-   grafanaworkspace: Managed Service for Grafana
    

Resource ID

Yes

Yes

-   synthetictask: synthetic monitoring task
    

Resource ID

Compute Nest

computenest

Yes

Yes

-   service: service
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   serviceinstance: service instance
    

Resource ID

-   artifact: deployment package
    

Resource ID

Realtime Compute for Apache Flink

flinkasi

Yes

Yes

-   vvpinstance: workspace
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

ApsaraMQ for RocketMQ

rocketmq

No

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/developer-reference/api-rocketmq-2022-08-01-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Simple Log Service

log

Yes

Yes

-   project: project
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Anycast EIP

eipanycast

Yes

Yes

-   anycasteipaddress: Anycast EIP
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

File Storage NAS (NAS)

nas

Yes

Yes

-   filesystem: file system
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-changeresourcegroup-bmcpfs)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Network Intelligence Service (NIS)

netana

Yes

Yes

-   diagnosis: diagnostic
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   networkpath: network path
    

Resource ID

ApsaraDB for SelectDB

selectdb

Yes

Yes

-   dbinstance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

EMR Serverless StarRocks

starrocks

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Tablestore

ots

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/tablestore/developer-reference/api-tablestore-2020-12-09-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Platform for AI (PAI)

paiworkspace

Yes

Yes

-   workspace: workspace
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/pai/developer-reference/api-aiworkspace-2021-02-04-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Resource Management

rm

Yes

Yes

-   resourceshare: resource share
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Distributed Cloud Container Platform for Kubernetes (ACK One)

ackone

Yes

Yes

-   cluster: cluster
    

Resource ID

-   API operation for moving a resource to a different resource group: [ChangeResourceGroup](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/developer-reference/api-adcp-2022-01-01-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Cloud-native API Gateway

apig

Yes

Yes

-   domain: domain name
    

Resource ID

-   API operation for moving a resource to a different resource group:
    
    [ChangeResourceGroup](/help/en/api-gateway/cloud-native-api-gateway/developer-reference/api-apig-2024-03-27-changeresourcegroup)
    
-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

-   environment: environment
    

Resource ID

-   gateway: instance
    

Resource ID

-   httpapi: API
    

Resource ID

-   service: service
    

Resource ID

-   source: service source
    

Resource ID

Chat App Message Service

cams

Yes

Yes

-   instance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
    

Graph Database (GDB)

gds

No

Yes

-   instance: instance
    

Resource ID

-   API operation for moving multiple resources to a different resource group at a time: [MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)
