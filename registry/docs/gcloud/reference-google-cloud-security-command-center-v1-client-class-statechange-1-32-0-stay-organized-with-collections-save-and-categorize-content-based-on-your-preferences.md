-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V1 Client - Class StateChange (1.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

Reference documentation and code samples for the Google Cloud Security Command Center V1 Client class StateChange.

The change in state of the finding.

When querying across two points in time this describes the change in the finding between the two points: CHANGED, UNCHANGED, ADDED, or REMOVED. Findings can not be deleted, so REMOVED implies that the finding at timestamp does not match the filter specified, but it did at timestamp - compare\_duration. If there was no compare\_duration supplied in the request the state change will be: UNUSED

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V1 \\ ListFindingsResponse \\ ListFindingsResult

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

### UNUSED

```
Value: 0
```

State change is unused, this is the canonical default for this enum.

Generated from protobuf enum `UNUSED = 0;`

### CHANGED

```
Value: 1
```

The finding has changed state in some way between the points in time and existed at both points.

Generated from protobuf enum `CHANGED = 1;`

### UNCHANGED

```
Value: 2
```

The finding has not changed state between the points in time and existed at both points.

Generated from protobuf enum `UNCHANGED = 2;`

### ADDED

```
Value: 3
```

The finding was created between the points in time.

Generated from protobuf enum `ADDED = 3;`

### REMOVED

```
Value: 4
```

The finding at timestamp does not match the filter specified, but it did at timestamp - compare\_duration.

Generated from protobuf enum `REMOVED = 4;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
