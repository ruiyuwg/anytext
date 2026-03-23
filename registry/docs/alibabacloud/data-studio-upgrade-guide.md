To keep pace with cloud-native technologies, meet the demands of complex data processing, and improve scalability, maintainability, and user experience, DataWorks Data Development (Data Studio) is undergoing a major architectural upgrade. This upgrade aims to build a future-ready, high-performance, and highly available data intelligence development platform that provides a more efficient, intelligent, and unified experience for data development and governance.

**Important**

If you encounter any issues during the upgrade, get technical support from the [DataWorks Data Development Upgrade Support Group](https://qr.dingtalk.com/action/joingroup?code=v1,k1,beuiETdvtb+IOvKdSbTI7Bw/kI5mTAnQ1rrIPIujErQ=&_dt_no_comment=1&origin=1).

## **1\. Background**

The original technical architecture of DataWorks was built 16 years ago. While it met core needs in the batch processing era, its limitations have become more apparent with the evolution of technology stacks and business scenarios. This upgrade is driven by three main factors:

#### **Addressing technical requirements for architectural evolution**

-   **Lakehouse architecture support**: The current architecture must be upgraded to natively support a smooth transition from traditional data warehouses to a Lakehouse architecture, unifying metadata management and data processing.
    
-   **Unified offline and real-time processing**: To meet the real-time demands of modern business, the new architecture must provide a unified development paradigm and metadata view that seamlessly integrates offline batch processing and real-time stream computing.
    
-   **Native integration of AI and Large Language Models (LLMs)**: The new architecture must natively integrate AI capabilities, such as machine learning, deep learning, and natural language processing, into the entire data development lifecycle.
    

#### **Resolving technical challenges of the existing architecture**

-   **Limitations of monolithic and batch-centric design**: Designed for batch processing, the legacy monolithic architecture had limited support for Cloud-Native elasticity and stream computing, which impacted the platform's performance.
    
-   **Scalability and maintainability bottlenecks**: Tightly coupled modules resulted in long iteration cycles for new features and high maintenance costs, making it difficult to meet the demands of large-scale concurrent access and custom business needs.
    

#### **Meeting evolving user needs**

-   **Support for large-scale and complex workflows**: To support tens of thousands of active users and process exabyte-scale data, the new architecture must provide higher stability, throughput, and resource isolation.
    
-   **Improved development efficiency and intelligence**: Users expect a smooth development experience comparable to a local IDE. The new architecture introduces intelligent features like code assistance, performance diagnostics, and one-click publishing to make data development significantly more accessible.
    

## **2\. Scope of the upgrade**

**Module**

**Changes**

Data Development (Data Studio)

This product upgrade affects only the user interface (UI) and user experience (UX).

**Important**

Other product modules, such as Operation Center and Deployment Center, are not affected by this upgrade.

## **3\. Impact of the upgrade**

#### **Impact on existing services**

**Item**

**Impact description**

Published production jobs

**Zero impact**. All online jobs will continue to run stably without disruption.

Core data development features

**Fully preserved and enhanced.** The new version retains and optimizes all core capabilities, such as Node Types, function support, and core editing and execution, for improved performance and experience.

#### **User asset migration**

**Asset type**

**Migration plan**

Existing nodes (such as MaxCompute SQL and Shell)

Supports one-click migration to the new interface.

User-Defined Functions (UDFs)

Resource files (such as `.jar`, `.py`, and `.txt`)

Components

Ad-hoc Queries

## **4\. Feature migration**

The new version of Data Development (Data Studio) reintegrates and optimizes features from the legacy version. The following sections explain where to find legacy features and what has changed in the new IDE.

### **4.1 Data development**

#### **4.1.1. Solutions**

-   **Legacy version:** A separate "Solutions" menu was used to organize and manage related Business Flows.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995418.png)
    
-   **New version:** This feature is now "Focus Mode". You can enter Focus Mode from any file directory for a more immersive and flexible development experience.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995419.png)
    

#### **4.1.2. Business flows**

-   **Legacy version:** Used a fixed directory hierarchy and supported Business Flow Dashboards.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995420.png)
    
-   **New version:** You can create directories as needed and tag them to replicate the functionality of the legacy Business Flow directories.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995422.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995424.png)
    

-   **New version:** Business Flow Dashboards are now Directory Dashboards. The "View" capability is available for any directory.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995423.png)
    
-   **New version:** To use workflow orchestration, create a "Scheduled Workflow" in the new Data Development module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995421.png)
    

#### **4.1.3. Node development**

