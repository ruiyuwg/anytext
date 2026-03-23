Creates an asynchronous media transcoding task. This task processes audio and video files. It supports media transcoding, media concatenation, video snapshots, and converting videos into animated images.

## Operation description

-   **Before you call this operation, understand the billing methods and [pricing](/help/en/imm/product-overview/billing/) of Intelligent Media Management (IMM).**
    
-   Before you call this operation, ensure that an active project exists in the current region. For more information, see [Manage projects](/help/en/imm/developer-reference/api-imm-2020-09-30-dir-project-management/).
    
    **Important** The execution time of asynchronous tasks is not guaranteed.
    
-   When you use this operation for media transcoding, it processes only one video, audio, or caption stream by default. You can configure the number of video, audio, and caption streams to process.
    
-   When you use this operation for media concatenation, you can concatenate a maximum of 11 media files. The parameters that you configure for transcoding and snapshots apply to the concatenated media data.
    
-   This is an asynchronous operation. After a task starts, its information is saved for only 7 days. After 7 days, the information cannot be retrieved. Call the [GetTask](/help/en/imm/developer-reference/api-imm-2020-09-30-gettask) or [ListTasks](/help/en/imm/developer-reference/api-imm-2020-09-30-listtasks) operation with the returned `TaskId` to view the task information. You can also set the [Notification](/help/en/imm/developer-reference/asynchronous-notification-message-examples) parameter to receive task information through asynchronous notifications.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/imm/2020-09-30/CreateMediaConvertTask)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/imm/2020-09-30/CreateMediaConvertTask)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

imm:CreateMediaConvertTask

create

\*Project

`acs:imm:{#regionId}:{#accountId}:project/{#ProjectName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProjectName

string

Yes

The project name. For more information about how to obtain the project name, see [Create a project](/help/en/imm/developer-reference/api-imm-2020-09-30-createproject).

test-project

Sources

array<object>

Yes

A list of media files. If the list contains more than one element, the concatenation feature is enabled. The files are concatenated in the order of their URIs.

array<object>

No

The source media file.

URI

string

No

The Object Storage Service (OSS) URI of the file. The format is `oss://${Bucket}/${Object}`. `${Bucket}` is the name of the OSS bucket in the same region as the current project. `${Object}` is the full path of the file, including the file extension.

oss://test-bucket/test-object

StartTime

number

No

The transcoding start time, in seconds. Valid values:

-   0 (default): Transcoding starts from the beginning of the media file.
    
-   A number greater than 0: Transcoding starts from n seconds after the beginning of the media file.
    

0

Duration

number

No

The transcoding duration, in seconds. The default value is 0, which means the video is transcoded to the end.

0

Subtitles

array<object>

No

A list of captions to add. This is empty by default.

object

No

The caption information.

URI

string

No

The OSS URI of the file. The format is `oss://${Bucket}/${Object}`. `${Bucket}` is the name of the OSS bucket in the same region as the current project. `${Object}` is the full path of the file, including the file extension. Supported caption formats: srt, vtt, mov\_text, ass, dvd\_sub, and pgs.

oss://test-bucket/test-object

TimeOffset

number

No

The caption delay, in seconds. The default value is 0.

10.5

Language

string

No

The language of the captions. For more information, see ISO 639-2. This is empty by default.

eng

Attached

boolean

No

Specifies whether to add the current source media file to the output media file as an audio or video stream for synchronized playback. The default value is false.

**Note**

-   The \`Attached\` parameter cannot be \`true\` for the source file specified by the \`AlignmentIndex\` parameter.
    

false

AlignMode

string

No

The alignment policy for adding audio and video streams. Valid values:

-   false (default): No alignment.
    
-   loop: Loops the audio or video content to align it.
    
-   pad: Aligns the content by padding it with silent audio frames or black video frames.
    

**Note**

-   This parameter is valid only if the \`Attached\` parameter is set to \`true\`.
    

false

DisableVideo

boolean

No

Specifies whether to disable the video in the source media file. Valid values:

-   true: Disables the video.
    
-   false (default): Does not disable the video.
    

false

DisableAudio

boolean

No

Specifies whether to disable the audio in the source media file. Valid values:

-   true: Disables the audio.
    
-   false (default): Does not disable the audio.
    

false

Targets

array<object>

Yes

A list of media processing tasks. You can specify multiple tasks.

array<object>

No

The details of an element in the Targets array.

URI

string

No

The OSS URI of the transcoded output file.

The format is `oss://${Bucket}/${Object}`. `${Bucket}` is the name of the OSS bucket in the same region as the current project. `${Object}` is the full path of the file, including the file extension.

