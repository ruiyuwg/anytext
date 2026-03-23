After you install and configure a Helm client and configure a Container Registry Enterprise Edition instance, you can use the Helm chart feature of Container Registry Enterprise Edition to push and pull charts and efficiently host and distribute resources in Kubernetes clusters.

## Background information

Kubernetes provides a unified API which you can use to define Kubernetes resources in YAML files. Kubernetes has a variety of resource types, such as Deployments, StatefulSets, and ConfigMaps.

As the YAML-based software delivery system is constantly improved, the Cloud Native Computing Foundation (CNCF) community has developed charts and its implementation tool Helm to manage resources at a higher level.

-   A chart is a collection of files that describe a related set of Kubernetes resources. For example, a chart can be a collection of files that describe WordPress and MySQL resources or a collection of resource description files for an etcd cluster.
    
-   Helm is a command-line interface (CLI) tool used to manage charts and their releases.
    

## **Description**

-   For Enterprise Edition image repositories using the Helm Chart feature, the following limits apply to a single Chart package:
    
    -   The size of a single Chart package must be ≤ 20 MB.
        
    -   If a single Chart package exceeds 20 MB, you must [Push and pull charts as OCI artifacts](/help/en/acr/user-guide/push-and-pull-chart-using-oci-product-form/).
        
-   Container Registry Enterprise Edition instances allow you to use Helm 2 and Helm 3 clients to manage cloud-native assets. Helm clients of different versions allow you to manage Helm charts in different ways:
    
    -   For Helm 3 client, you can directly use Container Registry Enterprise Edition to host Helm charts.
        
    -   For Helm 2 client, you need to turn on Charts in the Component Settings section of the **Overview** page of the Enterprise Edition instance. Once the component status changes to **Running**, you can host chart repositories.
        

**Client version**

**How to use Helm**

**Feature**

Helm 2

Install the Helm-acr plug-in.

Use chart repositories to host charts. For more information, see [Use Helm 2 to push and pull charts](/help/en/acr/user-guide/push-and-pull-chart-using-helm-2).

Helm 3

Without installing plug-ins.

You can manage charts as OCI artifacts. We recommend you use this management method. Container Registry Enterprise Edition provides features such as chart replication across repositories around the world, chart signing, and chart version immutability of repositories. For more information, see [Use Helm earlier than V3.7 to push and pull charts](/help/en/acr/user-guide/3-7-the-following-versions-using-helm) and [Use Helm 3.7 or later to push and pull charts](/help/en/acr/user-guide/push-and-pull-chart-using-helm-version-3-7-and-above).

Install the Helm-push plug-in

You can use chart repositories to manage charts. In this case, open source components can be used in Enterprise Edition instances. For more information, see [Use the Helm cm-push plug-in to push and pull charts](/help/en/acr/user-guide/push-and-pull-chart-using-helm-push-plugin).
