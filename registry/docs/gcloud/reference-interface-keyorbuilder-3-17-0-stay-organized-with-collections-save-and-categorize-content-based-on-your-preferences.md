-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface KeyOrBuilder (3.17.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public interface KeyOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

See <a href="[https://cloud.google.com/recaptcha-enterprise/docs/labels">](https://cloud.google.com/recaptcha-enterprise/docs/labels"&gt); Creating and managing labels</a>.

`map<string, string> labels = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAndroidSettings()

```
public abstract AndroidKeySettings getAndroidSettings()
```

Settings for keys that can be used by Android apps.

`.google.cloud.recaptchaenterprise.v1.AndroidKeySettings android_settings = 4;`

**Returns**

**Type**

**Description**

`[AndroidKeySettings](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.AndroidKeySettings)`

The androidSettings.

### getAndroidSettingsOrBuilder()

```
public abstract AndroidKeySettingsOrBuilder getAndroidSettingsOrBuilder()
```

Settings for keys that can be used by Android apps.

`.google.cloud.recaptchaenterprise.v1.AndroidKeySettings android_settings = 4;`

**Returns**

**Type**

**Description**

`[AndroidKeySettingsOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.AndroidKeySettingsOrBuilder)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The timestamp corresponding to the creation of this Key.

`.google.protobuf.Timestamp create_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The timestamp corresponding to the creation of this Key.

`.google.protobuf.Timestamp create_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDisplayName()

```
public abstract String getDisplayName()
```

Human-readable display name of this key. Modifiable by user.

`string display_name = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Human-readable display name of this key. Modifiable by user.

`string display_name = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getIosSettings()

```
public abstract IOSKeySettings getIosSettings()
```

Settings for keys that can be used by iOS apps.

`.google.cloud.recaptchaenterprise.v1.IOSKeySettings ios_settings = 5;`

**Returns**

**Type**

**Description**

`[IOSKeySettings](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.IOSKeySettings)`

The iosSettings.

### getIosSettingsOrBuilder()

```
public abstract IOSKeySettingsOrBuilder getIosSettingsOrBuilder()
```

Settings for keys that can be used by iOS apps.

`.google.cloud.recaptchaenterprise.v1.IOSKeySettings ios_settings = 5;`

**Returns**

**Type**

**Description**

`[IOSKeySettingsOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.IOSKeySettingsOrBuilder)`

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.KeyOrBuilder#com_google_recaptchaenterprise_v1_KeyOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

See <a href="[https://cloud.google.com/recaptcha-enterprise/docs/labels">](https://cloud.google.com/recaptcha-enterprise/docs/labels"&gt); Creating and managing labels</a>.

`map<string, string> labels = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

See <a href="[https://cloud.google.com/recaptcha-enterprise/docs/labels">](https://cloud.google.com/recaptcha-enterprise/docs/labels"&gt); Creating and managing labels</a>.

`map<string, string> labels = 6;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

See <a href="[https://cloud.google.com/recaptcha-enterprise/docs/labels">](https://cloud.google.com/recaptcha-enterprise/docs/labels"&gt); Creating and managing labels</a>.

`map<string, string> labels = 6;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

See <a href="[https://cloud.google.com/recaptcha-enterprise/docs/labels">](https://cloud.google.com/recaptcha-enterprise/docs/labels"&gt); Creating and managing labels</a>.

`map<string, string> labels = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

The resource name for the Key in the format "projects/{project}/keys/{key}".

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

The resource name for the Key in the format "projects/{project}/keys/{key}".

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPlatformSettingsCase()

```
public abstract Key.PlatformSettingsCase getPlatformSettingsCase()
```

**Returns**

**Type**

**Description**

`[Key.PlatformSettingsCase](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.Key.PlatformSettingsCase)`

### getTestingOptions()

```
public abstract TestingOptions getTestingOptions()
```

Options for user acceptance testing.

`.google.cloud.recaptchaenterprise.v1.TestingOptions testing_options = 9;`

**Returns**

**Type**

**Description**

`[TestingOptions](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.TestingOptions)`

The testingOptions.

### getTestingOptionsOrBuilder()

```
public abstract TestingOptionsOrBuilder getTestingOptionsOrBuilder()
```

Options for user acceptance testing.

`.google.cloud.recaptchaenterprise.v1.TestingOptions testing_options = 9;`

**Returns**

**Type**

**Description**

`[TestingOptionsOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.TestingOptionsOrBuilder)`

### getWafSettings()

```
public abstract WafSettings getWafSettings()
```

Settings for WAF

`.google.cloud.recaptchaenterprise.v1.WafSettings waf_settings = 10;`

**Returns**

**Type**

**Description**

`[WafSettings](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.WafSettings)`

The wafSettings.

### getWafSettingsOrBuilder()

```
public abstract WafSettingsOrBuilder getWafSettingsOrBuilder()
```

Settings for WAF

`.google.cloud.recaptchaenterprise.v1.WafSettings waf_settings = 10;`

**Returns**

**Type**

**Description**

`[WafSettingsOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.WafSettingsOrBuilder)`

### getWebSettings()

```
public abstract WebKeySettings getWebSettings()
```

Settings for keys that can be used by websites.

`.google.cloud.recaptchaenterprise.v1.WebKeySettings web_settings = 3;`

**Returns**

**Type**

**Description**

`[WebKeySettings](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.WebKeySettings)`

The webSettings.

### getWebSettingsOrBuilder()

```
public abstract WebKeySettingsOrBuilder getWebSettingsOrBuilder()
```

Settings for keys that can be used by websites.

`.google.cloud.recaptchaenterprise.v1.WebKeySettings web_settings = 3;`

**Returns**

**Type**

**Description**

`[WebKeySettingsOrBuilder](/java/docs/reference/google-cloud-recaptchaenterprise/3.17.0/com.google.recaptchaenterprise.v1.WebKeySettingsOrBuilder)`

### hasAndroidSettings()

```
public abstract boolean hasAndroidSettings()
```

Settings for keys that can be used by Android apps.

`.google.cloud.recaptchaenterprise.v1.AndroidKeySettings android_settings = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the androidSettings field is set.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The timestamp corresponding to the creation of this Key.

`.google.protobuf.Timestamp create_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasIosSettings()

```
public abstract boolean hasIosSettings()
```

Settings for keys that can be used by iOS apps.

`.google.cloud.recaptchaenterprise.v1.IOSKeySettings ios_settings = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the iosSettings field is set.

### hasTestingOptions()

```
public abstract boolean hasTestingOptions()
```

Options for user acceptance testing.

`.google.cloud.recaptchaenterprise.v1.TestingOptions testing_options = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the testingOptions field is set.

### hasWafSettings()

```
public abstract boolean hasWafSettings()
```

Settings for WAF

`.google.cloud.recaptchaenterprise.v1.WafSettings waf_settings = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the wafSettings field is set.

### hasWebSettings()

```
public abstract boolean hasWebSettings()
```

Settings for keys that can be used by websites.

`.google.cloud.recaptchaenterprise.v1.WebKeySettings web_settings = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the webSettings field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
