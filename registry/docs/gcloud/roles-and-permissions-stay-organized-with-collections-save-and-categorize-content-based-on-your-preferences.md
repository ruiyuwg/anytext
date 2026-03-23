-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Certificate Manager](https://docs.cloud.google.com/certificate-manager/docs)
-   [Guides](https://docs.cloud.google.com/certificate-manager/docs/overview)

Send feedback

# Roles and permissions Stay organized with collections Save and categorize content based on your preferences.

This page lists the permissions required by Certificate Manager and the [Identity and Access Management roles](/iam/docs/understanding-roles) that encapsulate them.

## Permissions

This section lists the permissions required to perform specific operations in Certificate Manager.

Operation and method

Resource

Permission

Create a certificate  
  
`certificates.create`

Certificates

`certificatemanager.certs.create` on the target Google Cloud project. If using DNS authorization, also requires `certificatemanager.dnsauthorizations.use` on each associated DNS authorization.

List certificates  
  
`certificates.list`

Certificates

`certificatemanager.certs.list` on the target Google Cloud project

View certificates in the console  
  
`serviceusage.quotas.get`,  
`monitoring.timeSeries.list`

Certificates

`serviceusage.quotas.get` and `monitoring.timeSeries.list` on the target Google Cloud project

Retrieve a certificate  
  
`certificates.get`

Certificates

`certificatemanager.certs.get` on the target certificate

Update a certificate  
  
`certificates.patch`

Certificates

`certificatemanager.certs.update` on the target certificate

Attach a certificate to a resource

Certificates

`certificatemanager.certs.use` on the target certificate

Delete a certificate  
  
`certificates.delete`

Certificates

`certificatemanager.certs.delete` on the target certificate

Create a certificate map  
  
`certificateMaps.create`

Certificate maps

`certificatemanager.certmaps.create` on the target Google Cloud project

List certificate maps  
  
`certificateMaps.list`

Certificate maps

`certificatemanager.certmaps.list` on the target Google Cloud project

Retrieve a certificate map  
  
`certificateMaps.get`

Certificate maps

`certificatemanager.certmaps.get` on the target certificate map

Update a certificate map  
  
`certificateMaps.patch`

Certificate maps

`certificatemanager.certmaps.update` on the target certificate map

Attach a certificate map to a resource

Certificate maps

`certificatemanager.certmaps.use` on the target certificate map

Delete a certificate map  
  
`certificateMaps.delete`

Certificate maps

`certificatemanager.certmaps.delete` on the target certificate map

Create a certificate map entry  
  
`certificateMaps.certificateMapEntries.create`

Certificate map entries

`certificatemanager.certmapentries.create` on the target certificate map and `certificatemanager.certs.use` on each associated certificate.

List certificate map entries  
  
`certificateMaps.certificateMapEntries.list`

Certificate map entries

`certificatemanager.certmapentries.list` on the target certificate map

Retrieve a certificate map entry  
  
`certificateMaps.certificateMapEntries.get`

Certificate map entries

`certificatemanager.certmapentries.get` on the target certificate map entry

Update a certificate map entry  
  
`certificateMaps.certificateMapEntries.patch`

Certificate map entries

`certificatemanager.certmapentries.update` on the target certificate map entry and `certificatemanager.certs.use` on each associated certificate.

Delete a certificate map entry  
  
`certificateMaps.certificateMapEntries.delete`

Certificate map entries

`certificatemanager.certmapentries.delete` on the target certificate map entry

Create a DNS authorization  
  
`dnsAuthorizations.create`

DNS authorizations

`certificatemanager.dnsauthorizations.create` on the target Google Cloud project

List DNS authorizations  
  
`dnsAuthorizations.list`

DNS authorizations

`certificatemanager.dnsauthorizations.list` on the target Google Cloud project

Retrieve a DNS authorization  
  
`dnsAuthorizations.get`

DNS authorizations

`certificatemanager.dnsauthorizations.get` on the target DNS authorization

Update a DNS authorization  
  
`dnsAuthorizations.patch`

DNS authorizations

`certificatemanager.dnsauthorizations.update` on the target DNS authorization

Delete a DNS authorization  
  
`dnsAuthorizations.delete`

DNS authorizations

`certificatemanager.dnsauthorizations.delete` on the target DNS authorization

Create a certificate issuance config  
  
`certificateIssuanceConfigs.create`

Certificate issuance configs

`certificatemanager.certissuanceconfigs.create` on the target Google Cloud project

List certificate issuance configs  
  
`certificateIssuanceConfigs.list`

Certificate issuance configs

`certificatemanager.certissuanceconfigs.list` on the target Google Cloud project

Retrieve a certificate issuance config  
  
`certificateIssuanceConfigs.get`

Certificate issuance configs

`certificatemanager.certissuanceconfigs.get` on the target certificate issuance config

Delete a certificate issuance config  
  
`certificateIssuanceConfigs.delete`

Certificate issuance configs

`certificatemanager.certissuanceconfigs.delete` on the target certificate issuance config

Create a trust config  
  
`trustConfigs.create`

Trust configs

`certificatemanager.trustconfigs.create` on the target Google Cloud project

List trust configs  
  
`trustConfigs.list`

Trust configs

`certificatemanager.trustconfigs.list` on the target Google Cloud project

Update a trust config  
  
`trustConfigs.patch`

Trust configs

`certificatemanager.trustconfigs.update` on the target trust config

Get the state of a trust config  
  
`trustConfigs.get`

Trust configs

`certificatemanager.trustconfigs.get` on the target trust config

Attach a trust config to a resource

Trust configs

`certificatemanager.trustconfigs.use` on the target trust config

Delete a trust config  
  
`trustConfigs.delete`

Trust configs

`certificatemanager.trustconfigs.delete` on the target trust config

Create an external account key  
  
`externalAccountKeys.create`

External account keys

`publicca.externalAccountKeys.create` on the target Google Cloud project

## Roles

This section lists the [IAM roles](/iam/docs/understanding-roles) that encapsulate Certificate Manager permissions.

### Certificate Manager roles for Google Cloud projects

The following table lists the Google Cloud project roles and the Certificate Manager permissions they encapsulate.

Role

Permissions

#### Certificate Manager Editor

(`roles/certificatemanager.editor`)

Edit access to Certificate Manager all resources.

`certificatemanager.certissuanceconfigs.create`

`certificatemanager.certissuanceconfigs.createTagBinding`

`certificatemanager.certissuanceconfigs.deleteTagBinding`

`certificatemanager.certissuanceconfigs.get`

`certificatemanager.certissuanceconfigs.list`

`certificatemanager.certissuanceconfigs.listEffectiveTags`

`certificatemanager.certissuanceconfigs.listTagBindings`

`certificatemanager.certissuanceconfigs.update`

`certificatemanager.certissuanceconfigs.use`

`certificatemanager.certmapentries.create`

`certificatemanager.certmapentries.createTagBinding`

`certificatemanager.certmapentries.deleteTagBinding`

`certificatemanager.certmapentries.get`

`certificatemanager.certmapentries.list`

`certificatemanager.certmapentries.listEffectiveTags`

`certificatemanager.certmapentries.listTagBindings`

`certificatemanager.certmapentries.update`

`certificatemanager.certmaps.create`

`certificatemanager.certmaps.createTagBinding`

`certificatemanager.certmaps.deleteTagBinding`

`certificatemanager.certmaps.get`

`certificatemanager.certmaps.list`

`certificatemanager.certmaps.listEffectiveTags`

`certificatemanager.certmaps.listTagBindings`

`certificatemanager.certmaps.update`

`certificatemanager.certmaps.use`

`certificatemanager.certs.create`

`certificatemanager.certs.createTagBinding`

`certificatemanager.certs.deleteTagBinding`

`certificatemanager.certs.get`

`certificatemanager.certs.list`

`certificatemanager.certs.listEffectiveTags`

`certificatemanager.certs.listTagBindings`

`certificatemanager.certs.update`

`certificatemanager.certs.use`

`certificatemanager.dnsauthorizations.create`

`certificatemanager.dnsauthorizations.createTagBinding`

`certificatemanager.dnsauthorizations.deleteTagBinding`

`certificatemanager.dnsauthorizations.get`

`certificatemanager.dnsauthorizations.list`

`certificatemanager.dnsauthorizations.listEffectiveTags`

`certificatemanager.dnsauthorizations.listTagBindings`

`certificatemanager.dnsauthorizations.update`

`certificatemanager.dnsauthorizations.use`

`certificatemanager.locations.*`

-   `certificatemanager.locations.get`
-   `certificatemanager.locations.list`

`certificatemanager.operations.get`

`certificatemanager.operations.list`

`certificatemanager.trustconfigs.create`

`certificatemanager.trustconfigs.createTagBinding`

`certificatemanager.trustconfigs.deleteTagBinding`

`certificatemanager.trustconfigs.get`

`certificatemanager.trustconfigs.list`

`certificatemanager.trustconfigs.listEffectiveTags`

`certificatemanager.trustconfigs.listTagBindings`

`certificatemanager.trustconfigs.update`

`certificatemanager.trustconfigs.use`

`resourcemanager.projects.get`

`resourcemanager.projects.list`

#### Certificate Manager Owner

(`roles/certificatemanager.owner`)

Full access to Certificate Manager all resources.

`certificatemanager.*`

-   `certificatemanager.certissuanceconfigs.create`
-   `certificatemanager.certissuanceconfigs.createTagBinding`
-   `certificatemanager.certissuanceconfigs.delete`
-   `certificatemanager.certissuanceconfigs.deleteTagBinding`
-   `certificatemanager.certissuanceconfigs.get`
-   `certificatemanager.certissuanceconfigs.list`
-   `certificatemanager.certissuanceconfigs.listEffectiveTags`
-   `certificatemanager.certissuanceconfigs.listTagBindings`
-   `certificatemanager.certissuanceconfigs.update`
-   `certificatemanager.certissuanceconfigs.use`
-   `certificatemanager.certmapentries.create`
-   `certificatemanager.certmapentries.createTagBinding`
-   `certificatemanager.certmapentries.delete`
-   `certificatemanager.certmapentries.deleteTagBinding`
-   `certificatemanager.certmapentries.get`
-   `certificatemanager.certmapentries.list`
-   `certificatemanager.certmapentries.listEffectiveTags`
-   `certificatemanager.certmapentries.listTagBindings`
-   `certificatemanager.certmapentries.update`
-   `certificatemanager.certmaps.create`
-   `certificatemanager.certmaps.createTagBinding`
-   `certificatemanager.certmaps.delete`
-   `certificatemanager.certmaps.deleteTagBinding`
-   `certificatemanager.certmaps.get`
-   `certificatemanager.certmaps.list`
-   `certificatemanager.certmaps.listEffectiveTags`
-   `certificatemanager.certmaps.listTagBindings`
-   `certificatemanager.certmaps.update`
-   `certificatemanager.certmaps.use`
-   `certificatemanager.certs.create`
-   `certificatemanager.certs.createTagBinding`
-   `certificatemanager.certs.delete`
-   `certificatemanager.certs.deleteTagBinding`
-   `certificatemanager.certs.get`
-   `certificatemanager.certs.list`
-   `certificatemanager.certs.listEffectiveTags`
-   `certificatemanager.certs.listTagBindings`
-   `certificatemanager.certs.update`
-   `certificatemanager.certs.use`
-   `certificatemanager.dnsauthorizations.create`
-   `certificatemanager.dnsauthorizations.createTagBinding`
-   `certificatemanager.dnsauthorizations.delete`
-   `certificatemanager.dnsauthorizations.deleteTagBinding`
-   `certificatemanager.dnsauthorizations.get`
-   `certificatemanager.dnsauthorizations.list`
-   `certificatemanager.dnsauthorizations.listEffectiveTags`
-   `certificatemanager.dnsauthorizations.listTagBindings`
-   `certificatemanager.dnsauthorizations.update`
-   `certificatemanager.dnsauthorizations.use`
-   `certificatemanager.locations.get`
-   `certificatemanager.locations.list`
-   `certificatemanager.operations.cancel`
-   `certificatemanager.operations.delete`
-   `certificatemanager.operations.get`
-   `certificatemanager.operations.list`
-   `certificatemanager.trustconfigs.create`
-   `certificatemanager.trustconfigs.createTagBinding`
-   `certificatemanager.trustconfigs.delete`
-   `certificatemanager.trustconfigs.deleteTagBinding`
-   `certificatemanager.trustconfigs.get`
-   `certificatemanager.trustconfigs.list`
-   `certificatemanager.trustconfigs.listEffectiveTags`
-   `certificatemanager.trustconfigs.listTagBindings`
-   `certificatemanager.trustconfigs.update`
-   `certificatemanager.trustconfigs.use`

`resourcemanager.projects.get`

`resourcemanager.projects.list`

#### Certificate Manager Service Agent

(`roles/certificatemanager.serviceAgent`)

Grants Certificate Manager access to services and APIs in the user project.

**Warning:** Do not grant service agent roles to any principals except [service agents](/iam/docs/service-agents).

`certificatemanager.locations.get`

#### Certificate Manager Viewer

(`roles/certificatemanager.viewer`)

Read-only access to Certificate Manager all resources.

`certificatemanager.certissuanceconfigs.get`

`certificatemanager.certissuanceconfigs.list`

`certificatemanager.certissuanceconfigs.listEffectiveTags`

`certificatemanager.certissuanceconfigs.listTagBindings`

`certificatemanager.certmapentries.get`

`certificatemanager.certmapentries.list`

`certificatemanager.certmapentries.listEffectiveTags`

`certificatemanager.certmapentries.listTagBindings`

`certificatemanager.certmaps.get`

`certificatemanager.certmaps.list`

`certificatemanager.certmaps.listEffectiveTags`

`certificatemanager.certmaps.listTagBindings`

`certificatemanager.certs.get`

`certificatemanager.certs.list`

`certificatemanager.certs.listEffectiveTags`

`certificatemanager.certs.listTagBindings`

`certificatemanager.dnsauthorizations.get`

`certificatemanager.dnsauthorizations.list`

`certificatemanager.dnsauthorizations.listEffectiveTags`

`certificatemanager.dnsauthorizations.listTagBindings`

`certificatemanager.locations.*`

-   `certificatemanager.locations.get`
-   `certificatemanager.locations.list`

`certificatemanager.operations.get`

`certificatemanager.operations.list`

`certificatemanager.trustconfigs.get`

`certificatemanager.trustconfigs.list`

`certificatemanager.trustconfigs.listEffectiveTags`

`certificatemanager.trustconfigs.listTagBindings`

`resourcemanager.projects.get`

`resourcemanager.projects.list`

### Public CA roles for Google Cloud projects

The following roles and the permissions they encapsulate are required specifically for Public CA operations:

Role

Permissions

**Public CA External Account Key Creator**  
(`roles/publicca.externalAccountKeyCreator`)

Create access for Public CA external key account resources.

resourcemanager.projects.get  
resourcemanager.projects.list  
publicca.externalAccountKeys.create  

### Custom roles

Google Cloud also lets you create custom roles that encapsulate permissions specific to your business needs, such as the principle of least needed privilege. For instructions, see [Creating and managing custom roles](/iam/docs/creating-custom-roles).

## What's next

-   [Migrate a certificate to Certificate Manager](/certificate-manager/docs/migrate)
-   [Manage certificates](/certificate-manager/docs/certificates)
-   [Manage certificate maps](/certificate-manager/docs/maps)
-   [Manage certificate map entries](/certificate-manager/docs/map-entries)
-   [Manage DNS authorizations](/certificate-manager/docs/dns-authorizations)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
