A tag is a key-value pair that you can use to identify elastic container instances. You can use tags to manage elastic container instances by group and perform searches and batch operations. This topic describes how to bind custom tags to a pod. After you bind custom tags to a pod, you can manage the pod based on the tags. For example, you can analyze costs of the pod based on tags.

## **Background information**

A tag is a key-value pair. A tag is similar to a label in terms of features. Alibaba Cloud tags identify cloud resources and allow you to manage cloud resources by category. By default, the elastic container instances that are created by using Container Service for Kubernetes(ACK) have the following tags bound:

-   ManagedBy: the type of the cluster.
    
-   ClusterId: the cluster ID.
    
-   NameSpace: the namespace of the cluster.
    
-   OwnerReferenceKind: the type of the workload that is created in the cluster, such as Deployment and Job.
    
-   OwnerReferenceName: the name of the workload that is created in the cluster, such as Deployment name and Job name.
    
-   PodName: the name of the pod.
    

## **Configurations**

You can add the `k8s.aliyun.com/eci-custom-tags` annotation to a pod to bind custom tags to the pod. Up to three tags can be bound to a pod. Separate a tag key and a tag value with a colon (:). Separate multiple tags with commas (,).

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

Sample configurations:

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
        k8s.aliyun.com/eci-custom-tags: "env:test,name:alice" # Binds a tag
    spec:
      containers:
      - name: nginx
        image: registry.cn-shanghai.aliyuncs.com/eci_open/nginx:1.14.2
        ports:
        - containerPort: 80
```

After you use the annotation to bind tags, you can run the `kubectl describe` command to query the details of the pod. The custom tags are displayed as the values of `k8s.aliyun.com/eci-custom-tags` in the Annotations section.

![tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7581671761/p522568.png)

To directly view the tags that are bound to a pod, you can go to the **Container Group** page of the [Elastic Container Instance console](https://eci.console.alibabacloud.com/#/eci/cn-hangzhou/welcome).

![标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9928779071/p522536.png)
