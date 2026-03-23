Cloud Parallel File Storage (CPFS) for Lingjun is an advanced storage system from Alibaba Cloud designed for AI services. It delivers high throughput, low latency, and serverless performance. This performance is achieved using an innovative distributed parallel storage architecture, a proprietary high-performance Remote Direct Memory Access (RDMA) over Converged Ethernet (RoCE) network protocol, virtual storage channel technology, and a multi-level caching elastic client.

## Introduction to CPFS for Lingjun

CPFS for Lingjun is an advanced storage system from Alibaba Cloud for AI services that provides high performance, low latency, elastic scalability, and security. For more information, see [What is CPFS for Lingjun (invitational preview)?](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun).

CPFS for Lingjun is designed for AI computing scenarios, such as AI-generated content (AIGC) and autonomous driving. It currently supports only ACK Lingjun nodes and does not support ECS instances.

-   Specifications: For details on product performance, see [Product specifications](/help/en/cpfs/bmcpfs/product-overview/product-specifications).
    
-   Billing: Using CPFS for Lingjun incurs fees. For more information, see [Billing](/help/en/cpfs/bmcpfs/product-overview/billing-description).
    

## **Limits for CPFS for Lingjun**

-   CPFS for Lingjun is available only in specific regions. For more information, see [Available regions](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun#a3384cd21e484).
    
-   CPFS for Lingjun is in invitational preview. To request access, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   Cross-VPC mounting is not supported. File systems can be mounted only to clusters in the same VPC.
    

## **Operational guide**

You can mount CPFS for Lingjun file systems to workloads using persistent volumes (PVs) and persistent volume claims (PVCs). Only statically provisioned volumes are supported. Dynamic provisioning is not supported. For more information, see [Use statically provisioned CPFS for Lingjun volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cpfs-for-lingjun-statically-provisioned-volumes).
