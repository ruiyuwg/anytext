The ServiceAccount token serves as an authentication credential that enables secure communication between applications running in a pod and the Kubernetes API. To address security risks associated with the traditional method of automatically mounting ServiceAccount tokens as Secrets in pods, you can use the **Service Account Token Volume Projection** feature provided by Container Service for Kubernetes (ACK). This feature allows you to mount ServiceAccount tokens or related certificates into containers as volume projections, which reduces the risk of secret exposure.

## Feature introduction

A service account provides an identity for communication between pods and the API server of the cluster. Use service accounts in the traditional way may face the following challenges:

-   The JSON Web Tokens (JWTs) in service accounts are not bound to `audience` identities. A user of a service account can masquerade as another user and launch masquerade attacks.
    
-   Traditionally, each service account is stored in a Secret and delivered as a file to the corresponding application node. Service accounts used by system components may be granted unnecessary permissions. Attackers can obtain these service accounts to launch privilege escalation attacks, which results in a broad attack surface for the Kubernetes control plane.
    
-   JWTs are not time-bound. A JWT that is compromised in the aforementioned attacks stays valid for as long as the service account exists. You can mitigate the issue only by rotating the private key of the service account. However, client-go does not support automated key rotation. You must perform manual key rotation, which is complex.
    
-   A Secret must be created for each service account. This may downgrade elasticity and capacity in large-scale workload deployments.
    

The [ServiceAccount token volume projection](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection) feature enhances the security of ServiceAccounts, providing ServiceAccount-related authentication information to pods in a more secure and flexible manner. This feature allows pods to mount ServiceAccounts into containers in the form of volume projections, avoiding the dependency on Secrets.

## **Prerequisites**

-   An ACK managed cluster, ACK dedicated cluster, or ACK Serverless cluster that runs Kubernetes 1.20 or later is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb), [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/), and [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).
    
-   The ServiceAccount token volume projection feature is enabled during the cluster creation process.
    
    By default, the ServiceAccount token volume projection feature is enabled in clusters that run Kubernetes 1.22 or later. To upgrade the cluster, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster). ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1380206271/p749320.png)
    
    The API server and controller-manager of system components automatically enable the feature gate for binding ServiceAccount token volume projection, and add the following configuration in the startup parameters of the API server.
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Console configuration**
    
    service-account-issuer
    
    The issuer of the ServiceAccount token, which corresponds to the `iss` field in the token payload.
    
    https://kubernetes.default.svc
    
    Supported.
    
    api-audiences
    
    The identifiers of the API, used to validate the request tokens for the API server service.
    
    https://kubernetes.default.svc
    
    Supported. More than one `audience` can be configured, separated by commas (`,`).
    
    service-account-signing-key-file
    
    The file path of the private key that signs the token.
    
    /etc/kubernetes/pki/sa.key
    
    Not supported. Default value: /etc/kubernetes/pki/sa.key.
    

## Step 1: Create a ServiceAccount object

By default, each namespace comes with a `default` ServiceAccount, which you can view by running the `kubectl get serviceaccounts` command. To assign additional identities to processes running in the pod, you can create a new ServiceAccount by using the following code:

```
kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: build-robot
EOF
```

After the ServiceAccount is created, you can view the complete information of the ServiceAccount by running the `kubectl get serviceaccounts/build-robot -o yaml` command.

## **Step 2: Deploy a pod application that uses ServiceAccount token** volume **projection**

You can project the ServiceAccount into a pod as a volume, allowing the container in the pod to use the token to access the API server of the cluster and authenticate with the ServiceAccount. For example, you can specify the `audience`, expiration time (`expirationSeconds`), and other properties of the token, and project these into an application that runs in the pod.

1.  Create a file named nginx.yaml with the following sample code. This configuration specifies that the pod uses a ServiceAccount with an `audience` of `vault` and an expiration time of 2 hours.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
    spec:
      containers:
      - image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
        name: nginx
        volumeMounts:
        - mountPath: /var/run/secrets/tokens
          name: vault-token
      serviceAccountName: build-robot
      volumes:
      - name: vault-token
        projected:
          sources:
          - serviceAccountToken:
              path: vault-token
              expirationSeconds: 7200
              audience: vault
    ```
    
2.  Run the following command to deploy an application running in the pod that uses volume projection:
    
    ```
    kubectl apply -f nginx.yaml
    ```
    
3.  Verify the expiration time of the token mounted in the pod.
    
    1.  Run the following command to confirm that the pod runs as expected:
        
        ```
        kubectl get pod nginx
        ```
        
        Expected output:
        
        ```
        NAME    READY   STATUS    RESTARTS   AGE
        nginx   1/1     Running   0          3m15s
        ```
        
    2.  Download the token mounted in the container of the pod:
        
        ```
        kubectl exec -t nginx -- cat /var/run/secrets/tokens/vault-token > vault-token
        ```
        
    3.  Run the following command to get the token expiration time:
        
        ```
        cat vault-token |awk -F '.' '{print $2}' |base64 -d 2>/dev/null |jq  '.exp' | xargs -I {} date -d @{}
        ```
        
        Sample output:
        
        ```
        Mon  Aug 26 15:45:59 CST 2024
        ```
        

**Important**

-   Ensure that the pod can retrieve the latest rotated token in real time by periodically reloading the target token, preferably every 5 minutes. Official Kubernetes supports automatic token retrieval in client-go version 10.0.0 or later.
    
-   The file permissions for the ServiceAccount token in the container are updated from 644 to 600. When you use the bound ServiceAccount token volume projection, the file permissions are now set to 600, and to 640 if the `fsGroup` feature is enabled.
    

## References

-   [Configure ServiceAccount RAM permissions for pod access control through RRSA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services), you can achieve pod-level API access isolation within the cluster. This achieves fine-grained isolation of access permissions on cloud resources and reduces security risks.
    
-   You can use the [Alibaba Cloud KMS for disk encryption](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2) to encrypt the Kubernetes secret key in the ACK Pro cluster.
    
-   For more information about how to configure service accounts for pods, see [Configure Service Accounts for Pods](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/).
