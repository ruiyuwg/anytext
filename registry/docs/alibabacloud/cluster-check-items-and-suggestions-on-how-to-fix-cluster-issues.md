ACK supports checks for cluster upgrades, cluster migrations, components, and node pools. Before you upgrade or migrate a cluster, you can run a cluster check to confirm that the cluster meets the requirements. The check also provides solutions for any failed check items.

## Cluster check items

### Cluster upgrade check

Because Kubernetes is complex, cluster upgrades can be risky. To ensure a smooth upgrade, ACK provides a pre-upgrade check. You can upgrade a cluster only after it passes this check. The check items vary based on the cluster type, Kubernetes version, and container runtime. The check items shown in the console are the most current.

The cluster upgrade check includes the following three types:

-   Cluster resources: Checks cloud resources related to ACK clusters, such as SLB, ECS, and VPC instances.
    
-   Cluster components: Checks the configurations of ACK clusters, components, and applications. For example, the check verifies whether component versions meet requirements or if applications use deprecated APIs.
    
-   Cluster configuration: Checks the configurations of nodes in the ACK cluster. This check requires creating a pod on each node to collect information.
    

**Type**

**Check item**

**Description**

Cluster resources

API Server SLB

Checks if the SLB instance exists.

Checks if the SLB instance status is Normal.

Checks if the SLB listener configurations, including port and protocol, are correct.

Checks if the SLB instance's backend server group configuration is correct.

Checks if the SLB access control configuration is correct. If no access control is configured, the check passes.

VPC

Checks if the VPC-connected instance exists.

Checks if the VPC-connected instance is Normal.

vSwitch

Checks if the vSwitch exists.

Checks if the vSwitch is Normal.

Checks if the vSwitch has two or more available IP addresses.

ECS

Checks if the ECS instance exists.

Checks if the ECS instance is Normal.

Checks if the ECS security group is Normal.

Checks if the ECS instance subscription is active.

Checks if the ECS instance type meets the requirements.

Checks if the Cloud Assistant client is Normal.

Cluster components

Kube Proxy Master

Checks if the component exists.

Kube Proxy Worker

Checks if the component exists.

API Service

Checks if any unavailable API services exist.

Cluster instance

Checks if the number of Master nodes in the cluster is 3 or 5.

Cluster components

Checks if the Terway component version meets the requirements.

Checks if the CoreDNS component version meets the requirements.

Checks if the cloud-controller-manager component version meets the requirements.

Checks if the Nginx Ingress Controller component version meets the requirements.

Checks if the ACK Virtual Node component version meets the requirements.

Checks if the Metrics Server component version meets the requirements.

Node

Checks if the node IP address exists.

Checks if the node is schedulable.

Checks if the node is in the Ready state.

Checks if the node operating system supports the upgrade.

Checks if the number of available pods on the node is greater than 2.

Deprecated API

Checks if the cluster uses deprecated APIs.

Cluster configuration

iptables configuration

Checks if the iptables configuration is correct.

Operating system

Checks if the operating system supports the upgrade.

yum

Checks if yum is working correctly.

Disk

Checks if the node file system is Normal.

Checks if more than 5% of the disk space on the node is free.

Swap

Checks if Swap is enabled on the node.

NTP

Checks if Network Time Protocol (NTP) on the node is working correctly.

Systemd

Checks if the node's Systemd version is later than systemd-219-67.

kubelet

Checks if the kubelet configuration meets expectations.

Container runtime

Checks if the Docker or containerd runtime is Normal.

Kernel configuration

Checks if the node kernel configuration is correct.

Manifest configuration

Checks if the manifest file meets expectations.

### Cluster migration check

A pre-migration check is triggered before a cluster migration. The migration can proceed only after the cluster passes the check. This check applies to the following scenarios.

-   Migrating from an ACK dedicated cluster to an ACK managed cluster Pro Edition.
    
-   Migrating from an ACK managed cluster Basic Edition to an ACK managed cluster.
    

The cluster migration check includes the following four types:

-   Cluster resources: Checks cloud resources related to ACK clusters, such as SLB, ECS, and VPC instances.
    
-   Cluster components: Checks the configurations of components in ACK clusters, such as checking for unavailable API services.
    
-   Cluster configuration: Checks the configurations of nodes in the ACK cluster. This check requires creating a pod on each node to collect information.
    
-   Component usage: Some components become managed by ACK after an ACK dedicated cluster is migrated. Therefore, these components are checked for issues before the migration.
    

**Type**

**Check item**

**Description**

Cluster resources

API Server SLB

Checks if the SLB instance exists.

Checks if the SLB instance status is Normal.

Checks if the SLB listener configurations, including port and protocol, are correct.

Checks if the SLB instance's backend server group configuration is correct.

