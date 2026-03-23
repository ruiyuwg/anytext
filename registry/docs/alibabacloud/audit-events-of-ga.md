Global Accelerator (GA) is integrated with ActionTrail. In the ActionTrail console, you can query the management events that are generated when you manage GA resources. ActionTrail can deliver management events to Logstores in Log Service or Object Storage Service (OSS) buckets. This way, you can audit the events in real time and locate the causes of issues.

ActionTrail generates management events when you manage cloud resources by using APIs or the Alibaba Cloud Management Console. The following table describes the management events of GA that you can query in the ActionTrail console. The missing descriptions will be provided in the future.

**Event name**

**Description**

AddEntriesToAcl

Adds IP entries to an access control list (ACL).

AssociateAclsWithListener

Associates ACLs with a listener.

AssociateAdditionalCertificatesWithListener

Associates one or more additional certificates with an HTTPS listener.

AttachDdosToAccelerator

Associates GA instance with an Anti-DDoS Pro or Anti-DDoS Premium instance.

BandwidthPackageAddAccelerator

Associates a bandwidth plan with a GA instance.

BandwidthPackageRemoveAccelerator

Disassociates a bandwidth plan from a GA instance.

CheckAcceleratorPrivilege

Checks the permissions of a GA instance.

CheckListenerPort

Checks a listener port.

ConfigEndpointProbe

Configures latency monitoring for an endpoint.

Create

Purchases a GA resource on the buy page.

CreateAccelerator

Creates a GA instance.

CreateAcl

Creates an ACL.

CreateApplicationMonitor

Creates an origin probing task.

CreateBandwidthPackage

Deletes a specified NAT service plan.

CreateBasicAccelerator

Creates a basic GA instance.

CreateBasicEndpointGroup

Creates an endpoint group for a basic GA instance.

CreateBasicIpSet

Creates an acceleration region for a basic GA instance.

CreateCustomRoutingEndpointGroupDestinations

Creates one or more mapping configurations about the backend service protocols and port ranges for an endpoint group that is associated with a custom routing listener.

CreateCustomRoutingEndpointGroups

Creates endpoint groups for a custom routing listener.

CreateCustomRoutingEndpoints

Creates one or more endpoints in an endpoint group that is associated with a custom routing listener.

CreateCustomRoutingEndpointTrafficPolicies

Creates traffic policies for an endpoint that is associated with a custom routing listener.

CreateDomain

Creates a domain name and associates the domain name with a GA instance.

CreateEndpointGroup

Creates an endpoint group.

CreateEndpointGroups

Creates endpoint groups.

CreateForwardingRules

Creates forwarding rules.

CreateIpSets

Creates acceleration regions.

CreateListener

Creates a listener.

CreateSpareIps

Creates secondary IP addresses for a canonical name (CNAME).

DeleteAccelerator

Deletes a GA instance.

DeleteAcl

Deletes an ACL.

DeleteBandwidthPackage

Creates a NAT service plan.

DeleteBasicAccelerator

Deletes a basic GA instance.

DeleteBasicEndpointGroup

Deletes an endpoint group of a basic GA instance.

DeleteBasicIpSet

Deletes an acceleration region of a basic GA instance.

DeleteCustomRoutingEndpointGroupDestinations

Deletes one or more mapping configurations about the backend service protocols and port ranges for an endpoint group that is associated with a custom routing listener.

DeleteCustomRoutingEndpointGroups

Deletes endpoint groups that are associated with a custom routing listener.

DeleteCustomRoutingEndpoints

Deletes endpoints from an endpoint group that is associated with a custom routing listener.

DeleteCustomRoutingEndpointTrafficPolicies

Deletes traffic policies for an endpoint that is associated with a custom routing listener.

DeleteDomainAcceleratorRelation

Disassociates a domain name from a GA instance.

DeleteEndpointGroup

Deletes an endpoint group.

DeleteEndpointGroups

Deletes endpoint groups.

DeleteForwardingRules

Deletes forwarding rules.

DeleteIpSet

Deletes an acceleration region.

DeleteIpSets

Deletes multiple acceleration regions.

DeleteListener

Deletes a listener.

DeleteSpareIps

Deletes secondary IP addresses of a CNAME.

DeployAccelerator

Deploys an acceleration area, a listener, and endpoint groups.

DescribeAccelerator

Queries the information about a specified GA instance.

DescribeAcceleratorAutoRenewAttribute

Queries the auto-renewal status of a GA instance.

DescribeBandwidthPackage

Queries the information about a bandwidth plan.

DescribeBandwidthPackageAutoRenewAttribute

Queries the auto-renewal status of a bandwidth plan.

DescribeCustomRoutingEndpointGroup

Queries the information about an endpoint group that is associated with a custom routing listener.

DescribeEndpointGroup

Queries the information about an endpoint group.

DescribeIpSet

Queries the information about an acceleration region.

DescribeListener

Queries the information about a listener.

DescribeLogStoreOfEndpointGroup

Queries the Logstore that is associated with an endpoint group.

DescribeRegions

Queries the regions in which a GA instance can be deployed.

DescribeTrialAccelerator

Queries the information about a trial GA instance.

DetachDdosFromAccelerator

Disassociates a GA instance from an Anti-DDoS Pro or Anti-DDoS Premium instance.

DissociateAclsFromListener

Disassociates ACLs from a listener.

