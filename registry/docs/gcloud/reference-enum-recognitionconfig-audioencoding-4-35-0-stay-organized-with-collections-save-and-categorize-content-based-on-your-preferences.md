-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum RecognitionConfig.AudioEncoding (4.35.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public enum RecognitionConfig.AudioEncoding extends Enum<RecognitionConfig.AudioEncoding> implements ProtocolMessageEnum
```

The encoding of the audio data sent in the request.

All encodings support only 1 channel (mono) audio, unless the `audio_channel_count` and `enable_separate_recognition_per_channel` fields are set.

For best results, the audio source should be captured and transmitted using a lossless encoding (`FLAC` or `LINEAR16`). The accuracy of the speech recognition can be reduced if lossy codecs are used to capture or transmit audio, particularly if background noise is present. Lossy codecs include `MULAW`, `AMR`, `AMR_WB`, `OGG_OPUS`, `SPEEX_WITH_HEADER_BYTE`, `MP3`, and `WEBM_OPUS`.

The `FLAC` and `WAV` audio file formats include a header that describes the included audio content. You can request recognition for `WAV` files that contain either `LINEAR16` or `MULAW` encoded audio. If you send `FLAC` or `WAV` audio file format in your request, you do not need to specify an `AudioEncoding`; the audio encoding format is determined from the file header. If you specify an `AudioEncoding` when you send send `FLAC` or `WAV` audio, the encoding configuration must match the encoding described in the audio header; otherwise the request returns an google.rpc.Code.INVALID\_ARGUMENT error code.

Protobuf enum `google.cloud.speech.v1p1beta1.RecognitionConfig.AudioEncoding`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`AMR`

Adaptive Multi-Rate Narrowband codec. `sample_rate_hertz` must be 8000.

`AMR = 4;`

`AMR_VALUE`

Adaptive Multi-Rate Narrowband codec. `sample_rate_hertz` must be 8000.

`AMR = 4;`

`AMR_WB`

Adaptive Multi-Rate Wideband codec. `sample_rate_hertz` must be 16000.

`AMR_WB = 5;`

`AMR_WB_VALUE`

Adaptive Multi-Rate Wideband codec. `sample_rate_hertz` must be 16000.

`AMR_WB = 5;`

`ENCODING_UNSPECIFIED`

Not specified.

`ENCODING_UNSPECIFIED = 0;`

`ENCODING_UNSPECIFIED_VALUE`

Not specified.

`ENCODING_UNSPECIFIED = 0;`

`FLAC`

`FLAC` (Free Lossless Audio Codec) is the recommended encoding because it is lossless--therefore recognition is not compromised--and requires only about half the bandwidth of `LINEAR16`. `FLAC` stream encoding supports 16-bit and 24-bit samples, however, not all fields in `STREAMINFO` are supported.

`FLAC = 2;`

`FLAC_VALUE`

`FLAC` (Free Lossless Audio Codec) is the recommended encoding because it is lossless--therefore recognition is not compromised--and requires only about half the bandwidth of `LINEAR16`. `FLAC` stream encoding supports 16-bit and 24-bit samples, however, not all fields in `STREAMINFO` are supported.

`FLAC = 2;`

`LINEAR16`

Uncompressed 16-bit signed little-endian samples (Linear PCM).

`LINEAR16 = 1;`

`LINEAR16_VALUE`

Uncompressed 16-bit signed little-endian samples (Linear PCM).

`LINEAR16 = 1;`

`MP3`

MP3 audio. MP3 encoding is a Beta feature and only available in v1p1beta1. Support all standard MP3 bitrates (which range from 32-320 kbps). When using this encoding, `sample_rate_hertz` has to match the sample rate of the file being used.

`MP3 = 8;`

`MP3_VALUE`

MP3 audio. MP3 encoding is a Beta feature and only available in v1p1beta1. Support all standard MP3 bitrates (which range from 32-320 kbps). When using this encoding, `sample_rate_hertz` has to match the sample rate of the file being used.

`MP3 = 8;`

`MULAW`

8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.

`MULAW = 3;`

`MULAW_VALUE`

8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.

`MULAW = 3;`

`OGG_OPUS`

Opus encoded audio frames in Ogg container ([OggOpus](https://wiki.xiph.org/OggOpus)). `sample_rate_hertz` must be one of 8000, 12000, 16000, 24000, or 48000.

`OGG_OPUS = 6;`

`OGG_OPUS_VALUE`

Opus encoded audio frames in Ogg container ([OggOpus](https://wiki.xiph.org/OggOpus)). `sample_rate_hertz` must be one of 8000, 12000, 16000, 24000, or 48000.

`OGG_OPUS = 6;`

`SPEEX_WITH_HEADER_BYTE`

Although the use of lossy encodings is not recommended, if a very low bitrate encoding is required, `OGG_OPUS` is highly preferred over Speex encoding. The [Speex](https://speex.org/) encoding supported by Cloud Speech API has a header byte in each block, as in MIME type `audio/x-speex-with-header-byte`. It is a variant of the RTP Speex encoding defined in [RFC 5574](https://tools.ietf.org/html/rfc5574). The stream is a sequence of blocks, one block per RTP packet. Each block starts with a byte containing the length of the block, in bytes, followed by one or more frames of Speex data, padded to an integral number of bytes (octets) as specified in RFC 5574. In other words, each RTP header is replaced with a single byte containing the block length. Only Speex wideband is supported. `sample_rate_hertz` must be 16000.

`SPEEX_WITH_HEADER_BYTE = 7;`

`SPEEX_WITH_HEADER_BYTE_VALUE`

Although the use of lossy encodings is not recommended, if a very low bitrate encoding is required, `OGG_OPUS` is highly preferred over Speex encoding. The [Speex](https://speex.org/) encoding supported by Cloud Speech API has a header byte in each block, as in MIME type `audio/x-speex-with-header-byte`. It is a variant of the RTP Speex encoding defined in [RFC 5574](https://tools.ietf.org/html/rfc5574). The stream is a sequence of blocks, one block per RTP packet. Each block starts with a byte containing the length of the block, in bytes, followed by one or more frames of Speex data, padded to an integral number of bytes (octets) as specified in RFC 5574. In other words, each RTP header is replaced with a single byte containing the block length. Only Speex wideband is supported. `sample_rate_hertz` must be 16000.

`SPEEX_WITH_HEADER_BYTE = 7;`

`UNRECOGNIZED`

`WEBM_OPUS`

Opus encoded audio frames in WebM container ([OggOpus](https://wiki.xiph.org/OggOpus)). `sample_rate_hertz` must be one of 8000, 12000, 16000, 24000, or 48000.

`WEBM_OPUS = 9;`

`WEBM_OPUS_VALUE`

Opus encoded audio frames in WebM container ([OggOpus](https://wiki.xiph.org/OggOpus)). `sample_rate_hertz` must be one of 8000, 12000, 16000, 24000, or 48000.

`WEBM_OPUS = 9;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-speech/4.35.0/com.google.cloud.speech.v1p1beta1.RecognitionConfig.AudioEncoding#com_google_cloud_speech_v1p1beta1_RecognitionConfig_AudioEncoding_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
