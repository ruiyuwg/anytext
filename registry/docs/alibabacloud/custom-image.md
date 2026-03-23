MaxCompute SQL and Python UDFs, PyODPS tasks, and MaxFrame jobs often require third-party packages or system-level dependencies. Custom images let you package these dependencies into a Docker container image and use it as a self-contained runtime environment.

Typical use cases:

-   Install specific versions of Python libraries such as NumPy, pandas, or scikit-learn for UDF logic.
    
-   Add system packages that are unavailable in the default MaxCompute runtime.
    
-   Standardize a shared development environment across teams.
    

## Limits

**Item**

**Limit**

Image size

10 GB per image

Images per tenant

10

Container Registry (ACR) edition

ACR Enterprise Edition only (Standard or Premium Edition instances). Personal Edition is not supported.

CPU architecture

x86\_64 only. macOS M series and ARM architectures are not supported.

OS compatibility

The MaxCompute job runtime environment is based on CentOS 7. All packages in the image must be compatible with CentOS 7.

Reserved directories

Do not place files in `/home/admin`, `/usr/local/lib`, `/usr/ali`, or `/apsara`. MaxCompute mounts its runtime environment to these directories at container startup, overwriting any existing content.

Images per job

Each development job can specify only one image. Otherwise, image conflicts may occur.

## Prerequisites

An Alibaba Cloud account has the required permissions by default. If you use a RAM user, grant the following permissions before proceeding.

**Permission scope**

**Required policy**

**Reference**

RAM role read access

[AliyunRAMReadOnlyAccess](/help/en/ram/developer-reference/aliyunramreadonlyaccess)

[Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)

ACR operations

[AliyunContainerRegistryFullAccess](/help/en/acr/user-guide/grant-ram-user-system-policy)

[Authorize a RAM user for ACR](/help/en/acr/user-guide/grant-ram-user-system-policy)

MaxCompute custom image operations

Custom policy via RAM

[RAM permissions for MaxCompute](/help/en/maxcompute/user-guide/ram-permissions)

## Step 1: Install Docker

