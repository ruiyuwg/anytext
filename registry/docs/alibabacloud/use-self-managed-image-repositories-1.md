When you pull an image from a self-managed image repository, the image may fail to be pulled due to different protocols or due to certificate authentication failures. This topic describes how to pull an image from a self-managed image repository to create a pod or an ImageCache if the self-managed image repository uses the HTTP protocol and a self-signed certificate.

## Description

When you pull an image from a self-managed image repository, an alert event named ErrImagePull may be triggered, and the image cannot be pulled. The following table describes the causes for and solutions to the problem on the premise that the network between Elastic Container Instance and the image repository is connected.

**Scenario**

**Cause**

**Solution**

The self-managed image repository uses the HTTP protocol.

By default, Elastic Container Instance pulls images over HTTPS. Using different protocols causes image pull failures.

Configure Elastic Container Instance to use the HTTP protocol to interact with the image repository.

The self-managed image repository uses the HTTPS protocol, but it uses a self-signed certificate.

The self-managed image repository uses a self-signed certificate. This causes a certificate authentication failure when you pull images from the repository. As a result, the images cannot be pulled.

Configure to skip certificate authentication.

## **Configurations**

If a self-managed image repository uses the HTTP protocol or a self-signed certificate when you pull an image from the image repository, you must configure annotations to prevent image pull failures. The following table describes the annotations.

**Annotation**

**Example value**

**Description**

k8s.aliyun.com/plain-http-registry

"harbor\*\*\*.pre.com,192.168.XX.XX:5000,reg\*\*\*.test.com:80"

The address of the self-managed image repository.

When you pull an image from a self-managed image repository that uses the HTTP protocol, you must specify this annotation. This way, Elastic Container Instance uses the HTTP protocol to pull the image. This prevents image pull failures due to different protocols.

k8s.aliyun.com/insecure-registry

"harbor\*\*\*.pre.com,192.168.XX.XX:5000,reg\*\*\*.test.com:80"

The address of the self-managed image repository.

When you pull an image from a self-managed image repository that uses a self-signed certificate, you must specify this annotation to skip certificate authentication. This prevents image pull failures arising from certificate authentication failures.

**Note**

-   If you want to pull multiple container containers from different image repositories, you can specify multiple addresses of image repositories. Separate multiple addresses with commas (,). Example: `harbor***.pre.com,192.168.XX.XX`.
    
-   If the image repository address contains a port number, you must specify the address with its port number. For example, if the image repository address is `192.168.XX.XX:5000/nginx:latest`, set the parameter to `192.168.XX.XX:5000`.
    

## **Configuration examples**

### Pull an image from a self-managed image repository to create a pod

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

-   Example 1: A self-managed image repository uses the HTTP protocol.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 4
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          annotations:
            k8s.aliyun.com/plain-http-registry: "192.168.XX.XX:5000" # Specifies the address of the self-managed image repository to pull an image over the HTTP protocol.
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
        spec:
          containers:
          - name: nginx
            image: 192.168.XX.XX:5000/test/nginx:latest
    ```
    
-   Example 2: A self-managed image repository uses a self-signed certificate.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      replicas: 4
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          name: nginx-test
          annotations:
            k8s.aliyun.com/insecure-registry: "harbor***.pre.com" # Specifies the address of the self-managed image repository to skip certificate authentication when the system pulls images from the self-managed image repository.
          labels:
            app: nginx
            alibabacloud.com/eci: "true" 
        spec:
          containers:
          - name: nginx
            image: harbor***.pre.com/test/nginx:latest
    ```
    

### Pull an image from a self-managed image repository to create an ImageCache

-   Example 1: A self-managed image repository uses the HTTP protocol.
    
    ```
    apiVersion: eci.alibabacloud.com/v1
    kind: ImageCache
    metadata:
      name: imagecache-sample
      annotations:
        k8s.aliyun.com/plain-http-registry: "192.168.XX.XX:5000"  # Specifies the address of the self-managed image repository to pull an image over the HTTP protocol.
    spec:
      images:
      - 192.168.XX.XX:5000/test/nginx:latest
      imagePullSecrets:
      - default:secret1
      - default:secret2
      - kube-system:secret3
      imageCacheSize:
       25
      retentionDays:
       7
    ```
    
-   Example 2: A self-managed image repository uses a self-signed certificate.
    
    ```
    apiVersion: eci.alibabacloud.com/v1
    kind: ImageCache
    metadata:
      name: imagecache-sample
      annotations:
        k8s.aliyun.com/insecure-registry: "harbor***.pre.com"  # Specifies the address of the self-managed image repository to skip certificate authentication when the system pulls images from the self-managed image repository.
    spec:
      images:
      - harbor***.pre.com/test/nginx:latest
      imagePullSecrets:
      - default:secret1
      - default:secret2
      - kube-system:secret3
      imageCacheSize:
       25
      retentionDays:
       7
    ```
