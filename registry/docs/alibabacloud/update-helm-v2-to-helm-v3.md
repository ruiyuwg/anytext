To eliminate the potential security risks imposed by the Helm V2 server Tiller, we recommend that you update Helm V2 to Helm V3. Otherwise, attackers may use Tiller to install unauthorized applications in your cluster and use more Helm features without authorization. This topic describes how to update Helm V2 to Helm V3.

## Upgradation and Migration Steps

This section uses Helm V3.3.0 as an example to demonstrate how to update Helm V2. For more information about Helm versions, see [Helm](https://github.com/helm/helm/releases).

**Note**

If you can reinstall the application, you can delete the application and then reinstall it. For more information, see [Helm V2 Tiller upgrade announcement](/help/en/ack/product-overview/component-updates-update-helm-v2-to-v3#task-2435198).

1.  Run the following command to install Helm V3:
    
    ```
    wget https://get.helm.sh/helm-v3.3.0-linux-amd64.tar.gz
    tar -xzvf helm-v3.3.0-linux-amd64.tar.gz
    mv linux-amd64/helm /usr/local/bin/helm
    helm version
    ```
    
    Expected output:
    
    ```
    version.BuildInfo{Version:"v3.3.0", GitCommit:"e29ce2a54e96cd02ccfce88bee4f58bb6e2a****", GitTreeState:"clean", GoVersion:"go1.13.4"}
    ```
    
2.  Run the following command to install the Helm 2to3 plugin.
    
    This step uses the ack-node-local-dns chart as an example.
    
    ```
    git clone https://github.com/helm/helm-2to3.git
    helm plugin install ./helm-2to3
    ```
    
3.  Run the following command to convert the ack-node-local-dns chart to Helm V3.
    
    ```
    helm 2to3 convert ack-node-local-dns --delete-v2-releases
    ```
    
    Expected output:
    
    ```
    2022/12/27 17:12:50 Release "ack-node-local-dns" will be converted from Helm v2 to Helm v3.
    2022/12/27 17:12:50 [Helm 3] Release "ack-node-local-dns" will be created.
    2022/12/27 17:12:50 [Helm 3] ReleaseVersion "ack-node-local-dns.v1" will be created.
    2022/12/27 17:12:50 [Helm 3] ReleaseVersion "ack-node-local-dns.v1" created.
    2022/12/27 17:12:50 [Helm 3] Release "ack-node-local-dns" created.
    2022/12/27 17:12:50 [Helm 2] Release "ack-node-local-dns" will be deleted.
    2022/12/27 17:12:50 [Helm 2] ReleaseVersion "ack-node-local-dns.v1" will be deleted.
    2022/12/27 17:12:50 [Helm 2] ReleaseVersion "ack-node-local-dns.v1" deleted.
    2022/12/27 17:12:50 [Helm 2] Release "ack-node-local-dns" deleted.
    2022/12/27 17:12:50 Release "ack-node-local-dns" was converted successfully from Helm v2 to Helm v3.
    ```
    

## FAQ about updating Helm V2

### 'Resource already exists' error due to inconsistent apiVersion

**Problem**

After you update your cluster, the system prompts rendered manifests contain a new resource that already exists. Unable to continue with update: existing resource conflict: kind: MutatingWebhookConfiguration, namespace: , name: mse-pilot-ack-mse-pilot when you update Helm V2.

**Cause**

Clusters whose Kubernetes version is 1.22 or later no longer support v1beta1. v1beta1 is still supported in earlier Kubernetes versions. The system may return the preceding error after you update your cluster.

**Solution**

Update the API version of the resource. For more information, see [Update the API version of a Kubernetes resource using helm-mapkubeapis to perform an in-place upgrade](/help/en/ack/update-the-api-version-of-kubernetes-resources-by-performing-in-place-upgrades-with-helm-mapkubeapis#task-2295598).

### What do I do if Helm V2 is updated to Helm V3 but an error is returned when the system updates the chart?

**Problem**

After you migrate from Helm V2 to V3, an error occurs when you upgrade a chart version, for example, from v1.3.5 to v1.5.3: `err: rendered manifests contain a resource that already exists. Unable to continue with update: MutatingWebhookConfiguration \"ack-node-local-dns-admission-controller\" in namespace \"\" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key \"app.kubernetes.io/managed-by\": must be set to \"Helm\"; annotation validation error: missing key \"meta.helm.sh/release-name\": must be set to \"ack-node-local-dns\"`.

**Cause**

The chart does not have the Helm ownership.

**Solutions**

You can use one of the following methods to resolve this issue:

-   Assign the resource to the corresponding Helm release.
    
    1.  Run the following command to edit the configuration file.
        
        ```
        kubectl edit MutatingWebhookConfiguration ack-node-local-dns-admission-controller
        ```
        
    2.  Add the following `annotations` and `labels` to the release.
        
        ```
        annotations:
          meta.helm.sh/release-name: ack-node-local-dns
          meta.helm.sh/release-namespace: kube-system
        labels:
          app.kubernetes.io/managed-by: Helm
        ```
        
-   Run the following command to delete the resource.
    
    ```
    kubectl delete MutatingWebhookConfiguration ack-node-local-dns-admission-controller
    ```
