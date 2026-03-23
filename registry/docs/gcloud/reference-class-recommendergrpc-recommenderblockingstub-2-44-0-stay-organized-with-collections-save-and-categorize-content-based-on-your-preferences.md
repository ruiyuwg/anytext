-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RecommenderGrpc.RecommenderBlockingStub (2.44.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

```
public static final class RecommenderGrpc.RecommenderBlockingStub extends AbstractBlockingStub<RecommenderGrpc.RecommenderBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service Recommender.

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> RecommenderGrpc.RecommenderBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

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

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected RecommenderGrpc.RecommenderBlockingStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[RecommenderGrpc.RecommenderBlockingStub](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.RecommenderGrpc.RecommenderBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### getInsight(GetInsightRequest request)

```
public Insight getInsight(GetInsightRequest request)
```

Gets the requested insight. Requires the recommender.\*.get IAM permission for the specified insight type.

**Parameter**

**Name**

**Description**

`request`

`[GetInsightRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.GetInsightRequest)`  

**Returns**

**Type**

**Description**

`[Insight](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.Insight)`

### getInsightTypeConfig(GetInsightTypeConfigRequest request)

```
public InsightTypeConfig getInsightTypeConfig(GetInsightTypeConfigRequest request)
```

Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.

**Parameter**

**Name**

**Description**

`request`

`[GetInsightTypeConfigRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest)`  

**Returns**

**Type**

**Description**

`[InsightTypeConfig](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.InsightTypeConfig)`

### getRecommendation(GetRecommendationRequest request)

```
public Recommendation getRecommendation(GetRecommendationRequest request)
```

Gets the requested recommendation. Requires the recommender.\*.get IAM permission for the specified recommender.

**Parameter**

**Name**

**Description**

`request`

`[GetRecommendationRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.GetRecommendationRequest)`  

**Returns**

**Type**

**Description**

`[Recommendation](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.Recommendation)`

### getRecommenderConfig(GetRecommenderConfigRequest request)

```
public RecommenderConfig getRecommenderConfig(GetRecommenderConfigRequest request)
```

Gets the requested Recommender Config. There is only one instance of the config for each Recommender.

**Parameter**

**Name**

**Description**

`request`

`[GetRecommenderConfigRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.GetRecommenderConfigRequest)`  

**Returns**

**Type**

**Description**

`[RecommenderConfig](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.RecommenderConfig)`

### listInsightTypes(ListInsightTypesRequest request)

```
public ListInsightTypesResponse listInsightTypes(ListInsightTypesRequest request)
```

Lists available InsightTypes. No IAM permissions are required.

**Parameter**

**Name**

**Description**

`request`

`[ListInsightTypesRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListInsightTypesRequest)`  

**Returns**

**Type**

**Description**

`[ListInsightTypesResponse](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListInsightTypesResponse)`

### listInsights(ListInsightsRequest request)

```
public ListInsightsResponse listInsights(ListInsightsRequest request)
```

Lists insights for the specified Cloud Resource. Requires the recommender.\*.list IAM permission for the specified insight type.

**Parameter**

**Name**

**Description**

`request`

`[ListInsightsRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListInsightsRequest)`  

**Returns**

**Type**

**Description**

`[ListInsightsResponse](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListInsightsResponse)`

### listRecommendations(ListRecommendationsRequest request)

```
public ListRecommendationsResponse listRecommendations(ListRecommendationsRequest request)
```

Lists recommendations for the specified Cloud Resource. Requires the recommender.\*.list IAM permission for the specified recommender.

**Parameter**

**Name**

**Description**

`request`

`[ListRecommendationsRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListRecommendationsRequest)`  

**Returns**

**Type**

**Description**

`[ListRecommendationsResponse](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListRecommendationsResponse)`

### listRecommenders(ListRecommendersRequest request)

```
public ListRecommendersResponse listRecommenders(ListRecommendersRequest request)
```

Lists all available Recommenders. No IAM permissions are required.

**Parameter**

**Name**

**Description**

`request`

`[ListRecommendersRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListRecommendersRequest)`  

**Returns**

**Type**

**Description**

`[ListRecommendersResponse](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.ListRecommendersResponse)`

### markInsightAccepted(MarkInsightAcceptedRequest request)

```
public Insight markInsightAccepted(MarkInsightAcceptedRequest request)
```

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.\*.update IAM permission for the specified insight.

**Parameter**

**Name**

**Description**

`request`

`[MarkInsightAcceptedRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest)`  

**Returns**

**Type**

**Description**

`[Insight](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.Insight)`

### markRecommendationClaimed(MarkRecommendationClaimedRequest request)

```
public Recommendation markRecommendationClaimed(MarkRecommendationClaimedRequest request)
```

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.\*.update IAM permission for the specified recommender.

**Parameter**

**Name**

**Description**

`request`

`[MarkRecommendationClaimedRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest)`  

**Returns**

**Type**

**Description**

`[Recommendation](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.Recommendation)`

### markRecommendationFailed(MarkRecommendationFailedRequest request)

```
public Recommendation markRecommendationFailed(MarkRecommendationFailedRequest request)
```

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.\*.update IAM permission for the specified recommender.

**Parameter**

**Name**

**Description**

`request`

`[MarkRecommendationFailedRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest)`  

**Returns**

**Type**

**Description**

`[Recommendation](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.Recommendation)`

### markRecommendationSucceeded(MarkRecommendationSucceededRequest request)

```
public Recommendation markRecommendationSucceeded(MarkRecommendationSucceededRequest request)
```

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.\*.update IAM permission for the specified recommender.

**Parameter**

**Name**

**Description**

`request`

`[MarkRecommendationSucceededRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest)`  

**Returns**

**Type**

**Description**

`[Recommendation](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.Recommendation)`

### updateInsightTypeConfig(UpdateInsightTypeConfigRequest request)

```
public InsightTypeConfig updateInsightTypeConfig(UpdateInsightTypeConfigRequest request)
```

Updates an InsightTypeConfig change. This will create a new revision of the config.

**Parameter**

**Name**

**Description**

`request`

`[UpdateInsightTypeConfigRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest)`  

**Returns**

**Type**

**Description**

`[InsightTypeConfig](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.InsightTypeConfig)`

### updateRecommenderConfig(UpdateRecommenderConfigRequest request)

```
public RecommenderConfig updateRecommenderConfig(UpdateRecommenderConfigRequest request)
```

Updates a Recommender Config. This will create a new revision of the config.

**Parameter**

**Name**

**Description**

`request`

`[UpdateRecommenderConfigRequest](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest)`  

**Returns**

**Type**

**Description**

`[RecommenderConfig](/java/docs/reference/google-cloud-recommender/2.44.0/com.google.cloud.recommender.v1beta1.RecommenderConfig)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
