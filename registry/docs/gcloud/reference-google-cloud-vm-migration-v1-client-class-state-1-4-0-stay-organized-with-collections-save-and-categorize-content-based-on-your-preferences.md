-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Vm Migration V1 Client - Class State (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.0 1.2.1 1.1.0 1.0.5 0.6.5 0.5.2 0.4.2 0.3.2 0.2.3

Reference documentation and code samples for the Google Cloud Vm Migration V1 Client class State.

The possible values of the state.

Protobuf type `google.cloud.vmmigration.v1.DatacenterConnector.State`

## Namespace

Google \\ Cloud \\ VMMigration \\ V1 \\ DatacenterConnector

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

The state is unknown. This is used for API compatibility only and is not used by the system.

Generated from protobuf enum `STATE_UNSPECIFIED = 0;`

### PENDING

```
Value: 1
```

The state was not sampled by the health checks yet.

Generated from protobuf enum `PENDING = 1;`

### OFFLINE

```
Value: 2
```

The source was sampled by health checks and is not available.

Generated from protobuf enum `OFFLINE = 2;`

### FAILED

```
Value: 3
```

The source is available but might not be usable yet due to unvalidated credentials or another reason. The credentials referred to are the ones to the Source. The error message will contain further details.

Generated from protobuf enum `FAILED = 3;`

### ACTIVE

```
Value: 4
```

The source exists and its credentials were verified.

Generated from protobuf enum `ACTIVE = 4;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
