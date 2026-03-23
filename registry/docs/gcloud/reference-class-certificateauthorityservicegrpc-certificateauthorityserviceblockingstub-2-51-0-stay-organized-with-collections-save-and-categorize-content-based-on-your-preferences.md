-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub (2.51.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public static final class CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub extends AbstractBlockingStub<CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service CertificateAuthorityService.

Certificate Authority Service manages private certificate authorities and issued certificates.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub

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

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

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

### activateCertificateAuthority(ActivateCertificateAuthorityRequest request)

```
public Operation activateCertificateAuthority(ActivateCertificateAuthorityRequest request)
```

Activate a CertificateAuthority that is in state AWAITING\_USER\_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

**Parameter**

**Name**

**Description**

`request`

`[ActivateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ActivateCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### build(Channel channel, CallOptions callOptions)

```
protected CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CertificateAuthorityServiceGrpc.CertificateAuthorityServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCaPool(CreateCaPoolRequest request)

```
public Operation createCaPool(CreateCaPoolRequest request)
```

Create a CaPool.

**Parameter**

**Name**

**Description**

`request`

`[CreateCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CreateCaPoolRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### createCertificate(CreateCertificateRequest request)

```
public Certificate createCertificate(CreateCertificateRequest request)
```

Create a new Certificate in a given Project, Location from a particular CaPool.

**Parameter**

**Name**

**Description**

`request`

`[CreateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CreateCertificateRequest)`  

**Returns**

**Type**

**Description**

`[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.Certificate)`

### createCertificateAuthority(CreateCertificateAuthorityRequest request)

```
public Operation createCertificateAuthority(CreateCertificateAuthorityRequest request)
```

Create a new CertificateAuthority in a given Project and Location.

**Parameter**

**Name**

**Description**

`request`

`[CreateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CreateCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### createCertificateTemplate(CreateCertificateTemplateRequest request)

```
public Operation createCertificateTemplate(CreateCertificateTemplateRequest request)
```

Create a new CertificateTemplate in a given Project and Location.

**Parameter**

**Name**

**Description**

`request`

`[CreateCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CreateCertificateTemplateRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteCaPool(DeleteCaPoolRequest request)

```
public Operation deleteCaPool(DeleteCaPoolRequest request)
```

Delete a CaPool.

**Parameter**

**Name**

**Description**

`request`

`[DeleteCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.DeleteCaPoolRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteCertificateAuthority(DeleteCertificateAuthorityRequest request)

```
public Operation deleteCertificateAuthority(DeleteCertificateAuthorityRequest request)
```

Delete a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[DeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.DeleteCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteCertificateTemplate(DeleteCertificateTemplateRequest request)

```
public Operation deleteCertificateTemplate(DeleteCertificateTemplateRequest request)
```

DeleteCertificateTemplate deletes a CertificateTemplate.

**Parameter**

**Name**

**Description**

`request`

`[DeleteCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.DeleteCertificateTemplateRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### disableCertificateAuthority(DisableCertificateAuthorityRequest request)

```
public Operation disableCertificateAuthority(DisableCertificateAuthorityRequest request)
```

Disable a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[DisableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.DisableCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### enableCertificateAuthority(EnableCertificateAuthorityRequest request)

```
public Operation enableCertificateAuthority(EnableCertificateAuthorityRequest request)
```

Enable a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[EnableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.EnableCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### fetchCaCerts(FetchCaCertsRequest request)

```
public FetchCaCertsResponse fetchCaCerts(FetchCaCertsRequest request)
```

FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all certificate authorities in the ENABLED, DISABLED, or STAGED states.

**Parameter**

**Name**

**Description**

`request`

`[FetchCaCertsRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.FetchCaCertsRequest)`  

**Returns**

**Type**

**Description**

`[FetchCaCertsResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.FetchCaCertsResponse)`

### fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request)

```
public FetchCertificateAuthorityCsrResponse fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request)
```

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING\_USER\_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[FetchCertificateAuthorityCsrRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.FetchCertificateAuthorityCsrRequest)`  

**Returns**

**Type**

**Description**

`[FetchCertificateAuthorityCsrResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.FetchCertificateAuthorityCsrResponse)`

### getCaPool(GetCaPoolRequest request)

```
public CaPool getCaPool(GetCaPoolRequest request)
```

Returns a CaPool.

**Parameter**

**Name**

**Description**

`request`

`[GetCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.GetCaPoolRequest)`  

**Returns**

**Type**

**Description**

`[CaPool](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CaPool)`

### getCertificate(GetCertificateRequest request)

```
public Certificate getCertificate(GetCertificateRequest request)
```

Returns a Certificate.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.GetCertificateRequest)`  

**Returns**

**Type**

**Description**

`[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.Certificate)`

### getCertificateAuthority(GetCertificateAuthorityRequest request)

```
public CertificateAuthority getCertificateAuthority(GetCertificateAuthorityRequest request)
```

Returns a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.GetCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CertificateAuthority)`

### getCertificateRevocationList(GetCertificateRevocationListRequest request)

```
public CertificateRevocationList getCertificateRevocationList(GetCertificateRevocationListRequest request)
```

Returns a CertificateRevocationList.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.GetCertificateRevocationListRequest)`  

**Returns**

**Type**

**Description**

`[CertificateRevocationList](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CertificateRevocationList)`

### getCertificateTemplate(GetCertificateTemplateRequest request)

```
public CertificateTemplate getCertificateTemplate(GetCertificateTemplateRequest request)
```

Returns a CertificateTemplate.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.GetCertificateTemplateRequest)`  

**Returns**

**Type**

**Description**

`[CertificateTemplate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.CertificateTemplate)`

### listCaPools(ListCaPoolsRequest request)

```
public ListCaPoolsResponse listCaPools(ListCaPoolsRequest request)
```

Lists CaPools.

**Parameter**

**Name**

**Description**

`request`

`[ListCaPoolsRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCaPoolsRequest)`  

**Returns**

**Type**

**Description**

`[ListCaPoolsResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCaPoolsResponse)`

### listCertificateAuthorities(ListCertificateAuthoritiesRequest request)

```
public ListCertificateAuthoritiesResponse listCertificateAuthorities(ListCertificateAuthoritiesRequest request)
```

Lists CertificateAuthorities.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificateAuthoritiesRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificateAuthoritiesRequest)`  

**Returns**

**Type**

**Description**

`[ListCertificateAuthoritiesResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificateAuthoritiesResponse)`

### listCertificateRevocationLists(ListCertificateRevocationListsRequest request)

```
public ListCertificateRevocationListsResponse listCertificateRevocationLists(ListCertificateRevocationListsRequest request)
```

Lists CertificateRevocationLists.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificateRevocationListsRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificateRevocationListsRequest)`  

