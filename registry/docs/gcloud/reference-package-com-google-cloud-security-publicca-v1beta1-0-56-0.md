-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

0.84.0 (latest) 0.82.0 0.80.0 0.79.0 0.77.0 0.75.0 0.73.0 0.72.0 0.71.0 0.70.0 0.69.0 0.67.0 0.65.0 0.64.0 0.61.0 0.60.0 0.59.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

# Package com.google.cloud.security.publicca.v1beta1 (0.56.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-publicca/google-cloud-publicca/src/main/java/com/google/cloud/security/publicca/v1beta1)

[RPC Documentation](https://cloud.google.com/certificate-manager/docs/reference/public-ca/rpc)

## This package is not the recommended entry point to using this client library!

For this library, we recommend using [com.google.cloud.security.publicca.v1](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1) for new applications.

## Prerelease Implications

This package is a prerelease version! Use with caution.

Prerelease versions are considered unstable as they may be shut down and/or subject to breaking changes when upgrading. Use them only for testing or if you specifically need their experimental features.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceClient](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceClient)

Service Description: Manages the resources required for ACME [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) for the public certificate authority service.

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceSettings](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceSettings)

Settings class to configure an instance of PublicCertificateAuthorityServiceClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest)

Creates a new ExternalAccountKey in a given project.

[com.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequest.Builder)

Creates a new ExternalAccountKey in a given project.

[com.google.cloud.security.publicca.v1beta1.ExternalAccountKey](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ExternalAccountKey)

A representation of an ExternalAccountKey used for [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) within ACME.

[com.google.cloud.security.publicca.v1beta1.ExternalAccountKey.Builder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ExternalAccountKey.Builder)

A representation of an ExternalAccountKey used for [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) within ACME.

[com.google.cloud.security.publicca.v1beta1.ExternalAccountKeyName](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ExternalAccountKeyName)

[com.google.cloud.security.publicca.v1beta1.ExternalAccountKeyName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ExternalAccountKeyName.Builder)

Builder for projects/{project}/locations/{location}/externalAccountKeys/{external\_account\_key}.

[com.google.cloud.security.publicca.v1beta1.LocationName](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.LocationName)

[com.google.cloud.security.publicca.v1beta1.LocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

[com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceGrpc](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceGrpc)

Manages the resources required for ACME [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) for the public certificate authority service.

[com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceGrpc.PublicCertificateAuthorityServiceImplBase](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceGrpc.PublicCertificateAuthorityServiceImplBase)

Base class for the server implementation of the service PublicCertificateAuthorityService. Manages the resources required for ACME [external account](https://tools.ietf.org/html/rfc8555#section-7.3.4)

[com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceSettings.Builder)

Builder for PublicCertificateAuthorityServiceSettings.

[com.google.cloud.security.publicca.v1beta1.ResourcesProto](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ResourcesProto)

[com.google.cloud.security.publicca.v1beta1.ServiceProto](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ServiceProto)

## Interfaces

Interface

Description

[com.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.CreateExternalAccountKeyRequestOrBuilder)

[com.google.cloud.security.publicca.v1beta1.ExternalAccountKeyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.ExternalAccountKeyOrBuilder)

[com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-publicca/latest/com.google.cloud.security.publicca.v1beta1.PublicCertificateAuthorityServiceGrpc.AsyncService)

Manages the resources required for ACME [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) for the public certificate authority service.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
