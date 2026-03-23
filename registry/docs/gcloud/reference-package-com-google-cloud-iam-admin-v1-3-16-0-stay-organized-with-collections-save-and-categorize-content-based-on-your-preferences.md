-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.iam.admin.v1 (3.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.82.0 (latest) 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.73.0 3.71.0 3.70.0 3.69.0 3.68.0 3.67.0 3.65.0 3.63.0 3.62.0 3.59.0 3.58.0 3.57.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.0.0 1.2.5 1.1.8 0.2.0

A client to Identity and Access Management (IAM) API

The interfaces provided are listed below, along with usage samples.

### IAMClient

Service Description: Creates and manages Identity and Access Management (IAM) resources.

You can use this service to work with all of the following resources:

-   \*\*Service accounts\*\*, which identify an application or a virtual machine (VM) instance rather than a person
-   \*\*Service account keys\*\*, which service accounts use to authenticate with Google APIs
-   \*\*IAM policies for service accounts\*\*, which specify the roles that a principal has for the service account
-   \*\*IAM custom roles\*\*, which help you limit the number of permissions that you grant to principals

In addition, you can use this service to complete the following tasks, among others:

-   Test whether a service account can use specific permissions
-   Check which roles you can grant for a specific resource
-   Lint, or validate, condition expressions in an IAM policy

When you read data from the IAM API, each read is eventually consistent. In other words, if you write data with the IAM API, then immediately read that data, the read operation might return an older version of the data. To deal with this behavior, your application can retry the request with truncated exponential backoff.

In contrast, writing data to the IAM API is sequentially consistent. In other words, write operations are always processed in the order in which they were received.

Sample for IAMClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IAMClient iAMClient = IAMClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   ServiceAccount response = iAMClient.getServiceAccount(name);
 }
 
```
 

## Classes

### [IAMClient](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient)

Service Description: Creates and manages Identity and Access Management (IAM) resources.

You can use this service to work with all of the following resources:

-   \*\*Service accounts\*\*, which identify an application or a virtual machine (VM) instance rather than a person
-   \*\*Service account keys\*\*, which service accounts use to authenticate with Google APIs
-   \*\*IAM policies for service accounts\*\*, which specify the roles that a principal has for the service account
-   \*\*IAM custom roles\*\*, which help you limit the number of permissions that you grant to principals

In addition, you can use this service to complete the following tasks, among others:

-   Test whether a service account can use specific permissions
-   Check which roles you can grant for a specific resource
-   Lint, or validate, condition expressions in an IAM policy

When you read data from the IAM API, each read is eventually consistent. In other words, if you write data with the IAM API, then immediately read that data, the read operation might return an older version of the data. To deal with this behavior, your application can retry the request with truncated exponential backoff.

In contrast, writing data to the IAM API is sequentially consistent. In other words, write operations are always processed in the order in which they were received.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (IAMClient iAMClient = IAMClient.create()) {
   ServiceAccountName name = ServiceAccountName.of("[PROJECT]", "[SERVICE_ACCOUNT]");
   ServiceAccount response = iAMClient.getServiceAccount(name);
 }
 
```
 

Note: close() needs to be called on the IAMClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of IAMSettings to create(). For example:

To customize credentials:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IAMSettings iAMSettings =
     IAMSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 IAMClient iAMClient = IAMClient.create(iAMSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IAMSettings iAMSettings = IAMSettings.newBuilder().setEndpoint(myEndpoint).build();
 IAMClient iAMClient = IAMClient.create(iAMSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [IAMClient.ListRolesFixedSizeCollection](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.ListRolesFixedSizeCollection)

### [IAMClient.ListRolesPage](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.ListRolesPage)

### [IAMClient.ListRolesPagedResponse](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.ListRolesPagedResponse)

### [IAMClient.ListServiceAccountsFixedSizeCollection](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.ListServiceAccountsFixedSizeCollection)

### [IAMClient.ListServiceAccountsPage](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.ListServiceAccountsPage)

### [IAMClient.ListServiceAccountsPagedResponse](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.ListServiceAccountsPagedResponse)

### [IAMClient.QueryGrantableRolesFixedSizeCollection](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.QueryGrantableRolesFixedSizeCollection)

### [IAMClient.QueryGrantableRolesPage](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.QueryGrantableRolesPage)

### [IAMClient.QueryGrantableRolesPagedResponse](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.QueryGrantableRolesPagedResponse)

### [IAMClient.QueryTestablePermissionsFixedSizeCollection](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.QueryTestablePermissionsFixedSizeCollection)

### [IAMClient.QueryTestablePermissionsPage](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.QueryTestablePermissionsPage)

### [IAMClient.QueryTestablePermissionsPagedResponse](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient.QueryTestablePermissionsPagedResponse)

### [IAMSettings](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMSettings)

Settings class to configure an instance of [IAMClient](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMClient).

The default instance has everything set to sensible defaults:

-   The default service address (iam.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getServiceAccount to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 IAMSettings.Builder iAMSettingsBuilder = IAMSettings.newBuilder();
 iAMSettingsBuilder
     .getServiceAccountSettings()
     .setRetrySettings(
         iAMSettingsBuilder
             .getServiceAccountSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 IAMSettings iAMSettings = iAMSettingsBuilder.build();
 
```
 

### [IAMSettings.Builder](/java/docs/reference/google-iam-admin/3.16.0/com.google.cloud.iam.admin.v1.IAMSettings.Builder)

Builder for IAMSettings.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
