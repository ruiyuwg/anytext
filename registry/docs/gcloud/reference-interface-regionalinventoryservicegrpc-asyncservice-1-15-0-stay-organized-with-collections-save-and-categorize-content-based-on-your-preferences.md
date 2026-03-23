-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RegionalInventoryServiceGrpc.AsyncService (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public static interface RegionalInventoryServiceGrpc.AsyncService
```

Service to manage regional inventory for products. There is also separate `regions` resource and API to manage regions definitions.

## Methods

### deleteRegionalInventory(DeleteRegionalInventoryRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteRegionalInventory(DeleteRegionalInventoryRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the specified `RegionalInventory` resource from the given product in your merchant account. It might take up to an hour for the `RegionalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.

**Parameters**

**Name**

**Description**

`request`

`[DeleteRegionalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.DeleteRegionalInventoryRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### insertRegionalInventory(InsertRegionalInventoryRequest request, StreamObserver<RegionalInventory> responseObserver)

```
public default void insertRegionalInventory(InsertRegionalInventoryRequest request, StreamObserver<RegionalInventory> responseObserver)
```

Inserts a `RegionalInventory` to a given product in your merchant account. Replaces the full `RegionalInventory` resource if an entry with the same `region` already exists for the product. It might take up to 30 minutes for the new or updated `RegionalInventory` resource to appear in products.

**Parameters**

**Name**

**Description**

`request`

`[InsertRegionalInventoryRequest](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.InsertRegionalInventoryRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[RegionalInventory](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.RegionalInventory)>`  

### listRegionalInventories(ListRegionalInventoriesRequest request, StreamObserver<ListRegionalInventoriesResponse> responseObserver)

```
public default void listRegionalInventories(ListRegionalInventoriesRequest request, StreamObserver<ListRegionalInventoriesResponse> responseObserver)
```

Lists the `RegionalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `RegionalInventory` resources are listed per product for a given account.

**Parameters**

**Name**

**Description**

`request`

`[ListRegionalInventoriesRequest](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.ListRegionalInventoriesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListRegionalInventoriesResponse](/java/docs/reference/google-shopping-merchant-inventories/latest/com.google.shopping.merchant.inventories.v1.ListRegionalInventoriesResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
