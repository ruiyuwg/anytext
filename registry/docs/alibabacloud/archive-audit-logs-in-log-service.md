Bastionhost supports archiving audit logs, which are operations and maintenance (O&M) records, to Simple Log Service (SLS). After you configure log archiving, Bastionhost automatically forwards audit logs to SLS in real time. This topic describes how to archive audit logs to SLS.

**Note**

Only audit logs that are generated after you complete the configuration can be archived. Audit logs that were created before the configuration cannot be archived.

## Background information

Audit logs are the operation records of Bastionhost users and include session command audits and operation logs. By default, Bastionhost retains logs for only 180 days. To retain audit logs for a longer period, you can archive them to SLS. After you archive the logs to SLS, you can query and analyze them, customize the retention period, and forward them to third-party platforms, such as Splunk, using SLS. For more information, see [Query and analysis](/help/en/sls/index-and-query/) or [Alibaba Cloud Simple Log Service Splunk Add-on](/help/en/sls/ship-data-to-splunk-by-using-the-splunk-add-on-for-log-service-ship-data-to-splunk-by-using-the-splunk-add-on-for-log-service).

**Note**

Archiving audit logs to SLS does not affect the logs stored in Bastionhost. You can still view audit logs on the **Session Audit** page. For more information, see [Search for sessions and view session details](/help/en/bh/bastionhost/user-guide/search-for-sessions-and-view-session-details#task-2324917).

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  Follow the on-screen instructions to activate Simple Log Service.
    
3.  Go to the [Log Audit Service](https://sls.console.alibabacloud.com/lognext/app/audit/audit_global_config) page.
    
    **Important**
    
    Starting January 21, 2025, the entry point to the Log Audit Service console will be removed. However, it will remain visible to users who activated the service before this date. New users who need to use the old version can go to the new Log Audit Service and use its **Return To Old Version** feature. For more information, see [Log Audit (Old Version)](/help/en/sls/log-audit-service/).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9960788571/p1012095.png)
    
4.  In the navigation pane on the left, choose **Access to Cloud Products** > **Global Configurations**. Then, configure the audit information as follows.
    
    1.  From the **Region Of Central Project** drop-down list, select the destination region for centralized log storage.
        
    2.  In the list of cloud products, turn on the switch for Bastionhost **Operation Logs** and set the retention period under **Storage Method**.![全局配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9365296571/p508193.png)
        
5.  View the Bastionhost audit logs.
    
    1.  In the navigation pane on the left, click the ![审计查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7073638161/p186709.png) icon.
        
    2.  Choose **Centralization** > **Bastionhost** to view the audit logs.
        
        The following table describes the log fields for Bastionhost audit logs that are forwarded to Simple Log Service (SLS).
        
    
    **SLS log field**
    
    **Description**
    
    \_\_topic\_\_
    
    The log topic. The value is fixed to \`bastionhost\`.
    
    owner\_id
    
    The Alibaba Cloud account ID.
    
    region
    
    The region where the Bastionhost instance resides.
    
    content
    
    The content of an operation, such as a character command or a file transfer.
    
    event\_type
    
    The event type. For more information, see [event\_type details](#79d26d8fa6b0t).
    
    instance\_id
    
    The ID of the Bastionhost instance.
    
    resource\_address
    
    The IP address of the O&M asset.
    
    resource\_name
    
    The name of the O&M asset.
    
    result
    
    The result of an operation, such as a character command or a file transfer.
    
    session\_id
    
    The session ID. This is the unique identifier for a session.
    
    user\_client\_ip
    
    The source IP address of the user. This is the IP address used to access Bastionhost.
    
    user\_id
    
    The Bastionhost user ID. This is the unique identifier for a user.
    
    user\_name
    
    The name of the Bastionhost user.
    

## **\`event\_type\` details**

**Event**

**Description**

db.oracle.req

Oracle database request event

db.mysql.req

MySQL database request event

db.pgsql.req

PostgreSQL database request event

cmd.Command

Command character

cmd.Command.policy

Command processed by a control policy

graph.Text

Graphical text

graph.Keyboard

Graphical keyboard event

file.Upload

Upload file

file.Download

Download file

file.Rename

Rename file

file.Delete

Delete file

file.DeleteDir

Delete directory

file.CreateDir

Create directory

login.CSLogin

User CS logon

Session.session

A session

**The following events are supported only in V3.2.43 and later**

login.CSPasswordLogin

CS username and password logon authentication

login.CSResetPassword

CS password change

login.PortalPasswordLogin

Portal user username and password logon authentication

user.PortalResetPassword

Portal password change

user.PortalClearOTP

Portal mobile OTP token purge

user.PortalBindOTP

Portal mobile OTP token binding

user.PortalLogout

Portal logoff

login.CSTwoFactorLogin

CS two-factor authentication

login.PortalTwoFactorLogin

Portal two-factor authentication

user.CreateUser

Create user

user.DeleteUser

Delete user

user.ModifyUser

Edit user

user.LockUser

Lock user

user.UnlockUser

Unlock user

user.CreateUserPublicKey

Add user SSH public key

user.ModifyUserPublicKey

Update user SSH public key

user.DeleteUserPublicKey

Delete user SSH public key

user.ExportUsers

Export users

user.SyncRemoteUserDN

Sync remote user DN

user.NotifyUserOperationAddress

Modify user logon restrictions

user.SetUserUSBKey

Bind user USBKey certificate

user.ResetUserUSBKey

Detach user USBKey certificate

user.CreateUserGroup

Create user group

user.ModifyUserGroup

Edit user group

user.DeleteUserGroup

Delete user group

user.AddUsersToGroup

Add members to a user group

user.RemoveUsersFromGroup

Remove members from a user group

asset.CreateHost

Create host

asset.ModifyHost

Edit host

asset.DeleteHost

Delete host

asset.EnableHost

Enable host

asset.DisableHost

Disable host

asset.ResetHostsFingerPrint

Update host fingerprint

asset.RefreshECSHostStatus

Check ECS host status

asset.RefreshKMSSecretsForECS

Check and update the status of KMS credentials for an ECS host

asset.RefreshAssetNetworkStatus

Check asset network status

asset.ExportHosts

Export hosts

asset.CreateDatabase

Create database asset

asset.ModifyDatabase

Modify database asset

asset.DeleteDatabase

Delete database asset

asset.EnableDatabase

Enable database asset

asset.DisableDatabase

Disable database asset

asset.RefreshRDSDatabaseStatus

Check RDS database asset status

asset.ExportDatabases

Export database assets

asset.CreateAssetGroup

Create asset group

asset.ModifyAssetGroup

Edit asset group

asset.DeleteAssetGroup

Delete asset group

asset.AddHostsToGroup

Add host members to an asset group

asset.RemoveHostsFromGroup

Remove host members from an asset group

asset.AddDatabasesToGroup

Add database members to an asset group

asset.RemoveDatabasesFromGroup

Remove database members from an asset group

asset.AddAppsToGroup

Add application members to an asset group

asset.RemoveAppsFromGroup

Remove application members from an asset group

asset.CreateHostAccount

Create host account

asset.ModifyHostAccount

Edit host account

asset.DeleteHostAccount

Delete host account

asset.ResetHostAccountCredential

Purge host account credential

asset.CreateDatabaseAccount

Create database account

asset.ModifyDatabaseAccount

Modify database account

asset.DeleteDatabaseAccount

Delete database account

asset.CreateAssetSource

Create third-party asset source

asset.ModifyAssetSource

Edit third-party asset source

asset.DeleteAssetSource

Delete third-party asset source

authorization.AttachHostAccountsToUser

Grant a user permissions to use host accounts

authorization.DetachHostAccountsFromUser

Revoke a user's permissions on host accounts

authorization.AttachHostAccountsToUserGroup

Grant a user group permissions to use host accounts

authorization.DetachHostAccountsFromUserGroup

Revoke a user group's permissions on host accounts

authorization.AttachAssetGroupAccountsToUser

Grant a user permissions to use host account names

authorization.DetachAssetGroupAccountsFromUser

Revoke a user's permissions on host account names

authorization.AttachAssetGroupAccountsToUserGroup

Grant a user group permissions to use host account names

authorization.DetachAssetGroupAccountsFromUserGroup

Revoke a user group's permissions on host account names

asset.AttachDatabaseAccountsToUser

Grant a user permissions to use database accounts

asset.DetachDatabaseAccountsFromUser

Revoke a user's permissions on database accounts

asset.AttachDatabaseAccountsToUserGroup

Grant a user group permissions to use database accounts

asset.DetachDatabaseAccountsFromUserGroup

Revoke a user group's permissions on database accounts

policy.CreatePolicy

Create control policy

policy.DeletePolicy

Delete control policy

policy.ModifyPolicy

Update control policy

policy.AttachUsersToPolicy

Associate a control policy with users

policy.DetachUsersFromPolicy

Detach users from a control policy

policy.AttachUserGroupsToPolicy

Associate a control policy with user groups

policy.DetachUserGroupsFromPolicy

Detach user groups from a control policy

policy.AttachHostsToPolicy

Associate a control policy with hosts

policy.DetachHostsFromPolicy

Detach hosts from a control policy

policy.AttachAssetGroupsToPolicy

Associate a control policy with host groups

policy.DetachAssetGroupsFromPolicy

Detach host groups from a control policy

policy.CreateDatabaseMaskPolicy

Create data masking policy

policy.ModifyDatabaseMaskPolicy

Modify data masking policy

policy.DeleteDatabaseMaskPolicy

Delete data masking policy

policy.AttachDatabasesToPolicy

Associate a control policy with databases

policy.DetachDatabasesFromPolicy

Detach databases from a control policy

policy.AttachAppsToPolicy

Associate a control policy with applications

policy.DetachAppsFromPolicy

Detach applications from a control policy

policy.SetPolicyUserScope

Set the user scope for a control policy

policy.SetPolicyAssetScope

Set the asset scope for a control policy

policy.SetHostAccountToPolicy

Set the host accounts for a control policy

policy.SetDatabaseAccountToPolicy

Set the database accounts for a control policy

policy.SetAppAccountToPolicy

Set the application accounts for a control policy

policy.SetAssetGroupAccountNamesToPolicy

Set the asset group accounts for a control policy

policy.GenerateApproveCommand

Generate a command approval record

policy.CancelApproveCommand

Cancel a command approval

policy.AcceptApproveCommand

Approve a command

policy.RejectApproveCommand

Deny a command approval

policy.GenerateApproveCommand

Create a command approval

task.CreatePasswordTask

Create a password change task

task.ModifyPasswordTask

Update a password change task

task.DeletePasswordTask

Delete a password change task

task.AttachHostAccountsToPasswordTask

Associate host accounts with a password change task

task.DetachHostAccountsFromPasswordTask

Detach host accounts from a password change task

task.ExecutePasswordTask

Execute a password change task

task.CancelPasswordTask

Cancel a password change task

task.EnablePasswordTask

Enable a password change task

task.ExportPasswordTaskHistory

Export password change task history

system.DeleteAuditSessionVideo

Delete a session recording file

system.ModifyInstanceTwoFactor

Modify two-factor authentication configuration

system.InterruptAuditSession

Block a session

system.ImportBastionHostConfig

Import a configuration backup

system.ExportBastionHostConfig

Export a configuration backup

system.ModifyInstanceLDAPAuthServer

Modify LDAP authentication server configuration

system.ModifyInstanceADAuthServer

Modify AD authentication server configuration

system.AddInstanceMember

Add an instance RD member account

system.RemoveInstanceMember

Remove an instance RD member account

system.ModifyInstanceTLSConfig

Modify TLS security configuration

system.ModifyDataEncryptionConfig

Modify data encryption method configuration

system.VerifyUserInfoSignature

Verify user key information signature

system.BindIDaaSInstance

Bind an IDaaS instance

system.UnbindIDaaSInstance

Unbind an IDaaS instance

system.ModifyInstanceLoginPolicy

Modify user logon and user locking policy configurations

system.ModifyInstanceUserPolicy

Modify user password security and user status configurations

system.CreateInstanceADAuthServer

Create an instance AD authentication server

system.DeleteInstanceADAuthServer

Delete an instance AD authentication server

system.ModifyInstanceIDaaSConfig

Modify the configuration of a bound IDaaS instance

system.ModifyInstanceOperationConfig

Modify instance O&M configuration

system.ModifyInstanceAssetPolicy

Modify the connectivity status check interval configuration

system.AddInstanceNotificationReceiveUser

Add an alert administrator for message notifications

system.RemoveInstanceNotificationReceiveUser

Remove an alert administrator for message notifications

system.ModifyInstanceNotificationConfig

Modify message notification configuration

system.ModifyInstanceStorePolicy

Modify the automatic deletion configuration for session recordings

system.ModifyInstanceSessionPolicy

Modify the automatic cleanup configuration for the session list

audit.DownloadOperationEventsBackup

Download O&M event log backup

audit.ExportOperationAuditReport

Export O&M report

audit.DownloadAutoOperationTaskOutput

Download automated O&M task results

asset.CreateHostShareKey

Create shared key

asset.ModifyHostShareKey

Edit shared key

asset.DeleteHostShareKey

Delete shared key

asset.AttachHostAccountsToHostShareKey

Associate a shared key with host accounts

asset.DetachHostAccountsFromHostShareKey

Detach host accounts from a shared key

asset.CreateNetworkDomain

Create network domain

asset.ModifyNetworkDomain

Edit network domain

asset.DeleteNetworkDomain

Delete network domain

asset.MoveHostsToNetworkDomain

Change the network domain of hosts

asset.MoveDatabasesToNetworkDomain

Change the network domain of databases

authorization.CreateRule

Create authorization rule

authorization.ModifyRule

Modify authorization rule

authorization.DeleteRule

Delete authorization rule

authorization.EnableRule

Enable authorization rule

authorization.DisableRule

Disable authorization rule

authorization.ExportAuthorizationRelation

Export authorization relationships

operation.CreateOperationTicket

Create an O&M approval ticket

operation.AcceptOperationTicket

Approve an O&M request

operation.RejectOperationTicket

Deny an O&M request

operation.CancelOperationTicket

Cancel an O&M request

task.CreateAutoOperationTask

Create an O&M task

task.ModifyAutoOperationTask

Modify an O&M task

task.DeleteAutoOperationTask

Delete an O&M task

task.StartAutoOperationTask

Start an O&M task

task.StopAutoOperationTask

Stop an O&M task

task.CreateAutoOperationScript

Create an O&M script

task.ModifyAutoOperationScript

Modify an O&M script

task.DeleteAutoOperationScript

Delete an O&M script

task.AcceptOperationTaskApproval

Approve an automated O&M task ticket

task.RejectOperationTaskApproval

Deny an automated O&M task ticket

task.CancelAutoOperationTask

Cancel an O&M task request

asset.ImportKMSSecretsForHost

Import KMS credentials

operation.ConnectAsset

Connect to an asset

operation.LoginAsset

Log on to an asset

operation.LogoutAsset

Log off from an asset

operation.SetOperationSSOConfig

Modify single sign-on (SSO) O&M terminal settings

operation.ModifyOperationUserProfile

O&M user modifies personal information

asset.CreateAppServer

Create application server

asset.ModifyAppServer

Modify application server

asset.DeleteAppServers

Delete application servers

asset.SyncAppServerAccount

Sync application server accounts

asset.CreateAppTool

Create remote client tool

asset.ModifyAppTool

Modify remote client tool

asset.DeleteAppTools

Delete remote client tools

asset.CreateApp

Create application

asset.ModifyApp

Modify application

asset.DeleteApps

Delete applications

asset.DeleteApp

Delete a single application

asset.CreateAppAccount

Create application account

asset.ModifyAppAccount

Modify application account

asset.DeleteAppAccounts

Delete application accounts

asset.AttachAppAccountsToUser

Grant a user permissions on application accounts

asset.DetachAppAccountsFromUser

Revoke a user's permissions on application accounts

asset.AttachAppAccountsToUserGroup

Grant a user group permissions on application accounts

asset.DetachAppAccountsFromUserGroup

Revoke a user group's permissions on application accounts
