-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class EntityTypesClient (4.93.0) Stay organized with collections Save and categorize content based on your preferences.

4.93.0 (latest) 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-dialogflow/google-cloud-dialogflow/src/main/java/com/google/cloud/dialogflow/v2beta1/EntityTypesClient.java)

[Product Reference](https://cloud.google.com/dialogflow-enterprise/)

Service Description: Service for managing EntityTypes.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityTypeName name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
   EntityType response = entityTypesClient.getEntityType(name);
 }
 
```
 

Note: close() needs to be called on the EntityTypesClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

ListEntityTypes

Returns the list of all entity types in the specified agent.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listEntityTypes(ListEntityTypesRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listEntityTypes(AgentName parent)
    
-   listEntityTypes(String parent)
    
-   listEntityTypes(AgentName parent, String languageCode)
    
-   listEntityTypes(String parent, String languageCode)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listEntityTypesPagedCallable()
    
-   listEntityTypesCallable()
    

GetEntityType

Retrieves the specified entity type.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getEntityType(GetEntityTypeRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getEntityType(EntityTypeName name)
    
-   getEntityType(String name)
    
-   getEntityType(EntityTypeName name, String languageCode)
    
-   getEntityType(String name, String languageCode)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getEntityTypeCallable()
    

CreateEntityType

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createEntityType(CreateEntityTypeRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   createEntityType(AgentName parent, EntityType entityType)
    
-   createEntityType(String parent, EntityType entityType)
    
-   createEntityType(AgentName parent, EntityType entityType, String languageCode)
    
-   createEntityType(String parent, EntityType entityType, String languageCode)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createEntityTypeCallable()
    

UpdateEntityType

Updates the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateEntityType(UpdateEntityTypeRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   updateEntityType(EntityType entityType)
    
-   updateEntityType(EntityType entityType, String languageCode)
    
-   updateEntityType(EntityType entityType, String languageCode, FieldMask updateMask)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateEntityTypeCallable()
    

DeleteEntityType

Deletes the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteEntityType(DeleteEntityTypeRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   deleteEntityType(EntityTypeName name)
    
-   deleteEntityType(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteEntityTypeCallable()
    

BatchUpdateEntityTypes

Updates/Creates multiple entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchUpdateEntityTypesAsync(BatchUpdateEntityTypesRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchUpdateEntityTypesOperationCallable()
    
-   batchUpdateEntityTypesCallable()
    

BatchDeleteEntityTypes

Deletes entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchDeleteEntityTypesAsync(BatchDeleteEntityTypesRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchDeleteEntityTypesAsync(AgentName parent, List<String> entityTypeNames)
    
-   batchDeleteEntityTypesAsync(String parent, List<String> entityTypeNames)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchDeleteEntityTypesOperationCallable()
    
-   batchDeleteEntityTypesCallable()
    

BatchCreateEntities

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchCreateEntitiesAsync(BatchCreateEntitiesRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchCreateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities)
    
-   batchCreateEntitiesAsync(String parent, List<EntityType.Entity> entities)
    
-   batchCreateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities, String languageCode)
    
-   batchCreateEntitiesAsync(String parent, List<EntityType.Entity> entities, String languageCode)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchCreateEntitiesOperationCallable()
    
-   batchCreateEntitiesCallable()
    

BatchUpdateEntities

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchUpdateEntitiesAsync(BatchUpdateEntitiesRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchUpdateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities)
    
-   batchUpdateEntitiesAsync(String parent, List<EntityType.Entity> entities)
    
-   batchUpdateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities, String languageCode)
    
-   batchUpdateEntitiesAsync(String parent, List<EntityType.Entity> entities, String languageCode)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchUpdateEntitiesOperationCallable()
    
-   batchUpdateEntitiesCallable()
    

BatchDeleteEntities

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   batchDeleteEntitiesAsync(BatchDeleteEntitiesRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   batchDeleteEntitiesAsync(EntityTypeName parent, List<String> entityValues)
    
-   batchDeleteEntitiesAsync(String parent, List<String> entityValues)
    
-   batchDeleteEntitiesAsync(EntityTypeName parent, List<String> entityValues, String languageCode)
    
-   batchDeleteEntitiesAsync(String parent, List<String> entityValues, String languageCode)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   batchDeleteEntitiesOperationCallable()
    
-   batchDeleteEntitiesCallable()
    

ListLocations

Lists information about the supported locations for this service.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listLocations(ListLocationsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listLocationsPagedCallable()
    
-   listLocationsCallable()
    

GetLocation

Gets information about a location.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getLocation(GetLocationRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getLocationCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of EntityTypesSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EntityTypesSettings entityTypesSettings =
     EntityTypesSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 EntityTypesClient entityTypesClient = EntityTypesClient.create(entityTypesSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EntityTypesSettings entityTypesSettings =
     EntityTypesSettings.newBuilder().setEndpoint(myEndpoint).build();
 EntityTypesClient entityTypesClient = EntityTypesClient.create(entityTypesSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 EntityTypesSettings entityTypesSettings = EntityTypesSettings.newHttpJsonBuilder().build();
 EntityTypesClient entityTypesClient = EntityTypesClient.create(entityTypesSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> EntityTypesClient

## Static Methods

### create()

```
public static final EntityTypesClient create()
```

Constructs an instance of EntityTypesClient with default settings.

**Returns**

**Type**

**Description**

`[EntityTypesClient](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(EntityTypesSettings settings)

```
public static final EntityTypesClient create(EntityTypesSettings settings)
```

Constructs an instance of EntityTypesClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[EntityTypesSettings](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesSettings)`  

**Returns**

**Type**

**Description**

`[EntityTypesClient](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(EntityTypesStub stub)

```
public static final EntityTypesClient create(EntityTypesStub stub)
```

Constructs an instance of EntityTypesClient, using the given stub for making calls. This is for advanced usage - prefer using create(EntityTypesSettings).

**Parameter**

**Name**

**Description**

`stub`

`[EntityTypesStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.stub.EntityTypesStub)`  

**Returns**

**Type**

**Description**

`[EntityTypesClient](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient)`

## Constructors

### EntityTypesClient(EntityTypesSettings settings)

```
protected EntityTypesClient(EntityTypesSettings settings)
```

Constructs an instance of EntityTypesClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[EntityTypesSettings](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesSettings)`  

### EntityTypesClient(EntityTypesStub stub)

```
protected EntityTypesClient(EntityTypesStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[EntityTypesStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.stub.EntityTypesStub)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### batchCreateEntitiesAsync(BatchCreateEntitiesRequest request)

```
public final OperationFuture<Empty,Struct> batchCreateEntitiesAsync(BatchCreateEntitiesRequest request)
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchCreateEntitiesRequest request =
        BatchCreateEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntities(new ArrayList<EntityType.Entity>())
            .setLanguageCode("languageCode-2092349083")
            .build();
    entityTypesClient.batchCreateEntitiesAsync(request).get();
    }
    ```
    

**Parameter**

**Name**

**Description**

`request`

`[BatchCreateEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchCreateEntitiesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchCreateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities)

```
public final OperationFuture<Empty,Struct> batchCreateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities)
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    EntityTypeName parent = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
    List<EntityType.Entity> entities = new ArrayList<>();
    entityTypesClient.batchCreateEntitiesAsync(parent, entities).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchCreateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities, String languageCode)

```
public final OperationFuture<Empty,Struct> batchCreateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities, String languageCode)
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    EntityTypeName parent = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
    List<EntityType.Entity> entities = new ArrayList<>();
    String languageCode = "languageCode-2092349083";
    entityTypesClient.batchCreateEntitiesAsync(parent, entities, languageCode).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to create.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchCreateEntitiesAsync(String parent, List<EntityType.Entity> entities)

```
public final OperationFuture<Empty,Struct> batchCreateEntitiesAsync(String parent, List<EntityType.Entity> entities)
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent =
        EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
    List<EntityType.Entity> entities = new ArrayList<>();
    entityTypesClient.batchCreateEntitiesAsync(parent, entities).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchCreateEntitiesAsync(String parent, List<EntityType.Entity> entities, String languageCode)

```
public final OperationFuture<Empty,Struct> batchCreateEntitiesAsync(String parent, List<EntityType.Entity> entities, String languageCode)
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent =
        EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
    List<EntityType.Entity> entities = new ArrayList<>();
    String languageCode = "languageCode-2092349083";
    entityTypesClient.batchCreateEntitiesAsync(parent, entities, languageCode).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to create.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchCreateEntitiesCallable()

```
public final UnaryCallable<BatchCreateEntitiesRequest,Operation> batchCreateEntitiesCallable()
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchCreateEntitiesRequest request =
        BatchCreateEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntities(new ArrayList<EntityType.Entity>())
            .setLanguageCode("languageCode-2092349083")
            .build();
    ApiFuture<Operation> future =
        entityTypesClient.batchCreateEntitiesCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchCreateEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchCreateEntitiesRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchCreateEntitiesOperationCallable()

```
public final OperationCallable<BatchCreateEntitiesRequest,Empty,Struct> batchCreateEntitiesOperationCallable()
```

Creates multiple new entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchCreateEntitiesRequest request =
        BatchCreateEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntities(new ArrayList<EntityType.Entity>())
            .setLanguageCode("languageCode-2092349083")
            .build();
    OperationFuture<Empty, Struct> future =
        entityTypesClient.batchCreateEntitiesOperationCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchCreateEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchCreateEntitiesRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntitiesAsync(BatchDeleteEntitiesRequest request)

```
public final OperationFuture<Empty,Struct> batchDeleteEntitiesAsync(BatchDeleteEntitiesRequest request)
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchDeleteEntitiesRequest request =
        BatchDeleteEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntityValues(new ArrayList<String>())
            .setLanguageCode("languageCode-2092349083")
            .build();
    entityTypesClient.batchDeleteEntitiesAsync(request).get();
    }
    ```
    

**Parameter**

**Name**

**Description**

`request`

`[BatchDeleteEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchDeleteEntitiesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntitiesAsync(EntityTypeName parent, List<String> entityValues)

```
public final OperationFuture<Empty,Struct> batchDeleteEntitiesAsync(EntityTypeName parent, List<String> entityValues)
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    EntityTypeName parent = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
    List<String> entityValues = new ArrayList<>();
    entityTypesClient.batchDeleteEntitiesAsync(parent, entityValues).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to delete entries for. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entityValues`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The reference `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don't start with `projects/<Project ID>`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntitiesAsync(EntityTypeName parent, List<String> entityValues, String languageCode)

```
public final OperationFuture<Empty,Struct> batchDeleteEntitiesAsync(EntityTypeName parent, List<String> entityValues, String languageCode)
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    EntityTypeName parent = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
    List<String> entityValues = new ArrayList<>();
    String languageCode = "languageCode-2092349083";
    entityTypesClient.batchDeleteEntitiesAsync(parent, entityValues, languageCode).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to delete entries for. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entityValues`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The reference `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don't start with `projects/<Project ID>`.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntitiesAsync(String parent, List<String> entityValues)

```
public final OperationFuture<Empty,Struct> batchDeleteEntitiesAsync(String parent, List<String> entityValues)
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent =
        EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
    List<String> entityValues = new ArrayList<>();
    entityTypesClient.batchDeleteEntitiesAsync(parent, entityValues).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to delete entries for. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entityValues`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The reference `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don't start with `projects/<Project ID>`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntitiesAsync(String parent, List<String> entityValues, String languageCode)

```
public final OperationFuture<Empty,Struct> batchDeleteEntitiesAsync(String parent, List<String> entityValues, String languageCode)
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent =
        EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
    List<String> entityValues = new ArrayList<>();
    String languageCode = "languageCode-2092349083";
    entityTypesClient.batchDeleteEntitiesAsync(parent, entityValues, languageCode).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to delete entries for. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entityValues`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The reference `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don't start with `projects/<Project ID>`.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntitiesCallable()

```
public final UnaryCallable<BatchDeleteEntitiesRequest,Operation> batchDeleteEntitiesCallable()
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchDeleteEntitiesRequest request =
        BatchDeleteEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntityValues(new ArrayList<String>())
            .setLanguageCode("languageCode-2092349083")
            .build();
    ApiFuture<Operation> future =
        entityTypesClient.batchDeleteEntitiesCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchDeleteEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchDeleteEntitiesRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchDeleteEntitiesOperationCallable()

```
public final OperationCallable<BatchDeleteEntitiesRequest,Empty,Struct> batchDeleteEntitiesOperationCallable()
```

Deletes entities in the specified entity type.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchDeleteEntitiesRequest request =
        BatchDeleteEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntityValues(new ArrayList<String>())
            .setLanguageCode("languageCode-2092349083")
            .build();
    OperationFuture<Empty, Struct> future =
        entityTypesClient.batchDeleteEntitiesOperationCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchDeleteEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchDeleteEntitiesRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntityTypesAsync(AgentName parent, List<String> entityTypeNames)

```
public final OperationFuture<Empty,Struct> batchDeleteEntityTypesAsync(AgentName parent, List<String> entityTypeNames)
```

Deletes entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    AgentName parent = AgentName.ofProjectName("[PROJECT]");
    List<String> entityTypeNames = new ArrayList<>();
    entityTypesClient.batchDeleteEntityTypesAsync(parent, entityTypeNames).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[AgentName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentName)`  

Required. The name of the agent to delete all entities types for. Supported formats: - `projects/<Project ID>/agent`, - `projects/<Project ID>/locations/<Location ID>/agent`.

`entityTypeNames`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The names entity types to delete. All names must point to the same agent as `parent`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntityTypesAsync(BatchDeleteEntityTypesRequest request)

```
public final OperationFuture<Empty,Struct> batchDeleteEntityTypesAsync(BatchDeleteEntityTypesRequest request)
```

Deletes entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchDeleteEntityTypesRequest request =
        BatchDeleteEntityTypesRequest.newBuilder()
            .setParent(AgentName.ofProjectName("[PROJECT]").toString())
            .addAllEntityTypeNames(new ArrayList<String>())
            .build();
    entityTypesClient.batchDeleteEntityTypesAsync(request).get();
    }
    ```
    

**Parameter**

**Name**

**Description**

`request`

`[BatchDeleteEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchDeleteEntityTypesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntityTypesAsync(String parent, List<String> entityTypeNames)

```
public final OperationFuture<Empty,Struct> batchDeleteEntityTypesAsync(String parent, List<String> entityTypeNames)
```

Deletes entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent = AgentName.ofProjectName("[PROJECT]").toString();
    List<String> entityTypeNames = new ArrayList<>();
    entityTypesClient.batchDeleteEntityTypesAsync(parent, entityTypeNames).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the agent to delete all entities types for. Supported formats: - `projects/<Project ID>/agent`, - `projects/<Project ID>/locations/<Location ID>/agent`.

`entityTypeNames`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

Required. The names entity types to delete. All names must point to the same agent as `parent`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchDeleteEntityTypesCallable()

```
public final UnaryCallable<BatchDeleteEntityTypesRequest,Operation> batchDeleteEntityTypesCallable()
```

Deletes entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchDeleteEntityTypesRequest request =
        BatchDeleteEntityTypesRequest.newBuilder()
            .setParent(AgentName.ofProjectName("[PROJECT]").toString())
            .addAllEntityTypeNames(new ArrayList<String>())
            .build();
    ApiFuture<Operation> future =
        entityTypesClient.batchDeleteEntityTypesCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchDeleteEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchDeleteEntityTypesRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchDeleteEntityTypesOperationCallable()

```
public final OperationCallable<BatchDeleteEntityTypesRequest,Empty,Struct> batchDeleteEntityTypesOperationCallable()
```

Deletes entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchDeleteEntityTypesRequest request =
        BatchDeleteEntityTypesRequest.newBuilder()
            .setParent(AgentName.ofProjectName("[PROJECT]").toString())
            .addAllEntityTypeNames(new ArrayList<String>())
            .build();
    OperationFuture<Empty, Struct> future =
        entityTypesClient.batchDeleteEntityTypesOperationCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchDeleteEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchDeleteEntityTypesRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntitiesAsync(BatchUpdateEntitiesRequest request)

```
public final OperationFuture<Empty,Struct> batchUpdateEntitiesAsync(BatchUpdateEntitiesRequest request)
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchUpdateEntitiesRequest request =
        BatchUpdateEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntities(new ArrayList<EntityType.Entity>())
            .setLanguageCode("languageCode-2092349083")
            .setUpdateMask(FieldMask.newBuilder().build())
            .build();
    entityTypesClient.batchUpdateEntitiesAsync(request).get();
    }
    ```
    

**Parameter**

**Name**

**Description**

`request`

`[BatchUpdateEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntitiesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities)

