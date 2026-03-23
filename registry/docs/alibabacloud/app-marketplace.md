App Marketplace provided by Container Service for Kubernetes (ACK) is integrated with Helm. This enables App Marketplace to provide Helm-related features, such as a web interface and Alibaba Cloud repositories. This topic introduces App Marketplace of ACK and describes how to create and modify Helm charts in the ACK console.

## Background information

The microservices technology is an important component of containerization. The process of deploying and managing applications as microservices is complex. An application can be divided into several microservices. These microservices can be separately deployed and scaled out to achieve agile development and fast iteration. If an application is divided into a large number of microservices, the developers must resolve the issues related to microservices management, such as resource management, version control, and configuration management.

ACK integrates with Helm to simplify how you can deploy and manage Kubernetes applications as microservices on the Kubernetes orchestration platform.

Helm is an open source subproject for Kubernetes service orchestration. Helm can be used as a package manager to package applications into versioned archives. Packaged Kubernetes applications are much easier to deploy and manage.

## Overview

App Marketplace provides App Catalog. App Catalog provides charts that are customized or optimized by ACK based on open source versions. These charts include container images, dependencies, and custom resource definitions (CRDs) that are required to deploy and run applications. App Catalog also provides detailed information about these charts, such as the introduction, installation procedure, parameters, and considerations. You can use Helm to deploy and manage charts in App Catalog. For more information, see [Use Helm to simplify application deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-helm-to-simplify-application-deployment/#task-1779943 "This topic introduces the basic concepts of Helm and describes how to use Helm to deploy an Apache Spark-based WordPress application in a Container Service for Kubernetes (ACK) cluster.").

## Create a Helm chart

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
2.  In the left-side navigation pane of the ACK console, choose Marketplace > App Catalog.
3.  Click the App Catalog tab and click a chart.
4.  In the upper-right corner of the chart details page, click Deploy.
5.  On the Basic Information wizard page, select a cluster and a namespace, and then click Next.
6.  On the Parameters wizard page, select a chart version, configure the required parameters, and then click OK.

## Modify a Helm chart

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
2.  In the left-side navigation pane of the ACK console, click Clusters.
3.  On the Clusters page, find the cluster that you want to manage and click the name of the cluster or click Details in the Actions column. The details page of the cluster appears.
4.  In the left-side navigation pane of the details page, choose Applications > Helm.
5.  On the Helm page, click Update in the Actions column for the chart that you want to modify.
6.  In the Update Release panel, select a version, modify the parameters, and then click OK.

## Disclaimer

Some charts in App Catalog are developed based on open source versions to better fit ACK. Alibaba Cloud provides technical support for these charts in App Catalog. However, Alibaba Cloud does not provide compensation or reimbursement for damages that are caused by the defects of the open source charts that you use.
