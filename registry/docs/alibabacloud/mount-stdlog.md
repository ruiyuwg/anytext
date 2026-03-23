This topic describes how to mount stdlog (standard output logs of containers) to an Elastic Container Instance pod. You must have root permissions to perform this operation.

## Configuration example

Elastic Container Instance allows you to use the Container Storage Interface (CSI) plug-in to mount standard output logs of containers to an Elastic Container Instance pod. You must have root permissions to perform this operation. Configuration example:

1.  Run the following command to create a YAML configuration file named stdlog\_demo.yaml:
    
    ```
    vim stdlog_demo.yaml
    ```
    
    Copy the following template content into the stdlog\_demo.yaml file:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: test-stdlog-demo
    spec:
      containers:
      - image: registry-vpc.cn-beijing.aliyuncs.com/eci_open/nginx:1.14.2
        name: test-container
        volumeMounts:
        - mountPath: /cache-test
          name: cache-volume
      volumes:
      - name: cache-volume
        csi:
          driver: stdlogplugin.csi.alibabacloud.com
    ```
    
2.  Deploy the pod.
    
    ```
    kubectl create -f stdlog_demo.yaml
    ```
    
3.  Check the mount result.
    
    View the file directories in the pod. The standard output logs of containers are mounted to the `/cache-test` directory of the pod. You can use the logs in the container.
    
    ```
    kubectl get pod test-stdlog-demo
    kubectl exec -it test-stdlog-demo bash
    ls -l /cache-test
    ls -l /cache-test/test-container
    ```
    
    ![stdlog新.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1007501961/p690798.png)
