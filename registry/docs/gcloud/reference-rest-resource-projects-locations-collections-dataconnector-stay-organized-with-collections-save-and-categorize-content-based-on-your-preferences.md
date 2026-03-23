**Note:** This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the [Gemini Enterprise - Business edition Help Center](https://support.google.com/g).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs)
-   [Reference](https://docs.cloud.google.com/gemini/enterprise/docs/apis)

Send feedback

# REST Resource: projects.locations.collections.dataConnector Stay organized with collections Save and categorize content based on your preferences.

 

## Resource

There is no persistent data associated with this resource.

 

## Methods

### `[acquireAccessToken](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/acquireAccessToken)`

Uses the per-user refresh token minted with `[AcquireAndStoreRefreshToken](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/acquireAndStoreRefreshToken#google.cloud.discoveryengine.v1alpha.DataConnectorService.AcquireAndStoreRefreshToken)` to generate and return a new access token and its details.

### `[acquireAndStoreRefreshToken](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/acquireAndStoreRefreshToken)`

Exchanges OAuth authorization credentials for a refresh token and stores the refresh token and the scopes.

### `[buildActionInvocation](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/buildActionInvocation)`

Builds an action invocation using the `[DataConnector](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections#DataConnector)`.

### `[checkRefreshToken](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/checkRefreshToken)   **(deprecated)**`

Deprecated: Checks the existence of a refresh token for the EUC user for a given connection and returns its details.

### `[executeAction](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/executeAction)`

Executes a 3rd party action using the `[DataConnector](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections#DataConnector)`.

### `[fetchEntitiesTypes](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/fetchEntitiesTypes)`

Fetch the entities types for a `[DataConnector](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections#DataConnector)`.

### `[getConnectorSecret](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/getConnectorSecret)`

Get the secret for the associated connector.

### `[startConnectorRun](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections.dataConnector/startConnectorRun)`

Starts an immediate synchronization process for a `[DataConnector](/gemini/enterprise/docs/reference/rest/v1alpha/projects.locations.collections#DataConnector)`.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-08 UTC.
