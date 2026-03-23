In some scenarios, you may need to configure hosts for an Elastic Container Instance-based pod. For example, when you pull an image from a self-managed image repository, you must specify the actual IP address of the image repository by using the hosts file. This topic describes how to configure hosts for an Elastic Container Instance-based pod by modifying the /etc/hosts file.

## **Configuration description**

You can use the `k8s.aliyun.com/eci-custom-hosts` annotation to configure hosts for a pod. You can specify multiple mappings between IP addresses and domain names. The format of a mapping is `{\"host\":\"example.com\",\"ip\":\"100.100.XX.XX\"}`.

**Important**

-   Annotations must be added to the metadata in the configuration file of the pod. For example, when you create a Deployment, you must add annotations in the spec.template.metadata section.
    
-   To use features of Elastic Container Instance, you can add annotations only when you create Elastic Container Instance-based pods. If you add or modify annotations when you update pods, these annotations do not take effect.
    

## **Configuration example**

For example, you must specify the actual IP address of the image repository by using the hosts file when you pull images from a self-managed image repository. YAML file of the hosts:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test
  labels:
    app: test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: test
  template:
    metadata:
      name: test
      labels:
        app: test
        alibabacloud.com/eci: "true" 
      annotations:
        k8s.aliyun.com/eci-custom-hosts: "[{\"host\":\"example.com\",\"ip\":\"100.100.XX.XX\"},{\"host\":\"aliyundoc.com\",\"ip\":\"100.100.XX.XX\"}]"
    spec:
      containers:
      - name: nginx
        image: example.com/test/nginx:latest
        ports:
        - containerPort: 80
      - name: busybox
        image: aliyundoc.com/test/busybox:1.30
        command: ["sleep"]
        args: ["999999"]
```
