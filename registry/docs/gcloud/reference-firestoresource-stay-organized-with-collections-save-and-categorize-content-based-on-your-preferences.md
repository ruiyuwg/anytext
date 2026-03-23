**Note:** This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the [Gemini Enterprise - Business edition Help Center](https://support.google.com/g).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs)
-   [Reference](https://docs.cloud.google.com/gemini/enterprise/docs/apis)

Send feedback

# FirestoreSource Stay organized with collections Save and categorize content based on your preferences.

 

Firestore source import data from.

JSON representation

{
  "projectId": string,
  "databaseId": string,
  "collectionId": string,
  "gcsStagingDir": string
}

 

Fields

`projectId`

`string`

The project ID that the Cloud SQL source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`databaseId`

`string`

Required. The Firestore database to copy the data from with a length limit of 256 characters.

`collectionId`

`string`

Required. The Firestore collection (or entity) to copy the data from with a length limit of 1,500 characters.

`gcsStagingDir`

`string`

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the Firestore export to a specific Cloud Storage directory.

Ensure that the Firestore service account has the necessary Cloud Storage Admin permissions to access the specified Cloud Storage directory.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-08 UTC.
