-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TelcoAutomationClient.ListHydratedDeploymentsPagedResponse (0.25.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static class TelcoAutomationClient.ListHydratedDeploymentsPagedResponse extends AbstractPagedListResponse<ListHydratedDeploymentsRequest,ListHydratedDeploymentsResponse,HydratedDeployment,TelcoAutomationClient.ListHydratedDeploymentsPage,TelcoAutomationClient.ListHydratedDeploymentsFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractPagedListResponse](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractPagedListResponse.html) \> TelcoAutomationClient.ListHydratedDeploymentsPagedResponse

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

### createAsync(PageContext<ListHydratedDeploymentsRequest,ListHydratedDeploymentsResponse,HydratedDeployment> context, ApiFuture<ListHydratedDeploymentsResponse> futureResponse)

```
public static ApiFuture<TelcoAutomationClient.ListHydratedDeploymentsPagedResponse> createAsync(PageContext<ListHydratedDeploymentsRequest,ListHydratedDeploymentsResponse,HydratedDeployment> context, ApiFuture<ListHydratedDeploymentsResponse> futureResponse)
```

**Parameters**

**Name**

**Description**

`context`

`[PageContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PageContext.html)<[ListHydratedDeploymentsRequest](/java/docs/reference/google-cloud-telcoautomation/0.25.0/com.google.cloud.telcoautomation.v1.ListHydratedDeploymentsRequest),[ListHydratedDeploymentsResponse](/java/docs/reference/google-cloud-telcoautomation/0.25.0/com.google.cloud.telcoautomation.v1.ListHydratedDeploymentsResponse),[HydratedDeployment](/java/docs/reference/google-cloud-telcoautomation/0.25.0/com.google.cloud.telcoautomation.v1.HydratedDeployment)>`  

`futureResponse`

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListHydratedDeploymentsResponse](/java/docs/reference/google-cloud-telcoautomation/0.25.0/com.google.cloud.telcoautomation.v1.ListHydratedDeploymentsResponse)>`  

**Returns**

**Type**

**Description**

`[ApiFuture](https://cloud.google.com/java/docs/reference/api-common/latest/com.google.api.core.ApiFuture.html)<[ListHydratedDeploymentsPagedResponse](/java/docs/reference/google-cloud-telcoautomation/0.25.0/com.google.cloud.telcoautomation.v1.TelcoAutomationClient.ListHydratedDeploymentsPagedResponse)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
