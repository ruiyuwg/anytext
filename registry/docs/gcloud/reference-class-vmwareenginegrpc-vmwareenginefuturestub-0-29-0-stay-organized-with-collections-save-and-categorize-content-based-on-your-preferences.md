-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class VmwareEngineGrpc.VmwareEngineFutureStub (0.29.0) Stay organized with collections Save and categorize content based on your preferences.

0.81.0 (latest) 0.79.0 0.77.0 0.76.0 0.74.0 0.72.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.64.0 0.62.0 0.61.0 0.58.0 0.57.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.3.0 0.2.0 0.1.0

```
public static final class VmwareEngineGrpc.VmwareEngineFutureStub extends AbstractFutureStub<VmwareEngineGrpc.VmwareEngineFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service VmwareEngine.

VMwareEngine manages VMware's private clusters in the Cloud.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> VmwareEngineGrpc.VmwareEngineFutureStub

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
protected VmwareEngineGrpc.VmwareEngineFutureStub build(Channel channel, CallOptions callOptions)
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

`[VmwareEngineGrpc.VmwareEngineFutureStub](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.VmwareEngineGrpc.VmwareEngineFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createCluster(CreateClusterRequest request)

```
public ListenableFuture<Operation> createCluster(CreateClusterRequest request)
```

Creates a new cluster in a given private cloud. Creating a new cluster provides additional nodes for use in the parent private cloud and requires sufficient [node quota](https://cloud.google.com/vmware-engine/quotas).

**Parameter**

**Name**

**Description**

`request`

`[CreateClusterRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createExternalAccessRule(CreateExternalAccessRuleRequest request)

```
public ListenableFuture<Operation> createExternalAccessRule(CreateExternalAccessRuleRequest request)
```

Creates a new external access rule in a given network policy.

**Parameter**

**Name**

**Description**

`request`

`[CreateExternalAccessRuleRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateExternalAccessRuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createExternalAddress(CreateExternalAddressRequest request)

```
public ListenableFuture<Operation> createExternalAddress(CreateExternalAddressRequest request)
```

Creates a new `ExternalAddress` resource in a given private cloud. The network policy that corresponds to the private cloud must have the external IP address network service enabled (`NetworkPolicy.external_ip`).

**Parameter**

**Name**

**Description**

`request`

`[CreateExternalAddressRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateExternalAddressRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createHcxActivationKey(CreateHcxActivationKeyRequest request)

```
public ListenableFuture<Operation> createHcxActivationKey(CreateHcxActivationKeyRequest request)
```

Creates a new HCX activation key in a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[CreateHcxActivationKeyRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createLoggingServer(CreateLoggingServerRequest request)

```
public ListenableFuture<Operation> createLoggingServer(CreateLoggingServerRequest request)
```

Create a new logging server for a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[CreateLoggingServerRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateLoggingServerRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createManagementDnsZoneBinding(CreateManagementDnsZoneBindingRequest request)

```
public ListenableFuture<Operation> createManagementDnsZoneBinding(CreateManagementDnsZoneBindingRequest request)
```

Creates a new `ManagementDnsZoneBinding` resource in a private cloud. This RPC creates the DNS binding and the resource that represents the DNS binding of the consumer VPC network to the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.

**Parameter**

**Name**

**Description**

`request`

`[CreateManagementDnsZoneBindingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateManagementDnsZoneBindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createNetworkPeering(CreateNetworkPeeringRequest request)

```
public ListenableFuture<Operation> createNetworkPeering(CreateNetworkPeeringRequest request)
```

Creates a new network peering between the peer network and VMware Engine network provided in a `NetworkPeering` resource. NetworkPeering is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[CreateNetworkPeeringRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateNetworkPeeringRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createNetworkPolicy(CreateNetworkPolicyRequest request)

```
public ListenableFuture<Operation> createNetworkPolicy(CreateNetworkPolicyRequest request)
```

Creates a new network policy in a given VMware Engine network of a project and location (region). A new network policy cannot be created if another network policy already exists in the same scope.

**Parameter**

**Name**

**Description**

`request`

`[CreateNetworkPolicyRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createPrivateCloud(CreatePrivateCloudRequest request)

```
public ListenableFuture<Operation> createPrivateCloud(CreatePrivateCloudRequest request)
```

Creates a new `PrivateCloud` resource in a given project and location. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. Creating a private cloud also creates a [management cluster](https://cloud.google.com/vmware-engine/docs/concepts-vmware-components) for that private cloud.

**Parameter**

**Name**

**Description**

`request`

`[CreatePrivateCloudRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreatePrivateCloudRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createPrivateConnection(CreatePrivateConnectionRequest request)

```
public ListenableFuture<Operation> createPrivateConnection(CreatePrivateConnectionRequest request)
```

Creates a new private connection that can be used for accessing private Clouds.

**Parameter**

**Name**

**Description**

`request`

`[CreatePrivateConnectionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreatePrivateConnectionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createVmwareEngineNetwork(CreateVmwareEngineNetworkRequest request)

```
public ListenableFuture<Operation> createVmwareEngineNetwork(CreateVmwareEngineNetworkRequest request)
```

Creates a new VMware Engine network that can be used by a private cloud.

**Parameter**

**Name**

**Description**

`request`

`[CreateVmwareEngineNetworkRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteCluster(DeleteClusterRequest request)

```
public ListenableFuture<Operation> deleteCluster(DeleteClusterRequest request)
```

Deletes a `Cluster` resource. To avoid unintended data loss, migrate or gracefully shut down any workloads running on the cluster before deletion. You cannot delete the management cluster of a private cloud using this method.

**Parameter**

**Name**

**Description**

`request`

`[DeleteClusterRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteExternalAccessRule(DeleteExternalAccessRuleRequest request)

```
public ListenableFuture<Operation> deleteExternalAccessRule(DeleteExternalAccessRuleRequest request)
```

Deletes a single external access rule.

**Parameter**

**Name**

**Description**

`request`

`[DeleteExternalAccessRuleRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteExternalAccessRuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteExternalAddress(DeleteExternalAddressRequest request)

```
public ListenableFuture<Operation> deleteExternalAddress(DeleteExternalAddressRequest request)
```

Deletes a single external IP address. When you delete an external IP address, connectivity between the external IP address and the corresponding internal IP address is lost.

**Parameter**

**Name**

**Description**

`request`

`[DeleteExternalAddressRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteExternalAddressRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteLoggingServer(DeleteLoggingServerRequest request)

```
public ListenableFuture<Operation> deleteLoggingServer(DeleteLoggingServerRequest request)
```

Deletes a single logging server.

**Parameter**

**Name**

**Description**

`request`

`[DeleteLoggingServerRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteLoggingServerRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteManagementDnsZoneBinding(DeleteManagementDnsZoneBindingRequest request)

```
public ListenableFuture<Operation> deleteManagementDnsZoneBinding(DeleteManagementDnsZoneBindingRequest request)
```

Deletes a `ManagementDnsZoneBinding` resource. When a management DNS zone binding is deleted, the corresponding consumer VPC network is no longer bound to the management DNS zone.

**Parameter**

**Name**

**Description**

`request`

`[DeleteManagementDnsZoneBindingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteManagementDnsZoneBindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteNetworkPeering(DeleteNetworkPeeringRequest request)

```
public ListenableFuture<Operation> deleteNetworkPeering(DeleteNetworkPeeringRequest request)
```

Deletes a `NetworkPeering` resource. When a network peering is deleted for a VMware Engine network, the peer network becomes inaccessible to that VMware Engine network. NetworkPeering is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[DeleteNetworkPeeringRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteNetworkPeeringRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteNetworkPolicy(DeleteNetworkPolicyRequest request)

```
public ListenableFuture<Operation> deleteNetworkPolicy(DeleteNetworkPolicyRequest request)
```

Deletes a `NetworkPolicy` resource. A network policy cannot be deleted when `NetworkService.state` is set to `RECONCILING` for either its external IP or internet access service.

**Parameter**

**Name**

**Description**

`request`

`[DeleteNetworkPolicyRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deletePrivateCloud(DeletePrivateCloudRequest request)

```
public ListenableFuture<Operation> deletePrivateCloud(DeletePrivateCloudRequest request)
```

Schedules a `PrivateCloud` resource for deletion. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `expireTime` set to the time when deletion is final and can no longer be reversed. The delete operation is marked as done as soon as the `PrivateCloud` is successfully scheduled for deletion (this also applies when `delayHours` is set to zero), and the operation is not kept in pending state until `PrivateCloud` is purged. `PrivateCloud` can be restored using `UndeletePrivateCloud` method before the `expireTime` elapses. When `expireTime` is reached, deletion is final and all private cloud resources are irreversibly removed and billing stops. During the final removal process, `PrivateCloud.state` is set to `PURGING`. `PrivateCloud` can be polled using standard `GET` method for the whole period of deletion and purging. It will not be returned only when it is completely purged.

**Parameter**

**Name**

**Description**

`request`

`[DeletePrivateCloudRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeletePrivateCloudRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deletePrivateConnection(DeletePrivateConnectionRequest request)

```
public ListenableFuture<Operation> deletePrivateConnection(DeletePrivateConnectionRequest request)
```

Deletes a `PrivateConnection` resource. When a private connection is deleted for a VMware Engine network, the connected network becomes inaccessible to that VMware Engine network.

**Parameter**

**Name**

**Description**

`request`

`[DeletePrivateConnectionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeletePrivateConnectionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteVmwareEngineNetwork(DeleteVmwareEngineNetworkRequest request)

```
public ListenableFuture<Operation> deleteVmwareEngineNetwork(DeleteVmwareEngineNetworkRequest request)
```

Deletes a `VmwareEngineNetwork` resource. You can only delete a VMware Engine network after all resources that refer to it are deleted. For example, a private cloud, a network peering, and a network policy can all refer to the same VMware Engine network.

**Parameter**

**Name**

**Description**

`request`

`[DeleteVmwareEngineNetworkRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### fetchNetworkPolicyExternalAddresses(FetchNetworkPolicyExternalAddressesRequest request)

```
public ListenableFuture<FetchNetworkPolicyExternalAddressesResponse> fetchNetworkPolicyExternalAddresses(FetchNetworkPolicyExternalAddressesRequest request)
```

Lists external IP addresses assigned to VMware workload VMs within the scope of the given network policy.

**Parameter**

**Name**

**Description**

`request`

`[FetchNetworkPolicyExternalAddressesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.FetchNetworkPolicyExternalAddressesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[FetchNetworkPolicyExternalAddressesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.FetchNetworkPolicyExternalAddressesResponse)>`

### getCluster(GetClusterRequest request)

```
public ListenableFuture<Cluster> getCluster(GetClusterRequest request)
```

Retrieves a `Cluster` resource by its resource name.

**Parameter**

**Name**

**Description**

`request`

`[GetClusterRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Cluster](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.Cluster)>`

### getDnsBindPermission(GetDnsBindPermissionRequest request)

```
public ListenableFuture<DnsBindPermission> getDnsBindPermission(GetDnsBindPermissionRequest request)
```

Gets all the principals having bind permission on the intranet VPC associated with the consumer project granted by the Grant API. DnsBindPermission is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[GetDnsBindPermissionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetDnsBindPermissionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[DnsBindPermission](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DnsBindPermission)>`

### getDnsForwarding(GetDnsForwardingRequest request)

```
public ListenableFuture<DnsForwarding> getDnsForwarding(GetDnsForwardingRequest request)
```

Gets details of the `DnsForwarding` config.

**Parameter**

**Name**

**Description**

`request`

`[GetDnsForwardingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetDnsForwardingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[DnsForwarding](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.DnsForwarding)>`

### getExternalAccessRule(GetExternalAccessRuleRequest request)

```
public ListenableFuture<ExternalAccessRule> getExternalAccessRule(GetExternalAccessRuleRequest request)
```

Gets details of a single external access rule.

**Parameter**

**Name**

**Description**

`request`

`[GetExternalAccessRuleRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetExternalAccessRuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ExternalAccessRule](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ExternalAccessRule)>`

### getExternalAddress(GetExternalAddressRequest request)

```
public ListenableFuture<ExternalAddress> getExternalAddress(GetExternalAddressRequest request)
```

Gets details of a single external IP address.

**Parameter**

**Name**

**Description**

`request`

`[GetExternalAddressRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetExternalAddressRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ExternalAddress](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ExternalAddress)>`

### getHcxActivationKey(GetHcxActivationKeyRequest request)

```
public ListenableFuture<HcxActivationKey> getHcxActivationKey(GetHcxActivationKeyRequest request)
```

Retrieves a `HcxActivationKey` resource by its resource name.

**Parameter**

**Name**

**Description**

`request`

`[GetHcxActivationKeyRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[HcxActivationKey](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.HcxActivationKey)>`

### getLoggingServer(GetLoggingServerRequest request)

```
public ListenableFuture<LoggingServer> getLoggingServer(GetLoggingServerRequest request)
```

Gets details of a logging server.

**Parameter**

**Name**

**Description**

`request`

`[GetLoggingServerRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetLoggingServerRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[LoggingServer](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.LoggingServer)>`

### getManagementDnsZoneBinding(GetManagementDnsZoneBindingRequest request)

```
public ListenableFuture<ManagementDnsZoneBinding> getManagementDnsZoneBinding(GetManagementDnsZoneBindingRequest request)
```

Retrieves a 'ManagementDnsZoneBinding' resource by its resource name.

**Parameter**

**Name**

**Description**

`request`

`[GetManagementDnsZoneBindingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetManagementDnsZoneBindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ManagementDnsZoneBinding](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ManagementDnsZoneBinding)>`

### getNetworkPeering(GetNetworkPeeringRequest request)

```
public ListenableFuture<NetworkPeering> getNetworkPeering(GetNetworkPeeringRequest request)
```

Retrieves a `NetworkPeering` resource by its resource name. The resource contains details of the network peering, such as peered networks, import and export custom route configurations, and peering state. NetworkPeering is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[GetNetworkPeeringRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetNetworkPeeringRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[NetworkPeering](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.NetworkPeering)>`

### getNetworkPolicy(GetNetworkPolicyRequest request)

```
public ListenableFuture<NetworkPolicy> getNetworkPolicy(GetNetworkPolicyRequest request)
```

Retrieves a `NetworkPolicy` resource by its resource name.

**Parameter**

**Name**

**Description**

`request`

`[GetNetworkPolicyRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetNetworkPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[NetworkPolicy](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.NetworkPolicy)>`

### getNode(GetNodeRequest request)

```
public ListenableFuture<Node> getNode(GetNodeRequest request)
```

Gets details of a single node.

**Parameter**

**Name**

**Description**

`request`

`[GetNodeRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetNodeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Node](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.Node)>`

### getNodeType(GetNodeTypeRequest request)

```
public ListenableFuture<NodeType> getNodeType(GetNodeTypeRequest request)
```

Gets details of a single `NodeType`.

**Parameter**

**Name**

**Description**

`request`

`[GetNodeTypeRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetNodeTypeRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[NodeType](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.NodeType)>`

### getPrivateCloud(GetPrivateCloudRequest request)

```
public ListenableFuture<PrivateCloud> getPrivateCloud(GetPrivateCloudRequest request)
```

Retrieves a `PrivateCloud` resource by its resource name.

**Parameter**

**Name**

**Description**

`request`

`[GetPrivateCloudRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetPrivateCloudRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[PrivateCloud](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.PrivateCloud)>`

### getPrivateConnection(GetPrivateConnectionRequest request)

```
public ListenableFuture<PrivateConnection> getPrivateConnection(GetPrivateConnectionRequest request)
```

Retrieves a `PrivateConnection` resource by its resource name. The resource contains details of the private connection, such as connected network, routing mode and state.

**Parameter**

**Name**

**Description**

`request`

`[GetPrivateConnectionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetPrivateConnectionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[PrivateConnection](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.PrivateConnection)>`

### getSubnet(GetSubnetRequest request)

```
public ListenableFuture<Subnet> getSubnet(GetSubnetRequest request)
```

Gets details of a single subnet.

**Parameter**

**Name**

**Description**

`request`

`[GetSubnetRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetSubnetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Subnet](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.Subnet)>`

### getVmwareEngineNetwork(GetVmwareEngineNetworkRequest request)

```
public ListenableFuture<VmwareEngineNetwork> getVmwareEngineNetwork(GetVmwareEngineNetworkRequest request)
```

Retrieves a `VmwareEngineNetwork` resource by its resource name. The resource contains details of the VMware Engine network, such as its VMware Engine network type, peered networks in a service project, and state (for example, `CREATING`, `ACTIVE`, `DELETING`).

**Parameter**

**Name**

**Description**

`request`

`[GetVmwareEngineNetworkRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[VmwareEngineNetwork](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.VmwareEngineNetwork)>`

### grantDnsBindPermission(GrantDnsBindPermissionRequest request)

```
public ListenableFuture<Operation> grantDnsBindPermission(GrantDnsBindPermissionRequest request)
```

Grants the bind permission to the customer provided principal(user / service account) to bind their DNS zone with the intranet VPC associated with the project. DnsBindPermission is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[GrantDnsBindPermissionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.GrantDnsBindPermissionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### listClusters(ListClustersRequest request)

```
public ListenableFuture<ListClustersResponse> listClusters(ListClustersRequest request)
```

Lists `Cluster` resources in a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[ListClustersRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListClustersRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListClustersResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListClustersResponse)>`

### listExternalAccessRules(ListExternalAccessRulesRequest request)

```
public ListenableFuture<ListExternalAccessRulesResponse> listExternalAccessRules(ListExternalAccessRulesRequest request)
```

Lists `ExternalAccessRule` resources in the specified network policy.

**Parameter**

**Name**

**Description**

`request`

`[ListExternalAccessRulesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListExternalAccessRulesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListExternalAccessRulesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListExternalAccessRulesResponse)>`

### listExternalAddresses(ListExternalAddressesRequest request)

```
public ListenableFuture<ListExternalAddressesResponse> listExternalAddresses(ListExternalAddressesRequest request)
```

Lists external IP addresses assigned to VMware workload VMs in a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[ListExternalAddressesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListExternalAddressesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListExternalAddressesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListExternalAddressesResponse)>`

### listHcxActivationKeys(ListHcxActivationKeysRequest request)

```
public ListenableFuture<ListHcxActivationKeysResponse> listHcxActivationKeys(ListHcxActivationKeysRequest request)
```

Lists `HcxActivationKey` resources in a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[ListHcxActivationKeysRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListHcxActivationKeysResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse)>`

### listLoggingServers(ListLoggingServersRequest request)

```
public ListenableFuture<ListLoggingServersResponse> listLoggingServers(ListLoggingServersRequest request)
```

Lists logging servers configured for a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[ListLoggingServersRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListLoggingServersRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListLoggingServersResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListLoggingServersResponse)>`

### listManagementDnsZoneBindings(ListManagementDnsZoneBindingsRequest request)

```
public ListenableFuture<ListManagementDnsZoneBindingsResponse> listManagementDnsZoneBindings(ListManagementDnsZoneBindingsRequest request)
```

Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[ListManagementDnsZoneBindingsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListManagementDnsZoneBindingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListManagementDnsZoneBindingsResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListManagementDnsZoneBindingsResponse)>`

### listNetworkPeerings(ListNetworkPeeringsRequest request)

```
public ListenableFuture<ListNetworkPeeringsResponse> listNetworkPeerings(ListNetworkPeeringsRequest request)
```

Lists `NetworkPeering` resources in a given project. NetworkPeering is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[ListNetworkPeeringsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNetworkPeeringsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListNetworkPeeringsResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNetworkPeeringsResponse)>`

### listNetworkPolicies(ListNetworkPoliciesRequest request)

```
public ListenableFuture<ListNetworkPoliciesResponse> listNetworkPolicies(ListNetworkPoliciesRequest request)
```

Lists `NetworkPolicy` resources in a specified project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListNetworkPoliciesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListNetworkPoliciesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse)>`

### listNodeTypes(ListNodeTypesRequest request)

```
public ListenableFuture<ListNodeTypesResponse> listNodeTypes(ListNodeTypesRequest request)
```

Lists node types

**Parameter**

**Name**

**Description**

`request`

`[ListNodeTypesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNodeTypesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListNodeTypesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNodeTypesResponse)>`

### listNodes(ListNodesRequest request)

```
public ListenableFuture<ListNodesResponse> listNodes(ListNodesRequest request)
```

Lists nodes in a given cluster.

**Parameter**

**Name**

**Description**

`request`

`[ListNodesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNodesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListNodesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListNodesResponse)>`

### listPeeringRoutes(ListPeeringRoutesRequest request)

```
public ListenableFuture<ListPeeringRoutesResponse> listPeeringRoutes(ListPeeringRoutesRequest request)
```

Lists the network peering routes exchanged over a peering connection. NetworkPeering is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[ListPeeringRoutesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPeeringRoutesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListPeeringRoutesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPeeringRoutesResponse)>`

### listPrivateClouds(ListPrivateCloudsRequest request)

```
public ListenableFuture<ListPrivateCloudsResponse> listPrivateClouds(ListPrivateCloudsRequest request)
```

Lists `PrivateCloud` resources in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListPrivateCloudsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPrivateCloudsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListPrivateCloudsResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPrivateCloudsResponse)>`

### listPrivateConnectionPeeringRoutes(ListPrivateConnectionPeeringRoutesRequest request)

```
public ListenableFuture<ListPrivateConnectionPeeringRoutesResponse> listPrivateConnectionPeeringRoutes(ListPrivateConnectionPeeringRoutesRequest request)
```

Lists the private connection routes exchanged over a peering connection.

**Parameter**

**Name**

**Description**

`request`

`[ListPrivateConnectionPeeringRoutesRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPrivateConnectionPeeringRoutesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListPrivateConnectionPeeringRoutesResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPrivateConnectionPeeringRoutesResponse)>`

### listPrivateConnections(ListPrivateConnectionsRequest request)

```
public ListenableFuture<ListPrivateConnectionsResponse> listPrivateConnections(ListPrivateConnectionsRequest request)
```

Lists `PrivateConnection` resources in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListPrivateConnectionsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPrivateConnectionsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListPrivateConnectionsResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListPrivateConnectionsResponse)>`

### listSubnets(ListSubnetsRequest request)

```
public ListenableFuture<ListSubnetsResponse> listSubnets(ListSubnetsRequest request)
```

Lists subnets in a given private cloud.

**Parameter**

**Name**

**Description**

`request`

`[ListSubnetsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListSubnetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListSubnetsResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListSubnetsResponse)>`

### listVmwareEngineNetworks(ListVmwareEngineNetworksRequest request)

```
public ListenableFuture<ListVmwareEngineNetworksResponse> listVmwareEngineNetworks(ListVmwareEngineNetworksRequest request)
```

Lists `VmwareEngineNetwork` resources in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListVmwareEngineNetworksRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListVmwareEngineNetworksResponse](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse)>`

### repairManagementDnsZoneBinding(RepairManagementDnsZoneBindingRequest request)

```
public ListenableFuture<Operation> repairManagementDnsZoneBinding(RepairManagementDnsZoneBindingRequest request)
```

Retries to create a `ManagementDnsZoneBinding` resource that is in failed state.

**Parameter**

**Name**

**Description**

`request`

`[RepairManagementDnsZoneBindingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.RepairManagementDnsZoneBindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### resetNsxCredentials(ResetNsxCredentialsRequest request)

```
public ListenableFuture<Operation> resetNsxCredentials(ResetNsxCredentialsRequest request)
```

Resets credentials of the NSX appliance.

**Parameter**

**Name**

**Description**

`request`

`[ResetNsxCredentialsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### resetVcenterCredentials(ResetVcenterCredentialsRequest request)

```
public ListenableFuture<Operation> resetVcenterCredentials(ResetVcenterCredentialsRequest request)
```

Resets credentials of the Vcenter appliance.

**Parameter**

**Name**

**Description**

`request`

`[ResetVcenterCredentialsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### revokeDnsBindPermission(RevokeDnsBindPermissionRequest request)

```
public ListenableFuture<Operation> revokeDnsBindPermission(RevokeDnsBindPermissionRequest request)
```

Revokes the bind permission from the customer provided principal(user / service account) on the intranet VPC associated with the consumer project. DnsBindPermission is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[RevokeDnsBindPermissionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.RevokeDnsBindPermissionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### showNsxCredentials(ShowNsxCredentialsRequest request)

```
public ListenableFuture<Credentials> showNsxCredentials(ShowNsxCredentialsRequest request)
```

Gets details of credentials for NSX appliance.

**Parameter**

**Name**

**Description**

`request`

`[ShowNsxCredentialsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Credentials](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.Credentials)>`

### showVcenterCredentials(ShowVcenterCredentialsRequest request)

```
public ListenableFuture<Credentials> showVcenterCredentials(ShowVcenterCredentialsRequest request)
```

Gets details of credentials for Vcenter appliance.

**Parameter**

**Name**

**Description**

`request`

`[ShowVcenterCredentialsRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Credentials](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.Credentials)>`

### undeletePrivateCloud(UndeletePrivateCloudRequest request)

```
public ListenableFuture<Operation> undeletePrivateCloud(UndeletePrivateCloudRequest request)
```

Restores a private cloud that was previously scheduled for deletion by `DeletePrivateCloud`. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.

**Parameter**

**Name**

**Description**

`request`

`[UndeletePrivateCloudRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateCluster(UpdateClusterRequest request)

```
public ListenableFuture<Operation> updateCluster(UpdateClusterRequest request)
```

Modifies a `Cluster` resource. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.

**Parameter**

**Name**

**Description**

`request`

`[UpdateClusterRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateClusterRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateDnsForwarding(UpdateDnsForwardingRequest request)

```
public ListenableFuture<Operation> updateDnsForwarding(UpdateDnsForwardingRequest request)
```

Updates the parameters of the `DnsForwarding` config, like associated domains. Only fields specified in `update_mask` are applied.

**Parameter**

**Name**

**Description**

`request`

`[UpdateDnsForwardingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateDnsForwardingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateExternalAccessRule(UpdateExternalAccessRuleRequest request)

```
public ListenableFuture<Operation> updateExternalAccessRule(UpdateExternalAccessRuleRequest request)
```

Updates the parameters of a single external access rule. Only fields specified in `update_mask` are applied.

**Parameter**

**Name**

**Description**

`request`

`[UpdateExternalAccessRuleRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateExternalAccessRuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateExternalAddress(UpdateExternalAddressRequest request)

```
public ListenableFuture<Operation> updateExternalAddress(UpdateExternalAddressRequest request)
```

Updates the parameters of a single external IP address. Only fields specified in `update_mask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.

**Parameter**

**Name**

**Description**

`request`

`[UpdateExternalAddressRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateExternalAddressRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateLoggingServer(UpdateLoggingServerRequest request)

```
public ListenableFuture<Operation> updateLoggingServer(UpdateLoggingServerRequest request)
```

Updates the parameters of a single logging server. Only fields specified in `update_mask` are applied.

**Parameter**

**Name**

**Description**

`request`

`[UpdateLoggingServerRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateLoggingServerRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateManagementDnsZoneBinding(UpdateManagementDnsZoneBindingRequest request)

```
public ListenableFuture<Operation> updateManagementDnsZoneBinding(UpdateManagementDnsZoneBindingRequest request)
```

Updates a `ManagementDnsZoneBinding` resource. Only fields specified in `update_mask` are applied.

**Parameter**

**Name**

**Description**

`request`

`[UpdateManagementDnsZoneBindingRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateManagementDnsZoneBindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateNetworkPeering(UpdateNetworkPeeringRequest request)

```
public ListenableFuture<Operation> updateNetworkPeering(UpdateNetworkPeeringRequest request)
```

Modifies a `NetworkPeering` resource. Only the `description` field can be updated. Only fields specified in `updateMask` are applied. NetworkPeering is a global resource and location can only be global.

**Parameter**

**Name**

**Description**

`request`

`[UpdateNetworkPeeringRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateNetworkPeeringRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateNetworkPolicy(UpdateNetworkPolicyRequest request)

```
public ListenableFuture<Operation> updateNetworkPolicy(UpdateNetworkPolicyRequest request)
```

Modifies a `NetworkPolicy` resource. Only the following fields can be updated: `internet_access`, `external_ip`, `edge_services_cidr`. Only fields specified in `updateMask` are applied. When updating a network policy, the external IP network service can only be disabled if there are no external IP addresses present in the scope of the policy. Also, a `NetworkService` cannot be updated when `NetworkService.state` is set to `RECONCILING`. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.

**Parameter**

**Name**

**Description**

`request`

`[UpdateNetworkPolicyRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updatePrivateCloud(UpdatePrivateCloudRequest request)

```
public ListenableFuture<Operation> updatePrivateCloud(UpdatePrivateCloudRequest request)
```

Modifies a `PrivateCloud` resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied. During operation processing, the resource is temporarily in the `ACTIVE` state before the operation fully completes. For that period of time, you can't update the resource. Use the operation status to determine when the processing fully completes.

**Parameter**

**Name**

**Description**

`request`

`[UpdatePrivateCloudRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updatePrivateConnection(UpdatePrivateConnectionRequest request)

```
public ListenableFuture<Operation> updatePrivateConnection(UpdatePrivateConnectionRequest request)
```

Modifies a `PrivateConnection` resource. Only `description` and `routing_mode` fields can be updated. Only fields specified in `updateMask` are applied.

**Parameter**

**Name**

**Description**

`request`

`[UpdatePrivateConnectionRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdatePrivateConnectionRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateSubnet(UpdateSubnetRequest request)

```
public ListenableFuture<Operation> updateSubnet(UpdateSubnetRequest request)
```

Updates the parameters of a single subnet. Only fields specified in `update_mask` are applied. _Note_: This API is synchronous and always returns a successful `google.longrunning.Operation` (LRO). The returned LRO will only have `done` and `response` fields.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSubnetRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateSubnetRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateVmwareEngineNetwork(UpdateVmwareEngineNetworkRequest request)

```
public ListenableFuture<Operation> updateVmwareEngineNetwork(UpdateVmwareEngineNetworkRequest request)
```

Modifies a VMware Engine network resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied.

**Parameter**

**Name**

**Description**

`request`

`[UpdateVmwareEngineNetworkRequest](/java/docs/reference/google-cloud-vmwareengine/0.29.0/com.google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
