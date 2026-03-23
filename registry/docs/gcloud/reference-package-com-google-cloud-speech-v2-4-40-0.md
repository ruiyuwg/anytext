-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

# Package com.google.cloud.speech.v2 (4.40.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-speech/google-cloud-speech/src/main/java/com/google/cloud/speech/v2)

[RPC Documentation](https://cloud.google.com/speech-to-text/docs/reference/rpc)

[REST Documentation](https://cloud.google.com/speech-to-text/docs/reference/rest)

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.speech.v2.SpeechClient](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient)

Service Description: Enables speech transcription and resource management.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.speech.v2.SpeechSettings](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechSettings)

Settings class to configure an instance of SpeechClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.speech.v2.AutoDetectDecodingConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.AutoDetectDecodingConfig)

Automatically detected decoding parameters. Supported for the following encodings:

[com.google.cloud.speech.v2.AutoDetectDecodingConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.AutoDetectDecodingConfig.Builder)

Automatically detected decoding parameters. Supported for the following encodings:

[com.google.cloud.speech.v2.BatchRecognizeFileMetadata](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadata)

Metadata about a single file in a batch for BatchRecognize.

[com.google.cloud.speech.v2.BatchRecognizeFileMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadata.Builder)

Metadata about a single file in a batch for BatchRecognize.

[com.google.cloud.speech.v2.BatchRecognizeFileResult](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileResult)

Final results for a single file.

[com.google.cloud.speech.v2.BatchRecognizeFileResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileResult.Builder)

Final results for a single file.

[com.google.cloud.speech.v2.BatchRecognizeMetadata](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeMetadata)

Operation metadata for BatchRecognize.

[com.google.cloud.speech.v2.BatchRecognizeMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeMetadata.Builder)

Operation metadata for BatchRecognize.

[com.google.cloud.speech.v2.BatchRecognizeRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeRequest)

Request message for the BatchRecognize method.

[com.google.cloud.speech.v2.BatchRecognizeRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeRequest.Builder)

Request message for the BatchRecognize method.

[com.google.cloud.speech.v2.BatchRecognizeResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeResponse)

Response message for BatchRecognize that is packaged into a longrunning Operation.

[com.google.cloud.speech.v2.BatchRecognizeResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeResponse.Builder)

Response message for BatchRecognize that is packaged into a longrunning Operation.

[com.google.cloud.speech.v2.BatchRecognizeResults](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeResults)

Output type for Cloud Storage of BatchRecognize transcripts. Though this proto isn't returned in this API anywhere, the Cloud Storage transcripts will be this proto serialized and should be parsed as such.

[com.google.cloud.speech.v2.BatchRecognizeResults.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeResults.Builder)

Output type for Cloud Storage of BatchRecognize transcripts. Though this proto isn't returned in this API anywhere, the Cloud Storage transcripts will be this proto serialized and should be parsed as such.

[com.google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata)

Metadata about transcription for a single file (for example, progress percent).

[com.google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata.Builder)

Metadata about transcription for a single file (for example, progress percent).

[com.google.cloud.speech.v2.CloudSpeechProto](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CloudSpeechProto)

[com.google.cloud.speech.v2.CloudStorageResult](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CloudStorageResult)

Final results written to Cloud Storage.

[com.google.cloud.speech.v2.CloudStorageResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CloudStorageResult.Builder)

Final results written to Cloud Storage.

[com.google.cloud.speech.v2.Config](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.Config)

