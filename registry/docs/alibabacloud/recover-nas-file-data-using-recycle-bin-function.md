Container Network File System (CNFS) supports the Recycle Bin feature for restoring accidentally deleted files from File Storage NAS volumes. This tutorial demonstrates the full workflow: deploy an NGINX application backed by a CNFS-managed NAS volume, delete a file to simulate data loss, and restore it from the Recycle Bin.

## Billing

Enabling the Recycle Bin is free. However, files in the Recycle Bin consume storage space and are billed at the rate of their original storage type. Specify a retention period to reduce costs. For details, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems) and [Billing of the IA storage class](/help/en/doc-detail/178366.html).

## Permissions

Only the file system owner or authorized Resource Access Management (RAM) users can use the Recycle Bin. For details, see [Perform access control based on RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies).

## Prerequisites

-   A cluster that uses CNFS to manage NAS file systems. For details, see [Use CNFS to manage NAS file systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems#task-2083130).
    
-   Internet access enabled for the cluster API server. For details, see [Enable Internet access for the API server](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster).
    
-   Container Storage Interface (CSI) components that meet the following minimum version requirements:
    
    **Component**
    
    **Minimum version**
    
    **Reference**
    
    `csi-plugin` and `csi-provisioner`
    
    1.20.5-ff6490f-aliyun
    
    [Update csi-plugin and csi-provisioner](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb)
    
    `storage-operator`
    
    1.18.8.56-2aa33ba-aliyun
    
    [Manage the storage-operator component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-storage-operator-to-deploy-and-upgrade-storage-components)
    

## Step 1: Deploy the NGINX application with a CNFS-managed NAS volume

Create a persistent volume claim (PVC), a Deployment, and a LoadBalancer Service. Then write an `index.html` file to the NAS volume and verify access through a browser.

### Verify the CNFS object status

1.  List the CNFS objects in your cluster: Expected output:
    
    ```
       kubectl get cnfs
    ```
    
    ```
       NAME                                      AGE
       default-cnfs-nas-7938cef-20210907193713   21h
    ```
    
2.  Check the status of the CNFS object: Expected output: The CNFS object must be in the **Available** state before you proceed.
    
    ```
       kubectl get cnfs default-cnfs-nas-7938cef-20210907193713 -o yaml | grep Available
    ```
    
    ```
       status: Available
    ```
    

### Create a PVC

Run the following command to create a PVC named **cnfs-nas-pvc** that references the **alibabacloud-cnfs-nas** StorageClass:

**Important**

The `storageClassName` field must reference a CNFS StorageClass.

```
cat << EOF | kubectl apply -f -
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: cnfs-nas-pvc
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: alibabacloud-cnfs-nas
  resources:
    requests:
      storage: 30Gi
EOF
```

### Create a Deployment

Run the following command to create a Deployment named **cnfs-nas-deployment**. The Deployment mounts the PVC to `/app` and exposes container port `8080` (named `http`):

**Important**

The Deployment references the PVC created in the previous step.

```
cat << EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cnfs-nas-deployment
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      securityContext:
        runAsUser: 0
      containers:
      - name: nginx
        image: docker.io/bitnami/nginx:1.16.1-debian-9-r56
        volumeMounts:
        - mountPath: "/app"
          name: cnfs-nas-pvc
        ports:
        - containerPort: 8080
          name: http
      volumes:
      - name: cnfs-nas-pvc
        persistentVolumeClaim:
          claimName: cnfs-nas-pvc
EOF
```

### Create a LoadBalancer Service

Run the following command to create a LoadBalancer Service named **nginx-default**. A Server Load Balancer (SLB) instance exposes the Service through a public IP address and forwards HTTP requests to pods with the `app: nginx` label:

```
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: Service
metadata:
  name: nginx-default
  labels:
    app: nginx
spec:
  type: LoadBalancer
  externalTrafficPolicy: "Cluster"
  ports:
    - name: http
      port: 80
      targetPort: http
  selector:
    app: nginx
EOF
```

### Write the NGINX welcome page

1.  Get the pod name: Expected output:
    
    ```
       kubectl get pod
    ```
    
    ```
       NAME                                   READY   STATUS    RESTARTS   AGE
       cnfs-nas-deployment-597bc9fb45-cmkss   1/1     Running   0          3h23m
    ```
    
2.  Open a shell in the pod and navigate to `/app`:
    
    ```
       kubectl exec cnfs-nas-deployment-597bc9fb45-cmkss -ti sh
       cd /app
    ```
    
3.  Write the `index.html` file:
    
    ```
       cat << EOF >> index.html
       <!DOCTYPE html>
       <html>
       <head>
       <title>Welcome to nginx!</title>
       <style>
       html { color-scheme: light dark; }
       body { width: 35em; margin: 0 auto;
       font-family: Tahoma, Verdana, Arial, sans-serif; }
       </style>
       </head>
       <body>
       <h1>Welcome to nginx!</h1>
       <p>If you see this page, the nginx web server is successfully installed and
       working. Further configuration is required.</p>
    
       <p>For online documentation and support please refer to
       <a href="http://nginx.org/">nginx.org</a>.<br/>
       Commercial support is available at
       <a href="http://nginx.com/">nginx.com</a>.</p>
    
       <p><em>Thank you for using nginx.</em></p>
       </body>
       </html>
       EOF
    ```
    
4.  Exit the pod:
    
    ```
       exit
    ```
    

### Verify access to the NGINX welcome page

1.  Get the public IP address of the SLB instance: Expected output:
    
    ```
       kubectl get svc
    ```
    
    ```
       NAME            TYPE           CLUSTER-IP        EXTERNAL-IP      PORT(S)        AGE
       nginx-default   LoadBalancer   192.168.XX.XX     47.115.XX.XX     80:30989/TCP   20h
    ```
    
2.  Open the public IP address (for example, `47.115.XX.XX`) in a browser. The NGINX welcome page appears.
    
    ![NGINX welcome page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8836496571/p328211.png)
    

## Step 2: Delete a file and restore it from the Recycle Bin

Simulate data loss by deleting `index.html`, then restore the file through the Recycle Bin in the ACK console.

### Delete the file

1.  Delete the `index.html` file from the pod:
    
    ```
       kubectl exec cnfs-nas-deployment-597bc9fb45-cmkss -- rm -rf /app/index.html
    ```
    
2.  Refresh the browser. The NGINX welcome page is no longer accessible and a 403 error appears.
    
    ![NGINX 403 error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3693904361/p328223.png)
    

### Restore the file from the Recycle Bin

The Recycle Bin is enabled by default for NAS file systems managed by CNFS.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find your cluster and click its name. In the left-side pane, choose **Volumes** > **Persistent Volumes**.
    
3.  On the **Persistent Volumes** page, find the persistent volume (PV) and click **Recycle Bin** in the **Actions** column. In this example, the PV name is **nas-ecaf6018-5250-4e19-b570-5d9e657d23bc**.
    
    ![Persistent Volume with Recycle Bin action](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3693904361/p328281.png)
    
4.  On the **Recycle Bin** tab of the NAS file system page, click the **Deleted Files and Directories** tab. Find the deleted file and click **Restore** in the **Actions** column.
    
    ![Deleted Files and Directories tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3693904361/p328314.png)
    
5.  Click **Restore to the original path**, and then click **OK**.
    
    ![Restore to original path dialog](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3693904361/p328338.png)
    
6.  Refresh the browser. The NGINX welcome page appears again, which confirms that `index.html` has been restored.
    
    ![NGINX welcome page restored](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8836496571/p328211.png)
    

## References

For more information about the NAS Recycle Bin feature, see [Recycle bin](/help/en/nas/user-guide/recycle-bin#section-hwl-oex-sy6).
