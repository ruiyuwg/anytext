-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class QueryServiceClient.QueryTimeSeriesPage (3.54.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public static class QueryServiceClient.QueryTimeSeriesPage extends AbstractPage<QueryTimeSeriesRequest,QueryTimeSeriesResponse,TimeSeriesData,QueryServiceClient.QueryTimeSeriesPage>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractPage](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html) \> QueryServiceClient.QueryTimeSeriesPage

## Inherited Members

[AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPage_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__ResponseT_)

[AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPageAsync_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__com_google_api_core_ApiFuture_ResponseT__)

[AbstractPage.getNextPage()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPage__)

[AbstractPage.getNextPage(int)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPage_int_)

[AbstractPage.getNextPageAsync()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPageAsync__)

[AbstractPage.getNextPageToken()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPageToken__)

[AbstractPage.getPageElementCount()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getPageElementCount__)

[AbstractPage.getRequest()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getRequest__)

[AbstractPage.getResponse()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getResponse__)

[AbstractPage.getValues()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getValues__)

[AbstractPage.hasNextPage()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_hasNextPage__)

[AbstractPage.iterateAll()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_iterateAll__)

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

## Methods

### createPage(PageContext<QueryTimeSeriesRequest,QueryTimeSeriesResponse,TimeSeriesData> context, QueryTimeSeriesResponse response)

```
protected QueryServiceClient.QueryTimeSeriesPage createPage(PageContext<QueryTimeSeriesRequest,QueryTimeSeriesResponse,TimeSeriesData> context, QueryTimeSeriesResponse response)
```

**Parameters**

**Name**

**Description**

`context`

`[PageContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[QueryTimeSeriesRequest](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.QueryTimeSeriesRequest),[QueryTimeSeriesResponse](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.QueryTimeSeriesResponse),[TimeSeriesData](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.TimeSeriesData)>`  

`response`

`[QueryTimeSeriesResponse](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.QueryTimeSeriesResponse)`  

**Returns**

**Type**

**Description**

`[QueryServiceClient.QueryTimeSeriesPage](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.cloud.monitoring.v3.QueryServiceClient.QueryTimeSeriesPage)`

**Overrides**

[AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPage_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__ResponseT_)

### createPageAsync(PageContext<QueryTimeSeriesRequest,QueryTimeSeriesResponse,TimeSeriesData> context, ApiFuture<QueryTimeSeriesResponse> futureResponse)

```
public ApiFuture<QueryServiceClient.QueryTimeSeriesPage> createPageAsync(PageContext<QueryTimeSeriesRequest,QueryTimeSeriesResponse,TimeSeriesData> context, ApiFuture<QueryTimeSeriesResponse> futureResponse)
```

**Parameters**

**Name**

**Description**

`context`

`[PageContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[QueryTimeSeriesRequest](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.QueryTimeSeriesRequest),[QueryTimeSeriesResponse](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.QueryTimeSeriesResponse),[TimeSeriesData](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.TimeSeriesData)>`  

`futureResponse`

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[QueryTimeSeriesResponse](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.monitoring.v3.QueryTimeSeriesResponse)>`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[QueryTimeSeriesPage](/java/docs/reference/google-cloud-monitoring/3.54.0/com.google.cloud.monitoring.v3.QueryServiceClient.QueryTimeSeriesPage)>`

**Overrides**

[AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPageAsync_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__com_google_api_core_ApiFuture_ResponseT__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
