## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`ecd/2020-09-30`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Region

**API**

**Title**

**Description**

[DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions)

DescribeRegions

Queries the Alibaba Cloud regions that are available for Elastic Desktop Service (EDS).

[DescribeZones](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describezones)

DescribeZones

Queries the zones supported by Elastic Desktop Service (EDS) in a region.

## Quotation

**API**

**Title**

**Description**

[DescribePrice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeprice)

Query new purchase price

Query the new purchase price of Elastic Desktop Service (EDS) products.

[DescribeRenewalPrice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describerenewalprice)

DescribeRenewalPrice

Queries the renewal price of a WUYING Workspace.

[DescribeModificationPrice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describemodificationprice)

Query Upgrade/Downgrade Price

Query the Upgrade/Downgrade price for monthly subscription cloud desktops with unlimited duration or Internet premium bandwidth.

[DescribeRefundPrice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describerefundprice)

DescribeRefundPrice

Query the refund amount for monthly subscription WUYING Workspaces.

## Office Network (formerly Workspace)

**API**

**Title**

**Description**

General Office Network

General Office Network

[ListOfficeSiteOverview](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listofficesiteoverview)

ListOfficeSiteOverview

Queries information about an office network, including its status, cloud computer quantity, virtual private cloud (VPC) type, and more.

[DescribeOfficeSites](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeofficesites)

DescribeOfficeSites

Queries office network properties, including office network ID, name, status, and creation time.

[ModifyOfficeSiteAttribute](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyofficesiteattribute)

ModifyOfficeSiteAttribute

Modifies basic properties of the office network, such as its name and whether to grant local administrative permissions to cloud computer users.

[ModifyOfficeSiteCrossDesktopAccess](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyofficesitecrossdesktopaccess)

ModifyOfficeSiteCrossDesktopAccess

Enables or disables the communication between cloud computers in an office network (formerly workspace). If you enable the communication between cloud computers in an office network, the cloud computers can access each other.

[DeleteOfficeSites](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deleteofficesites)

DeleteOfficeSites

Deletes office networks (formerly workspaces).

[ModifyOfficeSiteDnsInfo](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyofficesitednsinfo)

ModifyOfficeSiteDnsInfo

Modifies the DNS information of an office network.

[CreateOfficeSiteAccelerator](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createofficesiteaccelerator)

CreateOfficeSiteAccelerator

Enables the Global Accelerator (GA) service for an office network.

[DeleteOfficeSiteAccelerator](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deleteofficesiteaccelerator)

DeleteOfficeSiteAccelerator

Deletes a Global Accelerator (GA) configuration.

[ModifyOfficeSiteAccelerator](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyofficesiteaccelerator)

ModifyOfficeSiteAccelerator

Modifies the Global Accelerator (GA) configuration.

Office Network Based on Convenience Accounts

Office Network Based on Convenience Accounts

[CreateSimpleOfficeSite](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createsimpleofficesite)

CreateSimpleOfficeSite

WUYING Workspace supports convenience accounts and enterprise AD accounts. This operation creates an office network (formerly known as a workspace) that uses convenience accounts.

[ActivateOfficeSite](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-activateofficesite)

ActivateOfficeSite

Unlocks a convenience office network that is automatically locked due to a long idle period of time.

Office Network Based on Enterprise AD Accounts

Office Network Based on Enterprise AD Accounts

[CreateADConnectorOfficeSite](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createadconnectorofficesite)

CreateADConnectorOfficeSite

Creates an enterprise Active Directory (AD) office network (formerly workspace). Elastic Desktop Service supports the following types of accounts: convenience accounts and enterprise AD accounts.

[ListUserAdOrganizationUnits](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listuseradorganizationunits)

ListUserAdOrganizationUnits

Obtains the organizational units (OUs) of an Active Directory (AD) domain that is connected to an enterprise AD office network (formerly workspace).

[ListOfficeSiteUsers](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listofficesiteusers)

ListOfficeSiteUsers

Queries information about Active Directory (AD) accounts in an AD office network (formerly known as a workspace) that is connected to an AD domain.

[ModifyADConnectorOfficeSite](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyadconnectorofficesite)

ModifyADConnectorOfficeSite

Modifies the basic properties of an enterprise Active Directory (AD) office network, such as the office network name and domain names of the enterprise AD subdomains.

