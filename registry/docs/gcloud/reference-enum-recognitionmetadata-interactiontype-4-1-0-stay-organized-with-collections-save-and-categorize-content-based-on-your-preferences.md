-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum RecognitionMetadata.InteractionType (4.1.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public enum RecognitionMetadata.InteractionType extends Enum<RecognitionMetadata.InteractionType> implements ProtocolMessageEnum
```

Use case categories that the audio recognition request can be described by.

Protobuf enum `google.cloud.speech.v1p1beta1.RecognitionMetadata.InteractionType`

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

DICTATION

Transcribe speech to text to create a written document, such as a text-message, email or report.

`DICTATION = 8;`

DICTATION\_VALUE

Transcribe speech to text to create a written document, such as a text-message, email or report.

`DICTATION = 8;`

DISCUSSION

Multiple people in a conversation or discussion. For example in a meeting with two or more people actively participating. Typically all the primary people speaking would be in the same room (if not, see PHONE\_CALL)

`DISCUSSION = 1;`

DISCUSSION\_VALUE

Multiple people in a conversation or discussion. For example in a meeting with two or more people actively participating. Typically all the primary people speaking would be in the same room (if not, see PHONE\_CALL)

`DISCUSSION = 1;`

INTERACTION\_TYPE\_UNSPECIFIED

Use case is either unknown or is something other than one of the other values below.

`INTERACTION_TYPE_UNSPECIFIED = 0;`

INTERACTION\_TYPE\_UNSPECIFIED\_VALUE

Use case is either unknown or is something other than one of the other values below.

`INTERACTION_TYPE_UNSPECIFIED = 0;`

PHONE\_CALL

A phone-call or video-conference in which two or more people, who are not in the same room, are actively participating.

`PHONE_CALL = 3;`

PHONE\_CALL\_VALUE

A phone-call or video-conference in which two or more people, who are not in the same room, are actively participating.

`PHONE_CALL = 3;`

PRESENTATION

One or more persons lecturing or presenting to others, mostly uninterrupted.

`PRESENTATION = 2;`

PRESENTATION\_VALUE

One or more persons lecturing or presenting to others, mostly uninterrupted.

`PRESENTATION = 2;`

PROFESSIONALLY\_PRODUCED

Professionally produced audio (eg. TV Show, Podcast).

`PROFESSIONALLY_PRODUCED = 5;`

PROFESSIONALLY\_PRODUCED\_VALUE

Professionally produced audio (eg. TV Show, Podcast).

`PROFESSIONALLY_PRODUCED = 5;`

UNRECOGNIZED

VOICEMAIL

A recorded message intended for another person to listen to.

`VOICEMAIL = 4;`

VOICEMAIL\_VALUE

A recorded message intended for another person to listen to.

`VOICEMAIL = 4;`

VOICE\_COMMAND

Transcribe voice commands, such as for controlling a device.

`VOICE_COMMAND = 7;`

VOICE\_COMMAND\_VALUE

Transcribe voice commands, such as for controlling a device.

`VOICE_COMMAND = 7;`

VOICE\_SEARCH

Transcribe spoken questions and queries into text.

`VOICE_SEARCH = 6;`

VOICE\_SEARCH\_VALUE

Transcribe spoken questions and queries into text.

`VOICE_SEARCH = 6;`

## Static Methods

**Name**

**Description**

forNumber(int value)

getDescriptor()

internalGetValueMap()

valueOf(Descriptors.EnumValueDescriptor desc)

valueOf(int value)

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-speech/4.1.0/com.google.cloud.speech.v1p1beta1.RecognitionMetadata.InteractionType#com_google_cloud_speech_v1p1beta1_RecognitionMetadata_InteractionType_forNumber_int_) instead._

valueOf(String name)

values()

## Methods

**Name**

**Description**

getDescriptorForType()

getNumber()

getValueDescriptor()

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
