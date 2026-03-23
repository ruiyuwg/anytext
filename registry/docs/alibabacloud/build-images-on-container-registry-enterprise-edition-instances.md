This guide shows you how to automatically build and push a container image each time you commit code to a connected repository, using an ACR Enterprise Edition instance. By the end, you will have a working build pipeline: code changes in your repository trigger ACR to build an image and push it to your image repository automatically.

## Prerequisites

Before you begin, ensure that:

-   You have created a Container Registry Enterprise Edition instance. For more information, see the "Step 1: Create a Container Registry Enterprise Edition instance" section of the [Push an image to a Container Registry Enterprise Edition instance and pull an image from the instance](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images#section-ngl-swv-bde) topic.
    
-   You have a Dockerfile in your source repository for building images.
    

## Background information

The ACR Enterprise Edition image building service provides the following capabilities:

-   **Security**: Each build task runs in an environment exclusive to your Alibaba Cloud account, ensuring strong isolation between tenants.
    
-   **Stability**: Build tasks run on your dedicated environment, so build times remain consistent even when building multiple images from the same source code repository.
    
-   **Intelligent acceleration**:
    
    -   ACR uses BuildKit by default, which has robust capabilities for multi-stage build scenarios and supports rich building features.
        
    -   ACR hosts common base images locally, so builds do not need to pull them from external sources, reducing build time.
        
    -   ACR uses remote caches to further accelerate image building.
        

**Supported code hosting platforms**

The following table lists the code hosting platforms supported by Container Registry Enterprise Edition:

-   Code hosting platforms: The following table lists the supported code hosting platforms.
    
    **Code hosting platform**
    
    **Version**
    
    **Authentication method for binding**
    
    **Limit on triggering image building**
    
    Gitee
    
    All versions
    
    Gitee OAuth authentication
    
    None
    
    GitHub
    
    GitHub developer version
    
    GitHub OAuth authentication
    
    None
    
    GitLab
    
    All versions
    
    Personal access token
    
    None
    
    Bitbucket
    
    All versions
    
    Gitee OAuth authentication
    
    None
    
    **Note**
    
    Personal Edition instances cannot be bound to Gitee.
    
-   **Accelerated image generation**: After you push a container image, ACR can automatically generate an accelerated version of it. For more information, see [Load resources of a container image on demand](/help/en/acr/user-guide/load-resources-of-a-container-image-on-demand#task-1955391).
    

## Step 1: Bind your instance to a code hosting platform

Bind the instance to a code hosting platform so that ACR can access your source code and trigger builds when code changes. For detailed instructions, see [Bind a source code hosting platform](/help/en/acr/user-guide/bind-a-source-code-hosting-platform#task-2038492).

**Important**

-   You cannot build images from an on-premises code repository.
    
-   To bind a private GitLab code repository in a virtual private cloud (VPC), see [Build a container image in a VPC](/help/en/acr/user-guide/build-a-container-image-in-a-vpc#task-2224804).
    

## Step 2: Create a namespace

Create a namespace to organize your image repositories. Enabling automatic repository creation lets you configure default settings applied to all repositories under this namespace.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click Instances.
    
4.  On the Instances page, click the Enterprise Edition instance for which you want to create a namespace.
    
5.  In the left-side navigation pane, choose Repository > Namespace.
    
6.  On the Namespace page, click Create Namespace.
    
7.  In the Create Namespace sidebar, configure Namespace and set Automatically Create Repository to On or Off. Then click Confirm.
    
    If you set Automatically Create Repository to On, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    Repository Type
    
    Select Public or Private. Public: By default, public images require users to log on to the instance before they can be pulled. To allow anonymous pulls, enable the instance's public anonymous pull setting. Because public repositories can be pulled by unauthorized users, we recommend setting repositories to Private to protect your data. Private: Users must log on to the instance and have Pull permission authorization before they can pull private images.
    
    Immutable Image Tags
    
    Select Flexible or Immutable. When set to Immutable, all image tags except latest cannot be overwritten.
    
    Accelerated Images
    
    Enable or disable. When enabled, an accelerated version of each image is automatically generated after the image is pushed. The accelerated image has an \_accelerated suffix appended to its tag.
    

## Step 3: Create an image repository

**Note**

Accelerated images can only be built on Container Registry Standard Edition instances and Advanced Edition instances. We recommend that you upgrade Basic Edition instances to Standard Edition or Advanced Edition instances.

Create an image repository and bind it to a source code repository. All images built from that source code repository are pushed to this image repository.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click Instances.
    
4.  On the Instances page, click the Enterprise Edition instance you want to manage.
    
5.  In the left-side navigation pane, choose Repository > Repositories.
    
6.  On the Repositories page, click Create Repository.
    
7.  In the Repository Info step, configure Namespace, Repository Name, Repository Type, Tags, Accelerated Image, Summary, and Description. Then click Next.
    
8.  In the Code Source step, configure Code Source, Build Settings, and Build Rules, and then click Create Repository.
    
9.  The following table describes the Build Settings parameters:
    
    **Parameter**
    
    **Description**
    
    Automatically Build Images When Code Changes
    
    When enabled, the build rule is automatically triggered when code is committed to a branch.
    
    Build With Servers Deployed Outside Chinese Mainland
    
    Enable this if your code source is on GitHub or Bitbucket, or if your Dockerfile downloads dependencies from outside China and the cross-border network connection is unstable. ACR uses an accelerated link to pull external data sources during the build.
    
    Build Without Cache
    
    When enabled, ACR pulls the base image from the source each time, ignoring cached layers. This may slow down builds. Disable this option to use cached layers and accelerate builds.
    
    On the Repositories page, click the created image repository. If Build is displayed in the left-side navigation pane of the repository management page, the image repository is bound to the source code repository.
    

## Step 4: Build an image

Configure build rules to define how and when ACR builds images from your repository, then trigger a build and verify the result.

**Note**

If you cannot find Build in the repository management page, the instance is not bound to the code hosting platform. Return to [Step 1](#section-m5z-ykv-ye6) to rebind the instance.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click Instances.
    
4.  On the Instances page, click the Enterprise Edition instance you want to manage.
    
5.  In the left-side navigation pane, choose Repository > Repositories.
    
6.  On the Repositories page, find the image repository you created and click Manage in the Actions column.
    
7.  In the left-side navigation pane, click Build. In the Build Rules section, click Add Build Rule.
    
8.  In the Build Information step, configure the following parameters and then click Next.
    
    **Parameter**
    
    **Description**
    
    Type
    
    The type of the source code repository. Valid values: Branch and Tag.
    
    Branch/Tag
    
    Select or enter a branch or tag. Regular expressions are supported. For example, if you enter release-(?<imageTag>\\w\*), ACR automatically builds an image when source code in the release-v1 branch is updated. For more information on named capturing groups, see [Use regular expressions in named capturing groups](https://developer.aliyun.com/article/683079).
    
    **Note**
    
    When you use a regular expression, only ACR can trigger builds. Manual builds are not supported.
    
    Build Context Directory
    
    The directory in which the Dockerfile resides. This is the subdirectory of the branch or tag directory. For example, if the branch directory is master/ and the Dockerfile is in the master/ directory, the value is master/Dockerfile.
    
    Dockerfile Filename
    
    The name of the Dockerfile. The default name is Dockerfile.
    
9.  In the Tag step, configure the following parameters, click Save, and then click Next.
    
    **Note**
    
    Click Add Configuration to add image tags. You can add up to three image tags.
    
    **Parameter**
    
    **Description**
    
    Image Tag
    
    The tag for the built image, for example latest. Named capturing groups are supported. If you defined a named capturing group in Branch/Tag, you can reference the captured value here.
    
    Build Time
    
    (Optional) The time (UTC+8) at which source code is pushed. Accepted formats: 20201015 or 202010151613.
    
    **Note**
    
    If you set this parameter, only ACR can trigger builds. Manual builds are not supported.
    
    Commit ID
    
    (Optional) The number of characters to use from the commit ID of the most recently pushed code. By default, the first six characters are used. Adjust the slider to change the number.
    
    **Note**
    
    If you set this parameter, only ACR can trigger builds. Manual builds are not supported.
    
10.  In the Build Configurations step, configure the following parameters and then click Next.
     
     **Parameter**
     
     **Description**
     
     Build Architecture
     
     Select one or more target architectures. If you select multiple architectures, ACR generates a separate image for each architecture under the same tag.
     
     Build Parameters
     
     Key-value pairs passed to the build process. Parameter names are case-sensitive. You can configure a maximum of 20 building parameters. Click Add Configuration to add parameters.
     
11.  **Trigger a build** using one of the following methods:
     
     -   In the Build Rules section of the Build page, find the build rule and click Build in the Actions column.
         
     -   Push a code commit to the configured branch of the source code repository to trigger the build rule automatically.
         
     
12.  **Monitor the build**: In the Build Log section, find the image building task and click Log in the Actions column to view the build log. To stop a running build, click Cancel in the Actions column.
     
13.  **Verify the result**: In the left-side navigation pane, click Image Tag. If the image you built is listed, the build succeeded.
     
     In the left-side navigation pane, click Image Tag. If the image that you created is displayed, the image is built.
     

## Examples

The following two examples illustrate common build rule configurations. Example 1 is a simple setup that supports both manual and automatic builds. Example 2 uses a regular expression to create versioned image tags from release branch names, and supports automatic builds only.

### Example 1: Build from the main branch (manual builds allowed)

**Goal**: Build an image tagged latest from the main branch, triggerable manually or automatically on code push.

**Parameter**

**Value**

Type

Branch

Branch/Tag

main

Build Context Directory

/

Dockerfile Filename

Dockerfile

Image Tag

latest

**Result**: When you click Build or when source code in the main branch is updated, ACR builds the image using the Dockerfile in the root directory of the main branch. The built image is tagged latest.

Because Build Time and Commit ID are not configured, you can trigger builds manually.

![基于main构建规则.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5829308961/p689174.png)

### Example 2: Build from a regex-matched branch (manual builds not allowed)

**Goal**: Automatically build versioned images from release branches, where the branch name determines the image tag.

**Parameter**

**Value**

Type

Branch

Branch/Tag

release-(?<imageTag>\\w\*)

Build Context Directory

/

Dockerfile Filename

Dockerfile

Image Tag

${imageTag}

Build Time

yyyyMMddHHmm

Commit ID

30

**Result**: When source code in a branch whose name starts with release- is updated, ACR automatically builds an image. The regular expression release-(?<imageTag>\\w\*) captures the version portion of the branch name and assigns it to the imageTag variable, which is then used in the image tag.

For example, a push to the release-v1 branch captures v1 as imageTag. Combined with the build time and commit ID, the resulting image tag is: v1-202010151625-d4ef3dc3b77a011a5779eec7efdd45.

Because Build Time and Commit ID are configured, only ACR can trigger this build. Manual builds are not supported.

![基于正则规则构建规则.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5829308961/p689175.png)

## What to do next

After the image is built, you can use it in Container Service for Kubernetes (ACK) clusters:

-   **Pull images without secrets**: Use the aliyun-acr-credential-helper component to authenticate automatically. For more information, see [Use the aliyun-acr-credential-helper component to pull images without using a Secret](/help/en/acr/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294).
    
-   **Deploy the image as an application**: Create a Deployment to run your image in an ACK cluster. For more information, see [Create a stateless application by using a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment#task-p2s-2rl-vdb).
    
-   **Accelerate image pulling**: Use the P2P acceleration feature to speed up image distribution across nodes. For more information, see [Use the P2P acceleration feature in ACK Serverless and ACK clusters](/help/en/acr/use-the-p2p-acceleration-feature-in-ask-and-ack-clusters#task-2058972).
