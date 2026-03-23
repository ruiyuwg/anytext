Container Registry allows you to build images in a virtual private cloud (VPC). You can create GitLab source code repositories and VPC-based services, such as Maven repositories, in a VPC or data center without exposing the public endpoint. Data centers are connected to VPCs by using Express Connect circuits. This topic describes how to build a container image in a VPC.

## Prerequisites

-   A Container Registry Enterprise Edition instance is created. For more information, see [Use a Container Registry Enterprise Edition instance to push and pull images](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images#section-ngl-swv-bde).
    
-   A self-managed GitLab service is created in a VPC or data center of the region in which the Container Registry Enterprise Edition instance resides. If the self-managed GitLab service in a VPC is accessed over the IP address of an Elastic Compute Service (ECS) instance, the inbound rules of the security group to which the ECS instance belongs must open 100.104.0.0/16 for access to the GitLab service. If the self-managed GitLab service is accessed by using Server Load Balancer (SLB), no restrictions are applied to the security group to which the ECS instance belongs.
    
-   If the self-managed GitLab service or VPC-based service is created in a data center, the CIDR block of the data center cannot overlap with the reverse access CIDR block (100.104.0.0/16). In addition, you must configure the return route for the reverse access CIDR block (100.104.0.0/16) in a virtual border router (VBR) and data center of Express Connect. For more information, see [What is Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/#concept-ipg-pry-xdb) and [VBR](/help/en/express-connect/user-guide/what-is-a-virtual-border-router/#concept-oqw-try-xdb)
    
-   A VPC and a vSwitch are created in a zone that supports the VPC mode. The following table describes the zones that support the VPC mode:
    
    **Cloud type**
    
    **Region**
    
    **Zone**
    
    Alibaba Cloud public cloud
    
    China (Beijing)
    
    -   cn-beijing-c
        
    -   cn-beijing-d
        
    -   cn-beijing-e
        
    -   cn-beijing-f
        
    -   cn-beijing-i
        
    -   cn-beijing-j
        
    -   cn-beijing-k
        
    -   cn-beijing-g
        
    -   cn-beijing-h
        
    
    China (Hangzhou)
    
    -   cn-hangzhou-e
        
    -   cn-hangzhou-f
        
    -   cn-hangzhou-g
        
    -   cn-hangzhou-h
        
    -   cn-hangzhou-i
        
    -   cn-hangzhou-j
        
    -   cn-hangzhou-k
        
    
    China (Shenzhen)
    
    -   cn-shenzhen-a
        
    -   cn-shenzhen-b
        
    -   cn-shenzhen-c
        
    -   cn-shenzhen-d
        
    -   cn-shenzhen-e
        
    -   cn-shenzhen-f
        
    
    China (Shanghai)
    
    -   cn-shanghai-a
        
    -   cn-shanghai-b
        
    -   cn-shanghai-c
        
    -   cn-shanghai-d
        
    -   cn-shanghai-e
        
    -   cn-shanghai-f
        
    -   cn-shanghai-g
        
    -   cn-shanghai-i
        
    
    China (Zhangjiakou)
    
    -   cn-zhangjiakou-a
        
    -   cn-zhangjiakou-b
        
    -   cn-zhangjiakou-c
        
    
    China (Hong Kong)
    
    -   cn-hongkong-b
        
    -   cn-hongkong-c
        
    -   cn-hongkong-d
        
    
    Singapore
    
    -   ap-southeast-1a
        
    -   ap-southeast-1b
        
    -   ap-southeast-1c
        
    
    Indonesia (Jakarta)
    
    -   ap-southeast-5a
        
    -   ap-southeast-5b
        
    
    US (Virginia)
    
    -   us-east-1a
        
    -   us-east-1b
        
    
    US (Silicon Valley)
    
    -   us-west-1a
        
    -   us-west-1b
        
    
    UK (London)
    
    -   eu-west-1a
        
    -   eu-west-1b
        
    
    Germany (Frankfurt)
    
    -   eu-central-1a
        
    -   eu-central-1b
        
    
    Japan (Tokyo)
    
    -   ap-northeast-1a
        
    -   ap-northeast-1b
        
    
    China (Chengdu)
    
    -   cn-chengdu-a
        
    -   cn-chengdu-b
        
    
    China (Heyuan)
    
    -   cn-heyuan-a
        
    -   cn-heyuan-b
        
    
    Alibaba Finance Cloud
    
    China (Hangzhou)
    
    -   cn-hangzhou-finance-i
        
    -   cn-hangzhou-finance-j
        
    -   cn-hangzhou-finance-k
        
    -   cn-hangzhou-finance-h
        
    

## Managed security groups

When you bind a VPC-based source code repository, Container Registry calls an ECS API operation to create a managed security group. The managed security group allows services that are created by Container Registry to access the self-managed GitLab service in your VPC. For more information, see [Managed security groups](/help/en/ecs/user-guide/managed-security-groups#concept-1989322).

**Note**

-   The managed security group is managed by the Container Registry system. You can view the managed security group but cannot perform operations on the managed security group. The managed security group denies all inbound access. You can specify only the private endpoints of the GitLab service and the Maven repository as the allowed outbound addresses.
    
-   Container Registry Enterprise Edition instances can access your self-managed GitLab service by using the managed security group after you bind the elastic network interface (ENI) on the vSwitch to the Container Registry Enterprise Edition instances.
    

## Step 1: Manage the link

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com/cn-hangzhou/instances).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the card of the Container Registry Enterprise Edition instance to which you want to bind the source code repository.
    
5.  On the **Overview** page, choose **Repository** \> **Code Source**.
    
6.  On the **Code Source** page, find GitLab and click **Manage Link** in the **Actions** column.
    
7.  In the **Manage Link** dialog box, configure the following parameters to create a VPC link. Then, click **Create**.
    
    Table 1. Parameters used to create a VPC access link
    
    **Parameter**
    
    **Description**
    
    **Private IP address of the GitLab Server**
    
    Enter the private IP address of the self-managed GitLab source code repository.
    
    **Other IP addresses that need to be allowed**
    
    Enter other VPC endpoints that you want to allow.
    
    **Existing VPC**
    
    Select the VPC that is created in the prerequisites.
    
    **vSwitch**
    
    Select the vSwitch that is created in the prerequisites.
    

## Step 2: Bind the GitLab source code repository to the Container Registry Enterprise Edition instance

1.  On the **Code Source** page, find GitLab and click **Bind Account** in the **Actions** column.
    
2.  In the **Private GitLab** dialog box, configure the following parameters to bind the GitLab source code repository. Then, click **Confirm**.
    
    Table 2. Parameters used to bind the GitLab source code repository
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    Select **VPC**.
    
    **Link Information**
    
    Enter the information about the VPC link that you created in [Step 1: Manage the link](#section-931-19w-ohj).
    
    **Endpoint**
    
    Enter the endpoint of the GitLab service.
    
    -   If you use a private GitLab service, enter the logon URL of the private GitLab service.
        
    -   If you use a public GitLab service, enter the logon URL of the public GitLab service.
        
    
    **Username**
    
    Enter the username that you use to log on to the GitLab service.
    
    **Private Token**
    
    Enter your access token. For more information about how to create an access token, see [Bind a source code hosting platform](/help/en/acr/user-guide/bind-a-source-code-hosting-platform#task-2038492).
    
    If **Bound** is displayed in the **Status** column of the GitLab service, the internal source code repository is bound to the Container Registry Enterprise Edition instance.
    

## Step 3: Use the Container Registry Enterprise Edition instance to build an image

**Warning**

When you create container images in a VPC, you must clear Build With Servers Deployed Outside Chinese Mainland.

After you bind the VPC-based source code repository to the Container Registry Enterprise Edition instance, you need to build an image. For more information, see [Use Container Registry Enterprise Edition instances to build images](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#task-2035247).
