By default, containerd 2.1 is used by Container Service for Kubernetes (ACK) clusters that run Kubernetes 1.33. containerd 2.1 provides enhanced image security, performance, and stability. This topic describes the release notes for containerd 2.1, including feature updates, deprecated features, and deprecated APIs.

## **Features**

> This section describes only the key features of containerd 2.1. For more information, see [containerd release notes](https://github.com/containerd/containerd/blob/main/docs/containerd-2.0.md).

-   The Node Resource Interface (NRI) feature is supported. This feature is enabled by default.
    
-   The Container Device Interface (CDI) feature is supported. This feature is enabled by default.
    
-   The Sandbox API is supported.
    

## **Deprecated features and APIs**

> This section describes the key features and APIs that are deprecated in containerd 2.1. For more information, see [containerd release notes](https://github.com/containerd/containerd/blob/main/docs/containerd-2.0.md).

-   The following parameters are deprecated: registry.auths, registry.configs, and registry.mirrors. For more information about how to customize the containerd parameters in the Container Service for Kubernetes (ACK) console, see [Customize the containerd parameters of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-containerd-configurations-of-a-node-pool).
    
-   Docker images of the Schema 1 format, such as `application/vnd.docker.distribution.manifest.v1+json` and `application/vnd.docker.distribution.manifest.v1+prettyjws`, are no longer supported. Requests for pulling such images will be rejected. For more information about how to identify Docker images of the Schema 1 format, see [Identify Docker images of the Schema 1 format](#f89612f74b85r).
    
-   The `io_uring_*` system call (syscall) is removed from the default seccomp profile of containerd. By default, containers cannot make the `io_uring_*` syscall.
    
-   The CRI v1alpha2 API is deprecated. CRI v1alpha2 API has been deprecated since Kubernetes 1.26.
    
-   The AUFS snapshotter is deprecated.
    
-   The `[plugins."io.containerd.internal.v1".tracing]` parameter is removed.
    

## **Upgrade notes**

-   The CRI v1alpha2 API is no longer supported in container 2.1. If your business is reliant on the API, you can migrate to the CRI v1 API.
    
-   Before you upgrade containerd, we recommend that you refer to [Identify deprecated APIs](#26ab10923ffu9) to check whether deprecated APIs are used by your business. You can also run an auto-check in the ACK console. To do this, go to the cluster details page in the ACK console, choose **Operations** > **Upgrade Cluster** in the left-side navigation pane, and then click **Precheck**.
    
-   During the upgrade, the system automatically checks for deprecated APIs. If deprecated APIs are detected, the system suspends the upgrade.
    

### **Identify deprecated APIs**

#### **Use kubectl**

Run the following command to check whether containerd-related directories are mounted to pods in the cluster:

> You must first install kubectl and jq in your cluster. To install jq, run the `yum install jq` command.

```
kubectl get pods --all-namespaces -o json |
jq -r '.items[] |
  select(.spec.volumes[]?.hostPath.path as $p |
    ["/", "/var", "/var/","/var/run", "/var/run/",
     "/var/run/containerd", "/var/run/containerd/",
     "/var/run/containerd/containerd.sock",
     "/run", "/run/", "/run/containerd", "/run/containerd/",
     "/run/containerd/containerd.sock"] | index($p)) |
  .metadata.namespace + "/" + .metadata.name'
```

#### **Use ctr**

If containerd uses deprecated APIs, you can run the following `ctr deprecations list` command to list the deprecated API:

```
ctr deprecations list
```

### Identify Docker images of the Schema 1 format

```
ctr --namespace k8s.io images list 'labels."io.containerd.image/converted-docker-schema1"'
```

### **Upgrade methods**

You must first refer to [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) to upgrade the Kubernetes version of the control plane of the cluster to 1.33 or later. Then, refer to [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates) to upgrade containerd.

## FAQ

#### **Does the upgrade affect my business?**

Refer to [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates) to upgrade containerd. When you upgrade containerd by upgrading node pools, in-place upgrades are performed by default. In-place upgrades do not restart containers. Therefore, your business can run as normal.

#### **After I upgrade containerd from V1.6 to V2.1, can I roll back the upgrade?**

No, you cannot roll back containerd from V2.1 to V1.6. The shim-v3 API is introduced in containerd V2.1. The shim-v3 API cannot be rolled back to the shim-v2 API in containerd 1.6.

#### **Does data loss occur when I upgrade containerd from V1.6 to V2.1?**

If you follow the instructions in [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates) to upgrade containerd, an in-place upgrade is performed by default. In this case, containerd 2.1 uses the original data directories, which does not lead to data loss.

## References

-   [containerd release notes](https://github.com/containerd/containerd/blob/v2.0.0/RELEASES.md)
    
-   [containerd update notes](https://github.com/containerd/containerd/blob/main/docs/containerd-2.0.md)
    
-   [Kubernetes 1.33](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-33-release-notes)
    
-   [Release notes for containerd](/help/en/ack/product-overview/release-notes-for-containerd/)
