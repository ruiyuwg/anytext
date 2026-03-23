Helm simplifies the process of deploying and managing applications in Container Service for Kubernetes (ACK) clusters by packaging all the necessary Kubernetes resources—such as Deployments, Services, and Ingresses—into a single, manageable unit called a Chart.

## **Create a Helm application**

> This topic uses the deployment of a Dify application from the ACK console as an example. Ensure your ACK cluster has at least 2 vCPU cores and 4 GB of memory available.

1.  Create the Container Network File System (CNFS) and Network Attached Storage (NAS) StorageClasses dependencies for Dify.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and navigate to the **Clusters** page. Click the name of your target cluster, then choose **Volumes** > **StorageClasses** from the left navigation pane.
        
    2.  On the **StorageClasses** page, click **Create from YAML**. Copy the following YAML manifest into the template, then click **Create**.
        
        > If the system reports that a resource with the same name already exists, it means the required CNFS and NAS StorageClasses have been automatically created. You can proceed to deploy the application. Creating a NAS file system incurs fees. For details, see [NAS billing](/help/en/nas/product-overview/billable-items/).
        
        ```
        apiVersion: storage.alibabacloud.com/v1beta1
        kind: ContainerNetworkFileSystem
        metadata:
          name: cnfs-nas-filesystem
        spec:
          description: "cnfs"
          type: nas
          reclaimPolicy: Retain  # Only Retain is supported. Deleting the CNFS will not delete the backend NAS instance.
        ---
        apiVersion: storage.k8s.io/v1
        kind: StorageClass
        metadata:
          name: alibabacloud-cnfs-nas
        mountOptions:
          - nolock,tcp,noresvport
          - vers=3
        parameters:
          volumeAs: subpath # Each persistent volume claim (PVC) will create a separate subdirectory in the NAS file system.
          containerNetworkFileSystem: cnfs-nas-filesystem # Associates with the CNFS instance defined above.
          path: "/"
        provisioner: nasplugin.csi.alibabacloud.com
        reclaimPolicy: Retain
        allowVolumeExpansion: true # Optional: Set to true to allow volume expansion for directory quotas.
        ```
        
2.  Deploy the Dify application.
    
    On the cluster details page, choose **Applications** > **Helm** from the left navigation pane. On the **Helm** page, click **Deploy**.
    
    -   **Basic Information**: In the **Chart** section, search for `ack-dify` and select it from the results.
        
    -   **Parameters**: For **Chart Version**, select the latest version.
        
    
3.  Access the Dify application.
    
    1.  Expose the `ack-dify` service to the public Internet.
        
        > Public access is convenient for demonstration purposes. For production environments, it is strongly recommended to use access control to secure your application data.
        
        Navigate to **Network** > **Services** and select the `dify-system` namespace. Find the service named `ack-dify`, click **Update**, configure the following settings, and click **OK**.
        
        -   **Service Type**: click **SLB**.
            
        -   **Access Method**: select **Public Access**.
            
        -   **VSwitch**: select the appropriate vSwitches for the availability zones in your virtual private cloud (VPC).
            
        
    2.  Access the Dify application.
        
        Once the configuration is complete, copy the **External IP**address and paste it into your browser's address bar to access the Dify service.
        
    

## **Manage Helm applications**

> On the **Helm** page in the console, you can manage your deployed applications.

**Action**

**Description**

View

Click the application name or **View Details** to view its resources, YAML manifest, release history, and other information.

Update

Click **Update**. In the **Update Release** panel, modify the parameters as needed, then click **OK**.

**Important**

Updates will directly impact the running application, potentially causing service restarts or functional issues. Always assess the impact before making changes and perform updates during off-peak hours.

Delete

Click **Delete**. In the **Delete** dialog box, select **Clear Release Records**, then click **OK** to delete the application and its resources, such as Services and Deployments.

> In this example, deleting the Dify application will not automatically delete the backend NAS resources. You must manually [delete the NAS file system](/help/en/nas/user-guide/delete-a-file-system).

**Important**

If you do not select **Clear Release Records** when deleting the application, the application name will be preserved. Attempting to deploy another application with the same name later will fail due to a naming conflict.

## **FAQ**

#### **How do I deploy a third-party application using the Helm CLI?**

> If the Charts provided by ACK do not meet your needs, you can use the Helm command-line tool to deploy applications.

1.  Connect to your cluster.
    
    ## Cloud-based
    
    [Use kubectl on Workbench or Cloud Shell to connect to ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408).
    
    > The browser-based CLI provided by Alibaba Cloud includes a pre-installed Helm. No additional configuration is required.
    
    ## Local machine
    
    1.  [Get a cluster kubeconfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).
        
    2.  [Install the Helm CLI](https://helm.sh/docs/intro/install/).
        
        ```
        curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
        ```
        
    
2.  Add a Chart repository.
    
    > Replace `<REPO_NAME>` with the repository's alias and `<REPO_URL>` with the repository's URL.
    
    ```
    helm repo add <REPO_NAME> <REPO_URL>
    ```
    
3.  Update your local repository information.
    
    ```
    helm repo update
    ```
    
4.  Deploy the third-party application.
    
    > Replace `<APP_NAME>` with your application name and `<CHART_NAME>` with the name of the chart to install.
    
    ```
    helm install <APP_NAME> <REPO_NAME>/<CHART_NAME>
    ```
    

For more Helm commands, see the [official Helm documentation](https://helm.sh/docs/intro/using_helm/).

#### **Why can't I delete a Helm application?**

**Symptoms**

-   In the console, the Helm application remains in the "Uninstalling" state for a long time.
    
-   When using the Helm CLI, the `helm uninstall` command fails with an error similar to this:
    
    ```
    no matches for kind "***" in version "***"
    ensure CRDs are installed first
    ```
    

**Cause**

This issue typically occurs after a cluster upgrade where an API version used by a resource in the Helm chart has been deprecated and removed. The uninstall process fails because it cannot find the specified API version.

> For a list of deprecated APIs in different Kubernetes versions, see [Deprecated API Migration Guide](https://kubernetes.io/docs/reference/using-api/deprecation-guide/).

**Solution**

1.  Use the official [helm-mapkubeapis](https://github.com/helm/helm-mapkubeapis) plugin to map the deprecated APIs in the release to supported API versions, then delete the application.
    
    > Replace `<RELEASE_NAME>` and `<NAMESPACE>` with the name and namespace of your Helm application.
    
    ```
    helm plugin install https://github.com/helm/helm-mapkubeapis
    helm mapkubeapis <RELEASE_NAME> -n <NAMESPACE> 
    ```
    
    A `...completed successfully` message indicates that the API versions were mapped successfully.
    
2.  Uninstall the application again.
    
    ```
    helm uninstall <RELEASE_NAME> -n <NAMESPACE>
    ```
    
    The output `release "***" uninstalled` confirms that the Helm application has been deleted successfully.
    

## References

-   To ensure cluster security and access the latest features, we recommend you [migrate from Helm V2 to Helm V3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-helm-v2-to-helm-v3#task-2297712).
    
-   The Helm Chart feature in Container Registry Enterprise Edition supports [pushing and pulling Helm Charts](/help/en/acr/user-guide/push-and-pull-helm-chart/).
