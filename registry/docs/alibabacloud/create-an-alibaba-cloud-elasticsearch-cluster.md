Alibaba Cloud Elasticsearch (ES) is ideal for building complex query engines or for retrieving and analyzing very large datasets. This topic describes how to create an ES instance in the console.

## **Billing**

For information about the product pricing and billable items of Alibaba Cloud ES, see [Billing rules](/help/en/es/product-overview/elasticsearch-billable-items).

## Procedure

**Note**

This topic describes how to create an ES instance in the **Alibaba Cloud Elasticsearch** console. To create an ES instance by calling an API, see [createInstance](/help/en/es/developer-reference/api-createinstance#doc-api-elasticsearch-createInstance).

1.  Log on to the [Alibaba Cloud Elasticsearch console](https://elasticsearch.console.alibabacloud.com/#/home).
    
2.  In the left navigation menu, choose **Elasticsearch Clusters**.
    
3.  On the **Elasticsearch Clusters** page, click **Create** in the upper-left corner.
    
    **Parameter**
    
    **Description**
    
    **Product type**
    
    -   **Subscription**: Recommended for long-term use of ES instances. You pay an upfront fee, which is more cost-effective than pay-as-you-go.
        
    -   **Pay-as-you-go**: Suitable for short-term scenarios, such as application development or functional testing. You are billed on an hourly basis. You can release the instance at any time to stop billing. You can create a pay-as-you-go instance and then convert it to a subscription instance after you confirm that the instance meets your requirements.
        
    
    **Region and zone**
    
    Select a region as needed. The region cannot be changed after the instance is created.
    
    -   The closer the region where resources are deployed is to your users, the lower the network latency and the faster the access speed.
        
    -   If the ES instance needs to connect to other Alibaba Cloud services over an internal network, deploy the ES instance and the services in the same region.
        
    
    **Number of zones**
    
    -   **Single zone**: a common deployment mode that is suitable for non-critical workloads.
        
    -   **Two zones**: a cross-zone disaster recovery deployment mode that is suitable for production workloads.
        
    -   **Three zones** (Default): a high-availability deployment mode that is suitable for production workloads with higher availability requirements.
        
        **Note**
        
        When you deploy an instance across multiple zones, you do not need to manually select the zones. The system automatically configures the required number of zones. For more information, see [Deploy and use a multi-zone instance](/help/en/es/user-guide/deploy-and-use-a-multi-zone-elasticsearch-cluster#task-2020936).
        
    
    **Network type**
    
    Only **VPC** is supported.
    
    **VPC**
    
    Select a VPC in the specified region.
    
    -   If the ES instance needs to connect to other Alibaba Cloud services over an internal network, we recommend that you deploy the ES instance and the services in the same VPC.
        
    -   If no VPCs meet your business requirements, create one. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/getting-started/create-vpc-with-ipv4#10b280c0205os).
        
    
    **vSwitch**
    
    The vSwitches that are in the same zone as the ES instance within the specified VPC are displayed.  
    If no vSwitches meet your business requirements, create one. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/getting-started/create-vpc-with-ipv4#10b280c0205os).  
      
    
    **Instance type**
    
    -   **Vector Enhanced Edition**: Improves vector query performance by 5 times, saves 75% of memory costs through data quantization, and has a built-in AI model service to support AI search.
        
    -   **Kernel-enhanced Edition**: Provides a deeply optimized AliES kernel engine based on the open source version and offers more than 10 enhanced features.
        
    -   **Standard Edition**: Is 100% compatible with open source Elasticsearch and provides all X-Pack advanced features for free.
        
    
    For more information, see [Features](/help/en/es/product-overview/overview-6#concept-1964413) and [Features of AliES Kernel-enhanced Edition](/help/en/es/product-overview/alibaba-cloud-elasticsearch-clusters-of-the-advanced-edition).
    
    **Elasticsearch version**
    
    -   **Vector Enhanced Edition**: supports versions 8.17 and 8.15.
        
    -   **Kernel-enhanced Edition**: supports versions 7.10.0, 7.16.2, and 6.7.0.
        
    -   **Standard Edition**: supports versions 8.13.4, 8.9.1, 8.5.1, 7.7.1, 6.8.23, and 5.6.16.
        
    
    For more information, see [Feature comparison among versions](/help/en/es/product-overview/overview-6#section-1qj-3qj-w62) and [Release Notes](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/es-release-notes.html).
    
    **Note**
    
    The supported regions and zones may vary based on the instance version. The options on the purchase page prevail.
    
    Node configuration
    
    Click each node section and configure the nodes as needed.
    
    -   For information about how to select node specifications, see [Capacity assessment](/help/en/es/user-guide/evaluate-specifications-and-storage-capacity).
        
    -   For a detailed description of node configurations, see [ES Instance Node Configuration Description](/help/en/es/user-guide/purchase-page-parameters#9b2be07082ejl).
        
    -   In the lower-right corner of the section, click **Reset to Default** to restore the modified node configurations to the default configurations.
        
    
    **Resource group**
    
    You can use resource groups to group and manage ES instances. For more information, see [Resource groups and authorization](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups#task-d2j-wdk-xdb).
    
    **Instance name**
    
    If you leave this parameter empty, the system automatically generates an instance name. After the instance is created, you can change the instance name on the Basic Information page.
    
    **Username**
    
    The default username is `elastic` and cannot be changed. This account has the permissions of a super administrator (Superuser) on the cluster and can be used to access the ES instance and log on to the Kibana console.
    
    **Important**
    
    A password change for the `elastic` account takes effect immediately. This interrupts all existing connections that use this account due to authentication failure. If the password is hard-coded in your business application, service unavailability may occur.
    
    For security purposes and to follow the principle of least privilege, do not use the `elastic` account in the code or applications of your production services. We recommend that you create roles and regular users with specific permissions in the Kibana console for your services. For more information, see [Use the role-based access control (RBAC) mechanism of Elasticsearch X-Pack to control user permissions](/help/en/es/user-guide/use-the-rbac-mechanism-provided-by-elasticsearch-x-pack-to-implement-access-control#task-2008398).
    
    **Password**
    
    The password of the `elastic` account. This parameter is required.
    
    **Subscription duration**
    
    If you set Product type to Subscription, you must specify a subscription duration.  
    We recommend that you enable **Auto-renewal** to prevent service interruptions that are caused by instance expiration.  
      
    
    -   If you purchase the instance on a monthly basis, the auto-renewal cycle is one month.
        
    -   If you purchase the instance on a yearly basis, the auto-renewal cycle is one year.
        
    

4.  Click **Buy Now**. On the **Confirm Order** page, confirm the instance configuration and click **Activate Now**.
    
5.  On the **Elasticsearch Clusters** page, select the region where the instance was created from the top menu bar. Then, locate the created ES instance in the instance list.
    
    Instance creation takes some time, and the duration varies based on factors such as cluster specifications, data structure, and data volume. You can view the instance status in the **Status** column of the instance list.
    

## What to do next

-   To view the basic information about the instance, such as the private endpoint, running status, and node information, see [View the cluster status and node information](/help/en/es/user-guide/view-the-cluster-status-and-node-information).
    
-   For information about how to access an ES instance, see [Connect to a cluster](/help/en/es/user-guide/connecting-a-cluster/).
    
-   To migrate data from other products or ingest data into ES, see [Best practices overview](/help/en/es/use-cases/overview-of-best-practices).
    
-   If your application requires a username and password to access the ES instance, we recommend that you create roles and users with the required permissions in the Kibana console. For more information, see [Use the role-based access control (RBAC) mechanism of Elasticsearch X-Pack to control user permissions](/help/en/es/user-guide/use-the-rbac-mechanism-provided-by-elasticsearch-x-pack-to-implement-access-control#task-2008398).
    
-   You can modify the scenario-specific configuration template to optimize cluster and index configurations. This helps prevent cluster exceptions and performance issues that are caused by improper configurations. For more information, see [Modify a scenario-specific configuration template](/help/en/es/user-guide/use-a-scenario-based-template-to-modify-the-configurations-of-a-cluster).
    
-   If you purchased cold data nodes, you can use index lifecycle management (ILM) to automatically manage and separate hot and cold data. For more information, see [Use ILM to manage Heartbeat data](/help/en/es/user-guide/use-ilm-to-manage-heartbeat-indexes).
    
-   After an instance is created, you can adjust its configurations, such as node specifications and storage capacity, by upgrading or downgrading the cluster. For more information, see [Upgrade a cluster](/help/en/es/user-guide/upgrade-the-configuration-of-a-cluster) and [Downgrade a cluster](/help/en/es/user-guide/downgrade-the-configuration-of-a-cluster).
    

## FAQ

-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-pqi-rb3-djh)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-8k3-wpr-32f)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-ecn-32x-4n1)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-3ua-8iw-s0v)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-3el-7d8-y1n)
    
-   [Can I purchase a single-node ES instance?](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#buyc)
    
-   [What do I do if resources are sold out when I purchase an instance?](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#buyd)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-p74-mty-9d9)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-uv3-n6g-fqv)
    
-   [Alibaba Cloud Elasticsearch instance FAQ](/help/en/es/support/faq-about-alibaba-cloud-elasticsearch-clusters#section-gq9-v84-qxh)
