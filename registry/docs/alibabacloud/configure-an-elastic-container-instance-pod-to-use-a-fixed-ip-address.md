In some business scenarios, business pods need to use a fixed IP address. This topic describes how to configure an Elastic Container Instance pod to use a fixed IP address.

## **Feature description**

By default, when you create an Elastic Container Instance pod, the system randomly assigns an IP address to the pod from the vSwitch CIDR block specified in the eci-profile. If the pod is released due to a fault, the IP address is also released and the new instances are assigned new IP addresses. In some business scenarios, such as scenarios in which the IP addresses of services are exposed, a pod needs to use a fixed IP address. If no fixed IP address is assigned to the pod, the business is affected.

For the preceding scenarios, Elastic Container Instance supports fixed IP addresses. If you enable this feature when you create an Elastic Container Instance pod, the system assigns two IP addresses from the specified vSwitch CIDR block. One IP address is a dynamic IP address, which is imperceptible in the cluster. The other IP address is a fixed IP address. After the pod is released, the system retains the fixed IP address of the pod. Within the validity period (48 hours by default), if the cluster ID, namespace, and pod name of the pods that you want to create and those of the released pod are the same and the feature of using fixed IP address is enabled for the released pod and the new pods, the system assigns the retained IP address to the new pods. This way, the pods that meet the same business requirements use the same IP address.

**Note**

In this scenario, you can use a StatefulSet to deploy services. After the pods contained in the StatefulSet are released, the system automatically creates new pods that have the same name and are deployed in the same namespace as the released pod.

## **Configuration description**

You can add annotations to the metadata of a pod to configure the pod to use a fixed IP address and configure the retention period of the fixed IP address after the fixed IP address becomes idle. The following table describes the annotations.

**Annotation**

**Example**

**Description**

k8s.aliyun.com/eci-fixed-ip

"true"

Specifies whether to configure the pod to use a fixed IP address.

k8s.aliyun.com/eci-fixed-ip-retain-hour

"24"

Specifies the retention period of the fixed IP address after the original pod is released and the fixed IP address becomes idle. Unit: hours.

If you do not configure the annotation, the fixed IP address is retained for 48 hours by default.

## **Configuration example**

1.  Create a Service and a StatefulSet.
    
    ```
    kubectl apply -f fixedIp.yaml
    ```
    
    The following example shows the content of fixedIp.yaml that creates a Service and a StatefulSet. The StatefulSet contains a pod that enables the fixed IP address.
    
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      ports:
      - port: 80
        name: web
      clusterIP: None
      selector:
        app: nginx
    ---
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: web
    spec:
      selector:
        matchLabels:
          app: nginx
      serviceName: "nginx"
      minReadySeconds: 10
      template:
        metadata:
          annotations:
            k8s.aliyun.com/eci-fixed-ip: "true"  # Enables the fixed IP address.
          labels:
            app: nginx
            alibabacloud.com/eci: "true"
        spec:
          containers:
          - name: nginx
            image: registry-vpc.cn-beijing.aliyuncs.com/eci_open/nginx:1.14.2
            ports:
            - containerPort: 80
              name: web
    ```
    
2.  Run the following command to monitor the status of the pod:
    
    ```
    kubectl get pod -o wide -w
    ```
    
    The following sample response shows that the StatefulSet contains a pod that is named web-0. The IP address of the pod is 172.16.0.129.
    
    ![ECI固定IP1..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0148798861/p679122.png)
3.  Re-open a CLI terminal to connect to the cluster. Run the following command to delete the pod from the StatefulSet:
    
    ```
    kubectl delete pod web-0
    ```
    
4.  Switch back to the previous CLI terminal and continue to observe the pod status changes.
    
    The following example shows a new response. After the pod is deleted, StatefulSet automatically creates a new pod. The IP address of the new pod is the same as the IP address of the deleted pod.
    
    **Note**
    
    The original pod occupies the IP address until the pod is completely deleted. This affects the creation speed of the new pod.
    
    ![ECI固定IP2..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0148798861/p679123.png)
