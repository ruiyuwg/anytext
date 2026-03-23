-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UserEventServiceGrpc.AsyncService (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface UserEventServiceGrpc.AsyncService
```

Service for ingesting end user actions on the customer website.

## Methods

### collectUserEvent(CollectUserEventRequest request, StreamObserver<HttpBody> responseObserver)

```
public default void collectUserEvent(CollectUserEventRequest request, StreamObserver<HttpBody> responseObserver)
```

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

**Parameters**

**Name**

**Description**

`request`

`[CollectUserEventRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2alpha.CollectUserEventRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.api.HttpBody>`  

### importUserEvents(ImportUserEventsRequest request, StreamObserver<Operation> responseObserver)

```
public default void importUserEvents(ImportUserEventsRequest request, StreamObserver<Operation> responseObserver)
```

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

**Parameters**

**Name**

**Description**

`request`

`[ImportUserEventsRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2alpha.ImportUserEventsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### purgeUserEvents(PurgeUserEventsRequest request, StreamObserver<Operation> responseObserver)

```
public default void purgeUserEvents(PurgeUserEventsRequest request, StreamObserver<Operation> responseObserver)
```

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

**Parameters**

**Name**

**Description**

`request`

`[PurgeUserEventsRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2alpha.PurgeUserEventsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### rejoinUserEvents(RejoinUserEventsRequest request, StreamObserver<Operation> responseObserver)

```
public default void rejoinUserEvents(RejoinUserEventsRequest request, StreamObserver<Operation> responseObserver)
```

Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

**Parameters**

**Name**

**Description**

`request`

`[RejoinUserEventsRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2alpha.RejoinUserEventsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### writeUserEvent(WriteUserEventRequest request, StreamObserver<UserEvent> responseObserver)

```
public default void writeUserEvent(WriteUserEventRequest request, StreamObserver<UserEvent> responseObserver)
```

Writes a single user event.

**Parameters**

**Name**

**Description**

`request`

`[WriteUserEventRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2alpha.WriteUserEventRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[UserEvent](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2alpha.UserEvent)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
