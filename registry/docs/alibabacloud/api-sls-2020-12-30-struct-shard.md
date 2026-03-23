Parameter

Type

Description

Example

object

The data structure of the shard.

shardID

integer

shard id

0

status

string

The status of the shard. After you create a shard, the shard enters the readwrite state. If you split a shard or merge shards, the shard status changes to readonly. The newly generated shards are in the readwrite state. The status of a shard does not affect the performance of read operations that are performed on the shard. Data can be written to the shards that are in the readwrite state, but data cannot be written to the shards that are in the readonly state. Valid values:

-   readwrite
-   readonly

readwrite

inclusiveBeginKey

string

The start of the MD5 hash range. The value is included in the MD5 hash range of the shard.

00000000000000000000000000000000

exclusiveEndKey

string

The end of the MD5 hash range.

8000000000000000000000000000000

createTime

integer

The time at which the shard was created. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.

1524222931
