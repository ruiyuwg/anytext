-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SchemaServiceClient (0.83.0) Stay organized with collections Save and categorize content based on your preferences.

0.83.0 (latest) 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.70.0 0.69.0 0.68.0 0.66.0 0.64.0 0.63.0 0.60.0 0.59.0 0.58.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-discoveryengine/google-cloud-discoveryengine/src/main/java/com/google/cloud/discoveryengine/v1alpha/SchemaServiceClient.java)

[Product Reference](https://cloud.google.com/discovery-engine/media/docs)

Service Description: Service for managing Schemas.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   SchemaName name =
       SchemaName.ofProjectLocationDataStoreSchemaName(
           "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]");
   Schema response = schemaServiceClient.getSchema(name);
 }
 
```
 

Note: close() needs to be called on the SchemaServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

GetSchema

Gets a Schema.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getSchema(GetSchemaRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getSchema(SchemaName name)
    
-   getSchema(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getSchemaCallable()
    

ListSchemas

Gets a list of Schemas.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listSchemas(ListSchemasRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listSchemas(DataStoreName parent)
    
-   listSchemas(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listSchemasPagedCallable()
    
-   listSchemasCallable()
    

CreateSchema

Creates a Schema.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   createSchemaAsync(CreateSchemaRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   createSchemaAsync(DataStoreName parent, Schema schema, String schemaId)
    
-   createSchemaAsync(String parent, Schema schema, String schemaId)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   createSchemaOperationCallable()
    
-   createSchemaCallable()
    

UpdateSchema

Updates a Schema.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   updateSchemaAsync(UpdateSchemaRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   updateSchemaOperationCallable()
    
-   updateSchemaCallable()
    

DeleteSchema

Deletes a Schema.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   deleteSchemaAsync(DeleteSchemaRequest request)
    

Methods that return long-running operations have "Async" method variants that return `OperationFuture`, which is used to track polling of the service.

-   deleteSchemaAsync(SchemaName name)
    
-   deleteSchemaAsync(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   deleteSchemaOperationCallable()
    
-   deleteSchemaCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of SchemaServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SchemaServiceSettings schemaServiceSettings =
     SchemaServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 SchemaServiceClient schemaServiceClient = SchemaServiceClient.create(schemaServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SchemaServiceSettings schemaServiceSettings =
     SchemaServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 SchemaServiceClient schemaServiceClient = SchemaServiceClient.create(schemaServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SchemaServiceSettings schemaServiceSettings =
     SchemaServiceSettings.newHttpJsonBuilder().build();
 SchemaServiceClient schemaServiceClient = SchemaServiceClient.create(schemaServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SchemaServiceClient

## Static Methods

### create()

```
public static final SchemaServiceClient create()
```

Constructs an instance of SchemaServiceClient with default settings.

**Returns**

**Type**

**Description**

`[SchemaServiceClient](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SchemaServiceSettings settings)

```
public static final SchemaServiceClient create(SchemaServiceSettings settings)
```

Constructs an instance of SchemaServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[SchemaServiceSettings](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceSettings)`  

**Returns**

**Type**

**Description**

`[SchemaServiceClient](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(SchemaServiceStub stub)

```
public static final SchemaServiceClient create(SchemaServiceStub stub)
```

Constructs an instance of SchemaServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(SchemaServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[SchemaServiceStub](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.stub.SchemaServiceStub)`  

**Returns**

**Type**

**Description**

`[SchemaServiceClient](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient)`

## Constructors

### SchemaServiceClient(SchemaServiceSettings settings)

```
protected SchemaServiceClient(SchemaServiceSettings settings)
```

Constructs an instance of SchemaServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[SchemaServiceSettings](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceSettings)`  

### SchemaServiceClient(SchemaServiceStub stub)

```
protected SchemaServiceClient(SchemaServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[SchemaServiceStub](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.stub.SchemaServiceStub)`  

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

### close()

```
public final void close()
```

### createSchemaAsync(CreateSchemaRequest request)

```
public final OperationFuture<Schema,CreateSchemaMetadata> createSchemaAsync(CreateSchemaRequest request)
```

Creates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   CreateSchemaRequest request =
       CreateSchemaRequest.newBuilder()
           .setParent(
               DataStoreName.ofProjectLocationDataStoreName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]")
                   .toString())
           .setSchema(Schema.newBuilder().build())
           .setSchemaId("schemaId-697673060")
           .build();
   Schema response = schemaServiceClient.createSchemaAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema),[CreateSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaMetadata)>`

### createSchemaAsync(DataStoreName parent, Schema schema, String schemaId)

```
public final OperationFuture<Schema,CreateSchemaMetadata> createSchemaAsync(DataStoreName parent, Schema schema, String schemaId)
```

Creates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   DataStoreName parent =
       DataStoreName.ofProjectLocationDataStoreName("[PROJECT]", "[LOCATION]", "[DATA_STORE]");
   Schema schema = Schema.newBuilder().build();
   String schemaId = "schemaId-697673060";
   Schema response = schemaServiceClient.createSchemaAsync(parent, schema, schemaId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[DataStoreName](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DataStoreName)`  

Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.

