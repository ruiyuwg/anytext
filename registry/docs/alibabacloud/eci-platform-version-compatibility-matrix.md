When you upgrade a cluster, the system automatically checks for compatibility between the ECI Platform Version and the Kubernetes version. If an ECI pod has an ECI Platform Version that is incompatible with the target Kubernetes version, you must manually delete and recreate the pod before you can upgrade the cluster's Kubernetes version. Before you upgrade a cluster, ensure that the ECI Platform Version is compatible with the Kubernetes version.

## Introduction to the ECI Platform Version

The ECI Platform Version is the version number for a specific runtime environment of the Elastic Container Instance (ECI) infrastructure, which helps distinguish between different ECI runtime environments. As the ECI runtime environment evolves, new ECI Platform Versions are released to add features, fix bugs, or apply patches.

By default, an ECI pod that you create in an or an ACK cluster includes an annotation with the key `k8s.aliyun.com/eci-platform-version`. The value of this annotation is the ECI Platform Version number. The following is an example:

```
apiVersion: v1
kind: Pod
metadata:
  annotations:
    k8s.aliyun.com/eci-platform-version: 1.0.0
  name: demo-76d8d9f9d8-l7pwm
  namespace: default
...
```

## **Kubernetes versions compatible with the ECI Platform Version**

The Kubernetes versions that are compatible with each ECI Platform Version are listed in the following table.

**Important**

The ECI Platform Version for newly created ECI pods is 1.1.0. For existing ECI pods, the platform version is 1.0.0 or empty.

**ECI Platform Version**

**Compatible Kubernetes versions**

1.1.0

1.12 and later

1.0.0

1.12, 1.14, 1.16, 1.18, 1.20, 1.22, and 1.24

Empty

(The `k8s.aliyun.com/eci-platform-version` annotation does not exist)

1.12, 1.14, 1.16, 1.18, 1.20, 1.22, and 1.24

## **Upgrade** the ECI Platform Version

1.  Connect to the cluster. For more information, see [Get a cluster KubeConfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    
2.  Retrieve information about the ECI pods whose platform version is 1.0.0 or empty.
    
    The information includes the pod's namespace, name, ECI Platform Version, and ECI instance ID. This information is returned in a comma-separated format.
    
    ```
    kubectl get pods -A -o json | jq -r '.items[] | select(.metadata.annotations["k8s.aliyun.com/eci-platform-version"] == "1.0.0" or .metadata.annotations["k8s.aliyun.com/eci-platform-version"] == null or .metadata.annotations["k8s.aliyun.com/eci-platform-version"] == "") | select(.spec.nodeName | startswith("virtual-kubelet")) | "\(.metadata.namespace),\(.metadata.name),\(.metadata.annotations["k8s.aliyun.com/eci-platform-version"] // ""),\(.metadata.annotations["k8s.aliyun.com/eci-instance-id"])"'
    ```
    
    Example output:
    
    ```
    default,portal-server-57dfc4fdc8-2gl64,,eci-2zecdr8z5jy******
    ```
    
3.  Delete and recreate the target ECI pod.
    
    Example command:
    
    ```
    kubectl delete pod portal-server-57dfc4fdc8-2gl64 -n default
    ```
    
    Example output:
    
    ```
    pod "portal-server-57dfc4fdc8-2gl64" deleted
    ```
    
    After the ECI pod is deleted and recreated, its ECI Platform Version is automatically upgraded to the latest version. You can run the following command to verify the ECI Platform Version.
    
    ```
    kubectl get pods -A -o json | jq -r '.items[] | select(.spec.nodeName | startswith("virtual-kubelet")) | "\(.metadata.namespace),\(.metadata.name),\(.metadata.annotations["k8s.aliyun.com/eci-platform-version"] // ""),\(.metadata.annotations["k8s.aliyun.com/eci-instance-id"] // "")"'
    ```
