In on-demand audio and video streaming scenarios, the video processing feature of ESA identifies the nearest preceding keyframe of the playback position to load the video clip that the user wants to play, providing a seamless playback experience.

## **Before you begin**

-   Your origin server must support HTTP Range requests.
    
-   The [query string](/help/en/edge-security-acceleration/esa/user-guide/query-string) must be set to **Retain All**.
    

## **Add a video processing rule**

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the name of the website you want to manage.
    
2.  In the left-side navigation pane, choose **Rules** > **Content Optimization Rules**.
    
3.  Click the **Video Processing** tab. Click **Create Rule**, and fill in the **Rule Name**.
    
4.  In the **If Requests Match...** area, specify the conditions for matching incoming requests. For more information about how to configure a rule, see [Rules](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/).
    
5.  In the **Video Seeking** section, click **Configure**, turn on the **Status** switch, and configure the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6214766471/p939738.png)
    
    The following list describes the supported file formats for video seeking and sample URLs:
    
    **MP4 files**
    
    -   Metadata: The metadata of a video file on the origin server must be included in the file header instead of the file tail.
        
    -   Parameter: The start parameter specifies the time in seconds and the value can be rounded up to three decimal places. For example, `start=1.01` indicates that the video is played from the 1.01th second.
        
        -   If the position specified by the start parameter is not a keyframe, ESA automatically locates the last keyframe before the specified position.
            
        -   If the position specified by the start parameter is not a keyframe, ESA automatically locates the keyframe.
            
    -   Custom MP4 parameters:
        
        -   The default value of the start parameter is `start`, and the default value of the end parameter is `end`.
            
        -   Custom parameter values can contain only letters, digits, and underscores (`_`).
            
    -   Example:
        
        `domain/video.mp4?start=10`: indicates that the video is played from the 10th second.
        
    
    **FLV files**
    
    -   Metadata: Video files on the origin server must contain metadata.
        
    -   Parameter: The start parameter specifies the position. The start parameter supports only values in bytes. Decimals are not supported, and the value is rounded down to the nearest positive integer.
        
        -   **FLV Seeking**
            
            -   **Seek by Time**: The unit of the start and end parameters is second. This method navigates you to the video image at the specified point in time, providing a user-friendly experience.
                
            -   **Seek by Byte**: This method is suitable for precise data or raw video data processing.
                
                -   If the position specified by the start parameter is not a keyframe, ESA automatically locates the last keyframe before the specified position.
                    
                -   If the position specified by the start parameter is not a keyframe, ESA automatically locates the keyframe.
                    
    -   Custom video seeking parameters:
        
        -   The default value of the start parameter is `start`, and the default value of the end parameter is `end`.
            
        -   Custom parameter values can contain only letters, digits, and underscores (`_`).
            
    -   Example:
        
        `domain/video.flv?start=10`: indicates that the video is played from the 10th byte.
        

## **Processing logics of video seeking parameters**

Seeking by time is used as an example. The default start and end parameters are used. The following tables describe the processing logics of parameter values in different scenarios:

## Requests for MP4 file

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

## Requests for FLV file

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
