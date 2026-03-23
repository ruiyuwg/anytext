-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Speech V1p1beta1 Client - Class AudioEncoding (1.20.1) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.0 2.3.0 2.2.1 2.1.1 2.0.1 1.20.1 1.19.2 1.18.3 1.16.0 1.15.0 1.14.3 1.13.1 1.12.0 1.11.2 1.10.0 1.9.1 1.8.0 1.7.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud Speech V1p1beta1 Client class AudioEncoding.

The encoding of the audio data sent in the request.

All encodings support only 1 channel (mono) audio, unless the `audio_channel_count` and `enable_separate_recognition_per_channel` fields are set. For best results, the audio source should be captured and transmitted using a lossless encoding (`FLAC` or `LINEAR16`). The accuracy of the speech recognition can be reduced if lossy codecs are used to capture or transmit audio, particularly if background noise is present. Lossy codecs include `MULAW`, `AMR`, `AMR_WB`, `OGG_OPUS`, `SPEEX_WITH_HEADER_BYTE`, `MP3`, and `WEBM_OPUS`. The `FLAC` and `WAV` audio file formats include a header that describes the included audio content. You can request recognition for `WAV` files that contain either `LINEAR16` or `MULAW` encoded audio. If you send `FLAC` or `WAV` audio file format in your request, you do not need to specify an `AudioEncoding`; the audio encoding format is determined from the file header. If you specify an `AudioEncoding` when you send send `FLAC` or `WAV` audio, the encoding configuration must match the encoding described in the audio header; otherwise the request returns an [google.rpc.Code.INVALID\_ARGUMENT](https://cloud.google.com/php/docs/reference/common-protos/latest/Rpc.Code.html#_Google_Rpc_Code__INVALID_ARGUMENT) error code.

Protobuf type `google.cloud.speech.v1p1beta1.RecognitionConfig.AudioEncoding`

## Namespace

Google \\ Cloud \\ Speech \\ V1p1beta1 \\ RecognitionConfig

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### ENCODING\_UNSPECIFIED

```
Value: 0
```

Not specified.

Generated from protobuf enum `ENCODING_UNSPECIFIED = 0;`

### LINEAR16

```
Value: 1
```

Uncompressed 16-bit signed little-endian samples (Linear PCM).

Generated from protobuf enum `LINEAR16 = 1;`

### FLAC

```
Value: 2
```

`FLAC` (Free Lossless Audio Codec) is the recommended encoding because it is lossless--therefore recognition is not compromised--and requires only about half the bandwidth of `LINEAR16`. `FLAC` stream encoding supports 16-bit and 24-bit samples, however, not all fields in `STREAMINFO` are supported.

Generated from protobuf enum `FLAC = 2;`

### MULAW

```
Value: 3
```

8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.

Generated from protobuf enum `MULAW = 3;`

### AMR

```
Value: 4
```

Adaptive Multi-Rate Narrowband codec. `sample_rate_hertz` must be 8000.

Generated from protobuf enum `AMR = 4;`

### AMR\_WB

```
Value: 5
```

Adaptive Multi-Rate Wideband codec. `sample_rate_hertz` must be 16000.

Generated from protobuf enum `AMR_WB = 5;`

### OGG\_OPUS

```
Value: 6
```

Opus encoded audio frames in Ogg container ([OggOpus](https://wiki.xiph.org/OggOpus)).

`sample_rate_hertz` must be one of 8000, 12000, 16000, 24000, or 48000.

Generated from protobuf enum `OGG_OPUS = 6;`

### SPEEX\_WITH\_HEADER\_BYTE

```
Value: 7
```

Although the use of lossy encodings is not recommended, if a very low bitrate encoding is required, `OGG_OPUS` is highly preferred over Speex encoding. The [Speex](https://speex.org/) encoding supported by Cloud Speech API has a header byte in each block, as in MIME type `audio/x-speex-with-header-byte`.

It is a variant of the RTP Speex encoding defined in [RFC 5574](https://tools.ietf.org/html/rfc5574). The stream is a sequence of blocks, one block per RTP packet. Each block starts with a byte containing the length of the block, in bytes, followed by one or more frames of Speex data, padded to an integral number of bytes (octets) as specified in RFC 5574. In other words, each RTP header is replaced with a single byte containing the block length. Only Speex wideband is supported. `sample_rate_hertz` must be 16000.

Generated from protobuf enum `SPEEX_WITH_HEADER_BYTE = 7;`

### MP3

```
Value: 8
```

MP3 audio. MP3 encoding is a Beta feature and only available in v1p1beta1. Support all standard MP3 bitrates (which range from 32-320 kbps). When using this encoding, `sample_rate_hertz` has to match the sample rate of the file being used.

Generated from protobuf enum `MP3 = 8;`

### WEBM\_OPUS

```
Value: 9
```

Opus encoded audio frames in WebM container ([OggOpus](https://wiki.xiph.org/OggOpus)). `sample_rate_hertz` must be one of 8000, 12000, 16000, 24000, or 48000.

Generated from protobuf enum `WEBM_OPUS = 9;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
