In an ACK Edge cluster, use an application set (YurtAppSet) to deploy applications across multiple node pools. YurtAppSet provides flexible response mechanisms that detect changes in node pool labels. This enables unified management of workload configurations—such as the number of instances and software versions—across multiple node pools. This topic describes how to efficiently manage and deploy applications in an ACK Edge cluster using YurtAppSet.

## Background information

#### **Traditional Solution**

In edge computing scenarios, compute nodes often have distinct regional distribution characteristics. The same application may need to be deployed on compute nodes in different regions. For example, when using Deployment, the traditional approach is to first assign identical labels to compute nodes in the same region. Then, create multiple Deployments, each using NodeSelector to target a different label. This achieves deployment of the same application across multiple regions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8834282771/CAEQVBiBgIDm6ZuS5hkiIGI5YTk4MzhhMzM4YTQ1ODY4YjliODI0ZjIxY2U4Njcx4196494_20240130165603.746.svg)

As regional distribution expands and application requirements vary across regions, operations and maintenance become more complex. This complexity manifests in several ways:

-   Tedious updates: When an application version changes, you must manually update all Deployments to maintain consistency across regions. This reduces update efficiency.
    

-   Complex management: As the number of managed regions increases, you must manually differentiate and maintain Deployments for each region. This increases your operations and maintenance workload.
    

-   Redundant configurations: Deployment configurations across multiple regions are highly similar. This makes configuration management cumbersome and error-prone.
    

#### **Application Set Management Solution**

An application set (YurtAppSet) is a feature provided by Container Service for Edge. It simplifies distributed deployments in edge computing scenarios by providing a higher-level abstraction for unified management of multiple workloads—such as Deployment resources—including creation, update, and deletion.

YurtAppSet addresses common issues in traditional solutions—such as low update efficiency, complex management, and redundant configurations—and improves operations and maintenance efficiency and application deployment flexibility.

-   workloadTemplate: Unified template definition
    
    YurtAppSet lets you define a single workloadTemplate to manage workloads across multiple regions. This reduces redundant deployment configurations and makes batch operations—such as creation, update, and deletion—more efficient and consistent.
    
-   nodepoolSelector: Automated deployment
    
    YurtAppSet uses the nodepoolSelector mechanism to flexibly select target node pools. It synchronizes with dynamic changes in node pools. When new node pools are created or existing ones are removed, nodepoolSelector automatically detects and matches the latest suitable node pools for workload distribution and deployment. This reduces your operations and maintenance burden.
    
-   workloadTweaks: Region-specific custom configurations
    
    When application requirements differ between regions, YurtAppSet provides the workloadTweaks feature. This lets you customize workloads in specific regions to meet region-specific requirements without managing or updating each workload independently.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8834282771/CAEQVBiBgICuxqKS5hkiIGFmM2E4NTZhMGJjYzRlZGVhYjg3NGMyYzk1ODVkNDll4196494_20240130165603.746.svg)

## Create Application Set Instances

-   If the ACK Edge cluster runs version 1.26 or later, deploy applications using YurtAppSet.
    
-   If the ACK Edge cluster runs a version earlier than 1.26, deploy applications using UnitedDeployment.
    

## Version 1.26 and Later

Create a YurtAppSet application set instance that uses a Deployment workload template.

The complete YAML example template is as follows:

```
apiVersion: apps.openyurt.io/v1beta1
kind: YurtAppSet
metadata:
  name: example
  namespace: default
spec:
  revisionHistoryLimit: 5
  pools:
  - np1xxxxxx
  - np2xxxxxx
  nodepoolSelector:
    matchLabels:
      yurtappset.openyurt.io/type: "nginx"
  workload:
    workloadTemplate:
      deploymentTemplate:
        metadata:
          labels:
            app: example
        spec:
          replicas: 2
          selector:
            matchLabels:
              app: example
          template:
            metadata:
              labels:
                app: example
            spec:
              containers:
              - image: nginx:1.19.1
                imagePullPolicy: Always
                name: nginx
    workloadTweaks:
    - pools:
      - np2xxxxxx
      tweaks:
        replicas: 3
        containerImages:
        - name: nginx
          targetImage: nginx:1.20.1
        patches:
        - path: /metadata/labels/test
          operation: add
          value: test
```

The following table describes the relevant fields:

**Field**

**Description**

**Required**

spec.pools

Specify the list of node pool names (slice type) where applications need to be deployed. Prioritize using nodepoolSelector to specify node pools.

No

spec.nodepoolSelector

Select node pools where applications need to be deployed using labelSelector. If both pools and nodepoolSelector are specified, their union is used.

> `nodepoolSelector` selects node pools by matching the labels (metadata.Labels) of `NodePool` resources. To modify these labels, find and edit the YAML of the corresponding `NodePool` on the Custom Resources page in the cluster console.

