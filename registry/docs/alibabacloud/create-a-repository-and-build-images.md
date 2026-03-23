This topic describes how to use a Container Registry Personal Edition instance to connect a source code repository, create an image repository, configure build rules, and trigger an image build. After you complete these steps, Container Registry can automatically build a new image each time you push code to the configured branch or tag.

## Before you begin

Verify that the following prerequisites are met:

-   A Container Registry Personal Edition instance exists in your target region.
    
-   A namespace is created in that instance. For instructions, see [Manage namespaces](/help/en/acr/user-guide/manage-namespaces#concept-2047804).
    
-   You have a GitHub, Gitee, or GitLab account with a repository that contains a valid Dockerfile.
    
-   You have sufficient permissions to manage the Container Registry Personal Edition instance.
    

**Note**

The build timeout for Container Registry Personal Edition is 30 minutes. If you require flexible configurations, custom build parameters, or multi-architecture image builds, use Container Registry Enterprise Edition instead. For more information, see [Use a Container Registry Enterprise Edition instance to build an image](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#task-2035247).

### Base image requirements

Before building images with a Personal Edition instance, ensure that the base image referenced in your Dockerfile meets the following requirements:

**Support**

**Requirement**

Supported

A publicly accessible Internet image that does not require authorization.

Supported

A private Internet image that belongs to the same account and region as your Personal Edition instance (for example, a Container Registry Personal Edition image in the same region or a publicly accessible image).

Not supported

A private image that resides in a different region from the Personal Edition instance.

Not supported

An image that is built or optimized for a virtual private cloud (VPC), regardless of region.

Not supported

A private image that is not accessible from the Internet.

**Note**

Source code used for image builds may be stored in a source code repository outside the Chinese mainland. Container Registry may pull source code from outside the Chinese mainland.

## Step 1: Bind a source code repository

This example uses GitHub. For instructions on binding other source code repositories (Gitee, GitLab), see [Bind a source code hosting platform](/help/en/acr/user-guide/bind-a-source-code-hosting-platform).

**Important**

To bind a private GitLab repository hosted in a VPC, see [Build a container image in a VPC](/help/en/acr/user-guide/build-a-container-image-in-a-vpc#task-2224804).

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Personal Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the instance management page, choose **Repository** > **Code Source**.
    
6.  On the **Code Source** page, find the **GitHub** row and click **Bind Account** in the **Actions** column.
    
7.  In the **GitHub** dialog box, click **Go to the source code repository to bind account**.
    
8.  On the GitHub sign-in page, enter your username and password, and then click **Sign in**.
    
    You are redirected back to the Container Registry console. A confirmation message appears indicating that the account is bound successfully.
    

## Step 2: Configure repository information

A namespace must exist before you create a repository. If you have not created a namespace, see [Manage namespaces](/help/en/acr/user-guide/manage-namespaces#concept-2047804).

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Personal Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the instance management page, choose **Repository** > **Repositories**.
    
6.  On the **Repositories** page, click **Create Repository**.
    
7.  On the **Repository Info** step, configure the following fields:
    
    **Field**
    
    **Description**
    
    **Namespace**
    
    Select the namespace to which the repository belongs.
    
    **Repository Name**
    
    Enter a name for the repository. Use lowercase letters, digits, hyphens (-), and underscores (\_).
    
    **Repository Type**
    
    Select **Private** (accessible only to authorized users) or **Public** (accessible to anyone without authentication).
    
    **Summary**
    
    (Optional) Enter a brief description of the repository.
    
    **Note**
    
    You cannot build images based on an on-premises repository.
    
8.  Click **Next**.
    

## Step 3: Configure code source and build settings

1.  On the **Code Source** step, configure the following sections: **Code Source**, **Build Settings**, and **Build Rules**.
    
    Under **Code Source**, select the source code repository platform (for example, **GitHub**), then select the namespace and repository that contain your Dockerfile.
    
    Under **Build Settings**, configure the following options:
    
    **Option**
    
    **Description**
    
    **Automatically Build Images When Code Changes**
    
    When enabled, the building rule is automatically triggered when code is committed from a branch. A webhook connects your source code repository to ACR to detect these events.
    
    **Build With Servers Deployed Outside Chinese Mainland**
    
    When enabled, the image is built on a server outside the Chinese mainland and then pushed to the repository in the specified region. Enable this option if your source code is hosted outside the Chinese mainland. If your source code and container image repository are both in the Chinese mainland, disable **Build With Servers Deployed Outside Chinese Mainland** and use a build environment in the Chinese mainland.
    
    **Build Without Cache**
    
    When enabled, each build starts from scratch by pulling the base image anew, without using cached layers. This may extend the build duration. Disable **Build without Cache** to accelerate building.
    
2.  Click **Create Repository**.
    

## Step 4: Configure build rules

Build rules define which branch or tag triggers a build and where the Dockerfile is located.

**Note**

If **Build** does not appear in the left-side navigation pane of the repository management page, the source code repository is not bound to the Personal Edition instance. Return to [Step 1](#section-aje-4i7-m89) to rebind the source code repository.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Personal Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the instance management page, choose **Repository** > **Repositories**.
    
6.  On the **Repositories** page, find the repository that you want to manage and click **Manage** in the **Actions** column.
    
7.  In the left-side navigation pane of the repository management page, click **Build**.
    
8.  In the **Build Rules** section, click **Add Build Rule**.
    
    **Note**
    
    To modify an existing build rule, find the rule and click **Modify** in the **Actions** column.
    
9.  In the **Add Build Rule** dialog box, configure the following parameters and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    The trigger source type. Select **Branch** to trigger builds on commits to a branch, or **Tag** to trigger builds when a matching tag is pushed.
    
    **Code Branch/Tag**
    
    The specific branch name or tag pattern that triggers the build rule.
    
    **Build Context Directory**
    
    The subdirectory within the branch or tag that serves as the build context. For example, if the Dockerfile is located directly in the root of the branch, leave this field empty or enter `/`. If the Dockerfile is in a subdirectory named `app`, enter `app/`.
    
    **Dockerfile Filename**
    
    The filename of the Dockerfile. The default value is `Dockerfile`. Change this value only if your Dockerfile uses a non-standard filename.
    
    **Tags**
    
    The image tag to apply to the built image. Example: `latest`. You can use variables such as the branch name or commit SHA for dynamic tagging.
    

## Step 5: Build an image

You can trigger a build manually at any time, regardless of whether the **Automatically Build Images When Code Changes** toggle is enabled.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Personal Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the instance management page, choose **Repository** > **Repositories**.
    
6.  On the **Repositories** page, find the repository that you want to manage and click **Manage** in the **Actions** column.
    
7.  In the left-side navigation pane of the repository management page, click **Build**.
    
8.  In the **Build Rules** section, find the build rule that you want to use and click **Build** in the **Actions** column.
    
    After the build completes, a build record appears in the list.
    
    **Note**
    
    To view the build log, find the build record and click **Log** in the **Actions** column. If a build fails, check the log for errors such as a missing Dockerfile, an inaccessible base image, or a build timeout (Personal Edition timeout is 30 minutes).
    
9.  After the build completes, click **Tags** in the left-side navigation pane to verify that the image tag was created successfully.
    

### Troubleshooting common build failures

**Symptom**

**Likely cause**

**Action**

**Build** does not appear in the left-side navigation pane

Source code repository is not bound

Return to Step 1 and rebind the source code repository.

Build fails immediately

Dockerfile not found at the configured path

Verify the **Dockerfile Filename** and **Build Context Directory** in the build rule match the actual file location in your repository.

Build fails with a base image error

Base image is inaccessible

Ensure the base image is publicly accessible or belongs to the same account and region. VPC-optimized and third-party private images are not supported.

Build times out

Build exceeds the 30-minute limit

Optimize your Dockerfile (for example, use multi-stage builds to reduce image size), or switch to Container Registry Enterprise Edition for longer build timeouts.

## What to do next

After a successful build, you can manage the repository and use the image:

**View and use the image**

-   **View image tags**: Click **Tags** in the left-side navigation pane to see all built image tags and their digest values.
    
-   **Push and pull images**: [Push images to and pull images from an image repository of a Container Registry Personal Edition instance](/help/en/acr/user-guide/use-a-container-registry-personal-edition-instance-to-push-and-pull-images).
    
-   **Deploy to a cluster**: Use the built image to deploy applications on Container Service for Kubernetes (ACK):
    
    -   [Create a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment#task-p2s-2rl-vdb)
        
    -   [Create a StatefulSet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statefulset-to-create-a-stateful-application-1#task-1918426)
        
    -   [Create a Job](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-job#task-1918429)
        

**Manage the repository**

-   **View build history**: In the repository management page, click **Build** to see all past build records and their status.
    
-   **View build logs**: Find a build record and click **Log** in the **Actions** column to diagnose build issues.
    
-   **Modify build rules**: In the **Build Rules** section, find a rule and click **Modify** in the **Actions** column to update trigger conditions or Dockerfile settings.
    

**Upgrade for advanced features**

-   **Upgrade to Enterprise Edition**: For advanced features such as flexible build configurations, custom parameters, multi-architecture builds, and enhanced security controls, see [Use a Container Registry Enterprise Edition instance to build an image](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances#task-2035247).
