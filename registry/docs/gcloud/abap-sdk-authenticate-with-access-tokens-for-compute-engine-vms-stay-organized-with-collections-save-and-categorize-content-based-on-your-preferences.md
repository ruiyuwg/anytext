-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [SAP on Google Cloud](https://docs.cloud.google.com/sap/docs)
-   [Guides](https://docs.cloud.google.com/sap/docs/overview-of-sap-on-google-cloud)

Send feedback

# Authenticate with access tokens for Compute Engine VMs Stay organized with collections Save and categorize content based on your preferences.

On-premises or any cloud edition v1.12keyboard\_arrow\_down

-   [SAP BTP edition v1.1](/sap/docs/abap-sdk/btp/latest/authentication-access-token)
-   [On-premises or any cloud edition v1.12](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/authentication-access-token)

This document shows how to set up authentication to access Google Cloud APIs when your SAP system is hosted on a Compute Engine VM instance.

If your SAP system is running on a host that is managed by SAP through the [SAP RISE](https://www.sap.com/hk/products/erp/rise.html) program, then for authentication to Google Cloud, you need to use [Authenticate with JWT](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/authentication-jwt) or [Authenticate with WIF](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/authentication-wif).

For information about other supported authentication methods, see [Authentication overview for the on-premises or any cloud edition of ABAP SDK for Google Cloud](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/authentication).

## Set up authentication

To set up authentication, perform the following steps:

1.  In the Google Cloud console, enable the [IAM Service Account Credentials API](https://console.cloud.google.com/project/_/apis/library/iamcredentials.googleapis.com) for your Google Cloud project that requires authentication. Along with the IAM Service Account Credentials API, you need to enable any other [supported APIs](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/install-config#sdk_overview) that you plan to access using the SDK.
    
    [Go to API library](https://console.cloud.google.com/project/_/apis/library/iamcredentials.googleapis.com)
    
    For information about how to enable Google Cloud APIs, see [Enabling APIs](/docs/getting-started#enabling_apis).
    
2.  In the Google Cloud console, create an IAM service account for the host VM instance.
    
    [Go to Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
    
    For information about how to create a service account, see [Create a service account](/iam/docs/service-accounts-create#creating).
    
3.  Grant the [`Service Account Token Creator`](/compute/docs/access/iam#iam.serviceAccountTokenCreator) role to the service account. For instructions, see [Grant a single role](/iam/docs/granting-changing-revoking-access#grant-single-role).
    
4.  Attach the service account to the VM instance where your SAP workload is running. Also, set the VM's access scope to `cloud-platform`.
    
    -   If you specify the service account by using the Google Cloud console, then the VM's access scope automatically defaults to the `cloud-platform` scope.
    -   If you specify the service account by using the Google Cloud CLI or the Compute Engine API, then you need to set the API access scope to `https://www.googleapis.com/auth/cloud-platform` (often described as `Allow full access to all Cloud APIs`).
        
        For instructions, see [Create a VM and attach the service account](/compute/docs/access/create-enable-service-accounts-for-instances#using).
        
        After updating the scope, restart the VM. If you have multiple VM instances for the same SAP installation, then you must complete this step on all those VM instances.
        
5.  In the Google Cloud console, create a dedicated IAM service account to access Google Cloud APIs.
    
    [Go to Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
    
    For instructions, see [Create a service account](/iam/docs/service-accounts-create#creating).
    
6.  Grant the service account the required IAM roles to access the API functionality. To understand the role requirement for Google Cloud APIs, see the individual API documentation and follow the principle of [least privilege](/iam/docs/using-iam-securely#least_privilege). For more information about API specific predefined roles, see [Find IAM roles for Google Cloud APIs](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/install-config#iam-role-finder).
    
7.  If you created the service account in a different project than the project that contains the Google Cloud APIs, then you must perform additional steps for the service account setup. For more information, see [Set up service accounts in a cross-project environment](#svc_acct_cross-project_environment).
    
8.  In the SAP system, configure the client key:
    
    1.  In SAP GUI, execute the transaction code `/GOOG/SDK_IMG`.
        
        Alternatively, execute the transaction code `SPRO`, and then click **SAP Reference IMG**.
        
    2.  Click **ABAP SDK for Google Cloud \> Basic Settings \> Configure Client Key**.
        
    3.  Click **New Entries**.
        
    4.  Enter values for the following fields:
        
        Field
        
        Description
        
        **Google Cloud Key Name**
        
        Specify a name of the client key configuration. For example, `TEST_PUBSUB`.
        
        **Google Cloud Service Account Name**
        
        Specify the name of the service account to which you have granted permissions to access Google Cloud APIs. For example, `sap-example-svc-acct@example-project-123456.iam.gserviceaccount.com`.
        
        If the host VM of your SAP system that contains the SDK is in a different project than the one with the Google Cloud APIs enabled, then specify the service account which is used for accessing Google Cloud APIs. For more information, see [Set up service accounts in a cross-project environment](#svc_acct_cross-project_environment).
        
        **Google Cloud Scope**
        
        Specify the API access scope, `https://www.googleapis.com/auth/cloud-platform`.
        
        **Google Cloud Project Identifier**
        
        Specify the ID of the Google Cloud project that contains your target APIs.
        
        **Command name**
        
        Leave this field blank.
        
        **Authorization Class**
        
        Specify the authorization class, `/GOOG/CL_AUTH_GOOGLE`.
        
        **Token Caching**
        
        The flag that determines whether or not the access tokens retrieved from Google Cloud are cached.
        
        We recommend that you enable token caching after you are done configuring and testing your connection to Google Cloud. For more information about token caching, see [Enable token caching](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/install-config#token_caching).
        
        **Token Refresh Seconds**
        
        The amount of time, in seconds, before an access token expires and must be refreshed. The default value is `3500`.
        
        **Authorization Parameter 1**
        
        Leave this field blank.
        
        **Authorization Parameter 2**
        
        Leave this field blank.
        
    5.  Save the new entry.
        
9.  In the SAP system, create new RFC destinations for the APIs that you plan to consume using the ABAP SDK for Google Cloud.
    
    For information about creating RFC destinations, see [RFC destinations](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/install-config#create_rfc_destinations).
    
10.  In the SAP system, configure the service mapping table for IAM API, and other APIs that you plan to consume using the ABAP SDK for Google Cloud.
     
     1.  In SAP GUI, execute the transaction code `/GOOG/SDK_IMG`.
         
         Alternatively, execute the transaction code `SPRO`, and then click **SAP Reference IMG**.
         
     2.  Click **ABAP SDK for Google Cloud \> Basic Settings \> Configure Service Mapping**.
         
     3.  Click **New Entries**.
         
     4.  Specify RFC destinations for IAM API and other APIs, for example, `Pub/Sub API v1`.
         
         Name
         
         Service Name
         
         RFC Destination
         
         **Google Cloud Key Name**
         
         `iamcredentials.googleapis.com`
         
         `ZGOOG_IAMCREDENTIALS`
         
         **Google Cloud Key Name**
         
         `pubsub:v1`
         
         `ZGOOG_PUBSUB_V1`
         
         **Note:** You must create your own RFC destinations using the sample RFC destinations as templates.
         
     5.  Save the new entry.
         
11.  In the SAP system, validate the authentication configuration. For more information, see [Validate authentication configuration](#validate-auth-config).
     

### Set up service accounts in a cross-project environment

In some scenarios, the host VM of your SAP system, which contains the SDK, needs to access Google Cloud APIs located in a different Google Cloud project. A common example is a disaster recovery (DR) environment, where the host VM of a standby SAP system in one project must take over and access resources in the primary project.

To enable cross-project access, the service account attached to the SAP host VM (the "caller") must have permission to impersonate the service account that can access the Google Cloud APIs (the "identity being impersonated").

To clarify the roles in this cross-project setup, consider the following components:

Component

Example name

Description

**Source project**

`dr-site-proj`

The Google Cloud project where the calling SAP system's host VM is running.

**Source service account**

`vm-sa@dr-site-proj.iam.gserviceaccount.com`

The service account attached to the VM in the source project. This is the "caller".

**Target project**

`main-site-proj`

The Google Cloud project containing the target Google Cloud APIs and resources.

**Target service account**

`api-access-sa@main-site-proj.iam.gserviceaccount.com`

The service account that has the required IAM roles to access the APIs in the target project. This is the "identity being impersonated".

To configure cross-project impersonation, follow these steps:

1.  Configure the source VM access scopes: In the source project (`dr-site-proj`), make sure that the VM instance has the correct scopes to interact with Google Cloud APIs.
    
    1.  In the Google Cloud console, navigate to the Compute Engine **VM instances** page in your source project (`dr-site-proj`).
    2.  Stop the VM instance.
    3.  Edit the VM instance.
    4.  In the **Service Account** section, under **Access scopes**, select **Allow full access to all Cloud APIs** (`https://www.googleapis.com/auth/cloud-platform`).
    5.  Save the changes.
    6.  Restart the VM instance.
2.  Grant impersonation permission to the source service account: In the target project (`main-site-proj`), you must grant the source service account the permission to generate access tokens for the target service account.
    
    1.  In the Google Cloud console, switch to the target project (`main-site-proj`).
    2.  Navigate to the **IAM & Admin \> Service Accounts** page.
    3.  Select the **target** service account (`api-access-sa@main-site-proj.iam.gserviceaccount.com`).
    4.  Click the **Principals with access** tab.
    5.  Click **Grant Access**.
    6.  In the **New principals** field, enter the full email address of your **source** service account (`vm-sa@dr-site-proj.iam.gserviceaccount.com`).
    7.  In the **Select a role** drop-down list, search for and select **Service Account Token Creator** (`roles/iam.serviceAccountTokenCreator`).
    8.  Click **Save**.
3.  Configure the client key in SAP: In your SAP system, configure the client key to use the target service account and target project.
    
    1.  In SAP GUI, execute the transaction code `/GOOG/SDK_IMG`.
        
        Alternatively, execute the transaction code `SPRO`, and then click **SAP Reference IMG**.
        
    2.  Click **ABAP SDK for Google Cloud \> Basic Settings \> Configure Client Key**.
    3.  Create or update your client key configuration with the following settings:
        -   **Google Cloud Service Account Name**: Enter the email address of your **target** service account (`api-access-sa@main-site-proj.iam.gserviceaccount.com`).
        -   **Google Cloud Project Identifier**: Enter the ID of your **target** project (`main-site-proj`).

For detailed guidance on this topic, see the blog post, [Mastering cross-project service account impersonation in Google Cloud](https://medium.com/google-cloud/mastering-cross-project-service-account-impersonation-in-google-cloud-265f6f352cf2).

## Validate HTTP and HTTPS ports in Internet Communication Manager (ICM)

For SAP systems hosted on Google Cloud, the [VM metadata](/compute/docs/metadata/overview) is stored on a metadata server, which is only accessible through an HTTP port. HTTP port activation is required for authentication. Therefore, when your SAP system is hosted on a Compute Engine VM instance, you must validate that an HTTP port is active to access VM metadata and enable authentication. You must also validate that an HTTPS port is active for subsequent API calls.

To validate the HTTP and HTTPS ports, do the following:

1.  In the SAP GUI, enter transaction code `SMICM`.
2.  On the menu bar, click **Goto** \> **Services**. A green check in the **Actv** column indicates that the HTTP and HTTPS ports are active.

For information about configuring the HTTP and HTTPS ports, see [HTTP(S) Settings in ICM](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/4c/5bdafa97817511e10000000a42189b/frameset.htm).

## Validate authentication configuration

To validate the authentication configuration for its readiness, do the following:

1.  In SAP GUI, execute the transaction code `/GOOG/SDK_IMG`.
    
    Alternatively, execute the transaction code `SPRO`, and then click **SAP Reference IMG**.
    
2.  Click **ABAP SDK for Google Cloud \> Utilities \> Validate Authentication Configuration**.
    
3.  Enter the client key name.
    
4.  Click **Execute**.
    
    A green check in the **Result** column indicates that all configurations steps are completed successfully.
    

## Get support

If you need help resolving problems with the on-premises or any cloud edition of ABAP SDK for Google Cloud, then do the following:

-   Refer to the [on-premises or any cloud edition of ABAP SDK for Google Cloud troubleshooting guide](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/troubleshooting).
    
-   Ask your questions and discuss ABAP SDK for Google Cloud with the community on [Cloud Forums](https://discuss.google.dev/tags/c/google-cloud/14/abap-sdk).
    
-   Collect all available [diagnostic information](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/getting-support-diag-info) and contact Cloud Customer Care. For information about contacting Customer Care, see [Getting support for SAP on Google Cloud](/sap/docs/getting-support).
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
