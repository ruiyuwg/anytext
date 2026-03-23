You can use the P2P acceleration feature in ACK Serverless cluster and Container Service for Kubernetes (ACK) clusters to accelerate image pulling and application deployment. This topic describes how to use the P2P acceleration feature in managed, dedicated, and serverless Kubernetes clusters of ACK.

## Prerequisites

-   A Contain Registry Enterprise Edition instance is created. The Container Registry Enterprise Edition instance must be of the Advanced Edition. For more information, see [Create a Container Registry Enterprise Edition instance](/help/en/acr/user-guide/create-a-container-registry-enterprise-edition-instance#task488).
    
-   A virtual private cloud (VPC) is configured. If you need the ACK cluster to access a Container Registry Enterprise Edition instance over a VPC. For more information, see [Configure a VPC ACL](/help/en/acr/user-guide/configure-access-over-vpcs#task1305). Access over the Internet is enabled and the IP address of the cluster is added to the whitelist if you need the ACK cluster to access a Container Registry Enterprise Edition instance over the Internet. For more information, see [Configure access over the Internet](/help/en/acr/user-guide/configure-access-over-the-internet#task484).
    

## Step 1: Grant read permissions on Container Registry resources

If the ACK cluster is a serverless Kubernetes cluster, you must grant read permissions on Container Registry resources to the P2P component.

**Note**

If the ACK cluster is a managed or dedicated Kubernetes cluster, you do not need to grant read permissions on Container Registry resources to the P2P component. By default, the permissions are granted.

1.  Create a RAM role.
    
    When you create the RAM role, set the **Role Type** parameter to **Normal Service Role** and the trusted service to Elastic Compute Service (ECS). For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#task-2448632).
    
2.  Grant permissions to the RAM role.
    
    Attach the AliyunContainerRegistryReadOnlyAccess policy to the RAM role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    

## Step 2: View the ID of the Container Registry Enterprise Edition instance

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
2.  In the top navigation bar, select a region.
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
5.  View the ID of the Container Registry instance in the upper-left corner of the **Overview** page.
    

## Step 3: Install the P2P component

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Marketplace** > **Marketplace**.
    
3.  On the **App Catalog** page, search for the ack-acr-acceleration-p2p component. After the ack-acr-acceleration-p2p component is found, click the card of the component.
    
4.  On the page that appears, click **Deploy**.
    
5.  In the **Deploy** wizard, select a cluster and namespace, and then click **Next**.
    
6.  In the **Parameters** step, set the registryInstances parameter to the Container Registry instance ID that you obtained in Step 2.
    
    If multiple Container Registry instances are used, separate the instance IDs with commas (,) when you set the registryInstances parameter.
    
    **Note**
    
    By default, the P2P component uses port 65001 on nodes. If port 65001 has been used by another component, change the port that is used by the P2P component based on your business requirements.
    
    ```
    p2p:
      ...
      # Port of P2P Agent in host network
      port: 65001
    
      # Id of ACR registry instances, support multi, e.g. "cri-xxx,cri-yyy"
      registryInstances: <ACR instance Id>
    ```
    
7.  **Optional:**Set the controller.ramRole parameter to the name of the RAM role that you created in Step 1.
    
    **Note**
    
    The controller.ramRole parameter is required only for ACK Serverless clusters. You can skip this step for other clusters.
    
    ```
    controller:
      ...
      # ACK Serverless cluster setting, in order to accessing ACR OpenAPI(Get*, List*) for ECS
      ramRole: <your ram role name>
    ```
    
8.  **Optional:**If you want to specify the upper limit of the total bandwidth for uploading and downloading by using the P2P component, set the ratelimit parameter. The default value is 512 MB/s. You can specify a value based on the bandwidth of nodes.
    
    ```
    p2p:
      # Total net rate limit (MBytes/s) for uploading and downloading
      ratelimit: "512M"
    ```
    
9.  In the **Deploy** pane, select a cluster and click **Create**.
    

## Step 4: Enable P2P acceleration

You can add the P2P acceleration label to workloads such as pods and Deployments to enable P2P acceleration for these workloads. You can also add the P2P acceleration label to a namespace in your ACK cluster. This way, P2P acceleration is enabled for all workloads that meet acceleration conditions in this namespace. You do not need to modify the YAML files of specific workloads to enable P2P acceleration. Select a method to add the P2P acceleration label based on your business requirements.

**Note**

The name of the P2P acceleration label is `k8s.aliyun.com/image-accelerate-mode` and the value is `p2p`.

-   Add the P2P acceleration label to a workload
    
    In this example, add the P2P acceleration label to a Deployment. Run the following command to add the label to a Deployment:
    
    ```
    kubectl edit deploy <Deployment name>
    ```
    
    Add the label `k8s.aliyun.com/image-accelerate-mode: p2p` to the YAML file of the Deployment.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test
      labels:
        app: nginx
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            # enable P2P
            k8s.aliyun.com/image-accelerate-mode: p2p
            app: nginx
        spec:
          # your ACR instacne image pull secret
          imagePullSecrets:
          - name: test-registry
          containers:
          # your ACR instacne image
          - image: test-registry-vpc.cn-hangzhou.cr.aliyuncs.com/docker-builder/nginx:latest
            name: test
            command: ["sleep", "3600"]
    ```
    
-   Add the P2P acceleration label to a namespace
    
    -   Add the P2P acceleration label to a namespace in the ACK console
        
        1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
            
        2.  In the left-side navigation pane, click **Clusters**.
            
        3.  On the **Clusters** page, find the cluster that you want to manage and click the cluster name or click **Details** in the **Actions** column.
            
        4.  In the left-side navigation pane, click **Namespaces and Quotas**.
            
        5.  On the **Namespace** page, find the namespace that you want to configure and click **Edit** in the **Actions** column.
            
        6.  In the **Label** section of the **Edit Namespace** dialog box, set the **Variable Key** parameter to `k8s.aliyun.com/image-accelerate-mode` and the **Variable Value** parameter to `p2p`, and click **OK****.**
            
    -   Add the P2P acceleration label to a namespace by using kubectl
        
        ```
        kubectl label namespaces <your-namespace> k8s.aliyun.com/image-accelerate-mode=p2p
        ```
        

## Verify P2P acceleration

After P2P acceleration is enabled for a pod, the P2P component automatically adds P2P-related information to the YAML file of the pod. The information includes P2P-related annotations, the address of the P2P-accelerated image, and the Secret for pulling the P2P-accelerated image.

**Important**

The only difference between the Secret that is used to pull a P2P-accelerated image and the Secret that is used to pull the original image is the domain name of the image repository. If the user information is invalid in the Secret for pulling the original image, the P2P-accelerated image also fails to be pulled.

Run the following command to view the YAML file of the pod:

```
kubectl get po <Pod name> -oyaml
```

The expected output:

```
apiVersion: v1
kind: Pod
metadata:
  annotations:
    # inject p2p-annotations automatically
    k8s.aliyun.com/image-accelerate-mode: p2p
    k8s.aliyun.com/p2p-config: '...'
spec:
  containers:
   # inject image to p2p endpoint
   - image: test-registry-vpc.distributed.cn-hangzhou.cr.aliyuncs.com:65001/docker-builder/nginx:latest
  imagePullSecrets:
  - name: test-registry
  # inject image pull secret for p2p endpoint
  - name: acr-credential-test-registry-p2p
```

If P2P-related annotations, the address of the P2P-accelerated image, and the Secret for pulling the P2P-accelerated image exist in the YAML file, P2P acceleration is enabled.
