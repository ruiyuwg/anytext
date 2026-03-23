-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection (0.22.0) Stay organized with collections Save and categorize content based on your preferences.

0.55.0 (latest) 0.53.0 0.51.0 0.50.0 0.48.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.36.0 0.35.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static class SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection extends AbstractFixedSizeCollection<ListEffectiveEventThreatDetectionCustomModulesRequest,ListEffectiveEventThreatDetectionCustomModulesResponse,EffectiveEventThreatDetectionCustomModule,SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesPage,SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractFixedSizeCollection](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html) \> SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection

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

### createCollection(List<SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesPage> pages, int collectionSize)

```
protected SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection createCollection(List<SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesPage> pages, int collectionSize)
```

**Parameters**

**Name**

**Description**

`pages`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ListEffectiveEventThreatDetectionCustomModulesPage](/java/docs/reference/google-cloud-securitycentermanagement/0.22.0/com.google.cloud.securitycentermanagement.v1.SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesPage)>`  

`collectionSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection](/java/docs/reference/google-cloud-securitycentermanagement/0.22.0/com.google.cloud.securitycentermanagement.v1.SecurityCenterManagementClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection)`

**Overrides**

[AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.AbstractFixedSizeCollection.html#com_google_api_gax_paging_AbstractFixedSizeCollection_createCollection_java_util_List_PageT__int_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
