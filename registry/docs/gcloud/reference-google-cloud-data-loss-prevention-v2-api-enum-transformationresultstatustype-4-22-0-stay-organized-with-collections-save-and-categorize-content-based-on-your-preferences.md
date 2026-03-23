-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Data Loss Prevention v2 API - Enum TransformationResultStatusType (4.22.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [4.22.0 (latest)](/dotnet/docs/reference/Google.Cloud.Dlp.V2/latest/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.21.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.21.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.20.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.20.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.19.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.19.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.18.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.18.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.17.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.17.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.16.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.16.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.15.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.15.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.14.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.14.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.13.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.12.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.12.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.11.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.10.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.9.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.8.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.7.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.6.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.5.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.4.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.3.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.2.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.0.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.5.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.4.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.3.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.2.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/2.16.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/2.15.0/Google.Cloud.Dlp.V2.TransformationResultStatusType)

```
public enum TransformationResultStatusType
```

Reference documentation and code samples for the Google Cloud Data Loss Prevention v2 API enum TransformationResultStatusType.

Enum of possible outcomes of transformations. SUCCESS if transformation and storing of transformation was successful, otherwise, reason for not transforming.

## Namespace

[Google.Cloud.Dlp.V2](/dotnet/docs/reference/Google.Cloud.Dlp.V2/latest/Google.Cloud.Dlp.V2)

## Assembly

Google.Cloud.Dlp.V2.dll

## Fields

**Name**

**Description**

`BigqueryMaxRowSizeExceeded`

This will be set when a BigQuery transformation was successful but could not be stored back in BigQuery because the transformed row exceeds BigQuery's max row size.

`InvalidTransform`

This will be set when a finding could not be transformed (i.e. outside user set bucket range).

`MetadataUnretrievable`

This will be set when there is a finding in the custom metadata of a file, but at the write time of the transformed file, this key / value pair is unretrievable.

`StateTypeUnspecified`

Unused.

`Success`

This will be set when the transformation and storing of it is successful.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
