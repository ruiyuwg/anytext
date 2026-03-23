Resource Access Management (RAM) provides system policies for common access control scenarios. When system policies lack the granularity you need, create custom policies to enforce least-privilege access to ApsaraMQ for RabbitMQ resources.

## Common permission profiles

Before writing a policy from scratch, identify which access pattern matches your use case.

**Access pattern**

**Scope**

**Policy example**

**Publish only**

Single vhost

[Example 2: Publish messages](#section-9240f878)

**Consume only**

Single vhost

[Example 3: Consume messages](#section-f0ff949a)

**Publish and consume**

Single vhost

[Example 4: Publish and consume messages](#section-b7c0c7fc)

**Full messaging**

Single vhost (including credential management)

[Example 1: Full messaging access to a vhost](#section-22fa3525)

**Credential management**

Single instance

[Example 5: Manage static account credentials](#section-5459248b)

**Instance creation**

Account-wide

[Example 6: Create instances](#section-9272dd1f)

**Restricted instance creation**

Account-wide, with conditions

[Example 7: Create Platinum Edition instances without internet access](#section-1267ce1c)

**Full instance administration**

Single instance

[Example 8: Full access to a single instance](#section-2f0210ca)

## Custom policy basics

Unlike system policies managed by Alibaba Cloud, custom policies are your responsibility to create and maintain.

-   **Attachment**: Attach a custom policy to a RAM user, user group, or RAM role for the permissions to take effect.
    
-   **Deletion**: Detach a policy from all principals before deleting it. Unattached policies can be deleted directly.
    
-   **Versioning**: RAM provides version control for custom policies. Manage policy versions through the RAM console or API.
    

### Related operations

-   [Create a custom policy](/help/en/ram/create-a-custom-policy)
    
-   [Modify the document and description of a custom policy](/help/en/ram/modify-the-document-and-description-of-a-custom-policy)
    
-   [Delete a custom policy](/help/en/ram/delete-a-custom-policy)
    
-   [Manage access policy authorizations](/help/en/ram/manage-policy-references)
    
-   [Manage custom policy versions](/help/en/ram/manage-custom-policy-versions)
    

## Resource ARN format

All ApsaraMQ for RabbitMQ resources use the following Alibaba Cloud Resource Name (ARN) format:

```
acs:amqp:$region:$accountid:/instances/$instanceId/...
```

**Variable**

**Description**

**Example**

`$region`

Region where the resource resides. Use `*` for all regions.

`cn-hangzhou`

`$accountid`

Alibaba Cloud account ID. Use `*` for any account.

`1234567890`

`$instanceId`

ApsaraMQ for RabbitMQ instance ID

`amqp-cn-xxxxx`

`$vhostName`

Vhost name

`my-vhost`

`$exchangeName`

Exchange name

`my-exchange`

`$queueName`

Queue name

`my-queue`

### Resource hierarchy

```
instances/
├── $instanceId/
│   ├── vhosts/
│   │   └── $vhostName/
│   │       ├── exchanges/
│   │       │   └── $exchangeName/
│   │       │       └── messages/*
│   │       └── queues/
│   │           └── $queueName/
│   │               └── messages/*
│   └── staticAccount/*
```

For supported regions, see [Endpoints](/help/en/apsaramq-for-rabbitmq/endpoints).

## Actions reference

ApsaraMQ for RabbitMQ actions fall into two categories: **client API actions** for AMQP protocol operations, and **console and OpenAPI actions** for management operations through the console and API.

### Client API actions

**Client API**

**Action**

**Resource**

**Description**

exchange.declare (passive=false)

`amqp:CreateExchange`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/*`

Declares an exchange. Creates the exchange if it does not exist. If the exchange exists, validates its properties and returns an error on mismatch.

exchange.declare (passive=true)

`amqp:GetExchange`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/$exchangeName`

Checks whether an exchange exists. Returns an error if the exchange does not exist.

exchange.bind

`amqp:GetExchange` (source)

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/$exchangeName` (source)

Binds a source exchange to a destination exchange.

`amqp:CreateExchange` (destination)

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/*` (destination)

exchange.unbind

`amqp:GetExchange` (source)

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/$exchangeName` (source)

Unbinds a source exchange from a destination exchange.

`amqp:CreateExchange` (destination)

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/*` (destination)

queue.declare (passive=false)

`amqp:CreateQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Declares a queue. Creates the queue if it does not exist. If the queue exists, validates its properties and returns an error on mismatch.

queue.declare (passive=true)

`amqp:GetQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName`

Checks whether a queue exists. Returns an error if the queue does not exist.

queue.declare (with dead-letter exchange)

`amqp:CreateQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Declares a queue bound to a dead-letter exchange.

`amqp:GetQueue`

`acs:amqp:$region:$accountid:/vhosts/$vhostName/queues/$queueName`

`amqp:CreateExchange` (dead-letter)

`acs:amqp:$region:$accountid:/instances/$instanceName/vhosts/$vhostName/exchanges/$exchangeName` (dead-letter)

queue.bind

`amqp:CreateQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Binds a queue to an exchange.

`amqp:GetExchange`

`acs:amqp:$region:$accountid:/instances/$instanceName/vhosts/$vhostName/exchanges/$exchangeName`

queue.unbind

`amqp:CreateQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Unbinds a queue from an exchange.

`amqp:GetExchange`

`acs:amqp:$region:$accountid:/instances/$instanceName/vhosts/$vhostName/exchanges/$exchangeName`

BasicRecover

`amqp:BasicRecover`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Redelivers unacknowledged messages to a consumer.

BasicCancel

`amqp:BasicCancel`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Cancels a consumer subscription.

BasicPublish

`amqp:BasicPublish`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/$exchangeName/messages/*`

Publishes a message to an exchange.

BasicConsume

`amqp:BasicConsume`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Starts a consumer on a queue.

BasicAck

`amqp:BasicAck`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Acknowledges one or more messages.

BasicNack

`amqp:BasicNack`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Rejects one or more messages.

BasicReject

`amqp:BasicReject`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Rejects a single message.

BasicGet

`amqp:BasicGet`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Directly accesses messages in a queue.

### Console and OpenAPI actions

**API operation**

**Action**

**Resource**

**Description**

ListInstances

`amqp:ListInstance`

`acs:amqp:$region:$accountid:/instances/*`

Queries the list of instances.

CreateInstance

`amqp:CreateInstance`

`acs:amqp:$region:$accountid:/instances/*`

Creates an instance. Supports [condition keys](#section-138fb703).

DeleteInstance

`amqp:DeleteInstance`

`acs:amqp:$region:$accountid:/instances/$instanceId`

Deletes an instance.

GetInstance

`amqp:GetInstance`

`acs:amqp:$region:$accountid:/instances/$instanceId`

Views an instance.

ListVhost

`amqp:ListVhost`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/*`

Queries the list of vhosts.

CreateVhost

`amqp:CreateVhost`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/*`

Creates a vhost.

DeleteVhost

`amqp:DeleteVhost`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName`

Deletes a vhost. Also requires `amqp:GetInstance` on the instance.

ListExchange

`amqp:ListExchange`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/*`

Queries the list of exchanges. Also requires `amqp:GetInstance` on the instance.

CreateExchange

`amqp:CreateExchange`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/*`

Creates an exchange.

DeleteExchange

`amqp:DeleteExchange`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/exchanges/$exchangeName`

Deletes an exchange.

ListQueue

`amqp:ListQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Queries the list of queues. Also requires `amqp:GetInstance` on the instance.

CreateQueue

`amqp:CreateQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/*`

Creates a queue.

DeleteQueue

`amqp:DeleteQueue`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName`

Deletes a queue.

QueuePurge

`amqp:QueuePurge`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Purges a queue.

ListStaticAccounts

`amqp:ListStaticAccounts`

`acs:amqp:$region:$accountid:/instances/$instanceId/staticAccount/*`

Views the username and password. Also requires `amqp:GetInstance` on the instance.

FetchStaticAccount

`amqp:FetchStaticAccount`

`acs:amqp:$region:$accountid:/instances/$instanceId/staticAccount/*`

Creates a username and password. Also requires `amqp:GetInstance` on the instance.

DeleteStaticAccount

`amqp:DeleteStaticAccount`

`acs:amqp:$region:$accountid:/instances/$instanceId/staticAccount/*`

Deletes the username and password.

Query messages by queue

`amqp:BasicGet`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Accesses messages in a queue.

Query messages by message ID

`amqp:BasicGet`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Accesses messages in a queue.

Resend messages

`amqp:BasicGet`, `amqp:BasicPublish`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Resends messages.

Send messages

`amqp:BasicPublish`

`acs:amqp:$region:$accountid:/instances/$instanceId/vhosts/$vhostName/queues/$queueName/messages/*`

Sends messages.

### Condition keys for CreateInstance

The `CreateInstance` action supports the following condition keys to restrict instance creation. For more information, see [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms).

**Condition key**

**Type**

**Valid values**

**Description**

`amqp:InstanceType`

String

`enterprise` (Enterprise Edition), `vip` (Platinum Edition)

Restricts which instance editions a RAM identity can create.

`amqp:SupportEIP`

String

`true`, `false`

Restricts whether the instance supports internet access.

## Policy examples

**Important**

Replace the placeholder variables in the following examples with your actual values. For details about each variable, see [Resource ARN format](#section-fceecc79).

### Example 1: Full messaging access to a vhost

Grants permissions to publish, consume, and manage exchanges, queues, and static account credentials within a specific vhost.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "amqp:GetInstance",
                "amqp:ListVhost",
                "amqp:GetVhost"
            ],
            "Resource": [
                "acs:amqp:*:*:/instances/$instanceId",
                "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName",
                "acs:amqp:*:*:/instances/$instanceId/vhosts/*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "amqp:ListExchange",
                "amqp:CreateExchange",
                "amqp:DeleteExchange",
                "amqp:ListQueue",
                "amqp:DeleteQueue",
                "amqp:CreateQueue",
                "amqp:BasicRecover",
                "amqp:BasicCancel",
                "amqp:BasicPublish",
                "amqp:BasicConsume",
                "amqp:BasicAck",
                "amqp:BasicNack",
                "amqp:BasicReject",
                "amqp:QueuePurge",
                "amqp:BasicGet",
                "amqp:GetExchange",
                "amqp:GetQueue"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName/*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "amqp:ListStaticAccounts",
                "amqp:FetchStaticAccount",
                "amqp:DeleteStaticAccount"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/staticAccount/*",
            "Effect": "Allow"
        }
    ]
}
```

### Example 2: Publish messages

Grants the minimum permissions for a producer client to publish messages to exchanges within a specific vhost: declare exchanges and queues, publish messages, and acknowledge delivery.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "amqp:GetInstance"
            ],
            "Resource": [
                "acs:amqp:*:*:/instances/$instanceId",
                "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "amqp:CreateExchange",
                "amqp:CreateQueue",
                "amqp:BasicRecover",
                "amqp:BasicPublish",
                "amqp:BasicAck",
                "amqp:BasicNack",
                "amqp:GetExchange",
                "amqp:GetQueue"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName/*",
            "Effect": "Allow"
        }
    ]
}
```

### Example 3: Consume messages

Grants the minimum permissions for a consumer client to consume messages from queues within a specific vhost: declare exchanges and queues, consume messages, and manage acknowledgments.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "amqp:GetInstance",
                "amqp:GetVhost"
            ],
            "Resource": [
                "acs:amqp:*:*:/instances/$instanceId",
                "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "amqp:CreateExchange",
                "amqp:CreateQueue",
                "amqp:BasicRecover",
                "amqp:BasicCancel",
                "amqp:BasicConsume",
                "amqp:BasicAck",
                "amqp:BasicNack",
                "amqp:BasicReject",
                "amqp:QueuePurge",
                "amqp:BasicGet",
                "amqp:GetExchange",
                "amqp:GetQueue"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName/*",
            "Effect": "Allow"
        }
    ]
}
```

### Example 4: Publish and consume messages

Grants permissions to both publish and consume messages within a specific vhost. Combines the actions from [Example 2](#section-9240f878) and [Example 3](#section-f0ff949a).

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "amqp:GetInstance",
                "amqp:GetVhost"
            ],
            "Resource": [
                "acs:amqp:*:*:/instances/$instanceId",
                "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "amqp:ListExchange",
                "amqp:CreateExchange",
                "amqp:DeleteExchange",
                "amqp:ListQueue",
                "amqp:DeleteQueue",
                "amqp:CreateQueue",
                "amqp:BasicRecover",
                "amqp:BasicCancel",
                "amqp:BasicPublish",
                "amqp:BasicConsume",
                "amqp:BasicAck",
                "amqp:BasicNack",
                "amqp:BasicReject",
                "amqp:QueuePurge",
                "amqp:BasicGet",
                "amqp:GetExchange",
                "amqp:GetQueue"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/vhosts/$vhostName/*",
            "Effect": "Allow"
        }
    ]
}
```

### Example 5: Manage static account credentials

Grants permissions to list, create, and delete static account credentials (username and password pairs) for a specific instance.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "amqp:ListStaticAccounts",
                "amqp:FetchStaticAccount",
                "amqp:DeleteStaticAccount"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/staticAccount/*"
        },
        {
            "Effect": "Allow",
            "Action": "amqp:GetInstance",
            "Resource": "acs:amqp:*:*:/instances/$instanceId"
        }
    ]
}
```

### Example 6: Create instances

Grants permissions to create ApsaraMQ for RabbitMQ instances of any edition in any region.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "amqp:CreateInstance",
            "Resource": "acs:amqp:*:$accountid:/instances/*"
        }
    ]
}
```

### Example 7: Create Platinum Edition instances without internet access

Uses condition keys to restrict instance creation to Platinum Edition (`vip`) instances that do not support internet access (`SupportEIP: false`).

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "amqp:CreateInstance",
            "Resource": "acs:amqp:*:$accountid:/instances/*",
            "Condition": {
                "StringEquals": {
                    "amqp:InstanceType": [
                        "vip"
                    ],
                    "amqp:SupportEIP": [
                        "false"
                    ]
                }
            }
        }
    ]
}
```

### Example 8: Full access to a single instance

Grants all ApsaraMQ for RabbitMQ permissions on a single instance, including vhost management, messaging operations, and static account management. The `amqp:ListInstance` action is scoped to all instances so the target instance appears in the console instance list.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": "amqp:ListInstance",
            "Resource": "acs:amqp:*:*:/instances/*",
            "Effect": "Allow"
        },
        {
            "Action": "amqp:*",
            "Resource": [
                "acs:amqp:*:*:/instances/$instanceId",
                "acs:amqp:*:*:/instances/$instanceId/vhosts/*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "amqp:ListStaticAccounts",
                "amqp:FetchStaticAccount",
                "amqp:DeleteStaticAccount"
            ],
            "Resource": "acs:amqp:*:*:/instances/$instanceId/staticAccount/*",
            "Effect": "Allow"
        }
    ]
}
```

## References

-   [Endpoints](/help/en/apsaramq-for-rabbitmq/endpoints)
    
-   [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms)