`schema`

`[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema)`  

Required. The Schema to create.

`schemaId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the Schema, which becomes the final component of the Schema.name.

This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema),[CreateSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaMetadata)>`

### createSchemaAsync(String parent, Schema schema, String schemaId)

```
public final OperationFuture<Schema,CreateSchemaMetadata> createSchemaAsync(String parent, Schema schema, String schemaId)
```

Creates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   String parent =
       DataStoreName.ofProjectLocationDataStoreName("[PROJECT]", "[LOCATION]", "[DATA_STORE]")
           .toString();
   Schema schema = Schema.newBuilder().build();
   String schemaId = "schemaId-697673060";
   Schema response = schemaServiceClient.createSchemaAsync(parent, schema, schemaId).get();
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.

`schema`

`[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema)`  

Required. The Schema to create.

`schemaId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The ID to use for the Schema, which becomes the final component of the Schema.name.

This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema),[CreateSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaMetadata)>`

### createSchemaCallable()

```
public final UnaryCallable<CreateSchemaRequest,Operation> createSchemaCallable()
```

Creates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   CreateSchemaRequest request =
       CreateSchemaRequest.newBuilder()
           .setParent(
               DataStoreName.ofProjectLocationDataStoreName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]")
                   .toString())
           .setSchema(Schema.newBuilder().build())
           .setSchemaId("schemaId-697673060")
           .build();
   ApiFuture<Operation> future = schemaServiceClient.createSchemaCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createSchemaOperationCallable()

```
public final OperationCallable<CreateSchemaRequest,Schema,CreateSchemaMetadata> createSchemaOperationCallable()
```

Creates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   CreateSchemaRequest request =
       CreateSchemaRequest.newBuilder()
           .setParent(
               DataStoreName.ofProjectLocationDataStoreName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]")
                   .toString())
           .setSchema(Schema.newBuilder().build())
           .setSchemaId("schemaId-697673060")
           .build();
   OperationFuture<Schema, CreateSchemaMetadata> future =
       schemaServiceClient.createSchemaOperationCallable().futureCall(request);
   // Do something.
   Schema response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[CreateSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaRequest),[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema),[CreateSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.CreateSchemaMetadata)>`

### deleteSchemaAsync(DeleteSchemaRequest request)

```
public final OperationFuture<Empty,DeleteSchemaMetadata> deleteSchemaAsync(DeleteSchemaRequest request)
```

Deletes a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   DeleteSchemaRequest request =
       DeleteSchemaRequest.newBuilder()
           .setName(
               SchemaName.ofProjectLocationDataStoreSchemaName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
                   .toString())
           .build();
   schemaServiceClient.deleteSchemaAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[DeleteSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaMetadata)>`

### deleteSchemaAsync(SchemaName name)

```
public final OperationFuture<Empty,DeleteSchemaMetadata> deleteSchemaAsync(SchemaName name)
```

Deletes a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   SchemaName name =
       SchemaName.ofProjectLocationDataStoreSchemaName(
           "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]");
   schemaServiceClient.deleteSchemaAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SchemaName](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaName)`  

Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[DeleteSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaMetadata)>`

### deleteSchemaAsync(String name)

