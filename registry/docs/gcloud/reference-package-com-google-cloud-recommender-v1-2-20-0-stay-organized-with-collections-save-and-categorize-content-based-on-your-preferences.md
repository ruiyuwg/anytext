-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.recommender.v1 (2.20.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

A client to Recommender API

The interfaces provided are listed below, along with usage samples.

## RecommenderClient

Service Description: Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

Sample for RecommenderClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecommenderClient recommenderClient = RecommenderClient.create()) {
   InsightName name =
       InsightName.ofProjectLocationInsightTypeInsightName(
           "[PROJECT]", "[LOCATION]", "[INSIGHT_TYPE]", "[INSIGHT]");
   Insight response = recommenderClient.getInsight(name);
 }
 
```
 

## Classes

### [CostProjection](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.CostProjection)

Contains metadata about how much money a recommendation can save or incur.

Protobuf type `google.cloud.recommender.v1.CostProjection`

### [CostProjection.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.CostProjection.Builder)

Contains metadata about how much money a recommendation can save or incur.

Protobuf type `google.cloud.recommender.v1.CostProjection`

### [GetInsightRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetInsightRequest)

Request to the `GetInsight` method.

Protobuf type `google.cloud.recommender.v1.GetInsightRequest`

### [GetInsightRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetInsightRequest.Builder)

Request to the `GetInsight` method.

Protobuf type `google.cloud.recommender.v1.GetInsightRequest`

### [GetInsightTypeConfigRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetInsightTypeConfigRequest)

Request for the GetInsightTypeConfig\` method.

Protobuf type `google.cloud.recommender.v1.GetInsightTypeConfigRequest`

### [GetInsightTypeConfigRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetInsightTypeConfigRequest.Builder)

Request for the GetInsightTypeConfig\` method.

Protobuf type `google.cloud.recommender.v1.GetInsightTypeConfigRequest`

### [GetRecommendationRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetRecommendationRequest)

Request to the `GetRecommendation` method.

Protobuf type `google.cloud.recommender.v1.GetRecommendationRequest`

### [GetRecommendationRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetRecommendationRequest.Builder)

Request to the `GetRecommendation` method.

Protobuf type `google.cloud.recommender.v1.GetRecommendationRequest`

### [GetRecommenderConfigRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetRecommenderConfigRequest)

Request for the GetRecommenderConfig\` method.

Protobuf type `google.cloud.recommender.v1.GetRecommenderConfigRequest`

### [GetRecommenderConfigRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetRecommenderConfigRequest.Builder)

Request for the GetRecommenderConfig\` method.

Protobuf type `google.cloud.recommender.v1.GetRecommenderConfigRequest`

### [Impact](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Impact)

Contains the impact a recommendation can have for a given category.

Protobuf type `google.cloud.recommender.v1.Impact`

### [Impact.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Impact.Builder)

Contains the impact a recommendation can have for a given category.

Protobuf type `google.cloud.recommender.v1.Impact`

### [Insight](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight)

An insight along with the information used to derive the insight. The insight may have associated recomendations as well.

Protobuf type `google.cloud.recommender.v1.Insight`

### [Insight.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight.Builder)

An insight along with the information used to derive the insight. The insight may have associated recomendations as well.

Protobuf type `google.cloud.recommender.v1.Insight`

### [Insight.RecommendationReference](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight.RecommendationReference)

Reference to an associated recommendation.

Protobuf type `google.cloud.recommender.v1.Insight.RecommendationReference`

### [Insight.RecommendationReference.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight.RecommendationReference.Builder)

Reference to an associated recommendation.

Protobuf type `google.cloud.recommender.v1.Insight.RecommendationReference`

### [InsightName](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightName)

### [InsightName.BillingAccountLocationInsightTypeInsightBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightName.BillingAccountLocationInsightTypeInsightBuilder)

Builder for billingAccounts/{billing\_account}/locations/{location}/insightTypes/{insight\_type}/insights/{insight}.

### [InsightName.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightName.Builder)

Builder for projects/{project}/locations/{location}/insightTypes/{insight\_type}/insights/{insight}.

### [InsightName.FolderLocationInsightTypeInsightBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightName.FolderLocationInsightTypeInsightBuilder)

Builder for folders/{folder}/locations/{location}/insightTypes/{insight\_type}/insights/{insight}.

### [InsightName.OrganizationLocationInsightTypeInsightBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightName.OrganizationLocationInsightTypeInsightBuilder)

Builder for organizations/{organization}/locations/{location}/insightTypes/{insight\_type}/insights/{insight}.

### [InsightProto](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightProto)

### [InsightStateInfo](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightStateInfo)

Information related to insight state.

Protobuf type `google.cloud.recommender.v1.InsightStateInfo`

### [InsightStateInfo.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightStateInfo.Builder)

Information related to insight state.

Protobuf type `google.cloud.recommender.v1.InsightStateInfo`

### [InsightTypeConfig](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfig)

Configuration for an InsightType.

Protobuf type `google.cloud.recommender.v1.InsightTypeConfig`

### [InsightTypeConfig.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfig.Builder)

Configuration for an InsightType.

Protobuf type `google.cloud.recommender.v1.InsightTypeConfig`

### [InsightTypeConfigName](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfigName)

### [InsightTypeConfigName.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfigName.Builder)

Builder for projects/{project}/locations/{location}/insightTypes/{insight\_type}/config.

### [InsightTypeConfigName.OrganizationLocationInsightTypeBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfigName.OrganizationLocationInsightTypeBuilder)

Builder for organizations/{organization}/locations/{location}/insightTypes/{insight\_type}/config.

### [InsightTypeConfigProto](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfigProto)

### [InsightTypeGenerationConfig](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeGenerationConfig)

A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.

Protobuf type `google.cloud.recommender.v1.InsightTypeGenerationConfig`

### [InsightTypeGenerationConfig.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeGenerationConfig.Builder)

A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.

Protobuf type `google.cloud.recommender.v1.InsightTypeGenerationConfig`

### [InsightTypeName](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeName)

### [InsightTypeName.BillingAccountLocationInsightTypeBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeName.BillingAccountLocationInsightTypeBuilder)

Builder for billingAccounts/{billing\_account}/locations/{location}/insightTypes/{insight\_type}.

### [InsightTypeName.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeName.Builder)

Builder for projects/{project}/locations/{location}/insightTypes/{insight\_type}.

### [InsightTypeName.FolderLocationInsightTypeBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeName.FolderLocationInsightTypeBuilder)

Builder for folders/{folder}/locations/{location}/insightTypes/{insight\_type}.

### [InsightTypeName.OrganizationLocationInsightTypeBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeName.OrganizationLocationInsightTypeBuilder)

Builder for organizations/{organization}/locations/{location}/insightTypes/{insight\_type}.

### [ListInsightsRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListInsightsRequest)

Request for the `ListInsights` method.

Protobuf type `google.cloud.recommender.v1.ListInsightsRequest`

### [ListInsightsRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListInsightsRequest.Builder)

Request for the `ListInsights` method.

Protobuf type `google.cloud.recommender.v1.ListInsightsRequest`

### [ListInsightsResponse](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListInsightsResponse)

Response to the `ListInsights` method.

Protobuf type `google.cloud.recommender.v1.ListInsightsResponse`

### [ListInsightsResponse.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListInsightsResponse.Builder)

Response to the `ListInsights` method.

Protobuf type `google.cloud.recommender.v1.ListInsightsResponse`

### [ListRecommendationsRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListRecommendationsRequest)

Request for the `ListRecommendations` method.

Protobuf type `google.cloud.recommender.v1.ListRecommendationsRequest`

### [ListRecommendationsRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListRecommendationsRequest.Builder)

Request for the `ListRecommendations` method.

Protobuf type `google.cloud.recommender.v1.ListRecommendationsRequest`

### [ListRecommendationsResponse](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListRecommendationsResponse)

Response to the `ListRecommendations` method.

Protobuf type `google.cloud.recommender.v1.ListRecommendationsResponse`

### [ListRecommendationsResponse.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListRecommendationsResponse.Builder)

Response to the `ListRecommendations` method.

Protobuf type `google.cloud.recommender.v1.ListRecommendationsResponse`

### [MarkInsightAcceptedRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkInsightAcceptedRequest)

Request for the `MarkInsightAccepted` method.

Protobuf type `google.cloud.recommender.v1.MarkInsightAcceptedRequest`

### [MarkInsightAcceptedRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkInsightAcceptedRequest.Builder)

Request for the `MarkInsightAccepted` method.

Protobuf type `google.cloud.recommender.v1.MarkInsightAcceptedRequest`

### [MarkRecommendationClaimedRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationClaimedRequest)

Request for the `MarkRecommendationClaimed` Method.

Protobuf type `google.cloud.recommender.v1.MarkRecommendationClaimedRequest`

### [MarkRecommendationClaimedRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationClaimedRequest.Builder)

Request for the `MarkRecommendationClaimed` Method.

Protobuf type `google.cloud.recommender.v1.MarkRecommendationClaimedRequest`

### [MarkRecommendationFailedRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationFailedRequest)

Request for the `MarkRecommendationFailed` Method.

Protobuf type `google.cloud.recommender.v1.MarkRecommendationFailedRequest`

### [MarkRecommendationFailedRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationFailedRequest.Builder)

Request for the `MarkRecommendationFailed` Method.

Protobuf type `google.cloud.recommender.v1.MarkRecommendationFailedRequest`

### [MarkRecommendationSucceededRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationSucceededRequest)

Request for the `MarkRecommendationSucceeded` Method.

Protobuf type `google.cloud.recommender.v1.MarkRecommendationSucceededRequest`

### [MarkRecommendationSucceededRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationSucceededRequest.Builder)

Request for the `MarkRecommendationSucceeded` Method.

Protobuf type `google.cloud.recommender.v1.MarkRecommendationSucceededRequest`

### [Operation](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Operation)

Contains an operation for a resource loosely based on the JSON-PATCH format with support for:

-   Custom filters for describing partial array patch.
-   Extended path values for describing nested arrays.
-   Custom fields for describing the resource for which the operation is being described.
-   Allows extension to custom operations not natively supported by RFC6902. See [https://tools.ietf.org/html/rfc6902](https://tools.ietf.org/html/rfc6902) for details on the original RFC.

Protobuf type `google.cloud.recommender.v1.Operation`

### [Operation.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Operation.Builder)

Contains an operation for a resource loosely based on the JSON-PATCH format with support for:

-   Custom filters for describing partial array patch.
-   Extended path values for describing nested arrays.
-   Custom fields for describing the resource for which the operation is being described.
-   Allows extension to custom operations not natively supported by RFC6902. See [https://tools.ietf.org/html/rfc6902](https://tools.ietf.org/html/rfc6902) for details on the original RFC.

Protobuf type `google.cloud.recommender.v1.Operation`

### [OperationGroup](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.OperationGroup)

Group of operations that need to be performed atomically.

Protobuf type `google.cloud.recommender.v1.OperationGroup`

### [OperationGroup.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.OperationGroup.Builder)

Group of operations that need to be performed atomically.

Protobuf type `google.cloud.recommender.v1.OperationGroup`

### [Recommendation](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Recommendation)

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

Protobuf type `google.cloud.recommender.v1.Recommendation`

### [Recommendation.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Recommendation.Builder)

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

Protobuf type `google.cloud.recommender.v1.Recommendation`

### [Recommendation.InsightReference](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Recommendation.InsightReference)

Reference to an associated insight.

Protobuf type `google.cloud.recommender.v1.Recommendation.InsightReference`

### [Recommendation.InsightReference.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Recommendation.InsightReference.Builder)

Reference to an associated insight.

Protobuf type `google.cloud.recommender.v1.Recommendation.InsightReference`

### [RecommendationContent](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationContent)

Contains what resources are changing and how they are changing.

Protobuf type `google.cloud.recommender.v1.RecommendationContent`

### [RecommendationContent.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationContent.Builder)

Contains what resources are changing and how they are changing.

Protobuf type `google.cloud.recommender.v1.RecommendationContent`

### [RecommendationName](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationName)

### [RecommendationName.BillingAccountLocationRecommenderRecommendationBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationName.BillingAccountLocationRecommenderRecommendationBuilder)

Builder for billingAccounts/{billing\_account}/locations/{location}/recommenders/{recommender}/recommendations/{recommendation}.

### [RecommendationName.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationName.Builder)

Builder for projects/{project}/locations/{location}/recommenders/{recommender}/recommendations/{recommendation}.

### [RecommendationName.FolderLocationRecommenderRecommendationBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationName.FolderLocationRecommenderRecommendationBuilder)

Builder for folders/{folder}/locations/{location}/recommenders/{recommender}/recommendations/{recommendation}.

### [RecommendationName.OrganizationLocationRecommenderRecommendationBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationName.OrganizationLocationRecommenderRecommendationBuilder)

Builder for organizations/{organization}/locations/{location}/recommenders/{recommender}/recommendations/{recommendation}.

### [RecommendationOuterClass](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationOuterClass)

### [RecommendationStateInfo](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationStateInfo)

Information for state. Contains state and metadata.

Protobuf type `google.cloud.recommender.v1.RecommendationStateInfo`

### [RecommendationStateInfo.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationStateInfo.Builder)

Information for state. Contains state and metadata.

Protobuf type `google.cloud.recommender.v1.RecommendationStateInfo`

### [RecommenderClient](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient)

Service Description: Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (RecommenderClient recommenderClient = RecommenderClient.create()) {
   InsightName name =
       InsightName.ofProjectLocationInsightTypeInsightName(
           "[PROJECT]", "[LOCATION]", "[INSIGHT_TYPE]", "[INSIGHT]");
   Insight response = recommenderClient.getInsight(name);
 }
 
```
 

