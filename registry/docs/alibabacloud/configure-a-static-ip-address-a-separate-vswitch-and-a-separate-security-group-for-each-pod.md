If you want to manage and isolate user traffic, configure network policies, and manage IP addresses in a fine-grained manner, you can enable the Terway Trunk elastic network interface (ENI) feature for your Container Service for Kubernetes (ACK) cluster. This feature allows you to specify a static IP address, a separate vSwitch, and a separate security group for each pod.

## Background information

Trunk elastic network interfaces (ENIs) are new virtual network interfaces. Trunk ENIs support all features provided by ENIs. In addition, when the maximum number of ENIs that you can use is reached and you want to use additional ENIs, you can associate these ENIs with a Trunk ENI. Each of these ENIs can be separately allocated to a pod.

After you enable the Trunk ENI feature for a cluster, you can customize the configuration of specific pods to use the additional ENIs that are associated with a Trunk ENI in exclusive mode and set the other pods to share the original ENIs. The pod custom configurations feature is optional. By default, all pods use IP addresses allocated from shared ENIs. To allow a pod to use custom configurations, you must first create a claim to enable the custom pod configurations feature for the pod.

After you enable custom pod configurations, the terway-controlplane component is deployed in the cluster. The following figure shows how the component works.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0893138471/CAEQLBiBgMDTmfeaiRkiIGM0MjIyNGNjYTQ0MDQ5MWI4MjJmNGY5OGEwMzQzMzBh3963382_20230830144006.372.svg)

## Limits

-   If you use an ACK dedicated cluster, go to the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas) and apply for the `Container network supports Terway ENI Trunking mode`.
    
-   The number of pods that can be created on a node is limited. For more information, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#section-5og-9uc-s1f).
    
-   Pod security group rules do not apply to the traffic between pods on the same node and the traffic between the pods and the node on which the pods are created. If you want to apply pod security group rules in these scenarios, you can configure a network policy.
    

## **Scope of** separate pod configuration

Separate pod configuration is achieved by creating a dedicated ENI for each pod and configuring exclusive vSwitches and security groups for the ENI.

The following node configuration modes are relied upon for separate pod configuration:

**Nodes that support Trunk ENIs**

**Nodes that support ENIs (For more information, see** [Configure the node network](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-node-pool-level-container-network)**)**

Supported cluster types

ACK managed clusters

ACK managed clusters and ACK dedicated clusters

Deployment density

Regular pods use shared ENIs. The specified pods use exclusive ENIs, which results in higher overall density.

All pods on the node can only use exclusive ENIs, which leads to lower density.

Supported node types

ECS nodes

ECS nodes

Instance types

You need to choose instances that support Trunk ENIs and have the `EniTrunkSupported=true` response parameter. For more information about the instances that support Trunk ENIs, see [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes).

Instances that support ENIs.

## Step 1: Enable the Terway Trunk ENI feature for a cluster