```
public final OperationFuture<Empty,DeleteSchemaMetadata> deleteSchemaAsync(String name)
```

Deletes a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   String name =
       SchemaName.ofProjectLocationDataStoreSchemaName(
               "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
           .toString();
   schemaServiceClient.deleteSchemaAsync(name).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[DeleteSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaMetadata)>`

### deleteSchemaCallable()

```
public final UnaryCallable<DeleteSchemaRequest,Operation> deleteSchemaCallable()
```

Deletes a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   DeleteSchemaRequest request =
       DeleteSchemaRequest.newBuilder()
           .setName(
               SchemaName.ofProjectLocationDataStoreSchemaName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
                   .toString())
           .build();
   ApiFuture<Operation> future = schemaServiceClient.deleteSchemaCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteSchemaOperationCallable()

```
public final OperationCallable<DeleteSchemaRequest,Empty,DeleteSchemaMetadata> deleteSchemaOperationCallable()
```

Deletes a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   DeleteSchemaRequest request =
       DeleteSchemaRequest.newBuilder()
           .setName(
               SchemaName.ofProjectLocationDataStoreSchemaName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
                   .toString())
           .build();
   OperationFuture<Empty, DeleteSchemaMetadata> future =
       schemaServiceClient.deleteSchemaOperationCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[DeleteSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[DeleteSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DeleteSchemaMetadata)>`

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

### getOperationsClient()

```
public final OperationsClient getOperationsClient()
```

Returns the OperationsClient that can be used to query the status of a long-running operation returned by another API method call.

**Returns**

**Type**

**Description**

`[OperationsClient](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.OperationsClient.html)`

### getSchema(GetSchemaRequest request)

```
public final Schema getSchema(GetSchemaRequest request)
```

Gets a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   GetSchemaRequest request =
       GetSchemaRequest.newBuilder()
           .setName(
               SchemaName.ofProjectLocationDataStoreSchemaName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
                   .toString())
           .build();
   Schema response = schemaServiceClient.getSchema(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.GetSchemaRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema)`

### getSchema(SchemaName name)

```
public final Schema getSchema(SchemaName name)
```

Gets a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   SchemaName name =
       SchemaName.ofProjectLocationDataStoreSchemaName(
           "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]");
   Schema response = schemaServiceClient.getSchema(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[SchemaName](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaName)`  

Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.

**Returns**

**Type**

**Description**

`[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema)`

### getSchema(String name)

```
public final Schema getSchema(String name)
```

Gets a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   String name =
       SchemaName.ofProjectLocationDataStoreSchemaName(
               "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
           .toString();
   Schema response = schemaServiceClient.getSchema(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.

**Returns**

**Type**

**Description**

`[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema)`

### getSchemaCallable()

```
public final UnaryCallable<GetSchemaRequest,Schema> getSchemaCallable()
```

Gets a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   GetSchemaRequest request =
       GetSchemaRequest.newBuilder()
           .setName(
               SchemaName.ofProjectLocationDataStoreSchemaName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]", "[SCHEMA]")
                   .toString())
           .build();
   ApiFuture<Schema> future = schemaServiceClient.getSchemaCallable().futureCall(request);
   // Do something.
   Schema response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.GetSchemaRequest),[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema)>`

### getSettings()

```
public final SchemaServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[SchemaServiceSettings](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceSettings)`

### getStub()

```
public SchemaServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[SchemaServiceStub](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.stub.SchemaServiceStub)`

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

### listSchemas(DataStoreName parent)

```
public final SchemaServiceClient.ListSchemasPagedResponse listSchemas(DataStoreName parent)
```

Gets a list of Schemas.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   DataStoreName parent =
       DataStoreName.ofProjectLocationDataStoreName("[PROJECT]", "[LOCATION]", "[DATA_STORE]");
   for (Schema element : schemaServiceClient.listSchemas(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[DataStoreName](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.DataStoreName)`  

Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.

**Returns**

**Type**

**Description**

`[SchemaServiceClient.ListSchemasPagedResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient.ListSchemasPagedResponse)`

### listSchemas(ListSchemasRequest request)

```
public final SchemaServiceClient.ListSchemasPagedResponse listSchemas(ListSchemasRequest request)
```

Gets a list of Schemas.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   ListSchemasRequest request =
       ListSchemasRequest.newBuilder()
           .setParent(
               DataStoreName.ofProjectLocationDataStoreName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Schema element : schemaServiceClient.listSchemas(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListSchemasRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.ListSchemasRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[SchemaServiceClient.ListSchemasPagedResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient.ListSchemasPagedResponse)`

### listSchemas(String parent)

```
public final SchemaServiceClient.ListSchemasPagedResponse listSchemas(String parent)
```

Gets a list of Schemas.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   String parent =
       DataStoreName.ofProjectLocationDataStoreName("[PROJECT]", "[LOCATION]", "[DATA_STORE]")
           .toString();
   for (Schema element : schemaServiceClient.listSchemas(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.

**Returns**

**Type**

**Description**

`[SchemaServiceClient.ListSchemasPagedResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient.ListSchemasPagedResponse)`

### listSchemasCallable()

```
public final UnaryCallable<ListSchemasRequest,ListSchemasResponse> listSchemasCallable()
```

Gets a list of Schemas.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   ListSchemasRequest request =
       ListSchemasRequest.newBuilder()
           .setParent(
               DataStoreName.ofProjectLocationDataStoreName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListSchemasResponse response = schemaServiceClient.listSchemasCallable().call(request);
     for (Schema element : response.getSchemasList()) {
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

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSchemasRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.ListSchemasRequest),[ListSchemasResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.ListSchemasResponse)>`

### listSchemasPagedCallable()

```
public final UnaryCallable<ListSchemasRequest,SchemaServiceClient.ListSchemasPagedResponse> listSchemasPagedCallable()
```

Gets a list of Schemas.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   ListSchemasRequest request =
       ListSchemasRequest.newBuilder()
           .setParent(
               DataStoreName.ofProjectLocationDataStoreName(
                       "[PROJECT]", "[LOCATION]", "[DATA_STORE]")
                   .toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Schema> future = schemaServiceClient.listSchemasPagedCallable().futureCall(request);
   // Do something.
   for (Schema element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListSchemasRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.ListSchemasRequest),[ListSchemasPagedResponse](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.SchemaServiceClient.ListSchemasPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateSchemaAsync(UpdateSchemaRequest request)

```
public final OperationFuture<Schema,UpdateSchemaMetadata> updateSchemaAsync(UpdateSchemaRequest request)
```

Updates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   UpdateSchemaRequest request =
       UpdateSchemaRequest.newBuilder()
           .setSchema(Schema.newBuilder().build())
           .setAllowMissing(true)
           .build();
   Schema response = schemaServiceClient.updateSchemaAsync(request).get();
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.UpdateSchemaRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[OperationFuture](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema),[UpdateSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.UpdateSchemaMetadata)>`

### updateSchemaCallable()

```
public final UnaryCallable<UpdateSchemaRequest,Operation> updateSchemaCallable()
```

Updates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   UpdateSchemaRequest request =
       UpdateSchemaRequest.newBuilder()
           .setSchema(Schema.newBuilder().build())
           .setAllowMissing(true)
           .build();
   ApiFuture<Operation> future = schemaServiceClient.updateSchemaCallable().futureCall(request);
   // Do something.
   Operation response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.UpdateSchemaRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSchemaOperationCallable()

```
public final OperationCallable<UpdateSchemaRequest,Schema,UpdateSchemaMetadata> updateSchemaOperationCallable()
```

Updates a Schema.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SchemaServiceClient schemaServiceClient = SchemaServiceClient.create()) {
   UpdateSchemaRequest request =
       UpdateSchemaRequest.newBuilder()
           .setSchema(Schema.newBuilder().build())
           .setAllowMissing(true)
           .build();
   OperationFuture<Schema, UpdateSchemaMetadata> future =
       schemaServiceClient.updateSchemaOperationCallable().futureCall(request);
   // Do something.
   Schema response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[OperationCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallable.html)<[UpdateSchemaRequest](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.UpdateSchemaRequest),[Schema](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.Schema),[UpdateSchemaMetadata](/java/docs/reference/google-cloud-discoveryengine/latest/com.google.cloud.discoveryengine.v1alpha.UpdateSchemaMetadata)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
