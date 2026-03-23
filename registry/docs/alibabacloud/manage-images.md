You can use Container Registry Enterprise Edition instances to automatically build and pull images when you deploy applications. This improves the image pulling speed and reduces the application deployment time. This topic describes how to create and view images by using Container Registry Enterprise Edition instances.

## Create images

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the left-side navigation pane of the ACK console, choose **Marketplace** > **Alibaba Cloud Container Registry**.
    
3.  On the **Instances** page, click the card of the Container Registry Enterprise Edition instance to which you want to bind the source code repository.
    
    For more information about how to create Container Registry Enterprise Edition instances, see [Push an image to a Container Registry Enterprise Edition instance and pull an image from the instance](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images#section-ngl-swv-bde).
    
4.  Create a namespace for the Container Registry Enterprise Edition instance. For more information, see [Step 4: Create a namespace](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images#section-pys-y3j-jar).
    
5.  Create a repository for the Container Registry Enterprise Edition instance. For more information, see [Step 5: Create an image repository](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images#section-zp1-q3z-ka8).
    
6.  Push an image to the repository, or enable the system to automatically build an image from a third-party code repository. For more information, see [Push an image to a Container Registry Enterprise Edition instance and pull an image from the instance](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images#task-2023726) and [Use a Container Registry Enterprise Edition instance to build an image](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#task-2035247).
    

## View images

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Container Registry Enterprise Edition instance, choose **Repository** > **Repositories**.
    
6.  On the Repositories page, click the name of the repository that you want to manage.
    
7.  In the left-side navigation pane of the repository details page, click **Tags** to view the image versions in the repository.
    

## **References**

You can perform the following operations after the image is built:

-   Pull the image to the Container Service for Kubernetes (ACK) cluster without using passwords. For more information, see [Use the aliyun-acr-credential-helper component to pull images without using a password](/help/en/acr/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294).
    
-   Use the image to create applications in the ACK cluster. For more information, see [Create a stateless workload (Deployment)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment#task-p2s-2rl-vdb).
    
-   Use the P2P acceleration feature in the ACK cluster to accelerate image pulling. For more information, see [Use P2P acceleration in ACK or ACK serverless clusters](/help/en/acr/use-the-p2p-acceleration-feature-in-ask-and-ack-clusters#task-2058972).
