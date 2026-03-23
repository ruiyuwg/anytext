Image migration and synchronization are required in Kubernetes clusters. You can use image-syncer to migrate and synchronize multiple images from self-managed image repositories to Alibaba Cloud Container Registry (ACR) at the same time. This topic describes how to use image-syncer to migrate container images.

## Background information

If the number of images is small, you can run the docker pull and docker push commands to migrate the images from Kubernetes workloads to Container Service for Kubernetes (ACK). If you run the commands to migrate more than a hundred images or an image repository that stores TB-level data, the migration process requires a long period of time to complete and may cause data loss. Compared with Kubernetes clusters created and maintained by other cloud providers, ACK is superior in terms of service costs, maintenance expenses, ease-of-use, and long-term stability. An increasing number of cloud providers want to migrate their Kubernetes workloads to ACK. To resolve large-scale image migration issues, the open source tool image-syncer developed by Alibaba Cloud provides the capability of image synchronous replication, which helps cloud service providers migrate images. The maximum image repository capacity is greater than 3 TB. The server that runs image-syncer can make full use of the server bandwidth, and no requirement exists for the disk capacity of the server.

## image-syncer overview

Image migration and synchronization between image repositories are required to migrate applications from a self-managed Kubernetes cluster to an ACK cluster. The traditional image synchronization method uses a script that contains the `docker pull` or `docker push` command and has the following limits:

-   This method relies on disk storage, requires a long period of time to complete, and makes large-scale image migration difficult.
    
-   The Docker daemon is required, which limits the number of images that can be concurrently pulled or pushed.
    
-   HTTP API operations are required to implement some features. As a result, you must write a complex synchronization script.
    

image-syncer is an easy-to-use tool for migrating or synchronizing a large number of images at the same time. You can use image-syncer to synchronize Docker images from or to almost all image repository services based on Docker Registry V2, such as ACR, Docker Hub, Quay.io, and Harbor. This tool is used to migrate TB-level images in production environments. For more information, see [image-syncer](https://github.com/AliyunContainerService/image-syncer?spm=a2c6h.12873639.0.0.66b165a8HrkbnA).

## Features

image-syncer has the following features:

-   Synchronizes images from multiple source image repositories to multiple destination image repositories, including Docker Hub, Quay.io, Alibaba Cloud Container Registry, and Harbor.
    
-   Supports Docker image repository services based on Docker Registry V2.
    
-   Synchronizes images by using only memory and network resources. Images are not stored on the disks of the server on which the destination image repository resides. This improves the synchronization efficiency.
    
-   Supports incremental synchronization. Synchronized Images are not resynchronized.
    
-   Supports concurrent synchronization. You can modify the number of images that can be concurrently pulled or pushed in the configuration file.
    
-   Automatically retries failed synchronization tasks to resolve most image synchronization issues caused by network jitters.
    
-   Programs such as the Docker daemon are not required. You need to ensure that the runtime environment is connected to the registry network that needs to be synchronized.
    

You can use the image-syncer tool to migrate, copy, and perform incremental synchronization of images from an image repository. image-syncer has low hardware resource requirements. image-syncer counts the number of images that fail to be synchronized when synchronization ends and provides detailed logs to help you identify issues.

## Preparations

To use image-syncer, prepare a configuration file. The following code block shows an example of the configuration file:

```
{
    "auth": {                   // This field specifies the authentication information. Each object consists of a username and a password that are required to access a registry. In most cases, image-syncer must have permissions to pull images from and access tags in the source repository. 
                                
                                // image-syncer must have permissions to push images to and create repositories in the destination registry. If no authentication information is provided for a registry, image-syncer accesses the registry in anonymous mode. 

        "quay.io": {            // The URL of the registry, which must be the same as the URL of the registry in image URLs. 
            "username": "xxx",               // Optional. The username. 
            "password": "xxxxxxxxx",         // Optional. The password. 
            "insecure": true                 // Optional. Specifies whether the repository is accessed by using HTTP. Default value: false. Only image-syncer of V1.0.1 and later support this parameter. 
        },
        "registry.cn-beijing.aliyuncs.com": {
            "username": "xxx",
            "password": "xxxxxxxxx"
        },
        "registry.hub.docker.com": {
            "username": "xxx",
            "password": "xxxxxxxxxx"
        }
    },
    "images": {
        // The field that describes image synchronization rules. Each rule is a key-value pair. The key specifies the URL of the source repository and the value specifies the URL of the destination repository. 
        // You cannot synchronize an entire namespace or registry based on one rule. You can synchronize only one repository based on one rule. 
        // The URLs of the source and destination repositories are in the format of registry/namespace/repository:tag, which is similar to the image URL format used in the docker pull or docker push command. 
        // The URL of the source repository must contain registry/namespace/repository. If the URL of the destination repository is not an empty string, it must also contain registry/namespace/repository. 
        // The URL of the source repository cannot be an empty string. To synchronize images from a source repository to multiple destination repositories, you must configure multiple rules. 
        // The name and tags of the destination repository can be different from those of the source repository. In this case, the image synchronization rule works in the same way as the combination of the docker pull, docker tag, and docker push commands. 
        "quay.io/coreos/kube-rbac-proxy": "quay.io/ruohe/kube-rbac-proxy",
        "xxxx":"xxxxx",
        "xxx/xxx/xx:tag1,tag2,tag3":"xxx/xxx/xx"
        // If the URL of the source repository does not contain tags, all images in the source repository are synchronized to the destination repository with the original tags. In this case, the URL of the destination repository cannot contain tags. 
        // If the URL of source repository contains only one tag, only images that has this tag in the source repository are synchronized to the destination repository. If the URL of the destination repository does not contain a tag, synchronized images keep the original tag. 
        // If the URL of the source repository contains multiple tags that are separated with commas (,), such as "a/b/c:1,2,3", the URL of the destination repository cannot contain tags. Synchronized images keep the original tags. 
        // If the URL of the destination repository is an empty string, images are synchronized to a repository that has the same name and tags in the default namespace of the default registry. The default registry and namespace can be set through command parameters or environment variables. 
    }     
}
```

## Example

[Synchronize images from a self-managed Harbor project to Container Registry Enterprise Edition](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/use-cases/synchronous-mirroring-from-self-built-harbor-to-acr-enterprise-edition#task-2356977)
