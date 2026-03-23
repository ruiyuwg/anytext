-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class UptimeCheckServiceClient (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public class UptimeCheckServiceClient implements BackgroundResource
```

Service Description: The UptimeCheckService API is used to manage (list, create, delete, edit) Uptime check configurations in the Stackdriver Monitoring product. An Uptime check is a piece of configuration that determines which resources and services to monitor for availability. These configurations can also be configured interactively by navigating to the [Cloud Console](http://console.cloud.google.com), selecting the appropriate project, clicking on "Monitoring" on the left-hand side to navigate to Stackdriver, and then clicking on "Uptime".

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   UptimeCheckConfigName name =
       UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
           "[PROJECT]", "[UPTIME_CHECK_CONFIG]");
   UptimeCheckConfig response = uptimeCheckServiceClient.getUptimeCheckConfig(name);
 }
 
```
 

Note: close() needs to be called on the UptimeCheckServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of UptimeCheckServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 UptimeCheckServiceSettings uptimeCheckServiceSettings =
     UptimeCheckServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 UptimeCheckServiceClient uptimeCheckServiceClient =
     UptimeCheckServiceClient.create(uptimeCheckServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 UptimeCheckServiceSettings uptimeCheckServiceSettings =
     UptimeCheckServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 UptimeCheckServiceClient uptimeCheckServiceClient =
     UptimeCheckServiceClient.create(uptimeCheckServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> UptimeCheckServiceClient

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
public static final UptimeCheckServiceClient create()
```

Constructs an instance of UptimeCheckServiceClient with default settings.

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(UptimeCheckServiceSettings settings)

```
public static final UptimeCheckServiceClient create(UptimeCheckServiceSettings settings)
```

Constructs an instance of UptimeCheckServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

settings

`[UptimeCheckServiceSettings](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceSettings)`  

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### create(UptimeCheckServiceStub stub)

```
public static final UptimeCheckServiceClient create(UptimeCheckServiceStub stub)
```

Constructs an instance of UptimeCheckServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(UptimeCheckServiceSettings).

**Parameter**

**Name**

**Description**

stub

`[UptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub)`  

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient)

## Constructors

### UptimeCheckServiceClient(UptimeCheckServiceSettings settings)

```
protected UptimeCheckServiceClient(UptimeCheckServiceSettings settings)
```

Constructs an instance of UptimeCheckServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

settings

`[UptimeCheckServiceSettings](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceSettings)`  

### UptimeCheckServiceClient(UptimeCheckServiceStub stub)

```
protected UptimeCheckServiceClient(UptimeCheckServiceStub stub)
```

**Parameter**

**Name**

**Description**

stub

`[UptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

duration

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

unit

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Exceptions**

**Type**

**Description**

[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)

### close()

```
public final void close()
```

### createUptimeCheckConfig(ResourceName parent, UptimeCheckConfig uptimeCheckConfig)

```
public final UptimeCheckConfig createUptimeCheckConfig(ResourceName parent, UptimeCheckConfig uptimeCheckConfig)
```

Creates a new Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ResourceName parent = ResourceName.of("[FOLDER]");
   UptimeCheckConfig uptimeCheckConfig = UptimeCheckConfig.newBuilder().build();
   UptimeCheckConfig response =
       uptimeCheckServiceClient.createUptimeCheckConfig(parent, uptimeCheckConfig);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`com.google.api.resourcenames.ResourceName`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

uptimeCheckConfig

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)`  

Required. The new Uptime check configuration.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### createUptimeCheckConfig(CreateUptimeCheckConfigRequest request)

```
public final UptimeCheckConfig createUptimeCheckConfig(CreateUptimeCheckConfigRequest request)
```

Creates a new Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   CreateUptimeCheckConfigRequest request =
       CreateUptimeCheckConfigRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setUptimeCheckConfig(UptimeCheckConfig.newBuilder().build())
           .build();
   UptimeCheckConfig response = uptimeCheckServiceClient.createUptimeCheckConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[CreateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.CreateUptimeCheckConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### createUptimeCheckConfig(OrganizationName parent, UptimeCheckConfig uptimeCheckConfig)

```
public final UptimeCheckConfig createUptimeCheckConfig(OrganizationName parent, UptimeCheckConfig uptimeCheckConfig)
```

Creates a new Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   UptimeCheckConfig uptimeCheckConfig = UptimeCheckConfig.newBuilder().build();
   UptimeCheckConfig response =
       uptimeCheckServiceClient.createUptimeCheckConfig(parent, uptimeCheckConfig);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[OrganizationName](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.OrganizationName)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

uptimeCheckConfig

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)`  

Required. The new Uptime check configuration.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### createUptimeCheckConfig(ProjectName parent, UptimeCheckConfig uptimeCheckConfig)

```
public final UptimeCheckConfig createUptimeCheckConfig(ProjectName parent, UptimeCheckConfig uptimeCheckConfig)
```

Creates a new Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   UptimeCheckConfig uptimeCheckConfig = UptimeCheckConfig.newBuilder().build();
   UptimeCheckConfig response =
       uptimeCheckServiceClient.createUptimeCheckConfig(parent, uptimeCheckConfig);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[ProjectName](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ProjectName)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

uptimeCheckConfig

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)`  

Required. The new Uptime check configuration.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### createUptimeCheckConfig(String parent, UptimeCheckConfig uptimeCheckConfig)

```
public final UptimeCheckConfig createUptimeCheckConfig(String parent, UptimeCheckConfig uptimeCheckConfig)
```

Creates a new Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   UptimeCheckConfig uptimeCheckConfig = UptimeCheckConfig.newBuilder().build();
   UptimeCheckConfig response =
       uptimeCheckServiceClient.createUptimeCheckConfig(parent, uptimeCheckConfig);
 }
 
```
 

**Parameters**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

uptimeCheckConfig

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)`  

Required. The new Uptime check configuration.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### createUptimeCheckConfigCallable()

```
public final UnaryCallable<CreateUptimeCheckConfigRequest,UptimeCheckConfig> createUptimeCheckConfigCallable()
```

Creates a new Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   CreateUptimeCheckConfigRequest request =
       CreateUptimeCheckConfigRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setUptimeCheckConfig(UptimeCheckConfig.newBuilder().build())
           .build();
   ApiFuture<UptimeCheckConfig> future =
       uptimeCheckServiceClient.createUptimeCheckConfigCallable().futureCall(request);
   // Do something.
   UptimeCheckConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.CreateUptimeCheckConfigRequest),[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)\>

### deleteUptimeCheckConfig(DeleteUptimeCheckConfigRequest request)

```
public final void deleteUptimeCheckConfig(DeleteUptimeCheckConfigRequest request)
```

Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   DeleteUptimeCheckConfigRequest request =
       DeleteUptimeCheckConfigRequest.newBuilder()
           .setName(
               UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
                       "[PROJECT]", "[UPTIME_CHECK_CONFIG]")
                   .toString())
           .build();
   uptimeCheckServiceClient.deleteUptimeCheckConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[DeleteUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.DeleteUptimeCheckConfigRequest)`  

The request object containing all of the parameters for the API call.

### deleteUptimeCheckConfig(UptimeCheckConfigName name)

```
public final void deleteUptimeCheckConfig(UptimeCheckConfigName name)
```

Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   UptimeCheckConfigName name =
       UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
           "[PROJECT]", "[UPTIME_CHECK_CONFIG]");
   uptimeCheckServiceClient.deleteUptimeCheckConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[UptimeCheckConfigName](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfigName)`  

Required. The Uptime check configuration to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/uptimeCheckConfigs/\[UPTIME\_CHECK\_ID\]

### deleteUptimeCheckConfig(String name)

```
public final void deleteUptimeCheckConfig(String name)
```

Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   String name =
       UptimeCheckConfigName.ofProjectUptimeCheckConfigName("[PROJECT]", "[UPTIME_CHECK_CONFIG]")
           .toString();
   uptimeCheckServiceClient.deleteUptimeCheckConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The Uptime check configuration to delete. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/uptimeCheckConfigs/\[UPTIME\_CHECK\_ID\]

### deleteUptimeCheckConfigCallable()

```
public final UnaryCallable<DeleteUptimeCheckConfigRequest,Empty> deleteUptimeCheckConfigCallable()
```

Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   DeleteUptimeCheckConfigRequest request =
       DeleteUptimeCheckConfigRequest.newBuilder()
           .setName(
               UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
                       "[PROJECT]", "[UPTIME_CHECK_CONFIG]")
                   .toString())
           .build();
   ApiFuture<Empty> future =
       uptimeCheckServiceClient.deleteUptimeCheckConfigCallable().futureCall(request);
   // Do something.
   future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.DeleteUptimeCheckConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getSettings()

```
public final UptimeCheckServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

