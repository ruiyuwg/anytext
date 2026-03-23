To support the adjustment of control plane parameters in production environments, Container Service for Kubernetes provides a feature to customize control plane parameters. You can modify the parameters of core managed components, such as kube-apiserver, kube-controller-manager, cloud-controller-manager, and kube-scheduler, based on your requirements. This topic describes how to customize control plane parameters in the ACK console.

## Precautions

-   To ensure control plane stability, the customization of parameters for select control plane core components is supported only for ACK managed cluster Pro Edition, ACK serverless cluster Pro Edition, ACK Edge cluster Pro Edition, and ACK LINGJUN Cluster.
    
    For a list of customizable parameters, see [Default parameters](#section-pkr-afx-2z7). The parameters available on the console page are the most up-to-date.
    
    Some parameters are supported only for specific cluster versions. To upgrade a cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   The control plane restarts after you modify its parameters. We recommend that you perform this operation during off-peak hours.
    
-   Custom parameters overwrite the default cluster parameters. Ensure that your custom parameters are correct and complete to prevent control plane startup failures. For more information about parameter settings, see the official Kubernetes documentation for your cluster version: [kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/), [kube-controller-manager](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/), and [kube-scheduler](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/).
    

## Customize control plane component parameters

The steps to modify parameters are similar for all control plane components. The following example describes how to modify the parameters of the Kube API Server.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  In the **Core Components** section, find the destination component and click **Configuration** in the lower-right corner of the component card.
    
4.  In the Kube API Server **Parameters** dialog box, enter the custom parameters. Ensure that the parameters are complete and correct. Then, follow the on-screen instructions to submit the configuration.
    

## Default parameters

## ACK Pro managed cluster

**Component Name**

**Parameter**

**Description**

Kube API Server

enableAdmissionPlugins

The default value is empty.

serviceNodePortRange

The value can range from 10000 to 65535. The default value is empty.

**Important**

Be careful when you modify the NodePort port range. Make sure that the NodePort port range does not conflict with the port range of the `net.ipv4.ip_local_port_range` parameter on the cluster nodes. For more information, see [How do I correctly configure the NodePort range?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management#023c3ce009sv0).

requestTimeout

The default value is empty.

defaultNotReadyTolerationSeconds

The default value is empty.

defaultUnreachableTolerationSeconds

The default value is empty.

maxMutatingRequestsInflight

The value can range from 1 to 1000. The default value is empty.

maxRequestsInflight

The value can range from 1 to 3000. The default value is empty.

featureGates

Optional parameters include `ServerSideApply`, `TTLAfterFinished`, `EphemeralContainers`, `RemoveSelfLink`, and `HPAScaleToZero`. The default value is empty.

**Note**

`HPAScaleToZero` is supported in clusters of version 1.18 and later. You cannot modify `RemoveSelfLink` in clusters of version 1.24 and later.

oidcIssuerURL

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

**Important**

-   After you configure oidcIssuerURL, the API server in the cluster accesses the address specified by this parameter. If the address is a public endpoint, make sure that public network access is enabled for the cluster. For more information, see [Enable public network access for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet).
    
-   If the API server still cannot access the address after you enable public network access, run the `kubectl get endpoints` command to check the number of backend IP addresses for Kubernetes.
    
    -   If more than one IP address is returned, log on to a worker node, try to access the oidcIssuerURL, and check the public network configurations and security group rules.
        
    -   If only one IP address is returned, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
        

oidcClientId

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcUsernameClaim

The default value is `sub`. This parameter is supported in clusters of version 1.18 and later.

oidcUsernamePrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsPrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcRequiredClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcCAContent

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

hostAliases

The default value is empty. This parameter is supported in clusters of version 1.26 and later.

enableTrace

The default value is empty. This parameter is supported in clusters of version 1.28 and later.

> For more information, see [Enable Tracing Analysis for control plane components of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-tracing-for-control-plane-components).

samplingRatePerMillion

Kube Controller Manager

horizontalPodAutoscalerSyncPeriod

The default value is empty.

horizontalPodAutoscalerTolerance

The default value is empty.

concurrentTTLAfterFinishedSyncs

The default value is empty.

concurrentHorizontalPodAutoscalerSyncs

The default value is empty. This parameter is supported in clusters of version 1.26 and later.

largeClusterSizeThreshold

The default value is empty.

unhealthyZoneThreshold

The default value is empty.

secondaryNodeEvictionRate

The default value is empty.

nodeEvictionRate

The default value is empty.

terminatedPodGCThreshold

The default value is empty.

kubeAPIQPS

The value can range from 1 to 1000. The default value is empty.

kubeAPIBurst

The value can range from 1 to 1000. The default value is empty.

concurrentCSRSyncs

The default value is empty. This parameter is supported in clusters of version 1.32 and later.

concurrentNodeTaintSyncs

The default value is empty. This parameter is supported in clusters of version 1.32 and later.

featureGates

The optional parameter is `TTLAfterFinished`. The default value is empty.

Cloud Controller Manager

routeTableIDs

The default value is empty. If a VPC has multiple route tables, you can manually set this parameter to a comma-separated list of route table IDs to allow CCM to support multiple route tables. Example: `vtb-**,vtb***`.

Kube Scheduler

For information about how to customize parameters for Kube Scheduler, see [Customize scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).

## ACK Pro serverless cluster

**Component**

**Parameter**

**Description**

Kube API Server

enableAdmissionPlugins

The default value is empty.

requestTimeout

The default value is empty.

defaultNotReadyTolerationSeconds

The default value is empty.

defaultUnreachableTolerationSeconds

The default value is empty.

maxMutatingRequestsInflight

The value can range from 1 to 1000. The default value is empty.

maxRequestsInflight

The value can range from 1 to 3000. The default value is empty.

featureGates

Optional parameters include `ServerSideApply`, `TTLAfterFinished`, `EphemeralContainers`, `RemoveSelfLink`, and `HPAScaleToZero`. The default value is empty.

**Note**

`HPAScaleToZero` is supported in clusters of version 1.18 and later. You cannot modify `RemoveSelfLink` in clusters of version 1.24 and later.

oidcIssuerURL

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcClientId

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcUsernameClaim

The default value is `sub`. This parameter is supported in clusters of version 1.18 and later.

oidcUsernamePrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsPrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcRequiredClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcCAContent

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

Kube Controller Manager

horizontalPodAutoscalerSyncPeriod

The default value is empty.

horizontalPodAutoscalerTolerance

The default value is empty.

concurrentTTLAfterFinishedSyncs

The default value is empty.

kubeAPIQPS

The value can range from 1 to 1000. The default value is empty.

kubeAPIBurst

The value can range from 1 to 1000. The default value is empty.

featureGates

The optional parameter is `TTLAfterFinished`. The default value is empty.

Kube Scheduler

Multiple parameters are involved. This feature is available only to users on the whitelist.

For information about how to customize parameters for Kube Scheduler, see [Customize scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).

## ACK Pro Edge cluster

**Component name**

**Parameter**

**Description**

Kube API Server

enableAdmissionPlugins

The default value is empty.

serviceNodePortRange

The value can range from 10000 to 65535. The default value is empty.

**Important**

Be careful when you modify the NodePort port range. Make sure that the NodePort port range does not conflict with the port range of the `net.ipv4.ip_local_port_range` parameter on the cluster nodes. For more information, see [How do I correctly configure the NodePort range?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management#023c3ce009sv0).

requestTimeout

The default value is empty.

defaultNotReadyTolerationSeconds

The default value is empty.

defaultUnreachableTolerationSeconds

The default value is empty.

maxMutatingRequestsInflight

The value can range from 1 to 1000. The default value is empty.

maxRequestsInflight

The value can range from 1 to 3000. The default value is empty.

featureGates

Optional parameters include `ServerSideApply`, `TTLAfterFinished`, `EphemeralContainers`, `RemoveSelfLink`, and `HPAScaleToZero`. The default value is empty.

**Note**

`HPAScaleToZero` is supported in clusters of version 1.18 and later. You cannot modify `RemoveSelfLink` in clusters of version 1.24 and later.

oidcIssuerURL

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcClientId

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcUsernameClaim

The default value is `sub`. This parameter is supported in clusters of version 1.18 and later.

oidcUsernamePrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsPrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcRequiredClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcCAContent

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

Kube Controller Manager

horizontalPodAutoscalerSyncPeriod

The default value is empty.

concurrentTTLAfterFinishedSyncs

The default value is empty.

largeClusterSizeThreshold

The default value is empty.

unhealthyZoneThreshold

The default value is empty.

secondaryNodeEvictionRate

The default value is empty.

nodeEvictionRate

The default value is empty.

podEvictionTimeout

The default value is empty.

kubeAPIQPS

The value can range from 1 to 1000. The default value is empty.

kubeAPIBurst

The value can range from 1 to 1000. The default value is empty.

featureGates

The optional parameter is `TTLAfterFinished`. The default value is empty.

Cloud Controller Manager

routeTableIDs

The default value is empty. If a VPC has multiple route tables, you can manually set this parameter to a comma-separated list of route table IDs to allow CCM to support multiple route tables. Example: `vtb-**,vtb***`.

Kube Scheduler

For information about how to customize parameters for Kube Scheduler, see [Customize scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).

## ACK LINGJUN Cluster

**Component Name**

**Parameter**

**Description**

Kube API Server

enableAdmissionPlugins

The default value is empty.

serviceNodePortRange

The value can range from 10000 to 65535. The default value is empty.

**Important**

Be careful when you modify the NodePort port range. Make sure that the NodePort port range does not conflict with the port range of the `net.ipv4.ip_local_port_range` parameter on the cluster nodes. For more information, see [How do I correctly configure the NodePort range?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management#023c3ce009sv0).

requestTimeout

The default value is empty.

defaultNotReadyTolerationSeconds

The default value is empty.

defaultUnreachableTolerationSeconds

The default value is empty.

maxMutatingRequestsInflight

The value can range from 1 to 1000. The default value is empty.

maxRequestsInflight

The value can range from 1 to 3000. The default value is empty.

featureGates

Optional parameters include `ServerSideApply`, `TTLAfterFinished`, `EphemeralContainers`, `RemoveSelfLink`, and `HPAScaleToZero`. The default value is empty.

**Note**

`HPAScaleToZero` is supported in clusters of version 1.18 and later. You cannot modify `RemoveSelfLink` in clusters of version 1.24 and later.

oidcIssuerURL

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcClientId

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcUsernameClaim

The default value is `sub`. This parameter is supported in clusters of version 1.18 and later.

oidcUsernamePrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsPrefix

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcGroupsClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcRequiredClaim

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

oidcCAContent

The default value is empty. This parameter is supported in clusters of version 1.18 and later.

Kube Controller Manager

horizontalPodAutoscalerSyncPeriod

The default value is empty.

horizontalPodAutoscalerTolerance

The default value is empty.

concurrentTTLAfterFinishedSyncs

The default value is empty.

largeClusterSizeThreshold

The default value is empty.

unhealthyZoneThreshold

The default value is empty.

secondaryNodeEvictionRate

The default value is empty.

nodeEvictionRate

The default value is empty.

podEvictionTimeout

The default value is empty.

kubeAPIQPS

The value can range from 1 to 1000. The default value is empty.

kubeAPIBurst

The value can range from 1 to 1000. The default value is empty.

featureGates

The optional parameter is `TTLAfterFinished`. The default value is empty.

Cloud Controller Manager

routeTableIDs

The default value is empty. If a VPC has multiple route tables, you can manually set this parameter to a comma-separated list of route table IDs to allow CCM to support multiple route tables. Example: `vtb-**,vtb***`.

Kube Scheduler

For information about how to customize parameters for Kube Scheduler, see [Customize scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).
