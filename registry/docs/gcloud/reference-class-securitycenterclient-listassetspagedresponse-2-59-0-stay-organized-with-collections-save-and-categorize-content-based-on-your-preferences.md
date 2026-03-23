-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterClient.ListAssetsPagedResponse (2.59.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public static class SecurityCenterClient.ListAssetsPagedResponse extends AbstractPagedListResponse<ListAssetsRequest,ListAssetsResponse,ListAssetsResponse.ListAssetsResult,SecurityCenterClient.ListAssetsPage,SecurityCenterClient.ListAssetsFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractPagedListResponse](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html) \> SecurityCenterClient.ListAssetsPagedResponse

## Inherited Members

[AbstractPagedListResponse.expandToFixedSizeCollection(int)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html#com_google_api_gax_paging_AbstractPagedListResponse_expandToFixedSizeCollection_int_)

[AbstractPagedListResponse.getNextPageToken()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html#com_google_api_gax_paging_AbstractPagedListResponse_getNextPageToken__)

[AbstractPagedListResponse.getPage()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html#com_google_api_gax_paging_AbstractPagedListResponse_getPage__)

[AbstractPagedListResponse.iterateAll()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html#com_google_api_gax_paging_AbstractPagedListResponse_iterateAll__)

[AbstractPagedListResponse.iterateFixedSizeCollections(int)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html#com_google_api_gax_paging_AbstractPagedListResponse_iterateFixedSizeCollections_int_)

[AbstractPagedListResponse.iteratePages()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html#com_google_api_gax_paging_AbstractPagedListResponse_iteratePages__)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### createAsync(PageContext<ListAssetsRequest,ListAssetsResponse,ListAssetsResponse.ListAssetsResult> context, ApiFuture<ListAssetsResponse> futureResponse)

```
public static ApiFuture<SecurityCenterClient.ListAssetsPagedResponse> createAsync(PageContext<ListAssetsRequest,ListAssetsResponse,ListAssetsResponse.ListAssetsResult> context, ApiFuture<ListAssetsResponse> futureResponse)
```

**Parameters**

**Name**

**Description**

`context`

`[PageContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.59.0/com.google.cloud.securitycenter.v1beta1.ListAssetsRequest),[ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.59.0/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse),[ListAssetsResult](/java/docs/reference/google-cloud-securitycenter/2.59.0/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult)>`  

`futureResponse`

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.59.0/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse)>`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.59.0/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListAssetsPagedResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
