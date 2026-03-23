APIG Ingress is the enterprise-grade Ingress solution built on the same core as Alibaba Cloud's open-source Higress project and MSE Cloud Native Gateway. It is built on the same core as MSE Cloud Native Gateway and is fully compatible with Nginx Ingress. APIG Ingress integrates with ACK managed clusters to provide powerful traffic management capabilities for cluster ingress.

## What is Ingress and why use APIG Ingress

In a Kubernetes cluster, an Ingress is a resource object that acts as an access point to expose internal services to external traffic. It provides Layer 7 load balancing and can handle most of the traffic destined for services within the cluster. You can configure an Ingress resource with forwarding rules that direct requests to the backend pods of different Services based on the request content.

Standard Ingress resources support only rules for HTTP traffic. They do not allow you to configure advanced features, such as load balancing algorithms or session affinity. These advanced features require an Ingress implementation, such as Nginx Ingress or APIG Ingress.

Compared with a standard Ingress controller, APIG Ingress provides more powerful traffic management capabilities. It is built on the same core as MSE Cloud Native Gateway and supports phased releases, flexible traffic governance, and comprehensive security protection. These capabilities meet the traffic governance requirements of large-scale, cloud-native distributed applications.

## APIG Ingress usage guides

-   [Manage the APIG Controller component](/help/en/api-gateway/cloud-native-api-gateway/user-guide/managing-apig-controller-components)
    
-   [Grant permissions to the APIG Controller](/help/en/api-gateway/cloud-native-api-gateway/user-guide/authorize-for-apig-controller)
    
-   [Access an ACK managed cluster through APIG Ingress](/help/en/api-gateway/cloud-native-api-gateway/user-guide/access-container-service-and-container-computing-through-apig-ingress)
    
-   [Annotations supported by APIG Ingress](/help/en/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-higress-ingress-gateways)
    
-   [Advanced usage of APIG Ingress](/help/en/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress)
    
-   [Comparison between Nginx Ingress and APIG Ingress gateways](/help/en/api-gateway/cloud-native-api-gateway/user-guide/comparison-between-nginx-ingress-gateways-and-apig-ingress-gateways)
    
-   [Configure ApigConfig](/help/en/api-gateway/cloud-native-api-gateway/user-guide/configure-apigconfig)
    

## APIG Ingress in ACK

ACK managed clusters use APIG Ingress to route external traffic to internal services, which provides Layer 7 load balancing. After you deploy the APIG Controller in a cluster, the component listens for ApigConfig resources. It dynamically manages the lifecycle and configuration of the underlying cloud-native API gateway instances (powered by MSE Cloud Native Gateway), as well as listener options for Ingress resources. The cloud-native API gateway listens for Ingress resources in the Kubernetes cluster and transforms them into the required traffic governance configurations to expose internal services. For more information, see [Access an ACK managed cluster through APIG Ingress](/help/en/api-gateway/cloud-native-api-gateway/user-guide/access-container-service-and-container-computing-through-apig-ingress).

Standard Kubernetes Ingress supports only simple HTTP traffic management. Advanced capabilities are typically added using annotations. APIG Ingress is compatible with Nginx Ingress annotations and introduces additional annotations to enhance traffic governance and security protection. For more information, see [Advanced usage of APIG Ingress](/help/en/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress).

## Architecture and components

### Components

-   **APIG Controller**:
    
    -   The APIG Controller is a control plane, not a network data plane. It manages cloud-native API gateway instances and their configurations. The APIG Controller does not process any service traffic. It operates in bypass mode and manages the cloud-native API gateway instances that handle the actual service traffic.
        
    -   In the cluster, you can [install the APIG Controller component](/help/en/api-gateway/cloud-native-api-gateway/user-guide/managing-apig-controller-components). You can use the ApigConfig Custom Resource Definition (CRD) provided by the component to declaratively manage cloud-native API Gateway instances and set the listener options of the gateway for Ingress resources.
        
-   **Cloud-native API gateway**:
    
    The APIG Controller creates the cloud-native API gateway based on the configured ApigConfig resource. The gateway consists of a control plane and a data plane.
    
    -   Control plane: The control plane listens for resources such as Ingress, IngressClass, and Service in the associated container service cluster. It parses these resources and sends the resulting configurations to the data plane in real time.
        
    -   Data plane: The data plane implements the traffic governance configurations. It processes external requests based on the rules from the control plane and forwards the requests to the backend target services.
        

### How it works

The APIG Controller listens for ApigConfig resources created in the cluster. It dynamically maintains the lifecycle of the corresponding cloud-native API gateway instance and the association between the gateway and the container service cluster in real time.

The control plane of the cloud-native API gateway retrieves Ingress resource changes from the API server of the associated container service cluster. It then dynamically updates the routing rules for the gateway. When the cloud-native API gateway receives a request, it matches the request with the Ingress forwarding rules and forwards it to the pods of the corresponding backend Service.

In Kubernetes, the relationship between Service, Ingress, IngressClass, ApigConfig, and the APIG Controller is as follows:

-   **Service**: An abstraction of a real backend service. A Service can represent multiple identical backend services.
    
-   **Ingress**: A set of reverse proxy rules that specify which Service an HTTP or HTTPS request should be forwarded to. For example, requests can be forwarded to different services based on the host and URL path in the request.
    
-   **IngressClass**: Describes an Ingress processor implementation in a Kubernetes cluster. Ingress resources associated with this IngressClass are parsed by that processor. You must also use the Parameter field of the IngressClass to associate an ApigConfig (a cloud-native API gateway). This gateway then implements the traffic management rules described in the parsed Ingress resource.
    
-   **ApigConfig**: A CRD provided by the APIG Controller. It describes the basic information of a cloud-native API gateway instance.
    
-   **APIG Controller**: Not a network data plane, but a control plane that manages cloud-native API gateway instances and configurations. The APIG Controller listens for ApigConfig resources in the cluster and coordinates the cloud-native API gateway instance to implement the traffic management rules described in the Ingress resources.
    

## **References**

-   For information about how to install the APIG Controller, see [Manage the APIG Controller component](/help/en/api-gateway/cloud-native-api-gateway/user-guide/managing-apig-controller-components).
    
-   For more information about the regions where APIG Ingress is available, see [Supported regions](/help/en/api-gateway/cloud-native-api-gateway/product-overview/regions).