DissociateAdditionalCertificatesFromListener

Disassociates additional certificates from an HTTPS listener.

GetAcl

Queries the information about an ACL.

GetBasicAccelerator

Queries the information about a basic GA instance.

GetBasicEndpointGroup

Queries the information about the endpoint group of a basic GA instance.

GetBasicIpSet

Queries the information about the acceleration region of a basic GA instance.

GetHealthStatus

Queries the health status of a listener.

GetInvalidDomainCount

Queries the number of invalid domain names.

GetIpsetsBandwidthLimit

Queries the bandwidth threshold of an acceleration area.

GetSpareIp

Queries the status of a secondary IP address of a CNAME.

ListAccelerateAreas

Queries available acceleration areas and regions.

ListAccelerators

Queries GA instances.

ListAcls

Queries ACLs.

ListAvailableAccelerateAreas

Queries available acceleration areas.

ListAvailableBusiRegions

Queries available acceleration regions of a GA instance.

ListBandwidthackages

Queries bandwidth plans.

ListBandwidthPackages

Queries bandwidth plans.

ListBasicAccelerators

Queries basic GA instances.

ListBusiRegions

Queries the acceleration regions that are supported by GA.

ListCommonAreas

Queries the acceleration areas that are supported by GA.

ListCrossBorderPackageUsageDetail

Queries the usage details of a cross-border bandwidth plan.

ListCustomRoutingEndpointGroupDestinations

Queries the mapping configurations of endpoint groups.

ListCustomRoutingEndpointGroups

Queries the endpoint groups that are associated with a custom routing listener.

ListCustomRoutingEndpoints

Queries the endpoints in an endpoint group that is associated with a custom routing listener.

ListCustomRoutingEndpointTrafficPolicies

Queries the traffic policies for an endpoint that is associated with a custom routing listener.

ListCustomRoutingPortMappings

Queries the port mapping table of a custom routing listener.

ListCustomRoutingPortMappingsByDestination

Queries the port mapping table of a specified backend instance that is associated with a custom routing listener.

ListDomains

Queries domain names.

ListEips

Queries elastic IP addresses (EIPs).

ListEndpointGroups

Queries endpoint groups.

ListForwardingRules

Queries forwarding rules.

ListGaCrossBorderPackageForComplianceCheck

Queries the cross-border bandwidth plans whose compliance is not verified.

ListIpSets

Queries acceleration regions.

ListIspTypes

Queries the types of Internet service providers (ISPs).

ListListenerCertificates

Queries the certificates that are associated with a listener.

ListListeners

Queries listeners.

ListSpareIps

Queries the secondary IP addresses of a CNAME.

ListSystemSecurityPolicies

Queries the Transport Layer Security (TLS) security policies that are supported by HTTPS listeners.

ListTrialAccelerators

Queries trial GA instances.

Modify

Modifies the specifications of a GA instance on the buy page.

Release

Releases a resource such as an instance.

RemoveEntriesFromAcl

Removes IP entries from an ACL.

Renew

Renews a resource such as an instance or a resource plan.

ReplaceBandwidthPackage

Replaces a bandwidth plan.

UpdateAccelerator

Modifies a GA instance.

UpdateAcceleratorConfirm

Confirms the specifications of a GA instance that is modified.

UpdateAclAttribute

Modifies the attributes of an ACL.

UpdateBandwidthPackagaAutoRenewAttribute

Modifies the auto-renewal settings of a bandwidth plan.

UpdateBandwidthPackage

Modifies the configurations of a bandwidth plan.

UpdateBasicAccelerator

Modifies a basic GA instance.

UpdateBasicEndpointGroup

Modifies an endpoint group of a basic GA instance.

UpdateCustomRoutingEndpointGroupDestinations

Modifies one or more mapping configurations about the backend service protocols and port ranges for an endpoint group that is associated with a custom routing listener.

UpdateCustomRoutingEndpoints

Modifies one or more endpoints in an endpoint group that is associated with a custom routing listener.

UpdateDomain

Changes the name of a domain name.

UpdateDomainState

Changes the status of a domain name.

UpdateEndpointGroup

Modifies an endpoint group.

UpdateEndpointGroupAttribute

Modifies the name and description of an endpoint group.

UpdateEndpointGroups

Modifies the endpoint groups that are associated with a listener.

UpdateForwardingRules

Modifies forwarding rules.

UpdateIpSet

Modifies a specified acceleration region in an acceleration area.

UpdateIpSets

Modifies multiple acceleration regions in an acceleration area.

UpdateListener

Modifies a listener.

VerifyGaCrossBorderPackageForCompliance

Verifies the compliance of a cross-border bandwidth plan.

AttachLogStoreToEndpointGroup

None.

CheckTrialQualification

None.

CopyTrialAcceleratorConfig

None.

CreateTrialAccelerator

None.

DeleteApplicationMonitor

None.

DescribeApplicationMonitor

None.

DetachLogStoreFromEndpointGroup

None.

DetectApplicationMonitor

None.

DisableApplicationMonitor

None.

EnableApplicationMonitor

None.

ListApplicationMonitor

None.

ListApplicationMonitorDetectResult

None.

ListCrossBorderPackageForCompliance

None.

UpdateAcceleratorAutoRenewAttribute

None.

UpdateApplicationMonitor

None.

UpdateCrossBorderPackageComplianceStatus

None.
