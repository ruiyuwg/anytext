This topic provides answers to some frequently asked questions about registered clusters.

-   [Are registered clusters free of charge?](#section-oyv-po0-tn5)
    
-   [Can I use cloud computing resources to scale out an external cluster that is deployed in a data center?](#section-d6s-5pt-vpe)
    
-   [What are the requirements for connecting an external cluster to the cluster registration proxy?](#section-uys-2f5-s9k)
    
-   [Why are the quotas and usage of pods, vCPUs, and memory not displayed on the Nodes page in the console after I connect to a registered cluster?](#17f05d34c34ik)
    

## Are registered clusters free of charge?

Registered clusters are free of charge. However, other relevant cloud resources are billed. For more information, see [Overview of registered clusters](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-9#section-vzg-7b1-8su).

## Can I use cloud computing resources to scale out an external cluster that is deployed in a data center?

Yes, you can grant permissions on applications. For more information, see [Build a hybrid cloud cluster and add ECS instances to the cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/use-cases/build-a-hybrid-cloud-cluster-and-add-ecs-instances-to-the-cluster).

## What are the requirements for connecting an external cluster to the cluster registration proxy?

The cluster registration proxy provides a public endpoint and an internal endpoint. For more information about how to enable Internet access for the cluster API server by using an elastic IP address (EIP), see [Control public access to the API server of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster#task-2494620).

You must register external clusters in the Container Service for Kubernetes (ACK) console by using the internal endpoint in the following scenarios:

-   Use the node pool feature to add Elastic Compute Service (ECS) instances or ECS bare metal instances to the registered external cluster. For more information, see [Build a hybrid cloud cluster and add ECS instances to the cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/use-cases/build-a-hybrid-cloud-cluster-and-add-ecs-instances-to-the-cluster).
    
-   Use the ack-virtual-node component to deploy elastic container instances in the registered external cluster. For more information, see [Deploy the virtual node controller and use it to create Elastic Container Instance-based pods](/help/en/ack/scale-out-elastic-container-instances#task-2489901).
    

Make sure that the external cluster can access the endpoint of the cluster registration proxy through port 5533. For more information, see [Functions and features](/help/en/express-connect/product-overview/functions-and-features#concept-zmz-dzs-ggb).

Other features, such as cluster management, security management, logs, and monitoring and alerting, do not have requirements on internal network connectivity. However, you must make sure that the external cluster can access the Internet.

## Why are the quotas and usage of pods, vCPUs, and memory not displayed on the Nodes page in the console after I connect to a registered cluster?

The registered cluster console uses the metrics-server component provided by ACK to collect node resource quotas and usage information.

The metrics-server component is a resource monitoring tool that ACK develops based on open source Metrics Server. metrics-server collects resource usage metrics for all pods in your cluster and enables the Horizontal Pod Autoscaler (HPA) to work based on the collected metrics. For more information, see [metrics-server](/help/en/ack/product-overview/metrics-server#concept-1918212).

You can install the metrics-server component from the Add-ons page in the ACK console. For more information, see [Manage components](/help/en/ack/manage-system-components).

If an open source or third-party metrics-server component is already installed in your cluster, node information may not be displayed due to compatibility issues. In this case, delete the existing metrics-server component and then install the metrics-server component provided by ACK.
