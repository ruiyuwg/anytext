In a Kubernetes cluster, pods are assigned private IP addresses by default. Some workloads require an independent public IP address per pod -- for example, User Datagram Protocol (UDP) game servers that use random port mapping, Real-Time Streaming Protocol (RTSP) media services, or pods that compete for Internet bandwidth. An elastic IP address (EIP) gives a pod its own public egress without sharing bandwidth or being affected by other pods.

Container Service for Kubernetes (ACK) supports two components for attaching EIPs to pods: `ack-extend-network-controller` (recommended) and Terway.

**Important**

Starting from November 2023, Terway no longer provides updates for the EIP feature. The feature is officially removed in Terway v1.7.0. Use `ack-extend-network-controller` instead. For migration steps, see [Migrate the EIP feature from Terway to ack-extend-network-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/migrate-terway-eip-function-to-ack-extend-network-controller).

**Item**

**ack-extend-network-controller**

**Terway**

Supported cluster types

ACK managed cluster, ACK dedicated cluster, ACK Serverless cluster

ACK managed cluster, ACK dedicated cluster

Fixed EIP

Supported

Not supported

Configuration phase

After a pod IP address is allocated, the controller allocates and attaches an EIP

EIP is allocated and attached during Container Network Interface (CNI) execution

Supported versions

v0.2.0 or later

v1.0.10.280-gdc2cb6c-aliyun to earlier than v1.7.0

## Prerequisites

-   An ACK managed cluster or ACK dedicated cluster that uses the Terway network plugin. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) and [Create an ACK dedicated cluster (no longer available for creation)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb).
    
-   For more information about Terway network modes, see [Use the Terway network plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447).
    

## Configure RAM permissions

The component that manages EIPs requires Resource Access Management (RAM) permissions to allocate, attach, and release EIPs. Create a custom policy and attach it to the worker RAM role of your cluster.

### ack-extend-network-controller (recommended)

1.  Create a custom policy with the following content. For more information, see [Step 1: Create a custom policy](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-e1o-r03-6ck).
    
    ```
       {
         "Effect": "Allow",
         "Action": [
           "vpc:DescribeVSwitches",
           "vpc:AllocateEipAddress",
           "vpc:AllocateEipAddressPro",
           "vpc:DescribeEipAddresses",
           "vpc:AssociateEipAddress",
           "vpc:UnassociateEipAddress",
           "vpc:ReleaseEipAddress",
           "vpc:AddCommonBandwidthPackageIp",
           "vpc:RemoveCommonBandwidthPackageIp",
           "vpc:TagResources",
           "ecs:DescribeNetworkInterfaces"
         ],
         "Resource": [
           "*"
         ],
         "Condition": {}
       }
    ```
    
2.  Grant permissions to the worker RAM role of the cluster. For more information, see [Step 2: Grant permissions to the Worker RAM role of the cluster](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-fos-elh-uul).
    

### Terway (legacy)

Terway requires EIP-related permissions to allocate and configure EIPs for pods.

**ACK managed cluster or ACK managed cluster of Basic Edition created in or after June 2020**

1.  Create a custom policy with the following content. For more information, see [Step 1: Create a custom policy](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-e1o-r03-6ck).
    
    ```
       {
         "Effect": "Allow",
         "Action": [
           "vpc:DescribeVSwitches",
           "vpc:AllocateEipAddress",
           "vpc:DescribeEipAddresses",
           "vpc:AssociateEipAddress",
           "vpc:UnassociateEipAddress",
           "vpc:ReleaseEipAddress",
           "vpc:AddCommonBandwidthPackageIp",
           "vpc:RemoveCommonBandwidthPackageIp"
         ],
         "Resource": [
           "*"
         ],
         "Condition": {}
       }
    ```
    
2.  Grant permissions to the worker RAM role of the cluster. For more information, see [Step 2: Grant permissions to the Worker RAM role of the cluster](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-fos-elh-uul).
    

**ACK dedicated cluster or ACK managed cluster created before June 2020**

