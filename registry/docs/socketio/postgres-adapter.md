Version: 4.x

On this page

## How it works[​](#how-it-works "Direct link to How it works")

The Postgres adapter relies on the [NOTIFY](https://www.postgresql.org/docs/current/sql-notify.html) and [LISTEN](https://www.postgresql.org/docs/current/sql-listen.html) commands.

Every packet that is sent to multiple clients (e.g. `io.to("room1").emit()` or `socket.broadcast.emit()`) is:

-   sent to all matching clients connected to the current server
-   if the packet contains binary data or is above the 8000 bytes limit, the packet is:
    -   encoded with [msgpack](https://msgpack.org/) and inserted in an auxiliary table
    -   the row ID is sent within a NOTIFY command
    -   this row ID is received by the other Socket.IO servers of the cluster, which query the table, decode the packet and then broadcast it to their own set of connected clients
-   else, the packet is simply sent within a NOTIFY command and received by the other Socket.IO servers of the cluster

![Diagram of how the Postgres adapter works](/images/postgres-adapter.png)![Diagram of how the Postgres adapter works](/images/postgres-adapter-dark.png)

The source code of this adapter can be found [here](https://github.com/socketio/socket.io-postgres-adapter).

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

✅ YES (since version `0.3.0`)

Connection state recovery

[`4.6.0`](/docs/v4/changelog/4.6.0)

❌ NO

## Installation[​](#installation "Direct link to Installation")

```
npm install @socket.io/postgres-adapter pg
```

For TypeScript users, you might also need `@types/pg`.

## Usage[​](#usage "Direct link to Usage")

### Standalone[​](#standalone "Direct link to Standalone")

```
import { Server } from "socket.io";import { createAdapter } from "@socket.io/postgres-adapter";import pg from "pg";const io = new Server();const pool = new pg.Pool({  user: "postgres",  host: "localhost",  database: "postgres",  password: "changeit",  port: 5432,});pool.query(`  CREATE TABLE IF NOT EXISTS socket_io_attachments (      id          bigserial UNIQUE,      created_at  timestamptz DEFAULT NOW(),      payload     bytea  );`);pool.on("error", (err) => {  console.error("Postgres error", err);});io.adapter(createAdapter(pool));io.listen(3000);
```

## Options[​](#options "Direct link to Options")

Name

Description

Default value

`channelPrefix`

the prefix of the notification channel

`socket.io`

`tableName`

the name of the table for payloads over the 8000 bytes limit or containing binary data

`socket_io_attachments`

`payloadThreshold`

the threshold for the payload size in bytes

`8_000`

`cleanupInterval`

the number of ms between two cleanup queries

`30_000`

`heartbeatInterval`

the number of ms between two heartbeats

`5_000`

`heartbeatTimeout`

the number of ms without heartbeat before we consider a node down

`10_000`

## Common questions[​](#common-questions "Direct link to Common questions")

### Do I still need to enable sticky sessions when using the Postgres adapter?[​](#do-i-still-need-to-enable-sticky-sessions-when-using-the-postgres-adapter "Direct link to Do I still need to enable sticky sessions when using the Postgres adapter?")

Yes. Failing to do so will result in HTTP 400 responses (you are reaching a server that is not aware of the Socket.IO session).

More information can be found [here](/docs/v4/using-multiple-nodes/#why-is-sticky-session-required).

### What happens when the Postgres server is down?[​](#what-happens-when-the-postgres-server-is-down "Direct link to What happens when the Postgres server is down?")

In case the connection to the Postgres server is severed, the packets will only be sent to the clients that are connected to the current server.

## Latest releases[​](#latest-releases "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`0.5.0`

November 2025

[link](https://github.com/socketio/socket.io-postgres-adapter/releases/tag/0.5.0)

[`0.4.0...0.5.0`](https://github.com/socketio/socket.io-postgres-adapter/compare/0.4.0...0.5.0)

`0.4.0`

July 2024

[link](https://github.com/socketio/socket.io-postgres-adapter/releases/tag/0.4.0)

[`0.3.1...0.4.0`](https://github.com/socketio/socket.io-postgres-adapter/compare/0.3.1...0.4.0)

`0.3.1`

February 2023

[link](https://github.com/socketio/socket.io-postgres-adapter/releases/tag/0.3.1)

[`0.3.0...0.3.1`](https://github.com/socketio/socket.io-postgres-adapter/compare/0.3.0...0.3.1)

`0.3.0`

April 2022

[link](https://github.com/socketio/socket.io-postgres-adapter/releases/tag/0.3.0)

[`0.2.0...0.3.0`](https://github.com/socketio/socket.io-postgres-adapter/compare/0.2.0...0.3.0)

`0.2.0`

December 2021

[link](https://github.com/socketio/socket.io-postgres-adapter/releases/tag/0.2.0)

[`0.1.1...0.2.0`](https://github.com/socketio/socket.io-postgres-adapter/compare/0.1.1...0.2.0)

[Complete changelog](https://github.com/socketio/socket.io-postgres-adapter/blob/main/CHANGELOG.md)

## Emitter[​](#emitter "Direct link to Emitter")

The Postgres emitter allows sending packets to the connected clients from another Node.js process:

![Diagram of how the Postgres emitter works](/images/postgres-emitter.png)![Diagram of how the Postgres emitter works](/images/postgres-emitter-dark.png)

### Installation[​](#installation-1 "Direct link to Installation")

```
npm install @socket.io/postgres-emitter pg
```

### Usage[​](#usage-1 "Direct link to Usage")

```
import { Emitter } from "@socket.io/postgres-emitter";import { Pool } from "pg";const pool = new Pool({  user: "postgres",  password: "changeit",});const emitter = new Emitter(pool);setInterval(() => {  emitter.emit("ping", new Date());}, 1000);
```

Please refer to the cheatsheet [here](/docs/v4/adapter/#emitter-cheatsheet).

### Latest releases[​](#latest-releases-1 "Direct link to Latest releases")

Version

Release date

Release notes

Diff

`0.1.0`

June 2021

[link](https://github.com/socketio/socket.io-postgres-emitter/releases/tag/0.1.0)

[Complete changelog](https://github.com/socketio/socket.io/blob/main/packages/socket.io-postgres-emitter/CHANGELOG.md)

-   [How it works](#how-it-works)
-   [Supported features](#supported-features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Standalone](#standalone)
-   [Options](#options)
-   [Common questions](#common-questions)
    -   [Do I still need to enable sticky sessions when using the Postgres adapter?](#do-i-still-need-to-enable-sticky-sessions-when-using-the-postgres-adapter)
    -   [What happens when the Postgres server is down?](#what-happens-when-the-postgres-server-is-down)
-   [Latest releases](#latest-releases)
-   [Emitter](#emitter)
    -   [Installation](#installation-1)
    -   [Usage](#usage-1)
    -   [Latest releases](#latest-releases-1)