-   **Legacy version:** Only displayed available Node Types. You could not see other Node Types supported by DataWorks or write code for them before binding an Engine.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995428.png)
    
-   **New version:** Node development is integrated into the Project Directory. You can see all Node Types and write code before binding an Engine. The process for creating new nodes is still being optimized to improve the creation and coding experience.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995433.png)
    

##### **4.1.3.1. Run/run with parameters**

-   **Legacy version:** Had separate "Run" and "Run with Parameters" buttons. When you clicked **Run with Parameters**, you selected a Running Resource Group and Custom Parameters in a pop-up dialog.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995432.png)
    
-   **New version:**
    
    -   The "Run" and "Run with Parameters" buttons are now consolidated into a single "Run" button.
        
    -   The legacy "Engine Instance" is now split into "Data Source" and "Compute Resource", depending on the node type:
        
        -   Data Source: Used for metadata suggestions in the intelligent code editor.
            
        -   Compute Resource: Determines the compute resources used for code debugging.
            
    -   The legacy "Running Resource Group" is now "Resource Group" in the Debug Configuration panel.
        
    -   The legacy "Custom Parameters" are now "Parameters" in the Debug Configuration panel.
        
    -   The "Debug Configuration" panel is always visible on the right side of the node. Each code run uses the Compute Resource, Resource Group, and Parameters from this panel.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995425.png)
    

##### **4.1.3.2. Smoke test/view smoke test records**

-   **Legacy version:** You could only start a Smoke Test after a successful submission.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995431.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995434.png)
    
-   **New version:**
    
    -   **Standard Mode**: You can start a Smoke Test after you successfully publish the task to the development environment (equivalent to submission in the legacy version).
        
    -   **Basic Mode**: You can start a Smoke Test after you successfully publish the task to the production environment (equivalent to submission in the legacy version).
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995427.png)
    

##### **4.1.3.3. Code review/view code review records**

-   **Legacy version:** The buttons were located directly on the node toolbar.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995426.png)
    
-   **New version:** You can initiate a Code Review from the Production Checker step during the publishing process. You can view the Code Review list in the directory tree on the left.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995429.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995430.png)
    

##### **4.1.3.4. Submit/submit and allow others to edit**

-   **Legacy version**:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995440.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995435.png)
    
-   **New version**: The "Submit" function is now called "Publish". The new version allows users with the necessary permissions to publish directly. In Standard Mode, you can also package tasks and publish them to the Deployment Center.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995436.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995439.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995438.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995437.png)
    

#### **4.1.4. Table development**

-   **Legacy version:** You created tables in the Data Development module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995446.png)
    
-   **New version:** This feature is now the "Data Directory" management module. In Data Directory, you can create tables using a visual form, code, or AI-assisted Table Creation.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995445.png)
    

#### **4.1.5. Resource development**

-   **Legacy version:** You created resources in the Data Development module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995442.png)
    
-   **New version:** This feature is now part of the "Resource Management" module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995444.png)
    

#### **4.1.6. Function development**

-   **Legacy version:** You created functions in the Data Development module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995443.png)
    
-   **New version:** This feature is now part of the "Resource Management" module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995441.png)
    

* * *

### **4.2 Component management**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995453.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995454.png)
    

* * *

### **4.3 Manual tasks**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995450.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995448.png)
    

* * *

### **4.4 Manual business flows**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995447.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995449.png)
    

-   For more comprehensive manual workflow capabilities, we recommend using Event-driven Workflows. You can find this under Project Directory > Workflow > Triggered Workflow.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995452.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995451.png)
    

* * *

### **4.5 Ad-hoc queries**

-   **Legacy version:** It displayed ad-hoc query files for all users in the current workspace.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995459.png)
    
-   **New version:**
    
    -   Displays ad-hoc query files for the current user across all workspaces in the current region.
        
    -   This module is for code debugging only. If you need to publish a query as a production job, you can submit it to the project directory, configure its scheduling settings, and then publish it.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8354175571/p995456.png)
    

* * *

### **4.6 Table management**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995458.png)
    
-   **New version:** This feature is now the "Data Directory" management module. In Data Directory, you can create tables using a visual form, code, or AI-assisted Table Creation.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995455.png)
    

* * *

### **4.7 Public tables**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995457.png)
    
-   **New version:** This feature is now the "Data Directory" management module.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995462.png)
    

* * *

### **4.8 Function list**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995460.png)
    
-   **New version:** You can now ask Copilot directly about how to use functions.
    
    > Future releases will include a function management module. It will include management and creation of official Engine functions and User-Defined Functions.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995461.png)
    

* * *

### **4.9 Operation checks**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995466.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995467.png)
    

