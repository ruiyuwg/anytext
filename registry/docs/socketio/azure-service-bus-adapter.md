Version: 4.x

On this page

## How it works[​](#how-it-works "Direct link to How it works")

This adapter uses [Azure Service Bus service](https://learn.microsoft.com/en-us/azure/service-bus-messaging) to forward messages between the nodes of a Socket.IO cluster.

The source code of this adapter can be found [here](https://github.com/socketio/socket.io-azure-service-bus-adapter).

## Supported features[​](#supported-features "Direct link to Supported features")

Feature

`socket.io` version

Support

Socket management

`4.0.0`

✅ YES (since version `0.1.0`)

Inter-server communication

`4.1.0`

✅ YES (since version `0.1.0`)

Broadcast with acknowledgements

[`4.5.0`](/docs/v4/changelog/4.5.0)

✅ YES (since version `0.1.0`)

Connection state recovery

[`4.6.0`](/docs/v4/changelog/4.6.0)

❌ NO

## Installation[​](#installation "Direct link to Installation")

```
npm install @socket.io/azure-service-bus-adapter
```

## Usage[​](#usage "Direct link to Usage")

```
import { ServiceBusClient, ServiceBusAdministrationClient } from "@azure/service-bus";import { Server } from "socket.io";import { createAdapter } from "@socket.io/azure-service-bus-adapter";const connectionString = "Endpoint=...";const serviceBusClient = new ServiceBusClient(connectionString);const serviceBusAdminClient = new ServiceBusAdministrationClient(connectionString);const io = new Server({  adapter: createAdapter(serviceBusClient, serviceBusAdminClient)});// wait for the creation of the subscriptionawait io.of("/").adapter.init();io.listen(3000);
```

## Options[​](#options "Direct link to Options")

Name

Description

Default value

`topicName`

The name of the topic.

`socket.io`

`topicOptions`

The options used to create the topic.

`-`

`subscriptionPrefix`

The prefix of the subscription (one subscription will be created per Socket.IO server in the cluster).

`socket.io`

`receiverOptions`

The options used to create the subscription.

`-`

`topicOptions`

The options used to create the receiver.

`-`

`heartbeatInterval`

The number of ms between two heartbeats.

`5_000`

`heartbeatTimeout`

The number of ms without heartbeat before we consider a node down.

`10_000`

## Latest releases[​](#latest-releases "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`0.1.0`

March 2024

[link](https://github.com/socketio/socket.io-azure-service-bus-adapter/releases/tag/0.1.0)

`-`

[Complete changelog](https://github.com/socketio/socket.io-azure-service-bus-adapter/blob/main/CHANGELOG.md)

-   [How it works](#how-it-works)
-   [Supported features](#supported-features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Options](#options)
-   [Latest releases](#latest-releases)
