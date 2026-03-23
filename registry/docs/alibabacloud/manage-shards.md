## Shard operations

Shard operations include two modes: horizontal scaling and split/merge. Each mode is suited for different scenarios:

1.  Horizontal scaling does not support merging shards. To merge shards, you must use the split/merge mode.
    
2.  To consume a topic using Kafka, you must enable horizontal shard scaling.
    
3.  When horizontal shard scaling is enabled, the key range is unavailable because all shards have the same BeginHashKey and EndHashKey. This prevents you from writing data using HashKey and PartitionKey. You must implement a custom hash modulo operation at the application layer. Note that scaling out changes the target shard for writes.
    

## Horizontal shard scaling mode

DataHub supports **horizontal scaling** for topic shards. You can enable shard scaling mode when you create a topic.

**Step 1**

Enable the shard scaling mode.

**Step 2**

Click the icon shown in the following figure to change the number of shards.

**Step 3**

View the shards after horizontal scaling is complete.

## Shard split and merge

DataHub supports dynamic scale-out and scale-in for topics using the SplitShard and MergeShard operations.

**Scenarios**

DataHub provides elastic scaling, which lets you adjust the number of shards based on real-time traffic to handle sudden traffic bursts or save resources. For example, during major sales promotions, data traffic for many topics increases sharply. The existing number of shards might not be sufficient to handle this traffic growth. You can split shards to increase the total number, up to a maximum of 256 shards. This configuration supports traffic of up to 1280 MB/s based on the current throttle limits. After the promotion ends and traffic decreases, the extra shards consume unnecessary quota. You can then merge shards to reduce the count to a suitable number.

**Shard properties**

You can use the ListShard API to retrieve information about all shards. Each shard has the following properties:

```
{
    "ShardId": "string",
    "State": "string",
    "ClosedTime": uint64,
    "BeginHashKey": "string",
    "EndHashKey": "string",
    "ParentShardIds": [string,string,],
    "LeftShardId": "string",
    "RightShardId": "string"
}
```

**SplitShard**

To perform a split operation, specify a 128-bit HashKey and a ShardID. You can perform this operation using the software development kit (SDK) or the console. The SplitShard operation splits the specified shard into two child shards and returns the child shard IDs and their key information. The parent shard is then set to the \`CLOSED\` state. For example, assume that the following shard exists before the split:

```
ShardId:0 Status:ACTIVE BeginHashKey:00000000000000000000000000000000
    EndHashKey:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
```

You can perform a Split operation using the SDK:

```
String shardId = "0";
SplitShardRequest req = new SplitShardRequest(projectName, topicName, shardId, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
SplitShardResult resp = client.splitShard(req);
```

The result is the following three shards:

```
ShardId:0 Status:CLOSED BeginHashKey:00000000000000000000000000000000
                    EndHashKey:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
ShardId:1 Status:ACTIVE BeginHashKey:00000000000000000000000000000000
                    EndHashKey:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
ShardId:2 Status:ACTIVE BeginHashKey:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    EndHashKey:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
```

## MergeShard

To perform a merge operation, specify two contiguous ShardIDs. You can perform this operation using the SDK or the console. The MergeShard operation merges the two specified shards into a new shard and returns the new shard's ID and its key information. Both parent shards are then set to the \`CLOSED\` state. For example, assume that the following two shards exist before the merge:

```
ShardId:0 Status:ACTIVE BeginHashKey:00000000000000000000000000000000
                    EndHashKey:7FFFFFFFFFFFFFFF7FFFFFFFFFFFFFFF
ShardId:1 Status:ACTIVE BeginHashKey:7FFFFFFFFFFFFFFF7FFFFFFFFFFFFFFF
                    EndHashKey:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
```

You can perform a Merge operation using the SDK:

```
String shardId = "0";
String adjacentShardId = "1";
MergeShardRequest req = new MergeShardRequest(projectName, topicName, shardId, adjacentShardId);
MergeShardResult resp = client.mergeShard(req);
```

The result is the following three shards:

```
ShardId:0 Status:CLOSED BeginHashKey:00000000000000000000000000000000
                    EndHashKey:7FFFFFFFFFFFFFFF7FFFFFFFFFFFFFFF
ShardId:1 Status:CLOSED BeginHashKey:7FFFFFFFFFFFFFFF7FFFFFFFFFFFFFFF
                    EndHashKey:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
ShardId:2 Status:ACTIVE BeginHashKey:00000000000000000000000000000000
                    EndHashKey:FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
```

**Notes**

After a shard is merged or split, its state is set to \`CLOSED\`. You can continue to read data from a \`CLOSED\` shard, but you cannot write to it or perform another merge or split operation on it. The shard is reclaimed after the topic's lifecycle ends. If a connector is configured, the related task is automatically suspended after it finishes copying the data from the shard. The task is then automatically deleted after the shard is reclaimed. After a merge or split operation, the new shard must become \`ACTIVE\` before you can use it. This process usually takes less than 5 seconds.
