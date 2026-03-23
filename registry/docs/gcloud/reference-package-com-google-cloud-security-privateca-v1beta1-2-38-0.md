-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

# Package com.google.cloud.security.privateca.v1beta1 (2.38.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-security-private-ca/google-cloud-security-private-ca/src/main/java/com/google/cloud/security/privateca/v1beta1)

[RPC Documentation](https://cloud.google.com/certificate-authority-service/docs/reference/rpc)

[REST Documentation](https://cloud.google.com/certificate-authority-service/docs/reference/rest)

## This package is not the latest GA version!

For this library, we recommend using the [package](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1) associated with API version v1 for new applications.

## Prerelease Implications

This package is a prerelease version! Use with caution. Prerelease versions are considered unstable as they may be shut down. You can read more about [Cloud API versioning strategy here](https://cloud.google.com/apis/design/versioning). Each Cloud Java client library may contain multiple packages. Each package containing a version number in its name corresponds to a published version of the service. We recommend using the latest stable version for new production applications, which can be identified by the largest numeric version that does not contain a suffix. For example, if a client library has two packages: `v1` and `v2alpha`, then the latest stable version is `v1`. If you use an unstable release, breaking changes may be introduced when upgrading.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient)

Service Description: Certificate Authority Service manages private certificate authorities and issued certificates.

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceSettings](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceSettings)

Settings class to configure an instance of CertificateAuthorityServiceClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest)

Request message for CertificateAuthorityService.ActivateCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.ActivateCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.Certificate](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Certificate)

A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.Certificate.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Certificate.Builder)

A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails)

Describes fields that are relavent to the revocation of a Certificate.

[com.google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Certificate.RevocationDetails.Builder)

Describes fields that are relavent to the revocation of a Certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority)

A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls)

URLs where a CertificateAuthority will publish content.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrls.Builder)

URLs where a CertificateAuthority will publish content.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Builder)

A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)

The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList)

Protobuf type `google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList`

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList.Builder)

Protobuf type `google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList`

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames)

AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames.Builder)

AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder)

The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes)

IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes.Builder)

IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions)

Options that affect all certificates issued by a CertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptions.Builder)

Options that affect all certificates issued by a CertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec)

A Cloud KMS key configuration that a CertificateAuthority will use.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec.Builder)

A Cloud KMS key configuration that a CertificateAuthority will use.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityName](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityName)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityName.Builder)

Builder for projects/{project}/locations/{location}/certificateAuthorities/{certificate\_authority}.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesFixedSizeCollection)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesPage](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesPage)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateAuthoritiesPagedResponse)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsFixedSizeCollection)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsPage](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsPage)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificateRevocationListsPagedResponse)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesFixedSizeCollection)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesPage](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesPage)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListCertificatesPagedResponse)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsFixedSizeCollection)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsPage](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsPage)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceClient.ListReusableConfigsPagedResponse)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc)

Certificate Authority Service manages private certificate authorities and issued certificates.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc.CertificateAuthorityServiceImplBase](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc.CertificateAuthorityServiceImplBase)

Base class for the server implementation of the service CertificateAuthorityService. Certificate Authority Service manages private

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceSettings.Builder)

Builder for CertificateAuthorityServiceSettings.

[com.google.cloud.security.privateca.v1beta1.CertificateConfig](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateConfig)

A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.

[com.google.cloud.security.privateca.v1beta1.CertificateConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateConfig.Builder)

A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.

[com.google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig)

These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfig.Builder)

These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription)

A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.Builder)

A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint)

A group of fingerprints for the x509 certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprint.Builder)

A group of fingerprints for the x509 certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId)

A KeyId identifies a specific public key, usually by hashing the public key.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.KeyId.Builder)

A KeyId identifies a specific public key, usually by hashing the public key.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription)

These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescription.Builder)

These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.

[com.google.cloud.security.privateca.v1beta1.CertificateName](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateName)

[com.google.cloud.security.privateca.v1beta1.CertificateName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateName.Builder)

Builder for projects/{project}/locations/{location}/certificateAuthorities/{certificate\_authority}/certificates/{certificate}.

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationList](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList)

A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.Builder)

A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate)

Describes a revoked Certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificate.Builder)

Describes a revoked Certificate.

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationListName](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationListName)

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationListName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationListName.Builder)

Builder for projects/{project}/locations/{location}/certificateAuthorities/{certificate\_authority}/certificateRevocationLists/{certificate\_revocation\_list}.

[com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest)

Request message for CertificateAuthorityService.CreateCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.CreateCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest)

Request message for CertificateAuthorityService.CreateCertificate.

[com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest.Builder)

Request message for CertificateAuthorityService.CreateCertificate.

[com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest)

Request message for CertificateAuthorityService.DisableCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.DisableCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest)

Request message for CertificateAuthorityService.EnableCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.EnableCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest)

Request message for CertificateAuthorityService.FetchCertificateAuthorityCsr.

[com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest.Builder)

Request message for CertificateAuthorityService.FetchCertificateAuthorityCsr.

[com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse)

Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.

[com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse.Builder)

Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.

