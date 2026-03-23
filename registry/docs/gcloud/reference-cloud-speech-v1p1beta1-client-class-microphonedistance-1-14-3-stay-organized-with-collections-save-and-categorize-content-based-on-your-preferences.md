-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Speech V1p1beta1 Client - Class MicrophoneDistance (1.14.3) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.0 2.3.0 2.2.1 2.1.1 2.0.1 1.20.1 1.19.2 1.18.3 1.16.0 1.15.0 1.14.3 1.13.1 1.12.0 1.11.2 1.10.0 1.9.1 1.8.0 1.7.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Cloud Speech V1p1beta1 Client class MicrophoneDistance.

Enumerates the types of capture settings describing an audio file.

Protobuf type `google.cloud.speech.v1p1beta1.RecognitionMetadata.MicrophoneDistance`

## Namespace

Google \\ Cloud \\ Speech \\ V1p1beta1 \\ RecognitionMetadata

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

### MICROPHONE\_DISTANCE\_UNSPECIFIED

```
Value: 0
```

Audio type is not known.

Generated from protobuf enum `MICROPHONE_DISTANCE_UNSPECIFIED = 0;`

### NEARFIELD

```
Value: 1
```

The audio was captured from a closely placed microphone. Eg. phone, dictaphone, or handheld microphone. Generally if there speaker is within 1 meter of the microphone.

Generated from protobuf enum `NEARFIELD = 1;`

### MIDFIELD

```
Value: 2
```

The speaker if within 3 meters of the microphone.

Generated from protobuf enum `MIDFIELD = 2;`

### FARFIELD

```
Value: 3
```

The speaker is more than 3 meters away from the microphone.

Generated from protobuf enum `FARFIELD = 3;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
