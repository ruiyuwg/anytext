-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SettingsOrBuilder (0.33.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.6 0.5.13

```
public interface SettingsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsComponentSettings(String key)

```
public abstract boolean containsComponentSettings(String key)
```

The settings for detectors and/or scanners.

`map<string, .google.cloud.securitycenter.settings.v1beta1.ComponentSettings> component_settings = 7;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsDetectorGroupSettings(String key)

```
public abstract boolean containsDetectorGroupSettings(String key)
```

Detector group settings for all Security Center components. The key is the name of the detector group and the value is the settings for that group.

`map<string, .google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings> detector_group_settings = 8;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBillingSettings()

```
public abstract BillingSettings getBillingSettings()
```

Billing settings

`.google.cloud.securitycenter.settings.v1beta1.BillingSettings billing_settings = 2;`

**Returns**

**Type**

**Description**

`[BillingSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.BillingSettings)`

The billingSettings.

### getBillingSettingsOrBuilder()

```
public abstract BillingSettingsOrBuilder getBillingSettingsOrBuilder()
```

Billing settings

`.google.cloud.securitycenter.settings.v1beta1.BillingSettings billing_settings = 2;`

**Returns**

**Type**

**Description**

`[BillingSettingsOrBuilder](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.BillingSettingsOrBuilder)`

### getComponentSettings()

```
public abstract Map<String,ComponentSettings> getComponentSettings()
```

Use [#getComponentSettingsMap()](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.SettingsOrBuilder#com_google_cloud_securitycenter_settings_v1beta1_SettingsOrBuilder_getComponentSettingsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### getComponentSettingsCount()

```
public abstract int getComponentSettingsCount()
```

The settings for detectors and/or scanners.

`map<string, .google.cloud.securitycenter.settings.v1beta1.ComponentSettings> component_settings = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getComponentSettingsMap()

```
public abstract Map<String,ComponentSettings> getComponentSettingsMap()
```

The settings for detectors and/or scanners.

`map<string, .google.cloud.securitycenter.settings.v1beta1.ComponentSettings> component_settings = 7;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)>`

### getComponentSettingsOrDefault(String key, ComponentSettings defaultValue)

```
public abstract ComponentSettings getComponentSettingsOrDefault(String key, ComponentSettings defaultValue)
```

The settings for detectors and/or scanners.

`map<string, .google.cloud.securitycenter.settings.v1beta1.ComponentSettings> component_settings = 7;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)`  

**Returns**

**Type**

**Description**

`[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)`

### getComponentSettingsOrThrow(String key)

```
public abstract ComponentSettings getComponentSettingsOrThrow(String key)
```

The settings for detectors and/or scanners.

`map<string, .google.cloud.securitycenter.settings.v1beta1.ComponentSettings> component_settings = 7;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ComponentSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)`

### getDetectorGroupSettings()

```
public abstract Map<String,Settings.DetectorGroupSettings> getDetectorGroupSettings()
```

Use [#getDetectorGroupSettingsMap()](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.SettingsOrBuilder#com_google_cloud_securitycenter_settings_v1beta1_SettingsOrBuilder_getDetectorGroupSettingsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[DetectorGroupSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings)>`

### getDetectorGroupSettingsCount()

```
public abstract int getDetectorGroupSettingsCount()
```

Detector group settings for all Security Center components. The key is the name of the detector group and the value is the settings for that group.

`map<string, .google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings> detector_group_settings = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDetectorGroupSettingsMap()

```
public abstract Map<String,Settings.DetectorGroupSettings> getDetectorGroupSettingsMap()
```

Detector group settings for all Security Center components. The key is the name of the detector group and the value is the settings for that group.

`map<string, .google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings> detector_group_settings = 8;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[DetectorGroupSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings)>`

### getDetectorGroupSettingsOrDefault(String key, Settings.DetectorGroupSettings defaultValue)

```
public abstract Settings.DetectorGroupSettings getDetectorGroupSettingsOrDefault(String key, Settings.DetectorGroupSettings defaultValue)
```

Detector group settings for all Security Center components. The key is the name of the detector group and the value is the settings for that group.

`map<string, .google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings> detector_group_settings = 8;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Settings.DetectorGroupSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings)`  

**Returns**

**Type**

**Description**

`[Settings.DetectorGroupSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings)`

### getDetectorGroupSettingsOrThrow(String key)

```
public abstract Settings.DetectorGroupSettings getDetectorGroupSettingsOrThrow(String key)
```

Detector group settings for all Security Center components. The key is the name of the detector group and the value is the settings for that group.

`map<string, .google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings> detector_group_settings = 8;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Settings.DetectorGroupSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings)`

### getEtag()

```
public abstract String getEtag()
```

A fingerprint used for optimistic concurrency. If none is provided on updates then the existing metadata will be blindly overwritten.

`string etag = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The etag.

