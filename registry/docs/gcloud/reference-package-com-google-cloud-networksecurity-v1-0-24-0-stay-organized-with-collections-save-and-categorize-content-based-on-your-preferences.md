-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.networksecurity.v1 (0.24.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

A client to Network Security API

The interfaces provided are listed below, along with usage samples.

### NetworkSecurityClient

Service Description: Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

Sample for NetworkSecurityClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (NetworkSecurityClient networkSecurityClient = NetworkSecurityClient.create()) {
   AuthorizationPolicyName name =
       AuthorizationPolicyName.of("[PROJECT]", "[LOCATION]", "[AUTHORIZATION_POLICY]");
   AuthorizationPolicy response = networkSecurityClient.getAuthorizationPolicy(name);
 }
 
```
 

## Classes

### [AuthorizationPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy)

AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy`

### [AuthorizationPolicy.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Builder)

AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy`

### [AuthorizationPolicy.Rule](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule)

Specification of rules.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule`

### [AuthorizationPolicy.Rule.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Builder)

Specification of rules.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule`

### [AuthorizationPolicy.Rule.Destination](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination)

Specification of traffic destination attributes.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination`

### [AuthorizationPolicy.Rule.Destination.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.Builder)

Specification of traffic destination attributes.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination`

### [AuthorizationPolicy.Rule.Destination.HttpHeaderMatch](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch)

Specification of HTTP header match attributes.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch`

### [AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.Builder)

Specification of HTTP header match attributes.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch`

### [AuthorizationPolicy.Rule.Source](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source)

Specification of traffic source attributes.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source`

### [AuthorizationPolicy.Rule.Source.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source.Builder)

Specification of traffic source attributes.

Protobuf type `google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source`

### [AuthorizationPolicyName](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicyName)

### [AuthorizationPolicyName.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicyName.Builder)

Builder for projects/{project}/locations/{location}/authorizationPolicies/{authorization\_policy}.

### [AuthorizationPolicyProto](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicyProto)

### [CertificateProvider](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProvider)

Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.

Protobuf type `google.cloud.networksecurity.v1.CertificateProvider`

### [CertificateProvider.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProvider.Builder)

Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.

Protobuf type `google.cloud.networksecurity.v1.CertificateProvider`

### [CertificateProviderInstance](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProviderInstance)

Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.

Protobuf type `google.cloud.networksecurity.v1.CertificateProviderInstance`

### [CertificateProviderInstance.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProviderInstance.Builder)

Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.

Protobuf type `google.cloud.networksecurity.v1.CertificateProviderInstance`

### [ClientTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy)

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

Protobuf type `google.cloud.networksecurity.v1.ClientTlsPolicy`

### [ClientTlsPolicy.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy.Builder)

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

Protobuf type `google.cloud.networksecurity.v1.ClientTlsPolicy`

### [ClientTlsPolicyName](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicyName)

### [ClientTlsPolicyName.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicyName.Builder)

Builder for projects/{project}/locations/{location}/clientTlsPolicies/{client\_tls\_policy}.

### [ClientTlsPolicyProto](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicyProto)

### [CommonProto](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CommonProto)

### [CreateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest)

Request used by the CreateAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest`

### [CreateAuthorizationPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest.Builder)

Request used by the CreateAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest`

### [CreateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest)

Request used by the CreateClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest`

### [CreateClientTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest.Builder)

Request used by the CreateClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest`

### [CreateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest)

Request used by the CreateServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest`

### [CreateServerTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest.Builder)

Request used by the CreateServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest`

### [DeleteAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest)

Request used by the DeleteAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest`

### [DeleteAuthorizationPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest.Builder)

Request used by the DeleteAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest`

### [DeleteClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest)

Request used by the DeleteClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest`

### [DeleteClientTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest.Builder)

Request used by the DeleteClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest`

### [DeleteServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest)

Request used by the DeleteServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest`

### [DeleteServerTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest.Builder)

Request used by the DeleteServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest`

### [GetAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest)

Request used by the GetAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest`

### [GetAuthorizationPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest.Builder)

Request used by the GetAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest`

### [GetClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetClientTlsPolicyRequest)

Request used by the GetClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.GetClientTlsPolicyRequest`

### [GetClientTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetClientTlsPolicyRequest.Builder)

Request used by the GetClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.GetClientTlsPolicyRequest`

### [GetServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetServerTlsPolicyRequest)

Request used by the GetServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.GetServerTlsPolicyRequest`

### [GetServerTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetServerTlsPolicyRequest.Builder)

Request used by the GetServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.GetServerTlsPolicyRequest`

### [GrpcEndpoint](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GrpcEndpoint)

Specification of the GRPC Endpoint.

Protobuf type `google.cloud.networksecurity.v1.GrpcEndpoint`

### [GrpcEndpoint.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GrpcEndpoint.Builder)

Specification of the GRPC Endpoint.

Protobuf type `google.cloud.networksecurity.v1.GrpcEndpoint`

### [ListAuthorizationPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest)

Request used with the ListAuthorizationPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest`

### [ListAuthorizationPoliciesRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest.Builder)

Request used with the ListAuthorizationPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest`

### [ListAuthorizationPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse)

Response returned by the ListAuthorizationPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse`

### [ListAuthorizationPoliciesResponse.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse.Builder)

Response returned by the ListAuthorizationPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse`

### [ListClientTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest)

Request used by the ListClientTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest`

### [ListClientTlsPoliciesRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest.Builder)

Request used by the ListClientTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest`

### [ListClientTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse)

Response returned by the ListClientTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse`

### [ListClientTlsPoliciesResponse.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse.Builder)

Response returned by the ListClientTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse`

### [ListServerTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest)

Request used by the ListServerTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest`

### [ListServerTlsPoliciesRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest.Builder)

Request used by the ListServerTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest`

### [ListServerTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse)

Response returned by the ListServerTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse`

### [ListServerTlsPoliciesResponse.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse.Builder)

Response returned by the ListServerTlsPolicies method.

Protobuf type `google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse`

### [LocationName](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.LocationName)

### [LocationName.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

### [NetworkSecurityClient](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient)

Service Description: Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (NetworkSecurityClient networkSecurityClient = NetworkSecurityClient.create()) {
   AuthorizationPolicyName name =
       AuthorizationPolicyName.of("[PROJECT]", "[LOCATION]", "[AUTHORIZATION_POLICY]");
   AuthorizationPolicy response = networkSecurityClient.getAuthorizationPolicy(name);
 }
 
```
 

Note: close() needs to be called on the NetworkSecurityClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of NetworkSecuritySettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NetworkSecuritySettings networkSecuritySettings =
     NetworkSecuritySettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 NetworkSecurityClient networkSecurityClient =
     NetworkSecurityClient.create(networkSecuritySettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NetworkSecuritySettings networkSecuritySettings =
     NetworkSecuritySettings.newBuilder().setEndpoint(myEndpoint).build();
 NetworkSecurityClient networkSecurityClient =
     NetworkSecurityClient.create(networkSecuritySettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [NetworkSecurityClient.ListAuthorizationPoliciesFixedSizeCollection](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListAuthorizationPoliciesFixedSizeCollection)

### [NetworkSecurityClient.ListAuthorizationPoliciesPage](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListAuthorizationPoliciesPage)

### [NetworkSecurityClient.ListAuthorizationPoliciesPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListAuthorizationPoliciesPagedResponse)

### [NetworkSecurityClient.ListClientTlsPoliciesFixedSizeCollection](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListClientTlsPoliciesFixedSizeCollection)

### [NetworkSecurityClient.ListClientTlsPoliciesPage](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListClientTlsPoliciesPage)

### [NetworkSecurityClient.ListClientTlsPoliciesPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListClientTlsPoliciesPagedResponse)

### [NetworkSecurityClient.ListLocationsFixedSizeCollection](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListLocationsFixedSizeCollection)

### [NetworkSecurityClient.ListLocationsPage](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListLocationsPage)

### [NetworkSecurityClient.ListLocationsPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListLocationsPagedResponse)

### [NetworkSecurityClient.ListServerTlsPoliciesFixedSizeCollection](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListServerTlsPoliciesFixedSizeCollection)

### [NetworkSecurityClient.ListServerTlsPoliciesPage](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListServerTlsPoliciesPage)

### [NetworkSecurityClient.ListServerTlsPoliciesPagedResponse](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityClient.ListServerTlsPoliciesPagedResponse)

### [NetworkSecurityGrpc](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc)

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

### [NetworkSecurityGrpc.NetworkSecurityBlockingStub](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc.NetworkSecurityBlockingStub)

A stub to allow clients to do synchronous rpc calls to service NetworkSecurity.

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

### [NetworkSecurityGrpc.NetworkSecurityFutureStub](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc.NetworkSecurityFutureStub)

A stub to allow clients to do ListenableFuture-style rpc calls to service NetworkSecurity.

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

### [NetworkSecurityGrpc.NetworkSecurityImplBase](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc.NetworkSecurityImplBase)

Base class for the server implementation of the service NetworkSecurity.

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

### [NetworkSecurityGrpc.NetworkSecurityStub](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc.NetworkSecurityStub)

A stub to allow clients to do asynchronous rpc calls to service NetworkSecurity.

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

### [NetworkSecurityOuterClass](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityOuterClass)

### [NetworkSecuritySettings](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecuritySettings)

Settings class to configure an instance of [NetworkSecurityClient](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient).

The default instance has everything set to sensible defaults:

-   The default service address (networksecurity.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getAuthorizationPolicy to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 NetworkSecuritySettings.Builder networkSecuritySettingsBuilder =
     NetworkSecuritySettings.newBuilder();
 networkSecuritySettingsBuilder
     .getAuthorizationPolicySettings()
     .setRetrySettings(
         networkSecuritySettingsBuilder
             .getAuthorizationPolicySettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 NetworkSecuritySettings networkSecuritySettings = networkSecuritySettingsBuilder.build();
 
```
 

### [NetworkSecuritySettings.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecuritySettings.Builder)

Builder for NetworkSecuritySettings.

### [OperationMetadata](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata)

Represents the metadata of the long-running operation.

Protobuf type `google.cloud.networksecurity.v1.OperationMetadata`

### [OperationMetadata.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadata.Builder)

Represents the metadata of the long-running operation.

Protobuf type `google.cloud.networksecurity.v1.OperationMetadata`

### [ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy)

ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target https proxy or endpoint config selector resource.

Protobuf type `google.cloud.networksecurity.v1.ServerTlsPolicy`

### [ServerTlsPolicy.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy.Builder)

ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target https proxy or endpoint config selector resource.

Protobuf type `google.cloud.networksecurity.v1.ServerTlsPolicy`

### [ServerTlsPolicy.MTLSPolicy](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy)

Specification of the MTLSPolicy.

Protobuf type `google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy`

### [ServerTlsPolicy.MTLSPolicy.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy.Builder)

Specification of the MTLSPolicy.

Protobuf type `google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy`

### [ServerTlsPolicyName](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicyName)

### [ServerTlsPolicyName.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicyName.Builder)

Builder for projects/{project}/locations/{location}/serverTlsPolicies/{server\_tls\_policy}.

### [ServerTlsPolicyProto](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicyProto)

### [TlsProto](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.TlsProto)

### [UpdateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest)

Request used by the UpdateAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest`

### [UpdateAuthorizationPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest.Builder)

Request used by the UpdateAuthorizationPolicy method.

Protobuf type `google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest`

### [UpdateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest)

Request used by UpdateClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest`

### [UpdateClientTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest.Builder)

Request used by UpdateClientTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest`

### [UpdateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest)

Request used by UpdateServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest`

### [UpdateServerTlsPolicyRequest.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest.Builder)

Request used by UpdateServerTlsPolicy method.

Protobuf type `google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest`

### [ValidationCA](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ValidationCA)

Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.

Protobuf type `google.cloud.networksecurity.v1.ValidationCA`

### [ValidationCA.Builder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ValidationCA.Builder)

Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.

Protobuf type `google.cloud.networksecurity.v1.ValidationCA`

## Interfaces

### [AuthorizationPolicy.Rule.Destination.HttpHeaderMatchOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatchOrBuilder)

### [AuthorizationPolicy.Rule.DestinationOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.DestinationOrBuilder)

### [AuthorizationPolicy.Rule.SourceOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.SourceOrBuilder)

### [AuthorizationPolicy.RuleOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.RuleOrBuilder)

### [AuthorizationPolicyOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicyOrBuilder)

### [CertificateProviderInstanceOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProviderInstanceOrBuilder)

### [CertificateProviderOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProviderOrBuilder)

### [ClientTlsPolicyOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ClientTlsPolicyOrBuilder)

### [CreateAuthorizationPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequestOrBuilder)

### [CreateClientTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequestOrBuilder)

### [CreateServerTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequestOrBuilder)

### [DeleteAuthorizationPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequestOrBuilder)

### [DeleteClientTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequestOrBuilder)

### [DeleteServerTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequestOrBuilder)

### [GetAuthorizationPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetAuthorizationPolicyRequestOrBuilder)

### [GetClientTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetClientTlsPolicyRequestOrBuilder)

### [GetServerTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GetServerTlsPolicyRequestOrBuilder)

### [GrpcEndpointOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.GrpcEndpointOrBuilder)

### [ListAuthorizationPoliciesRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequestOrBuilder)

### [ListAuthorizationPoliciesResponseOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponseOrBuilder)

### [ListClientTlsPoliciesRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesRequestOrBuilder)

### [ListClientTlsPoliciesResponseOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesResponseOrBuilder)

### [ListServerTlsPoliciesRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesRequestOrBuilder)

### [ListServerTlsPoliciesResponseOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesResponseOrBuilder)

### [NetworkSecurityGrpc.AsyncService](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc.AsyncService)

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

### [OperationMetadataOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.OperationMetadataOrBuilder)

### [ServerTlsPolicy.MTLSPolicyOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicyOrBuilder)

### [ServerTlsPolicyOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ServerTlsPolicyOrBuilder)

### [UpdateAuthorizationPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequestOrBuilder)

### [UpdateClientTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequestOrBuilder)

### [UpdateServerTlsPolicyRequestOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequestOrBuilder)

### [ValidationCAOrBuilder](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ValidationCAOrBuilder)

## Enums

### [AuthorizationPolicy.Action](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Action)

Possible values that define what action to take.

Protobuf enum `google.cloud.networksecurity.v1.AuthorizationPolicy.Action`

### [AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.TypeCase](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.TypeCase)

### [CertificateProvider.TypeCase](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.CertificateProvider.TypeCase)

### [ValidationCA.TypeCase](/java/docs/reference/google-cloud-network-security/0.24.0/com.google.cloud.networksecurity.v1.ValidationCA.TypeCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
