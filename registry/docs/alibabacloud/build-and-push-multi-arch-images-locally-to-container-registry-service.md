Deploying containers in the Arm architecture can save your deployment cost. However, you may need to build different images and set different image tags for the x86 and Arm architectures. This increases your maintenance cost. You can run the `docker buildx` command to build multi-arch images and run the `docker manifest` command to manage multi-arch images based on one tag.

## **Prerequisites**

-   A Container Registry Enterprise Edition instance is created. For more information, see [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance).
    
-   A Docker client is installed on your on-premises device. For more information, see [Install Docker](/help/en/ecs/user-guide/install-and-use-docker).
    

## **Build a multi-arch image from a Dockerfile**

1.  In this example, a [Java Maven](https://github.com/zlseu-edu/simple-java-maven-app?spm=a2c4g.11186623.0.0.395c6d98mOKMhq) project is used. Create a Dockerfile in a Java Maven project and add the following content to the Dockerfile.
    
    ```
    #First stage: complete build environment
    FROM maven:3.5.0-jdk-8-alpine AS builder
    
    # add pom.xml and source code
    ADD ./pom.xml pom.xml
    ADD ./src src/
    
    # package jar
    RUN mvn clean package
    
    # Second stage: minimal runtime environment
    From openjdk:8-jre-alpine
    
    # copy jar from the first stage
    COPY --from=builder target/my-app-1.0-SNAPSHOT.jar my-app-1.0-SNAPSHOT.jar
    
    EXPOSE 8080
    
    CMD ["java", "-jar", "my-app-1.0-SNAPSHOT.jar"]
    ```
    
2.  Open the local terminal in the directory where the Java Maven project is located and run the following command:
    
    1.  Run the following command to disable the [Provenance attestations](https://docs.docker.com/build/attestations/slsa-provenance/) option of the docker buildx:
        
        ```
        export BUILDX_NO_DEFAULT_ATTESTATIONS=1
        ```
        
    2.  Run the following command to build a multi-arch image:
        
        ```
        docker buildx build . -t acr-test-registry.cn-hangzhou.cr.aliyuncs.com/test/test:multi  --platform linux/amd64,linux/arm64 --push
        ```
        
        After you run the command, container images for the Amd64 and Arm64 architectures are built on the on-premises device and pushed to the image repository.
        
    
    **Note**
    
    Before you run the docker push command to push images to an image repository, you must run the docker login command to log on to the image repository. Example of a docker login command: `docker login --username=xxx acr-test-registry.cn-hangzhou.cr.aliyuncs.com`.
    

## **Create a multi-arch image from existing images**

In this example, assume that you have two single-arch images and want to create a multi-arch image based on the single-arch images.

1.  Run the `docker tag` command to re-tag the uni-arch images, and push the uni-arch images to the Container Registry Enterprise Edition instance. For example, if your uni-arch images are an Arm64 NGINX image and an AMD64 NGINX image, run the following commands.
    
    ```
    docker tag nginx:arm64 acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:arm64
    docker push acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:arm64
    
    docker tag nginx:amd64 acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:amd64
    docker push acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:amd64
    ```
    
2.  Run the `docker manifest create` command to create a manifest list and merge the images in [step 1](#03eac2a03fz6y) into a multi-arch image.
    
    ```
    docker manifest create acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:multi \
     acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:arm64 \
     acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:amd64
    ```
    
3.  Run the `docker manifest push` to push the manifest list to the Container Registry Enterprise Edition instance.
    
    ```
    docker manifest push acr-test-registry.cn-hangzhou.cr.aliyuncs.com/multi-arch/nginx:multi
    ```
    

## **References**

You can also configure and run multi-arch image building tasks in the Container Registry console. For more information, see [Build container images for multiple architectures](/help/en/acr/user-guide/build-multi-schema-container-images).
