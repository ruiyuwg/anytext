-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServiceManagerClient.ListServiceConfigsFixedSizeCollection (3.25.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.7 3.0.1 2.1.7

```
public static class ServiceManagerClient.ListServiceConfigsFixedSizeCollection extends AbstractFixedSizeCollection<ListServiceConfigsRequest,ListServiceConfigsResponse,Service,ServiceManagerClient.ListServiceConfigsPage,ServiceManagerClient.ListServiceConfigsFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractFixedSizeCollection](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html) \> ServiceManagerClient.ListServiceConfigsFixedSizeCollection

## Inherited Members

[AbstractFixedSizeCollection.createCollection(List<PageT>,int)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_createCollection_java_util_List_PageT__int_)

[AbstractFixedSizeCollection.getCollectionSize()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_getCollectionSize__)

[AbstractFixedSizeCollection.getNextCollection()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_getNextCollection__)

[AbstractFixedSizeCollection.getNextPageToken()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_getNextPageToken__)

[AbstractFixedSizeCollection.getValues()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_getValues__)

[AbstractFixedSizeCollection.hasNextCollection()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_hasNextCollection__)

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

### createCollection(List<ServiceManagerClient.ListServiceConfigsPage> pages, int collectionSize)

```
protected ServiceManagerClient.ListServiceConfigsFixedSizeCollection createCollection(List<ServiceManagerClient.ListServiceConfigsPage> pages, int collectionSize)
```

**Parameters**

**Name**

**Description**

`pages`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ListServiceConfigsPage](/java/docs/reference/google-cloud-service-management/3.25.0/com.google.cloud.api.servicemanagement.v1.ServiceManagerClient.ListServiceConfigsPage)>`  

`collectionSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ServiceManagerClient.ListServiceConfigsFixedSizeCollection](/java/docs/reference/google-cloud-service-management/3.25.0/com.google.cloud.api.servicemanagement.v1.ServiceManagerClient.ListServiceConfigsFixedSizeCollection)`

**Overrides**

[AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_createCollection_java_util_List_PageT__int_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
