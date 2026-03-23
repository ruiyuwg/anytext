When infrastructure issues trigger alerts, your team needs immediate notification in the tools they already use. Managed Service for Prometheus sends alert notifications to any HTTP endpoint -- such as Lark, Slack, or a custom service -- through webhooks. Create a webhook contact, define the payload template, and link it to a notification policy.

This guide uses Lark as an example.

## Prerequisites

Before you begin, make sure that you have:

-   A Managed Service for Prometheus instance
    
-   Access to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home)
    
-   An instant messaging app (such as Lark) or a custom HTTP endpoint that can receive webhook requests
    

## Step 1: Get a webhook URL from your messaging app

This step uses Lark as an example. If you already have a webhook URL, skip to [Step 2](#section-tex-2f2-nq4).

1.  Open and log on to Lark.
    
2.  Click the **+** icon, and then click **Add Group** to create a group for receiving alert notifications.
    
3.  Click the Settings icon on the right side of the group, and then click the **BOTs** tab.
    
4.  Click **Add Bot**.
    
    ![Lark - Add bot](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2648758061/p201547.png)
    
5.  In the **Add Bot** dialog box, click Add in the **Custom Bot** section.
    
    ![Lark - Custom bot](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2648758061/p201572.png)
    
6.  Enter the bot name and description, and then click **Add**.
    
    ![Lark - Bot settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512567461/p201575.png)
    
7.  Click **Copy** next to Webhook URL, and then click **Save**. Save this URL for the next step.
    
    ![Lark - Webhook URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9512567461/p201577.png)
    

## Step 2: Create a webhook in the console

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Notification Objects**.
    
3.  In the **Edit Contact Group** dialog box, click the **Webhook** tab, and then click **Create Webhook**.
    
4.  In the **Create Webhook** dialog box, configure the settings described in the following subsections.
    

### Connection settings

**Parameter**

**Description**

**Webhook Name**

A name for the webhook.

**Request method**

The HTTP method (**Post** or **GET**) and the destination URL. The URL must be an HTTP or HTTPS address and cannot exceed 100 characters. For the Lark example, select **Post** and paste the webhook URL from Step 1.

### Headers and parameters

Configure request headers and parameters in the **Header and Param** section. A maximum of 200 characters are supported. Click **Add** to add entries. The total number of headers and parameters cannot exceed 6.

The default request header is `Content-Type: text/plain; charset=UTF-8`.

For the Lark example, set the following headers:

**Header**

**Value**

Arms-Content-Type

json

Content-Type

application/json

### Notification template

If you set Request Method to Post, you must configure the following parameters.

Define the payload sent when an alert fires. The **Notification template** field accepts up to 500 characters. Use the `$content` placeholder to include the notification content. For template syntax details, see [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates#task-2082508).

**Default template structure:**

```
{
  "Alert name": "{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}",
  "Cluster name": "{{ .commonLabels.clustername }} {{ end }}{{if eq \"app\" .commonLabels._aliyun_arms_involvedObject_kind }}",
  "Application name": "{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}",
  "Notification policy": "{{ .dispatchRuleName }}",
  "Alert time": "{{ .startTime }}",
  "Notification content": "{{ for .alerts }} {{ .annotations.message }} {{ end }}"
}
```

**Lark example:**

The following template formats the alert as a Lark text message:

```
{
  "msg_type": "text",
  "content": {
    "text": "Alert Name: {{ .commonLabels.alertname }}\n{{if .commonLabels.clustername }}Cluster Name: {{ .commonLabels.clustername }}\n{{ end }}{{if eq \"app\" .commonLabels._aliyun_arms_involvedObject_kind }}Application Name: {{ .commonLabels._aliyun_arms_involvedObject_name }}\n{{ end }}Notification Policy: {{ .dispatchRuleName }} \nAlert Triggered At: {{ .startTime }} \nAlert Message: {{ for .alerts }} {{ .annotations.message }}\n {{ end }}"
  }
}
```

### Template to clear alerts

Define the payload sent when an alert is resolved. The **Template to Clear Alerts** field also accepts up to 500 characters and supports the same `$content` placeholder and template variables. For template syntax details, see [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates#task-2082508).

**Default template structure:**

```
{
  "Alert name": "{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}",
  "Cluster name": "{{ .commonLabels.clustername }} {{ end }}{{if eq \"app\" .commonLabels._aliyun_arms_involvedObject_kind }}",
  "Application name": "{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}",
  "Notification policy": "{{ .dispatchRuleName }}",
  "Time when the alert is resolved": "{{ .endTime }}",
  "Alert Content": "{{ for .alerts }} {{ .annotations.message }} {{ end }}"
}
```

**Lark example:**

```
{
  "msg_type": "text",
  "content": {
    "text": "Alert Name: {{ .commonLabels.alertname }}\n{{if .commonLabels.clustername }}Cluster Name: {{ .commonLabels.clustername }}\n{{ end }}{{if eq \"app\" .commonLabels._aliyun_arms_involvedObject_kind }}Application Name: {{ .commonLabels._aliyun_arms_involvedObject_name }}\n{{ end }}Alert Cleared At: {{ .startTime }} \nNotification Policy: {{ .dispatchRuleName }} \nAlert Message: {{ for .alerts }} {{ .annotations.message }}\n {{ end }}"
  }
}
```

### Available template variables

Use the following variables in both the notification template and the clear template:

**Variable**

**Description**

`{{ .commonLabels.alertname }}`

Alert name

`{{ .commonLabels.clustername }}`

Cluster name (available when the alert is associated with a cluster)

`{{ .commonLabels._aliyun_arms_involvedObject_kind }}`

Object kind (for example, `app`)

`{{ .commonLabels._aliyun_arms_involvedObject_name }}`

Application name (available when the object kind is `app`)

`{{ .dispatchRuleName }}`

Notification policy name

`{{ .startTime }}`

Time when the alert fired

`{{ .endTime }}`

Time when the alert was resolved

`{{ for .alerts }} {{ .annotations.message }} {{ end }}`

Alert messages (iterates over all alerts in the group)

### Test and save

1.  (Optional) Click **Test** to send a test payload to the webhook endpoint. If the test fails, verify the following:
    
    -   The webhook URL is correct and reachable from Alibaba Cloud.
        
    -   The request method matches what the endpoint expects.
        
    -   The headers are correct (for example, `Content-Type: application/json` for JSON payloads).
        
    -   The notification template is valid JSON.
        
2.  Click **OK**.
    

## Step 3: Add the webhook to a notification policy

Link the webhook to a notification policy so that matching alerts are delivered to the webhook endpoint.

1.  Create or edit a notification policy. For detailed steps, see [Create and manage a notification policy](/help/en/prometheus/user-guide/create-a-notification-policy#concept-rr3-55h-hhb).
    
2.  Set **Notification Object** to **Universal Webhook**, and then select the webhook you created.
    

**Note**

The timeout for webhook notifications is 5 seconds. If the endpoint does not respond within 5 seconds, the notification fails.

## Result

After you complete these steps, alerts that match the notification policy are sent to the configured webhook endpoint as HTTP requests. The endpoint receives the JSON payload defined in the notification template when an alert fires, and the clear template payload when the alert is resolved.

## Related topics

-   [Configure a notification template and a webhook template](/help/en/arms/alarm-operation-center/configure-notification-templates-and-webhook-templates)
    
-   [Create and manage a notification policy](/help/en/prometheus/user-guide/create-a-notification-policy)
