When you create a notification policy in Application Real-Time Monitoring Service (ARMS), you can specify that alert notifications are sent to a custom webhook URL. ARMS allows you to send alert notifications to contacts of specific instant messaging apps. ARMS webhooks let you send alert notifications as HTTP requests to any endpoint, with full control over the payload format.

The following sections walk you through creating a webhook, customizing notification templates, and connecting the webhook to a notification policy.

## How it works

When an alert fires or resolves, ARMS sends an HTTP request to your webhook URL with a JSON payload that contains alert details. The workflow has three parts:

1.  **Create a webhook** -- Define the target URL, HTTP method, headers, and notification templates in the ARMS console.
    
2.  **Connect the webhook to a notification policy** -- Add the webhook as a notification object so that matching alerts are routed to it.
    
3.  **Receive notifications** -- ARMS sends the rendered template payload to the webhook URL each time an alert fires or resolves.
    

**Important**

The webhook request times out after **5 seconds**. If the endpoint does not respond within 5 seconds, the notification fails to be sent.

## Create a webhook

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  In the **Edit Contact Group** dialog box, click the **Webhook** tab and then click **Add Webhook**.
    
4.  In the **Create Webhook** dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Webhook Name**
    
    Required. A descriptive name for the webhook, such as `lark-ops-alerts`.
    
    **Post or Get**
    
    Required. The HTTP method and target URL. Select **Post** for most integrations. Paste the webhook URL of your target service. The URL can be up to 256 characters.
    
    **Header or Param**
    
    Optional. Request headers or query parameters. Click **Add** to add entries. Each entry can be up to 200 characters. The total number of headers and parameters combined cannot exceed 6. The default header is `Content-Type: text/plain; charset=UTF-8`.
    
    **Notification template**
    
    Optional. The JSON payload sent when an alert fires. Available only for **Post** requests. You can use the `$content` placeholder to specify the notification content. The content can be up to 500 characters. See [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates#task-2082508).
    
    **Template to Clear Alerts**
    
    Optional. The JSON payload sent when an alert resolves. Available only for **Post** requests. You can use the `$content` placeholder to specify the notification content. The content can be up to 500 characters. See [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates#task-2082508).
    
5.  (Optional) Click **Test** to send a test notification and verify the configuration.
    
6.  Click **OK**.
    

## Template variables

Use Go-template syntax (`{{ }}`) inside the **Notification template** and **Template to Clear Alerts** fields. The following table lists the available variables.

**Variable**

**Description**

`{{ .commonLabels.alertname }}`

Alert name

`{{ .commonLabels.clustername }}`

Cluster name (conditional)

`{{ .commonLabels._aliyun_arms_involvedObject_kind }}`

Type of monitored object (compared with `"app"`)

`{{ .commonLabels._aliyun_arms_involvedObject_name }}`

Application name (conditional, when `_aliyun_arms_involvedObject_kind` is `app`)

`{{ .dispatchRuleName }}`

Notification policy name

`{{ .startTime }}`

Alert time

`{{ .endTime }}`

Time when the alert is resolved

`{{ for .alerts }} {{ .annotations.message }} {{ end }}`

Loop over all alerts and output each notification message

**Note**

You can use the `$content` placeholder to specify the notification content. Use conditional blocks like `{{ if .commonLabels.clustername }}...{{ end }}` to include fields only when they have values.

### Template examples

**Generic JSON template (alert fired):**

```
{
  "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}",
  "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}",
  "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}",
  "Notification policy":"{{ .dispatchRuleName }}",
  "Alert time":"{{ .startTime }}",
  "Notification content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}"
}
```

**Generic JSON template (alert resolved):**

```
{
  "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}",
  "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}",
  "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}",
  "Notification policy":"{{ .dispatchRuleName }}",
  "Time resolved":"{{ .endTime }}",
  "Notification content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}"
}
```

## Connect the webhook to a notification policy

After you create a webhook, attach it to a notification policy so that alerts are routed to it.

1.  Create or edit a notification policy. For detailed steps, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies#concept-rr3-55h-hhb).
    
2.  Set the **Notification Object** parameter to **Universal Webhook**, and then select the webhook you created.
    
3.  Save the notification policy.
    

Alerts that match the policy are now sent to the configured webhook endpoint.

## Limits

**Item**

**Limit**

Webhook request timeout

5 seconds. If the webhook receives no response within 5 seconds, the notification fails to be sent.

URL length (**Post or Get** field)

256 characters

Header or parameter length

200 characters per entry

Total headers and parameters

6

Notification template length

500 characters

Template to Clear Alerts length

500 characters

## Send alerts to Lark

To send ARMS alerts to Lark, create a custom bot in a Lark group, copy its webhook URL, and then use it when you [create a webhook](#section-tex-2f2-nq4) in the ARMS console.

### Get the Lark webhook URL

1.  Open and log on to Lark on your computer.
    
2.  Click the **+** icon and then click **New group** to create a group for receiving alerts.
    
3.  Click the Settings icon and then click the **Bots** tab.
    
4.  On the **Bots** tab, click **Add Bot**.
    
    ![Lark - Add Bot](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2648758061/p201547.png)
    
5.  In the **Add Bot** dialog box, click **Add** in the **Custom Bot** section.
    
    ![Lark - Custom Bot](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2648758061/p201572.png)
    
6.  Set the **Bot name** and **Description** parameters and click **Add**.
    
    ![Lark - Bot settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512567461/p201575.png)
    
7.  Click **Copy** next to **Webhook URL** and then click **Finish**.
    
    ![Lark - Webhook URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512567461/p201577.png)
    

### Configure the webhook for Lark

When you [create a webhook](#section-tex-2f2-nq4) in the ARMS console, apply the following Lark-specific settings:

**Headers:**

**Header**

**Value**

`Arms-Content-Type`

`json`

`Content-Type`

`application/json`

**Notification template (alert fired):**

```
{
  "msg_type": "text",
  "content": {
    "text": "Alert name: {{ .commonLabels.alertname }}\n{{if .commonLabels.clustername }}Cluster name: {{ .commonLabels.clustername }}\n{{ end }}{{if eq \"app\" .commonLabels._aliyun_arms_involvedObject_kind }}Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }}\n{{ end }}Notification policy: {{ .dispatchRuleName }} \nAlert time: {{ .startTime }} \nNotification content: {{ for .alerts }} {{ .annotations.message }}\n {{ end }}"
  }
}
```

**Template to Clear Alerts (alert resolved):**

```
{
  "msg_type": "text",
  "content": {
    "text": "Alert name: {{ .commonLabels.alertname }}\n{{if .commonLabels.clustername }}Cluster name: {{ .commonLabels.clustername }}\n{{ end }}{{if eq \"app\" .commonLabels._aliyun_arms_involvedObject_kind }}Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }}\n{{ end }}Time resolved: {{ .startTime }} \nNotification policy: {{ .dispatchRuleName }} \nNotification content: {{ for .alerts }} {{ .annotations.message }}\n {{ end }}"
  }
}
```

## What's next

-   [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates)
    
-   [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies)
