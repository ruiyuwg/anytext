This topic introduces ack-cost-exporter and describes the usage notes and release notes for the component.

## Introduction

The cost analysis feature is implemented using the following methods:

-   ack-cost-exporter submits the billing data of a cluster for cost analysis. The billing data includes the costs, real-time prices, billing methods, discounts, coupons, and vouchers for cloud resources.
    
-   ack-arms-prometheus submits the resource usage data of a cluster.
    
-   ack-arms-prometheus performs cost analysis based on the billing data and the resource usage data.
    

ack-cost-exporter consists of alibaba-cloud-price-exporter and alibaba-cloud-billing-exporter:

-   alibaba-cloud-price-exporter
    
    -   Periodically obtains the instance types and prices in the cluster and transforms them into Prometheus metrics.
        
    -   Supports public cloud, hybrid cloud, and multi-cloud scenarios.
        
    -   Supports multiple billing methods, such as subscription, pay-as-you-go, and preemptible instances.
        
-   alibaba-cloud-billing-exporter
    
    Regularly obtains the bills of a cluster and converts them into Prometheus metrics.
    

## Usage notes

For more information about how to use ack-cost-exporter, see [Enable cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815).

## Release notes

### July 2025

**Version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.0.21

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.9-28028c9-aliyun

2025-07-26

-   Optimizations:
    
    -   Optimized cost-exporter to support active-standby high availability (HA).
        

This upgrade does not affect your services.

### April 2025

**Version number**

**Image address**

**Release date**

**Changes**

**Impact**

v1.0.18

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.7-ed1bb5f-aliyun

2025-04-01

-   New features:
    
    -   Cost Insight now supports price queries for ACS instances.
        

This upgrade does not affect your services.

### **December 2023**

**Version**

**Image address**

**Last Modified**

**Description**

**Impact**

v1.0.15

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.6-a577df8-aliyun

2023-12-15

The logic for handling exceptions due to the unregistered price of an elastic container instance is optimized.

No impact on workloads

### **July 2023**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.0.14

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.5-d7425f5-aliyun

2023-07-21

-   The prices of preemptible elastic container instances can be queried.
    
-   The issue that the metrics about resource prices are not deleted after Elastic Compute Service (ECS) instances and elastic container instances are deleted and Elastic Container Instance-based pods enter the succeed state is fixed.
    

No impact on workloads

### June 2023

**Version**

**Image address**

**Modification Time**

**Change description**

**Impact**

v1.0.13

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.4-ae2baf5-aliyun

2023-06-27

-   The issue that no cost data is displayed on the Node Pool dashboard is fixed.
    
-   Parameters of the component can be customized on the Add-ons page of the Container Service for Kubernetes (ACK) console. The custom configuration of the component is retained after the component is updated.
    

No impact on workloads

v1.0.12

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.3-a312a32-aliyun

2023-06-09

The logic for inquiring the prices of nodes in large clusters is optimized to improve data stability.

No impact on workloads

### March 2023

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.0.10

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.2.1-0378c52-aliyun

2023-03-10

Registered clusters are supported.

No impact on workloads

### November 2022

**Version**

**Image address**

**Modification Time**

**Description**

**Impact**

v1.0.9

registry-vpc.{{.Region}}.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.1.9-71eaa43-aliyun

2022-11-25

-   Authorization check is supported by the ACK console.
    
-   The billing-exporter container that provides the bill analysis feature is combined into the price-exporter container.
    
-   The stability of the cost analysis feature provided by ack-cost-exporter is improved in scenarios where the nodes in the cluster are frequently scaled.
    

Go to the Cost Insights page in the ACK console again. The console prompts you to perform authorizations and update ack-cost-exporter. After you update ack-cost-exporter, the historical cost analysis data provided by the earlier version of ack-cost-exporter is retained.

### August 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.0.7

-   registry.cn-zhangjiakou.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.1.7-bfc23a5-aliyun
    
-   registry.cn-zhangjiakou.aliyuncs.com/acs/alibaba-cloud-billing-exporter:v0.1.7-9e8b4c8-aliyun
    

2022-08-05

-   The cost data of an elastic container instance or a pod can be collected.
    
-   The resource occupation of cost data is reduced and the computing performance on cost data is improved.
    

No impact on workloads

### May 2021

**Version**

**Image address**

**Modification Time**

**Modify content**

**Impact**

v0.1.0

-   registry.cn-zhangjiakou.aliyuncs.com/acs/alibaba-cloud-price-exporter:v0.1.0-64dae5a-aliyun
    
-   registry.cn-zhangjiakou.aliyuncs.com/acs/alibaba-cloud-billing-exporter:v0.1.0-4194980-aliyun
    

2021-05-11

-   The cost data of a pod can be submitted.
    
-   Cost forecasts can be performed based on different sales strategies of computing resources.
    

No impact on workloads
