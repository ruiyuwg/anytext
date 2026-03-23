Application Load Balancer (ALB) Ingresses route Layer 7 HTTP, HTTPS, and QUIC traffic to backend Services based on URL paths and hostnames. This topic walks you through creating an ALB instance, deploying sample Services, and configuring Ingress rules to route requests to them.

## Prerequisites

-   An ACK Serverless cluster is created and runs Kubernetes 1.18 or later. For more information, see [ACK Serverless quick start](/help/en/ack/serverless-kubernetes/getting-started/ask-quick-start#task-e3c-311-ydb).
    
-   Two vSwitches in different zones of the virtual private cloud (VPC) where the ACK cluster is deployed are created. For more information, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
-   The ALB Ingress controller is installed in the cluster. For more information, see [Manage the ALB Ingress controller component](/help/en/ack/serverless-kubernetes/user-guide/manage-the-alb-ingress-controller).
    
-   The kubectl client is connected to the ACK Serverless cluster. For more information, see [Obtain a kubeconfig file and connect to a cluster by using kubectl](/help/en/ack/serverless-kubernetes/user-guide/connect-to-an-ack-cluster-by-using-kubectl#task-msl-bc1-ydb).
    

## **Usage notes**

-   If you use the Flannel network plug-in, the backend Services of the ALB Ingress must be of the NodePort or LoadBalancer type.
    
-   The names of AlbConfig objects, namespaces, Ingresses, and Services must not start with `aliyun`.
    
-   Earlier NGINX Ingress controller versions cannot recognize the `spec : ingressClassName` field in the Ingress resource. If an earlier NGINX Ingress controller version is installed and you use both NGINX Ingresses and ALB Ingresses in your ACK cluster, the ALB Ingresses may be reconciled by the NGINX Ingress controller. To avoid this issue, update the NGINX Ingress controller or use annotations to specify the IngressClasses of ALB Ingresses. For more information, see [Update the NGINX Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-nginx-ingress-controller) or [Advanced ALB Ingress configurations](/help/en/ack/serverless-kubernetes/user-guide/advanced-alb-ingress-settings).
    

## Step 1: Create an AlbConfig object

1.  Create a file named alb-test.yaml and copy the following content to the file to create an AlbConfig object.
    
    ```
    apiVersion: alibabacloud.com/v1
    kind: AlbConfig
    metadata:
      name: alb-demo
    spec:
      config:
        name: alb-test
        addressType: Internet
        zoneMappings:
        - vSwitchId: vsw-uf6ccg2a9g71hx8go****
        - vSwitchId: vsw-uf6nun9tql5t8nh15****
      listeners:
        - port: 80
          protocol: HTTP
    ```
    
    **Parameter**
    
    **Description**
    
    spec.config.name
    
    The name of the ALB instance. This parameter is optional.
    
    spec.config.addressType
    
    The type of IP address that the ALB instance uses to provide services. This parameter is required. Valid values:
    
    -   Internet (default): The ALB instance uses a public IP address. The domain name of the Ingress is resolved to the public IP address of the ALB instance, making the ALB instance accessible over the Internet.
        
    -   Intranet: The ALB instance uses a private IP address. The domain name of the Ingress is resolved to the private IP address, making the ALB instance accessible only within the VPC where it is deployed.
        
    
    spec.config.zoneMappings
    
    The IDs of the vSwitches used by the ALB Ingress. You must specify at least two vSwitch IDs. The vSwitches must be in different zones within the VPC where the cluster resides, and the zones must be supported by ALB Ingresses. This parameter is required. For more information about the supported regions and zones, see [Regions and zones](/help/en/slb/application-load-balancer/product-overview/supported-regions-and-zones#task-2087008).
    
2.  Run the following command to create the AlbConfig:
    
    ```
    kubectl apply -f alb-test.yaml
    ```
    
    Expected output:
    
    ```
    albconfig.alibabacloud.com/alb-demo created
    ```
    
3.  Create a file named alb.yaml and copy the following content to the file:
    
    ## Kubernetes V1.19 or later
    
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
        name: alb-demo
    ```
    
    ## Kubernetes earlier than V1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: IngressClass
    metadata:
      name: alb
    spec:
      controller: ingress.k8s.alibabacloud/alb
      parameters:
        apiGroup: alibabacloud.com
        kind: AlbConfig
        name: alb-demo
    ```
    
4.  Run the following command to create the IngressClass:
    
    ```
      kubectl apply -f alb.yaml
    ```
    
    Expected output:
    
    ```
    ingressclass.networking.k8s.io/alb created
    ```
    

## Step 2: Deploy Services

1.  Create a file named cafe-service.yaml and copy the following content to the file to deploy two Deployments named `coffee` and `tea` and two Services named `coffee-svc` and `tea-svc`.
    
    YAML
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: coffee
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: coffee
      template:
        metadata:
          labels:
            app: coffee
        spec:
          containers:
          - name: coffee
            image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginxdemos:latest
            ports:
            - containerPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: coffee-svc
    spec:
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        app: coffee
      clusterIP: None
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: tea
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: tea
      template:
        metadata:
          labels:
            app: tea
        spec:
          containers:
          - name: tea
            image: registry.cn-hangzhou.aliyuncs.com/acs-sample/nginxdemos:latest
            ports:
            - containerPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: tea-svc
      labels:
    spec:
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        app: tea
      clusterIP: None
    ```
    
2.  Run the following command to deploy the Deployments and Services:
    
    ```
    kubectl apply -f cafe-service.yaml
    ```
    
    Expected output:
    
    ```
    deployment.apps/coffee created
    service/coffee-svc created
    deployment.apps/tea created
    service/tea-svc created
    ```
    
3.  Verify the status of the Deployments and Services.
    
    1.  Run the following command to check the deployment status:
        
        ```
        kubectl get deploy
        ```
        
        Expected output:
        
        ```
        NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
        coffee                           1/2     2            1           2m26s
        tea                              1/1     1            1           2m26s
        ```
        
    2.  Run the following command to check the status of the Services:
        
        ```
        kubectl get svc
        ```
        
        Expected output:
        
        ```
        NAME                          TYPE           CLUSTER-IP       EXTERNAL-IP           PORT(S)                 AGE
        coffee-svc                    NodePort       172.16.XX.XX     <none>                80:32056/TCP            9m38s
        tea-svc                       NodePort       172.16.XX.XX     <none>                80:31696/TCP            9m38s
        ```
        

## Step 3: Configure an ALB Ingress

1.  Create a file named cafe-ingress.yaml and copy the following content to the file:
    
    ## Kubernetes V1.19 or later
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: cafe-ingress 
    spec:
      ingressClassName: alb
      rules:
       - host: demo.domain.ingress.top
         http:
          paths:
          # Configure a context path.
          - path: /tea
            pathType: ImplementationSpecific
            backend:
              service:
                name: tea-svc
                port:
                  number: 80
          # Configure a context path.
          - path: /coffee
            pathType: ImplementationSpecific
            backend:
              service:
                name: coffee-svc
                port: 
                  number: 80
    ```
    
    ## Kubernetes earlier than V1.19
    
    ```
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: cafe-ingress
    spec:
      ingressClassName: alb
      rules:
       - host: demo.domain.ingress.top
         http:
          paths:
          # Configure a context path. 
          - path: /tea
            backend:
              serviceName: tea-svc
              servicePort: 80
          # Configure a context path. 
          - path: /coffee
            backend:
              serviceName: coffee-svc
              servicePort: 80
    ```
    
2.  Run the following command to configure an externally-accessible domain name and a `path` for the `coffee-svc` and `tea-svc` Services:
    
    ```
    kubectl apply -f cafe-ingress.yaml
    ```
    
    Expected output:
    
    ```
    ingress.networking.k8s.io/cafe-ingress created
    ```
    
3.  Run the following command to obtain the domain name of the ALB instance:
    
    ```
    kubectl get ing
    ```
    
    Expected output:
    
    ```
    NAME           CLASS    HOSTS                         ADDRESS                                               PORTS   AGE
    cafe-ingress   alb      demo.domain.ingress.top       alb-m551oo2zn63yov****.cn-hangzhou.alb.aliyuncs.com   80      50s
    ```
    

## Step 4: Access the Services

-   Use the ALB instance address to access the `coffee` Service:
    
    ```
    curl -H Host:demo.domain.ingress.top http://alb-lhwdm5c9h8lrcm****.cn-hangzhou.alb.aliyuncs.com/coffee
    ```
    
-   Use the ALB instance address to access the `tea` Service:
    
    ```
    curl -H Host:demo.domain.ingress.top http://alb-lhwdm5c9h8lrcm****.cn-hangzhou.alb.aliyuncs.com/tea
    ```
    

## **References**

-   For more information about advanced ALB Ingress configurations, such as forwarding requests to different backend server groups based on domain names or URLs, health checks, HTTP-to-HTTPS redirection, canary releases, and custom listener ports, see [Advanced ALB Ingress configurations](/help/en/ack/serverless-kubernetes/user-guide/advanced-alb-ingress-settings).
    
-   For more information about how to configure custom ALB Ingress routing rules, including forwarding conditions and actions, see [Customize forwarding rules for an ALB Ingress](/help/en/ack/serverless-kubernetes/user-guide/customize-the-routing-rules-of-an-alb-ingress).
    
-   For more information about how to configure an HTTPS listener to forward HTTPS requests, see [Configure an HTTPS certificate for encrypted communication](/help/en/ack/serverless-kubernetes/user-guide/use-an-alb-ingress-to-configure-certificates-for-an-https-listener-1).
    
-   For more information about how to troubleshoot ALB Ingress issues, see [FAQ about ALB Ingress](/help/en/ack/serverless-kubernetes/user-guide/alb-ingress-faq).