[com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest)

Request message for CertificateAuthorityService.GetCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.GetCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.GetCertificateRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateRequest)

Request message for CertificateAuthorityService.GetCertificate.

[com.google.cloud.security.privateca.v1beta1.GetCertificateRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateRequest.Builder)

Request message for CertificateAuthorityService.GetCertificate.

[com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest)

Request message for CertificateAuthorityService.GetCertificateRevocationList.

[com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest.Builder)

Request message for CertificateAuthorityService.GetCertificateRevocationList.

[com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest)

Request message for CertificateAuthorityService.GetReusableConfig.

[com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest.Builder)

Request message for CertificateAuthorityService.GetReusableConfig.

[com.google.cloud.security.privateca.v1beta1.KeyUsage](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage)

A KeyUsage describes key usage values that may appear in an X.509 certificate.

[com.google.cloud.security.privateca.v1beta1.KeyUsage.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.Builder)

A KeyUsage describes key usage values that may appear in an X.509 certificate.

[com.google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions)

KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.

[com.google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptions.Builder)

KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.

[com.google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions)

KeyUsage.KeyUsageOptions corresponds to the key usage values described in [https://tools.ietf.org/html/rfc5280#section-4.2.1.3](https://tools.ietf.org/html/rfc5280#section-4.2.1.3).

[com.google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptions.Builder)

KeyUsage.KeyUsageOptions corresponds to the key usage values described in [https://tools.ietf.org/html/rfc5280#section-4.2.1.3](https://tools.ietf.org/html/rfc5280#section-4.2.1.3).

[com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest)

Request message for CertificateAuthorityService.ListCertificateAuthorities.

[com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest.Builder)

Request message for CertificateAuthorityService.ListCertificateAuthorities.

[com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse)

Response message for CertificateAuthorityService.ListCertificateAuthorities.

[com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse.Builder)

Response message for CertificateAuthorityService.ListCertificateAuthorities.

[com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest)

Request message for CertificateAuthorityService.ListCertificateRevocationLists.

[com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest.Builder)

Request message for CertificateAuthorityService.ListCertificateRevocationLists.

[com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse)

Response message for CertificateAuthorityService.ListCertificateRevocationLists.

[com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse.Builder)

Response message for CertificateAuthorityService.ListCertificateRevocationLists.

[com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest)

Request message for CertificateAuthorityService.ListCertificates.

[com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest.Builder)

Request message for CertificateAuthorityService.ListCertificates.

[com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse)

Response message for CertificateAuthorityService.ListCertificates.

[com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse.Builder)

Response message for CertificateAuthorityService.ListCertificates.

[com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest)

Request message for CertificateAuthorityService.ListReusableConfigs.

[com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest.Builder)

Request message for CertificateAuthorityService.ListReusableConfigs.

[com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse)

Response message for CertificateAuthorityService.ListReusableConfigs.

[com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse.Builder)

Response message for CertificateAuthorityService.ListReusableConfigs.

[com.google.cloud.security.privateca.v1beta1.LocationName](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.LocationName)

[com.google.cloud.security.privateca.v1beta1.LocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

[com.google.cloud.security.privateca.v1beta1.ObjectId](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ObjectId)

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

[com.google.cloud.security.privateca.v1beta1.ObjectId.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ObjectId.Builder)

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

[com.google.cloud.security.privateca.v1beta1.OperationMetadata](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.OperationMetadata)

Represents the metadata of the long-running operation.

[com.google.cloud.security.privateca.v1beta1.OperationMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.OperationMetadata.Builder)

Represents the metadata of the long-running operation.

[com.google.cloud.security.privateca.v1beta1.PrivateCaProto](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.PrivateCaProto)

[com.google.cloud.security.privateca.v1beta1.PrivateCaResourcesProto](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.PrivateCaResourcesProto)

[com.google.cloud.security.privateca.v1beta1.PublicKey](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.PublicKey)

A PublicKey describes a public key.

[com.google.cloud.security.privateca.v1beta1.PublicKey.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.PublicKey.Builder)

A PublicKey describes a public key.

[com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest)

Request message for CertificateAuthorityService.RestoreCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.RestoreCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.ReusableConfig](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfig)

A ReusableConfig refers to a managed ReusableConfigValues. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy

[com.google.cloud.security.privateca.v1beta1.ReusableConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfig.Builder)

A ReusableConfig refers to a managed ReusableConfigValues. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy

[com.google.cloud.security.privateca.v1beta1.ReusableConfigName](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigName)

[com.google.cloud.security.privateca.v1beta1.ReusableConfigName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigName.Builder)

Builder for projects/{project}/locations/{location}/reusableConfigs/{reusable\_config}.

[com.google.cloud.security.privateca.v1beta1.ReusableConfigValues](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigValues)

A ReusableConfigValues is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.

[com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.Builder)

A ReusableConfigValues is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.

[com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions)

Describes values that are relevant in a CA certificate.

[com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptions.Builder)

Describes values that are relevant in a CA certificate.

[com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper)

A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.

[com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper.Builder)

A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.

[com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest)

Request message for CertificateAuthorityService.RevokeCertificate.

[com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest.Builder)

Request message for CertificateAuthorityService.RevokeCertificate.

[com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest)

Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.Subject](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Subject)

Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.

[com.google.cloud.security.privateca.v1beta1.Subject.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Subject.Builder)

Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.

[com.google.cloud.security.privateca.v1beta1.SubjectAltNames](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubjectAltNames)

SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).

