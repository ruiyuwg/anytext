-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.optimization.v1 (1.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

A client to Cloud Optimization API

The interfaces provided are listed below, along with usage samples.

## FleetRoutingClient

Service Description: A service for optimizing vehicle tours.

Validity of certain types of fields:

\* `google.protobuf.Timestamp` \* Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00. \* seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\]. \* nanos must be unset or set to 0. \* `google.protobuf.Duration` \* seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\]. \* nanos must be unset or set to 0. \* `google.type.LatLng` \* latitude must be in \[-90.0, 90.0\]. \* longitude must be in \[-180.0, 180.0\]. \* at least one of latitude and longitude must be non-zero.

Sample for FleetRoutingClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (FleetRoutingClient fleetRoutingClient = FleetRoutingClient.create()) {
   OptimizeToursRequest request =
       OptimizeToursRequest.newBuilder()
           .setParent("parent-995424086")
           .setTimeout(Duration.newBuilder().build())
           .setModel(ShipmentModel.newBuilder().build())
           .setMaxValidationErrors(-1367418922)
           .addAllInjectedFirstSolutionRoutes(new ArrayList<ShipmentRoute>())
           .setInjectedSolutionConstraint(InjectedSolutionConstraint.newBuilder().build())
           .addAllRefreshDetailsRoutes(new ArrayList<ShipmentRoute>())
           .setInterpretInjectedSolutionsUsingLabels(true)
           .setConsiderRoadTraffic(true)
           .setPopulatePolylines(true)
           .setPopulateTransitionPolylines(true)
           .setAllowLargeDeadlineDespiteInterruptionRisk(true)
           .setUseGeodesicDistances(true)
           .setGeodesicMetersPerSecond(-2129658905)
           .setLabel("label102727412")
           .setPopulateTravelStepPolylines(true)
           .build();
   OptimizeToursResponse response = fleetRoutingClient.optimizeTours(request);
 }
 
```
 

## Classes

### [AggregatedMetrics](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AggregatedMetrics)

Aggregated metrics for ShipmentRoute (resp. for OptimizeToursResponse over all Transition and/or Visit (resp. over all ShipmentRoute) elements.

Protobuf type `google.cloud.optimization.v1.AggregatedMetrics`

### [AggregatedMetrics.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AggregatedMetrics.Builder)

Aggregated metrics for ShipmentRoute (resp. for OptimizeToursResponse over all Transition and/or Visit (resp. over all ShipmentRoute) elements.

Protobuf type `google.cloud.optimization.v1.AggregatedMetrics`

### [AsyncModelMetadata](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AsyncModelMetadata)

The long running operation metadata for async model related methods.

Protobuf type `google.cloud.optimization.v1.AsyncModelMetadata`

### [AsyncModelMetadata.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AsyncModelMetadata.Builder)

The long running operation metadata for async model related methods.

Protobuf type `google.cloud.optimization.v1.AsyncModelMetadata`

### [AsyncModelProto](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AsyncModelProto)

### [BatchOptimizeToursRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest)

Request to batch optimize tours as an asynchronous operation. Each input file should contain one `OptimizeToursRequest`, and each output file will contain one `OptimizeToursResponse`. The request contains information to read/write and parse the files. All the input and output files should be under the same project.

Protobuf type `google.cloud.optimization.v1.BatchOptimizeToursRequest`

### [BatchOptimizeToursRequest.AsyncModelConfig](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest.AsyncModelConfig)

Information for solving one optimization model asynchronously.

Protobuf type `google.cloud.optimization.v1.BatchOptimizeToursRequest.AsyncModelConfig`

### [BatchOptimizeToursRequest.AsyncModelConfig.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest.AsyncModelConfig.Builder)

Information for solving one optimization model asynchronously.

Protobuf type `google.cloud.optimization.v1.BatchOptimizeToursRequest.AsyncModelConfig`

### [BatchOptimizeToursRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest.Builder)

Request to batch optimize tours as an asynchronous operation. Each input file should contain one `OptimizeToursRequest`, and each output file will contain one `OptimizeToursResponse`. The request contains information to read/write and parse the files. All the input and output files should be under the same project.

Protobuf type `google.cloud.optimization.v1.BatchOptimizeToursRequest`

### [BatchOptimizeToursResponse](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursResponse)

Response to a `BatchOptimizeToursRequest`. This is returned in the LRO Operation after the operation is complete.

Protobuf type `google.cloud.optimization.v1.BatchOptimizeToursResponse`

### [BatchOptimizeToursResponse.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursResponse.Builder)

Response to a `BatchOptimizeToursRequest`. This is returned in the LRO Operation after the operation is complete.

Protobuf type `google.cloud.optimization.v1.BatchOptimizeToursResponse`

### [BreakRule](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule)

Rules to generate time breaks for a vehicle (e.g. lunch breaks). A break is a contiguous period of time during which the vehicle remains idle at its current position and cannot perform any visit. A break may occur:

-   during the travel between two visits (which includes the time right before or right after a visit, but not in the middle of a visit), in which case it extends the corresponding transit time between the visits,
-   or before the vehicle start (the vehicle may not start in the middle of a break), in which case it does not affect the vehicle start time.
-   or after the vehicle end (ditto, with the vehicle end time).

Protobuf type `google.cloud.optimization.v1.BreakRule`

### [BreakRule.BreakRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.BreakRequest)

The sequence of breaks (i.e. their number and order) that apply to each vehicle must be known beforehand. The repeated `BreakRequest`s define that sequence, in the order in which they must occur. Their time windows (`earliest_start_time` / `latest_start_time`) may overlap, but they must be compatible with the order (this is checked).

Protobuf type `google.cloud.optimization.v1.BreakRule.BreakRequest`

### [BreakRule.BreakRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.BreakRequest.Builder)

The sequence of breaks (i.e. their number and order) that apply to each vehicle must be known beforehand. The repeated `BreakRequest`s define that sequence, in the order in which they must occur. Their time windows (`earliest_start_time` / `latest_start_time`) may overlap, but they must be compatible with the order (this is checked).

Protobuf type `google.cloud.optimization.v1.BreakRule.BreakRequest`

### [BreakRule.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.Builder)

Rules to generate time breaks for a vehicle (e.g. lunch breaks). A break is a contiguous period of time during which the vehicle remains idle at its current position and cannot perform any visit. A break may occur:

-   during the travel between two visits (which includes the time right before or right after a visit, but not in the middle of a visit), in which case it extends the corresponding transit time between the visits,
-   or before the vehicle start (the vehicle may not start in the middle of a break), in which case it does not affect the vehicle start time.
-   or after the vehicle end (ditto, with the vehicle end time).

Protobuf type `google.cloud.optimization.v1.BreakRule`

### [BreakRule.FrequencyConstraint](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.FrequencyConstraint)

One may further constrain the frequency and duration of the breaks specified above, by enforcing a minimum break frequency, such as "There must be a break of at least 1 hour every 12 hours". Assuming that this can be interpreted as "Within any sliding time window of 12h, there must be at least one break of at least one hour", that example would translate to the following `FrequencyConstraint`: `<code><code> { min_break_duration { seconds: 3600 } # 1 hour. max_inter_break_duration { seconds: 39600 } # 11 hours (12 - 1 = 11). } </code></code><code> The timing and duration of the breaks in the solution will respect all such constraints, in addition to the time windows and minimum durations already specified in the </code>BreakRequest<code>. A </code>FrequencyConstraint<code> may in practice apply to non-consecutive breaks. For example, the following schedule honors the "1h every 12h" example: </code><code><code> 04:00 vehicle start .. performing travel and visits .. 09:00 1 hour break 10:00 end of the break .. performing travel and visits .. 12:00 20-min lunch break 12:20 end of the break .. performing travel and visits .. 21:00 1 hour break 22:00 end of the break .. performing travel and visits .. 23:59 vehicle end </code></code>`

Protobuf type `google.cloud.optimization.v1.BreakRule.FrequencyConstraint`

### [BreakRule.FrequencyConstraint.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.FrequencyConstraint.Builder)

One may further constrain the frequency and duration of the breaks specified above, by enforcing a minimum break frequency, such as "There must be a break of at least 1 hour every 12 hours". Assuming that this can be interpreted as "Within any sliding time window of 12h, there must be at least one break of at least one hour", that example would translate to the following `FrequencyConstraint`: `<code><code> { min_break_duration { seconds: 3600 } # 1 hour. max_inter_break_duration { seconds: 39600 } # 11 hours (12 - 1 = 11). } </code></code><code> The timing and duration of the breaks in the solution will respect all such constraints, in addition to the time windows and minimum durations already specified in the </code>BreakRequest<code>. A </code>FrequencyConstraint<code> may in practice apply to non-consecutive breaks. For example, the following schedule honors the "1h every 12h" example: </code><code><code> 04:00 vehicle start .. performing travel and visits .. 09:00 1 hour break 10:00 end of the break .. performing travel and visits .. 12:00 20-min lunch break 12:20 end of the break .. performing travel and visits .. 21:00 1 hour break 22:00 end of the break .. performing travel and visits .. 23:59 vehicle end </code></code>`

Protobuf type `google.cloud.optimization.v1.BreakRule.FrequencyConstraint`

### [CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantity)

Deprecated: Use Vehicle.LoadLimit.Interval instead.

Protobuf type `google.cloud.optimization.v1.CapacityQuantity`

### [CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

Deprecated: Use Vehicle.LoadLimit.Interval instead.

Protobuf type `google.cloud.optimization.v1.CapacityQuantity`

### [CapacityQuantityInterval](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantityInterval)

Deprecated: Use Vehicle.LoadLimit.Interval instead.

Protobuf type `google.cloud.optimization.v1.CapacityQuantityInterval`

### [CapacityQuantityInterval.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantityInterval.Builder)

Deprecated: Use Vehicle.LoadLimit.Interval instead.

Protobuf type `google.cloud.optimization.v1.CapacityQuantityInterval`

### [DistanceLimit](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.DistanceLimit)

A limit defining a maximum distance which can be traveled. It can be either hard or soft. If a soft limit is defined, both `soft_max_meters` and `cost_per_kilometer_above_soft_max` must be defined and be nonnegative.

Protobuf type `google.cloud.optimization.v1.DistanceLimit`

### [DistanceLimit.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.DistanceLimit.Builder)

A limit defining a maximum distance which can be traveled. It can be either hard or soft. If a soft limit is defined, both `soft_max_meters` and `cost_per_kilometer_above_soft_max` must be defined and be nonnegative.

Protobuf type `google.cloud.optimization.v1.DistanceLimit`

### [FleetRoutingClient](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingClient)

Service Description: A service for optimizing vehicle tours.

Validity of certain types of fields:

\* `google.protobuf.Timestamp` \* Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00. \* seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\]. \* nanos must be unset or set to 0. \* `google.protobuf.Duration` \* seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\]. \* nanos must be unset or set to 0. \* `google.type.LatLng` \* latitude must be in \[-90.0, 90.0\]. \* longitude must be in \[-180.0, 180.0\]. \* at least one of latitude and longitude must be non-zero.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (FleetRoutingClient fleetRoutingClient = FleetRoutingClient.create()) {
   OptimizeToursRequest request =
       OptimizeToursRequest.newBuilder()
           .setParent("parent-995424086")
           .setTimeout(Duration.newBuilder().build())
           .setModel(ShipmentModel.newBuilder().build())
           .setMaxValidationErrors(-1367418922)
           .addAllInjectedFirstSolutionRoutes(new ArrayList<ShipmentRoute>())
           .setInjectedSolutionConstraint(InjectedSolutionConstraint.newBuilder().build())
           .addAllRefreshDetailsRoutes(new ArrayList<ShipmentRoute>())
           .setInterpretInjectedSolutionsUsingLabels(true)
           .setConsiderRoadTraffic(true)
           .setPopulatePolylines(true)
           .setPopulateTransitionPolylines(true)
           .setAllowLargeDeadlineDespiteInterruptionRisk(true)
           .setUseGeodesicDistances(true)
           .setGeodesicMetersPerSecond(-2129658905)
           .setLabel("label102727412")
           .setPopulateTravelStepPolylines(true)
           .build();
   OptimizeToursResponse response = fleetRoutingClient.optimizeTours(request);
 }
 
