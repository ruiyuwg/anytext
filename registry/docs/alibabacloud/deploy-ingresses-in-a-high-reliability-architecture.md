When you use the NGINX Ingress controller, the pods in which the controller runs act as the actual entry points and forwarders for traffic. Their reliability determines the overall reliability of the controller. By default, the NGINX Ingress controller uses two pods after installation, which is sufficient in most scenarios. You can achieve high reliability by controlling the number of pods and the scheduling method.

## Prerequisites

-   The NGINX Ingress controller is installed. For more information, see [Manage the NGINX Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-nginx-ingress-controller).
    
-   A kubectl client is connected to the ACK cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
    

## View the default pods deployed for the NGINX Ingress controller

After the NGINX Ingress controller is installed, an application that provisions two pods is deployed in the cluster.

Run the following command to view the pods in which the NGINX Ingress controller is deployed:

```
kubectl -n kube-system get pod | grep nginx-ingress-controller
```

Expected output:

```
nginx-ingress-controller-*****nxs                    1/1     Running   0          3h
nginx-ingress-controller-*****9pm                    1/1     Running   0          3h
```

## How to ensure high reliability for the NGINX Ingress controller

**Important**

The NGINX Ingress controller uses an affinity configuration by default, ensuring that only one pod belonging to the controller is deployed per node. Make sure that the number of pods does not exceed the number of nodes in the cluster.

## Increase the number of pods in which the controller runs

Increasing the number of pods in which the controller runs can prevent the situation where a single pod fails.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8161099171/CAEQJxiBgICmlorfghkiIGJjYTQ3ZjRhNjdiNjQ2MWViNzJkMjQzNzcyOTk0OTIy3963382_20230830144006.372.svg)

1.  Run the `kubectl scale` command to scale out the deployment of the NGINX Ingress controller. The following command increases the number of pods to three.
    
    ```
    kubectl -n kube-system scale --replicas=3 deployment/nginx-ingress-controller
    ```
    
    Expected output:
    
    ```
    deployment.extensions/nginx-ingress-controller scaled
    ```
    
2.  Run the following command to view the pods in which the NGINX Ingress controller runs:
    
    ```
    kubectl -n kube-system get pod | grep nginx-ingress-controller
    ```
    
    Expected output:
    
    ```
    nginx-ingress-controller-********                    1/1     Running   0          3h
    nginx-ingress-controller-********                    1/1     Running   0          3h
    nginx-ingress-controller-********                    1/1     Running   0          33s
    ```
    

## Schedule pods to high-specification nodes

Scheduling pods to high-specification nodes can prevent pod performance degradation or eviction due to insufficient node resources.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8161099171/CAEQJxiBgICBl4rfghkiIDE3MmJlMzUyOGIzZDQwZWE5ZTMyZjk5NTQ2YzJjMmUy4458235_20240620170303.953.svg)

1.  Run the following command to view the current resource usage of the cluster:
    
    ```
    kubectl top nodes
    ```
    
    Expected output:
    
    ```
    NAME                       CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%   
    cn-shanghai.********.230   71m          1%     1712Mi          31%       
    cn-shanghai.********.226   63m          1%     1669Mi          30%       
    cn-shanghai.********.229   125m         3%     2545Mi          46%       
    cn-shanghai.********.253   152m         3%     3804Mi          69%  
    ```
    
    The output shows the CPU and memory resources already used by each node. Select nodes with more surplus resources for scheduling.
    
2.  Run the following command to add the `node-role.kubernetes.io/ingress="true"` label to the nodes. In the following example, the label is added to the nodes `cn-shanghai.********.226` and `cn-shanghai.********.230` with more surplus CPU resources.
    
    **Important**
    
    -   The number of nodes to which the label is added needs to be greater than or equal to the number of pods. If the number of labeled nodes is less than the number of pods to which the controller belongs, some pods may fail to deploy.
        
    -   If you are using an ACK dedicated cluster, do not add labels to the Master nodes.
        
    
    ```
    kubectl label nodes cn-shanghai.********.226 cn-shanghai.********.230 node-role.kubernetes.io/ingress="true"
    ```
    
    Expected output:
    
    ```
    node/cn-shanghai.********.226 labeled
    node/cn-shanghai.********.230 labeled
    ```
    
3.  Run the following command to update the deployment used by the Nginx Ingress Controller, adding the nodeSelector configuration to ensure that the pods to which the controller belongs can only be deployed on nodes with the `node-role.kubernetes.io/ingress="true"` label.
    
    ```
    kubectl -n kube-system patch deployment nginx-ingress-controller -p '{"spec": {"template": {"spec": {"nodeSelector": {"node-role.kubernetes.io/ingress": "true"}}}}}'
    ```
    
    Expected output:
    
    ```
    deployment.extensions/nginx-ingress-controller patched
    ```
    
4.  Run the following command to view the Ingress pods deployed on the cluster nodes with the `node-role.kubernetes.io/ingress="true"` label.
    
    ```
    kubectl -n kube-system get pod -o wide | grep nginx-ingress-controller
    ```
    
    Expected output:
    
    ```
    nginx-ingress-controller-*****nxs     1/1     Running     0      74m     10.1.117.186   cn-shanghai.********.230
    nginx-ingress-controller-*****9pm     1/1     Running     0      74m     10.1.117.172   cn-shanghai.********.226
    ```
