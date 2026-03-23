You can use Container Registry Enterprise Edition instances to push and pull images. Then, you can better manage and use your images in different environments. This improves the efficiency of development and deployment and ensures the consistency and reliability of container images.

## Prerequisites

-   An Alibaba Cloud account is created. For more information, see [Register and log on to an Alibaba Cloud account](/help/en/polardb/polardb-for-oracle/register-and-log-on-to-an-alibaba-cloud-account-2#concept-k5l-p4q-tdb).
    
-   Docker Engine is installed in the environment. For more information, see [Install Docker Engine on CentOS](/help/en/ecs/user-guide/install-and-use-docker).
    
-   Object Storage Service (OSS) is activated to store images of Container Registry Enterprise Edition. For more information, see [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb).
    

## Step 1: Create a Container Registry Enterprise Edition instance

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click **Create ACR EE**.
    
5.  On the **Container Registry Enterprise Edition** page, configure the parameters and click **Buy Now**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    The region where the Container Registry Enterprise Edition instance resides.
    
    **Instance Type**
    
    The edition of the instance. For more information, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)
    
    **Instance Name**
    
    The name of the instance.
    
    **Instance Storage**
    
    Valid values: **Default** and **Custom**.
    
    -   **Default**: By default, an OSS bucket is created in your account to store container images.
        
    -   **Custom**: You can select an existing OSS bucket to store container images.
        
    
    **Select Bucket**
    
    Select an existing OSS bucket to store container images.
    
    **Note**
    
    This parameter is displayed only when you set the **Instance Storage** parameter to **Custom**.
    
    **Security Scan**
    
    Container Registry Enterprise Edition provides the image security scan feature. It supports the following security scan engines:
    
    -   **Trivy Scan Engine**: an open source scan engine that can detect system vulnerabilities and application vulnerabilities. Trivy scan engines do not fix system vulnerabilities with a few clicks.
        
    -   **Security Center Scan Engine**: a scan engine developed by Alibaba Cloud. The engine can detect system and application vulnerabilities, baseline risks, and malicious samples. Security Center scan engines allow you to fix system vulnerabilities in a few clicks.
        
    
    **Repository Quota**
    
    By default, the Basic Edition provides a repository quota of 1,000 and the Advanced Edition provides a repository quota of 5,000. You can apply for a quota increase based on your business requirements.
    
    **Namespace Quota**
    
    By default, the Basic Edition provides a namespace quota of 15 and the Advanced Edition provides a namespace quota of 50. You can apply for a quota increase based on your business requirements.
    
    **Access Control List Quota for a VPC**
    
    If your service needs to pull images from a Container Registry Enterprise Edition instance over a virtual private cloud (VPC), you must purchase a VPC access control list (ACL) quota for the Enterprise Edition instance. For more information, see [Billing rules](/help/en/acr/product-overview/billing-description).
    
    **Duration**
    
    You can select 1 Month, 2 Months, 3 Months, or 6 Months. If you require a longer duration, you can select 1 Year, 2 Years, 3 Years, 4 Years, or 5 Years.
    
    **Note**
    
    You can enable auto-renewal based on your requirements.
    
    **Resource Group**
    
    Select an existing resource group. You can also click **Create Resource Group**, and fill in **Resource Group Identifier** and **Resource Group Name**, then click **OK**.
    
6.  On the **Confirm Order** page, verify the configurations, select **I have read and agree to Container Registry Enterprise Edition Agreement of Service**, and then click **Pay**.
    
7.  In the lower-right corner of the **Purchase** page, view the total fees of the instance. Verify the order information and follow the on-screen instructions to complete the payment.
    
    On the **Instances** page, the status of the new instance is **Starting**. The status changes to **Running** after 2 or 3 minutes.
    

## Step 2: Obtain the username that you use to log on to image repositories

-   If you use an Alibaba Cloud account, the name of the Alibaba Cloud account is the username that you use to log on to image repositories.
    
-   If you use a RAM user, the string before .onaliyun.com is the username that you use to log on to image repositories. For example, if the name of your RAM user is 123@123456781011\*\*\*\*.onaliyun.com, 123@123456781011\*\*\*\* is the username used to log on to the Container Registry Personal Edition instance.
    

## Step 3: Set a password that you use to log on to image repositories