[ModifyOfficeSiteMfaEnabled](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyofficesitemfaenabled)

ModifyOfficeSiteMfaEnabled

Enables or disables multi-factor authentication (MFA) for an enterprise Active Directory (AD) office network (formerly workspace).

[ConfigADConnectorTrust](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-configadconnectortrust)

ConfigADConnectorTrust

Configures a conditional forwarder and trust relationship for a high-definition experience (HDX)-based office network (formerly workspace). You can call the operation to configure a trust relationship for an enterprise Active Directory (AD) office network.

[ConfigADConnectorUser](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-configadconnectoruser)

Configure the organizational unit (OU) and administrator for the AD office network

Specify an organizational unit (OU) and administrator for the Active Directory (AD) office network (formerly known as workspace).

## Folder

**API**

**Title**

**Description**

[CreateADConnectorDirectory](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createadconnectordirectory)

CreateADConnectorDirectory

Creates a directory of the Active Directory (AD) type.

[CreateRAMDirectory](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createramdirectory)

CreateRAMDirectory

Creates a Resource Access Management (RAM) directory.

[DescribeDirectories](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedirectories)

DescribeDirectories

Queries the details of directories.

[ListDirectoryUsers](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listdirectoryusers)

ListDirectoryUsers

If you use an Active Directory (AD) directory to connect to your enterprise AD, call this operation to retrieve user information from your enterprise AD.

[ModifyADConnectorDirectory](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyadconnectordirectory)

ModifyADConnectorDirectory

Modifies an Active Directory (AD) directory.

[DeleteDirectories](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletedirectories)

DeleteDirectories

Deletes one or more directories.

## Cloud PC

**API**

**Title**

**Description**

Cloud PC Resources

Cloud PC Resources

[CreateDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createdesktops)

Create one or more cloud desktops

Creates one or more cloud computers. You can assign the cloud computers to users during creation.

[CreateDiskEncryptionService](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-creatediskencryptionservice)

CreateDiskEncryptionService

Enables disk encryption and creates the required service-linked role in your Resource Access Management (RAM) user account for the Enterprise Drive.

[DescribeKmsKeys](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describekmskeys)

DescribeKmsKeys

Queries Key Management Service (KMS) keys of users. The first time you call this operation, you can try to create a service key for Elastic Desktop Service (EDS) and call the operation to return results.

[DescribeDesktopInfo](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktopinfo)

DescribeDesktopInfo

Describes basic information about cloud desktops.

[DescribeDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktops)

DescribeDesktops

Query the details of your cloud computers.

[DescribeDesktopTypes](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktoptypes)

DescribeDesktopTypes

Queries the details of cloud computer specifications.

[DescribeCustomizedListHeaders](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describecustomizedlistheaders)

Obtain the Table Headers of the WUYING Workspace List

Obtain the table header information of the WUYING Workspace list page.

[ExportDesktopListInfo](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-exportdesktoplistinfo)

ExportDesktopListInfo

Exports a cloud computer list as a CSV file.

[StartDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-startdesktops)

StartDesktops

Starts stopped cloud computers. After the API operation is successfully called, the cloud computers enter the Running state.

[StopDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-stopdesktops)

StopDesktops

Stop cloud computers that are in the Running state. After the operation is successfully called, the cloud computers enter the Stopped state.

[RebootDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-rebootdesktops)

RebootDesktops

You can restart one or more cloud desktops.

[RebuildDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-rebuilddesktops)

RebuildDesktops

You can change the image for one or more cloud desktops.

[SetDesktopMaintenance](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setdesktopmaintenance)

SetDesktopMaintenance

Set the cloud computer maintenance mode.

[ModifyDesktopName](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktopname)

ModifyDesktopName

Changes the name of a cloud computer to a new name.

[ModifyDiskSpec](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydiskspec)

ModifyDiskSpec

Modify the performance level of a cloud desktop's system disk or data disk.

[ModifyDesktopChargeType](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktopchargetype)

ModifyDesktopChargeType

Convert the billing method of a cloud desktop to subscription or pay-as-you-go.

[ModifyDesktopSpec](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktopspec)

ModifyDesktopSpec

Change the specification of a WUYING Workspace or scale up its disks.

[ModifyDesktopTimer](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktoptimer)

