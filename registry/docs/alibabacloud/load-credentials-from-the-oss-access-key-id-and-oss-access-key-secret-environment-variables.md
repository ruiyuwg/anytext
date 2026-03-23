Use the audio information extraction feature to retrieve media metadata from audio files stored in OSS — including sampling rate, audio channels, bitrate, duration, codec details, and embedded cover images. The metadata is returned as JSON, ready for use in media management pipelines, content indexing, or playback systems.

## Use cases

-   **Media cataloging**: Index audio files by codec, bitrate, or duration for search and filtering.
    
-   **Playback validation**: Verify sampling rate and channel layout before serving audio to end users.
    
-   **Cover art retrieval**: Detect whether a file embeds a cover image without downloading the full audio object.
    

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket associated with an Intelligent Media Management (IMM) project. To associate a bucket:
    
    -   Using the OSS console: see [Step 1: Associate an OSS bucket with an IMM project](/help/en/oss/user-guide/quick-start-2326698#3ecbcbb05b4yj).
        
    -   Using the API: call [AttachOSSBucket](/help/en/imm/developer-reference/api-imm-2020-09-30-attachossbucket).
        
-   The required [Permissions](/help/en/oss/user-guide/permissions) on IMM.
    

## Usage notes

-   Audio information extraction uses synchronous processing (`x-oss-process`) only.
    
-   Anonymous access is not supported. Requests must be authenticated.
    

## Parameters

**Parameter**

**Value**

**Description**

Action

`audio/info`

Instructs OSS to extract audio metadata from the object

The response is returned in JSON. For the full list of response fields, see [DetectMediaMeta](/help/en/imm/developer-reference/api-imm-2020-09-30-detectmediameta).

## Extract audio information using the RESTful API

All requests use the `x-oss-process=audio/info` query parameter appended to the object URL.

### Sample request

```
GET /example.flac?x-oss-process=audio/info HTTP/1.1
Host: video-demo.oss-cn-hangzhou.aliyuncs.com
Date: Fri, 28 Oct 2022 06:40:10 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
```

### Sample response

The response body contains top-level fields for the container format, plus `AudioStreams` and `VideoStreams` arrays. Video streams appear when the audio file embeds cover images (stored as MJPEG frames).

```
{
  "RequestId": "E63E1EFB-6D65-59DE-A11D-B0B761FDB301",
  "Album": "Album",
  "AlbumArtist": "Singer",
  "Bitrate": 973219,
  "Duration": 303.76,
  "FormatLongName": "raw FLAC",
  "FormatName": "flac",
  "StreamCount": 3,
  "Title": "Song name",
  "AudioStreams": [
    {
      "ChannelLayout": "stereo",
      "Channels": 2,
      "CodecLongName": "FLAC (Free Lossless Audio Codec)",
      "CodecName": "flac",
      "CodecTag": "0x0000",
      "CodecTagString": "[0][0][0][0]",
      "Duration": 303.76,
      "SampleFormat": "s16",
      "SampleRate": "44100",
      "TimeBase": "1/44100"
    }
  ],
  "VideoStreams": [
    {
      "AverageFrameRate": "0/0",
      "BitDepth": 8,
      "CodecLongName": "Motion JPEG",
      "CodecName": "mjpeg",
      "CodecTag": "0x0000",
      "CodecTagString": "[0][0][0][0]",
      "ColorRange": "pc",
      "ColorSpace": "bt470bg",
      "Duration": 303.76,
      "FrameRate": "90000/1",
      "Height": 800,
      "Index": 1,
      "Level": -99,
      "PixelFormat": "yuvj444p",
      "Profile": "Progressive",
      "Refs": 1,
      "TimeBase": "1/90000",
      "Width": 800
    },
    {
      "AverageFrameRate": "0/0",
      "BitDepth": 8,
      "CodecLongName": "Motion JPEG",
      "CodecName": "mjpeg",
      "CodecTag": "0x0000",
      "CodecTagString": "[0][0][0][0]",
      "ColorRange": "pc",
      "ColorSpace": "bt470bg",
      "Duration": 303.76,
      "FrameRate": "90000/1",
      "Height": 800,
      "Index": 2,
      "Level": -99,
      "PixelFormat": "yuvj444p",
      "Profile": "Progressive",
      "Refs": 1,
      "TimeBase": "1/90000",
      "Width": 800
    }
  ]
}
```

### Key response fields

**Top-level fields**

**Field**

**Type**

**Unit**

**Description**

**Example**

`Bitrate`

integer

bit/s

Overall container bitrate

`973219`

`Duration`

float

seconds

Total duration of the audio file

`303.76`

`FormatName`

string

—

Short format name

`"flac"`

`FormatLongName`

string

—

Full format name

`"raw FLAC"`

`StreamCount`

integer

—

Total number of streams (audio + video)

`3`

`Album`

string

—

Album tag from the file metadata

`"Album"`

`AlbumArtist`

string

—

Album artist tag

`"Singer"`

`Title`

string

—

Track title tag

`"Song name"`

**\`AudioStreams\[\]\` fields**

**Field**

**Type**

**Unit**

**Description**

**Example**

`Channels`

integer

—

Number of audio channels

`2`

`ChannelLayout`

string

—

Channel layout (e.g., mono, stereo)

`"stereo"`

`SampleRate`

string

Hz

Audio sampling rate

`"44100"`

`SampleFormat`

string

—

Sample format (bit depth and encoding)

`"s16"`

`Duration`

float

seconds

Duration of this audio stream

`303.76`

`CodecName`

string

—

Short codec identifier

`"flac"`

`CodecLongName`

string

—

Full codec name

`"FLAC (Free Lossless Audio Codec)"`

`TimeBase`

string

—

Time base for this stream

`"1/44100"`

**\`VideoStreams\[\]\` fields** (present when the file embeds cover images)

**Field**

**Type**

**Unit**

**Description**

**Example**

`Width`

integer

pixels

Cover image width

`800`

`Height`

integer

pixels

Cover image height

`800`

`CodecName`

string

—

Cover image codec

`"mjpeg"`

`PixelFormat`

string

—

Pixel format

`"yuvj444p"`

`BitDepth`

integer

bits

Bit depth per channel

`8`

`ColorSpace`

string

—

Color space

`"bt470bg"`

`Duration`

float

seconds

Duration associated with this stream

`303.76`

`Index`

integer

—

Stream index within the container

`1`

## Extract audio information using OSS SDKs

All SDK examples use the `audio/info` process parameter passed through the `getObject` call. Replace the placeholder values with your actual bucket name, object key, endpoint, and region.

### Java

Requires OSS SDK for Java V3.17.4 or later.

```
import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.OSSObject;
import com.aliyun.oss.model.GetObjectRequest;
import com.aliyuncs.exceptions.ClientException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class Demo {
    public static void main(String[] args) throws ClientException {
        // Specify the endpoint of the region where the bucket is located.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the region ID. Example: cn-hangzhou.
        String region = "cn-hangzhou";
        // Load credentials from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name and the object key.
        // If the object is not in the root directory, use the full path. Example: exampledir/example.mp3.
        String bucketName = "examplebucket";
        String key = "example.mp3";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Set the process parameter to audio/info to extract audio metadata.
            GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, key);
            getObjectRequest.setProcess("audio/info");

            OSSObject ossObject = ossClient.getObject(getObjectRequest);

            // Read and print the JSON response.
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = ossObject.getObjectContent().read(buffer)) != -1) {
                baos.write(buffer, 0, bytesRead);
            }
            System.out.println(baos.toString("UTF-8"));
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            ossClient.shutdown();
        }
    }
}
```

### PHP

Requires OSS SDK for PHP V2.7.0 or later.

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}
use OSS\Credentials\EnvironmentVariableCredentialsProvider;
use OSS\OssClient;

try {
    // Load credentials from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
    $provider = new EnvironmentVariableCredentialsProvider();
    // Specify the endpoint of the region where the bucket is located.
    $endpoint = 'https://oss-cn-hangzhou.aliyuncs.com';
    // Specify the bucket name and the object key.
    // If the object is not in the root directory, use the full path. Example: exampledir/example.mp3.
    $bucket = 'examplebucket';
    $key = 'example.mp3';

    $config = array(
        "provider" => $provider,
        "endpoint" => $endpoint,
        "signatureVersion" => OssClient::OSS_SIGNATURE_VERSION_V4,
        "region" => "cn-hangzhou"
    );
    $ossClient = new OssClient($config);

    // Set the process parameter to audio/info to extract audio metadata.
    $options[$ossClient::OSS_PROCESS] = "audio/info";
    $result = $ossClient->getObject($bucket, $key, $options);
    var_dump($result);
} catch (OssException $e) {
    printf($e->getMessage() . "\n");
}
```

