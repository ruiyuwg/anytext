Parameter

Type

Description

Example

object

The data structure of the consumer group.

name

string

The name of the consumer group.

test-consumer-group

timeout

integer

The timeout period. If Simple Log Service does not receive heartbeats from a consumer within the timeout period, Simple Log Service deletes the consumer. Unit: seconds.

300

order

boolean

Specifies whether to consume data in sequence. Valid values:

-   true: If a shard is split, the data in the original shard is consumed first. Then, the data in the new shards is consumed at the same time. If shards are merged, the data in the original shards is consumed first. Then, the data in the new shard is consumed.
-   false: The data in all shards is consumed at the same time. If a new shard is generated after a shard is split or shards are merged, the data in the new shard is immediately consumed.

false
