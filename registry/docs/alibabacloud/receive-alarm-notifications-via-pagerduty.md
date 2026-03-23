You can use the alert callback feature to push alert notifications from Cloud Monitor to PagerDuty. When a resource meets an alert condition, Cloud Monitor pushes the alert data to PagerDuty. You can use the event processing capability of PagerDuty to receive alert notifications. You can also push alert notifications from PagerDuty to other third-party platforms.

## **Prerequisites**

A PagerDuty account is created. For more information, see **Create a Trial Account** in [Trial Account Onboarding](https://support.pagerduty.com/docs/trial-account-onboarding)**.**

## Step 1: Create a service and obtain the alert callback URL

Create a service in the PagerDuty console to obtain the alert callback URL.

1.  Create a service.
    
    For more information about how to create a service, see **Step 1: Create a Service** and **Step 2: Configure Inbound Integrations** in [Trial Account Onboarding](https://support.pagerduty.com/docs/trial-account-onboarding)**.**
    
    On the **Intelligent** page, you must select **Events API v1** or **Events API v2**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4820249961/p716355.png)
    
2.  Obtain the alert callback URL.
    
    After the service is created, obtain **Integration Key** and **Integration URL** of **Events API v1**, or **Integration Key** and **Integration URL** **(Alert Events)** of **Events API v2** in the **Integrations** section.
    
    The format of the alert callback URL is `_{Integration URL}_?integrationKey=_{Integration Key}_`. Example: `https://events.pagerduty.com/v2/enqueue?integrationKey=0e44aed2509b4807c017605cbdd0****`.
    

## **Step 2: Create an alert rule**

When you create an alert rule in the Cloud Monitor console, you can configure and test the alert callback URL.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Rules**.
    
3.  On the **Alert Rules** page, click **Create Alert Rule**.
    
4.  In the **Create Alert Rule** panel, configure the parameters and test the alert callback URL.
    
    **Note**
    
    For more information about how to configure the parameters for an alert rule, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117).
    
    1.  Enter the alert callback URL (`https://events.pagerduty.com/v2/enqueue?integrationKey=0e44aed2509b4807c017605cbdd0****`) obtained in [Step 1](#2b970ce0481r4) and click **Test**.
        
    2.  In the **Webhook Test** panel, use the default values and click **Test**.
        
        If PagerDuty receives a webhook test event, the URL that you entered is correct and the network connection is normal. When a resource reaches the alert condition, PagerDuty receives the alert data.
        
    
5.  Click **OK**.
    

## **Step 3: View the alert data**

When the alert rule in Cloud Monitor is triggered, you can view the alert data in the PagerDuty console.
