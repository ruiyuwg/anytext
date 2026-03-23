When you seek to a specific position in an on-demand video or audio file after you enable video seeking, your client sends a URL request to the server. This topic describes how to enable video seeking in the console.

## Supported file formats

The following list describes the supported file formats for video seeking and sample URLs:

**MP4**

-   Metadata: The metadata of a MP4 file on the origin server must be included in the file header instead of the file tail.
    
-   Start parameter: The start parameter specifies the time in seconds and the value can be rounded up to three decimal places. For example, `start=1.01` indicates that the video is played from the 1.01th second.
    
    -   If the position specified by the start parameter is not a keyframe, DCDN automatically locates the last keyframe before the specified position.
        
    -   If the position specified by the start parameter is not a keyframe, DCDN automatically locates the keyframe.
        
-   Example: `domain/video.mp4?start=10`, which indicates that the video is played from the 10th second.
    

**FLV**

-   Metadata: Video files on the origin server must contain metadata.
    
-   Start parameter: The start parameter specifies the position. The start parameter supports only values in bytes. Decimals are not supported, and the value is rounded down to the nearest positive integer. However, If you turn on **Time-based FLV Seeking**, the unit of the start and end parameters is second.
    
    **Note**
    
    Seeking by bytes is suitable for precise data or raw video data processing. Seeking by seconds navigates you to the video image at the specified point in time, providing a user-friendly experience.
    
    -   If the position specified by the start parameter is not a keyframe, DCDN automatically locates the last keyframe before the specified position.
        
    -   If the position specified by the start parameter is not a keyframe, DCDN automatically locates the keyframe.
        
-   Example: `domain/video.flv?start=10`, which indicates that the video is played from the 10th byte.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Optimization**.
    
5.  In the **Drag/Drop Playback** section, turn on **Drag/Drop Playback**.
    
    ![拖拽播放](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1752015061/p69841.png)
    

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
