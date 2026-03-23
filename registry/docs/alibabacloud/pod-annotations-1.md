When you create pods (elastic container instances) in a Kubernetes cluster, you can add annotations to the pods to use all features of Elastic Container Instance. Make sure that the annotations that you want to add comply with the Kubernetes syntax. This topic describes the annotations that you can add when you create a pod. This topic also describes the annotations that you can add after the system schedules resources and creates pods.

## **Annotations that you can add when you create pods**

The following tables describe the annotations that you can add when you create Elastic Container Instance-based pods.

**Important**

-   The annotations described in the following tables can be applied only to the pods that are scheduled to virtual nodes. These pods run as elastic container instances. The annotations cannot be applied to the pods that are scheduled to real nodes.
    
-   Annotations must be added to the metadata of the configuration file of the pods. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

### **Instances**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Configure multiple zones to create a pod](/help/en/eci/user-guide/create-pods-in-multiple-zones)

k8s.aliyun.com/eci-vswitch

vsw-bp1xpiowfm5vo8o3c\*\*\*\*

Specifies vSwitch IDs. You can specify multiple vSwitch IDs to ensure that pods can be created in zones in which sufficient resources exist.

k8s.aliyun.com/eci-schedule-strategy

VSwitchOrdered

Configures a multi-zone scheduling policy. Valid values:

-   VSwitchOrdered: Resources in the specified zones are scheduled based on the order in which the vSwitches are specified.
    
-   VSwitchRandom: Resources in the specified zones are randomly scheduled.
    

-   [Create pods by specifying multiple specifications](/help/en/eci/user-guide/create-pods-by-specifying-multiple-specifications-1)
    
-   [Specify the number of vCPUs and memory size to create a pod](/help/en/eci/user-guide/specify-the-number-of-vcpus-and-memory-size-to-create-a-pod-1)
    
-   [Specify ECS instance types to create a pod](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-a-pod-1/)
    

k8s.aliyun.com/eci-use-specs

2-4Gi,4-8Gi,ecs.c6.xlarge

Specifies one or more specifications of the pod. The specifications can be a combination of number of vCPUs and memory size. The specifications can also be instance types of Elastic Compute Service (ECS) instances.

k8s.aliyun.com/eci-gpu-driver-version

tesla=525.85.12

Specifies the version of the GPU driver.

If you specify a GPU-accelerated ECS instance family that supports multiple versions of GPU drivers and CUDA when you create a GPU-accelerated elastic container instance, you can configure this annotation to specify the version of the driver and CUDA.

[Specify or exclude specific ECS instance families to create a pod](/help/en/eci/user-guide/specify-or-exclude-specific-ecs-instance-families-to-create-a-pod-1)

k8s.aliyun.com/eci-instance-family

"ecs.c6,ecs.g6"

Specifies or excludes specific ECS instance families when you create pods by specifying specifications of vCPU and memory.

[Specify or exclude specific generations of ECS instance families to create a pod](/help/en/eci/user-guide/specify-or-exclude-specific-generations-of-ecs-instance-families-to-create-a-pod)

k8s.aliyun.com/eci-instance-generation

"6,5"

Specifies or excludes specific generations of ECS instance families when you create pods by specifying specifications of vCPU and memory.

[Specify a compute category to create a pod](/help/en/eci/user-guide/specify-the-compute-category-to-create-a-pod)

k8s.aliyun.com/eci-compute-category

economy

Further specifies a compute category when you create pods by specifying vCPU and memory specifications.

-   Valid values: `economy` and `general`.
    
-   You can specify multiple compute categories. The system selects the category for the pod based on the specified order of the compute categories.
    

[Create a preemptible elastic container instance](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance-1)

k8s.aliyun.com/eci-spot-strategy

SpotAsPriceGo

Specifies the bid policy for the preemptible instance. Valid values:

-   SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price. If you use this bid policy, you must specify the k8s.aliyun.com/eci-spot-price-limit annotation.
    
-   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
    

k8s.aliyun.com/eci-spot-price-limit

"0.5"

Specifies the maximum hourly price of the preemptible instance. This value can be accurate to up to three decimal places.

This annotation is valid only when k8s.aliyun.com/eci-spot-strategy is set to SpotWithPriceLimit.