ModifyDesktopTimer

Creates or modifies scheduled tasks on cloud computers, such as starting, stopping, restarting, and resetting cloud computers on schedule.

[ModifyDesktopHostName](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktophostname)

ModifyDesktopHostName

Modifies the hostname of a Windows cloud computer in the Active Directory (AD) office network.

[ModifyCustomizedListHeaders](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifycustomizedlistheaders)

ModifyCustomizedListHeaders

Modifies the layouts of cloud computer list headers, such as the required fields and the display and hide settings.

[MigrateDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-migratedesktops)

MigrateDesktops

Migrates cloud computers from the current office network (formerly called workspace) to the new office network.

[RenewDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-renewdesktops)

RenewDesktops

Renews one or more subscription-based WUYING Workspace instances.

[DeleteDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletedesktops)

DeleteDesktops

Releases one or more pay-as-you-go cloud computers or subscription cloud computers that have expired.

[DescribeDesktopMetadata](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktopmetadata)

Query metadata of Cloud Desktops

Lists Cloud Desktops and their metadata across all regions.

Authorized Users for Cloud PC

Authorized Users for Cloud PC

[DescribeUsersPassword](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeuserspassword)

DescribeUsersPassword

Queries the passwords for the accounts within a cloud computer image. For example, when the Chrome browser on the cloud computer queries the cached password, it requires the end user to enter the password for identity verification.

[GetConnectionTicket](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-getconnectionticket)

GetConnectionTicket

Obtains the credential that is used to connect to a cloud desktop.

[DescribeGuestApplications](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeguestapplications)

DescribeGuestApplications

Queries the applications and their processes of an end user.

[ModifyUserEntitlement](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyuserentitlement)

ModifyUserEntitlement

Grants permissions on cloud desktops to end users, or revokes the permissions from the end users.

[ModifyEntitlement](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyentitlement)

ModifyEntitlement

Assigns a cloud computer to end users and removes all original end users of the cloud computer.

[BatchModifyEntitlement](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-batchmodifyentitlement)

BatchModifyEntitlement

Assigns multiple cloud computers to users in a batch.

## Shared Cloud PC

**API**

**Title**

**Description**

Shared Cloud PC Resources

Shared Cloud PC Resources

[CreateDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createdesktopgroup)

CreateDesktopGroup

You can create a shared cloud computer.

[GetDesktopGroupDetail](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-getdesktopgroupdetail)

GetDesktopGroupDetail

You can view the details of a shared cloud computer.

[DescribeDesktopGroups](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktopgroups)

DescribeDesktopGroups

You can query the list and details of shared cloud desktops.

[ExportDesktopGroupInfo](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-exportdesktopgroupinfo)

ExportDesktopGroupInfo

Exports cloud computer shares and saves the list as an XLSX file. Each entry includes the ID and name of the cloud computer share, the ID and name of the office network, the cloud computer share template, and the name of the security policy.

[DescribeDesktopsInGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktopsingroup)

DescribeDesktopsInGroup

Query the list of cloud desktops in a shared cloud desktop group by payment type.

[DisableDesktopsInGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-disabledesktopsingroup)

DisableDesktopsInGroup

Disables specific cloud computers in a cloud computer share. After you call this operation to disable specific cloud computers, they enter the unavailable state.

[ModifyDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktopgroup)

ModifyDesktopGroup

Modifies a shared cloud computer group.

[ResetDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-resetdesktops)

ResetDesktops

Resets cloud desktops in a shared cloud desktop group.

[SetDesktopGroupScaleTimer](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setdesktopgroupscaletimer)

SetDesktopGroupScaleTimer

Configures an auto scaling policy for a multi-session cloud computer. Elastic Desktop Service allows multiple end users to share a cloud computer in a multi-session cloud computer pool. This helps save costs.

[SetDesktopGroupTimer](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setdesktopgrouptimer)

SetDesktopGroupTimer

Configures a scheduled start, stop, restart, or reset task for a cloud computer share.

[SetDesktopGroupTimerStatus](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setdesktopgrouptimerstatus)

SetDesktopGroupTimerStatus

Sets the status of a scheduled task for a cloud computer share, such as enabling or disabling it.

[RenewDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-renewdesktopgroup)

RenewDesktopGroup

Renew a shared cloud desktop subscription.

[DeleteDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletedesktopgroup)

DeleteDesktopGroup

Release a shared cloud computer.

Shared Cloud PC Users

Shared Cloud PC Users

[AddUserToDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-addusertodesktopgroup)

AddUserToDesktopGroup

Adds authorized users to a shared cloud desktop group, automatically assigning cloud desktops within the group to these users based on rules defined by an administrator.

[DescribeUsersInGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeusersingroup)

DescribeUsersInGroup

This operation queries the details of all authorized users in a cloud desktop group, including their usernames, email addresses, phone numbers, and the IDs of their authorized cloud desktops.

[DescribeUserConnectionRecords](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeuserconnectionrecords)

DescribeUserConnectionRecords

Queries the connection records of an authorized user to cloud computers in a cloud computer pool.

[ModifyUserToDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyusertodesktopgroup)

ModifyUserToDesktopGroup

Replaces the existing authorized users of a cloud computer share with different users

[RemoveUserFromDesktopGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-removeuserfromdesktopgroup)

RemoveUserFromDesktopGroup

Removes specified authorized users from a shared desktop group. After an authorized user is removed, that user can no longer connect to the cloud desktops in the group.

## Premium Public Network Bandwidth

**API**

**Title**

**Description**

[CreateNetworkPackage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createnetworkpackage)

CreateNetworkPackage

Create a premium public bandwidth package for your office network.

[DescribeNetworkPackages](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describenetworkpackages)

DescribeNetworkPackages

Queries the details of one or more premium bandwidth plans.

[DescribeFlowMetric](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeflowmetric)

Query Inbound Bandwidth and Outbound Bandwidth

Query the inbound bandwidth and outbound bandwidth of a cloud computer, or the inbound bandwidth and outbound bandwidth for public network access of premium public bandwidth, along with their monitoring data.

[DescribeFlowStatistic](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeflowstatistic)

DescribeFlowStatistic

Queries cloud computer-level traffic statistics of a single office network.

[DescribeAclEntries](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeaclentries)

DescribeAclEntries

Queries the details of an access control list (ACL) of an office network or a cloud computer.

[ModifyAclEntries](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyaclentries)

ModifyAclEntries

Modify the Internet access control policy on the office network or cloud computer granularity.

[AssociateNetworkPackage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-associatenetworkpackage)

AssociateNetworkPackage

Binds a premium bandwidth plan to an office network. A premium bandwidth plan is used together with only one office network.

[DissociateNetworkPackage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-dissociatenetworkpackage)

DissociateNetworkPackage

Unbinds a premium bandwidth plan from an office network.

[RenewNetworkPackages](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-renewnetworkpackages)

RenewNetworkPackages

Renews subscription-based premium public bandwidth.

[ModifyNetworkPackageBandwidth](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifynetworkpackagebandwidth)

ModifyNetworkPackageBandwidth

Modifies the bandwidth of a premium bandwidth plan.

[ModifyNetworkPackageEnabled](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifynetworkpackageenabled)

ModifyNetworkPackageEnabled

Restores or disables a premium bandwidth plan.

[DeleteNetworkPackages](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletenetworkpackages)

DeleteNetworkPackages

You can delete one or more public network premium bandwidth allocations.

## Cloud Enterprise Network (CEN)

**API**

**Title**

**Description**

[DescribeCens](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describecens)

DescribeCens

Queries the details of all Cloud Enterprise Network (CEN) instances within an Alibaba Cloud account.

[VerifyCen](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-verifycen)

VerifyCen

Verifies the ID of a Cloud Enterprise Network (CEN) instance and the ID of the Alibaba Cloud account to which the instance belongs and checks whether a CIDR block conflict exists between the routes of the instance and the IPv4 CIDR blocks of the associated office network.

[SendVerifyCode](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-sendverifycode)

SendVerifyCode

Obtains the verification code that is required when you bind an advanced office network to a Cloud Enterprise Network (CEN) instance that belongs to another Alibaba Cloud account.

[AttachCen](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-attachcen)

AttachCen

Binds an advanced office network to a Cloud Enterprise Network (CEN) instance.

[DetachCen](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-detachcen)

DetachCen

Unbinds an advanced office network from a CEN instance.

## Storage

**API**

**Title**

**Description**

[CreateDrive](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createdrive)

CreateDrive

