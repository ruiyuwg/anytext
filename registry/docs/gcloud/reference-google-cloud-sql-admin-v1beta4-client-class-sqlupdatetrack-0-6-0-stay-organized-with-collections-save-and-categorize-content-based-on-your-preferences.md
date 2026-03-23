-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1beta4 Client - Class SqlUpdateTrack (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Sql Admin V1beta4 Client class SqlUpdateTrack.

Protobuf type `google.cloud.sql.v1beta4.SqlUpdateTrack`

## Namespace

Google \\ Cloud \\ Sql \\ V1beta4

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

### SQL\_UPDATE\_TRACK\_UNSPECIFIED

```
Value: 0
```

This is an unknown maintenance timing preference.

Generated from protobuf enum `SQL_UPDATE_TRACK_UNSPECIFIED = 0;`

### canary

```
Value: 1
```

For instance update that requires a restart, this update track indicates your instance prefer to restart for new version early in maintenance window.

Generated from protobuf enum `canary = 1;`

### stable

```
Value: 2
```

For instance update that requires a restart, this update track indicates your instance prefer to let Cloud SQL choose the timing of restart (within its Maintenance window, if applicable).

Generated from protobuf enum `stable = 2;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
