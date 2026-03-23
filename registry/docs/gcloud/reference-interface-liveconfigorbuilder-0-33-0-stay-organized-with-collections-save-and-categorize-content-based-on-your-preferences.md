-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LiveConfigOrBuilder (0.33.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.6 0.1.2

```
public interface LiveConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAdTagUri()

```
public abstract String getAdTagUri()
```

The default ad tag associated with this live stream config.

`string ad_tag_uri = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The adTagUri.

### getAdTagUriBytes()

```
public abstract ByteString getAdTagUriBytes()
```

The default ad tag associated with this live stream config.

`string ad_tag_uri = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for adTagUri.

### getAdTracking()

```
public abstract AdTracking getAdTracking()
```

Required. Determines how the ads are tracked. If gam\_live\_config is set, the value must be `CLIENT` because the IMA SDK handles ad tracking.

`.google.cloud.video.stitcher.v1.AdTracking ad_tracking = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AdTracking](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.AdTracking)`

The adTracking.

### getAdTrackingValue()

```
public abstract int getAdTrackingValue()
```

Required. Determines how the ads are tracked. If gam\_live\_config is set, the value must be `CLIENT` because the IMA SDK handles ad tracking.

`.google.cloud.video.stitcher.v1.AdTracking ad_tracking = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for adTracking.

### getDefaultSlate()

```
public abstract String getDefaultSlate()
```

This must refer to a slate in the same project. If Google Ad Manager (GAM) is used for ads, this string sets the value of `slateCreativeId` in [https://developers.google.com/ad-manager/api/reference/v202211/LiveStreamEventService.LiveStreamEvent#slateCreativeId](https://developers.google.com/ad-manager/api/reference/v202211/LiveStreamEventService.LiveStreamEvent#slateCreativeId)

`string default_slate = 7 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The defaultSlate.

### getDefaultSlateBytes()

```
public abstract ByteString getDefaultSlateBytes()
```

This must refer to a slate in the same project. If Google Ad Manager (GAM) is used for ads, this string sets the value of `slateCreativeId` in [https://developers.google.com/ad-manager/api/reference/v202211/LiveStreamEventService.LiveStreamEvent#slateCreativeId](https://developers.google.com/ad-manager/api/reference/v202211/LiveStreamEventService.LiveStreamEvent#slateCreativeId)

`string default_slate = 7 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for defaultSlate.

### getGamLiveConfig()

```
public abstract GamLiveConfig getGamLiveConfig()
```

Additional metadata used to register a live stream with Google Ad Manager (GAM)

`.google.cloud.video.stitcher.v1.GamLiveConfig gam_live_config = 4;`

**Returns**

**Type**

**Description**

`[GamLiveConfig](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.GamLiveConfig)`

The gamLiveConfig.

### getGamLiveConfigOrBuilder()

```
public abstract GamLiveConfigOrBuilder getGamLiveConfigOrBuilder()
```

Additional metadata used to register a live stream with Google Ad Manager (GAM)

`.google.cloud.video.stitcher.v1.GamLiveConfig gam_live_config = 4;`

**Returns**

**Type**

**Description**

`[GamLiveConfigOrBuilder](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.GamLiveConfigOrBuilder)`

### getName()

```
public abstract String getName()
```

Output only. The resource name of the live config, in the form of `projects/{project}/locations/{location}/liveConfigs/{id}`.

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

Output only. The resource name of the live config, in the form of `projects/{project}/locations/{location}/liveConfigs/{id}`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPrefetchConfig()

```
public abstract PrefetchConfig getPrefetchConfig()
```

The configuration for prefetching ads.

`.google.cloud.video.stitcher.v1.PrefetchConfig prefetch_config = 10;`

**Returns**

**Type**

**Description**

`[PrefetchConfig](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.PrefetchConfig)`

The prefetchConfig.

### getPrefetchConfigOrBuilder()

```
public abstract PrefetchConfigOrBuilder getPrefetchConfigOrBuilder()
```

The configuration for prefetching ads.

`.google.cloud.video.stitcher.v1.PrefetchConfig prefetch_config = 10;`

**Returns**

**Type**

**Description**

`[PrefetchConfigOrBuilder](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.PrefetchConfigOrBuilder)`

### getSourceUri()

```
public abstract String getSourceUri()
```

Required. Source URI for the live stream manifest.

`string source_uri = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceUri.

### getSourceUriBytes()

```
public abstract ByteString getSourceUriBytes()
```

Required. Source URI for the live stream manifest.

`string source_uri = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceUri.

### getState()

```
public abstract LiveConfig.State getState()
```

Output only. State of the live config.

`.google.cloud.video.stitcher.v1.LiveConfig.State state = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[LiveConfig.State](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.LiveConfig.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. State of the live config.

`.google.cloud.video.stitcher.v1.LiveConfig.State state = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getStitchingPolicy()

```
public abstract LiveConfig.StitchingPolicy getStitchingPolicy()
```

Defines the stitcher behavior in case an ad does not align exactly with the ad break boundaries. If not specified, the default is `CUT_CURRENT`.

`.google.cloud.video.stitcher.v1.LiveConfig.StitchingPolicy stitching_policy = 8;`

**Returns**

**Type**

**Description**

`[LiveConfig.StitchingPolicy](/java/docs/reference/google-cloud-video-stitcher/0.33.0/com.google.cloud.video.stitcher.v1.LiveConfig.StitchingPolicy)`

The stitchingPolicy.

### getStitchingPolicyValue()

```
public abstract int getStitchingPolicyValue()
```

Defines the stitcher behavior in case an ad does not align exactly with the ad break boundaries. If not specified, the default is `CUT_CURRENT`.

`.google.cloud.video.stitcher.v1.LiveConfig.StitchingPolicy stitching_policy = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for stitchingPolicy.

### hasGamLiveConfig()

```
public abstract boolean hasGamLiveConfig()
```

Additional metadata used to register a live stream with Google Ad Manager (GAM)

`.google.cloud.video.stitcher.v1.GamLiveConfig gam_live_config = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gamLiveConfig field is set.

### hasPrefetchConfig()

```
public abstract boolean hasPrefetchConfig()
```

The configuration for prefetching ads.

`.google.cloud.video.stitcher.v1.PrefetchConfig prefetch_config = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the prefetchConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
