Optimize your Kubernetes Horizontal Pod Autoscaler (HPA) behavior to achieve responsive scaling that matches your application's performance requirements. Configure the `behavior` section to customize scale-in (`scaleDown`) and scale-out (`scaleUp`) policies for different workload patterns. This enables rapid response to traffic spikes, prevents unnecessary scaling during metric fluctuations, and ensures stability for mission-critical applications.

## Prerequisites

-   Ensure your ACK cluster runs Kubernetes version 1.23 or later, which includes stable HPA behavior support. For cluster upgrade instructions, see [Manually update ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   HPA must be enabled in your cluster. For setup instructions, see [Implement horizontal pod autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-autoscaling).
    
-   When using kubectl, ensure you're using HPA API version `autoscaling/v2` or later for behavior configuration support.
    

## Understanding HPA behavior configuration

The `behavior` section in HPA configuration allows you to customize scaling policies for both scale-in and scale-out operations. This optional configuration helps prevent scaling thrashing, optimize resource utilization, and ensure application stability during varying load conditions.

The following example shows a complete HPA configuration with default behavior settings. You can modify individual fields based on your specific requirements. Unspecified fields will use Kubernetes default values.

```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: optimized-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-application
  minReplicas: 2
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  behavior:  # Custom behavior configuration
    scaleDown:  # Scale-in policies
      stabilizationWindowSeconds: 300
      policies:
      - type: Pods
        value: 5
        periodSeconds: 60
      - type: Percent
        value: 10
        periodSeconds: 60
      selectPolicy: Min
    scaleUp:  # Scale-out policies
      stabilizationWindowSeconds: 0
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
      - type: Pods
        value: 4
        periodSeconds: 15
      selectPolicy: Max
```

In this configuration, the `scaleDown` section implements conservative scale-in behavior with a 300-second stabilization window. The HPA controller evaluates scale-in recommendations over the past 5 minutes and selects the minimum recommended replica count to prevent premature scaling. It applies two policies: removing up to 5 pods or 10% of current pods every 60 seconds, choosing whichever removes fewer pods (`selectPolicy: Min`).

The `scaleUp` section enables immediate scaling response with `stabilizationWindowSeconds: 0`. Two aggressive policies allow rapid scale-out: increasing by 100% of current pods or adding 4 pods every 15 seconds. The controller selects the policy that adds more pods (`selectPolicy: Max`) for maximum responsiveness.

The following table describes key behavior configuration fields:

**Field**

**Description**

`stabilizationWindowSeconds`

Defines the time window (in seconds) for evaluating scaling recommendations to prevent thrashing. For scale-down, the controller selects the maximum recommended replica count within this window. For scale-up, it selects the minimum recommended count. Set to 0 for immediate scaling.

`policies`

Defines one or more scaling policies. Each policy specifies a `type` (`Percent` or `Pods`) and `value` that determines how many pods to add/remove during scaling events within the specified `periodSeconds`.

`selectPolicy`

Determines which policy to apply when multiple policies are defined. Options: `Min` (conservative), `Max` (aggressive), or `Disabled` (prevent scaling). For scale-down, `Min` removes fewer pods; for scale-up, it adds fewer pods.

`periodSeconds`

Specifies the time interval (in seconds) over which each policy's `value` is applied. Controls the rate of scaling operations.

The following sections provide optimized behavior configurations for common scaling scenarios. Choose the approach that best matches your application's requirements and performance characteristics.

## Scenario 1: Rapid scale-out for burst workloads

Use this configuration for applications experiencing sudden traffic spikes such as flash sales, product launches, or promotional campaigns:

```
behavior:
  scaleUp:
    stabilizationWindowSeconds: 0
    policies:
    - type: Percent
      value: 500  # 5x current pods
      periodSeconds: 30
    - type: Pods
      value: 10   # Additional 10 pods
      periodSeconds: 30
    selectPolicy: Max
```

This configuration enables extremely rapid scaling by allowing 500% growth or 10 additional pods every 30 seconds. With an initial replica count of 2, scaling progression would be: 2 → 12 → 72 → 432 pods. The controller selects the more aggressive policy (`Max`) to maximize responsiveness while respecting `maxReplicas` limits.

### Scenario 2: Balanced scaling with conservative scale-in

This configuration provides rapid response to traffic increases while preventing premature scale-in that could impact user experience:

```
behavior:
  scaleUp:
    stabilizationWindowSeconds: 0
    policies:
    - type: Percent
      value: 200  # Double current pods
      periodSeconds: 30
    selectPolicy: Max
  scaleDown:
    stabilizationWindowSeconds: 600  # 10-minute evaluation window
    policies:
    - type: Pods
      value: 1
      periodSeconds: 300  # Remove 1 pod every 5 minutes
    selectPolicy: Min
```

Scale-out occurs immediately with up to 200% growth every 30 seconds. Scale-in requires sustained low metrics for 10 minutes before removing one pod every 5 minutes, ensuring temporary dips don't trigger unnecessary scaling.

### Scenario 3: Prevent scale-in for critical applications

Use this configuration for stateful applications, batch processing jobs, or services handling long-running transactions where scale-in could disrupt operations:

```
behavior:
  scaleDown:
    selectPolicy: Disabled  # Completely disable scale-in
  scaleUp:
    stabilizationWindowSeconds: 60
    policies:
    - type: Percent
      value: 100
      periodSeconds: 60
    selectPolicy: Max
```

This configuration disables all scale-in operations while maintaining responsive scale-out capability. The application can grow to handle increased load but will maintain its current replica count during reduced demand, ensuring continuous service availability.

### Scenario 4: Cost-optimized scaling with controlled growth

This configuration balances performance needs with resource constraints and budget considerations:

```
behavior:
  scaleUp:
    stabilizationWindowSeconds: 120  # Wait 2 minutes before scaling
    policies:
    - type: Percent
      value: 50   # 50% growth
      periodSeconds: 120
    - type: Pods
      value: 2    # 2 additional pods
      periodSeconds: 120
    selectPolicy: Min  # Conservative growth
  scaleDown:
    stabilizationWindowSeconds: 900  # 15-minute evaluation
    policies:
    - type: Percent
      value: 25   # Remove 25% of pods
      periodSeconds: 600
    - type: Pods
      value: 3    # Remove up to 3 pods
      periodSeconds: 600
    selectPolicy: Min
```

This conservative approach prevents resource exhaustion during traffic spikes while ensuring gradual scale-down. The 2-minute scale-up delay prevents overreaction to temporary load increases, and the 15-minute scale-down evaluation ensures sustained low demand before reducing capacity.

### Scenario 5: Adaptive scaling for unpredictable workloads

For applications with variable traffic patterns, use this flexible configuration that adapts to different load conditions:

```
behavior:
  scaleUp:
    stabilizationWindowSeconds: 30
    policies:
    - type: Pods
      value: 3
      periodSeconds: 45
    - type: Percent
      value: 75
      periodSeconds: 45
    selectPolicy: Max  # Choose more aggressive policy
  scaleDown:
    stabilizationWindowSeconds: 600
    policies:
    - type: Pods
      value: 2
      periodSeconds: 300
    - type: Percent
      value: 20
      periodSeconds: 300
    selectPolicy: Min  # Choose more conservative policy
```

This configuration provides responsive scale-out (adding 3 pods or 75% growth every 45 seconds) while maintaining cautious scale-in behavior (removing 2 pods or 20% every 5 minutes). The different `selectPolicy` values ensure aggressive growth during demand spikes but conservative reduction during lulls.

## Best practices and monitoring

### Monitoring HPA behavior

Regularly monitor your HPA configuration using these commands:

```
# View current HPA status and recent scaling events
kubectl describe hpa <hpa-name>

# Monitor HPA metrics and decisions
kubectl get hpa <hpa-name> -o yaml

# Check pod resource usage
kubectl top pods -l <label-selector>
```

### Testing recommendations

-   Simulate realistic load patterns in staging environments before applying configurations to production
    
-   Validate that chosen metrics accurately reflect your application's performance requirements
    
-   Test edge cases including rapid traffic spikes and sustained low utilization scenarios
    

### Additional resources

-   Consider combining HPA with [node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/) to ensure adequate cluster resources
    
-   Evaluate using Vertical Pod Autoscaler (VPA) alongside HPA for optimal resource allocation
    
-   Explore custom metrics and external adapters for more sophisticated scaling triggers
