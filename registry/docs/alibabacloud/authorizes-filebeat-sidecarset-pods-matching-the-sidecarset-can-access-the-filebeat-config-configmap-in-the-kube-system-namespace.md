You can use the OpenKruise SidecarSet feature to automatically inject sidecar containers into pods scheduled to virtual nodes. This decouples application containers from auxiliary function containers. This topic describes how to create a SidecarSet to define sidecar containers and automatically inject them into virtual node pods.

## **Terms**

-   Sidecar: A design pattern that separates auxiliary application functions from the application itself into separate processes or containers. This pattern lets you add various features to an application non-intrusively, which avoids extra configuration code to meet third-party component requirements.
    
-   Sidecar container: An additional container added to a pod that extends and enhances the main container without modifying it.
    
-   [SidecarSet](https://openkruise.io/zh/docs/user-manuals/sidecarset): A core feature of Alibaba Cloud's open source cloud-native application automation engine [OpenKruise](https://openkruise.io/zh/). SidecarSet automatically injects sidecar containers into eligible pods. This decouples the definition and lifecycle of sidecar containers (such as monitoring and log agents) from application containers.
    

## Scope

ACK virtual nodes support both ECI and ACS computing power. When using ACS, both CPU and GPU computing power are supported.

## Prerequisites

-   The cluster version is 1.22 or later, and the cluster type is ACK managed cluster Pro or ACK dedicated cluster.
    
-   You have installed the **ack-virtual-node** component, version v2.10.0 or a later version. For more information, see [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node).
    
-   You have installed the **ack-kruise** component, and its version is v1.3.0 or a later version. For more information, see [OpenKruise](/help/en/ack/product-overview/openkruise).
    
    **Important**
    
    Note: In virtual node scenarios, all SidecarSet features in OpenKruise v1.3.0 and earlier versions are supported. However, new SidecarSet features in versions later than 1.3.0 are not supported.
    
-   You have customized the parameter settings of the Kube API Server component and set `SidecarSetServerlessPod=true` in **featureGates** to enable the feature gate for the SidecarSet feature. For more information, see [Customize Control Plane Component Parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811#section-26f-us6-6gu).
    

## **Features**

#### **SidecarSet**

You can match all pods scheduled to virtual nodes by specifying the label `serverless.alibabacloud.com/virtual-node: "true"`, in the same way as the default SidecarSet. This label is added after the pod is confirmed to be scheduled to a virtual node. For more information about how to use the default SidecarSet, see [SidecarSet](https://openkruise.io/zh/docs/user-manuals/sidecarset).

Another common SidecarSet feature is cross-namespace referencing of ConfigMaps and Secrets. DaemonSet core containers often rely on ConfigMaps (such as parameter settings). When injecting DaemonSet core containers into application pods, the application pods and ConfigMaps are usually in different namespaces. Because virtual node scenarios do not support DaemonSets, use sidecar containers instead. You can reference ConfigMaps and Secrets across namespaces in the sidecar container's volume using the `Namespace/Name` format.

**Note**

To reference ConfigMaps and Secrets across namespaces, you must first complete authorization. For more information, see [SidecarSetResourceBinding](#QdDeB).

**Expand to view a YAML example of SidecarSet mounting a ConfigMap**

```
apiVersion: apps.kruise.io/v1alpha1
kind: SidecarSet
metadata:
  name: filebeat-sidecarset
spec:
  selector:
    matchLabels:      
      serverless.alibabacloud.com/virtual-node: "true" # Matches all pods scheduled to virtual nodes.
  updateStrategy:
    type: NotUpdate
  containers:
  - name: filebeat
    image: busybox
    imagePullPolicy: IfNotPresent    
    args: [
      "/bin/sh",
      "-c",
      "cat /etc/filebeat.yml && sleep 36000", # This example only prints the filebeat configuration content.
    ]    
    volumeMounts:
    - name: config
      mountPath: /etc/filebeat.yml
      readOnly: true
      subPath: filebeat.yml    
  volumes:
  - name: config
    configMap:
      name: kube-system/filebeat-config # Use the namespace/name format to reference a ConfigMap in another namespace.
```

#### **SidecarSetResourceBinding**

For security reasons, you must explicitly authorize SidecarSetResourceBinding when introducing ConfigMaps and Secrets from other namespaces into a sidecar container volume.

**Note**

This authorization grants read-only permission (Get, List, Watch) to ConfigMaps and Secrets.

**Expand to view a YAML example of SidecarSetResourceBinding**

```
# Authorizes filebeat-sidecarset. Pods matching the SidecarSet can access the filebeat-config ConfigMap in the kube-system namespace.
apiVersion: sidecarset.alibabacloud.com/v1alpha1
kind: SidecarSetResourceBinding
metadata:
  name: filebeat-sidecarset-resourcebinding
  namespace: kube-system # This SidecarSetResourceBinding only authorizes resources in the kube-system namespace.
  labels:
spec:
  subjects:
    - kind: SidecarSet
      name: filebeat-sidecarset
  resourceRefs:
    - kind: ConfigMap # Only grants read-only permission (Get, List, Watch).
      name: filebeat-config
```

#### **Container Startup and Shutdown Order**

Sidecar containers often need to start before application containers and exit after them. You can achieve this by referring to [Configure container startup and shutdown order](/help/en/eci/user-guide/set-container-start-and-exit-order) (ECI) and [Configure the startup and shutdown order of Sidecar containers](/help/en/cs/user-guide/declaring-container-types) (ACS).

#### **Automatically Terminate Sidecar Containers**

For Job-type pods, sidecar containers may prevent the Job from terminating after the application container completes. You can resolve this issue by [forcefully terminating the sidecar container and ignoring the container exit code](/help/en/eci/user-guide/declaring-container-types).

#### **Upgrade Sidecar Containers**

After using the Sidecar pattern, you may need to upgrade sidecar containers. You can use the existing [Sidecar hot upgrade](https://openkruise.io/zh/docs/user-manuals/sidecarset#sidecar%E7%83%AD%E5%8D%87%E7%BA%A7%E7%89%B9%E6%80%A7) feature of OpenKruise, which enables seamless upgrades of sidecar containers without affecting pod availability and is fully compatible with the current virtual node method.

#### **Collect Standard Output Logs**

You can collect the standard output logs of the application container by mounting the standard output logs of the virtual node pod (as an stdlog volume) to a specified directory in the sidecar container. For more information, see [Mount an stdlog volume to collect standard output logs from a container](/help/en/eci/user-guide/mount-stdlog).

**Expand to view a YAML example of SidecarSet mounting stdlog**

```
apiVersion: apps.kruise.io/v1alpha1
kind: SidecarSet
metadata:
  name: filebeat-sidecarset
spec:
  selector:
    matchLabels:
      serverless.alibabacloud.com/virtual-node: "true" # Matches all pods scheduled to virtual nodes.
  updateStrategy:
    type: NotUpdate
  containers:
  # This example only prints the sidecar container log content.
  - name: filebeat
    image: busybox
    imagePullPolicy: IfNotPresent
    args: [
      "/bin/sh",
      "-c",
      "cat /var/log/std/filebeat/0.log && sleep 36000",
    ]    
    volumeMounts:    
    - name: stdlog # Mounts the pod's standard output log volume /var/log/std directory for the sidecar container to read.
      mountPath: /var/log/std
      readOnly: true
  volumes:  
  - name: stdlog
    csi:
      driver: stdlogplugin.csi.alibabacloud.com
```

## **Operation Example**

This section demonstrates how to inject a sidecar container (filebeat container) into an application pod (echo-server). You can use this example to design your application.

1.  You can deploy a SidecarSet to automatically inject sidecar containers into application pods on virtual nodes.
    
    1.  You can deploy a ConfigMap to mount to the sidecar container later.
        
        ```
        kubectl apply -f filebeat-config.yaml
        ```
        
        The filebeat-config.yaml content is as follows. This example only mounts and prints the configuration file (filebeat.yml) to the sidecar container. The related variables are not effective or require replacement.
        
        ```
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: filebeat-config
          namespace: kube-system
          labels:
            k8s-app: filebeat
        data:
          filebeat.yml: |-
            filebeat.inputs:
            - type: log
              paths:
                - /var/log/std/*.log
              processors:
                - add_kubernetes_metadata:
                    host: ${NODE_NAME} # Not effective. Do not modify. Use directly.
                    matchers:
                    - logs_path:
                        logs_path: "/var/log/std/"
        
            # To enable hints based autodiscover, remove `filebeat.inputs` configuration and uncomment this:
            #filebeat.autodiscover:
            #  providers:
            #    - type: kubernetes
            #      node: ${NODE_NAME}
            #      hints.enabled: true
            #      hints.default_config:
            #        type: container
            #        paths:
            #          - /var/log/containers/*${data.kubernetes.container.id}.log
        
            processors:
              - add_cloud_metadata:
              - add_host_metadata:
        
            cloud.id: ${ELASTIC_CLOUD_ID}  # Not effective. Do not modify. Use directly.
            cloud.auth: ${ELASTIC_CLOUD_AUTH}  # Not effective. Do not modify. Use directly.
        
            output.elasticsearch:
              hosts: ['${ELASTICSEARCH_HOST:elasticsearch}:${ELASTICSEARCH_PORT:9200}']
              username: ${ELASTICSEARCH_USERNAME}  # Not effective. Do not modify. Use directly.
              password: ${ELASTICSEARCH_PASSWORD}  # Not effective. Do not modify. Use directly.
        ```
        
    2.  You can deploy a SidecarSet to describe the sidecar container.
        
        ```
        kubectl apply -f sidecarset.yaml
        ```
        
        The sidecarset.yaml content is as follows. In this example, the filebeat container, acting as a sidecar container, prints the configuration file content and mounts an stdlog volume to collect the application pod's standard output logs.
        
        ```
        apiVersion: apps.kruise.io/v1alpha1
        kind: SidecarSet
        metadata:
          name: filebeat-sidecarset
        spec:
          selector:
            matchLabels:
              serverless.alibabacloud.com/virtual-node: "true" # Matches all pods scheduled to virtual nodes.
          updateStrategy:
            type: NotUpdate
          containers:
          # This example does not actually run filebeat; it uses busybox cat instead.
          #- name: filebeat
          #  image: docker.elastic.co/beats/filebeat:8.6.1
          #  args: [
          #    "-c", "/etc/filebeat.yml",
          #    "-e",
          #  ]
          - name: filebeat
            image: busybox
            imagePullPolicy: IfNotPresent
            args: [
              "/bin/sh",
              "-c",
              "cat /etc/filebeat.yml && sleep 36000",
            ]
            env:
            - name: ECI_SIDECAR_CONTAINER         # Indicates that the sidecar container exits after the application container.
              value: "true"
            volumeMounts:
            - name: config
              mountPath: /etc/filebeat.yml
              readOnly: true
              subPath: filebeat.yml
            - name: stdlog                        # Mounts the pod's standard output logs for the sidecar container to read.
              mountPath: /var/log/std
              readOnly: true
          volumes:
          - name: config
            configMap:
              name: kube-system/filebeat-config  # Uses the Namespace/Name format to reference a ConfigMap in another namespace.
          - name: stdlog
            csi:
              driver: stdlogplugin.csi.alibabacloud.com
        ```
        
    3.  You can authorize the sidecar container to access the ConfigMap.
        
        If the application pod and ConfigMap are in different namespaces, you must explicitly authorize the sidecar container injected into the application pod to access the ConfigMap using SidecarSetResourceBinding.
        
        ```
        kubectl apply -f sidecarset-resourcebinding.yaml
        ```
        
        The sidecarset-resourcebinding.yaml content is as follows. This example plans to deploy the application pod in the `default` namespace, while the ConfigMap is in the `kube-system` namespace. Therefore, authorization is required.
        
        ```
        # Authorizes filebeat-sidecarset. Pods matching the SidecarSet can access the filebeat-config ConfigMap in the kube-system namespace.
        apiVersion: sidecarset.alibabacloud.com/v1alpha1
        kind: SidecarSetResourceBinding
        metadata:
          name: filebeat-sidecarset-resourcebinding
          namespace: kube-system # This SidecarSetResourceBinding only authorizes resources in the kube-system namespace.
          labels:
        spec:
          subjects:
            - kind: SidecarSet
              name: filebeat-sidecarset
          resourceRefs:
            - kind: ConfigMap
              name: filebeat-config
        ```
        
2.  You can deploy the application pod scheduled to the virtual node.
    
    ```
    kubectl apply -f echo-server.yaml
    ```
    
    The echo-server.yaml content is as follows. This Deployment contains one replica, and the pod contains a single container. After adding the `alibabacloud.com/eci: "true"` label, the pod is scheduled to a virtual node.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: echo-server
      labels:
        app: echo-server
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: echo-server
      template:
        metadata:
          labels:
            app: echo-server        
            alibabacloud.com/eci: "true"
        spec:
          containers:
            - name: echo-server
              image: hashicorp/http-echo
              imagePullPolicy: IfNotPresent
              args:
                - -listen=:8080
                - -text="hello world"
    ```
    
3.  You can confirm that the sidecar container is automatically injected into the application pod and verify the mounting result.
    
    1.  You can view the application pod.
        
        ```
        kubectl get pod
        ```
        
        The expected output is as follows. The application pod contains two containers, indicating successful sidecar container injection.
        
        ```
        NAME                          READY   STATUS    RESTARTS   AGE
        echo-server-f8bdc5844-r44nj   2/2     Running   0          14m
        ```
        
    2.  You can verify that the sidecar container has mounted the application pod's standard output logs.
        
        ```
        kubectl exec echo-server-f8bdc5844-r44nj -c filebeat -- cat /var/log/std/echo-server/0.log
        ```
        
        The expected output is as follows. You can see the application pod's standard output logs.
        
        ```
        2025-04-29T11:26:06.783205694+08:00 stderr F 2025/04/29 03:26:06 Server is listening on :8080
        ```
        
    3.  You can verify that the sidecar container has mounted the cross-namespace configuration file.
        
        ```
        kubectl exec echo-server-f8bdc5844-r44nj -c filebeat -- cat /etc/filebeat.yml
        ```
        
        The expected output is as follows, indicating normal mounting.
        
        **Expand to view example output**
        
        ```
        filebeat.inputs:
        - type: log
          paths:
            - /var/log/std/*.log
          processors:
            - add_kubernetes_metadata:
                host: ${NODE_NAME} # Not effective. Do not modify. Use directly.
                matchers:
                - logs_path:
                    logs_path: "/var/log/std/"
        
        # To enable hints based autodiscover, remove `filebeat.inputs` configuration and uncomment this:
        #filebeat.autodiscover:
        #  providers:
        #    - type: kubernetes
        #      node: ${NODE_NAME}
        #      hints.enabled: true
        #      hints.default_config:
        #        type: container
        #        paths:
        #          - /var/log/containers/*${data.kubernetes.container.id}.log
        
        processors:
          - add_cloud_metadata:
          - add_host_metadata:
        
        cloud.id: ${ELASTIC_CLOUD_ID}  # Not effective. Do not modify. Use directly.
        cloud.auth: ${ELASTIC_CLOUD_AUTH}  # Not effective. Do not modify. Use directly.
        
        output.elasticsearch:
          hosts: ['${ELASTICSEARCH_HOST:elasticsearch}:${ELASTICSEARCH_PORT:9200}']
          username: ${ELASTICSEARCH_USERNAME}  # Not effective. Do not modify. Use directly.
          password: ${ELASTICSEARCH_PASSWORD}  # Not effective. Do not modify. Use directly. 
        ```
