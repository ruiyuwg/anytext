The Kubernetes Pod Security Policy admission control component validates pod creation and update requests on your cluster based on rules that you define. If a request does not meet the defined rules, the system rejects the request and returns an error. This topic describes how to use pod security policies in Container Service for Kubernetes (ACK).

## Prerequisites

You have completed the following operations:

-   [Create a Kubernetes cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).
    

**Note**

This topic applies only to clusters that run a Kubernetes version earlier than 1.26.

## Default ACK pod security policy

The Pod Security Policy admission control component is enabled by default for standard ACK dedicated clusters and standard ACK managed clusters that run Kubernetes 1.16.6. A pod security policy named ack.privileged is configured. This security policy allows pods of any type. This has the same effect as disabling the Pod Security Policy admission control component for the cluster.

## **Default pod security policy command**

```
$ kubectl get psp ack.privileged
NAME             PRIV   CAPS   SELINUX    RUNASUSER   FSGROUP    SUPGROUP   READONLYROOTFS   VOLUMES
ack.privileged   true   *      RunAsAny   RunAsAny    RunAsAny   RunAsAny   false            *
```

## **Detailed pod security policy command**

```
$ kubectl describe psp ack.privileged
Name:  ack.privileged

Settings:
  Allow Privileged:                       true
  Allow Privilege Escalation:             true
  Default Add Capabilities:               <none>
  Required Drop Capabilities:             <none>
  Allowed Capabilities:                   *
  Allowed Volume Types:                   *
  Allow Host Network:                     true
  Allow Host Ports:                       0-65535
  Allow Host PID:                         true
  Allow Host IPC:                         true
  Read Only Root Filesystem:              false
  SELinux Context Strategy: RunAsAny
    User:                                 <none>
    Role:                                 <none>
    Type:                                 <none>
    Level:                                <none>
  Run As User Strategy: RunAsAny
    Ranges:                               <none>
  FSGroup Strategy: RunAsAny
    Ranges:                               <none>
  Supplemental Groups Strategy: RunAsAny
    Ranges:                               <none>
```

**Expand to view the complete YAML file for the pod security policy and its corresponding cluster role and cluster role binding**

```
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: ack.privileged
  annotations:
    kubernetes.io/description: 'privileged allows full unrestricted access to
      pod features, as if the PodSecurityPolicy controller was not enabled.'
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
spec:
  privileged: true
  allowPrivilegeEscalation: true
  allowedCapabilities:
  - '*'
  volumes:
  - '*'
  hostNetwork: true
  hostPorts:
  - min: 0
    max: 65535
  hostIPC: true
  hostPID: true
  runAsUser:
    rule: 'RunAsAny'
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'RunAsAny'
  fsGroup:
    rule: 'RunAsAny'
  readOnlyRootFilesystem: false

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: ack:podsecuritypolicy:privileged
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
rules:
- apiGroups:
  - policy
  resourceNames:
  - ack.privileged
  resources:
  - podsecuritypolicies
  verbs:
  - use

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: ack:podsecuritypolicy:authenticated
  annotations:
    kubernetes.io/description: 'Allow all authenticated users to create privileged pods.'
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: ack:podsecuritypolicy:privileged
subjects:
  - kind: Group
    apiGroup: rbac.authorization.k8s.io
    name: system:authenticated
```

## Delete the cluster role binding for the default ACK pod security policy

**Warning**

Before you delete the cluster role binding for the default ACK pod security policy, you must configure a custom pod security policy and its corresponding RBAC binding. Otherwise, no users, controllers, or service accounts can create or update pods.

After you configure a custom pod security policy and its corresponding RBAC binding, you can delete the cluster role binding of the default ACK pod security policy ack.privileged to enable your custom pod security policy.

**Important**

Do not delete or modify the pod security policy named ack.privileged or the cluster role named ack:podsecuritypolicy:privileged. These two resources are required for an ACK cluster to run properly.

**Expand to view the command to delete the cluster role binding of the default ACK pod security policy ack.privileged**

```
$ cat <<EOF | kubectl delete -f -
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: ack:podsecuritypolicy:authenticated
  annotations:
    kubernetes.io/description: 'Allow all authenticated users to create privileged pods.'
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: ack:podsecuritypolicy:privileged
subjects:
  - kind: Group
    apiGroup: rbac.authorization.k8s.io
    name: system:authenticated
EOF
```

## Configure or restore the default ACK pod security policy

**Expand to view the command to configure or restore the default ACK pod security policy and its RBAC binding**

```
cat <<EOF | kubectl apply -f -
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: ack.privileged
  annotations:
    kubernetes.io/description: 'privileged allows full unrestricted access to
      pod features, as if the PodSecurityPolicy controller was not enabled.'
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
spec:
  privileged: true
  allowPrivilegeEscalation: true
  allowedCapabilities:
  - '*'
  volumes:
  - '*'
  hostNetwork: true
  hostPorts:
  - min: 0
    max: 65535
  hostIPC: true
  hostPID: true
  runAsUser:
    rule: 'RunAsAny'
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'RunAsAny'
  fsGroup:
    rule: 'RunAsAny'
  readOnlyRootFilesystem: false

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: ack:podsecuritypolicy:privileged
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
rules:
- apiGroups:
  - policy
  resourceNames:
  - ack.privileged
  resources:
  - podsecuritypolicies
  verbs:
  - use

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: ack:podsecuritypolicy:authenticated
  annotations:
    kubernetes.io/description: 'Allow all authenticated users to create privileged pods.'
  labels:
    kubernetes.io/cluster-service: "true"
    ack.alicloud.com/component: pod-security-policy
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: ack:podsecuritypolicy:privileged
subjects:
  - kind: Group
    apiGroup: rbac.authorization.k8s.io
    name: system:authenticated
EOF
```

