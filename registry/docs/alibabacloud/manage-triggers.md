DataWorks triggers start data pipelines automatically when external events occur, such as new files uploaded to Object Storage Service (OSS) or new messages arriving in a message queue. Instead of polling on a fixed schedule, triggers listen for events in real time through EventBridge and pass event data directly to the triggered workflow.

## How it works

A trigger monitors a specific event source, such as an OSS bucket or a Kafka topic. When a matching event occurs:

1.  The event source (OSS, Kafka, RocketMQ, or RabbitMQ) emits an event.
    
2.  EventBridge routes the event to the DataWorks trigger.
    
3.  The trigger starts the associated event-triggered workflow.
    
4.  Event data is passed to the workflow as parameters. Inner nodes access this data through `${workflow.triggerMessage}` for the full message body, or `${workflow.triggerMessage.xxx}` for a specific field.
    

## Supported event sources

**Event source**

**Event type code**

**Triggered by**

ApsaraMQ for Kafka

`alikafka:Topic:Message`

A message published to a monitored Kafka topic

ApsaraMQ for RocketMQ

`mq:Topic:SendMessage`

A message consumed from a monitored RocketMQ topic

ApsaraMQ for RabbitMQ

`amqp:Queue:SendMessage`

A message consumed from a monitored RabbitMQ queue

OSS

`oss:ObjectCreated:PutObject`, `oss:ObjectCreated:PostObject`, `oss:ObjectCreated:CompleteMultipartUpload`

A file uploaded to a monitored bucket through simple upload, form upload, or multipart upload

### Event data captured

**Event source**

**Captured data**

**Access method**

OSS

File details

`${workflow.triggerMessage.xxx}`

Message queues (Kafka, RocketMQ, RabbitMQ)

Full message content (key, value, headers)

`${workflow.triggerMessage}` for the full body, `${workflow.triggerMessage.xxx}` for a specific field

## Limitations

-   **Regions:** Available only in the China (Hangzhou), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Hong Kong), and Singapore regions.
    
