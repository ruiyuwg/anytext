-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# BigQuery Reservation v1 API - Class SearchAssignmentsRequest (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.10.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.9.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.8.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.7.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.6.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.5.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.4.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.3.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.2.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.1.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/2.0.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/1.6.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/1.5.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/1.4.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/1.3.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/1.2.0/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)

```
public sealed class SearchAssignmentsRequest : IMessage<SearchAssignmentsRequest>, IEquatable<SearchAssignmentsRequest>, IDeepCloneable<SearchAssignmentsRequest>, IBufferMessage, IMessage, IPageRequest
```

Reference documentation and code samples for the BigQuery Reservation v1 API class SearchAssignmentsRequest.

The request for \[ReservationService.SearchAssignments\]\[google.cloud.bigquery.reservation.v1.ReservationService.SearchAssignments\]. Note: "bigquery.reservationAssignments.search" permission is required on the related assignee.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchAssignmentsRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[SearchAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SearchAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[SearchAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.Reservation.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1)

## Assembly

Google.Cloud.BigQuery.Reservation.V1.dll

## Constructors

### SearchAssignmentsRequest()

```
public SearchAssignmentsRequest()
```

### SearchAssignmentsRequest(SearchAssignmentsRequest)

```
public SearchAssignmentsRequest(SearchAssignmentsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest)`  

## Properties

### PageSize

```
public int PageSize { get; set; }
```

The maximum number of items to return per page.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

The next\_page\_token value returned from a previous List request, if any.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsLocationName

```
public LocationName ParentAsLocationName { get; set; }
```

[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.BigQuery.Reservation.V1/latest/Google.Cloud.BigQuery.Reservation.V1.SearchAssignmentsRequest#Google_Cloud_BigQuery_Reservation_V1_SearchAssignmentsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`

### Query

```
public string Query { get; set; }
```

Please specify resource name as assignee in the query.

Examples:

-   `assignee=projects/myproject`
-   `assignee=folders/123`
-   `assignee=organizations/456`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
