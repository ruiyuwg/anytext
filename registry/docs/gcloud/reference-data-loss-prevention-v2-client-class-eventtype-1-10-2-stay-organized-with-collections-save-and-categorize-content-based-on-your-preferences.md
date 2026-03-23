-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Data Loss Prevention V2 Client - Class EventType (1.10.2) Stay organized with collections Save and categorize content based on your preferences.

2.9.2 (latest) 2.9.1 2.8.1 2.7.0 2.6.1 2.4.1 2.3.0 2.2.3 2.1.0 2.0.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.1 1.14.0 1.13.2 1.12.0 1.11.0 1.10.2 1.9.0 1.8.6

Reference documentation and code samples for the Data Loss Prevention V2 Client class EventType.

Types of event that can trigger an action.

Protobuf type `google.privacy.dlp.v2.DataProfileAction.EventType`

## Namespace

Google \\ Cloud \\ Dlp \\ V2 \\ DataProfileAction

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

### EVENT\_TYPE\_UNSPECIFIED

```
Value: 0
```

Unused.

Generated from protobuf enum `EVENT_TYPE_UNSPECIFIED = 0;`

### NEW\_PROFILE

```
Value: 1
```

New profile (not a re-profile).

Generated from protobuf enum `NEW_PROFILE = 1;`

### CHANGED\_PROFILE

```
Value: 2
```

Changed one of the following profile metrics:

-   Table data risk score
-   Table sensitivity score
-   Table resource visibility
-   Table encryption type
-   Table predicted infoTypes
-   Table other infoTypes

Generated from protobuf enum `CHANGED_PROFILE = 2;`

### SCORE\_INCREASED

```
Value: 3
```

Table data risk score or sensitivity score increased.

Generated from protobuf enum `SCORE_INCREASED = 3;`

### ERROR\_CHANGED

```
Value: 4
```

A user (non-internal) error occurred.

Generated from protobuf enum `ERROR_CHANGED = 4;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
