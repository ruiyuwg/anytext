-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class InstanceAdminClient.ListInstanceConfigsPagedResponse Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static class InstanceAdminClient.ListInstanceConfigsPagedResponse extends AbstractPagedListResponse<ListInstanceConfigsRequest,ListInstanceConfigsResponse,InstanceConfig,InstanceAdminClient.ListInstanceConfigsPage,InstanceAdminClient.ListInstanceConfigsFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractPagedListResponse](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html) \> InstanceAdminClient.ListInstanceConfigsPagedResponse

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

### createAsync(PageContext<ListInstanceConfigsRequest,ListInstanceConfigsResponse,InstanceConfig> context, ApiFuture<ListInstanceConfigsResponse> futureResponse)

```
public static ApiFuture<InstanceAdminClient.ListInstanceConfigsPagedResponse> createAsync(PageContext<ListInstanceConfigsRequest,ListInstanceConfigsResponse,InstanceConfig> context, ApiFuture<ListInstanceConfigsResponse> futureResponse)
```

**Parameters**

**Name**

**Description**

context

`[PageContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[ListInstanceConfigsRequest](/java/docs/reference/google-cloud-spanner/6.19.1/com.google.spanner.admin.instance.v1.ListInstanceConfigsRequest),[ListInstanceConfigsResponse](/java/docs/reference/google-cloud-spanner/6.19.1/com.google.spanner.admin.instance.v1.ListInstanceConfigsResponse),[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.19.1/com.google.spanner.admin.instance.v1.InstanceConfig)>`  

futureResponse

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListInstanceConfigsResponse](/java/docs/reference/google-cloud-spanner/6.19.1/com.google.spanner.admin.instance.v1.ListInstanceConfigsResponse)>`  

**Returns**

**Type**

**Description**

[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListInstanceConfigsPagedResponse](/java/docs/reference/google-cloud-spanner/6.19.1/com.google.cloud.spanner.admin.instance.v1.InstanceAdminClient.ListInstanceConfigsPagedResponse)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
