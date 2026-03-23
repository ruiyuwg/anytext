## Issue

Not all nodes in a Container Service for Kubernetes (ACK) cluster can access the IP address exposed by the LoadBalancer service when the externalTrafficPolicy parameter is set to Local. This issue frequently occurs when an Ingress is used.

## Cause

The externalTrafficPolicy parameter is set toLocal for the SLB instance. In this case, the IP address of the SLB instance can be accessed only by nodes where backend pods are deployed. The IP address of the SLB instance is used for access from outside the cluster. If a cluster node or a node where a pod resides cannot directly access this IP address, requests are not forwarded by the SLB instance. Instead, this IP address is used as extended IP addresses of Services and requests are forwarded by the iptables or IPVS of the kube-proxy.

In this case, if a cluster node or a node where a pod resides does not have a backend pod, the connection fails. If the cluster node or the node where the pod resides has a backend pod, the connection is successful. For more information, visit [Why kube-proxy add external-lb's address to node local iptables rule?](https://github.com/kubernetes/kubernetes/issues/66607)

## Solution

> Take note of the following items:
> 
> -   Before you perform operations that may cause risks, such as modifying instance configurations or data, check the disaster recovery and fault tolerance capabilities of the instances to ensure data security.
> -   We recommend that you back up logs or create snapshots before you modify the configurations and data of instances that include, but are not limited to, Elastic Compute Service (ECS) and ApsaraDB RDS instances.
> -   If you have granted permissions or submitted sensitive information, such as the logon account and password, in the Alibaba Cloud Management Console, modify the information at the earliest opportunity.

You can use the following methods to resolve the preceding issue. We recommend that you use the first method.

-   Use the ClusterIP or a service name to access the IP address exposed by the LoadBalancer service in the Kubernetes cluster. The service name of the Ingress is nginx-ingress-lb.kube-system.
-   Set the externalTrafficPolicy parameter in the LoadBalancer service to Cluster. However, source IP addresses may fail to be listened on after this setting takes effect. You can run the following command to change the configurations of the Ingress:
    
    kubectl edit svc nginx-ingress-lb -n kube-system
    
-   If the cluster uses the Terway plug-in that assigns exclusive Elastic Network Interfaces (ENIs) or shared ENIs with multiple IP addresses, set the externalTrafficPolicy parameter of the LoadBalancer service to Cluster and add the annotation that attaches ENIs to backend servers. For example, you can use the following annotation: service.beta.kubernetes.io/backend-type: "eni". The following code shows the specific annotation format. This way, source IP addresses can be retained and the exposed IP address can be accessed within the cluster. For more information, see [Use annotations to configure load balancing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).
    
    apiVersion: v1
    kind: Service
    metadata:
      annotations:
        service.beta.kubernetes.io/backend-type: eni
      labels:
        app: nginx-ingress-lb
      name: nginx-ingress-lb
      namespace: kube-system
    spec:
      externalTrafficPolicy: Cluster
    

## Applicable scope

-   ACK

> **Note**: Check whether the current configurations are as required before you update the current version to Kubernetes V1.14 to prevent the same issue.
> 
> This document is available only on the China site (aliyun.com).
