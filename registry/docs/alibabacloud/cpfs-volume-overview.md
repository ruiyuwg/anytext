Cloud Parallel File Storage (CPFS) General-purpose Edition is a fully managed and scalable parallel file system designed for high-performance computing (HPC) workloads. You can mount a CPFS file system to a container as a volume to provide persistent and shared storage.

## Introduction to CPFS General-purpose Edition

CPFS General-purpose Edition is a fully managed and scalable parallel file system from Alibaba Cloud, designed for HPC workloads that require high throughput, high IOPS, and storage for many files.

-   Specifications: For information about product performance, see [CPFS General-purpose Edition specifications](/help/en/cpfs/cpfsonecs/product-overview/product-specifications).
    
-   Billing: For information about billing for CPFS General-purpose Edition file systems, see [Billing overview](/help/en/cpfs/cpfsonecs/product-overview/cpfs-billing-overview).
    

## Limits

-   CPFS General-purpose Edition is available only in specific regions. For more information, see Regions that support CPFS General-purpose Edition.
    
-   Only the NFS protocol is supported for mounting. The POSIX protocol is not supported.
    
-   CPFS supports only nodes that use the x86 architecture.
    
-   Volumes can be mounted only to clusters that are in the same VPC.
    
-   You cannot mount volumes to nodes that run the ContainerOS operating system.
    

## Instructions

ACK uses the Container Storage Interface (CSI) component to mount CPFS file systems to workloads using persistent volumes (PVs) and persistent volume claims (PVCs). Only statically provisioned volumes are supported. Dynamic volume provisioning is not supported. For more information, see [Use a statically provisioned CPFS General-purpose Edition volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/statically-provisioned-cpfs-2-0-volumes-1).