```
public final OperationFuture<Empty,Struct> batchUpdateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities)
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    EntityTypeName parent = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
    List<EntityType.Entity> entities = new ArrayList<>();
    entityTypesClient.batchUpdateEntitiesAsync(parent, entities).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to update or create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to update or create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities, String languageCode)

```
public final OperationFuture<Empty,Struct> batchUpdateEntitiesAsync(EntityTypeName parent, List<EntityType.Entity> entities, String languageCode)
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    EntityTypeName parent = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
    List<EntityType.Entity> entities = new ArrayList<>();
    String languageCode = "languageCode-2092349083";
    entityTypesClient.batchUpdateEntitiesAsync(parent, entities, languageCode).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to update or create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to update or create.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntitiesAsync(String parent, List<EntityType.Entity> entities)

```
public final OperationFuture<Empty,Struct> batchUpdateEntitiesAsync(String parent, List<EntityType.Entity> entities)
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent =
        EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
    List<EntityType.Entity> entities = new ArrayList<>();
    entityTypesClient.batchUpdateEntitiesAsync(parent, entities).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to update or create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to update or create.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntitiesAsync(String parent, List<EntityType.Entity> entities, String languageCode)

```
public final OperationFuture<Empty,Struct> batchUpdateEntitiesAsync(String parent, List<EntityType.Entity> entities, String languageCode)
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    String parent =
        EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
    List<EntityType.Entity> entities = new ArrayList<>();
    String languageCode = "languageCode-2092349083";
    entityTypesClient.batchUpdateEntitiesAsync(parent, entities, languageCode).get();
    }
    ```
    

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to update or create entities in. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`entities`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Entity](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType.Entity)>`  

