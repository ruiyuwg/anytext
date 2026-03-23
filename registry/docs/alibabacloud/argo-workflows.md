Argo Workflows is a cloud-native workflow engine for Kubernetes that orchestrates parallel jobs. As a Cloud Native Computing Foundation (CNCF) graduated project, it meets the highest standards for user adoption, security, and project maturity. This topic introduces the Argo Workflows component, and describes its installation steps and release notes.

## Introduction

Argo Workflows is developed based on the open-source Argo Workflows project with enhanced stability and performance. It allows you to deploy large-scale workflows within clusters.

## Use cases

Argo Workflows is ideal for standard workflow scenarios, such as:

-   Machine learning pipelines
    
-   Autonomous driving simulations
    
-   Gene sequencing tasks
    
-   Batch data processing
    
-   Continuous integration and continuous delivery (CI/CD)
    
-   Infrastructure automation
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3904046371/CAEQLxiBgMDducW4mhkiIDllMzMxYjEwYjg3ODRiN2FiYmRhZDljY2VhMjlmNjQ04764568_20241118094608.772.svg)

## Usage notes

-   If you require O&M-free and high performance for large-scale workflow orchestration, we recommend that you use Serverless Argo Workflows. For more information, see [Overview of Kubernetes clusters for distributed Argo workflows](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/overview-12).
    
-   To submit workflows, see [Manage workflows](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/workflow/). For best practices, see [Best practices](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/best-practices/).
    
-   If you have any questions or suggestions, join the DingTalk group **35688562** to discuss with the technical team.
    

## Install Argo Workflows

Argo Workflows can be installed on the **Add-ons** page of the Container Service for Kubernetes (ACK) console.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, search for **Argo Workflows**.
    
4.  Find **Argo Workflows** and click **Install** on its card.
    
5.  In the **Install Argo Workflows** pop-up, click **OK**.
    

## Verify the deployment

1.  On the **Clusters** page, find the cluster that you want to manage and click the name of the cluster or click **Details** in the **Actions** column.
    
2.  In the left-side navigation pane, choose **Applications** > **Helm**.
    
3.  On the **Helm** page, check the deployment status of Argo Workflows. If the **Status** column displays **Deployed**, Argo Workflows is successfully deployed.
    

## Release notes

### November 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.5.12-4ad4d3b

registry.cn-hangzhou.aliyuncs.com/acs/workflow-controller:v3.5.12-4ad4d3b

November 15, 2024

The version 3.5.12 is released.

This update has no impact on workloads.

registry.cn-hangzhou.aliyuncs.com/acs/argo:v3.5.12-4ad4d3b

registry.cn-hangzhou.aliyuncs.com/acs/argoexec:v3.5.12-4ad4d3b

### March 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v3.3-0d060b7

registry.cn-hangzhou.aliyuncs.com/acs/workflow-controller:v3.3-0287b37

March 29, 2022

The Argo Workflows component is available.

This update has no impact on workloads.

registry.cn-hangzhou.aliyuncs.com/acs/argo:v3.3-0287b37

registry.cn-hangzhou.aliyuncs.com/acs/argoexec:v3.3-0d060b7
