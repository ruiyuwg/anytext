This comprehensive guide provides systematic approaches to diagnose and resolve common pod anomalies in Kubernetes environments, covering scheduling issues, image problems, startup failures, readiness concerns, and resource constraints.

## **Quick reference guide**

Use this quick reference to identify and resolve common pod issues based on symptoms:

Symptom

Likely cause

Immediate action

`Pending` status

Scheduling constraints or resource insufficiency

Check node resources and scheduling policies

`ImagePullBackOff`/`ErrImagePull`

Image registry connectivity or authentication issues

Verify image pull secrets and registry access

`CrashLoopBackOff`

Application startup failures or configuration errors

Check container logs and startup commands

`Running` but `Ready: False`

Health check probe failures

Validate readiness probe configuration

`OOMKilled`

Insufficient memory allocation or memory leaks

Adjust memory limits and check application memory usage

## **Systematic diagnostic process**

Follow this structured approach to systematically identify and resolve pod anomalies:

### Phase 1: Initial assessment

1.  Check pod status using the console or kubectl:
    
    ```
    kubectl get pods -n <namespace>
    ```
    
2.  Examine pod events for error messages:
    
    ```
    kubectl describe pod <pod-name> -n <namespace>
    ```
    
3.  Review container logs for application-level errors:
    
    ```
    kubectl logs <pod-name> -n <namespace> --previous
    ```
    

## **Phase 2: Scheduling problems**

### Pod stuck in Pending state

When pods remain in Pending state, investigate scheduling constraints and resource availability.

Error message

Root cause

Resolution steps

`no nodes available to schedule pods`

No healthy nodes available in cluster

1.  Check node health status
    
2.  Verify node pool capacity
    
3.  Review scheduling constraints (nodeSelector, affinity)
    

`Insufficient cpu`  
`Insufficient memory`

Resource requests exceed node capacity

1.  Check node resource allocation rates
    
2.  Optimize workload resource requests
    
3.  Scale out node pool if necessary
    

`didn't match Pod's node affinity/selector`

Node labeling mismatch with pod scheduling requirements

1.  Verify node labels match pod requirements
    
2.  Adjust workload scheduling policies
    
3.  Update node labels if appropriate
    

### Resource optimization strategies

Effective resource management prevents scheduling issues and optimizes cluster utilization.

#### Console-based optimization

1.  Navigate to cluster node management page
    
2.  Review CPU/Memory request allocation rates
    
3.  Identify underutilized workloads for rightsizing
    
4.  Enable Auto Scaling (HPA) for dynamic replica adjustment
    

#### Command-line optimization

```
# View node resource utilization
kubectl top nodes

# Check pod resource requests
kubectl describe pod <pod-name> -n <namespace> | grep -A 10 "Resources:"

# Enable resource profiling for recommendations
# (Console feature for automated resource optimization)
```

## **Phase 3: Image pull failures**

### Common image pull errors

Error type

Cause

Solution

`ErrImagePull`

Network connectivity issues to image registry

Test registry connectivity from node

`ImagePullBackOff`

Authentication failure or missing credentials

Verify imagePullSecrets configuration

`ErrImageNeverPull`

Image not found locally with PullNever policy

Change pull policy or ensure image availability

### Image pull troubleshooting steps

1.  Verify image repository URL and tag accuracy
    
2.  Check imagePullSecrets exist and are correctly referenced
    
3.  Test registry connectivity from worker nodes:
    
    ```
    crictl pull <registry-address>/<image>:<tag>
    curl -v https://<registry-address>
    ```
    
4.  Validate registry authentication credentials
    
5.  Check network policies allowing registry access
    

## **Phase 4: Application startup issues**

### CrashLoopBackOff analysis

Repeated container crashes indicate fundamental application or configuration problems.

#### Investigation approach

1.  Examine previous container logs for crash reasons:
    
    ```
    kubectl logs <pod-name> --previous -n <namespace>
    ```
    
2.  Check container startup command and arguments
    
3.  Verify environment variables and configuration
    
4.  Validate required dependencies and services
    
5.  Review application health check configurations
    