Required. The entities to update or create.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntitiesCallable()

```
public final UnaryCallable<BatchUpdateEntitiesRequest,Operation> batchUpdateEntitiesCallable()
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchUpdateEntitiesRequest request =
        BatchUpdateEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntities(new ArrayList<EntityType.Entity>())
            .setLanguageCode("languageCode-2092349083")
            .setUpdateMask(FieldMask.newBuilder().build())
            .build();
    ApiFuture<Operation> future =
        entityTypesClient.batchUpdateEntitiesCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchUpdateEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntitiesRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchUpdateEntitiesOperationCallable()

```
public final OperationCallable<BatchUpdateEntitiesRequest,Empty,Struct> batchUpdateEntitiesOperationCallable()
```

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchUpdateEntitiesRequest request =
        BatchUpdateEntitiesRequest.newBuilder()
            .setParent(
                EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
            .addAllEntities(new ArrayList<EntityType.Entity>())
            .setLanguageCode("languageCode-2092349083")
            .setUpdateMask(FieldMask.newBuilder().build())
            .build();
    OperationFuture<Empty, Struct> future =
        entityTypesClient.batchUpdateEntitiesOperationCallable().futureCall(request);
    // Do something.
    future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchUpdateEntitiesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntitiesRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntityTypesAsync(BatchUpdateEntityTypesRequest request)

```
public final OperationFuture<BatchUpdateEntityTypesResponse,Struct> batchUpdateEntityTypesAsync(BatchUpdateEntityTypesRequest request)
```

Updates/Creates multiple entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: BatchUpdateEntityTypesResponse
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchUpdateEntityTypesRequest request =
        BatchUpdateEntityTypesRequest.newBuilder()
            .setParent(AgentName.ofProjectName("[PROJECT]").toString())
            .setLanguageCode("languageCode-2092349083")
            .setUpdateMask(FieldMask.newBuilder().build())
            .build();
    BatchUpdateEntityTypesResponse response =
        entityTypesClient.batchUpdateEntityTypesAsync(request).get();
    }
    ```
    

