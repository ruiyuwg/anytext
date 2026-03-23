When viewers seek to a specific position in an on-demand video or audio file after enabling video seeking, the client sends a URL request to the server. This topic describes how to enable video seeking in the CDN console.

**Note**

After video seeking is enabled, the time to first byte (TTFB) increases by about 30 ms, which may slightly affect user experience.

## **Introduction**

After video seeking is enabled, the client sends a URL request to the server whenever viewers adjust the playback position. CDN identifies the nearest preceding keyframe of the playback position to load the video clip that viewers want to play, providing a seamless playback experience.

## **Prerequisites**

-   The origin server supports HTTP Range requests.
    
-   The [Ignore parameters](/help/en/cdn/user-guide/ignore-parameters) feature is disabled.
    

## Supported file formats

For example: For an FLV file with the URL request `www.aliyun.com/test.flv?start=10`, the server responds with data from the keyframe preceding the 10th byte. The following table describes the supported file formats for video seeking and sample URLs.

**File format**

**Metadata**

**Start parameter**

**Example**

MP4

The metadata of a video file on the origin server must be included in the file header and not included in the file tail.

The start parameter specifies the time in seconds and the value can be rounded up to three decimal places. For example, `start=1.01` indicates that the video is played from the 1.01th second.

-   If the position specified by the start parameter is not a keyframe, CDN automatically locates the last keyframe before the specified position.
    
-   If the position specified by the start parameter is a keyframe, CDN automatically locates the current keyframe.
    

URL request `domain/video.mp4?start=10` indicates that the video is played from the 10th second.

FLV

Video files on the origin server must contain metadata.

The start parameter specifies the position in bytes. Decimals are not supported. Although the parameter can include decimals, the seeking module rounds down the value to the nearest positive integer. If you turn on **Time-based FLV Seeking**, the unit of the start and end parameters is second.

**Note**

Seeking by bytes is suitable for precise data processing or raw video data processing. Seeking by seconds provides a user-friendly experience by directly jumping to the exact second requested.

-   If the position specified by the start parameter is not a keyframe, CDN automatically locates the last keyframe before the specified position.
    
-   If the position specified by the start parameter is a keyframe, CDN automatically locates the current keyframe.
    

URL request `domain/video.flv?start=10` indicates that the video is played from the keyframe preceding the 10th byte.

## Procedure

1.  Log on to the [Alibaba Cloud CDN](https://cdn.console.alibabacloud.com) console.
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Manage** in the **Actions** column.
    
4.  In the left-side navigation tree of the domain name, click **Video**.
    
5.  In the **Video Seeking** section, turn on the **Video Seeking** switch.
    
6.  Optional. Turn on **Time-based FLV Seeking** and modify **Custom Parameters**.
    

## **Processing logics of video seeking parameters**

Seeking by time is used as an example. The default start and end parameters are used. The following tables describe the processing logics of parameter values in different scenarios:

### Requests for MP4 file

**start/end values**

**Example**

**Processing logic**

Invalid values of the `start` and `end` parameters

`start=foo&end=bar`

Ignores video seeking parameters and responds with the complete video.

Valid value of the `start` parameter and invalid value of the `end` parameter

`start=10`

Processes video seeking from `10` to the end of the file.

Invalid value of the `start` parameter and valid value of the `end` parameter

`end=10`

Processes video seeking from `0-10`.

Valid values of the `start` and `end` parameters

`start=0&end=10`

Processes video seeking from `0-10`.

Both the `start` and `end` parameters are set to `0`

`start=0&end=0`

Ignores video seeking parameters and responds with the complete video.

The value of the `start` parameter is greater than the value of the `end` parameter

`start=10&end=0`

Processes video seeking from `10` to the end of the file.

The value of the `start` parameter is equal to the value of the `end` parameter

`start=10&end=10`

Processes video seeking from `10` to the end of the file.

The value of the `start` parameter is greater than the video duration

The value of the `start` parameter is greater than the video duration

Returns response with a HTTP status code `400`.

### Requests for FLV file

**start/end values**

**Example**

**Processing logic**

Invalid values of the `start` and `end` parameters

`start=foo&end=bar`

Ignores video seeking parameters and responds with the complete video.

Valid value of the `start` parameter and invalid value of the `end` parameter

`start=10`

Processes video seeking from `10` to the end of the file.

Invalid value of the `start` parameter and valid value of the `end` parameter

`end=10`

Processes video seeking from `0-10`.

Valid values of the `start` and `end` parameters

`start=0&end=10`

Processes video seeking from `0-10`.

Both the `start` and `end` parameters are set to `0`

`start=0&end=0`

Ignores video seeking parameters and responds with the complete video.

The value of the `start` parameter is greater than the value of the `end` parameter

`start=10&end=0`

Processes video seeking from `10` to the end of the file.

The value of the `start` parameter is equal to the value of the `end` parameter

`start=10&end=10`

Processes video seeking from `10` to the end of the file.

The value of the `start` parameter is greater than the video duration

The value of the `start` parameter is greater than the video duration

Returns the complete video.

## References

You can call the [BatchSetCdnDomainConfig](/help/en/cdn/api-batchsetcdndomainconfig#doc-api-Cdn-BatchSetCdnDomainConfig) operation to configure video seeking. For more information, see [Feature settings for domain names](/help/en/cdn/developer-reference/parameters-for-configuring-features-for-domain-names).