If you want to push and pull images by using a fixed credential, you can configure an access credential. For more information, see [Configure access credentials for a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/configure-access-credentials#task617).

## Step 4: Create a namespace

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Container Registry Enterprise Edition instance for which you want to create a namespace.
    
5.  In the left-side navigation pane of the management page of the Enterprise Edition instance, choose **Repository** > **Namespace**.
    
6.  On the **Namespace** page, click **Create Namespace**.
    
7.  In the **Create Namespace** dialog box, configure the **Namespace**, **Automatically Create Repository**, and **Default Repository Type** parameters. Click **Confirm**.
    

## Step 5: Create an image repository

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Container Registry Enterprise Edition instance for which you want to create an image repository.
    
5.  In the left-side navigation pane of the management page of the Enterprise Edition instance, choose **Repository** > **Repositories**.
    
6.  On the **Repositories** page, click **Create Repository**.
    
7.  In the **Repository Info** step, configure the **Namespace**, **Repository Name**, **Repository Type**, **Tags**, **Accelerated Image**, **Summary**, and **Description** parameters. Then, click **Next**.
    
8.  In the **Code Source** step, configure the **Code Source**, **Build Settings**, and **Build Rules** parameters, and then click **Create Repository**. The following table describes key parameters.
    
    **Parameter**
    
    **Description**
    
    **Code Source**
    
    The code source.
    
    **Build Settings**
    
    -   Automatically Build Images When Code Changes: An image is automatically built when code is committed from a branch.
        
    -   Build With Servers Deployed Outside Chinese Mainland: Images are built on servers outside the Chinese mainland and then pushed to a repository in the specified region.
        
    -   Build Without Cache: The system pulls the base image whenever the system builds an image. This prolongs the building duration.
        
    
    **Build Rules**
    
    After you create the image repository, go to the image building page to create image building rules. For more information, see [Create a repository and build images](/help/en/acr/user-guide/create-a-repository-and-build-images#topic1686).
    

## Step 6: Configure an ACL

-   If your Docker client is deployed in a virtual private cloud (VPC), you must configure VPC access control lists (ACLs) for the Enterprise Edition instance to allow the client to connect to the instance. For more information, see [Configure a VPC ACL](/help/en/acr/user-guide/configure-access-over-vpcs#task1305).
    
-   If your Docker client uses the Internet, you must configure Internet ACLs for the Enterprise Edition instance to allow the client to connect to the instance. In this example, Internet access is enabled.
    

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Container Registry Enterprise Edition instance, choose **Repository** > **Access Control** .
    
6.  On the **Access Control** page, click the **Internet** tab, turn on **Enable Access over Internet**, and then click **Add Internet Whitelist**.
    
7.  In the **Add Internet Whitelist** dialog box, enter the CIDR block and description of the host of your Docker client, and then click **Confirm**.
    
    After the CIDR block is added, the Docker clients whose IP addresses fall within the CIDR block can access the Container Registry Enterprise Edition instance.
    
    **Important**
    
    If you want to allow all Docker clients to access the Container Registry Enterprise Edition instance over the Internet, clear the whitelist that controls Internet access. After you clear the whitelist, the Container Registry Enterprise Edition instance is completely exposed to the Internet and may be attacked. Proceed with caution.
    

## Step 7: Push and pull an image

The following commands must be run on the Docker client. Install and configure the Docker client in advance.

1.  Run the following command to log on to the image repository:
    
    **Note**
    
    If you push images to or pull images from a public image repository, you can turn on **Pull from Anonymous Users** on the **Overview** page in the Container Registry console. Then, you can push images to or pull images from the public image repository anonymously without logging on to the repository.
    
    ```
    docker login --username=<Username that you use to log on to the image repository> <Name of the Container Registry Enterprise Edition instance>-registry.<Region of the Container Registry Enterprise Edition instance>.cr.aliyuncs.com
    ```
    
    Example:
    
    ```
     docker login --username=123@1234567810111213 m**-registry.cn-hangzhou.cr.aliyuncs.com
    ```
    
    At the command prompt, enter the logon password that is specified in [Step 3: Set a password that you use to log on to image repositories](#section-08e-k20-m0g). If `login succeeded` is displayed, the logon is successful.
    
2.  Push an image.
    
    1.  Run the following command to tag the image:
        
        ```
        docker tag <Image ID> <Name of the Container Registry Enterprise Edition instance>-registry.<Region of the Container Registry Enterprise Edition instance>.cr.aliyuncs.com/<Namespace name>/<Image repository name >:<Image tag>
        ```
        
        Example:
        
        ```
        docker tag Digest m**-registry.cn-hangzhou.cr.aliyuncs.com/m**/test:latest
        ```
        
    2.  Run the following command to push the image to the Container Registry Enterprise Edition instance:
        
        ```
        docker push <Name of the Container Registry Enterprise Edition instance>-registry.<Region of the Container Registry Enterprise Edition instance>.cr.aliyuncs.com/<Namespace name>/<Image repository name>:<Image tag>
        ```
        
        Example:
        
        ```
        docker push m**-registry.cn-hangzhou.cr.aliyuncs.com/m**/test:latest
        ```
        
        On the **Repositories** page, click the name of the image repository. On the page that appears, click **Tags**. If the image name is displayed on the **Tags** page, the image is pushed to the image repository.
        
3.  Run the following command to pull an image:
    
    ```
    docker pull <Name of the Container Registry Enterprise Edition instance>-registry.<Region of the Container Registry Enterprise Edition instance>.cr.aliyuncs.com/<Namespace name>/<Image repository name>:<Image tag>
    ```
    
    Example:
    
    ```
    docker pull m**-registry.cn-hangzhou.cr.aliyuncs.com/m**/test:latest
    ```
    
    Run the `docker images` command. If the image name is displayed in the command output, the image is pulled from the image repository.
