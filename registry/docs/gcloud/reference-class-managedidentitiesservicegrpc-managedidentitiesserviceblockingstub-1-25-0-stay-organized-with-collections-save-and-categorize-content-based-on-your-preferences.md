-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub (1.25.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.79.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.6 1.0.5 0.3.7

```
public static final class ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub extends AbstractBlockingStub<ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service ManagedIdentitiesService.

API Overview The `managedidentites.googleapis.com` service implements the Google Cloud Managed Identites API for identity services (e.g. Microsoft Active Directory). The Managed Identities service provides methods to manage (create/read/update/delete) domains, reset managed identities admin password, add/remove domain controllers in GCP regions and add/remove VPC peering. Data Model The Managed Identities service exposes the following resources:

-   Locations as global, named as follows: `projects/{project_id}/locations/global`.
-   Domains, named as follows: `/projects/{project_id}/locations/global/domain/{domain_name}`. The `{domain_name}` refers to fully qualified domain name in the customer project e.g. mydomain.myorganization.com, with the following restrictions:
    -   Must contain only lowercase letters, numbers, periods and hyphens.
    -   Must start with a letter.
    -   Must contain between 2-64 characters.
    -   Must end with a number or a letter.
    -   Must not start with period.
    -   First segement length (mydomain form example above) shouldn't exceed 15 chars.
    -   The last segment cannot be fully numeric.
    -   Must be unique within the customer project.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub

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

### attachTrust(AttachTrustRequest request)

```
public Operation attachTrust(AttachTrustRequest request)
```

Adds an AD trust to a domain.

**Parameter**

**Name**

**Description**

`request`

`[AttachTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.AttachTrustRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### build(Channel channel, CallOptions callOptions)

```
protected ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ManagedIdentitiesServiceGrpc.ManagedIdentitiesServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createMicrosoftAdDomain(CreateMicrosoftAdDomainRequest request)

```
public Operation createMicrosoftAdDomain(CreateMicrosoftAdDomainRequest request)
```

Creates a Microsoft AD domain.

**Parameter**

**Name**

**Description**

`request`

`[CreateMicrosoftAdDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.CreateMicrosoftAdDomainRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteDomain(DeleteDomainRequest request)

```
public Operation deleteDomain(DeleteDomainRequest request)
```

Deletes a domain.

**Parameter**

**Name**

**Description**

`request`

`[DeleteDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.DeleteDomainRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### detachTrust(DetachTrustRequest request)

```
public Operation detachTrust(DetachTrustRequest request)
```

Removes an AD trust.

**Parameter**

**Name**

**Description**

`request`

`[DetachTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.DetachTrustRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### getDomain(GetDomainRequest request)

```
public Domain getDomain(GetDomainRequest request)
```

Gets information about a domain.

**Parameter**

**Name**

**Description**

`request`

`[GetDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.GetDomainRequest)`  

**Returns**

**Type**

**Description**

`[Domain](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.Domain)`

### listDomains(ListDomainsRequest request)

```
public ListDomainsResponse listDomains(ListDomainsRequest request)
```

Lists domains in a project.

**Parameter**

**Name**

**Description**

`request`

`[ListDomainsRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ListDomainsRequest)`  

**Returns**

**Type**

**Description**

`[ListDomainsResponse](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ListDomainsResponse)`

### reconfigureTrust(ReconfigureTrustRequest request)

```
public Operation reconfigureTrust(ReconfigureTrustRequest request)
```

Updates the DNS conditional forwarder.

**Parameter**

**Name**

**Description**

`request`

`[ReconfigureTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ReconfigureTrustRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### resetAdminPassword(ResetAdminPasswordRequest request)

```
public ResetAdminPasswordResponse resetAdminPassword(ResetAdminPasswordRequest request)
```

Resets a domain's administrator password.

**Parameter**

**Name**

**Description**

`request`

`[ResetAdminPasswordRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ResetAdminPasswordRequest)`  

**Returns**

**Type**

**Description**

`[ResetAdminPasswordResponse](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ResetAdminPasswordResponse)`

### updateDomain(UpdateDomainRequest request)

```
public Operation updateDomain(UpdateDomainRequest request)
```

Updates the metadata and configuration of a domain.

**Parameter**

**Name**

**Description**

`request`

`[UpdateDomainRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.UpdateDomainRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### validateTrust(ValidateTrustRequest request)

```
public Operation validateTrust(ValidateTrustRequest request)
```

Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.

**Parameter**

**Name**

**Description**

`request`

`[ValidateTrustRequest](/java/docs/reference/google-cloud-managed-identities/1.25.0/com.google.cloud.managedidentities.v1.ValidateTrustRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