Creates a user-level storage resource.

[DeleteDrive](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletedrive)

DeleteDrive

Deletes a drive.

[DescribeDrives](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedrives)

DescribeDrives

Queries user-level storage resources.

Enterprise Drive (formerly Wuying Cloud Disk)

Enterprise Drive (formerly Wuying Cloud Disk)

Drive

Drive

Team Shared Disk

Team Shared Disk

[DescribeCloudDiskGroupDrives](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeclouddiskgroupdrives)

Query cloud drive group spaces

Lists cloud disk group drives.

[DescribeCloudDiskGroups](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeclouddiskgroups)

Query cloud drive groups

Lists cloud disk groups.

[CreateCloudDriveGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createclouddrivegroup)

Add team space

Disk organization authorization.

User Personal Disk

User Personal Disk

Permission

Permission

File Management

File Management

File Sharing

File Sharing

Folder Sharing

Folder Sharing

Shared Storage NAS

Shared Storage NAS

[CreateAndBindNasFileSystem](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createandbindnasfilesystem)

CreateAndBindNasFileSystem

Creates a NAS file system and associate it with the office network of the shared cloud computer.

[CreateNASFileSystem](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createnasfilesystem)

CreateNASFileSystem

Create a NAS file system.

[DescribeNASFileSystems](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describenasfilesystems)

DescribeNASFileSystems

Queries the information about File Storage NAS (NAS) file systems.

[ModifyNASDefaultMountTarget](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifynasdefaultmounttarget)

ModifyNASDefaultMountTarget

Modifies the mount target of a File Storage NAS (NAS) file system.

[ResetNASDefaultMountTarget](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-resetnasdefaultmounttarget)

ResetNASDefaultMountTarget

Resets the mount target of a File Storage NAS (NAS) file system.

[DeleteNASFileSystems](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletenasfilesystems)

DeleteNASFileSystems

Deletes NAS file systems.

## Template (New)

**API**

**Title**

**Description**

[CreateTemplate](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createtemplate)

CreateTemplate

Creates a custom cloud computer template. A cloud computer template (or simply "template") simplifies the process of creating cloud computers by providing a predefined set of configurations. This eliminates the need to manually configure each setting, saving significant time and effort.

[DescribeTemplates](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describetemplates)

DescribeTemplates

Query the details of Cloud Desktop templates.

[ModifyTemplate](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifytemplate)

ModifyTemplate

Modifies all parameters of a custom WUYING Workspace template.

[DeleteTemplates](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletetemplates)

DeleteTemplates

Deletes custom cloud computer templates.

[ModifyTemplateBaseInfo](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifytemplatebaseinfo)

ModifyTemplateBaseInfo

Modifies the basic information of a custom cloud computer template, including the template name and template description.

## Template (Legacy)

**API**

**Title**

**Description**

[CreateBundle](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createbundle)

CreateBundle

Creates a custom cloud computer template.

[DescribeBundles](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describebundles)

DescribeBundles

Queries the details of cloud computer templates.

[ModifyBundle](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifybundle)

ModifyBundle

Modifies a custom cloud computer template.

[DeleteBundles](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletebundles)

DeleteBundles

Deletes custom cloud computer templates.

## Image

**API**

**Title**

**Description**

[CreateImage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createimage)

CreateImage

Create a custom image from an existing WUYING Workspace. Use this image to quickly deploy more workspaces with identical configurations. Avoid repeating configuration steps each time you create a new workspace.

[CopyImage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-copyimage)

CopyImage

Copy an image to another region. If you want to share an image across regions, you can call this operation to copy the image to the destination region and then share the image.

[UploadImage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-uploadimage)

UploadImage

Uploads your custom Windows image.

[DescribeImages](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeimages)

DescribeImages

Queries the information about images.

[DescribeImageModifiedRecords](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeimagemodifiedrecords)

DescribeImageModifiedRecords

Queries the image change records of a cloud computer.

[DescribeImagePermission](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeimagepermission)

DescribeImagePermission

Queries the recipient Alibaba Cloud accounts with which an image is shared.

[ModifyImageAttribute](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyimageattribute)

ModifyImageAttribute

Modifies the attributes of an image, including the name and description of the image.

[ModifyImagePermission](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyimagepermission)

ModifyImagePermission

