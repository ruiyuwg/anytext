The Model Service feature in DataWorks provides a streamlined way to deploy large language models (LLMs). With a simple, guided interface, you can deploy pre-trained models. This document explains how to deploy a model service by using a Serverless resource group in DataWorks.

## **Billing**

The following fees apply:

**Fee type**

**Description**

**DataWorks fees**

A model service consumes resources from a Serverless resource group while running. If you use a pay-as-you-go resource group to deploy the service, you are charged per CU-hour. For more information, see [Billing of Serverless resource groups](/help/en/dataworks/new-resource-group-overview#f11c3c5809ahy).

**Non-DataWorks fees**

-   PrivateLink: Charges include instance fees and data transfer fees. For more information, see [Billing of PrivateLink](/help/en/privatelink/private-link-billing-description).
    
-   Private Hosted Zone: Charges apply for using this service. For more information, see [Billing of Private Hosted Zone](/help/en/dns/product-billing).
    

## **Usage**

DataWorks deploys your model service in a fully managed mode within a DataWorks resource group. To enable secure private network access to the model service, the system prompts you to enable related services and automatically configures [PrivateLink](/help/en/privatelink/what-is-a-private-network-connection) and [Private Hosted Zone](/help/en/dns/pvtz-what-is-intranet-domain-name-resolution) for you.

-   PrivateLink enables cross-VPC access, allowing you to access the fully managed model service from a Virtual Private Cloud (VPC) in your Alibaba Cloud account. The VPC must be able to communicate with the DataWorks resource group.
    
-   Private Hosted Zone provides custom domain name resolution within your account, allowing you to access a DataWorks model service from your VPC by using its domain name.
    

When you call the model service by using its domain name, traffic flows from your VPC through the established PrivateLink connection to the DataWorks resource group's VPC, and finally reaches the model instance within that VPC. You can view the details of these services in the [PrivateLink console](https://vpc.console.alibabacloud.com/endpointservice/eu-central-1/endpointservices) and the [Alibaba Cloud DNS console](https://dnsnext.console.alibabacloud.com/privateDNS).

## **Prerequisites**

-   The [PrivateLink](/help/en/privatelink/what-is-a-private-network-connection) service is enabled.
    
    > Model services are fully managed in the DataWorks platform account. To access the service from your VPC, you can use PrivateLink to establish secure, cross-VPC access.
    
-   The [Private Hosted Zone](/help/en/dns/pvtz-opening-service) service is enabled.
    
    > Private Hosted Zone provides custom domain name resolution within your VPCs. This service allows you to directly access the model service domain and forwards request traffic to the DataWorks model service.
    
-   A [DataWorks workspace](/help/en/dataworks/user-guide/create-a-workspace) is created and associated with a [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    

**Important**

Ensure that the region where you enable these services matches your DataWorks workspace region. Otherwise, the model service may not function correctly.

## **Limitations**

-   Model Service is available only in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), US (Silicon Valley), and US (Virginia).
    
-   Only model deployment is supported. Model training is not supported.
    
-   Each Alibaba Cloud account can deploy up to **50** model services per region**.**
    
-   This feature supports only Serverless resource groups. Each resource group can deploy up to **5** model services.
    
-   Each model service can be associated with up to **3** VPCs.
    

## **Model Service page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, switch to the target region.
    
2.  In the left-side navigation pane, click **Model Service** to go to the **Model Service** page.
    

## **Deploy a service**

On the **Model Service** page, click **Deploy Model** to open the **Model List** page. Select the model you want to deploy, and then click **Deploy** to open the **Model Deployment** configuration page.

### **Basic information**

-   **Model**: Confirm the type of model you are deploying to the DataWorks resource group. For more information, see [Supported models](/help/en/dataworks/user-guide/llm-service-management/#fa082ca8733fw).
    
-   **Service Name**: Enter a custom name for the model service. This name is used to identify the deployed model service in DataWorks.
    

### **Resource information**

Configure the model's deployment environment.

**Parameter**

**Description**

Resource Group

The Serverless resource group where the model service will be deployed.

> After deployment, log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview), switch to the target region, and click **Resource Group** in the left-side navigation pane. On the resource group list page, click the target **Resource Group Name** and go to the resource group **Details** page to view the [Serverless resource group usage](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups#c07f9e52e40yt) for the model service.

vSwitch

The vSwitch for the model service deployment.

> Follow the on-screen prompts to select a vSwitch that is associated with the Serverless resource group in the appropriate availability zone.

Deployment Specification

The resource specification for each service instance.

Number of Instances

The number of instances to deploy for the model service. Deploying multiple instances improves the service's high availability.

Total Occupancy

The total CUs required for the model service, calculated as **Deployment Specification** × **Number of Instances**.

> Ensure that the resource group has sufficient available CUs for the deployment. You can go to the resource group quota management page to adjust the CU limit allocated to the model service. For more information, see [Allocate CU quotas to tasks](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups#d0490a0481khs).

-   For subscription resource groups, you can [scale up the resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups#879e6c2364rib).
    
-   For a pay-as-you-go resource group, the default limit is `500` CUs. After you deploy a model, the platform automatically increases the maximum limit to `2,000` CUs.
    

After you complete the configuration, click **Deploy**.

**Important**

The platform automatically creates the required PrivateLink, Private Hosted Zone, and Security Group resources when creating the model service. Do not manually delete or edit these resources. The platform automatically removes them when the model service is released.

After the deployment is complete, the system performs the following actions in your account:

-   The system creates a PrivateLink endpoint in the default VPC that is associated with the DataWorks resource group and establishes an encrypted communication channel with the PrivateLink service in the DataWorks resource group's VPC.
    
-   The system adds a resolution record to the Private Hosted Zone service in your account to associate the private domain name with the VPC environment of the DataWorks resource group.
    

## **Manage services**

After a model service is created, you can manage its state, view service information, manage network settings and API keys, and adjust resources as needed from the **Model Service** list.

### **Manage service state**

A model service starts by default after it is created. You can manage its state in the **Actions** column of the **Model Service** list.

**Action**

**Resulting state**

**Resource consumption**

Start

Running

Consumes resources from the Serverless resource group.

Stop

Stopped

Does not consume resources from the Serverless resource group.

Delete

\--

Permanently releases all associated resources from the Serverless resource group.

### **Service details**

The **Overview** tab displays the configuration information for the current model service, and on the **Overview** tab, you can manage the service's **Basic Information**, **Resource Configuration**, and **Invocation Information**.

1.  In the **Model Service** list, find the target model service and click its **Service Name** to go to the **Overview** tab.
    
2.  View the basic, resource, and invocation information for the model service.
    
    -   **Basic Information**: Includes the model **Service Name**, **Service ID**, and **Model** type.
        
    -   **Resource Allocation**: View information such as the **Deployment Specification** and **Number of Instances**.
        
    -   **Invocation Information**: To [use the model](/help/en/dataworks/user-guide/use-models) in a node task, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7096850671/p1001367.png) icon next to **VPC Address Invocation Domain Name** to copy the domain name.
        

### **Modify resources**

You can modify an existing model service's name, adjust the resource specification, and change the number of deployed instances.

1.  In the **Model Service** list, find the target model service and click its **Service Name** to go to the **Overview** tab.
    
2.  In the **Resource Allocation** section, click **Modification** to go to the **Modify Resources** page and configure the settings.
    
    **Important**
    
    Modifying resources causes the service to restart, which will interrupt service availability.
    

### **Network settings**

The **Network Configuration** tab displays the VPC environments that can currently access the model service over an internal network. On the **Network Configuration** tab, you can add or manage the virtual private clouds (VPCs) that are used to access the Model Service.

1.  In the **Model Service** list, find the target model service and click its **Service Name** to go to the **Overview** tab.
    
2.  Switch to the **Network Configuration** tab to view the VPCs that can currently access the model service over a private network.
    
3.  To expand the access scope, click **Add Network** to allow more VPCs to access the model service deployed in DataWorks.
    
    > When you add a network, you must specify a VPC and a vSwitch. You can access the model service through the VPC after its **status** changes to **Available**.
    
    **Note**
    
    -   **Billing:** After you add a VPC for the model service, the system creates a PrivateLink endpoint in the selected VPC to establish a network connection with the DataWorks resource group. A resolution record is also added to Private Hosted Zone. This process incurs instance fees, data transfer fees, and domain name resolution fees. For more information, see [Billing of PrivateLink](/help/en/privatelink/private-link-billing-description) and [Billing of Private Hosted Zone](/help/en/dns/product-billing).
        
    -   **Limit:** You can add a maximum of three VPCs for each model service.
        
    
4.  If you no longer want a VPC to access the model service, click **Delete** for the target VPC environment.
    
    > When you delete the VPC from the model service, the PrivateLink endpoint created in that VPC is also removed.
    

### **API keys**

An API Key is an authentication credential that the model service provides to callers to verify their identity and permissions. You can manage all API Keys for the current model service on the **API Key** tab.

1.  In the **Model Service** list, find the target model service and click its **Service Name** to go to the **Overview** tab.
    
2.  Switch to the **API Key** tab to create, manage, and use API Keys:
    
    -   **Add API Key**: After the model service is deployed, the platform includes a built-in API Key for calls from other DataWorks modules. To call the model service from other environments by using the service `Endpoint`, click **Add New API Key** to create a new API Key.
        
        > We recommend that you create separate API Keys for different applications.
        
    -   **View API Key**: In the **Actions** column for the target API Key, click **View**, and then click **Copy** to obtain the API Key.
        
    -   **Delete API Key**: You can **Disable** or **Delete** a DataWorks API Key.
        
        **Important**
        
        Before you **disable** or **delete** an active API Key, assess the potential impact. Once an API Key is **disabled** or **deleted**, all tasks that use that key to call the service will fail.
        
        > The **Disable** or **Delete** operation takes about `5` minutes to take effect.
        

## **Next steps**

After the model is deployed, you can [use the model service](/help/en/dataworks/user-guide/use-models) in your tasks.

## **Invocation**

The following diagram and descriptions explain how the model service invocation works:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3198424771/CAEQThiBgMCu3rufzxkiIDQzYTFjNjBiN2MxMjQ0NzA4NDVlZmQ5OTkwZDIzM2Fm5610131_20250821102216.700.svg)

When you deploy a model service in a DataWorks resource group or configure a VPC for it, the system automatically performs the following actions:

1.  The system establishes a cross-VPC connection by creating a PrivateLink endpoint in your VPC, which establishes an encrypted communication channel with the PrivateLink service in the DataWorks resource group VPC.
    
    > This action automatically creates a PrivateLink endpoint in your account. Your account must have the PrivateLink service enabled.
    
2.  The system configures domain name resolution by automatically adding rules to the VPCs associated with the model service. This ensures that internal domain name requests are automatically forwarded to the DataWorks model service.
    
    > This action automatically deploys the Private Hosted Zone service in your account. Your account must have this service enabled.
