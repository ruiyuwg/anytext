-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListAzureNodePoolsResponseOrBuilder (0.27.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public interface ListAzureNodePoolsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAzureNodePools(int index)

```
public abstract AzureNodePool getAzureNodePools(int index)
```

A list of AzureNodePool resources in the specified `AzureCluster`.

`repeated .google.cloud.gkemulticloud.v1.AzureNodePool azure_node_pools = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AzureNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.27.0/com.google.cloud.gkemulticloud.v1.AzureNodePool)`

### getAzureNodePoolsCount()

```
public abstract int getAzureNodePoolsCount()
```

A list of AzureNodePool resources in the specified `AzureCluster`.

`repeated .google.cloud.gkemulticloud.v1.AzureNodePool azure_node_pools = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAzureNodePoolsList()

```
public abstract List<AzureNodePool> getAzureNodePoolsList()
```

A list of AzureNodePool resources in the specified `AzureCluster`.

`repeated .google.cloud.gkemulticloud.v1.AzureNodePool azure_node_pools = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[AzureNodePool](/java/docs/reference/google-cloud-gke-multi-cloud/0.27.0/com.google.cloud.gkemulticloud.v1.AzureNodePool)>`

### getAzureNodePoolsOrBuilder(int index)

```
public abstract AzureNodePoolOrBuilder getAzureNodePoolsOrBuilder(int index)
```

A list of AzureNodePool resources in the specified `AzureCluster`.

`repeated .google.cloud.gkemulticloud.v1.AzureNodePool azure_node_pools = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AzureNodePoolOrBuilder](/java/docs/reference/google-cloud-gke-multi-cloud/0.27.0/com.google.cloud.gkemulticloud.v1.AzureNodePoolOrBuilder)`

### getAzureNodePoolsOrBuilderList()

```
public abstract List<? extends AzureNodePoolOrBuilder> getAzureNodePoolsOrBuilderList()
```

A list of AzureNodePool resources in the specified `AzureCluster`.

`repeated .google.cloud.gkemulticloud.v1.AzureNodePool azure_node_pools = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.gkemulticloud.v1.AzureNodePoolOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

Token to retrieve the next page of results, or empty if there are no more results in the list.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

Token to retrieve the next page of results, or empty if there are no more results in the list.

`string next_page_token = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