Shares an image with other Alibaba Cloud accounts, or unshares an image from the recipient Alibaba Cloud accounts.

[MigrateImageProtocol](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-migrateimageprotocol)

MigrateImageProtocol

Update the protocols of images to Adaptive Streaming Protocol (ASP).

[DeleteImages](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deleteimages)

DeleteImages

Deletes one or more custom images.

[CancelCopyImage](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-cancelcopyimage)

CancelCopyImage

Cancels the operation of copying an image to another region.

## Snapshot

**API**

**Title**

**Description**

Snapshot Management

Snapshot Management

[CreateSnapshot](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createsnapshot)

CreateSnapshot

Create a snapshot for a disk of a cloud computer to back up or restore the data on the disk.

[ResetSnapshot](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-resetsnapshot)

Recover disk data from the snapshot

Recovers disk data from a snapshot.

[DescribeSnapshots](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describesnapshots)

Query the list and details of snapshots for cloud desktops

Queries the snapshots and their details for a cloud desktop.

[DeleteSnapshot](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletesnapshot)

DeleteSnapshot

Deletes one or more snapshots.

Automatic Snapshot Policy

Automatic Snapshot Policy

[CreateAutoSnapshotPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createautosnapshotpolicy)

CreateAutoSnapshotPolicy

Creates an automatic snapshot policy that schedules snapshots for WUYING Workspace based on a cron expression.

[DescribeAutoSnapshotPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeautosnapshotpolicy)

DescribeAutoSnapshotPolicy

Query automatic snapshot policies.

[ApplyAutoSnapshotPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-applyautosnapshotpolicy)

ApplyAutoSnapshotPolicy

Apply an automatic snapshot policy to cloud computers. After the automatic snapshot policy is applied to the cloud computers, Elastic Desktop Service automatically creates snapshots for the cloud computers based on the time specified in the automatic snapshot policy.

[ModifyAutoSnapshotPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyautosnapshotpolicy)

ModifyAutoSnapshotPolicy

Modifies an automatic snapshot policy's parameters, including its name and snapshot retention period.

[CancelAutoSnapshotPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-cancelautosnapshotpolicy)

CancelAutoSnapshotPolicy

Cancels an automatic snapshot policy for cloud computers.

[DeleteAutoSnapshotPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deleteautosnapshotpolicy)

DeleteAutoSnapshotPolicy

Deletes an automatic snapshot policy.

## Policy

**API**

**Title**

**Description**

Regionless Policy

Regionless Policy

[DeleteCenterPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletecenterpolicy)

DeleteCenterPolicy

Deletes a global policy.

[ModifyResourceCenterPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyresourcecenterpolicy)

ModifyResourceCenterPolicy

Modifies a global policy that is associated with a cloud resource.

[ModifyCenterPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifycenterpolicy)

Modify a policy without Region specification

Modifies a configuration that has no region-specific policy.

[DescribeResourceByCenterPolicyId](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeresourcebycenterpolicyid)

DescribeResourceByCenterPolicyId

Queries cloud resources that are associated with a global policy.

[DescribeCenterPolicyList](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describecenterpolicylist)

DescribeCenterPolicyList

Queries center policies.

[CreateCenterPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createcenterpolicy)

Create a Region-Free Policy

Create a region-free cloud desktop policy.

[CloneCenterPolicy](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-clonecenterpolicy)

CloneCenterPolicy

Clones a policy based on an existing global policy.

[CreatePolicyGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createpolicygroup)

CreatePolicyGroup

Creates a cloud computer policy.

[DeletePolicyGroups](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletepolicygroups)

DeletePolicyGroups

Deletes one or more custom cloud computer policies.

[ModifyPolicyGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifypolicygroup)

ModifyPolicyGroup

Modifies cloud computer policies.

[ModifyDesktopsPolicyGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifydesktopspolicygroup)

ModifyDesktopsPolicyGroup

Changes an existing cloud computer policy for cloud computers.

[DescribePolicyGroups](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describepolicygroups)

DescribePolicyGroups

Queries the details of a cloud computer policy.

[ClonePolicyGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-clonepolicygroup)

ClonePolicyGroup

Clones an existing policy to quickly create a policy.

## Configuration Group

**API**

**Title**

**Description**

[CreateConfigGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createconfiggroup)

Create Configuration Group

