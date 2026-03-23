-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Billing Budget v1 API - Class NotificationsRule (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.5.0keyboard\_arrow\_down

-   [2.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/latest/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.6.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.4.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.3.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.2.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.1.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.0.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/1.2.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/1.1.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)

```
public sealed class NotificationsRule : IMessage<NotificationsRule>, IEquatable<NotificationsRule>, IDeepCloneable<NotificationsRule>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Billing Budget v1 API class NotificationsRule.

NotificationsRule defines notifications that are sent based on budget spend and thresholds.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NotificationsRule

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[NotificationsRule](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[NotificationsRule](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[NotificationsRule](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Billing.Budgets.V1](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1)

## Assembly

Google.Cloud.Billing.Budgets.V1.dll

## Constructors

### NotificationsRule()

```
public NotificationsRule()
```

### NotificationsRule(NotificationsRule)

```
public NotificationsRule(NotificationsRule other)
```

**Parameter**

**Name**

**Description**

`other`

`[NotificationsRule](/dotnet/docs/reference/Google.Cloud.Billing.Budgets.V1/2.5.0/Google.Cloud.Billing.Budgets.V1.NotificationsRule)`  

## Properties

### DisableDefaultIamRecipients

```
public bool DisableDefaultIamRecipients { get; set; }
```

Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### EnableProjectLevelRecipients

```
public bool EnableProjectLevelRecipients { get; set; }
```

Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with `Owner` role on a cloud project.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MonitoringNotificationChannels

```
public RepeatedField<string> MonitoringNotificationChannels { get; }
```

Optional. Email targets to send notifications to when a threshold is exceeded. This is in addition to the `DefaultIamRecipients` who receive alert emails based on their billing account IAM role. The value is the full REST resource name of a Cloud Monitoring email notification channel with the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 email notifications are allowed.

To customize budget alert email recipients with monitoring notification channels, you _must create the monitoring notification channels before you link them to a budget_. For guidance on setting up notification channels to use with budgets, see [Customize budget alert email recipients](https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients).

For Cloud Billing budget alerts, you _must use email notification channels_. The other types of notification channels are _not_ supported, such as Slack, SMS, or PagerDuty. If you want to [send budget notifications to Slack](https://cloud.google.com/billing/docs/how-to/notify#send_notifications_to_slack), use a pubsubTopic and configure [programmatic notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications).

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PubsubTopic

```
public string PubsubTopic { get; set; }
```

Optional. The name of the Pub/Sub topic where budget-related messages are published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent to the topic at regular intervals; the timing of the updates is not dependent on the [threshold rules](#thresholdrule) you've set.

Note that if you want your [Pub/Sub JSON object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) to contain data for `alertThresholdExceeded`, you need at least one [alert threshold rule](#thresholdrule). When you set threshold rules, you must also enable at least one of the email notification options, either using the default IAM recipients or Cloud Monitoring email notification channels.

To use Pub/Sub topics with budgets, you must do the following:

1.  Create the Pub/Sub topic before connecting it to your budget. For guidance, see [Manage programmatic budget alert notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications).
    
2.  Grant the API caller the `pubsub.topics.setIamPolicy` permission on the Pub/Sub topic. If not set, the API call fails with PERMISSION\_DENIED. For additional details on Pub/Sub roles and permissions, see [Permissions required for this task](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task).
    

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### SchemaVersion

```
public string SchemaVersion { get; set; }
```

Optional. Required when \[NotificationsRule.pubsub\_topic\]\[google.cloud.billing.budgets.v1.NotificationsRule.pubsub\_topic\] is set. The schema version of the notification sent to \[NotificationsRule.pubsub\_topic\]\[google.cloud.billing.budgets.v1.NotificationsRule.pubsub\_topic\]. Only "1.0" is accepted. It represents the JSON schema as defined in [https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification\_format](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
