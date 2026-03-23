-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TopicAdminClient.ListTopicsFixedSizeCollection (1.127.3) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public static class TopicAdminClient.ListTopicsFixedSizeCollection extends AbstractFixedSizeCollection<ListTopicsRequest,ListTopicsResponse,Topic,TopicAdminClient.ListTopicsPage,TopicAdminClient.ListTopicsFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractFixedSizeCollection](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html) \> TopicAdminClient.ListTopicsFixedSizeCollection

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

### createCollection(List<TopicAdminClient.ListTopicsPage> pages, int collectionSize)

```
protected TopicAdminClient.ListTopicsFixedSizeCollection createCollection(List<TopicAdminClient.ListTopicsPage> pages, int collectionSize)
```

**Parameters**

**Name**

**Description**

`pages`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ListTopicsPage](/java/docs/reference/google-cloud-pubsub/1.127.3/com.google.cloud.pubsub.v1.TopicAdminClient.ListTopicsPage)>`  

`collectionSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TopicAdminClient.ListTopicsFixedSizeCollection](/java/docs/reference/google-cloud-pubsub/1.127.3/com.google.cloud.pubsub.v1.TopicAdminClient.ListTopicsFixedSizeCollection)`

**Overrides**

[AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_createCollection_java_util_List_PageT__int_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