```
 

Note: close() needs to be called on the FleetRoutingClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of FleetRoutingSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 FleetRoutingSettings fleetRoutingSettings =
     FleetRoutingSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 FleetRoutingClient fleetRoutingClient = FleetRoutingClient.create(fleetRoutingSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 FleetRoutingSettings fleetRoutingSettings =
     FleetRoutingSettings.newBuilder().setEndpoint(myEndpoint).build();
 FleetRoutingClient fleetRoutingClient = FleetRoutingClient.create(fleetRoutingSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 FleetRoutingSettings fleetRoutingSettings = FleetRoutingSettings.newHttpJsonBuilder().build();
 FleetRoutingClient fleetRoutingClient = FleetRoutingClient.create(fleetRoutingSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [FleetRoutingGrpc](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingGrpc)

A service for optimizing vehicle tours. Validity of certain types of fields:

-   `google.protobuf.Timestamp`
    -   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.type.LatLng`
    -   latitude must be in \[-90.0, 90.0\].
    -   longitude must be in \[-180.0, 180.0\].
    -   at least one of latitude and longitude must be non-zero.

### [FleetRoutingGrpc.FleetRoutingBlockingStub](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingGrpc.FleetRoutingBlockingStub)

A stub to allow clients to do synchronous rpc calls to service FleetRouting.

A service for optimizing vehicle tours. Validity of certain types of fields:

-   `google.protobuf.Timestamp`
    -   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.type.LatLng`
    -   latitude must be in \[-90.0, 90.0\].
    -   longitude must be in \[-180.0, 180.0\].
    -   at least one of latitude and longitude must be non-zero.

### [FleetRoutingGrpc.FleetRoutingFutureStub](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingGrpc.FleetRoutingFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service FleetRouting.

A service for optimizing vehicle tours. Validity of certain types of fields:

-   `google.protobuf.Timestamp`
    -   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.type.LatLng`
    -   latitude must be in \[-90.0, 90.0\].
    -   longitude must be in \[-180.0, 180.0\].
    -   at least one of latitude and longitude must be non-zero.

### [FleetRoutingGrpc.FleetRoutingImplBase](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingGrpc.FleetRoutingImplBase)

Base class for the server implementation of the service FleetRouting.

A service for optimizing vehicle tours. Validity of certain types of fields:

-   `google.protobuf.Timestamp`
    -   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.type.LatLng`
    -   latitude must be in \[-90.0, 90.0\].
    -   longitude must be in \[-180.0, 180.0\].
    -   at least one of latitude and longitude must be non-zero.

### [FleetRoutingGrpc.FleetRoutingStub](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingGrpc.FleetRoutingStub)

A stub to allow clients to do asynchronous rpc calls to service FleetRouting.

A service for optimizing vehicle tours. Validity of certain types of fields:

-   `google.protobuf.Timestamp`
    -   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.type.LatLng`
    -   latitude must be in \[-90.0, 90.0\].
    -   longitude must be in \[-180.0, 180.0\].
    -   at least one of latitude and longitude must be non-zero.

