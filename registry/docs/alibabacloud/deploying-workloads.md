A Kubernetes workload is a set of pods and containers that run an application or a service in Kubernetes clusters. To ensure pod stability and service continuity, you can perform operations on workloads, such as deploying, scaling, updating, and restoring workloads. This topic introduces different types of Kubernetes workloads, including Deployment, StatefulSet, Job, and CronJob.

## **Pods**

A pod is the smallest deployable unit that you can create or manage for applications in Kubernetes. A pod encapsulates one or more containers, storage resources, a unique IP address, and configurations that specify how the containers run. In most cases, Kubernetes users do not directly create pods. Instead, Kubernetes allows you to manage pods by using controllers, such as Deployments and StatefulSets.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2966248471/CAEQLhiBgIDLw5WgkBkiIDY2ZmZhYzE1ODE2NDQ3M2RiZTE0M2Y5NmE0ZGRmNWM04545482_20240723172853.496.svg)

## Deployments and StatefulSets

### **Deployment**

Previously, Kubernetes used the ReplicaSet controller to specify the number of replicated pods, label selectors, and pod templates. Currently, Kubernetes uses the Deployment controller to manage the ReplicaSet controller. This enables Kubernetes to indirectly manage and control pods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2966248471/CAEQLhiBgIDcxJWgkBkiIDQzMDk3YWNjMGY3ODRmMTdhZmVhZTA3ZWQyOWY1ZTYz4545482_20240724133556.501.svg)

Deployments are suitable for scenarios that are insensitive to data persistence and the sequence of requests, such as web servers and applications that use the microservices architecture.

**Scenario**

**Description**

Stateless web services

Frontend web services that need to handle fluctuating requests. Deployments support horizontal scaling, updates, and rollbacks of pods.

Applications that use the microservices architecture

A system that consists of multiple microservices deploys each service separately. Each service has an independent lifecycle and independent scaling requirements. You can use Deployments to separately deploy each microservice.

### **StatefulSet**

The pods managed by a Deployment are stateless and independent of each other. Deployments cannot meet the requirements in certain scenarios. For example, pod created for distributed databases in active/standby mode are stateful and depend on each other. In this case, you can use StatefulSets to manage the pods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2966248471/CAEQLhiBgMDIxZWgkBkiIGE1NDZiMDA0MTZmYjQwYmI5ZGI4N2E5N2Y0MTgxYjY04545482_20240724153344.138.svg)

StatefulSets are suitable for scenarios that require persistent storage and ordered deployment, such as databases and distributed storage systems.

**Scenario**

**Description**

Stateful databases

Most stateful databases require persistent storage and need to maintain the same network identifiers and pod data after pods are rescheduled. For example, each pod that is created for a MySQL database has specific data and configurations that must be kept unchanged after the pod is restarted.

Distributed message queue services

Distributed message queue services require node status consistency and log persistence. For example, Apache Kafka requires strict data consistency among broker nodes. In addition, logs must be persisted to persistent volumes (PVs) to prevent data loss.

### **Differences between Deployments and StatefulSets**

The following table compares Deployments with StatefulSets to help you select between Deployments and StatefulSets.

**Item**

**Deployment**

**StatefulSet**

Scenarios

Intended for stateless applications, such as web servers and API services. Deployments are suitable for scenarios where quick scaling and rolling updates are required.

Intended for stateful applications, such as databases and distributed file systems. StatefulSets are suitable for scenarios where persistent storage and ordered deployment are required.

Persistent storage

