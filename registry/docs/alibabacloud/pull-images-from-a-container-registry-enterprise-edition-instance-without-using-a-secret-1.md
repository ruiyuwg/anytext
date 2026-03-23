Elastic Container Instance allows you to pull images from Alibaba Cloud Container Registry instances without using Secrets to improve efficiency and security of image pulling. This topic describes how to pull images from a Container Registry instance without using a Secret.

## **Background information**

Container Registry provides Container Registry Personal Edition instances and Container Registry Enterprise Edition instances. Container Registry Enterprise Edition is an enterprise-grade platform designed to manage the lifecycle of cloud native application artifacts, including container images, Helm charts, and Open Container Initiative (OCI) artifacts. It is suitable for large-scale business deployment scenarios and helps enterprises reduce the delivery complexity. For more information, see [What is Container Registry?](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)

When you create an elastic container instance or an image cache, if the image you want to pull is an image in a Container Registry instance, you can configure to pull the image without using a secret to simplify the process, improve efficiency, and prevent the risk of secret leaks.

**Note**

You cannot pull images (for example, Docker images) that are not in Container Registry instances without using secrets.

## **Prerequisites**

Before you configure secret-free image pulling for resources such as elastic container instances, make sure that you have completed the following operations:

1.  A Container Registry instance is created, and related configurations such as image repositories and images are completed for the instance.
    
    -   For more information about how to configure a Container Registry Personal Edition instance, see [Use a Container Registry Personal Edition instance to push and pull images](/help/en/acr/user-guide/use-a-container-registry-personal-edition-instance-to-push-and-pull-images).
        
    -   For more information about how to configure a Container Registry Enterprise Edition instance, see [Use a Container Registry Enterprise Edition instance to push and pull images](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images).
        
