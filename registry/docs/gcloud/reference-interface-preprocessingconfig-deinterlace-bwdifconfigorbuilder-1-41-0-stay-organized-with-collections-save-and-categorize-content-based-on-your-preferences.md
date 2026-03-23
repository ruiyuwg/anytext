-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PreprocessingConfig.Deinterlace.BwdifConfigOrBuilder (1.41.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.5 1.0.4 0.4.3

```
public static interface PreprocessingConfig.Deinterlace.BwdifConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDeinterlaceAllFrames()

```
public abstract boolean getDeinterlaceAllFrames()
```

Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.

`bool deinterlace_all_frames = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The deinterlaceAllFrames.

### getMode()

```
public abstract String getMode()
```

Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values:

-   `send_frame`: Output one frame for each frame
-   `send_field`: Output one frame for each field

`string mode = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The mode.

### getModeBytes()

```
public abstract ByteString getModeBytes()
```

Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values:

-   `send_frame`: Output one frame for each frame
-   `send_field`: Output one frame for each field

`string mode = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for mode.

### getParity()

```
public abstract String getParity()
```

The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values:

-   `tff`: Assume the top field is first
-   `bff`: Assume the bottom field is first
-   `auto`: Enable automatic detection of field parity

`string parity = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parity.

### getParityBytes()

```
public abstract ByteString getParityBytes()
```

The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values:

-   `tff`: Assume the top field is first
-   `bff`: Assume the bottom field is first
-   `auto`: Enable automatic detection of field parity

`string parity = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parity.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
