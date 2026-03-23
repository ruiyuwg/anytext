-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Channel.StreamingState (0.39.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public enum Channel.StreamingState extends Enum<Channel.StreamingState> implements ProtocolMessageEnum
```

State of streaming operation that the channel is running.

Protobuf enum `google.cloud.video.livestream.v1.Channel.StreamingState`

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

`AWAITING_INPUT`

Channel is waiting for the input stream through the input.

`AWAITING_INPUT = 2;`

`AWAITING_INPUT_VALUE`

Channel is waiting for the input stream through the input.

`AWAITING_INPUT = 2;`

`STARTING`

Channel is starting.

`STARTING = 7;`

`STARTING_VALUE`

Channel is starting.

`STARTING = 7;`

`STOPPED`

Channel is stopped, finishing live streams.

`STOPPED = 6;`

`STOPPED_VALUE`

Channel is stopped, finishing live streams.

`STOPPED = 6;`

`STOPPING`

Channel is stopping.

`STOPPING = 8;`

`STOPPING_VALUE`

Channel is stopping.

`STOPPING = 8;`

`STREAMING`

Channel is getting the input stream, generating the live streams to the specified output location.

`STREAMING = 1;`

`STREAMING_ERROR`

Channel is running, but has trouble publishing the live streams onto the specified output location (for example, the specified Cloud Storage bucket is not writable).

`STREAMING_ERROR = 4;`

`STREAMING_ERROR_VALUE`

Channel is running, but has trouble publishing the live streams onto the specified output location (for example, the specified Cloud Storage bucket is not writable).

`STREAMING_ERROR = 4;`

`STREAMING_NO_INPUT`

Channel is generating live streams with no input stream. Live streams are filled out with black screen, while input stream is missing. Not supported yet.

`STREAMING_NO_INPUT = 5;`

`STREAMING_NO_INPUT_VALUE`

Channel is generating live streams with no input stream. Live streams are filled out with black screen, while input stream is missing. Not supported yet.

`STREAMING_NO_INPUT = 5;`

`STREAMING_STATE_UNSPECIFIED`

Streaming state is not specified.

`STREAMING_STATE_UNSPECIFIED = 0;`

`STREAMING_STATE_UNSPECIFIED_VALUE`

Streaming state is not specified.

`STREAMING_STATE_UNSPECIFIED = 0;`

`STREAMING_VALUE`

Channel is getting the input stream, generating the live streams to the specified output location.

`STREAMING = 1;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-live-stream/0.39.0/com.google.cloud.video.livestream.v1.Channel.StreamingState#com_google_cloud_video_livestream_v1_Channel_StreamingState_forNumber_int_) instead._

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