2.  If the Container Registry instance is an Enterprise Edition instance, secret-free access to the instance is configured.
    
    By default, a newly created Container Registry Enterprise Edition instance is disconnected from all networks. You must configure access control lists (ACLs) to allow access to the instance over the Internet or virtual private clouds (VPCs).
    
    -   Over the Internet: After you enable Internet access for an Enterprise Edition instance, you can access images in the Enterprise Edition instance across regions by using public endpoints of the Enterprise Edition instance. For more information, see [Enable Internet access](/help/en/acr/user-guide/configure-access-over-the-internet#task484).
        
    -   Over a VPC: To access a Container Enterprise Edition instance over a VPC, you must enable relevant authorization by using the service-linked role AliyunServiceRoleForContainerRegistryAccessCustomerPrivateZone. For more information, see [Configure a VPC ACL.](/help/en/acr/user-guide/configure-access-over-vpcs#task1305)
        

## **Configuration description**

The following table describes the scenarios in which images can be pulled from Container Registry instances without using secrets.

**The resource to be created such as an elastic container instance and the Container Registry instance are in the same account**

**Edition of the Container Registry instance**

**Secret-free image pulling**

Yes

-   Personal Edition
    
-   Enterprise Edition (use a default domain name)
    

By default, secret-free image pulling is enabled. You can configure a RAM role to limit the scope of Container Registry instances that support secret-free image pulling.

Yes

Enterprise Edition (use a custom domain name)

Secret-free image pulling cannot be enabled by default. You must specify Container Registry instances that support secret-free image pulling.

No

-   Personal Edition
    
-   Enterprise Edition
    

Secret-free image pulling cannot be enabled by default. You must configure a RAM role to implement secret-free image pulling.

Select one of the following configuration methods based on your accounts and Container Registry instance.

### Specify a RAM role to limit the scope of Container Registry instances that support Secret-free image pulling

If the resource to be created such as an elastic container instance and the Container Registry instance belong to the same Alibaba Cloud account, and the Container Registry instance is an Enterprise Edition instance that uses a default domain name or is a Personal Edition instance, secret-free image pulling is enabled for the Container Registry instance by default. In this case, you can configure a RAM role based on your business requirements to limit the scope of Container Registry instances that support secret-free image pulling. For example, you can specify only one Container Registry instance that supports secret-free image pulling.

**Note**

By default, Elastic Container Instance uses the service-linked role AliyunServiceRoleForECI to obtain access to other Alibaba Cloud services that are required to create Elastic Container Instance resources. AliyunServiceRoleForECI has the permission to pull images from Container Registry instances. The preceding Container Registry instances include all Enterprise Edition instances that use default domain names or all Personal Edition instances in the same Alibaba Cloud account as the Elastic Container Instance resource. Fine-grained permission control cannot be implemented by using the service-linked role.

Procedure:

#### **Step 1: Create RAM roles and grant permissions to the RAM roles**

1.  Create a RAM role for a trusted Alibaba Cloud service. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).
    
    Take note of the following parameters:
    
    -   Select Trusted Entity: Alibaba Cloud Service.
        
    -   Role Type: Normal Service Role.
        
    -   RAM Role Name: Example: acr-test.
        
    -   Select Trusted Service: ECI.
        
2.  Create a custom permission policy. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
    
    The following example shows the content of a policy, which indicates that only images in the specified Container Registry instance can be pulled. For more information about how to write a policy, see [Policy elements](/help/en/ram/policy-elements).
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "cr:Get*",
                    "cr:List*"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "cr:Pull*"
                ],
                "Resource": [
                    "acs:cr:cn-hangzhou:1609982529******:instance/cri-nwj395hgf6f3****"
                ]
            }
        ]
    }
    ```
    
3.  Attach the custom policy to the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
4.  Find the acr-test role that you created. Click the role name to go to the details page. Verify the permissions and obtain the Alibaba Cloud Resource Name (ARN) of the RAM role.
    
    ![ACR-RAM0.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2019653071/p693429.png)
    

#### Step 2: Specify the RAM role that you created in Step 1 to create a resource

When you create an Elastic Container Instance pod or an image cache, you can add the `k8s.aliyun.com/acr-service-arns` annotation to specify the RAM role that is used to create the resource.

The following YAML file shows how to add the annotation to create a pod:

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:                  
        k8s.aliyun.com/acr-service-arns: "acs:ram::1609982529******:role/acr-test" # Specifies the RAM role that is used to create the resource.
    spec:
      containers:
      - name: nginx
        image: test****-registry.cn-hangzhou.cr.aliyuncs.com/eci_test/nginx:1.0   # Specifies an image in a Container Registry instance from which the RAM role is allowed to pull images.
        ports:
        - containerPort: 80
```

### Specify Container Registry Enterprise Edition instances that support Secret-free image pulling

If the Container Registry Enterprise Edition instance and the pod to be created belong to the same Alibaba Cloud account and the Enterprise Edition instances use custom domain names, you must specify the Enterprise Edition instances that support Secret-free image pulling. To specify the Enterprise Edition instances, you can add the `k8s.aliyun.com/acr-instance-ids` annotation to specify the IDs of the Enterprise Edition instances.

**Note**

Container Registry Enterprise Edition instances can be used across regions. You can specify an Enterprise Edition instance that resides in a region different from the region of the pod. In this case, you must prefix the region ID to the ID of the Enterprise Edition instance. Example: `cn-beijing:cri-j36zhodptmyq****`.

#### **Create a pod**

When you create a pod, you can add the `k8s.aliyun.com/acr-instance-ids` annotation to the metadata section of the pod to specify Container Registry instances.

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Example:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/acr-instance-ids: "cri-j36zhodptmyq****"      # Specifies IDs of Container Registry instances.
    spec:
      containers:
      - name: nginx
        image: test****-registry.example.com/eci_test/nginx:1.0   # Specifies an image in a Container Registry Enterprise Edition instance that uses a custom domain name.
        ports:
        - containerPort: 80
