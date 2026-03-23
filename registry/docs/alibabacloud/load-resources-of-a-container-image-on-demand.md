Container startup is slow when the runtime must download and decompress an entire image before the container can run — even when only a fraction of that data is needed at launch. On-demand image loading lets a container start after fetching only the data blocks required at runtime, reducing pull time from tens of seconds to single digits.

For example, pulling a 1.34 GB NodeBB image from Docker Hub takes 36 seconds under standard conditions, with another 38 seconds to start the application. With an accelerated image, the pull takes 4 seconds and the application starts in 9 seconds.

> On-demand loading shifts some latency from pull time to runtime: the container starts faster, but individual file accesses may trigger small background fetches. To minimize runtime latency for files read at startup, configure a **Prefetch File List** in the repository settings.

## Prerequisites

Before you begin, make sure you have:

-   A Container Registry Enterprise Edition instance. See [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance#task488)
    
-   The Virtual Private Cloud (VPC) of the cluster added to the access control list (ACL) of the Container Registry Enterprise Edition instance. Accelerated images run in VPCs only. See [Configure a VPC ACL](/help/en/acr/user-guide/configure-access-over-vpcs#task1305)
    
-   An ACK cluster running a supported version and operating system (see the compatibility table below)
    

## Compatibility

### Supported cluster types

**Cluster type**

**Minimum version**

Managed and dedicated editions

v1.16.9

ACK Edge clusters

v1.26.3

ACK Serverless clusters

v1.26.3

ACK Lingjun clusters

v1.26.3

Alibaba Cloud Container Compute Service (ACS)

v1.26.3

### Supported operating systems

-   Alibaba Cloud Linux 2.1903
    
-   Alibaba Cloud Linux 3.2104
    
-   Alibaba Cloud Linux 3.2104 LTS 64-bit ARM edition
    
-   Alibaba Cloud Linux UEFI 2.1903
    
-   CentOS 7.9
    

### Supported Container Registry editions by acceleration mode

**Acceleration mode**

**Supported editions**

Full mode

Standard Edition, Advanced Edition

Index-only mode

Basic Edition, Standard Edition, Advanced Edition

## Choose an acceleration mode

Select a mode based on your speed requirements, storage constraints, and runtime environment.

**Full mode**

**Index-only mode**

**Acceleration effect**

Baseline (100%)

~70% of full mode

**Accelerated image size**

~130% of base image

~3% of base image

**Conversion time (1 GB image)**

~25 seconds

~3 seconds

**Supported runtimes**

Docker and containerd

containerd only

**Base image deletable**

Yes

No — base image must remain

**Supported compression**

All formats

`tar` and `tgz` only (not `zstd`)

**Function Compute / SAE support**

Yes

No

**Status**

Generally available

Public preview

**Important**

Index-only mode is in public preview. Test it in a non-production environment before using it in production.

## Limitations

-   On-demand image loading is not supported in Alibaba Finance Cloud or Alibaba Gov Cloud regions.
    
-   Existing images require manual conversion to the accelerated format; only newly pushed images convert automatically after you enable acceleration on a repository.
    
-   Docker runtime does not support custom domain names for accelerated image repositories. If your container runtime is containerd, you can set custom domain names. See [Use a custom domain name to access a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/use-a-custom-domain-name-to-access-a-container-registry-enterprise-edition-instance#task-1955575).
    

## Convert a base image to an accelerated image

Enable image acceleration on a repository. After that, every image pushed to the repository converts automatically. The base image is not modified — the accelerated image is stored under a new tag.

**Accelerated image tag format:**

-   **Index-only mode:** `<base-tag>_accelerated`
    
    -   Requires containerd runtime
        
    -   The base image tag cannot be deleted while the accelerated image is in use
        
-   **Full mode:** `<base-tag>_accelerated` (Docker and containerd) or `<base-tag>_containerd_accelerated` (containerd only)
    
    -   The `_containerd_accelerated` image and its base image cannot be deleted while in use
        

The namespace and repository name of the accelerated image are identical to those of the base image.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance you want to manage.
    
5.  In the left-side navigation pane, choose **Repository** > **Repositories**.
    
6.  Find the repository for which you want to enable image acceleration. Click the repository name or click **Manage** in the **Actions** column, then click **Edit** in the upper-left corner.
    
7.  In the **Modify Settings** dialog box, go to the **Accelerated Image** section, select **Enabled**, choose an acceleration mode, and click **Confirm**. After you enable acceleration, every image pushed to the repository converts automatically. To receive a notification each time a conversion completes, configure an event notification with an expression-based trigger set to `_accelerated$`. See [Event notification](/help/en/acr/user-guide/event-notification/).
    
    -   **Full Mode:** Significantly accelerates container startup. The accelerated image is ~130% the size of the base image. Conversion takes ~25 seconds per 1 GB. Previously converted layers are not re-converted.
        
    -   **Index-only Mode:** Provides ~70% the acceleration effect of full mode. The accelerated image is ~3% the size of the base image. Conversion takes ~3 seconds per 1 GB. Previously indexed layers are not re-indexed.
        
8.  (Optional) Specify a **Prefetch File List**. Files in this list are prefetched when an accelerated container starts, reducing runtime latency for large files that must be read at startup. Enter one absolute file path per line. For directories, append a trailing slash (`/`).
    
    > If a large file (for example, a machine learning model or a static asset bundle) is always read during container initialization, add it to the Prefetch File List. This eliminates the on-demand fetch penalty for that file.
    

## Install the aliyun-acr-acceleration-suite component

The aliyun-acr-acceleration-suite component must run on each worker node that starts containers using accelerated images.

### ACK managed and dedicated clusters

**Enable acceleration when creating a node pool:**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, enable **Container Registry Acceleration** in the **Advanced Options** section. See [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    

**Enable acceleration on an existing node pool:**

> Toggling **Container Image Acceleration** on or off applies only to nodes added after the change. To apply the change to existing nodes, remove those nodes from the node pool and re-add them. See [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add existing ECS instances to an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, find the node pool and click **Edit** in the **Actions** column. In the **Advanced Options** section, enable **Container Registry Acceleration** and follow the instructions to update the node pool ConfigMap.
    

The **Status** column shows **Updating** while the node pool is being modified. When the status changes to **Active**, the modification is complete.

### Other cluster types

Add the label `alibabacloud.com/image-accelerate-enabled: true` to the node. This enables image acceleration and installs the image storage plugin automatically during node initialization.

**Cluster type**

**Reference**

ACK Serverless

[CreateClusterNodePool](/help/en/ack/serverless-kubernetes/developer-reference/api-cs-2015-12-15-createclusternodepool-serverless), [ModifyClusterNodePool](/help/en/ack/serverless-kubernetes/developer-reference/api-cs-2015-12-15-modifyclusternodepool-serverless)

ACK Edge (cloud-side node pool)

[Create and manage a node pool](/help/en/ack/ack-edge/user-guide/create-a-node-pool)

ACK Edge (edge-side node pool)

[Edge node pool management](/help/en/ack/ack-edge/user-guide/edge-node-pool-management#2287db2fa0h5o)

ACK Lingjun

[Overview of Lingjun node pools](/help/en/ack/ack-lingjun-managed-clusters/user-guide/overview-of-lingjun-node-pools#section-ksb-b56-0a0)

Alibaba Cloud Container Compute Service (ACS)

[Node label and taint management](/help/en/cs/user-guide/node-label-and-taint-management)

### Install the component via Add-ons

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  On the **Clusters** page, click the cluster name, then choose **Operations** > **Add-ons** in the left-side navigation pane.
    
3.  In the **Others** section of the **Add-ons** page, find **aliyun-acr-acceleration-suite** and click **Install**.
    
4.  In the confirmation dialog box, click **OK**.
    

To verify the installation:

-   Choose **Workloads** > **DaemonSets** to view DaemonSet installation details.
    
-   Choose **Workloads** > **Deployments** to view Deployment installation details.
    

When all Pods of the component are running, the installation is complete.

## Enable on-demand loading for workloads

### Step 1: Configure image pull credentials

**Warning**

Follow the principle of least privilege when configuring the Secret used to pull images. See [Attach a custom policy to a RAM user](/help/en/acr/user-guide/attach-a-custom-policy-to-a-ram-user).

Use one of the following methods:

**Option 1 (recommended): Use aliyun-acr-credential-helper**

This component pulls images without Secrets. If it's already configured for the cluster with the correct Container Registry Enterprise Edition instance information, skip this step. Otherwise, configure it now. See [Use the aliyun-acr-credential-helper component to pull images without using a secret](/help/en/acr/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294).

**Option 2: Label a Secret for accelerated image pulls**

> aliyun-acr-acceleration-suite v0.2.6 or later is required.

Create a Secret of type `kubernetes.io/dockerconfigjson` and label it `images.alibabacloud.com/accelerated: true`:

```
kubectl create secret docker-registry <SecretName> \
  --docker-server=<RegistryVpcDomain> \
  --docker-username=<UserName> \
  --docker-password=<Password>

kubectl label secrets <SecretName> images.alibabacloud.com/accelerated="true"
```

Replace the following placeholders:

**Placeholder**

**Description**

`<SecretName>`

Name for the Secret

`<RegistryVpcDomain>`

VPC endpoint of the Container Registry Enterprise Edition instance

`<UserName>`

Registry username

`<Password>`

Registry password

### Step 2: Attach the image acceleration label

Attach the label `k8s.aliyun.com/image-accelerate-mode: on-demand` to a workload or a namespace.

**Attach to a workload (Pod or Deployment):**

Run the following command to edit a Deployment:

```
kubectl edit deployment <deployment-name> -n <namespace>
```

Add the label under `spec.template.metadata.labels`:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        # Enable on-demand image loading for this workload
        k8s.aliyun.com/image-accelerate-mode: on-demand
    spec:
      containers:
        - image: test-registry-vpc.cn-hangzhou.cr.aliyuncs.com/test/nginx:latest
          name: test
          command: ["sleep", "3600"]
```

**Attach to a namespace (applies to all eligible workloads in the namespace):**

In the ACK console:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side navigation pane, click **Namespaces and Quotas**.
    
3.  On the **Namespace** page, find the namespace and click **Edit** in the **Actions** column.
    
4.  In the **Label** section of the **Edit Namespace** dialog box, set **Variable Key** to `k8s.aliyun.com/image-accelerate-mode` and **Variable Value** to `on-demand`, then click **OK**.
    

Using kubectl:

```
kubectl label namespaces <your-namespace> k8s.aliyun.com/image-accelerate-mode=on-demand
```

After the label is applied and base images have been converted, the aliyun-acr-acceleration-suite component automatically replaces the base image URL with the accelerated image URL when a Pod is created or updated in the labeled namespace, adds a `nodeSelector`, and schedules the Pod to an acceleration-enabled node.

## What's next

-   [Event notification](/help/en/acr/user-guide/event-notification/) — Monitor image conversion events
    
-   [Attach a custom policy to a RAM user](/help/en/acr/user-guide/attach-a-custom-policy-to-a-ram-user) — Set least-privilege permissions for image pulling
    
-   [Use the aliyun-acr-credential-helper component to pull images without using a secret](/help/en/acr/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294) — Simplify credential management
