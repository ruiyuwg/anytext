-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub (2.51.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public static final class CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub extends AbstractFutureStub<CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service CertificateAuthorityService.

Certificate Authority Service manages private certificate authorities and issued certificates.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
public ListenableFuture<Operation> activateCertificateAuthority(ActivateCertificateAuthorityRequest request)
```

Activate a CertificateAuthority that is in state PENDING\_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

**Parameter**

**Name**

**Description**

`request`

`[ActivateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ActivateCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### build(Channel channel, CallOptions callOptions)

```
protected CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub build(Channel channel, CallOptions callOptions)
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

`[CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthorityServiceGrpc.CertificateAuthorityServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCertificate(CreateCertificateRequest request)

```
public ListenableFuture<Certificate> createCertificate(CreateCertificateRequest request)
```

Create a new Certificate in a given Project, Location from a particular CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[CreateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### createCertificateAuthority(CreateCertificateAuthorityRequest request)

```
public ListenableFuture<Operation> createCertificateAuthority(CreateCertificateAuthorityRequest request)
```

Create a new CertificateAuthority in a given Project and Location.

**Parameter**

**Name**

**Description**

`request`

`[CreateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.CreateCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### disableCertificateAuthority(DisableCertificateAuthorityRequest request)

```
public ListenableFuture<Operation> disableCertificateAuthority(DisableCertificateAuthorityRequest request)
```

Disable a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[DisableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.DisableCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### enableCertificateAuthority(EnableCertificateAuthorityRequest request)

```
public ListenableFuture<Operation> enableCertificateAuthority(EnableCertificateAuthorityRequest request)
```

Enable a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[EnableCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.EnableCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request)

```
public ListenableFuture<FetchCertificateAuthorityCsrResponse> fetchCertificateAuthorityCsr(FetchCertificateAuthorityCsrRequest request)
```

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING\_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[FetchCertificateAuthorityCsrRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[FetchCertificateAuthorityCsrResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.FetchCertificateAuthorityCsrResponse)>`

### getCertificate(GetCertificateRequest request)

```
public ListenableFuture<Certificate> getCertificate(GetCertificateRequest request)
```

Returns a Certificate.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.GetCertificateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### getCertificateAuthority(GetCertificateAuthorityRequest request)

```
public ListenableFuture<CertificateAuthority> getCertificateAuthority(GetCertificateAuthorityRequest request)
```

Returns a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.GetCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[CertificateAuthority](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority)>`

### getCertificateRevocationList(GetCertificateRevocationListRequest request)

```
public ListenableFuture<CertificateRevocationList> getCertificateRevocationList(GetCertificateRevocationListRequest request)
```

Returns a CertificateRevocationList.

**Parameter**

**Name**

**Description**

`request`

`[GetCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.GetCertificateRevocationListRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[CertificateRevocationList](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.CertificateRevocationList)>`

### getReusableConfig(GetReusableConfigRequest request)

```
public ListenableFuture<ReusableConfig> getReusableConfig(GetReusableConfigRequest request)
```

Returns a ReusableConfig.

**Parameter**

**Name**

**Description**

`request`

`[GetReusableConfigRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.GetReusableConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ReusableConfig](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ReusableConfig)>`

### listCertificateAuthorities(ListCertificateAuthoritiesRequest request)

```
public ListenableFuture<ListCertificateAuthoritiesResponse> listCertificateAuthorities(ListCertificateAuthoritiesRequest request)
```

Lists CertificateAuthorities.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificateAuthoritiesRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListCertificateAuthoritiesResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListCertificateAuthoritiesResponse)>`

### listCertificateRevocationLists(ListCertificateRevocationListsRequest request)

```
public ListenableFuture<ListCertificateRevocationListsResponse> listCertificateRevocationLists(ListCertificateRevocationListsRequest request)
```

Lists CertificateRevocationLists.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificateRevocationListsRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListCertificateRevocationListsResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListCertificateRevocationListsResponse)>`

### listCertificates(ListCertificatesRequest request)

```
public ListenableFuture<ListCertificatesResponse> listCertificates(ListCertificatesRequest request)
```

Lists Certificates.

**Parameter**

**Name**

**Description**

`request`

`[ListCertificatesRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListCertificatesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListCertificatesResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListCertificatesResponse)>`

### listReusableConfigs(ListReusableConfigsRequest request)

```
public ListenableFuture<ListReusableConfigsResponse> listReusableConfigs(ListReusableConfigsRequest request)
```

Lists ReusableConfigs.

**Parameter**

**Name**

**Description**

`request`

`[ListReusableConfigsRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListReusableConfigsResponse](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ListReusableConfigsResponse)>`

### restoreCertificateAuthority(RestoreCertificateAuthorityRequest request)

```
public ListenableFuture<Operation> restoreCertificateAuthority(RestoreCertificateAuthorityRequest request)
```

Restore a CertificateAuthority that is scheduled for deletion.

**Parameter**

**Name**

**Description**

`request`

`[RestoreCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.RestoreCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### revokeCertificate(RevokeCertificateRequest request)

```
public ListenableFuture<Certificate> revokeCertificate(RevokeCertificateRequest request)
```

Revoke a Certificate.

**Parameter**

**Name**

**Description**

`request`

`[RevokeCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.RevokeCertificateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### scheduleDeleteCertificateAuthority(ScheduleDeleteCertificateAuthorityRequest request)

```
public ListenableFuture<Operation> scheduleDeleteCertificateAuthority(ScheduleDeleteCertificateAuthorityRequest request)
```

Schedule a CertificateAuthority for deletion.

**Parameter**

**Name**

**Description**

`request`

`[ScheduleDeleteCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.ScheduleDeleteCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateCertificate(UpdateCertificateRequest request)

```
public ListenableFuture<Certificate> updateCertificate(UpdateCertificateRequest request)
```

Update a Certificate. Currently, the only field you can update is the labels field.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Certificate](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.Certificate)>`

### updateCertificateAuthority(UpdateCertificateAuthorityRequest request)

```
public ListenableFuture<Operation> updateCertificateAuthority(UpdateCertificateAuthorityRequest request)
```

Update a CertificateAuthority.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateAuthorityRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateAuthorityRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateCertificateRevocationList(UpdateCertificateRevocationListRequest request)

```
public ListenableFuture<Operation> updateCertificateRevocationList(UpdateCertificateRevocationListRequest request)
```

Update a CertificateRevocationList.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCertificateRevocationListRequest](/java/docs/reference/google-cloud-security-private-ca/2.51.0/com.google.cloud.security.privateca.v1beta1.UpdateCertificateRevocationListRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
