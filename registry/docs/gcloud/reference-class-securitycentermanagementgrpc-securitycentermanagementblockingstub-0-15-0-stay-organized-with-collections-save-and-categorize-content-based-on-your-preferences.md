-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub (0.15.0) Stay organized with collections Save and categorize content based on your preferences.

0.55.0 (latest) 0.53.0 0.51.0 0.50.0 0.48.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.36.0 0.35.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub extends AbstractBlockingStub<SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service SecurityCenterManagement.

Service describing handlers for resources

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub

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

### build(Channel channel, CallOptions callOptions)

```
protected SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub build(Channel channel, CallOptions callOptions)
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

`[SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SecurityCenterManagementGrpc.SecurityCenterManagementBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createEventThreatDetectionCustomModule(CreateEventThreatDetectionCustomModuleRequest request)

```
public EventThreatDetectionCustomModule createEventThreatDetectionCustomModule(CreateEventThreatDetectionCustomModuleRequest request)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameter**

**Name**

**Description**

`request`

`[CreateEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule)`

### createSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request)

```
public SecurityHealthAnalyticsCustomModule createSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameter**

**Name**

**Description**

`request`

`[CreateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule)`

### deleteEventThreatDetectionCustomModule(DeleteEventThreatDetectionCustomModuleRequest request)

```
public Empty deleteEventThreatDetectionCustomModule(DeleteEventThreatDetectionCustomModuleRequest request)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameter**

**Name**

**Description**

`request`

`[DeleteEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request)

```
public Empty deleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameter**

**Name**

**Description**

`request`

`[DeleteSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getEffectiveEventThreatDetectionCustomModule(GetEffectiveEventThreatDetectionCustomModuleRequest request)

```
public EffectiveEventThreatDetectionCustomModule getEffectiveEventThreatDetectionCustomModule(GetEffectiveEventThreatDetectionCustomModuleRequest request)
```

Gets an effective ETD custom module. Retrieves the effective module at the given level. The difference between an EffectiveCustomModule and a CustomModule is that the fields for an EffectiveCustomModule are computed from ancestors if needed. For example, the enablement\_state for a CustomModule can be either ENABLED, DISABLED, or INHERITED. Where as the enablement\_state for an EffectiveCustomModule is always computed to ENABLED or DISABLED (the effective enablement\_state).

**Parameter**

**Name**

**Description**

`request`

`[GetEffectiveEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[EffectiveEventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule)`

### getEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request)

```
public EffectiveSecurityHealthAnalyticsCustomModule getEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request)
```

Gets details of a single EffectiveSecurityHealthAnalyticsCustomModule.

**Parameter**

**Name**

**Description**

`request`

`[GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[EffectiveSecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule)`

### getEventThreatDetectionCustomModule(GetEventThreatDetectionCustomModuleRequest request)

```
public EventThreatDetectionCustomModule getEventThreatDetectionCustomModule(GetEventThreatDetectionCustomModuleRequest request)
```

Gets an Event Threat Detection custom module.

**Parameter**

**Name**

**Description**

`request`

`[GetEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule)`

### getSecurityCenterService(GetSecurityCenterServiceRequest request)

```
public SecurityCenterService getSecurityCenterService(GetSecurityCenterServiceRequest request)
```

Gets service settings for the specified Security Command Center service.

**Parameter**

**Name**

**Description**

`request`

`[GetSecurityCenterServiceRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest)`  

**Returns**

**Type**

**Description**

`[SecurityCenterService](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SecurityCenterService)`

### getSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request)

```
public SecurityHealthAnalyticsCustomModule getSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameter**

**Name**

**Description**

`request`

`[GetSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule)`

### listDescendantEventThreatDetectionCustomModules(ListDescendantEventThreatDetectionCustomModulesRequest request)

```
public ListDescendantEventThreatDetectionCustomModulesResponse listDescendantEventThreatDetectionCustomModules(ListDescendantEventThreatDetectionCustomModulesRequest request)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameter**

**Name**

**Description**

`request`

`[ListDescendantEventThreatDetectionCustomModulesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`[ListDescendantEventThreatDetectionCustomModulesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse)`

### listDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request)

```
public ListDescendantSecurityHealthAnalyticsCustomModulesResponse listDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent's CRM descendants.

**Parameter**

**Name**

**Description**

`request`

`[ListDescendantSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)`

### listEffectiveEventThreatDetectionCustomModules(ListEffectiveEventThreatDetectionCustomModulesRequest request)

```
public ListEffectiveEventThreatDetectionCustomModulesResponse listEffectiveEventThreatDetectionCustomModules(ListEffectiveEventThreatDetectionCustomModulesRequest request)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameter**

**Name**

**Description**

`request`

`[ListEffectiveEventThreatDetectionCustomModulesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`[ListEffectiveEventThreatDetectionCustomModulesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse)`

### listEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request)

```
public ListEffectiveSecurityHealthAnalyticsCustomModulesResponse listEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameter**

**Name**

**Description**

`request`

`[ListEffectiveSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)`

### listEventThreatDetectionCustomModules(ListEventThreatDetectionCustomModulesRequest request)

```
public ListEventThreatDetectionCustomModulesResponse listEventThreatDetectionCustomModules(ListEventThreatDetectionCustomModulesRequest request)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameter**

**Name**

**Description**

`request`

`[ListEventThreatDetectionCustomModulesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`[ListEventThreatDetectionCustomModulesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse)`

### listSecurityCenterServices(ListSecurityCenterServicesRequest request)

```
public ListSecurityCenterServicesResponse listSecurityCenterServices(ListSecurityCenterServicesRequest request)
```

Returns a list of all Security Command Center services for the given parent.

**Parameter**

**Name**

**Description**

`request`

`[ListSecurityCenterServicesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest)`  

**Returns**

**Type**

**Description**

`[ListSecurityCenterServicesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse)`

### listSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request)

```
public ListSecurityHealthAnalyticsCustomModulesResponse listSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors (no descendants).

**Parameter**

**Name**

**Description**

`request`

`[ListSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`[ListSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse)`

### simulateSecurityHealthAnalyticsCustomModule(SimulateSecurityHealthAnalyticsCustomModuleRequest request)

```
public SimulateSecurityHealthAnalyticsCustomModuleResponse simulateSecurityHealthAnalyticsCustomModule(SimulateSecurityHealthAnalyticsCustomModuleRequest request)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameter**

**Name**

**Description**

`request`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[SimulateSecurityHealthAnalyticsCustomModuleResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse)`

### updateEventThreatDetectionCustomModule(UpdateEventThreatDetectionCustomModuleRequest request)

```
public EventThreatDetectionCustomModule updateEventThreatDetectionCustomModule(UpdateEventThreatDetectionCustomModuleRequest request)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameter**

**Name**

**Description**

`request`

`[UpdateEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[EventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule)`

### updateSecurityCenterService(UpdateSecurityCenterServiceRequest request)

```
public SecurityCenterService updateSecurityCenterService(UpdateSecurityCenterServiceRequest request)
```

Updates a Security Command Center service using the given update mask.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSecurityCenterServiceRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest)`  

**Returns**

**Type**

**Description**

`[SecurityCenterService](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SecurityCenterService)`

### updateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request)

```
public SecurityHealthAnalyticsCustomModule updateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule)`

### validateEventThreatDetectionCustomModule(ValidateEventThreatDetectionCustomModuleRequest request)

```
public ValidateEventThreatDetectionCustomModuleResponse validateEventThreatDetectionCustomModule(ValidateEventThreatDetectionCustomModuleRequest request)
```

Validates the given Event Threat Detection custom module.

**Parameter**

**Name**

**Description**

`request`

`[ValidateEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`[ValidateEventThreatDetectionCustomModuleResponse](/java/docs/reference/google-cloud-securitycentermanagement/0.15.0/com.google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
