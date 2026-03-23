The logtail-ds component is an agent provided by Log Service to collect Kubernetes logs. This topic introduces logtail-ds and describes the usage notes and release notes of the component.

## Introduction

The logtail-ds component enables high-performance log collection with low resource overhead. By default, the component is installed in the kube-system namespace. The system automatically performs the following operations when you install logtail-ds:

1.  Creates a CustomResourceDefinition (CRD) named aliyunlogconfigs that is used to register CRDs with the Kubernetes system.
2.  Creates a Deployment named alibaba-log-controller that is used to manage CRDs.
3.  Installs Logtail as a DaemonSet that is used to collect log data.

You can use logtail-ds to dynamically filter the containers whose logs you want to collect. logtail-ds can collect multiple types of log data, such as standard output, files, and syslog. The component also supports multiple log parsing methods and configuration methods. For more information about the log collection features, see [Logtail overview](/help/en/sls/use-logtail-to-collect-data/#concept-ppd-yx5-vdb "This topic describes the features, benefits, limits, and configuration process of Logtail.").

## Usage notes

For more information about the usage notes of logtail-ds, see [Collect log files from containers by using Log Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#task-1797722 "Container Service for Kubernetes (ACK) is integrated with Log Service. When you create a cluster, you can enable Log Service to collect log files from containers, including standard outputs (stdout) and text files.").

## Release notes

For more information about the release notes of logtail-ds, see [logtail-ds release notes](/help/en/sls/sls-release-notes#concept-w5w-q3q-zdb "This topic describes the release notes of Log Service Logtail.").
