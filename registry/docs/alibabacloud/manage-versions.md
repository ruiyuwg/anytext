When you iterate on a Function Compute service, every change to its configuration or functions takes effect immediately. Without versioning, there is no way to isolate in-progress work from production traffic. Service versions let you capture a point-in-time snapshot, so you can keep a stable version online while continuing to develop the LATEST version.

Versions enable you to:

-   **Deploy safely.** Publish a tested snapshot to production without risking unfinished changes.
    
-   **Support CI/CD.** Release multiple versions during the software development lifecycle to support continuous integration and continuous delivery.
    
-   **Control traffic.** Assign a version as the primary or canary release version of an alias to split traffic between stable and experimental code.
    
-   **Roll back quickly.** If a new release causes issues, route traffic back to a previous version through an alias.
    

## How it works

Function Compute provides **service-level** versioning. Each version is a snapshot of:

-   Service configurations
    
-   Functions within the service (code and configuration)
    

Versions do **not** contain trigger information. Triggers are managed separately and can point to any version through an alias.

When you publish a version, Function Compute generates a snapshot and assigns a version number. Version numbers increase sequentially, are unique, and are never reused -- even if the version is later deleted.

After a version is published, it is **immutable**. The configuration and function code captured in that snapshot cannot be modified.

Every new service starts with a single LATEST version. Before you publish a version, LATEST is the only version available. Do not delete the LATEST version.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5414795071/5e9d7af2bbeek.svg)

## Prerequisites

Before you begin, make sure that you have:

-   A [service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4)
    
-   A [function](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-b9y-zn1-5wr) in that service
    

## Publish a version

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region.
    
3.  On the **Services** page, click the desired service. In the left-side navigation pane, click **Versions**.
    
4.  On the **Versions** page, click **Publish Version**. In the Publish New Version of Service panel, specify the description of the version and click **OK**.
    

After the version is published, it appears on the **Versions** page. From there, you can also specify a version as the primary or canary release version of an alias.

## Delete a version

On the **Versions** page, locate the version that you want to remove and delete it.

**Important**

Deleting a version removes only the functions and configurations captured in that version. Aliases and triggers that point to the deleted version are **not** removed automatically. You must remove any aliases and triggers that reference a version before you can delete it. Otherwise, calling an alias that points to a deleted version returns an error.

## See also

Serverless Devs also supports version management for a service. For details, see [Serverless Devs commands](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands#task-2182726).
