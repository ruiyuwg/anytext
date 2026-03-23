-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum StreamingRecognitionResult.MessageType (4.93.0) Stay organized with collections Save and categorize content based on your preferences.

4.93.0 (latest) 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1

```
public enum StreamingRecognitionResult.MessageType extends Enum<StreamingRecognitionResult.MessageType> implements ProtocolMessageEnum
```

Type of the response message.

Protobuf enum `google.cloud.dialogflow.v2.StreamingRecognitionResult.MessageType`

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

`END_OF_SINGLE_UTTERANCE`

This event indicates that the server has detected the end of the user's speech utterance and expects no additional inputs. Therefore, the server will not process additional audio (although it may subsequently return additional results). The client should stop sending additional audio data, half-close the gRPC connection, and wait for any additional results until the server closes the gRPC connection. This message is only sent if `single_utterance` was set to `true`, and is not used otherwise.

`END_OF_SINGLE_UTTERANCE = 2;`

`END_OF_SINGLE_UTTERANCE_VALUE`

This event indicates that the server has detected the end of the user's speech utterance and expects no additional inputs. Therefore, the server will not process additional audio (although it may subsequently return additional results). The client should stop sending additional audio data, half-close the gRPC connection, and wait for any additional results until the server closes the gRPC connection. This message is only sent if `single_utterance` was set to `true`, and is not used otherwise.

`END_OF_SINGLE_UTTERANCE = 2;`

`MESSAGE_TYPE_UNSPECIFIED`

Not specified. Should never be used.

`MESSAGE_TYPE_UNSPECIFIED = 0;`

`MESSAGE_TYPE_UNSPECIFIED_VALUE`

Not specified. Should never be used.

`MESSAGE_TYPE_UNSPECIFIED = 0;`

`TRANSCRIPT`

Message contains a (possibly partial) transcript.

`TRANSCRIPT = 1;`

`TRANSCRIPT_VALUE`

Message contains a (possibly partial) transcript.

`TRANSCRIPT = 1;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.StreamingRecognitionResult.MessageType#com_google_cloud_dialogflow_v2_StreamingRecognitionResult_MessageType_forNumber_int_) instead._

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
