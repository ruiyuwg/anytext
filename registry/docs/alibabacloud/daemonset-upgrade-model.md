The native DaemonSet upgrade model has limitations in edge computing scenarios. For example, a network disconnection between the cloud and the edge can cause a node to become NotReady, which blocks a DaemonSet rolling upgrade. You may also need to trigger an application upgrade directly on an edge node for an over-the-air (OTA) update. The extended DaemonSet upgrade models, **AdvancedRollingUpdate** and **OTA**, address these issues. You can configure these models to prevent upgrade blocks and perform OTA updates.

## **Prerequisites**

An ACK Edge cluster of v1.26.3-aliyun.1 or later.

## **Upgrade model description**

-   **AdvancedRollingUpdate upgrade model**
    
    This model prevents a DaemonSet upgrade from being blocked when a node becomes **NotReady** due to a network disconnection. During the upgrade, it ignores **NotReady** nodes and upgrades pods on **Ready** nodes first. When a node becomes **Ready** again, the model automatically upgrades the DaemonSet pod on that node.
    
-   **OTA upgrade model**
    
    This upgrade model lets you check whether a pod can be updated and trigger a pod upgrade directly on an edge node by calling a REST API.
    

## **Configuration description**

```
apiVersion: apps/v1
kind: DaemonSet
metadata:
  annotations:
    apps.openyurt.io/update-strategy: AdvancedRollingUpdate
    apps.openyurt.io/max-unavailable: 30%
spec:
  updateStrategy:
    type: OnDelete
```

**Parameter**

**Description**

apps.openyurt.io/update-strategy

Enables an extended upgrade model. Valid values: AdvancedRollingUpdate or OTA.

apps.openyurt.io/max-unavailable

This configuration is effective only in `AdvancedRollingUpdate` mode. It defines the maximum number of unavailable pods during an advanced rolling upgrade. The value of this annotation is the same as the `maxUnavailable` configuration of a native DaemonSet. If not specified, the default value is `10%`.

spec.updateStrategy.type

Must be set to `OnDelete`. This requires you to manually delete old pods to trigger the creation of new version pods.

## **Usage**

### **AdvancedRollingUpdate upgrade model**

The following code provides an example of an AdvancedRollingUpdate upgrade. In this example, a DaemonSet named `nginx-daemonset` is created. It uses the `AdvancedRollingUpdate` upgrade model and allows a maximum of `30%` of pods to be unavailable during the rolling upgrade.

```
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  annotations:
    apps.openyurt.io/update-strategy: AdvancedRollingUpdate
    apps.openyurt.io/max-unavailable: 30%
spec:
  selector:
    matchLabels:
      app: nginx
  updateStrategy:
    type: OnDelete
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.19.4
EOF
```

### OTA upgrade model

-   OTA upgrade APIs
    
    The edge-hub component on an edge node provides REST APIs for OTA upgrades.
    
    -   `GET /pods`
        
        Retrieves pod information on the node. You can determine whether a pod can be updated by checking the `PodNeedUpgrade` condition in `Pod.status.conditions`.
        
    -   `POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/imagepull`
        
        This API lets you trigger an image pull for a specific DaemonSet pod. The path parameters `{ns}` and `{podname}` specify the namespace and name of the pod. For large pod images that require a long time to start, you can use this API to pre-pull the image to reduce the startup time.
        
        > The image pull API is supported only in clusters of v1.32-aliyun.1 or later.
        
    -   `POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade`
        
        This API lets you trigger an update for a specific DaemonSet pod. The path parameters `{ns}` and `{podname}` represent the namespace and name of the pod.
        
-   OTA upgrade example
    
    Create a DaemonSet named `nginx-daemonset` that uses the OTA upgrade model. After the DaemonSet's image is updated, the pods on the node are not automatically updated. You must use the REST API to check for and trigger pod upgrades on the edge node.
    
    ```
    cat <<EOF | kubectl apply -f -
    apiVersion: apps/v1
    kind: DaemonSet
    metadata:
      name: nginx-daemonset
      annotations:
        apps.openyurt.io/update-strategy: OTA
    spec:
      selector:
        matchLabels:
          app: nginx
      updateStrategy:
        type: OnDelete
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.19.4
    
    EOF
    ```
    
-   OTA upgrade use case
    
    1.  Log on to an edge node and check whether any pods on the node require an upgrade.
        
        ```
        curl http://127.0.0.1:10267/pods
        ```
        
        If the output for \`default/nginx-daemonset-bwzss\` contains `PodNeedUpgrade=true` in `pod.Status.Conditions`, the corresponding pod requires an upgrade.
        
    2.  (Optional) Pre-pull the image.
        
        ```
        curl -X POST http://127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/imagepull
        ```
        
        Expected output:
        
        ```
        Image pre-pull requested for pod default/nginx-daemonset-bwzss
        ```
        
    3.  Upgrade the pod.
        
        ```
        curl -X POST http://127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/upgrade
        ```
        
        Expected output:
        
        ```
        Start updating pod default/nginx-daemonset-bwzss
        ```
        

## **References**

For more information, see [Manage pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods).