Creates a configuration group. A configuration group contains the settings for scheduled tasks on cloud desktops.

[ModifyConfigGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyconfiggroup)

ModifyConfigGroup

Modifies the basic information of a configuration group.

[DeleteConfigGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deleteconfiggroup)

DeleteConfigGroup

Deletes a configuration group.

[BindConfigGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-bindconfiggroup)

BindConfigGroup

Binds a configuration group to resources.

[UnbindConfigGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-unbindconfiggroup)

UnbindConfigGroup

Unbinds a configuration group from resources.

[DescribeConfigGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeconfiggroup)

Query the configuration group list

Query the configuration group list information.

[ModifyTimerGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifytimergroup)

Modify Configuration Group Settings

Updates the settings of a timer group, such as its scheduled task configurations.

[DescribeTimerGroup](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describetimergroup)

Query configuration group details

Queries the details of a specified configuration group.

[DescribeGlobalTimerBatches](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeglobaltimerbatches)

Query the list of scheduled task execution batches

Query the batch information of scheduled task execution history and return the aggregated execution results.

[DescribeGlobalTimerRecords](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeglobaltimerrecords)

Query global scheduled task execution records

Queries scheduled task execution records for cloud desktops across all regions.

## MFA

**API**

**Title**

**Description**

[DeleteVirtualMFADevice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deletevirtualmfadevice)

DeleteVirtualMFADevice

Removes a virtual multi-factor authentication (MFA) device that is associated with an Active Directory (AD) account.

[DescribeVirtualMFADevices](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describevirtualmfadevices)

DescribeVirtualMFADevices

Retrieves information about virtual multi-factor authentication (MFA) devices associated with Active Directory (AD) accounts.

[UnlockVirtualMFADevice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-unlockvirtualmfadevice)

UnlockVirtualMFADevice

Unlocks a virtual multi-factor authentication (MFA) device that is in the LOCKED state.

[LockVirtualMFADevice](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-lockvirtualmfadevice)

LockVirtualMFADevice

Locks a multi-factor authentication (MFA) device that is in the NORMAL state.

## Image Upgrade OTA

**API**

**Title**

**Description**

[DescribeFotaTasks](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describefotatasks)

DescribeFotaTasks

Queries a list of update tasks.

[DescribeFotaPendingDesktops](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describefotapendingdesktops)

DescribeFotaPendingDesktops

Queries information about the cloud computers whose images can be and are pending to be updated to the specified version.

[UpdateFotaTask](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-updatefotatask)

UpdateFotaTask

Enables or disables the auto-push feature for an image update task.

[ApproveFotaUpdate](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-approvefotaupdate)

ApproveFotaUpdate

Allows you to upgrade images.

## SSO Settings

**API**

**Title**

**Description**

[SetOfficeSiteSsoStatus](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setofficesitessostatus)

SetOfficeSiteSsoStatus

Enables or disables single sign-on (SSO) for an office network.

[SetIdpMetadata](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setidpmetadata)

SetIdpMetadata

Uploads the metadata of a Security Assertion Markup Language (SAML) 2.0-based identity provider (IdP).

[SetDirectorySsoStatus](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-setdirectoryssostatus)

SetDirectorySsoStatus

Enables or disables the single sign-on (SSO) feature for an Active Directory (AD) account-based office network.

[GetOfficeSiteSsoStatus](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-getofficesitessostatus)

GetOfficeSiteSsoStatus

Queries whether single sign-on (SSO) is enabled for an office network.

[GetSpMetadata](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-getspmetadata)

GetSpMetadata

Obtains the metadata of a Security Assertion Markup Language (SAML) 2.0-based service provider (SP).

## Cloud Assistant

**API**

**Title**

**Description**

[StopInvocation](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-stopinvocation)

StopInvocation

Stop a process that executes the Cloud Assistant script in one or more cloud computers.

[DescribeInvocations](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeinvocations)

Query the execution list and status of Cloud Assistant scripts

Used to query the execution list and status of Cloud Assistant scripts.

[RunCommand](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-runcommand)

RunCommand

Runs a PowerShell or Batch script on one or more Elastic Cloud Desktop (ECD) instances that run Windows.

## Label

**API**

**Title**

**Description**

[ListTagResources](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listtagresources)

ListTagResources

Queries the tags of cloud computers.

