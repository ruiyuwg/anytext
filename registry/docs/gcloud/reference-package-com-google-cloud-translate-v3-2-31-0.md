-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

# Package com.google.cloud.translate.v3 (2.31.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-translate/google-cloud-translate/src/main/java/com/google/cloud/translate/v3)

[RPC Documentation](https://cloud.google.com/translate/docs/reference/rpc)

[REST Documentation](https://cloud.google.com/translate/docs/reference/rest)

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.translate.v3.TranslationServiceClient](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceClient)

Service Description: Provides natural language translation operations.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.translate.v3.TranslationServiceSettings](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceSettings)

Settings class to configure an instance of TranslationServiceClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.translate.v3.BatchDocumentInputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentInputConfig)

Input configuration for BatchTranslateDocument request.

[com.google.cloud.translate.v3.BatchDocumentInputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentInputConfig.Builder)

Input configuration for BatchTranslateDocument request.

[com.google.cloud.translate.v3.BatchDocumentOutputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentOutputConfig)

Output configuration for BatchTranslateDocument request.

[com.google.cloud.translate.v3.BatchDocumentOutputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentOutputConfig.Builder)

Output configuration for BatchTranslateDocument request.

[com.google.cloud.translate.v3.BatchTranslateDocumentMetadata](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata)

State metadata for the batch translation operation.

[com.google.cloud.translate.v3.BatchTranslateDocumentMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata.Builder)

State metadata for the batch translation operation.

[com.google.cloud.translate.v3.BatchTranslateDocumentRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentRequest)

The BatchTranslateDocument request.

[com.google.cloud.translate.v3.BatchTranslateDocumentRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentRequest.Builder)

The BatchTranslateDocument request.

[com.google.cloud.translate.v3.BatchTranslateDocumentResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentResponse)

Stored in the google.longrunning.Operation.response field returned by BatchTranslateDocument if at least one document is

[com.google.cloud.translate.v3.BatchTranslateDocumentResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentResponse.Builder)

Stored in the google.longrunning.Operation.response field returned by BatchTranslateDocument if at least one document is

[com.google.cloud.translate.v3.BatchTranslateMetadata](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateMetadata)

State metadata for the batch translation operation.

[com.google.cloud.translate.v3.BatchTranslateMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateMetadata.Builder)

State metadata for the batch translation operation.

[com.google.cloud.translate.v3.BatchTranslateResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateResponse)

Stored in the google.longrunning.Operation.response field returned by BatchTranslateText if at least one sentence is translated

[com.google.cloud.translate.v3.BatchTranslateResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateResponse.Builder)

Stored in the google.longrunning.Operation.response field returned by BatchTranslateText if at least one sentence is translated

[com.google.cloud.translate.v3.BatchTranslateTextRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateTextRequest)

The batch translation request.

[com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder)

The batch translation request.

[com.google.cloud.translate.v3.CreateGlossaryMetadata](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryMetadata)

Stored in the google.longrunning.Operation.metadata field returned by CreateGlossary.

[com.google.cloud.translate.v3.CreateGlossaryMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryMetadata.Builder)

Stored in the google.longrunning.Operation.metadata field returned by CreateGlossary.

[com.google.cloud.translate.v3.CreateGlossaryRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryRequest)

Request message for CreateGlossary.

[com.google.cloud.translate.v3.CreateGlossaryRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryRequest.Builder)

Request message for CreateGlossary.

[com.google.cloud.translate.v3.DeleteGlossaryMetadata](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryMetadata)

Stored in the google.longrunning.Operation.metadata field returned by DeleteGlossary.

[com.google.cloud.translate.v3.DeleteGlossaryMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryMetadata.Builder)

Stored in the google.longrunning.Operation.metadata field returned by DeleteGlossary.

[com.google.cloud.translate.v3.DeleteGlossaryRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryRequest)

Request message for DeleteGlossary.

[com.google.cloud.translate.v3.DeleteGlossaryRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryRequest.Builder)

Request message for DeleteGlossary.

[com.google.cloud.translate.v3.DeleteGlossaryResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryResponse)

Stored in the google.longrunning.Operation.response field returned by DeleteGlossary.

[com.google.cloud.translate.v3.DeleteGlossaryResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryResponse.Builder)

Stored in the google.longrunning.Operation.response field returned by DeleteGlossary.