**Parameter**

**Name**

**Description**

`request`

`[BatchUpdateEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[BatchUpdateEntityTypesResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesResponse),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### batchUpdateEntityTypesCallable()

```
public final UnaryCallable<BatchUpdateEntityTypesRequest,Operation> batchUpdateEntityTypesCallable()
```

Updates/Creates multiple entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: BatchUpdateEntityTypesResponse
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchUpdateEntityTypesRequest request =
        BatchUpdateEntityTypesRequest.newBuilder()
            .setParent(AgentName.ofProjectName("[PROJECT]").toString())
            .setLanguageCode("languageCode-2092349083")
            .setUpdateMask(FieldMask.newBuilder().build())
            .build();
    ApiFuture<Operation> future =
        entityTypesClient.batchUpdateEntityTypesCallable().futureCall(request);
    // Do something.
    Operation response = future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[BatchUpdateEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchUpdateEntityTypesOperationCallable()

```
public final OperationCallable<BatchUpdateEntityTypesRequest,BatchUpdateEntityTypesResponse,Struct> batchUpdateEntityTypesOperationCallable()
```

Updates/Creates multiple entity types in the specified agent.

This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields:

\- `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)

-   `response`: BatchUpdateEntityTypesResponse
    
    Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
    
    Sample code:
    
    ```
    
    // This snippet has been automatically generated and should be regarded as a code template only.
    // It will require modifications to work:
    // - It may require correct/in-range values for request initialization.
    // - It may require specifying regional endpoints when creating the service client as shown in
    // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
    try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
    BatchUpdateEntityTypesRequest request =
        BatchUpdateEntityTypesRequest.newBuilder()
            .setParent(AgentName.ofProjectName("[PROJECT]").toString())
            .setLanguageCode("languageCode-2092349083")
            .setUpdateMask(FieldMask.newBuilder().build())
            .build();
    OperationFuture<BatchUpdateEntityTypesResponse, Struct> future =
        entityTypesClient.batchUpdateEntityTypesOperationCallable().futureCall(request);
    // Do something.
    BatchUpdateEntityTypesResponse response = future.get();
    }
    ```
    

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[BatchUpdateEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesRequest),[BatchUpdateEntityTypesResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesResponse),[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)>`

### close()

```
public final void close()
```

### createEntityType(AgentName parent, EntityType entityType)

```
public final EntityType createEntityType(AgentName parent, EntityType entityType)
```

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   AgentName parent = AgentName.ofProjectName("[PROJECT]");
   EntityType entityType = EntityType.newBuilder().build();
   EntityType response = entityTypesClient.createEntityType(parent, entityType);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[AgentName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentName)`  

