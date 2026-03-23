Open source projects are useful for extending the features of Kubernetes clusters. This topic provides a list of open source projects that are commonly used together with Container Service for Kubernetes (ACK).

    

Category

Project name

Description

Project address

References

Key components

Kubernetes Cloud Controller Manager for Alibaba Cloud

Allows you to balance traffic for applications and manage the route entries of nodes.

[Cloud-Provider-Alibaba-Cloud](https://github.com/kubernetes/cloud-provider-alibaba-cloud)

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb "This topic introduces cloud controller manager (CCM) and provides usage notes and release notes for the component.")

Networking

Terway CNI Network Plugin

An ACK network plug-in that allows you to set up container networks by associating Alibaba Cloud elastic network interfaces (ENIs) with pods.

[Terway](https://github.com/AliyunContainerService/terway)

[Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447 "Terway is an open source Container Network Interface (CNI) plug-in developed by Alibaba Cloud. Terway works with Virtual Private Cloud (VPC) and allows you to use standard Kubernetes network policies to regulate how containers communicate with each other. You can use Terway to enable internal communication within a Kubernetes cluster. This topic describes how to use Terway in a Container Service for Kubernetes (ACK) cluster.")

NGINX Ingress Controller

Functions as a reserve proxy server to provide Layer 4 and Layer 7 load balancing capabilities.

[Ingress-Nginx](https://github.com/AliyunContainerService/ingress-nginx)

[NGINX Ingress Controller](https://github.com/AliyunContainerService/ingress-nginx/blob/master/README.md)

ExternalDNS

Uses Alibaba Cloud DNS PrivateZone to provide dynamic DNS resolution services.

[External-DNS](https://github.com/kubernetes-sigs/external-dns)

[ExternalDNS](https://github.com/kubernetes-sigs/external-dns/blob/master/README.md)

Storage

Alibaba Cloud Kubernetes CSI plug-in

An ACK volume plug-in that allows you to manage the lifecycle of volumes.

[Alibaba-Cloud-CSI-Driver](https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver)

[CSI overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#concept-2005339 "Container Service for Kubernetes (ACK) provides container storage services based on the Container Storage Interface (CSI) plug-in. CSI enables the integration with Elastic Block Storage (EBS), Apsara File Storage NAS (NAS), Cloud Paralleled File System (CPFS), Object Storage Service (OSS), and local disks of Alibaba Cloud. CSI also enables the compatibility with native Kubernetes storage services, such as emptyDir, HostPath, Secret, and ConfigMap. This topic describes the overview, features, and limits of the CSI plug-in, and the permissions that are required to use the CSI plug-in.")

Alibaba Cloud Kubernetes FlexVolume plug-in

An ACK volume plug-in that allows you to mount and unmount volumes (for Kubernetes 1.16 and earlier).

[Flexvolume](https://github.com/AliyunContainerService/flexvolume)

[FlexVolume overview](/help/en/ack/flexvolume-overview#concept-vgg-45s-vdb "Container Service for Kubernetes (ACK) clusters can be automatically bound to Alibaba Cloud disks, Apsara File Storage NAS (NAS) file systems, and Object Storage Service (OSS) buckets that are mounted to pods. This topic describes the storage services that are supported by ACK and how to use the services.")

Alibaba Cloud disk volume provision controller

A volume plug-in that allows you to create and delete disk volumes (for Kubernetes 1.16 and earlier).

[Alicloud-Storage-Provisioner](https://github.com/AliyunContainerService/alicloud-storage-provisioner)

[Alibaba Cloud disk volume provision controller](https://github.com/AliyunContainerService/alicloud-storage-provisioner/blob/master/README.md)

Resource optimization

Node-Resource-Manager

Manages nodes and monitors components.

[Node-Resource-Manager](https://github.com/AliyunContainerService/node-resource-manager)

None

Elasticity

Kubernetes-CronHPA-Controller

A component that allows you to perform horizontal scaling for pods based on a schedule.

[Kubernetes-CronHPA-Controller](https://github.com/AliyunContainerService/kubernetes-cronhpa-controller)

[CronHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cronhpa#task-2391975 "To avoid resource wasting in some scenarios, Container Service for Kubernetes (ACK) provides the kubernetes-cronhpa-controller component to automatically scale resources based on predefined schedules. This topic describes how to use Cron Horizontal Pod Autoscaler (CronHPA) to scale your workloads based on a schedule. This topic also describes how to enable CronHPA and Horizontal Pod Autoscaler (HPA) to interact without conflicts.")

Kubernetes Autoscaler

A component that allows you to perform horizontal scaling for nodes.

[Autoscaler](https://github.com/kubernetes/autoscaler)

[Auto scaling of nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes#task-1893824 "Container Service for Kubernetes (ACK) provides the auto scaling component (cluster-autoscaler) to automatically scale nodes. Regular instances, GPU-accelerated instances, and preemptible instances can be automatically added to or removed from an ACK cluster to meet your business requirements. This component supports multiple scaling modes, various instance types, and instances that are deployed across zones. This component is applicable to diverse scenarios.")

Security

KMS provider plugin for Alibaba Cloud

Allows you to encrypt Kubernetes Secrets that are stored in disks by using Key Management Service (KMS).

[Ack-KMS-Plugin](https://github.com/AliyunContainerService/ack-kms-plugin)

[Use KMS to encrypt Kubernetes Secrets](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2#task-2568562 "In Container Service for Kubernetes (ACK) Pro clusters, you can use keys that are created in Key Management Service (KMS) to encrypt Kubernetes Secrets. This topic describes how to use a key that is managed by KMS to encrypt Secrets for an ACK Pro cluster.")

Kube2ram

Deploys DaemonSets that function as proxies for ECS-linked Resource Access Management (RAM) roles. Kube2ram maps different RAM roles to pods that run on ACK.

[Kube2ram](https://github.com/AliyunContainerService/kube2ram)

[Kube2ram](https://github.com/AliyunContainerService/kube2ram/blob/master/README.md)

ACK RAM Authenticator for Kubernetes

Allows the API server to verify the identities of users based on the RAM roles that the users assume.

[ACK-RAM-Authenticator](https://github.com/AliyunContainerService/ack-ram-authenticator)

[Use RAM roles to perform identity verification for ACK clusters](https://developer.aliyun.com/article/712178)

ACK Secret Manager

Allows you to import and synchronize keys in KMS Secrets Manager in real time.

[ACK Secret Manager](https://github.com/AliyunContainerService/ack-secret-manager)

[ACK Secret Manager](https://github.com/AliyunContainerService/ack-secret-manager/blob/master/README.md)

SGX-Device-Plugin

A Kubernetes device plug-in that is used to expand Enclave Page Cache (EPC) memory on Software Guard Extension (SGX) devices in confidential computing scenarios.

[SGX-Device-Plugin](https://github.com/AliyunContainerService/sgx-device-plugin)

[SGX-Device-Plugin](/help/en/ack/product-overview/sgx-device-plugin#task-1930888 "This topic describes the features of sgx-device-plugin and lists the latest changes to the component.")

Migration

Derrick

An open source S2I tool that can inspect your workspace and automatically generates Dockerfiles and templates.

[Derrick](https://github.com/alibaba/DERRICK)

[Derrick](https://github.com/alibaba/derrick/wiki)

Velero

A cloud-native tool that is used to back up, restore, and migrate applications.

[Velero-Plugin](https://github.com/AliyunContainerService/velero-plugin)

[Velero-Plugin](https://github.com/AliyunContainerService/velero-plugin/blob/master/README.md)

Image Build Specification of Alibaba Cloud Container Service for Kubernetes (ACK)

A tool that is used to create custom container images.

[ACK-Image-Builder](https://github.com/AliyunContainerService/ack-image-builder)

[Use a custom image to create an ACK cluster](/help/en/ack/use-a-custom-image-to-create-an-ack-cluster#task-2362493 "If you migrate a user-created Kubernetes cluster to an ACK cluster, we recommend that you use the default system image and default system services to create the ACK cluster. However, you can also use a custom image to create ACK clusters based on your business requirements. This topic describes how to use a custom image to create an ACK cluster.")

AI

Arena

A command-line interface that allows you to manage machine learning tasks in an easy way. Arena streamlines data preparation, model development, model training, and model prediction throughout the entire lifecycle of a machine learning task.

[Arena](https://github.com/kubeflow/arena)

[Arena](https://github.com/kubeflow/arena/blob/master/README.md)

GPU Sharing Scheduler Extender in Kubernetes

The first GPU sharing scheduler in the industry.

[GPU Share-Scheduler-Extender](https://github.com/AliyunContainerService/gpushare-scheduler-extender)

[GPU Share-Scheduler-Extender](https://github.com/AliyunContainerService/gpushare-scheduler-extender/blob/master/README.md)

Fluid

An open source, Kubernetes-native, and distributed dataset orchestration and acceleration engine.

[Fluid](https://github.com/fluid-cloudnative/fluid)

[Fluid](https://github.com/fluid-cloudnative/fluid/blob/master/README.md)

Application management

Kube-eventer

An open source tool that is used to collect Kubernetes events. It can sink these events to a variety of services such as Kafka, MySQL, DingTalk, and Lark.

[Kube-Eventer](https://github.com/AliyunContainerService/kube-eventer)

[Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#task-1461430 "Event monitoring is a monitoring method provided by Kubernetes. It provides improvements over resource monitoring in terms of timeliness, accuracy, and scenarios. You can use node-problem-detector with the Kubernetes event center of Log Service to sink cluster events, and configure node-problem-detector to diagnose clusters and send error events to sinks. You can sink cluster events to DingTalk, Log Service, and EventBridge. This allows you to monitor exceptions and issues in clusters in real time.")

Alibaba-Cloud-Metrics-Adapter

A component that collects metrics for pod scaling.

[Alibaba-Cloud-Metrics-Adapter](https://github.com/AliyunContainerService/alibaba-cloud-metrics-adapter)

[Alibaba-Cloud-Metrics-Adapter](https://github.com/AliyunContainerService/alibaba-cloud-metrics-adapter/blob/master/README.md)

OpenKruise

Automates applications management. It supports in-place upgrades and sidecar management, and allows you to efficiently and reliably deploy applications.

[Kruise](https://github.com/openkruise/kruise)

[What is OpenKruise?](https://openkruise.io/)

Open Application Model Specification

An open application model specification that provides standards and high-level abstractions for defining and managing cloud-native applications.

[Open Application Model](https://github.com/oam-dev/spec)

[Open Application Model Specification](https://github.com/oam-dev/spec/blob/master/README.md)

KubeVela

An easy-to-use and highly extensible platform engine for application management.

[KubeVela](https://github.com/oam-dev/kubevela)

[Quick Start](https://kubevela.io/#/en/quick-start)

Scheduling

Scheduler Plugins

A repository of schedulers that are extended from the Kubernetes scheduling framework. These schedulers support complex scenarios such as AI-assisted computing and big data computing.

[Scheduler Plugins](https://github.com/kubernetes-sigs/scheduler-plugins)

[Scheduler Plugins](https://github.com/kubernetes-sigs/scheduler-plugins/blob/master/README.md)
