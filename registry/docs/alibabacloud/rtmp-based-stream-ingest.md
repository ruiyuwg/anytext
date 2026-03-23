Object Storage Service (OSS) lets you use the Real-Time Messaging Protocol (RTMP) to push H.264-encoded video streams and AAC-encoded audio streams to OSS. The ingested audio and video data can be used for video-on-demand (VOD) or live streaming. This topic describes how to push audio and video streams to OSS and how to play the ingested audio and video data.

## Limits

-   Only RTMP stream ingest is supported. Stream pulling is not supported.
    
-   The uploaded data must contain a video stream in H.264 format.
    
-   An audio stream is optional. If an audio stream is included, it must be in AAC format. Audio streams in other formats are discarded.
    
-   Only HTTP Live Streaming (HLS) is supported for dumping.
    
-   Only one client can ingest streams to a LiveChannel at a time.
    

## Push audio and video data to OSS

1.  Obtain an ingest URL.
    
    Use a software development kit (SDK) to call the PutLiveChannel operation to create a LiveChannel and obtain its ingest URL.
    
    -   If the access control list (ACL) of the bucket is public-read-write, you can directly use the obtained ingest URL for stream ingest.
        
    -   If the bucket ACL is public-read or private, you must sign the URL. For more information, see [Signature V1](/help/en/oss/developer-reference/ddd-signatures-to-urls#concept-xqh-2df-xdb).
        
    
    Only the Java SDK and Python SDK support obtaining ingest URLs.
    
    ### **Java**
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.model.*;
    import java.util.List;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.ClientBuilderConfiguration;
    import com.aliyun.oss.common.comm.SignVersion;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the LiveChannel name.
            String liveChannelName = "yourLiveChannelName";
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer used, call the shutdown method to release resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                CreateLiveChannelRequest request = new CreateLiveChannelRequest(bucketName,
                        liveChannelName, "desc", LiveChannelStatus.Enabled, new LiveChannelTarget());
                CreateLiveChannelResult result = ossClient.createLiveChannel(request);
    
                // Obtain the ingest URLs.
                List<String> publishUrls = result.getPublishUrls();
                for (String item : publishUrls) {
                    // Obtain the ingest URL that does not contain signature information.
                    System.out.println(item);
    
                    // Obtain the ingest URL that contains signature information.
                    LiveChannelInfo liveChannelInfo = ossClient.getLiveChannelInfo(bucketName, liveChannelName);
                    // The expiration time, specified as a UNIX timestamp. This example sets the expiration time to 1 hour.
                    long expires = System.currentTimeMillis() / 1000 + 3600;
                    // The specific name passed in the call to the createLiveChannel operation. If this parameter is not specified, the default value "playlist.m3u8" is used. You can also call the getLiveChannelInfo operation to obtain this name.
                    String signRtmpUrl = ossClient.generateRtmpUri(bucketName, liveChannelName, liveChannelInfo.getTarget().getPlaylistName(), expires);
                    System.out.println(signRtmpUrl);
                }
    
                // Obtain the playback URLs.
                List<String> playUrls = result.getPlayUrls();
                for (String item : playUrls) {
                    System.out.println(item);
                }
            } catch (OSSException oe) {
                oe.printStackTrace();
                System.out.println("Caught an OSSException, which means your request made it to OSS, "
                        + "but was rejected with an error response for some reason.");
                System.out.println("Error Message:" + oe.getErrorMessage());
                System.out.println("Error Code:" + oe.getErrorCode());
                System.out.println("Request ID:" + oe.getRequestId());
                System.out.println("Host ID:" + oe.getHostId());
            } catch (ClientException ce) {
                System.out.println("Caught an ClientException, which means the client encountered "
                        + "a serious internal problem while trying to communicate with OSS, "
                        + "such as not being able to access the network.");
                System.out.println("Error Message:" + ce.getMessage());
            } finally {
                if (ossClient != null) {
                    ossClient.shutdown();
                }
            }
        }
    }
    ```
    
    The following ingest URLs are returned:
    
    ```
    rtmp://examplebucket.oss-cn-hangzhou.aliyuncs.com/live/test-channel
    rtmp://examplebucket.oss-cn-hangzhou.aliyuncs.com/live/test-channel?Expires=1688542428&OSSAccessKeyId=LTAI********&Signature=VfUgZt5N%2B6Uk4C9QH%2BzrRBTO2I****&playlistName=playlist.m3u8
    http://examplebucket.oss-cn-hangzhou.aliyuncs.com/test-channel/playlist.m3u8
    ```
    
    ### **Python**
    
    ```
    # -*- coding: utf-8 -*-
    import oss2
    from oss2.credentials import EnvironmentVariableCredentialsProvider
    
    # Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
    auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
    # Specify the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
    # Specify the bucket name. Example: examplebucket.
    bucket = oss2.Bucket(auth, 'https://oss-cn-hangzhou.aliyuncs.com', 'examplebucket')
    # Specify the LiveChannel name. Example: test-channel.
    channel_name = "test-channel"
    channel_cfg = oss2.models.LiveChannelInfo(target = oss2.models.LiveChannelInfoTarget())
    channel = bucket.create_live_channel(channel_name, channel_cfg)
    publish_url = channel.publish_url
    # Generate a signed URL for RTMP ingest and set the time-to-live (TTL) to 3,600 seconds.
    signed_publish_url = bucket.sign_rtmp_url(channel_name, "playlist.m3u8", 3600)
    # Print the unsigned ingest URL.
    print('publish_url='+publish_url)
    # Print the signed ingest URL.
    print('signed_publish_url='+signed_publish_url)
    ```
    
    The following ingest URLs are returned:
    
    ```
    publish_url=rtmp://examplebucket.oss-cn-hangzhou.aliyuncs.com/live/test-channel
    signed_publish_url=rtmp://examplebucket.oss-cn-hangzhou.aliyuncs.com/live/test-channel?playlistName=playlist.m3u8&OSSAccessKeyId=LTAI********&Expires=1688543369&Signature=eqK8z0ZTSwznP7fkELy0ckt0Iv****
    ```
    
2.  Use the ingest URL to push audio and video data to OSS.
    
    The files generated by stream ingest follow the naming convention `<channel-name><timestamp>.ts`, where `<channel-name>` is the channel name and `<timestamp>` is the millisecond timestamp when the segment is generated.
    
    ### **Use FFmpeg for stream ingest**
    
    The following example shows how to use FFmpeg to push a local video file to OSS:
    
    ```
    ffmpeg -i 1.flv -c copy -f flv "rtmp://examplebucket.oss-cn-hangzhou.aliyuncs.com/live/test-channel?playlistName=playlist.m3u8&OSSAccessKeyId=LTAI********&Expires=1688543369&Signature=eqK8z0ZTSwznP7fkELy0ckt0Iv***"
    ```
    
    ### **Use OBS for stream ingest**
    
    1.  Install [OBS Studio](https://obsproject.com/).
        
    2.  In the top navigation bar, choose **File** > **Settings**.
        
    3.  In the navigation pane on the left, click **Stream**.
        
    4.  In the dialog box that appears, configure the parameters as described in the following table.
        
        **Parameter**
        
        **Description**
        
        Service
        
        From the drop-down list, select **Custom**.
        
        Server
        
        Enter the ingest URL obtained in [Step 1](#810400e11aav9) that does not contain signature information: `rtmp://examplebucket.oss-cn-hangzhou.aliyuncs.com/live`.
        
        Stream Key
        
        Enter the signature information for the ingest URL obtained in [Step 1](#810400e11aav9): `test-channel?playlistName=playlist.m3u8&OSSAccessKeyId=LTAI**************&Expires=1688543369&Signature=eqK8z0ZTSwznP7fkELy0ck********`.
        
    5.  Click **OK**.
        
    

## Play audio and video data pushed to OSS

### **Live streaming scenario**

During stream ingest, you can use the HLS protocol to play the content that is being ingested. Playback methods vary by platform:

-   On mobile platforms such as Android and iOS, you can enter the playback URL of the LiveChannel in a browser.
    
-   On macOS, you can use the Safari browser for playback.
    
-   On a PC, you can use VLC media player for playback. After you install the player, choose **Media** > **Open Network Stream...**. Then, enter the playback URL in the **Please enter a network URL** text box.
    

For smooth live streaming, set a short FragDuration, such as 2 s. We also recommend that you set the group of pictures (GOP) size to be the same as the FragDuration of the LiveChannel. The following figure shows how to set the GOP (or keyframe Interval) in OBS:

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9295688951/p1069.png)

### **VOD scenario**

During stream ingest, OSS pushes or updates the M3U8 file as a live stream. After the stream ingest is complete, you must call the [PostVodPlaylist](/help/en/oss/developer-reference/postvodplaylist) operation to generate an M3U8 file for VOD. You can then use the URL of this file for playback.

For VOD scenarios, you can set a larger GOP to reduce the number of .ts files and thereby lower the bitrate.

## **References**

-   [LiveChannel operations in Java](/help/en/oss/developer-reference/common-operations-of-oss-sdk-for-java-on-livechannels)
    
-   [LiveChannel operations in Python](/help/en/oss/developer-reference/common-operations-of-oss-sdk-for-python-on-livechannels)
    
-   [LiveChannel operations in Go](/help/en/oss/developer-reference/common-operations-on-livechannels-1)
    
-   [LiveChannel operations in Node.js](/help/en/oss/developer-reference/common-operations-on-livechannels)
