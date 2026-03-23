-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.resourcemanager.testing (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

A testing helper for Google Cloud Resource Manager.

A simple usage example: Before the test:

 ```

 LocalResourceManagerHelper resourceManagerHelper = LocalResourceManagerHelper.create();
 resourceManagerHelper.start();
 ResourceManager resourceManager = resourceManagerHelper.getOptions().getService();
 
```
 

After the test:

 ```

 resourceManagerHelper.stop();
 
```
 

## Classes

### [LocalResourceManagerHelper](/java/docs/reference/google-cloud-resourcemanager/1.19.0/com.google.cloud.resourcemanager.testing.LocalResourceManagerHelper) (deprecated)

**Deprecated.** _v3 GAPIC client of ResourceManager is now available_

Utility to create a local Resource Manager mock for testing.

The mock runs in a separate thread, listening for HTTP requests on the local machine at an ephemeral port. While this mock attempts to simulate the Cloud Resource Manager, there are some divergences in behavior. The following is a non-exhaustive list of some of those behavioral differences:

-   This mock assumes you have adequate permissions for any action. Related to this, _testIamPermissions_ always indicates that the caller has all permissions listed in the request.
-   IAM policies are set to an empty policy with version 0 (only legacy roles supported) upon project creation. The actual service will not have an empty list of bindings and may also set your version to 1.
-   There is no input validation for the policy provided when replacing a policy or calling testIamPermissions.
-   In this mock, projects never move from the _DELETE\_REQUESTED_ lifecycle state to _DELETE\_IN\_PROGRESS_ without an explicit call to the utility method [#changeLifecycleState](/java/docs/reference/google-cloud-resourcemanager/1.19.0/com.google.cloud.resourcemanager.testing.LocalResourceManagerHelper#com_google_cloud_resourcemanager_testing_LocalResourceManagerHelper_changeLifecycleState_). Similarly, a project is never completely removed without an explicit call to the utility method [#removeProject](/java/docs/reference/google-cloud-resourcemanager/1.19.0/com.google.cloud.resourcemanager.testing.LocalResourceManagerHelper#com_google_cloud_resourcemanager_testing_LocalResourceManagerHelper_removeProject_).
-   The messages in the error responses given by this mock do not necessarily match the messages given by the actual service.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
