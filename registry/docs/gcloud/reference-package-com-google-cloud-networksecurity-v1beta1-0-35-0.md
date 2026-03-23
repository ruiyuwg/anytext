-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

# Package com.google.cloud.networksecurity.v1beta1 (0.35.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-network-security/google-cloud-network-security/src/main/java/com/google/cloud/networksecurity/v1beta1)

## This package is not the latest GA version!

For this library, we recommend using the [package](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1) associated with API version v1 for new applications.

## Prerelease Implications

This package is a prerelease version! Use with caution. Prerelease versions are considered unstable as they may be shut down. You can read more about [Cloud API versioning strategy here](https://cloud.google.com/apis/design/versioning). Each Cloud Java client library may contain multiple packages. Each package containing a version number in its name corresponds to a published version of the service. We recommend using the latest stable version for new production applications, which can be identified by the largest numeric version that does not contain a suffix. For example, if a client library has two packages: `v1` and `v2alpha`, then the latest stable version is `v1`. If you use an unstable release, breaking changes may be introduced when upgrading.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient)

Service Description: Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

This class provides the ability to make remote calls to the backing service through method

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.networksecurity.v1beta1.NetworkSecuritySettings](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecuritySettings)

Settings class to configure an instance of NetworkSecurityClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy)

AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Builder)

AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule)

Specification of rules.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Builder)

Specification of rules.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination)

Specification of traffic destination attributes.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.Builder)

Specification of traffic destination attributes.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch)

Specification of HTTP header match attributes.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.Builder)

Specification of HTTP header match attributes.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source)

Specification of traffic source attributes.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source.Builder)

Specification of traffic source attributes.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyName](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyName)

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyName.Builder)

Builder for projects/{project}/locations/{location}/authorizationPolicies/{authorization\_policy}.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyProto](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyProto)

[com.google.cloud.networksecurity.v1beta1.CertificateProvider](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProvider)

Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.

[com.google.cloud.networksecurity.v1beta1.CertificateProvider.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProvider.Builder)

Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.

[com.google.cloud.networksecurity.v1beta1.CertificateProviderInstance](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProviderInstance)

Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this

[com.google.cloud.networksecurity.v1beta1.CertificateProviderInstance.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProviderInstance.Builder)

Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this

[com.google.cloud.networksecurity.v1beta1.ClientTlsPolicy](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ClientTlsPolicy)

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

[com.google.cloud.networksecurity.v1beta1.ClientTlsPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ClientTlsPolicy.Builder)

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

[com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyName](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyName)

[com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyName.Builder)

Builder for projects/{project}/locations/{location}/clientTlsPolicies/{client\_tls\_policy}.

[com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyProto](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyProto)

[com.google.cloud.networksecurity.v1beta1.CommonProto](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CommonProto)

[com.google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest)

Request used by the CreateAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest.Builder)

Request used by the CreateAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest)

Request used by the CreateClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest.Builder)

Request used by the CreateClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest)

Request used by the CreateServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest.Builder)

Request used by the CreateServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest)

Request used by the DeleteAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest.Builder)

Request used by the DeleteAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest)

Request used by the DeleteClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest.Builder)

Request used by the DeleteClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest)

Request used by the DeleteServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest.Builder)

Request used by the DeleteServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest)

Request used by the GetAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest.Builder)

Request used by the GetAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest)

Request used by the GetClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest.Builder)

Request used by the GetClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest)

Request used by the GetServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest.Builder)

Request used by the GetServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.GrpcEndpoint](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GrpcEndpoint)

Specification of the GRPC Endpoint.

[com.google.cloud.networksecurity.v1beta1.GrpcEndpoint.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GrpcEndpoint.Builder)

Specification of the GRPC Endpoint.

[com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest)

Request used with the ListAuthorizationPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest.Builder)

Request used with the ListAuthorizationPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse)

Response returned by the ListAuthorizationPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse.Builder)

Response returned by the ListAuthorizationPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest)

Request used by the ListClientTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest.Builder)

Request used by the ListClientTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse)

Response returned by the ListClientTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse.Builder)

Response returned by the ListClientTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest)

Request used by the ListServerTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest.Builder)

Request used by the ListServerTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse)

Response returned by the ListServerTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse.Builder)

Response returned by the ListServerTlsPolicies method.

