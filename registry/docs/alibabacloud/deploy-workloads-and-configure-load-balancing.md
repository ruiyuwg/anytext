This topic describes how to deploy a workload in a Container Service for Kubernetes (ACK) managed cluster (Auto Mode) and enable Internet access by using Application Load Balancer (ALB) Ingresses. After deployment, you can access the application by using a specified domain name, which enables efficient management and load balancing of external traffic.

This topic guides you perform the following operations:

1.  Create a namespace for the sample application.
    
2.  Deploy an NGINX sample application and create a Service to expose the application to the cluster network.
    
3.  Create an ALB Ingress to enable Internet access to the application by using ALB Ingresses. You must manually create an AlbConfig to manage the ALB instance and create an IngressClass to associate with the AlbConfig.
    
4.  Verify that the deployment is successful and access the application through a browser. You can release the resources if they are no longer needed.
    

After these operations are complete, the following operations are supported:

-   Run an NGINX sample application with 2 replicas.
    
-   Provide a stable public entry for the application by using ALB Ingress and Service.
    
-   Based on the Auto Mode, ACK automatically scales the application based on workload and manages the lifecycle of nodes to reduce the operational burden.
    

## **Prerequisites**

-   [An ACK managed cluster (Auto Mode) is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode).
    
-   [The cluster is connected](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/access-clusters/#54968d904a8qp).
    

## **Step 1: Create a namespace**

You can create a [namespace](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-namespaces-and-resource-quotas-1) in this example to achieve resource isolation.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side navigation pane, click **Namespaces and Quotas**.
    
3.  Click **Create**. In the dialog box that appears, configure a custom namespace name (my-nginx-namespace is used in this example), configure other information as prompted, and then click **OK**.
    

## **Step 2: Deploy the** NGINX **application and create a Service**

This section describes how to deploy an NGINX sample Deployment named my-nginx and create a Service named my-nginx-svc to expose the application.

-   Deployment: The number of replicas is 2. The image is an NGINX sample application. Port 80 is exposed to receive HTTP network traffic.
    
-   Service: The Service type is ClusterIP. Port 80 of the Service is mapped to port 80 of the pod container. The Service uses a Label Selector to match pods.
    

> This section provides a sample procedure. For more information about how to create workloads and Services, see [Deploy a workload](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploying-workloads/) and [Service management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/).

1.  Create a file named my-nginx.yaml and copy the following content to the file to deploy a Deployment and a Service in the namespace:
    
    ```
    apiVersion: apps/v1 
    kind: Deployment
    metadata:
      name: my-nginx    # The name of the sample application.
      namespace: my-nginx-namespace  # Replace the value with the name of the namespace that you created.
      labels:
        app: nginx
    spec:
      replicas: 2       # The number of replicated pods.
      selector:
        matchLabels:
          app: nginx     # You must specify the same value in the selector of the Service that is used to expose the application.
      template:
        metadata:
          labels:
            app: nginx
        spec:
        #  nodeSelector:
        #    env: test-team
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80         # This port must be exposed in the Service.
    ---
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: nginx
      name: my-nginx-svc
      namespace: my-nginx-namespace  # Replace the value with the name of the namespace that you created.
    spec:
      ports:
      - port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx
      type: ClusterIP   # If Flannel is used, you must use NodePort.
    ```
    
2.  Deploy the Deployment and Service.
    
    ```
    kubectl apply -f my-nginx.yaml
    ```
    
3.  View the status of the Deployment and Service.
    
    -   View the status of the Deployment.
        
        ```
        kubectl get deployment my-nginx -n my-nginx-namespace
        ```
        
        Expected output:
        
        ```
        NAME       READY   UP-TO-DATE   AVAILABLE   AGE
        my-nginx   2/2     2            2           4m36s
        ```
        
    -   View the status of the Service:
        
        ```
        kubectl get svc my-nginx-svc -n my-nginx-namespace
        ```
        
        Expected output:
        
        ```
        NAME           TYPE        CLUSTER-IP        EXTERNAL-IP   PORT(S)   AGE
        my-nginx-svc   ClusterIP   192.XX.XX.164   <none>        80/TCP    42s
        ```
        

## **Step 3: Create an ALB Ingress and its associated resources**

When you use ALB Ingress to manage external traffic that accesses applications in the cluster, you must prepare the following resources:

> Before you create an ALB Ingress, we recommend that you learn about its principles and requirements. For more information, see [ALB Ingress management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-management-1/).

-   ALB Ingress controller: a component that manages Ingress resources. After the Auto Mode is enabled for the cluster, the ALB Ingress controller is installed by default.
    
-   AlbConfig: a Custom Resource Definition (CRD) created by the ALB Ingress controller to declare the configuration of an ALB instance. An AlbConfig corresponds to one ALB instance. The ALB instance serves as an ingress to distribute traffic to backend Services.
    
-   IngressClass: When you create an ALB Ingress, you can specify an IngressClass to reference the corresponding AlbConfig configuration to implement specific application routing configurations and load balancing policies.
    

### **Create an AlbConfig**

1.  Create a file named alb.yaml and copy the following content to the file to create an AlbConfig:
    
    -   The AlbConfig specifies `addressType` as `Internet`, which means that the ALB instance has a public IP address. The DNS domain name can be resolved to the public IP address and can be accessed over the Internet.
        
    -   Fill in `vSwitchId` with the IDs of two vSwitches in different zones. The vSwitches must be in the same Virtual Private Cloud (VPC) as the cluster and in [zones that are supported by ALB](/help/en/slb/application-load-balancer/product-overview/supported-regions-and-zones#section-np1-yyk-lhy).
        
        > You can obtain the vSwitch IDs on the **vSwitch** page of the [VPC console](https://vpc.console.alibabacloud.com/vpc). To create a vSwitch, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
        
    
    ```
    apiVersion: alibabacloud.com/v1
    kind: AlbConfig
    metadata:
      name: alb
    spec:
      config:
        name: alb
        addressType: Internet  # The address type of the ALB instance. The Internet type can be accessed over the Internet.
        zoneMappings:               
        - vSwitchId: vsw-uf6ccg2a9g71hx8go****  # Replace the value with the ID of the vSwitch that you want to use.
        - vSwitchId: vsw-uf6nun9tql5t8nh15****  # Replace the value with the ID of the vSwitch that you want to use.
      listeners:
        - port: 80
          protocol: HTTP
    ```
    
2.  Create the AlbConfig.
    
    ```
    kubectl apply -f alb.yaml
    ```
    
3.  View the AlbConfig resource.
    
    ```
    kubectl get AlbConfig alb
    ```
    
    Expected output:
    
    ```
    NAME   ALBID        DNSNAME                                  PORT&PROTOCOL   CERTID   AGE
    alb    alb-******   alb-******.<regionID>.alb.aliyuncs.com                            60s
    ```
    
    **Note**
    
    The `PORT&PROTOCOL` and `CERTID` fields display content only after an HTTPS listener is created and a certificate is configured for the listener. It is normal that these fields are empty.
    

### **Create an IngressClass**

1.  Create a file named ingress\_class.yaml and copy the following content to the file to create an IngressClass:
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: IngressClass
    metadata:
      name: alb
    spec:
      controller: ingress.k8s.alibabacloud/alb
      parameters:
        apiGroup: alibabacloud.com
        kind: AlbConfig
        name: alb # The name of the AlbConfig associated with the IngressClass
    ```
    
2.  Create the IngressClass.
    
    ```
    kubectl apply -f ingress_class.yaml
    ```
    

### **Create an ALB Ingress**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Network** > **Ingresses**.
    
3.  On the **Ingresses** page, select the namespace you created, then click **Create Ingress**. In the **Create Ingress** dialog box, configure the Ingress as prompted to complete the creation.
    
    The following table describes the key parameters. For more information about the detailed parameter descriptions and related operations (such as configuring domain name resolution), see [Step 3: Create an ALB Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public#e3f94f44d8fop).
    
    **Parameter**
    
    **Description**
    
    **Gateway Type**
    
    Select **ALB Ingress**.
    
    **Name**
    
    Configure a custom Ingress name, such as my-albingress.
    
    **Ingress Class**
    
    Select the IngressClass that you created to reference the corresponding AlbConfig configuration.
    
    **Rules**
    
    -   **Service**: Select the Service that you created.
        
    -   **Port**: Select the port that you want to expose for the Service, which is port 80 in this example.
        
    
    You can keep the default values for the other parameters.
    
    After the creation is complete, **Ingresses** in the left navigation pane to check whether the Ingress is deployed. Wait for about 1 minute, then view and copy the ALB DNS's endpoint name in the **Endpoint** column.
    

## **Step 4: Access the application**

Paste the endpoint name of the ALB DNS into your browser to access the NGINX application.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7034964471/p939936.png)

## **(Optional) Step 5: Clean up resources**

The resources created in this topic include a Deployment, a Service, an AlbConfig, an IngressClass, and an ALB Ingress. You can use the following commands to clean up the resources.

> The resource names in the following commands are examples. Replace them with the actual resource names when you run the commands.

```
kubectl delete deployment my-nginx -n my-nginx-namespace
kubectl delete Service my-nginx-svc -n my-nginx-namespace
kubectl delete ALBIngress my-albingress -n my-nginx-namespace
kubectl delete AlbConfig alb
kubectl delete IngressClass alb
```

## **References**

-   For more information about the detailed parameters for creating workloads, see [Deploy a workload](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploying-workloads/). For more information about configuration recommendations, see [Recommended workload configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-configurations-for-high-reliability).
    
-   When you use the HTTPS protocol for listening, you must configure an SSL/TLS certificate. For more information about the certificate configuration methods supported by ALB Ingress, see [Configure certificates for encrypted communication over HTTPS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-alb-ingress-to-configure-certificates-for-an-https-listener).
    
-   You can customize the configuration of an ALB instance by configuring the AlbConfig resource. For more information, see [ALB Ingress configuration with annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-configuration-dictionary).
