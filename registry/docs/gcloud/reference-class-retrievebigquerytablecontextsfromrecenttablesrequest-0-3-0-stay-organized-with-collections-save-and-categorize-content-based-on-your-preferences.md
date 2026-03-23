-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Python](https://docs.cloud.google.com/python/docs)
-   [Client libraries](https://docs.cloud.google.com/python/docs/reference)

Send feedback

# Class RetrieveBigQueryTableContextsFromRecentTablesRequest (0.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.10.0 (latest)](/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.9.0](/python/docs/reference/google-cloud-geminidataanalytics/0.9.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.8.0](/python/docs/reference/google-cloud-geminidataanalytics/0.8.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.7.0](/python/docs/reference/google-cloud-geminidataanalytics/0.7.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.6.0](/python/docs/reference/google-cloud-geminidataanalytics/0.6.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.5.0](/python/docs/reference/google-cloud-geminidataanalytics/0.5.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.4.0](/python/docs/reference/google-cloud-geminidataanalytics/0.4.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.3.0](/python/docs/reference/google-cloud-geminidataanalytics/0.3.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.2.0](/python/docs/reference/google-cloud-geminidataanalytics/0.2.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)
-   [0.1.0](/python/docs/reference/google-cloud-geminidataanalytics/0.1.0/google.cloud.geminidataanalytics_v1alpha.types.RetrieveBigQueryTableContextsFromRecentTablesRequest)

```
RetrieveBigQueryTableContextsFromRecentTablesRequest(
    mapping=None, *, ignore_unknown_fields=False, **kwargs
)
```

Request for retrieving BigQuery table contextual data from recently accessed tables. Response is sorted by semantic similarity to the query.

## Attributes

**Name**

**Description**

`parent`

`str`  
Required. Parent value for RetrieveBigQueryTableContextsFromRecentTablesRequest. Pattern: `projects/{project}/locations/{location}` For location, use "global" for now. Regional location value will be supported in the future.

`query`

`str`  
Optional. User query in natural language.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-10 UTC.