k8s.aliyun.com/eci-spot-duration

"0"

Specifies the protection period of the preemptible instance. Unit: hour. Default value: 1. A value of 0 indicates no protection period.

k8s.aliyun.com/eci-spot-fallback

"true"

Specifies whether to automatically create a pay-as-you-go instance if inventory resources that meet the requirements for the preemptible instance specification are insufficient. Default value: false.

[Use the private pool of an elasticity assurance to create a pod](/help/en/eci/user-guide/use-the-private-pool-of-an-elasticity-assurance-to-create-a-pod)

k8s.aliyun.com/eci-privatepool-matchcriteria

"Open"

Specifies the matching mode in which the system matches private pools. Valid values:

-   Open: The system matches the instance with open private pools.
    
-   Target: If you use this matching mode, you must specify a private pool ID. If you use targeted private pools to create pods, you must use this matching mode.
    

k8s.aliyun.com/eci-privatepool-id

eap-2ze1g68k2melxkkl\*\*\*\*

Specifies a private pool ID (the elasticity assurance ID). You can obtain the private pool ID on the **Resource Reservations** or **Private Pools** tab of the [Resource Reservations](https://ecs.console.alibabacloud.com/#/resourceAssuranceV2/region/cn-beijing?tabKey=RESOURCE_RESERVATION) page in the ECS console.

-   If you set k8s.aliyun.com/eci-privatepool-matchcriteria to Target, you must configure this annotation.
    
-   If you set k8s.aliyun.com/eci-privatepool-matchcriteria to Open, this annotation is invalid.
    

[Configure a fault handling policy for a pod](/help/en/eci/user-guide/configure-a-fault-handling-policy-for-a-pod)

k8s.aliyun.com/eci-fail-strategy

fail-back

Specifies the fault handling policy of an Elastic Container Instance-based pod. Valid values:

-   fail-back: After a pod fails to be created, the system automatically tries to recreate the pod.
    
-   fail-over: The effect of fail-over is the same as the effect of fail-back.
    
-   fail-fast: After a pod fails to be created, the system directly reports an error.
    

[Specify the maximum pending duration of an Elastic Container Instance-based pod](/help/en/eci/user-guide/customize-the-maximum-pending-duration-of-the-eci-pod)

k8s.aliyun.com/eci-max-pending-minute

"30"

Specifies the maximum pending duration of a pod. The system automatically terminates the pod after the maximum pending duration elapses.

The value must be an integer from 10 to 1440. Unit: minutes. Default value: 240.

[Configure hosts for an Elastic Container Instance-based pod](/help/en/eci/user-guide/configure-hosts-for-a-pod)

k8s.aliyun.com/eci-custom-hosts

"\[{\\"host\\":\\"example.com\\",\\"ip\\":\\"100.100.XX.XX\\"},{\\"host\\":\\"aliyundoc.com\\",\\"ip\\":\\"100.100.XX.XX\\"}\]"

Configures the hosts (/etc/hosts) of the pod.

[Bind custom tags to a pod](/help/en/eci/user-guide/bind-custom-tags-to-a-pod)

k8s.aliyun.com/eci-custom-tags

"env:test,name:alice"

Specifies the tag string. You can bind a maximum of three tags. Separate a tag key and a tag value with a colon (:). Separate multiple tags with commas (,).

[Assign a RAM role to a pod](/help/en/eci/user-guide/assign-a-ram-role-to-a-pod)

k8s.aliyun.com/eci-ram-role-name

AliyunECIContainerGroupRole

Binds a RAM role that the pod can assume to access other Alibaba Cloud services.

### **Images**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Use ImageCaches to accelerate the creation of pods](/help/en/eci/user-guide/use-imagecache-to-accelerate-the-creation-of-pods)

k8s.aliyun.com/eci-auto-imc

"true"

Specifies whether to automatically match image caches.

k8s.aliyun.com/imc-perfect-match

"true"

Specifies whether all container images in the pod must exactly match the image cache.

k8s.aliyun.com/imc-match-count-request

"2"

Specifies the number of container images in the pod that you want to exactly match the image cache.

k8s.aliyun.com/eci-imc-id

imc-2zebxkiifuyzzlhl\*\*\*\*

Specifies the ID of the image cache.

[Pull images from a Container Registry instance without using a secret](/help/en/eci/user-guide/pull-images-from-a-container-registry-enterprise-edition-instance-without-using-a-secret-1)

k8s.aliyun.com/acr-instance-ids

cri-j36zhodptmyq\*\*\*\*

Specifies the IDs of Alibaba Cloud Container Registry Enterprise Edition instances. You can pull images from the instances without using a secret.

You can specify IDs of Container Registry Enterprise Edition instances that reside in a region different from the region of the pod. In this case, you must prefix the region ID of the Enterprise Edition instance to the ID of the Enterprise Edition instance. Example: `"cn-beijing:cri-j36zhodptmyq****"`.

k8s.aliyun.com/acr-service-arns

acs:ram::1609982529\*\*\*\*\*\*:role/role-assume

Specifies the Alibaba Cloud Resource Names (ARNs) of the RAM roles in the Alibaba Cloud account to which the Elastic Container Instance resources belong.

This annotation is required when you use a RAM role to create resources.

k8s.aliyun.com/acr-user-arns

acs:ram::1298452580\*\*\*\*\*\*:role/role-acr

Specifies the ARNs of the RAM roles in the Alibaba Cloud account to which the Container Registry instance belongs.

This annotation is required when you pull images from a Container Registry instance that belongs to an Alibaba Cloud account different from the Alibaba Cloud account of the Elastic Container Instance resource.

[Pull an image from a self-managed image repository](/help/en/eci/user-guide/use-self-managed-image-repositories-1)

k8s.aliyun.com/plain-http-registry

harbor\*\*\*.pre.com,192.168.XX.XX:5000,reg\*\*\*.test.com:80

Configures the address of the self-managed image repository. When you create a pod by using an image in a self-managed image repository that uses the HTTP protocol, you must add this annotation to the instance. This way, Elastic Container Instance pulls the image over the HTTP protocol instead of the default HTTPS protocol. This prevents image pull failures caused by different protocols.

k8s.aliyun.com/insecure-registry

harbor\*\*\*.pre.com,192.168.XX.XX:5000,reg\*\*\*.test.com:80

Configures the address of the self-managed image repository. When you create a pod by using an image in a self-managed image repository that uses a self-signed certificate, you must add this annotation to the instance to skip the certificate authentication. This prevents image pull failures caused by certificate authentication failures.

### **Data caches**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Use a DataCache to create a pod](/help/en/eci/user-guide/create-a-pod-using-datacache)

k8s.aliyun.com/eci-data-cache-bucket

default

Specifies the bucket that is used to store the DataCache. You must configure this annotation when you use DataCaches to create pods.

k8s.aliyun.com/eci-data-cache-pl

PL1

Specifies the performance level of the disk that is created based on the DataCache. By default, a PL1 enhanced SSD (ESSD) is used.

k8s.aliyun.com/eci-data-cache-provisionedIops

"40000"

Specifies the read/write IOPS that is provisioned for the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Storage capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Storage capacity, 50,000}. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

