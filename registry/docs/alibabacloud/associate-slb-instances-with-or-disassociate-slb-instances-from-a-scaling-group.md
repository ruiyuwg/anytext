Auto Scaling supports the attachment of Server Load Balancer (SLB) instances to scaling groups. This allows inbound traffic to be evenly distributed to the instances in a scaling group, which effectively improves the service performance of the scaling group. You can use the following tools to attach or detach SLB instances: Auto Scaling console and API operations (AttachLoadBalancers and DetachLoadBalancers).

## Background information

In this topic, Classic Load Balancer (CLB, formerly known as Server Load Balancer or SLB) is used to describe how to perform the attachment and detachment. After the attachment of a CLB instance to a scaling group, all instances in the scaling group automatically serve as the backend servers of the CLB instance, irrespective of whether the instances are automatically created by Auto Scaling or manually added to the scaling group. When the CLB instance distributes inbound traffic to the instances in the scaling group, it considers factors as the traffic distribution policy and health check result to maximize resource utilization in the scaling group in a flexible manner. For more information, see [SLB overview](#section-dcl-9ac-3nd).

## SLB overview

SLB is a service that can distribute network traffic to a group of backend servers to increase the throughput of applications. You can use SLB to prevent service interruption that is caused by single points of failure (SPOFs) and improve the availability of your applications. For more information, see [What is SLB?](/help/en/slb/product-overview/slb-overview#concept-whs-lp4-tdb)

Alibaba Cloud provides the following types of load balancers: Application Load Balancer (ALB), Network Load Balancer (NLB), and Classic Load Balancer (CLB).

**Type**

**Description**

**References**

ALB

ALB is a Layer 7 load balancing service that provides ultra-high processing capabilities and supports advanced content-based routing features.

[What is ALB?](/help/en/slb/application-load-balancer/product-overview/what-is-alb/#concept-2011635)

NLB

NLB is a Layer 4 load balancing service that offers ultra-high performance and connects all things to the Internet. It can also automatically scale on demand. An NLB instance supports up to 100 million concurrent connections, which is ideal for services that require high concurrency.

[What is NLB?](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/#concept-2223473)

CLB

CLB supports TCP, UDP, HTTP, and HTTPS, and provides high processing capabilities at Layer 4 and basic processing capabilities at Layer 7. After you attach servers that are deployed in the same region to a CLB instance, CLB uses virtual IP addresses (VIPs) to combine these servers into a high-performance, highly available server pool.

[What is CLB?](/help/en/slb/classic-load-balancer/product-overview/what-is-clb/#concept-whs-lp4-tdb)

The following table uses CLB as an example to show how load balancers distribute and manage traffic. You must configure a CLB instance, a listener, and a backend server.

**Note**

If you use ALB, you must configure an ALB instance, a listener (the smallest business unit), and a server group (the logic group of one or more backend servers). For more information, see [ALB server group overview](/help/en/slb/application-load-balancer/user-guide/alb-server-group-overview/#concept-2022045).

**Component**

**Description**

**References**

CLB instance

A CLB instance is an entity that provides load balancing services by distributing network traffic to backend servers.

**Note**

The default weight of an instance as a backend server is 50. You can adjust the weight based on your business requirements. For more information, see [Add and manage backend servers in the default server group](/help/en/slb/classic-load-balancer/user-guide/add-an-ecs-instance-to-the-default-server-group#task-1597070).

[Overview of CLB instances](/help/en/slb/classic-load-balancer/user-guide/clb-instance/#concept-fsy-ssm-vdb)

Listener

A listener checks client requests and forwards the requests to backend servers. A listener also performs health checks on backend servers.

[CLB listener overview](/help/en/slb/classic-load-balancer/user-guide/listener-overview/#concept-xvg-qmn-vdb)

Backend server

A logical group of instances that process client requests. You can add multiple instances to a CLB backend server group. You can also attach multiple vServer groups or primary/secondary server groups to a CLB instance for the management purposes.

[Backend server overview](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview#concept-wwc-l4n-vdb)

## Precautions

The load balancers used in this topic all refer to CLB.

-   After the attachment of a CLB instance or CLB server group to a scaling group, you must take note of the following items:
    
    -   If the CLB instance or CLB server group are deleted, scaling activities in the scaling group are sure to fail.
        
    -   Auto Scaling regularly scans for the CLB instance or CLB server group that is attached to the scaling group. If Auto Scaling does not detect any CLB instance or CLB server group, an automatic detachment of the CLB instance or CLB server group from the scaling group is triggered.
        
        **Important**
        
        After the detachment of the CLB instance or CLB server group, scaling failures caused by the CLB instance or CLB server group are prevented in the scaling group.
        
-   When you attach or detach a CLB instance to or from a scaling group, you must take into several factors into consideration.
    
    ## Attach a CLB instance
    
    Before you attach a CLB instance to a scaling group, take note of the following items:
    
    -   If you call the AttachLoadBalancers operation to attach a CLB instance to a scaling group and set the ForceAttach request parameter to false, the existing instances in the scaling group do not automatically serve as the backend servers of the CLB instance after the attachment.
        
    -   If you call the AttachLoadBalancers operation to attach a CLB instance to a scaling group and set the ForceAttach request parameter to true, the existing instances in the scaling group automatically serve as the backend servers of the CLB instance after the attachment.
        
    -   You can call the AttachLoadBalancers operation to attach up to five CLB instances to a scaling group in each call.
        
    -   If a CLB instance has been already attached to a scaling group and you want all instances in the scaling group to serve as the backend servers of the CLB instance, you can call the operation to attach the CLB instance to the scaling group again. In a re-attachment request, you must set the ForceAttach request parameter to true.
        
    -   Before you attach a CLB instance to a scaling group, make sure that the CLB instance meets the following requirements:
        
        -   The CLB instance must be in the **Running** state. For more information, see [Create and manage a CLB instance](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-clb-instances#task-ctx-xsm-vdb).
            
        -   The CLB instance must reside in the same region as the scaling group.
            
        -   The CLB instance must have at least one listener in service and health check enabled. For more information, see [CLB listener overview](/help/en/slb/classic-load-balancer/user-guide/listener-overview/#concept-xvg-qmn-vdb) and [Configure and manage CLB health checks](/help/en/slb/classic-load-balancer/user-guide/configure-and-manage-health-checks#task-1580791).
            
        -   If the network type of the CLB instance and the scaling group is virtual private cloud (VPC), the CLB instance must reside in the same VPC as the scaling group.
            
        -   If the CLB instance has backend servers that reside in a VPC when the network type of the scaling group is VPC and that of the CLB instance is classic network, the VPC of the backend servers must be consistent with the VPC of the scaling group.
            
            **Note**
            
            In other cases, you do not need to strictly follow the preceding limits on network types when you attach a CLB instance to a scaling group.
            
        -   The quota of CLB instances that you can attach to a scaling group has an upper limit.
            
    
    ## Detach a CLB instance
    
    Before you detach a CLB instance from a scaling group, take note of the following items:
    
    -   If you call the DetachLoadBalancers operation to detach a CLB instance from a scaling group and set the ForceAttach request parameter to false, the instances in the scaling group still serve as the backend servers of the CLB instance after the detachment.
        
    -   If you call the DetachLoadBalancers operation to detach a CLB instance from a scaling group and set the ForceAttach request parameter to true, the instances in the scaling group do not serve as the backend servers of the CLB instance anymore after the detachment.
        
    -   You can call the DetachLoadBalancers operation to detach up to five CLB instances from a scaling group in each call.
        
    -   Before you detach a CLB instance from a scaling group, make sure that the CLB instance no longer distributes inbound traffic to the instances in the scaling group. If a CLB instance is still distributing inbound traffic to instances during a detachment, requests for services are easily lost.
        
    

## Procedure

You can use the Auto Scaling console or call API operations to attach or detach a CLB instance to a scaling group. If you call API operations, you do not need to care about your business requirements and the required number of load balancers beforehand. This looses the coupling between CLB instances and scaling groups. API operations flexibly improve the service performance of scaling groups.

## API operations

-   To attach one or more CLB instances to a scaling group, you can call the AttachLoadBalancers operation. For more information, see [AttachLoadBalancers](/help/en/auto-scaling/developer-reference/api-attachloadbalancers#doc-api-Ess-AttachLoadBalancers). To attach one or more CLB server groups to a scaling group, you can call the AttachVServerGroups operation. For more information, see [AttachVServerGroups](/help/en/auto-scaling/developer-reference/api-attachvservergroups#doc-api-Ess-AttachVServerGroups).
    
-   To detach one or more CLB instance from a scaling group, you can call the [DetachLoadBalancers](/help/en/auto-scaling/developer-reference/api-detachloadbalancers#doc-api-Ess-DetachLoadBalancers) operation. To detach one or more CLB server groups from a scaling group, you can call the DetachVServerGroups operation. For more information, see [DetachVServerGroups](/help/en/auto-scaling/developer-reference/api-detachvservergroups#doc-api-Ess-DetachVServerGroups).
    

**Note**

To attach an ALB server group to a scaling group, you can call the [AttachAlbServerGroups](/help/en/auto-scaling/developer-reference/api-attachalbservergroups#doc-api-Ess-AttachAlbServerGroups) operation. To detach an ALB server group from a scaling group, you can call the [DetachAlbServerGroups](/help/en/auto-scaling/developer-reference/api-detachalbservergroups#doc-api-Ess-DetachAlbServerGroups) operation.

## Auto Scaling console

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Go to the page where you can attach a CLB instance to a scaling group.
    
    -   When you create a scaling group
        
        This step focuses on the attachment of a CLB instance to a scaling group when you create the scaling group. For information about other configurations, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#concept-25882-zh).
        
        1.  Click **Create**.
            
        2.  In the **Create Scaling Group** dialog box, set the **Network Type** parameter to VPC or Classic Network.
            
        3.  Configure the **Associate CLB Instance** parameter.
            
            **Note**
            
            If you set the **Network Type** parameter to VPC in the **Create Scaling Group** dialog box, you must configure the **VPC** parameter before you can configure the **Associate ALB Server Group** parameter.
            
            1.  Select one or more CLB instances.
                
                The quota of CLB instances or server groups that you can attach to a scaling group has an upper limit. To view the quota or request a quota increase, visit [Quota Center](https://quotas.console.alibabacloud.com/products/ess/quotas). If no CLB instance is available in the **Associate CLB Instance** drop-down list, check whether the requirements in the [Precautions](#section-evr-x3e-off) section are met.
                
            2.  Select one or more CLB backend server groups.
                
                A CLB backend server group can be a default server group or a vServer group. For more information, see [Backend server overview](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview#concept-wwc-l4n-vdb).
                
                **Server group**
                
                **Description**
                
                Default server group
                
                A group of instances that receive the frontend requests. If you specify no vServer group or primary/secondary server group for the listener, the listener forwards the requests to the default server group.
                
                vServer group
                
                A group of vServers that receive the frontend requests. If you want to forward requests to servers that do not belong to the default server group or you want to forward domain name-based or URL-based requests, you must specify one or more vServer groups.
                
                You can specify the weight of each backend server based on your business requirements when you create a scaling group. You can also specify the weight of each backend server by using the **SLB Weight** parameter when you create a scaling configuration.
                
                -   **Scenario 1**: Specify the SLB weight when you create a scaling group, as shown in the following figure. ![后端服务器权重](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4024406861/p637953.png)
                    
                    **Important**
                    
                    If you set the **Instance Configuration Source** parameter to **Launch Templates** when you create a scaling group, you must configure the **Weight** parameter to specify the weight of each instance as a backend server. You cannot specify the SLB weight in a scaling configuration because the launch template saves you from creating a scaling configuration.
                    
                -   **Scenario 2**: Specify the SLB weight when you create a scaling configuration, as shown in the following figure. ![负载均衡权重](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4024406861/p637960.png)
                    
                
                If you specify the SLB weight in different scenarios (**Scenario 1** and **Scenario 2**), the following rules apply when scaling is triggered:
                
                -   If you configured the **Weight** parameter and the **SLB Weight** parameter at the same time, the value of the **Weight** parameter takes precedence over the that of the **SLB Weight** parameter.
                    
                -   If you configured only the **SLB Weight** parameter, the value of the **SLB Weight** parameter is used.
                    
                -   If you left the **Weight** parameter and the **SLB Weight** parameter empty, the default weight 50 is used.
                    
                
        4.  Configure other parameters based on your business requirements.
            
        5.  Click **OK**.
            
    -   Change the CLB instance of a scaling group
        
        This step describes how to change the CLB instance that is attached to a scaling group. For information about other configurations, see [Modify scaling groups](/help/en/auto-scaling/modify-a-scaling-group#concept-qkz-nkx-rfb).
        
        1.  Find the desired scaling group and click **Edit** in the **Actions** column.
            
        2.  Select **When you associate SLB instances with or disassociate SLB instances from the scaling group, existing ECS instances in the scaling group are added to or removed from the server groups of the SLB instances.** based on your business requirements.
            
            **Note**
            
            If you also want to change the ALB server group that is attached to the scaling group, you can also select **When you associate server groups with a scaling group, Auto Scaling adds instances in the scaling group to these server groups. When you disassociate server groups from a scaling group, Auto Scaling removes instances in the scaling group from these server groups.** based on your business requirements in the **Edit Scaling Group** dialog box. If you select the check box, the existing instances in the scaling group automatically serve as the backend servers of the ALB server group after the attachment, or automatically stop serving as the backend servers of the ALB server group after the detachment.
            
            -   If you select this check box, the existing instances in the scaling group automatically serve as the backend servers of the CLB instance after the attachment, or automatically stop serving as the backend servers of the CLB instance after the detachment.
                
            -   If you do not select this check box, the backend servers of the CLB instance remains unchanged, regardless of after the attachment or after the detachment.
                
        3.  Select **Asynchronously unmount or mount default server groups.** based on your business requirements.
            
            -   If you select this check box, a scaling activity occurs each time you attach or detach the default server group. This setting takes effect only if you attach and detach the default server group separately.
                
            -   If you do not select this check box, no scaling activity occurs each time you attach or detach the default server group.
                
        4.  **(Optional)** Modify the **Weight** parameter based on your business requirements.
            
            If you attached the CLB instance and configured the **Weight** parameter when you created the scaling group, you can modify the weight of each backend server based on your business requirements.
            
        5.  Modify other parameters based on your business requirements.
            
        6.  Click **OK**.
            

## **References**

If you attach an ApsaraDB RDS instance to a scaling group, the private IP address of the Elastic Compute Service (ECS) instances in the scaling group are automatically added to the IP address whitelist of the ApsaraDB RDS instance after the attachment. This enables the internal communication between the ECS instances and the ApsaraDB RDS instance. For more information, see [Attach or detach ApsaraDB RDS instances to or from scaling groups](/help/en/auto-scaling/associate-apsaradb-rds-instances-with-a-scaling-group-or-disassociate-apsaradb-rds-instances-from-a-scaling-group).
