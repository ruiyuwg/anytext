-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Container V1 Client - Class NetworkConfig (1.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.1 (latest) 2.8.0 2.7.0 2.6.1 2.5.0 2.4.0 2.3.4 2.2.1 2.1.0 2.0.0 1.33.0 1.32.0 1.31.0 1.30.3 1.24.0 1.23.0 1.22.0 1.21.1 1.20.0 1.19.0 1.18.0 1.17.1 1.16.0 1.15.0 1.14.0 1.13.1 1.12.1 1.10.3 1.9.1

Reference documentation and code samples for the Google Cloud Container V1 Client class NetworkConfig.

NetworkConfig reports the relative names of network & subnetwork.

Generated from protobuf message `google.container.v1.NetworkConfig`

## Namespace

Google \\ Cloud \\ Container \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ network`

`string`  

Output only. The relative name of the Google Compute Engine [network](/php/docs/reference/cloud-container/1.16.0/V1.NetworkConfig#_Google_Cloud_Container_V1_NetworkConfig__getNetwork__)([https://cloud.google.com/compute/docs/networks-and-firewalls#networks](https://cloud.google.com/compute/docs/networks-and-firewalls#networks)) to which the cluster is connected. Example: projects/my-project/global/networks/my-network

`↳ subnetwork`

`string`  

Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet

`↳ enable_intra_node_visibility`

`bool`  

Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.

`↳ default_snat_status`

`[Google\Cloud\Container\V1\DefaultSnatStatus](/php/docs/reference/cloud-container/1.16.0/V1.DefaultSnatStatus)`  

Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default\_snat\_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.

`↳ enable_l4ilb_subsetting`

`bool`  

Whether L4ILB Subsetting is enabled for this cluster.

`↳ datapath_provider`

`int`  

The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.

`↳ private_ipv6_google_access`

`int`  

The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)

`↳ dns_config`

`[Google\Cloud\Container\V1\DNSConfig](/php/docs/reference/cloud-container/1.16.0/V1.DNSConfig)`  

DNSConfig contains clusterDNS config for this cluster.

`↳ service_external_ips_config`

`[Google\Cloud\Container\V1\ServiceExternalIPsConfig](/php/docs/reference/cloud-container/1.16.0/V1.ServiceExternalIPsConfig)`  

ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not.

`↳ gateway_api_config`

`[Google\Cloud\Container\V1\GatewayAPIConfig](/php/docs/reference/cloud-container/1.16.0/V1.GatewayAPIConfig)`  

GatewayAPIConfig contains the desired config of Gateway API on this cluster.

`↳ enable_fqdn_network_policy`

`bool`  

Whether FQDN Network Policy is enabled on this cluster.

### getNetwork

Output only. The relative name of the Google Compute Engine [network](/php/docs/reference/cloud-container/1.16.0/V1.NetworkConfig#_Google_Cloud_Container_V1_NetworkConfig__getNetwork__)([https://cloud.google.com/compute/docs/networks-and-firewalls#networks](https://cloud.google.com/compute/docs/networks-and-firewalls#networks)) to which the cluster is connected. Example: projects/my-project/global/networks/my-network

**Returns**

**Type**

**Description**

`string`

### setNetwork

Output only. The relative name of the Google Compute Engine [network](/php/docs/reference/cloud-container/1.16.0/V1.NetworkConfig#_Google_Cloud_Container_V1_NetworkConfig__getNetwork__)([https://cloud.google.com/compute/docs/networks-and-firewalls#networks](https://cloud.google.com/compute/docs/networks-and-firewalls#networks)) to which the cluster is connected. Example: projects/my-project/global/networks/my-network

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSubnetwork

Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet

**Returns**

**Type**

**Description**

`string`

### setSubnetwork

Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEnableIntraNodeVisibility

Whether Intra-node visibility is enabled for this cluster.

This makes same node pod to pod traffic visible for VPC network.

**Returns**

**Type**

**Description**

`bool`

### setEnableIntraNodeVisibility

Whether Intra-node visibility is enabled for this cluster.

This makes same node pod to pod traffic visible for VPC network.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getDefaultSnatStatus

Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default\_snat\_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.

**Returns**

**Type**

**Description**

`[Google\Cloud\Container\V1\DefaultSnatStatus](/php/docs/reference/cloud-container/1.16.0/V1.DefaultSnatStatus)|null`

### hasDefaultSnatStatus

### clearDefaultSnatStatus

### setDefaultSnatStatus

Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default\_snat\_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Container\V1\DefaultSnatStatus](/php/docs/reference/cloud-container/1.16.0/V1.DefaultSnatStatus)`  

**Returns**

**Type**

**Description**

`$this`

### getEnableL4IlbSubsetting

Whether L4ILB Subsetting is enabled for this cluster.

**Returns**

**Type**

**Description**

`bool`

### setEnableL4IlbSubsetting

Whether L4ILB Subsetting is enabled for this cluster.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getDatapathProvider

The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.

**Returns**

**Type**

**Description**

`int`

### setDatapathProvider

The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPrivateIpv6GoogleAccess

The desired state of IPv6 connectivity to Google Services.

By default, no private IPv6 access to or from Google Services (all access will be via IPv4)

**Returns**

**Type**

**Description**

`int`

### setPrivateIpv6GoogleAccess

The desired state of IPv6 connectivity to Google Services.

By default, no private IPv6 access to or from Google Services (all access will be via IPv4)

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getDnsConfig

DNSConfig contains clusterDNS config for this cluster.

**Returns**

**Type**

**Description**

`[Google\Cloud\Container\V1\DNSConfig](/php/docs/reference/cloud-container/1.16.0/V1.DNSConfig)|null`

### hasDnsConfig

### clearDnsConfig

### setDnsConfig

DNSConfig contains clusterDNS config for this cluster.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Container\V1\DNSConfig](/php/docs/reference/cloud-container/1.16.0/V1.DNSConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getServiceExternalIpsConfig

ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not.

**Returns**

**Type**

**Description**

`[Google\Cloud\Container\V1\ServiceExternalIPsConfig](/php/docs/reference/cloud-container/1.16.0/V1.ServiceExternalIPsConfig)|null`

### hasServiceExternalIpsConfig

### clearServiceExternalIpsConfig

### setServiceExternalIpsConfig

ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Container\V1\ServiceExternalIPsConfig](/php/docs/reference/cloud-container/1.16.0/V1.ServiceExternalIPsConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getGatewayApiConfig

GatewayAPIConfig contains the desired config of Gateway API on this cluster.

**Returns**

**Type**

**Description**

`[Google\Cloud\Container\V1\GatewayAPIConfig](/php/docs/reference/cloud-container/1.16.0/V1.GatewayAPIConfig)|null`

### hasGatewayApiConfig

### clearGatewayApiConfig

### setGatewayApiConfig

GatewayAPIConfig contains the desired config of Gateway API on this cluster.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Container\V1\GatewayAPIConfig](/php/docs/reference/cloud-container/1.16.0/V1.GatewayAPIConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getEnableFqdnNetworkPolicy

Whether FQDN Network Policy is enabled on this cluster.

**Returns**

**Type**

**Description**

`bool`

### hasEnableFqdnNetworkPolicy

### clearEnableFqdnNetworkPolicy

### setEnableFqdnNetworkPolicy

Whether FQDN Network Policy is enabled on this cluster.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