All replicated pods share the same [persistent volume claim (PVC)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics#5c8a62865bdnl). When a pod is rescheduled or updated, the original PVC is still mounted to the pod to ensure data consistency.

Each pod is mounted with a separate PVC to achieve data persistence. The pod is named in a fixed format to ensure data consistency. When a pod is restarted or rescheduled, the original PVC is still mounted to the pod.

Network identifier

Pods do not have fixed identifiers. The name and IP address of a pod are dynamically generated upon creation. The identifier, name, and IP address of a pod change each time the pod is recreated.

The identifier of a pod is in the `<StatefulSet name>-<Serial number>` format. Examples: `web-0` and `web-1`. The name of a pod does not change after the pod is restarted.

Update policy

-   [Rolling update](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment):
    
    During a rolling update, old pods are replaced by new pods in a progressive manner to ensure service availability throughout the update.
    
-   [Recreation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment):
    
    All old pods are deleted before the system creates new pods. As a result, service interruptions occur during the update. This update policy is suitable for scenarios where old pods and new pods cannot co-exist.
    

-   [Rolling update](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#update-strategies):
    
    Pods are updated in order of serial number. The system starts updating a pod only after the previous pod is updated and enters the Ready state.
    
-   [Recreation](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#update-strategies):
    
    You need to manually delete a pod to trigger recreation. This update policy is suitable for scenarios where strict update is required.
    

Service discovery

Implements service discovery based on various Service types and performs load balancing for pods. For more information, see [Service management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/).

Each pod has a unique and fixed domain name. StatefulSets can use [headless Services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/#7d08e1125c5lv) to implement service discovery and enable direct access to each pod.

## **DaemonSets**

A DaemonSet ensures that each node in your cluster runs a replicated pod. DaemonSets are suitable for background services or monitoring processes that must run on all nodes, such as log collection services, resource monitoring systems, and network plug-ins. When a node is added to or removed from the cluster, the DaemonSet automatically creates pods on the node or deletes pods from the node.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2966248471/CAEQLhiBgMDQxpWgkBkiIDZmZTNmODNjNGRlMzRiYmQ5NTllMWRjZmQyYTQ4NjMw4545482_20240724161601.309.svg)

DaemonSets are suitable for running the same daemon on each node in the Kubernetes cluster.

**Scenario**

**Description**

Log collection

DaemonSets are suitable for deploying log collection tools, such as the [log collection component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#49e97fca36auz). Log collection tools must run on each node in the cluster so that the log files on each node can be collected, processed, and delivered to centralized log management systems.

Monitoring agent

DaemonSets are used to deploy Prometheus monitoring agents such as Node Exporter and Datadog Agent, which collect resource usage metrics. This helps you monitor node status and performance.

## **Jobs and CronJobs**

In Kubernetes, Jobs are used to run one-time tasks and CronJobs are used to run scheduled tasks. Jobs and CronJobs are suitable for workloads that are run on demand, such as batch processing tasks and data processing jobs.

-   A Job creates one or more pods to run a task. When the task is completed, the pods created by the Job are automatically terminated. Jobs are suitable for one-time tasks such as data processing tasks and data backup tasks.
    
-   A CronJob creates Jobs based on a schedule that is specified by a cron expression. The cron expression supports combinations of minutes, hours, days, weeks, and months. CronJobs are suitable for periodic tasks such as scheduled database backup tasks and scheduled log deletion tasks.
    

## **Manage workloads**

You can manage workloads in ACK clusters by calling API operations, using the kubectl command-line tool, or using the ACK console. You can use these methods to efficiently deploy, monitor, and scale your applications.

### **Use the ACK Console**

You can use the [ACK console](https://cs.console.alibabacloud.com) to create, manage, and monitor workloads in an efficient, convenient, and visualized manner. The following topics describe how to manage different types of workloads in the ACK console:

-   [Manage pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods)
    
-   [Create a stateless application by using a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment)
    
-   [Use a StatefulSet to create a stateful application](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statefulset-to-create-a-stateful-application-1)
    
-   [Create a DaemonSet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-daemonset)
    
-   [Create a Job](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-job)
    
-   [Create a CronJob](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-cronjob)
    

### **Use kubectl**

You can [obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster). Then, you can manage the cluster based on your business requirements. For example, you can deploy applications, manage resources, and monitor the cluster.

### **API**

You can create, update, delete, and monitor workloads by calling API operations. For more information, see [Use the Kubernetes API](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-the-kubernetes-api#title-kgw-noz-it8).

## **FAQ**

If you encounter issues when using workloads, refer to [FAQ about workloads](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications) for solutions.

-   [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1#title-o5g-kil-bzz)
    
-   [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1#section-416-rbv-5lz)
    
-   [What do I do if image pulling is time-consuming or even fails?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications#title-zze-362-jh5)
    
-   [How do I pull private images?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications#title-ngj-14m-bwx)
    

## **References**

-   For more information about recommended workload configurations, see [Recommended workload configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-configurations-for-high-reliability).
    
-   For more information about how to enable auto scaling of pods, see [Auto Scaling overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/).
    
-   For more information about pod scheduling policies, see [Scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/).
    
-   For more information about how to access applications, implement service discovery, and implement load balancing, see [Service management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/).
    
-   For more information about how to manage external traffic to services in your cluster, see [Ingress management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-management-2/).
    
-   For more information about how to enable persistent storage for pods, see [Storage basics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics).
    
-   For more information about how to pull images to ACK clusters without using a Secret, see [Pull images without using a Secret](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/non-secret-pulling-container-image).
    
-   For more information about how to pull cross-region container images that reside outside the Chinese mainland, see [Use GA instances for cross-region accelerated pulling of container images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cross-domain-accelerated-pulling-container-images).
