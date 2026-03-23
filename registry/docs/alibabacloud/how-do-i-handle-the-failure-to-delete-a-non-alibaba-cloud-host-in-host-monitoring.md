This topic describes how to troubleshoot the issue that a third-party host fails to be deleted from the **Host Monitoring** list.

## **Issue**

A third-party host fails to be deleted from the **Host Monitoring** list even if you have already uninstalled the Cloud Monitor agent from the host.

## **Solution**

If a third-party host fails to be deleted in the Cloud Monitor console, [submit a ticket](https://smartservice.console.alibabacloud.com) to Cloud Monitor.

To delete the third-party host, perform the following operations:

1.  Stop the Cloud Monitor agent on the third-party host.
    
    For more information, see [Stop the Cloud Monitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/common-operations#section-95u-72q-hyd).
    
    **Note**
    
    After the Cloud Monitor agent is stopped, wait a few minutes before you perform [Step 2](#fbfcdfe2c2n0f). The metrics that are reported to Cloud Monitor are waiting to be aggregated. Therefore, the host still exists in the **Host Monitoring** list.
    
2.  Delete the third-party host from the **Host Monitoring** list in the Cloud Monitor console.
    
    1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Host Monitoring**.
        
    3.  On the **Host Monitoring** page, find the third-party host that you want to delete, move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5830861171/p765856.png) icon in the **Actions** column, and then select **Delete Host**.
        
    4.  Delete the third-party host.
        
3.  Uninstall the Cloud Monitor agent from the third-party host.
    
    For more information, see [Common operations](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp#section-hdw-doi-fv4).
    

## **References**

-   [How do I uninstall the Cloud Monitor agent?](/help/en/cms/cloudmonitor-1-0/support/how-do-i-uninstall-the-cloudmonitor-agent)
    
-   [How do I troubleshoot an abnormal stop of the Cloud Monitor agent?](/help/en/cms/cloudmonitor-1-0/support/troubleshoot-an-abnormal-stop-of-the-cloudmonitor-agent)
    
-   [What do I do if the process of the Cloud Monitor agent automatically exits?](/help/en/cms/cloudmonitor-1-0/support/what-do-i-do-if-the-process-of-the-cloudmonitor-agent-automatically-exits)
    
-   [How do I restart the Cloud Monitor agent for C++?](/help/en/cms/cloudmonitor-1-0/support/how-can-i-restart-the-cloudmonitor-agent-for-cpp)
