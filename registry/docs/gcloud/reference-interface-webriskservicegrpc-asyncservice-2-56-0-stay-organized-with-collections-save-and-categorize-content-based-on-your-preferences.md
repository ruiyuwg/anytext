-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface WebRiskServiceGrpc.AsyncService (2.56.0) Stay organized with collections Save and categorize content based on your preferences.

2.86.0 (latest) 2.84.0 2.82.0 2.81.0 2.79.0 2.77.0 2.75.0 2.74.0 2.73.0 2.72.0 2.71.0 2.69.0 2.67.0 2.66.0 2.63.0 2.62.0 2.61.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.6 2.0.12

```
public static interface WebRiskServiceGrpc.AsyncService
```

Web Risk API defines an interface to detect malicious URLs on your website and in client applications.

## Methods

### computeThreatListDiff(ComputeThreatListDiffRequest request, StreamObserver<ComputeThreatListDiffResponse> responseObserver)

```
public default void computeThreatListDiff(ComputeThreatListDiffRequest request, StreamObserver<ComputeThreatListDiffResponse> responseObserver)
```

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

**Parameters**

**Name**

**Description**

`request`

`[ComputeThreatListDiffRequest](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.ComputeThreatListDiffRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ComputeThreatListDiffResponse](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.ComputeThreatListDiffResponse)>`  

### createSubmission(CreateSubmissionRequest request, StreamObserver<Submission> responseObserver)

```
public default void createSubmission(CreateSubmissionRequest request, StreamObserver<Submission> responseObserver)
```

Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.

**Parameters**

**Name**

**Description**

`request`

`[CreateSubmissionRequest](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.CreateSubmissionRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Submission](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.Submission)>`  

### searchHashes(SearchHashesRequest request, StreamObserver<SearchHashesResponse> responseObserver)

```
public default void searchHashes(SearchHashesRequest request, StreamObserver<SearchHashesResponse> responseObserver)
```

Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

**Parameters**

**Name**

**Description**

`request`

`[SearchHashesRequest](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.SearchHashesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchHashesResponse](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.SearchHashesResponse)>`  

### searchUris(SearchUrisRequest request, StreamObserver<SearchUrisResponse> responseObserver)

```
public default void searchUris(SearchUrisRequest request, StreamObserver<SearchUrisResponse> responseObserver)
```

This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

**Parameters**

**Name**

**Description**

`request`

`[SearchUrisRequest](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.SearchUrisRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchUrisResponse](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.SearchUrisResponse)>`  

### submitUri(SubmitUriRequest request, StreamObserver<Operation> responseObserver)

```
public default void submitUri(SubmitUriRequest request, StreamObserver<Operation> responseObserver)
```

Submits a URI suspected of containing malicious content to be reviewed. Returns a google.longrunning.Operation which, once the review is complete, is updated with its result. You can use the [Pub/Sub API](https://cloud.google.com/pubsub) to receive notifications for the returned Operation. If the result verifies the existence of malicious content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.

**Parameters**

**Name**

**Description**

`request`

`[SubmitUriRequest](/java/docs/reference/google-cloud-webrisk/2.56.0/com.google.webrisk.v1.SubmitUriRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
