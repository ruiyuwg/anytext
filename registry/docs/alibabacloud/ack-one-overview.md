Distributed Cloud Container Platform for Kubernetes (ACK One) is an enterprise-class cloud-native platform provided by Alibaba Cloud. This platform can be used in hybrid cloud, multi-cluster, distributed computing, and disaster recovery scenarios. You can use ACK One to connect and manage Kubernetes clusters deployed on top of any infrastructure or in any regions. ACK One also provides APIs that are compatible with open source versions to help you manage and maintain computing, networks, storage, security, monitoring, logs, jobs, applications, and traffic. This topic describes the benefits, features, and use scenarios of ACK One.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQTxiBgIDj.8iS2BkiIDFiYWVmNTlkZWM5NjRlNmNiOTQyNGVhMjg0NTY2OGU23963382_20230830144006.372.svg)

## Access to the ACK One console

[ACK One console](https://cs.console.alibabacloud.com/one)

## Benefits

-   ACK One provides a unified user interface and APIs to help enterprises manage and maintain clusters, computing, networks, storage, security, monitoring, logs, jobs, applications, and traffic.
    
-   ACK One can automatically scale cloud resources to handle traffic fluctuations. You can also set ACK One to scale cloud resources at the scheduled time. This improves the cost-effectiveness of your businesses.
    
-   The backup center is an out-of-the-box feature provided by ACK One to protect applications and application data. This feature allows you to migrate an application together with the application data across regions. You can also use this feature to deploy an application on multiple servers for high redundancy.
    
-   ACK One can distribute applications, schedule jobs, and manage network traffic across all regions. This helps enterprises build a secure, standardized, and advanced IT framework for cloud-native applications to meet business architecture and data management requirements.
    
-   ACK One allows you to quickly deploy large numbers of enterprise-class products or components that are verified by Alibaba Cloud in Kubernetes clusters. This enhances security, improves scheduling efficiency, and accelerates AI computing and big data computing.
    

## Features

To meet challenges in distributed cloud scenarios, ACK One provides the following features.

### **Registered clusters**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQUBiBgMDk6b2z2BkiIDAwMTFjMWViNDYyMjQxMzc4NWIzYTc2OTM5N2RlMmU24124728_20231220145029.672.svg)

You can connect Kubernetes clusters provided by different service providers or deployed in different locations to the Container Service for Kubernetes (ACK) console through registered clusters of ACK One. This enables you to centrally manage Kubernetes clusters and use a variety of scaling features provided by ACK to scale computing resources on Alibaba Cloud.

-   Consistent cloud and on-premises O&M: Kubernetes clusters deployed in data centers and on third-party platforms can use the following features in the same way as ACK clusters.
    
    -   Observability: You can monitor the control planes and data planes of ACK clusters, monitor applications in real time, collect and query logs, and perform cost analysis based on FinOps.
        
    -   Security compliance: You can perform authorization and authentication, cluster auditing, policy management, and configuration inspection.
        
    -   Backup and recovery: You can build a disaster recovery system on Alibaba Cloud to back up, restore, and migrate applications and application data.
        
    -   Microservice governance: You can use Service Mesh (ASM) or Microservices Engine (MSE) to manage microservices in Kubernetes clusters.
        
    
-   Cloud scaling: You can add Elastic Compute Service (ECS) instances and Elastic Container Instance (ECI) to external Kubernetes clusters and schedule Alibaba Cloud computing resources in these clusters in case on-premises resources are insufficient or traffic spikes occur.
    
-   Intelligent scheduling
    
    -   The ACK scheduler provides advanced scheduling features, such as gang scheduling, topology-aware CPU scheduling, and ECI-based scheduling.
        
    -   You can use ACK Fluid to accelerate access and reduce bandwidth usage through distributed cache system orchestration in scenarios in which computing and storage are decoupled.
        

For more information about registered clusters, see [Overview of registered clusters](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-9).

### **Multi-cluster Fleet instances**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQTxiBgMDA6tGS2BkiIGVhZDVkM2I5ZjIwZTRlMjVhMTM1ZTcwZjUwYTRjMjNj4124728_20231220145029.672.svg)

You can associate multiple Kubernetes clusters with a multi-cluster Fleet instance of ACK One and use the multi-cluster Fleet instance to manage these Kubernetes clusters based on a unified control plane.

-   The control plane is built based on Kubernetes control planes and provides Kubernetes APIs.
    
-   You can connect external Kubernetes clusters to a multi-cluster Fleet instance based on a registered cluster.
    
-   GitOps for application distribution: You can host open source ArgoCD in ACK One. This allows you to distribute multi-cluster applications through GitOps.
    
-   Traffic management: You can use MSE cloud-native gateways to manage north-south traffic for multi-cluster applications and create multi-cluster Services to manage east-west traffic.
    
-   Job distribution: You can run jobs in multiple clusters at a scheduled time.
    
-   Global monitoring: You can view the metrics of all clusters in one dashboard.
    

For more information about multi-cluster Fleet instances, see [Fleet management overview](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/fleet-management-overview).

### **Kubernetes clusters for distributed Argo workflows**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQUBiBgIDt2r6z2BkiIDk1ZGRhZjU0MWE1MDRiYTJiOGRkMzZjYmVlNmZiMmE24111679_20231215102844.883.svg)

Kubernetes clusters for distributed Argo workflows adopt a serverless architecture to run workflows on ECI at a scheduled time.

-   Cost optimization: Control planes are free of charge and you are charged for data planes based on the actual usage. You can also use preemptible instances to optimize costs.
    
-   High I/O bandwidth: Distributed cache is used to provide more than 20 Gbit/s aggregated bandwidth for read operations and support cross-region access.
    
-   Resource demand prediction: The system can automatically adjust resource specifications based on load awareness.
    
-   High concurrency: You can run thousands of concurrent workflows and tens of thousands of concurrent computing tasks.
    
-   Event-driven service: Workflows can be automatically triggered by events of Git, Message Service (MNS), and Object Storage Service (OSS).
    

For more information about Kubernetes clusters for distributed Argo workflows, see [Overview of Kubernetes clusters for distributed Argo workflows](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-12).

## Usage scenarios

### Scenario 1: Connect an external cluster in a data center to a registered cluster

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQUBiBgMCVuMCz2BkiIGQ2NGIxYjgyOGI4NjQ0MmU5MTBmZTViNDExYjlhOWZm3963382_20230830144006.372.svg)