-   **Editions:** Requires DataWorks Professional Edition or later. To upgrade, see [Differences among DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions#7571417d4e8ea).
    
-   **Environment:** Triggers run only in the production environment. In the development environment, enter trigger parameters manually.
    
-   **Workspace:** Only workspaces that support the new Data Studio are available.
    

## Billing

Triggers rely on EventBridge to route events. In addition to [DataWorks scheduled task run fees](/help/en/dataworks/charge-scenario-and-cost-description#4592ffabb4g0y), EventBridge charges based on the **number of events** processed. For details, see [Billing rules for event streams](/help/en/eventbridge/product-overview/billing-of-event-streams).

## Create a trigger

Before you begin, make sure that you have:

-   [EventBridge activated and permissions granted](/help/en/eventbridge/getting-started/activate-eventbridge-and-grant-permissions-to-a-ram-user)
    
-   [Simple Message Queue (formerly MNS) activated](/help/en/mns/product-overview/what-is-mns)
    
-   An event source ([OSS](/help/en/oss/user-guide/what-is-oss), [ApsaraMQ for Kafka](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/product-overview/what-is-apsaramq-for-kafka-1), [ApsaraMQ for RocketMQ](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/product-overview/rocketmq-5-x-serverless-instance-overview), or [ApsaraMQ for RabbitMQ](/help/en/apsaramq-for-rabbitmq/product-overview/what-is-apsaramq-for-rabbitmq)) in the **same region** as the DataWorks workspace, with access permissions configured
    
-   The **Developer**, **O&M**, or **Workspace Administrator** role assigned to your account in the workspace. For details, see [Add a workspace member and manage member role permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3)
    

### Step 1: Go to the trigger management page

1.  Log in to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the target region.
    
2.  In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. Select the target workspace from the drop-down list and click **Go to Operation Center**.
    
3.  In the left-side navigation pane of Operation Center, choose **Other** > **Tenant Schedule Setting**, and then click the **Trigger Management** tab.
    

### Step 2: Create the trigger

On the **Trigger Management** tab, click **Create Trigger**.

**Note**

DataWorks triggers rely on EventBridge. If this is your first time using triggers, or the [AliyunServiceRoleForDataWorksScheduler](/help/en/dataworks/user-guide/create-the-service-linked-role-aliyunservicerolefordataworksscheduler) service-linked role is missing, click **Add** to grant the required permissions. The required permission is `ram:CreateServiceLinkedRole`. For details, see [Minimum permissions required to create a service-linked role](/help/en/ram/grant-permissions-across-cloud-services#cb29e2c54flsq).

Configure trigger parameters based on the event source type.

#### ApsaraMQ for Kafka

**Parameter**

**Description**

**Workspace**

The workspace where this trigger is available. Only workspaces that support the new Data Studio are listed.

**Applicable Environment**

Production only. In the development environment, enter parameters manually.

**Owner**

The trigger owner. Select from the drop-down list.

**Trigger Type**

Select **ApsaraMQ for Kafka**.

**Trigger Event**

`alikafka:Topic:Message`. Triggered when a Kafka message is published. For details on sending messages, see [Send and receive Kafka messages](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-4-use-the-sdk-to-send-and-subscribe-to-messages/).

**Kafka Instance**

A Kafka instance in the same region as the workspace. If none are available, [purchase a Kafka instance](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-2-purchase-and-deploy-an-instance/).

**Topic**

The topic the trigger listens to. If none are available, [create a topic](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-3-create-resources#concept-99952-zh).

**Key**

(Optional) An exact-match filter on the message key. Leave blank to trigger on any message.

**ConsumerGroupId**

Select **Quick Create** to auto-generate a consumer group, or **Use Existing** to select one.

**Message Format Example**

A fixed example of a Kafka message. In the triggered workflow, use `${workflow.triggerMessage}` for the full message body, or `${workflow.triggerMessage.xxx}` for a specific field.

#### ApsaraMQ for RocketMQ

**Note**

Versions earlier than 5.x are not supported. Version 5.x is used by default.

**Parameter**

**Description**

**Workspace**

The workspace where this trigger is available. Only workspaces that support the new Data Studio are listed.

**Applicable Environment**

Production only. In the development environment, enter parameters manually.

**Owner**

The trigger owner. Select from the drop-down list.

**Trigger Type**

Select **Message Queue For Apache RocketMQ**.

**Trigger Event**

`mq:Topic:SendMessage`. Triggered when a RocketMQ message is consumed.

**ApsaraMQ for RocketMQ Instance**

A RocketMQ instance in the same region as the workspace. If none are available, [create a RocketMQ instance](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/user-guide/manage-instances).

**Topic**

The topic the trigger listens to. If none are available, [create a topic](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/user-guide/manage-topics).

**Tag**

(Optional) An exact-match filter on the message tag. Leave blank to trigger on any message.

**Security Group**

If the RocketMQ instance is a subscription instance, select a security group.

**Consumer Group**

Select **Quick Create** to auto-generate a consumer group, or **Use Existing** to select one.

**Message Format Example**

A fixed example of a RocketMQ message. In the triggered workflow, use `${workflow.triggerMessage}` for the full message body, or `${workflow.triggerMessage.xxx}` for a specific field.

#### ApsaraMQ for RabbitMQ

**Parameter**

**Description**

**Workspace**

The workspace where this trigger is available. Only workspaces that support the new Data Studio are listed.

**Applicable Environment**

Production only. In the development environment, enter parameters manually.

**Owner**

The trigger owner. Select from the drop-down list.

**Trigger Type**

Select **ApsaraMQ for RabbitMQ**.

**Trigger Event**

`amqp:Queue:SendMessage`. Triggered when a RabbitMQ message is consumed.

**ApsaraMQ for RabbitMQ Instance**

A RabbitMQ instance in the same region as the workspace. If none are available, [create a RabbitMQ instance](/help/en/apsaramq-for-rabbitmq/getting-started/create-resources).

**Vhost**

The RabbitMQ virtual host (vhost), used for logical isolation of queues. If none exist, see [Vhost management](/help/en/apsaramq-for-rabbitmq/user-guide/manage-vhosts).

**Queue**

The queue the trigger listens to. If none exist, see [Queue management](/help/en/apsaramq-for-rabbitmq/user-guide/manage-queues).

**Message Format Example**

An example of a RabbitMQ message body. In the triggered workflow, use `${workflow.triggerMessage}` for the full message body, or `${workflow.triggerMessage.xxx}` for a specific field.

#### OSS

**Parameter**

**Description**

**Workspace**

The workspace where this trigger is available. Only workspaces that support the new Data Studio are listed.

**Applicable Environment**

Production only. In the development environment, enter parameters manually.

**Owner**

The trigger owner. Select from the drop-down list.

**Trigger Type**

Select **Object Storage Service (OSS)**.

**Trigger Event**

Select one of the following event types: **oss:ObjectCreated:PutObject** ([simple upload](/help/en/oss/user-guide/simple-upload)), **oss:ObjectCreated:PostObject** ([form upload](/help/en/oss/user-guide/form-upload)), or **oss:ObjectCreated:CompleteMultipartUpload** ([multipart upload](/help/en/oss/user-guide/multipart-upload)).

**Bucket Name**

The OSS bucket to monitor. Select from the drop-down list. If no buckets exist, [create a bucket](/help/en/oss/user-guide/create-a-bucket-4).

**File Name**

The file name pattern that triggers the event. Wildcards are supported. See the table below.

**File name matching patterns**

**Pattern**

**Example**

**Matches**

Prefix match

`task*`

Files with the `task` prefix, such as `task10.txt`

Suffix match

`*task.txt`

Files ending with `task.txt`, such as `work_task.txt`

Contains match

`*task*`

Files containing `task` in the name, such as `work_task.txt`

### Step 3: Save the trigger

After configuring all parameters, click **OK** to create the trigger.

## Associate a trigger with a workflow

A trigger must be paired with an event-triggered workflow. Only workflows published to Operation Center can be triggered by events.

1.  [Create an event-triggered workflow](/help/en/dataworks/user-guide/trigger-based-workflow#c5c6f9352fngm).
    
2.  In the workflow's **Scheduling Policy** section, select the trigger [you created](/help/en/dataworks/user-guide/trigger-based-workflow#7bda8420fem0l).
    
3.  Configure the inner nodes of the workflow the same way as a standard workflow.
    

Unlike scheduled workflows that run on a fixed cron, event-triggered workflows only run when the associated trigger detects a matching event.

## View referenced tasks

On the **Trigger Management** tab, click **View Referenced Tasks** in the **Actions** column to see all event-triggered workflows that reference a trigger.

## Modify a trigger

On the **Trigger Management** tab, click **Modify** in the **Actions** column to edit the trigger configuration. After you save changes, a new version is created automatically.

## View versions and roll back

1.  On the **Trigger Management** tab, click **Versions** in the **Actions** column to view all historical versions of a trigger.
    
2.  Click **View** next to a version to see its details.
    
3.  To revert to a previous version, click **Roll Back** next to that version. Enter a comment in the **Remark** field and click **OK**.
    

**Note**

Rolling back creates a new version based on the selected historical version. The previous versions remain intact.

## Delete a trigger

Before deleting a trigger, unpublish and delete all tasks that reference it. On the **Trigger Management** tab, click **Delete** in the **Actions** column and confirm.

## Next steps

After creating a trigger, associate it with an event-triggered workflow to build an event-driven data pipeline. For details, see [Event-triggered workflows](/help/en/dataworks/user-guide/trigger-based-workflow).
