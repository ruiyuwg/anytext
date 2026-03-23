-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class UpdateUptimeCheckConfigRequest (1.9.0) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class UpdateUptimeCheckConfigRequest.

The protocol for the `UpdateUptimeCheckConfig` request.

Generated from protobuf message `google.monitoring.v3.UpdateUptimeCheckConfigRequest`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Optional. If present, only the listed fields in the current Uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.

`↳ uptime_check_config`

`[Google\Cloud\Monitoring\V3\UptimeCheckConfig](/php/docs/reference/cloud-monitoring/1.9.0/V3.UptimeCheckConfig)`  

Required. If an `updateMask` has been specified, this field gives the values for the set of fields mentioned in the `updateMask`. If an `updateMask` has not been given, this Uptime check configuration replaces the current configuration. If a field is mentioned in `updateMask` but the corresponding field is omitted in this partial Uptime check configuration, it has the effect of deleting/clearing the field from the configuration on the server. The following fields can be updated: `display_name`, `http_check`, `tcp_check`, `timeout`, `content_matchers`, and `selected_regions`.

### getUpdateMask

Optional. If present, only the listed fields in the current Uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Optional. If present, only the listed fields in the current Uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getUptimeCheckConfig

Required. If an `updateMask` has been specified, this field gives the values for the set of fields mentioned in the `updateMask`. If an `updateMask` has not been given, this Uptime check configuration replaces the current configuration. If a field is mentioned in `updateMask` but the corresponding field is omitted in this partial Uptime check configuration, it has the effect of deleting/clearing the field from the configuration on the server.

The following fields can be updated: `display_name`, `http_check`, `tcp_check`, `timeout`, `content_matchers`, and `selected_regions`.

**Returns**

**Type**

**Description**

`[Google\Cloud\Monitoring\V3\UptimeCheckConfig](/php/docs/reference/cloud-monitoring/1.9.0/V3.UptimeCheckConfig)|null`

### hasUptimeCheckConfig

### clearUptimeCheckConfig

### setUptimeCheckConfig

Required. If an `updateMask` has been specified, this field gives the values for the set of fields mentioned in the `updateMask`. If an `updateMask` has not been given, this Uptime check configuration replaces the current configuration. If a field is mentioned in `updateMask` but the corresponding field is omitted in this partial Uptime check configuration, it has the effect of deleting/clearing the field from the configuration on the server.

The following fields can be updated: `display_name`, `http_check`, `tcp_check`, `timeout`, `content_matchers`, and `selected_regions`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Monitoring\V3\UptimeCheckConfig](/php/docs/reference/cloud-monitoring/1.9.0/V3.UptimeCheckConfig)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`uptimeCheckConfig`

`[Google\Cloud\Monitoring\V3\UptimeCheckConfig](/php/docs/reference/cloud-monitoring/1.9.0/V3.UptimeCheckConfig)`  

Required. If an `updateMask` has been specified, this field gives the values for the set of fields mentioned in the `updateMask`. If an `updateMask` has not been given, this Uptime check configuration replaces the current configuration. If a field is mentioned in `updateMask` but the corresponding field is omitted in this partial Uptime check configuration, it has the effect of deleting/clearing the field from the configuration on the server.

The following fields can be updated: `display_name`, `http_check`, `tcp_check`, `timeout`, `content_matchers`, and `selected_regions`.

**Returns**

**Type**

**Description**

`[Google\Cloud\Monitoring\V3\UpdateUptimeCheckConfigRequest](/php/docs/reference/cloud-monitoring/1.9.0/V3.UpdateUptimeCheckConfigRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