Scenario

-   **External clusters in data centers**: ACK One allows you to connect a data center to the cloud and share resources.
    
-   **On-demand resource and application scaling**: ACK One can scale out resources and applications in the cloud during peak hours to balance the traffic load in the external cluster.
    

### **Scenario 2: Use registered clusters and Alibaba Cloud services to extend the capability of external clusters and provide consistent cloud and on-premises O&M**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQTxiBgMCoyt.S2BkiIGUyODc4YjZjZDU1NDRkYzg4ODhhMmMxZWQ4M2I5YTRi4124728_20231220145029.672.svg)

Scenario

-   **Consistent cloud and on-premises O&M:** You can use O&M capabilities provided by ACK One in Kubernetes clusters deployed in data centers or third-party public clouds.
    
-   **Enhanced observability:** ACK One allows you to collect logs, monitoring data, and events, and offers consistent cloud and on-premises O&M experience across different environments.
    
-   **Enhanced security:** You can enable auditing, security inspection, node risk detection, and policy governance with a few clicks.
    
-   **Microservice governance:** You can use ASM and MSE to perform microservice governance.
    

### Scenario 3: Use registered clusters to implement disaster recovery in hybrid cloud environments, within a region, or across regions

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQTxiBgIDRhOKS2BkiIGU4YmE2ODY4OWM3NzQyMmU5OGQ2ZTY5ZWM2YTkzYTMx3963382_20230830144006.372.svg)

Scenario

-   **Deploy applications to the cloud**: ACK One allows you to back up and restore applications across regions and from a data center to the cloud. This helps you deploy your business to the cloud in an efficient manner.
    
-   **Disaster recovery**: ACK One allows you to back up stateful applications across regions and from a data center to the cloud. ACK One also allows you to configure backup policies and restoration policies. This allows you to continuously back up your applications to the cloud to enhance the availability of your businesses.
    