Checks if the SLB access control configuration is correct. If no access control is configured, the check passes.

VPC

Checks if the VPC-connected instance exists.

Checks if the VPC-connected instance is Normal.

vSwitch

Checks if the vSwitch exists.

Checks if the vSwitch is Normal.

Checks if the vSwitch has two or more available IP addresses.

ECS

Checks if the ECS instance exists.

Checks if the ECS instance is Normal.

Checks if the ECS security group is Normal.

Checks if the Cloud Assistant client is Normal.

Cluster components

Kube Proxy Master

Checks if the component exists.

Kube Proxy Worker

Checks if the component exists.

API Service

Checks if any unavailable API services exist.

Cluster instance

Checks if the number of Master nodes in the cluster is 3 or 5.

Node

Checks if the node IP address exists.

Checks if the node is schedulable.

Checks if the node is in the Ready state.

Checks if the node operating system supports the upgrade.

Checks if the number of available pods on the node is greater than 2.

Cluster configuration

Operating system

Checks if the operating system supports the upgrade.

yum

Checks if yum is working correctly.

Component usage

cloud-controller-manager

Checks if the cloud-controller-manager component has any issues.

### Component check

Component checks apply to component upgrade scenarios. A pre-upgrade check is triggered before a component is upgraded. The upgrade can proceed only after the component passes the check.

**Type**

**Check item**

**Description**

cloud-controller-manager

Addon\_CCM

Checks if upgrading this component causes SLB changes.

Component\_Block\_Version

Checks if the CCM version can be upgraded.

csi-plugin

DaemonSet\_Annotation

Checks if the DaemonSet annotations meet expectations.

Csi\_Driver\_Attributes

Checks if the CSI Driver properties meet the requirements.

Node\_Status\_Ready

Checks if the cluster nodes are in the Ready state.

csi-provisioner

Stateful\_Set\_Exist

Checks if the resource is a StatefulSet.

Deployment\_Annotation

Checks if the deployment annotations meet expectations.

Storage\_Class\_Attributes

Checks if the StorageClass properties meet the requirements.

Csi\_Provisioner\_Node\_Count

Checks if the number of Ready nodes is 2 or more.

terway-eniip

Systemd

Checks if the node's Systemd version is later than systemd-219-67.

nginx-ingress-controller

Deployment\_Healthy

Checks if the Nginx Ingress deployment is healthy.

Deployment\_Not\_Under\_HPA

Checks if a horizontal pod autoscaler (HPA) is configured for the deployment.

Deployment\_Not\_Modified

Checks if the deployment was modified.

Nginx\_Ingress\_Pod\_Error\_Log

Checks if Nginx has error logs.

LoadBalancer\_Service\_Healthy

Checks if the Nginx Service is healthy.

Nginx\_Ingress\_Configuration

Checks if the Ingress has incompatible configurations.

aliyun-acr-credential-helper

RamRole\_Exist

Checks if the component is granted the AliyunCSManagedAcrRole permissions.

ack-cost-exporter

RamRole\_Exist

Checks if the component is granted the AliyunCSManagedCostRole permissions.

### Node pool check

Node pool checks apply to node pool upgrade scenarios. A pre-upgrade check is triggered when a node pool is upgraded. The upgrade can proceed only after the node pool passes the check.

The node pool check includes the following three types:

-   Cluster resources: Checks cloud resources related to ACK clusters, such as SLB and VPC instances.
    
-   Cluster components: Checks the configurations of ACK clusters, nodes, and applications.
    
-   Cluster configuration: Checks the configurations of nodes in the ACK cluster. This check requires creating a pod on each node to collect information.
    

**Type**

**Check item**

**Description**

Cluster resources

API Server SLB

Checks if the SLB instance exists.

Checks if the SLB instance status is Normal.

Checks if the SLB listener configurations, including port and protocol, are correct.

Checks if the SLB instance's backend server group configuration is correct.

Checks if the SLB access control configuration is correct. If no access control is configured, the check passes.

VPC

Checks if the VPC-connected instance exists.

Checks if the VPC-connected instance is Normal.

vSwitch

Checks if the vSwitch exists.

Checks if the vSwitch is Normal.

Checks if the vSwitch has two or more available IP addresses.

Cluster components

API Service

Checks if any unavailable API services exist.

Cluster instance

Checks if the number of Master nodes in the cluster is 3 or 5.

Node

Checks if the node is in the Ready state.

Checks if the number of available pods on the node is greater than 2.

HostPath

Checks if any pods on the node use HostPath.

Cluster configuration

iptables configuration

Checks if the iptables configuration is correct.

Operating system

Checks if the operating system supports the upgrade.

yum

Checks if yum is working correctly.

Disk

Checks if the node file system is Normal.

Remaining disk space on the node

Checks if more than 5% of the disk space on the node is free.

