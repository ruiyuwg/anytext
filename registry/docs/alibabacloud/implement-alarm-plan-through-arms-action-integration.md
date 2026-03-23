When an alert fires, you need a way to trigger a response -- sending data to an external endpoint or invoking a serverless function. Application Real-Time Monitoring Service (ARMS) action integrations connect alerts to these response actions, so you can execute alerting plans manually from the alert history or automatically through a notification policy.

ARMS supports two action integration types:

**Type**

**Use case**

**Network**

**Execution**

**Webhook**

Send alert data to a public HTTP endpoint

Public internet

HTTP request

**Function Compute**

Invoke a serverless function for custom alert processing

Internal network

Synchronous invocation

Both types support static parameters (fixed values) and dynamic parameters (extracted from alert content at runtime using `${xxx}` syntax).

## Prerequisites

Before you begin, make sure that you have:

-   An activated ARMS instance with your service monitored. For more information, see [Activate ARMS](/help/en/arms/getting-started/activate-arms)
    
-   Monitoring metrics and alert rules configured
    

## Create a webhook action integration

A webhook action integration sends an HTTP request to a public endpoint each time you run it.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Integrations**.
    
3.  On the **Integrations** page, click the **Action Integration** tab, and then click **Webhook**.
    
4.  In the **Create Webhook Action Integration** dialog box, configure the following settings:
    
    **Setting**
    
    **Description**
    
    **Name**
    
    A descriptive name for the integration.
    
    **Description**
    
    A brief summary of what the integration does.
    
    **URL**
    
    The public endpoint that receives the HTTP request.
    
    **Parameters**
    
    Static or dynamic key-value pairs included in the request payload. Use `${xxx}` syntax to reference dynamic variables extracted from alert content.
    
5.  Click **Save**.
    

![Create Webhook Action Integration dialog box](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8744054371/p780285.png)

## Create a Function Compute action integration

A Function Compute (FC) action integration invokes a serverless function over the internal network with synchronous execution. This is useful for alert processing logic that requires access to internal services.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Integrations**.
    
3.  On the **Integrations** page, click the **Action Integration** tab, and then click **Function Compute**.
    
4.  In the **Create FC Action Integration** dialog box, configure the settings as prompted and click **Save**.
    

![Create FC Action Integration dialog box](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8607939171/p777406.png)

**Note**

-   Select a function that can be triggered by alert events.
    
-   Use `${xxx}` syntax to define and map dynamic variables from alert content to function input parameters.
    

## Test an action integration

Before using an action integration in production, test it with historical alert data or simulated parameters.

### Test with a historical alert

1.  On the **Action Integration** tab, find the target integration and click **Test** in the **Actions** column.
    
2.  In the **Action Integration Test** dialog box, click the **Alerting Test** tab.
    
3.  Select a historical alert and click **Start Test**.
    

### Test with simulated parameters

1.  On the **Action Integration** tab, find the target integration and click **Test** in the **Actions** column.
    
2.  In the **Action Integration Test** dialog box, click the **Parameter Simulation Test** tab.
    
3.  Specify sample values in the **Variables** section and click **Start Test**.
    

## Run an action integration manually

After you receive an alert notification, you can manually execute the alerting plan from the alert history.

### Step 1: Run the alerting plan

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Sending History**.
    
3.  On the **Alert Sending History** page, find the target alert, click ![Expand](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8607939171/p777477.png) in the **Actions** column, and then click **Perform**.
    

**Note**

-   For a webhook integration, clicking **Perform** sends an HTTP request to the preset webhook URL.
    
-   For an FC integration, clicking **Perform** manually triggers the configured function to execute the alert processing logic.
    

### Step 2: Verify the result

After you run the alerting plan, check that the webhook endpoint or FC function responded as expected.

1.  On the **Alert Sending History** page, click the target alert.
    
2.  On the **Alert Details** page, click the **Action** tab.
    
    ![Action tab on the Alert Details page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8744054371/p777487.png)
    
3.  Find the action and click **Action Details** in the **Actions** column to review the execution result.
    

## Automate action integration execution

To run an action integration automatically when alerts are triggered or cleared, attach it to a notification policy. ARMS then sends alert notifications and runs the integration each time an alert is triggered or cleared.
