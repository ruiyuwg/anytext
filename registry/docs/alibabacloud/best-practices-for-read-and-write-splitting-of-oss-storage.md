In read-intensive scenarios, performing frequent write operations on an Object Storage Service (OSS) volume can degrade read performance. This is because clients that offer full write compatibility often do so at the cost of read optimization. By implementing a read/write splitting pattern—using a highly optimized client for reads and a separate method for writes—you can minimize this performance impact and significantly improve data access speeds. This topic describes how to implement read/write splitting by using different OSS volume clients or tools such as OSS SDK and ossutil in read-intensive scenarios.

## Prerequisites

-   The storage plug-in of the cluster is Container Storage Interface (CSI). Different clients require different versions of the CSI plug-in. Make sure that you upgrade the plug-in at the earliest opportunity. For more information, see [Manage the CSI plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
    
-   [An OSS bucket is created](/help/en/oss/user-guide/console-quick-start#section-73g-119-c8q). The bucket belongs to the same Alibaba Cloud account as your cluster.
    
    **Important**
    
    We recommend that you do not use OSS buckets across accounts.
    

## **Scenarios**

OSS is commonly used in read-only and read/write scenarios. For read-intensive scenarios, we recommend that you separate read and write operations on OSS data:

-   Read: Select different OSS volume clients or modify configuration parameters to optimize data read speed.
    
-   Write: Use the ossfs 1.0 to implement full write capabilities or use tools such as OSS SDK to write data.
    

### **Read-only scenarios**

-   In big data inference, analysis, and query scenarios, we recommend that you set the access mode of OSS volumes to ReadOnlyMany to ensure that data is not accidentally deleted or modified.
    
-   OSS volumes currently support three types of clients: ossfs 1.0, ossfs 2.0, and strmvol. All of them support read-only operations.
    
    -   We recommend that you upgrade the CSI plug-in to version 1.33.1 or later and use ossfs 2.0 instead of ossfs 1.0 to optimize performance in read-only scenarios. For information about how to use ossfs 2.0 volumes, see [Use ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0).
        
    -   If your business involves reading massive small files, such as dataset reading, quantization backtesting, and time series log analysis, you can use strmvol volumes. For information about how to use strmvol volumes, see [Use strmvol volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-strmvol-storage-volumes).
        
    
    For more information about client scenarios and selection recommendations, see [Client selection reference](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/client-selection-reference).
    
-   If your business requires the use of the ossfs 1.0 client in read-only scenarios, you can refer to the following parameter configurations to improve data read performance.
    
    **Parameter**
    
    **Description**
    
    kernel\_cache
    
    Uses the kernel cache to accelerate read operations. This feature is suitable for scenarios where you do not need to access the up-to-date data in real time.
    
    When ossfs needs to read a file multiple times and the query hits the cache, idle memory in the kernel cache is used to cache the file to accelerate data retrieval.
    
    parallel\_count
    
    Specifies the maximum number of parts that can be concurrently downloaded or uploaded during multipart downloading or uploading. Default value: 20.
    
    max\_multireq
    
    Specifies the maximum number of queries that can concurrently retrieve file metadata. The value of this parameter must be greater than or equal to that of the parallel\_count parameter. Default value: 20.
    
    max\_stat\_cache\_size
    
    Specifies the maximum number of files whose metadata can be stored in metadata caches. Default value: 1000. To disable metadata caches, set this parameter to 0.
    
    In scenarios where you do not need to access the up-to-date data in real time, when the current directory contains large numbers of files, you can increase the number of caches to accelerate LIST operations.
    
    direct\_read
    
    ossfs 1.91 and later versions add the direct read mode for read-only scenarios.
    
    -   For more information about the features and performance testing of direct read mode, see [New features of ossfs 1.0 and ossfs performance benchmarking](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above).
        
    -   For information about how to optimize direct read mode, see [Performance optimization in read-only scenarios](/help/en/oss/developer-reference/optimising-performance-in-read-only-scenarios).
        
    

### **Read/write scenarios**

-   In read/write scenarios, you must set the access mode of OSS volumes to ReadWriteMany.
    
-   Currently, ossfs 1.0 supports full write operations, while ossfs 2.0 only supports sequential append writes. When you perform write operations through ossfs, pay attention to the following points:
    
    -   ossfs does not guarantee the consistency of data written by concurrent write operations.
        
    -   When the OSS volume is mounted to a pod, if you log on to the pod or the host of the pod and delete or modify a file in the mounted path, the source file in the OSS bucket is also deleted or modified. To avoid accidentally deleting important data, you can enable version control for the OSS bucket. For more information, see [Versioning](/help/en/oss/user-guide/overview-78/).
        
-   In read-intensive scenarios, especially when read and write paths are separated, such as in the training process of big data business, we recommend that you separate read and write operations on OSS data. Set the access mode of OSS volumes to `ReadOnlyMany`, optimize data read speed by configuring cache parameters, and write data through tools such as the SDK. For more information, see [Example](#7120f1c0580ya).
    

## **Example**

In this example, a hand-drawn image recognition training application is used to describe how to configure OSS read/write splitting. This example is a simple deep learning model training. The application reads the training dataset from the `/data-dir` directory of the OSS bucket through a read-only OSS volume and writes checkpoints to the `/log-dir` directory of the OSS bucket through a read/write OSS volume or OSS SDK.

Before you begin, download the MNIST handwritten image training set and upload them to the `/tf-train/train/data/` directory in your OSS bucket. This allows your application to access the dataset.

-   MNIST handwritten image training set
    
    -   [train-labels-idx1-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/spmhjd/train-labels-idx1-ubyte.gz)
        
    -   [train-images-idx3-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/epidui/train-images-idx3-ubyte.gz)
        
    -   [t10k-labels-idx1-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/hyqocz/t10k-labels-idx1-ubyte.gz)
        
    -   [t10k-images-idx3-ubyte.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250801/ygqzqn/t10k-images-idx3-ubyte.gz)
        
-   Sample file uploaded in an OSS bucket
    
    ![oss-读写分离1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0616704571/p991683.png)
    

### Baseline: Using a single read/write volume

Because writing checkpoints is a sequential append write operation, you can choose either ossfs 1.0 or ossfs 2.0 to implement read/write operations.

1.  Deploy a hand-drawn image recognition training application based on the following template.
    
    The application is written in Python and a statically provisioned OSS volume is mounted to the application. For information about how to configure OSS volumes, see [Mount a statically provisioned ossfs 1.0 volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-oss-volumes) or [Use ossfs 2.0 volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-oss-volumes-through-ossfs-2-0).
    
    In the following example, the `/tf-train` subdirectory of the OSS bucket is mounted to the `/mnt` directory of the pod.
    
    1.  Create an ossfs 1.0 volume based on the following content:
        
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
        
    2.  Create a training container based on the following content.
        
        During the training process, the application writes intermediate files to the `/mnt/training_logs` directory within the pod. This directory is managed by ossfs, which automatically uploads any new files to the `/tf-train/training_logs/` directory in your OSS bucket.
        
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
        
2.  Verify that data can be read and written as expected.
    
    1.  Check the status of the pod.
        
        ```
        kubectl get pod tf-mnist
        ```
        
        Wait a few minutes until the status of the pod changes from Running to Completed. Expected output:
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        tf-mnist   0/1     Completed   0          2m12s
        ```
        
    2.  Check the operational log of the pod.
        
        Check the data loading time in the operational log of the pod. The loading time includes the amount of time required for downloading files from OSS and loading the files to TensorFlow.
        
        ```
        kubectl logs tf-mnist | grep dataload
        ```
        
        The system displays information similar to the following output. The actual query time depends on the instance performance and network status.
        
        ```
        dataload cost time:  1.54191803932
        ```
        
    3.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). You can find that related files are uploaded to the `/tf-train/training_logs` directory of the OSS bucket. This indicates that data can be read and written from OSS as expected.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3442293571/p722636.png)
        

### Optimized: Implementing read/write splitting

1.  Reconfigure the application to implement read/write splitting.
    
    -   Read: Use optimized ossfs 1.0 read-only volumes for read operations
        
    -   Write: Use ossfs 1.0 read/write volumes or OSS SDK for write operations
        
    
    ## Use ossfs 1.0 read/write volumes for write operations
    
    A hand-drawn image recognition training application and ossfs 1.0 read-only + read/write volumes are used as an example to describe how to reconfigure an application to support read/write splitting.
    
    1.  Create an ossfs 1.0 read-only volume based on the following content.
        
        Optimize the configuration parameters of the ossfs 1.0 volume for read-only scenarios.
        
        -   Change the `accessModes` of both the PV and PVC to `ReadOnlyMany`. The mount path of the bucket can be reduced to `/tf-train/train/data`.
            
        -   In the `otherOpts` field, add the options `-o kernel_cache -o max_stat_cache_size=10000 -o umask=022`:
            
            -   The `kernel_cache` option accelerates ossfs data reads by using the system's memory buffer.
                
            -   The `max_stat_cache_size` option increases the metadata cache (a value of 10,000 consumes about 40 MB of memory; adjust as needed for your instance size).
                
            -   The `umask=022` option grants read permissions to non-root processes in the container.
                
            
            For more information, see [Scenarios](#a6f4739058w0w).
            
        
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
        
    2.  Create an ossfs 1.0 read/write volume based on the following content:
        
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
        
    3.  Create a training container based on the following content:
        
        **Note**
        
        The training business logic does not need any modification. You only need to mount both read-only and read/write volumes when deploying.
        
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
        
    
    ## Use OSS SDK for write operations
    
    In this example, a hand-drawn image recognition training application and OSS SDK are used to describe how to reconfigure an application to support read/write splitting.
    
    1.  Install OSS SDK in a Container Service for Kubernetes (ACK) environment. Add the following content when you build the image. For more information, see [Installation](/help/en/oss/installation-14).
        
        ```
        RUN pip install oss2
        ```
        
    2.  Modify the source code based on [Python SDK demo](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_basic.py).
        
        The following code block shows the source code related to the base image when the preceding hand-drawn image recognition training application is used:
        
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
        
        In the preceding code, every 100 iterations, intermediate files (checkpoints) are stored in the specified log\_dir directory, which is the `/mnt/training_logs` directory of the pod. Because the `max_to_keep` parameter of Saver is 0, all intermediate files are maintained. After 1,000 iterations, 10 sets of checkpoints are stored in OSS.
        
        Modify the code based on the following requirements to use OSS SDK to upload checkpoints.
        
        1.  Configure credentials to read the AccessKey pair and bucket information from environment variables. For more information, see [Configure access credentials using OSS SDK for Python 1.0](/help/en/oss/python-configuration-access-credentials).
            
        2.  To reduce container memory usage, you can set `max_to_keep` to 1, which means that only the latest set of training intermediate files is always saved. Each time intermediate files are saved, they are uploaded to the corresponding bucket directory by using the `put_object_from_file` function.
            
        
        **Note**
        
        When you use OSS SDK in read/write splitting scenarios, you can use asynchronous reads and writes to accelerate training.
        
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
        
    3.  Modify the application template to require the application to access OSS in read-only mode.
        
        1.  Change the `accessModes` of both the PV and PVC to `ReadOnlyMany`. The mount path of the bucket can be reduced to `/tf-train/train/data`.
            
        2.  In the `otherOpts` field, add the options `-o kernel_cache -o max_stat_cache_size=10000 -o umask=022`:
            
            -   The `kernel_cache` option accelerates ossfs data reads by using the system's memory buffer.
                
            -   The `max_stat_cache_size` option increases the metadata cache (a value of 10,000 consumes about 40 MB of memory; adjust as needed for your instance size).
                
            -   The `umask=022` option grants read permissions to non-root processes in the container.
                
            
            For more information, see [Scenarios](#a6f4739058w0w).
            
        3.  Add the `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables to the pod template. You can obtain the values of the environment variables from oss-secret. Make sure that the information is the same as the OSS volume.
            
    
    **View the modified YAML file for the hand-drawn image recognition training application**
    
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
        - name: OSS_ACCESS_KEY_ID      #Specify the AccessKey ID used to access the PV.
          valueFrom:
            secretKeyRef:
              name: oss-secret
              key: akId
        - name: OSS_ACCESS_KEY_SECRET  #Specify the AccessKey secret used to access the PV.
          valueFrom:
            secretKeyRef:
              name: oss-secret 
              key: akSecret
        - name: URL                    #Ignore if the default URL is configured.
          value: "https://oss-<region>.aliyuncs.com"
        - name: BUCKET                 #Ignore if the default bucket is configured.
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
    
2.  Verify that data can be read and written as expected.
    
    1.  Check the status of the pod.
        
        ```
        kubectl get pod tf-mnist
        ```
        
        Wait a few minutes until the status of the pod changes from `Running` to `Completed`. Expected output:
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        tf-mnist   0/1     Completed   0          2m25s
        ```
        
    2.  Check the operational log of the pod.
        
        Check the data loading time in the operational log of the pod. The loading time includes the amount of time required for downloading files from OSS and loading the files to TensorFlow.
        
        ```
        kubectl logs tf-mnist | grep dataload
        ```
        
        Expected output:
        
        ```
        dataload cost time:  0.843528985977
        ```
        
        The output indicates that caches are used to accelerate read operations in read-only mode. This method is ideal for large-scale training or continuous data loading scenarios.
        
    3.  Log on to the [OSS console](https://oss.console.alibabacloud.com/). You can find that related files are displayed in the `/tf-train/training_logs` directory of the OSS bucket. This indicates that data can be read and written from OSS as expected.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3442293571/p722635.png)
        

## **References**

### **OSS SDK reference**

The following is some reference code for the official Alibaba Cloud OSS SDK:

-   [Java](/help/en/oss/developer-reference/oss-java-sdk/)
    
-   [Python](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-python)
    
-   [Go](/help/en/oss/developer-reference/quick-start)
    
-   [C++](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-cpp)
    
-   [C](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-c)
    

For more information about supported languages, such as PHP, Node.js, Browser.js, .NET, Android, iOS, and Ruby, see [SDK Reference](/help/en/oss/developer-reference/sdk-code-samples/).

### **Other tools for implementing OSS read/write splitting**

**Tool**

**References**

[OSS console](https://oss.console.alibabacloud.com/)

[Get started by using the OSS console](/help/en/oss/user-guide/console-quick-start)

OpenAPI

[PutObject](/help/en/oss/developer-reference/putobject)

ossutil

[Upload objects](/help/en/oss/developer-reference/upload-objects-6)

ossbrowser

[Common operations](/help/en/oss/developer-reference/use-ossbrowser)
