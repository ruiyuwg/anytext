To minimize changes to YAML files, Elastic Container Instance provides the eci-profile feature. An eci-profile allows you to configure Elastic Container Instance resources at the cluster level and orchestrate pods based on selectors. This topic describes how to configure an eci-profile.

## Features of an eci-profile

To use Elastic Container Instance in Container Service for Kubernetes (ACK), you must deploy the ack-virtual-node component that is integrated with the Virtual Kubelet technology. This may result in the following issues:

-   To schedule pods to run on Elastic Container Instance, you must modify the YAML file of the upper-layer business.
    
-   To enable specific advanced features of Elastic Container Instance, you must modify the YAML file of the upper-layer business.
    

The preceding issues blur the lines between O&M jobs and business jobs. To help avoid these issues, Elastic Container Instance provides eci-profile configuration files. eci-profiles provide the following features:

-   ECI Scheduler
    
    In scenarios in which real nodes and virtual nodes are deployed, you can schedule Kubernetes pods to run on Elastic Container Instance by configuring pod labels, namespace labels, and Elastic Container Instance-based scheduling. To perform these configurations, you must modify existing resources in the clusters. The modifications may introduce vulnerabilities into your system.
    
    To address the issue, ECI Scheduler provides a new scheduling mechanism based on mutating webhooks. In an eci-profile, you can configure selectors. Then, the system filters pods based on the pod labels or namespace labels that are specified by the selectors. If a pod or its namespace has the corresponding labels specified in the selectors, the pod is automatically scheduled to run on Elastic Container Instance.
    
