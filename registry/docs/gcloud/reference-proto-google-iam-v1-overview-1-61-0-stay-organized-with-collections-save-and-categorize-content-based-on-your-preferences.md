-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# proto-google-iam-v1 overview (1.61.0) Stay organized with collections Save and categorize content based on your preferences.

1.61.0 (latest) 1.60.1 1.59.1 1.58.2 1.57.0 1.56.3 1.55.0 1.54.2 1.53.0 1.52.0 1.51.0 1.49.1 1.48.0 1.47.0 1.46.0 1.45.1 1.44.0 1.43.0 1.41.0 1.40.1 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.1 1.33.0 1.32.1 1.31.0 1.29.0 1.28.0 1.27.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.1 1.19.0 1.18.1 1.17.1 1.16.1 1.10.0 1.9.3 1.8.0 1.7.0 1.6.23 1.5.1 1.4.1 1.3.4 1.2.12

## Key Reference Links

**IAM Description:** Manages access control for Google Cloud Platform resources

[IAM Product Reference](https://cloud.google.com/iam)

[GitHub Repository](https://github.com/googleapis/sdk-platform-java/tree/main/java-iam)

[Maven artifact](https://central.sonatype.com/artifact/com.google.api.grpc/proto-google-iam-v1)

## Getting Started

In order to use this library, you first need to go through the following steps:

-   [Install a JDK (Java Development Kit)](https://cloud.google.com/java/docs/setup#install_a_jdk_java_development_kit)
-   [Select or create a Cloud Platform project](https://console.cloud.google.com/project)
-   [Enable billing for your project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project)
-   [Enable the API](https://console.cloud.google.com/apis/library/iam.googleapis.com)
-   [Set up authentication](https://cloud.google.com/docs/authentication/client-libraries)

## Use the IAM for Java

To ensure that your project uses compatible versions of the libraries and their component artifacts, import `com.google.cloud:libraries-bom` and use the BOM to specify dependency versions. Be sure to remove any versions that you set previously. For more information about BOMs, see [Google Cloud Platform Libraries BOM](https://cloud.google.com/java/docs/bom).

### Maven

Import the BOM in the `dependencyManagement` section of your `pom.xml` file. Include specific artifacts you depend on in the `dependencies` section, but don't specify the artifacts' versions in the `dependencies` section.

The example below demonstrates how you would import the BOM and include the `proto-google-iam-v1` artifact.

<dependencyManagement>
 <dependencies>
   <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>libraries-bom</artifactId>
      <version>26.78.0</version>
      <type>pom</type>
      <scope>import</scope>
   </dependency>
 </dependencies>
</dependencyManagement>

<dependencies>
 <dependency>
   <groupId>com.google.cloud</groupId>
   <artifactId>proto-google-iam-v1</artifactId>
 </dependency>
</dependencies>

### Gradle

BOMs are supported by default in Gradle 5.x or later. Add a `platform` dependency on `com.google.cloud:libraries-bom` and remove the version from the dependency declarations in the artifact's `build.gradle` file.

The example below demonstrates how you would import the BOM and include the `proto-google-iam-v1` artifact.

implementation(platform("com.google.cloud:libraries-bom:26.78.0"))
implementation("com.google.api.grpc:proto-google-iam-v1")

The `platform` and `enforcedPlatform` keywords supply dependency versions declared in a BOM. The `enforcedPlatform` keyword enforces the dependency versions declared in the BOM and thus overrides what you specified.

For more details of the `platform` and `enforcedPlatform` keywords Gradle 5.x or higher, see [Gradle: Importing Maven BOMs](https://docs.gradle.org/current/userguide/platforms.html#sub:bom_import).

If you're using Gradle 4.6 or later, add `enableFeaturePreview('IMPROVED_POM_SUPPORT')` to your `settings.gradle` file. For details, see [Gradle 4.6 Release Notes: BOM import](https://docs.gradle.org/4.6/release-notes.html#bom-import). Versions of Gradle earlier than 4.6 don't support BOMs.

### SBT

SBT [doesn't support BOMs](https://github.com/sbt/sbt/issues/4531). You can find recommended versions of libraries from a particular BOM version on the [dashboard](https://storage.googleapis.com/cloud-opensource-java-dashboard/com.google.cloud/libraries-bom/index.html) and set the versions manually. To use the latest version of this library, add this to your dependencies:

libraryDependencies += "com.google.cloud" % "proto-google-iam-v1" % "1.61.0"

## Which version ID should I get started with?

For this library, we recommend using [com.google.iam.v3](https://cloud.google.com/java/docs/reference/proto-google-iam-v1/1.61.0/com.google.iam.v3) for new applications.

### Understanding Version ID and Library Versions

When using a Cloud client library, it's important to distinguish between two types of versions:

-   **Library Version**: The version of the software package (the client library) that helps you interact with the Cloud service. These libraries are released and updated frequently with bug fixes, improvements, and support for new service features and versions. The version selector at the top of this page represents the client library version.
-   **Version ID**: The version of the Cloud service itself (e.g. IAM). New Version IDs are introduced infrequently, and often involve changes to the core functionality and structure of the Cloud service itself. The packages in the lefthand navigation represent packages tied to a specific Version ID of the Cloud service.

### Managing Library Versions

We recommend using the `com.google.cloud:libraries-bom` installation method detailed above to streamline dependency management across multiple Cloud Java client libraries. This ensures compatibility and simplifies updates.

### Choosing the Right Version ID

Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., `v1`, `v2alpha`). For new production applications, use the latest stable Version ID. This is identified by the highest version number **without** a suffix (like "alpha" or "beta"). You can read more about [Cloud API versioning strategy here](https://cloud.google.com/apis/design/versioning).

**Important**: Unstable Version ID releases (those _with_ suffixes) are subject to breaking changes when upgrading. Use them only for testing or if you specifically need their experimental features.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
