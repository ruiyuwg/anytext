-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CertificateAuthorityServiceGrpc.AsyncService (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public static interface CertificateAuthorityServiceGrpc.AsyncService
```

Certificate Authority Service manages private certificate authorities and issued certificates.

## Methods

### activateCertificateAuthority(ActivateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void activateCertificateAuthority(ActivateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Activate a CertificateAuthority that is in state AWAITING\_USER\_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

**Parameters**

**Name**

**Description**

`request`

`[ActivateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ActivateCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createCaPool(CreateCaPoolRequest request, StreamObserver<Operation> responseObserver)

```
public default void createCaPool(CreateCaPoolRequest request, StreamObserver<Operation> responseObserver)
```

Create a CaPool.

**Parameters**

**Name**

**Description**

`request`

`[CreateCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CreateCaPoolRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createCertificate(CreateCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public default void createCertificate(CreateCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Create a new Certificate in a given Project, Location from a particular CaPool.

**Parameters**

**Name**

**Description**

`request`

`[CreateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CreateCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.Certificate)>`  

### createCertificateAuthority(CreateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void createCertificateAuthority(CreateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Create a new CertificateAuthority in a given Project and Location.

**Parameters**

**Name**

**Description**

`request`

`[CreateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CreateCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createCertificateTemplate(CreateCertificateTemplateRequest request, StreamObserver<Operation> responseObserver)

```
public default void createCertificateTemplate(CreateCertificateTemplateRequest request, StreamObserver<Operation> responseObserver)
```

Create a new CertificateTemplate in a given Project and Location.

**Parameters**

**Name**

**Description**

`request`

`[CreateCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CreateCertificateTemplateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteCaPool(DeleteCaPoolRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteCaPool(DeleteCaPoolRequest request, StreamObserver<Operation> responseObserver)
```

Delete a CaPool.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.DeleteCaPoolRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteCertificateAuthority(DeleteCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteCertificateAuthority(DeleteCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Delete a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.DeleteCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteCertificateTemplate(DeleteCertificateTemplateRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteCertificateTemplate(DeleteCertificateTemplateRequest request, StreamObserver<Operation> responseObserver)
```

DeleteCertificateTemplate deletes a CertificateTemplate.

**Parameters**

**Name**

**Description**

`request`

`[DeleteCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.DeleteCertificateTemplateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### disableCertificateAuthority(DisableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void disableCertificateAuthority(DisableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Disable a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[DisableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.DisableCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### enableCertificateAuthority(EnableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void enableCertificateAuthority(EnableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Enable a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[EnableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.EnableCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### fetchCaCerts(FetchCaCertsRequest request, StreamObserver<FetchCaCertsResponse> responseObserver)

```
public default void fetchCaCerts(FetchCaCertsRequest request, StreamObserver<FetchCaCertsResponse> responseObserver)
```

FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.

**Parameters**

**Name**

**Description**

`request`

`[FetchCaCertsRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.FetchCaCertsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[FetchCaCertsResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.FetchCaCertsResponse)>`  

### fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request, StreamObserver<FetchCertificateAuthorityCsrResponse> responseObserver)

```
public default void fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request, StreamObserver<FetchCertificateAuthorityCsrResponse> responseObserver)
```

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING\_USER\_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[FetchCertificateAuthorityCsrRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.FetchCertificateAuthorityCsrRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[FetchCertificateAuthorityCsrResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.FetchCertificateAuthorityCsrResponse)>`  

### getCaPool(GetCaPoolRequest request, StreamObserver<CaPool> responseObserver)

```
public default void getCaPool(GetCaPoolRequest request, StreamObserver<CaPool> responseObserver)
```

Returns a CaPool.

**Parameters**

**Name**

**Description**

`request`

`[GetCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.GetCaPoolRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CaPool](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CaPool)>`  

### getCertificate(GetCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public default void getCertificate(GetCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Returns a Certificate.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.GetCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.Certificate)>`  

### getCertificateAuthority(GetCertificateAuthorityRequest request, StreamObserver<CertificateAuthority> responseObserver)

```
public default void getCertificateAuthority(GetCertificateAuthorityRequest request, StreamObserver<CertificateAuthority> responseObserver)
```

Returns a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.GetCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CertificateAuthority)>`  

### getCertificateRevocationList(GetCertificateRevocationListRequest request, StreamObserver<CertificateRevocationList> responseObserver)

```
public default void getCertificateRevocationList(GetCertificateRevocationListRequest request, StreamObserver<CertificateRevocationList> responseObserver)
```

Returns a CertificateRevocationList.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.GetCertificateRevocationListRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CertificateRevocationList](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CertificateRevocationList)>`  

### getCertificateTemplate(GetCertificateTemplateRequest request, StreamObserver<CertificateTemplate> responseObserver)

```
public default void getCertificateTemplate(GetCertificateTemplateRequest request, StreamObserver<CertificateTemplate> responseObserver)
```

Returns a CertificateTemplate.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.GetCertificateTemplateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CertificateTemplate](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.CertificateTemplate)>`  

### listCaPools(ListCaPoolsRequest request, StreamObserver<ListCaPoolsResponse> responseObserver)

```
public default void listCaPools(ListCaPoolsRequest request, StreamObserver<ListCaPoolsResponse> responseObserver)
```

Lists CaPools.

**Parameters**

**Name**

**Description**

`request`

`[ListCaPoolsRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCaPoolsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCaPoolsResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCaPoolsResponse)>`  

### listCertificateAuthorities(ListCertificateAuthoritiesRequest request, StreamObserver<ListCertificateAuthoritiesResponse> responseObserver)

```
public default void listCertificateAuthorities(ListCertificateAuthoritiesRequest request, StreamObserver<ListCertificateAuthoritiesResponse> responseObserver)
```

Lists CertificateAuthorities.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificateAuthoritiesRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificateAuthoritiesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificateAuthoritiesResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificateAuthoritiesResponse)>`  

### listCertificateRevocationLists(ListCertificateRevocationListsRequest request, StreamObserver<ListCertificateRevocationListsResponse> responseObserver)

```
public default void listCertificateRevocationLists(ListCertificateRevocationListsRequest request, StreamObserver<ListCertificateRevocationListsResponse> responseObserver)
```

Lists CertificateRevocationLists.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificateRevocationListsRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificateRevocationListsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificateRevocationListsResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificateRevocationListsResponse)>`  

### listCertificateTemplates(ListCertificateTemplatesRequest request, StreamObserver<ListCertificateTemplatesResponse> responseObserver)

```
public default void listCertificateTemplates(ListCertificateTemplatesRequest request, StreamObserver<ListCertificateTemplatesResponse> responseObserver)
```

Lists CertificateTemplates.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificateTemplatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificateTemplatesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificateTemplatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificateTemplatesResponse)>`  

### listCertificates(ListCertificatesRequest request, StreamObserver<ListCertificatesResponse> responseObserver)

```
public default void listCertificates(ListCertificatesRequest request, StreamObserver<ListCertificatesResponse> responseObserver)
```

Lists Certificates.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificatesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.ListCertificatesResponse)>`  

### revokeCertificate(RevokeCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public default void revokeCertificate(RevokeCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Revoke a Certificate.

**Parameters**

**Name**

**Description**

`request`

`[RevokeCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.RevokeCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.Certificate)>`  

### undeleteCertificateAuthority(UndeleteCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void undeleteCertificateAuthority(UndeleteCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Undelete a CertificateAuthority that has been deleted.

**Parameters**

**Name**

**Description**

`request`

`[UndeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.UndeleteCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCaPool(UpdateCaPoolRequest request, StreamObserver<Operation> responseObserver)

```
public default void updateCaPool(UpdateCaPoolRequest request, StreamObserver<Operation> responseObserver)
```

Update a CaPool.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.UpdateCaPoolRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCertificate(UpdateCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public default void updateCertificate(UpdateCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Update a Certificate. Currently, the only field you can update is the labels field.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.UpdateCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.Certificate)>`  

### updateCertificateAuthority(UpdateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public default void updateCertificateAuthority(UpdateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Update a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.UpdateCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCertificateRevocationList(UpdateCertificateRevocationListRequest request, StreamObserver<Operation> responseObserver)

```
public default void updateCertificateRevocationList(UpdateCertificateRevocationListRequest request, StreamObserver<Operation> responseObserver)
```

Update a CertificateRevocationList.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.UpdateCertificateRevocationListRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCertificateTemplate(UpdateCertificateTemplateRequest request, StreamObserver<Operation> responseObserver)

```
public default void updateCertificateTemplate(UpdateCertificateTemplateRequest request, StreamObserver<Operation> responseObserver)
```

Update a CertificateTemplate.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.16.0/com.google.cloud.security.privateca.v1.UpdateCertificateTemplateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
