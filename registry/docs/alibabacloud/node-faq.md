This topic describes frequently asked questions about PolarDB-X nodes.

## What is the maximum storage capacity for PolarDB-X 2.0 Standard Edition?

The maximum storage capacity for a single instance is 3 TB.

## Is the node architecture in PolarDB-X 2.0 Standard Edition similar to the RDS primary/standby node architecture?

PolarDB-X 2.0 Standard Edition uses a three-node architecture that includes one primary, one standby, and one log node, ensuring a zero RPO. RDS uses a primary/standby node architecture.

## How do I balance the number of compute nodes and storage nodes?

PolarDB-X nodes have been unified to N nodes, which means it includes N compute nodes and N storage nodes. To ensure consistency across system nodes, configure the same number of compute nodes and storage nodes for a PolarDB-X cluster.

## Can I modify the `max_binlog_cache_size` parameter?

Yes. You can modify it on a PolarDB-X 2.0 instance using the following command:

```
-- <value> Replace <value> in the command with the actual value.
SET GLOBAL max_binlog_cache_size=<value>;
```