```

#### **Create an image cache**

When you create an image cache, you can add the `k8s.aliyun.com/acr-instance-ids` annotation to the metadata section of the image cache to specify Container Registry instances. Example:

```
apiVersion: eci.alibabacloud.com/v1
kind: ImageCache
metadata:
  name: imagecache-sample
  annotations:
    k8s.aliyun.com/acr-instance-ids: "cri-j36zhodptmyq****" # Specifies IDs of Container Registry instances.
spec:
  images: 
  - test****-registry.example.com/eci_test/nginx:1.0   # Specifies an image in a Container Registry Enterprise Edition instance that uses a custom domain name.
  imagePullSecrets:
  - default:secret1
  - default:secret2
  - kube-system:secret3
  imageCacheSize:
   25
  retentionDays:
   7
```

### Configure image pulling across accounts by granting permissions to RAM roles

If the Container Registry instance and the pod to be created belong to the different Alibaba Cloud accounts, you must configure RAM roles for the two accounts and grant permissions to the RAM roles to implement Secret-free image pulling.

Procedure:

#### **Step 1: Create RAM roles and grant permissions to the RAM roles**

1.  Create a RAM role in Account A to which the resource to be created such as an elastic container instance belongs and grant permissions to the RAM role.
    
    1.  Create a RAM role for a trusted Alibaba Cloud service. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).
        
        Take note of the following parameters:
        
        -   Select Trusted Entity: Alibaba Cloud Service.
            
        -   Role Type: Normal Service Role.
            
        -   RAM Role Name: example: role-assume.
            
        -   Select Trusted Service: ECI.
            
    2.  Grant the role-assume role the permission to call the AssumeRole API operation of Security Token Service (STS). For more information, see the "Method 2: Grant permissions to a RAM role by clicking Input and Attach on the Roles page" section of the [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#section-6hi-77f-ei6) topic.
        
        Set the policy type to system policy, and the policy name to **AliyunSTSAssumeRoleAccess**.
        
    3.  Find the role-assume role that you created. Click the role name to go to the details page. Verify the permissions and the trust policy, and obtain the ARN of role-assume.
        
        -   Permissions and the ARN
            
            ![免密拉取ACR-RAM1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3019653071/p692464.png)
            
        -   The trust policy
            
            ![免密拉取ACR-RAM2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1424482961/p692465.png)
            
2.  Create a RAM role in Account B to which the Container Registry instance belongs and grant permissions to the RAM role.
    
    1.  Create a RAM role for a trusted Alibaba Cloud account. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).
        
        Take note of the following parameters:
        
        -   Select Trusted Entity: Alibaba Cloud Account.
            
        -   RAM Role Name: Example: role-acr.
            
        -   Select Trusted Alibaba Cloud Account: Other Alibaba Cloud Account. Enter Account A to which the resource to be created such as the elastic container instance belongs.
            
    2.  Grant the role-acr role the permission to pull images from Container Registry instances. For more information, see the "Method 2: Grant permissions to a RAM role by clicking Input and Attach on the Roles page" section of the [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#section-6hi-77f-ei6) topic.
        
        Set the policy type to system policy, and the policy name to **AliyunContainerRegistryFullAccess**.
        
    3.  Edit the trust policy to make role-acr trusted by role-assume. For more information, see [Edit the trust policy of a RAM role](/help/en/ram/user-guide/edit-the-trust-policy-of-a-ram-role).
        
        By default, the role-acr role can be assumed by all RAM users and RAM roles in Account A. We recommend that you edit the trust policy to grant permissions only to necessary RAM users and RAM roles in Account A.
        
        In the `Principal` element, change the value of the `RAM` field to the ARN of role-assume. This indicates that the role-acr role can only be assumed by role-assume. Example:
        
        ```
        "Principal": {
        	"RAM": [
        		"acs:ram::1609982529******:role/role-assume"
        	]
        }
        ```
        
    4.  Verify the permissions and the trust policy and obtain the ARN of role-acr.
        
        -   Permissions and the ARN
            
            ![免密拉取ACR-RAM3.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1424482961/p692850.png)
            
        -   The trust policy
            
            ![免密拉取ACR-RAM4.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1424482961/p692861.png)
            

#### Step 2: Specify the RAM roles that you created in Step 1 to create a resource

When you create a pod or an image cache, you can add an annotation to specify a Container Registry instance in an Alibaba Cloud account different from the account of the resource to be created to pull images. Take note of the following items:

-   If the Container Registry instance and the resource to be created belong to different Alibaba Cloud accounts, you must add the `k8s.aliyun.com/acr-service-arns` and `k8s.aliyun.com/acr-user-arns` annotations to specify the RAM roles for permission configurations.
    
    -   k8s.aliyun.com/acr-service-arns: Specifies the Alibaba Cloud Resource Name (ARN) of the RAM role in the Alibaba Cloud account to which the Elastic Container Instance resource belongs.
        
    -   k8s.aliyun.com/acr-user-arns: Specifies the ARN of the RAM role in the Alibaba Cloud account to which the Container Registry instance belongs.
        
-   If the Container Registry instance is an Enterprise Edition instance that uses a custom domain name, you must add the `k8s.aliyun.com/acr-instance-ids` annotation to specify the Container Registry instances.
    
    **Note**
    
    Container Registry Enterprise Edition instances can be used across regions. You can specify an Enterprise Edition instance that resides in a region different from the region of the pod. In this case, you must prefix the region ID to the ID of the Enterprise Edition instance. Example: `cn-beijing:cri-j36zhodptmyq****`.
    

#### **Create a pod**

When you create a pod, you can add the following annotations to the metadata section of the pod to specify a Container Registry instance in another Alibaba Cloud account:

```
annotations:
    k8s.aliyun.com/acr-instance-ids: "cri-j36zhodptmyq****" 
    k8s.aliyun.com/acr-service-arns: "acs:ram::1609982529******:role/role-assume"
    k8s.aliyun.com/acr-user-arns: "acs:ram::1298452580******:role/role-acr"
