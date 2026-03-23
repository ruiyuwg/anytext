-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud AlloyDB for PostgreSQL V1beta Client - Class State (0.7.1) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.3 1.5.0 1.4.1 1.3.0 1.2.0 1.1.3 1.0.0 0.10.3 0.9.0 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.1 0.1.3

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud AlloyDB for PostgreSQL V1beta Client class State.

Cluster State

Protobuf type `google.cloud.alloydb.v1beta.Cluster.State`

## Namespace

Google \\ Cloud \\ AlloyDb \\ V1beta \\ Cluster

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### STATE\_UNSPECIFIED

```
Value: 0
```

The state of the cluster is unknown.

Generated from protobuf enum `STATE_UNSPECIFIED = 0;`

### READY

```
Value: 1
```

The cluster is active and running.

Generated from protobuf enum `READY = 1;`

### STOPPED

```
Value: 2
```

The cluster is stopped. All instances in the cluster are stopped.

Customers can start a stopped cluster at any point and all their instances will come back to life with same names and IP resources. In this state, customer pays for storage. Associated backups could also be present in a stopped cluster.

Generated from protobuf enum `STOPPED = 2;`

### PBEMPTY

```
Value: 3
```

The cluster is empty and has no associated resources.

All instances, associated storage and backups have been deleted.

Generated from protobuf enum `EMPTY = 3;`

### CREATING

```
Value: 4
```

The cluster is being created.

Generated from protobuf enum `CREATING = 4;`

### DELETING

```
Value: 5
```

The cluster is being deleted.

Generated from protobuf enum `DELETING = 5;`

### FAILED

```
Value: 6
```

The creation of the cluster failed.

Generated from protobuf enum `FAILED = 6;`

### BOOTSTRAPPING

```
Value: 7
```

The cluster is bootstrapping with data from some other source.

Direct mutations to the cluster (e.g. adding read pool) are not allowed.

Generated from protobuf enum `BOOTSTRAPPING = 7;`

### MAINTENANCE

```
Value: 8
```

The cluster is under maintenance. AlloyDB regularly performs maintenance and upgrades on customer clusters. Updates on the cluster are not allowed while the cluster is in this state.

Generated from protobuf enum `MAINTENANCE = 8;`

### PROMOTING

```
Value: 9
```

The cluster is being promoted.

Generated from protobuf enum `PROMOTING = 9;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
