-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Developer Connect](https://docs.cloud.google.com/developer-connect/docs)
-   [Guides](https://docs.cloud.google.com/developer-connect/docs/overview)

Send feedback

# Connect to GitLab Enterprise Stay organized with collections Save and categorize content based on your preferences.

This page describes how to create connections to GitLab Enterprise and create links to GitLab Enterprise repositories. You can complete these tasks using the Google Cloud console, or the Google Cloud CLI.

These instructions are for application developers, platform administrators, and security managers who want to use GitLab Enterprise source code repositories with Google. Specifically, you can use GitLab Enterprise repositories with [Gemini Code Assist](/gemini/docs/codeassist/code-customization-overview).

**Note:** Developer Connect also supports GitLab Community Edition. The steps in this document are for both GitLab Enterprise repositories and GitLab Community Edition repositories.

To learn more about Developer Connect, see [Developer Connect overview](/developer-connect/docs/overview).

## Before you begin

-   [Sign in](https://accounts.google.com/Login) to your Google Account.
    
    If you don't already have one, [sign up for a new account](https://accounts.google.com/SignUp).
    
-   In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
    
    **Roles required to select or create a project**
    
    -   **Select a project**: Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
    -   **Create a project**: To create a project, you need the Project Creator role (`roles/resourcemanager.projectCreator`), which contains the `resourcemanager.projects.create` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    **Note**: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
    
    [Go to project selector](https://console.cloud.google.com/projectselector2/home/dashboard)
    
-   [Verify that billing is enabled for your Google Cloud project](/billing/docs/how-to/verify-billing-enabled#confirm_billing_is_enabled_on_a_project).
    
-   Enable the Developer Connect API.
    
    **Roles required to enable APIs**
    
    To enable APIs, you need the Service Usage Admin IAM role (`roles/serviceusage.serviceUsageAdmin`), which contains the `serviceusage.services.enable` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    [Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=developerconnect.googleapis.com)
    

-   In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
    
    **Roles required to select or create a project**
    
    -   **Select a project**: Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
    -   **Create a project**: To create a project, you need the Project Creator role (`roles/resourcemanager.projectCreator`), which contains the `resourcemanager.projects.create` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    **Note**: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
    
    [Go to project selector](https://console.cloud.google.com/projectselector2/home/dashboard)
    
-   [Verify that billing is enabled for your Google Cloud project](/billing/docs/how-to/verify-billing-enabled#confirm_billing_is_enabled_on_a_project).
    
-   Enable the Developer Connect API.
    
    **Roles required to enable APIs**
    
    To enable APIs, you need the Service Usage Admin IAM role (`roles/serviceusage.serviceUsageAdmin`), which contains the `serviceusage.services.enable` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    [Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=developerconnect.googleapis.com)
    

Enabling Developer Connect also enables the [Secret Manager API](/secret-manager/docs/overview).

3.  Ensure that you have access to an account on [GitLab Enterprise.](https://about.gitlab.com)
    
    To help keep your team's work secure, we recommend that you complete the tasks in this guide using a [service account](https://docs.gitlab.com/ee/user/profile/service_accounts.html) or an account shared by your team, not a personal account.
    
4.  Ensure that you own a GitLab Enterprise repository, or have admin-level permissions on a shared repository.
5.  Optional: Create a [customer-managed encryption key](/kms/docs/create-key) (CMEK) for encrypting the authentication secrets that Developer Connect creates.
6.  Optional: To use the command-line instructions in this guide, complete the following steps:
    1.  Install the [Google Cloud CLI](/sdk/docs/install-sdk). If you've installed gcloud CLI previously, make sure you have the latest available version by running `gcloud components update`.
    2.  Create a [Developer Connect service account](/developer-connect/docs/access-control#sa) by running the following command, where PROJECT\_ID is your [Google Cloud project ID](/resource-manager/docs/creating-managing-projects#identifying_projects):
        
                gcloud beta services identity create \\
                    \--service\=developerconnect.googleapis.com \\
                    \--project\=PROJECT\_ID
                

### Required roles

To get the permissions that you need to create connections and links, ask your administrator to grant you the following IAM roles:

-   If you aren't the project owner: [Developer Connect Admin](/iam/docs/roles-permissions/developerconnect#developerconnect.admin) (`roles/developerconnect.admin`) on your user account.
-   If you plan to use a CMEK to encrypt the secrets that Developer Connect creates: [Cloud KMS CryptoKey Encrypter/Decrypter](/iam/docs/roles-permissions/cloudkms#cloudkms.cryptoKeyEncrypterDecrypter) (`roles/cloudkms.cryptoKeyEncrypterDecrypter`) on the Secret Manager Service Account.
-   If you plan to use the gcloud CLI to complete the steps in this guide: [Secret Manager Admin role](/iam/docs/roles-permissions/secretmanager#secretmanager.admin) (`roles/secretmanager.admin`) on the Developer Connect Service Account.
-   If you plan to use the Google Cloud console to complete the steps in this guide: [Project IAM Admin](/iam/docs/roles-permissions/resourcemanager#resourcemanager.projectIamAdmin) (`roles/resourcemanager.projectIamAdmin`) on your user account.

For more information about granting roles, see [Manage access to projects, folders, and organizations](/iam/docs/granting-changing-revoking-access).

You might also be able to get the required permissions through [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-overview#predefined).

**Note:** When you have the Project IAM Admin (`roles/resourcemanager.projectIamAdmin`) role, the Google Cloud console can automatically grant necessary permissions on your behalf. If your administrator won't allow you to have the Project IAM Admin role, then ask your administrator to grant Secret Manager Admin (`roles/secretmanager.admin`) on the Developer Connect Service Account (`service-{projectNumber}@gcp-sa-devconnect.iam.gserviceaccount.com`).

## Create access tokens

To create access tokens in GitLab, complete the following steps:

1.  [Sign in to GitLab](https://gitlab.com/users/sign_in).
    
2.  Follow the instructions in the GitLab documentation to [create personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token), [group access tokens](https://docs.gitlab.com/user/group/settings/group_access_tokens/), or [project access tokens](https://docs.gitlab.com/user/project/settings/project_access_tokens/) with the following permissions:
    
    -   One token with `api` scope for connecting and disconnecting repositories.
    -   One token with `read_api` scope to allow Developer Connect to read source code in your repositories.
    -   For group access tokens and project access tokens, the tokens must have a role of Maintainer or greater.

## Create a connection

This section describes how to create a connection between Developer Connect and GitLab Enterprise. If you're using the Google Cloud console, then you can also start adding links to repositories as you finish setting up your connection.

To create a new GitLab Enterprise connection, select one of the following options:

### Console

Initiate a connection by completing the following steps:

1.  In the Google Cloud console, open **Developer Connect**.
    
    [Go to Developer Connect](https://console.cloud.google.com/developer-connect/connections)
    
    Developer Connect displays the **Git repositories** page.
    
    -   **If you see a list of source code management providers:** Start configuring your first connection by selecting a source code management provider. Click **Connect** on the GitLab Enterprise card.
    -   **If you see a table listing existing connections**: Set the source code management provider by clicking **Create connection** > **GitLab Enterprise**.
        
        The **Create Connection** page opens.
        
2.  For **Region**, choose a [region](/developer-connect/docs/locations) for your connection resources.
    
    1.  For **Name**, enter a name for your new connection.
3.  For **Host URL**, enter the URL of the host you want to connect to.
    
4.  In the **Access Tokens** section, enter the [tokens](/developer-connect/docs/connect-gitlab#tokens) for your account:
    
    -   **API access token**: Enter the access token with `api` scope.
    -   **Read API access token**: Enter the access token with `read_api` scope.
    
    You are responsible for ensuring your GitLab tokens remain valid. GitLab tokens have a maximum lifetime of 365 days, unless otherwise specified by the token creator or an administrator. To learn how to manage token expiration settings and notifications, see the GitLab documentation on [personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html), [group access tokens](https://docs.gitlab.com/user/group/settings/group_access_tokens/), and [project access tokens](https://docs.gitlab.com/user/project/settings/project_access_tokens/).
    
5.  Click **Show more** to see optional configuration settings.
    
    1.  Optional: By default, Developer Connect can act as a proxy for Git calls to GitLab Enterprise. To disable this option, clear the **Enable Developer Connect proxy** checkbox.
        
    2.  For **Network type**, select **Public internet**.
        
        If you want to use a private network, see [Connect to GitLab Enterprise repositories hosted in a private network](/developer-connect/docs/connect-gitlab-enterprise-private).
        
    3.  Optional: In the **Encryption** section, select a [CMEK key](/kms/docs/key-management-service) to encrypt Secret Manager secrets that Developer Connect creates.
        
6.  Click **Continue**.
    

Once the connection is created, the **Link repositories** page appears.

Complete the following steps to link repositories to your connection:

1.  In the list of available repositories, select the repositories you want to use.
    
2.  Click **OK**.
    
3.  Click **Link**.
    

Your connection is added to the **Connections** page and your repository links are added to the **Repositories** page in the Google Cloud console. You can [add more links to existing connections](#link-repos) at any time.

If you're setting up Gemini Code Assist, continue the process by following the steps in [Configure and use Gemini Code Assist code customization](/gemini/docs/codeassist/code-customization).

### gcloud

1.  Create a webhook secret in Secret Manager by running the following command, where WEBHOOK\_SECRET\_NAME is a name for your webhook secret:
    
         ```
         cat /proc/sys/kernel/random/uuid | tr -d '\n' | gcloud secrets create WEBHOOK_SECRET_NAME
    ```
    
2.  Store your access tokens in Secret Manager by running the following commands:
    
    ```
    gcloud secrets create API_SECRET_NAME
    
    echo -n API_SECRET_DATA | gcloud secrets versions add API_SECRET_NAME --data-file=-
    
    gcloud secrets create READ_SECRET_NAME
    
    echo -n READ_SECRET_DATA | gcloud secrets versions add READ_SECRET_NAME --data-file=-
    ```
    
    Replace the following:
    
    -   API\_SECRET\_NAME: a name for the secret that stores the token with `api` scope.
    -   API\_SECRET\_DATA: the token with `api` scope, similar to `glpat-XXXXXXXXXXXXXXXX`.
    -   READ\_SECRET\_NAME: a name for the secret that stores the token with `read_api` scope.
    -   READ\_SECRET\_DATA: the token with `read_api` scope, similar to `glpat-XXXXXXXXXXXXXXXX`.
3.  Initiate a connection to your GitLab Enterprise account by running the [`developer-connect connections create`](/sdk/gcloud/reference/developer-connect/connections/create) command:
    
    ```
    gcloud developer-connect connections create CONNECTION_NAME \
        --location=REGION \
        --gitlab-config-read-authorizer-credential-user-token-secret-version=projects/PROJECT_ID/secrets/READ_SECRET_NAME/versions/VERSION \
        --gitlab-config-authorizer-credential-user-token-secret-version=projects/PROJECT_ID/secrets/API_SECRET_NAME/versions/VERSION \
        --gitlab-enterprise-config-host-uri=HOST_URI
        --gitlab-enterprise-config-webhook-secret-version=projects/PROJECT_ID/secrets/WEBHOOK_SECRET_NAME/versions/VERSION
        --git-proxy-config-enabled
    ```
    
    Replace the following:
    
    -   CONNECTION\_NAME: the name of your connection.
    -   REGION: the region for your connection.
    -   PROJECT\_ID: your Google Cloud [project ID](/resource-manager/docs/creating-managing-projects#get_an_existing_project).
    -   READ\_SECRET\_NAME: the name of the Secret Manager secret that contains the token with `read_api` scope.
    -   API\_SECRET\_NAME: the name of the Secret Manager secret that contains the token with `api` scope.
    -   VERSION: the version number of each secret. This can be `latest` to use the most recent version number.
    -   HOST\_URI: the URI for the host you want to connect to.
    -   WEBHOOK\_SECRET\_NAME: the name of the Secret Manager secret that contains your webhook
    -   `--git-proxy-config-enabled`: an optional flag that enables Developer Connect to act as a proxy for Git calls to GitLab Enterprise. This capability is in [Preview](https://cloud.google.com/products/#product-launch-stages).
    
    Developer Connect completes the connection to GitLab. Next, [link to repositories](#link-repos).
    

## Link to repositories using an existing connection

Once you have established a connection to GitLab Enterprise, you can link to repositories. You can repeat these steps later to link additional repositories as needed.

To create repository links on an existing GitLab Enterprise connection, select one of the following options:

### Console

Create links to repositories by completing the following steps:

1.  Open the **Repositories** page in the Google Cloud console.
    
    [Open the **Repositories** page](https://console.cloud.google.com/developer-connect/git-repository-links)
    
2.  Click **Link repository**.
    
    The **Link Git repositories** pane opens.
    
3.  In the connections list, choose a connection.
    
4.  Click **Continue**.
    
5.  In the repositories list, select the repositories you want to link to.
    
    Developer Connect displays suggested names for your repository resources.
    
6.  Select a repository resource naming option:
    
    -   **Generated**: Use the generated repository resource names.
    -   **Manual**: Input names of your own.
7.  Click **Create**.
    

Developer Connect creates the repository links and displays them in the Google Cloud console.

### gcloud

Link to a GitLab repository by running the following command:

```
gcloud developer-connect connections git-repository-links create REPO_NAME \
    --clone-uri=REPO_URI \
    --connection=CONNECTION_NAME \
    --location=REGION
```

Replace the following:

-   REPO\_NAME: the name for your repository link.
-   REPO\_URI: the link to your repository, similar to `https://gitlab.com/my-project/test-repo.git`.
-   CONNECTION\_NAME: the name of your connection.
-   REGION: the region of your connection.

Developer Connect creates the repository links.

To list linked repositories, run the [`developer-connect connections git-repository-links list`](/sdk/gcloud/reference/developer-connect/connections/git-repository-links/list) command.

If you're setting up Gemini Code Assist, continue the process by following the steps in [Configure and use Gemini Code Assist code customization](/gemini/docs/codeassist/code-customization).

## What's next

-   [Finish setting up Gemini Code Assist code customization](/gemini/docs/codeassist/code-customization).
-   [Learn how Gemini Code Assist helps you accelerate software development](/gemini/docs/codeassist/overview).
-   [Explore other integrations available through Developer Connect.](/developer-connect/docs/overview)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