-   **Disaster recovery**: ACK One provides scheduled data backup and geo-disaster recovery for applications and data in the cloud and data centers.
    
-   **Active geo-redundancy**: ACK One allows you to build a disaster recovery system by deploying three data centers across two zones. This feature is compatible with Kubernetes and helps ensure business continuity.
    

### Scenario 4: Use registered clusters and the ACK scheduler to empower AI and big data

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6167445671/CAEQTxiBgICa9.SS2BkiIDBjZjBkZWZkNTYwODQ4ZTVhZjA3MjgwODYwNjNiZjRi3963382_20230830144006.372.svg)

Scenario

-   **AI algorithm development**: ACK One allows you to manage AI jobs, quotas, and observability.
    
-   **AI training**: ACK One supports topology-aware scheduling and a variety of job scheduling policies. This allows you to improve AI training efficiency. ACK One supports compute-storage decoupling, which accelerates distributed training jobs. ACK One supports cross-cluster scheduling of various types of jobs, such as Spark jobs, Kubernetes jobs, and TensorFlow training jobs.
    
-   **AI inference**: ACK One supports GPU sharing, which can improve GPU utilization by approximately 300%. ACK One can automatically scale resources that are deployed on the cloud and in data centers.
    
-   **Intelligent CPU scheduling**: ACK One supports intelligent CPU scheduling and non-uniform memory access (NUMA) awareness based on ECS Bare Metal instances.
    

### **Scenario 5: Use multi-cluster Fleet instances to distribute applications to multiple clusters through GitOps**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7167445671/CAEQTxiBgMDyp.qS2BkiIDU2NzA2MDczYjg4ZTQ0NDE5ZmU5NzlkZGE2MDM2Y2Ex4124728_20231220145029.672.svg)

Scenario

-   **High reliability:** You can deploy applications from Git repositories and use features such as version control, application change approval, code rollback, and auditing.
    

-   **High security:** Developers need only Git repository permissions. No Kubernetes cluster permissions are required.
    
-   **Continuous deployment:** The status of applications in Git repositories is synchronized with the applications deployed in Kubernetes clusters.
    
-   **Multi-cluster application distribution:** You can distribute an application to multiple clusters and configure these applications to use different configurations.
    

### Scenario 6: Use multi-cluster Fleet instances and multi-cluster gateways to implement zone-disaster recovery

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7167445671/CAEQTxiBgMC7uO.S2BkiIGNiYjM5Y2JhZTQzZDRjNTNhNTg0MjBlODI5MmU5ZjJl4133843_20231222171815.556.svg)

Scenario

-   **Multi-cluster gateways**: You can use multi-cluster gateways to schedule north-south traffic to reduce costs.
    
-   **Global Ingresses**: You can create Ingress routing rules to control Layer 7 traffic based on weights and the number of replicated pods. You can also configure automatic fallback.
    

### Scenario 7: Use Kubernetes clusters for distributed Argo workflows to orchestrate and schedule standard jobs and complex workflows

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7167445671/CAEQTxiBgMDyqfOS2BkiIGM5MTEzNzIxM2FiYzQ0MzI5NTQwODIzNmE3NDZiNjgw4133843_20231222175158.569.svg)

Scenario

-   **Managed serverless Argo control plane**: The control pane complies with the orchestration standards of open source Argo workflow.
    
-   **Multiple regions and zones:** You can use resources across regions and zones and use preemptible instances to reduce costs.
    
-   **Distributed cache:** Distributed cache can decouple computing and storage, accelerate access, and reduce computing costs.
    
-   **Applicable scenarios:** A variety of scenarios are supported, including simulation, scientific computing, data processing, and continuous integration.
    

## Contact us

If you have any questions about ACK One, join the DingTalk group **35688562**.

## References

-   [Overview of registered clusters](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-9#concept-2424510)
    
-   [Fleet management overview](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/fleet-management-overview)
    
-   [Overview of Kubernetes clusters for distributed Argo workflows](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-12)
    
-   [Backup center](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/backup-center-overview/#task-2510869)