[com.google.cloud.translate.v3.DetectLanguageRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageRequest)

The request message for language detection.

[com.google.cloud.translate.v3.DetectLanguageRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageRequest.Builder)

The request message for language detection.

[com.google.cloud.translate.v3.DetectLanguageResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageResponse)

The response message for language detection.

[com.google.cloud.translate.v3.DetectLanguageResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageResponse.Builder)

The response message for language detection.

[com.google.cloud.translate.v3.DetectedLanguage](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectedLanguage)

The response message for language detection.

[com.google.cloud.translate.v3.DetectedLanguage.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectedLanguage.Builder)

The response message for language detection.

[com.google.cloud.translate.v3.DocumentInputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentInputConfig)

A document translation request input config.

[com.google.cloud.translate.v3.DocumentInputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentInputConfig.Builder)

A document translation request input config.

[com.google.cloud.translate.v3.DocumentOutputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentOutputConfig)

A document translation request output config.

[com.google.cloud.translate.v3.DocumentOutputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentOutputConfig.Builder)

A document translation request output config.

[com.google.cloud.translate.v3.DocumentTranslation](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentTranslation)

A translated document message.

[com.google.cloud.translate.v3.DocumentTranslation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentTranslation.Builder)

A translated document message.

[com.google.cloud.translate.v3.GcsDestination](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GcsDestination)

The Google Cloud Storage location for the output content.

[com.google.cloud.translate.v3.GcsDestination.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GcsDestination.Builder)

The Google Cloud Storage location for the output content.

[com.google.cloud.translate.v3.GcsSource](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GcsSource)

The Google Cloud Storage location for the input content.

[com.google.cloud.translate.v3.GcsSource.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GcsSource.Builder)

The Google Cloud Storage location for the input content.

[com.google.cloud.translate.v3.GetGlossaryRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GetGlossaryRequest)

Request message for GetGlossary.

[com.google.cloud.translate.v3.GetGlossaryRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GetGlossaryRequest.Builder)

Request message for GetGlossary.

[com.google.cloud.translate.v3.GetSupportedLanguagesRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GetSupportedLanguagesRequest)

The request message for discovering supported languages.

[com.google.cloud.translate.v3.GetSupportedLanguagesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GetSupportedLanguagesRequest.Builder)

The request message for discovering supported languages.

[com.google.cloud.translate.v3.Glossary](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary)

Represents a glossary built from user-provided data.

[com.google.cloud.translate.v3.Glossary.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.Builder)

Represents a glossary built from user-provided data.

[com.google.cloud.translate.v3.Glossary.LanguageCodePair](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguageCodePair)

Used with unidirectional glossaries.

[com.google.cloud.translate.v3.Glossary.LanguageCodePair.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguageCodePair.Builder)

Used with unidirectional glossaries.

[com.google.cloud.translate.v3.Glossary.LanguageCodesSet](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguageCodesSet)

Used with equivalent term set glossaries.

[com.google.cloud.translate.v3.Glossary.LanguageCodesSet.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguageCodesSet.Builder)

Used with equivalent term set glossaries.

[com.google.cloud.translate.v3.GlossaryInputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryInputConfig)

Input configuration for glossaries.

[com.google.cloud.translate.v3.GlossaryInputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryInputConfig.Builder)

Input configuration for glossaries.

[com.google.cloud.translate.v3.GlossaryName](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryName)

[com.google.cloud.translate.v3.GlossaryName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryName.Builder)

Builder for projects/{project}/locations/{location}/glossaries/{glossary}.

[com.google.cloud.translate.v3.InputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.InputConfig)

Input configuration for BatchTranslateText request.

[com.google.cloud.translate.v3.InputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.InputConfig.Builder)

Input configuration for BatchTranslateText request.

[com.google.cloud.translate.v3.ListGlossariesRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.ListGlossariesRequest)

Request message for ListGlossaries.

[com.google.cloud.translate.v3.ListGlossariesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.ListGlossariesRequest.Builder)

Request message for ListGlossaries.

[com.google.cloud.translate.v3.ListGlossariesResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.ListGlossariesResponse)

Response message for ListGlossaries.

[com.google.cloud.translate.v3.ListGlossariesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.ListGlossariesResponse.Builder)

Response message for ListGlossaries.

[com.google.cloud.translate.v3.LocationName](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.LocationName)

