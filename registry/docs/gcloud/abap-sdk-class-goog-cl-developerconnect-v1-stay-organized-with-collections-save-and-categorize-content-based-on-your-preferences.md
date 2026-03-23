-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [SAP on Google Cloud](https://docs.cloud.google.com/sap/docs)
-   [Reference](https://docs.cloud.google.com/sap/docs/abap-sdk/btp/latest/reference/overview)

Send feedback

# Class /GOOG/CL\_DEVELOPERCONNECT\_V1 Stay organized with collections Save and categorize content based on your preferences.

On-premises or any cloud edition v1.12keyboard\_arrow\_down

-   [SAP BTP edition v1.1](/sap/docs/abap-sdk/btp/latest/reference/googcl_developerconnect_v1)
-   [On-premises or any cloud edition v1.12](/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/reference/googcl_developerconnect_v1)

## Class

```
/GOOG/CL_DEVELOPERCONNECT_V1
```

-   Inheriting from:`/GOOG/CL_HTTP_CLIENT`
-   Description:`Developer Connect API v1`

For general information about a class in ABAP SDK for Google Cloud, see [API client stub](/sap/docs/abap-sdk/latest/developer#client_stub).

## Types

Type

Description

Visibility

`TY_002`

`Connection`

PUBLIC

`TY_004`

`FetchGitHubInstallationsResponse`

PUBLIC

`TY_005`

`FetchGitRefsResponse`

PUBLIC

`TY_006`

`FetchLinkableGitRepositoriesResponse`

PUBLIC

`TY_008`

`FetchReadTokenResponse`

PUBLIC

`TY_010`

`FetchReadWriteTokenResponse`

PUBLIC

`TY_011`

`GitHubConfig`

PUBLIC

`TY_012`

`GitRepositoryLink`

PUBLIC

`TY_013`

`Installation`

PUBLIC

`TY_014`

`InstallationState`

PUBLIC

`TY_015`

`LinkableGitRepository`

PUBLIC

`TY_016`

`ListConnectionsResponse`

PUBLIC

`TY_017`

`ListGitRepositoryLinksResponse`

PUBLIC

`TY_018`

`ListLocationsResponse`

PUBLIC

`TY_019`

`ListOperationsResponse`

PUBLIC

`TY_020`

`Location`

PUBLIC

`TY_021`

`OAuthCredential`

PUBLIC

`TY_022`

`Operation`

PUBLIC

`TY_023`

`Status`

PUBLIC

`TY_024`

`BitbucketCloudConfig`

PUBLIC

`TY_025`

`BitbucketDataCenterConfig`

PUBLIC

`TY_026`

`CryptoKeyConfig`

PUBLIC

`TY_027`

`GitHubEnterpriseConfig`

PUBLIC

`TY_028`

`GitLabConfig`

PUBLIC

`TY_029`

`GitLabEnterpriseConfig`

PUBLIC

`TY_030`

`GitProxyConfig`

PUBLIC

`TY_031`

`HttpBody`

PUBLIC

`TY_032`

`ProcessBitbucketCloudWebhookRequest`

PUBLIC

`TY_033`

`ProcessBitbucketDataCenterWebhookRequest`

PUBLIC

`TY_034`

`ProcessGitHubEnterpriseWebhookRequest`

PUBLIC

`TY_035`

`ProcessGitLabEnterpriseWebhookRequest`

PUBLIC

`TY_036`

`ProcessGitLabWebhookRequest`

PUBLIC

`TY_037`

`ServiceDirectoryConfig`

PUBLIC

`TY_038`

`UserCredential`

PUBLIC

`TY_T_002`

`Connection`

PUBLIC

`TY_T_012`

`GitRepositoryLink`

PUBLIC

`TY_T_013`

`Installation`

PUBLIC

`TY_T_015`

`LinkableGitRepository`

PUBLIC

`TY_T_020`

`Location`

PUBLIC

`TY_T_022`

`Operation`

PUBLIC

`TY_T_STRING`

`Table of Strings`

PUBLIC

## Constants

Name

Type

Description

Value

Visibility

`C_CLOUD_VERSION`

`/GOOG/SDK_VERSION`

Lowest Cloud Version

PUBLIC

`C_ON_PREM_VERSION`

`/GOOG/SDK_VERSION`

Lowest On-premises Version

1.7

PUBLIC

`C_PATH_PREFIX`

`STRING`

API Path Prefix

PUBLIC

`C_REVISION_DATE`

`DATUM`

Discovery Document revision Date

20250305

PUBLIC

`C_ROOT_URL`

`STRING`

API Root URL

https://developerconnect.googleapis.com

PUBLIC

`C_SERVICE_NAME`

`/GOOG/SERVICE_NAME`

Google Service Name

developerconnect:v1

PUBLIC

`C_SUPPORTED_AUTH`

`/GOOG/SUPP_AUTH`

Supported Auth Types

IJIJWW

PUBLIC

## Methods

For general information about a method in ABAP SDK for Google Cloud, see [API method](/sap/docs/abap-sdk/latest/developer#api_method).

### CONSTRUCTOR

-   Description: Constructor
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_KEY_NAME`

IMPORTING

`/GOOG/KEYNAME`

Google Cloud Key Name

`IV_LOG_OBJ`

IMPORTING

`BALOBJ_D`

Application log: Object name (Application code)

`IV_LOG_SUBOBJ`

IMPORTING

`BALSUBOBJ`

Application Log: Subobject

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### CANCEL\_OPERATIONS

-   Description: developerconnect.projects.locations.operations.cancel
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_OPERATIONS_ID`

IMPORTING

`STRING`

operationsId

`IS_INPUT`

IMPORTING

`DATA`

Input Data

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### CREATE\_CONNECTIONS

-   Description: developerconnect.projects.locations.connections.create
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_CONNECTIONID`

IMPORTING

`STRING`

connectionId

`IV_Q_REQUESTID`

IMPORTING

`STRING`

requestId

`IV_Q_VALIDATEONLY`

IMPORTING

`STRING`

validateOnly

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IS_INPUT`

IMPORTING

`TY_002`

Connection

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_022`

Operation

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### CREATE\_GIT\_REPOSITORY\_LINKS

-   Description: projects.locations.connections.gitRepositoryLinks.create
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_GITREPOSITORYLINKID`

IMPORTING

`STRING`

gitRepositoryLinkId

`IV_Q_REQUESTID`

IMPORTING

`STRING`

requestId

`IV_Q_VALIDATEONLY`

IMPORTING

`STRING`

validateOnly

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IS_INPUT`

IMPORTING

`TY_012`

GitRepositoryLink

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_022`

Operation

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### DELETE\_CONNECTIONS

-   Description: developerconnect.projects.locations.connections.delete
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_ETAG`

IMPORTING

`STRING`

etag

`IV_Q_REQUESTID`

IMPORTING

`STRING`

requestId

`IV_Q_VALIDATEONLY`

IMPORTING

`STRING`

validateOnly

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_022`

Operation

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### DELETE\_GIT\_REPOSITORY\_LINKS

-   Description: projects.locations.connections.gitRepositoryLinks.delete
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_ETAG`

IMPORTING

`STRING`

etag

`IV_Q_REQUESTID`

IMPORTING

`STRING`

requestId

`IV_Q_VALIDATEONLY`

IMPORTING

`STRING`

validateOnly

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_022`

Operation

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### DELETE\_OPERATIONS

-   Description: developerconnect.projects.locations.operations.delete
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_OPERATIONS_ID`

IMPORTING

`STRING`

operationsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### FETCH\_GIT\_HUB\_INSTALLATIONS

-   Description: projects.locations.connections.fetchGitHubInstallations
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_004`

FetchGitHubInstallationsResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### FETCH\_GIT\_REFS\_GIT\_REPOSITO

-   Description: locations.connections.gitRepositoryLinks.fetchGitRefs
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_PAGESIZE`

IMPORTING

`STRING`

pageSize

`IV_Q_PAGETOKEN`

IMPORTING

`STRING`

pageToken

`IV_Q_REFTYPE`

IMPORTING

`STRING`

refType

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_005`

FetchGitRefsResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### FETCH\_LINKABLE\_GIT\_REPOSITO

-   Description: projects.locations.connections.fetchLinkableGitRepositories
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_PAGESIZE`

IMPORTING

`STRING`

pageSize

`IV_Q_PAGETOKEN`

IMPORTING

`STRING`

pageToken

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_006`

FetchLinkableGitRepositoriesResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### FETCH\_READ\_TOKEN\_GIT\_REPOSI

-   Description: locations.connections.gitRepositoryLinks.fetchReadToken
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`IS_INPUT`

IMPORTING

`DATA`

Input Data

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_008`

FetchReadTokenResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### FETCH\_READ\_WRITE\_TOKEN\_GIT

-   Description: connections.gitRepositoryLinks.fetchReadWriteToken
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`IS_INPUT`

IMPORTING

`DATA`

Input Data

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_010`

FetchReadWriteTokenResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### GET\_CONNECTIONS

-   Description: developerconnect.projects.locations.connections.get
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_002`

Connection

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### GET\_GIT\_REPOSITORY\_LINKS

-   Description: projects.locations.connections.gitRepositoryLinks.get
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_012`

GitRepositoryLink

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### GET\_LOCATIONS

-   Description: developerconnect.projects.locations.get
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_020`

Location

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### GET\_OPERATIONS

-   Description: developerconnect.projects.locations.operations.get
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_OPERATIONS_ID`

IMPORTING

`STRING`

operationsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_022`

Operation

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### LIST\_CONNECTIONS

-   Description: developerconnect.projects.locations.connections.list
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_FILTER`

IMPORTING

`STRING`

filter

`IV_Q_ORDERBY`

IMPORTING

`STRING`

orderBy

`IV_Q_PAGESIZE`

IMPORTING

`STRING`

pageSize

`IV_Q_PAGETOKEN`

IMPORTING

`STRING`

pageToken

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_016`

ListConnectionsResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### LIST\_GIT\_REPOSITORY\_LINKS

-   Description: projects.locations.connections.gitRepositoryLinks.list
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_FILTER`

IMPORTING

`STRING`

filter

`IV_Q_ORDERBY`

IMPORTING

`STRING`

orderBy

`IV_Q_PAGESIZE`

IMPORTING

`STRING`

pageSize

`IV_Q_PAGETOKEN`

IMPORTING

`STRING`

pageToken

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_017`

ListGitRepositoryLinksResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### LIST\_LOCATIONS

-   Description: developerconnect.projects.locations.list
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_FILTER`

IMPORTING

`STRING`

filter

`IV_Q_PAGESIZE`

IMPORTING

`STRING`

pageSize

`IV_Q_PAGETOKEN`

IMPORTING

`STRING`

pageToken

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_018`

ListLocationsResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### LIST\_OPERATIONS

-   Description: developerconnect.projects.locations.operations.list
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_FILTER`

IMPORTING

`STRING`

filter

`IV_Q_PAGESIZE`

IMPORTING

`STRING`

pageSize

`IV_Q_PAGETOKEN`

IMPORTING

`STRING`

pageToken

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_019`

ListOperationsResponse

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### PATCH\_CONNECTIONS

-   Description: developerconnect.projects.locations.connections.patch
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_Q_ALLOWMISSING`

IMPORTING

`STRING`

allowMissing

`IV_Q_REQUESTID`

IMPORTING

`STRING`

requestId

`IV_Q_UPDATEMASK`

IMPORTING

`STRING`

updateMask

`IV_Q_VALIDATEONLY`

IMPORTING

`STRING`

validateOnly

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IS_INPUT`

IMPORTING

`TY_002`

Connection

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`TY_022`

Operation

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### PROCESS\_BITBUCKET\_CLOUD\_WEB

-   Description: connections.gitRepositoryLinks.processBitbucketCloudWebhook
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`IS_INPUT`

IMPORTING

`TY_032`

ProcessBitbucketCloudWebhookRequest

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### PROCESS\_BITBUCKET\_DATA\_CENT

-   Description: gitRepositoryLinks.processBitbucketDataCenterWebhook
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`IS_INPUT`

IMPORTING

`TY_033`

ProcessBitbucketDataCenterWebhookRequest

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### PROCESS\_GIT\_HUB\_ENTERPRISE

-   Description: locations.connections.processGitHubEnterpriseWebhook
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IS_INPUT`

IMPORTING

`TY_034`

ProcessGitHubEnterpriseWebhookRequest

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### PROCESS\_GIT\_LAB\_ENTERPRISE

-   Description: gitRepositoryLinks.processGitLabEnterpriseWebhook
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`IS_INPUT`

IMPORTING

`TY_035`

ProcessGitLabEnterpriseWebhookRequest

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### PROCESS\_GIT\_LAB\_WEBHOOK\_GIT

-   Description: connections.gitRepositoryLinks.processGitLabWebhook
-   Visibility: PUBLIC

#### Parameters

Name

Category

Type

Description

`IV_P_PROJECTS_ID`

IMPORTING

`STRING`

projectsId

`IV_P_LOCATIONS_ID`

IMPORTING

`STRING`

locationsId

`IV_P_CONNECTIONS_ID`

IMPORTING

`STRING`

connectionsId

`IV_P_GIT_REPOSITORY_LINKS_ID`

IMPORTING

`STRING`

gitRepositoryLinksId

`IS_INPUT`

IMPORTING

`TY_036`

ProcessGitLabWebhookRequest

`ES_RAW`

EXPORTING

`DATA`

Raw Output Data

`ES_OUTPUT`

EXPORTING

`DATA`

Output Data

`EV_RET_CODE`

EXPORTING

`I`

Return Code

`EV_ERR_TEXT`

EXPORTING

`STRING`

Error Text

`ES_ERR_RESP`

EXPORTING

`/GOOG/ERR_RESP`

Error Response

#### Exception

Name

Description

`/GOOG/CX_SDK`

ABAP SDK for Google Cloud: Exception Class

### CLOSE

-   Description: Close Connection
-   Visibility: PUBLIC

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
