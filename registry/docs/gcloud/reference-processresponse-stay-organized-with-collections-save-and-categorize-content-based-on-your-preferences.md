-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Document AI](https://docs.cloud.google.com/document-ai/docs)
-   [Referensi](https://docs.cloud.google.com/document-ai/docs/reference)

Send feedback

# ProcessResponse Stay organized with collections Save and categorize content based on your preferences.

 

Response message for the `[ProcessDocument](/document-ai/docs/reference/rest/v1/projects.locations.processors/process#google.cloud.documentai.v1.DocumentProcessorService.ProcessDocument)` method.

JSON representation

{
  "document": {
    object (`[Document](/document-ai/docs/reference/rest/v1/Document)`)
  },
  "humanReviewStatus": {
    object (`[HumanReviewStatus](/document-ai/docs/reference/rest/Shared.Types/BatchProcessMetadata#HumanReviewStatus)`)
  }
}

 

Fields

`document`

``object (`[Document](/document-ai/docs/reference/rest/v1/Document)`)``

The document payload, will populate fields based on the processor's behavior.

`humanReviewStatus`

``object (`[HumanReviewStatus](/document-ai/docs/reference/rest/Shared.Types/BatchProcessMetadata#HumanReviewStatus)`)``

The status of human review on the processed document.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-22 UTC.
