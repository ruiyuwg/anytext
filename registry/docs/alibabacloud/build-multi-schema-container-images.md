If you use Arm-based resources to deploy containers, you may need to separately build images and set tags for x86 and Arm architectures. This may increase your maintenance costs. You can configure multi-arch image building tasks in the Container Registry console to simplify this process. You can use one tag to manage images of multiple architectures.

## Prerequisites

-   A Container Registry Enterprise Edition instance is created. For more information, see [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance#task488).
    
-   The instance is bound to a source code hosting platform. For more information, see [Bind a source code hosting platform](/help/en/acr/user-guide/bind-a-source-code-hosting-platform#task-2038492).
    
-   Your projects can be created on the architectures for which you want to build images.
    

## Background information

-   If you select only one architecture, an image is built only for the architecture and pushed with the specified tag.
    
-   If you select multiple architectures, the images are built for each architecture and pushed to a specific image repository with the same tag. In this case, a client such as the Docker client and containerd pulls an image based on the architecture of the client from the remote image repository.
    

The following table describes the supported architectures.

**Operating system**

**Architecture**

**Supported**

Linux

amd64

Yes (Default)

Linux

arm64

Yes

Linux

arm/v7

Yes

Linux

arm/v6

Yes

Windows

amd64

No

## Step 1: Create a project

Create a project as the source code repository based on which the image is built. In this example, you can use the following sample Golang file and Dockerfile to create your project.

```
// Save the file and name the file hello.go.

package main
import (
        "fmt"
        "runtime"
)
func main() {
        fmt.Printf("Hello, %s!\n", runtime.GOARCH)
}
```

```
FROM golang:alpine AS builder
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go build -o hello hello.go
FROM alpine
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/hello .
CMD ["./hello"]
```

## Step 2: Create an image repository

Create an image repository and bind it to a code repository. All image buildings triggered by the code repository are pushed to the image repository.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Enterprise Edition instance, choose **Repository** > **Repositories**.
    
6.  On the **Repositories** page, click **Create Repository**.
7.  In the **Repository Info** step, configure the **Namespace**, **Repository Name**, **Repository Type**, **Tags**, **Accelerated Images**, **Summary**, and **Description** parameters. Then, click **Next**.
    
8.  In the **Code Source** step, configure **Code Source**, **Build Settings**, and **Build Rules**, and then click **Create Repository**.
    
    **Parameter**
    
    **Description**
    
    Code Source
    
    The code source.
    
    Build Settings
    
    -   Automatically Build Images When Code Changes: The building rule is automatically triggered when code is committed from a branch.
        
    -   Build With Servers Deployed Outside Chinese Mainland: Images are built on servers outside the Chinese mainland and then pushed to a repository in the specified region. If the Dockerfile used in your project must be downloaded from a site outside the Chinese mainland but the cross-border network connection is unstable, you can enable **Build With Servers Deployed Outside Chinese Mainland**.
        
    -   Build Without Cache: The system pulls the base image each time an image is built. If you select **Build Without Cache**, this may slow down the building process.
        
    
    On the **Repositories** page, click the created image repository. If **Build** is displayed in the left-side navigation pane of the repository management page, the image repository is bound to the source code repository.
    

## Step 3: Create an image building rule and select architectures

In this example, linux/amd64 and linux/arm64 are selected for the Build Architecture parameter when you configure the image building rule.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Enterprise Edition instance, choose **Repository** > **Repositories**.
    
6.  On the **Repositories** page, find the created image repository and click **Manage** in the **Actions** column.
    
7.  In the left-side navigation pane, click **Build**. In the **Build Rules** section, click **Add Build Rule**. In the **Build Information** step of the Add Build Rule wizard, configure parameters and then click **Next**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    Specify the type of the source code repository. Valid values: Branch and Tag.
    
    **Branch/Tag**
    
    Select or enter a branch or a tag. Regular expressions are supported. If you specify the release-(?<imageTag>\\w\*) regular expression, the system automatically builds an image of v1 when the source code in the release-v1 branch is updated. For more information about how to specify regular expressions, see [Appendix: Use regular expressions in named capturing groups](#78d070e06d5wi).
    
    **Note**
    
    After you specify regular expressions, images can be built only by the system. You cannot manually build images.
    
    **Dockerfile Directory**
    
    Specify the directory in which the Dockerfile resides. This is the subdirectory of the branch or tag directory. For example, if the branch directory is master/ and the Dockerfile is in the master/ directory, the value is master/Dockerfile.
    
    **Dockerfile Filename**
    
    Specify the name of the Dockerfile. The default name is Dockerfile.
    
8.  In the **Tag** step, configure parameters, click **Save**, and then click **Next**. The following table describes the parameters.
    
    **Note**
    
    Click **Add Configuration** to add image tags. You can add up to three image tags.
    
    **Parameter**
    
    **Description**
    
    **Image Tag**
    
    The tag of the image. Example: latest. You can enable named capturing groups. For example, if you specify a named capturing group for **Branch/Tag**, you can use the captured content.
    
    **Build Time**
    
    The time (UTC+8) when source code is pushed. Example: 20201015 or 202010151613.
    
    **Note**
    
    This parameter is optional. If you set this parameter, only the system can build images. You cannot manually build images.
    
    **Commit ID**
    
    The number of characters to be obtained from the commit ID of the most recently pushed code. By default, the first six characters are used. You can adjust the slider to change the number of characters.
    
    **Note**
    
    This parameter is optional. If you set this parameter, only the system can build images. You cannot manually build images.
    
9.  In the **Build Configurations** step, configure parameters and then click **Confirm**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Build Architecture**
    
    The architecture for which you want to build images. You can select multiple architectures. If you select multiple architectures, multiple container images for the architectures are built for each image tag.
    
    **Build Parameters**
    
    The runtime parameters of the image building. Each building parameter is a key-value pair that is case-sensitive. You can configure a maximum of 20 building parameters. You can set a building parameter to modify the environment variables in a Dockerfile and make the same Dockerfile show different status.
    
10.  Trigger the image building rule.
     
     You can use one of the following methods to trigger an image building rule:
     
     -   In the **Build Rules** section of the **Build** page, find the image building rule that you want to trigger and click **Build** in the **Actions** column.
         
     -   Submit code to the master branch of the source code repository to trigger the building rule.
         
     
     **Note**
     
     -   If you want to cancel an image building task that is triggered, in the **Build Log** section of the **Build** page, find the image building task and click **Cancel** in the **Actions** column.
         
     -   If you want to view an image building log, in the **Build Log** section of the **Build** page, find the image building task that is triggered and click **Log** in the **Actions** column.
         
     
     In the left-side navigation pane, click **Image Tag**. If the image that you created is displayed, the image is built.
     

## Step 4: Verify the results

1.  In the left-side navigation pane of the management page of the created image repository, click **Tags**. On the page that appears, view the images that are built.
    
    In this example, two images are displayed in the column of the **main** image tag. One image supports the Linux operating system and the AMD64 architecture, and the other image supports the Linux operating system and the ARM64 architecture.![多架构镜像](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0749779161/p268987.png)
    
2.  Verify that the images can be used on a machine with the Linux operating system and the AMD64 architecture and a machine with the Linux operating system and the ARM64 architecture.
    
    -   Run the following command on a machine whose operating system and architecture are Linux and AMD64.
        
        ```
        docker run --rm xxx-registry.cn-hangzhou.cr.aliyuncs.com/test/golang-test:main
        ```
        
        Expected output
        
        ```
        Hello, amd64!
        ```
        
    -   Run the following command on a machine whose operating system and architecture are Linux and ARM64.
        
        ```
        docker run --rm xxx-registry.cn-hangzhou.cr.aliyuncs.com/test/golang-test:main
        ```
        
        Expected output
        
        ```
        Hello, arm!
        ```
        
    
    The built images can be used by machines with different architectures.
    

## **Appendix:** Use regular expressions in named capturing groups

### **Named capturing groups**

A capturing group places the content that is matched in sub-expressions of a regular expression into the groups that are named with numeric numbers or explicit names. Then, you can reference the groups inside or outside the regular expression. Capturing groups can be classified into regular capturing groups and named capturing groups. This section describes named capture groups.

The typical format of a named capturing group:

```
(?<name>Expression)
```

You can use the following regular expression to convert _release-11-2-10_ into _11.2.10_:

```
release-(?<major>\d*)-(?<minor>\d*)-(?<version>\d*) 
```

When _release-11-2-10_ matches the regular expression, the matched content of the corresponding positions in the sub-expression is automatically placed into the groups named **major**, **minor** and **version**. Then, you can use the following template to generate the _11.2.10_ string.

```
${major}.${minor}.${version} 
```

## **References**

For information about building multi-arch container images on an on-premises device, see [Build and push a multi-arch image on an on-premises device to a Container Registry Enterprise Edition instance](/help/en/acr/use-cases/build-and-push-multi-arch-images-locally-to-container-registry-service).
