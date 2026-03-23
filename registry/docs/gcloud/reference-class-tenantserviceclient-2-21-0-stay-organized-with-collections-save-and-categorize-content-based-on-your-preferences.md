-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TenantServiceClient (2.21.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public class TenantServiceClient implements BackgroundResource
```

Service Description: A service that handles tenant management, including CRUD and enumeration.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   Tenant tenant = Tenant.newBuilder().build();
   Tenant response = tenantServiceClient.createTenant(parent, tenant);
 }
 
```
 

Note: close() needs to be called on the TenantServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of TenantServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TenantServiceSettings tenantServiceSettings =
     TenantServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 TenantServiceClient tenantServiceClient = TenantServiceClient.create(tenantServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TenantServiceSettings tenantServiceSettings =
     TenantServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 TenantServiceClient tenantServiceClient = TenantServiceClient.create(tenantServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TenantServiceSettings tenantServiceSettings =
     TenantServiceSettings.newHttpJsonBuilder().build();
 TenantServiceClient tenantServiceClient = TenantServiceClient.create(tenantServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> TenantServiceClient

## Implements

[BackgroundResource](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.BackgroundResource.html)

## Inherited Members

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

### create()

```
public static final TenantServiceClient create()
```

Constructs an instance of TenantServiceClient with default settings.

**Returns**

**Type**

**Description**

`[TenantServiceClient](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TenantServiceSettings settings)

```
public static final TenantServiceClient create(TenantServiceSettings settings)
```

Constructs an instance of TenantServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[TenantServiceSettings](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceSettings)`  

**Returns**

**Type**

**Description**

`[TenantServiceClient](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(TenantServiceStub stub)

```
public static final TenantServiceClient create(TenantServiceStub stub)
```

Constructs an instance of TenantServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(TenantServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[TenantServiceStub](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.stub.TenantServiceStub)`  

**Returns**

**Type**

**Description**

`[TenantServiceClient](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient)`

## Constructors

### TenantServiceClient(TenantServiceSettings settings)

```
protected TenantServiceClient(TenantServiceSettings settings)
```

Constructs an instance of TenantServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[TenantServiceSettings](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceSettings)`  

### TenantServiceClient(TenantServiceStub stub)

```
protected TenantServiceClient(TenantServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[TenantServiceStub](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.stub.TenantServiceStub)`  

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

### createTenant(CreateTenantRequest request)

```
public final Tenant createTenant(CreateTenantRequest request)
```

Creates a new tenant entity.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   CreateTenantRequest request =
       CreateTenantRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setTenant(Tenant.newBuilder().build())
           .build();
   Tenant response = tenantServiceClient.createTenant(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[CreateTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.CreateTenantRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### createTenant(ProjectName parent, Tenant tenant)

```
public final Tenant createTenant(ProjectName parent, Tenant tenant)
```

Creates a new tenant entity.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   Tenant tenant = Tenant.newBuilder().build();
   Tenant response = tenantServiceClient.createTenant(parent, tenant);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.ProjectName)`  

Required. Resource name of the project under which the tenant is created.

The format is "projects/{project\_id}", for example, "projects/foo".

`tenant`

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`  

Required. The tenant to be created.

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### createTenant(String parent, Tenant tenant)

```
public final Tenant createTenant(String parent, Tenant tenant)
```

Creates a new tenant entity.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   Tenant tenant = Tenant.newBuilder().build();
   Tenant response = tenantServiceClient.createTenant(parent, tenant);
 }
 
```
 

**Parameters**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the project under which the tenant is created.

The format is "projects/{project\_id}", for example, "projects/foo".

`tenant`

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`  

Required. The tenant to be created.

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### createTenantCallable()

```
public final UnaryCallable<CreateTenantRequest,Tenant> createTenantCallable()
```

Creates a new tenant entity.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   CreateTenantRequest request =
       CreateTenantRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setTenant(Tenant.newBuilder().build())
           .build();
   ApiFuture<Tenant> future = tenantServiceClient.createTenantCallable().futureCall(request);
   // Do something.
   Tenant response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.CreateTenantRequest),[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)>`

### deleteTenant(DeleteTenantRequest request)

```
public final void deleteTenant(DeleteTenantRequest request)
```

Deletes specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   DeleteTenantRequest request =
       DeleteTenantRequest.newBuilder()
           .setName(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .build();
   tenantServiceClient.deleteTenant(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[DeleteTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.DeleteTenantRequest)`  

The request object containing all of the parameters for the API call.

### deleteTenant(TenantName name)

```
public final void deleteTenant(TenantName name)
```

Deletes specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   TenantName name = TenantName.of("[PROJECT]", "[TENANT]");
   tenantServiceClient.deleteTenant(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[TenantName](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant to be deleted.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenants/bar".

### deleteTenant(String name)

```
public final void deleteTenant(String name)
```

Deletes specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   String name = TenantName.of("[PROJECT]", "[TENANT]").toString();
   tenantServiceClient.deleteTenant(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant to be deleted.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenants/bar".

### deleteTenantCallable()

```
public final UnaryCallable<DeleteTenantRequest,Empty> deleteTenantCallable()
```

Deletes specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   DeleteTenantRequest request =
       DeleteTenantRequest.newBuilder()
           .setName(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .build();
   ApiFuture<Empty> future = tenantServiceClient.deleteTenantCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.DeleteTenantRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getSettings()

```
public final TenantServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[TenantServiceSettings](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceSettings)`

### getStub()

```
public TenantServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[TenantServiceStub](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.stub.TenantServiceStub)`

### getTenant(GetTenantRequest request)

```
public final Tenant getTenant(GetTenantRequest request)
```

Retrieves specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   GetTenantRequest request =
       GetTenantRequest.newBuilder()
           .setName(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .build();
   Tenant response = tenantServiceClient.getTenant(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.GetTenantRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### getTenant(TenantName name)

```
public final Tenant getTenant(TenantName name)
```

Retrieves specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   TenantName name = TenantName.of("[PROJECT]", "[TENANT]");
   Tenant response = tenantServiceClient.getTenant(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[TenantName](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantName)`  

Required. The resource name of the tenant to be retrieved.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenants/bar".

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### getTenant(String name)

```
public final Tenant getTenant(String name)
```

Retrieves specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   String name = TenantName.of("[PROJECT]", "[TENANT]").toString();
   Tenant response = tenantServiceClient.getTenant(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The resource name of the tenant to be retrieved.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenants/bar".

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### getTenantCallable()

```
public final UnaryCallable<GetTenantRequest,Tenant> getTenantCallable()
```

Retrieves specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   GetTenantRequest request =
       GetTenantRequest.newBuilder()
           .setName(TenantName.of("[PROJECT]", "[TENANT]").toString())
           .build();
   ApiFuture<Tenant> future = tenantServiceClient.getTenantCallable().futureCall(request);
   // Do something.
   Tenant response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.GetTenantRequest),[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)>`

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

### listTenants(ListTenantsRequest request)

```
public final TenantServiceClient.ListTenantsPagedResponse listTenants(ListTenantsRequest request)
```

Lists all tenants associated with the project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   ListTenantsRequest request =
       ListTenantsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   for (Tenant element : tenantServiceClient.listTenants(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListTenantsRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.ListTenantsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TenantServiceClient.ListTenantsPagedResponse](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient.ListTenantsPagedResponse)`

### listTenants(ProjectName parent)

```
public final TenantServiceClient.ListTenantsPagedResponse listTenants(ProjectName parent)
```

Lists all tenants associated with the project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   for (Tenant element : tenantServiceClient.listTenants(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ProjectName](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.ProjectName)`  

Required. Resource name of the project under which the tenant is created.

The format is "projects/{project\_id}", for example, "projects/foo".

**Returns**

**Type**

**Description**

`[TenantServiceClient.ListTenantsPagedResponse](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient.ListTenantsPagedResponse)`

### listTenants(String parent)

```
public final TenantServiceClient.ListTenantsPagedResponse listTenants(String parent)
```

Lists all tenants associated with the project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   for (Tenant element : tenantServiceClient.listTenants(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the project under which the tenant is created.

The format is "projects/{project\_id}", for example, "projects/foo".

**Returns**

**Type**

**Description**

`[TenantServiceClient.ListTenantsPagedResponse](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient.ListTenantsPagedResponse)`

### listTenantsCallable()

```
public final UnaryCallable<ListTenantsRequest,ListTenantsResponse> listTenantsCallable()
```

Lists all tenants associated with the project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   ListTenantsRequest request =
       ListTenantsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   while (true) {
     ListTenantsResponse response = tenantServiceClient.listTenantsCallable().call(request);
     for (Tenant element : response.getTenantsList()) {
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

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTenantsRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.ListTenantsRequest),[ListTenantsResponse](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.ListTenantsResponse)>`

### listTenantsPagedCallable()

```
public final UnaryCallable<ListTenantsRequest,TenantServiceClient.ListTenantsPagedResponse> listTenantsPagedCallable()
```

Lists all tenants associated with the project.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   ListTenantsRequest request =
       ListTenantsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageToken("pageToken873572522")
           .setPageSize(883849137)
           .build();
   ApiFuture<Tenant> future = tenantServiceClient.listTenantsPagedCallable().futureCall(request);
   // Do something.
   for (Tenant element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTenantsRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.ListTenantsRequest),[ListTenantsPagedResponse](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.TenantServiceClient.ListTenantsPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateTenant(Tenant tenant, FieldMask updateMask)

```
public final Tenant updateTenant(Tenant tenant, FieldMask updateMask)
```

Updates specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   Tenant tenant = Tenant.newBuilder().build();
   FieldMask updateMask = FieldMask.newBuilder().build();
   Tenant response = tenantServiceClient.updateTenant(tenant, updateMask);
 }
 
```
 

**Parameters**

**Name**

**Description**

`tenant`

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`  

Required. The tenant resource to replace the current resource in the system.

`updateMask`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

Strongly recommended for the best service experience.

If update\_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated.

A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported.

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### updateTenant(UpdateTenantRequest request)

```
public final Tenant updateTenant(UpdateTenantRequest request)
```

Updates specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   UpdateTenantRequest request =
       UpdateTenantRequest.newBuilder()
           .setTenant(Tenant.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   Tenant response = tenantServiceClient.updateTenant(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[UpdateTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.UpdateTenantRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)`

### updateTenantCallable()

```
public final UnaryCallable<UpdateTenantRequest,Tenant> updateTenantCallable()
```

Updates specified tenant.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (TenantServiceClient tenantServiceClient = TenantServiceClient.create()) {
   UpdateTenantRequest request =
       UpdateTenantRequest.newBuilder()
           .setTenant(Tenant.newBuilder().build())
           .setUpdateMask(FieldMask.newBuilder().build())
           .build();
   ApiFuture<Tenant> future = tenantServiceClient.updateTenantCallable().futureCall(request);
   // Do something.
   Tenant response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateTenantRequest](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.UpdateTenantRequest),[Tenant](/java/docs/reference/google-cloud-talent/2.21.0/com.google.cloud.talent.v4.Tenant)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