* * *

### **4.10 Run history**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995468.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995465.png)
    

* * *

### **4.11 Smoke test records**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995464.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995463.png)
    

* * *

### **4.12 Compute resources**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995476.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995479.png)
    

* * *

### **4.13 Settings**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995475.png)
    
-   **New version:** Theme switch.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995480.png)
    

-   **New version:** Other settings.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995478.png)
    
-   **New version:** Explore more settings.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995477.png)
    

* * *

### **4.14 Recycle bin**

-   **Legacy version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995481.png)
    
-   **New version:**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995482.png)
    

## 5\. How to upgrade

### **5.1 Required permissions**

-   Only users with permissions equivalent to a **Workspace Administrator** can see and perform the upgrade.
    

### **5.2 Upgrade procedure**

#### **5.2.1. Access the upgrade entry point**

-   The upgrade entry point is in the top navigation bar of the Data Studio (Data Development) main interface.
    
-   Find the blue "Upgrade to New Version" button next to the workspace selector.
    
-   Only users with the required permissions can see this button.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995484.png)
    

#### **5.2.2. Review upgrade considerations**

After you click the "Upgrade to New Version" button, a page with upgrade information appears.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995483.png)

**After a successful upgrade, you cannot roll back to the previous version**. Review the following points before you begin. If you need assistance during the upgrade, join the [DataWorks Data Development Upgrade Support Group](https://qr.dingtalk.com/action/joingroup?code=v1,k1,mwUjVT5SPIqIOvKdSbTI7FxG6hTFO7C00nCfms/XYZc=&_dt_no_comment=1&origin=11?).

**Important**

1.  If you use the legacy Data Studio OpenAPI or need the migration assistant, contact our on-duty engineers in the [DataWorks Data Development Upgrade Support Group](https://qr.dingtalk.com/action/joingroup?code=v1,k1,mwUjVT5SPIqIOvKdSbTI7FxG6hTFO7C00nCfms/XYZc=&_dt_no_comment=1&origin=11?) before you upgrade.
    
2.  After the upgrade, you cannot publish tasks between a workspace running the legacy version and an upgraded workspace.
    
3.  During the upgrade, you cannot add or modify content in either the new or legacy version of Data Studio for the current workspace. This applies to both UI and OpenAPI operations.
    
4.  The upgrade takes time. We recommend performing the upgrade during off-peak development hours.
    
5.  The workspace name and ID remain unchanged after the upgrade.
    
6.  After the upgrade, the legacy version of Data Studio is read-only, and code edited in the new version of Data Development does not sync back to it.
    
7.  After the upgrade, when files from legacy ad-hoc queries are migrated to the new Data Studio, only the files you own will be visible in your personal directory.
    

#### **5.2.3. Perform the upgrade**

-   When the current status is "Upgrade has not started for the current workspace", click the "Start Upgrade" button.
    
-   When you click "Start Upgrade", the system shows the estimated time and the number of objects to be migrated for the current workspace.
    
-   Click "Confirm" to start the upgrade.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995488.png)
    
-   You can monitor the progress and status in real time during the upgrade.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2485175571/p995489.png)
    
-   During the upgrade, click "Upgrade Details" to view a real-time log of the process.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8938475571/p995486.png)
    
-   During the upgrade, click "Refresh" to see the latest status.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8938475571/p995485.png)
    
-   After the upgrade is complete, click "Go to Data Studio" to start using the new version of Data Development.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485175571/p995487.png)
    

## 6\. Upgrade support

### **6.1 Dedicated upgrade service**

-   **Online help**: Detailed guidance is available during the upgrade process.
    
-   **Technical consultation**: If you have questions, contact technical support in the [DataWorks Data Development Upgrade Support Group](https://qr.dingtalk.com/action/joingroup?code=v1,k1,O7SsF5a+GlOIOvKdSbTI7Mc6Umw/xgtxO8mAKwIcdvs=&_dt_no_comment=1&origin=1). On-site service is available if necessary.
    
-   **Emergency response**: A rapid response mechanism is in place for any upgrade-related issues.
    
-   **Product training**: We can provide training on the new features after the upgrade if needed.
    

### **6.2 Rollback mechanism**

If you encounter issues during the upgrade process, contact technical support in the [DataWorks Data Development Upgrade Support Group](https://qr.dingtalk.com/action/joingroup?code=v1,k1,O7SsF5a+GlOIOvKdSbTI7Mc6Umw/xgtxO8mAKwIcdvs=&_dt_no_comment=1&origin=1). We can help you roll back to the state before the upgrade began.
