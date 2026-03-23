Alibaba Cloud provides official container (Docker) images based on Alibaba Cloud Linux. These images are regularly updated and maintained to include the latest OS features and security patches. Select an image version that meets your needs to build and deploy a containerized application on an Elastic Compute Service (ECS) instance. This topic describes how to pull, use, and delete Alibaba Cloud Linux container images in Docker.

## Create a Docker container from an Alibaba Cloud Linux image

1.  [Install and use Docker and Docker Compose](/help/en/ecs/user-guide/install-and-use-docker#section-gtl-cjs-ls2).
    
2.  Run the following command to pull an Alibaba Cloud Linux Docker image.
    
    ```
    sudo docker pull alibaba-cloud-linux-<image_version>-registry.<region_ID>.cr.aliyuncs.com/alinux<image_version>/alinux<image_version>:<TAG>
    ```
    
    -   `<image_version>`: The version of Alibaba Cloud Linux, such as `2` or `3`.
        
    -   `<region_ID>`: The ID of the image's region, such as `cn-hangzhou`.
        
    -   (Optional) `<TAG>`: The tag of the Docker image. If specified, Docker pulls the corresponding version. If omitted, Docker pulls the latest version.
        
    
    **Find image region and tag information**
    
    1.  Go to [Container Registry - Artifact Center](https://cr.console.alibabacloud.com/cn-hangzhou/instances/artifact).
        
    2.  Click **alinux2/alinux2** or **alinux3/alinux3** to view the Docker image tag information for Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3.
        
        For example, the following figure shows the details for an Alibaba Cloud Linux 3 Docker image. ① shows the image region, and ② shows the image tags.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5002910371/p740981.png)
        
    
    Sample commands:
    
    -   Pull the `220901.1` tag of the Alibaba Cloud Linux 3 Docker image in the `cn-hangzhou` region.
        
        ```
        sudo docker pull alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/alinux3:220901.1
        ```
        
    -   Pull the latest Alibaba Cloud Linux 2 Docker image in the `cn-hangzhou` region.
        
        ```
        sudo docker pull alibaba-cloud-linux-2-registry.cn-hangzhou.cr.aliyuncs.com/alinux2/alinux2
        ```
        
    
3.  Verify the image pull.
    
    ```
    sudo docker images
    ```
    
    The following sample output shows that the `220901.1` tag of the Alibaba Cloud Linux 3 Docker image and the latest Alibaba Cloud Linux 2 Docker image have been successfully pulled.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778531171/p741139.png)
    
4.  Create and enter a Docker container.
    
    ```
    sudo docker run -it alibaba-cloud-linux-<image_version>-registry.<region_ID>.cr.aliyuncs.com/alinux<image_version>/alinux<image_version>:<TAG> /bin/bash
    ```
    
    -   `<image_version>`: The version of Alibaba Cloud Linux, such as `2` or `3`.
        
    -   `<region_ID>`: The ID of the image's region, such as `cn-hangzhou`.
        
    -   (Optional) `<TAG>`: The tag of the Docker image. If specified, Docker pulls the corresponding version. If omitted, Docker pulls the latest version.
        
    
    Sample commands:
    
    -   Create a Docker container from the `220901.1` tag of the Alibaba Cloud Linux 3 image in the `cn-hangzhou` region.
        
        ```
        sudo docker run -it alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/alinux3:220901.1 /bin/bash
        ```
        
    -   Create a Docker container from the latest Alibaba Cloud Linux 2 image in the `cn-hangzhou` region.
        
        ```
        sudo docker run -it alibaba-cloud-linux-2-registry.cn-hangzhou.cr.aliyuncs.com/alinux2/alinux2 /bin/bash
        ```
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3388531171/p743704.png)
    
    **Note**
    
    -   After entering the container, you are at a shell prompt and can run commands.
        
    -   To exit the container, run the `exit` command.
        
    
5.  (Optional) Restart and enter the Docker container.
    
    Running the `exit` command stops the container. To use it again, you must restart and re-enter it.
    
    1.  Find the `CONTAINER ID` of the created container.
        
        ```
        sudo docker ps -a
        ```
        
        In the output, `CONTAINER ID` is the container's ID.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778531171/p741196.png)
        
    2.  Start the Docker container.
        
        ```
        sudo docker start <CONTAINER ID>
        ```
        
        Replace `<CONTAINER ID>` with the actual ID of your Docker container.
        
        After the container starts, you can run the `sudo docker ps` command to query running containers. In the following example, the Alibaba Cloud Linux 3 Docker container is running, confirming it started successfully.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778531171/p741122.png)
        
    3.  Enter the running Docker container.
        
        Replace `<CONTAINER ID>` with the actual ID of your Docker container.
        
        ```
        sudo docker exec -it <CONTAINER ID> /bin/bash
        ```
        
        The following output confirms you have re-entered the Alibaba Cloud Linux 3 Docker container.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778531171/p741186.png)
        

## Delete a Docker container and image

Delete unneeded containers and images to free up resources.

1.  Stop the Docker container.
    
    Replace `<CONTAINER ID>` with the actual ID of your Docker container.
    
    ```
    sudo docker stop <CONTAINER ID>
    ```
    
2.  Delete the Docker container.
    
    Replace `<CONTAINER ID>` with the actual ID of your Docker container.
    
    ```
    sudo docker rm <CONTAINER ID>
    ```
    
3.  View all Docker containers.
    
    ```
    sudo docker ps -a 
    ```
    
    The output in the following figure indicates that the container has been deleted.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8784974471/p941417.png)
    
4.  Find the image's repository name.
    
    ```
    sudo docker images
    ```
    
    In the output, the `REPOSITORY` column shows the name of the Docker image..
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778531171/p741677.png)
    
5.  Delete the Docker image.
    
    Replace `<REPOSITORY>` with the actual name of your image.
    
    ```
    sudo docker rmi <REPOSITORY>
    ```
    
    The output in the following figure confirms the Alibaba Cloud Linux 2 Docker image has been deleted.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0778531171/p741687.png)
    

## **References**

-   For more information about how to use Docker, see [Docker documentation](https://docs.docker.com/reference/).
    
-   For more complex deployments, you can use container orchestration tools like `docker-compose`. To simplify the management and distribution of your container images, consider using Alibaba Cloud's [Container Registry (ACR)](/help/en/acr/product-overview/what-is-container-registry).
