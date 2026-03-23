Simple Log Service (SLS) can collect logs from multiple types of Alibaba Cloud services, such as elastic computing, storage, security, and database services. The logs record operational statistics, including user operations, running status, and business dynamics of Alibaba Cloud services.

## **Overview**

### **Automatic collection mechanism**

When you enable the log collection feature for an Alibaba Cloud service, the system automatically performs the following operations:

1.  Built-in Agent deployment: A log collection agent (such as Logtail) is pre-installed in the target cloud service instance. No manual installation is required.
    
2.  SLS configuration: The system automatically creates corresponding Logstores in SLS to store logs from the cloud service.
    
3.  Real-time collection and storage: Log data is transmitted to SLS in real time through the agent and stored by service type.
    

### **Steps to stop billing**

To stop billing for cloud service log collection, you need to perform operations on both data collection and storage resources:

1.  Disable log collection
    
    -   Go to the console of the corresponding cloud service and turn off the SLS integration feature.
        
    -   After collection is stopped, the agent will no longer transmit new logs.
        
2.  Clean up storage resources
    
    -   Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and delete the Project and Logstore for the corresponding cloud service.
        
    -   Make sure to delete all linked instances to avoid incurring fees for storage space usage.
        

## **Collection of Alibaba Cloud service logs**

### **Computing**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Elastic Compute Service (ECS)

[Host text log collection](/help/en/sls/host-text-log-collection-auto-install)

Custom

\-

Select a custom Project and Logstore for storage.

Distributed Cloud Container Platform for Kubernetes (ACK One)

