Generates a playlist from a video file for live transcoding. The output is an M3U8 file that enables immediate playback and on-demand transcoding based on playback progress. Compared with offline transcoding, this method significantly reduces transcoding wait times and lowers transcoding and storage overhead.

## Operation description

-   **Before you use this API, make sure that you understand the billing methods and [pricing](/help/en/imm/product-overview/billing/) of Intelligent Media Management.**
    
-   Before you call this API, ensure that an active project exists in the current region. For more information, see [Project management](/help/en/imm/developer-reference/api-imm-2020-09-30-dir-project-management/).
    
-   By default, this API processes only one video, audio, or subtitle stream. You can also configure the number of video, audio, and subtitle streams to process.
    
    **Important** The Video, Audio, and Subtitle parameters within Targets cannot all be empty. If a parameter is left empty, the corresponding processing is disabled. For example, if the Video parameter is empty, video processing is disabled, and the output TS file does not contain a video stream.
    
-   The source video must be at least 0.x seconds long. The minimum duration varies slightly based on the output frame rate.
    
-   This API supports generating both Media playlists and Master playlists. For more information, see the parameter descriptions in this document.
    
-   This is a synchronous API. Transcoding is triggered only during playback or pre-transcoding. You can set the [Notification](/help/en/imm/developer-reference/asynchronous-notification-message-examples) parameter to receive the transcoding task result through an asynchronous notification message.
    
-   For more information about the features of this API, see [Live transcoding](/help/en/imm/user-guide/live-transcoding).
    
-   The data processing feature of OSS can also be used to generate playlists. However, this feature generates only Media Playlists and uses simplified parameters. For more information, see the OSS data processing topic [Generate a playlist](/help/en/oss/user-guide/generate-video-playlist).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/imm/2020-09-30/GenerateVideoPlaylist)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/imm/2020-09-30/GenerateVideoPlaylist)

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

imm:GenerateVideoPlaylist

none

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

immtest

UserData

string

No

The custom information. This information is returned in the asynchronous notification message to help you associate the message with your services. The maximum length is 2,048 bytes.

{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}

SourceURI

string

Yes

The OSS URI of the video.

The OSS URI must be in the format of oss://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the full path of the file, including the file name extension.

**Note**

Only OSS Standard storage buckets are supported. Buckets with hotlink protection whitelists are not supported.

oss://test-bucket/test-source-object/video.mp4

SourceStartTime

number

No

The start time for generating the playlist. Unit: seconds (s). Valid values:

-   0 (default) or empty: starts from the beginning of the source video.
    
-   Greater than 0: starts from the specified time point in the source video.
    

**Note**

You can set this parameter together with the **SourceDuration** parameter to generate a playlist for a specific part of the source video.

0

SourceDuration

number

No

The duration for which the playlist is generated. Unit: seconds (s). Valid values:

-   0 (default) or empty: continues to the end of the source video.
    
-   Greater than 0: lasts for the specified duration from the start time.
    

**Note**

If the specified duration extends beyond the end of the source video, the default value is used.

0

SourceSubtitles

array<object>

No

The list of subtitles to add. The default value is empty. You can add up to two subtitles.

object

No

The subtitle information.

URI

string

Yes

The OSS URI of the subtitle file to embed.

The OSS URI must be in the format of oss://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the full path of the file.

**Note**

The **MasterURI** parameter must not be empty. The OSS URI of the subtitle file to embed, `oss://${Bucket}/${Object}`, must be in the same directory as or a subdirectory of the directory specified by **MasterURI**.

oss://test-bucket/test-object/subtitle/eng.vtt

Language

string

No

The language of the subtitle. The value must comply with the ISO 639-2 standard. The default value is empty.

eng

MasterURI

string

No

The OSS URI of the Master Playlist.

The OSS URI must be in the format of oss://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the full path of the file with the .m3u8 file name extension.

**Note**

If the playlist has subtitle inputs or multiple target outputs, MasterURI is required. The subtitle URI or target URI must be in the same directory as or a subdirectory of the directory specified by MasterURI.

oss://test-bucket/test-object/master.m3u8

Targets

array<object>

Yes

An array of live transcoding playlists. The maximum array length is 6. Each target corresponds to a maximum of one video Media Playlist and one or more subtitle Media Playlists.

**Note**

If you configure more than one target, the **MasterURI** parameter must not be empty.

array<object>

No

The details of the live transcoding task.

URI

string

No

