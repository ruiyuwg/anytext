-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateSecurityHealthAnalyticsCustomModuleRequestOrBuilder (0.55.0) Stay organized with collections Save and categorize content based on your preferences.

0.55.0 (latest) 0.53.0 0.51.0 0.50.0 0.48.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.36.0 0.35.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface UpdateSecurityHealthAnalyticsCustomModuleRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getSecurityHealthAnalyticsCustomModule()

```
public abstract SecurityHealthAnalyticsCustomModule getSecurityHealthAnalyticsCustomModule()
```

Required. The resource being updated.

`.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule security_health_analytics_custom_module = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/latest/com.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule)`

The securityHealthAnalyticsCustomModule.

### getSecurityHealthAnalyticsCustomModuleOrBuilder()

```
public abstract SecurityHealthAnalyticsCustomModuleOrBuilder getSecurityHealthAnalyticsCustomModuleOrBuilder()
```

Required. The resource being updated.

`.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule security_health_analytics_custom_module = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModuleOrBuilder](/java/docs/reference/google-cloud-securitycentermanagement/latest/com.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModuleOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Required. The fields to update. The following values are valid:

-   `custom_config`
-   `enablement_state`
    
    If you omit this field or set it to the wildcard value `*`, then all eligible fields are updated.
    

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Required. The fields to update. The following values are valid:

-   `custom_config`
-   `enablement_state`
    
    If you omit this field or set it to the wildcard value `*`, then all eligible fields are updated.
    

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### getValidateOnly()

```
public abstract boolean getValidateOnly()
```

Optional. When set to `true`, the request will be validated (including IAM checks), but no module will be updated. An `OK` response indicates that the request is valid, while an error response indicates that the request is invalid.

If the request is valid, a subsequent request to update the module could still fail for one of the following reasons:

-   The state of your cloud resources changed; for example, you lost a required IAM permission
-   An error occurred during creation of the module
    
    Defaults to `false`.
    

`bool validate_only = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The validateOnly.

### hasSecurityHealthAnalyticsCustomModule()

```
public abstract boolean hasSecurityHealthAnalyticsCustomModule()
```

Required. The resource being updated.

`.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule security_health_analytics_custom_module = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the securityHealthAnalyticsCustomModule field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Required. The fields to update. The following values are valid:

-   `custom_config`
-   `enablement_state`
    
    If you omit this field or set it to the wildcard value `*`, then all eligible fields are updated.
    

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