[com.google.cloud.networksecurity.v1beta1.LocationName](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.LocationName)

[com.google.cloud.networksecurity.v1beta1.LocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListAuthorizationPoliciesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListAuthorizationPoliciesFixedSizeCollection)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListAuthorizationPoliciesPage](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListAuthorizationPoliciesPage)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListAuthorizationPoliciesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListAuthorizationPoliciesPagedResponse)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListClientTlsPoliciesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListClientTlsPoliciesFixedSizeCollection)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListClientTlsPoliciesPage](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListClientTlsPoliciesPage)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListClientTlsPoliciesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListClientTlsPoliciesPagedResponse)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListLocationsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListLocationsFixedSizeCollection)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListLocationsPage](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListLocationsPage)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListLocationsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListLocationsPagedResponse)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListServerTlsPoliciesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListServerTlsPoliciesFixedSizeCollection)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListServerTlsPoliciesPage](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListServerTlsPoliciesPage)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListServerTlsPoliciesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityClient.ListServerTlsPoliciesPagedResponse)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityGrpc](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityGrpc)

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityGrpc.NetworkSecurityImplBase](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityGrpc.NetworkSecurityImplBase)

Base class for the server implementation of the service NetworkSecurity. Network Security API provides resources to configure authentication and

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityOuterClass)

[com.google.cloud.networksecurity.v1beta1.NetworkSecuritySettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecuritySettings.Builder)

Builder for NetworkSecuritySettings.

[com.google.cloud.networksecurity.v1beta1.OperationMetadata](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.OperationMetadata)

Represents the metadata of the long-running operation.

[com.google.cloud.networksecurity.v1beta1.OperationMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.OperationMetadata.Builder)

Represents the metadata of the long-running operation.

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy)

ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target https proxy or endpoint config selector resource.

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.Builder)

ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target https proxy or endpoint config selector resource.

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy)

Specification of the MTLSPolicy.

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy.Builder)

Specification of the MTLSPolicy.

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyName](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyName)

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyName.Builder)

Builder for projects/{project}/locations/{location}/serverTlsPolicies/{server\_tls\_policy}.

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyProto](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyProto)

[com.google.cloud.networksecurity.v1beta1.TlsProto](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.TlsProto)

[com.google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest)

Request used by the UpdateAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest.Builder)

Request used by the UpdateAuthorizationPolicy method.

[com.google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest)

Request used by UpdateClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest.Builder)

Request used by UpdateClientTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest)

Request used by UpdateServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest.Builder)

Request used by UpdateServerTlsPolicy method.

[com.google.cloud.networksecurity.v1beta1.ValidationCA](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ValidationCA)

Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.

[com.google.cloud.networksecurity.v1beta1.ValidationCA.Builder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ValidationCA.Builder)

Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.

## Interfaces

Interface

Description

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatchOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatchOrBuilder)

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.DestinationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.DestinationOrBuilder)

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.SourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.SourceOrBuilder)

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.RuleOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.RuleOrBuilder)

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicyOrBuilder)

[com.google.cloud.networksecurity.v1beta1.CertificateProviderInstanceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProviderInstanceOrBuilder)

[com.google.cloud.networksecurity.v1beta1.CertificateProviderOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProviderOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ClientTlsPolicyOrBuilder)

[com.google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.GrpcEndpointOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.GrpcEndpointOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponseOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponseOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponseOrBuilder)

[com.google.cloud.networksecurity.v1beta1.NetworkSecurityGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.NetworkSecurityGrpc.AsyncService)

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

[com.google.cloud.networksecurity.v1beta1.OperationMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.OperationMetadataOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicyOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ServerTlsPolicyOrBuilder)

[com.google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequestOrBuilder)

[com.google.cloud.networksecurity.v1beta1.ValidationCAOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ValidationCAOrBuilder)

## Enums

Enum

Description

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Action](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Action)

Possible values that define what action to take.

[com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.TypeCase](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.TypeCase)

[com.google.cloud.networksecurity.v1beta1.CertificateProvider.TypeCase](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.CertificateProvider.TypeCase)

[com.google.cloud.networksecurity.v1beta1.ValidationCA.TypeCase](https://cloud.google.com/java/docs/reference/google-cloud-network-security/latest/com.google.cloud.networksecurity.v1beta1.ValidationCA.TypeCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
