This topic describes performance, capacity, and advanced features of CPFS for Lingjun.

## Performance

**Metric**

**CPFS for Lingjun 400 MB/s/TiB Baseline**

Read throughput

`min{400 × capacity (TiB), 400,000}` MB/s. Up to 2 TB/s via [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

Write throughput

`min{200 × capacity (TiB), 200,000}` MB/s

Max throughput per client

25 GB/s

Read IOPS

`min{6,800 × capacity (TiB), 6,800,000}`. Up to 30M via [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

Write IOPS

`min{2,300 × capacity (TiB), 2,300,000}`

4 KB read latency

0.25 ms

4 KB write latency

0.6 ms

## Capacity

**Item**

**Value**

Minimum

10 TiB

Step size

10 TiB

Maximum

1 PiB

Extended (via [ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1))

Up to 20 PiB, step 300 TiB

## Advanced features

**Feature**

**Link**

Dataflow

[CPFS for Lingjun DataFlow](/help/en/cpfs/bmcpfs/user-guide/cpfs-for-lingjun-data-flows/)

Log management

[Log Management](/help/en/cpfs/log-management)

Data monitoring

[Data Monitoring](/help/en/cpfs/data-monitoring-1)

## Next steps

-   [Limits](/help/en/cpfs/bmcpfs/product-overview/limit-bmcpfs)
    
-   [Create a file system](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system)
    
-   [Mount in PAI](https://www.alibabacloud.com/help/en/cpfs/bmcpfs/user-guide/pai-mount-cpfs-smart-computing-version-file-system) or [Mount in ACS](/help/en/cpfs/bmcpfs/user-guide/acs-mount-cpfs-smart-computing-version-file-system)
