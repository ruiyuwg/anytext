-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Python](https://docs.cloud.google.com/python/docs)
-   [Client libraries](https://docs.cloud.google.com/python/docs/reference)

Send feedback

# Class DoNotAssociateAction (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/python/docs/reference/retail/latest/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.8.0](/python/docs/reference/retail/2.8.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.7.0](/python/docs/reference/retail/2.7.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.6.0](/python/docs/reference/retail/2.6.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.5.0](/python/docs/reference/retail/2.5.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.4.0](/python/docs/reference/retail/2.4.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.3.0](/python/docs/reference/retail/2.3.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.2.0](/python/docs/reference/retail/2.2.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.1.0](/python/docs/reference/retail/2.1.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [2.0.0](/python/docs/reference/retail/2.0.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.25.0](/python/docs/reference/retail/1.25.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.24.0](/python/docs/reference/retail/1.24.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.23.1](/python/docs/reference/retail/1.23.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.22.0](/python/docs/reference/retail/1.22.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.21.2](/python/docs/reference/retail/1.21.2/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.20.1](/python/docs/reference/retail/1.20.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.19.1](/python/docs/reference/retail/1.19.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.18.0](/python/docs/reference/retail/1.18.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.17.0](/python/docs/reference/retail/1.17.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.16.3](/python/docs/reference/retail/1.16.3/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.15.1](/python/docs/reference/retail/1.15.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.14.1](/python/docs/reference/retail/1.14.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.13.0](/python/docs/reference/retail/1.13.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.12.0](/python/docs/reference/retail/1.12.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.11.0](/python/docs/reference/retail/1.11.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.10.2](/python/docs/reference/retail/1.10.2/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.9.0](/python/docs/reference/retail/1.9.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.8.1](/python/docs/reference/retail/1.8.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.7.0](/python/docs/reference/retail/1.7.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.6.1](/python/docs/reference/retail/1.6.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.5.0](/python/docs/reference/retail/1.5.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.4.1](/python/docs/reference/retail/1.4.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.3.0](/python/docs/reference/retail/1.3.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.2.1](/python/docs/reference/retail/1.2.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.1.0](/python/docs/reference/retail/1.1.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [1.0.2](/python/docs/reference/retail/1.0.2/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [0.4.2](/python/docs/reference/retail/0.4.2/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [0.3.1](/python/docs/reference/retail/0.3.1/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [0.2.0](/python/docs/reference/retail/0.2.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)
-   [0.1.0](/python/docs/reference/retail/0.1.0/google.cloud.retail_v2beta.types.Rule.DoNotAssociateAction)

```
DoNotAssociateAction(mapping=None, *, ignore_unknown_fields=False, **kwargs)
```

Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".

## Attributes

**Name**

**Description**

`query_terms`

`MutableSequence[str]`  
Terms from the search query. Will not consider do\_not\_associate\_terms for search if in search query. Can specify up to 100 terms.

`do_not_associate_terms`

`MutableSequence[str]`  
Cannot contain duplicates or the query term. Can specify up to 100 terms.

`terms`

`MutableSequence[str]`  
Will be \[deprecated = true\] post migration;

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