Note: close() needs to be called on the RecommenderClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of RecommenderSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecommenderSettings recommenderSettings =
     RecommenderSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 RecommenderClient recommenderClient = RecommenderClient.create(recommenderSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecommenderSettings recommenderSettings =
     RecommenderSettings.newBuilder().setEndpoint(myEndpoint).build();
 RecommenderClient recommenderClient = RecommenderClient.create(recommenderSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecommenderSettings recommenderSettings = RecommenderSettings.newHttpJsonBuilder().build();
 RecommenderClient recommenderClient = RecommenderClient.create(recommenderSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [RecommenderClient.ListInsightsFixedSizeCollection](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient.ListInsightsFixedSizeCollection)

### [RecommenderClient.ListInsightsPage](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient.ListInsightsPage)

### [RecommenderClient.ListInsightsPagedResponse](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient.ListInsightsPagedResponse)

### [RecommenderClient.ListRecommendationsFixedSizeCollection](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient.ListRecommendationsFixedSizeCollection)

### [RecommenderClient.ListRecommendationsPage](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient.ListRecommendationsPage)

### [RecommenderClient.ListRecommendationsPagedResponse](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderClient.ListRecommendationsPagedResponse)

### [RecommenderConfig](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfig)

Configuration for a Recommender.

Protobuf type `google.cloud.recommender.v1.RecommenderConfig`

### [RecommenderConfig.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfig.Builder)

Configuration for a Recommender.

Protobuf type `google.cloud.recommender.v1.RecommenderConfig`

### [RecommenderConfigName](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfigName)

### [RecommenderConfigName.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfigName.Builder)

Builder for projects/{project}/locations/{location}/recommenders/{recommender}/config.

### [RecommenderConfigName.OrganizationLocationRecommenderBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfigName.OrganizationLocationRecommenderBuilder)

Builder for organizations/{organization}/locations/{location}/recommenders/{recommender}/config.

### [RecommenderConfigProto](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfigProto)

### [RecommenderGenerationConfig](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGenerationConfig)

A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.

Protobuf type `google.cloud.recommender.v1.RecommenderGenerationConfig`

### [RecommenderGenerationConfig.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGenerationConfig.Builder)

A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.

Protobuf type `google.cloud.recommender.v1.RecommenderGenerationConfig`

### [RecommenderGrpc](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGrpc)

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

### [RecommenderGrpc.RecommenderBlockingStub](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGrpc.RecommenderBlockingStub)

A stub to allow clients to do synchronous rpc calls to service Recommender.

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

### [RecommenderGrpc.RecommenderFutureStub](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGrpc.RecommenderFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service Recommender.

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

### [RecommenderGrpc.RecommenderImplBase](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGrpc.RecommenderImplBase)

Base class for the server implementation of the service Recommender.

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

### [RecommenderGrpc.RecommenderStub](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGrpc.RecommenderStub)

A stub to allow clients to do asynchronous rpc calls to service Recommender.

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

### [RecommenderName](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderName)

### [RecommenderName.BillingAccountLocationRecommenderBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderName.BillingAccountLocationRecommenderBuilder)

Builder for billingAccounts/{billing\_account}/locations/{location}/recommenders/{recommender}.

### [RecommenderName.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderName.Builder)

Builder for projects/{project}/locations/{location}/recommenders/{recommender}.

### [RecommenderName.FolderLocationRecommenderBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderName.FolderLocationRecommenderBuilder)

Builder for folders/{folder}/locations/{location}/recommenders/{recommender}.

### [RecommenderName.OrganizationLocationRecommenderBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderName.OrganizationLocationRecommenderBuilder)

Builder for organizations/{organization}/locations/{location}/recommenders/{recommender}.

### [RecommenderProto](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderProto)

### [RecommenderSettings](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderSettings)

Settings class to configure an instance of [RecommenderClient](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1beta1.RecommenderClient).

The default instance has everything set to sensible defaults:

-   The default service address (recommender.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getInsight to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 RecommenderSettings.Builder recommenderSettingsBuilder = RecommenderSettings.newBuilder();
 recommenderSettingsBuilder
     .getInsightSettings()
     .setRetrySettings(
         recommenderSettingsBuilder
             .getInsightSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 RecommenderSettings recommenderSettings = recommenderSettingsBuilder.build();
 
```
 

### [RecommenderSettings.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderSettings.Builder)

Builder for RecommenderSettings.

### [SecurityProjection](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.SecurityProjection)

Contains various ways of describing the impact on Security.

Protobuf type `google.cloud.recommender.v1.SecurityProjection`

### [SecurityProjection.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.SecurityProjection.Builder)

Contains various ways of describing the impact on Security.

Protobuf type `google.cloud.recommender.v1.SecurityProjection`

### [UpdateInsightTypeConfigRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.UpdateInsightTypeConfigRequest)

Request for the `UpdateInsightTypeConfig` method.

Protobuf type `google.cloud.recommender.v1.UpdateInsightTypeConfigRequest`

### [UpdateInsightTypeConfigRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.UpdateInsightTypeConfigRequest.Builder)

Request for the `UpdateInsightTypeConfig` method.

Protobuf type `google.cloud.recommender.v1.UpdateInsightTypeConfigRequest`

### [UpdateRecommenderConfigRequest](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.UpdateRecommenderConfigRequest)

Request for the `UpdateRecommenderConfig` method.

Protobuf type `google.cloud.recommender.v1.UpdateRecommenderConfigRequest`

### [UpdateRecommenderConfigRequest.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.UpdateRecommenderConfigRequest.Builder)

Request for the `UpdateRecommenderConfig` method.

Protobuf type `google.cloud.recommender.v1.UpdateRecommenderConfigRequest`

### [ValueMatcher](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ValueMatcher)

Contains various matching options for values for a GCP resource field.

Protobuf type `google.cloud.recommender.v1.ValueMatcher`

### [ValueMatcher.Builder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ValueMatcher.Builder)

Contains various matching options for values for a GCP resource field.

Protobuf type `google.cloud.recommender.v1.ValueMatcher`

## Interfaces

### [CostProjectionOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.CostProjectionOrBuilder)

### [GetInsightRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetInsightRequestOrBuilder)

### [GetInsightTypeConfigRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetInsightTypeConfigRequestOrBuilder)

### [GetRecommendationRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetRecommendationRequestOrBuilder)

### [GetRecommenderConfigRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.GetRecommenderConfigRequestOrBuilder)

### [ImpactOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ImpactOrBuilder)

### [Insight.RecommendationReferenceOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight.RecommendationReferenceOrBuilder)

### [InsightOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightOrBuilder)

### [InsightStateInfoOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightStateInfoOrBuilder)

### [InsightTypeConfigOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeConfigOrBuilder)

### [InsightTypeGenerationConfigOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightTypeGenerationConfigOrBuilder)

### [ListInsightsRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListInsightsRequestOrBuilder)

### [ListInsightsResponseOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListInsightsResponseOrBuilder)

### [ListRecommendationsRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListRecommendationsRequestOrBuilder)

### [ListRecommendationsResponseOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ListRecommendationsResponseOrBuilder)

### [MarkInsightAcceptedRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkInsightAcceptedRequestOrBuilder)

### [MarkRecommendationClaimedRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationClaimedRequestOrBuilder)

### [MarkRecommendationFailedRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationFailedRequestOrBuilder)

### [MarkRecommendationSucceededRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.MarkRecommendationSucceededRequestOrBuilder)

### [OperationGroupOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.OperationGroupOrBuilder)

### [OperationOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.OperationOrBuilder)

### [Recommendation.InsightReferenceOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Recommendation.InsightReferenceOrBuilder)

### [RecommendationContentOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationContentOrBuilder)

### [RecommendationOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationOrBuilder)

### [RecommendationStateInfoOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationStateInfoOrBuilder)

### [RecommenderConfigOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderConfigOrBuilder)

### [RecommenderGenerationConfigOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGenerationConfigOrBuilder)

### [RecommenderGrpc.AsyncService](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommenderGrpc.AsyncService)

Provides insights and recommendations for cloud customers for various categories like performance optimization, cost savings, reliability, feature discovery, etc. Insights and recommendations are generated automatically based on analysis of user resources, configuration and monitoring metrics.

### [SecurityProjectionOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.SecurityProjectionOrBuilder)

### [UpdateInsightTypeConfigRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.UpdateInsightTypeConfigRequestOrBuilder)

### [UpdateRecommenderConfigRequestOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.UpdateRecommenderConfigRequestOrBuilder)

### [ValueMatcherOrBuilder](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ValueMatcherOrBuilder)

## Enums

### [Impact.Category](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Impact.Category)

The category of the impact.

Protobuf enum `google.cloud.recommender.v1.Impact.Category`

### [Impact.ProjectionCase](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Impact.ProjectionCase)

### [Insight.Category](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight.Category)

Insight category.

Protobuf enum `google.cloud.recommender.v1.Insight.Category`

### [Insight.Severity](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Insight.Severity)

Insight severity levels.

Protobuf enum `google.cloud.recommender.v1.Insight.Severity`

### [InsightStateInfo.State](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.InsightStateInfo.State)

Represents insight state.

Protobuf enum `google.cloud.recommender.v1.InsightStateInfo.State`

### [Operation.PathValueCase](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Operation.PathValueCase)

### [Recommendation.Priority](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.Recommendation.Priority)

Recommendation priority levels.

Protobuf enum `google.cloud.recommender.v1.Recommendation.Priority`

### [RecommendationStateInfo.State](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.RecommendationStateInfo.State)

Represents Recommendation State.

Protobuf enum `google.cloud.recommender.v1.RecommendationStateInfo.State`

### [ValueMatcher.MatchVariantCase](/java/docs/reference/google-cloud-recommender/2.20.0/com.google.cloud.recommender.v1.ValueMatcher.MatchVariantCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