No

spec.workload.workloadTemplate

Specify the Workload template to manage. Currently, `deploymentTemplate` and `statefulSetTemplate` templates are supported.

Yes

spec.workload.workloadTweaks

Specify custom modifications for the Workload.

No

spec.workload.workloadTweaks\[\*\].pools

Specify the node pools (slice type) where this modification applies.

No

spec.workload.workloadTweaks\[\*\].nodepoolSelector

Select which node pools will be modified using labelSelector.

No

spec.workload.workloadTweaks\[\*\].tweaks.replicas

Specify the number of replicas for the modified Workload.

No

spec.workload.workloadTweaks\[\*\].tweaks.containerImages

Specify the container image for the modified Workload.

No

spec.workload.workloadTweaks\[\*\].tweaks.patches

Modify any field of the workloadTemplate using the \`patch\` field.

No

spec.workload.workloadTweaks\[\*\].tweaks.patches\[\*\].path

Specify the path of the field to modify within the workloadTemplate.

No

spec.workload.workloadTweaks\[\*\].tweaks.patches\[\*\].operation

Specify the operation to perform on the path (currently supports: add/remove/replace).

No

spec.workload.workloadTweaks\[\*\].tweaks.patches\[\*\].value

Specify the latest value after modification (effective only for add/replace operations).

No

status.conditions

Indicates the current status of YurtAppSet, including node pool selection status and Workload status.

status.readyWorkloads

Indicates the number of Workloads managed by YurtAppSet where all replicas are ready.

status.updatedWorkloads

Indicates the number of Workloads managed by YurtAppSet where all replicas are updated to the latest version.

status.totalWorkloads

Indicates the total number of Workloads managed by YurtAppSet.

## Versions Earlier Than 1.26

Create a UnitedDeployment instance that uses a Deployment workload template.

The complete YAML example template is as follows:

```
apiVersion: apps.kruise.io/v1alpha1
kind: UnitedDeployment
metadata:
  name: example
  namespace: default
spec:
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: example
  template:
    deploymentTemplate:
      metadata:
        creationTimestamp: null
        labels:
          app: example
      spec:  
        selector:
          matchLabels:
            app: example
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: example
          spec:
            containers:
            - image: nginx:1.19.3
              imagePullPolicy: Always
              name: nginx
            dnsPolicy: ClusterFirst
            restartPolicy: Always
  topology:
    subsets:
    - name: cloud
      nodeSelectorTerm:
        matchExpressions:
        - key: alibabacloud.com/nodepool-id
          operator: In
          values:
          - np4b9781c40f0e46c581b2cf2b6160****
      replicas: 2
    - name: edge
      nodeSelectorTerm:
        matchExpressions:
        - key: alibabacloud.com/nodepool-id
          operator: In
          values:
          - np47832359db2e4843aa13e8b76f83****
      replicas: 2
      tolerations:
      - effect: NoSchedule
        key: apps.openyurt.io/taints
        operator: Exists
```

The following table describes the relevant fields:

**Field**

**Description**

spec.workloadTemplate

Represents the supported Workload templates. Node pools currently support `deploymentTemplate/statefulSetTemplate` templates.

spec.topology.subsets

Specify multiple node pools.

spec.topology.subsets\[\*\].name

The name of the node pool.

spec.topology.pools\[\*\].nodeSelectorTerm

For node pool host affinity configuration to correspond with the NodePool, use `apps.openyurt.io/nodepool` as the Key and the node pool ID as the Value.

**Note**

On the **Node Pools** page, view the node pool ID below the **Name** of the corresponding cloud and edge node pools.

spec.topology.pools\[\*\].tolerations

Host toleration configuration for the node pool.

spec.topology.pools\[\*\].replicas

The number of Pod instances under each node pool.

## Manage Edge Applications Using Application Sets

-   Upgrade an application version: Modify fields in `spec.workload.workloadTemplate` to trigger the upgrade process. The controller applies the updated template to workloads in each node pool, which then triggers the node pool controller to upgrade pods.
    
-   Perform a grayscale update for an application in a region: Modify the `spec.workload.workloadTweak[*].containerImages` configuration to trigger image updates for application pods in the corresponding node pool.
    
-   Scale an application in a region: Modify the `spec.workload.workloadTweak[*].replicas` configuration to trigger scaling operations for application pods in the corresponding node pool.
    
-   Deploy an application to a new region: Create a new node pool that matches the spec.nodepoolSelector label. YurtAppSet detects changes in node pool resources and automatically creates a workload for that node pool. Then, add nodes from that region to the node pool.
    
-   Take an application offline in a region: Delete the node pool in the corresponding region. YurtAppSet automatically deletes the workload associated with that region.