The OSS URI prefix for the output files of live transcoding. The output files include M3U8 files and TS files.

The OSS URI must be in the format of oss://${Bucket}/${Object}. ${Bucket} is the name of the OSS bucket that is in the same region as the current project. ${Object} is the prefix of the full path of the file, without the file name extension.

-   Example: If URI is oss://test-bucket/test-object/output-video, one oss://test-bucket/test-object/output-video.m3u8 file and multiple oss://test-bucket/test-object/output-video-${token}-${index}.ts files are generated. ${token} is a unique string generated based on the transcoding parameters and is included in the API response. ${index} is the sequence number of the generated TS file, starting from 0.
    

**Note**

If the **MasterURI** parameter is not empty, the URI must be in the same directory as or a subdirectory of the directory specified by **MasterURI**.

oss://test-bucket/test-object/output-video

Video

[TargetVideo](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetvideo)

No

The parameter settings for video processing. An empty value (default) disables video processing. The output TS file will not contain a video stream.

**Note**

The Video and Subtitle fields within the same target are mutually exclusive. If the Video field is set, the Subtitle field is ignored.

Audio

[TargetAudio](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetaudio)

No

The parameter settings for audio processing. An empty value (default) disables audio processing. The output TS file will not contain an audio stream.

**Note**

The Audio and Subtitle fields within the same target are mutually exclusive. If the Audio field is set, the Subtitle field is ignored. You can set both Audio and Video. Audio specifies the audio information in the output video. You can also set only Audio to generate only audio information.

Subtitle

[TargetSubtitle](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-targetsubtitle)

No

The parameter settings for subtitle processing.

**Note**

The Subtitle field is mutually exclusive with the Video and Audio fields within the same target. Subtitles can be generated only when the Subtitle field is set independently.

TranscodeAhead

integer

No

The number of TS files to transcode ahead when live transcoding is triggered. By default, 2 minutes of video is transcoded ahead.

-   Example: If **Duration** is 10, the default value of **TranscodeAhead** is 12. You can specify this parameter to control the number of asynchronous forward transcodes. The value must be in the range of \[10, 30\].
    

12

Duration

number

No

The playback duration of a single TS file. Unit: seconds (s). Default value: 10. Value range: \[5, 15\].

10

InitialTranscode

number

No

The initial transcoding duration. Unit: seconds (s). Default value: 30.

-   If you set this parameter to 0, pre-transcoding is not performed.
    
-   If you set this parameter to a value less than 0 or a value that exceeds the source video length, the entire video is initially transcoded.
    
-   If the specified duration ends in the middle of a TS file, transcoding continues to the end of that TS file.
    

**Note**

This parameter is mainly used to reduce the waiting time for the first playback and improve the user experience. To replace a traditional VOD scenario, you can try initially transcoding the entire video.

30

InitialSegments

array

No

An array of durations for the initial transcoded TS files. The maximum array length is 6. The default value is empty. This parameter is independent of the **Duration** parameter.

number

No

The duration of an initial transcoded TS file. The value must be in the range of \[1, **Duration**\].

-   Example: If the array of initial TS file durations is `[2, 2, 4, 4, 8, 8]`, the duration of the TS file with sequence number 0 is 2, the duration of the TS file with sequence number 1 is 2, the duration of the TS file with sequence number 2 is 4, the duration of the TS file with sequence number 3 is 4, the duration of the TS file with sequence number 4 is 8, and the duration of the TS file with sequence number 5 is 8.
    

**Note**

Customizing a shorter duration for the initial transcoded TS files can make video loading smoother.

\[2, 2, 4, 4, 8, 8\]

Tags

object

No

Adds OSS object [tags](/help/en/oss/user-guide/object-tagging-8) to the generated TS files. You can use OSS tags to control the lifecycle of OSS files.

**Note**

The tags for the current target are the union of the tags defined at this level and the tags defined at the parent level. If a tag has the same name, the value at the current level is used.

string

No

The tag value.

{\\"key1\\":\\"value1\\"}

Tags

object

No

Adds OSS object [tags](/help/en/oss/user-guide/object-tagging-8) to the generated TS files. You can use tags to control the lifecycle of OSS files.

{"key1": "value1", "key2": "value2"}

string

No

The tag value.

{"key1": "value1", "key2": "value2"}

CredentialConfig

[CredentialConfig](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-credentialconfig)

No

**If you do not have special requirements, leave this parameter empty.**

