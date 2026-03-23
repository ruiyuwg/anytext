-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Vm Migration V1 Client - Class UtilizationReportView (0.4.2) Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.0 1.2.1 1.1.0 1.0.5 0.6.5 0.5.2 0.4.2 0.3.2 0.2.3

Reference documentation and code samples for the Google Cloud Vm Migration V1 Client class UtilizationReportView.

Controls the level of details of a Utilization Report.

Protobuf type `google.cloud.vmmigration.v1.UtilizationReportView`

## Namespace

Google \\ Cloud \\ VMMigration \\ V1

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

### UTILIZATION\_REPORT\_VIEW\_UNSPECIFIED

```
Value: 0
```

The default / unset value.

The API will default to FULL on single report request and BASIC for multiple reports request.

Generated from protobuf enum `UTILIZATION_REPORT_VIEW_UNSPECIFIED = 0;`

### BASIC

```
Value: 1
```

Get the report metadata, without the list of VMs and their utilization info.

Generated from protobuf enum `BASIC = 1;`

### FULL

```
Value: 2
```

Include everything.

Generated from protobuf enum `FULL = 2;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
