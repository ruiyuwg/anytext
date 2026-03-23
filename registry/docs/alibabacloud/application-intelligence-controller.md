Container Service for Kubernetes (ACK) provides the Advanced Horizontal Pod Autoscaler (AHPA) component that supports predictive scaling. The predictive scaling feature can prefetch resources for the scaling activities of applications whose traffic loads periodically fluctuate. This helps ACK scale resources for applications at the earliest opportunity. You can install the AHPA controller to use the predictive scaling feature provided by AHPA. This topic introduces AHPA and describes the usage notes and release notes of the component.

## Introduction

AHPA predicts the number of pods required by an application based on the historical metric data of the application. This helps ACK scale resources for applications at the earliest opportunity. AHPA uses proactive prediction and passive prediction to adjust the number of pods in real time. AHPA also allows you to configure policies to specify the maximum and minimum numbers of pods within a specific time period.

## How AHPA works

Auto scaling offers cost savings, improves the stability of applications, automates O&M, and allows enterprises to focus on business development. The following section describes the rules for designing the AHPA architecture:

-   Stable: Scaling activities are performed only when applications are stable.
    
-   O&M-free: No additional O&M is required. You do not need to add a new controller to your client when you use AHPA. In addition, the syntax of AHPA is simpler than HPA.
    
-   Serverless: An application-oriented architecture is provided to allow users to focus on pods instead of worrying about the resource utilization of Kubernetes nodes. If all pods in an ACK Serverless cluster are deployed on elastic container instances, you can enhance the long-run capability of the ACK Serverless cluster as a best practice for auto scaling in serverless (zero node) scenarios.
    

The following figure shows the architecture of AHPA.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6678395171/CAEQJhiBgIC6t9KX_BgiIDg1NDgwNWM3ZTlhYTRmMjI5YzQ4NTJiNjQ2NTZlYTBj3963382_20230830144006.372.svg)

-   Various metrics: CPU, memory, QPS, RT, and external metrics are supported.
    
-   Stability: AHPA uses features such as prefetch (proactive), scaling policies (passive), and service degradation to ensure sufficient resources for applications.
    
    -   Proactive prediction: AHPA can predict the number of pods required by an application within the next 24 hours based on the machine learning algorithms provided by DAMO Academy and the historical metric data of the application. AHPA is suitable for applications whose traffic loads periodically fluctuate.
        
    -   Passive prediction: AHPA can predict the number of pods required by an application based on the real-time metric data of the application to handle traffic spikes.
        
    -   Service degradation: AHPA allows you to specify the maximum and minimum numbers of pods within one or more time periods.
        
-   Multiple scaling methods: AHPA can use Knative, HPA, and Deployments to perform scaling.
    
    -   Knative: Knative can scale resources based on concurrency, QPS, or RT to resolve the cold start issue in serverless scenarios.
        
    -   HPA: HPA can simplify the configuration of scaling policies and help beginners resolve the cold start issue.
        
    -   Deployments: Deployments can be used to perform auto scaling.
        

## Usage notes

For more information, see [AHPA overview](/help/en/ack/serverless-kubernetes/user-guide/ahpa-overview#task-2196019).

## Release notes

### **April 2024**

**Version**

**Release date**

**Description**

**Impact**

v2.6.0-aliyun.1

2024-04-16

The link that uses metrics-server to collect metrics is optimized.

We recommend that you perform the update during off-peak hours.

### **March 2024**

**Version**

**Release date**

**Description**

**Impact**

v2.5.6-aliyun.1

2024-03-20

The issue of custom metric panic is fixed.

We recommend that you perform the update during off-peak hours.

### **December 2023**

**Version**

**Release date**

**Description**

**Impact**

v2.5.0-aliyun.1

2023-12-25

-   Custom PromQL configurations are supported.
    
-   Elastic Workload is supported.
    
-   kubectl is optimized to display whether periodic features are provided.
    

We recommend that you perform the update during off-peak hours.

### **October 2023**

**Version**

**Release date**

**Description**

**Impact**

v2.4.0-aliyun.1

2023-10-16

-   Multiple metrics are supported in passive prediction.
    
-   kubectl is optimized to display multiple AHPA metrics.
    
-   The following issue is fixed: Modifications to the object specified by TargetRef in AHPA do not take effect.
    

We recommend that you perform the update during off-peak hours.

### July 2023

**Version**

**Release date**

**Description**

**Impact**

v2.3.0-aliyun.1

2023-07-12

-   Custom metrics are supported.
    
-   kubectl is optimized to display the type of resource that is referenced in the output.
    

We recommend that you perform the update during off-peak hours.

### **June 2023**

**Version**

**Release date**

**Description**

**Impact**

v2.2.0-aliyun.1

2023-06-19

-   The concurrency metric is supported for predictive scaling.
    
-   The passive processing logic of Knative is optimized.
    
-   The latency optimization logic for real-time queries of the CPU and memory metrics is optimized.
    

We recommend that you perform the update during off-peak hours.

### **April 2023**

**Version**

**Release date**

**Description**

**Impact**

v2.1.0-aliyun.1

2023-04-26

-   Prometheus dashboards are supported.
    
-   The time ranges for historical metrics can be customized.
    

We recommend that you perform the update during off-peak hours.

### July 2022

**Version**

**Release date**

**Description**

**Impact**

v1.0.0-aliyun.1

2022-07-13

-   The CPU, memory, RT, and QPS metrics are supported for predictive scaling.
    
-   Deployments, HPA, and Knative can be used to perform scaling.
    

No impact on workloads