[TagResources](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-tagresources)

TagResources

Adds tags to cloud computers. This allows you to filter and manage cloud computers by tag.

[UntagResources](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-untagresources)

UntagResources

Removes tags from cloud computers. After you remove a tag, if the tag is not added to a cloud computer, the tag is automatically deleted.

## Audit

**API**

**Title**

**Description**

[DescribeClientEvents](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeclientevents)

DescribeClientEvents

Query operation logs for end users. Events include starting or stopping a WUYING Workspace and disconnecting a session.

[ExportClientEvents](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-exportclientevents)

ExportClientEvents

Exports events that occur on a cloud desktop from an Alibaba Cloud Workspace client.

[DescribeRecordings](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describerecordings)

DescribeRecordings

Queries the details of screen recording files.

[DescribeRecordFile](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describerecordfile)

Query the list of screen recording files across all regions

Retrieve the list of screen recording files across all regions.

[DescribeGlobalDesktopRecords](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeglobaldesktoprecords)

Query global desktops and related usage records

Queries basic information about all recently created Cloud Desktops and their usage duration records.

## Endpoint Management

**API**

**Title**

**Description**

## Monitoring and O&M

**API**

**Title**

**Description**

[DescribeDesktopSessions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktopsessions)

Query cloud desktop session details

Queries the detailed session information for cloud computers.

[DescribeDesktopGroupSessions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describedesktopgroupsessions)

DescribeDesktopGroupSessions

Queries cloud computer shares.

[DescribeSessionStatistic](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describesessionstatistic)

DescribeSessionStatistic

Queries the session statistics of a region.

[DisconnectDesktopSessions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-disconnectdesktopsessions)

DisconnectDesktopSessions

Disconnects cloud computer sessions.

[ApplyCoordinationForMonitoring](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-applycoordinationformonitoring)

ApplyCoordinationForMonitoring

Applies for coordination monitoring. This operation is mainly used in administrator assistance scenarios and education scenarios.

[GetCoordinateTicket](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-getcoordinateticket)

GetCoordinateTicket

Get the stream collaboration credentials for remote assistance or shared collaboration.

[CancelCoordinationForMonitoring](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-cancelcoordinationformonitoring)

CancelCoordinationForMonitoring

Cancels a remote assistance request to the end user.

[ApplyCoordinatePrivilege](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-applycoordinateprivilege)

ApplyCoordinatePrivilege

Applies for the coordinate permissions.

[RevokeCoordinatePrivilege](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-revokecoordinateprivilege)

RevokeCoordinatePrivilege

Revokes the coordinate permissions.

## Data Transfer Plan

**API**

**Title**

**Description**

[CreateBandwidthResourcePackages](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createbandwidthresourcepackages)

CreateBandwidthResourcePackages

Creates data transfer plans.

## File Transfer

**API**

**Title**

**Description**

[ListTransferFileDownloadUrl](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listtransferfiledownloadurl)

Obtain the download URL of the transfer file

Retrieves the download URLs for transferred files.

[ListTransferFiles](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listtransferfiles)

ListTransferFiles

Queries the file information of a file transmission task.

[TransferTaskApprovalCallback](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-transfertaskapprovalcallback)

TransferTaskApprovalCallback

Queries the transmission and approval result for a submitted file.

## Application

**API**

**Title**

**Description**

[ListInstalledApps](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-listinstalledapps)

ListInstalledApps

Queries applications installed on a cloud computer.

## Report

**API**

**Title**

**Description**

[DescribeEcdReportTasks](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeecdreporttasks)

DescribeEcdReportTasks

Queries data report export tasks.

[CreateEcdReportTask](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createecdreporttask)

CreateEcdReportTask

Creates a data report export task.

## Others

**API**

**Title**

**Description**

[CreateQosRule](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-createqosrule)

CreateQosRule

Create a rate-limiting rule

[DeleteQosRules](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-deleteqosrules)

DeleteQosRules

Delete a rate-limiting rule.

[DescribeQosRules](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeqosrules)

DescribeQosRules

Queries rate limiting rules.

[ModifyQosEntries](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyqosentries)

ModifyQosEntries

Modifies the resources associated with a Quality of Service (QoS) rule.

[ModifyQosRule](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-modifyqosrule)

ModifyQosRule

You can modify a rate limiting rule.