## **FAQ**

### **Pod creation fails with the error "`no providers available to validate pod request`"**

#### **Symptom**

Pod creation fails. The error message contains `no providers available to validate pod request` or `unable to validate against any pod security policy`.

#### **Solution**

This error occurs because the preset pod security policy in the cluster was accidentally deleted. You must manually restore the resource. For more information, see [Configure or restore the default ACK pod security policy](#section-sc9-zs4-6nz).

### **Pod creation fails with the error "`PodSecurityPolicy: unable to admit pod: pod.spec.securityContext.sysctls[0]: Forbidden: unsafe sysctl`"**

#### **Symptom**

Pod creation fails. The error message contains `PodSecurityPolicy: unable to admit pod: [pod.spec.securityContext.sysctls[0]: Forbidden: unsafe sysctl "***" is not allowed]`.

#### **Solution**

For security reasons, clusters by default do not allow you to create pods that use unsafe `sysctl` parameters. To grant this permission for a specific application, you must create a new pod security policy.

**Warning**

Do not modify or delete the following preset core security resources. The normal operation of an ACK cluster depends on these resources. Unauthorized modifications may cause cluster features to become abnormal. The changes may also be automatically reset by the system.

-   The pod security policy named `ack.privileged`.
    
-   Roles, ClusterRoles, RoleBindings, and ClusterRoleBindings whose names start with `ack:podsecuritypolicy:`.
    

You can configure the required additional `sysctl` policies by creating a new pod security policy.

1.  Create a file named `unsafe-sysctl-psp.yaml` that contains the following content.
    
    > You can adjust the value of the `allowedUnsafeSysctls` parameter as needed.
    
    ```
    ---
    apiVersion: policy/v1beta1
    kind: PodSecurityPolicy
    metadata:
      name: psp.allow-unsafe-sysctls
    spec:
      allowedUnsafeSysctls:
      - '*'
      privileged: true
      allowPrivilegeEscalation: true
      allowedCapabilities:
      - '*'
      volumes:
      - '*'
      hostNetwork: true
      hostPorts:
      - min: 0
        max: 65535
      hostIPC: true
      hostPID: true
      runAsUser:
        rule: 'RunAsAny'
      seLinux:
        rule: 'RunAsAny'
      supplementalGroups:
        rule: 'RunAsAny'
      fsGroup:
        rule: 'RunAsAny'
      readOnlyRootFilesystem: false
    
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: podsecuritypolicy:allow-unsafe-sysctls
    rules:
    - apiGroups:
      - policy
      resourceNames:
      - psp.allow-unsafe-sysctls
      resources:
      - podsecuritypolicies
      verbs:
      - use
    
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: podsecuritypolicy:allow-unsafe-sysctls:authenticated
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: podsecuritypolicy:allow-unsafe-sysctls
    subjects:
      - kind: Group
        apiGroup: rbac.authorization.k8s.io
        name: system:authenticated
    ```
    
2.  Create the resources in the cluster.
    
    ```
    kubectl create -f unsafe-sysctl-psp.yaml
    ```
    
    Expected output:
    
    ```
    podsecuritypolicy.policy/psp.allow-unsafe-sysctls created
    clusterrole.rbac.authorization.k8s.io/podsecuritypolicy:allow-unsafe-sysctls created
    clusterrolebinding.rbac.authorization.k8s.io/podsecuritypolicy:allow-unsafe-sysctls:authenticated created
    ```
    
3.  Customize the kubelet parameters for the node pool to allow unsafe sysctl parameters. For more information, see [Supported custom kubelet parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool#section-n1l-7vc-b8i).
    
4.  Deploy a test pod that uses unsafe `sysctl` parameters.
    
    > You can adjust the `sysctls` parameters as needed. If the `kubelet` on only some nodes in the cluster, such as nodes in a specific node pool, is configured to allow unsafe `sysctl`, you must also add a `nodeSelector` to the pod to ensure that the pod is scheduled to the target nodes.
    
    ```
    cat <<EOF | kubectl apply -f -
    apiVersion: v1
    kind: Pod
    metadata:
      name: sysctl-example
    spec:
    #  nodeSelector:
    #    alibabacloud.com/nodepool-id: npd912756***  # Replace with the target node pool ID
      securityContext:
        sysctls:
        - name: net.ipv4.tcp_syncookies
          value: "1"
        - name: net.core.somaxconn
          value: "1024"
        - name: net.ipv4.tcp_max_syn_backlog
          value: "65536"
      containers:
      - name: test
        image: nginx
    EOF
    ```
    
    Expected output:
    
    > If a `SysctlForbidden` event occurs while the pod is running, the kubelet on the node where the pod is running is not configured to allow unsafe `sysctl` parameters. Check and adjust the pod's `nodeSelector` to ensure that the pod is scheduled to a node where the `kubelet` parameters are correctly configured.
    
    ```
    pod/sysctl-example created
    ```
    

## References

-   [Pod Security Policies](https://kubernetes.io/docs/concepts/policy/pod-security-policy/)
