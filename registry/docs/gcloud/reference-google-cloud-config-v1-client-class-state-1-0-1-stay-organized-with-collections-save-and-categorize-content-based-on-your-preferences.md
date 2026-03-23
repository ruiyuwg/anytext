-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Config V1 Client - Class State (1.0.1) Stay organized with collections Save and categorize content based on your preferences.

1.7.2 (latest) 1.7.1 1.6.1 1.5.0 1.4.1 1.3.0 1.2.1 1.1.0 1.0.1 0.5.2 0.2.0 0.1.3

Reference documentation and code samples for the Google Cloud Config V1 Client class State.

Possible states of a preview.

Protobuf type `google.cloud.config.v1.Preview.State`

## Namespace

Google \\ Cloud \\ Config \\ V1 \\ Preview

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

The default value. This value is used if the state is unknown.

Generated from protobuf enum `STATE_UNSPECIFIED = 0;`

### CREATING

```
Value: 1
```

The preview is being created.

Generated from protobuf enum `CREATING = 1;`

### SUCCEEDED

```
Value: 2
```

The preview has succeeded.

Generated from protobuf enum `SUCCEEDED = 2;`

### APPLYING

```
Value: 3
```

The preview is being applied.

Generated from protobuf enum `APPLYING = 3;`

### STALE

```
Value: 4
```

The preview is stale. A preview can become stale if a revision has been applied after this preview was created.

Generated from protobuf enum `STALE = 4;`

### DELETING

```
Value: 5
```

The preview is being deleted.

Generated from protobuf enum `DELETING = 5;`

### FAILED

```
Value: 6
```

The preview has encountered an unexpected error.

Generated from protobuf enum `FAILED = 6;`

### DELETED

```
Value: 7
```

The preview has been deleted.

Generated from protobuf enum `DELETED = 7;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