[Enable control plane component logs and audit logs for ACK One master instances](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/collect-control-plane-component-logs-and-audit-logs-of-fleet-instances#section-rfy-ptj-vzj)

-   Project:
    
    -   Custom
        
    -   k8s-log-_Master instance ID_
        
-   Logstore:
    
    -   apiserver-_Master instance ID_
        
    -   kcm-_Master instance ID_
        
    -   application-controller-_Master instance ID_
        
    -   cluster-operator-_Master instance ID_
        
    -   audit-_Master instance ID_
        

\-

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-ab79abd******************f2a8f45`, where `ab79abd******************f2a8f45` represents the master instance ID. Fixed Logstores with the master instance ID are automatically created in this Project.

[Enable/Disable GitOps control plane logs and audit logs for ACK One](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/enable-the-collection-of-the-control-plane-logs-and-audit-logs-of-gitops)

-   Project: k8s-log-_Master instance ID_
    
-   Logstore: gitops-argocd-logstore
    

\-

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-ab79abd******************f2a8f45`, where `ab79abd******************f2a8f45` represents the master instance ID. A Logstore named `gitops-argocd-logstore` is created in this Project.

[Enable/Disable workflow logs for ACK One](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/configure-log-service)

-   Project: k8s-log-_Master instance ID_
    
-   Logstore: workflow-logstore
    

\-

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-ab79abd******************f2a8f45`, where `ab79abd******************f2a8f45` represents the master instance ID. A Logstore named `workflow-logstore` is created in this Project.

ACK Managed and Dedicated Clusters

[Enable/Disable control plane component logs for ACK managed and dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster)

-   Project:
    
    -   Custom
        
    -   k8s-log-_Cluster ID_
        
-   Logstore:
    
    -   apiserver-_Cluster ID_
        
    -   ccm-_Cluster ID_
        
    -   scheduler-_Cluster ID_
        
    -   kcm-_Cluster ID_
        

[Default fields for ACK Pro control plane logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#3fa0ed09f4f14)

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45`, where cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID. Fixed Logstores with the cluster ID are automatically created in this Project.

[Collect Kubernetes cluster text logs (DaemonSet)](/help/en/sls/collect-kubernetes-cluster-text-logs-daemonset)

-   Project: k8s-log-_Cluster ID_
    
-   Logstore: config-operation-log
    

-   [Default fields for container text logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#3fa0ed09f4f14)
    
-   [Default fields for Kubernetes cluster standard output](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#fc41ff3f89za0)
    

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45`, where cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID. A Logstore named `config-operation-log` is automatically created in this Project.

[Enable/Disable container internal operation audit logs for ACK managed and dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-container-auditing)

-   Project: k8s-log-_Cluster ID_
    
-   Logstore: advaudit-_Cluster ID_
    

\-

The Project name starts with k8s-log, and the Logstore name starts with advaudit. For example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45` and a Logstore named `advaudit-cb70fbd******************f2a8f45` created in this Project. Here, cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID.

[Enable Kubernetes event logs for ACK managed and dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#ab9061d08628i)

-   Project:
    
    -   Custom
        
    -   k8s-log-_Cluster ID_
        
-   Logstore:
    
    -   k8s-event
        
    -   internal-alert-history
        
    -   security-inspector-configaudit-_Cluster ID_
        

\-

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45`, where cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID. Fixed Logstores with the cluster ID are automatically created in this Project.

[Enable Nginx Ingress access logs for ACK managed and dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#section-miq-p27-i9e)

-   Project: k8s-log-_Cluster ID_
    
-   Logstore:
    
    -   nginx-ingress
        
    -   nginx-ingress-metrics-result
        

-   [Metric fields extracted from Kubernetes Ingress access logs](/help/en/sls/metrics-3)
    
-   [Fields in Kubernetes Nginx Ingress access logs](/help/en/sls/log-fields-20)
    

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45`, where cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID. Logstores named `nginx-ingress` and `nginx-ingress-metrics-result` are automatically created in this Project.

ACK Serverless Clusters

[Enable/Disable control plane component logs for ACK Serverless](/help/en/ack/serverless-kubernetes/user-guide/collect-control-plane-component-logs-of-ack-serverless-cluster)

-   Project:
    
    -   Custom
        
    -   k8s-log-_Cluster ID_
        
-   Logstore:
    
    -   apiserver-_Cluster ID_
        
    -   ccm-_Cluster ID_
        
    -   kcm-_Cluster ID_
        

\-

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45`, where cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID. Fixed Logstores with the cluster ID are automatically created in this Project.

ACK Edge Clusters

[Enable/Disable control plane component logs for ACK Edge](/help/en/ack/ack-edge/user-guide/use-log-service-to-collect-log-data-from-containers-of-ack-edge-clusters)

-   Project:
    
    -   Custom
        
    -   k8s-log-_Cluster ID_
        
-   Logstore:
    
    -   alb-_Cluster ID_
        
    -   apiserver-_Cluster ID_
        
    -   audit-_Cluster ID_
        
    -   ccm-_Cluster ID_
        
    -   controlplane-events-_Cluster ID_
        
    -   k8s-event
        
    -   kcm-_Cluster ID_
        
    -   scheduler-_Cluster ID_
        

\-

The Project name starts with k8s-log, for example, a system-created Project named `k8s-log-cb70fbd******************f2a8f45`, where cb70fbd\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*f2a8f45 represents the cluster ID. Fixed Logstores with the cluster ID are automatically created in this Project.

WUYING Workspace

[Enable operation logs for WUYING Workspace](/help/en/wuying-workspace/user-guide/ship-user-operation-logs#sc-steps)

-   Project: elastic-desktop-_Custom_
    
-   Logstore: elastic\_desktop\__Custom_
    

\-

The Project name starts with elastic-desktop, for example, a Project named `elastic-desktop-test`, and a Logstore named `elastic_desktop_test` is automatically created in this Project.

Function Compute 2.0

[Enable access logs for Function Compute 2.0](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#b4b4ed6522r86)

-   Project:
    
    -   Custom
        
    -   aliyun-fc-cn-_Region ID_\-_Random ID_
        
-   Logstore: function-log
    

[Function Compute 2.0 metric fields](/help/en/functioncompute/fc-2-0/user-guide/request-level-metrics-log#05a8560f6683e)

-   If SLS is enabled when you create a service:
    
    -   The system automatically creates a Project named `aliyun-fc-cn-hangzhou-cc****d0-d**3-5**4-a**d-698******d7d`, where the region ID is cn-hangzhou, indicating that it is created in the China (Hangzhou) region.
        
    -   A Logstore named `function-log` is created by default.
        
    
-   If SLS is not enabled when you create a service, you need to manually select a custom Project and Logstore when updating the service.
    

Function Compute 3.0

[Enable access logs for Function Compute 3.0](/help/en/functioncompute/fc/user-guide/configure-the-logging-feature-1#b4b4ed6522r86)

-   Project: serverless-cn-_Region ID_\-_Random ID_
    
-   Logstore: default-logs
    

[Function Compute 3.0 metric fields](/help/en/functioncompute/fc/user-guide/request-level-metric-logs#05a8560f6683e)

-   When you create a function, the log feature is enabled by default.
    
    -   The system automatically creates a Project named `serverless-cn-hangzhou-cc****d0-d**3-5**4-a**d-698******d7d`, where the region ID is cn-hangzhou, indicating that it is created in the China (Hangzhou) region.
        
    -   A Logstore named `default-logs` is created by default.
        
    
-   If SLS is not enabled when creating a service, you need to manually select a custom Project and Logstore when updating the service.
    

### **Storage**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Object Storage Service (OSS)

[Enable/Disable access logs for OSS](/help/en/oss/user-guide/real-time-log-query/)

-   Project: oss-log-_Alibaba Cloud account ID-Region ID_
    
-   Logstore: oss-log-store
    

\-

The system automatically creates a Project named `oss-log-1290********9680-cn-hangzhou` and a Logstore named `oss-log-store` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID.

File Storage NAS

-   [Enable access logs for NAS](/help/en/nas/user-guide/enable-the-log-analysis-feature-4)
    
-   [Disable access logs for NAS](/help/en/nas/user-guide/disable-the-log-analysis-feature)
    

-   Project: nas-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore:
    
    -   General-purpose NAS:
        
        -   NFS protocol file system: nas-nfs
            
        -   SMB protocol file system: nas-smb-access-log
            
    -   Extreme NAS file system: nas-extreme-nfs
        

[NAS log fields](/help/en/nas/user-guide/log-fields-30)

The system automatically creates a Project named `nas-1290********9680-cn-hangzhou`, where `1290********9680` is your Alibaba Cloud account ID. Different Logstores are created in this Project based on the NAS type:

-   General-purpose NAS: `nas-nfs` (NFS protocol file system) or `nas-smb-access-log` (SMB protocol file system).
    
-   Extreme NAS file system: `nas-extreme-nfs`.
    

Elastic Block Storage

[Enable/Disable access logs for EBS](/help/en/sls/enable-data-collection#section-mi6-sla-wm2)

-   Project: aliyun-product-data_\-Alibaba Cloud account ID-Region ID_
    
-   Metricstore: ebs\_disk\_metric
    

\-

The system automatically creates a Project named `_aliyun-product-data_-1290********9680-cn-hangzhou` and a Metricstore named `ebs_disk_metric` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID.

### **Security**

**Cloud service**

**Enable/Disable**

**Default project and logstore**

**Log fields**

**Note**

Anti-DDoS Proxy

[Enable full logs for DDoS](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/use-the-log-analysis-feature)

-   Anti-DDoS Proxy (Chinese Mainland)
    
    -   Project: ddoscoo-project-_Alibaba Cloud account ID_\-cn-hangzhou
        
    -   Logstore: ddoscoo-logstore
        
-   Anti-DDoS Proxy (Outside Chinese Mainland)
    
    -   Project: ddosdip-project-_Alibaba Cloud account ID_\-ap-southeast-1
        
    -   Logstore: ddosdip-logstore
        

[Anti-DDoS Proxy full log fields](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/fields-included-in-full-logs)

The system automatically creates a Project named `ddoscoo-project-1290********9680-cn-hangzhou` and a Logstore named `ddoscoo-logstore` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, and `cn-hangzhou` indicates that the Anti-DDoS service is in the Chinese Mainland.

Anti-DDoS Origin

[Enable Mitigation Logs for Anti-DDoS Origin](/help/en/anti-ddos/anti-ddos-origin/user-guide/enable-mitigation-analysis#steps-v0v-74t-6sd)

-   Project: ddosbgp-project-_Alibaba Cloud account ID_\-cn-hangzhou
    
-   Logstore: ddosbgp-logstore
    

[Anti-DDoS Origin log fields](/help/en/anti-ddos/anti-ddos-origin/user-guide/fields-in-logs)

The system automatically creates a Project named `ddosbgp-project-1290********9680-cn-hangzhou` and a Logstore named `ddosbgp-logstore` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID.

Security Center

[Enable logon logs for Security Center](/help/en/security-center/user-guide/enable-log-analysis#section-hb4-p5l-kfb)

-   Project: sas-log-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore: sas-log
    

-   [Security Center security logs](/help/en/security-center/user-guide/log-category-and-field-description-v2-0#e01d70faa5z7w)
    
    -   Vulnerability Log
        
    -   Baseline Log
        
    -   Alert Logs
        
    -   Cloud Platform Configuration Assessment
        
-   [Security Center network logs](/help/en/security-center/user-guide/log-category-and-field-description-v2-0#d90a0bd03cots)
    
    -   DNS Log
        
    -   Internal DNS logs
        
    -   Session
        
    -   Access Log
        
-   [Security Center host logs](/help/en/security-center/user-guide/log-category-and-field-description-v2-0#882291f03c9zj)
    
    -   Process
        
    -   Network
        
    -   Login
        
    -   Brute Force
        
    -   Process Snapshot Log
        
    -   Account Snapshot Log
        
    -   Port Snapshot Log
        
    -   DNS Query
        

The system automatically creates a Project named `sas-log-1290********9680-cn-hangzhou` and a Logstore named `sas-log` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID.

WAF 2.0

[Enable full logs for WAF 2.0](/help/en/waf/web-application-firewall-2-0/user-guide/get-started-with-the-log-service-for-waf-feature#section-0o3-u2z-gti)

-   WAF instances in the Chinese mainland
    
    -   Project: waf-project-_Alibaba Cloud account ID_\-cn-hangzhou, located in China (Hangzhou).
        
    -   Logstore: waf-logstore
        
-   WAF instances outside the Chinese mainland
    
    -   Project: waf-project-_Alibaba Cloud account ID_\-ap-southeast-1, located in Singapore.
        
    -   Logstore: waf-logstore
        

[WAF 2.0 log fields](/help/en/waf/web-application-firewall-2-0/user-guide/log-fields-supported-by-waf)

The system automatically creates a Project named `waf-project-1290********9680-cn-hangzhou` and a Logstore named `waf-logstore` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, and the region is China (Hangzhou), indicating that the WAF instance is in the Chinese mainland.

WAF 3.0

[Enable/Disable full logs for WAF 3.0](/help/en/waf/web-application-firewall-3-0/user-guide/enable-or-disable-the-log-service-for-waf-feature)

-   WAF instances in the Chinese mainland
    
    -   Pay-as-you-go instances
        
        -   Project: wafnew-project-Alibaba Cloud account ID-cn-hangzhou, located in China (Hangzhou).
            
        -   Logstore: wafnew-logstore
            
    -   Subscription instances
        
        -   Project: wafng-project-Alibaba Cloud account ID-cn-hangzhou, located in China (Hangzhou).
            
        -   Logstore: wafnew-logstore
            
-   WAF instances outside the Chinese mainland
    
    -   Pay-as-you-go instances
        
        -   Project: wafnew-project-_Alibaba Cloud account ID_\-ap-southeast-1, located in Singapore.
            
        -   Logstore: wafnew-logstore
            
    -   Subscription instances
        
        -   Project: wafng-project-_Alibaba Cloud account ID_\-ap-southeast-1, located in Singapore.
            
        -   Logstore: wafnew-logstore
            

[WAF 3.0 log fields](/help/en/waf/web-application-firewall-3-0/user-guide/fields-in-logs)

The system automatically creates a Project named `wafnew-project-1290********9680-cn-hangzhou` and a Logstore named `wafnew-logstore` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, the region is China (Hangzhou), and the Project name starts with wafnew-project, indicating that it is a pay-as-you-go WAF instance in the Chinese mainland.

Cloud Firewall

[Enable Traffic Logs of Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/enable-the-log-analysis-feature)

-   Project: cloudfirewallnew-project-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore: cloudfirewallnew-logstore
    

[Log fields of Cloud Firewall](/help/en/cloud-firewall/cloudfirewall/user-guide/log-fields#24fe34d7f67jj)

The system automatically creates a project named `cloudfirewallnew-project-1290********9680-cn-hangzhou` and a Logstore named `cloudfirewallnew-logstore` in this project. The value `1290********9680` is your Alibaba Cloud account ID, and the region is China (Hangzhou).

ActionTrail

-   [Enable operation event logs for ActionTrail](/help/en/actiontrail/user-guide/create-a-single-account-trail)
    
-   [Disable operation event logs for ActionTrail](/help/en/actiontrail/user-guide/delete-a-single-account-trail)
    

-   Project: custom project
    
-   Logstore: actiontrail\__Trail name_
    

[ActionTrail event log fields](/help/en/actiontrail/user-guide/management-event-structure)

Select a custom Project and Logstore for storage.

When creating a [trail](/help/en/actiontrail/user-guide/trail-overview), select a custom Project, and the system creates a Logstore named `actiontrail_test001` in this Project, where `test001` represents the name of the trail you created.

[Enable Alibaba Cloud-initiated events for ActionTrail](/help/en/sls/enable-the-inner-actiontrail-feature#section-fxk-drj-6dz)

Custom

[Alibaba Cloud-initiated events fields](/help/en/sls/fields-in-alibaba-cloud-initiated-events)

Select a custom Project and Logstore for storage.

Cloud Config

[Enable audit logs for Cloud Config](/help/en/cloud-config/latest/deliver-resource-related-logs-to-a-log-service-logstore#b022360021699)

Custom

[Cloud Config log fields](/help/en/sls/configure-audit-log-details)

Select a custom Project and Logstore for storage.

### **Networking**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Classic Load Balancer (CLB) Layer 7

[Enable/Disable access logs for CLB](/help/en/slb/classic-load-balancer/user-guide/clb-access-logs)

Custom

[CLB access log fields](/help/en/slb/classic-load-balancer/user-guide/clb-access-logs#section-ask-6fo-491)

Select a custom Project and Logstore for storage.

Virtual Private Cloud (VPC)

[Enable/Disable flow logs for VPC](/help/en/vpc/vpc-flow-logs#c6d7745f356s4)

Custom

[VPC flow log fields](/help/en/vpc/user-guide/flow-log-fields/)

Select a custom Project and Logstore for storage.

Cloud Enterprise Network (CEN)

[Enable/Disable flow logs for CEN](/help/en/cen/user-guide/configure-a-flow-log)

Custom

[CEN flow log fields](/help/en/cen/user-guide/configure-a-flow-log#p-k8y-uxo-ro7)

Select a custom Project and Logstore for storage.

Smart Access Gateway (SAG)

-   [Enable flow logs for SAG](/help/en/sag/user-guide/create-a-flow-log#h2-url-2)
    
-   [Stop](/help/en/sag/user-guide/disable-a-flow-log), [Disable flow logs for SAG](/help/en/sag/user-guide/delete-a-flow-log)
    

Custom

[SAG flow log fields](/help/en/sag/user-guide/flow-log-overview#section-c8f-ehi-o87)

Select a custom Project and Logstore for storage.

Elastic IP Address (EIP)

[Enable/Disable high-precision monitoring that is accurate to seconds for EIP](/help/en/eip/configure-fine-grained-monitoring)

Custom

\-

Select a custom Project and Logstore for storage.

API Gateway

[Enable gateway logs for API Gateway](/help/en/api-gateway/cloud-native-api-gateway/user-guide/enable-gateway-log-delivery)

-   Project: aliyun-product-data-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore:
    
    -   apig-access-log
        
    -   apig-plugin-log
        

[API Gateway log fields](/help/en/api-gateway/cloud-native-api-gateway/user-guide/enable-gateway-log-delivery#ff9df5c738tw7)

The system automatically creates a Project named `aliyun-product-data-<code data-init-id="9c7d0fbf40hrc" data-tag="code" id="061ddd61cfrkk">1290********9680`\-cn-hangzhou and Logstores named `apig-access-log` and `apig-plugin-log` in this Project to store access logs and plugin logs respectively. Here, `1290********9680` is your Alibaba Cloud account ID, and the region ID `cn-hangzhou` indicates that the region is China (Hangzhou).

Dynamic Content Delivery Network (DCDN)

[Enable/Disable real-time logs for DCDN](/help/en/edge-security-acceleration/dcdn/user-guide/real-time-log-delivery-1)

-   Project:
    
    -   Chinese Mainland: dcdn-edge-rtlog-_cn_\-_Random ID_
        
    -   Outside Chinese Mainland: dcdn-edge-rtlog-_sg_\-_Random ID_
        
-   Logstore: dcdn-edge-rtlog
    

\-

The system automatically creates a Project named `dcdn-edge-rtlog-cn-02****c4` and a Logstore named `dcdn-edge-rtlog` in this Project. Here, `02****c4` is a random number, and the region `cn` indicates that the collection area is the Chinese Mainland.

Global Accelerator (GA)

[Enable/Disable access logs for GA](/help/en/ga/user-guide/using-access-logs)

Custom

[GA log fields](/help/en/ga/user-guide/using-access-logs#dca6ec47e9zxm)

Select a custom Project and Logstore for storage.

### **Databases**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

ApsaraDB RDS

[Enable audit logs for ApsaraDB RDS](/help/en/rds/apsaradb-rds-for-mysql/collect-the-audit-logs-of-an-apsaradb-rds-for-mysql-instance-by-using-log-service)

Custom

[ApsaraDB RDS audit log fields](/help/en/sls/apsaradb-rds#concept-2078455)

Select a custom Project and Logstore for storage.

Tair (Redis OSS-compatible)

[Enable audit logs for Tair](/help/en/redis/user-guide/enable-the-new-audit-log-feature/#section-bz2-33j-xzk)

-   Project: nosql-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore:
    
    -   redis\_audit\_log\_standard
        
    -   redis\_slow\_run\_log
        

\-

The system automatically creates a Project named `nosql-1290********9680-cn-hangzhou` and Logstores named `redis_audit_log_standard` and `redis_slow_run_log` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, and the region ID `cn-hangzhou` indicates that the region is China (Hangzhou).

ApsaraDB for MongoDB

-   [Enable audit logs for MongoDB](/help/en/mongodb/user-guide/enable-the-audit-log-feature-1#section-35l-m8o-7af)
    
-   [Disable audit logs for MongoDB](/help/en/mongodb/user-guide/disable-the-audit-log-feature-1)
    

-   Project: nosql-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore:
    
    -   mongo\_audit\_log\_standard
        
    -   mongo\_slow\_run\_log
        

\-

The system automatically creates a Project named `nosql-1290********9680-cn-hangzhou` and Logstores named `mongo_audit_log_standard` and `mongo_slow_run_log` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, and the region ID `cn-hangzhou` indicates that the region is China (Hangzhou).

### Analytics Computing

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Data Management (DMS)

[Enable operation logs for DMS](/help/en/dms/use-cases/query-and-analyze-operation-logs-of-dms-in-log-service#0de4d980fdlxl)

Custom

[DMS operation log fields](/help/en/dms/use-cases/query-and-analyze-operation-logs-of-dms-in-log-service#e940449987vpe)

Select a custom Project and Logstore for storage.

E-MapReduce (EMR)

[Enable/Disable operation logs for E-MapReduce (EMR)](/help/en/emr/emr-on-ecs/user-guide/manage-logs)

-   Project: custom
    
-   Logstore: emr\__EMR service name_\_log
    

\-

Select a custom Project and Logstore for storage.

### **Cloud Communication**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Short Message Service (SMS)

[Enable/Disable SMS logs for Short Message Service](/help/en/sms/user-guide/enable-log-analysis)

-   Project: sms-log-_Alibaba Cloud account ID_
    
-   Logstore: sms-log
    

[Short Message Service log fields](/help/en/sms/user-guide/log-fields)

The system automatically creates a Project named `sms-log-1290********9680` and a Logstore named `sms-log` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID.

### **Internet of Things**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

IoT Platform

[Enable/Disable operational logs for IoT](/help/en/iot/user-guide/dump-iot-platform-logs#section-7qq-e3r-70r)

-   Project: iot-log-_Alibaba Cloud account ID_\-_Region ID_
    
-   Logstore: iot\_logs
    

[IoT operational log fields](/help/en/iot/user-guide/log-dump-format-description#c95c8db01cxwm)

The system automatically creates a Project named `iot-log-1290********9680-cn-hangzhou` and a Logstore named `iot_logs` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, and the region ID `cn-hangzhou` indicates that the region is China (Hangzhou).

### **Middleware**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Microservices Engine (MSE)

[Enable gateway logs for MSE](/help/en/mse/user-guide/enable-log-shipping-for-a-cloud-native-gateway)

-   Project:
    
    -   Custom
        
    -   aliyun-product-data-_Alibaba Cloud account ID_\-_Region ID_
        
-   Logstore: mse\_gw\_access\_log
    

[MSE gateway log delivery fields](/help/en/mse/user-guide/enable-log-shipping-for-a-cloud-native-gateway#postreq-vjy-iux-k99)

The system automatically creates a Project named `aliyun-product-data-1290********9680-cn-hangzhou` and a Logstore named `mse_gw_access_log` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, and the region ID `cn-hangzhou` indicates that the region is China (Hangzhou).

Enterprise Distributed Application Service (EDAS)

[Enable business logs for EDAS](/help/en/edas/user-guide/configure-log-collection#section-llz-vuu-les)

Custom

\-

Select a custom Project and Logstore for storage.

Service Mesh (ASM)

[Enable control plane logs for Service Mesh](/help/en/asm/sidecar/use-log-center#5709cb4e0baxg)

-   Project:
    
    -   Custom
        
    -   mesh-log-_ASM instance ID_
        
-   Logstore
    
    -   istio-_ASM instance ID_
        
    -   audit-_ASM instance ID_
        

\-

The system automatically creates a Project named `mesh-log-cbc49***********************5449b` and Logstores named `audit-cbc49***********************5449b` and `istio-cbc49***********************5449b` in this Project. Here, `cbc49***********************5449b` is the ASM instance ID.

### **Observability**

**Cloud service**

**Enable/Disable**

**Default Project and Logstore**

**Log fields**

**Note**

Managed Service for Prometheus

[Enable usage logs for Managed Service for Prometheus](/help/en/prometheus/product-overview/billing-and-usage-query)

-   Project: workspace-default-cms-_Alibaba Cloud account ID_\-_Region ID_
    
-   MetricStore:
    
    -   Container cluster: aliyun-prom-_Cluster ID_
        
    -   Others: aliyun-prom-_Prometheus instance ID_
        

[Prometheus usage metrics](/help/en/prometheus/product-overview/billing-and-usage-query#23a8059485h46)

The system automatically creates a Project named workspace-default-cms-1290\*\*\*\*\*\*\*\*9680-cn-hangzhou and a MetricStore named `aliyun-prom-c4cb*************************d9a9` in this Project. Here, `1290********9680` is your Alibaba Cloud account ID, `aliyun-prom-c4cb*************************d9a9` is the created Prometheus instance ID, and the region ID `cn-hangzhou` indicates that the region is China (Hangzhou).