-   If **URI** includes a file extension, the OSS URI of the output media file is the value of **URI**. If multiple files are generated, they may be overwritten.
    
-   If **URI** does not include a file extension, the OSS URI of the output media file is determined by the **URI**, **Container**, and **Segment** parameters. For example, if **URI** is `oss://examplebucket/outputVideo`:
    -   If **Container** is `mp4` and **Segment** is empty, the OSS URI of the generated media file is `oss://examplebucket/outputVideo.mp4`.
        
    -   If **Container** is `ts` and **Format** in **Segment** is `hls`, an M3U8 file with the OSS URI `oss://examplebucket/outputVideo.m3u8` and multiple TS files with the prefix `oss://examplebucket/outputVideo` are generated.
        

oss://test-bucket/test-target-object.mp4

Container

string

No

The media container format. Valid container formats:

-   Audio and video containers: mp4, mkv, mov, asf, avi, mxf, ts, and flv
    
-   Audio containers: mp3, aac, flac, oga, ac3, and opus
    
    **Important** Set the \`Container\` and \`URI\` parameters at the same time. If you only perform caption extraction, video snapshot generation, sprite generation, or video-to-animated image conversion, leave both \`Container\` and \`URI\` empty. In this case, the \`Segment\`, \`Video\`, \`Audio\`, and \`Speed\` parameters are invalid.
    

mp4

Speed

number

No

The playback speed. The value must be from 0.5 to 1.0. The default value is 1.0.

**Note**

This parameter specifies the playback speed ratio of the transcoded file to the source file. It does not affect the transcoding speed.

1.0

Segment

object

No

The media segmentation settings. By default, media files are not segmented.

Format

string

No

The media segmentation method. Valid values:

-   hls
    
-   dash
    

hls

Duration

number

No

The segment length, in seconds.

30

StartNumber

integer

No

The starting ordinal number. This parameter is supported only for HLS. The default value is 0.

5

Video

[TargetVideo](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetvideo)

No

The video processing parameter settings.

**Important** If \`Video\` is empty, the first video stream, if any, is copied directly to the output file.

Audio

[TargetAudio](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetaudio)

No

The audio processing parameter settings.

**Important** If \`Audio\` is empty, the first audio stream, if any, is copied directly to the output file.

Subtitle

[TargetSubtitle](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetsubtitle)

No

The caption processing parameter settings.

**Important** If \`Subtitle\` is empty, the first caption stream, if any, is copied directly to the output file.

Image

[TargetImage](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetimage)

No

The parameter settings for video snapshots, sprites, and video-to-animated-image conversion.

StripMetadata

boolean

No

Specifies whether to remove the metadata of the media file, such as `title` and `album`. The default value is false.

UserData

string

No

Custom user data. This data is returned in the asynchronous notification to help you associate the notification with your internal systems. The maximum length is 2,048 bytes.

{"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}

Tags

object

No

Custom tags to search for and filter asynchronous tasks.

{"test":"val1"}

CredentialConfig

[CredentialConfig](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-credentialconfig)

No

**Leave this parameter empty if you do not have special requirements.**

The chained authorization configuration. For more information, see [Use chained authorization to access resources of other entities](/help/en/imm/user-guide/use-authorization-chains-to-access-resources-of-other-entities).

Notification

[Notification](/help/en/imm/developer-reference/api-imm-2020-09-30-notification)

No

The message notification settings. For more information about the format of asynchronous notifications, see [Asynchronous notification message format](/help/en/imm/developer-reference/asynchronous-notification-message-examples).

AlignmentIndex

integer

No

For media concatenation, this parameter specifies the index of the primary media file in the source list. The primary file provides the default transcoding parameters, such as resolution and frame rate, for `Video` and `Audio`. The default value is 0, which corresponds to the first media file in the list.

0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response struct.

RequestId

string

The request ID.

CA995EFD-083D-4F40-BE8A-BDF75FFFE0B6

EventId

string

The event ID.

0ED-1Bz8z71k5TtsUejT4UJ16Es\*\*\*\*

TaskId

string

The task ID.

MediaConvert-adb1ee28-c4c9-42a7-9f54-3b8eadcb\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CA995EFD-083D-4F40-BE8A-BDF75FFFE0B6",
  "EventId": "0ED-1Bz8z71k5TtsUejT4UJ16Es****",
  "TaskId": "MediaConvert-adb1ee28-c4c9-42a7-9f54-3b8eadcb****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/imm/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/imm/2020-09-30/CreateMediaConvertTask#workbench-doc-change-demo) for a complete list.
