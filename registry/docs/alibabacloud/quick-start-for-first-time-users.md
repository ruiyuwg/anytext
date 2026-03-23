When you use Container Service for Kubernetes (ACK) for the first time, you need to assign system role permissions to your Alibaba Cloud account to create clusters, save logs, and access cloud services such as ECS, OSS, NAS, and SLB. This topic guides you through authorization, free activation of related cloud products, and quickly creating an ACK managed cluster.

## **1\. Activate Container Service and authorize roles**

You must activate ACK before you can create an ACK cluster. If ACK is not activated, you cannot create ACK clusters. We recommend that you activate Container Service and authorize Default Roles for Container Service by following these steps.

1.  Activate Container Service For Kubernetes
    
    When you activate ACK for the first time, log on to the [ACK activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=csk_propayasgo_public_intl),read and select **Terms Of Service,**and click **Activate Now**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8555416371/p876324.png)
    
2.  Role Authorization
    
    When you log on to ACK for the first time, you need to authorize your Alibaba Cloud account to create default roles for Container Service to ensure the security of your ACK cluster cloud resources. This default role authorization ensures that ACK can properly call related cloud service resources to implement cluster creation, management, and maintenance functions. Perform the following steps to assign roles to ACK:
    
    Log on to [ACK console](https://cs.console.alibabacloud.com), then click **Go To RAM console** to enter the [Resource Access Management Quick Authorization](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedLogRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedLogRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCmsRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCmsRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiProvisionerRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiProvisionerRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiPluginRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiPluginRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSServerlessKubernetesRole%22%2C%22TemplateId%22%3A%22ServerlessKubernetes%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSKubernetesAuditRole%22%2C%22TemplateId%22%3A%22KubernetesAudit%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedNetworkRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedNetworkRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSDefaultRole%22%2C%22TemplateId%22%3A%22Default%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedKubernetesRole%22%2C%22TemplateId%22%3A%22ManagedKubernetes%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedArmsRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedArmsRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCISDefaultRole%22%2C%22TemplateId%22%3A%22AliyunCISDefaultRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) page, and click **Authorize**.After the authorization is complete, refresh the Console to use it.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9392445471/p876333.png)
    
    For more information about the resource operation permissions of service roles, see [ACK service roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-default-roles#task-1614779).
    

## **2\. Activate cluster-related cloud products**

To quickly experience creating, using, and managing ACK clusters, you can use your Alibaba Cloud account to click the **Activation Links** to activate cloud resource services as needed. Only Alibaba Cloud accounts can activate cloud products. Resource Access Management (RAM) users are not supported for activating cloud products. If you want to authorize RAM users to manage activated cloud products, see [Authorization management FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-authorization-management) for detailed operations.

-   The following cloud services must be activated for ACK clusters to function properly.
    
    **Expand to view related products.**
    
    **Product name**
    
    **Activation link**
    
    **Product description**
    
    Virtual Private Cloud (VPC)
    
    [VPC](https://www.alibabacloud.com/product/vpc)
    
    This service is used to build networks and create routing rules for clusters.
    
    Server Load Balancer (SLB)
    
    [SLB](https://www.alibabacloud.com/product/server-load-balancer)
    
    This service enables load balancing for ACK clusters to forward network traffic to backend servers to increase the throughput of your application. You can use SLB to prevent service interruptions that are caused by single points of failure (SPOFs) and improve service availability.
    
    Auto Scaling
    
    [Auto Scaling](https://www.alibabacloud.com/product/auto-scaling)
    
    This service allows ACK to automatically create worker nodes and enables ACK clusters to automatically scale in or out.
    
-   Recommended: the cloud services that we recommend you activate. You can choose to use these services when you create ACK clusters and manage applications.
    
    **Expand to view related products.**
    
    **Product name**
    
    **Activation link**
    
    **Product description**
    
    NAT Gateway
    
    [NAT Gateway](https://www.alibabacloud.com/product/nat)
    
    This service enables Internet access for clusters and allows clusters to pull images over the Internet.
    
    Apsara File Storage NAS
    
    [File Storage NAS](https://www.alibabacloud.com/product/nas)
    
    This service provides a persistent file storage solution for application data in your cluster. NAS provides the following benefits for your data: shared access, elastic storage, high reliability, and high performance.
    
    Simple Log Service
    
    [Simple Log Service](https://www.alibabacloud.com/product/log-service)
    
    This service allows you to collect and query the log data of ACK components and applications.
    
    Managed Service for Prometheus
    
    [Managed Service for Prometheus](https://www.alibabacloud.com/en/product/prometheus?_p_lc=1&spm=a2796.139174.6791778070.4.5b011d36aRactn)
    
    This service allows you to monitor ACK clusters and generate alerts when exceptions are detected.
    
    Container Registry
    
    [Container Registry](https://www.alibabacloud.com/product/container-registry)
    
    This service provides secure and full lifecycle management for images.
    
    Elastic Container Instance
    
    [Elastic Container Instance](https://www.alibabacloud.com/products/elastic-container-instance)
    
    This service allows you to run serverless elastic container instances on virtual nodes.
    
    Service Mesh ASM
    
    [Service Mesh](https://www.alibabacloud.com/en/product/servicemesh?_p_lc=1&spm=a3c0i.29367734.6737026690.1.540c7d3fUOyWMW)
    
    Based on Service Mesh to implement unified traffic management for applications across multiple ACK clusters.
    
    Cloud Monitor
    
    [CloudMonitor](https://www.alibabacloud.com/product/cloud-monitor)
    
    This service allows you to monitor the status of nodes and applications in ACK clusters.
    
-   Optional: the services that you can activate based on the architecture and O&M strategy.
    
    **Expand to view related products.**
    
    **Product name**
    
    **Activation link**
    
    **Product description**
    
    Security Center
    
    [Security Center](https://www.alibabacloud.com/product/security-center)
    
    This service allows you to monitor the security events of application runtimes in ACK clusters and generate alerts when exceptions are detected.
    
    Object Storage Service (OSS)
    
    [OSS](https://www.alibabacloud.com/product/oss)
    
    This service allows you to store application data in OSS buckets in a secure and cost-effective manner.
    
    Key Management Service (KMS)
    
    [KMS](https://www.alibabacloud.com/product/kms)
    
    This service allows you to manage application Secrets and encrypt Secrets for ACK Pro clusters.
    
    Alibaba Cloud DNS PrivateZone
    
    [Alibaba Cloud DNS PrivateZone](https://www.alibabacloud.com/products/private-zone)
    
    A private DNS service based on Alibaba Cloud Virtual Private Cloud (VPC) environment. You can use Alibaba Cloud DNS PrivateZone to resolve private domain names to IP addresses in one or more custom VPCs. Alibaba Cloud DNS PrivateZone aims to provide a stable, secure, and efficient resolution service for internal domain names. Alibaba Cloud DNS PrivateZone is suitable for both simple and complex network architectures.
    
    Cloud BackupCloud Backup
    
    [Cloud Backup](https://www.alibabacloud.com/product/hybrid-backup-recovery)
    
    This service provides data backup, disaster recovery, and policy-based archive management.
    

## 3\. Create a cluster

When you create an ACK managed cluster, you can choose to enable the intelligent managed mode. After enabling this mode, you only need to make simple planning configurations to create an ACK cluster that follows best practices with one click. This cluster will create a default intelligent managed node pool where the lifecycle of nodes will be managed and maintained by ACK. For more information, see [Create an ACK managed cluster (intelligent managed mode)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode).

**Note**

If you need to make detailed custom configurations for your cluster, see the complete process in [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).

1.  Log on to [Container Service Management Console](https://cs.console.alibabacloud.com). On the **Clusters** page, click **Create Kubernetes Cluster**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8555416371/p892742.png)
    
2.  At the top, select the **ACK Managed Cluster** tab, click to enable **Auto Mode**. If you need to access the cluster over the Internet, select **Expose API server with EIP** for your personal test cluster to enable this feature, which will make it easier for you to connect to and manage the cluster later. Then click **Confirm**, check the selected configurations, and click **Create Cluster**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9566830571/p963840.png)
