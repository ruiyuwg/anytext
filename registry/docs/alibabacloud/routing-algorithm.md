This topic describes the definition and scenarios of a routing algorithm.

## Definition

A routing algorithm is used to identify physical tables or table shards that are mapped to a logical table in a logical database based on routing fields. You can configure a routing algorithm for a logical database to precisely identify intended physical tables based on specified conditions. This reduces the overhead during routing and improves the efficiency of your data operations.

**Note** If no routing algorithm is configured, operations on the data of a logical table traverse all the physical tables that correspond to the logical table. This significantly prolongs the time required for data processing.

A routing algorithm consists of routing fields and an algorithm.

## Scenarios

-   Query the data of table shards.
-   Change the data of table shards.
-   Export the data of table shards.

## Configuration

You can find the desired logical table in the logical database, and modify its routing algorithm.
