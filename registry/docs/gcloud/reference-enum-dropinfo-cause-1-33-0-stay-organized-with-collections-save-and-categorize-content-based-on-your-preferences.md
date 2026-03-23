-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum DropInfo.Cause (1.33.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public enum DropInfo.Cause extends Enum<DropInfo.Cause> implements ProtocolMessageEnum
```

Drop cause types:

Protobuf enum `google.cloud.networkmanagement.v1beta1.DropInfo.Cause`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`CAUSE_UNSPECIFIED`

Cause is unspecified.

`CAUSE_UNSPECIFIED = 0;`

`CAUSE_UNSPECIFIED_VALUE`

Cause is unspecified.

`CAUSE_UNSPECIFIED = 0;`

`CLOUD_FUNCTION_NOT_ACTIVE`

Packet could be dropped because the Cloud Function is not in an active status.

`CLOUD_FUNCTION_NOT_ACTIVE = 22;`

`CLOUD_FUNCTION_NOT_ACTIVE_VALUE`

Packet could be dropped because the Cloud Function is not in an active status.

`CLOUD_FUNCTION_NOT_ACTIVE = 22;`

`CLOUD_RUN_REVISION_NOT_READY`

Packet sent from a Cloud Run revision that is not ready.

`CLOUD_RUN_REVISION_NOT_READY = 29;`

`CLOUD_RUN_REVISION_NOT_READY_VALUE`

Packet sent from a Cloud Run revision that is not ready.

`CLOUD_RUN_REVISION_NOT_READY = 29;`

`CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC`

Packet sent from a Cloud SQL instance to an external IP address is not allowed. The Cloud SQL instance is not configured to send packets to external IP addresses.

`CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC = 33;`

`CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC_VALUE`

Packet sent from a Cloud SQL instance to an external IP address is not allowed. The Cloud SQL instance is not configured to send packets to external IP addresses.

`CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC = 33;`

`CLOUD_SQL_INSTANCE_NOT_RUNNING`

Packet sent from or to a Cloud SQL instance that is not in running state.

`CLOUD_SQL_INSTANCE_NOT_RUNNING = 28;`

`CLOUD_SQL_INSTANCE_NOT_RUNNING_VALUE`

Packet sent from or to a Cloud SQL instance that is not in running state.

`CLOUD_SQL_INSTANCE_NOT_RUNNING = 28;`

`CLOUD_SQL_INSTANCE_NO_IP_ADDRESS`

Packet was dropped because the Cloud SQL instance has neither a private nor a public IP address.

`CLOUD_SQL_INSTANCE_NO_IP_ADDRESS = 21;`

`CLOUD_SQL_INSTANCE_NO_IP_ADDRESS_VALUE`

Packet was dropped because the Cloud SQL instance has neither a private nor a public IP address.

`CLOUD_SQL_INSTANCE_NO_IP_ADDRESS = 21;`

`CLOUD_SQL_INSTANCE_NO_ROUTE`

Packet was dropped because there is no route from a Cloud SQL instance to a destination network.

`CLOUD_SQL_INSTANCE_NO_ROUTE = 35;`

`CLOUD_SQL_INSTANCE_NO_ROUTE_VALUE`

Packet was dropped because there is no route from a Cloud SQL instance to a destination network.

`CLOUD_SQL_INSTANCE_NO_ROUTE = 35;`

`CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS`

Access to the Cloud SQL instance endpoint is not authorized. See [Authorizing with authorized networks](https://cloud.google.com/sql/docs/mysql/authorize-networks) for more details.

`CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS = 17;`

`CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS_VALUE`

Access to the Cloud SQL instance endpoint is not authorized. See [Authorizing with authorized networks](https://cloud.google.com/sql/docs/mysql/authorize-networks) for more details.

`CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS = 17;`

`DROPPED_INSIDE_CLOUD_SQL_SERVICE`

Packet was dropped inside Cloud SQL Service.

`DROPPED_INSIDE_CLOUD_SQL_SERVICE = 19;`

`DROPPED_INSIDE_CLOUD_SQL_SERVICE_VALUE`

Packet was dropped inside Cloud SQL Service.

`DROPPED_INSIDE_CLOUD_SQL_SERVICE = 19;`

`DROPPED_INSIDE_GKE_SERVICE`

Packet was dropped inside Google Kubernetes Engine Service.

`DROPPED_INSIDE_GKE_SERVICE = 18;`

`DROPPED_INSIDE_GKE_SERVICE_VALUE`

Packet was dropped inside Google Kubernetes Engine Service.

`DROPPED_INSIDE_GKE_SERVICE = 18;`

`DROPPED_INSIDE_PSC_SERVICE_PRODUCER`

Packet was dropped inside Private Service Connect service producer.

`DROPPED_INSIDE_PSC_SERVICE_PRODUCER = 37;`

`DROPPED_INSIDE_PSC_SERVICE_PRODUCER_VALUE`

Packet was dropped inside Private Service Connect service producer.

`DROPPED_INSIDE_PSC_SERVICE_PRODUCER = 37;`

`FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK`

Firewalls block the health check probes to the backends and cause the backends to be unavailable for traffic from the load balancer. For more details, see [Health check firewall rules](https://cloud.google.com/load-balancing/docs/health-checks#firewall_rules).

`FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK = 13;`

`FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK_VALUE`

Firewalls block the health check probes to the backends and cause the backends to be unavailable for traffic from the load balancer. For more details, see [Health check firewall rules](https://cloud.google.com/load-balancing/docs/health-checks#firewall_rules).

`FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK = 13;`

`FIREWALL_RULE`

Dropped due to a firewall rule, unless allowed due to connection tracking.

`FIREWALL_RULE = 3;`

`FIREWALL_RULE_VALUE`

Dropped due to a firewall rule, unless allowed due to connection tracking.

`FIREWALL_RULE = 3;`

`FOREIGN_IP_DISALLOWED`

A Compute Engine instance can only send or receive a packet with a foreign IP address if ip\_forward is enabled.

`FOREIGN_IP_DISALLOWED = 2;`

`FOREIGN_IP_DISALLOWED_VALUE`

A Compute Engine instance can only send or receive a packet with a foreign IP address if ip\_forward is enabled.

`FOREIGN_IP_DISALLOWED = 2;`

`FORWARDING_RULE_MISMATCH`

Forwarding rule's protocol and ports do not match the packet header.

`FORWARDING_RULE_MISMATCH = 11;`

`FORWARDING_RULE_MISMATCH_VALUE`

Forwarding rule's protocol and ports do not match the packet header.

`FORWARDING_RULE_MISMATCH = 11;`

`FORWARDING_RULE_NO_INSTANCES`

Forwarding rule does not have backends configured.

`FORWARDING_RULE_NO_INSTANCES = 12;`

`FORWARDING_RULE_NO_INSTANCES_VALUE`

Forwarding rule does not have backends configured.

`FORWARDING_RULE_NO_INSTANCES = 12;`

`FORWARDING_RULE_REGION_MISMATCH`

Packet could be dropped because it was sent from a different region to a regional forwarding without global access.

`FORWARDING_RULE_REGION_MISMATCH = 25;`

`FORWARDING_RULE_REGION_MISMATCH_VALUE`

Packet could be dropped because it was sent from a different region to a regional forwarding without global access.

`FORWARDING_RULE_REGION_MISMATCH = 25;`

`GKE_CLUSTER_NOT_RUNNING`

Packet sent from or to a GKE cluster that is not in running state.

`GKE_CLUSTER_NOT_RUNNING = 27;`

`GKE_CLUSTER_NOT_RUNNING_VALUE`

Packet sent from or to a GKE cluster that is not in running state.

`GKE_CLUSTER_NOT_RUNNING = 27;`

`GKE_CONTROL_PLANE_NO_ROUTE`

Packet was dropped because there is no route from a GKE cluster control plane to a destination network.

`GKE_CONTROL_PLANE_NO_ROUTE = 32;`

`GKE_CONTROL_PLANE_NO_ROUTE_VALUE`

Packet was dropped because there is no route from a GKE cluster control plane to a destination network.

`GKE_CONTROL_PLANE_NO_ROUTE = 32;`

`GKE_CONTROL_PLANE_REGION_MISMATCH`

Packet was dropped because a GKE cluster private endpoint is unreachable from a region different from the cluster's region.

`GKE_CONTROL_PLANE_REGION_MISMATCH = 30;`

`GKE_CONTROL_PLANE_REGION_MISMATCH_VALUE`

Packet was dropped because a GKE cluster private endpoint is unreachable from a region different from the cluster's region.

`GKE_CONTROL_PLANE_REGION_MISMATCH = 30;`

`GKE_MASTER_UNAUTHORIZED_ACCESS`

Access to Google Kubernetes Engine cluster master's endpoint is not authorized. See [Access to the cluster endpoints](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#access_to_the_cluster_endpoints) for more details.

`GKE_MASTER_UNAUTHORIZED_ACCESS = 16;`

`GKE_MASTER_UNAUTHORIZED_ACCESS_VALUE`

Access to Google Kubernetes Engine cluster master's endpoint is not authorized. See [Access to the cluster endpoints](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#access_to_the_cluster_endpoints) for more details.

`GKE_MASTER_UNAUTHORIZED_ACCESS = 16;`

`GKE_PSC_ENDPOINT_MISSING`

Packet was dropped because the GKE cluster uses Private Service Connect (PSC), but the PSC endpoint is not found in the project.

`GKE_PSC_ENDPOINT_MISSING = 36;`

`GKE_PSC_ENDPOINT_MISSING_VALUE`

Packet was dropped because the GKE cluster uses Private Service Connect (PSC), but the PSC endpoint is not found in the project.

`GKE_PSC_ENDPOINT_MISSING = 36;`

`GOOGLE_MANAGED_SERVICE_NO_PEERING`

Packet was dropped because there is no peering between the originating network and the Google Managed Services Network.

`GOOGLE_MANAGED_SERVICE_NO_PEERING = 20;`

`GOOGLE_MANAGED_SERVICE_NO_PEERING_VALUE`

Packet was dropped because there is no peering between the originating network and the Google Managed Services Network.

`GOOGLE_MANAGED_SERVICE_NO_PEERING = 20;`

`GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT`

Packet was dropped because the Google-managed service uses Private Service Connect (PSC), but the PSC endpoint is not found in the project.

`GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT = 38;`

`GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT_VALUE`

Packet was dropped because the Google-managed service uses Private Service Connect (PSC), but the PSC endpoint is not found in the project.

`GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT = 38;`

`INSTANCE_NOT_RUNNING`

Packet is sent from or to a Compute Engine instance that is not in a running state.

`INSTANCE_NOT_RUNNING = 14;`

`INSTANCE_NOT_RUNNING_VALUE`

Packet is sent from or to a Compute Engine instance that is not in a running state.

`INSTANCE_NOT_RUNNING = 14;`

`LOAD_BALANCER_HAS_NO_PROXY_SUBNET`

Packet sent to a load balancer, which requires a proxy-only subnet and the subnet is not found.

`LOAD_BALANCER_HAS_NO_PROXY_SUBNET = 39;`

`LOAD_BALANCER_HAS_NO_PROXY_SUBNET_VALUE`

Packet sent to a load balancer, which requires a proxy-only subnet and the subnet is not found.

`LOAD_BALANCER_HAS_NO_PROXY_SUBNET = 39;`

`NO_EXTERNAL_ADDRESS`

Instance with only an internal IP address tries to access external hosts, but Cloud NAT is not enabled in the subnet, unless special configurations on a VM allow this connection.

`NO_EXTERNAL_ADDRESS = 9;`

`NO_EXTERNAL_ADDRESS_VALUE`

Instance with only an internal IP address tries to access external hosts, but Cloud NAT is not enabled in the subnet, unless special configurations on a VM allow this connection.

`NO_EXTERNAL_ADDRESS = 9;`

`NO_ROUTE`

Dropped due to no routes.

`NO_ROUTE = 4;`

`NO_ROUTE_VALUE`

Dropped due to no routes.

`NO_ROUTE = 4;`

`PRIVATE_GOOGLE_ACCESS_DISALLOWED`

Instance with only an internal IP address tries to access Google API and services, but private Google access is not enabled.

`PRIVATE_GOOGLE_ACCESS_DISALLOWED = 8;`

`PRIVATE_GOOGLE_ACCESS_DISALLOWED_VALUE`

Instance with only an internal IP address tries to access Google API and services, but private Google access is not enabled.

`PRIVATE_GOOGLE_ACCESS_DISALLOWED = 8;`

`PRIVATE_TRAFFIC_TO_INTERNET`

Packet with internal destination address sent to the internet gateway.

`PRIVATE_TRAFFIC_TO_INTERNET = 7;`

`PRIVATE_TRAFFIC_TO_INTERNET_VALUE`

Packet with internal destination address sent to the internet gateway.

`PRIVATE_TRAFFIC_TO_INTERNET = 7;`

`PSC_CONNECTION_NOT_ACCEPTED`

The Private Service Connect endpoint is in a project that is not approved to connect to the service.

`PSC_CONNECTION_NOT_ACCEPTED = 26;`

`PSC_CONNECTION_NOT_ACCEPTED_VALUE`

The Private Service Connect endpoint is in a project that is not approved to connect to the service.

`PSC_CONNECTION_NOT_ACCEPTED = 26;`

`PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION`

Packet sent from a Cloud SQL instance with only a public IP address to a private IP address.

`PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION = 34;`

`PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION_VALUE`

Packet sent from a Cloud SQL instance with only a public IP address to a private IP address.

`PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION = 34;`

`PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION`

Packet sent from a public GKE cluster control plane to a private IP address.

`PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION = 31;`

`PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION_VALUE`

Packet sent from a public GKE cluster control plane to a private IP address.

`PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION = 31;`

`ROUTE_BLACKHOLE`

Dropped due to invalid route. Route's next hop is a blackhole.

`ROUTE_BLACKHOLE = 5;`

`ROUTE_BLACKHOLE_VALUE`

Dropped due to invalid route. Route's next hop is a blackhole.

`ROUTE_BLACKHOLE = 5;`

`ROUTE_WRONG_NETWORK`

Packet is sent to a wrong (unintended) network. Example: you trace a packet from VM1:Network1 to VM2:Network2, however, the route configured in Network1 sends the packet destined for VM2's IP addresss to Network3.

`ROUTE_WRONG_NETWORK = 6;`

`ROUTE_WRONG_NETWORK_VALUE`

Packet is sent to a wrong (unintended) network. Example: you trace a packet from VM1:Network1 to VM2:Network2, however, the route configured in Network1 sends the packet destined for VM2's IP addresss to Network3.

`ROUTE_WRONG_NETWORK = 6;`

`TRAFFIC_TYPE_BLOCKED`

The type of traffic is blocked and the user cannot configure a firewall rule to enable it. See [Always blocked traffic](https://cloud.google.com/vpc/docs/firewalls#blockedtraffic) for more details.

`TRAFFIC_TYPE_BLOCKED = 15;`

`TRAFFIC_TYPE_BLOCKED_VALUE`

The type of traffic is blocked and the user cannot configure a firewall rule to enable it. See [Always blocked traffic](https://cloud.google.com/vpc/docs/firewalls#blockedtraffic) for more details.

`TRAFFIC_TYPE_BLOCKED = 15;`

`UNKNOWN_EXTERNAL_ADDRESS`

Destination external address cannot be resolved to a known target. If the address is used in a Google Cloud project, provide the project ID as test input.

`UNKNOWN_EXTERNAL_ADDRESS = 1;`

`UNKNOWN_EXTERNAL_ADDRESS_VALUE`

Destination external address cannot be resolved to a known target. If the address is used in a Google Cloud project, provide the project ID as test input.

`UNKNOWN_EXTERNAL_ADDRESS = 1;`

`UNKNOWN_INTERNAL_ADDRESS`

Destination internal address cannot be resolved to a known target. If this is a shared VPC scenario, verify if the service project ID is provided as test input. Otherwise, verify if the IP address is being used in the project.

`UNKNOWN_INTERNAL_ADDRESS = 10;`

`UNKNOWN_INTERNAL_ADDRESS_VALUE`

Destination internal address cannot be resolved to a known target. If this is a shared VPC scenario, verify if the service project ID is provided as test input. Otherwise, verify if the IP address is being used in the project.

`UNKNOWN_INTERNAL_ADDRESS = 10;`

`UNRECOGNIZED`

`VPC_CONNECTOR_NOT_RUNNING`

Packet could be dropped because the VPC connector is not in a running state.

`VPC_CONNECTOR_NOT_RUNNING = 24;`

`VPC_CONNECTOR_NOT_RUNNING_VALUE`

Packet could be dropped because the VPC connector is not in a running state.

`VPC_CONNECTOR_NOT_RUNNING = 24;`

`VPC_CONNECTOR_NOT_SET`

Packet could be dropped because no VPC connector is set.

`VPC_CONNECTOR_NOT_SET = 23;`

`VPC_CONNECTOR_NOT_SET_VALUE`

Packet could be dropped because no VPC connector is set.

`VPC_CONNECTOR_NOT_SET = 23;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-network-management/1.33.0/com.google.cloud.networkmanagement.v1beta1.DropInfo.Cause#com_google_cloud_networkmanagement_v1beta1_DropInfo_Cause_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
