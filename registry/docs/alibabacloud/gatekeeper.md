The gatekeeper component facilitates the management and enforcement of policies executed by Open Policy Agent (OPA) in Kubernetes clusters. This component allows you to manage the labels of namespaces. This topic describes the features, usage notes, and release notes for gatekeeper.

## Overview

OPA is an open source policy engine that is commonly used to implement policies in stacks in a standardized and context-aware manner. You can use the gatekeeper component to manage and implement OPA policies, and manage labels of namespaces in Container Service for Kubernetes (ACK) clusters. For more information about OPA, see [Open Policy Agent](https://www.openpolicyagent.org/). The following figure shows the architecture of gatekeeper.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6511095471/CAEQJhiBgMCmsfae_xgiIGFhMTliYmNjNzBmMDRhMWVhYTk5Y2RmNGMzMDYxNTk53963382_20230830144006.372.svg)

For more information about how to install gatekeeper, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

## Usage notes

You can use gatekeeper to constrain pod deployments in specific namespaces based on labels. In this example, a constraint is defined to declare that all pods that are created in a specific namespace must be labeled with gatekeeper-test-label. For more information about how to use gatekeeper, see [How to use Gatekeeper](https://open-policy-agent.github.io/gatekeeper/website/docs/howto).

1.  Run the following command to create a test namespace named test-gatekeeper and add the name=test-gatekeeper label to the namespace:
    
    ```
    kubectl create ns test-gatekeeper
    kubectl label ns test-gatekeeper name=test-gatekeeper
    ```
    
2.  Run the following command to create a constraint template that can be used to define constraints on pod labels:
    
    ```
    kubectl apply -f - <<EOF
    apiVersion: templates.gatekeeper.sh/v1beta1
    kind: ConstraintTemplate
    metadata:
      name: k8srequiredlabels
    spec:
      crd:
        spec:
          names:
            kind: K8sRequiredLabels
          validation:
            openAPIV3Schema:
              properties:
                labels:
                  type: array
                  items:
                    type: string
      targets:
        - target: admission.k8s.gatekeeper.sh
          rego: |
            package k8srequiredlabels
            violation[{"msg": msg, "details": {"missing_labels": missing}}] {
              provided := {label | input.review.object.metadata.labels[label]}
              required := {label | label := input.parameters.labels[_]}
              missing := required - provided
              count(missing) > 0
              msg := sprintf("you must provide labels: %v", [missing])
            }
    EOF
    ```
    
    It requires about 10 seconds to initialize the constraint template.
    
3.  Run the following command to create a constraint from the preceding constraint template. The constraint declares that all pods to be created in a namespace that has the name=test-gatekeeper label must be labeled with gatekeeper-test-label.
    
    ```
    kubectl apply -f - <<EOF
    apiVersion: constraints.gatekeeper.sh/v1beta1
    kind: K8sRequiredLabels
    metadata:
      name: pod-must-have-gatekeeper-test-label
    spec:
      match:
        kinds:
          - apiGroups: [""]
            kinds: ["Pod"]
        namespaceSelector:
          matchExpressions:
          - key: name
            operator: In
            values: ["test-gatekeeper"]
      parameters:
        labels: ["gatekeeper-test-label"]
    
    EOF
    ```
    
    It requires about 10 seconds to initialize the constraint.
    
4.  Check whether the namespace is constrained.
    
    -   Run the following command to create a pod that is not labeled with `gatekeeper-test-label` in the test-gatekeeper namespace. The test-gatekeeper namespace has the `name=test-gatekeeper` label.
        
        ```
        kubectl -n test-gatekeeper run test-deny --image=nginx --restart=Never
        ```
        
        Expected output:
        
        ```
        Error from server ([denied by pod-must-have-gatekeeper-test-label] you must provide labels: {"gatekeeper-test-label"}): admission webhook "validation.gatekeeper.sh" denied the request: [denied by pod-must-have-gatekeeper-test-label] you must provide labels: {"gatekeeper-test-label"}
        ```
        
        The test-gatekeeper namespace has the `name=test-gatekeeper` label. The pod is created without the `gatekeeper-test-label` label. Therefore, the pod creation fails.
        
    -   Run the following command to create a pod that is labeled with `gatekeeper-test-label` in the test-gatekeeper namespace. The test-gatekeeper namespace has the `name=test-gatekeeper` label.
        
        ```
        kubectl -n test-gatekeeper run test-pass -l gatekeeper-test-label=pass --image=nginx --restart=Never
        ```
        
        Expected output:
        
        ```
        pod/test-pass created
        ```
        
        The test-gatekeeper namespace has the `name=test-gatekeeper` label. The pod is created with the `gatekeeper-test-label` label. Therefore, the pod creation succeeds.
        
    -   Run the following command to create a pod that is not labeled with `name=test-gatekeeper` in a namespace that is not subject to the constraint:
        
        ```
        kubectl -n default run test-deny --image=nginx --restart=Never
        ```
        
        Expected output:
        
        ```
        pod/test-deny created
        ```
        
        The namespace is not subject to the constraint. Therefore, the pod creation succeeds. The created pod does not have the `name=test-gatekeeper` label.
        
    
    The preceding steps show that gatekeeper can be used to constrain pod creations in a specific namespace. In this example, the pod to be created in the namespace must have the gatekeeper-test-label label.
    

## Release notes

### **March 2025**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.18.2.192-ge2860248-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/gatekeeper:v3.18.2.192-ge2860248-aliyun

2025-03-04

-   OPA Gatekeeper is updated to 3.18.2. The gatekeeper component depends on OPA Gatekeeper. For more information, see [v3.18.2](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.18.2).
    
-   The component's Go version is upgraded to 1.23.6 to improve stability.
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **December 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.17.1.174-g6383c639-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/gatekeeper:v3.17.1.174-g6383c639-aliyun

2024-12-09

OPA Gatekeeper is updated to 3.17.1. The gatekeeper component depends on OPA Gatekeeper. For more information, see [v3.17.1](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.17.1).

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### September **2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.16.3.158-g5e73c0ad-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/gatekeeper:v3.16.3.158-g5e73c0ad-aliyun

2024-09-25

OPA Gatekeeper is updated to 3.16.3. The gatekeeper component depends on OPA Gatekeeper. For more information, see [v3.16.3](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.16.3).

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **March 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.15.1.150-g29b8b2a8-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/gatekeeper:v3.15.1.150-g29b8b2a8-aliyun

2024-03-27

OPA Gatekeeper is updated to 3.15.1. The gatekeeper component depends on OPA Gatekeeper. For more information, see [v3.15.1](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.15.1).

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **October 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.12.0.138-g1ee37e37-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/gatekeeper:v3.12.0.138-g1ee37e37-aliyun

2023-10-09

-   OPA Gatekeeper is updated to 3.12.0. The gatekeeper component depends on OPA Gatekeeper. For more information, see [v3.12.0](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.12.0).
    
-   Policies can be configured to handle Service deletion events.
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **April 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.10.0.130-g0e79597d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.10.0.130-g0e79597d-aliyun

2023-04-18

-   OPA Gatekeeper is updated to 3.10.0. The gatekeeper component is dependent on OPA Gatekeeper. For more information, see [v3.10.0](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.10.0).
    
-   By default, the data replication feature is disabled. You can enable this feature on the Add-ons page of the ACK console. For more information, see [Replicating Data](https://open-policy-agent.github.io/gatekeeper/website/docs/v3.10.x/sync/).
    
-   Policies can be configured to handle namespace deletion events.
    
-   Kubernetes 1.26 is supported.
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **June 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.8.1.113-geb7947ef-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.8.1.113-geb7947ef-aliyun

2022-06-08

-   OPA Gatekeeper is updated to 3.8.1. The gatekeeper component is dependent on OPA Gatekeeper. For more information, see [v3.8.1](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.8.1).
    
-   By default, auditing pods are disabled. You can enable auditing pods on the Add-ons page of the ACK console.
    
-   Component configurations about the CPU resources, memory, and the number of replicated pods can be modified on the Add-ons page of the ACK console.
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **April 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.7.1.93-gaf375989-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.7.1.93-gaf375989-aliyun

2022-04-02

The Mutation feature can be enabled on the Add-ons page of the ACK console. By default, the Mutation feature is disabled. For more information, see [Mutation](https://open-policy-agent.github.io/gatekeeper/website/docs/mutation/).

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **February 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.7.0.84-gf5fd3ffd-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.7.0.84-gf5fd3ffd-aliyun

2022-02-15

The performance of the component is optimized. The issue of abnormal CPU utilization in extreme cases is fixed.

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **January 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.7.0.82-gafe4391b-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.7.0.82-gafe4391b-aliyun

2022-01-14

-   OPA Gatekeeper is updated to 3.7.0. The gatekeeper component is dependent on OPA Gatekeeper. For more information, see [v3.7.0](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.7.0).
    
-   The ARM64 architecture is supported.
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **September 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.6.0.62-g156146d-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.6.0.62-g156146d-aliyun

2021-09-20

-   gatekeeper 3.6.0.62 and later versions support only ACK clusters that run Kubernetes 1.16.9 and later.
    
-   OPA Gatekeeper is updated to 3.6.0. The gatekeeper component is dependent on OPA Gatekeeper. For more information, see [v3.6.0](https://github.com/open-policy-agent/gatekeeper/releases/tag/v3.6.0).
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **March 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.3.0.24-8e68abc-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.3.0.24-8e68abc-aliyun

2021-03-16

-   gatekeeper can be installed in registered clusters.
    
-   OPA Gatekeeper is updated to 3.3.0. The gatekeeper component is dependent on OPA Gatekeeper.
    

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.

### **August 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.1.0.11-24bab09-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/gatekeeper:v3.1.0.11-24bab09-aliyun

2020-08-20

OPA Gatekeeper is updated to 3.1.0-beta.12. The gatekeeper component is dependent on OPA Gatekeeper.

**Note**

OPA Gatekeeper is an open source project based on which gatekeeper is developed.

If exceptions occur during the component update, changes to cluster resources may fail. We recommend that you perform the update during off-peak hours.
