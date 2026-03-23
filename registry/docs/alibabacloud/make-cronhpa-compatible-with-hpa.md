Cron Horizontal Pod Autoscaler (HPA) and Horizontal Pod Autoscaler (HPA) are unaware of each other. If both CronHPA and HPA are configured for your application, CronHPA and HPA scale your application separately. In this case, the later scaling activity overwrites the earlier one. To resolve this issue, Container Service for Kubernetes (ACK) provides a solution for CronHPA to interact with HPA without conflicts. If ACK detects that both CronHPA and HPA are deployed, ACK sets HPA as the scaling object of CronHPA. CronHPA triggers HPA to scale the object scaled by HPA, such as a Deployment, at the scheduled time.

**Note**

If you deploy HPA and CronHPA in the [ACK console](https://cs.console.alibabacloud.com), you can skip this steps described in this topic. In this case, ACK automatically performs operations to make CronHPA compatible with HPA.

## Comparison of the sample CronHPA template and the sample HPA template

**Sample CronHPA template**

**Sample HPA template**

```
apiVersion: autoscaling.alibabacloud.com/v1beta1
kind: CronHorizontalPodAutoscaler
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: cronhpa-sample
spec:
   scaleTargetRef:
      apiVersion: apps/v1
      kind: Deployment
      name: nginx-deployment-basic
   jobs:
   - name: "scale-down"
     schedule: "30 */1 * * * *"
     targetSize: 1
   - name: "scale-up"
     schedule: "0 */1 * * * *"
     targetSize: 11	
```

```
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: hpa-sample
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx-deployment-basic
  minReplicas: 4
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50	
```

The preceding templates indicate the following information:

-   The `scaleTargetRef` field is used in the configurations of both CronHPA and HPA to specify the object to be scaled.
    
-   The crontab rules in the `jobs` section of the CronHPA configuration specify the number to which pods are scaled at the scheduled time.
    
-   HPA triggers scaling activities based on resource usage.
    

If both CronHPA and HPA are deployed, CronHPA and HPA may scale the same application that is specified by `scaleTargetRef`. To resolve this issue, you only need to enable CronHPA to detect the status of HPA.

## Solution

### **Mechanism**

If ACK detects that both CronHPA and HPA are deployed, ACK sets HPA as the scaling object of CronHPA. In the sample HPA template, `scaleTargetRef` specifies the Deployment that is managed by HPA. The Deployment is related to a ReplicaSet. When HPA scales the Deployment, the ReplicaSet scales pods to the desired number.

If you set the `scaleTargetRef` parameter of CronHPA to HPA, CronHPA can be aware of the values of the `minReplicas`, `maxReplicas`, and `desiredReplicas` parameters of HPA and the current number of pods that run the application specified by the `scaleTargetRef` parameter of HPA. This way, CronHPA compares the preceding values with the number of pods desired by the CronHPA job to determine how scaling is implemented on the application.

CronHPA does not directly change the number of pods for the Deployment. CronHPA triggers HPA to scale the pods. This prevents conflicts between CronHPA and HPA.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5795943471/CAEQORiBgICcqIbBrxkiIDdlY2IxOTRiOWJmYjRmMWRiNjU0ZmZhNWE3NDY4OTRl3963382_20230830144006.372.svg)

### **Sample configurations**

Set the `scaleTargetRef` parameter of CronHPA to HPA. Example:

**Original configurations**

**Modified configurations**

```
scaleTargetRef:
   apiVersion: apps/v1
   kind: Deployment
   name: nginx-deployment-basic
```

```
scaleTargetRef:
   apiVersion: autoscaling/v2
   # Set the resource type to HPA.
   kind: HorizontalPodAutoscaler
   # Specify the name of the HPA resource.
   name:  hpa-sample 
```

Assume that you have created an HPA resource named `hpa-sample` to handle daily workload fluctuations from 09:00 (UTC+8) to 17:00 (UTC+8) each day. In this case, you can create a CronHPA job to scale the HPA resource. For example, you can configure a CronHPA job to scale out your application at 09:00 (UTC+8) every day and scale in your application at 17:00 (UTC+8) every day.

The following sample code block provides an example of the CronHPA template that is compatible with HPA:

```
apiVersion: autoscaling.alibabacloud.com/v1beta1
kind: CronHorizontalPodAutoscaler
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: cronhpa-sample
spec:
   scaleTargetRef:    # Specify information about the HPA resource.
      apiVersion: autoscaling/v2
      kind: HorizontalPodAutoscaler
      name: hpa-sample 
   jobs:
   - name: "scale-up-9am"  
     schedule: "0 0 9 * * * "
     targetSize: 20
     runOnce: false
   - name: "scale-down-5pm"   
     schedule: "0 0 17 * * *"
     targetSize: 3
     runOnce: false
```

### **Compatibility rules**

The following table describes the compatibility rules that enable CronHPA and HPA to interact without conflicts.

**Note**

The following list describes the table headers:

-   HPA (min/max): the ratio of the minReplicas parameter of HPA to the maxReplicas parameter of HPA.
    
-   Number of pod replicas desired by CronHPA: the number of pod replicas desired by CronHPA.
    
-   Current number of pod replicas: the current number of pod replicas that run the application.
    
-   Final number of pod replicas: the number of pod replicas to which the application is scaled.
    

**Scaling condition**

**Scaling result**

**Description**

**HPA (min/max)**

**Number of pod replicas desired by CronHPA**

**Current number of pod replicas**

1/10

5

5

-   HPA (min/max): 1/10.
    
-   Final number of pod replicas: 5.
    

If the number of pods desired by CronHPA equals the current number of pods, CronHPA does not change the values of the minReplicas and maxReplicas parameters of HPA. In addition, no scaling activity is triggered.

1/10

4

5

-   HPA (min/max): 1/10.
    
-   Final number of pod replicas: 5.
    

If the number of pods desired by CronHPA is less than the current number of pods, no scaling activity is triggered.

1/10

6

5

-   HPA (min/max): 6/10.
    
-   Final number of pod replicas: 6.
    

-   If the number of pods desired by CronHPA is greater than the current number of pods, CronHPA adds pods to reach the desired number.
    
-   If the number of pods desired by CronHPA is greater than the value of the minReplicas parameter of HPA, CronHPA changes the value of minReplicas.
    

5/10

4

5

-   HPA (min/max): 4/10.
    
-   Final number of pod replicas: 5.
    

-   If the number of pods desired by CronHPA is less than the current number of pods, no scaling activity is triggered.
    
-   If the number of pods desired by CronHPA is less than the value of the minReplicas parameter of HPA, CronHPA changes the value of minReplicas.
    

5/10

11

5

-   HPA (min/max): 11/11.
    
-   Final number of pod replicas: 11.
    

-   If the number of pods desired by CronHPA is greater than the current number of pods, CronHPA adds pods to reach the desired number.
    
-   If the number of pods desired by CronHPA is greater than the value of the maxReplicas parameter of HPA, CronHPA changes the value of maxReplicas.
    

## **References**

For more information about HPA and CronHPA, see [Implement Horizontal Pod Autoscaler (HPA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-autoscaling) and [Use CronHPA for scheduled horizontal scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cronhpa).
