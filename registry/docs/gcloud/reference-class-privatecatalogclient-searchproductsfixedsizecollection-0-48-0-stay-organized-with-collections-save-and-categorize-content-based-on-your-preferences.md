-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PrivateCatalogClient.SearchProductsFixedSizeCollection (0.48.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.7

```
public static class PrivateCatalogClient.SearchProductsFixedSizeCollection extends AbstractFixedSizeCollection<SearchProductsRequest,SearchProductsResponse,Product,PrivateCatalogClient.SearchProductsPage,PrivateCatalogClient.SearchProductsFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractFixedSizeCollection](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html) \> PrivateCatalogClient.SearchProductsFixedSizeCollection

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

### createCollection(List<PrivateCatalogClient.SearchProductsPage> pages, int collectionSize)

```
protected PrivateCatalogClient.SearchProductsFixedSizeCollection createCollection(List<PrivateCatalogClient.SearchProductsPage> pages, int collectionSize)
```

**Parameters**

**Name**

**Description**

`pages`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SearchProductsPage](/java/docs/reference/google-cloud-private-catalog/0.48.0/com.google.cloud.privatecatalog.v1beta1.PrivateCatalogClient.SearchProductsPage)>`  

`collectionSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PrivateCatalogClient.SearchProductsFixedSizeCollection](/java/docs/reference/google-cloud-private-catalog/0.48.0/com.google.cloud.privatecatalog.v1beta1.PrivateCatalogClient.SearchProductsFixedSizeCollection)`

**Overrides**

[AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_createCollection_java_util_List_PageT__int_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
