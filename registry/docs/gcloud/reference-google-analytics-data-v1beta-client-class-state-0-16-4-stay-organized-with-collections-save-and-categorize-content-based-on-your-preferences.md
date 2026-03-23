-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Analytics Data V1beta Client - Class State (0.16.4) Stay organized with collections Save and categorize content based on your preferences.

0.23.3 (latest) 0.23.2 0.22.3 0.21.1 0.20.1 0.19.0 0.18.0 0.17.1 0.16.4 0.14.0 0.13.0 0.12.0 0.11.2 0.10.1 0.9.5

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Analytics Data V1beta Client class State.

The AudienceExport currently exists in this state.

Protobuf type `google.analytics.data.v1beta.AudienceExport.State`

## Namespace

Google \\ Analytics \\ Data \\ V1beta \\ AudienceExport

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

Unspecified state will never be used.

Generated from protobuf enum `STATE_UNSPECIFIED = 0;`

### CREATING

```
Value: 1
```

The AudienceExport is currently creating and will be available in the future. Creating occurs immediately after the CreateAudienceExport call.

Generated from protobuf enum `CREATING = 1;`

### ACTIVE

```
Value: 2
```

The AudienceExport is fully created and ready for querying. An AudienceExport is updated to active asynchronously from a request; this occurs some time (for example 15 minutes) after the initial create call.

Generated from protobuf enum `ACTIVE = 2;`

### FAILED

```
Value: 3
```

The AudienceExport failed to be created. It is possible that re-requesting this audience export will succeed.

Generated from protobuf enum `FAILED = 3;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