1.  Create a custom policy with the same content as above. For more information, see [Step 1: Create a custom policy](/help/en/ack/product-overview/product-changes-permissions-of-the-worker-ram-role-of-ack-managed-clusters-are-revoked#p-e1o-r03-6ck).
    
2.  On the [AliyunCSManagedNetworkRole RAM role](https://ram.console.alibabacloud.com/roles/AliyunCSManagedNetworkRole) page, go to the **Permissions** tab and click **Add Permissions**. Then, click **Custom Policy**, select the custom policy that you created in the previous step, and click **OK**.
    

## Install the component

**Warning**

Do not enable the EIP capabilities of both `ack-extend-network-controller` and Terway at the same time. This may cause EIP resources to be repeatedly allocated, leading to binding failures.

### Install ack-extend-network-controller (recommended)

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, choose **Marketplace** > **Marketplace**.
    
2.  On the **App Marketplace** page, enter `ack-extend-network-controller` in the search box and click the application.
    
3.  On the application details page, click **Deploy** in the upper-right corner.
    
4.  In the **Create** panel, select the cluster and namespace, and then click **Next**.
    
5.  On the parameter configuration page, select a version number, set the parameters, and then click **OK**. The following table describes the parameters. Sample configuration:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    `clusterID`
    
    string
    
    Yes
    
    The cluster ID.
    
    `regionID`
    
    string
    
    Yes
    
    The ID of the region where the cluster is deployed.
    
    `enableControllers`
    
    \[\]string
    
    Yes
    
    Set to `eip` to enable the EIP feature.
    
    `networkController.vpcid`
    
    string
    
    Yes
    
    The VPC ID of the cluster.
    
    `networkController.eipController.maxConcurrentReconciles`
    
    int
    
    No
    
    The number of concurrent EIP controllers.
    
    `networkController.eipController.garbageCollectionPeriodInMinutes`
    
    int
    
    No
    
    The period at which the EIP controller cleans up fixed EIPs.
    
    `customStatefulWorkloadKinds`
    
    \[\]string
    
    No
    
    The Kind of the custom stateful controller.
    
    `enableVirtualNode`
    
    bool
    
    No
    
    Specifies whether to support Elastic Container Instance (ECI) virtual nodes.
    
    **Important**
    
    If enabled, the controller allocates EIPs to pods of ECI instances. The pod annotation must not conflict with the EIP feature supported by ECI. Use with caution.
    
    `enableRRSA`
    
    bool
    
    No
    
    Authenticates requests using RAM Roles for Service Accounts (RRSA).
    
    **Note**
    
    Supported by v0.10.0 and later. Only the ack-pod-identity-webhook injection method is supported. Configure the corresponding label for the kube-system namespace. For more information, see [Isolate pod permissions based on RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services).
    
    `rrsaRoleName`
    
    string
    
    No
    
    The RRSA role name.
    
    **Note**
    
    Supported by v0.10.0 and later.
    
    `credential.accessKey`
    
    string
    
    No
    
    The AccessKey ID of the account with EIP permissions. Not required if you completed Step 1.
    
    **Important**
    
    This stores sensitive information in a Kubernetes Secret. Not recommended.
    
    `credential.accessSecret`
    
    string
    
    No
    
    The AccessKey secret of the account with EIP permissions. Not required if you completed Step 1.
    
    **Important**
    
    This stores sensitive information in a Kubernetes Secret. Not recommended.
    
    `kubeClientQPS`
    
    float32
    
    No
    
    The queries per second (QPS) limit for the component to access the cluster API server.
    
    **Note**
    
    Supported by v0.12.2 and later.
    
    `kubeClientBurst`
    
    int
    
    No
    
    The maximum number of burst requests for the component to access the cluster API server.
    
    **Note**
    
    Supported by v0.12.2 and later.
    
    ```
       clusterID: "c11ba338192xxxxxxx"
       regionID: "cn-hangzhou"
       vpcID: "vpc-bp1rkq0zxxxxxx"
       enableControllers:
         - eip
    
       networkController:
         eipController:
           maxConcurrentReconciles: 1
           garbageCollectionPeriodInMinutes: 1
         customStatefulWorkloadKinds:
         - foo
    
       credential:
         accessKey: ""
         accessSecret: ""
    ```
    

To update the version and parameters of `ack-extend-network-controller`, see [Modify a Helm chart](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/app-marketplace#section-y5y-1rg-7st).

### Upgrade Terway (legacy)

Make sure the cluster uses the Terway plugin, and then upgrade `terway-eni` or `terway-eniip` to a version that supports the EIP feature. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

> The Terway plugin version must be v1.0.10.280-gdc2cb6c-aliyun or later, and earlier than v1.7.0. For more information about Terway versions, see [Terway](/help/en/ack/product-overview/terway).

## Attach an EIP to a pod

Use annotations in the pod template to enable the EIP feature. You can automatically allocate a new EIP or specify an existing one.

### Automatically allocate an EIP

Add annotations to the pod template to create and attach an EIP when a pod starts.

**Important**

With automatic allocation, EIP resources may be repeatedly created and released if a pod is rebuilt or CNI execution fails. To prevent this, specify an existing EIP instance instead.

**Annotation**

**Value**

`network.alibabacloud.com/pod-with-eip` or `k8s.aliyun.com/pod-with-eip`

`"true"` to automatically create and attach an EIP. `"false"` to disable. Compatible annotation: `k8s.aliyun.com/eci-with-eip`.

`network.alibabacloud.com/eip-bandwidth` or `k8s.aliyun.com/eip-bandwidth`

Peak bandwidth in Mbit/s. Only applies when creating an EIP. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-internet-charge-type` or `k8s.aliyun.com/eip-internet-charge-type`

Metering method. Valid values: `PayByTraffic` (default), `PayByBandwidth`. Only applies when creating an EIP. Compatible annotation: `k8s.aliyun.com/eip-charge-type`. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-instance-charge-type` or `k8s.aliyun.com/eip-instance-charge-type`

Billing method. Valid value: `PostPaid` (pay-as-you-go). Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller`. PrePaid subscription is not supported. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-common-bandwidth-package-id` or `k8s.aliyun.com/eip-common-bandwidth-package-id`

ID of an existing Internet Shared Bandwidth instance.

**Note**

Terway requires v1.2.3 or later. No version limit for `ack-extend-network-controller`.

`network.alibabacloud.com/eip-isp` or `k8s.aliyun.com/eip-isp`

Line type. Valid values: `BGP` (BGP Multi-ISP), `BGP_PRO` (BGP Multi-ISP Pro). For single-line bandwidth whitelist users: `ChinaTelecom`, `ChinaUnicom`, `ChinaMobile`, `ChinaTelecom_L2`, `ChinaUnicom_L2`, `ChinaMobile_L2`. For Hangzhou Finance Cloud users: `BGP_FinanceCloud`. Only applies when creating an EIP.

**Note**

Terway requires v1.2.3 or later. No version limit for `ack-extend-network-controller`. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-public-ip-address-pool-id` or `k8s.aliyun.com/eip-public-ip-address-pool-id`

EIP address pool ID. Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller`. For more information, see [Create and manage IP address pools](/help/en/eip/create-and-manage-ip-address-pools).

`network.alibabacloud.com/eip-resource-group-id` or `k8s.aliyun.com/eip-resource-group-id`

Resource group ID. Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller` v0.4.0 and later. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-name` or `k8s.aliyun.com/eip-name`

EIP name. Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller` v0.6.0 and later. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-description` or `k8s.aliyun.com/eip-description`

EIP description. Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller` v0.6.0 and later. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-security-protection-types` or `k8s.aliyun.com/eip-security-protection-types`

Security protection level. [Anti-DDoS Proxy-enabled EIPs are supported](/help/en/anti-ddos/anti-ddos-origin/getting-started/purchase-an-anti-ddos-origin-enterprise-instance#47baac8050o6m). Separate multiple levels with commas (`,`). Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller` v0.9.0 and later. For more information, see [Request an EIP](/help/en/eip/apply-for-new-eips#task-bh5-dll-vdb).

`network.alibabacloud.com/eip-tags` or `k8s.aliyun.com/eip-tags`

Tag configuration in valid JSON format. Example: `k8s.aliyun.com/eip-tags: "{\"foo\":\"bar\"}"`. Only applies when creating an EIP.

**Note**

Supported only by `ack-extend-network-controller` v0.11.0 and later. For more information, see [Manage tags](/help/en/eip/manage-tags).

#### Deployment example

The following Deployment automatically allocates an EIP with 5 Mbit/s bandwidth to each pod. The `readinessGates` field makes sure the pod does not enter the Ready state until the EIP is attached.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example
  labels:
    app: example
spec:
  replicas: 1
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
      annotations:
        k8s.aliyun.com/pod-with-eip: "true"
        k8s.aliyun.com/eip-bandwidth: "5"
    spec:
      readinessGates:
      - conditionType: "k8s.aliyun.com/eip"
      containers:
      - name: example
        image: nginx
```

After the pod is created, query the PodEIP custom resource (CR) to view the allocated EIP information:

```
kubectl get podeip -n <namespace> <podname> -o yaml
```

Expected output:

```
apiVersion: alibabacloud.com/v1beta1
kind: PodEIP
metadata:
  creationTimestamp: "2023-12-15T04:25:37Z"
  finalizers:
  - podeip-controller.alibabacloud.com/finalizer
  generation: 1
  name: example-xxx
  namespace: default
  resourceVersion: "222800"
  uid: 43xxx-f1xx-4xxx-b3xx-969faxxx
spec:
  allocationID: eip-2ze2qe8zsxxx
  allocationType:
    releaseStrategy: Follow
    type: Auto
status:
  eipAddress: 39.102.XX.XX
  internetChargeType: PayByTraffic
  isp: BGP
  networkInterfaceID: eni-2zeagv8f3xxxx
  podLastSeen: "2023-12-15T05:18:47Z"
  privateIPAddress: 192.168.XX.XX
  resourceGroupID: rg-acfmwxxxxxsq
  status: InUse
```

### Specify an existing EIP

Attach an existing EIP by specifying its instance ID in a pod annotation. This annotation does not modify the EIP instance configuration; it only attaches the EIP to the pod.

**Important**

This approach is not applicable to multi-replica controllers. Make sure only one pod references the EIP instance. Use this approach only with a StatefulSet.

**Annotation**

**Value**

`network.alibabacloud.com/pod-eip-instanceid` or `k8s.aliyun.com/pod-eip-instanceid`

The EIP instance ID, for example `eip-bp14qxxxxxxx`. Compatible annotation: `k8s.aliyun.com/eci-eip-instanceid`.

**Important**

Do not assign the same EIP instance to pods with different names. The EIP controller detaches the EIP after a pod exits. During this period, the same EIP instance cannot be used in a new container. Check whether a PodEIP resource with the same name as the pod exists to determine if the EIP has been detached.

### Keep the same EIP after a pod restart (fixed EIP)

A fixed EIP makes sure that a pod continues to use the same EIP address after it is rebuilt. Combine this with automatic EIP allocation for stateful applications.

**Important**

-   This feature is supported only by `ack-extend-network-controller` and only for stateful replica controllers. It cannot be used for stateless controllers.
    
-   If you specify an EIP instance ID, the EIP is not released.
    

**Annotation**

**Value**

`network.alibabacloud.com/pod-eip-release-strategy` or `k8s.aliyun.com/pod-eip-release-strategy`

Release policy for the PodEIP. Valid values: `Follow` (default) -- follows the pod lifecycle. `Never` -- does not delete the PodEIP. Manually delete it when no longer needed. You can also specify a Go-type time expression, for example `5m30s`, to delete the EIP 5.5 minutes after the pod is deleted.

#### StatefulSet example

The following StatefulSet creates two pods, each with an automatically allocated EIP. The release policy deletes the PodEIP 10 minutes after the pod is deleted. If a pod with the same name is recreated within those 10 minutes, it reuses the same EIP.

```
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: example
  labels:
    app: example
spec:
  serviceName: "example"
  replicas: 2
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
      annotations:
        k8s.aliyun.com/pod-with-eip: "true"
        k8s.aliyun.com/pod-eip-release-strategy: "10m"
    spec:
      containers:
      - name: example
        image: nginx
```

Query the PodEIP resources:

```
kubectl get podeip -n <namespace> -o yaml
```

Expected output:

```
apiVersion: v1
items:
- apiVersion: alibabacloud.com/v1beta1
  kind: PodEIP
  metadata:
    creationTimestamp: "2023-12-15T03:28:01Z"
    finalizers
    - podeip-controller.alibabacloud.com/finalizer
    generation: 1
    name: example-0
    namespace: default
    resourceVersion: "227221"
    uid: 79954xx-17xx-4dxx-b7xx-15b84xxx
  spec:
    allocationID: eip-2ze08metxxx
    allocationType:
      releaseAfter: 10m
      releaseStrategy: TTL
      type: Auto
  status:
    eipAddress: 39.105.XX.XX
    internetChargeType: PayByTraffic
    isp: BGP
    networkInterfaceID: eni-2ze4tkg4xxx
    podLastSeen: "2023-12-15T05:31:34Z"
    privateIPAddress: 192.168.XX.XX
    resourceGroupID: rg-acfmwxxx
    status: InUse
- apiVersion: alibabacloud.com/v1beta1
  kind: PodEIP
  metadata:
    creationTimestamp: "2023-12-15T03:28:03Z"
    finalizers:
    - podeip-controller.alibabacloud.com/finalizer
    generation: 1
    name: example-1
    namespace: default
    resourceVersion: "227222"
    uid: 1339xxxe7-97xx-46xx-9bxx-537690xxx
  spec:
    allocationID: eip-2zetwhffqxxx
    allocationType:
      releaseAfter: 10m
      releaseStrategy: TTL
      type: Auto
  status:
    eipAddress: 39.105.XX.XX
    internetChargeType: PayByTraffic
    isp: BGP
    networkInterfaceID: eni-2zeagv8f3wxxx
    podLastSeen: "2023-12-15T05:31:34Z"
    privateIPAddress: 192.168.XX.XX
    resourceGroupID: rg-acfmwqnwxxx
    status: InUse
- apiVersion: alibabacloud.com/v1beta1
  kind: PodEIP
  metadata:
    creationTimestamp: "2023-12-15T04:25:37Z"
    finalizers:
    - podeip-controller.alibabacloud.com/finalizer
    generation: 1
    name: example-5bxxx-9xx
    namespace: default
    resourceVersion: "227220"
    uid: 43cdfxxx-f1xx-42xx-b3xx-969fxxx
  spec:
    allocationID: eip-2ze2qe8zsmnxxx
    allocationType:
      releaseStrategy: Follow
      type: Auto
  status:
    eipAddress: 39.102.XX.XX
    internetChargeType: PayByTraffic
    isp: BGP
    networkInterfaceID: eni-2zeagv8f3wxxx
    podLastSeen: "2023-12-15T05:31:34Z"
    privateIPAddress: 192.168.XX.XX
    publicIpAddressPoolID: pippool-2ze498cxxx
    resourceGroupID: rg-acfmwqnxxx
    status: InUse
kind: List
metadata:
  resourceVersion: ""
```

### Enable EIP in Terway (legacy)

1.  Modify the Terway ConfigMap to enable the EIP pool:
    
    ```
       kubectl edit cm eni-config -n kube-system
    ```
    
2.  Add the following entry to `eni_conf`:
    
    > To forcibly detach a previously attached EIP when specifying an EIP instance, also add `"allow_eip_rob": "true"` to `eni_conf`.
    
    ```
       "enable_eip_pool": "true"
    ```
    
3.  After modifying the file, press the **Esc** key, enter `:wq!`, and press the **Enter** key to save and exit.
    
4.  Recreate the Terway pods:
    
    > If you installed `terway-eni`, replace `terway-eniip` with `terway-eni`.
    
    ```
       kubectl delete pod -n kube-system -l app=terway-eniip
    ```
    
5.  Add annotations to the pod template. **Automatic EIP allocation:** **Specify an existing EIP:**
    
    **Important**
    
    \- A single EIP cannot be associated with multiple pods. This is not applicable to Deployments or StatefulSets with multiple replicas. - By default, if the EIP is already attached to an instance, it cannot be attached to a pod. To detach the EIP from the previous instance first, configure `"allow_eip_rob": "true"` in the ConfigMap. - Specify an EIP instance ID only for single-replica instances.
    
    ```
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: nginx-deployment-basic
         labels:
           app: nginx
       spec:
         replicas: 2
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             annotations:
               network.alibabacloud.com/pod-with-eip: "true"   # Automatically allocate a public EIP
               network.alibabacloud.com/eip-bandwidth: "5"      # Bandwidth: 5 Mbit/s (default)
             labels:
               app: nginx
           spec:
             containers:
             - name: nginx
               image: nginx
    ```
    
    ```
       k8s.aliyun.com/pod-eip-instanceid: "<your-eip-instance-id>"
    ```
    

## Verify the EIP attachment

After the pod enters the Running state, check the allocated EIP annotation to view the associated EIP address.

**ack-extend-network-controller:**

```
kubectl get pod <podname> -n <namespace> -o jsonpath='{.metadata.annotations.k8s\.aliyun\.com/allocated-eipAddress}'
```

**Terway:**

```
kubectl get pod <podname> -n <namespace> -o jsonpath='{.metadata.annotations.network\.alibabacloud\.com/allocated-eipAddress}'
```

Access the pod using the returned EIP address to verify connectivity.

## Use cases

In a Terway network, outbound traffic from a pod to the Internet is typically routed through host Source Network Address Translation (SNAT) or an external SNAT via an EIP. Inbound traffic flows through a LoadBalancer service. Attaching an independent EIP to a pod is useful when:

-   The pod requires random port mapping. This is common for UDP game servers, conference call services, or RTSP endpoints that use different ports per client.
    
-   Pods compete for Internet bandwidth, and a specific pod needs its own public egress.
    

## Limitations

-   This feature is supported only for ECS nodes.
    
-   Before using an EIP, understand its limits. For more information, see [Limits](/help/en/eip/product-overview/limits#concept-zrj-b23-vdb).
    

## Billing

Enabling the `ack-extend-network-controller` or Terway plugin does not incur additional fees. However, the cloud resources that you use are billed. For more information, see [Cloud resource fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services#table-gz7-ea0-ocw).

## FAQ

### Why does a pod become Ready before the EIP is attached?

The controller attaches the EIP after the pod IP address is allocated. The pod may enter the Ready state before the EIP attachment completes.

To delay readiness until the EIP is attached, use one of these approaches:

**Configure readiness gates (ack-extend-network-controller only)**

Add `readinessGates` to the pod spec. The controller sets the pod condition after the EIP is attached. The pod does not become Ready until then.

```
kind: Pod
...
spec:
  readinessGates:
  - conditionType: "k8s.aliyun.com/eip"
status:
  conditions:
  - lastProbeTime: "2022-12-12T03:45:48Z"
    lastTransitionTime: "2022-12-12T03:45:48Z"
    reason: Associate eip succeed
    status: "True"
    type: k8s.aliyun.com/eip
...
```

**Configure an init container**

Use an init container that polls the downward API for the EIP annotation. The main container starts only after the EIP is allocated.

```
apiVersion: v1
kind: Pod
metadata:
  name: example
  annotations:
    network.alibabacloud.com/pod-with-eip: "true"
spec:
  containers:
  - name: example
    image: busybox:1.28
    command: ['sh', '-c', 'echo The app is running! && sleep 3600']
  initContainers:
  - name: init
    image: busybox:1.28
    command: ['timeout', '-t' ,'60', 'sh','-c', "until grep -E '^k8s.aliyun.com\\/allocated-eipAddress=\\S?[0-9]+\\S?' /etc/podinfo/annotations; do echo waiting for annotations; sleep 2; done"]
    volumeMounts:
      - name: podinfo
        mountPath: /etc/podinfo
  volumes:
    - name: podinfo
      downwardAPI:
        items:
          - path: "labels"
            fieldRef:
              fieldPath: metadata.labels
          - path: "annotations"
            fieldRef:
              fieldPath: metadata.annotations
```

### Why can't I access the pod using the EIP?

This is usually caused by access control list (ACL) rules. Check the following:

-   **Cloud Firewall:** EIPs are subject to Cloud Firewall access control rules. Allow inbound and outbound traffic for the EIP and the business port used by the pod. For more information, see [Configure an access control policy for the Internet border](/help/en/cloud-firewall/cloudfirewall/user-guide/create-inbound-and-outbound-access-control-policies-for-the-internet-firewall).
    
-   **Node security group:** Traffic through the EIP is still subject to the security group of the node where the pod runs. Make sure the client IP address is allowed for inbound and outbound traffic, and that the pod's business port is open. For more information, see [Configure cluster security groups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters).
    

## References

-   [Use network policies in an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies) -- control access to the public IP address of a pod using network policies.
    
-   [ACK Extend Network Controller](/help/en/ack/product-overview/ack-extend-network-controller) -- component changelog for `ack-extend-network-controller`.
    
-   [Terway](/help/en/ack/product-overview/terway) -- component changelog for Terway.
    
-   [Node-level network configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-settings-for-individual-nodes-in-a-terway-cluster#task-2221756) -- configure a shared public IP address for a group of pods using an Internet NAT gateway.
    
-   [Configure a fixed IP address, an independent virtual switch, and a security group for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod#task-2236831) -- per-pod network isolation.
    
-   [Notes on pod access to external networks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-pod-to-access-an-external-network) -- access resources within a VPC from pods.
    
-   [Use gateway DNAT rules to directly access pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dnat-to-expose-a-pod) -- use Destination Network Address Translation (DNAT) to expose a pod without allocating an EIP.
    
-   [Container network FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks) -- troubleshoot container network issues.
    
-   [Configure cluster security groups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters) -- security group configuration for ACK clusters.
