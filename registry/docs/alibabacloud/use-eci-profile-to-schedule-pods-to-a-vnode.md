eci-profile allows you to configure elastic container instances within a cluster and orchestrate pods based on selectors. This topic describes how to deploy and use the eci-profile component.

## **Features of eci-profile**

You can use eci-profile to filter pods by using the labels of pods and namespaces and implement the following features:

-   Add annotations and labels.
    
-   Execute scheduling policies.
    
    eci-profile can execute the following scheduling policies.
    
    **Policy**
    
    **Description**
    
    fair
    
    This policy specifies fair scheduling. kube-scheduler determines to schedule a pod to a real node or VNode.
    
    normalNodePrefer
    
    Pods are preferentially scheduled to real node. If real nodes are insufficient, pods can be scheduled to VNodes.
    
    virtualNodeOnly
    
    Pods are scheduled only to VNodes.
    

**Note**

In this topic, eci-profile uses selector custom resource definitions (CRDs) to automatically schedule pods. If you have deployed the legacy eci-profile that uses a ConfigMap to schedule pods, you can continue to use your eci-profile. We recommend that you update your eci-profile from the ConfigMap mode to the selector CRD mode. eci-profile of the ConfigMap mode no longer supports new features that are published in the future. For more information, see the [Update eci-profile](#c49352f0544or) section of this topic.

## Deploy eci-profile

### **Use VNodectl to deploy eci-profile**

If you have installed and configured the VNodectl tool, you can run the following commands to conveniently deploy eci-profile.

1.  Deploy eci-profile.
    
    ```
    vnode addon enable eci-profile --kubeconfig /path/to/kubeconfig
    ```
    
2.  View the deployment status of eci-profile.
    
    ```
    vnode addon list
    ```
    
    The following command output is returned. The status of eci-profile is enabled.
    
    ```
    |----------------|------------|------------|-------------------------------------------------|
    |   ADDON NAME   |   STATUS   | MAINTAINER |                   REPOSITORY                    |
    |----------------|------------|------------|-------------------------------------------------|
    | eci-profile    | enabled ✅ | ECI Group  | https://github.com/aliyuneci/eci-profile.git    |
    | vnode-approver | enabled ✅ | ECI Group  | https://github.com/aliyuneci/vnode-approver.git |
    |----------------|------------|------------|-------------------------------------------------|
    ```
    

### **Manually deploy eci-profile**

1.  Create a YAML file named eci-profile.yaml.
    
    Copy the following content to the YAML file based on the cluster version.
    
    ## V1.16 and later
    
    ```
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: eci-profile
    rules:
      - apiGroups:
          - ""
        resources:
          - nodes
          - namespaces
          - resourcequotas
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - ""
        resources:
          - pods
        verbs:
          - get
          - list
          - watch
          - create
          - patch
      - apiGroups:
          - "admissionregistration.k8s.io"
        resources:
          - mutatingwebhookconfigurations
        verbs:
          - get
          - patch
          - create
          - delete
      - apiGroups:
          - "eci.aliyun.com"
        resources:
          - selectors
        verbs:
          - get
          - watch
          - list
    ---
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: eci-profile
      namespace: kube-system
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: eci-profile
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: eci-profile
    subjects:
    - kind: ServiceAccount
      name: eci-profile
      namespace: kube-system
    ---
    apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    metadata:
      annotations:
        controller-gen.kubebuilder.io/version: (devel)
      creationTimestamp: null
      name: selectors.eci.aliyun.com
    spec:
      group: eci.aliyun.com
      names:
        kind: Selector
        listKind: SelectorList
        plural: selectors
        singular: selector
      scope: Namespaced
      versions:
      - name: v1
        schema:
          openAPIV3Schema:
            properties:
              apiVersion:
                description: 'APIVersion defines the versioned schema of this representation
                  of an object. Servers should convert recognized schemas to the latest
                  internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
                type: string
              kind:
                description: 'Kind is a string value representing the REST resource this
                  object represents. Servers may infer this from the endpoint the client
                  submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
                type: string
              metadata:
                type: object
              spec:
                properties:
                  effect:
                    properties:
                      annotations:
                        additionalProperties:
                          type: string
                        type: object
                      labels:
                        additionalProperties:
                          type: string
                        type: object
                    type: object
                  namespaceLabels:
                    description: A label selector is a label query over a set of resources.
                      The result of matchLabels and matchExpressions are ANDed. An empty
                      label selector matches all objects. A null label selector matches
                      no objects.
                    properties:
                      matchExpressions:
                        description: matchExpressions is a list of label selector requirements.
                          The requirements are ANDed.
                        items:
                          description: A label selector requirement is a selector that
                            contains values, a key, and an operator that relates the key
                            and values.
                          properties:
                            key:
                              description: key is the label key that the selector applies
                                to.
                              type: string
                            operator:
                              description: operator represents a key's relationship to
                                a set of values. Valid operators are In, NotIn, Exists
                                and DoesNotExist.
                              type: string
                            values:
                              description: values is an array of string values. If the
                                operator is In or NotIn, the values array must be non-empty.
                                If the operator is Exists or DoesNotExist, the values
                                array must be empty. This array is replaced during a strategic
                                merge patch.
                              items:
                                type: string
                              type: array
                          required:
                          - key
                          - operator
                          type: object
                        type: array
                      matchLabels:
                        additionalProperties:
                          type: string
                        description: matchLabels is a map of {key,value} pairs. A single
                          {key,value} in the matchLabels map is equivalent to an element
                          of matchExpressions, whose key field is "key", the operator
                          is "In", and the values array contains only "value". The requirements
                          are ANDed.
                        type: object
                    type: object
                    x-kubernetes-map-type: atomic
                  objectLabels:
                    description: A label selector is a label query over a set of resources.
                      The result of matchLabels and matchExpressions are ANDed. An empty
                      label selector matches all objects. A null label selector matches
                      no objects.
                    properties:
                      matchExpressions:
                        description: matchExpressions is a list of label selector requirements.
                          The requirements are ANDed.
                        items:
                          description: A label selector requirement is a selector that
                            contains values, a key, and an operator that relates the key
                            and values.
                          properties:
                            key:
                              description: key is the label key that the selector applies
                                to.
                              type: string
                            operator:
                              description: operator represents a key's relationship to
                                a set of values. Valid operators are In, NotIn, Exists
                                and DoesNotExist.
                              type: string
                            values:
                              description: values is an array of string values. If the
                                operator is In or NotIn, the values array must be non-empty.
                                If the operator is Exists or DoesNotExist, the values
                                array must be empty. This array is replaced during a strategic
                                merge patch.
                              items:
                                type: string
                              type: array
                          required:
                          - key
                          - operator
                          type: object
                        type: array
                      matchLabels:
                        additionalProperties:
                          type: string
                        description: matchLabels is a map of {key,value} pairs. A single
                          {key,value} in the matchLabels map is equivalent to an element
                          of matchExpressions, whose key field is "key", the operator
                          is "In", and the values array contains only "value". The requirements
                          are ANDed.
                        type: object
                    type: object
                    x-kubernetes-map-type: atomic
                  policy:
                    properties:
                      fair:
                        type: object
                      namespaceResourceLimit:
                        properties:
                          limits:
                            additionalProperties:
                              anyOf:
                              - type: integer
                              - type: string
                              pattern: ^(\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\+|-)?(([0-9]+(\.[0-9]*)?)|(\.[0-9]+))))?$
                              x-kubernetes-int-or-string: true
                            description: ResourceList is a set of (resource name, quantity)
                              pairs.
                            type: object
                          namespace:
                            type: string
                        required:
                        - limits
                        - namespace
                        type: object
                      normalNodeOnly:
                        type: object
                      normalNodePrefer:
                        properties:
                          cpuRatio:
                            type: integer
                          memoryRatio:
                            type: integer
                        type: object
                      virtualNodeOnly:
                        type: object
                    type: object
                  priority:
                    format: int32
                    type: integer
                type: object
            required:
            - spec
            type: object
        served: true
        storage: true
    ---
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        role: eci-profile
      name: eci-profile
      namespace: kube-system
    spec:
      ports:
        - port: 443
          targetPort: 443
      selector:
        app: eci-profile
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: eci-profile
      namespace: kube-system
      labels:
        app: eci-profile
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: eci-profile
      template:
        metadata:
          labels:
            app: eci-profile
        spec:
          serviceAccount: eci-profile
          containers:
          - name: eci-profile
            image: registry.cn-beijing.aliyuncs.com/eci-release/eci-profile:0.0.3
            imagePullPolicy: Always
            resources:
              requests: 
                cpu: 2
                memory: 4Gi   
              limits:
                cpu: 4    
                memory: 8Gi   
            env:
            - name: KUBERNETES_MASTER
              value: https://kubernetes:443
    ```
    
    ## Earlier than V1.16
    
    ```
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: eci-profile
    rules:
    - apiGroups:
        - ""
      resources:
        - nodes
        - namespaces
        - resourcequotas
      verbs:
        - get
        - list
        - watch
    - apiGroups:
        - ""
      resources:
        - pods
      verbs:
        - get
        - list
        - watch
        - create
        - patch
    - apiGroups:
        - "admissionregistration.k8s.io"
      resources:
        - mutatingwebhookconfigurations
      verbs:
        - get
        - patch
        - create
        - delete
    - apiGroups:
      - "eci.aliyun.com"
      resources:
        - selectors
      verbs:
        - get
        - watch
        - list
    ---
    apiVersion: apiextensions.k8s.io/v1beta1
    #apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    metadata:
      name: selectors.eci.aliyun.com
    spec:
      group: eci.aliyun.com
      version: v1beta1
      names:
        kind: Selector
        plural: selectors
        shortNames:
          - selectors
        categories:
          - all
      scope: Cluster
      validation:
        openAPIV3Schema:
          type: object
          required:
          - metadata
          - spec
          properties:
            apiVersion:
              type: string
            kind:
              type: string
            metadata:
              type: object
            spec:
              type: object
    ---
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: eci-profile
      namespace: kube-system
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: eci-profile
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: eci-profile
    subjects:
    - kind: ServiceAccount
      name: eci-profile
      namespace: kube-system
    ---
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        role: eci-profile
      name: eci-profile
      namespace: kube-system
    spec:
      ports:
      - port: 443
        targetPort: 443
      selector:
        app: eci-profile
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: eci-profile
      namespace: kube-system
      labels:
        app: eci-profile
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: eci-profile
      template:
        metadata:
          labels:
            app: eci-profile
        spec:
          serviceAccount: eci-profile
          containers:
          - name: eci-profile
            image: registry.cn-beijing.aliyuncs.com/eci-release/eci-profile:2.0.0-477875b-aliyun
            imagePullPolicy: Always
            resources:
              requests: 
                cpu: 2
                memory: 4Gi   
              limits:
                cpu: 4    
                memory: 8Gi   
            env:
            - name: KUBERNETES_MASTER
              value: https://kubernetes:443
    ```
    
2.  Deploy eci-profile.
    
    ```
    kubectl create -f eci-profile.yaml
    ```
    
3.  View the deployment result.
    
    ```
    kubectl -n kube-system get pods
    ```
    
    The following command output is returned. The pod corresponding to eci-profile is in the Running state.
    
    ```
    NAME                                                     READY   STATUS    RESTARTS   AGE
    eci-profile-6454756cb8-8xlz8                   1/1      Running    0                76s
    ```
    

## **Configuration description and sample configurations**

After you deploy eci-profile, you can create selectors to configure a pod scheduling policy, and the annotations and labels that you want to add. Sample YAML file of a selector:

```
apiVersion: eci.aliyun.com/v1beta1
kind: Selector
metadata:
  name: test-fair
spec:
  objectLabels:
    matchLabels:
      app: nginx
  namespaceLabels:
    matchLabels:
      app: test
  effect:
    annotations:
      k8s.aliyun.com/eci-auto-imc: "true"
    labels:
      eci-schedulable: "true"
  policy:
    fair: {}
  priority: 3
```

The following table describes the parameters in the spec section:

**Parameter**

**Description**

objectLabels.matchLabels

The pod labels to match.

namespaceLabels.matchLabels

The namespace labels to match.

effect.annotations

The annotations that you want to add.

effect.labels

The labels that you want to add.

policy

The scheduling policy. Valid values:

-   fair
    
-   normalNodePrefer
    
-   virtualNodeOnly
    

priority

The priority of selectors. If you configure multiple conflict selectors, the selector that has a higher priority takes effect. A larger value of the parameter indicates a higher priority for the selector.

**Note**

You must specify at least one of the objectLabels and namespaceLabels parameters. If you specify both the parameters, the pod must match both of the parameters.

### **Example 1:** set the scheduling policy to fair

Create the following selector. By using the selector, eci-profile adds VNode tolerations to the pods that have the `app: nginx` labels. kube-scheduler determines to schedule the pods to real nodes or VNodes. eci-profile also adds the annotations and labels that are defined in the effect section to the pods.

```
apiVersion: eci.aliyun.com/v1beta1
kind: Selector
metadata:
  name: test-fair
spec:
  objectLabels:
    matchLabels:
      app: nginx
  effect:
    annotations:
      k8s.aliyun.com/eci-auto-imc: "true"
    labels:
      eci-schedulable: "true"
  policy:
    fair: {}
```

### **Example 2:** set the scheduling policy to normalNodePrefer

Create the following selector. By using the selector, eci-profile schedules the pods that have the `app: nginx` label to VNodes when real nodes are insufficient. eci-profile also adds the annotations and labels that are defined in the effect section to the pods.

```
apiVersion: eci.aliyun.com/v1beta1
kind: Selector
metadata:
  name: test-normal-node-prefer
spec:
  objectLabels:
    matchLabels:
      app: nginx
  effect:
    annotations:
      k8s.aliyun.com/eci-image-cache: "true"
    labels:
      eci-schedulable: "true"
  policy:
    normalNodePrefer: {}
```

### **Example 3:** set the scheduling policy to virtualNodeOnly

Create the following selector. By using the selector, eci-profile adds VNode tolerations and VNode nodeSelectors to the pods that have the `app: nginx` labels. eci-profile also adds the annotations and labels that are defined in the effect section to the pods.

```
apiVersion: eci.aliyun.com/v1beta1
kind: Selector
metadata:
  name: test-virtual-node-only
spec:
  objectLabels:
    matchLabels:
      app: nginx
  effect:
    annotations:
      k8s.aliyun.com/eci-auto-imc: "true"
    labels:
      eci-schedulable: "true"
  policy:
    virtualNodeOnly: {}
```

## **Update eci-profile**

If you have deployed the legacy eci-profile that uses a ConfigMap to schedule pods, we recommend that you update your eci-profile to the eci-profile that use a selector CRD to schedule pods. To update eci-profile, perform the following operations:

1.  Record the content of the selectors in the kube-system namespace of the legacy eci-profile.
    
2.  Delete the legacy eci-profile.
    
3.  Deploy the new eci-profile.
    
4.  Create new selectors based on the original selectors.
    

**Note**

If you have questions when you use eci-profile, join the DingTalk group (ID: 44666389) to obtain technical support.
