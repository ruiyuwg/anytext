Knative is an open-source and Kubernetes-based platform for serverless applications. Knative helps you deploy and manage serverless workloads and build enterprise-class platforms for serverless workloads. ACK Serverless is integrated with Knative. To use cloud resources by calling the Knative API, you need only to create an ACK Serverless cluster and enable Knative for it. In this case, you do not need to pay for the Knative controller.

## Benefits of ACK Serverless Knative

**Open-source Knative**

**ACK Serverless Knative**

By default, Istio gateways are used. Therefore, you must pay for the infrastructure resources that are used to install Istio controllers.

You do not need to pay for the Knative controller.

You are charged for the infrastructure resources that are used to install the Knative controller.

A cold start occurs when you create a pod in an ACK Serverless cluster. Open-source Knative uses the scale-to-zero mechanism to reduce costs. However, during the cold start, the cluster may fail to process requests due to session timeout.

ACK Serverless Knative does not scale the number of instances to zero during off-peak hours. Instead, ACK Serverless uses reserved instances. [Reserved instances](/help/en/ack/serverless-kubernetes/user-guide/reserved-instances#concept-1956246) can be used to avoid cold starts at low costs.

## Resource management in Knative

ACK Serverless hosts serverless applications and provides an easy way to use Kubernetes. You can directly deploy containerized applications in ACK Serverless clusters without the need to purchase nodes. The following list describes the benefits of using Knative to manage resources:

-   You can use Knative to manage applications in ACK Serverless clusters.
    
-   Knative automatically requests pod resources from ACK Serverless clusters.
    

The Knative Serving controller is integrated with ACK Serverless. To use cloud resources by calling Knative API operations, you need only to create an ACK Serverless cluster and enable Knative for the cluster. You are not charged for the Knative controller.

## Knative Gateway

By default, open-source Knative provides multiple Ingress gateway solutions, such as Istio, Gloo, Contour, Kourier, and Ambassador. Among these solutions, Istio is most frequently used. This is because Istio also functions as a service mesh. Each ACK Serverless cluster must contain at least two resident gateway instances. The two instances provide backup for each other to ensure high availability. The gateway controllers must be resident. You must pay infrastructure and O&M fees for these resident resources.

To improve user experience, Alibaba Cloud allows you to use Application Load Balancer (ALB) instances as Knative Ingress gateways. Knative Gateway provides gateway capabilities required by ACK Serverless clusters and is as stable and reliable as cloud services. Resident resources are not required. This reduces infrastructure costs and O&M workloads.

## Reserved instances

By default, open-source Knative scales the number of instances to zero during off-peak hours. However, the cold start latency, which is to scale from zero to one instance, remains challenging due to factors such as resource allocation, pod scheduling, image pulling, and application initialization overhead.

Unlike open-source Knative, ACK Serverless Knative does not scale the number of instances to zero during off-peak hours. Instead, ACK Serverless Knative reserves one instance. The following content describes how reserved instances work:

-   ACK Serverless Knative uses burstable instances to replace compute optimized instances during off-peak hours. When requests are received, ACK Serverless switches back to compute optimized instances. This mechanism reduces costs during off-peak hours.
    
-   CPU credits that are accumulated during off-peak hours can be used during peak hours to reduce costs.
    

## Deploy Knative components in a Kubernetes cluster

You can deploy Knative in ACK Serverless clusters.

-   If the version of your ACK Serverless cluster is 1.16 or later, you can [deploy Knative](/help/en/ack/enable-knative-3#task-1956927) in the Container Service for Kubernetes (ACK) console.
    
-   Make sure that the version of the cluster is 1.16 or later.
    

## Billing

If you use ACK Serverless Knative, you are charged only for cloud resources that are used to manage your ACK Serverless cluster. The cloud resources include elastic container instances, SLB instances, and NAT gateways. These resources are charged based on corresponding [billing rules](/help/en/eci/product-overview/billing-overview#topic-1860085).
