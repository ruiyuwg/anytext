-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class State (1.30.0) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class State.

Possible states of a cluster.

Protobuf type `google.bigtable.admin.v2.Cluster.State`

## Namespace

Google \\ Cloud \\ Bigtable \\ Admin \\ V2 \\ Cluster

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

### STATE\_NOT\_KNOWN

```
Value: 0
```

The state of the cluster could not be determined.

Generated from protobuf enum `STATE_NOT_KNOWN = 0;`

### READY

```
Value: 1
```

The cluster has been successfully created and is ready to serve requests.

Generated from protobuf enum `READY = 1;`

### CREATING

```
Value: 2
```

The cluster is currently being created, and may be destroyed if the creation process encounters an error.

A cluster may not be able to serve requests while being created.

Generated from protobuf enum `CREATING = 2;`

### RESIZING

```
Value: 3
```

The cluster is currently being resized, and may revert to its previous node count if the process encounters an error.

A cluster is still capable of serving requests while being resized, but may exhibit performance as if its number of allocated nodes is between the starting and requested states.

Generated from protobuf enum `RESIZING = 3;`

### DISABLED

```
Value: 4
```

The cluster has no backing nodes. The data (tables) still exist, but no operations can be performed on the cluster.

Generated from protobuf enum `DISABLED = 4;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