If you add this annotation, the disk that is created based on the DataCache is an ESSD AutoPL disk.

k8s.aliyun.com/eci-data-cache-burstingEnabled

"true"

Specifies whether to enable the performance burst feature for the ESSD AutoPL disk. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

If you add this annotation, the disk that is created based on the DataCache is an ESSD AutoPL disk.

### **Network**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Assign security groups to a pod](/help/en/eci/user-guide/assign-a-security-group-1)

k8s.aliyun.com/eci-security-group

sg-bp1dktddjsg5nktv\*\*\*\*

Specifies the IDs of the security groups. The following requirements must be met:

-   You can assign up to five security groups.
    
-   The assigned security groups must belong to the same virtual private cloud (VPC).
    
-   The assigned security groups must be of the same type.
    

[Associate an EIP with an elastic container instance](/help/en/eci/user-guide/enable-internet-access-1#bee1b6c029sty)

k8s.aliyun.com/eci-eip-instanceid

eip-bp1q5n8cq4p7f6dzu\*\*\*\*

Specifies the ID of the elastic IP address (EIP).

k8s.aliyun.com/eci-with-eip

"true"

Specifies whether to automatically create an EIP when you create an elastic container instance and associate the EIP with the instance.

k8s.aliyun.com/eip-bandwidth

"5"

Specifies the maximum bandwidth of the EIP. Unit: Mbit/s. Default value: 5.

k8s.aliyun.com/eip-common-bandwidth-package-id

cbwp-2zeukbj916scmj51m\*\*\*\*

Specifies the ID of an existing EIP bandwidth plan that you want to associate with the instance. For more information, see [What is an Internet Shared Bandwidth?](/help/en/internet-shared-bandwidth/product-overview/what-is-internet-shared-bandwidth)

k8s.aliyun.com/eip-isp

BGP

Specifies the line type for the EIP. This annotation is applicable only to pay-as-you-go EIPs. Valid values:

-   BGP: BGP (Multi-ISP) line
    
-   BGP\_PRO: BGP (Multi-ISP) Pro line
    

For more information, see the "Line type" section of the [What is an EIP](/help/en/eip/product-overview/what-is-eip#section-vzi-lqi-chm) topic.

k8s.aliyun.com/eip-internet-charge-type

PayByBandwidth

Specifies the metering method of the EIP. Valid values:

-   PayByBandwidth: pay-by-bandwidth
    
-   PayByTraffic: pay-by-traffic
    

For more information about the billing of EIPs, see [Billing overview](/help/en/eip/billing-overview#section-j0c-7wh-cko).

k8s.aliyun.com/eip-public-ip-address-pool-id

pippool-bp187arfugi543y1s\*\*\*\*

Specifies the ID of the IP address pool. The EIP is allocated from the IP address pool. For more information, see [Create and manage IP address pools](/help/en/eip/create-and-manage-ip-address-pools).

[Assign an IPv6 address to an Elastic Container Instance-based pod](/help/en/eci/user-guide/assign-an-ipv6-address-to-an-elastic-container-instance)

k8s.aliyun.com/eci-enable-ipv6

"true"

Specifies whether to assign an IPv6 address to the pod.

k8s.aliyun.com/eci-ipv6-bandwidth-enable

"true"

Specifies whether to enable Internet access over IPv6 addresses for the instance.

k8s.aliyun.com/eci-ipv6-bandwidth

100M

Specifies the peak public bandwidth of the IPv6 address.

[Specify a private IP address for a pod](/help/en/eci/user-guide/specify-the-private-ip-address-of-the-eci-pod)

k8s.aliyun.com/eci-private-ip-address

"172.16.0.1"

Specifies the private IP address of the pod. Only IPv4 addresses are supported. Make sure that the IP address is idle.

[Configure an Elastic Container Instance-based pod to use a fixed IP address](/help/en/eci/user-guide/configure-an-elastic-container-instance-pod-to-use-a-fixed-ip-address)

k8s.aliyun.com/eci-fixed-ip

"true"

Specifies whether to configure the pod to use a fixed IP address.

k8s.aliyun.com/eci-fixed-ip-retain-hour

"24"

Specifies the retention period of the fixed IP address after the pod with using the fixed IP address enabled is released and the fixed IP address becomes idle. Unit: hours.

If you do not configure the annotation, the fixed IP address is retained for 48 hours by default.

[Limit the inbound and outbound bandwidth of pods](/help/en/eci/user-guide/configure-the-bandwidth-of-a-pod-1)

kubernetes.io/ingress-bandwidth

40M

Specifies the inbound bandwidth.

kubernetes.io/egress-bandwidth

20M

Specifies the outbound bandwidth.

[Configure a custom DNS server for a pod](/help/en/eci/user-guide/configure-custom-dns-for-eci-pods)

k8s.aliyun.com/eci-custom-dnsconfig

`{\"nameservers\":\"20.1.xx.xx,20.1.xx.xx\",\"searches\":\"xx.com,xx.eee\",\"options\":\"ndots:2,edns0\"}`

In hybrid cloud scenarios, specifies a Domain Name System (DNS) server for a pod and uses the DNS server to resolve internal domain names.

### **Storage**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Increase the capacity of the temporary storage space](/help/en/eci/user-guide/increase-the-capacity-of-the-temporary-storage-space-1#topic-2043552)

k8s.aliyun.com/eci-extra-ephemeral-storage

50Gi

Specifies the size of the temporary storage space.

[Encrypt the temporary storage space](/help/en/eci/user-guide/encrypt-temporary-storage-space)

k8s.aliyun.com/eci-ephemeral-storage-options

"{\\"encrypted\\":\\"true\\"}"

Specifies the parameters for the temporary storage space. A value of `"{\"encrypted\":\"true\"}"}` indicates that the encryption feature is enabled for the temporary storage space.

[Automatically evict pods whose temporary storage spaces are insufficient](/help/en/eci/automatically-evict-pods-whose-temporary-storage-spaces-are-insufficient#topic-2217732)

k8s.aliyun.com/eci-eviction-enable

"true"

Specifies whether to automatically evict the pods that have insufficient temporary storage space.

### **Container configuration**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Configure the NTP service for pods](/help/en/eci/user-guide/configure-the-ntp-service-1#topic-1860142)

k8s.aliyun.com/eci-ntp-server

100.100.\*.\*

Specifies the IP address of the Network Time Protocol (NTP) server.

### **Logs**

**Features and related documents**

**Annotation**

**Example**

**Description**

[Collect logs by using Simple Log Service CRDs](/help/en/eci/user-guide/collect-logs-by-using-log-service-crds)

k8s.aliyun.com/eci-sls-enable

"false"

Specifies whether to enable the log collection feature.

If you do not want to collect logs for specific pods when you use Simple Log Service CRDs (custom resource definitions) to collect logs, you can set the annotation to false to disable the log collection feature. This prevents waste of resources when the system automatically creates Logtail.

### **O&M**

**Features and related documents**

**Annotation**

**Example**

**Description**

[View core dump files](/help/en/eci/user-guide/use-coredump-to-analyze-instance-program-exceptions-1#topic-1891689)

k8s.aliyun.com/eci-core-pattern

/pod/data/dump/core

Specifies the directory in which core dump files are stored.

## **Annotations that you can add after the system schedules resources and creates pods**

The following table describes the annotations that you can add after the system schedules resources and creates pods. You can run the `kubectl describe` command to query the details of the pods.

**Annotation**

**Example**

**Description**

k8s.aliyun.com/eci-request-id

45942504-4688-51BA-BBAB-4B692C4F39C0

Indicates the request ID.

k8s.aliyun.com/eci-instance-id

eci-2ze1y0la40qgva09\*\*\*\*

Indicates the pod ID.

k8s.aliyun.com/eci-instance-spec

2.0-4.0Gi

Indicates the specifications of the pod. You are charged based on the value.

-   If the returned value, such as 2.0-4.0Gi, indicates the number of vCPUs and memory size, you are charged based on the number of vCPUs and memory size.
    
-   If the returned value is an ECS instance type, such as ecs.c6.large, you are charged based on the ECS instance type.
    

k8s.aliyun.com/eci-instance-compute-category

economy

Indicates the compute category of the ECS instance type based on which the pod is created.

-   If the value is economy, you are charged based on the pods of economy compute category.
    
-   If the value is general, you are charged based on the pods of general compute category.
    

k8s.aliyun.com/allocated-eipInstanceId

eip-bp1q5n8cq4p7f6dzu\*\*\*\*

Indicates the EIP ID.

k8s.aliyun.com/allocated-eipAddress

47.99.\*\*.\*\*

Indicates the EIP that is associated with the instance.

k8s.aliyun.com/allocated-ipv6Address

2001:d\*\*:1:1:1:1:1:1

Indicates the IPv6 address that is assigned to the pod.

k8s.aliyun.com/eci-created-by-template

true

Indicates whether a template was used to create the pod.

k8s.aliyun.com/eni-instance-id

eni-2ze6d7oo5ukqj26o\*\*\*\*

Indicates the ID of the elastic network interface (ENI) that is bound to the pod.

k8s.aliyun.com/eci-vpc

vpc-2zeghwzptn5zii0w7\*\*\*\*

Indicates the virtual private cloud (VPC) to which the pod belongs.

k8s.aliyun.com/eci-matched-image-cache

imc-2zedy3v37800iimu\*\*\*\*

Indicates the ID of the matched image cache.

k8s.aliyun.com/eci-schedule-result

finished

Indicates the scheduling result. This annotation is retired. For information about pod scheduling results, see [ContainerInstanceCreated](/help/en/eci/user-guide/eci-custom-condition#61de43d047mw3).
