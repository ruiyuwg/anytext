-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ConferenceRecordsServiceClient (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.54.0 (latest) 0.52.0 0.50.0 0.49.0 0.47.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.4.0 0.3.0 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-meet/google-cloud-meet/src/main/java/com/google/apps/meet/v2beta/ConferenceRecordsServiceClient.java)

[Product Reference](https://developers.google.com/meet/api/guides/overview)

Service Description: REST API for services dealing with conference records.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ConferenceRecordName name = ConferenceRecordName.of("[CONFERENCE_RECORD]");
   ConferenceRecord response = conferenceRecordsServiceClient.getConferenceRecord(name);
 }
 
```
 

Note: close() needs to be called on the ConferenceRecordsServiceClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

Methods

Method

Description

Method Variants

GetConferenceRecord

[Developer Preview](https://developers.google.com/workspace/preview). Gets a conference record by conference ID.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getConferenceRecord(GetConferenceRecordRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getConferenceRecord(ConferenceRecordName name)
    
-   getConferenceRecord(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getConferenceRecordCallable()
    

ListConferenceRecords

[Developer Preview](https://developers.google.com/workspace/preview). Lists the conference records by start time and in descending order.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listConferenceRecords(ListConferenceRecordsRequest request)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listConferenceRecordsPagedCallable()
    
-   listConferenceRecordsCallable()
    

GetParticipant

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant by participant ID.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getParticipant(GetParticipantRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getParticipant(ParticipantName name)
    
-   getParticipant(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getParticipantCallable()
    

ListParticipants

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participants in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listParticipants(ListParticipantsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listParticipants(ConferenceRecordName parent)
    
-   listParticipants(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listParticipantsPagedCallable()
    
-   listParticipantsCallable()
    

GetParticipantSession

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant session by participant session ID.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getParticipantSession(GetParticipantSessionRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getParticipantSession(ParticipantSessionName name)
    
-   getParticipantSession(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getParticipantSessionCallable()
    

ListParticipantSessions

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participant sessions of a participant in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listParticipantSessions(ListParticipantSessionsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listParticipantSessions(ParticipantName parent)
    
-   listParticipantSessions(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listParticipantSessionsPagedCallable()
    
-   listParticipantSessionsCallable()
    

GetRecording

[Developer Preview](https://developers.google.com/workspace/preview). Gets a recording by recording ID.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getRecording(GetRecordingRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getRecording(RecordingName name)
    
-   getRecording(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getRecordingCallable()
    

ListRecordings

[Developer Preview](https://developers.google.com/workspace/preview). Lists the recording resources from the conference record.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listRecordings(ListRecordingsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listRecordings(ConferenceRecordName parent)
    
-   listRecordings(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listRecordingsPagedCallable()
    
-   listRecordingsCallable()
    

GetTranscript

[Developer Preview](https://developers.google.com/workspace/preview). Gets a transcript by transcript ID.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getTranscript(GetTranscriptRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getTranscript(TranscriptName name)
    
-   getTranscript(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getTranscriptCallable()
    

ListTranscripts

[Developer Preview](https://developers.google.com/workspace/preview). Lists the set of transcripts from the conference record.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listTranscripts(ListTranscriptsRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listTranscripts(ConferenceRecordName parent)
    
-   listTranscripts(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listTranscriptsPagedCallable()
    
-   listTranscriptsCallable()
    

GetTranscriptEntry

[Developer Preview](https://developers.google.com/workspace/preview). Gets a `TranscriptEntry` resource by entry ID.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   getTranscriptEntry(GetTranscriptEntryRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   getTranscriptEntry(TranscriptEntryName name)
    
-   getTranscriptEntry(String name)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   getTranscriptEntryCallable()
    

ListTranscriptEntries

[Developer Preview](https://developers.google.com/workspace/preview). Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Request object method variants only take one parameter, a request object, which must be constructed before the call.

-   listTranscriptEntries(ListTranscriptEntriesRequest request)
    

"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.

-   listTranscriptEntries(TranscriptName parent)
    
-   listTranscriptEntries(String parent)
    

Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.

-   listTranscriptEntriesPagedCallable()
    
-   listTranscriptEntriesCallable()
    

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of ConferenceRecordsServiceSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ConferenceRecordsServiceSettings conferenceRecordsServiceSettings =
     ConferenceRecordsServiceSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create(conferenceRecordsServiceSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ConferenceRecordsServiceSettings conferenceRecordsServiceSettings =
     ConferenceRecordsServiceSettings.newBuilder().setEndpoint(myEndpoint).build();
 ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create(conferenceRecordsServiceSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ConferenceRecordsServiceSettings conferenceRecordsServiceSettings =
     ConferenceRecordsServiceSettings.newHttpJsonBuilder().build();
 ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create(conferenceRecordsServiceSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> ConferenceRecordsServiceClient

## Static Methods

### create()

```
public static final ConferenceRecordsServiceClient create()
```

Constructs an instance of ConferenceRecordsServiceClient with default settings.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ConferenceRecordsServiceSettings settings)

```
public static final ConferenceRecordsServiceClient create(ConferenceRecordsServiceSettings settings)
```

Constructs an instance of ConferenceRecordsServiceClient, using the given settings. The channels are created based on the settings passed in, or defaults for any settings that are not set.

**Parameter**

**Name**

**Description**

`settings`

`[ConferenceRecordsServiceSettings](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceSettings)`  

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ConferenceRecordsServiceStub stub)

```
public static final ConferenceRecordsServiceClient create(ConferenceRecordsServiceStub stub)
```

Constructs an instance of ConferenceRecordsServiceClient, using the given stub for making calls. This is for advanced usage - prefer using create(ConferenceRecordsServiceSettings).

**Parameter**

**Name**

**Description**

`stub`

`[ConferenceRecordsServiceStub](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.stub.ConferenceRecordsServiceStub)`  

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient)`