If you use an ACK dedicated cluster, you must [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for the permissions to use ECS instances that support Trunk ENIs. For ACK managed clusters, you do not need to apply for permissions to use ECS instances that support Trunk ENIs.

## Enable the Terway Trunk ENI feature in a new cluster

Create an ACK cluster, set **Network Plug-in** to **Terway**, and set **Terway Mode** to **Support for ENI Trunking**. In this mode, the type of the network plug-in is terway-eniip. For more information, see [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb) and [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).

**Note**

By default, the Trunk ENI feature is enabled for newly created ACK managed clusters that run Kubernetes 1.31 or later versions.

**Important**

The Trunk ENI feature cannot be disabled after it is enabled for a new cluster.

## Enable the Trunk ENI feature in an existing cluster

### Prerequisites

The type of the network plug-in used by the cluster is terway-eniip. For more information about the Terway network plug-in, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#section-s31-hbe-1rk).

**Note**

You can query the network plug-in that you have installed on the **Add-ons** page of the cluster.

### Limits

-   This feature may not be supported by ACK managed clusters that are created before June 2020. Perform [Step 1](#320ae87e37jij) to check whether your cluster supports this feature.
    
-   Static IP addresses, vSwitches, and security groups cannot be disabled after they are enabled.
    

### **Step 1: Check whether the cluster supports the Terway Trunk ENI feature**

**Important**

-   Skip this step if you use an ACK dedicated cluster. You need to apply for permissions to use Trunk ENIs. You can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for permissions to use ECS instances that support Trunk ENIs.
    
-   For existing ACK managed clusters or ACK managed clusters that are upgraded from ACK dedicated clusters, you need to check whether the cluster supports the Terway Trunk ENI feature and modify the configuration. You do not need to apply for permissions to use ECS instances that support Trunk ENIs.
    

Run the following command to check the token configuration:

```
kubectl get secret -nkube-system addon.network.token
```

Expected output:

```
NAME                  TYPE     DATA   AGE
addon.network.token   Opaque   1      69m
```

If the token configuration exists, proceed to the next step. If the token configuration does not exist, the Terway Trunk ENI feature is not supported by the cluster. In this case, you can create a new cluster with the Terway Trunk ENI feature enabled.

### Step 2: Enable terway-eniip and enable the Terway Trunk ENI feature for the cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab and find the **terway-eniip** component.
    
4.  In the **terway-eniip** card, click **Upgrade** to update terway-eniip to the latest version.
    
    If the **Upgrade** button is not displayed, the latest version of terway-eniip is installed. You can skip this step.
    
5.  Enable terway-eniip.
    
    1.  Run the following command to modify the eni-config ConfigMap:
        
        ```
        kubectl edit cm -nkube-system eni-config
        ```
        
    2.  Modify the parameters in the **eni-config** ConfigMap.
        
        **Parameter**
        
        **Example**
        
        **Description**
        
        enable\_eni\_trunking
        
        true
        
        Enable the Trunk ENI feature. This feature cannot be disabled after it is enabled.
        
        credential\_path
        
        /var/addon/token-config
        
        If you use an ACK managed cluster, the ConfigMap does not contain this parameter. You need to manually add the parameter.
        
        **Important**
        
        -   Do not modify other parameters.
            
        -   The content of the **eni-config** ConfigMap must be in JSON format.
            
        
        Example:
        
        ```
        apiVersion: v1
        data:
          eni_conf: |
            {
              "min_pool_size": 0,
              "enable_eni_trunking": true,
              "credential_path": "/var/addon/token-config",
              ...
            }
        kind: ConfigMap
        ```
        
    3.  Run the following command to restart Terway pods for the modified ConfigMap to take effect:
        
        ```
        kubectl delete pod -n kube-system -l app=terway-eniip
        ```
        
    
6.  Install **terway-controlplane** from the **Networking** tab of the **Add-ons** page after you enable terway-eniip.
    
    After terway-controlplane is installed, **Installed** is displayed in the **terway-controlplane** card.
    

## **Step 2: Create a PodNetworking**

Terway allows you to use custom resource definitions (CRDs) named PodNetworking to describe network configurations. You can create multiple PodNetworkings to design different network planes.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Custom Resources**.
    
3.  On the **Custom Resources** page, click the **CRDs** tab, and then click **Create from YAML**.
    
    The following code block shows a sample PodNetworking:
    
    ```
    apiVersion: network.alibabacloud.com/v1beta1
    kind: PodNetworking
    metadata:
      name: example
    spec:
      allocationType:
        type: Fixed # The policy that describes how IP addresses are allocated to pods. Valid values: Elastic and Fixed. 
        releaseStrategy: TTL # This parameter takes effect only if the PodNetworking uses the Fixed policy. If the PodNetworking uses the Elastic policy, you do not need to configure the releaseStrategy and releaseAfter parameters. 
        releaseAfter: "1h" # This parameter takes effect only if releaseStrategy is set to TTL. 
      selector:
        podSelector:
          matchLabels:
            foo: bar
        namespaceSelector:
          matchLabels:
            foo: bar
      securityGroupIDs:
      - sg-bpxxxx
      vSwitchOptions:
      - vsw-bpxxxx
    status:
      status: Ready               
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    allocationType
    
    (The policy that describes how IP addresses are allocated to pods)
    
    type
    
    Valid values:
    
    -   Elastic: Allocate elastic IP addresses (EIPs) to pods. The IP addresses are released after the pods are deleted.
        
    -   Fixed: Allocate static IP addresses to pods.
        
        After you enable this mode, PodNetworking takes effect only on pods with fixed names. By default, StatefulSets and pods without ownerReferences are supported. If you need to configure custom workloads, configure terway-controlplane in component management.
        
    
    **Note**
    
    If you use the Fixed policy, constraints are added to ensure that the zone where a pod is recreated is the same as the original zone.
    
    releaseStrategy
    
    The policy that describes how IP addresses are released. This parameter takes effect only if `type` is set to `Fixed`. Valid values:
    
    -   `TTL`: IP addresses are released with a delay. After a pod is deleted, the IP address of the pod is not released until the specified period of time ends. The minimum value is 5 minutes.
        
    -   `Never`: IP addresses are not released. If IP addresses are no longer used, you must manually delete PodENIs.
        
    
    releaseAfter
    
    The delay for releasing pod IP addresses. This parameter takes effect only if `releaseStrategy` is set to `TTL`. The value must be of the Go time type. Units: hour (`h`) and minute (`m`). Example: `2h45m` or `5m0s`. For more information, see [Go time type](https://pkg.go.dev/time#ParseDuration).
    
    selector
    
    (Label selectors that are used to select pods to use the current PodNetworking)
    
    podSelector
    
    -   A selector that is used to match pod labels. Pods that match this selector use the current PodNetworking.
        
    -   If both `podSelector` and `namespaceSelector` are configured, only pods that match both selectors use the current PodNetworking.
        
    -   Make sure that the labels of a pod match the **selectors** of only one PodNetworking ConfigMap. If a pod matches multiple PodNetworking ConfigMaps, the pod uses the network configurations in an arbitrary PodNetworking ConfigMap.
        
    
    namespaceSelector
    
    -   A selector that is used to match namespace labels. Pods that match this selector use the current PodNetworking.
        
    -   If both `podSelector` and `namespaceSelector` are configured, only pods that match both selectors use the current PodNetworking.
        
    -   Make sure that the labels of a pod match the **selectors** of only one PodNetworking ConfigMap. If a pod matches multiple PodNetworking ConfigMaps, the pod uses the network configurations in an arbitrary PodNetworking ConfigMap.
        
    
    vSwitchOptions
    
    \-
    
    -   Specifies the vSwitches used by pods. The logical relationship among multiple vSwitches is **OR**. Each pod can use only one vSwitch. Terway automatically selects a proper vSwitch for each pod.
        
    -   Constraints are added to ensure that the zones to which your pods can be scheduled are the same as the zones of the vSwitches that you specified in the vSwitchOptions parameter.
        
    -   Make sure that the zones of the vSwitches in vSwitchOptions are the same as those of the nodes to which pods are scheduled. In addition, make sure that these vSwitches can provide sufficient idle IP addresses. Otherwise, ACK fails to create pods.
        
    
    **Note**
    
    If you have enabled node auto scaling, the availability zone limits added by using the vSwitchOptions parameter may prevent the node pool from scaling out. For more information, see [FAQs about node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling).
    
    vSwitchSelectOptions (The policy that determines the vSwitch to use)
    
    vSwitchSelectionPolicy
    
    Valid values:
    
    -   `ordered`: This is the default value. vSwitches are used in the order they are filled in.
        
    -   `most`: Prioritizes the vSwitch with the most available IP addresses for use.
        
    -   `random`: vSwitches are selected randomly.
        
    
    **Note**
    
    Supported in Terway v1.11.0 and later.
    
    securityGroupIDs
    
    \-
    
    Specifies the IDs of security groups. Multiple security groups take effect at the same time. You can specify at most five security groups.
    
    eniOptions (The ENI type that is used by the pod)
    
    eniType
    
    Valid values:
    
    -   `Default`: This is the default mode. In clusters that run in Terway shared ENI mode, the Trunk ENI mode is used. In clusters that run in Terway ENI exclusive mode, the exclusive ENI mode is used.
        
    -   `ENI`: Use the exclusive ENI mode.
        
    -   `Trunk`: Use the Trunk ENI mode.
        
    
    **Note**
    
    Supported in Terway v1.11.0 and later.
    
4.  Click **Create**.
    
    After the PodNetworking is created, Terway automatically synchronizes the network configurations. The PodNetworking takes effect on pods only after the `status` of the PodNetworking changes to `Ready`.
    
    Run the following command to check whether the resource status is `ready`:
    
    ```
    kubectl describe PodNetworking example # Replace example with an actual custom resource name.
    ```
    

## (Optional) Step 3: Add labels to the namespace

After you deploy the PodNetworking, you must add the same labels to the specified namespace to ensure that the namespace is matched with the PodNetworking rules by adding labels to the namespace.

1.  Run the following command to create a test namespace named example:
    
    ```
    kubectl create ns example
    ```
    
2.  Run the following command to add the `foo=bar` label to the namespace:
    
    ```
    kubectl label namespaces example foo=bar # Replace example with the actual namespace name.
    ```
    
3.  Run the following command to query the labels of the namespace:
    
    ```
    kubectl get namespace example --show-labels # Replace example with the actual namespace name.
    ```
    
    Expected output:
    
    ```
     NAME      STATUS   AGE   LABELS
    example   Active   24s   foo=bar,kubernetes.io/metadata.name=example
    ```
    

## **(Optional) Step 4:** **Create a pod**

When ACK creates a pod, the labels of the pod are matched against PodNetworkings. If the pod does not match a PodNetworking, the pod is assigned an IP address from a shared ENI by default. If the pod matches a PodNetworking, an IP address is assigned to the pod based on the configurations specified in the PodNetworking.

Terway automatically creates CRDs named PodENI for pods that match PodNetworkings. PodENIs are used to track the resource usage of pods. PodENIs are managed by Terway. For more information about pod labels, see [Labels and Selectors](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/labels/).

1.  Create a my-nginx.yaml file with the following YAML template:
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: my-nginx # The name of the application. 
      namespace: example # Specify the namespace name as example. 
      labels:
        app: nginx
    spec:
      serviceName: "nginx-service"  
      replicas: 1    
      selector:
        matchLabels:
          app: nginx 
      template:
        metadata:
          labels:
            app: nginx
            foo: bar # Add the foo: bar label to the pod. 
        spec:
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80  
    
    If the StatefulSet requires persistent storage, you must set the volumeClaimTemplates parameter. 
    # Example:
    #  volumeClaimTemplates:
    #  - metadata:
    #      name: nginx-storage
    #    spec:
    #      accessModes: ["ReadWriteOnce"]
    #      storageClassName: "my-storage-class"
    #      resources:
    #        requests:
    #          storage: 1Gi
    ```
    
2.  Run the following command to deploy the example application named my-nginx: After the pod is deployed, verify the configuration. For more information, see [How do I check whether a pod uses the network configurations specified in a PodNetworking ConfigMap?](#p-vwk-ucp-did)
    
    ```
    kubectl apply -f my-nginx.yaml
    ```
    

## Stop terway-controlplane before cluster migration

After you enable the pod custom configurations feature for an ACK dedicated cluster, you cannot directly migrate workloads from the ACK dedicated cluster to an ACK managed Pro cluster. You must stop terway-controlplane before the migration starts and then enable terway-controlplane after the migration is complete.

1.  Perform the following steps before you start the migration:
    
    1.  Run the following command to stop terway-controlplane:
        
        ```
        kubectl scale deploy -nkube-system terway-controlplane --replicas 0
        ```
        
    2.  Run the following command to configure a webhook:
        
        ```
        # Back up the webhook configurations. 
        kubectl get mutatingwebhookconfigurations.admissionregistration.k8s.io terway-controlplane -oyaml > terway-controlplane.mutatingwebhookconfigurations.yaml
        kubectl get validatingwebhookconfigurations.admissionregistration.k8s.io terway-controlplane -oyaml > terway-controlplane.validatingwebhookconfigurations.yaml
        # Delete the webhook configuration. 
        kubectl delete -f terway-controlplane.mutatingwebhookconfigurations.yaml
        kubectl delete -f terway-controlplane.validatingwebhookconfigurations.yaml
        ```
        
2.  Verify that the migration is successful.
    
    **Note**
    
    For more information about cluster migration, see [Hot migration from ACK dedicated clusters to ACK managed Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters#task-2069568).
    
    -   If the migration fails, run the following command to restore the webhook and terway-controlplane:
        
        ```
        # Restore the webhook configuration. 
        kubectl apply -f terway-controlplane.mutatingwebhookconfigurations.yaml
        kubectl apply -f terway-controlplane.validatingwebhookconfigurations.yaml
        # Restore terway-controlplane. 
        kubectl scale deploy -nkube-system terway-controlplane --replicas 1
        ```
        
    -   If the migration succeeds, run the following command to delete the relevant resources:
        
        ```
        kubectl delete deploy -nkube-system terway-controlplane
        ```
        
    
3.  Install the terway-controlplane component from the **Add-ons** page. For more information, see [Manage system components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).
    

## FAQ

### How do I check whether a pod uses the network configurations specified in a PodNetworking ConfigMap?

1.  If a pod uses the network configurations specified in a PodNetworking, an `annotation` whose value is `k8s.aliyun.com/pod-networking` is added to the pod after the pod is created.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      annotations:
        k8s.aliyun.com/pod-eni: "true"
        k8s.aliyun.com/pod-networking: podnetworking
      labels:
        app: example
        pod-ip: elastic
    ```
    
2.  Terway automatically creates a PodENI with the same pod name and namespace to record the network configurations used by the pod.
    
    ```
    kubectl get podenis.network.alibabacloud.com <my-nginx-0> -n <example> -o yaml # Replace <my-nginx-0> with the name of the pod. Replace <example> with the namespace where the pod is located.
    ```
    
    The following output shows that the pod uses the network configurations specified in the PodNetworking ConfigMap.
    
    ```
    apiVersion: network.alibabacloud.com/v1beta1
    kind: PodENI
    metadata:
      finalizers:
      - pod-eni
      generation: 1
      name: <my-nginx-0>
      namespace: default
    spec:
      allocations:
      - allocationType:
          type: Elastic
        eni:
          id: eni-bp1xxxx
          mac: 00:16:xx:xx:xx:xx
          securityGroupIDs:
          - sg-bp1xxxx
          vSwitchID: vsw-bp1xxxx
          zone: cn-hangzhou-h
        ipv4: 192.168.x.x
        ipv4CIDR: 192.168.x.x/19
        ipv6: 2408:x:x:x:x:x:x:x
        ipv6CIDR: 2408:x:x:x::/64
      zone: cn-hangzhou-h
    status:
      eniInfos:
        eni-bp1xxxx:
          id: eni-bp1xxxx
          status: Bind
          vid: 1001
      instanceID: i-bp1xxxx
      phase: Bind
      podLastSeen: "2021-xx-xxT00:00:00Z"
      trunkENIID: eni-bp1xxxx
    ```
    

### Why does a pod not use the network configurations specified in the desired PodNetworking ConfigMap after the pod is created?

1.  Make sure that the status of the PodNetworking is `Ready`.
    
2.  Make sure that the pod labels match only the labels in the desired PodNetworking.
    
3.  If the PodNetworking uses the Fixed policy, pods that are not created by StatefulSets do not match the PodNetworking.
    

## **References**

-   You can configure multiple security groups for an ENI to apply pod network firewall policies in a more flexible manner. For more information, see [Configure multiple security groups for an ENI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-multiple-security-groups-with-an-eni).
    
-   For more information about how to troubleshoot container network issues, see [FAQs about container networks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks).
