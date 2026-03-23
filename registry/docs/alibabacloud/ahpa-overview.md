Resource demand is difficult to predict in cloud-native scenarios. Horizontal Pod Autoscaler (HPA) provided by Kubernetes scales resources with a delay and the configuration is complex. To resolve the preceding issues, Container Service for Kubernetes (ACK) released Advanced Horizontal Pod Autoscaler (AHPA). AHPA can automatically identify workload fluctuations and predict resource demand based on historical metric data to help you implement predictive scaling.

## Background information

The following traditional methods are used to manage the pods of an application: manually specify the number of pods, use HPA, and use CronHPA. The following table describes the disadvantages of the preceding methods.

**Method**

**Disadvantage**

Manually specify the number of pods

Resources are wasted and you are charged for idle resources during off-peak hours.

Use HPA

Scaling activities are performed after a scaling delay. Scale-out activities are triggered only if the resource usage exceeds the threshold and scale-in activities are triggered only if the resource usage drops below the threshold.

Use CronHPA

-   You need to specify the number of pods required during each time period. If you specify an excessive number of pods, resources are wasted. If you do not specify sufficient pods, the resource demand cannot be met.
    
-   You must modify the scaling policy to adapt to the fluctuating workloads.
    

ACK clusters provide the AHPA feature that supports predictive scaling. You can use AHPA to increase resource utilization and improve the efficiency of resource management. AHPA can analyze historical data and predict the number of pods that are required per minute within the next 24 hours. If you use CronHPA, you must manually create 1,440 (24 hours × 60 minutes) schedules instead. The following figure shows the difference between traditional horizontal pod scaling and predictive horizontal pod scaling.

-   Traditional horizontal pod scaling: Scale-out activities are triggered after the amount of workloads increases. The system cannot provision pods at the earliest opportunity to handle the fluctuating workloads due to the scaling delay.
    
-   Predictive horizontal pod scaling: AHPA identifies workload fluctuations based on the historical values of specific metrics and the amount of time that a pod spent before the state of the pod changes to Ready. This way, AHPA can provision pods that are ready to be scheduled before a traffic spike occurs. This ensures that resources are allocated at the earliest opportunity.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7546370471/CAEQJhiBgMCa2NOz_xgiIGIzZGVhODViY2Y2OTRmMThhMjk1NDdmN2JlMjRiM2I33963382_20230830144006.372.svg)

## Business architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7546370471/CAEQJhiBgICI34W0_xgiIGNmZWFmNzNiNjkyZjQyZTliYWM0NjJkM2VhMzVkNTE44224465_20240228143414.242.svg)

-   Various metrics: AHPA supports metrics such as CPU, GPU, memory, queries per second (QPS), response time (RT), and external metrics.
    
-   Stability: AHPA uses proactive prediction, passive prediction, and service degradation to guarantee sufficient resources for applications.
    
    -   Proactive prediction: AHPA predicts the trend of workload fluctuations based on historical metric data. Proactive prediction is suitable for applications whose workloads periodically fluctuate.
        
    -   Passive prediction: AHPA predicts workload fluctuations in real time. AHPA can predict workload fluctuations and deploy resources in real time.
        
-   Service degradation: AHPA allows you to specify the maximum and minimum numbers of pods within one or more time periods.
    
-   Multiple scaling methods: AHPA can use Knative, HPA, and Deployments to perform scaling.
    
    -   Knative: AHPA can help resolve the cold start issue in resource scaling based on concurrency, QPS, or RT in serverless scenarios.
        
    -   HPA: AHPA can simplify the configuration of HPA scaling policies and help beginners handle the scaling delay issue.
        
    -   Deployment: AHPA can directly use Deployments to perform auto scaling.
        

## Advantages

-   High performance: AHPA can predict workload fluctuations within milliseconds and scale resources within seconds.
    
-   High accuracy: AHPA can identify workload fluctuations with an accuracy higher than 95% based on proactive prediction and passive prediction.
    
-   High stability: AHPA allows you to specify the maximum and minimum numbers of pods required within time periods that are accurate to minutes.
    

## Scenarios

-   Applications whose workloads periodically fluctuate, such as live streaming, online education, and gaming applications.
    
-   Scenarios in which the number of pods that are deployed is fixed and auto scaling is also used to handle workload fluctuations. For example, you can handle unexpected burst traffic in regular business scenarios.
    
-   System recommendations on the number of pods to be provisioned are required. AHPA provides a standard Kubernetes API to allow you to obtain prediction results. You can integrate the API into your business systems.
    

## References

-   For more information about how to deploy and use AHPA, see [Deploy AHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-ahpa#task-2254406).
    
-   For more information about how to use AHPA to perform predictive scaling based on GPU metrics, see [Use AHPA to perform predictive scaling based on GPU metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ahpa-to-perform-predictive-scaling-based-on-gpu-metrics#task-2247861).
    
-   For more information about how to use AHPA in Knative, see [Use AHPA to enable predictive scaling in Knative](/help/en/doc-detail/455215.html#task-2177627).
