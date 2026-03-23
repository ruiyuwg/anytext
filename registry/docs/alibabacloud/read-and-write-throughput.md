Read and write throughput is a Tablestore attribute that is measured by read and write capacity units (CUs). A CU is a basic billable unit for data read and write operations. Read and write CUs are consumed when you call Tablestore operations to read and write data.

## Rules that are used to calculate CUs

-   When you read data that is 4 KB in size from a table, one read CU is consumed.
-   When you write data that is 4 KB in size to a table, one write CU is consumed.
-   If the size of the data that you read or write is not a multiple of 4 KB, the data size is rounded up to the nearest multiple of 4 KB for CU calculation. For example, 2 write CUs are consumed when you write 7.6 KB of data to a table and 1 read CU is consumed when you read 0.1 KB of data from a table.

## Metered read and write throughput

You are charged for metered read and write CUs when read and write CUs that are consumed per second exceed the reserved read and write CUs. Tablestore calculates metered read and write CUs at an interval of 1 second. Tablestore calculates the average reserved read and write CUs of an hour and adds up the metered read and write CUs per second of an hour as the total metered read and write CUs of the hour.

Tablestore cannot estimate computing resources that are reserved for metered read and write throughput and must provide sufficient computing resources to resolve traffic bursts. Therefore, the unit prices of metered read and write CUs are higher than the unit prices of reserved read and write CUs. We recommend that you specify reserved read and write throughput for data tables based on your business requirements to reduce costs.

**Important** Tablestore cannot estimate computing resources that are reserved for metered read and write throughput. In rare cases, if access to a single partition key per second consumes 10,000 CUs, Tablestore may return the OTSCapacityUnitExhausted error. If the preceding scenario occurs, you must use policies such as backoff retry to reduce the frequency at which the table is accessed.

## Reserved read and write throughput

**Note** When you use the search index feature, Tablestore automatically specifies the reserved read throughput based on the index data size. For more information, see [Billable items of search indexes](/help/en/tablestore/billable-items-of-search-indexes-1#concept-287174). You cannot change the reserved read throughput that is specified for a search index. If you want to reduce the value that is specified for the reserved read throughput, you can reduce the size of the index or reduce the number of rows in the index.

Reserved read and write throughput is an attribute of tables in high-performance instances. When you create a table, you can specify reserved read and write throughput for the table.

-   When the reserved read throughput or reserved write throughput that you specify is greater than 0, Tablestore reserves related resources for the table. If access to the table per second consumes only reserved read and write throughput, you are charged for reserved read and write throughput, but you are not charged for metered read and write throughput.
-   When the reserved read throughput or reserved write throughput that you specify is equal to 0, Tablestore does not reserve related resources for the table.
    
    **Note** The reserved read and write throughput for a table that does not exist is 0. When you access a table that does not exist, one metered read CU or one metered write CU is consumed based on the operation type.
    

The unit prices of reserved read and write throughput are lower than the unit prices of metered read and write throughput. We recommend that you specify reserved read and write throughput based on your business requirements to reduce costs. If you need to import large amounts of data after you create a table, specify a large value for reserved write throughput. This way, you can import data at low write costs. After the data is imported, specify a small value for reserved read and write throughput.

### Limits

-   You cannot specify reserved read and write throughput for tables in capacity instances.
-   When the reserved read or write throughput is greater than 0, you are charged even if no read and write operations are performed. You can specify up to 100,000 CUs for the reserved read or write throughput of a table. To increase the limit, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).

### Rules that are used to update reserved read and write throughput

You can call the UpdateTable operation to dynamically modify the reserved read and write throughput configurations. The following rules apply when you update the reserved read and write throughput of a table:

-   Tablestore does not impose limits on the number of changes that are made to the reserved read and write throughput configurations per day from 00:00:00 UTC to 00:00:00 UTC of the next day or from 08:00:00 UTC+8 to 08:00:00 UTC+8 of the next day. Take note that the interval between two consecutive updates for a table must be greater than 1 minute.
-   The read and write throughput configurations take effect within 1 minute after they are updated.

## Examples

The reserved read throughput is set to 100 CUs for a table. The following items describe the read CUs that are consumed within 3 seconds in a row:

-   T0: The read throughput that is consumed is 120 CUs. 100 reserved read CUs and 20 metered read CUs are consumed.
-   T1: The read throughput that is consumed is 95 CUs. 100 reserved read CUs and 0 metered read CUs are consumed.
-   T2: The read throughput that is consumed is 110 CUs. 100 reserved read CUs and 10 metered read CUs are consumed.

The total read throughput that is consumed from T0 to T2: 100 reserved read CUs and 30 metered read CUs.
