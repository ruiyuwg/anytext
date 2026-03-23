To improve the stability of DNS resolution in Container Service for Kubernetes (ACK) clusters, we recommend that you update CoreDNS to the latest version. This topic describes how to update CoreDNS.

## Background information

The following issues exist in CoreDNS versions earlier than 1.7.0 and may affect the stability of DNS resolution in ACK clusters:

-   If connectivity issues occur between CoreDNS and the API server, such as network jitters, API server restarts, or API server migrations, CoreDNS pods may be restarted because error logs cannot be written. For more information, see [Set klog's logtostderr flag](https://github.com/coredns/coredns/pull/2529).
-   CoreDNS occupies extra memory resources during the initialization process. In this process, the default memory limit may cause out of memory (OOM) errors in large-scale clusters. If this situation intensifies, CoreDNS pods may be restarted repetitively but fail to be started. For more information, see [CoreDNS uses a lot memory during initialization phase](https://github.com/coredns/coredns/issues/2511).
-   CoreDNS has issues that may affect the domain name resolution of headless Services and requests from outside the cluster. For more information, see [plugin/kubernetes: handle tombstones in default processor](https://github.com/coredns/coredns/pull/3890) and [Data is not synced when CoreDNS reconnects to kubernetes api server after protracted disconnection](https://github.com/coredns/coredns/issues/3879).
-   Some earlier CoreDNS versions are configured with default toleration rules that may cause CoreDNS pods to fail to be automatically evicted when exceptions occur on the host node. This may lead to domain name resolution errors in the cluster.

## Update methods

Before you update CoreDNS, we recommend that you read [CoreDNS release notes](/help/en/ack/product-overview/coredns#concept-2071838) and [CoreDNS community changelog](https://coredns.io/tags/release/) to learn the update details and notes.

You can update CoreDNS automatically or manually:

-   Automatic update: Navigate to the Add-ons page in the ACK console. If the Upgrade button is displayed next to the CoreDNS component, it indicates that the component can be automatically updated. For more information, see [Configure ACK to automatically update CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#task-2093043).
-   Manual update: Navigate to the Add-ons page in the ACK console. If the Upgrade button is not displayed next to the CoreDNS component, it indicates that the current component version is outdated. This also indicates that the Kubernetes version of your cluster is outdated and discontinued. In this case, you cannot update CoreDNS to the latest version. To resolve this issue, you must update CoreDNS to 1.6.2 and then update the Kubernetes version of your cluster. Then, you can automatically update CoreDNS to the latest version. For more information about how to manually update CoreDNS, see [Manually update CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-update-coredns#task-2166246).
