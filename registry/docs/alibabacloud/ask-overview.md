This topic describes ACK Serverless and its benefits, use scenarios, and key features to help you quickly get started with ACK Serverless clusters. This topic also compares ACK Serverless clusters with ACK clusters.

**Important**

Starting February 17, 2025, Alibaba Cloud Container Service for Kubernetes (ACK) Serverless disables cluster creation for new users who have never created an ACK Serverless cluster. Instead, you can leverage serverless container computing capabilities through Container Compute Service (ACS). ACS clusters provide full lifecycle management for enterprise-level Kubernetes containerized applications, delivering enhanced features and more convenient services. For more information about ACS, see [ACS product overview](/help/en/cs/product-overview/product-introduction).

-   For users who have not created an ACK Serverless cluster, the interface for creating a new ACK Serverless cluster is unavailable. To use Serverless container computing capabilities:
    
    -   [Create an ACS cluster](/help/en/cs/user-guide/create-an-acs-cluster) and leverage Serverless resources within it.
        
    -   [Use Serverless computing elastically](/help/en/cs/user-guide/access-acs-computing-power-in-an-ack-cluster) in ACK Managed Cluster Pro Edition.
        
-   For existing ACK Serverless cluster users, your current ACK Serverless clusters and new cluster creation within default quotas remain unaffected. You can continue operations as documented, with no service interruptions or adjustments required.
    

For more information about this product change, see [\[Product Changes\] Announcement on deprecation of cluster creation interface for new users of ACK Serverless clusters](/help/en/ack/product-overview/product-change-announcement-on-deprecation-of-cluster-creation-interface-for-ack-serverless-clusters).

## Overview

ACK Serverless is a serverless container service provided by Alibaba Cloud. ACK Serverless clusters provided by ACK Serverless are nodeless. You can deploy applications without the need to plan, purchase, or maintain nodes. You are charged for CPU and memory resources allocated to applications on a pay-as-you-go basis. ACK Serverless clusters provide Kubernetes-compatible capabilities to allow beginners to focus on applications instead of infrastructure management.

