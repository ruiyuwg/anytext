-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Datastore v1 API - Enum EntityResult.Types.ResultType (5.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [5.1.0 (latest)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/latest/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/5.0.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.17.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.17.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.16.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.16.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.15.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.15.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.14.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.13.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.12.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.12.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.10.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.9.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.8.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.7.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.6.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.5.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.3.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.2.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.1.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.0.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.5.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.4.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.3.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.2.0/Google.Cloud.Datastore.V1.EntityResult.Types.ResultType)

```
public enum EntityResult.Types.ResultType
```

Reference documentation and code samples for the Google Cloud Datastore v1 API enum EntityResult.Types.ResultType.

Specifies what data the 'entity' field contains. A `ResultType` is either implied (for example, in `LookupResponse.missing` from `datastore.proto`, it is always `KEY_ONLY`) or specified by context (for example, in message `QueryResultBatch`, field `entity_result_type` specifies a `ResultType` for all the values in field `entity_results`).

## Namespace

[Google.Cloud.Datastore.V1](/dotnet/docs/reference/Google.Cloud.Datastore.V1/latest/Google.Cloud.Datastore.V1)

## Assembly

Google.Cloud.Datastore.V1.dll

## Fields

**Name**

**Description**

`Full`

The key and properties.

`KeyOnly`

Only the key.

`Projection`

A projected subset of properties. The entity may have no key.

`Unspecified`

Unspecified. This value is never used.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
