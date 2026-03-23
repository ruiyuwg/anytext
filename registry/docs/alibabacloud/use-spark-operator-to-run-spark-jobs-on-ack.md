Running large-scale Spark workloads on Kubernetes requires automating job deployment, resource allocation, and lifecycle management. The `ack-spark-operator` component handles these tasks, letting you define Spark jobs as Kubernetes resources and manage them with standard `kubectl` commands. This topic walks you through installing Spark Operator in an ACK cluster, submitting a Spark job, monitoring execution, and cleaning up resources.

## How it works

Container Service for Kubernetes (ACK) provides the `ack-spark-operator` component, built on the open-source [kubeflow/spark-operator](https://github.com/kubeflow/spark-operator). You submit and manage Spark jobs through CustomResourceDefinitions (CRDs) such as `SparkApplication` and `ScheduledSparkApplication`. Spark Operator monitors these resources and leverages Kubernetes features like auto scaling, health checks, and resource management to run jobs efficiently. For more information, see [Spark Operator | Kubeflow](https://www.kubeflow.org/docs/components/spark-operator/).

**Why run Spark on ACK:**

-   **Declarative job management** -- Define Spark jobs as Kubernetes resources. Spark Operator handles deployment and lifecycle transitions automatically.
    
-   **Multi-tenancy** -- Isolate teams with Kubernetes namespaces and resource quotas. Use node selection to dedicate compute resources to specific Spark workloads.
    
-   **Elastic resource provisioning** -- Scale with Elastic Container Instance (ECI) or elastic node pools during peak hours to balance performance and cost.
    

**Use cases:**

-   **Data analysis** -- Interactive data exploration and cleansing with Spark.
    
-   **Batch computing** -- Scheduled jobs that process large datasets on a recurring basis.
    
-   **Real-time processing** -- Stream processing with the Spark Streaming library.
    

## Procedure overview

1.  **Install ack-spark-operator** -- Deploy Spark Operator in your ACK cluster.
    
2.  **Submit a Spark job** -- Create a `SparkApplication` manifest and apply it.
    
3.  **Monitor the job** -- Check job status, pod state, and driver logs.
    
4.  **Access the Spark web UI** -- Port-forward the driver service to view execution details locally.
    
5.  **(Optional) Update the job** -- Modify parameters and reapply the manifest.
    
6.  **(Optional) Delete the job** -- Remove completed or unused Spark jobs to free resources.
    

## Prerequisites

Before you begin, make sure you have:

-   An ACK Pro cluster or ACK Serverless Pro cluster running Kubernetes 1.24 or later. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/), [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2), and [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster)
    
-   kubectl configured to connect to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster)
    

## Step 1: Install ack-spark-operator

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, choose **Marketplace** > **Marketplace**.
    
2.  On the **Marketplace** page, click the **App Catalog** tab. Find and click **ack-spark-operator**.
    
3.  On the **ack-spark-operator** page, click **Deploy**.
    
4.  In the **Deploy** panel, select a cluster and namespace, keep the default release name, then click **Next**.
    
5.  In the **Parameters** step, configure the parameters in the YAML editor as listed in the following table, then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    `controller.replicas`
    
    Number of controller replicas.
    
    `1`
    
    `webhook.replicas`
    
    Number of webhook replicas.
    
    `1`
    
    `spark.jobNamespaces`
    
    Namespaces where Spark jobs can run. Set to `[""]` to allow all namespaces, or specify a list such as `["ns1","ns2"]`.
    
    `["default"]`
    
    `spark.serviceAccount.name`
    
    Name of the ServiceAccount that Spark Operator automatically creates (along with the corresponding role-based access control (RBAC) resources) in each namespace specified by `spark.jobNamespaces`. Specify this name in your `SparkApplication` manifests.
    
    `spark-operator-spark`
    

### Verify the installation

Run the following command to confirm that the Spark Operator pods are running:

```
kubectl get pods -n <operator-namespace>
```

Replace `<operator-namespace>` with the namespace you selected during installation. The output should show pods in `Running` status:

```
NAME                                       READY   STATUS    RESTARTS   AGE
spark-operator-controller-xxxxx-xxxxx      1/1     Running   0          60s
spark-operator-webhook-xxxxx-xxxxx         1/1     Running   0          60s
```

## Step 2: Submit a Spark job

Create a `SparkApplication` manifest to define and submit a Spark job. The following example runs the SparkPi calculation.

1.  Create a file named `spark-pi.yaml` with the following content:
    
    ```
    apiVersion: sparkoperator.k8s.io/v1beta2
       kind: SparkApplication
       metadata:
         name: spark-pi
         namespace: default     # Must match a namespace listed in spark.jobNamespaces
       spec:
         type: Scala
         mode: cluster
         image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
         imagePullPolicy: IfNotPresent
         mainClass: org.apache.spark.examples.SparkPi
         mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
         arguments:
         - "1000"
         sparkVersion: 3.5.2
         driver:
           cores: 1
           coreLimit: 1200m
           memory: 512m
           serviceAccount: spark-operator-spark   # Must match spark.serviceAccount.name
         executor:
           instances: 1
           cores: 1
           coreLimit: 1200m
           memory: 512m
         restartPolicy:
           type: Never
    ```
    
