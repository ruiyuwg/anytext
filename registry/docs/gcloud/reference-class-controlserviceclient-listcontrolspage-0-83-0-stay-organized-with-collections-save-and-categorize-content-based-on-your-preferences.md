-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ControlServiceClient.ListControlsPage (0.83.0) Stay organized with collections Save and categorize content based on your preferences.

0.83.0 (latest) 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.70.0 0.69.0 0.68.0 0.66.0 0.64.0 0.63.0 0.60.0 0.59.0 0.58.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static class ControlServiceClient.ListControlsPage extends AbstractPage<ListControlsRequest,ListControlsResponse,Control,ControlServiceClient.ListControlsPage>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractPage](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html) \> ControlServiceClient.ListControlsPage

## Inherited Members

[AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT)](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPage_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__ResponseT_)

[AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>)](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPageAsync_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__com_google_api_core_ApiFuture_ResponseT__)

[AbstractPage.getNextPage()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPage__)

[AbstractPage.getNextPage(int)](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPage_int_)

[AbstractPage.getNextPageAsync()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPageAsync__)

[AbstractPage.getNextPageToken()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getNextPageToken__)

[AbstractPage.getPageElementCount()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getPageElementCount__)

[AbstractPage.getRequest()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getRequest__)

[AbstractPage.getResponse()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getResponse__)

[AbstractPage.getValues()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_getValues__)

[AbstractPage.hasNextPage()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_hasNextPage__)

[AbstractPage.iterateAll()](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_iterateAll__)

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

### createPage(PageContext<ListControlsRequest,ListControlsResponse,Control> context, ListControlsResponse response)

```
protected ControlServiceClient.ListControlsPage createPage(PageContext<ListControlsRequest,ListControlsResponse,Control> context, ListControlsResponse response)
```

**Parameters**

**Name**

**Description**

`context`

`[PageContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[ListControlsRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ListControlsRequest),[ListControlsResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ListControlsResponse),[Control](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.Control)>`  

`response`

`[ListControlsResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ListControlsResponse)`  

**Returns**

**Type**

**Description**

`[ControlServiceClient.ListControlsPage](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ControlServiceClient.ListControlsPage)`

**Overrides**

[AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response)](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPage_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__ResponseT_)

### createPageAsync(PageContext<ListControlsRequest,ListControlsResponse,Control> context, ApiFuture<ListControlsResponse> futureResponse)

```
public ApiFuture<ControlServiceClient.ListControlsPage> createPageAsync(PageContext<ListControlsRequest,ListControlsResponse,Control> context, ApiFuture<ListControlsResponse> futureResponse)
```

**Parameters**

**Name**

**Description**

`context`

`[PageContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[ListControlsRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ListControlsRequest),[ListControlsResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ListControlsResponse),[Control](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.Control)>`  

`futureResponse`

`[ApiFuture](https://docs.cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListControlsResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ListControlsResponse)>`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://docs.cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListControlsPage](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1beta.ControlServiceClient.ListControlsPage)>`

**Overrides**

[AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse)](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPage.html#com_google_api_gax_paging_AbstractPage_createPageAsync_com_google_api_gax_rpc_PageContext_RequestT_ResponseT_ResourceT__com_google_api_core_ApiFuture_ResponseT__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
