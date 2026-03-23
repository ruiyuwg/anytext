OSS persistent volumes (PVs) support multiple clients, but these clients provide different levels of support for write operations. In most cases, full support for write operations compromises read performance. To address this, you can split read and write operations. This minimizes the impact of write operations on read performance and significantly improves data access performance in read-intensive scenarios. This topic describes how to implement read/write splitting using different OSS PV clients, the OSS SDK, or ossutil.

## Prerequisites

-   Your cluster must use the Container Storage Interface (CSI) component. Different clients require different versions of the CSI component, so we recommend that you upgrade the component to the latest version. For more information, see [Manage csi-plugin and csi-provisioner components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
-   An [OSS bucket is created](/help/en/oss/user-guide/create-a-bucket-4) in the same Alibaba Cloud account as the cluster.
    
    **Important**
    
    We recommend that you do not use OSS across different accounts.
    

## **Scenarios**

Common scenarios for OSS storage include read-only and read/write access. For read-intensive scenarios, we recommend that you split read and write operations:

-   Read: You can select different OSS PV clients or modify configuration parameters to optimize data read speed.
    
-   Write: You can use the ossfs 1.0 client to obtain full write capabilities, or write data using tools such as the OSS SDK.
    

### **Read-only**

-   In scenarios such as inference, data analytics, and log query in big data services, we recommend that you set the access mode of the OSS PV to ReadOnlyMany to prevent accidental data deletion or modification.
    
-   OSS PVs support three types of clients: ossfs 1.0, ossfs 2.0, and strmvol. All of them support read-only operations.
    
    -   We recommend that you upgrade the CSI component to 1.33.1 or later and use ossfs 2.0 instead of ossfs 1.0 to optimize performance in read-only scenarios. For more information about how to use ossfs 2.0 PVs, see [Use ossfs 2.0 PVs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0).
        
    -   If your business involves reading many small files in scenarios such as dataset reading, quantitative backtesting, or time-series log analysis, you can use strmvol PVs. For more information about how to use strmvol PVs, see [Use strmvol PVs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-strmvol-storage-volumes).
        
    
    For more information about client scenarios and selection suggestions, see [Client selection reference](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/client-selection-reference).
    
-   To use the ossfs 1.0 client in a read-only scenario, you can configure the following parameters to improve data read performance.
    
    **Parameter**
    
    **Description**
    
    kernel\_cache
    
    Enables the kernel cache to optimize read performance. This parameter is suitable for scenarios where real-time access to the latest content is not required.
    
    When a cache hit occurs, ossfs reads the same file again. The request is processed by the kernel buffer cache, which uses only the available memory that is not used by other processes.
    
    parallel\_count
    
    The number of concurrent shards when you upload or download large files in sharded mode. Default value: 20.
    
    max\_multireq
    
    The maximum number of concurrent requests to access object metadata when you list files. The value must be greater than or equal to the value of parallel\_count. Default value: 20.
    
    max\_stat\_cache\_size
    
    The number of objects whose metadata can be cached. Unit: number of objects. Default value: 1000. To disable metadata caching, set this parameter to 0.
    
    In scenarios where real-time access to the latest content is not required and many files exist in a directory, you can increase the number of cached objects based on the instance type to accelerate the ls command.
    
    direct\_read
    
    ossfs 1.91 and later versions provide a direct read mode for read-only scenarios.
    
    -   For more information about the features and performance testing of the direct read mode, see [Features and performance testing of the new ossfs 1.0 version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above).
        
    -   For more information about how to optimize performance in direct read mode, see [Performance optimization for read-only scenarios](/help/en/oss/developer-reference/optimising-performance-in-read-only-scenarios).
        
    

### **Read/write**

-   In read/write scenarios, you must set the access mode of the OSS PV to ReadWriteMany.
    
-   ossfs 1.0 supports full write operations, while ossfs 2.0 supports only sequential append writes. Keep the following points in mind when you write data using ossfs:
    
    -   ossfs does not guarantee the consistency of data written by concurrent write operations.
        
    -   When the OSS volume is mounted to a pod, if you log on to the pod or the host of the pod and delete or modify a file in the mounted path, the source file in the OSS bucket is also deleted or modified. To avoid accidentally deleting important data, you can enable version control for the OSS bucket. For more information, see [Versioning](/help/en/oss/user-guide/overview-78/).
        
-   In read-intensive scenarios, especially those where read and write paths are separated (such as during model training in big data services), we recommend that you split read and write operations. You can set the access mode of the OSS PV to `ReadOnlyMany`, optimize data read speed by configuring cache parameters, and write data using tools such as the SDK. For more information, see [Examples](#7120f1c0580ya).
    

## **Examples**

This section uses a handwriting image recognition and training application as an example to describe how to implement read/write splitting for OSS storage. In this simple deep learning model training example, the service reads the training dataset from the `/data-dir` directory of an OSS bucket using a read-only OSS PV. The service then writes checkpoints to the `/log-dir` directory of the OSS bucket using a read/write OSS PV or the OSS SDK.

Before you begin, obtain the MNIST handwriting image training dataset for testing and upload it to the `/tf-train/train/data` directory of your OSS bucket.

-   MNIST handwriting image training dataset
    
    -   [train-labels-idx1-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/spmhjd/train-labels-idx1-ubyte.gz)
        
    -   [train-images-idx3-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/epidui/train-images-idx3-ubyte.gz)
        
    -   [t10k-labels-idx1-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/hyqocz/t10k-labels-idx1-ubyte.gz)
        
    -   [t10k-images-idx3-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/ygqzqn/t10k-images-idx3-ubyte.gz)
        
-   Example of files stored in an OSS bucket
    
    ![oss-读写分离1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0616704571/p991683.png)
    

### **Implement read/write operations using ossfs**

Because writing checkpoints is a sequential append write behavior, you can use ossfs 1.0 or ossfs 2.0.

1.  Deploy the handwriting image recognition and training application using the following template.
    
    This application is written in simple Python and mounts a statically provisioned OSS volume. For more information about how to configure an OSS PV, see [Use ossfs 1.0 statically provisioned volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes) or [Use ossfs 2.0 PVs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0).
    
    In the following example, the application mounts the `/tf-train` subpath of the OSS bucket to the `/mnt` directory of the pod.
    
    1.  Create an ossfs 1.0 PV using the following content.
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: Secret
        metadata:
          name: oss-secret
          namespace: default
        stringData:
          akId: "<your-accesskey-id>"
          akSecret: "<your-accesskey-secret>"
        ---
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: tf-train-pv
          labels:
            alicloud-pvname: tf-train-pv
        spec:
          capacity:
            storage: 10Gi
          accessModes:
            - ReadWriteMany
          persistentVolumeReclaimPolicy: Retain
          csi:
            driver: ossplugin.csi.alibabacloud.com
            volumeHandle: tf-train-pv
            nodePublishSecretRef:
              name: oss-secret
              namespace: default
            volumeAttributes:
              bucket: "<your-bucket-name>"
              url: "oss-<region>.aliyuncs.com"
              otherOpts: "-o max_stat_cache_size=0 -o allow_other"
              path: "/tf-train"
        ---
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: tf-train-pvc
        spec:
          accessModes:
          - ReadWriteMany
          resources:
            requests:
              storage: 10Gi
          selector:
            matchLabels:
              alicloud-pvname: tf-train-pv
        EOF
        ```
        
    2.  Create a training container using the following content.
        
        During training, intermediate files are written to the `/mnt/training_logs` directory of the pod and uploaded by ossfs to the `/tf-train/training_logs` directory of the OSS bucket.
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            app: tfjob
          name: tf-mnist
          namespace: default
        spec:
          containers:
          - command:
            - sh
            - -c
            - python /app/main.py
            env:
            - name: NVIDIA_VISIBLE_DEVICES
              value: void
            - name: gpus
              value: "0"
            - name: workers
              value: "1"
            - name: TEST_TMPDIR
              value: "/mnt"
            image: registry.cn-beijing.aliyuncs.com/tool-sys/tf-train-demo:rw
            imagePullPolicy: Always
            name: tensorflow
            ports:
            - containerPort: 20000
              name: tfjob-port
              protocol: TCP
            volumeMounts:
              - name: train
                mountPath: "/mnt"
            workingDir: /root
          priority: 0
          restartPolicy: Never
          securityContext: {}
          terminationGracePeriodSeconds: 30
          volumes:
          - name: train
            persistentVolumeClaim:
              claimName: tf-train-pvc
        EOF
        ```
        
2.  Verify that data can be read and written.
    
    1.  Check the status of the pod.
        
        ```
        kubectl get pod tf-mnist
        ```
        
        Wait a few minutes for the status of the pod to change from Running to Completed. The expected output is:
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        tf-mnist   0/1     Completed   0          2m12s
        ```
        
    2.  View the pod logs.
        
        Query the pod logs to check the time required to load data. This includes the time to download files from OSS and the time for TensorFlow to load the files.
        
        ```
        kubectl logs tf-mnist | grep dataload
        ```
        
        The following output is expected. The actual query time varies based on the instance performance and network status.
        
        ```
        dataload cost time:  1.54191803932
        ```
        
    3.  Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Verify that the relevant files are generated in the `/tf-train/training_logs` directory of the OSS bucket. If the files are present, it indicates that data can be read from and written to OSS.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3442293571/p722636.png)
        

### **Optimize ossfs data read speed through read/write splitting**

1.  Modify the application to implement read/write splitting.
    
    -   Read: Use a read-only ossfs 1.0 PV with optimized parameters to perform read operations.
        
    -   Write: Use a read/write ossfs 1.0 PV or the OSS SDK to perform write operations.
        
    
    ## Use a read/write ossfs 1.0 PV to perform write operations
    
    This section uses the handwriting image recognition and training application as an example. It shows how to modify the application to implement read/write splitting using a combination of read-only and read/write ossfs 1.0 PVs.
    
    1.  Create a read-only ossfs 1.0 PV using the following content.
        
        Optimize the configuration parameters of the ossfs 1.0 PV for read-only scenarios.
        
        -   Set `accessModes` of the PV and persistent volume claim (PVC) to `ReadOnlyMany`. You can limit the mount path of the bucket to `/tf-train/train/data`.
            
        -   In `otherOpts`, use the `-o kernel_cache -o max_stat_cache_size=10000 -o umask=022` option. This option allows ossfs to use the memory cache to accelerate data reading and increases the number of cached metadata entries. Caching 10,000 metadata entries consumes about 40 MB of memory, which you can adjust based on the instance type and the amount of data to be read. The `umask` option grants read permissions to container processes that are run by non-root users. For more information, see [Scenarios](#a6f4739058w0w).
            
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: Secret
        metadata:
          name: oss-secret
          namespace: default
        stringData:
          akId: "<your-accesskey-id>"
          akSecret: "<your-accesskey-secret>"
        ---
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: tf-train-pv
          labels:
            alicloud-pvname: tf-train-pv
        spec:
          capacity:
            storage: 10Gi
          accessModes:
            - ReadOnlyMany
          persistentVolumeReclaimPolicy: Retain
          csi:
            driver: ossplugin.csi.alibabacloud.com
            volumeHandle: tf-train-pv
            nodePublishSecretRef:
              name: oss-secret
              namespace: default
            volumeAttributes:
              bucket: "<your-bucket-name>"
              url: "oss-<region>.aliyuncs.com"
              otherOpts: "-o kernel_cache -o max_stat_cache_size=10000 -o umask=022 -o allow_other"
              path: "/tf-train/train/data"
        ---
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: tf-train-pvc
        spec:
          accessModes:
          - ReadOnlyMany
          resources:
            requests:
              storage: 10Gi
          selector:
            matchLabels:
              alicloud-pvname: tf-train-pv
        EOF
        ```
        
    2.  Create a read/write ossfs 1.0 PV using the following content.
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: tf-logging-pv
          labels:
            alicloud-pvname: tf-logging-pv
        spec:
          capacity:
            storage: 10Gi
          accessModes:
            - ReadWriteMany
          persistentVolumeReclaimPolicy: Retain
          csi:
            driver: ossplugin.csi.alibabacloud.com
            volumeHandle: tf-logging-pv
            nodePublishSecretRef:
              name: oss-secret
              namespace: default
            volumeAttributes:
              bucket: "<your-bucket-name>"
              url: "oss-<region>.aliyuncs.com"
              otherOpts: "-o max_stat_cache_size=0 -o allow_other"
              path: "/tf-train/training_logs"
        ---
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: tf-logging-pvc
        spec:
          accessModes:
          - ReadWriteMany
          resources:
            requests:
              storage: 10Gi
          selector:
            matchLabels:
              alicloud-pvname: tf-logging-pv
        EOF
        ```
        
    3.  Create a training container using the following content.
        
        **Note**
        
        You do not need to modify the logic of the training service. You only need to mount both the read-only and read/write PVs during deployment.
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            app: tfjob
          name: tf-mnist
          namespace: default
        spec:
          containers:
          - command:
            - sh
            - -c
            - python /app/main.py
            env:
            - name: NVIDIA_VISIBLE_DEVICES
              value: void
            - name: gpus
              value: "0"
            - name: workers
              value: "1"
            - name: TEST_TMPDIR
              value: "/mnt"
            image: registry.cn-beijing.aliyuncs.com/tool-sys/tf-train-demo:rw
            imagePullPolicy: Always
            name: tensorflow
            ports:
            - containerPort: 20000
              name: tfjob-port
              protocol: TCP
            volumeMounts:
              - name: train
                mountPath: "/mnt/train/data"
              - name: logging
                mountPath: "/mnt/training_logs"
            workingDir: /root
          priority: 0
          restartPolicy: Never
          securityContext: {}
          terminationGracePeriodSeconds: 30
          volumes:
          - name: train
            persistentVolumeClaim:
              claimName: tf-train-pvc
          - name: logging
            persistentVolumeClaim:
              claimName: tf-logging-pvc
        EOF
        ```
        
    
    ## Use OSS SDK to perform write operations
    
    This section uses the handwriting image recognition and training application as an example to describe how to modify the application to implement read/write splitting using the OSS SDK.
    
    1.  Install the SDK in the container environment. You can add the following content when you build the image. For more information, see [Installation](/help/en/oss/installation-14).
        
        ```
        RUN pip install oss2
        ```
        
    2.  Modify the source code by referring to the [Python SDK demo](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_basic.py) in the official OSS documentation.
        
        For the handwriting image recognition and training application, the relevant source code of the source image is as follows.
        
        ```
        def train():
            ...
        	saver = tf.train.Saver(max_to_keep=0)
            
            for i in range(FLAGS.max_steps):
                if i % 10 == 0:  # Record summaries and test-set accuracy
                    summary, acc = sess.run([merged, accuracy], feed_dict=feed_dict(False))
                    print('Accuracy at step %s: %s' % (i, acc))
                    if i % 100 == 0:
                        print('Save checkpoint at step %s: %s' % (i, acc))
                        saver.save(sess, FLAGS.log_dir + '/model.ckpt', global_step=i)
        ```
        
        In the preceding code, every 100 iterations, the intermediate file (checkpoint) is saved to the specified log\_dir directory, which is the `/mnt/training_logs` directory of the pod. Because the `max_to_keep` parameter of Saver is set to 0, all intermediate files are retained. If 1,000 iterations are performed, 10 sets of checkpoint files are stored in OSS.
        
        Modify the code to upload intermediate files using the OSS SDK. The modification requirements are as follows:
        
        1.  Configure access credentials to read the AccessKey and bucket information from environment variables. For more information, see [Configure access credentials](/help/en/oss/python-configuration-access-credentials).
            
        2.  To reduce container memory usage, you can set `max_to_keep` to 1. This way, only the latest set of intermediate training files is saved. Each time an intermediate file is saved, it is uploaded to the corresponding bucket directory using the `put_object_from_file` function.
            
        
        **Note**
        
        In scenarios where read and write directories are separated, you can use asynchronous I/O with the SDK to further improve training efficiency.
        
        ```
        import oss2
        from oss2.credentials import EnvironmentVariableCredentialsProvider
        
        auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
        url = os.getenv('URL','<default-url>')
        bucketname = os.getenv('BUCKET','<default-bucket-name>')
        bucket = oss2.Bucket(auth, url, bucketname)
        
        ...
        def train():
          ...
          saver = tf.train.Saver(max_to_keep=1)
        
         for i in range(FLAGS.max_steps):
            if i % 10 == 0:  # Record summaries and test-set accuracy
              summary, acc = sess.run([merged, accuracy], feed_dict=feed_dict(False))
              print('Accuracy at step %s: %s' % (i, acc))
              if i % 100 == 0:
                print('Save checkpoint at step %s: %s' % (i, acc))
                saver.save(sess, FLAGS.log_dir + '/model.ckpt', global_step=i)
                # FLAGS.log_dir = os.path.join(os.getenv('TEST_TMPDIR', '/mnt'),'training_logs')
                for path,_,file_list in os.walk(FLAGS.log_dir) :  
                  for file_name in file_list:  
                    bucket.put_object_from_file(os.path.join('tf-train/training_logs', file_name), os.path.join(path, file_name))
        ```
        
        The modified container image is `registry.cn-beijing.aliyuncs.com/tool-sys/tf-train-demo:ro`.
        
    3.  Modify parts of the application template to access OSS in read-only mode.
        
        -   Set `accessModes` of the PV and PVC to `ReadOnlyMany`. You can limit the mount path of the bucket to `/tf-train/train/data`.
            
        -   In `otherOpts`, use the `-o kernel_cache -o max_stat_cache_size=10000 -o umask=022` option. This option allows ossfs to use the memory cache to accelerate data reading and increases the number of cached metadata entries. Caching 10,000 metadata entries consumes about 40 MB of memory, which you can adjust based on the instance type and the amount of data to be read. The umask option grants read permissions to container processes that are run by non-root users. For more information, see [Scenarios](#a6f4739058w0w).
            
        -   In the pod template, add the OSS\_ACCESS\_KEY\_ID and OSS\_ACCESS\_KEY\_SECRET environment variables. The values can be retrieved from oss-secret and must be consistent with the information configured for the OSS PV.
            
        
        **Click to view the modified YAML file for the handwriting image recognition and training application example**
        
        ```
        cat << EOF | kubectl apply -f -
        apiVersion: v1
        kind: Secret
        metadata:
          name: oss-secret
          namespace: default
        stringData:
          akId: "<your-accesskey-id>"
          akSecret: "<your-accesskey-secret>"
        ---
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: tf-train-pv
          labels:
            alicloud-pvname: tf-train-pv
        spec:
          capacity:
            storage: 10Gi
          accessModes:
            - ReadOnlyMany
          persistentVolumeReclaimPolicy: Retain
          csi:
            driver: ossplugin.csi.alibabacloud.com
            volumeHandle: tf-train-pv
            nodePublishSecretRef:
              name: oss-secret
              namespace: default
            volumeAttributes:
              bucket: "<your-bucket-name>"
              url: "oss-<region>.aliyuncs.com"
              otherOpts: "-o kernel_cache -o max_stat_cache_size=10000 -o umask=022 -o allow_other"
              path: "/tf-train/train/data"
        ---
        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: tf-train-pvc
        spec:
          accessModes:
          - ReadOnlyMany
          resources:
            requests:
              storage: 10Gi
          selector:
            matchLabels:
              alicloud-pvname: tf-train-pv
        ---
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            app: tfjob
          name: tf-mnist
          namespace: default
        spec:
          containers:
          - command:
            - sh
            - -c
            - python /app/main.py
            env:
            - name: NVIDIA_VISIBLE_DEVICES
              value: void
            - name: gpus
              value: "0"
            - name: workers
              value: "1"
            - name: TEST_TMPDIR
              value: "/mnt"
            - name: OSS_ACCESS_KEY_ID      #The source of the AccessKey is the same as that of the PV.
              valueFrom:
                secretKeyRef:
                  name: oss-secret
                  key: akId
            - name: OSS_ACCESS_KEY_SECRET  #The source of the AccessKey is the same as that of the PV.
              valueFrom:
                secretKeyRef:
                  name: oss-secret 
                  key: akSecret
            - name: URL                    #You can ignore this if a default URL is configured.
              value: "https://oss-<region>.aliyuncs.com"
            - name: BUCKET                 #You can ignore this if a default BUCKET is configured.
              value: "<bucket-name>"
            image: registry.cn-beijing.aliyuncs.com/tool-sys/tf-train-demo:ro
            imagePullPolicy: Always
            name: tensorflow
            ports:
            - containerPort: 20000
              name: tfjob-port
              protocol: TCP
            volumeMounts:
              - name: train
                mountPath: "/mnt/train/data"
            workingDir: /root
          priority: 0
          restartPolicy: Never
          securityContext: {}
          terminationGracePeriodSeconds: 30
          volumes:
          - name: train
            persistentVolumeClaim:
              claimName: tf-train-pvc
        EOF
        ```
        
    
2.  Verify that data can be read and written.
    
    1.  Check the status of the pod.
        
        ```
        kubectl get pod tf-mnist
        ```
        
        Wait a few minutes for the status of the pod to change from `Running` to `Completed`. The expected output is:
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        tf-mnist   0/1     Completed   0          2m25s
        ```
        
    2.  View the pod logs.
        
        Query the pod logs to check the time required to load data. This includes the time to download files from OSS and the time for TensorFlow to load the files.
        
        ```
        kubectl logs tf-mnist | grep dataload
        ```
        
        The following output is expected. The actual query time varies based on the instance performance and network status. The expected output indicates that you can improve data read speed by correctly using the cache in read-only mode. The optimization effect is more significant in scenarios such as large-scale training or continuous data loading.
        
        ```
        dataload cost time:  0.843528985977
        ```
        
    3.  Log on to the [OSS Management Console](https://oss.console.alibabacloud.com/). Verify that the relevant files are generated in the `/tf-train/training_logs` directory of the OSS bucket. If the files are present, it indicates that data can be read from and written to OSS.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3442293571/p722635.png)
        

## **References**

### **OSS SDK reference**

The following links provide reference code for the official Alibaba Cloud OSS SDK:

-   [Java](/help/en/oss/developer-reference/oss-java-sdk/)
    
-   [Python](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-python)
    
-   [Go](/help/en/oss/developer-reference/quick-start)
    
-   [C++](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-cpp)
    
-   [C](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-c)
    

For more supported languages, such as PHP, Node.js, Browser.js, .NET, Android, iOS, and Ruby, see [SDK Reference](/help/en/oss/developer-reference/sdk-code-samples/).

### **Other tools for implementing read/write splitting for OSS**

**Tool**

**References**

[OSS Management Console](https://oss.console.alibabacloud.com/)

[Quick Start](/help/en/oss/user-guide/console-quick-start)

OpenAPI

[PutObject](/help/en/oss/developer-reference/putobject)

ossutil command line interface

[cp (upload files)](/help/en/oss/developer-reference/upload-objects-6)

ossbrowser graphical management tool

[Common operations](/help/en/oss/developer-reference/use-ossbrowser)
