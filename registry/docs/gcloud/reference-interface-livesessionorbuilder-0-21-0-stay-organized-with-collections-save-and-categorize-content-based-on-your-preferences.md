-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LiveSessionOrBuilder (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.6 0.1.2

```
public interface LiveSessionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsAdTagMacros(String key)

```
public abstract boolean containsAdTagMacros(String key)
```

Key value pairs for ad tag macro replacement. If the specified ad tag URI has macros, this field provides the mapping to the value that will replace the macro in the ad tag URI. Macros are designated by square brackets.

For example:

Ad tag URI: "https://doubleclick.google.com/ad/1?geo\_id=\[geoId\]"

Ad tag macros: `{"geoId": "123"}`

Fully qualified ad tag: `"[https://doubleclick.google.com/ad/1?geo_id=123](https://doubleclick.google.com/ad/1?geo_id=123)"`

`map<string, string> ad_tag_macros = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAdTagMacros()

```
public abstract Map<String,String> getAdTagMacros()
```

Use [#getAdTagMacrosMap()](/java/docs/reference/google-cloud-video-stitcher/0.21.0/com.google.cloud.video.stitcher.v1.LiveSessionOrBuilder#com_google_cloud_video_stitcher_v1_LiveSessionOrBuilder_getAdTagMacrosMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getAdTagMacrosCount()

```
public abstract int getAdTagMacrosCount()
```

Key value pairs for ad tag macro replacement. If the specified ad tag URI has macros, this field provides the mapping to the value that will replace the macro in the ad tag URI. Macros are designated by square brackets.

For example:

Ad tag URI: "https://doubleclick.google.com/ad/1?geo\_id=\[geoId\]"

Ad tag macros: `{"geoId": "123"}`

Fully qualified ad tag: `"[https://doubleclick.google.com/ad/1?geo_id=123](https://doubleclick.google.com/ad/1?geo_id=123)"`

`map<string, string> ad_tag_macros = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAdTagMacrosMap()

```
public abstract Map<String,String> getAdTagMacrosMap()
```

Key value pairs for ad tag macro replacement. If the specified ad tag URI has macros, this field provides the mapping to the value that will replace the macro in the ad tag URI. Macros are designated by square brackets.

For example:

Ad tag URI: "https://doubleclick.google.com/ad/1?geo\_id=\[geoId\]"

Ad tag macros: `{"geoId": "123"}`

Fully qualified ad tag: `"[https://doubleclick.google.com/ad/1?geo_id=123](https://doubleclick.google.com/ad/1?geo_id=123)"`

`map<string, string> ad_tag_macros = 6;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getAdTagMacrosOrDefault(String key, String defaultValue)

```
public abstract String getAdTagMacrosOrDefault(String key, String defaultValue)
```

Key value pairs for ad tag macro replacement. If the specified ad tag URI has macros, this field provides the mapping to the value that will replace the macro in the ad tag URI. Macros are designated by square brackets.

For example:

Ad tag URI: "https://doubleclick.google.com/ad/1?geo\_id=\[geoId\]"

Ad tag macros: `{"geoId": "123"}`

Fully qualified ad tag: `"[https://doubleclick.google.com/ad/1?geo_id=123](https://doubleclick.google.com/ad/1?geo_id=123)"`

`map<string, string> ad_tag_macros = 6;`

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

### getAdTagMacrosOrThrow(String key)

```
public abstract String getAdTagMacrosOrThrow(String key)
```

Key value pairs for ad tag macro replacement. If the specified ad tag URI has macros, this field provides the mapping to the value that will replace the macro in the ad tag URI. Macros are designated by square brackets.

For example:

Ad tag URI: "https://doubleclick.google.com/ad/1?geo\_id=\[geoId\]"

Ad tag macros: `{"geoId": "123"}`

Fully qualified ad tag: `"[https://doubleclick.google.com/ad/1?geo_id=123](https://doubleclick.google.com/ad/1?geo_id=123)"`

`map<string, string> ad_tag_macros = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getGamSettings()

```
public abstract LiveSession.GamSettings getGamSettings()
```

This field should be set with appropriate values if GAM is being used for ads.

`.google.cloud.video.stitcher.v1.LiveSession.GamSettings gam_settings = 15;`

**Returns**

**Type**

**Description**

`[LiveSession.GamSettings](/java/docs/reference/google-cloud-video-stitcher/0.21.0/com.google.cloud.video.stitcher.v1.LiveSession.GamSettings)`

The gamSettings.

### getGamSettingsOrBuilder()

```
public abstract LiveSession.GamSettingsOrBuilder getGamSettingsOrBuilder()
```

This field should be set with appropriate values if GAM is being used for ads.

`.google.cloud.video.stitcher.v1.LiveSession.GamSettings gam_settings = 15;`

**Returns**

**Type**

**Description**

`[LiveSession.GamSettingsOrBuilder](/java/docs/reference/google-cloud-video-stitcher/0.21.0/com.google.cloud.video.stitcher.v1.LiveSession.GamSettingsOrBuilder)`

### getLiveConfig()

```
public abstract String getLiveConfig()
```

Required. The resource name of the live config for this session, in the form of `projects/{project}/locations/{location}/liveConfigs/{id}`.

`string live_config = 16 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The liveConfig.

### getLiveConfigBytes()

```
public abstract ByteString getLiveConfigBytes()
```

Required. The resource name of the live config for this session, in the form of `projects/{project}/locations/{location}/liveConfigs/{id}`.

`string live_config = 16 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for liveConfig.

### getManifestOptions()

```
public abstract ManifestOptions getManifestOptions()
```

Additional options that affect the output of the manifest.

`.google.cloud.video.stitcher.v1.ManifestOptions manifest_options = 10;`

**Returns**

**Type**

**Description**

`[ManifestOptions](/java/docs/reference/google-cloud-video-stitcher/0.21.0/com.google.cloud.video.stitcher.v1.ManifestOptions)`

The manifestOptions.

### getManifestOptionsOrBuilder()

```
public abstract ManifestOptionsOrBuilder getManifestOptionsOrBuilder()
```

Additional options that affect the output of the manifest.

`.google.cloud.video.stitcher.v1.ManifestOptions manifest_options = 10;`

**Returns**

**Type**

**Description**

`[ManifestOptionsOrBuilder](/java/docs/reference/google-cloud-video-stitcher/0.21.0/com.google.cloud.video.stitcher.v1.ManifestOptionsOrBuilder)`

### getName()

```
public abstract String getName()
```

Output only. The name of the live session, in the form of `projects/{project}/locations/{location}/liveSessions/{id}`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The name of the live session, in the form of `projects/{project}/locations/{location}/liveSessions/{id}`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPlayUri()

```
public abstract String getPlayUri()
```

Output only. The URI to play the live session's ad-stitched stream.

`string play_uri = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The playUri.

### getPlayUriBytes()

```
public abstract ByteString getPlayUriBytes()
```

Output only. The URI to play the live session's ad-stitched stream.

`string play_uri = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for playUri.

### hasGamSettings()

```
public abstract boolean hasGamSettings()
```

This field should be set with appropriate values if GAM is being used for ads.

`.google.cloud.video.stitcher.v1.LiveSession.GamSettings gam_settings = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gamSettings field is set.

### hasManifestOptions()

```
public abstract boolean hasManifestOptions()
```

Additional options that affect the output of the manifest.

`.google.cloud.video.stitcher.v1.ManifestOptions manifest_options = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the manifestOptions field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