The chained authorization configuration. This parameter is not required. For more information, see [Use chained authorization to access resources of other entities](/help/en/imm/user-guide/use-authorization-chains-to-access-resources-of-other-entities).

Notification

[Notification](/help/en/imm/developer-reference/api-imm-2020-09-30-notification)

No

The message notification configuration. For more information, click Notification. For more information about the format of asynchronous notification messages, see [Asynchronous notification message format](/help/en/imm/developer-reference/asynchronous-notification-message-examples).

OverwritePolicy

string

No

The policy to overwrite an existing Media Playlist. Valid values:

-   overwrite (default): Overwrites the existing Media Playlist.
    
-   skip-existing: Skips the generation and retains the existing Media Playlist.
    

overwrite

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

CA995EFD-083D-4F40-BE8A-BDF75FFF\*\*\*\*\*

Duration

number

The total duration of the output video.

1082

Token

string

The token of the Master Playlist.

92376fbb-171f-4259-913f-705f7ee0\*\*\*\*

MasterURI

string

The OSS URI of the Master Playlist.

oss://test-bucket/test-object/master.m3u8

VideoPlaylist

array<object>

The list of video Media Playlist files.

object

The information about a video Media Playlist file.

Token

string

The token generated for the video Media Playlist. You can use this parameter to construct the URI of the generated TS file.

**Note**

You can use the returned token value to construct the URI of the transcoded TS file. The format is oss://${Bucket}/${Object}-${Token}-${Index}.ts. oss://${Bucket}/${Object} is the target URI specified in the request parameters. ${Token} is the returned parameter. ${Index} is the sequence number of the TS file.

affe0c6042f09722fec95a21b8b\*\*\*\*\*\*

URI

string

The OSS URI of the video Media Playlist.

oss://test-bucket/test-object/output-video.m3u8

Resolution

string

The video resolution.

640x480

FrameRate

string

The video frame rate.

25/1

AudioPlaylist

array<object>

The list of audio Media Playlist files.

object

The information about an audio Media Playlist file.

Token

string

The token generated for the audio Media Playlist. You can use this parameter to construct the URI of the generated TS file.

affe0c6042f09722fec95a21b8b\*\*\*\*\*\*

URI

string

The OSS URI of the audio Media Playlist.

oss://test-bucket/test-object/output-audio.m3u8

Channels

integer

The number of audio channels.

1

SubtitlePlaylist

array<object>

The list of subtitle Media Playlist files.

object

The information about a subtitle Media Playlist file.

Token

string

The token generated for the subtitle Media Playlist. You can use this parameter to construct the URI of the generated subtitle file.

**Note**

You can use the returned token value to construct the URI of the transcoded subtitle file. The format is oss://${Bucket}/${Object}-${Token}\_${Index}.ts. oss://${Bucket}/${Object} is the subtitle URI specified in the request parameters. ${Token} is the returned parameter. ${Index} is the sequence number of the subtitle.

affe0c6042f09722fec95a21b8b\*\*\*\*\*\*

URI

string

The OSS URI of the subtitle Media Playlist.

oss://test-bucket/test-object/output-subtitle.m3u8

Language

string

The language of the subtitle stream.

**Note**

The language is obtained from the subtitle stream information of the source video specified by SourceURI. If the source video does not contain language information, this parameter is empty.

eng

Index

integer

The sequence number of the subtitle stream, starting from 0.

1

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CA995EFD-083D-4F40-BE8A-BDF75FFF*****",
  "Duration": 1082,
  "Token": "92376fbb-171f-4259-913f-705f7ee0****",
  "MasterURI": "oss://test-bucket/test-object/master.m3u8",
  "VideoPlaylist": [
    {
      "Token": "affe0c6042f09722fec95a21b8b******",
      "URI": "oss://test-bucket/test-object/output-video.m3u8",
      "Resolution": "640x480",
      "FrameRate": "25/1"
    }
  ],
  "AudioPlaylist": [
    {
      "Token": "affe0c6042f09722fec95a21b8b******",
      "URI": "oss://test-bucket/test-object/output-audio.m3u8",
      "Channels": 1
    }
  ],
  "SubtitlePlaylist": [
    {
      "Token": "affe0c6042f09722fec95a21b8b******",
      "URI": "oss://test-bucket/test-object/output-subtitle.m3u8",
      "Language": "eng",
      "Index": 1
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/imm/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/imm/2020-09-30/GenerateVideoPlaylist#workbench-doc-change-demo) for a complete list.
