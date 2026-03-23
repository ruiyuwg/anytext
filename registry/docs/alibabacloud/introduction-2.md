Audio and video processing provided by Intelligent Media Management (IMM) allows you to process videos of multiple formats. You can upload and save original videos to Object Storage Service (OSS) and initiate video transcoding or other requests at any time, anywhere, and on any internet-connected device by calling the `x-oss-async-process` operation. You can also call `x-oss-process` to play the source video immediately after you upload the video.

## **Scenarios**

-   #### Adaption to different terminal devices and network environments
    
    You can convert the frame rate and bitrate to adapt to various devices and network conditions.
    
-   #### Efficient encoding for reduced costs
    
    Media processing uses efficient encoding algorithms to reduce the bitrate and stuttering in playback without compromising the video quality. This reduces storage and traffic costs.
    
-   #### Smart production technologies for video enhancement and reproduction
    
    You can transcode a poor-quality video to a version that has a higher definition, and generate new media files by taking snapshots or editing. These are implemented based on smart production technologies, such as video AI and super-resolution technology.
    
-   #### **Real-time transcoding and real-time playback**
    
    The live transcoding technology is used to achieve on-demand real-time transcoding and real-time playback, which reduces transcoding and storage costs and improves the playback experience.
    

## **How media processing works**

Offline transcoding: Upload a video to a bucket and create an audio and video transcoding task. After the task is executed, the transcoded video is stored in OSS.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6111445671/CAEQUBiBgIDfxKOx2BkiIDJlODRlYWRiNzYzMTQ3MDJiZmVjNGQ3ZGI1MDI0NTMw4129053_20231221161126.444.svg)

Live transcoding: Upload a video to a bucket and create a live transcoding playlist. In this case, the video is immediately played when you start to upload the video. The video is transcoded on demand in real time and the transcoded video is stored in OSS.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6111445671/CAEQUBiBgIDKz7qx2BkiIDYyODg5NzhhZDk4MzQ0MDI4MjE4MjdlNmVmODMxYjhh4129053_20231221161126.444.svg)

## **Processing parameters**

OSS allows you to use one or more parameters to process media files, such as videos. You can also specify multiple processing parameters in a style to process multiple media files at a time. For more information, see [Styles](/help/en/oss/user-guide/styles).

If you specify multiple parameters, OSS processes the media file based on the parameters in the order in which you specify the parameters. The following table describes the parameters.

**Operation**

**Parameter**

**Description**

[Video transcoding](/help/en/oss/user-guide/video-transcoding)

video/convert

Convert a video in OSS to the required format.

[Video-to-animated-image conversion](/help/en/oss/user-guide/convert-videos-to-animated-images)

video/animation

Convert a video in OSS to animated image formats, such as GIF and WebP.

[Sprite from a video](/help/en/oss/user-guide/video-cut-sprite)

video/sprite

Capture snapshots from a video in OSS and combine snapshots to obtain a sprite in a specific format.

[Frame capture](/help/en/oss/user-guide/video-frame-cutting)

video/snapshots

Capture frames from a video object in OSS and convert them to the specified format.

[Video merging](/help/en/oss/user-guide/video-stitching)

video/concat

Merge multiple video objects in OSS into a single video in a specific format.

[Video information extraction](/help/en/oss/user-guide/video-information-extraction)

video/info

Extract the format and stream information from a video file.

[Audio transcoding](/help/en/oss/user-guide/audio-transcoding)

audio/convert

Convert an audio object in OSS to the specified format.

[Audio merging](/help/en/oss/user-guide/audio-stitching)

audio/concat

Merge multiple audio objects in OSS into a single audio in the specified format.

[Audio information extraction](/help/en/oss/user-guide/audio-information-extraction)

audio/info

Extract the format and stream information from an audio file.

[Live transcoding playlist generation](/help/en/oss/user-guide/generate-video-playlist)

hls/m3u8

Generate a live transcoding playlist for a video in OSS.

## **Methods**

-   You can call the x-oss-async-process operation to process videos. For more information, see [Asynchronous processing](/help/en/oss/user-guide/asynchronous-processing).
    
-   You can call the x-oss-process operation to process videos. For more information, see [Synchronous processing](/help/en/oss/user-guide/synchronous-processing).
    
-   You can use batch processing to process existing videos. For more information, see [Batch processing](/help/en/oss/user-guide/batch-processing).
    
-   You can create a trigger to process incremental videos. For more information, see [Trigger](/help/en/oss/user-guide/triggers).
    

## **Limitations**

The following table describes the formats supported by audio and video processing.

**Item**

**Audio format**

**Video format**

Input file

All mainstream audio formats, such as wav, pcm, tta, flac, au, ape, mp3, wma, ogg, aac, ra, midi, mpc, mv, aif, aiff, m4a, mka, mp2, mpa, wv, ac3, dts, amr, and 3gpp.

All mainstream video formats, such as avi, mpeg, mpg, dat, divx, xvid, rm, rmvb, mov, qt, asf, wmv, vob, 3gp, mp4, flv, avs, mkv, ts, ogm, nsv, and swf.

Output file for offline transcoding

mp3, aac, flac, oga, ac3, and opus

mp4, mkv, mov, asf, avi, mxf, ts, and flv

Output file for live transcoding

ts

ts

For more information about the limits for parameters, see [CreateMediaConvertTask](/help/en/imm/developer-reference/api-imm-2020-09-30-createmediaconverttask) and [GenerateVideoPlaylist](/help/en/imm/developer-reference/api-imm-2020-09-30-generatevideoplaylist).

## **Billing rules**

You are charged for using audio and video processing by IMM. For more information about the fees, see [Billable items](/help/en/imm/product-overview/billable-items).
