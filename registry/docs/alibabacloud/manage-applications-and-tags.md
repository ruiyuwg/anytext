When you run multiple applications in Managed Service for OpenTelemetry, you need a way to control how servers are displayed, manage data collection costs, and organize applications for quick filtering. The **Application Settings** page in the Tracing Analysis console lets you:

-   Switch server display between IP addresses and hostnames
    
-   Enable or disable data collection to control billing
    
-   Create and assign tags to group and filter applications
    
-   Delete applications that are no longer needed
    

Tags are labels you attach to applications to organize and filter them across your account. For example, assign tags like `env:production` or `team:backend` to quickly locate relevant applications in the console.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with Managed Service for OpenTelemetry activated
    
-   At least one application reporting trace data
    

## Open the Application Settings page

1.  Log on to the [Tracing Analysis console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Applications**.
    
3.  In the top navigation bar, select a region.
    
4.  Click the name of the application to configure.
    
5.  In the left-side navigation pane, click **Application Settings**.
    

## Display servers by hostname

By default, servers are identified by IP addresses. If hostnames are more useful for your team, switch to hostname-based display.

![Servers identified by IP address](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5318912761/p526736.png)![Servers identified by hostname](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5318912761/p526738.png)

1.  On the **Custom Configuration** tab, locate the **Display Settings** section.
    
2.  Turn on **Show Host Name**.
    
3.  Click **Save**.
    

**Note** This change applies only to newly collected data. Existing data retains the original IP address display.

## Stop or resume data collection

Disable data collection to stop billing for an application. When data collection is disabled, the application stops incurring charges but all reported data is discarded.

**Important**

After you disable data collection, all reported data is discarded. If the application calls downstream services, traces are incomplete because Tracing Analysis cannot collect the full call chain. Additionally, if the **Capture Data** parameter on the **Cluster Configurations** tab is set to **Enable** or **Disable**, that cluster-level setting overrides the per-application setting.

1.  In the **Data Capturing Settings** section, set **Capture Data** to **Disable**.
    
2.  Click **Save**.
    

To resume data collection, set **Capture Data** to **Enable** and click **Save**.

## Enable or disable tags for an application

1.  Click the **Tags** tab.
    
2.  In the **Manage Application Tags** section, select the tags to enable and clear the tags to disable.
    

## Manage tags across your account

Create, rename, or delete tags that apply to all applications under your account.

1.  Click the **Tags** tab.
    
2.  In the **Manage Application Tags** section, click **Manage Application Tags**.
    
3.  In the **Manage Application Tags** dialog box, perform the following operations:
    
    ![Manage Application Tags dialog box](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9159554461/p345624.png)
    
    -   **Create a tag:** Click the **+** icon and enter a tag name.
        
    -   **Delete a tag:** Hover over the tag and click the **X** icon on the left.
        
        **Important** Deleting a tag detaches it from all applications.
        
    -   **Rename a tag:** Hover over the tag, click the ![Pencil icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2800654461/p345641.png) icon on the right, enter a new name, and click a blank area to confirm.
        
4.  Click **OK**.
    
5.  In the confirmation message, click **OK**.
    

## Delete an application

Before you delete an application, make sure the application no longer needs to report trace data.

1.  Click the **Delete** tab.
    
2.  In the **Delete Application** section, click **Delete**.
    
3.  In the confirmation message, click **Delete**.