Message representing the config for the Speech-to-Text API. This includes an optional [KMS key](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which incoming data will be encrypted.

[com.google.cloud.speech.v2.Config.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.Config.Builder)

Message representing the config for the Speech-to-Text API. This includes an optional [KMS key](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which incoming data will be encrypted.

[com.google.cloud.speech.v2.ConfigName](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ConfigName)

[com.google.cloud.speech.v2.ConfigName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ConfigName.Builder)

Builder for projects/{project}/locations/{location}/config.

[com.google.cloud.speech.v2.CreateCustomClassRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreateCustomClassRequest)

Request message for the CreateCustomClass method.

[com.google.cloud.speech.v2.CreateCustomClassRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreateCustomClassRequest.Builder)

Request message for the CreateCustomClass method.

[com.google.cloud.speech.v2.CreatePhraseSetRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreatePhraseSetRequest)

Request message for the CreatePhraseSet method.

[com.google.cloud.speech.v2.CreatePhraseSetRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreatePhraseSetRequest.Builder)

Request message for the CreatePhraseSet method.

[com.google.cloud.speech.v2.CreateRecognizerRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreateRecognizerRequest)

Request message for the CreateRecognizer method.

[com.google.cloud.speech.v2.CreateRecognizerRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreateRecognizerRequest.Builder)

Request message for the CreateRecognizer method.

[com.google.cloud.speech.v2.CustomClass](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClass)

CustomClass for biasing in speech recognition. Used to define a set of words or phrases that represents a common concept or theme likely to appear in your audio, for example a list of passenger ship names.

[com.google.cloud.speech.v2.CustomClass.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClass.Builder)

CustomClass for biasing in speech recognition. Used to define a set of words or phrases that represents a common concept or theme likely to appear in your audio, for example a list of passenger ship names.

[com.google.cloud.speech.v2.CustomClass.ClassItem](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClass.ClassItem)

An item of the class.

[com.google.cloud.speech.v2.CustomClass.ClassItem.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClass.ClassItem.Builder)

An item of the class.

[com.google.cloud.speech.v2.CustomClassName](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClassName)

[com.google.cloud.speech.v2.CustomClassName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClassName.Builder)

Builder for projects/{project}/locations/{location}/customClasses/{custom\_class}.

[com.google.cloud.speech.v2.DeleteCustomClassRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeleteCustomClassRequest)

Request message for the DeleteCustomClass method.

[com.google.cloud.speech.v2.DeleteCustomClassRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeleteCustomClassRequest.Builder)

Request message for the DeleteCustomClass method.

[com.google.cloud.speech.v2.DeletePhraseSetRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeletePhraseSetRequest)

Request message for the DeletePhraseSet method.

[com.google.cloud.speech.v2.DeletePhraseSetRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeletePhraseSetRequest.Builder)

Request message for the DeletePhraseSet method.

[com.google.cloud.speech.v2.DeleteRecognizerRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeleteRecognizerRequest)

Request message for the DeleteRecognizer method.

[com.google.cloud.speech.v2.DeleteRecognizerRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeleteRecognizerRequest.Builder)

Request message for the DeleteRecognizer method.

[com.google.cloud.speech.v2.ExplicitDecodingConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ExplicitDecodingConfig)

Explicitly specified decoding parameters.

[com.google.cloud.speech.v2.ExplicitDecodingConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ExplicitDecodingConfig.Builder)

Explicitly specified decoding parameters.

[com.google.cloud.speech.v2.GcsOutputConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GcsOutputConfig)

Output configurations for Cloud Storage.

[com.google.cloud.speech.v2.GcsOutputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GcsOutputConfig.Builder)

Output configurations for Cloud Storage.

[com.google.cloud.speech.v2.GetConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetConfigRequest)

Request message for the GetConfig method.

[com.google.cloud.speech.v2.GetConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetConfigRequest.Builder)

Request message for the GetConfig method.

[com.google.cloud.speech.v2.GetCustomClassRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetCustomClassRequest)

Request message for the GetCustomClass method.

[com.google.cloud.speech.v2.GetCustomClassRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetCustomClassRequest.Builder)

Request message for the GetCustomClass method.

[com.google.cloud.speech.v2.GetPhraseSetRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetPhraseSetRequest)

Request message for the GetPhraseSet method.

[com.google.cloud.speech.v2.GetPhraseSetRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetPhraseSetRequest.Builder)

Request message for the GetPhraseSet method.

[com.google.cloud.speech.v2.GetRecognizerRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetRecognizerRequest)

Request message for the GetRecognizer method.

[com.google.cloud.speech.v2.GetRecognizerRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetRecognizerRequest.Builder)

Request message for the GetRecognizer method.

[com.google.cloud.speech.v2.InlineOutputConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.InlineOutputConfig)

Output configurations for inline response.

[com.google.cloud.speech.v2.InlineOutputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.InlineOutputConfig.Builder)

Output configurations for inline response.

[com.google.cloud.speech.v2.InlineResult](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.InlineResult)

Final results returned inline in the recognition response.

[com.google.cloud.speech.v2.InlineResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.InlineResult.Builder)

Final results returned inline in the recognition response.

[com.google.cloud.speech.v2.ListCustomClassesRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListCustomClassesRequest)

Request message for the ListCustomClasses method.

[com.google.cloud.speech.v2.ListCustomClassesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListCustomClassesRequest.Builder)

Request message for the ListCustomClasses method.

[com.google.cloud.speech.v2.ListCustomClassesResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListCustomClassesResponse)

Response message for the ListCustomClasses method.

[com.google.cloud.speech.v2.ListCustomClassesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListCustomClassesResponse.Builder)

Response message for the ListCustomClasses method.

[com.google.cloud.speech.v2.ListPhraseSetsRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListPhraseSetsRequest)

Request message for the ListPhraseSets method.

[com.google.cloud.speech.v2.ListPhraseSetsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListPhraseSetsRequest.Builder)

Request message for the ListPhraseSets method.

[com.google.cloud.speech.v2.ListPhraseSetsResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListPhraseSetsResponse)

Response message for the ListPhraseSets method.

[com.google.cloud.speech.v2.ListPhraseSetsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListPhraseSetsResponse.Builder)

Response message for the ListPhraseSets method.

[com.google.cloud.speech.v2.ListRecognizersRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListRecognizersRequest)

Request message for the ListRecognizers method.

[com.google.cloud.speech.v2.ListRecognizersRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListRecognizersRequest.Builder)

Request message for the ListRecognizers method.

[com.google.cloud.speech.v2.ListRecognizersResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListRecognizersResponse)

Response message for the ListRecognizers method.

[com.google.cloud.speech.v2.ListRecognizersResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListRecognizersResponse.Builder)

Response message for the ListRecognizers method.

[com.google.cloud.speech.v2.LocationName](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.LocationName)

[com.google.cloud.speech.v2.LocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

[com.google.cloud.speech.v2.NativeOutputFileFormatConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.NativeOutputFileFormatConfig)

Output configurations for serialized `BatchRecognizeResults` protos.

[com.google.cloud.speech.v2.NativeOutputFileFormatConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.NativeOutputFileFormatConfig.Builder)

Output configurations for serialized `BatchRecognizeResults` protos.

[com.google.cloud.speech.v2.OperationMetadata](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OperationMetadata)

Represents the metadata of a long-running operation.

[com.google.cloud.speech.v2.OperationMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OperationMetadata.Builder)

Represents the metadata of a long-running operation.

[com.google.cloud.speech.v2.OutputFormatConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OutputFormatConfig)

Configuration for the format of the results stored to `output`.

[com.google.cloud.speech.v2.OutputFormatConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OutputFormatConfig.Builder)

Configuration for the format of the results stored to `output`.

[com.google.cloud.speech.v2.PhraseSet](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSet)

PhraseSet for biasing in speech recognition. A PhraseSet is used to provide "hints" to the speech recognizer to favor specific words and phrases in the results.

[com.google.cloud.speech.v2.PhraseSet.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSet.Builder)

PhraseSet for biasing in speech recognition. A PhraseSet is used to provide "hints" to the speech recognizer to favor specific words and phrases in the results.

[com.google.cloud.speech.v2.PhraseSet.Phrase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSet.Phrase)

A Phrase contains words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are

[com.google.cloud.speech.v2.PhraseSet.Phrase.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSet.Phrase.Builder)

A Phrase contains words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are

[com.google.cloud.speech.v2.PhraseSetName](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSetName)

[com.google.cloud.speech.v2.PhraseSetName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSetName.Builder)

Builder for projects/{project}/locations/{location}/phraseSets/{phrase\_set}.

[com.google.cloud.speech.v2.RecognitionConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionConfig)

Provides information to the Recognizer that specifies how to process the recognition request.

[com.google.cloud.speech.v2.RecognitionConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionConfig.Builder)

Provides information to the Recognizer that specifies how to process the recognition request.

[com.google.cloud.speech.v2.RecognitionFeatures](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionFeatures)

Available recognition features.

[com.google.cloud.speech.v2.RecognitionFeatures.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionFeatures.Builder)

Available recognition features.

[com.google.cloud.speech.v2.RecognitionOutputConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionOutputConfig)

Configuration options for the output(s) of recognition.

[com.google.cloud.speech.v2.RecognitionOutputConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)

Configuration options for the output(s) of recognition.

[com.google.cloud.speech.v2.RecognitionResponseMetadata](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionResponseMetadata)

Metadata about the recognition request and response.

[com.google.cloud.speech.v2.RecognitionResponseMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionResponseMetadata.Builder)

Metadata about the recognition request and response.

[com.google.cloud.speech.v2.RecognizeRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeRequest)

Request message for the Recognize method. Either `content` or `uri` must be supplied. Supplying both or neither returns

[com.google.cloud.speech.v2.RecognizeRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeRequest.Builder)

Request message for the Recognize method. Either `content` or `uri` must be supplied. Supplying both or neither returns

[com.google.cloud.speech.v2.RecognizeResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeResponse)

Response message for the Recognize method.

[com.google.cloud.speech.v2.RecognizeResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeResponse.Builder)

Response message for the Recognize method.

[com.google.cloud.speech.v2.Recognizer](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.Recognizer)

A Recognizer message. Stores recognition configuration and metadata.

[com.google.cloud.speech.v2.Recognizer.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.Recognizer.Builder)

A Recognizer message. Stores recognition configuration and metadata.

[com.google.cloud.speech.v2.RecognizerName](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizerName)

[com.google.cloud.speech.v2.RecognizerName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizerName.Builder)

Builder for projects/{project}/locations/{location}/recognizers/{recognizer}.

[com.google.cloud.speech.v2.SpeakerDiarizationConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeakerDiarizationConfig)

Configuration to enable speaker diarization.

[com.google.cloud.speech.v2.SpeakerDiarizationConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeakerDiarizationConfig.Builder)

Configuration to enable speaker diarization.

[com.google.cloud.speech.v2.SpeechAdaptation](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptation)

Provides "hints" to the speech recognizer to favor specific words and phrases in the results. PhraseSets can be specified as an inline resource, or a reference to an existing PhraseSet resource.

[com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet)

A biasing PhraseSet, which can be either a string referencing the name of an existing PhraseSets resource, or an inline definition of a PhraseSet.

[com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.Builder)

A biasing PhraseSet, which can be either a string referencing the name of an existing PhraseSets resource, or an inline definition of a PhraseSet.

[com.google.cloud.speech.v2.SpeechAdaptation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptation.Builder)

Provides "hints" to the speech recognizer to favor specific words and phrases in the results. PhraseSets can be specified as an inline resource, or a reference to an existing PhraseSet resource.

[com.google.cloud.speech.v2.SpeechClient.ListCustomClassesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListCustomClassesFixedSizeCollection)

[com.google.cloud.speech.v2.SpeechClient.ListCustomClassesPage](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListCustomClassesPage)

[com.google.cloud.speech.v2.SpeechClient.ListCustomClassesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListCustomClassesPagedResponse)

[com.google.cloud.speech.v2.SpeechClient.ListLocationsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListLocationsFixedSizeCollection)

[com.google.cloud.speech.v2.SpeechClient.ListLocationsPage](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListLocationsPage)

[com.google.cloud.speech.v2.SpeechClient.ListLocationsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListLocationsPagedResponse)

[com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsFixedSizeCollection)

[com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsPage](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsPage)

[com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListPhraseSetsPagedResponse)

[com.google.cloud.speech.v2.SpeechClient.ListRecognizersFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListRecognizersFixedSizeCollection)

[com.google.cloud.speech.v2.SpeechClient.ListRecognizersPage](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListRecognizersPage)

[com.google.cloud.speech.v2.SpeechClient.ListRecognizersPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechClient.ListRecognizersPagedResponse)

[com.google.cloud.speech.v2.SpeechGrpc](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechGrpc)

Enables speech transcription and resource management.

[com.google.cloud.speech.v2.SpeechGrpc.SpeechImplBase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechGrpc.SpeechImplBase)

Base class for the server implementation of the service Speech. Enables speech transcription and resource management.

[com.google.cloud.speech.v2.SpeechRecognitionAlternative](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechRecognitionAlternative)

Alternative hypotheses (a.k.a. n-best list).

[com.google.cloud.speech.v2.SpeechRecognitionAlternative.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechRecognitionAlternative.Builder)

Alternative hypotheses (a.k.a. n-best list).

[com.google.cloud.speech.v2.SpeechRecognitionResult](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechRecognitionResult)

A speech recognition result corresponding to a portion of the audio.

[com.google.cloud.speech.v2.SpeechRecognitionResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechRecognitionResult.Builder)

A speech recognition result corresponding to a portion of the audio.

[com.google.cloud.speech.v2.SpeechSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechSettings.Builder)

Builder for SpeechSettings.

[com.google.cloud.speech.v2.SrtOutputFileFormatConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SrtOutputFileFormatConfig)

Output configurations [SubRip Text](https://www.matroska.org/technical/subtitles.html#srt-subtitles) formatted subtitle file.

[com.google.cloud.speech.v2.SrtOutputFileFormatConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SrtOutputFileFormatConfig.Builder)

Output configurations [SubRip Text](https://www.matroska.org/technical/subtitles.html#srt-subtitles) formatted subtitle file.

[com.google.cloud.speech.v2.StreamingRecognitionConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionConfig)

Provides configuration information for the StreamingRecognize request.

[com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

Provides configuration information for the StreamingRecognize request.

[com.google.cloud.speech.v2.StreamingRecognitionFeatures](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures)

Available recognition features specific to streaming recognition requests.

[com.google.cloud.speech.v2.StreamingRecognitionFeatures.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures.Builder)

Available recognition features specific to streaming recognition requests.

[com.google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout)

Events that a timeout can be set on for voice activity.

[com.google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout.Builder)

Events that a timeout can be set on for voice activity.

[com.google.cloud.speech.v2.StreamingRecognitionResult](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionResult)

A streaming speech recognition result corresponding to a portion of the audio that is currently being processed.

[com.google.cloud.speech.v2.StreamingRecognitionResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionResult.Builder)

A streaming speech recognition result corresponding to a portion of the audio that is currently being processed.

[com.google.cloud.speech.v2.StreamingRecognizeRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeRequest)

Request message for the StreamingRecognize method. Multiple

[com.google.cloud.speech.v2.StreamingRecognizeRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeRequest.Builder)

Request message for the StreamingRecognize method. Multiple

[com.google.cloud.speech.v2.StreamingRecognizeResponse](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeResponse)

`StreamingRecognizeResponse` is the only message returned to the client by `StreamingRecognize`. A series of zero or more `StreamingRecognizeResponse` messages are streamed back to the client. If there is no recognizable

[com.google.cloud.speech.v2.StreamingRecognizeResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeResponse.Builder)

`StreamingRecognizeResponse` is the only message returned to the client by `StreamingRecognize`. A series of zero or more `StreamingRecognizeResponse` messages are streamed back to the client. If there is no recognizable

[com.google.cloud.speech.v2.TranscriptNormalization](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranscriptNormalization)

Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable

[com.google.cloud.speech.v2.TranscriptNormalization.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranscriptNormalization.Builder)

Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable

[com.google.cloud.speech.v2.TranscriptNormalization.Entry](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranscriptNormalization.Entry)

A single replacement configuration.

[com.google.cloud.speech.v2.TranscriptNormalization.Entry.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranscriptNormalization.Entry.Builder)

A single replacement configuration.

[com.google.cloud.speech.v2.TranslationConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranslationConfig)

Translation configuration. Use to translate the given audio into text for the desired language.

[com.google.cloud.speech.v2.TranslationConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranslationConfig.Builder)

Translation configuration. Use to translate the given audio into text for the desired language.

[com.google.cloud.speech.v2.UndeleteCustomClassRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeleteCustomClassRequest)

Request message for the UndeleteCustomClass method.

[com.google.cloud.speech.v2.UndeleteCustomClassRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeleteCustomClassRequest.Builder)

Request message for the UndeleteCustomClass method.

[com.google.cloud.speech.v2.UndeletePhraseSetRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeletePhraseSetRequest)

Request message for the UndeletePhraseSet method.

[com.google.cloud.speech.v2.UndeletePhraseSetRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeletePhraseSetRequest.Builder)

Request message for the UndeletePhraseSet method.

[com.google.cloud.speech.v2.UndeleteRecognizerRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeleteRecognizerRequest)

Request message for the UndeleteRecognizer method.

[com.google.cloud.speech.v2.UndeleteRecognizerRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeleteRecognizerRequest.Builder)

Request message for the UndeleteRecognizer method.

[com.google.cloud.speech.v2.UpdateConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateConfigRequest)

Request message for the UpdateConfig method.

[com.google.cloud.speech.v2.UpdateConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateConfigRequest.Builder)

Request message for the UpdateConfig method.

[com.google.cloud.speech.v2.UpdateCustomClassRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateCustomClassRequest)

Request message for the UpdateCustomClass method.

[com.google.cloud.speech.v2.UpdateCustomClassRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateCustomClassRequest.Builder)

Request message for the UpdateCustomClass method.

[com.google.cloud.speech.v2.UpdatePhraseSetRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdatePhraseSetRequest)

Request message for the UpdatePhraseSet method.

[com.google.cloud.speech.v2.UpdatePhraseSetRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdatePhraseSetRequest.Builder)

Request message for the UpdatePhraseSet method.

[com.google.cloud.speech.v2.UpdateRecognizerRequest](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateRecognizerRequest)

Request message for the UpdateRecognizer method.

[com.google.cloud.speech.v2.UpdateRecognizerRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateRecognizerRequest.Builder)

Request message for the UpdateRecognizer method.

[com.google.cloud.speech.v2.VttOutputFileFormatConfig](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.VttOutputFileFormatConfig)

Output configurations for [WebVTT](https://www.w3.org/TR/webvtt1/) formatted subtitle file.

[com.google.cloud.speech.v2.VttOutputFileFormatConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.VttOutputFileFormatConfig.Builder)

Output configurations for [WebVTT](https://www.w3.org/TR/webvtt1/) formatted subtitle file.

[com.google.cloud.speech.v2.WordInfo](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.WordInfo)

Word-specific information for recognized words.

[com.google.cloud.speech.v2.WordInfo.Builder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.WordInfo.Builder)

Word-specific information for recognized words.

## Interfaces

Interface

Description

[com.google.cloud.speech.v2.AutoDetectDecodingConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.AutoDetectDecodingConfigOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeFileMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadataOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeFileResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileResultOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeMetadataOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeRequestOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeResponseOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeResultsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeResultsOrBuilder)

[com.google.cloud.speech.v2.BatchRecognizeTranscriptionMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeTranscriptionMetadataOrBuilder)

[com.google.cloud.speech.v2.CloudStorageResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CloudStorageResultOrBuilder)

[com.google.cloud.speech.v2.ConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ConfigOrBuilder)

[com.google.cloud.speech.v2.CreateCustomClassRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreateCustomClassRequestOrBuilder)

[com.google.cloud.speech.v2.CreatePhraseSetRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreatePhraseSetRequestOrBuilder)

[com.google.cloud.speech.v2.CreateRecognizerRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CreateRecognizerRequestOrBuilder)

[com.google.cloud.speech.v2.CustomClass.ClassItemOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClass.ClassItemOrBuilder)

[com.google.cloud.speech.v2.CustomClassOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClassOrBuilder)

[com.google.cloud.speech.v2.DeleteCustomClassRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeleteCustomClassRequestOrBuilder)

[com.google.cloud.speech.v2.DeletePhraseSetRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeletePhraseSetRequestOrBuilder)

[com.google.cloud.speech.v2.DeleteRecognizerRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.DeleteRecognizerRequestOrBuilder)

[com.google.cloud.speech.v2.ExplicitDecodingConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ExplicitDecodingConfigOrBuilder)

[com.google.cloud.speech.v2.GcsOutputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GcsOutputConfigOrBuilder)

[com.google.cloud.speech.v2.GetConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetConfigRequestOrBuilder)

[com.google.cloud.speech.v2.GetCustomClassRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetCustomClassRequestOrBuilder)

[com.google.cloud.speech.v2.GetPhraseSetRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetPhraseSetRequestOrBuilder)

[com.google.cloud.speech.v2.GetRecognizerRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.GetRecognizerRequestOrBuilder)

[com.google.cloud.speech.v2.InlineOutputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.InlineOutputConfigOrBuilder)

[com.google.cloud.speech.v2.InlineResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.InlineResultOrBuilder)

[com.google.cloud.speech.v2.ListCustomClassesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListCustomClassesRequestOrBuilder)

[com.google.cloud.speech.v2.ListCustomClassesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListCustomClassesResponseOrBuilder)

[com.google.cloud.speech.v2.ListPhraseSetsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListPhraseSetsRequestOrBuilder)

[com.google.cloud.speech.v2.ListPhraseSetsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListPhraseSetsResponseOrBuilder)

[com.google.cloud.speech.v2.ListRecognizersRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListRecognizersRequestOrBuilder)

[com.google.cloud.speech.v2.ListRecognizersResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ListRecognizersResponseOrBuilder)

[com.google.cloud.speech.v2.NativeOutputFileFormatConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.NativeOutputFileFormatConfigOrBuilder)

[com.google.cloud.speech.v2.OperationMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OperationMetadataOrBuilder)

[com.google.cloud.speech.v2.OutputFormatConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OutputFormatConfigOrBuilder)

[com.google.cloud.speech.v2.PhraseSet.PhraseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSet.PhraseOrBuilder)

[com.google.cloud.speech.v2.PhraseSetOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSetOrBuilder)

[com.google.cloud.speech.v2.RecognitionConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionConfigOrBuilder)

[com.google.cloud.speech.v2.RecognitionFeaturesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionFeaturesOrBuilder)

[com.google.cloud.speech.v2.RecognitionOutputConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionOutputConfigOrBuilder)

[com.google.cloud.speech.v2.RecognitionResponseMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionResponseMetadataOrBuilder)

[com.google.cloud.speech.v2.RecognizeRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeRequestOrBuilder)

[com.google.cloud.speech.v2.RecognizeResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeResponseOrBuilder)

[com.google.cloud.speech.v2.RecognizerOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizerOrBuilder)

[com.google.cloud.speech.v2.SpeakerDiarizationConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeakerDiarizationConfigOrBuilder)

[com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSetOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSetOrBuilder)

[com.google.cloud.speech.v2.SpeechAdaptationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptationOrBuilder)

[com.google.cloud.speech.v2.SpeechGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechGrpc.AsyncService)

Enables speech transcription and resource management.

[com.google.cloud.speech.v2.SpeechRecognitionAlternativeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechRecognitionAlternativeOrBuilder)

[com.google.cloud.speech.v2.SpeechRecognitionResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechRecognitionResultOrBuilder)

[com.google.cloud.speech.v2.SrtOutputFileFormatConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SrtOutputFileFormatConfigOrBuilder)

[com.google.cloud.speech.v2.StreamingRecognitionConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionConfigOrBuilder)

[com.google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeoutOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeoutOrBuilder)

[com.google.cloud.speech.v2.StreamingRecognitionFeaturesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionFeaturesOrBuilder)

[com.google.cloud.speech.v2.StreamingRecognitionResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognitionResultOrBuilder)

[com.google.cloud.speech.v2.StreamingRecognizeRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeRequestOrBuilder)

[com.google.cloud.speech.v2.StreamingRecognizeResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeResponseOrBuilder)

[com.google.cloud.speech.v2.TranscriptNormalization.EntryOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranscriptNormalization.EntryOrBuilder)

[com.google.cloud.speech.v2.TranscriptNormalizationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranscriptNormalizationOrBuilder)

[com.google.cloud.speech.v2.TranslationConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.TranslationConfigOrBuilder)

[com.google.cloud.speech.v2.UndeleteCustomClassRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeleteCustomClassRequestOrBuilder)

[com.google.cloud.speech.v2.UndeletePhraseSetRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeletePhraseSetRequestOrBuilder)

[com.google.cloud.speech.v2.UndeleteRecognizerRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UndeleteRecognizerRequestOrBuilder)

[com.google.cloud.speech.v2.UpdateConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateConfigRequestOrBuilder)

[com.google.cloud.speech.v2.UpdateCustomClassRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateCustomClassRequestOrBuilder)

[com.google.cloud.speech.v2.UpdatePhraseSetRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdatePhraseSetRequestOrBuilder)

[com.google.cloud.speech.v2.UpdateRecognizerRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.UpdateRecognizerRequestOrBuilder)

[com.google.cloud.speech.v2.VttOutputFileFormatConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.VttOutputFileFormatConfigOrBuilder)

[com.google.cloud.speech.v2.WordInfoOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.WordInfoOrBuilder)

## Enums

Enum

Description

[com.google.cloud.speech.v2.BatchRecognizeFileMetadata.AudioSourceCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileMetadata.AudioSourceCase)

[com.google.cloud.speech.v2.BatchRecognizeFileResult.ResultCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeFileResult.ResultCase)

[com.google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy)

Possible processing strategies for batch requests.

[com.google.cloud.speech.v2.CustomClass.State](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.CustomClass.State)

Set of states that define the lifecycle of a CustomClass.

[com.google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding)

Supported audio data encodings.

[com.google.cloud.speech.v2.OperationMetadata.MetadataCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OperationMetadata.MetadataCase)

[com.google.cloud.speech.v2.OperationMetadata.RequestCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.OperationMetadata.RequestCase)

[com.google.cloud.speech.v2.PhraseSet.State](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.PhraseSet.State)

Set of states that define the lifecycle of a PhraseSet.

[com.google.cloud.speech.v2.RecognitionConfig.DecodingConfigCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionConfig.DecodingConfigCase)

[com.google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode)

Options for how to recognize multi-channel audio.

[com.google.cloud.speech.v2.RecognitionOutputConfig.OutputCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognitionOutputConfig.OutputCase)

[com.google.cloud.speech.v2.RecognizeRequest.AudioSourceCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.RecognizeRequest.AudioSourceCase)

[com.google.cloud.speech.v2.Recognizer.State](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.Recognizer.State)

Set of states that define the lifecycle of a Recognizer.

[com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.ValueCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.ValueCase)

[com.google.cloud.speech.v2.StreamingRecognizeRequest.StreamingRequestCase](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeRequest.StreamingRequestCase)

[com.google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType](https://cloud.google.com/java/docs/reference/google-cloud-speech/4.40.0/com.google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType)

Indicates the type of speech event.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
