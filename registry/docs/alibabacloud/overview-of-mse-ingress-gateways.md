An Ingress is an API object that provides Layer-7 load balancing to manage external access to services in a Kubernetes cluster. To provide better support for scenarios where cloud-native applications are deployed, Alibaba Cloud provides Microservices Engine (MSE) Ingress gateways that are developed based on deep integration and optimization of MSE cloud-native gateways and Container Service for Kubernetes (ACK). MSE Ingress gateways help you manage ingress traffic of clusters in an efficient manner. This topic describes the basic concepts, features, and usage notes of MSE Ingress gateways. This topic also describes how an MSE Ingress gateway works and how to install MSE Ingress Controller.

## Basic concepts

In a Kubernetes cluster, an Ingress functions as an access point that exposes services in the cluster. The Ingress distributes most of the traffic that is destined for the services in the cluster. An Ingress is a Kubernetes resource that manages external access to the services in a Kubernetes cluster. You can configure routing rules for an Ingress to route traffic to backend pods of different services in the Kubernetes cluster.

Kubernetes Ingress resources allow you to configure only the rules for routing HTTP traffic. Advanced features such as load balancing algorithms and session affinity cannot be configured. The advanced features require support from NGINX Ingress gateways or MSE Ingress gateways.

MSE Ingress gateways are developed based on MSE cloud-native gateways and provide a more powerful method to manage ingress traffic. MSE Ingress gateways are compatible with NGINX Ingress gateways and are compatible with more than 50 annotations defined in NGINX Ingress gateways. MSE Ingress gateways are suitable for more than 90% of scenarios of NGINX Ingress gateways. MSE Ingress gateways support canary releases of multiple service versions at the same time and provide flexible service governance capabilities and comprehensive security protection. MSE Ingress gateways can meet requirements for traffic governance in scenarios in which a large number of cloud-native distributed applications are used.

## Features

For more information about the features of MSE Ingress gateways, see the following topics:

-   [Comparison between NGINX Ingress gateways and MSE Ingress gateways](/help/en/mse/user-guide/comparison-between-nginx-ingress-gateways-and-mse-ingress-gateways#task-2206645)
    
-   [Use MSE Ingress gateways to access services in ACK clusters and ACS clusters](/help/en/mse/user-guide/use-mse-ingress-to-access-services-in-ack-clusters)
    
-   [Annotations supported by MSE Ingress gateways](/help/en/mse/user-guide/annotations-supported-by-mse-ingress-gateways#task-2205865)
    
-   [Advanced usage of MSE Ingress](/help/en/mse/user-guide/advanced-usage-of-mse-ingress#task-2229379)
    
-   [Authorize the MSE Ingress controller to access MSE](/help/en/ack/authorize-the-mse-ingress-controller-to-access-mse-1)
    
-   [Migrate the MSE Ingress Controller component from the Marketplace page to the Add-ons page](/help/en/doc-detail/477269.html)
    

## Usage notes

Kubernetes services such as Container Service for Kubernetes (ACK) managed clusters, ACK Serverless clusters, and Container Compute Service (ACS) clusters can use MSE Ingress gateways to route external traffic to services in a Kubernetes cluster. This way, Layer-7 load balancing is implemented. You must deploy MSE Ingress Controller in your Kubernetes cluster. MSE Ingress Controller is used to listen to resources defined in MseIngressConfig CustomResourceDefinitions (CRDs) and dynamically manage the lifecycles, global parameter settings, and listening items of Ingress resources for MSE cloud-native gateways. MSE cloud-native gateways are used to listen to Ingress resources in a Kubernetes cluster and convert the listened Ingress resources into the required traffic governance configurations. This way, cluster services are externally exposed. For more information, see [Use MSE Ingress gateways to access services in ACK clusters and ACS clusters](/help/en/mse/user-guide/use-mse-ingress-to-access-services-in-ack-clusters).

Kubernetes Ingress resources support only HTTP traffic management. Advanced features are implemented based on annotations. MSE Ingress gateways are compatible with annotations defined in NGINX Ingress gateways and provide additional annotations to enhance traffic governance and security protection. For more information, see [Advanced usage of MSE Ingress](/help/en/mse/user-guide/advanced-usage-of-mse-ingress#task-2229379).

## How an MSE Ingress gateway works

### Components

-   **MSE Ingress Controller**:
    
    -   MSE Ingress Controller is not a network data plane, but is a control plane that manages MSE cloud-native gateways and their configurations. MSE Ingress Controller does not process any service requests. MSE Ingress Controller works as a traffic bypass to manage MSE cloud-native gateways that process service requests.
        
    -   You must install MSE Ingress Controller in your ACK managed cluster, ACK Serverless cluster, or ACS cluster, use the MseIngressConfig CRDs provided by this component to manage cloud-native gateways based on annotations, and configure Ingress resource listening items for the gateways.
        
    -   For more information about how to install MSE Ingress Controller, see [Manage the MSE Ingress Controller component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-mse-ingress-controller-component).
        
-   **MSE cloud-native gateways**:
    
    MSE cloud-native gateways are created by MSE Ingress Controller based on the MseIngressConfig CRDs that you configured. An MSE cloud-native gateway consists of a control plane and a data plane.
    
    -   Control plane: Listens to resources such as Ingresses, Ingress classes, and services in your cluster. The resource configurations are internally parsed and then sent to the data plane of the gateway in real time.
        
    -   Data plane: Implements traffic governance. The data plane processes external requests based on the governance rules that are sent from the control plane, and routes the requests to the destination backend service.
        

### How it works

MSE Ingress Controller listens to the resource that is defined in an MseIngressConfig CRD in your cluster and dynamically maintains the lifecycle of the cloud-native gateway that corresponds to the resource and the association between the gateway and your cluster in real time.

The control plane of the cloud-native gateway obtains the changes in Ingress resources by using the API server of the associated cluster, and dynamically updates the routing rules of the gateway. After the cloud-native gateway receives a request, the gateway matches the request with an Ingress routing rule and routes the request to the pod that corresponds to the backend service based on the matched routing rule.

The following content describes the relationships among services, Ingresses, Ingress classes, MseIngressConfigs, and MSE Ingress Controller in a Kubernetes cluster.

-   **Service**: an abstraction of real backend services. One service can represent multiple identical backend services.
    
-   **Ingress**: a set of reverse proxy rules. An Ingress specifies the service to which HTTP requests or HTTPS requests are routed. For example, an Ingress routes requests to different services based on the hostnames and URLs in the requests.
    
-   **Ingress class**: a description of the Ingress processor. An Ingress class is used to declare the implementation of an Ingress processor in a Kubernetes cluster. The Ingress resources that are associated with the Ingress class are parsed by the Ingress processor. You must associate an MseIngressConfig with the Parameter field of the Ingress class to implement the traffic management rule that is specified in the parsed Ingress resource description.
    
-   **MseIngressConfig**: a CRD that is provided by MSE Ingress Controller. An MseIngressConfig CRD provides basic information about a cloud-native gateway.
    
-   **MSE Ingress Controller**: a control plane that manages MSE cloud-native gateways and their configurations. MSE Ingress Controller is not a network data plane. MSE Ingress Controller is used to listen to Ingress resources defined in MseIngressConfig CRDs in a cluster and coordinate MSE cloud-native gateways to implement the traffic management rule that is specified in the parsed Ingress resource description.
    

The following figure shows how MSE Ingress Controller works.

![ingress的应用场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1876125761/p524284.png)

## **References**

-   For more information about how to install MSE Ingress Controller, see [Manage the MSE Ingress Controller component](/help/en/mse/user-guide/manage-the-mse-ingress-controller-component#27c172d888agv).
    
-   For the release notes for MSE Ingress gateways, see [Release notes for MSE Ingress gateways](/help/en/mse/product-overview/mse-ingress-change-record#90e02ceec44cp).
