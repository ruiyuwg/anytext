The Kubernetes API provides a resource-based (RESTful) programming interface over HTTP. It supports standard HTTP requests, such as POST, PUT, PATCH, DELETE, and GET, to query, create, update, and delete cluster resources. You can use cURL commands or other programming methods to access the Kubernetes API. This topic provides examples of how to manage Pods and Deployments using cURL commands.

## Obtain KubeConfig Access Credentials

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  Click **Go to RAM console** to go to the [Resource Access Management Quick Authorization](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedLogRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedLogRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCmsRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCmsRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiProvisionerRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiProvisionerRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedCsiPluginRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedCsiPluginRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSServerlessKubernetesRole%22%2C%22TemplateId%22%3A%22ServerlessKubernetes%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSKubernetesAuditRole%22%2C%22TemplateId%22%3A%22KubernetesAudit%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedNetworkRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedNetworkRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSDefaultRole%22%2C%22TemplateId%22%3A%22Default%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedKubernetesRole%22%2C%22TemplateId%22%3A%22ManagedKubernetes%22%7D%2C%7B%22RoleName%22%3A%22AliyunCSManagedArmsRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedArmsRole%22%7D%2C%7B%22RoleName%22%3A%22AliyunCISDefaultRole%22%2C%22TemplateId%22%3A%22AliyunCISDefaultRole%22%7D%5D%2C%22Service%22%3A%22CS%22%7D%5D%7D) page. Then, click **Confirm**.
    
    After you grant the authorization, refresh the console to use ACK.
    
3.  In the navigation pane on the left, click **Clusters**.
    
4.  On the **Clusters** page, find the cluster that you want to manage and click the name of the cluster or click **Details** in the **Actions** column. The details page of the cluster appears.
    
5.  Click the **Connection Information** tab. View the cluster access credential in the **KubeConfig** section. Save the **KubeConfig** file locally.
    
6.  Run the following commands to extract CA, Key, and APIServer information from the KubeConfig file.
    
    ```
    cat  ./kubeconfig |grep client-certificate-data | awk -F ' ' '{print $2}' |base64 -d > ./client-cert.pem
    cat  ./kubeconfig |grep client-key-data | awk -F ' ' '{print $2}' |base64 -d > ./client-key.pem
    APISERVER=`cat  ./kubeconfig |grep server | awk -F ' ' '{print $2}'`
    ```
    

## Use cURL Commands to Operate the Kubernetes API

Run the following command to view all namespaces in the current cluster.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces
```

The following examples show common operations for managing Pods and Deployments using cURL commands.

## Common Pod Operations

Run the following command to view all Pods in the default namespace.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces/default/pods
```

Run the following command to create a Pod in JSON format.

```
cat nginx-pod.json
{
    "apiVersion":"v1",
    "kind":"Pod",
    "metadata":{
        "name":"nginx",
        "namespace": "default"
    },
    "spec":{
        "containers":[
            {
                "name":"nginx",
                "image":"nginx:alpine",
                "ports":[
                    {
                        "containerPort": 80
                    }
                ]
            }
        ]
    }
}

curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces/default/pods -X POST --header 'content-type: application/json' -d@nginx-pod.json
```

Run the following command to create a Pod in YAML format.

```
cat nginx-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  namespace: default
spec:
  containers:
  - name: nginx
    image: nginx:alpine
    ports:
    - containerPort: 80

curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces/default/pods -X POST --header 'content-type: application/yaml' --data-binary @nginx-pod.yaml
```

Run the following command to query the status of a Pod.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces/default/pods/nginx
```

Run the following command to query the logs of a Pod.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces/default/pods/nginx/log
```

Run the following command to query Pod metrics using the metric-server API.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/apis/metrics.k8s.io/v1beta1/namespaces/default/pods/nginx
```

Run the following command to delete a Pod.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/api/v1/namespaces/default/pods/nginx -X DELETE
```

## Common Deployment Operations

The following is an example of a YAML file for creating a Deployment.

```
cat nginx-deploy.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deploy
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image:  nginx:alpine
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "2"
            memory: "4Gi"

curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/apis/apps/v1/namespaces/default/deployments -X POST --header 'content-type: application/yaml' --data-binary @nginx-deploy.yaml
```

Run the following command to view a Deployment.

```
curl --cert ./client-cert.pem --key ./client-key.pem -k $APISERVER/apis/apps/v1/namespaces/default/deployments
```

Run the following command to update a Deployment by modifying the number of replicas.

```
curl --cert ./client-cert.pem --key ./client-cert.pem -k $APISERVER/apis/apps/v1/namespaces/default/deployments/nginx-deploy -X PATCH -H 'Content-Type: application/strategic-merge-patch+json' -d '{"spec": {"replicas": 4}}'
```

Run the following command to update a Deployment by modifying the container image.

```
curl --cert ./client-cert.pem --key ./client-cert.pem -k $APISERVER/apis/apps/v1/namespaces/default/deployments/nginx-deploy -X PATCH -H 'Content-Type: application/strategic-merge-patch+json' -d '{"spec": {"template": {"spec": {"containers": [{"name": "nginx","image": "nginx:1.7.9"}]}}}}'
```

## Other Programming Methods to Operate the Kubernetes API

-   You can use the official Kubernetes SDKs, such as Go, Python, and Java. For more information, see [the official SDKs](https://kubernetes.io/docs/reference/using-api/client-libraries/).
    
-   For more information about other cluster access methods, see [other Kubernetes cluster access methods](https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-api/).
