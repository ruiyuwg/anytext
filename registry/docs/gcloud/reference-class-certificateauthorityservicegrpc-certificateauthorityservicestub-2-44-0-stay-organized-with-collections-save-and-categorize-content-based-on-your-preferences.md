-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub (2.44.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public static final class CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub extends AbstractAsyncStub<CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub>
```

A stub to allow clients to do asynchronous rpc calls to service CertificateAuthorityService.

Certificate Authority Service manages private certificate authorities and issued certificates.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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

### activateCertificateAuthority(ActivateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void activateCertificateAuthority(ActivateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Activate a CertificateAuthority that is in state PENDING\_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

**Parameters**

**Name**

**Description**

`request`

`[ActivateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### build(Channel channel, CallOptions callOptions)

```
protected CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub build(Channel channel, CallOptions callOptions)
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

`[CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc.CertificateAuthorityServiceStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCertificate(CreateCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public void createCertificate(CreateCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Create a new Certificate in a given Project, Location from a particular CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[CreateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`  

### createCertificateAuthority(CreateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void createCertificateAuthority(CreateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Create a new CertificateAuthority in a given Project and Location.

**Parameters**

**Name**

**Description**

`request`

`[CreateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### disableCertificateAuthority(DisableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void disableCertificateAuthority(DisableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Disable a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[DisableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### enableCertificateAuthority(EnableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void enableCertificateAuthority(EnableCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Enable a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[EnableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request, StreamObserver<FetchCertificateAuthorityCsrResponse> responseObserver)

```
public void fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request, StreamObserver<FetchCertificateAuthorityCsrResponse> responseObserver)
```

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING\_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[FetchCertificateAuthorityCsrRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[FetchCertificateAuthorityCsrResponse](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse)>`  

### getCertificate(GetCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public void getCertificate(GetCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Returns a Certificate.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.GetCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`  

### getCertificateAuthority(GetCertificateAuthorityRequest request, StreamObserver<CertificateAuthority> responseObserver)

```
public void getCertificateAuthority(GetCertificateAuthorityRequest request, StreamObserver<CertificateAuthority> responseObserver)
```

Returns a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority)>`  

### getCertificateRevocationList(GetCertificateRevocationListRequest request, StreamObserver<CertificateRevocationList> responseObserver)

```
public void getCertificateRevocationList(GetCertificateRevocationListRequest request, StreamObserver<CertificateRevocationList> responseObserver)
```

Returns a CertificateRevocationList.

**Parameters**

**Name**

**Description**

`request`

`[GetCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[CertificateRevocationList](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList)>`  

### getReusableConfig(GetReusableConfigRequest request, StreamObserver<ReusableConfig> responseObserver)

```
public void getReusableConfig(GetReusableConfigRequest request, StreamObserver<ReusableConfig> responseObserver)
```

Returns a ReusableConfig.

**Parameters**

**Name**

**Description**

`request`

`[GetReusableConfigRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ReusableConfig](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ReusableConfig)>`  

### listCertificateAuthorities(ListCertificateAuthoritiesRequest request, StreamObserver<ListCertificateAuthoritiesResponse> responseObserver)

```
public void listCertificateAuthorities(ListCertificateAuthoritiesRequest request, StreamObserver<ListCertificateAuthoritiesResponse> responseObserver)
```

Lists CertificateAuthorities.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificateAuthoritiesRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificateAuthoritiesResponse](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse)>`  

### listCertificateRevocationLists(ListCertificateRevocationListsRequest request, StreamObserver<ListCertificateRevocationListsResponse> responseObserver)

```
public void listCertificateRevocationLists(ListCertificateRevocationListsRequest request, StreamObserver<ListCertificateRevocationListsResponse> responseObserver)
```

Lists CertificateRevocationLists.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificateRevocationListsRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificateRevocationListsResponse](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse)>`  

### listCertificates(ListCertificatesRequest request, StreamObserver<ListCertificatesResponse> responseObserver)

```
public void listCertificates(ListCertificatesRequest request, StreamObserver<ListCertificatesResponse> responseObserver)
```

Lists Certificates.

**Parameters**

**Name**

**Description**

`request`

`[ListCertificatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListCertificatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse)>`  

### listReusableConfigs(ListReusableConfigsRequest request, StreamObserver<ListReusableConfigsResponse> responseObserver)

```
public void listReusableConfigs(ListReusableConfigsRequest request, StreamObserver<ListReusableConfigsResponse> responseObserver)
```

Lists ReusableConfigs.

**Parameters**

**Name**

**Description**

`request`

`[ListReusableConfigsRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListReusableConfigsResponse](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse)>`  

### restoreCertificateAuthority(RestoreCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void restoreCertificateAuthority(RestoreCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Restore a CertificateAuthority that is scheduled for deletion.

**Parameters**

**Name**

**Description**

`request`

`[RestoreCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### revokeCertificate(RevokeCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public void revokeCertificate(RevokeCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Revoke a Certificate.

**Parameters**

**Name**

**Description**

`request`

`[RevokeCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`  

### scheduleDeleteCertificateAuthority(ScheduleDeleteCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void scheduleDeleteCertificateAuthority(ScheduleDeleteCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Schedule a CertificateAuthority for deletion.

**Parameters**

**Name**

**Description**

`request`

`[ScheduleDeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCertificate(UpdateCertificateRequest request, StreamObserver<Certificate> responseObserver)

```
public void updateCertificate(UpdateCertificateRequest request, StreamObserver<Certificate> responseObserver)
```

Update a Certificate. Currently, the only field you can update is the labels field.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`  

### updateCertificateAuthority(UpdateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)

```
public void updateCertificateAuthority(UpdateCertificateAuthorityRequest request, StreamObserver<Operation> responseObserver)
```

Update a CertificateAuthority.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateCertificateRevocationList(UpdateCertificateRevocationListRequest request, StreamObserver<Operation> responseObserver)

```
public void updateCertificateRevocationList(UpdateCertificateRevocationListRequest request, StreamObserver<Operation> responseObserver)
```

Update a CertificateRevocationList.

**Parameters**

**Name**

**Description**

`request`

`[UpdateCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.44.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