Required. The agent to create a entity type for. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to create.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### createEntityType(AgentName parent, EntityType entityType, String languageCode)

```
public final EntityType createEntityType(AgentName parent, EntityType entityType, String languageCode)
```

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   AgentName parent = AgentName.ofProjectName("[PROJECT]");
   EntityType entityType = EntityType.newBuilder().build();
   String languageCode = "languageCode-2092349083";
   EntityType response = entityTypesClient.createEntityType(parent, entityType, languageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[AgentName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentName)`  

Required. The agent to create a entity type for. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to create.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### createEntityType(CreateEntityTypeRequest request)

```
public final EntityType createEntityType(CreateEntityTypeRequest request)
```

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   CreateEntityTypeRequest request =
       CreateEntityTypeRequest.newBuilder()
           .setParent(AgentName.ofProjectName("[PROJECT]").toString())
           .setEntityType(EntityType.newBuilder().build())
           .setLanguageCode("languageCode-2092349083")
           .build();
   EntityType response = entityTypesClient.createEntityType(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.CreateEntityTypeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### createEntityType(String parent, EntityType entityType)

```
public final EntityType createEntityType(String parent, EntityType entityType)
```

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String parent = AgentName.ofProjectName("[PROJECT]").toString();
   EntityType entityType = EntityType.newBuilder().build();
   EntityType response = entityTypesClient.createEntityType(parent, entityType);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The agent to create a entity type for. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to create.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### createEntityType(String parent, EntityType entityType, String languageCode)

```
public final EntityType createEntityType(String parent, EntityType entityType, String languageCode)
```

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String parent = AgentName.ofProjectName("[PROJECT]").toString();
   EntityType entityType = EntityType.newBuilder().build();
   String languageCode = "languageCode-2092349083";
   EntityType response = entityTypesClient.createEntityType(parent, entityType, languageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The agent to create a entity type for. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to create.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### createEntityTypeCallable()

```
public final UnaryCallable<CreateEntityTypeRequest,EntityType> createEntityTypeCallable()
```

Creates an entity type in the specified agent.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   CreateEntityTypeRequest request =
       CreateEntityTypeRequest.newBuilder()
           .setParent(AgentName.ofProjectName("[PROJECT]").toString())
           .setEntityType(EntityType.newBuilder().build())
           .setLanguageCode("languageCode-2092349083")
           .build();
   ApiFuture<EntityType> future =
       entityTypesClient.createEntityTypeCallable().futureCall(request);
   // Do something.
   EntityType response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.CreateEntityTypeRequest),[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)>`

### deleteEntityType(DeleteEntityTypeRequest request)

```
public final void deleteEntityType(DeleteEntityTypeRequest request)
```

Deletes the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   DeleteEntityTypeRequest request =
       DeleteEntityTypeRequest.newBuilder()
           .setName(
               EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
           .build();
   entityTypesClient.deleteEntityType(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.DeleteEntityTypeRequest)`  

The request object containing all of the parameters for the API call.

### deleteEntityType(EntityTypeName name)

```
public final void deleteEntityType(EntityTypeName name)
```

Deletes the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityTypeName name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
   entityTypesClient.deleteEntityType(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type to delete. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

### deleteEntityType(String name)

```
public final void deleteEntityType(String name)
```

Deletes the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
   entityTypesClient.deleteEntityType(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type to delete. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

### deleteEntityTypeCallable()

```
public final UnaryCallable<DeleteEntityTypeRequest,Empty> deleteEntityTypeCallable()
```

Deletes the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   DeleteEntityTypeRequest request =
       DeleteEntityTypeRequest.newBuilder()
           .setName(
               EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
           .build();
   ApiFuture<Empty> future = entityTypesClient.deleteEntityTypeCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.DeleteEntityTypeRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getEntityType(EntityTypeName name)

```
public final EntityType getEntityType(EntityTypeName name)
```

Retrieves the specified entity type.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityTypeName name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
   EntityType response = entityTypesClient.getEntityType(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### getEntityType(EntityTypeName name, String languageCode)

```
public final EntityType getEntityType(EntityTypeName name, String languageCode)
```

Retrieves the specified entity type.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityTypeName name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]");
   String languageCode = "languageCode-2092349083";
   EntityType response = entityTypesClient.getEntityType(name, languageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[EntityTypeName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypeName)`  

Required. The name of the entity type. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### getEntityType(GetEntityTypeRequest request)

```
public final EntityType getEntityType(GetEntityTypeRequest request)
```

Retrieves the specified entity type.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   GetEntityTypeRequest request =
       GetEntityTypeRequest.newBuilder()
           .setName(
               EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
           .setLanguageCode("languageCode-2092349083")
           .build();
   EntityType response = entityTypesClient.getEntityType(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.GetEntityTypeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### getEntityType(String name)

```
public final EntityType getEntityType(String name)
```

Retrieves the specified entity type.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
   EntityType response = entityTypesClient.getEntityType(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### getEntityType(String name, String languageCode)

```
public final EntityType getEntityType(String name, String languageCode)
```

Retrieves the specified entity type.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String name = EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString();
   String languageCode = "languageCode-2092349083";
   EntityType response = entityTypesClient.getEntityType(name, languageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The name of the entity type. Supported formats: - `projects/<Project ID>/agent/entityTypes/<Entity Type ID>` - `projects/<Project ID>/locations/<Location ID>/agent/entityTypes/<Entity Type ID>`

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### getEntityTypeCallable()

```
public final UnaryCallable<GetEntityTypeRequest,EntityType> getEntityTypeCallable()
```

Retrieves the specified entity type.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   GetEntityTypeRequest request =
       GetEntityTypeRequest.newBuilder()
           .setName(
               EntityTypeName.ofProjectEntityTypeName("[PROJECT]", "[ENTITY_TYPE]").toString())
           .setLanguageCode("languageCode-2092349083")
           .build();
   ApiFuture<EntityType> future = entityTypesClient.getEntityTypeCallable().futureCall(request);
   // Do something.
   EntityType response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.GetEntityTypeRequest),[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)>`

### getHttpJsonOperationsClient()

```
public final OperationsClient getHttpJsonOperationsClient()
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.longrunning.OperationsClient.html)`

### getLocation(GetLocationRequest request)

```
public final Location getLocation(GetLocationRequest request)
```

Gets information about a location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   GetLocationRequest request = GetLocationRequest.newBuilder().setName("name3373707").build();
   Location response = entityTypesClient.getLocation(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.cloud.location.GetLocationRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`com.google.cloud.location.Location`

### getLocationCallable()

```
public final UnaryCallable<GetLocationRequest,Location> getLocationCallable()
```

Gets information about a location.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   GetLocationRequest request = GetLocationRequest.newBuilder().setName("name3373707").build();
   ApiFuture<Location> future = entityTypesClient.getLocationCallable().futureCall(request);
   // Do something.
   Location response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)`

### getSettings()

```
public final EntityTypesSettings getSettings()
```

**Returns**

**Type**

**Description**

`[EntityTypesSettings](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesSettings)`

### getStub()

```
public EntityTypesStub getStub()
```

**Returns**

**Type**

**Description**

`[EntityTypesStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.stub.EntityTypesStub)`

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### listEntityTypes(AgentName parent)

```
public final EntityTypesClient.ListEntityTypesPagedResponse listEntityTypes(AgentName parent)
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   AgentName parent = AgentName.ofProjectName("[PROJECT]");
   for (EntityType element : entityTypesClient.listEntityTypes(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[AgentName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentName)`  

Required. The agent to list all entity types from. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

**Returns**

**Type**

**Description**

`[EntityTypesClient.ListEntityTypesPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListEntityTypesPagedResponse)`

### listEntityTypes(AgentName parent, String languageCode)

```
public final EntityTypesClient.ListEntityTypesPagedResponse listEntityTypes(AgentName parent, String languageCode)
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   AgentName parent = AgentName.ofProjectName("[PROJECT]");
   String languageCode = "languageCode-2092349083";
   for (EntityType element :
       entityTypesClient.listEntityTypes(parent, languageCode).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[AgentName](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentName)`  

Required. The agent to list all entity types from. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityTypesClient.ListEntityTypesPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListEntityTypesPagedResponse)`

### listEntityTypes(ListEntityTypesRequest request)

```
public final EntityTypesClient.ListEntityTypesPagedResponse listEntityTypes(ListEntityTypesRequest request)
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   ListEntityTypesRequest request =
       ListEntityTypesRequest.newBuilder()
           .setParent(AgentName.ofProjectName("[PROJECT]").toString())
           .setLanguageCode("languageCode-2092349083")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (EntityType element : entityTypesClient.listEntityTypes(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.ListEntityTypesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EntityTypesClient.ListEntityTypesPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListEntityTypesPagedResponse)`

### listEntityTypes(String parent)

```
public final EntityTypesClient.ListEntityTypesPagedResponse listEntityTypes(String parent)
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String parent = AgentName.ofProjectName("[PROJECT]").toString();
   for (EntityType element : entityTypesClient.listEntityTypes(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The agent to list all entity types from. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

**Returns**

**Type**

**Description**

`[EntityTypesClient.ListEntityTypesPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListEntityTypesPagedResponse)`

### listEntityTypes(String parent, String languageCode)

```
public final EntityTypesClient.ListEntityTypesPagedResponse listEntityTypes(String parent, String languageCode)
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   String parent = AgentName.ofProjectName("[PROJECT]").toString();
   String languageCode = "languageCode-2092349083";
   for (EntityType element :
       entityTypesClient.listEntityTypes(parent, languageCode).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The agent to list all entity types from. Supported formats: - `projects/<Project ID>/agent` - `projects/<Project ID>/locations/<Location ID>/agent`

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityTypesClient.ListEntityTypesPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListEntityTypesPagedResponse)`

### listEntityTypesCallable()

```
public final UnaryCallable<ListEntityTypesRequest,ListEntityTypesResponse> listEntityTypesCallable()
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   ListEntityTypesRequest request =
       ListEntityTypesRequest.newBuilder()
           .setParent(AgentName.ofProjectName("[PROJECT]").toString())
           .setLanguageCode("languageCode-2092349083")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListEntityTypesResponse response =
         entityTypesClient.listEntityTypesCallable().call(request);
     for (EntityType element : response.getEntityTypesList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.ListEntityTypesRequest),[ListEntityTypesResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.ListEntityTypesResponse)>`

### listEntityTypesPagedCallable()

```
public final UnaryCallable<ListEntityTypesRequest,EntityTypesClient.ListEntityTypesPagedResponse> listEntityTypesPagedCallable()
```

Returns the list of all entity types in the specified agent.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   ListEntityTypesRequest request =
       ListEntityTypesRequest.newBuilder()
           .setParent(AgentName.ofProjectName("[PROJECT]").toString())
           .setLanguageCode("languageCode-2092349083")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<EntityType> future =
       entityTypesClient.listEntityTypesPagedCallable().futureCall(request);
   // Do something.
   for (EntityType element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListEntityTypesRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.ListEntityTypesRequest),[ListEntityTypesPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListEntityTypesPagedResponse)>`

### listLocations(ListLocationsRequest request)

```
public final EntityTypesClient.ListLocationsPagedResponse listLocations(ListLocationsRequest request)
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Location element : entityTypesClient.listLocations(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`com.google.cloud.location.ListLocationsRequest`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EntityTypesClient.ListLocationsPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListLocationsPagedResponse)`

### listLocationsCallable()

```
public final UnaryCallable<ListLocationsRequest,ListLocationsResponse> listLocationsCallable()
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListLocationsResponse response = entityTypesClient.listLocationsCallable().call(request);
     for (Location element : response.getLocationsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse>`

### listLocationsPagedCallable()

```
public final UnaryCallable<ListLocationsRequest,EntityTypesClient.ListLocationsPagedResponse> listLocationsPagedCallable()
```

Lists information about the supported locations for this service.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   ListLocationsRequest request =
       ListLocationsRequest.newBuilder()
           .setName("name3373707")
           .setFilter("filter-1274492040")
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Location> future =
       entityTypesClient.listLocationsPagedCallable().futureCall(request);
   // Do something.
   for (Location element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityTypesClient.ListLocationsPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateEntityType(EntityType entityType)

```
public final EntityType updateEntityType(EntityType entityType)
```

Updates the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityType entityType = EntityType.newBuilder().build();
   EntityType response = entityTypesClient.updateEntityType(entityType);
 }
 
```
 

**Parameter**

**Name**

**Description**

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to update.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### updateEntityType(EntityType entityType, String languageCode)

```
public final EntityType updateEntityType(EntityType entityType, String languageCode)
```

Updates the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityType entityType = EntityType.newBuilder().build();
   String languageCode = "languageCode-2092349083";
   EntityType response = entityTypesClient.updateEntityType(entityType, languageCode);
 }
 
```
 

**Parameters**

**Name**

**Description**

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to update.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### updateEntityType(EntityType entityType, String languageCode, FieldMask updateMask)

```
public final EntityType updateEntityType(EntityType entityType, String languageCode, FieldMask updateMask)
```

Updates the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   EntityType entityType = EntityType.newBuilder().build();
   String languageCode = "languageCode-2092349083";
   FieldMask updateMask = FieldMask.newBuilder().build();
   EntityType response =
       entityTypesClient.updateEntityType(entityType, languageCode, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`entityType`

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`  

Required. The entity type to update.

`languageCode`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Optional. The mask to control which fields get updated.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### updateEntityType(UpdateEntityTypeRequest request)

```
public final EntityType updateEntityType(UpdateEntityTypeRequest request)
```

Updates the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   UpdateEntityTypeRequest request =
       UpdateEntityTypeRequest.newBuilder()
           .setEntityType(EntityType.newBuilder().build())
           .setLanguageCode("languageCode-2092349083")
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   EntityType response = entityTypesClient.updateEntityType(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.UpdateEntityTypeRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)`

### updateEntityTypeCallable()

```
public final UnaryCallable<UpdateEntityTypeRequest,EntityType> updateEntityTypeCallable()
```

Updates the specified entity type.

Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (EntityTypesClient entityTypesClient = EntityTypesClient.create()) {
   UpdateEntityTypeRequest request =
       UpdateEntityTypeRequest.newBuilder()
           .setEntityType(EntityType.newBuilder().build())
           .setLanguageCode("languageCode-2092349083")
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<EntityType> future =
       entityTypesClient.updateEntityTypeCallable().futureCall(request);
   // Do something.
   EntityType response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateEntityTypeRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.UpdateEntityTypeRequest),[EntityType](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.EntityType)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