**Returns**

**Type**

**Description**

`[ListCertificateRevocationListsResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificateRevocationListsResponse)`

### listCertificateTemplates(ListCertificateTemplatesRequest request)

```
public ListCertificateTemplatesResponse listCertificateTemplates(ListCertificateTemplatesRequest request)
```

Lists CertificateTemplates.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificateTemplatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificateTemplatesRequest)`  

**Returns**

**Type**

**Description**

`[ListCertificateTemplatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificateTemplatesResponse)`

### listCertificates(ListCertificatesRequest request)

```
public ListCertificatesResponse listCertificates(ListCertificatesRequest request)
```

Lists Certificates.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificatesRequest)`  

**Returns**

**Type**

**Description**

`[ListCertificatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.ListCertificatesResponse)`

### revokeCertificate(RevokeCertificateRequest request)

```
public Certificate revokeCertificate(RevokeCertificateRequest request)
```

Revoke a Certificate.

**Parameter**

**Name**

**Description**

`request`

`[RevokeCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.RevokeCertificateRequest)`  

**Returns**

**Type**

**Description**

`[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.Certificate)`

### undeleteCertificateAuthority(UndeleteCertificateAuthorityRequest request)

```
public Operation undeleteCertificateAuthority(UndeleteCertificateAuthorityRequest request)
```

Undelete a CertificateAuthority that has been deleted.

**Parameter**

**Name**

**Description**

`request`

`[UndeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.UndeleteCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateCaPool(UpdateCaPoolRequest request)

```
public Operation updateCaPool(UpdateCaPoolRequest request)
```

Update a CaPool.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCaPoolRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.UpdateCaPoolRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateCertificate(UpdateCertificateRequest request)

```
public Certificate updateCertificate(UpdateCertificateRequest request)
```

Update a Certificate. Currently, the only field you can update is the labels field.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.UpdateCertificateRequest)`  

**Returns**

**Type**

**Description**

`[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.Certificate)`

### updateCertificateAuthority(UpdateCertificateAuthorityRequest request)

```
public Operation updateCertificateAuthority(UpdateCertificateAuthorityRequest request)
```

Update a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.UpdateCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateCertificateRevocationList(UpdateCertificateRevocationListRequest request)

```
public Operation updateCertificateRevocationList(UpdateCertificateRevocationListRequest request)
```

Update a CertificateRevocationList.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.UpdateCertificateRevocationListRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### updateCertificateTemplate(UpdateCertificateTemplateRequest request)

```
public Operation updateCertificateTemplate(UpdateCertificateTemplateRequest request)
```

Update a CertificateTemplate.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateTemplateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1.UpdateCertificateTemplateRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
