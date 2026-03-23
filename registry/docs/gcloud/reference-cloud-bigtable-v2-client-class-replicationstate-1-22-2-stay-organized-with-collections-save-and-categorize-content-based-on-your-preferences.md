-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class ReplicationState (1.22.2) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class ReplicationState.

Table replication states.

Protobuf type `google.bigtable.admin.v2.Table.ClusterState.ReplicationState`

## Methods

### name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### STATE\_NOT\_KNOWN

```
Value: 0
```

The replication state of the table is unknown in this cluster.

Generated from protobuf enum `STATE_NOT_KNOWN = 0;`

### INITIALIZING

```
Value: 1
```

The cluster was recently created, and the table must finish copying over pre-existing data from other clusters before it can begin receiving live replication updates and serving Data API requests.

Generated from protobuf enum `INITIALIZING = 1;`

### PLANNED\_MAINTENANCE

```
Value: 2
```

The table is temporarily unable to serve Data API requests from this cluster due to planned internal maintenance.

Generated from protobuf enum `PLANNED_MAINTENANCE = 2;`

### UNPLANNED\_MAINTENANCE

```
Value: 3
```

The table is temporarily unable to serve Data API requests from this cluster due to unplanned or emergency maintenance.

Generated from protobuf enum `UNPLANNED_MAINTENANCE = 3;`

### READY

```
Value: 4
```

The table can serve Data API requests from this cluster. Depending on replication delay, reads may not immediately reflect the state of the table in other clusters.

Generated from protobuf enum `READY = 4;`

### READY\_OPTIMIZING

```
Value: 5
```

The table is fully created and ready for use after a restore, and is being optimized for performance. When optimizations are complete, the table will transition to `READY` state.

Generated from protobuf enum `READY_OPTIMIZING = 5;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
