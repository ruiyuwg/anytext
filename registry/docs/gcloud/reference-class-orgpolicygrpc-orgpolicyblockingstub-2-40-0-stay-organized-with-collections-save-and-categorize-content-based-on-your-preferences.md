-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class OrgPolicyGrpc.OrgPolicyBlockingStub (2.40.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7-SNAPSHOT 2.2.1 2.1.2 2.0.10

```
public static final class OrgPolicyGrpc.OrgPolicyBlockingStub extends AbstractBlockingStub<OrgPolicyGrpc.OrgPolicyBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service OrgPolicy.

An interface for managing organization policies. The Organization Policy Service provides a simple mechanism for organizations to restrict the allowed configurations across their entire resource hierarchy. You can use a policy to configure restrictions on resources. For example, you can enforce a policy that restricts which Google Cloud APIs can be activated in a certain part of your resource hierarchy, or prevents serial port access to VM instances in a particular folder. Policies are inherited down through the resource hierarchy. A policy applied to a parent resource automatically applies to all its child resources unless overridden with a policy lower in the hierarchy. A constraint defines an aspect of a resource's configuration that can be controlled by an organization's policy administrator. Policies are a collection of constraints that defines their allowable configuration on a particular resource and its child resources.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> OrgPolicyGrpc.OrgPolicyBlockingStub

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
protected OrgPolicyGrpc.OrgPolicyBlockingStub build(Channel channel, CallOptions callOptions)
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

`[OrgPolicyGrpc.OrgPolicyBlockingStub](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.OrgPolicyGrpc.OrgPolicyBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCustomConstraint(CreateCustomConstraintRequest request)

```
public CustomConstraint createCustomConstraint(CreateCustomConstraintRequest request)
```

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

**Parameter**

**Name**

**Description**

`request`

`[CreateCustomConstraintRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.CreateCustomConstraintRequest)`  

**Returns**

**Type**

**Description**

`[CustomConstraint](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.CustomConstraint)`

### createPolicy(CreatePolicyRequest request)

```
public Policy createPolicy(CreatePolicyRequest request)
```

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

**Parameter**

**Name**

**Description**

`request`

`[CreatePolicyRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.CreatePolicyRequest)`  

**Returns**

**Type**

**Description**

`[Policy](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.Policy)`

### deleteCustomConstraint(DeleteCustomConstraintRequest request)

```
public Empty deleteCustomConstraint(DeleteCustomConstraintRequest request)
```

Deletes a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist.

**Parameter**

**Name**

**Description**

`request`

`[DeleteCustomConstraintRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### deletePolicy(DeletePolicyRequest request)

```
public Empty deletePolicy(DeletePolicyRequest request)
```

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

**Parameter**

**Name**

**Description**

`request`

`[DeletePolicyRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.DeletePolicyRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getCustomConstraint(GetCustomConstraintRequest request)

```
public CustomConstraint getCustomConstraint(GetCustomConstraintRequest request)
```

Gets a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the custom constraint does not exist.

**Parameter**

**Name**

**Description**

`request`

`[GetCustomConstraintRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.GetCustomConstraintRequest)`  

**Returns**

**Type**

**Description**

`[CustomConstraint](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.CustomConstraint)`

### getEffectivePolicy(GetEffectivePolicyRequest request)

```
public Policy getEffectivePolicy(GetEffectivePolicyRequest request)
```

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

**Parameter**

**Name**

**Description**

`request`

`[GetEffectivePolicyRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.GetEffectivePolicyRequest)`  

**Returns**

**Type**

**Description**

`[Policy](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.Policy)`

### getPolicy(GetPolicyRequest request)

```
public Policy getPolicy(GetPolicyRequest request)
```

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

**Parameter**

**Name**

**Description**

`request`

`[GetPolicyRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.GetPolicyRequest)`  

**Returns**

**Type**

**Description**

`[Policy](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.Policy)`

### listConstraints(ListConstraintsRequest request)

```
public ListConstraintsResponse listConstraints(ListConstraintsRequest request)
```

Lists constraints that could be applied on the specified resource.

**Parameter**

**Name**

**Description**

`request`

`[ListConstraintsRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.ListConstraintsRequest)`  

**Returns**

**Type**

**Description**

`[ListConstraintsResponse](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.ListConstraintsResponse)`

### listCustomConstraints(ListCustomConstraintsRequest request)

```
public ListCustomConstraintsResponse listCustomConstraints(ListCustomConstraintsRequest request)
```

Retrieves all of the custom constraints that exist on a particular organization resource.

**Parameter**

**Name**

**Description**

`request`

`[ListCustomConstraintsRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.ListCustomConstraintsRequest)`  

**Returns**

**Type**

**Description**

`[ListCustomConstraintsResponse](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.ListCustomConstraintsResponse)`

### listPolicies(ListPoliciesRequest request)

```
public ListPoliciesResponse listPolicies(ListPoliciesRequest request)
```

Retrieves all of the policies that exist on a particular resource.

**Parameter**

**Name**

**Description**

`request`

`[ListPoliciesRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.ListPoliciesRequest)`  

**Returns**

**Type**

**Description**

`[ListPoliciesResponse](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.ListPoliciesResponse)`

### updateCustomConstraint(UpdateCustomConstraintRequest request)

```
public CustomConstraint updateCustomConstraint(UpdateCustomConstraintRequest request)
```

Updates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Note: the supplied policy will perform a full overwrite of all fields.

**Parameter**

**Name**

**Description**

`request`

`[UpdateCustomConstraintRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest)`  

**Returns**

**Type**

**Description**

`[CustomConstraint](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.CustomConstraint)`

### updatePolicy(UpdatePolicyRequest request)

```
public Policy updatePolicy(UpdatePolicyRequest request)
```

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

**Parameter**

**Name**

**Description**

`request`

`[UpdatePolicyRequest](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.UpdatePolicyRequest)`  

**Returns**

**Type**

**Description**

`[Policy](/java/docs/reference/google-cloud-orgpolicy/2.40.0/com.google.cloud.orgpolicy.v2.Policy)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