#### Common crash causes

-   Missing or incorrect startup commands
    
-   Configuration file errors or missing files
    
-   Dependency service unavailability
    
-   Insufficient permissions or security constraints
    
-   Port conflicts or binding failures
    
-   Resource limit violations during startup
    

## **Runtime issues**

### OOMKilled state analysis

Out-of-memory conditions cause pod termination and require careful resource management.

#### Investigation steps

1.  Review OOM kill logs:
    
    ```
    kubectl logs <pod-name> --previous -n <namespace> | grep -i oom
    ```
    
2.  Analyze memory usage patterns and spikes
    
3.  Check for memory leaks in application code
    
4.  Review JVM heap settings for Java applications (-Xmx parameter)
    
5.  Validate memory resource limits against actual usage
    

#### Memory optimization

-   Increase memory limits if application legitimately requires more RAM
    
-   Implement memory profiling to identify usage patterns
    
-   Optimize application memory allocation and garbage collection
    
-   Consider vertical pod autoscaling for dynamic memory adjustment
    
-   Set appropriate memory requests to ensure quality of service
    

### Evicted pod analysis

Pods may be evicted due to node pressure, manual intervention, or resource constraints.

Eviction reason

Trigger condition

Prevention strategy

`NodePressure`

Insufficient node resources (CPU, memory, disk)

Monitor node resource utilization and scale appropriately

`Preemption`

Higher priority pod requires resources

Set appropriate pod priorities and resource requests

`Manual eviction`

Administrative action or maintenance

Implement proper maintenance windows and notifications

### ContainerCreating state troubleshooting

Extended ContainerCreating state indicates issues with container initialization.

Issue

Root cause

Resolution

Volume mount failures

PersistentVolumeClaim binding issues or storage driver problems

Verify PVC status and storage class configuration

Image pull delays

Large image size or slow network connectivity

Optimize image size and use image pre-pulling strategies

Security context violations

Insufficient permissions or SELinux/AppArmor restrictions

Review and adjust pod security policies

## **Network connectivity issues**

### Flannel network troubleshooting

Flannel networking issues can cause pod-to-pod communication failures and DNS resolution problems.

#### Common symptoms

-   Pods cannot communicate with each other across nodes
    
-   DNS resolution fails for cluster services
    
-   Services cannot reach pods or external endpoints
    

#### Troubleshooting steps

1.  Verify Flannel daemonset pods are running on all nodes:
    
    ```
    kubectl get pods -n kube-flannel
    ```
    
2.  Inspect Flannel pod logs for errors:
    
    ```
    kubectl logs -n kube-flannel <flannel-pod-name>
    ```
    
3.  Check Flannel network configuration and subnet assignments
    
4.  Test pod-to-pod connectivity across different nodes
    
5.  Manually upgrade Flannel version if configuration issues persist
    

#### Solutions

-   Restart Flannel pods to refresh network configuration
    
-   Reconfigure Flannel subnets if IP conflicts exist
    
-   Upgrade Flannel to latest stable version
    
-   Verify firewall rules allow Flannel traffic (UDP 8472 by default)
    

## **FAQ**

### **Why is the pod running but not working correctly?**

Application configuration issues can cause pods to run without functioning properly.

-   Verify container configurations match expectations
    
-   Check for YAML configuration syntax errors
    
-   Validate environment variable values and secrets
    
-   Confirm service discovery and DNS resolution
    
-   Test inter-container communication if applicable
    

### **What is Completed state?**

Pods entering Completed state is normal for certain workloads like Jobs and init containers when their processes exit successfully.

## **Common troubleshooting interfaces**

Access these interfaces through the Container Service Management Console for comprehensive pod troubleshooting:

Operation

Console interface

View pod status and basic information

**Cluster** > **Workloads** > **Pods**

Check pod configurations

**Pod details** page > **Configuration** tab

Review pod events

**Pod details** page > **Events** tab

Access container logs

**Pod details** page > **Logs** tab

Connect to container terminal

**Pod details** page > **Terminal access**

Enable pod diagnostics

**Pod details** page > **Diagnostics tools**
