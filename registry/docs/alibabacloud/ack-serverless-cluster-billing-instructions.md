Serverless Kubernetes clusters are classified into ACK Serverless Pro clusters and ACK Serverless Basic clusters. The billable items and billing rules vary based on the type of the ACK Serverless cluster. This topic describes the billing rules of ACK Serverless Pro clusters and ACK Serverless Basic clusters.

## Billing rules of ACK Serverless Pro clusters

### Billable items

![Billable items](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8691913961/p525355.png)

### Cluster management fee

The cluster management feature is in public preview and free of charge.

### Cloud service fee

Cloud service fees are incurred based on the services used by your ACK Serverless cluster, in accordance with the respective billing rules. If your ACK Serverless cluster does not use any cloud services, no cloud service fees are charged.

**Cloud service**

**Activation**

**Description**

**Subscription**

**Resource plan**

**Billing rule**

Elastic Container Instance

Required

This service is used to host workloads in ACK Serverless clusters.

For more information, see [What is Elastic Container Instance?](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079).

Not supported

Not supported

[Billing overview](/help/en/eci/product-overview/billing-overview#topic-1860085)

Virtual Private Cloud (VPC)

Required

This service is used to build networks and create routing rules for clusters .

For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb).

Not supported

Not supported

[Billing](/help/en/vpc/product-overview/product-billing#concept-1357436)

Server Load Balancer (SLB)

Required

This service allows you to enable load balancing for clusters .

For more information, see [What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb) and [What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/#concept-2011635).

-   Classic Load Balancer (CLB):
    
    not supported
    
-   Application Load Balancer (ALB): not supported
    

-   CLB: not supported
    
-   ALB: supported
    

-   CLB:
    
    [CLB pay-as-you-go billing](/help/en/slb/pay-as-you-go-2#concept-dph-vfs-wdb)
    
-   ALB: [ALB billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules#concept-2012118)
    

Container Registry

Recommended

This service ensures the security of cloud-native applications that are fully managed on the cloud and allows you to manage the lifecycle of these applications.

For more information, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233).

Supported

**Note**

Container Registry Enterprise Edition instances support only the subscription billing method. For more information, see [Billing of Container Registry Enterprise Edition instances](/help/en/acr/product-overview/billing-of-container-registry-enterprise-edition-instances#task-2273187).

Not supported

[Billing rules](/help/en/acr/product-overview/billing-description#concept-2047822)

Log Service

Recommended

This service is used to collect and query the log data of cluster components and applications.

For more information, see [What is Log Service?](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb).

Not supported

Supported

-   [Billing overview](/help/en/sls/billing-overview#concept-2086667)
    
-   [Purchase a resource plan](/help/en/sls/purchase-a-resource-plan#task-2190130)
    

Elastic IP Address (EIP)

Optional

This service enables Internet access for cloud resources.

For more information, see [Elastic IP Address](/help/en/eip/product-overview/what-is-eip#concept-zmv-hd3-vdb).

Not supported

Not supported

[Billing overview](/help/en/eip/billing-overview#concept-645525)

NAT Gateway

Optional

This service enables clusters to communicate with the Internet and pull images over the Internet.

For more information, see [What is NAT Gateway?](/help/en/nat-gateway/product-overview/what-is-nat-gateway#concept-wpm-kfy-ydb).

Not supported

Supported

-   [Billing of Internet NAT gateways](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb)
    
-   [NAT resource plans](/help/en/nat-gateway/nat-resource-plans#concept-2121008)
    

File Storage NAS (NAS)

Optional

This service allows you to store application data in NAS file systems.

For more information, see [What is NAS?](/help/en/nas/product-overview/what-is-nas#concept-qpg-wrt-1fb).

Not supported

Supported

-   [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548)
    
-   [Billing of Extreme NAS file systems](/help/en/nas/product-overview/billing-of-extreme-nas-file-systems#task-2567605)
    
-   [Purchase resource plans](/help/en/nas/product-overview/purchase-resource-plans#concept-53974-zh)
    

Object Storage Service (OSS)

Optional

This service allows you to store application data in OSS buckets.

For more information, see [What is OSS?](/help/en/oss/user-guide/what-is-oss#concept-ybr-fg1-tdb).

Not supported

Supported

[Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb)

Key Management Service (KMS)

Optional

This service allows you to manage application Secrets and encrypt Secrets for ACK Serverless Pro clusters.

For more information, see [What is Key Management Service?](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh).

Not supported

Not supported

[Billing of KMS](/help/en/kms/key-management-service/support/billing-of-kms#concept-52608-zh)

Alibaba Cloud DNS PrivateZone

Optional

Alibaba Cloud DNS PrivateZone is a DNS resolution service for private domain names within VPCs.

For more information, see [What is PrivateZone?](/help/en/privatezone/latest/what-is-privatezone#topic-2036614).

Not supported

Not supported

[Billing](/help/en/dns/product-billing)

## Billing rules of ACK Serverless Basic clusters

You are charged only for the cloud services that are used by ACK Serverless Basic clusters. For more information about the billing rules of Alibaba Cloud services, see [Cloud service fee](#p-qlt-178-1b7).

## References

-   [What is ACK Serverless?](/help/en/ack/serverless-kubernetes/product-overview/ask-overview#concept-pc2-xyz-xdb)
    
-   [ACK Serverless Pro cluster overview](/help/en/ack/serverless-kubernetes/user-guide/ask-pro-cluster-overview#concept-2122705)
    
-   [Billing](/help/en/ack/product-overview/billing-overview#task-2260014)