2.  Apply the manifest:
    
    ```
    kubectl apply -f spark-pi.yaml
    ```
    
    Expected output:
    
    ```
    sparkapplication.sparkoperator.k8s.io/spark-pi created
    ```
    

## Step 3: Monitor the Spark job

After submitting a job, use `kubectl` to track its status, inspect pods, and read logs.

### Check job status

```
kubectl get sparkapplication spark-pi
```

Example output:

```
NAME       STATUS      ATTEMPTS   START                  FINISH       SUSPEND   AGE
spark-pi   SUBMITTED   1          2024-06-04T03:17:11Z   <no value>   false     15s
```

### Check pod status

List pods associated with the job:

```
kubectl get pod -l sparkoperator.k8s.io/app-name=spark-pi
```

Example output while the job is running:

```
NAME                               READY   STATUS    RESTARTS   AGE
spark-pi-7272428fc8f5f392-exec-1   1/1     Running   0          13s
spark-pi-7272428fc8f5f392-exec-2   1/1     Running   0          13s
spark-pi-driver                    1/1     Running   0          49s
```

After the job completes, the driver automatically deletes all executor pods.

### View job details

```
kubectl describe sparkapplication spark-pi
```

**Example output**

The output varies depending on job status.

```
Name:         spark-pi
Namespace:    default
Labels:       <none>
Annotations:  <none>
API Version:  sparkoperator.k8s.io/v1beta2
Kind:         SparkApplication
Metadata:
  Creation Timestamp:  2024-06-04T03:16:59Z
  Generation:          1
  Resource Version:    1350200
  UID:                 1a1f9160-5dbb-XXXX-XXXX-be1c1fda4859
Spec:
  Arguments:
    1000
  Driver:
    Core Limit:  1200m
    Cores:       1
    Memory:           512m
    Service Account:  spark-operator-spark
  Executor:
    Core Limit:  1200m
    Cores:       1
    Instances:   1
    Memory:               512m
  Image:                  registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
  Image Pull Policy:      IfNotPresent
  Main Application File:  local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
  Main Class:             org.apache.spark.examples.SparkPi
  Mode:                   cluster
  Restart Policy:
    Type:         Never
  Spark Version:  3.5.2
  Type:           Scala
Status:
  Application State:
    State:  COMPLETED
  Driver Info:
    Pod Name:             spark-pi-driver
    Web UI Address:       172.XX.XX.92:0
    Web UI Port:          4040
    Web UI Service Name:  spark-pi-ui-svc
  Execution Attempts:     1
  Executor State:
    spark-pi-26c5XXXXX1408337-exec-1:  COMPLETED
  Last Submission Attempt Time:        2024-06-04T03:17:11Z
  Spark Application Id:                spark-0042dead12XXXXXX43675f09552a946
  Submission Attempts:                 1
  Submission ID:                       117ee161-3951-XXXX-XXXX-e7d24626c877
  Termination Time:                    2024-06-04T03:17:55Z
Events:
  Type    Reason                     Age   From                          Message
  ----    ------                     ----  ----                          -------
  Normal  SparkApplicationAdded      91s   spark-application-controller  SparkApplication spark-pi was added, enqueuing it for submission
  Normal  SparkApplicationSubmitted  79s   spark-application-controller  SparkApplication spark-pi was submitted successfully
  Normal  SparkDriverRunning         61s   spark-application-controller  Driver spark-pi-driver is running
  Normal  SparkExecutorPending       56s   spark-application-controller  Executor [spark-pi-26c5XXXXX1408337-exec-1] is pending
  Normal  SparkExecutorRunning       53s   spark-application-controller  Executor [spark-pi-26c5XXXXX1408337-exec-1] is running
  Normal  SparkDriverCompleted       35s   spark-application-controller  Driver spark-pi-driver completed
  Normal  SparkApplicationCompleted  35s   spark-application-controller  SparkApplication spark-pi completed
  Normal  SparkExecutorCompleted     35s   spark-application-controller  Executor [spark-pi-26c5XXXXX1408337-exec-1] completed
```

### View driver logs

Read the last 20 log lines from the driver pod:

```
kubectl logs --tail=20 spark-pi-driver
```

Example output:

```
24/05/30 10:05:30 INFO TaskSchedulerImpl: Removed TaskSet 0.0, whose tasks have all completed, from pool
24/05/30 10:05:30 INFO DAGScheduler: ResultStage 0 (reduce at SparkPi.scala:38) finished in 7.942 s
24/05/30 10:05:30 INFO DAGScheduler: Job 0 is finished. Cancelling potential speculative or zombie tasks for this job
24/05/30 10:05:30 INFO TaskSchedulerImpl: Killing all running tasks in stage 0: Stage finished
24/05/30 10:05:30 INFO DAGScheduler: Job 0 finished: reduce at SparkPi.scala:38, took 8.043996 s
Pi is roughly 3.1419522314195225
24/05/30 10:05:30 INFO SparkContext: SparkContext is stopping with exitCode 0.
24/05/30 10:05:30 INFO SparkUI: Stopped Spark web UI at http://spark-pi-1e18858fc8f56b14-driver-svc.default.svc:4040
24/05/30 10:05:30 INFO KubernetesClusterSchedulerBackend: Shutting down all executors
24/05/30 10:05:30 INFO KubernetesClusterSchedulerBackend$KubernetesDriverEndpoint: Asking each executor to shut down
24/05/30 10:05:30 WARN ExecutorPodsWatchSnapshotSource: Kubernetes client has been closed.
24/05/30 10:05:30 INFO MapOutputTrackerMasterEndpoint: MapOutputTrackerMasterEndpoint stopped!
24/05/30 10:05:30 INFO MemoryStore: MemoryStore cleared
24/05/30 10:05:30 INFO BlockManager: BlockManager stopped
24/05/30 10:05:30 INFO BlockManagerMaster: BlockManagerMaster stopped
24/05/30 10:05:30 INFO OutputCommitCoordinator$OutputCommitCoordinatorEndpoint: OutputCommitCoordinator stopped!
24/05/30 10:05:30 INFO SparkContext: Successfully stopped SparkContext
24/05/30 10:05:30 INFO ShutdownHookManager: Shutdown hook called
24/05/30 10:05:30 INFO ShutdownHookManager: Deleting directory /var/data/spark-14ed60f1-82cd-4a33-b1b3-9e5d975c5b1e/spark-01120c89-5296-4c83-8a20-0799eef4e0ee
24/05/30 10:05:30 INFO ShutdownHookManager: Deleting directory /tmp/spark-5f98ed73-576a-41be-855d-dabdcf7de189
```

The line `Pi is roughly 3.1419522314195225` confirms the computation completed successfully.

## Step 4: Access the Spark web UI

The Spark web UI displays execution metrics for a running job. The web UI is accessible only while the job is running or the driver pod is in `Running` state. After the job completes, the web UI stops and becomes unavailable.

When `ack-spark-operator` is installed, the `controller.uiService.enable` parameter defaults to `true`, which automatically creates a Kubernetes Service for the web UI. If you set this parameter to `false` during installation, no Service is created and you must port-forward the pod directly.

**Important**

The `kubectl port-forward` command is intended for testing environments only and is not suitable for production use.

1.  Forward the web UI port to your local machine. Choose one of the following methods:
    
    -   **Port-forward via Service** (when `controller.uiService.enable` is `true`):
        
        ```
        kubectl port-forward services/spark-pi-ui-svc 4040
        ```
        
    -   **Port-forward via pod** (when no Service is available):
        
        ```
        kubectl port-forward pods/spark-pi-driver 4040
        ```
        
        Expected output:
        
        ```
        Forwarding from 127.0.0.1:4040 -> 4040
        Forwarding from [::1]:4040 -> 4040
        ```
        
2.  Open http://127.0.0.1:4040 in your browser.
    

## (Optional) Step 5: Update the Spark job

Modify the `SparkApplication` manifest and reapply it to update job parameters. The following example increases the computation from 1,000 to 10,000 iterations and scales executors from 1 to 2.

1.  Edit `spark-pi.yaml`. Change the `arguments` and `executor.instances` values:
    
    ```
    apiVersion: sparkoperator.k8s.io/v1beta2
       kind: SparkApplication
       metadata:
         name: spark-pi
       spec:
         type: Scala
         mode: cluster
         image: registry-cn-hangzhou.ack.aliyuncs.com/ack-demo/spark:3.5.2
         imagePullPolicy: IfNotPresent
         mainClass: org.apache.spark.examples.SparkPi
         mainApplicationFile: local:///opt/spark/examples/jars/spark-examples_2.12-3.5.2.jar
         arguments:
         - "10000"
         sparkVersion: 3.5.2
         driver:
           cores: 1
           coreLimit: 1200m
           memory: 512m
           serviceAccount: spark-operator-spark   # Must match spark.serviceAccount.name
         executor:
           instances: 2
           cores: 1
           coreLimit: 1200m
           memory: 512m
         restartPolicy:
           type: Never
    ```
    
2.  Reapply the manifest:
    
    ```
    kubectl apply -f spark-pi.yaml
    ```
    
3.  Verify that the job restarts with the new configuration:
    
    ```
    kubectl get sparkapplication spark-pi
    ```
    
    Expected output:
    
    ```
    NAME       STATUS    ATTEMPTS   START                  FINISH       SUSPEND   AGE
    spark-pi   RUNNING   1          2024-06-04T03:37:34Z   <no value>   false     20m
    ```
    

## (Optional) Step 6: Delete the Spark job

Delete the Spark job to release cluster resources.

Delete by manifest:

```
kubectl delete -f spark-pi.yaml
```

Alternatively, delete by resource name:

```
kubectl delete sparkapplication spark-pi
```