-   ECI Effect
    
    To allow some features of Elastic Container Instance to take effect, you must add annotations or labels to pods. Examples of these features include specifying instance types of Elastic Compute Service (ECS), enabling image caches, and configuring the Network Time Protocol (NTP) service. For more information, see [ECI Pod Annotation](/help/en/eci/user-guide/pod-annotations-1#topic-1860148).
    
    ECI Effect can automatically add annotations and labels to pods. You can specify the filter criteria and the annotations and labels to add when you configure selectors in an eci-profile. Pods that meet the filter criteria in the selectors are automatically scheduled to run on Elastic Container Instance. The specified annotations and labels are added to the pods.
    
-   Hot updates
    
    An eci-profile contains the configurations of the cluster IP address, hybrid cloud, log collection, and vSwitches. You can update the configurations based on your requirements.
    
    -   You do not need to restart the ack-virtual-node component to update the configurations.
        
    -   The updated configurations are immediately applied to newly created Elastic Container Instance pods, but are applied to existing Elastic Container Instance pods only after rolling releases are performed on the pods.
        

## **Precautions**

-   When you configure an eci-profile, make sure that the ack-virtual-node component in the cluster is of the latest version. For information about how to update ack-virtual-node, see [Manage components](/help/en/ack/manage-system-components).
    
-   If you want to use the ECI Scheduler feature, you must enable mutating webhooks. Pods in ACK Serverless clusters are automatically scheduled to run on elastic container instances. You do not need to use ECI Scheduler to schedule the pods.
    

## Configuration description

When the system creates a pod, the system reads the eci-profile configuration file (the ConfigMap named eci-profile) in the kube-system namespace. Then, the system creates the pod based on the configurations of the data section in the configuration file. You can run the `kubectl get cm -n kube-system eci-profile -o yaml` command to view the YAML file of the eci-profile. The YAML file template of eci-profiles:

```
apiVersion: v1
data:
  enableClusterIp: "true"
  enableHybridMode: "false"
  enableLinuxArm64Node: "false" 
  enableLogController: "false"
  enablePVCController: "false"
  enablePrivateZone: "false"
  enableReuseSSLKey: "false"
  featureGates: "WaitForFirstConsumer=false"
  securityGroupId: sg-2zeeyaaxlkq9sppl****
  selectors: ""
  slsMachineGroup: ""
  vSwitchIds: vsw-2ze23nqzig8inprou****,vsw-2ze94pjtfuj9vaymf****
  vpcId: vpc-2zeghwzptn5zii0w7****
kind: ConfigMap
metadata:
  creationTimestamp: "2023-01-11T08:28:14Z"
  name: eci-profile
  namespace: kube-system
  resourceVersion: "356"
  uid: b345fa8c-919e-41fc-a981-57864b1a****
```

You can modify the configurations of the data section in the eci-profile to configure selectors or update other required parameters.

**Parameter in the data section**

**Description**

**References**

selectors

You can add selectors and effects to implement the ECI Scheduler and ECI Effect features. Selectors include objectSelectors and namespaceSelectors. You can configure selectors based on your requirements.

[Configure selectors](#608bd88090xlj)

Other required parameters such as vpcId and vSwitchIds

Cluster-level parameters. Hot updates can be performed on the parameters. You can update the parameters based on your requirements.

[Update other required parameters in the data section](#8689e8c090a4a)

You can use one of the following methods to modify the eci-profile:

-   Run the kubectl edit command:
    
    ```
    kubectl edit configmap eci-profile -n kube-system
    ```
    
-   Use the Container Service for Kubernetes (ACK) console.
    
    1.  Log on to the [Container Service ACK console](https://cs.console.alibabacloud.com/).
        
    2.  On the Clusters page, find the cluster that you want to manage and click the name of the cluster.
        
    3.  In the left-side navigation pane of the cluster management page, choose **Configurations > ConfigMaps**.
        
    4.  Select **kube-system** from the Namespace drop-down list.
        
    5.  Find the eci-profile and click **Edit YAML** in the corresponding Actions column.
        

## Configure selectors

The selectors parameter contains the configurations of ECI Scheduler and ECI Effect. When the system creates pods, the system matches pods based on selectors. If a pod or its namespace has the corresponding labels in the selectors, the pod is automatically scheduled to run on Elastic Container Instance, or is added the specified annotations and labels to make the advanced features of Elastic Container Instance take effect.

You can configure multiple selectors for the selectors parameter. You must specify the name of each selector. You can also specify the following information of each selector based on your requirements:

-   namespaceSelector: the namespace labels to match.
    
-   objectSelector: the pod labels to match.
    
-   effect: the annotations and labels to dynamically add to the pods.
    

The configuration template of selectors:

**Note**

Design selectors based on your business scenario. Remove the comments when you configure selectors.

```
data:
  selectors: |
    [
      {
        "name": "selector-demo1", # The name of the selector. This is a required parameter.
        "namespaceSelector": {    # The namespace filter. This is an optional parameter based on namespace labels.
          "matchLabels": {        # The namespace labels to match. The logical relationship among multiple labels is AND.
            "eci": "true"
          }
        },
        "objectSelector": {       # The object filter. This is an optional parameter based on pod labels.
          "matchLabels": {        # The pod labels to match. The logical relationship among multiple labels is AND.
            "eci": "true"
          }
        },
        "effect": {               # The annotations and labels to dynamically add to the pods. This is an optional parameter.
          "annotations": {
            "k8s.aliyun.com/eci-use-specs": "ecs.c6.xlarge"
          },
          "labels": {
            "created-by-eci": "true"
          }
        }
      },
      {
        "name": "selector-demo2",   
        "objectSelector": {      
          "matchLabels": {     
            "eci": "test"
    	  }
        }
      }
    ]
```

In the preceding template, a selector named selector-demo1 provides the following capabilities:

If a pod and its namespace both have the `eci: true` label, the pod is automatically scheduled to run on Elastic Container Instance. The `"k8s.aliyun.com/eci-use-specs": "ecs.c6.xlarge"` annotation and the `created-by-eci: true` label are added to the pod.

**Important**

-   We recommend that you configure at least one of the namespaceSelector and objectSelector parameters for each selector. If both namespaceSelector and objectSelector are configured, the pod must match the values of both parameters. If none of them is configured but the effect parameter is configured, the effect settings are applied to all pods that are scheduled to run on Elastic Container Instance.
    
-   If you configure multiple selectors, the selectors are matched in sequence. After pods are matched, the annotations and labels specified in the effect settings are automatically added to the pods. These annotations and labels do not overwrite existing annotations and labels of the pods. If duplicate annotations or labels exist, the annotations or labels that have higher priorities are used. The existing annotations and labels of the pods have a higher priority than the annotations and labels specified in the effect settings of matched selectors. Annotations or labels in the effect settings of the selectors are assigned descending priorities in the sequence in which the selectors are matched.
    

After you configure selectors, you can run the following command to check whether the selectors take effect. If the returned YAML file contains the configured selectors, the selectors take effect. If the returned YAML file does not contain the configured selectors, check whether the selectors are formatted correctly.

```
kubectl get mutatingwebhookconfigurations -o yaml vk-webhook
```

## Configuration example 1: Schedule specific pods to run on Elastic Container Instance

In the following code, namespaceSelector and objectSelector are configured to provide the following capabilities:

If a pod has the `created-by-eci: true` label and the namespace of the pod has the `type: eci` label, the pod is scheduled to run on the elastic container instance.

```
data:
  selectors: |
    [
      {
        "name":"eci-selector",
        "namespaceSelector":{
          "matchLabels":{
            "type":"eci"
          }
        },
        "objectSelector":{
          "matchLabels":{
            "created-by-eci":"true"
          }
        }
      }
    ]
```

## Configuration example 2: Schedule specific pods to Elastic Container Instance and use GPU-accelerated ECS instance types to create Elastic Container Instance pods

In the following code, namespaceSelector and effect are configured to provide the following capabilities:

If the namespace to which a pod belongs has the `gpu: true` label, the pod is scheduled to run on Elastic Container Instance. The Elastic Container Instance pod is created based on the ecs.gn6v-c8g1.2xlarge GPU-accelerated ECS instance type and appended with the `gpu: test` label.

```
data:
  selectors: |
    [
      {
        "name":"gpu-namespace-selector",
        "namespaceSelector":{
          "matchLabels":{
            "gpu":"true"
          }
        },
        "effect": {
          "annotations": {
            "k8s.aliyun.com/eci-use-specs":"ecs.gn6v-c8g1.2xlarge"
          },        
          "labels":{
            "gpu":"test"
          }
        }
      }
    ]
```

## Configuration example 3: Schedule specific pods to Elastic Container Instance and enable automatic matching of image caches

In the following code, objectSelector and effect are configured to provide the following capabilities:

If a pod has the `imc: auto` label, the pod is scheduled to run on Elastic Container Instance. The automatic matching of image caches feature is enabled to create the pod.

```
data:
  selectors: |
    [
      {
        "name":"autoimc-object-selector",
        "objectSelector":{
          "matchLabels":{
            "imc":"auto"
          }
        },
        "effect": {
          "annotations": {
            "k8s.aliyun.com/eci-auto-imc": "true"
          }
        }
      }
    ]
```

## Update other required parameters in the data section

Other required parameters that are contained in the data section specify information that is required to create pods. For example, the vpcId parameter specifies the virtual private cloud (VPC) to which the pod belongs. The vSwitchIds parameter specifies the vSwitches that are associated with the pod. You can update the required parameters based on your requirements. The updated configurations take effect immediately without the need to restart the ack-virtual-node component. The following required parameters can be updated:

**Note**

The following parameters are cluster-level parameters. If you do not configure the parameters when you create an Elastic Container Instance pod, the configurations in the eci-profile are used for the parameters.

**Parameter**

**Example**

**Description**

enableClusterIp

"true"

Specifies whether to support the IP address of the cluster.

enableLinuxArm64Node

"false"

Specifies whether to enable ARM-based nodes. For more information, see [Schedule pods to an ARM-based virtual node](/help/en/eci/user-guide/scheduling-pods-to-virtual-nodes-in-the-arm-architecture).

enableLogController

"false"

Specifies whether to use the Custom Resource Definition (CRD) for Simple Log Service to collect logs of pods. If you set this parameter to true, you must also configure the

slsMachineGroup parameter.

enablePVCController

"false"

Specifies whether to enable online disk extension. If you set this parameter to true, the system can perform hot extensions on the PersistentVolumeClaims (PVCs) that are bound with disks.

enablePrivateZone

"false"

Specifies whether to use PrivateZone to resolve domain names.

enableReuseSSLKey

"false"

Specifies whether to enable reuse of SSL keys. If you set this parameter to true, SSL keys are reused when you create Elastic Container Instance pods. This makes pod creation more efficient.

**Important**

By default, when you create Elastic Container Instance pods, ack-virtual-node issues a unique SSL certificate to each pod. In cases where you want to create a large number of pods, this behavior greatly affects pod creation efficiency. After you enable reuse of SSL keys, ack-virtual-node issues the same SSL certificate to all pods. This improves efficiency at the cost of security.

featureGates

"WaitForFirstConsumer=false"

Specifies the canary feature. You can only configure WaitForFirstConsumer.

If you set WaitForFirstConsumer to true, the StorageClass uses the WaitForFirstConsumer mode when the ack-virtual-node is deployed in a cluster.

-   Before you set WaitForFirstConsumer to true, make sure that the csi-provisioner component is updated to the latest version.
    
-   After you set WaitForFirstConsumer to true, when PVCs are used by pods, the pods must be scheduled before the creation of PersistentVolumes (PVs) and backend storage are triggered. When the PVs and backend storage are created, the PVCs are bound with the PVs. In this case, the zone and region specified in the StorageClass are no longer effective. Instead, the zone and region of the node to which the pod is scheduled are used to create storage resources. This ensures that computing resources are preferentially scheduled.
    

For more information, see [Volume binding mode](https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode).

securityGroupId

sg-2ze0b9o8pjjzts4h\*\*\*\*

The security group to which the Elastic Container Instance pod belongs.

slsMachineGroup

"test-mg"

The machine group to which the Elastic Container Instance pod belongs. If you set the enableLogController parameter to true, you must specify this parameter.

vSwitchIds

vsw-2zeet2ksvw7f14ryz\*\*\*\*

The IDs of vSwitches with which the Elastic Container Instance pod is associated. Separate the vSwitch IDs with commas (,).

vpcId

vpc-2zeghwzptn5zii0w7\*\*\*\*

The ID of the VPC in which the Elastic Container Instance pod is deployed.

The following sample code shows how to configure the data section.

```
data:
  enableClusterIp: "true"
  enableHybridMode: "false"
  enableLinuxArm64Node: "false" 
  enableLogController: "false"
  enablePVCController: "false"
  enablePrivateZone: "false"
  enableReuseSSLKey: "false"
  securityGroupId: sg-2zeeyaaxlkq9sppl****
  selectors: ""
  slsMachineGroup: ""
  vSwitchIds: vsw-2ze23nqzig8inprou****,vsw-2ze94pjtfuj9vaymf****
  vpcId: vpc-2zeghwzptn5zii0w7****
```
