To ensure network stability, security, and queries per second (QoS), you can specify the inbound and outbound bandwidth when you create an Elastic Container Instance-based pod.

## **Configuration description**

When you create a pod, you can add annotations to the metadata in the configuration file of the pod to specify the inbound and outbound bandwidth. The unit of the bandwidth value can be TB, T, GB, G, MB, M, KB, K, or B. If you do not specify a unit, B is used as the unit by default.

**Note**

The bandwidth unit here refers to the unit of the value specified in the annotation. The system automatically adds Bps (Byte per second) to the value and converts the value into real bandwidth value. For example, if you specify the bandwidth in the annotation to `40M`, the system converts the value to 320 Mbit/s bandwidth.

The following annotations can be added:

-   kubernetes.io/ingress-bandwidth: specifies the maximum bandwidth of the inbound traffic.
    
-   kubernetes.io/egress-bandwidth: specifies the maximum bandwidth of the outbound traffic.
    

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

## **Configuration example**

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
        kubernetes.io/ingress-bandwidth: 40M    # Limit the inbound bandwidth of the pod.
        kubernetes.io/egress-bandwidth: 10M     # Limit the outbound bandwidth of the pod.
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```
