Classic Load Balancer (CLB) distributes inbound network traffic across multiple backend servers based on forwarding rules. You can use CLB to improve the responsiveness and availability of your applications.

## Overview

CLB uses virtual IP addresses to provide load balancing services for the backend pool, which consists of servers deployed in the same region. Network traffic is distributed across multiple backend servers based on forwarding rules. This ensures the performance and availability of applications.

By default, CLB monitors the health of backend servers and automatically isolates unhealthy backend servers. This eliminates single points of failure (SPOFs) and improves the availability of applications. In addition, CLB supports DDoS mitigation, which enhances the security of applications.

## CLB components

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1010255671/CAEQORiBgMDx9u3_qRkiIGM0ZTYxOTNiMTBhOTQ0ZDNhNDRiZmZhNmUwZDJhOWQ23963382_20230830144006.372.svg)

**Note**

The unhealthy backend servers are displayed in gray, as shown in the preceding figure. CLB does not forward network traffic to unhealthy servers.

The following table describes the CLB components.

**Component**

**Description**

**Instance**

A CLB instance is an entity that provides load balancing services by distributing network traffic across backend servers. To get started with CLB, you must create a CLB instance and add at least one listener and two backend servers to the CLB instance.

**Listener**

Listeners check for client requests and forward the requests to backend servers. Listeners also perform health checks on backend servers.

**Backend server**

Backend servers are used to receive frontend requests. You can specify Elastic Compute Service (ECS) instances, elastic container instances, and elastic network interfaces (ENIs) as the backend servers of CLB. You can add backend servers to the default server group of a CLB instance. You can also add backend servers to vServer groups or primary/secondary server groups to manage the servers in batches. For more information, see the following topics:

-   [What is ECS?](/help/en/ecs/user-guide/what-is-ecs#topic-9543)
    
-   [What is Elastic Container Instance?](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079)
    
-   [Overview](/help/en/ecs/user-guide/eni-overview#concept-xzg-mgt-xdb)
    

## Benefits

-   **High availability**
    
    CLB is fully redundant with a built-in zone-disaster recovery mechanism to ensure zero SPOFs.
    
    CLB can automatically scale on demand to ensure business continuity.
    
-   **Scalability**
    
    You can add and remove backend servers based on business requirements to improve the availability of applications.
    
-   **Cost-effectiveness**
    
    Compared to hardware load balancers, CLB can significantly reduce fixed costs.
    
-   **Security**
    
    You can integrate CLB with Alibaba Cloud Security to defend your applications against DDoS attacks of up to 5 Gbit/s.
    
-   **High concurrency**
    
    A CLB instance supports up to one million concurrent connections.
    

## Work with CLB

You can use your Alibaba Cloud account to manage CLB by using one of the following methods:

-   [CLB console](https://slb.console.alibabacloud.com/slb): a web interface that you can use to manage your CLB service. You can create, use, or release CLB instances in the console. For more information, see [Create and manage a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb).
    
-   [Alibaba Cloud SDKs](https://open.alibabacloud.com/sdk): SDKs for Java, Go, PHP, Python, and other programming languages.
    
-   [OpenAPI Explorer](https://next.api.alibabacloud.com/api/Slb/2014-05-15/DescribeAvailableResource?lang=JAVA&params=%7B%7D): allows you to retrieve and call API operations and dynamically generate SDK sample code.
    
-   [Terraform](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/slb): uses configuration files to call computing resources of Alibaba Cloud and other platforms that support Terraform. Terraform is an open source tool that implements version control.
