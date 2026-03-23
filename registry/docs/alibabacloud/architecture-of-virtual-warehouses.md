Hologres V2.0 introduces a new virtual warehouse instance type that enables a read/write splitting architecture within a single instance. This topic describes the architecture of a virtual warehouse instance.

## **Background information**

Hologres V1.1 uses a high availability (HA) deployment architecture for read/write splitting with shared storage and multiple instances. A primary instance can be attached to multiple read-only replica instances. These instances share storage but have isolated computing resources, enabling an HA deployment with read/write splitting. For more information, see [Primary/replica instance deployment for read/write splitting (shared storage)](/help/en/hologres/user-guide/configure-multi-instance-high-availability-deployment). However, the read-only replica instance model has the following limitations:

-   You must create multiple instances. Each instance uses a separate Endpoint. To switch traffic, you must change the Endpoint.
    
-   Read-only replica instances share metadata with the primary instance. You cannot set parameters for individual read-only replica instances based on their specific roles. For example, you cannot configure different numbers of replicas for each read-only replica instance to meet query HA requirements.
    

To address these issues, **Hologres V2.0** introduces a new virtual warehouse instance type. This instance type divides computing resources into different virtual warehouses (Virtual Warehouses) to support various scenarios, such as read/write splitting, resource isolation, and service isolation. It provides core capabilities such as resource isolation and elasticity. Compared to the read-only replica instance model, virtual warehouse instances have the following advantages:

-   virtual warehouses are independently and elastically scalable. You can allocate resources and create virtual warehouses on demand.
    
-   virtual warehouses can share data and metadata.
    
-   You need only one Endpoint to switch traffic without changing the Endpoint.
    

**Starting from Hologres V4.0**, the virtual warehouse instance architecture is upgraded. In addition to flexible read/write and read/read splitting, it also achieves ultimate write-write isolation.

## **Precautions**

A virtual warehouse instance can have a maximum of 10 virtual warehouses. The resource size of a single virtual warehouse ranges from 32 CU to 512 CU.

-   Starting from Hologres V3.0.10, the maximum size for a virtual warehouse is increased to 1024 CU.
    
-   Starting from Hologres V3.0.27, the maximum size limit for a virtual warehouse is removed.
    

In Hologres V2.0, virtual warehouses support data read and write tasks as follows:

-   Only the primary virtual warehouse (Leader) can perform data write tasks.
    
-   All virtual warehouses (Leader and Follower) can perform data query tasks.
    
-   For information about how to grant permissions to Leader and Follower virtual warehouses, see [Authorize access to data in virtual warehouses](/help/en/hologres/user-guide/grant-permissions-on-table-groups-that-are-loaded-to-virtual-warehouses).
    

Starting from Hologres V4.0, virtual warehouses support data write tasks as follows:

-   Only the primary virtual warehouse (Leader) can perform write tasks that are optimized by Fixed Plan, such as Insert, Update, and Fixed Copy. For more information, see [Use Fixed Plan to accelerate SQL execution](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans).
    
-   All virtual warehouses (Leader and Follower) can perform batch data import tasks, such as `insert into select`.
    
-   You must enable the GUC parameter hg\_warehouse\_enable\_use\_local\_resource. For more information, see [GUC parameters reference](/help/en/hologres/developer-reference/guc-parameters).
    

## **Architecture**

The following figure shows the architecture.

### **V4.0 architecture**

The V4.0 architecture is upgraded to provide ultimate write-write isolation for a single table group:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6320413771/CAEQUxiBgMDvlcGv3xkiIGEyNmI3MzRkYzk3MzQ0ODU5MTExYThiM2M0YzA4MDI15075736_20250425102734.136.svg)

## **V2.0 architecture**

-   Version 2.0 supports basic read/write and read/read fencing.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6320413771/CAEQUxiBgICxkcOv3xkiIDI0MzViMDM1MjYzODQwNDhiOWIyYjZiNDZmMGM5NDll5075736_20250425102734.136.svg)
-   In V2.0, to achieve write-write isolation, split your data into multiple table groups at the storage layer. For more information, see [Concepts](/help/en/hologres/user-guide/basic-concepts).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6320413771/CAEQUxiBgICH0cWv3xkiIGFjODI0NDAyYzE2MTRmNWM4Zjg0Y2M0NGQ0ZDFmNjAw5075736_20250425102734.136.svg)

The core components of a virtual warehouse instance are divided into three layers:

-   **Data storage**: Hologres data storage is built on the Alibaba Cloud Pangu storage service. This service provides core features such as high performance, high reliability, high availability, low cost, elastic storage, and robust security.
    
-   **Virtual Warehouse**: A virtual warehouse is an independent and elastically scalable computing resource that executes user query requests.
    
-   **Cloud service components**: Cloud service components include Gateway, Meta Service, and Holo Master. They provide capabilities such as metadata management, security authentication management, unified provisioning, and node management. The Gateway forwards connections to the frontends (FEs) of the appropriate virtual warehouses. For example, to use the `read_warehouse` virtual warehouse, the Gateway forwards the connection to an FE of the `read_warehouse` virtual warehouse. A single Gateway can handle a peak of 100 new connections per second, which increases to 150 per second in V2.2.22 and later versions. A single Gateway supports a maximum of 8,000 connections.
