APIG Ingress uses a cloud-native API gateway to expose internal cluster services for user access.

**Important**

For security reasons, APIG Ingress does not expose services in the kube-system namespace.

## **Prerequisites**

-   You have [created an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) that runs Kubernetes V1.18 or later.
    
-   You have [granted permissions to APIG Controller](/help/en/api-gateway/cloud-native-api-gateway/user-guide/authorize-for-apig-controller).
    

## **Install APIG Controller**

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the page that appears, enter `APIG` in the search box, and click **Install** on the **APIG Controller** component card.
    
4.  In the **Install Component APIG Controller** dialog box, configure the parameters and click **OK**.
    
    -   **Create**:
        
        A pay-as-you-go cloud-native API gateway instance with the apig.small.x1 specification is automatically created.
        
        **Important**
        
        -   When you select **Create**, the component creates a new ApigConfig resource and a cloud-native API gateway instance by default. The lifecycle of the ApigConfig resource is bound to that of the cloud-native API gateway instance. Deleting the ApigConfig resource also triggers a cascade delete of the corresponding cloud-native API gateway instance. Therefore, do not delete the ApigConfig resource unless it is necessary.
            
        -   If an IngressClass resource named apig already exists in the cluster, the ApigConfig resource and the cloud-native API gateway instance are not automatically created.
            
        
    -   **Select Existing VPC**:
        
        Select a pay-as-you-go cloud-native API gateway instance from the list. The instance must be in the same VPC as the container cluster and must not be associated with other clusters.
        
    
    > If a message indicating a prerequisites check failure appears during the component installation, [grant permissions to APIG Controller](/help/en/api-gateway/cloud-native-api-gateway/user-guide/authorize-for-apig-controller).
    
5.  After the component is installed, an ApigConfig resource named `apig-controller-pro-{clusterid}` appears in the cluster. Log on to the [Cloud-native API Gateway console](https://apignew.console.alibabacloud.com/). In the corresponding region, a cloud-native gateway instance named `apig-controller-pro-{clusterid}` appears.
    

## **Create a sample application**

1.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workloads** > **Deployments**.
    
2.  On the **Deployments** page, click **Create from YAML**. For example, use the following YAML sample to deploy a Deployment named `httpbin` and a Service named `httpbin`.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: httpbin
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: httpbin
      template:
        metadata:
          labels:
            app: httpbin
            version: v1
        spec:
          containers:
            - image: registry.cn-hangzhou.aliyuncs.com/mse-ingress/go-httpbin
              args:
                - "--version=v1"
              imagePullPolicy: Always
              name: httpbin
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: httpbin
      namespace: default
    spec:
      ports:
        - port: 8080
          protocol: TCP
      selector:
        app: httpbin
      type: ClusterIP
    ```
    
3.  In the dialog box that appears, click **View** and confirm that the pod status is `Running`.
    

## **Configure the APIG Ingress**

1.  On the **Ingresses** page, click **Create Ingress**.
    
2.  In the **Create Ingress** dialog box, set **Gateway Type** to **APIG Ingress** and **Rule** to **Prefix (Prefix-based Match)**. Set **Path** to `/` to forward requests to the `httpbin` service. Then, click **OK**.
    
3.  On the **Ingresses** page, find the endpoint of the new Ingress in the **Endpoint** column. Use a browser, CMD, or another command-line interface to access `ENDPOINT_DOMAIN_NAME/version` or `GATEWAY_PUBLIC_IP/version` to test the service. If the response is `version: v1`, the Ingress is configured correctly.
    
4.  Log on to the [Cloud-native API Gateway console](https://apig.console.alibabacloud.com/#/overview). In the corresponding cloud-native API gateway instance, an API whose name contains `{gwid}-ingress` appears.
    

## **Reference**

For an overview of APIG Ingress and how it works, see [APIG Ingress management](/help/en/api-gateway/cloud-native-api-gateway/user-guide/ingress-managementapig-ngress-management/).