Swap

Checks if Swap is enabled on the node.

NTP

Checks if NTP on the node is working correctly.

Systemd

Checks if the node's Systemd version is later than systemd-219-67.

kubelet

Checks if the kubelet configuration meets expectations.

Container runtime

Checks if the Docker or containerd runtime is Normal.

Kernel configuration

Checks if the node kernel configuration is correct.

Manifest configuration

Checks if the manifest file meets expectations.

## Solutions for failed check items

**Failed check item**

**Solution**

Systemd version is too low

[Upgrade the Systemd version](/help/en/kb-articles/latest/logs-of-the-kubelet-contain-reason-kubeletnotready-message-pleg-is-not-healthy-error-when-centos-7-6-is-used).

Component version is too low

Upgrade the component version. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

yum check timed out

Run the following command to check if yum times out. The default timeout is 10s.

```
time if type yum&>/dev/null; then yum list yum; fi
```

API Service is unavailable

1.  Run the following command to find the unavailable API Service.
    
    ```
    kubectl -n kube-system get apiservices |grep -i false
    ```
    
2.  Confirm the purpose of the abnormal API Service. If you do not need the service, run the following command to delete it.
    
    **Important**
    
    Deleting a required API Service can cause cluster exceptions. If you are unsure about the purpose of the abnormal API Service, contact technical support.
    
    ```
    kubectl -n kube-system delete apiservices ${your-abnormal-apiservice-name}
    ```
    

Node has pods that use HostPath

When you upgrade a node by replacing its system disk, data loss may occur if a pod on the node uses HostPath to mount a container directory to the host. Check the mounted directory for the pod. If there is no impact, you can continue the upgrade. The check result is for reference only.

Cluster uses deprecated APIs

Identify the source of the deprecated API and take the appropriate action. For more information, see [Deprecated APIs](#section-bff-eip-5xe).

## Deprecated APIs

For clusters that run Kubernetes 1.20 or later, the pre-upgrade check includes a scan for deprecated APIs. The check report lists the deprecated APIs that the cluster uses.

For example, when you upgrade a cluster from Kubernetes 1.20 to 1.22, the system scans the audit logs from the previous day to check whether the Kubernetes 1.20 cluster uses any deprecated APIs.

-   If the Kubernetes 1.20 cluster uses deprecated APIs, the check result is only a notification and does not block the upgrade process.
    
-   Security risks may occur if the cluster continues to use deprecated APIs in Kubernetes 1.22. You must assess the impact on your services.
    

Deprecated APIs are categorized into four types based on their request source (user agent). Before you upgrade, use the **Type** column in the following table to identify the source of a deprecated API and take the appropriate action.

**Type**

**Recommended action**

**Example**

core

Kubernetes core components: ACK automatically upgrades these components during a cluster upgrade. They are not shown on the check page and require no action from you.

kube-apiserver, kube-scheduler, kube-controller-manager

ack

ACK components: These are components provided by ACK. The deprecated API page does not show them. Instead, ACK guides you to upgrade the components on the component management page to resolve the issue.

**Note**

-   You can log on to the [ACK console](https://cs.console.alibabacloud.com) and choose **Operations** > **Add-ons** to upgrade components. The next day after the components are upgraded, the deprecated APIs are no longer displayed.
    
-   In some cases, the CoreDNS component may use deprecated APIs in Kubernetes clusters that run version 1.24 or later. If the check result includes **coredns**, see [Why is CoreDNS using a deprecated API?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-faq#9437d1601aytt) to handle the issue.
    
-   The deprecated API information is for reference only and does not affect your upgrade process. After the cluster is upgraded, the deprecated API resources are replaced with new ones. Do not use deprecated APIs to create resources after the cluster upgrade to avoid security risks.
    

metrics-server, nginx-ingress-controller, CoreDNS

opensource

Open source components: ACK lists some open source components from the community. You must decide whether to upgrade them.

**Note**

The deprecated API information is for reference only and does not affect your upgrade process. Upgrade the components as needed to avoid affecting some features.

rancher, elasticsearch-operator, and others

unknown

Unknown source: If an API does not match any of the preceding rules, ACK marks it as from an unknown source. You must decide whether to upgrade it and perform the upgrade yourself.

**Note**

The deprecated API information is for reference only and does not affect your upgrade process. Upgrade the components as needed to avoid affecting some features.

kubectl, agent, Go-http-client, okhttp

To view information about deprecated APIs:

1.  On the **Upgrade Cluster** page, click **Precheck**, and then click **View Details**.
    
2.  On the **Report** page, click View Details.
    
3.  The details page shows the deprecated API, user agent, type, deprecated Kubernetes version, time of last access, and the source IP of the last access.
    

## Related documents

[AIOps suite](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-the-aiops-suite/#concept-2303578)