[UptimeCheckServiceSettings](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceSettings)

### getStub()

```
public UptimeCheckServiceStub getStub()
```

**Returns**

**Type**

**Description**

[UptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub)

### getUptimeCheckConfig(GetUptimeCheckConfigRequest request)

```
public final UptimeCheckConfig getUptimeCheckConfig(GetUptimeCheckConfigRequest request)
```

Gets a single Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   GetUptimeCheckConfigRequest request =
       GetUptimeCheckConfigRequest.newBuilder()
           .setName(
               UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
                       "[PROJECT]", "[UPTIME_CHECK_CONFIG]")
                   .toString())
           .build();
   UptimeCheckConfig response = uptimeCheckServiceClient.getUptimeCheckConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[GetUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.GetUptimeCheckConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### getUptimeCheckConfig(UptimeCheckConfigName name)

```
public final UptimeCheckConfig getUptimeCheckConfig(UptimeCheckConfigName name)
```

Gets a single Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   UptimeCheckConfigName name =
       UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
           "[PROJECT]", "[UPTIME_CHECK_CONFIG]");
   UptimeCheckConfig response = uptimeCheckServiceClient.getUptimeCheckConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[UptimeCheckConfigName](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfigName)`  

Required. The Uptime check configuration to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/uptimeCheckConfigs/\[UPTIME\_CHECK\_ID\]

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### getUptimeCheckConfig(String name)

```
public final UptimeCheckConfig getUptimeCheckConfig(String name)
```

Gets a single Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   String name =
       UptimeCheckConfigName.ofProjectUptimeCheckConfigName("[PROJECT]", "[UPTIME_CHECK_CONFIG]")
           .toString();
   UptimeCheckConfig response = uptimeCheckServiceClient.getUptimeCheckConfig(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

name

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The Uptime check configuration to retrieve. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/uptimeCheckConfigs/\[UPTIME\_CHECK\_ID\]

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### getUptimeCheckConfigCallable()

```
public final UnaryCallable<GetUptimeCheckConfigRequest,UptimeCheckConfig> getUptimeCheckConfigCallable()
```

Gets a single Uptime check configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   GetUptimeCheckConfigRequest request =
       GetUptimeCheckConfigRequest.newBuilder()
           .setName(
               UptimeCheckConfigName.ofProjectUptimeCheckConfigName(
                       "[PROJECT]", "[UPTIME_CHECK_CONFIG]")
                   .toString())
           .build();
   ApiFuture<UptimeCheckConfig> future =
       uptimeCheckServiceClient.getUptimeCheckConfigCallable().futureCall(request);
   // Do something.
   UptimeCheckConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.GetUptimeCheckConfigRequest),[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)\>

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### listUptimeCheckConfigs(ResourceName parent)

```
public final UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse listUptimeCheckConfigs(ResourceName parent)
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ResourceName parent = ResourceName.of("[FOLDER]");
   for (UptimeCheckConfig element :
       uptimeCheckServiceClient.listUptimeCheckConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`com.google.api.resourcenames.ResourceName`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)

