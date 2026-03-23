The Container Service for Kubernetes (ACK) platform supports cluster upgrade checks, cluster migration checks, and component checks. This topic describes the cluster check items and provides solutions for items that have an abnormal status.

## Index

-   [Cluster check items](#section-00p-2mg-b4x)
    
    -   [Cluster upgrade check](#p-lcz-i2n-jeh)
        
    -   [Cluster migration check](#p-jjn-wwa-eor)
        
    -   [Component check](#p-9bz-649-k61)
        
-   [Solutions for check items with an abnormal status](#section-f4g-7bd-f51)
    
-   [Deprecated APIs](#section-bff-eip-5xe)
    

## Cluster check items

### Cluster upgrade check

Upgrading a Kubernetes cluster is risky. The complexity of Kubernetes, runtime changes, deprecated APIs, and feature changes all contribute to this risk. To ensure a smooth upgrade, ACK performs a pre-upgrade check. The upgrade starts only after the cluster passes this check.

Cluster upgrade checks fall into two categories:

-   Cluster resources: This check inspects cloud resources related to the ACK Serverless cluster, such as Server Load Balancer (SLB) and Virtual Private Cloud (VPC).
    
-   Cluster components: This check inspects the configurations of the ACK Serverless cluster, its components, and its applications. For example, the check verifies whether component versions meet the requirements or whether applications use deprecated APIs.
    

The check items vary based on the cluster type, version, and runtime. The following table is for reference only. The check items that are displayed in the console are the definitive source.

**Category**

**Check item**

**Description**

Cluster resources

APIServer SLB

Checks if the SLB instance exists.

Checks if the SLB instance status is Normal.

Checks if the SLB listener configuration, including port and protocol, is valid.

Checks if the SLB instance backend server group configuration is valid.

Checks if the SLB access control configuration is correct. If no access control is configured, the check passes.

VPC

Checks if the VPC-connected instance exists.

Checks if the VPC-connected instance is Normal.

vSwitch

Checks if the vSwitch exists.

Checks if the vSwitch is Normal.

Checks if the vSwitch has at least two available IP addresses.

Cluster components

Kube Proxy Master

Checks if the component exists.

Kube Proxy Worker

Checks if the component exists.

API Service

Checks if any unavailable API Services exist.

Cluster components

Checks if the Terway component version meets requirements.

Checks if the CoreDNS component version meets requirements.

Checks if the cloud-controller-manager (CCM) component version meets requirements.

Checks if the Nginx Ingress Controller component version meets requirements.

Checks if the Metric Server component version meets requirements.

Deprecated API

Checks if the cluster uses deprecated APIs.

Cluster configuration

iptables configuration

Checks if the iptables configuration is valid.

Operating system

Checks if the operating system supports the upgrade.

yum

Checks if yum is working correctly.

Kubelet

Checks if the Kubelet configuration meets expectations.

Container runtime

Checks if the Docker or containerd runtime is Normal.

Manifest configuration

Checks if the manifest file meets expectations.

### Cluster migration check

A pre-migration check is triggered before a cluster migration. The migration can proceed only after the cluster passes the check. This check applies to the following scenario:

Migrating from an ACK Serverless Basic Edition cluster to an ACK Serverless Pro cluster.

Cluster migration checks fall into two categories:

-   Cluster resources: This check inspects cloud resources related to the ACK Serverless cluster, such as SLB instances and VPCs.
    
-   Cluster components: This check inspects component configurations in the ACK Serverless cluster, such as whether any unavailable API Services exist.
    

The migration check items vary based on the cluster type, version, and runtime. The following table is for reference only. The check items that are displayed in the console are the definitive source.

**Category**

**Check item**

**Description**

Cluster resources

APIServer SLB

Checks if the SLB instance exists.

Checks if the SLB instance status is Normal.

Checks if the SLB listener configuration, including port and protocol, is valid.

Checks if the SLB instance backend server group configuration is valid.

Checks if the SLB access control configuration is correct. If no access control is configured, the check passes.

VPC

Checks if the VPC-connected instance exists.

Checks if the VPC-connected instance is Normal.

vSwitch

Checks if the vSwitch exists.

Checks if the vSwitch is Normal.

Checks if the vSwitch has at least two available IP addresses.

Cluster components

Kube Proxy Master

Checks if the component exists.

Kube Proxy Worker

Checks if the component exists.

API Service

Checks if any unavailable API Services exist.

### Component check

Component checks apply to component upgrade scenarios. A pre-upgrade check is triggered before a component is upgraded. The upgrade can proceed only after the component passes this check.

The component check items vary based on the component type, version, and runtime. The following table is for reference only. The check items that are displayed in the console are the definitive source.

**Category**

**Check item**

**Description**

cloud-controller-manager

Addon\_CCM

Checks if upgrading the component causes SLB changes.

Component\_Block\_Version

Checks if the CCM version can be upgraded.

csi-plugin

DaemonSet\_Annotation

Checks if the DaemonSet annotations meet expectations.

Csi\_Driver\_Attributes

Checks if the Container Storage Interface (CSI) Driver properties meet requirements.

csi-provisioner

Stateful\_Set\_Exist

Checks if the resource is a StatefulSet.

Deployment\_Annotation

Checks if the deployment annotations meet expectations.

Storage\_Class\_Attributes

Checks if the StorageClass properties meet requirements.

nginx-ingress-controller

Deployment\_Healthy

Checks if the Nginx Ingress deployment is healthy.

Deployment\_Not\_Under\_HPA

Checks if a Horizontal Pod Autoscaler (HPA) is configured for the deployment.

Deployment\_Not\_Modified

Checks if the deployment was modified.

Nginx\_Ingress\_Pod\_Error\_Log

Checks if Nginx has error logs.

LoadBalancer\_Service\_Healthy

Checks if the Nginx service is healthy.

Nginx\_Ingress\_Configuration

Checks if the Ingress has incompatible configurations.

aliyun-acr-credential-helper

RamRole\_Exist

Checks if the component is granted the AliyunCSManagedAcrRole authorization.

ack-cost-exporter

RamRole\_Exist

Checks if the component is granted the AliyunCSManagedCostRole authorization.

## Solutions for abnormal check items

**Abnormal check item**

**Solution**

Component version is too low

Upgrade the component version. For more information, see [Manage components](/help/en/ack/manage-system-components#task-z3j-tvk-2gb).

APIService is unavailable

1.  Run the following command to find the unavailable APIService.
    
    ```
    kubectl -n kube-system get apiservices |grep -i false
    ```
    
2.  Confirm the purpose of the abnormal APIService. If it is not needed, run the following command to delete the APIService.
    
    **Important**
    
    Deleting an APIService by mistake can cause cluster exceptions.
    
    ```
    kubectl -n kube-system delete apiservices ${your-abnormal-apiservice-name}
    ```
    

Cluster contains deprecated APIs

Identify the source of the deprecated APIs and take appropriate action. For more information, see [Deprecated APIs](#section-bff-eip-5xe).

## Deprecated APIs

For clusters that run Kubernetes 1.20 or later, the pre-upgrade check can detect deprecated APIs. The check results list the deprecated APIs that your cluster uses.

For example, when you upgrade a cluster from Kubernetes 1.20 to 1.22, the system scans the audit logs from the previous day to check for the usage of deprecated APIs in the 1.20 cluster.

-   If deprecated APIs are used in the 1.20 cluster, the check result is only a notification and does not block the upgrade.
    
-   However, if you continue to use deprecated APIs in the 1.22 cluster, security risks may arise.
    

Deprecated APIs are classified into four categories based on their request source (User Agent). Before you upgrade, you can use the **Category** column in the following table to identify the source of a deprecated API and take the recommended action.

**Category**

**Recommended action**

**Examples**

core

Core Kubernetes components: ACK automatically upgrades these components in the background during a cluster upgrade. They are not shown on the check page and require no action from you.

apiserver, scheduler, kube-controller-manager

ack

ACK components: These are components provided by ACK. You must decide when to upgrade them. ACK displays them and guides you to upgrade them on the component management page.

**Note**

-   You can log on to the [ACK console](https://cs.console.alibabacloud.com) and choose **Operations** > **Add-ons** to upgrade components. The day after the components are upgraded, deprecated APIs are no longer displayed.
    
-   In some cases, the CoreDNS component may use deprecated APIs in Kubernetes clusters of version 1.24 or later. If the check result includes coredns, see [Why is CoreDNS using a deprecated API?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-faq#9437d1601aytt) for how to handle it.
    
-   The deprecated API information is only a notification and does not affect your upgrade process. After the cluster is upgraded, the deprecated API resources are replaced with new ones. Do not create resources using deprecated APIs after the upgrade to avoid security risks.
    

metrics-server, nginx-ingress-controller, coredns

opensource

Open source components: ACK displays a list of some open source community components. You must decide whether to upgrade them and perform the upgrade yourself. Any omissions are displayed in the unknown category.

**Note**

The deprecated API information is only a notification and does not affect your upgrade process. Upgrade the components as needed to avoid affecting some features.

rancher, elasticsearch-operator, etc.

unknown

Unknown source: If a source does not match any of the above rules, it is marked as unknown. ACK displays a list, but you must decide whether to upgrade and perform the upgrade yourself.

**Note**

The deprecated API information is only a notification and does not affect your upgrade process. Upgrade the components as needed to avoid affecting some features.

kubectl, agent, Go-http-client, okhttp

## References

-   [Overview of the AIOps suite](/help/en/ack/serverless-kubernetes/user-guide/aiops-suite-overview-1)