[com.google.cloud.security.privateca.v1beta1.SubjectAltNames.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubjectAltNames.Builder)

SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).

[com.google.cloud.security.privateca.v1beta1.SubordinateConfig](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfig)

Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.

[com.google.cloud.security.privateca.v1beta1.SubordinateConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfig.Builder)

Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.

[com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain)

This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.

[com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChain.Builder)

This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest)

Request message for CertificateAuthorityService.UpdateCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest.Builder)

Request message for CertificateAuthorityService.UpdateCertificateAuthority.

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest)

Request message for CertificateAuthorityService.UpdateCertificate.

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest.Builder)

Request message for CertificateAuthorityService.UpdateCertificate.

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest)

Request message for CertificateAuthorityService.UpdateCertificateRevocationList.

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest.Builder)

Request message for CertificateAuthorityService.UpdateCertificateRevocationList.

[com.google.cloud.security.privateca.v1beta1.X509Extension](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.X509Extension)

An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.

[com.google.cloud.security.privateca.v1beta1.X509Extension.Builder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.X509Extension.Builder)

An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.

## Interfaces

Interface

Description

[com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.Certificate.RevocationDetailsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Certificate.RevocationDetailsOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrlsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.AccessUrlsOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigListOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigListOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNamesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNamesOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModesOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicyOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptionsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.IssuingOptionsOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpecOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpecOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc.AsyncService)

Certificate Authority Service manages private certificate authorities and issued certificates.

[com.google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateConfig.SubjectConfigOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateConfigOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprintOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.CertificateFingerprintOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.KeyIdOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.KeyIdOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescriptionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescription.SubjectDescriptionOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateDescriptionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateDescriptionOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificateOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.RevokedCertificateOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationListOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationListOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.CreateCertificateRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CreateCertificateRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponseOrBuilder)

[com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.GetCertificateRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptionsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.ExtendedKeyUsageOptionsOrBuilder)

[com.google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptionsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsage.KeyUsageOptionsOrBuilder)

[com.google.cloud.security.privateca.v1beta1.KeyUsageOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.KeyUsageOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponseOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponseOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListCertificatesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificatesRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListCertificatesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListCertificatesResponseOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponseOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ObjectIdOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ObjectIdOrBuilder)

[com.google.cloud.security.privateca.v1beta1.OperationMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.OperationMetadataOrBuilder)

[com.google.cloud.security.privateca.v1beta1.PublicKeyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.PublicKeyOrBuilder)

[com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ReusableConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptionsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigValues.CaOptionsOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ReusableConfigValuesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigValuesOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapperOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapperOrBuilder)

[com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.SubjectAltNamesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubjectAltNamesOrBuilder)

[com.google.cloud.security.privateca.v1beta1.SubjectOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubjectOrBuilder)

[com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChainOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigChainOrBuilder)

[com.google.cloud.security.privateca.v1beta1.SubordinateConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfigOrBuilder)

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequestOrBuilder)

[com.google.cloud.security.privateca.v1beta1.X509ExtensionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.X509ExtensionOrBuilder)

## Enums

Enum

Description

[com.google.cloud.security.privateca.v1beta1.Certificate.CertificateConfigCase](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.Certificate.CertificateConfigCase)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.ConfigPolicyCase](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.ConfigPolicyCase)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec.KeyVersionCase](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.KeyVersionSpec.KeyVersionCase)

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.SignHashAlgorithm](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.SignHashAlgorithm)

The algorithm of a Cloud KMS CryptoKeyVersion of a CryptoKey with the CryptoKeyPurpose value

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.State](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.State)

The state of a CertificateAuthority, indicating if it can be used.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Tier)

The tier of a CertificateAuthority, indicating its supported functionality and/or billing SKU.

[com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Type](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.Type)

The type of a CertificateAuthority, indicating its issuing chain.

[com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.State](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList.State)

The state of a CertificateRevocationList, indicating if it is current.

[com.google.cloud.security.privateca.v1beta1.PublicKey.KeyType](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.PublicKey.KeyType)

Types of public keys that are supported. At a minimum, we support RSA and ECDSA, for the key sizes or curves listed: [https://cloud.google.com/kms/docs/algorithms#asymmetric\_signing\_algorithms](https://cloud.google.com/kms/docs/algorithms#asymmetric_signing_algorithms)

[com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper.ConfigValuesCase](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper.ConfigValuesCase)

[com.google.cloud.security.privateca.v1beta1.RevocationReason](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.RevocationReason)

A RevocationReason indicates whether a Certificate has been revoked, and the reason for revocation. These correspond to standard revocation reasons from RFC 5280. Note that the enum labels and values in this

[com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigCase](https://cloud.google.com/java/docs/reference/google-cloud-security-private-ca/latest/com.google.cloud.security.privateca.v1beta1.SubordinateConfig.SubordinateConfigCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
