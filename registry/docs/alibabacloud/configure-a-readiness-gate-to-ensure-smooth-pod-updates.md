When you use a LoadBalancer Service to expose backend pods, the rolling update speed of the pods may be faster than the mount speed of the backend server group of the load balancer. As a result, the access to the pods may be interrupted. You can configure readiness gates to seamlessly update pods. This topic describes how to use readiness gates to seamlessly update pods.

## **Prerequisites**

-   An ACK managed cluster or ACK Serverless cluster is created. The cluster meets the following requirements. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) or [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).
    
    -   Set the network plug-in to Terway for ACK managed clusters.
        
    -   The Kubernetes version of the cluster must be 1.24 or later. For more information, see [Upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
        
    -   The version of the cloud-controller-manager component must be 2.10.0 or later. For more information, see [CCM](/help/en/ack/product-overview/cloud-controller-manager).
        
-   A kubectl client is connected to the ACK cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    

## **Usage notes**

If you use a LoadBalancer Service to expose backend pods, the Service may be interrupted during the rolling updates of the pods.

-   Cause
    
    When you perform rolling updates on pods, the startup speed of new pods may be faster than the update speed of backend pods by using the LoadBalancer Service. The request traffic is routed to pods that are being phased out, which results in temporary access failures.
    
-   Solution
    
    You can configure [readiness gates](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate) in the YAML file of a pod to control the status of the pod by using custom conditions. Readiness gates allow you to specify custom conditions, such as the custom condition `service.readiness.alibabacloud.com/<Service Name>` related to the LoadBalancer Service. When all conditions specified in readiness gates are met, the status of the pods changes to Ready and traffic is forwarded to the pods. If multiple load balancers are mounted to a pod, you can configure multiple readiness gates for the pod.
    
-   Procedure
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2744612371/CAEQLxiBgICGnf.xmhkiIDZiNTc1NzFlY2Q1ZDQ5NGY4NWIyOTE2MGRkMjM1NGJi4738847_20241031132907.564.svg)

## Step 1: Create a CLB or NLB instance

1.  Create a file named `my-svc.yaml` to create a Classic Load Balancer (CLB) or Network Load Balancer (NLB) instance based on the following YAML template.
    
    ## **CLB**
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: my-svc
    spec:
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        app: nginx
      type: LoadBalancer
    ```
    
    ## **NLB**
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: my-svc
      annotations:
        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-zone-maps: "${zone-A}:${vsw-A},${zone-B}:${vsw-B}" # Example: cn-hangzhou-k:vsw-i123456,cn-hangzhou-j:vsw-j654321. 
    spec:
      loadBalancerClass: alibabacloud.com/nlb # Set to NLB. 
      ports:
      - port: 80
        targetPort: 80
        protocol: TCP
      selector:
        app: nginx
      type: LoadBalancer
    ```
    
2.  Run the following command to create a test Service:
    
    ```
    kubectl apply -f my-svc.yaml
    ```
    
3.  Run the following command to query the status of the test Service:
    
    ```
    kubectl get service my-svc
    ```
    
    After `<IP address>` appears, the corresponding CLB or NLB instance is created.
    
    ```
    NAME     TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)        AGE
    my-svc   LoadBalancer   192.XX.XX.215   <IP address>     80:30493/TCP   8s
    ```
    

## Step 2: Create a test Deployment

1.  Use the following YAML template to create a file named `my-nginx.yaml`, and set the `conditionType` parameter of the readiness gate to `service.readiness.alibabacloud.com/my-svc`.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: my-nginx    # The name of the Deployment. 
      labels:
        app: nginx
    spec:
      replicas: 2       # The number of replicated pods. 
      selector:
        matchLabels:
          app: nginx     # You must specify the same value in the selector of the Service that is used to expose the Deployment. 
      template:
        metadata:
          labels:
            app: nginx
        spec:
          readinessGates:
          - conditionType: service.readiness.alibabacloud.com/my-svc # Configure readiness gates for the Service named my-svc.
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80                                # The port that you want to expose in the Service.
    ```
    
2.  Run the following command to deploy a test Deployment:
    
    ```
    kubectl apply -f my-nginx.yaml
    ```
    
3.  Run the following command to query the status of the pod and the readiness gates:
    
    ```
    kubectl get pod -owide -l app=nginx
    ```
    
    Expected output:
    
    ```
    NAME                       READY   STATUS    RESTARTS   AGE   IP               NODE                         NOMINATED NODE   READINESS GATES
    my-nginx-d9f95dcf9-8dhwj   1/1     Running   0          14s   172.XX.XXX.188   cn-hangzhou.172.XX.XXX.174   <none>           0/1
    my-nginx-d9f95dcf9-z9hjm   1/1     Running   0          14s   172.XX.XXX.182   cn-hangzhou.172.XX.XXX.174   <none>           0/1
    ```
    
    After you run the command multiple times, the status of readiness gates of the pod changes from 0 to 1. This indicates that the pod is mounted to the server group of the CLB or NLB instance.
    

## Step 3: Perform rolling updates on pods

1.  Run the following command to redeploy the test pod:
    
    ```
    kubectl rollout restart deployment my-nginx
    ```
    
    Expected output:
    
    ```
    deployment.apps/my-nginx restarted
    ```
    
2.  Run the following command to query the status of the pod and the readiness gates:
    
    ```
    kubectl get pod -owide -l app=nginx
    ```
    
    Expected output:
    
    ```
    NAME                       READY   STATUS    RESTARTS   AGE    IP               NODE                         NOMINATED NODE   READINESS GATES
    my-nginx-d9f95dcf9-8dhwj   1/1     Running   0          113s   172.XX.XXX.188   cn-hangzhou.172.XX.XXX.174   <none>           1/1
    my-nginx-df5c9cf7d-6p5jc   1/1     Running   0          6s     172.XX.XXX.182   cn-hangzhou.172.XX.XXX.174   <none>           0/1
    my-nginx-df5c9cf7d-7dh2v   1/1     Running   0          15s    172.XX.XXX.189   cn-hangzhou.172.XX.XXX.174   <none>           1/1
    ```
    
    When you run the command multiple times, the pods wait for the status of readiness gates to change from 0 to 1 during the rolling update process. When the status of readiness gates changes from 0 to 1, the pods are mounted to the server group of the CLB or NLB instance, and then the rolling updates continue.