### listUptimeCheckConfigs(ListUptimeCheckConfigsRequest request)

```
public final UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse listUptimeCheckConfigs(ListUptimeCheckConfigsRequest request)
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ListUptimeCheckConfigsRequest request =
       ListUptimeCheckConfigsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (UptimeCheckConfig element :
       uptimeCheckServiceClient.listUptimeCheckConfigs(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListUptimeCheckConfigsRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckConfigsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)

### listUptimeCheckConfigs(OrganizationName parent)

```
public final UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse listUptimeCheckConfigs(OrganizationName parent)
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   for (UptimeCheckConfig element :
       uptimeCheckServiceClient.listUptimeCheckConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[OrganizationName](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.OrganizationName)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)

### listUptimeCheckConfigs(ProjectName parent)

```
public final UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse listUptimeCheckConfigs(ProjectName parent)
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ProjectName parent = ProjectName.of("[PROJECT]");
   for (UptimeCheckConfig element :
       uptimeCheckServiceClient.listUptimeCheckConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[ProjectName](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ProjectName)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)

### listUptimeCheckConfigs(String parent)

```
public final UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse listUptimeCheckConfigs(String parent)
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   String parent = ProjectName.of("[PROJECT]").toString();
   for (UptimeCheckConfig element :
       uptimeCheckServiceClient.listUptimeCheckConfigs(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

parent

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)

### listUptimeCheckConfigsCallable()

```
public final UnaryCallable<ListUptimeCheckConfigsRequest,ListUptimeCheckConfigsResponse> listUptimeCheckConfigsCallable()
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ListUptimeCheckConfigsRequest request =
       ListUptimeCheckConfigsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListUptimeCheckConfigsResponse response =
         uptimeCheckServiceClient.listUptimeCheckConfigsCallable().call(request);
     for (UptimeCheckConfig element : response.getUptimeCheckConfigsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckConfigsRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckConfigsRequest),[ListUptimeCheckConfigsResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckConfigsResponse)\>

### listUptimeCheckConfigsPagedCallable()

```
public final UnaryCallable<ListUptimeCheckConfigsRequest,UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse> listUptimeCheckConfigsPagedCallable()
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ListUptimeCheckConfigsRequest request =
       ListUptimeCheckConfigsRequest.newBuilder()
           .setParent(ProjectName.of("[PROJECT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<UptimeCheckConfig> future =
       uptimeCheckServiceClient.listUptimeCheckConfigsPagedCallable().futureCall(request);
   // Do something.
   for (UptimeCheckConfig element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckConfigsRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckConfigsRequest),[ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)\>

### listUptimeCheckIps(ListUptimeCheckIpsRequest request)

```
public final UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse listUptimeCheckIps(ListUptimeCheckIpsRequest request)
```

Returns the list of IP addresses that checkers run from

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ListUptimeCheckIpsRequest request =
       ListUptimeCheckIpsRequest.newBuilder()
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (UptimeCheckIp element :
       uptimeCheckServiceClient.listUptimeCheckIps(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[ListUptimeCheckIpsRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckIpsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse)

### listUptimeCheckIpsCallable()

```
public final UnaryCallable<ListUptimeCheckIpsRequest,ListUptimeCheckIpsResponse> listUptimeCheckIpsCallable()
```

Returns the list of IP addresses that checkers run from

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ListUptimeCheckIpsRequest request =
       ListUptimeCheckIpsRequest.newBuilder()
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListUptimeCheckIpsResponse response =
         uptimeCheckServiceClient.listUptimeCheckIpsCallable().call(request);
     for (UptimeCheckIp element : response.getUptimeCheckIpsList()) {
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

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckIpsRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckIpsRequest),[ListUptimeCheckIpsResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckIpsResponse)\>

### listUptimeCheckIpsPagedCallable()

```
public final UnaryCallable<ListUptimeCheckIpsRequest,UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse> listUptimeCheckIpsPagedCallable()
```

Returns the list of IP addresses that checkers run from

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   ListUptimeCheckIpsRequest request =
       ListUptimeCheckIpsRequest.newBuilder()
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<UptimeCheckIp> future =
       uptimeCheckServiceClient.listUptimeCheckIpsPagedCallable().futureCall(request);
   // Do something.
   for (UptimeCheckIp element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckIpsRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.ListUptimeCheckIpsRequest),[ListUptimeCheckIpsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse)\>

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateUptimeCheckConfig(UpdateUptimeCheckConfigRequest request)

```
public final UptimeCheckConfig updateUptimeCheckConfig(UpdateUptimeCheckConfigRequest request)
```

Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via `updateMask`. Returns the updated configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   UpdateUptimeCheckConfigRequest request =
       UpdateUptimeCheckConfigRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setUptimeCheckConfig(UptimeCheckConfig.newBuilder().build())
           .build();
   UptimeCheckConfig response = uptimeCheckServiceClient.updateUptimeCheckConfig(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

request

`[UpdateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UpdateUptimeCheckConfigRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### updateUptimeCheckConfig(UptimeCheckConfig uptimeCheckConfig)

```
public final UptimeCheckConfig updateUptimeCheckConfig(UptimeCheckConfig uptimeCheckConfig)
```

Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via `updateMask`. Returns the updated configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   UptimeCheckConfig uptimeCheckConfig = UptimeCheckConfig.newBuilder().build();
   UptimeCheckConfig response =
       uptimeCheckServiceClient.updateUptimeCheckConfig(uptimeCheckConfig);
 }
 
```
 

**Parameter**

**Name**

**Description**

uptimeCheckConfig

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)`  

Required. If an `updateMask` has been specified, this field gives the values for the set of fields mentioned in the `updateMask`. If an `updateMask` has not been given, this Uptime check configuration replaces the current configuration. If a field is mentioned in `updateMask` but the corresonding field is omitted in this partial Uptime check configuration, it has the effect of deleting/clearing the field from the configuration on the server.

The following fields can be updated: `display_name`, `http_check`, `tcp_check`, `timeout`, `content_matchers`, and `selected_regions`.

**Returns**

**Type**

**Description**

[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)

### updateUptimeCheckConfigCallable()

```
public final UnaryCallable<UpdateUptimeCheckConfigRequest,UptimeCheckConfig> updateUptimeCheckConfigCallable()
```

Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via `updateMask`. Returns the updated configuration.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (UptimeCheckServiceClient uptimeCheckServiceClient = UptimeCheckServiceClient.create()) {
   UpdateUptimeCheckConfigRequest request =
       UpdateUptimeCheckConfigRequest.newBuilder()
           .setUpdateMask(FieldMask.newBuilder().build())
           .setUptimeCheckConfig(UptimeCheckConfig.newBuilder().build())
           .build();
   ApiFuture<UptimeCheckConfig> future =
       uptimeCheckServiceClient.updateUptimeCheckConfigCallable().futureCall(request);
   // Do something.
   UptimeCheckConfig response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UpdateUptimeCheckConfigRequest),[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.6.0/com.google.monitoring.v3.UptimeCheckConfig)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
