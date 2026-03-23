-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SpacesServiceGrpc.SpacesServiceStub (0.25.0) Stay organized with collections Save and categorize content based on your preferences.

0.54.0 (latest) 0.52.0 0.50.0 0.49.0 0.47.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class SpacesServiceGrpc.SpacesServiceStub extends AbstractAsyncStub<SpacesServiceGrpc.SpacesServiceStub>
```

A stub to allow clients to do asynchronous rpc calls to service SpacesService.

REST API for services dealing with spaces.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> SpacesServiceGrpc.SpacesServiceStub

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

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

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

### build(Channel channel, CallOptions callOptions)

```
protected SpacesServiceGrpc.SpacesServiceStub build(Channel channel, CallOptions callOptions)
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

`[SpacesServiceGrpc.SpacesServiceStub](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.SpacesServiceGrpc.SpacesServiceStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createMember(CreateMemberRequest request, StreamObserver<Member> responseObserver)

```
public void createMember(CreateMemberRequest request, StreamObserver<Member> responseObserver)
```

[Developer Preview](https://developers.google.com/workspace/preview): Create a member. This API supports the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted, this API response will default to "name,email,role,user".

**Parameters**

**Name**

**Description**

`request`

`[CreateMemberRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.CreateMemberRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Member](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.Member)>`  

### createSpace(CreateSpaceRequest request, StreamObserver<Space> responseObserver)

```
public void createSpace(CreateSpaceRequest request, StreamObserver<Space> responseObserver)
```

Creates a space.

**Parameters**

**Name**

**Description**

`request`

`[CreateSpaceRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.CreateSpaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Space](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.Space)>`  

### deleteMember(DeleteMemberRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteMember(DeleteMemberRequest request, StreamObserver<Empty> responseObserver)
```

[Developer Preview](https://developers.google.com/workspace/preview): Delete the member who was previously assigned roles in the space.

**Parameters**

**Name**

**Description**

`request`

`[DeleteMemberRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.DeleteMemberRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### endActiveConference(EndActiveConferenceRequest request, StreamObserver<Empty> responseObserver)

```
public void endActiveConference(EndActiveConferenceRequest request, StreamObserver<Empty> responseObserver)
```

Ends an active conference (if there's one). For an example, see [End active conference](https://developers.google.com/meet/api/guides/meeting-spaces#end-active-conference).

**Parameters**

**Name**

**Description**

`request`

`[EndActiveConferenceRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.EndActiveConferenceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getMember(GetMemberRequest request, StreamObserver<Member> responseObserver)

```
public void getMember(GetMemberRequest request, StreamObserver<Member> responseObserver)
```

[Developer Preview](https://developers.google.com/workspace/preview): Get a member. This API supports the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted, this API response will default to "name,email,role,user".

**Parameters**

**Name**

**Description**

`request`

`[GetMemberRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.GetMemberRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Member](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.Member)>`  

### getSpace(GetSpaceRequest request, StreamObserver<Space> responseObserver)

```
public void getSpace(GetSpaceRequest request, StreamObserver<Space> responseObserver)
```

Gets details about a meeting space. For an example, see [Get a meeting space](https://developers.google.com/meet/api/guides/meeting-spaces#get-meeting-space).

**Parameters**

**Name**

**Description**

`request`

`[GetSpaceRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.GetSpaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Space](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.Space)>`  

### listMembers(ListMembersRequest request, StreamObserver<ListMembersResponse> responseObserver)

```
public void listMembers(ListMembersRequest request, StreamObserver<ListMembersResponse> responseObserver)
```

[Developer Preview](https://developers.google.com/workspace/preview): List members. This API supports the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted this API response will default to "name,email,role,user".

**Parameters**

**Name**

**Description**

`request`

`[ListMembersRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.ListMembersRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListMembersResponse](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.ListMembersResponse)>`  

### updateSpace(UpdateSpaceRequest request, StreamObserver<Space> responseObserver)

```
public void updateSpace(UpdateSpaceRequest request, StreamObserver<Space> responseObserver)
```

Updates details about a meeting space. For an example, see [Update a meeting space](https://developers.google.com/meet/api/guides/meeting-spaces#update-meeting-space).

**Parameters**

**Name**

**Description**

`request`

`[UpdateSpaceRequest](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.UpdateSpaceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Space](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.Space)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