### Python

Requires OSS SDK for Python V2.18.4 or later.

```
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

# Load credentials from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
auth = oss2.ProviderAuthV4(EnvironmentVariableCredentialsProvider())

# Specify the endpoint and region where the bucket is located.
endpoint = 'https://oss-cn-hangzhou.aliyuncs.com'
region = 'cn-hangzhou'
bucket = oss2.Bucket(auth, endpoint, 'examplebucket', region=region)

# Specify the object key.
# If the object is not in the root directory, use the full path. Example: exampledir/example.mp3.
key = 'example.mp3'

try:
    # Pass audio/info as the process parameter to extract audio metadata.
    result = bucket.get_object(key, process='audio/info')
    print(result.read().decode('utf-8'))
except oss2.exceptions.OssError as e:
    print("Error:", e)
```

### Go

Requires OSS SDK for Go V3.0.2 or later.

```
package main

import (
	"fmt"
	"io"
	"os"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Load credentials from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Create an OSS client. Specify the endpoint and region where the bucket is located.
	client, err := oss.New(
		"https://oss-cn-hangzhou.aliyuncs.com", "", "",
		oss.SetCredentialsProvider(&provider),
		oss.AuthVersion(oss.AuthV4),
		oss.Region("cn-hangzhou"),
	)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Specify the bucket name.
	bucket, err := client.Bucket("examplebucket")
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Pass audio/info as the process parameter to extract audio metadata.
	// If the object is not in the root directory, use the full path. Example: exampledir/example.mp3.
	body, err := bucket.GetObject("example.mp3", oss.Process("audio/info"))
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	defer body.Close()

	data, err := io.ReadAll(body)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	fmt.Println(string(data))
}
```

## What's next

-   To extract video metadata from video files stored in OSS, see Extract video information.
    
-   For the full list of response fields and their descriptions, see [DetectMediaMeta](/help/en/imm/developer-reference/api-imm-2020-09-30-detectmediameta).