[com.google.cloud.translate.v3.LocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

[com.google.cloud.translate.v3.OutputConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.OutputConfig)

Output configuration for BatchTranslateText request.

[com.google.cloud.translate.v3.OutputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.OutputConfig.Builder)

Output configuration for BatchTranslateText request.

[com.google.cloud.translate.v3.SupportedLanguage](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.SupportedLanguage)

A single supported language response corresponds to information related to one supported language.

[com.google.cloud.translate.v3.SupportedLanguage.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.SupportedLanguage.Builder)

A single supported language response corresponds to information related to one supported language.

[com.google.cloud.translate.v3.SupportedLanguages](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.SupportedLanguages)

The response message for discovering supported languages.

[com.google.cloud.translate.v3.SupportedLanguages.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.SupportedLanguages.Builder)

The response message for discovering supported languages.

[com.google.cloud.translate.v3.TranslateDocumentRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateDocumentRequest)

A document translation request.

[com.google.cloud.translate.v3.TranslateDocumentRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateDocumentRequest.Builder)

A document translation request.

[com.google.cloud.translate.v3.TranslateDocumentResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateDocumentResponse)

A translated document response message.

[com.google.cloud.translate.v3.TranslateDocumentResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateDocumentResponse.Builder)

A translated document response message.

[com.google.cloud.translate.v3.TranslateTextGlossaryConfig](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextGlossaryConfig)

Configures which glossary is used for a specific target language and defines options for applying that glossary.

[com.google.cloud.translate.v3.TranslateTextGlossaryConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextGlossaryConfig.Builder)

Configures which glossary is used for a specific target language and defines options for applying that glossary.

[com.google.cloud.translate.v3.TranslateTextRequest](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextRequest)

The request message for synchronous translation.

[com.google.cloud.translate.v3.TranslateTextRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextRequest.Builder)

The request message for synchronous translation.

[com.google.cloud.translate.v3.TranslateTextResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextResponse)

Protobuf type `google.cloud.translation.v3.TranslateTextResponse`

[com.google.cloud.translate.v3.TranslateTextResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextResponse.Builder)

Protobuf type `google.cloud.translation.v3.TranslateTextResponse`

[com.google.cloud.translate.v3.Translation](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Translation)

A single translation response.

[com.google.cloud.translate.v3.Translation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Translation.Builder)

A single translation response.

[com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesFixedSizeCollection)

[com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPage](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPage)

[com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceClient.ListGlossariesPagedResponse)

[com.google.cloud.translate.v3.TranslationServiceGrpc](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceGrpc)

Provides natural language translation operations.

[com.google.cloud.translate.v3.TranslationServiceGrpc.TranslationServiceImplBase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceGrpc.TranslationServiceImplBase)

Base class for the server implementation of the service TranslationService. Provides natural language translation operations.

[com.google.cloud.translate.v3.TranslationServiceProto](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceProto)

[com.google.cloud.translate.v3.TranslationServiceSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceSettings.Builder)

Builder for TranslationServiceSettings.

## Interfaces

Interface

Description

[com.google.cloud.translate.v3.BatchDocumentInputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentInputConfigOrBuilder)

[com.google.cloud.translate.v3.BatchDocumentOutputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentOutputConfigOrBuilder)

[com.google.cloud.translate.v3.BatchTranslateDocumentMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentMetadataOrBuilder)

[com.google.cloud.translate.v3.BatchTranslateDocumentRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentRequestOrBuilder)

[com.google.cloud.translate.v3.BatchTranslateDocumentResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentResponseOrBuilder)

[com.google.cloud.translate.v3.BatchTranslateMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateMetadataOrBuilder)

[com.google.cloud.translate.v3.BatchTranslateResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateResponseOrBuilder)

[com.google.cloud.translate.v3.BatchTranslateTextRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateTextRequestOrBuilder)

[com.google.cloud.translate.v3.CreateGlossaryMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryMetadataOrBuilder)

[com.google.cloud.translate.v3.CreateGlossaryRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryRequestOrBuilder)

[com.google.cloud.translate.v3.DeleteGlossaryMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryMetadataOrBuilder)

[com.google.cloud.translate.v3.DeleteGlossaryRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryRequestOrBuilder)

[com.google.cloud.translate.v3.DeleteGlossaryResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryResponseOrBuilder)

[com.google.cloud.translate.v3.DetectLanguageRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageRequestOrBuilder)

[com.google.cloud.translate.v3.DetectLanguageResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageResponseOrBuilder)

[com.google.cloud.translate.v3.DetectedLanguageOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectedLanguageOrBuilder)

[com.google.cloud.translate.v3.DocumentInputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentInputConfigOrBuilder)

[com.google.cloud.translate.v3.DocumentOutputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentOutputConfigOrBuilder)

[com.google.cloud.translate.v3.DocumentTranslationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentTranslationOrBuilder)

[com.google.cloud.translate.v3.GcsDestinationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GcsDestinationOrBuilder)

[com.google.cloud.translate.v3.GcsSourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GcsSourceOrBuilder)

[com.google.cloud.translate.v3.GetGlossaryRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GetGlossaryRequestOrBuilder)

[com.google.cloud.translate.v3.GetSupportedLanguagesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GetSupportedLanguagesRequestOrBuilder)

[com.google.cloud.translate.v3.Glossary.LanguageCodePairOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguageCodePairOrBuilder)

[com.google.cloud.translate.v3.Glossary.LanguageCodesSetOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguageCodesSetOrBuilder)

[com.google.cloud.translate.v3.GlossaryInputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryInputConfigOrBuilder)

[com.google.cloud.translate.v3.GlossaryOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryOrBuilder)

[com.google.cloud.translate.v3.InputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.InputConfigOrBuilder)

[com.google.cloud.translate.v3.ListGlossariesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.ListGlossariesRequestOrBuilder)

[com.google.cloud.translate.v3.ListGlossariesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.ListGlossariesResponseOrBuilder)

[com.google.cloud.translate.v3.OutputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.OutputConfigOrBuilder)

[com.google.cloud.translate.v3.SupportedLanguageOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.SupportedLanguageOrBuilder)

[com.google.cloud.translate.v3.SupportedLanguagesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.SupportedLanguagesOrBuilder)

[com.google.cloud.translate.v3.TranslateDocumentRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateDocumentRequestOrBuilder)

[com.google.cloud.translate.v3.TranslateDocumentResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateDocumentResponseOrBuilder)

[com.google.cloud.translate.v3.TranslateTextGlossaryConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextGlossaryConfigOrBuilder)

[com.google.cloud.translate.v3.TranslateTextRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextRequestOrBuilder)

[com.google.cloud.translate.v3.TranslateTextResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslateTextResponseOrBuilder)

[com.google.cloud.translate.v3.TranslationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationOrBuilder)

[com.google.cloud.translate.v3.TranslationServiceGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.TranslationServiceGrpc.AsyncService)

Provides natural language translation operations.

## Enums

Enum

Description

[com.google.cloud.translate.v3.BatchDocumentInputConfig.SourceCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentInputConfig.SourceCase)

[com.google.cloud.translate.v3.BatchDocumentOutputConfig.DestinationCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchDocumentOutputConfig.DestinationCase)

[com.google.cloud.translate.v3.BatchTranslateDocumentMetadata.State](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateDocumentMetadata.State)

State of the job.

[com.google.cloud.translate.v3.BatchTranslateMetadata.State](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.BatchTranslateMetadata.State)

State of the job.

[com.google.cloud.translate.v3.CreateGlossaryMetadata.State](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.CreateGlossaryMetadata.State)

Enumerates the possible states that the creation request can be in.

[com.google.cloud.translate.v3.DeleteGlossaryMetadata.State](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DeleteGlossaryMetadata.State)

Enumerates the possible states that the creation request can be in.

[com.google.cloud.translate.v3.DetectLanguageRequest.SourceCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DetectLanguageRequest.SourceCase)

[com.google.cloud.translate.v3.DocumentInputConfig.SourceCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentInputConfig.SourceCase)

[com.google.cloud.translate.v3.DocumentOutputConfig.DestinationCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.DocumentOutputConfig.DestinationCase)

[com.google.cloud.translate.v3.Glossary.LanguagesCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.Glossary.LanguagesCase)

[com.google.cloud.translate.v3.GlossaryInputConfig.SourceCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.GlossaryInputConfig.SourceCase)

[com.google.cloud.translate.v3.InputConfig.SourceCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.InputConfig.SourceCase)

[com.google.cloud.translate.v3.OutputConfig.DestinationCase](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate.v3.OutputConfig.DestinationCase)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
