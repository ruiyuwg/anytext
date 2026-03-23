This topic describes Ingresses and the Application Load Balancer (ALB) Ingress controller, and how the ALB Ingress controller works.

## Ingress overview

In a Kubernetes cluster, an Ingress functions as an access point that exposes Services in the cluster. The Ingress distributes most of the network traffic that is destined for the Services in the cluster. An Ingress is a Kubernetes resource object that is used to enable external access to Services in a Kubernetes cluster. You can configure forwarding rules for an Ingress to route network traffic to backend pods of different Services.

## How the ALB Ingress controller works

The ALB Ingress controller retrieves the changes to Ingresses from the API server and dynamically generates AlbConfig objects when Ingresses changes are detected. Then, the ALB Ingress controller performs the following operations in sequence: create ALB instances, configure listeners, create Ingress rules, and configure backend server groups. The Services, the Ingresses, and the AlbConfigs object interact with each other in the following ways:

-   A Service is an abstraction of an application that is deployed in a group of replicated pods.
    
-   An Ingress contains reverse proxy rules. It controls the Services to which HTTP or HTTPS requests are routed. For example, an Ingress routes requests to different Services based on the hosts and URLs in the requests.
    
-   An AlbConfig is a custom resource definition (CRD) that the ALB Ingress controller uses to configure ALB instances and listeners. An AlbConfig object corresponds to one ALB instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8341667171/CAEQJhiBgICtr4Kf_xgiIDQ4ZmYwZTRlNjM2MTQyMjA4ZDkxMzYzOGQ4MzFmNzQ23963382_20230830144006.372.svg)

## How the ALB Ingress controller works

**Warning**

ALB instances that serve Ingresses are fully managed by the ALB Ingress controller. To prevent service interruptions caused by Ingress errors, we recommend that you do not modify these ALB instances in the ALB console. For more information about the quotas related to ALB, see [Functions and features](/help/en/slb/application-load-balancer/product-overview/functional-characteristics#section-5ra-dwn-lwx).

The ALB Ingress controller is compatible with the NGINX Ingress controller, and provides improved traffic routing capabilities based on ALB instances. The ALB Ingress controller supports complex routing, automatic certificate discovery, and HTTP, HTTPS, and QUIC protocols. The ALB Ingress controller meets the requirements of cloud-native applications for ultra-high elasticity and balancing of heavy traffic loads at Layer 7.

## References

-   [Access Services by using an ALB Ingress](/help/en/ack/serverless-kubernetes/user-guide/access-services-by-using-an-alb-ingress-2#task-2098039)
    
-   [Manage the ALB Ingress controller](/help/en/ack/serverless-kubernetes/user-guide/manage-the-alb-ingress-controller#task-2099154)