### getEtagBytes()

```
public abstract ByteString getEtagBytes()
```

A fingerprint used for optimistic concurrency. If none is provided on updates then the existing metadata will be blindly overwritten.

`string etag = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for etag.

### getName()

```
public abstract String getName()
```

The relative resource name of the settings resource. Formats:

-   `organizations/{organization}/settings`
-   `folders/{folder}/settings`
-   `projects/{project}/settings`
-   `projects/{project}/locations/{location}/clusters/{cluster}/settings`
-   `projects/{project}/regions/{region}/clusters/{cluster}/settings`
-   `projects/{project}/zones/{zone}/clusters/{cluster}/settings`

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The relative resource name of the settings resource. Formats:

-   `organizations/{organization}/settings`
-   `folders/{folder}/settings`
-   `projects/{project}/settings`
-   `projects/{project}/locations/{location}/clusters/{cluster}/settings`
-   `projects/{project}/regions/{region}/clusters/{cluster}/settings`
-   `projects/{project}/zones/{zone}/clusters/{cluster}/settings`

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getOrgServiceAccount()

```
public abstract String getOrgServiceAccount()
```

Output only. The organization-level service account to be used for security center components. The component must have permission to "act as" the service account.

`string org_service_account = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The orgServiceAccount.

### getOrgServiceAccountBytes()

```
public abstract ByteString getOrgServiceAccountBytes()
```

Output only. The organization-level service account to be used for security center components. The component must have permission to "act as" the service account.

`string org_service_account = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for orgServiceAccount.

### getSinkSettings()

```
public abstract SinkSettings getSinkSettings()
```

Sink settings.

`.google.cloud.securitycenter.settings.v1beta1.SinkSettings sink_settings = 6;`

**Returns**

**Type**

**Description**

`[SinkSettings](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.SinkSettings)`

The sinkSettings.

### getSinkSettingsOrBuilder()

```
public abstract SinkSettingsOrBuilder getSinkSettingsOrBuilder()
```

Sink settings.

`.google.cloud.securitycenter.settings.v1beta1.SinkSettings sink_settings = 6;`

**Returns**

**Type**

**Description**

`[SinkSettingsOrBuilder](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.SinkSettingsOrBuilder)`

### getState()

```
public abstract Settings.OnboardingState getState()
```

An enum representing the current on boarding state of SCC.

`.google.cloud.securitycenter.settings.v1beta1.Settings.OnboardingState state = 3;`

**Returns**

**Type**

**Description**

`[Settings.OnboardingState](/java/docs/reference/google-cloud-securitycenter-settings/0.33.0/com.google.cloud.securitycenter.settings.v1beta1.Settings.OnboardingState)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

An enum representing the current on boarding state of SCC.

`.google.cloud.securitycenter.settings.v1beta1.Settings.OnboardingState state = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The time these settings were last updated.

`.google.protobuf.Timestamp update_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The time these settings were last updated.

`.google.protobuf.Timestamp update_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasBillingSettings()

```
public abstract boolean hasBillingSettings()
```

Billing settings

`.google.cloud.securitycenter.settings.v1beta1.BillingSettings billing_settings = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the billingSettings field is set.

### hasSinkSettings()

```
public abstract boolean hasSinkSettings()
```

Sink settings.

`.google.cloud.securitycenter.settings.v1beta1.SinkSettings sink_settings = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sinkSettings field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The time these settings were last updated.

`.google.protobuf.Timestamp update_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