ACK Serverless clusters are classified into ACK Serverless Basic clusters and ACK Serverless Pro clusters. ACK Serverless Pro clusters are developed based on ACK Serverless Basic clusters and provide improved security and reliability for large-scale production. ACK Serverless clusters are also covered by the service level agreement (SLA) that supports compensation clauses. For more information about ACK Serverless Pro clusters, see [ACK Serverless Pro cluster overview](/help/en/ack/serverless-kubernetes/user-guide/ask-pro-cluster-overview#concept-2122705).

## Benefits

**Benefit**

**Description**

Out-of-the-box

You can quickly create ACK Serverless clusters and deploy applications in ACK Serverless clusters without the need to manage Kubernetes nodes and servers.

Ultralarge capacity

You can create more than 50,000 pods in an ACK Serverless cluster without the need to add additional configurations or design the size of the cluster.

**Important**

If many pods are associated with a Service, we recommend keeping the number of pods below 20,000.

Second-level scaling

You can create thousands of pods within a short period of time to handle traffic spikes.

Predictive scaling

ACK Serverless can predict resource demand based on historical data and then scale resources promptly during peak hours.

Compatibility with cloud-native services

ACK Serverless is fully compatible with Kubernetes and supports Kubernetes-native applications and ecosystems. You can seamlessly migrate Kubernetes applications to ACK Serverless.

Isolation for security

You can deploy pods on [Elastic Container Instance (ECI)](/help/en/ack/serverless-kubernetes/user-guide/overview-of-elastic-container-instances#task-2423216). Instances on which pods are deployed are isolated from each other by using the lightweight virtual sandbox technology.

Cost savings

Pods are created on demand. You are charged based on the resources used by your applications. The serverless architecture helps prevent resource waste and reduce O&M costs.

Service integration

You can seamlessly integrate containerized applications with the fundamental services of Alibaba Cloud. Containers can communicate with applications deployed on virtual machines.

[ACK Serverless Pro clusters](/help/en/ack/serverless-kubernetes/user-guide/ask-pro-cluster-overview#concept-2122705)

Compared with ACK Serverless Basic clusters, ACK Serverless Pro clusters are more reliable, ensure higher service uptime, and allow you to deploy more pods. You can seamlessly migrate applications from ACK Serverless Basic clusters to ACK Serverless Pro clusters.

## Comparison between ACK Serverless clusters and ACK clusters

The following figure compares the left-side ACK cluster with the right-side ACK Serverless cluster.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6353725671/CAEQTxiBgIDAouG51xkiIDU3MzNiNmI0NzlhMTRjMmQ5MWQ5ZTkwY2ZmZGUzMWI53963382_20230830144006.372.svg)

## Use scenarios

**Scenario**

**Description**

Application hosting

In ACK Serverless clusters, you do not need to manage or maintain nodes or plan the cluster size. This greatly reduces the costs on infrastructure management and maintenance.

Traffic spikes

For fluctuating workloads in industries such as online education and e-commerce, ACK Serverless clusters can scale resources within seconds to help you reduce computing costs, prevent resource waste, and withstand traffic spikes. For more information, see [Auto scaling overview](/help/en/ack/serverless-kubernetes/user-guide/auto-scaling-overview#concept-1962638).

Data computing

To handle computing jobs such as Spark jobs, ACK Serverless clusters can start large numbers of pods within a short period of time and release pods immediately after the jobs are complete to reduce computing costs. For more information, see [Use ACK Serverless to create Spark tasks](/help/en/ack/serverless-kubernetes/use-cases/use-ask-to-create-spark-tasks#task-2495864).

CI/CD

You can use ACK Serverless clusters to build a continuous integration (CI) environment, such as Jenkins or Gitlab-Runner, to quickly compile application code, build and push images, and create pipelines. CI jobs are isolated from each other. You do not need to maintain resource pools, which reduces computing costs. For more information, see [Deploy Jenkins in an ACK Serverless cluster and then create and deploy an application](/help/en/ack/serverless-kubernetes/use-cases/deploy-jenkins-in-an-ask-cluster-and-then-create-and-deploy-an-application) and [Elastic and cost-effective CI/CD based on ACK Serverless](/help/en/ack/elastic-and-cost-effective-ci-cd-based-on-ask#task-2404873).

CronJobs

You can run CronJobs in ACK Serverless clusters. The billing stops after the jobs are complete. You do not need to maintain resource pools, which helps prevent resource waste. For more information, see [Use CronHPA for scheduled horizontal scaling](/help/en/ack/serverless-kubernetes/user-guide/cronhpa#task-2391975).

## Key features

ACK Serverless clusters provide Kubernetes-compatible capabilities. In addition to Kubernetes-native features, we recommend that you pay attention to the following features when you use ACK Serverless clusters.

### ECI Profile

Pods in ACK Serverless clusters run on [ECI](/help/en/ack/serverless-kubernetes/user-guide/overview-of-elastic-container-instances#task-2423216). You can [configure ECI Profile](/help/en/ack/configure-elastic-container-instance-profile#topic-2073229) to control pods and pod-related cluster actions in a fine-grained manner. ECI Profile is a ConfigMap named eci-profile in the kube-system namespace. The following table describes the key parameters.

**Parameter**

**Description**

vpcId

The unique identifier of the [virtual private cloud (VPC)](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb) in which pods are deployed.

securityGroupId

The unique identifier of the [Security groups](/help/en/vpc/user-guide/security-group/#concept-o2y-mqw-ydb) of the VPC.

vSwitchIds

The unique identifier of the [vSwitch](/help/en/vpc/user-guide/overview-of-vpcs-and-vswitches/#concept-sgp-twv-dgb) in the VPC. Separate multiple vSwitch IDs with commas (,). Virtual nodes are generated based on vSwitches.

selectors

The pod selector. The pod selector can select pods based on namespaces or labels, and automatically add annotations or labels.

enableClusterIp

Specifies whether to use the ClusterIP. Default value: true.

enableLogController

Specifies whether to enable the Alibaba Cloud log controller. Default value: false.

enablePVCController

Specifies whether to enable the persistent volume claim (PVC) controller. Default value: false.

enablePrivateZone

Specifies whether to enable the service discovery feature of PrivateZone. Default value: false.

featureGates

Specifies whether to enable feature gates.

For more information, see [ECI overview](/help/en/ack/serverless-kubernetes/user-guide/overview-of-elastic-container-instances#task-2423216).

### Virtual nodes

When you use ACK Serverless clusters, you do not need to manage nodes. To ensure that ACK Serverless clusters are compatible with Kubernetes-native features, you can still find virtual nodes in ACK Serverless clusters. Virtual nodes in ACK Serverless clusters can provide ultra-large computing resources to handle traffic fluctuations. Virtual nodes are generated based on the `vSwitchIds` parameter in the eci-profile ConfigMap. Virtual nodes do not occupy any computing resources.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6353725671/CAEQTxiBgICE1deJ2BkiIGE4ODAyY2QwMTJkODRiZTM4MDMxNDYzZDgyZDBjYWEz3963382_20230830144006.372.svg)

### Pod configurations

You can customize pods in ACK Serverless clusters by adding annotations to pods. The following table describes the annotations.

**Important**

-   The annotations described in the following table are applicable only to the pods that are scheduled to virtual nodes. These pods run on ECI. The annotations cannot be added to the pods that are scheduled to regular nodes.
    
-   Add annotations to the `metadata` field of the pods. For example, when you configure a Deployment, add annotations in the `spec.template.metadata field`.
    
-   Pod annotations have a higher priority than the settings that correspond to the same feature in the ECI Profile.
    

**Annotation**

**Example**

**Description**

**References**

k8s.aliyun.com/eci-security-group

sg-bp1dktddjsg5nktv\*\*\*\*

The ID of the security group.

[Assign security groups to an ECI](/help/en/eci/user-guide/assign-a-security-group-2#topic-1918283)

k8s.aliyun.com/eci-vswitch

vsw-bp1xpiowfm5vo8o3c\*\*\*\*

The IDs of the vSwitches. You can specify multiple vSwitches across zones.

[Configure multiple zones to create an ECI-based pod](/help/en/eci/user-guide/specify-multiple-zones-to-create-an-elastic-container-instance#topic-1876030)

k8s.aliyun.com/eci-schedule-strategy

vSwitchOrdered

The multi-zone scheduling policy. Valid values:

-   vSwitchOrdered: Resources in the specified zones are scheduled in the order in which the vSwitches are specified.
    
-   vSwitchRandom: Resources in the specified zones are scheduled in a random manner.
    

k8s.aliyun.com/eci-ram-role-name

AliyunECIContainerGroupRole

The Resource Access Management (RAM) role that ECI assumes to access other Alibaba Cloud services.

[Configure RAM roles](/help/en/eci/user-guide/pod-annotations-1#section-7be-tel-tpu)

k8s.aliyun.com/eci-use-specs

2-4Gi,4-8Gi,ecs.c6.xlarge

The ECI specification. You can specify multiple specifications, such as the number of CPU cores and the memory size. You can also specify an ECS instance type.

[Specify multiple instance specifications to create an ECI](/help/en/eci/user-guide/specify-multiple-specifications-to-create-an-elastic-container-instance#topic-1860149)

k8s.aliyun.com/eci-spot-strategy

SpotAsPriceGo

The bidding policy of the preemptible instance. Valid values:

-   SpotAsPriceGo: The instance is billed at the market price at the time of purchase.
    
-   SpotWithPriceLimit: You must specify the highest price that you want to pay for the preemptible instance.
    

[Create a preemptible ECI](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance#topic-1876161)

k8s.aliyun.com/eci-spot-price-limit

0.5

The highest price of the preemptible instance.

**Note**

This parameter is valid only if k8s.aliyun.com/eci-spot-strategy is set to SpotWithPriceLimit.

k8s.aliyun.com/eci-cpu-option-core

2

The number of physical CPU cores.

[Specify CPU options](/help/en/eci/customize-cpu-options#topic-2020903)

k8s.aliyun.com/eci-cpu-option-ht

1

The number of threads per core.

k8s.aliyun.com/eci-reschedule-enable

"true"

Specifies whether to enable the rescheduling feature for ECI.

[ECI Pod Annotation](/help/en/ack/eci-pod-annotation#section-vdd-xk3-ppb)

k8s.aliyun.com/pod-fail-on-create-err

"true"

Specifies whether to set the status of the ECI to `Failed` if pods fail to be created on the ECI.

[ECI Pod Annotation](/help/en/ack/eci-pod-annotation#section-z7f-6a1-66z)

k8s.aliyun.com/eci-image-snapshot-id

imc-2zebxkiifuyzzlhl\*\*\*\*

The ID of the image cache.

**Note**

To use an image cache to create an ECI, specify the image cache you want to use or enable automatic matching for image caches. We recommend enabling automatic matching for image caches.

[Use ImageCache to accelerate the creation of pods](/help/en/eci/user-guide/use-imagecache-to-accelerate-the-creation-of-pods#topic-1860150)

k8s.aliyun.com/eci-image-cache

"true"

Specifies whether to enable automatic matching for image caches.

**Note**

To use an image cache to create an ECI, specify the image cache that you want to use or enable automatic matching for image caches. We recommend enabling automatic matching for image caches.

k8s.aliyun.com/acr-instance-id

cri-j36zhodptmyq\*\*\*\*

The ID of the Container Registry Enterprise Edition instance.

You can specify a Container Registry Enterprise Edition instance that resides in a region different from the region of the ECI. To do this, you must add the region name of the Container Registry Enterprise Edition instance before the ID of the Container Registry Enterprise Edition instance. Example: cn-beijing:cri-j36zhodptmyq\*\*\*\*.

[Pull images from a Container Registry Enterprise Edition instance without using a secret](/help/en/eci/user-guide/pull-images-from-a-container-registry-enterprise-edition-instance-without-using-a-secret-2#topic-1986148)

k8s.aliyun.com/eci-eip-instanceid

eip-bp1q5n8cq4p7f6dzu\*\*\*\*

The ID of the elastic IP address (EIP).

[Associate an EIP with an ECI](/help/en/eci/user-guide/enable-internet-access#section-9su-qdv-b58)

k8s.aliyun.com/eci-with-eip

"true"

Specifies whether to automatically create an EIP and associate the EIP with the pod.

k8s.aliyun.com/eip-bandwidth

5

The bandwidth value for the EIP.

k8s.aliyun.com/eip-common-bandwidth-package-id

cbwp-2zeukbj916scmj51m\*\*\*\*

The ID of the EIP bandwidth plan.

k8s.aliyun.com/eip-isp

BGP

The line type for the EIP. This annotation is applicable only to pay-as-you-go EIPs. Valid values:

-   BGP: BGP (Multi-ISP) lines
    
-   BGP\_PRO: BGP (Multi-ISP) Pro lines
    

k8s.aliyun.com/eip-internet-charge-type

PayByBandwidth

The metering method of the EIP. Valid values:

-   PayByBandwidth: Fees are charged based on bandwidth usage.
    
-   PayByTraffic: pay-by-data-transfer
    

k8s.aliyun.com/eci-enable-ipv6

"true"

Specifies whether to assign an IPv6 address to the instance.

[Assign an IPv6 address to an ECI-based pod](/help/en/eci/user-guide/assign-an-ipv6-address-to-an-elastic-container-instance#topic-1860116)

k8s.aliyun.com/eci-ipv6-bandwidth-enable

"true"

Specifies whether to enable Internet access to the pod over IPv6 addresses.

k8s.aliyun.com/eci-ipv6-bandwidth

100M

The maximum public bandwidth of the IPv6 address.

kubernetes.io/ingress-bandwidth

40M

The inbound bandwidth.

[Limit the inbound and outbound bandwidth of an ECI](/help/en/eci/user-guide/limit-the-bandwidth-of-an-elastic-container-instance#topic-1999563)

kubernetes.io/egress-bandwidth

20M

The outbound bandwidth.

k8s.aliyun.com/eci-extra-ephemeral-storage

50Gi

The temporary storage capacity.

[Scale up the temporary storage space](/help/en/eci/user-guide/increase-the-capacity-of-the-temporary-storage-space-1#topic-2043552)

k8s.aliyun.com/eci-eviction-enable

"true"

Specifies whether to automatically evict pods that do not have sufficient temporary storage space from ECI.

[Automatically evict pods whose temporary storage spaces are insufficient](/help/en/eci/automatically-evict-pods-whose-temporary-storage-spaces-are-insufficient#topic-2217732)

k8s.aliyun.com/eci-core-pattern

/pod/data/dump/core

The directory in which core dump files are stored.

[Analyze application exceptions with coredumps](/help/en/eci/user-guide/use-coredump-to-analyze-instance-program-exceptions-1#topic-1891689)

k8s.aliyun.com/eci-ntp-server

100.100.\*.\*

The IP address of the Network Time Protocol (NTP) server.

[Configure the NTP service](/help/en/eci/user-guide/configure-the-ntp-service-1#topic-1860142)

k8s.aliyun.com/plain-http-registry

"harbor\*\*\*.pre.com,192.168.XX.XX:5000,reg\*\*\*.test.com:80"

The IP address of the self-managed image repository.

When you create an ECI by using an image in a self-managed image repository that uses the HTTP protocol, you must specify this parameter. This allows ECI to pull the image over HTTP and prevents image pull failures due to the use of different protocols.

[Pull an image from a self-managed image repository](/help/en/eci/user-guide/use-self-managed-image-repositories#topic-2161955)

k8s.aliyun.com/insecure-registry

"harbor\*\*\*.pre.com,192.168.XX.XX:5000,reg\*\*\*.test.com:80"

The domain name of the self-managed image repository.

When you create an ECI by using an image in a self-managed image repository that uses a self-signed certificate, you must add this annotation to the instance to skip the certificate authentication. This prevents image pull failures due to certificate authentication failures.

For more information, see [ECI Pod Annotation](/help/en/ack/serverless-kubernetes/user-guide/overview-of-elastic-container-instances#section-lzk-fxi-dkt).

### Network management

By default, ECI-based pods use the host network mode. Each pod must be assigned an elastic network interface (ENI) by the vSwitch. This enables communications with the Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in the VPC in which the cluster is deployed.

**Item**

**Description**

Service

-   You can create ClusterIP and LoadBalancer Services.
    
-   You cannot create NodePort Services, and you cannot enable Session Affinity.
    
    **Note**
    
    ACK Serverless clusters do not support node-relevant features.
    

Ingress

-   SLB Ingress: supports Layer 7 traffic forwarding based on Server Load Balancer (SLB) instances without controllers. For more information, see [Ingress demo](https://github.com/AliyunContainerService/serverless-k8s-examples/tree/master/ingress-alb).
    
-   NGINX Ingress: allows you to create NGINX Ingresses after nginx-ingress-controller is deployed. For more information, see [ingress-nginx demo](https://github.com/AliyunContainerService/serverless-k8s-examples/tree/master/ingress-nginx).
    

Service discovery

To use the service discovery feature within a cluster, enable PrivateZone or CoreDNS when you create the cluster. You can also [use the ECI profile to enable PrivateZone](#section-pef-hq8-5vh) or install the CoreDNS component from the [Add-ons](/help/en/ack/manage-system-components#task-z3j-tvk-2gb) page of the ACK console after the cluster is created.

EIP

You can associate EIPs with ECI-based pods. You can automatically create an EIP for an ECI-based pod or associate an existing EIP with an ECI-based pod.

### Storage management

You can mount Elastic Block Storage (EBS) or File Storage NAS (NAS) file systems to pods.

**Item**

**Description**

EBS (disks)

-   To mount a disk by using FlexVolume, you do not need to install FlexVolume. You can mount a disk by specifying the disk ID. For more information, see [disk-flexvolume-static.yaml demo](https://github.com/AliyunContainerService/serverless-k8s-examples/blob/master/volumes/disk-flexvolume-static.yaml). You can also dynamically provision disks as volumes. For more information, see [disk-flexvolume-dynamic.yaml demo](https://github.com/AliyunContainerService/serverless-k8s-examples/blob/master/volumes/disk-flexvolume-dynamic.yaml).
    
-   To dynamically provision disks by creating persistent volumes (PVs) and PVCs, you must first install disk-controller. For more information, see [disk-pvc-dynamic.yaml demo](https://github.com/AliyunContainerService/serverless-k8s-examples/blob/master/volumes/disk-pvc-dynamic.yaml).
    

NAS

-   To use NFS volumes, you can mount NAS file systems by using NFS. For more information, see [nas-nfsvolume.yaml demo](https://github.com/AliyunContainerService/serverless-k8s-examples/blob/master/volumes/nas-nfsvolume.yaml).
    
-   To statically provision NAS file systems as volumes by using FlexVolume, you can directly specify the mount target without the need to install FlexVolume. For more information, see [nas-flexvolume.yaml demo](https://github.com/AliyunContainerService/serverless-k8s-examples/blob/master/volumes/nas-flexvolume.yaml).
    
-   To statically provision NAS file systems as volumes by creating PVs and PVCs, you must first install disk-controller. For more information, see [nas-pvc.yaml demo](https://github.com/AliyunContainerService/serverless-k8s-examples/blob/master/volumes/nas-pvc.yaml).
    

### Observability

**Item**

**Description**

Logging

In ACK Serverless clusters, you can modify [eci-profile](/help/en/ack/configure-elastic-container-instance-profile#topic-2073229) to enable Simple Log Service to collect pod logs. For more information, see the [Step 1: Create an application and configure Simple Log Service to collect application log](/help/en/ack/serverless-kubernetes/user-guide/use-log-service-to-collect-application-logs#task-1830627) section of the "Collect application logs by using pod environment variables" topic.

Monitoring

You can install the arms-prometheus component to enable cluster monitoring for an ACK Serverless cluster. For more information, see [Enable Managed Service for Prometheus](/help/en/ack/serverless-kubernetes/user-guide/enable-prometheus-service#task-1962610).

### Image management

-   ACK Serverless clusters allow you to use image caches to accelerate the creation of pods. This reduces the response time of applications. For more information about how to enable the image cache feature for pods, see [Use ImageCache to accelerate the creation of pods](/help/en/ack/serverless-kubernetes/user-guide/use-image-caches-to-accelerate-the-creation-of-pods#topic-2175725).
    
-   If you want to pull images from Container Registry to create pods in ACK Serverless clusters, you can [pull images from a Container Registry Enterprise Edition instance without a using a secret](/help/en/ack/pull-images-from-container-registry-enterprise-edition-instances-without-passwords#topic-2175712).
    

### Auto scaling

ACK Serverless clusters are nodeless. You do not need to worry about node planning or cluster expansion by using cluster-autoscaler. You need to only scale applications to meet your business requirements. We recommend that you configure Horizontal Pod Autoscaler (HPA) or CronHPA policies to adjust the number of pods on demand. For more information, see [Auto scaling overview](/help/en/ack/serverless-kubernetes/user-guide/auto-scaling-overview#concept-1962638).

### Authorization

If your application pods need to access Alibaba Cloud services, you can configure [RAM Roles for Service Accounts (RRSA)](/help/en/ack/serverless-kubernetes/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941) to complete authorization.

### Cluster management

**Item**

**Description**

Intelligent O&M

You can use the [intelligent O&M](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/#task-2101622) feature to periodically check the health status of ACK Serverless clusters, or run prechecks on clusters to be upgraded or migrated.

Updates

You can upgrade ACK Serverless clusters without service interruptions.

ACK Serverless Pro

ACK Serverless Pro clusters are more reliable, ensure higher service uptime, and allow you to create more pods.

Migration

You can upgrade trial or old ACK Serverless Basic clusters to ACK Serverless Pro clusters without service interruptions for higher service reliability.

### Component management

ACK Serverless clusters provide a variety of components and extended cluster features. You can deploy, update, or uninstall components based on your business requirements. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

#### **Managed components**

To simplify cluster O&M and allow you to focus on application development, ACK Serverless clusters provide managed system components. You can use the following managed system components in ACK Serverless clusters: kube-scheduler, cloud-controller-manager, kube-controller-manager, and kube-apiserver. In addition to these key Kubernetes components, ACK Serverless clusters will provide more managed storage, networks, and monitoring components in the future.

**Important**

Managed components can create objects such as ClusterRoles, ClusterRoleBindings, ServiceAccounts, Services, and ConfigMaps. However, the objects created by managed components are not deployed on ECI that run in ACK Serverless clusters. To ensure cluster stability, we recommend that you do not modify the objects created by managed components.

Managed components are deployed and maintained by ACK Serverless clusters. You can use the ACK API to interact with the managed components in ACK Serverless clusters. Managed components provide the following benefits:

-   Save the costs of ECI.
    
-   Provide automated deployment and maintenance.
    
-   Use high availability architectures.
    

### Application management

You can install Helm charts from the **Marketplace** page in the [ACK console](https://cs.console.alibabacloud.com) and then manage them on the **Helm** page. For more information, see [Simplify application deployment with Helm](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-helm-to-simplify-application-deployment/#task-1779943).

## Billing rules

ACK Serverless clusters are classified into ACK Serverless Basic clusters and ACK Serverless Pro clusters. The billable items and billing rules vary based on the type of cluster. For more information, see [Billing of ACK Serverless clusters](/help/en/ack/serverless-kubernetes/product-overview/ack-serverless-cluster-billing-instructions#concept-2122856).

## Limits

ACK Serverless clusters have the following limits:

-   DaemonSets are not supported. You can replace DaemonSets with sidecar containers.
    
-   You cannot specify `HostPath` or `HostNetwork` in pod `manifests`.
    
-   Privileged containers are not supported. You can use a security context to add capabilities to a pod.
    
    **Note**
    
    The privileged container feature is in internal preview. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   NodePort Services and the Session Affinity feature are not supported.
    
-   The China South Finance and Alibaba Gov Cloud regions are not supported.
    

## Contact us

If you have questions about ASK clusters, join the DingTalk group **31544226**.
