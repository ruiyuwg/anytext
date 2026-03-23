If you have a large number of resources, we recommend that you add these resources to application groups. Then, you can create alert templates and apply them to the application groups. Alert templates allow you to create and manage alert rules in an efficient manner.

## Prerequisites

-   One or more application groups are created. For more information, see [Create an application group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-application-group#task-2000412).
    
-   One or more alert templates are created. For more information, see [Create an alert template](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-template#task-1919409).
    

## Background information

When an alert template is applied to an application group, Cloud Monitor automatically deletes the original alert rules configured for the application group and creates alert rules based on the alert template.

## Procedure

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Templates**.
    
3.  Apply alert templates to application groups.
    
    -   Apply an alert template to one or more application groups
        
        1.  Find the alert template that you want to apply to application groups and click **Apply to Groups** in the **Actions** column.
            
        2.  In the **Apply Templates to Groups** dialog box, select one or more application groups and set the **Mute Period**, **Effective Period**, **Alert Callback**, and **Template Application Policy** parameters.
            
        3.  Click **OK**.
            
        4.  In the **Apply Templates to Groups** message, click **OK**.
            
    -   Apply multiple alert templates to one or more application groups
        
        1.  Click the check boxes in front of the alert templates that you want to apply, and then click **Apply Templates** in the lower-left corner.
            
        2.  In the **Apply Templates to Groups** dialog box, select one or more application groups and set the **Mute Period**, **Effective Period**, **Alert Callback**, and **Template Application Policy** parameters.
            
        3.  Click **OK**.
            
        4.  In the **Apply Templates to Groups** message, click **OK**.
