Kubernetes event collection centralizes cluster state-change records into Simple Log Service (SLS) for real-time query, analysis, visualization, and alerting.

## How Kubernetes events work

Kubernetes is designed based on a state machine. Events are generated when the cluster transitions between states:

-   **Normal** events indicate that the state machine has changed to an expected state.
    
-   **Warning** events indicate that the state machine has changed to an unexpected state.
    

Container Service for Kubernetes (ACK) uses node-problem-detector (NPD) and kube-eventer to monitor and collect container events.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6121157671/CAEQJxiBgMDD3pymghkiIDA5NDNjMTEyMTY3NTQxODdiOTA0M2I2MDA2MWRhNjA14106618_20231206173658.271.svg)

-   **NPD** is a diagnostic tool for Kubernetes nodes. NPD detects node exceptions, generates node events, and works with kube-eventer to raise alerts and enable closed-loop alert management. NPD generates node events for the following exceptions: Docker engine hangs, Linux kernel hangs, outbound traffic exceptions, and file descriptor exceptions. For more information, see [NPD](https://github.com/AliyunContainerService/node-problem-detector).
    
-   **kube-eventer** is an open-source event emitter maintained by ACK. It sends Kubernetes events to sinks such as DingTalk, SLS, and EventBridge. kube-eventer provides filter conditions to filter events at different levels. Use kube-eventer to collect events in real time, trigger alerts on specific events, and archive events asynchronously. For more information, see [kube-eventer](https://github.com/AliyunContainerService/kube-eventer).
    

## Prerequisites

A Kubernetes cluster is created, such as an ACK cluster or ACK serverless cluster.

## Usage notes

You are not charged for using the K8s event center if both of the following conditions are met:

-   The data retention period of the logstore associated with your event center is 90 days, which is the default value.
    
-   The amount of data written to your event center per day is less than 256 MB, which is approximately 250,000 events.
    

**Examples**:

-   If the default 90-day data retention period is configured for the logstore and your Kubernetes cluster generates 1,000 events per day, the event center is free.
    
-   If you change the data retention period to 105 days and your Kubernetes cluster generates 1,000 events per day, you are charged for data stored beyond the 90-day threshold. The fee is calculated based on the storage space occupied by log data. For more information about the billable item, see [Billable items of pay-by-feature](/help/en/sls/billable-items).
    

## Step 1: Deploy kube-eventer and node-problem-detector

## Alibaba Cloud Kubernetes

For an ACK cluster, the ack-node-problem-detector component integrates the features of kube-eventer and node-problem-detector. You only need to deploy this component. For more information, see [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#section-rya-7i0-9e3). For an ACK serverless cluster, you need to deploy the kube-eventer component.

NPD detects node problems or faults based on configurations and third-party plug-ins and then generates corresponding cluster events. The Kubernetes cluster also generates various events due to state transitions, such as pod evictions and image pull failures. The Kubernetes Event Center of SLS aggregates all Kubernetes events in real time and provides storage, query, analysis, visualization, and alerting capabilities. The following steps describe how to send cluster events to the Kubernetes Event Center of SLS:

-   If you selected **Install node-problem-detector and Create Event Center** when you created the cluster, proceed to [Step 2](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#ba5e12e5e71vr) to view the Kubernetes Event Center. For more information about how to install the NPD component during cluster creation, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   If you did not select **Install node-problem-detector and Create Event Center** when you created the cluster, you can install it manually.
    
    1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Operations Management** > **Components**.
        
    3.  On the **Log and Monitoring** tab, find and install **ack-node-problem-detector**.
        

## Other Kubernetes

1.  Deploy kube-eventer.
    
    1.  Install kubectl. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/serverless-kubernetes/user-guide/connect-to-an-ack-cluster-by-using-kubectl).
        
    2.  Create a configuration file named eventer.yaml using the following sample code.
        
        ```
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          labels:
            name: kube-eventer
          name: kube-eventer
          namespace: kube-system
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: kube-eventer
          template:
            metadata:
              labels:
                app: kube-eventer
              annotations:
                scheduler.alpha.kubernetes.io/critical-pod: ''
            spec:
              dnsPolicy: ClusterFirstWithHostNet
              serviceAccount: kube-eventer
              containers:
                - image: registry.cn-hangzhou.aliyuncs.com/acs/kube-eventer:v1.2.5-cc7ec54-aliyun
                  name: kube-eventer
                  command:
                    - "/kube-eventer"
                    - "--source=kubernetes:https://kubernetes.default"
                    ## Send to SLS
                    ## --sink=sls:https://{endpoint}?project={project}&logStore=k8s-event&regionId={region-id}&internal=false&accessKeyId={accessKeyId}&accessKeySecret={accessKeySecret}
                    - --sink=sls:https://cn-beijing.log.aliyuncs.com?project=k8s-xxxx&logStore=k8s-event&regionId=cn-beijing&internal=false&accessKeyId=xxx&accessKeySecret=xxx
                  env:
                    # If TZ is assigned, set the TZ value as the time zone
                    - name: TZ
                      value: "Asia/Shanghai"
                  volumeMounts:
                    - name: localtime
                      mountPath: /etc/localtime
                      readOnly: true
                    - name: zoneinfo
                      mountPath: /usr/share/zoneinfo
                      readOnly: true
                  resources:
                    requests:
                      cpu: 10m
                      memory: 50Mi
                    limits:
                      cpu: 500m
                      memory: 250Mi
              volumes:
                - name: localtime
                  hostPath:
                    path: /etc/localtime
                - name: zoneinfo
                  hostPath:
                    path: /usr/share/zoneinfo
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: kube-eventer
        rules:
          - apiGroups:
              - ""
            resources:
              - events
            verbs:
              - get
              - list
              - watch
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: kube-eventer
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: kube-eventer
        subjects:
          - kind: ServiceAccount
            name: kube-eventer
            namespace: kube-system
        ---
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: kube-eventer
          namespace: kube-system
        ```
        
        **Configuration**
        
        **Type**
        
        **Required**
        
        **Description**
        
        endpoint
        
        string
        
        Required
        
        The endpoint of SLS. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
        
        project
        
        string
        
        Required
        
        The project of SLS.
        
        logStore
        
        string
        
        Required
        
        The logstore of SLS.
        
        internal
        
        string
        
        Self-managed Kubernetes cluster: Yes.
        
        For a self-managed Kubernetes cluster, you must set this parameter to false.
        
        regionId
        
        string
        
        Self-managed Kubernetes cluster: Yes.
        
        The ID of the region where SLS resides. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
        
        accessKeyId
        
        string
        
        Self-managed Kubernetes cluster: Yes.
        
        The AccessKey ID. Use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
        
        accessKeySecret
        
        string
        
        Self-managed Kubernetes cluster: Yes.
        
        The AccessKey secret. Use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
        
    3.  Run the following command to apply the configurations from eventer.yaml to the cluster.
        
        ```
        kubectl apply -f eventer.yaml
        ```
        
        Expected output:
        
        ```
        deployment.apps/kube-eventer created
        clusterrole.rbac.authorization.k8s.io/kube-eventer created
        clusterrolebinding.rbac.authorization.k8s.io/kube-eventer created
        serviceaccount/kube-eventer created
        ```
        
2.  Deploy node-problem-detector.
    
    For more information, see the project on [GitHub](https://github.com/kubernetes/node-problem-detector).
    

## Step 2: Create an event center

> After you create an event center, SLS automatically creates a logstore named `k8s-event` in the specified project. Related dashboards are also created for the event center.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Log Application** section, click the **Intelligent O&M** tab. Then, click **K8s Event Center**.
    
3.  On the **Event Center Management** page, click **Add** in the upper-right corner.
    
4.  In the **Create Event Center** panel, configure the parameters and click **Next**.
    
    -   If you select **Select Existing Project**, select an existing project from the **Project** drop-down list to manage the resources of your event center. The resources include a logstore and the related dashboards.
        
    -   If you select **Select Kubernetes Cluster from Container Service for Kubernetes**, select an existing Kubernetes cluster from the **K8s Cluster** drop-down list. SLS automatically creates a project named `k8s-log-{cluster-id}` to manage the resources of your event center. The resources include a logstore and the related dashboards.
        

## Step 3: Use the event center

After you create an event center in **K8s Event Center** and deploy the kube-eventer and node-problem-detector components, start using the event center.

In the left-side navigation pane of the **K8s Event Center** page, find the event center that you want to manage and click the **![k8s事件中心-002](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8662341461/p77384.png)** icon. Then, perform any of the following operations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6400384271/p809008.png)

### Event Overview

The **Event Overview** tab displays the statistics of core events, including the total number of events, difference between the number of error events within the current day and the preceding day, alert statistics, error event trends, and details of Pod OOM events.

> A Pod OOM event shows only the node, process name, and process ID. To identify the affected Pod, query the Pod restart event that occurred around the same time.

#### **Event Details**

The **Event Details** tab displays the details of events returned by using different filter conditions, such as event type, event destination, host, namespace, and name.

#### **Pod Lifecycle**

The **Pod Lifecycle** tab displays the details of events that occur within the lifecycle of a Pod. Filter for important Pod events by event level.

#### **Node Event**

The **Node Event** tab displays the details of node events. View the lifecycle of a node and the events that occur on the node.

#### **Event Core**

The **Event Core** tab displays the details of core component events. The events include NLC.Task.RestartECS.Fail and NLC.Task.URL.Mode.Unimplemented.

#### **Alert Configuration**

On the page that appears after you click **Alert Configuration**, configure alerts for your event center. For more information, see [Configure alerts](/help/en/sls/configure-alerts-2-k8s).

#### **Custom Query**

On the page that appears after you click **Custom Query**, run custom query statements. All events in an event center are stored in a logstore. Use all logstore features, such as custom query statements, event data consumption, custom reports, and custom alerts. For more information, see [Get started with log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis).

To find the project name associated with an event center, use one of the following methods:

-   Find the project name in the URL of the page that appears after you click **Custom Query**. The URL is in the format `https://sls.console.alibabacloud.com/lognext/app/k8s-event/project/k8s-log-xxxx/logsearch/k8s-event`. The field that follows `project/` indicates the project name. Example: k8s-log-xxxx.
    
-   In the list of event centers on the **Event Center Management** page, find the event center and view the project name.
    

#### **Version Update**

On the page that appears after you click **Version Update**, update the version of K8s Event Center.

## Sample log

The following example shows a collected event log:

```
hostname:  cn-hangzhou.i-***********"
level:  Normal
pod_id:  2a360760-****
pod_name:  logtail-ds-blkkr
event_id:  {
   "metadata":{
      "name":"logtail-ds-blkkr.157b7cc90de7e192",
      "namespace":"kube-system",
      "selfLink":"/api/v1/namespaces/kube-system/events/logtail-ds-blkkr.157b7cc90de7e192",
      "uid":"2aaf75ab-****",
      "resourceVersion":"6129169",
      "creationTimestamp":"2019-01-20T07:08:19Z"
   },
   "involvedObject":{
      "kind":"Pod",
      "namespace":"kube-system",
      "name":"logtail-ds-blkkr",
      "uid":"2a360760-****",
      "apiVersion":"v1",
      "resourceVersion":"6129161",
      "fieldPath":"spec.containers{logtail}"
   },
   "reason":"Started",
   "message":"Started container",
   "source":{
      "component":"kubelet",
      "host":"cn-hangzhou.i-***********"
   },
   "firstTimestamp":"2019-01-20T07:08:19Z",
   "lastTimestamp":"2019-01-20T07:08:19Z",
   "count":1,
   "type":"Normal",
   "eventTime":null,
   "reportingComponent":"",
   "reportingInstance":""
}
```

The following table describes the fields in the log.

**Field**

**Type**

**Description**

hostname

String

The hostname of the server on which the event occurred.

level

String

The level of the log. Valid values: Normal and Warning.

pod\_id

String

The unique identifier of the Pod. This field is available only if the event type is related to the Pod.

pod\_name

String

The name of the Pod. This field is available only if the event type is related to the Pod.

event\_id

JSON

The details of the event. The value of this field is a JSON string.

## Troubleshooting

### Why does no data exist in my event center?

After you deploy an event center, new events are automatically collected. Click **Custom Query** to search for the events. Set the time range in the upper-right corner to 1 Day. Data may not be found in the event center for the following reasons:

**No events were generated after deployment**

After you deploy the event center, no events were generated in the associated Kubernetes cluster. Run the following command to check whether new events exist in the cluster:

```
kubectl get events --all-namespaces
```

**Invalid parameter values were specified during component deployment**

-   If you use an ACK cluster, perform the following steps:
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com/).
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click the name of the cluster.
        
    3.  In the left-side navigation pane, choose **Applications** > **Helm**.
        
    4.  On the **Helm** page, find **ack-node-problem-detector** and click **Update** in the Actions column.
        
    5.  Check and modify the parameter settings. For more information, see [Step 1: Deploy the kube-eventer and node-problem-detector components](/help/en/sls/create-and-use-an-event-center).
        
-   If you use a self-managed Kubernetes cluster, follow the instructions in [Collect Kubernetes events](/help/en/sls/collect-kubernetes-events).
    

### How do I view the logs of a container in which an event occurs?

-   If you use an ACK cluster, perform the following steps:
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com/).
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click the name of the cluster.
        
    3.  In the left-side navigation pane, choose **Workloads** > **Pods**.
        
    4.  Set the **Namespace** parameter to **kube-system**.
        
    5.  On the **Pods** page, find the Pod that you want to manage and click **Logs** in the Actions column.
        
-   If you use a self-managed Kubernetes cluster, find the **kube-system** namespace and the file whose name is prefixed with eventer-sls to view the Pod logs.