-   **Linux**: Install Docker by following the instructions in the [official Docker documentation](https://docs.docker.com/engine/install/).
    
-   **macOS or Windows**:
    
    -   Individual developers: Use [Docker Desktop](https://www.docker.com/products/docker-desktop/).
        
    -   Enterprise users who have not purchased a license: Use the open-source [Rancher Desktop](https://rancherdesktop.io/).
        

## Step 2: Build a custom image

Build a custom image from one of the MaxCompute base images using a Dockerfile.

### Base images

MaxCompute provides two base images:

**Base image**

**Address**

**Notes**

CentOS

`registry.cn-zhangjiakou.aliyuncs.com/maxcompute_image/base_image:latest`

Provides Python 3.7, Python 3.11, pip, and yum. The yum source is configured to use the Alibaba Cloud CentOS 7 image source address.

Ubuntu 20.04

`registry.cn-zhangjiakou.aliyuncs.com/maxcompute_image/ubuntu_20.04:latest`

\--

### Create and build the image

1.  Create a Dockerfile.
    
    ```
       vim DockerFile
    ```
    
2.  Add the following content to the Dockerfile:
    
    ```
       # Use the MaxCompute CentOS base image
       FROM registry.cn-zhangjiakou.aliyuncs.com/maxcompute_image/base_image:latest
    
       # If you use the Ubuntu image, replace the image address with registry.cn-zhangjiakou.aliyuncs.com/maxcompute_image/ubuntu_20.04:latest
    
       # Install system dependencies
       RUN yum install vi -y
    
       # Install third-party libraries
       RUN /usr/ali/python3.7/bin/python3 -m pip install --no-cache-dir pandas
    ```
    
3.  Build the image.
    
    -   **image\_name**: The name of the custom image.
        
    -   **tag**: The version of the custom image.
        
    
    ```
       sudo docker build -f DockerFile -t <image_name>:<tag> .
    ```
    

## Step 3: Push the image to ACR

Upload the custom image to an ACR Enterprise Edition repository.

### Create an ACR Enterprise Edition instance

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com/) and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, click **Instances**.
    
3.  On the **Instances** page, click **Create ACR EE**. If you have already created an instance, skip this step.
    
    **Important**
    
    Upload custom images only to **Standard Edition** or **Premium Edition** instances of ACR Enterprise Edition.
    

### Create a repository

1.  On the **Instances** page, find the target Enterprise instance and click **Manage** to open its overview page.
    
2.  In the navigation pane on the left, choose **Repository** > **Repositories**.
    
3.  On the **Repository** > **Repositories** page, click **Create Repository**. In the **Create Repository** dialog box, enter the following information and click **Next**.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Region**
    
    Yes
    
    The region where the current instance resides is automatically selected.
    
    **Namespace**
    
    Yes
    
    The namespace of the image repository. This parameter cannot be modified after it is set. Create a namespace that corresponds to a company, an organization, or an individual user, such as Aliyun. Do not create a namespace that corresponds to a module or system, such as Tomcat, CentOS, an application, or a module.
    
    **Repository Name**
    
    Yes
    
    The name must be 2 to 120 characters in length and can contain lowercase letters, digits, and separators. The separators can be underscores (\_), hyphens (-), periods (.), and forward slashes (/). A separator cannot be the first or last character.
    
    **Repository Type**
    
    No
    
    To pull a **public image**, you must log on to the Enterprise Edition instance. To allow anonymous pulls, enable anonymous pulls for the instance. To pull a private image from an Enterprise Edition instance, you must log on to the instance and have the pull permission. The default value is Private.
    
    **Tags**
    
    No
    
    After selected, all tags other than the latest in the repository cannot be overwritten, ensuring the consistency of the container images.
    
    **Accelerated Image**
    
    No
    
    After selected, all images in the repository automatically generate accelerated images with an "\_accelerated" suffix. **Full Mode**: Provides a significant acceleration effect. The size of an accelerated image is approximately 130% the size of the original image. The system requires approximately 25 seconds to generate a 1 GB-sized accelerated image. If an accelerated image layer has been generated for an image layer, the system does not generate an accelerated image layer again for the image layer. **Index-only Mode (Public Preview)**: Provides about 70% of the acceleration effect of the full mode. The size of the accelerated image is about 3% of the original image size. It takes about 3 seconds to generate a 1 GB accelerated image. Image layers for which an index is already generated are not generated again.
    
    **Summary**
    
    Yes
    
    Max. 100 characters.
    
    **Description**
    
    No
    
    Supports Markdown Format.
    
4.  Configure the code source:
    
    Set **Code Source** to **Local Repository** and click **Create Repository**.
    

### Upload the image

1.  On the **Repository** > **Repositories** page, find the desired repository and click **Manage** in the **Actions** column.
    
2.  In the navigation pane on the left, click **Details**.
    
3.  Follow the instructions in the **Instructions on Images** section on the **Details** page to upload a custom image from your Docker environment to the ACR image repository.
    
4.  (Optional) If your machine is in a VPC, perform the following steps:
    
    1.  Configure VPC access for the Enterprise Edition instance. For more information, see [Configure access over a VPC](/help/en/acr/user-guide/configure-access-over-vpcs).
        
    2.  When you perform operations on the ACR Enterprise Edition instance in your Docker environment, add `vpc` to the domain name. For example, change `acr-test-registry.cn-wulanchabu.cr.aliyuncs.com` to `acr-test-registry-vpc.cn-wulanchabu.cr.aliyuncs.com` in the following command:
        
        ```
        $ docker login --username=***@test.aliyunid.com acr-test-registry.cn-wulanchabu.cr.aliyuncs.com
        ```
        
    
    **Note**
    
    If an error occurs when you log on to the instance, check whether public network access is enabled for the repository.
    

## Step 4: Register the image in MaxCompute

Associate an ACR image with MaxCompute to manage your development images.

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Images**.
    
3.  On the **Images** page, click the **Custom Image** tab.
    
4.  On the **Custom Image** tab, click **Create Image**. In the **Add Image** dialog box that appears, configure the following parameters:
    
    **Note**
    
    When you create an image for the first time, the **MaxCompute Service Linked Role** dialog box appears. Click **OK** to automatically create a service-linked role to access ACR resources.
    
5.  In the **Add Image** dialog box, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Image Name**
    
    Required. The name of the custom image. The image name must start with a lowercase letter, and can contain only lowercase letters, digits, hyphens (-), and underscores (\_). This name is used in MaxCompute SQL, PyODPS, and MaxFrame development.
    
    **Image Type**
    
    Required. The type of the ACR image. Only ACR Enterprise Edition images are supported.
    
    **Enterprise Edition Image Instance**
    
    Required. Select the Enterprise Edition image instance that you created in ACR.
    
    **Image Namespace**
    
    Required. Select the Enterprise Edition image namespace that you created in ACR.
    
    **Image Repository**
    
    Required. Select the Enterprise Edition image repository that you created in ACR.
    
    **Image Version**
    
    Required. Select the image version that you uploaded to ACR.
    
    **Image Description**
    
    Optional. Add a description for the image.
    
6.  Click **OK**. The custom image is created and added to the custom image list.
    

## Step 5: Use the custom image

After registering the image, reference it in MaxCompute SQL UDFs, PyODPS, or MaxFrame jobs.

**Important**

Each development job can specify only one image. Otherwise, image conflicts may occur.

### UDF development

Specify the image and Python version at the SQL session level using flags:

```
set odps.sql.python.version=cp37;
set odps.session.image = <image_name>;
```

### PyODPS development

Specify the image using the `image` parameter of the `execute` or `persist` method:

```
image='<image_name>'
```

**Note**

To reference an image in PyODPS development, upgrade PyODPS to version 0.11.5 or later.

### MaxFrame development

Specify the image for the current job through the configuration settings:

```
config.options.sql.settings = {
    "odps.session.image": "<image_name>"
}
```
