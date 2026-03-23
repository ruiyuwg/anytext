As Higress Enterprise Edition gateways, Microservices Engine (MSE) Ingress gateways are compatible with NGINX Ingress gateways. Compared with the performance of open source self-managed Ingress gateways, the performance of MSE Ingress gateways is doubled. MSE Ingress gateways are certified as industry-leading Ingress gateways by the China Academy of Information and Communications Technology (CAICT) based on security maturity. MSE Ingress gateways provide the advantages of low cost, security protection, high integration, and high availability. This topic describes how to use MSE Ingress gateways to access services in Container Service for Kubernetes (ACK) clusters and Container Compute Service (ACS) clusters.

**Important**

For security purposes, MSE Ingress gateways cannot expose services in the kube-system namespace.

## **Prerequisites**

MSE Ingress Controller is installed in an ACK managed cluster, an ACK Serverless cluster, or an ACS cluster.

-   You are granted permissions to MSE Ingress Controller in your cluster. If your cluster is an ACK managed cluster or ACK Serverless cluster, click the [link](https://ram.console.alibabacloud.com/authorize?request=%7B%22template%22%3A%22MSE%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22SLRForMSE%22%7D%2C%7B%22missionId%22%3A%22RoleForCS%22%7D%5D%7D) to grant permissions. If your cluster is an ACS cluster, click the [link](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Facs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedMseRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedMseRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) to grant permissions.
    
-   A cluster of version V1.18 or later is created. For more information about how to create a cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb), [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2#task-e3c-311-ydb), or [Create an ACS cluster](/help/en/cs/user-guide/create-an-acs-cluster).
    
    **Note**
    
    If the version of your cluster is earlier than V1.18, upgrade the cluster. For more information about upgrade operations, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
    

## **Step 1: Install MSE Ingress Controller**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, enter `mse` in the search box, and click **Install** in the **MSE Ingress Controller** resource card.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7712169471/p963642.png)
    
4.  In the **Install MSE Ingress Controller** dialog box, configure the parameters and click **OK**.
    
    You can **create** a cloud-native gateway or **use an existing** cloud-native gateway.
    
    If you encounter precheck failures when installing the MSE Ingress controller, [authorize the MSE Ingress controller to access MSE](/help/en/ack/authorize-the-mse-ingress-controller-to-access-mse-1).
    
5.  After MSE Ingress Controller is installed, the system automatically creates an MseIngressConfig resource named `mse-ingress-premium-{clusterid}` and a cloud-native gateway named `mse-ingress-premium-{clusterid}`.
    
    You can go to the ACK console, and click the name of the cluster. In the left-side navigation pane, choose **Workloads** > **Deployments** > **Custom Resources**. On the **Resource Objects** tab of the Custom Resources page, enter `mse` in the search box in the **API Group** section, and click the search icon to query the gateway status in the `MseIngressConfig` resource description. If the `phase` changes to **Listening** after 3 to 5 minutes, the cloud-native gateway is created and is in the Running state. The gateway automatically listens to the Ingress resources whose IngressClass is mse in the cluster.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8337949471/p745348.png)
    
    In normal cases, the gateway status in MseIngressConfig changes in the following order: Pending > Running > Listening. Status description:
    
    -   Pending: The cloud-native gateway is being created. You must wait about 3 minutes.
        
    -   Running: The cloud-native gateway is created and is running.
        
    -   Listening: The cloud-native gateway is running and listens to Ingress resources in the cluster.
        
    -   Failed: The cloud-native gateway is in the invalid state. You can view Message in the Status field to identify the cause.
        
    
    **Important**
    
    -   When you create a cluster, an MseIngressConfig resource is automatically created during the installation of MSE Ingress Controller. The lifecycle of the MseIngressConfig resource is associated with the lifecycle of the MSE cloud-native gateway. If you delete an MseIngressConfig resource, the associated MSE cloud-native gateway instance is also deleted. Do not delete MseIngressConfig resources unless otherwise specified.
        
    -   If the IngressClass resource named mse already exists in the cluster before you install MSE Ingress Controller, an MSE cloud-native gateway and the associated MseIngressConfig resource are not automatically created during the installation of MSE Ingress Controller.
        
    
6.  Log on to the [MSE console](https://mse.console.alibabacloud.com/#/microgw). Check that a cloud-native gateway named `mse-ingress-premium-{clusterid}` is created in the region.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7712169471/p965615.png)
    

## **Step 2: Deploy a backend service**

1.  1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Ingresses**.
        
2.  On the **Deployments** page, click **Create from YAML**. For example, use the following YAML code to deploy a deployment named `httpbin` and a service named `httpbin`.
    
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
    ```
    

## **Step 3: Configure an MSE Ingress gateway**

1.  1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Ingresses**.
        
2.  On the **Ingresses** page, click **Create Ingress**.
    
3.  In the **Create Ingress** dialog box, select **MSE Ingress** for **Gateway Type**, configure the associated backend services and annotations, and then click **OK**.
    
    Set **Ingress Class** to mse. To configure a route, select **Prefix (Prefix-based Match)** from the Rule drop-down list, enter `/` in the **Path** field, and then select `httpbin` from the Service drop-down list.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6233942271/p745357.png)
    
4.  Log on to the [MSE console](https://mse.console.alibabacloud.com/#/microgw). Check that a route is configured for the cloud-native gateway and the route name contains httpbin.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8337949471/p745358.png)
    

## **Step 4: Access the service**

1.  1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Network** > **Ingresses**.
        
    3.  On the **Ingresses** page, view the Ingress endpoint.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8337949471/p745360.png)
        
2.  Use web browsers, cmd, or other command-line tools to access the path in the format of `NLB domain name/version` or `Public IP address of the gateway/version` and test services. For example, enter `nlb-b4ewsj2******.cn-hangzhou.nlb.aliyuncsslb.com/version` in the address bar of your web browser to access the service.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2434230571/p745362.png)
