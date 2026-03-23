-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Artifact Registry V1 Client - Class RedirectionState (1.7.1) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.1 1.1.3 1.0.0 0.6.5 0.5.1 0.4.4 0.3.13

Reference documentation and code samples for the Google Cloud Artifact Registry V1 Client class RedirectionState.

The possible redirection states for legacy repositories.

Protobuf type `google.devtools.artifactregistry.v1.ProjectSettings.RedirectionState`

## Namespace

Google \\ Cloud \\ ArtifactRegistry \\ V1 \\ ProjectSettings

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

### REDIRECTION\_STATE\_UNSPECIFIED

```
Value: 0
```

No redirection status has been set.

Generated from protobuf enum `REDIRECTION_STATE_UNSPECIFIED = 0;`

### REDIRECTION\_FROM\_GCR\_IO\_DISABLED

```
Value: 1
```

Redirection is disabled.

Generated from protobuf enum `REDIRECTION_FROM_GCR_IO_DISABLED = 1;`

### REDIRECTION\_FROM\_GCR\_IO\_ENABLED

```
Value: 2
```

Redirection is enabled.

Generated from protobuf enum `REDIRECTION_FROM_GCR_IO_ENABLED = 2;`

### REDIRECTION\_FROM\_GCR\_IO\_FINALIZED

```
Value: 3
```

Redirection is enabled, and has been finalized so cannot be reverted.

Generated from protobuf enum `REDIRECTION_FROM_GCR_IO_FINALIZED = 3 [deprecated = true];`

### REDIRECTION\_FROM\_GCR\_IO\_ENABLED\_AND\_COPYING

```
Value: 5
```

Redirection is enabled and missing images are copied from GCR

Generated from protobuf enum `REDIRECTION_FROM_GCR_IO_ENABLED_AND_COPYING = 5;`

### REDIRECTION\_FROM\_GCR\_IO\_PARTIAL\_AND\_COPYING

```
Value: 6
```

Redirection is partially enabled and missing images are copied from GCR

Generated from protobuf enum `REDIRECTION_FROM_GCR_IO_PARTIAL_AND_COPYING = 6;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