### [FleetRoutingProto](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingProto)

### [FleetRoutingSettings](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingSettings)

Settings class to configure an instance of [FleetRoutingClient](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingClient).

The default instance has everything set to sensible defaults:

-   The default service address (cloudoptimization.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of optimizeTours to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 FleetRoutingSettings.Builder fleetRoutingSettingsBuilder = FleetRoutingSettings.newBuilder();
 fleetRoutingSettingsBuilder
     .optimizeToursSettings()
     .setRetrySettings(
         fleetRoutingSettingsBuilder
             .optimizeToursSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 FleetRoutingSettings fleetRoutingSettings = fleetRoutingSettingsBuilder.build();
 
```
 

### [FleetRoutingSettings.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingSettings.Builder)

Builder for FleetRoutingSettings.

### [GcsDestination](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.GcsDestination)

The Google Cloud Storage location where the output file will be written to.

Protobuf type `google.cloud.optimization.v1.GcsDestination`

### [GcsDestination.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.GcsDestination.Builder)

The Google Cloud Storage location where the output file will be written to.

Protobuf type `google.cloud.optimization.v1.GcsDestination`

### [GcsSource](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.GcsSource)

The Google Cloud Storage location where the input file will be read from.

Protobuf type `google.cloud.optimization.v1.GcsSource`

### [GcsSource.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.GcsSource.Builder)

The Google Cloud Storage location where the input file will be read from.

Protobuf type `google.cloud.optimization.v1.GcsSource`

### [InjectedSolutionConstraint](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint)

Solution injected in the request including information about which visits must be constrained and how they must be constrained.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint`

### [InjectedSolutionConstraint.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.Builder)

Solution injected in the request including information about which visits must be constrained and how they must be constrained.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint`

### [InjectedSolutionConstraint.ConstraintRelaxation](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation)

For a group of vehicles, specifies at what threshold(s) constraints on visits will be relaxed and to which level. Shipments listed in the `skipped_shipment` field are constrained to be skipped; i.e., they cannot be performed.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation`

### [InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)

For a group of vehicles, specifies at what threshold(s) constraints on visits will be relaxed and to which level. Shipments listed in the `skipped_shipment` field are constrained to be skipped; i.e., they cannot be performed.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation`

### [InjectedSolutionConstraint.ConstraintRelaxation.Relaxation](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation)

If `relaxations` is empty, the start time and sequence of all visits on `routes` are fully constrained and no new visits may be inserted or added to those routes. Also, a vehicle's start and end time in `routes` is fully constrained, unless the vehicle is empty (i.e., has no visits and has `used_if_route_is_empty` set to false in the model). `relaxations(i).level` specifies the constraint relaxation level applied to a visit #j that satisfies:

-   `route.visits(j).start_time >= relaxations(i).threshold_time` AND
-   `j + 1 >= relaxations(i).threshold_visit_count` Similarly, the vehicle start is relaxed to `relaxations(i).level` if it satisfies:
-   `vehicle_start_time >= relaxations(i).threshold_time` AND
-   `relaxations(i).threshold_visit_count == 0` and the vehicle end is relaxed to `relaxations(i).level` if it satisfies:
-   `vehicle_end_time >= relaxations(i).threshold_time` AND
-   `route.visits_size() + 1 >= relaxations(i).threshold_visit_count` To apply a relaxation level if a visit meets the `threshold_visit_count` OR the `threshold_time` add two `relaxations` with the same `level`: one with only `threshold_visit_count` set and the other with only `threshold_time` set. If a visit satisfies the conditions of multiple `relaxations`, the most relaxed level applies. As a result, from the vehicle start through the route visits in order to the vehicle end, the relaxation level becomes more relaxed: i.e., the relaxation level is non-decreasing as the route progresses. The timing and sequence of route visits that do not satisfy the threshold conditions of any `relaxations` are fully constrained and no visits may be inserted into these sequences. Also, if a vehicle start or end does not satisfy the conditions of any relaxation the time is fixed, unless the vehicle is empty.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation`

### [InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)

If `relaxations` is empty, the start time and sequence of all visits on `routes` are fully constrained and no new visits may be inserted or added to those routes. Also, a vehicle's start and end time in `routes` is fully constrained, unless the vehicle is empty (i.e., has no visits and has `used_if_route_is_empty` set to false in the model). `relaxations(i).level` specifies the constraint relaxation level applied to a visit #j that satisfies:

-   `route.visits(j).start_time >= relaxations(i).threshold_time` AND
-   `j + 1 >= relaxations(i).threshold_visit_count` Similarly, the vehicle start is relaxed to `relaxations(i).level` if it satisfies:
-   `vehicle_start_time >= relaxations(i).threshold_time` AND
-   `relaxations(i).threshold_visit_count == 0` and the vehicle end is relaxed to `relaxations(i).level` if it satisfies:
-   `vehicle_end_time >= relaxations(i).threshold_time` AND
-   `route.visits_size() + 1 >= relaxations(i).threshold_visit_count` To apply a relaxation level if a visit meets the `threshold_visit_count` OR the `threshold_time` add two `relaxations` with the same `level`: one with only `threshold_visit_count` set and the other with only `threshold_time` set. If a visit satisfies the conditions of multiple `relaxations`, the most relaxed level applies. As a result, from the vehicle start through the route visits in order to the vehicle end, the relaxation level becomes more relaxed: i.e., the relaxation level is non-decreasing as the route progresses. The timing and sequence of route visits that do not satisfy the threshold conditions of any `relaxations` are fully constrained and no visits may be inserted into these sequences. Also, if a vehicle start or end does not satisfy the conditions of any relaxation the time is fixed, unless the vehicle is empty.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation`

### [InputConfig](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InputConfig)

The desired input location information.

Protobuf type `google.cloud.optimization.v1.InputConfig`

### [InputConfig.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InputConfig.Builder)

The desired input location information.

Protobuf type `google.cloud.optimization.v1.InputConfig`

### [Location](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Location)

Encapsulates a location (a geographic point, and an optional heading).

Protobuf type `google.cloud.optimization.v1.Location`

### [Location.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Location.Builder)

Encapsulates a location (a geographic point, and an optional heading).

Protobuf type `google.cloud.optimization.v1.Location`

### [OptimizeToursRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursRequest)

Request to be given to a tour optimization solver which defines the shipment model to solve as well as optimization parameters.

Protobuf type `google.cloud.optimization.v1.OptimizeToursRequest`

### [OptimizeToursRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursRequest.Builder)

Request to be given to a tour optimization solver which defines the shipment model to solve as well as optimization parameters.

Protobuf type `google.cloud.optimization.v1.OptimizeToursRequest`

### [OptimizeToursResponse](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursResponse)

Response after solving a tour optimization problem containing the routes followed by each vehicle, the shipments which have been skipped and the overall cost of the solution.

Protobuf type `google.cloud.optimization.v1.OptimizeToursResponse`

### [OptimizeToursResponse.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursResponse.Builder)

Response after solving a tour optimization problem containing the routes followed by each vehicle, the shipments which have been skipped and the overall cost of the solution.

Protobuf type `google.cloud.optimization.v1.OptimizeToursResponse`

### [OptimizeToursResponse.Metrics](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursResponse.Metrics)

Overall metrics, aggregated over all routes.

Protobuf type `google.cloud.optimization.v1.OptimizeToursResponse.Metrics`

### [OptimizeToursResponse.Metrics.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursResponse.Metrics.Builder)

Overall metrics, aggregated over all routes.

Protobuf type `google.cloud.optimization.v1.OptimizeToursResponse.Metrics`

### [OptimizeToursValidationError](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationError)

Describes an error encountered when validating an `OptimizeToursRequest`.

Protobuf type `google.cloud.optimization.v1.OptimizeToursValidationError`

### [OptimizeToursValidationError.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationError.Builder)

Describes an error encountered when validating an `OptimizeToursRequest`.

Protobuf type `google.cloud.optimization.v1.OptimizeToursValidationError`

### [OptimizeToursValidationError.FieldReference](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationError.FieldReference)

Specifies a context for the validation error. A `FieldReference` always refers to a given field in this file and follows the same hierarchical structure. For example, we may specify element #2 of `start_time_windows` of vehicle #5 using: `<code><code> name: "vehicles" index: 5 sub_field { name: "end_time_windows" index: 2 } </code></code><code> We however omit top-level entities such as </code>OptimizeToursRequest<code> or </code>ShipmentModel` to avoid crowding the message.

Protobuf type `google.cloud.optimization.v1.OptimizeToursValidationError.FieldReference`

### [OptimizeToursValidationError.FieldReference.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationError.FieldReference.Builder)

Specifies a context for the validation error. A `FieldReference` always refers to a given field in this file and follows the same hierarchical structure. For example, we may specify element #2 of `start_time_windows` of vehicle #5 using: `<code><code> name: "vehicles" index: 5 sub_field { name: "end_time_windows" index: 2 } </code></code><code> We however omit top-level entities such as </code>OptimizeToursRequest<code> or </code>ShipmentModel` to avoid crowding the message.

Protobuf type `google.cloud.optimization.v1.OptimizeToursValidationError.FieldReference`

### [OutputConfig](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OutputConfig)

The desired output location.

Protobuf type `google.cloud.optimization.v1.OutputConfig`

### [OutputConfig.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OutputConfig.Builder)

The desired output location.

Protobuf type `google.cloud.optimization.v1.OutputConfig`

### [Shipment](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment)

The shipment of a single item, from one of its pickups to one of its deliveries. For the shipment to be considered as performed, a unique vehicle must visit one of its pickup locations (and decrease its spare capacities accordingly), then visit one of its delivery locations later on (and therefore re-increase its spare capacities accordingly).

Protobuf type `google.cloud.optimization.v1.Shipment`

### [Shipment.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Builder)

The shipment of a single item, from one of its pickups to one of its deliveries. For the shipment to be considered as performed, a unique vehicle must visit one of its pickup locations (and decrease its spare capacities accordingly), then visit one of its delivery locations later on (and therefore re-increase its spare capacities accordingly).

Protobuf type `google.cloud.optimization.v1.Shipment`

### [Shipment.Load](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load)

When performing a visit, a predefined amount may be added to the vehicle load if it's a pickup, or subtracted if it's a delivery. This message defines such amount. See load\_demands.

Protobuf type `google.cloud.optimization.v1.Shipment.Load`

### [Shipment.Load.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load.Builder)

When performing a visit, a predefined amount may be added to the vehicle load if it's a pickup, or subtracted if it's a delivery. This message defines such amount. See load\_demands.

Protobuf type `google.cloud.optimization.v1.Shipment.Load`

### [Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)

Request for a visit which can be done by a vehicle: it has a geo-location (or two, see below), opening and closing times represented by time windows, and a service duration time (time spent by the vehicle once it has arrived to pickup or drop off goods).

Protobuf type `google.cloud.optimization.v1.Shipment.VisitRequest`

### [Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

Request for a visit which can be done by a vehicle: it has a geo-location (or two, see below), opening and closing times represented by time windows, and a service duration time (time spent by the vehicle once it has arrived to pickup or drop off goods).

Protobuf type `google.cloud.optimization.v1.Shipment.VisitRequest`

### [ShipmentModel](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel)

A shipment model contains a set of shipments which must be performed by a set of vehicles, while minimizing the overall cost, which is the sum of:

-   the cost of routing the vehicles (sum of cost per total time, cost per travel time, and fixed cost over all vehicles).
-   the unperformed shipment penalties.
-   the cost of the global duration of the shipments

Protobuf type `google.cloud.optimization.v1.ShipmentModel`

### [ShipmentModel.BreakRule](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule)

Deprecated: Use top level BreakRule instead. Rules to generate time breaks for a vehicle (e.g. lunch breaks). A break is a contiguous period of time during which the vehicle remains idle at its current position and cannot perform any visit. A break may occur:

-   during the travel between two visits (which includes the time right before or right after a visit, but not in the middle of a visit), in which case it extends the corresponding transit time between the visits
-   before the vehicle start (the vehicle may not start in the middle of a break), in which case it does not affect the vehicle start time.
-   after the vehicle end (ditto, with the vehicle end time).

Protobuf type `google.cloud.optimization.v1.ShipmentModel.BreakRule`

### [ShipmentModel.BreakRule.BreakRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.BreakRequest)

The sequence of breaks (i.e. their number and order) that apply to each vehicle must be known beforehand. The repeated `BreakRequest`s define that sequence, in the order in which they must occur. Their time windows (`earliest_start_time` / `latest_start_time`) may overlap, but they must be compatible with the order (this is checked).

Protobuf type `google.cloud.optimization.v1.ShipmentModel.BreakRule.BreakRequest`

### [ShipmentModel.BreakRule.BreakRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.BreakRequest.Builder)

The sequence of breaks (i.e. their number and order) that apply to each vehicle must be known beforehand. The repeated `BreakRequest`s define that sequence, in the order in which they must occur. Their time windows (`earliest_start_time` / `latest_start_time`) may overlap, but they must be compatible with the order (this is checked).

Protobuf type `google.cloud.optimization.v1.ShipmentModel.BreakRule.BreakRequest`

### [ShipmentModel.BreakRule.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.Builder)

Deprecated: Use top level BreakRule instead. Rules to generate time breaks for a vehicle (e.g. lunch breaks). A break is a contiguous period of time during which the vehicle remains idle at its current position and cannot perform any visit. A break may occur:

-   during the travel between two visits (which includes the time right before or right after a visit, but not in the middle of a visit), in which case it extends the corresponding transit time between the visits
-   before the vehicle start (the vehicle may not start in the middle of a break), in which case it does not affect the vehicle start time.
-   after the vehicle end (ditto, with the vehicle end time).

Protobuf type `google.cloud.optimization.v1.ShipmentModel.BreakRule`

### [ShipmentModel.BreakRule.FrequencyConstraint](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.FrequencyConstraint)

One may further constrain the frequency and duration of the breaks specified above, by enforcing a minimum break frequency, such as "There must be a break of at least 1 hour every 12 hours". Assuming that this can be interpreted as "Within any sliding time window of 12h, there must be at least one break of at least one hour", that example would translate to the following `FrequencyConstraint`: `<code><code> { min_break_duration { seconds: 3600 } # 1 hour. max_inter_break_duration { seconds: 39600 } # 11 hours (12 - 1 = 11). } </code></code><code> The timing and duration of the breaks in the solution will respect all such constraints, in addition to the time windows and minimum durations already specified in the </code>BreakRequest<code>. A </code>FrequencyConstraint<code> may in practice apply to non-consecutive breaks. For example, the following schedule honors the "1h every 12h" example: </code><code><code> 04:00 vehicle start .. performing travel and visits .. 09:00 1 hour break 10:00 end of the break .. performing travel and visits .. 12:00 20-min lunch break 12:20 end of the break .. performing travel and visits .. 21:00 1 hour break 22:00 end of the break .. performing travel and visits .. 23:59 vehicle end </code></code>`

Protobuf type `google.cloud.optimization.v1.ShipmentModel.BreakRule.FrequencyConstraint`

### [ShipmentModel.BreakRule.FrequencyConstraint.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.FrequencyConstraint.Builder)

One may further constrain the frequency and duration of the breaks specified above, by enforcing a minimum break frequency, such as "There must be a break of at least 1 hour every 12 hours". Assuming that this can be interpreted as "Within any sliding time window of 12h, there must be at least one break of at least one hour", that example would translate to the following `FrequencyConstraint`: `<code><code> { min_break_duration { seconds: 3600 } # 1 hour. max_inter_break_duration { seconds: 39600 } # 11 hours (12 - 1 = 11). } </code></code><code> The timing and duration of the breaks in the solution will respect all such constraints, in addition to the time windows and minimum durations already specified in the </code>BreakRequest<code>. A </code>FrequencyConstraint<code> may in practice apply to non-consecutive breaks. For example, the following schedule honors the "1h every 12h" example: </code><code><code> 04:00 vehicle start .. performing travel and visits .. 09:00 1 hour break 10:00 end of the break .. performing travel and visits .. 12:00 20-min lunch break 12:20 end of the break .. performing travel and visits .. 21:00 1 hour break 22:00 end of the break .. performing travel and visits .. 23:59 vehicle end </code></code>`

Protobuf type `google.cloud.optimization.v1.ShipmentModel.BreakRule.FrequencyConstraint`

### [ShipmentModel.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.Builder)

A shipment model contains a set of shipments which must be performed by a set of vehicles, while minimizing the overall cost, which is the sum of:

-   the cost of routing the vehicles (sum of cost per total time, cost per travel time, and fixed cost over all vehicles).
-   the unperformed shipment penalties.
-   the cost of the global duration of the shipments

Protobuf type `google.cloud.optimization.v1.ShipmentModel`

### [ShipmentModel.DurationDistanceMatrix](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix)

Specifies a duration and distance matrix from visit and vehicle start locations to visit and vehicle end locations.

Protobuf type `google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix`

### [ShipmentModel.DurationDistanceMatrix.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix.Builder)

Specifies a duration and distance matrix from visit and vehicle start locations to visit and vehicle end locations.

Protobuf type `google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix`

### [ShipmentModel.DurationDistanceMatrix.Row](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix.Row)

Specifies a row of the duration and distance matrix.

Protobuf type `google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix.Row`

### [ShipmentModel.DurationDistanceMatrix.Row.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix.Row.Builder)

Specifies a row of the duration and distance matrix.

Protobuf type `google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix.Row`

### [ShipmentModel.PrecedenceRule](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.PrecedenceRule)

A precedence rule between two events (each event is the pickup or the delivery of a shipment): the "second" event has to start at least `offset_duration` after "first" has started. Several precedences can refer to the same (or related) events, e.g., "pickup of B happens after delivery of A" and "pickup of C happens after pickup of B". Furthermore, precedences only apply when both shipments are performed and are otherwise ignored.

Protobuf type `google.cloud.optimization.v1.ShipmentModel.PrecedenceRule`

### [ShipmentModel.PrecedenceRule.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.PrecedenceRule.Builder)

A precedence rule between two events (each event is the pickup or the delivery of a shipment): the "second" event has to start at least `offset_duration` after "first" has started. Several precedences can refer to the same (or related) events, e.g., "pickup of B happens after delivery of A" and "pickup of C happens after pickup of B". Furthermore, precedences only apply when both shipments are performed and are otherwise ignored.

Protobuf type `google.cloud.optimization.v1.ShipmentModel.PrecedenceRule`

### [ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute)

A vehicle's route can be decomposed, along the time axis, like this (we assume there are n visits): \` `` `| | | | | T[2], | | | | Transition | Visit #0 | | | V[2], | | | | #0 | aka | T[1] | V[1] | ... | V[n-1] | T[n] | | aka T[0] | V[0] | | | V[n-2],| | | | | | | | T[n-1] | | | ^ ^ ^ ^ ^ ^ ^ ^ vehicle V[0].start V[0].end V[1]. V[1]. V[n]. V[n]. vehicle start (arrival) (departure) start end start end end` `` `Note that we make a difference between:`

`-   "punctual events", such as the vehicle start and end and each visit's start and end (aka arrival and departure). They happen at a given second. -   "time intervals", such as the visits themselves, and the transition between visits. Though time intervals can sometimes have zero duration, i.e. start and end at the same second, they often have a positive duration. Invariants: -   If there are n visits, there are n+1 transitions. -   A visit is always surrounded by a transition before it (same index) and a transition after it (index + 1). -   The vehicle start is always followed by transition #0. -   The vehicle end is always preceded by transition #n. Zooming in, here is what happens during a`

Transition `and a` Visit`:` `` `---+-------------------------------------+-----------------------------+--> | TRANSITION[i] | VISIT[i] | | | | | * TRAVEL: the vehicle moves from | PERFORM the visit: | | VISIT[i-1].departure_location to | | | VISIT[i].arrival_location, which | * Spend some time: | | takes a given travel duration | the "visit duration". | | and distance | | | | * Load or unload | | * BREAKS: the driver may have | some quantities from the | | breaks (e.g. lunch break). | vehicle: the "demand". | | | | | * WAIT: the driver/vehicle does | | | nothing. This can happen for | | | many reasons, for example when | | | the vehicle reaches the next | | | event's destination before the | | | start of its time window | | | | | | * DELAY: _right before_ the next | | | arrival. E.g. the vehicle and/or | | | driver spends time unloading. | | | | | ---+-------------------------------------+-----------------------------+--> ^ ^ ^ V[i-1].end V[i].start V[i].end` `` `Lastly, here is how the TRAVEL, BREAKS, DELAY and WAIT can be arranged during a transition.-   They don't overlap. -   The DELAY is unique and _must_ be a contiguous period of time right before the next visit (or vehicle end). Thus, it suffice to know the delay duration to know its start and end time. -   The BREAKS are contiguous, non-overlapping periods of time. The response specifies the start time and duration of each break. -   TRAVEL and WAIT are "preemptable": they can be interrupted several times during this transition. Clients can assume that travel happens "as soon as possible" and that "wait" fills the remaining time. A (complex) example:``` `TRANSITION[i] --++-----+-----------------------------------------------------------++--> || | | | | | | || || T | B | T | | B | | D || || r | r | r | W | r | W | e || || a | e | a | a | e | a | l || || v | a | v | i | a | i | a || || e | k | e | t | k | t | y || || l | | l | | | | || || | | | | | | || --++-----------------------------------------------------------------++-->` `` \`

Protobuf type `google.cloud.optimization.v1.ShipmentRoute`

### [ShipmentRoute.Break](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Break)

Data representing the execution of a break.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Break`

### [ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)

Data representing the execution of a break.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Break`

### [ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

A vehicle's route can be decomposed, along the time axis, like this (we assume there are n visits): \` `` `| | | | | T[2], | | | | Transition | Visit #0 | | | V[2], | | | | #0 | aka | T[1] | V[1] | ... | V[n-1] | T[n] | | aka T[0] | V[0] | | | V[n-2],| | | | | | | | T[n-1] | | | ^ ^ ^ ^ ^ ^ ^ ^ vehicle V[0].start V[0].end V[1]. V[1]. V[n]. V[n]. vehicle start (arrival) (departure) start end start end end` `` `Note that we make a difference between:`

`-   "punctual events", such as the vehicle start and end and each visit's start and end (aka arrival and departure). They happen at a given second. -   "time intervals", such as the visits themselves, and the transition between visits. Though time intervals can sometimes have zero duration, i.e. start and end at the same second, they often have a positive duration. Invariants: -   If there are n visits, there are n+1 transitions. -   A visit is always surrounded by a transition before it (same index) and a transition after it (index + 1). -   The vehicle start is always followed by transition #0. -   The vehicle end is always preceded by transition #n. Zooming in, here is what happens during a`

Transition `and a` Visit`:` `` `---+-------------------------------------+-----------------------------+--> | TRANSITION[i] | VISIT[i] | | | | | * TRAVEL: the vehicle moves from | PERFORM the visit: | | VISIT[i-1].departure_location to | | | VISIT[i].arrival_location, which | * Spend some time: | | takes a given travel duration | the "visit duration". | | and distance | | | | * Load or unload | | * BREAKS: the driver may have | some quantities from the | | breaks (e.g. lunch break). | vehicle: the "demand". | | | | | * WAIT: the driver/vehicle does | | | nothing. This can happen for | | | many reasons, for example when | | | the vehicle reaches the next | | | event's destination before the | | | start of its time window | | | | | | * DELAY: _right before_ the next | | | arrival. E.g. the vehicle and/or | | | driver spends time unloading. | | | | | ---+-------------------------------------+-----------------------------+--> ^ ^ ^ V[i-1].end V[i].start V[i].end` `` `Lastly, here is how the TRAVEL, BREAKS, DELAY and WAIT can be arranged during a transition.-   They don't overlap. -   The DELAY is unique and _must_ be a contiguous period of time right before the next visit (or vehicle end). Thus, it suffice to know the delay duration to know its start and end time. -   The BREAKS are contiguous, non-overlapping periods of time. The response specifies the start time and duration of each break. -   TRAVEL and WAIT are "preemptable": they can be interrupted several times during this transition. Clients can assume that travel happens "as soon as possible" and that "wait" fills the remaining time. A (complex) example:``` `TRANSITION[i] --++-----+-----------------------------------------------------------++--> || | | | | | | || || T | B | T | | B | | D || || r | r | r | W | r | W | e || || a | e | a | a | e | a | l || || v | a | v | i | a | i | a || || e | k | e | t | k | t | y || || l | | l | | | | || || | | | | | | || --++-----------------------------------------------------------------++-->` `` \`

Protobuf type `google.cloud.optimization.v1.ShipmentRoute`

### [ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Time interval spent on the route resulting from a TransitionAttributes.delay.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Delay`

### [ShipmentRoute.Delay.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay.Builder)

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Time interval spent on the route resulting from a TransitionAttributes.delay.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Delay`

### [ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)

The encoded representation of a polyline. More information on polyline encoding can be found here: [https://developers.google.com/maps/documentation/utilities/polylinealgorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) [https://developers.google.com/maps/documentation/javascript/reference/geometry#encoding](https://developers.google.com/maps/documentation/javascript/reference/geometry#encoding).

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline`

### [ShipmentRoute.EncodedPolyline.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline.Builder)

The encoded representation of a polyline. More information on polyline encoding can be found here: [https://developers.google.com/maps/documentation/utilities/polylinealgorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) [https://developers.google.com/maps/documentation/javascript/reference/geometry#encoding](https://developers.google.com/maps/documentation/javascript/reference/geometry#encoding).

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline`

### [ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)

Transition between two events on the route. See the description of ShipmentRoute. If the vehicle does not have a `start_location` and/or `end_location`, the corresponding travel metrics are 0.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Transition`

### [ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)

Transition between two events on the route. See the description of ShipmentRoute. If the vehicle does not have a `start_location` and/or `end_location`, the corresponding travel metrics are 0.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Transition`

### [ShipmentRoute.TravelStep](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep)

Deprecated: Use ShipmentRoute.Transition instead. Travel between each visit along the route: from the vehicle's `start_location` to the first visit's `arrival_location`, then from the first visit's `departure_location` to the second visit's `arrival_location`, and so on until the vehicle's `end_location`. This accounts only for the actual travel between visits, not counting the waiting time, the time spent performing a visit, nor the distance covered during a visit. Invariant: `travel_steps_size() == visits_size() + 1`. If the vehicle does not have a start\_ and/or end\_location, the corresponding travel metrics are 0 and/or empty.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.TravelStep`

### [ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)

Deprecated: Use ShipmentRoute.Transition instead. Travel between each visit along the route: from the vehicle's `start_location` to the first visit's `arrival_location`, then from the first visit's `departure_location` to the second visit's `arrival_location`, and so on until the vehicle's `end_location`. This accounts only for the actual travel between visits, not counting the waiting time, the time spent performing a visit, nor the distance covered during a visit. Invariant: `travel_steps_size() == visits_size() + 1`. If the vehicle does not have a start\_ and/or end\_location, the corresponding travel metrics are 0 and/or empty.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.TravelStep`

### [ShipmentRoute.VehicleLoad](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)

Reports the actual load of the vehicle at some point along the route, for a given type (see Transition.vehicle\_loads).

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.VehicleLoad`

### [ShipmentRoute.VehicleLoad.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad.Builder)

Reports the actual load of the vehicle at some point along the route, for a given type (see Transition.vehicle\_loads).

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.VehicleLoad`

### [ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)

A visit performed during a route. This visit corresponds to a pickup or a delivery of a `Shipment`.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Visit`

### [ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)

A visit performed during a route. This visit corresponds to a pickup or a delivery of a `Shipment`.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Visit`

### [ShipmentTypeIncompatibility](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeIncompatibility)

Specifies incompatibilties between shipments depending on their shipment\_type. The appearance of incompatible shipments on the same route is restricted based on the incompatibility mode.

Protobuf type `google.cloud.optimization.v1.ShipmentTypeIncompatibility`

### [ShipmentTypeIncompatibility.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeIncompatibility.Builder)

Specifies incompatibilties between shipments depending on their shipment\_type. The appearance of incompatible shipments on the same route is restricted based on the incompatibility mode.

Protobuf type `google.cloud.optimization.v1.ShipmentTypeIncompatibility`

### [ShipmentTypeRequirement](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeRequirement)

Specifies requirements between shipments based on their shipment\_type. The specifics of the requirement are defined by the requirement mode.

Protobuf type `google.cloud.optimization.v1.ShipmentTypeRequirement`

### [ShipmentTypeRequirement.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeRequirement.Builder)

Specifies requirements between shipments based on their shipment\_type. The specifics of the requirement are defined by the requirement mode.

Protobuf type `google.cloud.optimization.v1.ShipmentTypeRequirement`

### [SkippedShipment](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipment)

Specifies details of unperformed shipments in a solution. For trivial cases and/or if we are able to identify the cause for skipping, we report the reason here.

Protobuf type `google.cloud.optimization.v1.SkippedShipment`

### [SkippedShipment.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipment.Builder)

Specifies details of unperformed shipments in a solution. For trivial cases and/or if we are able to identify the cause for skipping, we report the reason here.

Protobuf type `google.cloud.optimization.v1.SkippedShipment`

### [SkippedShipment.Reason](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipment.Reason)

If we can explain why the shipment was skipped, reasons will be listed here. If the reason is not the same for all vehicles, `reason` will have more than 1 element. A skipped shipment cannot have duplicate reasons, i.e. where all fields are the same except for `example_vehicle_index`. Example: `<code><code> reasons { code: DEMAND_EXCEEDS_VEHICLE_CAPACITY example_vehicle_index: 1 example_exceeded_capacity_type: "Apples" } reasons { code: DEMAND_EXCEEDS_VEHICLE_CAPACITY example_vehicle_index: 3 example_exceeded_capacity_type: "Pears" } reasons { code: CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DISTANCE_LIMIT example_vehicle_index: 1 } </code></code>` The skipped shipment is incompatible with all vehicles. The reasons may be different for all vehicles but at least one vehicle's "Apples" capacity would be exceeded (including vehicle 1), at least one vehicle's "Pears" capacity would be exceeded (including vehicle 3) and at least one vehicle's distance limit would be exceeded (including vehicle 1).

Protobuf type `google.cloud.optimization.v1.SkippedShipment.Reason`

### [SkippedShipment.Reason.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipment.Reason.Builder)

If we can explain why the shipment was skipped, reasons will be listed here. If the reason is not the same for all vehicles, `reason` will have more than 1 element. A skipped shipment cannot have duplicate reasons, i.e. where all fields are the same except for `example_vehicle_index`. Example: `<code><code> reasons { code: DEMAND_EXCEEDS_VEHICLE_CAPACITY example_vehicle_index: 1 example_exceeded_capacity_type: "Apples" } reasons { code: DEMAND_EXCEEDS_VEHICLE_CAPACITY example_vehicle_index: 3 example_exceeded_capacity_type: "Pears" } reasons { code: CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DISTANCE_LIMIT example_vehicle_index: 1 } </code></code>` The skipped shipment is incompatible with all vehicles. The reasons may be different for all vehicles but at least one vehicle's "Apples" capacity would be exceeded (including vehicle 1), at least one vehicle's "Pears" capacity would be exceeded (including vehicle 3) and at least one vehicle's distance limit would be exceeded (including vehicle 1).

Protobuf type `google.cloud.optimization.v1.SkippedShipment.Reason`

### [TimeWindow](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TimeWindow)

Time windows constrain the time of an event, such as the arrival time at a visit, or the start and end time of a vehicle. Hard time window bounds, `start_time` and `end_time`, enforce the earliest and latest time of the event, such that `start_time <= event_time <= end_time`. The soft time window lower bound, `soft_start_time`, expresses a preference for the event to happen at or after `soft_start_time` by incurring a cost proportional to how long before soft\_start\_time the event occurs. The soft time window upper bound, `soft_end_time`, expresses a preference for the event to happen at or before `soft_end_time` by incurring a cost proportional to how long after `soft_end_time` the event occurs. `start_time`, `end_time`, `soft_start_time` and `soft_end_time` should be within the global time limits (see ShipmentModel.global\_start\_time and ShipmentModel.global\_end\_time) and should respect: `<code><code> 0 &lt;= </code>start_time<code> &lt;= </code>soft_start_time<code> &lt;= </code>end_time<code> and 0 &lt;= </code>start_time<code> &lt;= </code>soft_end_time<code> &lt;= </code>end_time<code>. </code></code>`

Protobuf type `google.cloud.optimization.v1.TimeWindow`

### [TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TimeWindow.Builder)

Time windows constrain the time of an event, such as the arrival time at a visit, or the start and end time of a vehicle. Hard time window bounds, `start_time` and `end_time`, enforce the earliest and latest time of the event, such that `start_time <= event_time <= end_time`. The soft time window lower bound, `soft_start_time`, expresses a preference for the event to happen at or after `soft_start_time` by incurring a cost proportional to how long before soft\_start\_time the event occurs. The soft time window upper bound, `soft_end_time`, expresses a preference for the event to happen at or before `soft_end_time` by incurring a cost proportional to how long after `soft_end_time` the event occurs. `start_time`, `end_time`, `soft_start_time` and `soft_end_time` should be within the global time limits (see ShipmentModel.global\_start\_time and ShipmentModel.global\_end\_time) and should respect: `<code><code> 0 &lt;= </code>start_time<code> &lt;= </code>soft_start_time<code> &lt;= </code>end_time<code> and 0 &lt;= </code>start_time<code> &lt;= </code>soft_end_time<code> &lt;= </code>end_time<code>. </code></code>`

Protobuf type `google.cloud.optimization.v1.TimeWindow`

### [TransitionAttributes](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TransitionAttributes)

Specifies attributes of transitions between two consecutive visits on a route. Several `TransitionAttributes` may apply to the same transition: in that case, all extra costs add up and the strictest constraint or limit applies (following natural "AND" semantics).

Protobuf type `google.cloud.optimization.v1.TransitionAttributes`

### [TransitionAttributes.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TransitionAttributes.Builder)

Specifies attributes of transitions between two consecutive visits on a route. Several `TransitionAttributes` may apply to the same transition: in that case, all extra costs add up and the strictest constraint or limit applies (following natural "AND" semantics).

Protobuf type `google.cloud.optimization.v1.TransitionAttributes`

### [Vehicle](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle)

Models a vehicle in a shipment problem. Solving a shipment problem will build a route starting from `start_location` and ending at `end_location` for this vehicle. A route is a sequence of visits (see `ShipmentRoute`).

Protobuf type `google.cloud.optimization.v1.Vehicle`

### [Vehicle.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.Builder)

Models a vehicle in a shipment problem. Solving a shipment problem will build a route starting from `start_location` and ending at `end_location` for this vehicle. A route is a sequence of visits (see `ShipmentRoute`).

Protobuf type `google.cloud.optimization.v1.Vehicle`

### [Vehicle.DurationLimit](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.DurationLimit)

A limit defining a maximum duration of the route of a vehicle. It can be either hard or soft. When a soft limit field is defined, both the soft max threshold and its associated cost must be defined together.

Protobuf type `google.cloud.optimization.v1.Vehicle.DurationLimit`

### [Vehicle.DurationLimit.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.DurationLimit.Builder)

A limit defining a maximum duration of the route of a vehicle. It can be either hard or soft. When a soft limit field is defined, both the soft max threshold and its associated cost must be defined together.

Protobuf type `google.cloud.optimization.v1.Vehicle.DurationLimit`

### [Vehicle.LoadLimit](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.LoadLimit)

Defines a load limit applying to a vehicle, e.g. "this truck may only carry up to 3500 kg". See load\_limits.

Protobuf type `google.cloud.optimization.v1.Vehicle.LoadLimit`

### [Vehicle.LoadLimit.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.LoadLimit.Builder)

Defines a load limit applying to a vehicle, e.g. "this truck may only carry up to 3500 kg". See load\_limits.

Protobuf type `google.cloud.optimization.v1.Vehicle.LoadLimit`

### [Vehicle.LoadLimit.Interval](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.LoadLimit.Interval)

Interval of acceptable load amounts.

Protobuf type `google.cloud.optimization.v1.Vehicle.LoadLimit.Interval`

### [Vehicle.LoadLimit.Interval.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.LoadLimit.Interval.Builder)

Interval of acceptable load amounts.

Protobuf type `google.cloud.optimization.v1.Vehicle.LoadLimit.Interval`

### [Waypoint](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Waypoint)

Encapsulates a waypoint. Waypoints mark arrival and departure locations of VisitRequests, and start and end locations of Vehicles.

Protobuf type `google.cloud.optimization.v1.Waypoint`

### [Waypoint.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Waypoint.Builder)

Encapsulates a waypoint. Waypoints mark arrival and departure locations of VisitRequests, and start and end locations of Vehicles.

Protobuf type `google.cloud.optimization.v1.Waypoint`

## Interfaces

### [AggregatedMetricsOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AggregatedMetricsOrBuilder)

### [AsyncModelMetadataOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AsyncModelMetadataOrBuilder)

### [BatchOptimizeToursRequest.AsyncModelConfigOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequest.AsyncModelConfigOrBuilder)

### [BatchOptimizeToursRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursRequestOrBuilder)

### [BatchOptimizeToursResponseOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BatchOptimizeToursResponseOrBuilder)

### [BreakRule.BreakRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.BreakRequestOrBuilder)

### [BreakRule.FrequencyConstraintOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRule.FrequencyConstraintOrBuilder)

### [BreakRuleOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.BreakRuleOrBuilder)

### [CapacityQuantityIntervalOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantityIntervalOrBuilder)

### [CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)

### [DistanceLimitOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.DistanceLimitOrBuilder)

### [FleetRoutingGrpc.AsyncService](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.FleetRoutingGrpc.AsyncService)

A service for optimizing vehicle tours. Validity of certain types of fields:

-   `google.protobuf.Timestamp`
    -   Times are in Unix time: seconds since 1970-01-01T00:00:00+00:00.
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.protobuf.Duration`
    -   seconds must be in \[0, 253402300799\], i.e. in \[1970-01-01T00:00:00+00:00, 9999-12-31T23:59:59+00:00\].
    -   nanos must be unset or set to 0.
-   `google.type.LatLng`
    -   latitude must be in \[-90.0, 90.0\].
    -   longitude must be in \[-180.0, 180.0\].
    -   at least one of latitude and longitude must be non-zero.

### [GcsDestinationOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.GcsDestinationOrBuilder)

### [GcsSourceOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.GcsSourceOrBuilder)

### [InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder)

### [InjectedSolutionConstraint.ConstraintRelaxationOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxationOrBuilder)

### [InjectedSolutionConstraintOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraintOrBuilder)

### [InputConfigOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InputConfigOrBuilder)

### [LocationOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.LocationOrBuilder)

### [OptimizeToursRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursRequestOrBuilder)

### [OptimizeToursResponse.MetricsOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursResponse.MetricsOrBuilder)

### [OptimizeToursResponseOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursResponseOrBuilder)

### [OptimizeToursValidationError.FieldReferenceOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationError.FieldReferenceOrBuilder)

### [OptimizeToursValidationErrorOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationErrorOrBuilder)

### [OutputConfigOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OutputConfigOrBuilder)

### [Shipment.LoadOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.LoadOrBuilder)

### [Shipment.VisitRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequestOrBuilder)

### [ShipmentModel.BreakRule.BreakRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.BreakRequestOrBuilder)

### [ShipmentModel.BreakRule.FrequencyConstraintOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRule.FrequencyConstraintOrBuilder)

### [ShipmentModel.BreakRuleOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.BreakRuleOrBuilder)

### [ShipmentModel.DurationDistanceMatrix.RowOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrix.RowOrBuilder)

### [ShipmentModel.DurationDistanceMatrixOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.DurationDistanceMatrixOrBuilder)

### [ShipmentModel.PrecedenceRuleOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModel.PrecedenceRuleOrBuilder)

### [ShipmentModelOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentModelOrBuilder)

### [ShipmentOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentOrBuilder)

### [ShipmentRoute.BreakOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.BreakOrBuilder)

### [ShipmentRoute.DelayOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.DelayOrBuilder)

### [ShipmentRoute.EncodedPolylineOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolylineOrBuilder)

### [ShipmentRoute.TransitionOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.TransitionOrBuilder)

### [ShipmentRoute.TravelStepOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStepOrBuilder)

### [ShipmentRoute.VehicleLoadOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoadOrBuilder)

### [ShipmentRoute.VisitOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRoute.VisitOrBuilder)

### [ShipmentRouteOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentRouteOrBuilder)

### [ShipmentTypeIncompatibilityOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeIncompatibilityOrBuilder)

### [ShipmentTypeRequirementOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeRequirementOrBuilder)

### [SkippedShipment.ReasonOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipment.ReasonOrBuilder)

### [SkippedShipmentOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipmentOrBuilder)

### [TimeWindowOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TimeWindowOrBuilder)

### [TransitionAttributesOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TransitionAttributesOrBuilder)

### [Vehicle.DurationLimitOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.DurationLimitOrBuilder)

### [Vehicle.LoadLimit.IntervalOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.LoadLimit.IntervalOrBuilder)

### [Vehicle.LoadLimitOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.LoadLimitOrBuilder)

### [VehicleOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.VehicleOrBuilder)

### [WaypointOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.WaypointOrBuilder)

## Enums

### [AsyncModelMetadata.State](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.AsyncModelMetadata.State)

Possible states of the operation.

Protobuf enum `google.cloud.optimization.v1.AsyncModelMetadata.State`

### [DataFormat](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.DataFormat)

Data formats for input and output files.

Protobuf enum `google.cloud.optimization.v1.DataFormat`

### [InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level)

Expresses the different constraint relaxation levels, which are applied for a visit and those that follow when it satisfies the threshold conditions. The enumeration below is in order of increasing relaxation.

Protobuf enum `google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level`

### [InputConfig.SourceCase](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.InputConfig.SourceCase)

### [OptimizeToursRequest.SearchMode](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursRequest.SearchMode)

Mode defining the behavior of the search, trading off latency versus solution quality. In all modes, the global request deadline is enforced.

Protobuf enum `google.cloud.optimization.v1.OptimizeToursRequest.SearchMode`

### [OptimizeToursRequest.SolvingMode](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursRequest.SolvingMode)

Defines how the solver should handle the request. In all modes but `VALIDATE_ONLY`, if the request is invalid, you will receive an `INVALID_REQUEST` error. See max\_validation\_errors to cap the number of errors returned.

Protobuf enum `google.cloud.optimization.v1.OptimizeToursRequest.SolvingMode`

### [OptimizeToursValidationError.FieldReference.IndexOrKeyCase](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OptimizeToursValidationError.FieldReference.IndexOrKeyCase)

### [OutputConfig.DestinationCase](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.OutputConfig.DestinationCase)

### [ShipmentTypeIncompatibility.IncompatibilityMode](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeIncompatibility.IncompatibilityMode)

Modes defining how the appearance of incompatible shipments are restricted on the same route.

Protobuf enum `google.cloud.optimization.v1.ShipmentTypeIncompatibility.IncompatibilityMode`

### [ShipmentTypeRequirement.RequirementMode](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.ShipmentTypeRequirement.RequirementMode)

Modes defining the appearance of dependent shipments on a route.

Protobuf enum `google.cloud.optimization.v1.ShipmentTypeRequirement.RequirementMode`

### [SkippedShipment.Reason.Code](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.SkippedShipment.Reason.Code)

Code identifying the reason type. The order here is meaningless. In particular, it gives no indication of whether a given reason will appear before another in the solution, if both apply.

Protobuf enum `google.cloud.optimization.v1.SkippedShipment.Reason.Code`

### [Vehicle.TravelMode](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.TravelMode)

Travel modes which can be used by vehicles. These should be a subset of the Google Maps Platform Routes Preferred API travel modes, see: [https://developers.google.com/maps/documentation/routes\_preferred/reference/rest/Shared.Types/RouteTravelMode](https://developers.google.com/maps/documentation/routes_preferred/reference/rest/Shared.Types/RouteTravelMode).

Protobuf enum `google.cloud.optimization.v1.Vehicle.TravelMode`

### [Vehicle.UnloadingPolicy](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Vehicle.UnloadingPolicy)

Policy on how a vehicle can be unloaded. Applies only to shipments having both a pickup and a delivery. Other shipments are free to occur anywhere on the route independent of `unloading_policy`.

Protobuf enum `google.cloud.optimization.v1.Vehicle.UnloadingPolicy`

### [Waypoint.LocationTypeCase](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Waypoint.LocationTypeCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
