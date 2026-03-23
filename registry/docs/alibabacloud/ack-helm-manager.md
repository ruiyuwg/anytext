You can use the ack-helm-manager component to manage custom Helm charts that are hosted on Container Registry Enterprise Edition. If you want to install Helm charts from Container Registry Enterprise Edition, you must install ack-helm-manager. This topic introduces ack-slo-manager and describes the usage notes and release notes for ack-slo-manager.

## Introduction

If you want to configure custom features, you must install custom Helm charts. Before you install custom Helm charts, you must install ack-helm-manager on the **Add-ons** page of the Container Service for Kubernetes (ACK) console.

### **Prerequisites**

-   Before you use ack-helm-manager, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply to be added to a whitelist.
    
-   The Kubernetes version of your cluster must be 1.18 or later. For more information about how to update the Kubernetes version of your cluster, see [Manually update ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343).
    
-   Helm 3.0 or later is used. For more information about how to update the Helm version, see [\[Component Updates\] Update Helm V2 to V3](/help/en/ack/product-overview/component-updates-update-helm-v2-to-v3#task-2435198) and [How do I manually update Helm?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-applications#section-42y-vhz-d9t)
    

### **Install ack-helm-manager**

To install ack-helm-manager, perform the following steps:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Operations** > **Add-ons** in the left-side navigation pane.
    
3.  On the **Add-ons** page, search for **ack-helm-manager**. Find ack-helm-manager and click **Install**.
    
4.  In the message that appears, click **OK**.
    
5.  On the **Add-ons** page, view the installation progress of ack-helm-manager.
    
    After the installation is complete, **Installed** is displayed for ack-helm-manager.
    

## Usage notes

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Applications** > **Helm** in the left-side navigation pane.
    
3.  On the **Helm** page, click **Deploy**. In the **Basic Information** step, configure the parameters based on the following table.
    
    **Parameter**
    
    **Description**
    
    **Application Name**
    
    Enter a name.
    
    **Namespace**
    
    Select the namespace in which you want to install the Helm chart.
    
    **Source**
    
    Select **ACR EE**.
    
    **Instance**
    
    You can set **Region**, **Instance**, and **Repository** to filter **Helm charts**.
    
4.  Click **Next**.
    
5.  In the **Parameters** step, use the default settings and click **OK**.
    

## Release notes

### **March 2022**

**Version number**

**Image address**

**Release date**

**Description**

**Impact**

0.1.0-9397c1f7

registry.cn-hangzhou.aliyuncs.com/acs/helm-manager:0.1.0-9397c1f7

2022-03-22

ack-helm-manager is released.

No impact on workloads
