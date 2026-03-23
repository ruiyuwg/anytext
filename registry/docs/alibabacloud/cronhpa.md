If your application's resource usage follows a predictable periodic pattern, use **Cron Horizontal Pod Autoscaler (CronHPA)** to scale pods at specific times. Such scheduling is ideal for scenarios with recurring traffic peaks or scheduled background jobs.

## **Before you begin**

ACK provides multiple scaling solutions at both the scheduling (workload) and resource (node) layers. Before you proceed, read [Auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/) to determine the best strategy for your specific use case.

## How CronHPA works

CronHPA is powered by `kubernetes-cronhpa-controller`, a time-based pod scaling controller. It uses crontab-like syntax to dynamically adjust resources, making it ideal for workloads with periodic traffic fluctuations. CronHPA works with any Kubernetes object that supports the [Scale subresource](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#scale-subresource), such as Deployments and StatefulSets.

**Sample YAML configuration**

```
apiVersion: autoscaling.alibabacloud.com/v1beta1
kind: CronHorizontalPodAutoscaler
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: cronhpa-sample
  namespace: default 
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx-deployment-basic  # The target workload to scale
  excludeDates:                 # Dates to skip scaling (cron format)
  - "* * * 15 11 *"             # Skip November 15th
  - "* * * * * 5"               # Skip every Friday
  jobs:
  - name: "scale-down"
    schedule: "30 */1 * * * *"  # Trigger at the 30th second of every minute (e.g. 08:00:30, 08:01:30)
    targetSize: 1               # Target replica count
    runOnce: false              # Whether to run the job only once (default: false)
  - name: "scale-up"
    schedule: "0 */1 * * * *"   # Trigger at the 0th second of every minute (e.g. 08:00:00, 08:01:00)
    targetSize: 3               # Target replica count
    runOnce: false             
```

The following table describes each parameter.

**Parameter**

**Description**

`scaleTargetRef`

The target object for scaling. CronHPA supports any Kubernetes resource that implements the [Scale subresource](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#scale-subresource).

`excludeDates`

An array of dates when scaling jobs should be skipped. The minimum unit is a day.

Format: `"* * * * * *"` = `<Seconds> <Minutes> <Hours> <Day of month> <Month> <Day of week>`.

For example, to skip all jobs on November 15th:

```
excludeDates:
  - "* * * 15 11 *"
```

`jobs`

A list of scaling jobs. You can define multiple jobs in a single CronHPA spec. Each job supports the following fields:

-   `name`: A unique name for the job.
    
-   `schedule`: A cron expression that defines when the job runs. Based on the [go-cron](https://github.com/ringtail/go-cron) library, this expression uses a 6-field format:
    
    ```
    Field name   | Mandatory? | Allowed values  | Allowed special characters
      ----------   | ---------- | --------------  | --------------------------
      Seconds      | Yes        | 0-59            | * / , -
      Minutes      | Yes        | 0-59            | * / , -
      Hours        | Yes        | 0-23            | * / , -
      Day of month | Yes        | 1-31            | * / , - ?
      Month        | Yes        | 1-12 or JAN-DEC | * / , -
      Day of week  | Yes        | 0-6 or SUN-SAT  | * / , - ?
    ```
    
-   `targetSize`: The desired number of pod replicas when the schedule is triggered.
    
-   `runOnce`: Set to `true` to run the job only once. After the first execution, the job exits. Default: `false`.
    

## Step 1: Install the CronHPA add-on

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  Click the **Manage Applications** tab, find **ack-kubernetes-cronhpa-controller**, and install the add-on as prompted.
    

## Step 2: Create CronHPA jobs

Before creating CronHPA jobs, ensure the CronHPA is running and the target workload has only one HPA object associated with it. The following example uses a Deployment. The steps are similar for other workload types.

### Option 1: Create CronHPA jobs during workload creation

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workloads** > **Deployments**.
    
3.  On the **Deployments** page, click **Create from Image**.
    
4.  On the **Create** page, configure the settings to create a CronHPA-enabled Deployment.
    
    For detailed configuration instructions, see [Create a stateless workload (Deployment)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
    -   **Basic Information**: Set the application name and replica count.
        
    -   **Container**: Specify the container image and resource requests for CPU and memory.
        
    -   **Advanced**:
        
        -   In the **Scaling** section, enable **CronHPA**. Install the add-on if prompted, then configure the scaling parameters:
            
            -   **Job Name**: A unique name for the CronHPA job.
                
            -   **Desired Number of Replicas**: The number of pod replicas to scale to at the scheduled time.
                
            -   **Scaling Schedule**: The cron expression that defines the scaling schedule. For more information, see [kubernetes-cronhpa-controller](https://github.com/AliyunContainerService/kubernetes-cronhpa-controller).
                

### Option 2: Create CronHPA jobs for an existing workload

#### **Workload page**

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workloads** > **Deployments**.
    
3.  Click the target workload, then click the **Pod Scaling** tab. In the **CronHPA** section, click **Create**.
    
    ![create](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2431471161/p206630.png)
    
    **Parameter**
    
    **Description**
    
    **Job Name**
    
    A unique name for the CronHPA job.
    
    **Desired Number of Replicas**
    
    The number of pod replicas to scale to at the scheduled time.
    
    **Scaling Schedule**
    
    The cron expression that defines the scaling schedule. For more information, see [kubernetes-cronhpa-controller](https://github.com/AliyunContainerService/kubernetes-cronhpa-controller).
    

## Workload scaling page

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workload Scaling**.
    
3.  In the upper-right corner, click **Create Auto Scaling**.
    
4.  Click the **HPA and CronHPA** tab, select the target workload, then select **CronHPA** in the **Configure Auto Scaling Policy** section.
    
    You can add multiple CronHPA jobs. Configure the following parameters then click **OK**.
    
    -   **CronHPA Task Name**: A name for the CronHPA object.
        
    -   **Job Name**: A name for the individual CronHPA job.
        
    -   **Desired Number of Replicas**: The desired number of pod replicas at the scheduled time.
        
    -   **Scaling Schedule**: The cron expression that defines the scaling schedule. For more information, see [kubernetes-cronhpa-controller](https://github.com/AliyunContainerService/kubernetes-cronhpa-controller).
        

## kubectl

1.  Save the following manifest to a file named `cronhpa.yaml`:
    
    ```
    apiVersion: autoscaling.alibabacloud.com/v1beta1
    kind: CronHorizontalPodAutoscaler
    metadata:
      name: cronhpa-sample
      namespace: default 
    spec:
      scaleTargetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: nginx-deployment-basic  
      excludeDates:                 
      - "* * * 15 11 *"
      - "* * * * * 5"
      jobs:
      - name: "scale-down"
        schedule: "30 */1 * * * *"  
        targetSize: 1  
        runOnce: false              
      - name: "scale-up"
        schedule: "0 */1 * * * *"  
        targetSize: 3              
        runOnce: true         
    ```
    
2.  Run the following command to create the CronHPA:
    
    ```
    kubectl apply -f cronhpa.yaml
    ```
    
    Expected output:
    
    ```
    cronhorizontalpodautoscaler.autoscaling.alibabacloud.com/cronhpa-sample created
    ```
    

## **What's next**

### **View, add, or modify CronHPA jobs**

After creating a CronHPA, view job status, add new jobs, or modify existing configurations using either of the following methods:

-   From the **Workload Scaling** page:
    
    1.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workload Scaling**.
        
    2.  Click the **CronHPA** tab. In the **Actions** column, click **Edit** for the target CronHPA.
        
-   From the **Workloads** page (using Deployments as an example):
    
    1.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Workloads** > **Deployments**.
        
    2.  Click the target Deployment, then click the **Pod Scaling** tab. In the **CronHPA** section, click **Add or Modify Job** in the **Actions** column.
        

### **Use CronHPA with HPA**

Cron Horizontal Pod Autoscaler (HPA) and Horizontal Pod Autoscaler (HPA) are unaware of each other. If both CronHPA and HPA are configured for your application, CronHPA and HPA scale your application separately. In this case, the later scaling activity overwrites the earlier one. To resolve this issue, Container Service for Kubernetes (ACK) provides a solution for CronHPA to interact with HPA without conflicts. If ACK detects that both CronHPA and HPA are deployed, ACK sets HPA as the scaling object of CronHPA. CronHPA triggers HPA to scale the object scaled by HPA, such as a Deployment, at the scheduled time.

For more information, see [Make CronHPA compatible with HPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/make-cronhpa-compatible-with-hpa).
