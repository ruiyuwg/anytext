This topic describes the technical principles of PolarTrans, the transaction system of PolarDB.

PolarDB for MySQL provides a new transaction system, PolarTrans, which uses Commit Timestamp Store (CTS) to improve the read and write performance of your databases in highly concurrent online transaction processing (OLTP) scenarios. PolarTrans uses existing network infrastructure and works together with the remote direct memory access (RDMA) technology to provide the global consistency (high-performance mode) feature. The global consistency (high-performance mode) feature ensures strict read-after-write consistency on the primary node and all read-only nodes in a cluster. By using read-only nodes to offload strictly consistent read query workloads, the global consistency (high-performance mode) feature reduces the load on the primary node. In OLTP scenarios, the global consistency (high-performance mode) feature helps significantly improve the throughput of clusters.

PolarTrans is built based on the following core technologies:

-   [CTS](/help/en/polardb/polardb-for-mysql/user-guide/cts#concept-2200030)
-   [Overview](/help/en/polardb/polardb-for-mysql/user-guide/scc#concept-2200031)