```

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Sample YAML file.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx-test
      labels:
        app: nginx
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/acr-instance-ids: "cri-j36zhodptmyq****"                        
        k8s.aliyun.com/acr-service-arns: "acs:ram::1609982529******:role/role-assume"
        k8s.aliyun.com/acr-user-arns: "acs:ram::1298452580******:role/role-acr"
    spec:
      containers:
      - name: nginx
        image: test****-registry.example.com/eci_test/nginx:1.0   # Specifies an image in a Container Registry Enterprise Edition instance that uses a custom domain name.
        ports:
        - containerPort: 80
```

#### **Create an image cache**

When you create an image cache, you can add the following annotations to the metadata section of the image cache to specify Container Registry instances in another Alibaba Cloud account:

```
annotations:
    k8s.aliyun.com/acr-instance-ids: "cri-j36zhodptmyq****"
    k8s.aliyun.com/acr-service-arns: "acs:ram::1609982529******:role/role-assume"
    k8s.aliyun.com/acr-user-arns: "acs:ram::1298452580******:role/role-acr"
```

Sample YAML file.

```
apiVersion: eci.alibabacloud.com/v1
kind: ImageCache
metadata:
  name: imagecache-sample
  annotations:
    k8s.aliyun.com/acr-instance-ids: "cri-j36zhodptmyq****"
    k8s.aliyun.com/acr-service-arns: "acs:ram::1609982529******:role/role-assume"
    k8s.aliyun.com/acr-user-arns: "acs:ram::1298452580******:role/role-acr"
spec:
  images: 
  - test****-registry.example.com/eci_test/nginx:1.0   # Specifies an image in a Container Registry Enterprise Edition instance that uses a custom domain name.
  imagePullSecrets:
  - default:secret1
  - default:secret2
  - kube-system:secret3
  imageCacheSize:
   25
  retentionDays:
   7
```
