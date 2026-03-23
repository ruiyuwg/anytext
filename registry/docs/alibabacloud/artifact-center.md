The cloud-native artifact center is released by Alibaba Cloud Container Registry. It provides you with secure and trusted base container images that are developed by Alibaba Cloud and OpenAnolis. The base images support multiple system architectures and include base OS images, base language images, and AI- and big data-related images that can be used in application containerization. The base images make your business containerization process more efficient and secure.

## Features of artifacts

### Secure and trusted

Container images in the artifact center are built based on Anolis OS and Alibaba Cloud Linux (Alinux). Anolis OS is developed by OpenAnolis and compatible with Red Hat Enterprise Linux (RHEL) and CentOS. Alinux is an Anolis OS-based Linux distribution developed by Alibaba Cloud. The Alibaba Cloud OS team and OpenAnolis fix Common Vulnerabilities and Exposures (CVE) in images on a regular basis. This ensures the security of container business from software supply chains.

### Convenient

The Alibaba Cloud cloud-native artifact center is built based on Container Registry Enterprise Edition instances. The artifact center supports secure hosting and efficient distribution of cloud-native artifacts, such as container images and Helm charts, that comply with Open Container Initiative (OCI) standards. The artifact center allows artifacts to be distributed to 1,000 nodes at the same time. This ensures user experience when a large number of images are pulled. If your container images are also stored on a Container Registry Enterprise Edition instance, you can use the subscription feature to subscribe to the images in the artifact center. The image tags that meet the subscription rules are automatically synchronized to the destination repository of the Container Registry Enterprise Edition instance.

## Maintenance of artifacts

-   Alibaba Cloud: Alibaba Cloud ensures that tags of official container images are updated and the images are fixed at the earliest opportunity. You can [Submit Ticket](https://smartservice.console.alibabacloud.com/console.htm) to obtain technical support from Alibaba Cloud.
    
-   OpenAnolis: OpenAnolis ensures that tags of OpenAnolis images are updated and the images are fixed at the earliest opportunity. If you have any questions, you can contact OpenAnolis. Alibaba Cloud can help you consult with OpenAnolis in the DingTalk group 44701621.
    

## **Procedure**

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Artifact Center**.
    
4.  On the **Artifact Center** page, you can configure **Repository Type**, **Source**, **Operating System**, **Architecture**, or specify **Repository Name** to find the image that you want to manage.
    

## Recommended images

### Alibaba Cloud Linux 2/3

Alinux is an Anolis OS-based Linux distribution developed by Alibaba Cloud. Alinux is compatible with the RHEL and CentOS ecosystems and provides a secure, stable, and customized runtime environment for cloud-based applications. User-mode software packages in Alinux 2 and Alinux 3 images are compatible with the latest CentOS version. To ensure system security and the integrity and security of container images, Alibaba Cloud fixes software defects and patches CVE at the earliest opportunity.

### Dragonwell

Alibaba Dragonwell is an open source JDK developed by Alibaba. Dragonwell is downstream of OpenJDK and provides all the capabilities of OpenJDK. It is built and released through the AdoptOpenJDK community to provide a high-quality, tested, and verified JDK distribution. In addition to the existing features of OpenJDK, Alibaba Dragonwell also provides features such as JWarmup, Java Flight Recorder (JFR), and Wisp coroutine to improve the performance of Java applications.

### Golang/Nginx

Anolis OS-based Golang images and NGINX images allow you to build container images out of the box. The basic application software packages of OpenAnolis, such as NGINX, are promptly updated and patched to ensure the integrity and security of container images.
