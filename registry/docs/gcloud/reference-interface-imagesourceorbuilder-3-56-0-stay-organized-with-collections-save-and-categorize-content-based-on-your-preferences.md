-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ImageSourceOrBuilder (3.56.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public interface ImageSourceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGcsImageUri()

```
public abstract String getGcsImageUri()
```

NOTE: For new code `image_uri` below is preferred. Google Cloud Storage image URI, which must be in the following form: `gs://bucket_name/object_name` (for details, see [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris)). NOTE: Cloud Storage object versioning is not supported.

`string gcs_image_uri = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The gcsImageUri.

### getGcsImageUriBytes()

```
public abstract ByteString getGcsImageUriBytes()
```

NOTE: For new code `image_uri` below is preferred. Google Cloud Storage image URI, which must be in the following form: `gs://bucket_name/object_name` (for details, see [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris)). NOTE: Cloud Storage object versioning is not supported.

`string gcs_image_uri = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for gcsImageUri.

### getImageUri()

```
public abstract String getImageUri()
```

Image URI which supports: 1) Google Cloud Storage image URI, which must be in the following form: `gs://bucket_name/object_name` (for details, see [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris)). NOTE: Cloud Storage object versioning is not supported. 2) Publicly accessible image HTTP/HTTPS URL. This is preferred over the legacy `gcs_image_uri` above. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence.

`string image_uri = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The imageUri.

### getImageUriBytes()

```
public abstract ByteString getImageUriBytes()
```

Image URI which supports: 1) Google Cloud Storage image URI, which must be in the following form: `gs://bucket_name/object_name` (for details, see [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris)). NOTE: Cloud Storage object versioning is not supported. 2) Publicly accessible image HTTP/HTTPS URL. This is preferred over the legacy `gcs_image_uri` above. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence.

`string image_uri = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for imageUri.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