## Constructors

### ConferenceRecordsServiceClient(ConferenceRecordsServiceSettings settings)

```
protected ConferenceRecordsServiceClient(ConferenceRecordsServiceSettings settings)
```

Constructs an instance of ConferenceRecordsServiceClient, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameter**

**Name**

**Description**

`settings`

`[ConferenceRecordsServiceSettings](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceSettings)`  

### ConferenceRecordsServiceClient(ConferenceRecordsServiceStub stub)

```
protected ConferenceRecordsServiceClient(ConferenceRecordsServiceStub stub)
```

**Parameter**

**Name**

**Description**

`stub`

`[ConferenceRecordsServiceStub](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.stub.ConferenceRecordsServiceStub)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### close()

```
public final void close()
```

### getConferenceRecord(ConferenceRecordName name)

```
public final ConferenceRecord getConferenceRecord(ConferenceRecordName name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a conference record by conference ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ConferenceRecordName name = ConferenceRecordName.of("[CONFERENCE_RECORD]");
   ConferenceRecord response = conferenceRecordsServiceClient.getConferenceRecord(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ConferenceRecordName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordName)`  

Required. Resource name of the conference.

**Returns**

**Type**

**Description**

`[ConferenceRecord](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecord)`

### getConferenceRecord(GetConferenceRecordRequest request)

```
public final ConferenceRecord getConferenceRecord(GetConferenceRecordRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a conference record by conference ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetConferenceRecordRequest request =
       GetConferenceRecordRequest.newBuilder()
           .setName(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .build();
   ConferenceRecord response = conferenceRecordsServiceClient.getConferenceRecord(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetConferenceRecordRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetConferenceRecordRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecord](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecord)`

### getConferenceRecord(String name)

```
public final ConferenceRecord getConferenceRecord(String name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a conference record by conference ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String name = ConferenceRecordName.of("[CONFERENCE_RECORD]").toString();
   ConferenceRecord response = conferenceRecordsServiceClient.getConferenceRecord(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the conference.

**Returns**

**Type**

**Description**

`[ConferenceRecord](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecord)`

### getConferenceRecordCallable()

```
public final UnaryCallable<GetConferenceRecordRequest,ConferenceRecord> getConferenceRecordCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a conference record by conference ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetConferenceRecordRequest request =
       GetConferenceRecordRequest.newBuilder()
           .setName(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .build();
   ApiFuture<ConferenceRecord> future =
       conferenceRecordsServiceClient.getConferenceRecordCallable().futureCall(request);
   // Do something.
   ConferenceRecord response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetConferenceRecordRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetConferenceRecordRequest),[ConferenceRecord](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecord)>`

### getParticipant(GetParticipantRequest request)

```
public final Participant getParticipant(GetParticipantRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant by participant ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetParticipantRequest request =
       GetParticipantRequest.newBuilder()
           .setName(ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString())
           .build();
   Participant response = conferenceRecordsServiceClient.getParticipant(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetParticipantRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetParticipantRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Participant](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Participant)`

### getParticipant(ParticipantName name)

```
public final Participant getParticipant(ParticipantName name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant by participant ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ParticipantName name = ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]");
   Participant response = conferenceRecordsServiceClient.getParticipant(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ParticipantName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantName)`  

Required. Resource name of the participant.

**Returns**

**Type**

**Description**

`[Participant](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Participant)`

### getParticipant(String name)

```
public final Participant getParticipant(String name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant by participant ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String name = ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString();
   Participant response = conferenceRecordsServiceClient.getParticipant(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the participant.

**Returns**

**Type**

**Description**

`[Participant](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Participant)`

### getParticipantCallable()

```
public final UnaryCallable<GetParticipantRequest,Participant> getParticipantCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant by participant ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetParticipantRequest request =
       GetParticipantRequest.newBuilder()
           .setName(ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString())
           .build();
   ApiFuture<Participant> future =
       conferenceRecordsServiceClient.getParticipantCallable().futureCall(request);
   // Do something.
   Participant response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetParticipantRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetParticipantRequest),[Participant](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Participant)>`

### getParticipantSession(GetParticipantSessionRequest request)

```
public final ParticipantSession getParticipantSession(GetParticipantSessionRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant session by participant session ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetParticipantSessionRequest request =
       GetParticipantSessionRequest.newBuilder()
           .setName(
               ParticipantSessionName.of(
                       "[CONFERENCE_RECORD]", "[PARTICIPANT]", "[PARTICIPANT_SESSION]")
                   .toString())
           .build();
   ParticipantSession response = conferenceRecordsServiceClient.getParticipantSession(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetParticipantSessionRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetParticipantSessionRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ParticipantSession](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantSession)`

### getParticipantSession(ParticipantSessionName name)

```
public final ParticipantSession getParticipantSession(ParticipantSessionName name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant session by participant session ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ParticipantSessionName name =
       ParticipantSessionName.of(
           "[CONFERENCE_RECORD]", "[PARTICIPANT]", "[PARTICIPANT_SESSION]");
   ParticipantSession response = conferenceRecordsServiceClient.getParticipantSession(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[ParticipantSessionName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantSessionName)`  

Required. Resource name of the participant.

**Returns**

**Type**

**Description**

`[ParticipantSession](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantSession)`

### getParticipantSession(String name)

```
public final ParticipantSession getParticipantSession(String name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant session by participant session ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String name =
       ParticipantSessionName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]", "[PARTICIPANT_SESSION]")
           .toString();
   ParticipantSession response = conferenceRecordsServiceClient.getParticipantSession(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the participant.

**Returns**

**Type**

**Description**

`[ParticipantSession](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantSession)`

### getParticipantSessionCallable()

```
public final UnaryCallable<GetParticipantSessionRequest,ParticipantSession> getParticipantSessionCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a participant session by participant session ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetParticipantSessionRequest request =
       GetParticipantSessionRequest.newBuilder()
           .setName(
               ParticipantSessionName.of(
                       "[CONFERENCE_RECORD]", "[PARTICIPANT]", "[PARTICIPANT_SESSION]")
                   .toString())
           .build();
   ApiFuture<ParticipantSession> future =
       conferenceRecordsServiceClient.getParticipantSessionCallable().futureCall(request);
   // Do something.
   ParticipantSession response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetParticipantSessionRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetParticipantSessionRequest),[ParticipantSession](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantSession)>`

### getRecording(GetRecordingRequest request)

```
public final Recording getRecording(GetRecordingRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a recording by recording ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetRecordingRequest request =
       GetRecordingRequest.newBuilder()
           .setName(RecordingName.of("[CONFERENCE_RECORD]", "[RECORDING]").toString())
           .build();
   Recording response = conferenceRecordsServiceClient.getRecording(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetRecordingRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetRecordingRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Recording](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Recording)`

### getRecording(RecordingName name)

```
public final Recording getRecording(RecordingName name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a recording by recording ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   RecordingName name = RecordingName.of("[CONFERENCE_RECORD]", "[RECORDING]");
   Recording response = conferenceRecordsServiceClient.getRecording(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[RecordingName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.RecordingName)`  

Required. Resource name of the recording.

**Returns**

**Type**

**Description**

`[Recording](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Recording)`

### getRecording(String name)

```
public final Recording getRecording(String name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a recording by recording ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String name = RecordingName.of("[CONFERENCE_RECORD]", "[RECORDING]").toString();
   Recording response = conferenceRecordsServiceClient.getRecording(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the recording.

**Returns**

**Type**

**Description**

`[Recording](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Recording)`

### getRecordingCallable()

```
public final UnaryCallable<GetRecordingRequest,Recording> getRecordingCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a recording by recording ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetRecordingRequest request =
       GetRecordingRequest.newBuilder()
           .setName(RecordingName.of("[CONFERENCE_RECORD]", "[RECORDING]").toString())
           .build();
   ApiFuture<Recording> future =
       conferenceRecordsServiceClient.getRecordingCallable().futureCall(request);
   // Do something.
   Recording response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetRecordingRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetRecordingRequest),[Recording](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Recording)>`

### getSettings()

```
public final ConferenceRecordsServiceSettings getSettings()
```

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceSettings](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceSettings)`

### getStub()

```
public ConferenceRecordsServiceStub getStub()
```

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceStub](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.stub.ConferenceRecordsServiceStub)`

### getTranscript(GetTranscriptRequest request)

```
public final Transcript getTranscript(GetTranscriptRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a transcript by transcript ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetTranscriptRequest request =
       GetTranscriptRequest.newBuilder()
           .setName(TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString())
           .build();
   Transcript response = conferenceRecordsServiceClient.getTranscript(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetTranscriptRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetTranscriptRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[Transcript](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Transcript)`

### getTranscript(TranscriptName name)

```
public final Transcript getTranscript(TranscriptName name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a transcript by transcript ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   TranscriptName name = TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]");
   Transcript response = conferenceRecordsServiceClient.getTranscript(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[TranscriptName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptName)`  

Required. Resource name of the transcript.

**Returns**

**Type**

**Description**

`[Transcript](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Transcript)`

### getTranscript(String name)

```
public final Transcript getTranscript(String name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a transcript by transcript ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String name = TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString();
   Transcript response = conferenceRecordsServiceClient.getTranscript(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the transcript.

**Returns**

**Type**

**Description**

`[Transcript](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Transcript)`

### getTranscriptCallable()

```
public final UnaryCallable<GetTranscriptRequest,Transcript> getTranscriptCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a transcript by transcript ID.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetTranscriptRequest request =
       GetTranscriptRequest.newBuilder()
           .setName(TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString())
           .build();
   ApiFuture<Transcript> future =
       conferenceRecordsServiceClient.getTranscriptCallable().futureCall(request);
   // Do something.
   Transcript response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetTranscriptRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetTranscriptRequest),[Transcript](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.Transcript)>`

### getTranscriptEntry(GetTranscriptEntryRequest request)

```
public final TranscriptEntry getTranscriptEntry(GetTranscriptEntryRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a `TranscriptEntry` resource by entry ID.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetTranscriptEntryRequest request =
       GetTranscriptEntryRequest.newBuilder()
           .setName(
               TranscriptEntryName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]", "[ENTRY]")
                   .toString())
           .build();
   TranscriptEntry response = conferenceRecordsServiceClient.getTranscriptEntry(request);
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[GetTranscriptEntryRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetTranscriptEntryRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[TranscriptEntry](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptEntry)`

### getTranscriptEntry(TranscriptEntryName name)

```
public final TranscriptEntry getTranscriptEntry(TranscriptEntryName name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a `TranscriptEntry` resource by entry ID.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   TranscriptEntryName name =
       TranscriptEntryName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]", "[ENTRY]");
   TranscriptEntry response = conferenceRecordsServiceClient.getTranscriptEntry(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[TranscriptEntryName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptEntryName)`  

Required. Resource name of the `TranscriptEntry`.

**Returns**

**Type**

**Description**

`[TranscriptEntry](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptEntry)`

### getTranscriptEntry(String name)

```
public final TranscriptEntry getTranscriptEntry(String name)
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a `TranscriptEntry` resource by entry ID.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String name =
       TranscriptEntryName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]", "[ENTRY]").toString();
   TranscriptEntry response = conferenceRecordsServiceClient.getTranscriptEntry(name);
 }
 
```
 

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Resource name of the `TranscriptEntry`.

**Returns**

**Type**

**Description**

`[TranscriptEntry](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptEntry)`

### getTranscriptEntryCallable()

```
public final UnaryCallable<GetTranscriptEntryRequest,TranscriptEntry> getTranscriptEntryCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Gets a `TranscriptEntry` resource by entry ID.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   GetTranscriptEntryRequest request =
       GetTranscriptEntryRequest.newBuilder()
           .setName(
               TranscriptEntryName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]", "[ENTRY]")
                   .toString())
           .build();
   ApiFuture<TranscriptEntry> future =
       conferenceRecordsServiceClient.getTranscriptEntryCallable().futureCall(request);
   // Do something.
   TranscriptEntry response = future.get();
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetTranscriptEntryRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.GetTranscriptEntryRequest),[TranscriptEntry](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptEntry)>`

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### listConferenceRecords(ListConferenceRecordsRequest request)

```
public final ConferenceRecordsServiceClient.ListConferenceRecordsPagedResponse listConferenceRecords(ListConferenceRecordsRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the conference records by start time and in descending order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListConferenceRecordsRequest request =
       ListConferenceRecordsRequest.newBuilder()
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   for (ConferenceRecord element :
       conferenceRecordsServiceClient.listConferenceRecords(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListConferenceRecordsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListConferenceRecordsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListConferenceRecordsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListConferenceRecordsPagedResponse)`

### listConferenceRecordsCallable()

```
public final UnaryCallable<ListConferenceRecordsRequest,ListConferenceRecordsResponse> listConferenceRecordsCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the conference records by start time and in descending order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListConferenceRecordsRequest request =
       ListConferenceRecordsRequest.newBuilder()
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   while (true) {
     ListConferenceRecordsResponse response =
         conferenceRecordsServiceClient.listConferenceRecordsCallable().call(request);
     for (ConferenceRecord element : response.getConferenceRecordsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListConferenceRecordsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListConferenceRecordsRequest),[ListConferenceRecordsResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListConferenceRecordsResponse)>`

### listConferenceRecordsPagedCallable()

```
public final UnaryCallable<ListConferenceRecordsRequest,ConferenceRecordsServiceClient.ListConferenceRecordsPagedResponse> listConferenceRecordsPagedCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the conference records by start time and in descending order.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListConferenceRecordsRequest request =
       ListConferenceRecordsRequest.newBuilder()
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<ConferenceRecord> future =
       conferenceRecordsServiceClient.listConferenceRecordsPagedCallable().futureCall(request);
   // Do something.
   for (ConferenceRecord element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListConferenceRecordsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListConferenceRecordsRequest),[ListConferenceRecordsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListConferenceRecordsPagedResponse)>`

### listParticipantSessions(ListParticipantSessionsRequest request)

```
public final ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse listParticipantSessions(ListParticipantSessionsRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participant sessions of a participant in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListParticipantSessionsRequest request =
       ListParticipantSessionsRequest.newBuilder()
           .setParent(ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   for (ParticipantSession element :
       conferenceRecordsServiceClient.listParticipantSessions(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListParticipantSessionsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantSessionsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse)`

### listParticipantSessions(ParticipantName parent)

```
public final ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse listParticipantSessions(ParticipantName parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participant sessions of a participant in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ParticipantName parent = ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]");
   for (ParticipantSession element :
       conferenceRecordsServiceClient.listParticipantSessions(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ParticipantName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ParticipantName)`  

Required. Format: `conferenceRecords/{conference_record}/participants/{participant}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse)`

### listParticipantSessions(String parent)

```
public final ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse listParticipantSessions(String parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participant sessions of a participant in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String parent = ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString();
   for (ParticipantSession element :
       conferenceRecordsServiceClient.listParticipantSessions(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `conferenceRecords/{conference_record}/participants/{participant}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse)`

### listParticipantSessionsCallable()

```
public final UnaryCallable<ListParticipantSessionsRequest,ListParticipantSessionsResponse> listParticipantSessionsCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participant sessions of a participant in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListParticipantSessionsRequest request =
       ListParticipantSessionsRequest.newBuilder()
           .setParent(ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   while (true) {
     ListParticipantSessionsResponse response =
         conferenceRecordsServiceClient.listParticipantSessionsCallable().call(request);
     for (ParticipantSession element : response.getParticipantSessionsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListParticipantSessionsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantSessionsRequest),[ListParticipantSessionsResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantSessionsResponse)>`

### listParticipantSessionsPagedCallable()

```
public final UnaryCallable<ListParticipantSessionsRequest,ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse> listParticipantSessionsPagedCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participant sessions of a participant in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListParticipantSessionsRequest request =
       ListParticipantSessionsRequest.newBuilder()
           .setParent(ParticipantName.of("[CONFERENCE_RECORD]", "[PARTICIPANT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<ParticipantSession> future =
       conferenceRecordsServiceClient.listParticipantSessionsPagedCallable().futureCall(request);
   // Do something.
   for (ParticipantSession element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListParticipantSessionsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantSessionsRequest),[ListParticipantSessionsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantSessionsPagedResponse)>`

### listParticipants(ConferenceRecordName parent)

```
public final ConferenceRecordsServiceClient.ListParticipantsPagedResponse listParticipants(ConferenceRecordName parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participants in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ConferenceRecordName parent = ConferenceRecordName.of("[CONFERENCE_RECORD]");
   for (Participant element :
       conferenceRecordsServiceClient.listParticipants(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ConferenceRecordName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordName)`  

Required. Format: `conferenceRecords/{conference_record}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListParticipantsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantsPagedResponse)`

### listParticipants(ListParticipantsRequest request)

```
public final ConferenceRecordsServiceClient.ListParticipantsPagedResponse listParticipants(ListParticipantsRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participants in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListParticipantsRequest request =
       ListParticipantsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   for (Participant element :
       conferenceRecordsServiceClient.listParticipants(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListParticipantsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListParticipantsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantsPagedResponse)`

### listParticipants(String parent)

```
public final ConferenceRecordsServiceClient.ListParticipantsPagedResponse listParticipants(String parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participants in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String parent = ConferenceRecordName.of("[CONFERENCE_RECORD]").toString();
   for (Participant element :
       conferenceRecordsServiceClient.listParticipants(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `conferenceRecords/{conference_record}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListParticipantsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantsPagedResponse)`

### listParticipantsCallable()

```
public final UnaryCallable<ListParticipantsRequest,ListParticipantsResponse> listParticipantsCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participants in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListParticipantsRequest request =
       ListParticipantsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   while (true) {
     ListParticipantsResponse response =
         conferenceRecordsServiceClient.listParticipantsCallable().call(request);
     for (Participant element : response.getParticipantsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListParticipantsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantsRequest),[ListParticipantsResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantsResponse)>`

### listParticipantsPagedCallable()

```
public final UnaryCallable<ListParticipantsRequest,ConferenceRecordsServiceClient.ListParticipantsPagedResponse> listParticipantsPagedCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the participants in a conference record, by default ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListParticipantsRequest request =
       ListParticipantsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .setFilter("filter-1274492040")
           .build();
   ApiFuture<Participant> future =
       conferenceRecordsServiceClient.listParticipantsPagedCallable().futureCall(request);
   // Do something.
   for (Participant element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListParticipantsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListParticipantsRequest),[ListParticipantsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListParticipantsPagedResponse)>`

### listRecordings(ConferenceRecordName parent)

```
public final ConferenceRecordsServiceClient.ListRecordingsPagedResponse listRecordings(ConferenceRecordName parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the recording resources from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ConferenceRecordName parent = ConferenceRecordName.of("[CONFERENCE_RECORD]");
   for (Recording element : conferenceRecordsServiceClient.listRecordings(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ConferenceRecordName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordName)`  

Required. Format: `conferenceRecords/{conference_record}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListRecordingsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListRecordingsPagedResponse)`

### listRecordings(ListRecordingsRequest request)

```
public final ConferenceRecordsServiceClient.ListRecordingsPagedResponse listRecordings(ListRecordingsRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the recording resources from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListRecordingsRequest request =
       ListRecordingsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Recording element :
       conferenceRecordsServiceClient.listRecordings(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListRecordingsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListRecordingsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListRecordingsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListRecordingsPagedResponse)`

### listRecordings(String parent)

```
public final ConferenceRecordsServiceClient.ListRecordingsPagedResponse listRecordings(String parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the recording resources from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String parent = ConferenceRecordName.of("[CONFERENCE_RECORD]").toString();
   for (Recording element : conferenceRecordsServiceClient.listRecordings(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `conferenceRecords/{conference_record}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListRecordingsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListRecordingsPagedResponse)`

### listRecordingsCallable()

```
public final UnaryCallable<ListRecordingsRequest,ListRecordingsResponse> listRecordingsCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the recording resources from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListRecordingsRequest request =
       ListRecordingsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListRecordingsResponse response =
         conferenceRecordsServiceClient.listRecordingsCallable().call(request);
     for (Recording element : response.getRecordingsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRecordingsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListRecordingsRequest),[ListRecordingsResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListRecordingsResponse)>`

### listRecordingsPagedCallable()

```
public final UnaryCallable<ListRecordingsRequest,ConferenceRecordsServiceClient.ListRecordingsPagedResponse> listRecordingsPagedCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the recording resources from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListRecordingsRequest request =
       ListRecordingsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Recording> future =
       conferenceRecordsServiceClient.listRecordingsPagedCallable().futureCall(request);
   // Do something.
   for (Recording element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListRecordingsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListRecordingsRequest),[ListRecordingsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListRecordingsPagedResponse)>`

### listTranscriptEntries(ListTranscriptEntriesRequest request)

```
public final ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse listTranscriptEntries(ListTranscriptEntriesRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListTranscriptEntriesRequest request =
       ListTranscriptEntriesRequest.newBuilder()
           .setParent(TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (TranscriptEntry element :
       conferenceRecordsServiceClient.listTranscriptEntries(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListTranscriptEntriesRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptEntriesRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse)`

### listTranscriptEntries(TranscriptName parent)

```
public final ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse listTranscriptEntries(TranscriptName parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   TranscriptName parent = TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]");
   for (TranscriptEntry element :
       conferenceRecordsServiceClient.listTranscriptEntries(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[TranscriptName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.TranscriptName)`  

Required. Format: `conferenceRecords/{conference_record}/transcripts/{transcript}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse)`

### listTranscriptEntries(String parent)

```
public final ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse listTranscriptEntries(String parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String parent = TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString();
   for (TranscriptEntry element :
       conferenceRecordsServiceClient.listTranscriptEntries(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `conferenceRecords/{conference_record}/transcripts/{transcript}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse)`

### listTranscriptEntriesCallable()

```
public final UnaryCallable<ListTranscriptEntriesRequest,ListTranscriptEntriesResponse> listTranscriptEntriesCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListTranscriptEntriesRequest request =
       ListTranscriptEntriesRequest.newBuilder()
           .setParent(TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListTranscriptEntriesResponse response =
         conferenceRecordsServiceClient.listTranscriptEntriesCallable().call(request);
     for (TranscriptEntry element : response.getTranscriptEntriesList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTranscriptEntriesRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptEntriesRequest),[ListTranscriptEntriesResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptEntriesResponse)>`

### listTranscriptEntriesPagedCallable()

```
public final UnaryCallable<ListTranscriptEntriesRequest,ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse> listTranscriptEntriesPagedCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order.

Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when the Google Docs transcript file is modified after generation.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListTranscriptEntriesRequest request =
       ListTranscriptEntriesRequest.newBuilder()
           .setParent(TranscriptName.of("[CONFERENCE_RECORD]", "[TRANSCRIPT]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<TranscriptEntry> future =
       conferenceRecordsServiceClient.listTranscriptEntriesPagedCallable().futureCall(request);
   // Do something.
   for (TranscriptEntry element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTranscriptEntriesRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptEntriesRequest),[ListTranscriptEntriesPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptEntriesPagedResponse)>`

### listTranscripts(ConferenceRecordName parent)

```
public final ConferenceRecordsServiceClient.ListTranscriptsPagedResponse listTranscripts(ConferenceRecordName parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the set of transcripts from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ConferenceRecordName parent = ConferenceRecordName.of("[CONFERENCE_RECORD]");
   for (Transcript element :
       conferenceRecordsServiceClient.listTranscripts(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[ConferenceRecordName](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordName)`  

Required. Format: `conferenceRecords/{conference_record}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListTranscriptsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptsPagedResponse)`

### listTranscripts(ListTranscriptsRequest request)

```
public final ConferenceRecordsServiceClient.ListTranscriptsPagedResponse listTranscripts(ListTranscriptsRequest request)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the set of transcripts from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListTranscriptsRequest request =
       ListTranscriptsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   for (Transcript element :
       conferenceRecordsServiceClient.listTranscripts(request).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`request`

`[ListTranscriptsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptsRequest)`  

The request object containing all of the parameters for the API call.

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListTranscriptsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptsPagedResponse)`

### listTranscripts(String parent)

```
public final ConferenceRecordsServiceClient.ListTranscriptsPagedResponse listTranscripts(String parent)
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the set of transcripts from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   String parent = ConferenceRecordName.of("[CONFERENCE_RECORD]").toString();
   for (Transcript element :
       conferenceRecordsServiceClient.listTranscripts(parent).iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Parameter**

**Name**

**Description**

`parent`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Required. Format: `conferenceRecords/{conference_record}`

**Returns**

**Type**

**Description**

`[ConferenceRecordsServiceClient.ListTranscriptsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptsPagedResponse)`

### listTranscriptsCallable()

```
public final UnaryCallable<ListTranscriptsRequest,ListTranscriptsResponse> listTranscriptsCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the set of transcripts from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListTranscriptsRequest request =
       ListTranscriptsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   while (true) {
     ListTranscriptsResponse response =
         conferenceRecordsServiceClient.listTranscriptsCallable().call(request);
     for (Transcript element : response.getTranscriptsList()) {
       // doThingsWith(element);
     }
     String nextPageToken = response.getNextPageToken();
     if (!Strings.isNullOrEmpty(nextPageToken)) {
       request = request.toBuilder().setPageToken(nextPageToken).build();
     } else {
       break;
     }
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTranscriptsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptsRequest),[ListTranscriptsResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptsResponse)>`

### listTranscriptsPagedCallable()

```
public final UnaryCallable<ListTranscriptsRequest,ConferenceRecordsServiceClient.ListTranscriptsPagedResponse> listTranscriptsPagedCallable()
```

[Developer Preview](https://developers.google.com/workspace/preview). Lists the set of transcripts from the conference record.

Sample code:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (ConferenceRecordsServiceClient conferenceRecordsServiceClient =
     ConferenceRecordsServiceClient.create()) {
   ListTranscriptsRequest request =
       ListTranscriptsRequest.newBuilder()
           .setParent(ConferenceRecordName.of("[CONFERENCE_RECORD]").toString())
           .setPageSize(883849137)
           .setPageToken("pageToken873572522")
           .build();
   ApiFuture<Transcript> future =
       conferenceRecordsServiceClient.listTranscriptsPagedCallable().futureCall(request);
   // Do something.
   for (Transcript element : future.get().iterateAll()) {
     // doThingsWith(element);
   }
 }
 
```
 

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListTranscriptsRequest](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ListTranscriptsRequest),[ListTranscriptsPagedResponse](/java/docs/reference/google-cloud-meet/0.6.0/com.google.apps.meet.v2beta.ConferenceRecordsServiceClient.ListTranscriptsPagedResponse)>`

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
