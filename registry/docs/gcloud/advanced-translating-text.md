-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Cloud Translation](https://docs.cloud.google.com/translate/docs)
-   [Guides](https://docs.cloud.google.com/translate/docs/overview)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# Translating text

This page shows you how to translate sample text with both the Basic and Advanced editions of Cloud Translation.

As the [Basic text translation example](#basic_tx) illustrates, the Cloud Translation - Basic API provides straightforward plug-and-play access to the standard Neural Machine Translation (NMT) model.

[Cloud Translation - Advanced](#advanced_ed), on the other hand, is optimized for customization and long form content use cases. For sample code, see the [Advanced text translation example](#advanced_tx). In addition to the Neural Machine Translation (NMT) model, Advanced gives you access to the Translation LLM (Google's newest, highest quality LLM-style translation model), and lets you [create custom models](/translate/docs/advanced/automl-beginner) for special situations.

Cloud Translation - Advanced also provides advanced text translation capabilities like [translating documents](/translate/docs/advanced/translate-documents) and [creating glossaries](/translate/docs/advanced/glossary) to ensure that your domain-specific terminology is translated correctly.

**Note:** Refer to [Migrating to Cloud Translation - Advanced](/translation/docs/migrate-to-v3) for details regarding differences between Basic and Advanced.

## Before you begin

Before you can start using the Cloud Translation API, you must have a project that has the Cloud Translation API enabled, and you must have the appropriate credentials. You can also install client libraries for common programming languages to help you make calls to the API. For more information, see the [Setup](/translate/docs/setup) page.

## Advanced text translation

For translations with Cloud Translation - Advanced, the input can be plain text or HTML. Cloud Translation API doesn't translate any HTML tags in the input, only text that appears between the tags. The output retains the (untranslated) HTML tags, with the translated text between the tags to the extent possible due to differences between the source and target languages.

**Note:** Cloud Translation API does not support input text that uses other markup languages such as XML. The result when attempting to translate content with other forms of markup is undefined.

### Advanced text translation example

**Note:** Your project-number or project-id can be found in the [Google Cloud Console](https://console.cloud.google.com/?_ga=2.224573082.-1057200951.1556291463).

### REST

To translate text, make a `POST` request and provide JSON in the request body that identifies the language to translate from (`source_language_code`), the language to translate to (`target_language_code`), and the text to translate (`contents`). You can provide multiple strings of text to translate by including them in your JSON (see example). You identify your source and target languages by using their [ISO-639](https://wikipedia.org/wiki/ISO_639) codes.

The following shows an example of a `POST` request using `curl` or PowerShell. The example uses the access token for a service account set up for the project using the Google Cloud [Google Cloud CLI](https://cloud.google.com/sdk/). For instructions on installing the Google Cloud CLI, setting up a project with a service account, and obtaining an access token, see the [Setup](/translate/docs/setup) page.

Before using any of the request data, make the following replacements:

-   PROJECT\_NUMBER\_OR\_ID: the numeric or alphanumeric ID of your Google Cloud project

HTTP method and URL:

POST https://translation.googleapis.com/v3/projects/PROJECT\_NUMBER\_OR\_ID:translateText

Request JSON body:

{
  "sourceLanguageCode": "en",
  "targetLanguageCode": "ru",
  "contents": \["Dr. Watson, come here!", "Bring me some coffee!"\]
}

To send your request, expand one of these options:

#### curl (Linux, macOS, or Cloud Shell)

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) , or by using [Cloud Shell](/shell/docs), which automatically logs you into the `gcloud` CLI . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

curl -X POST \\  
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \\  
     -H "x-goog-user-project: PROJECT\_NUMBER\_OR\_ID" \\  
     -H "Content-Type: application/json; charset=utf-8" \\  
     -d @request.json \\  
     "https://translation.googleapis.com/v3/projects/PROJECT\_NUMBER\_OR\_ID:translateText"

#### PowerShell (Windows)

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

$cred = gcloud auth print-access-token  
$headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = "PROJECT\_NUMBER\_OR\_ID" }  
  
Invoke-WebRequest \`  
    -Method POST \`  
    -Headers $headers \`  
    -ContentType: "application/json; charset=utf-8" \`  
    -InFile request.json \`  
    -Uri "https://translation.googleapis.com/v3/projects/PROJECT\_NUMBER\_OR\_ID:translateText" | Select-Object -Expand Content

You should receive a JSON response similar to the following:

{
  "translations": \[
    {
      "translatedText": "Доктор Ватсон, иди сюда!",
    },
    {
      "translatedText": "Принеси мне кофе!",
    }
  \]
}

The `translations` array contains two `translatedText` fields with translations provided in the requested [`targetLanguageCode`](/translate/docs/reference/rest/v3/projects/translateText#body.request_body.FIELDS.target_language_code) language (`ru`: Russian). The translations are listed in the same order as the corresponding source array in the request.

### Go

Before trying this sample, follow the Go setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Go API reference documentation](https://godoc.org/cloud.google.com/go/translate).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// Imports the Google Cloud Translation library
import (
	"context"
	"fmt"
	"io"

	translate "cloud.google.com/go/translate/apiv3"
	"cloud.google.com/go/translate/apiv3/translatepb"
)

func translateText(w io.Writer, projectID string, sourceLang string, targetLang string, text string) error {
	// projectID := "your-project-id"
	// sourceLang := "en-US"
	// targetLang := "fr"
	// text := "Text you wish to translate"

	// Instantiates a client
	ctx := context.Background()
	client, err := translate.NewTranslationClient(ctx)
	if err != nil {
		return fmt.Errorf("NewTranslationClient: %w", err)
	}
	defer client.Close()

	// Construct request
	req := &translatepb.TranslateTextRequest{
		Parent:             fmt.Sprintf("projects/%s/locations/global", projectID),
		SourceLanguageCode: sourceLang,
		TargetLanguageCode: targetLang,
		MimeType:           "text/plain", // Mime types: "text/plain", "text/html"
		Contents:           []string{text},
	}

	resp, err := client.TranslateText(ctx, req)
	if err != nil {
		return fmt.Errorf("TranslateText: %w", err)
	}

	// Display the translation for each input text provided
	for _, translation := range resp.GetTranslations() {
		fmt.Fprintf(w, "Translated text: %v\n", translation.GetTranslatedText())
	}

	return nil
}
```

### Java

Before trying this sample, follow the Java setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Java API reference documentation](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// Imports the Google Cloud Translation library.
import com.google.cloud.translate.v3.LocationName;
import com.google.cloud.translate.v3.TranslateTextRequest;
import com.google.cloud.translate.v3.TranslateTextResponse;
import com.google.cloud.translate.v3.Translation;
import com.google.cloud.translate.v3.TranslationServiceClient;
import java.io.IOException;


public class TranslateText {

  // Set and pass variables to overloaded translateText() method for translation.
  public static void translateText() throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "YOUR-PROJECT-ID";
    // Supported Languages: https://cloud.google.com/translate/docs/languages
    String targetLanguage = "your-target-language";
    String text = "your-text";
    translateText(projectId, targetLanguage, text);
  }

  // Translate text to target language.
  public static void translateText(String projectId, String targetLanguage, String text)
      throws IOException {

    // Initialize client that will be used to send requests. This client only needs to be created
    // once, and can be reused for multiple requests. After completing all of your requests, call
    // the "close" method on the client to safely clean up any remaining background resources.
    try (TranslationServiceClient client = TranslationServiceClient.create()) {
      // Supported Locations: `global`, [glossary location], or [model location]
      // Glossaries must be hosted in `us-central1`
      // Custom Models must use the same location as your model. (us-central1)
      LocationName parent = LocationName.of(projectId, "global");

      // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats
      TranslateTextRequest request =
          TranslateTextRequest.newBuilder()
              .setParent(parent.toString())
              .setMimeType("text/plain")
              .setTargetLanguageCode(targetLanguage)
              .addContents(text)
              .build();

      TranslateTextResponse response = client.translateText(request);

      // Display the translation for each input text provided
      for (Translation translation : response.getTranslationsList()) {
        System.out.printf("Translated text: %s\n", translation.getTranslatedText());
      }
    }
  }
}
```

### Node.js

Before trying this sample, follow the Node.js setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Node.js API reference documentation](/nodejs/docs/reference/translate/latest).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
/**
 * TODO(developer): Uncomment these variables before running the sample
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'global';
// const text = 'text to translate';

// Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

async function translateText() {
  // MIME type of the content to translate
  // Supported MIME types:
  // https://cloud.google.com/translate/docs/supported-formats
  const mimeType = 'text/plain';

  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: mimeType,
    sourceLanguageCode: 'en',
    targetLanguageCode: 'sr-Latn',
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translation: ${translation.translatedText}`);
  }
}

translateText();
```

### Python

Before trying this sample, follow the Python setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Python API reference documentation](/python/docs/reference/translate/latest).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
import os

# Import the Google Cloud Translation library.
from google.cloud import translate_v3

PROJECT_ID = os.environ.get("GOOGLE_CLOUD_PROJECT")


def translate_text(
    text: str = "YOUR_TEXT_TO_TRANSLATE",
    source_language_code: str = "en-US",
    target_language_code: str = "fr",
) -> translate_v3.TranslationServiceClient:
    """Translate Text from a Source language to a Target language.
    Args:
        text: The content to translate.
        source_language_code: The code of the source language.
        target_language_code: The code of the target language.
            For example: "fr" for French, "es" for Spanish, etc.
            Find available languages and codes here:
            https://cloud.google.com/translate/docs/languages#neural_machine_translation_model
    """

    # Initialize Translation client.
    client = translate_v3.TranslationServiceClient()
    parent = f"projects/{PROJECT_ID}/locations/global"

    # MIME type of the content to translate.
    # Supported MIME types:
    # https://cloud.google.com/translate/docs/supported-formats
    mime_type = "text/plain"

    # Translate text from the source to the target language.
    response = client.translate_text(
        contents=[text],
        parent=parent,
        mime_type=mime_type,
        source_language_code=source_language_code,
        target_language_code=target_language_code,
    )

    # Display the translation for the text.
    # For example, for "Hello! How are you doing today?":
    # Translated text: Bonjour comment vas-tu aujourd'hui?
    for translation in response.translations:
        print(f"Translated text: {translation.translated_text}")

    return response
```

### Additional languages

**C#**: Please follow the [C# setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for .NET.](https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Translate.V3/index.html)

**PHP**: Please follow the [PHP setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for PHP.](/php/docs/reference/cloud-translate/latest)

**Ruby**: Please follow the [Ruby setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for Ruby.](https://googleapis.dev/ruby/google-cloud-translate/latest/Google/Cloud/Translate.html)

### Translate text using a specific model

### REST

You can specify which model to use for translation by using the [`model`](/translate/docs/reference/rest/v3/projects/translateText#body.request_body.FIELDS.model) query parameter.

The following example translates text by using a custom model with a model ID of `1395675701985363739`. You can get the model ID for a custom model from the list of models in the Google Cloud console or from the API response or the corresponding pantheon page when you train the model. To use the translation LLM, specify `general/translation-llm` as the model ID. To use the custom Translation LLM (Public Preview), specify `models/translation-llm-custom/{model-id}` as the model ID.

**Note:** If you're specifying a custom model, the model must exist in the project you're using.

Before using any of the request data, make the following replacements:

-   PROJECT\_ID: Your Google Cloud project ID.
-   LOCATION: The region where the custom model is located, such as `us-central1`.

HTTP method and URL:

POST https://translation.googleapis.com/v3/projects/PROJECT\_ID/locations/LOCATION:translateText

Request JSON body:

{
  "model": "projects/PROJECT\_ID/locations/LOCATION/models/1395675701985363739",
  "sourceLanguageCode": "en",
  "targetLanguageCode": "ru",
  "contents": \["Dr. Watson, please discard your trash. You've shared unsolicited email with me.
  Let's talk about spam and importance ranking in a confidential mode."\]
}

To send your request, choose one of these options:

#### curl

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) , or by using [Cloud Shell](/shell/docs), which automatically logs you into the `gcloud` CLI . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

curl -X POST \\  
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \\  
     -H "x-goog-user-project: PROJECT\_ID" \\  
     -H "Content-Type: application/json; charset=utf-8" \\  
     -d @request.json \\  
     "https://translation.googleapis.com/v3/projects/PROJECT\_ID/locations/LOCATION:translateText"

#### PowerShell

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

$cred = gcloud auth print-access-token  
$headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = "PROJECT\_ID" }  
  
Invoke-WebRequest \`  
    -Method POST \`  
    -Headers $headers \`  
    -ContentType: "application/json; charset=utf-8" \`  
    -InFile request.json \`  
    -Uri "https://translation.googleapis.com/v3/projects/PROJECT\_ID/locations/LOCATION:translateText" | Select-Object -Expand Content

You should receive a JSON response similar to the following:

{
  "translation": {
    "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора.
    Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о
    спаме и важности рейтинга в конфиденциальном режиме.",
    "model": "projects/PROJECT\_NUMBER/locations/LOCATION/models/1395675701985363739"
  }
}

### Go

Before trying this sample, follow the Go setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Go API reference documentation](https://godoc.org/cloud.google.com/go/translate).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
import (
	"context"
	"fmt"
	"io"

	translate "cloud.google.com/go/translate/apiv3"
	"cloud.google.com/go/translate/apiv3/translatepb"
)

// translateTextWithModel translates input text and returns translated text.
func translateTextWithModel(w io.Writer, projectID string, location string, sourceLang string, targetLang string, text string, modelID string) error {
	// projectID := "my-project-id"
	// location := "us-central1"
	// sourceLang := "en"
	// targetLang := "fr"
	// text := "Hello, world!"
	// modelID := "your-model-id"

	ctx := context.Background()
	client, err := translate.NewTranslationClient(ctx)
	if err != nil {
		return fmt.Errorf("NewTranslationClient: %w", err)
	}
	defer client.Close()

	req := &translatepb.TranslateTextRequest{
		Parent:             fmt.Sprintf("projects/%s/locations/%s", projectID, location),
		SourceLanguageCode: sourceLang,
		TargetLanguageCode: targetLang,
		MimeType:           "text/plain", // Mime types: "text/plain", "text/html"
		Contents:           []string{text},
		Model:              fmt.Sprintf("projects/%s/locations/%s/models/%s", projectID, location, modelID),
	}

	resp, err := client.TranslateText(ctx, req)
	if err != nil {
		return fmt.Errorf("TranslateText: %w", err)
	}

	// Display the translation for each input text provided
	for _, translation := range resp.GetTranslations() {
		fmt.Fprintf(w, "Translated text: %v\n", translation.GetTranslatedText())
	}

	return nil
}
```

### Java

Before trying this sample, follow the Java setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Java API reference documentation](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
import com.google.cloud.translate.v3.LocationName;
import com.google.cloud.translate.v3.TranslateTextRequest;
import com.google.cloud.translate.v3.TranslateTextResponse;
import com.google.cloud.translate.v3.Translation;
import com.google.cloud.translate.v3.TranslationServiceClient;
import java.io.IOException;

public class TranslateTextWithModel {

  public static void translateTextWithModel() throws IOException {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "YOUR-PROJECT-ID";
    // Supported Languages: https://cloud.google.com/translate/docs/languages
    String sourceLanguage = "your-source-language";
    String targetLanguage = "your-target-language";
    String text = "your-text";
    String modelId = "YOUR-MODEL-ID";
    translateTextWithModel(projectId, sourceLanguage, targetLanguage, text, modelId);
  }

  // Translating Text with Model
  public static void translateTextWithModel(
      String projectId, String sourceLanguage, String targetLanguage, String text, String modelId)
      throws IOException {

    // Initialize client that will be used to send requests. This client only needs to be created
    // once, and can be reused for multiple requests. After completing all of your requests, call
    // the "close" method on the client to safely clean up any remaining background resources.
    try (TranslationServiceClient client = TranslationServiceClient.create()) {
      // Supported Locations: `global`, [glossary location], or [model location]
      // Glossaries must be hosted in `us-central1`
      // Custom Models must use the same location as your model. (us-central1)
      String location = "us-central1";
      LocationName parent = LocationName.of(projectId, location);
      String modelPath =
          String.format("projects/%s/locations/%s/models/%s", projectId, location, modelId);

      // Supported Mime Types: https://cloud.google.com/translate/docs/supported-formats
      TranslateTextRequest request =
          TranslateTextRequest.newBuilder()
              .setParent(parent.toString())
              .setMimeType("text/plain")
              .setSourceLanguageCode(sourceLanguage)
              .setTargetLanguageCode(targetLanguage)
              .addContents(text)
              .setModel(modelPath)
              .build();

      TranslateTextResponse response = client.translateText(request);

      // Display the translation for each input text provided
      for (Translation translation : response.getTranslationsList()) {
        System.out.printf("Translated text: %s\n", translation.getTranslatedText());
      }
    }
  }
}
```

### Node.js

Before trying this sample, follow the Node.js setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Node.js API reference documentation](/nodejs/docs/reference/translate/latest).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'us-central1';
// const modelId = 'YOUR_MODEL_ID';
// const text = 'text to translate';

// Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();
async function translateTextWithModel() {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: 'ja',
    model: `projects/${projectId}/locations/${location}/models/${modelId}`,
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translated Content: ${translation.translatedText}`);
  }
}

translateTextWithModel();
```

### Python

Before trying this sample, follow the Python setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Python API reference documentation](/python/docs/reference/translate/latest).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```

from google.cloud import translate


def translate_text_with_model(
    text: str = "YOUR_TEXT_TO_TRANSLATE",
    project_id: str = "YOUR_PROJECT_ID",
    model_id: str = "YOUR_MODEL_ID",
) -> translate.TranslationServiceClient:
    """Translates a given text using Translation custom model."""

    client = translate.TranslationServiceClient()

    location = "us-central1"
    parent = f"projects/{project_id}/locations/{location}"
    model_path = f"{parent}/models/{model_id}"

    # Supported language codes: https://cloud.google.com/translate/docs/languages
    response = client.translate_text(
        request={
            "contents": [text],
            "target_language_code": "ja",
            "model": model_path,
            "source_language_code": "en",
            "parent": parent,
            "mime_type": "text/plain",  # mime types: text/plain, text/html
        }
    )
    # Display the translation for each input text provided
    for translation in response.translations:
        print(f"Translated text: {translation.translated_text}")

    return response

```

### Additional languages

**C#**: Please follow the [C# setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for .NET.](https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Translate.V3/index.html)

**PHP**: Please follow the [PHP setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for PHP.](/php/docs/reference/cloud-translate/latest)

**Ruby**: Please follow the [Ruby setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for Ruby.](https://googleapis.dev/ruby/google-cloud-translate/latest/Google/Cloud/Translate.html)

### Transliteration

**Preview**

This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the [Service Specific Terms](/terms/service-terms#1). Pre-GA features are available "as is" and might have limited support. For more information, see the [launch stage descriptions](https://cloud.google.com/products/#product-launch-stages).

Transliteration is a configuration setting in the `translateText` method. When you enable transliteration, you translate romanized text (Latin script) directly to a target language. For example, you can translate romanized Japanese text directly to English, Spanish, or Chinese. The resulting translations are in the target language's writing system.

In your transliteration requests, include only romanized text. If you mix romanized text with non-romanized text, Cloud Translation can't ensure consistent and proper translations.

#### Considerations

Transliteration differs from standard text translations in the following ways:

-   Transliteration supports a limited number of languages. For more information, see the **Transliteration** column on the [Supported languages](/translate/docs/languages#roman) page.
-   The MIME type must be `text/plain`. HTML is not supported.
-   Transliteration is supported by the default standard model only. Custom models aren't supported.
-   Transliteration has a lower default content quota. For more information, see [Quotas and limits](/translate/quotas).

### REST

Set the `transliteration_config` field on the [`translateText`](/translate/docs/reference/rest/v3/projects.locations/translateText) method.

Before using any of the request data, make the following replacements:

-   PROJECT\_NUMBER\_OR\_ID: The numeric or alphanumeric ID of your Google Cloud project.
-   LOCATION: Region where you want to run this operation. For example, `us-central1`.
-   SOURCE\_LANGUAGE: (Optional) The language code of the input text. If known, set to one of the language codes listed in [Language support](/translate/docs/languages#roman).
-   TARGET\_LANGUAGE: The target language to translate the input text to. Set to one of the language codes listed in [Language support](/translate/docs/languages#roman).
-   SOURCE\_TEXT: Romanized text in the source language to translate.

HTTP method and URL:

POST https://translation.googleapis.com/v3/projects/PROJECT\_NUMBER\_OR\_ID/locations/LOCATION:translateText

Request JSON body:

{
  "source\_language\_code": "SOURCE\_LANGUAGE",
  "target\_language\_code": "TARGET\_LANGUAGE",
  "contents": "SOURCE\_TEXT",
  "mime\_type": "text/plain",
  "transliteration\_config": { "enable\_transliteration": true}
}

To send your request, expand one of these options:

#### curl (Linux, macOS, or Cloud Shell)

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) , or by using [Cloud Shell](/shell/docs), which automatically logs you into the `gcloud` CLI . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

curl -X POST \\  
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \\  
     -H "x-goog-user-project: PROJECT\_NUMBER\_OR\_ID" \\  
     -H "Content-Type: application/json; charset=utf-8" \\  
     -d @request.json \\  
     "https://translation.googleapis.com/v3/projects/PROJECT\_NUMBER\_OR\_ID/locations/LOCATION:translateText"

#### PowerShell (Windows)

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

$cred = gcloud auth print-access-token  
$headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = "PROJECT\_NUMBER\_OR\_ID" }  
  
Invoke-WebRequest \`  
    -Method POST \`  
    -Headers $headers \`  
    -ContentType: "application/json; charset=utf-8" \`  
    -InFile request.json \`  
    -Uri "https://translation.googleapis.com/v3/projects/PROJECT\_NUMBER\_OR\_ID/locations/LOCATION:translateText" | Select-Object -Expand Content

You should receive a JSON response similar to the following:

{
  "translations": \[
    {
      "translatedText": "TRANSLATED\_TEXT",
    }
  \]
}

## Basic text translation example

### REST

Make a Cloud Translation - Basic request using a REST method call to the Basic `translate` method. You identify your source and target languages by using their [ISO-639](https://wikipedia.org/wiki/ISO_639) codes.

The following shows an example of a `POST` request using `curl` or PowerShell.

Before using any of the request data, make the following replacements:

-   `PROJECT_NUMBER_OR_ID`: the numeric or alphanumeric ID of your Google Cloud project

HTTP method and URL:

POST https://translation.googleapis.com/language/translate/v2

Request JSON body:

{
  "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.",
  "source": "en",
  "target": "es",
  "format": "text"
}

To send your request, choose one of these options:

#### curl

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) , or by using [Cloud Shell](/shell/docs), which automatically logs you into the `gcloud` CLI . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

curl -X POST \\  
     -H "Authorization: Bearer $(gcloud auth print-access-token)" \\  
     -H "x-goog-user-project: PROJECT\_NUMBER\_OR\_ID" \\  
     -H "Content-Type: application/json; charset=utf-8" \\  
     -d @request.json \\  
     "https://translation.googleapis.com/language/translate/v2"

#### PowerShell

**Note:** The following command assumes that you have logged in to the `gcloud` CLI with your user account by running [`gcloud init`](/sdk/gcloud/reference/init) or [`gcloud auth login`](/sdk/gcloud/reference/auth/login) . You can check the currently active account by running [`gcloud auth list`](/sdk/gcloud/reference/auth/list).

Save the request body in a file named `request.json`, and execute the following command:

$cred = gcloud auth print-access-token  
$headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = "PROJECT\_NUMBER\_OR\_ID" }  
  
Invoke-WebRequest \`  
    -Method POST \`  
    -Headers $headers \`  
    -ContentType: "application/json; charset=utf-8" \`  
    -InFile request.json \`  
    -Uri "https://translation.googleapis.com/language/translate/v2" | Select-Object -Expand Content

You should receive a JSON response similar to the following:

{
  "data": {
    "translations": \[{
      "translatedText": "La Gran Pirámide de Giza (también conocida como la Pirámide de Khufu o la Pirámide de Keops) es la más antigua y más grande de las tres pirámides en el complejo de la pirámide de Giza."
    }\]
  }
}

### Go

Before trying this sample, follow the Go setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Go API reference documentation](https://godoc.org/cloud.google.com/go/translate).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
import (
	"context"
	"fmt"
	"io"

	"cloud.google.com/go/translate"
	"golang.org/x/text/language"
)

// translateText translates the given text into the specified targetLanguage. sourceLanguage
// is optional. If empty, the API will attempt to detect the source language automatically.
// targetLanguage and sourceLanguage should follow ISO 639 language code of the input text
// (e.g., 'fr' for French)
//
// Find a list of supported languages and codes here:
// https://cloud.google.com/translate/docs/languages#nmt
func translateText(w io.Writer, targetLanguage, sourceLanguage, text string) error {
	ctx := context.Background()

	// Create new Translate client.
	client, err := translate.NewClient(ctx)
	if err != nil {
		return fmt.Errorf("translate.NewClient error: %w", err)
	}
	defer client.Close()

	// Get required tag by parsing the target language.
	targetLang, err := language.Parse(targetLanguage)
	if err != nil {
		return fmt.Errorf("language.Parse: %w", err)
	}

	options := &translate.Options{}

	if sourceLanguage != "" {
		sourceLang, err := language.Parse(sourceLanguage)
		if err != nil {
			return fmt.Errorf("language.Parse: %w", err)
		}
		options = &translate.Options{
			Source: sourceLang,
		}
	}

	// Find more information about translate function here:
	// https://pkg.go.dev/cloud.google.com/go/translate#Client.Translate
	resp, err := client.Translate(ctx, []string{text}, targetLang, options)
	if err != nil {
		return fmt.Errorf("client.Translate error: %w", err)
	}
	if len(resp) == 0 {
		return fmt.Errorf("client.Translate returned empty response to text: %s", text)
	}

	// Print results to buffer.
	fmt.Fprintf(w, "Input Text: %s\n", resp[0].Text)
	fmt.Fprintf(w, "Translated Test: %s\n", text)

	return nil
}
```

### Java

Before trying this sample, follow the Java setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Java API reference documentation](https://cloud.google.com/java/docs/reference/google-cloud-translate/latest/com.google.cloud.translate).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// TODO(developer): Uncomment these lines.
// import com.google.cloud.translate.*;
// Translate translate = TranslateOptions.getDefaultInstance().getService();

Translation translation = translate.translate("¡Hola Mundo!");
System.out.printf("Translated Text:\n\t%s\n", translation.getTranslatedText());
```

### Node.js

Before trying this sample, follow the Node.js setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Node.js API reference documentation](/nodejs/docs/reference/translate/latest).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';

async function translateText() {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();
```

### Python

Before trying this sample, follow the Python setup instructions in the [Cloud Translation quickstart using client libraries](/translate/docs/quickstart-client-libraries). For more information, see the [Cloud Translation Python API reference documentation](/python/docs/reference/translate/latest).

To authenticate to Cloud Translation, set up Application Default Credentials. For more information, see [Set up authentication for a local development environment](/docs/authentication/set-up-adc-local-dev-environment).

```
def translate_text(
    text: str | bytes | list[str] = "¡Hola amigos y amigas!",
    target_language: str = "en",
    source_language: str | None = None,
) -> dict:
    """Translates a given text into the specified target language.

    Find a list of supported languages and codes here:
    https://cloud.google.com/translate/docs/languages#nmt

    Args:
        text: The text to translate. Can be a string, bytes or a list of strings.
              If bytes, it will be decoded as UTF-8.
        target_language: The ISO 639 language code to translate the text into
                         (e.g., 'en' for English, 'es' for Spanish).
        source_language: Optional. The ISO 639 language code of the input text
                         (e.g., 'fr' for French). If None, the API will attempt
                         to detect the source language automatically.

    Returns:
        A dictionary containing the translation results.
    """

    from google.cloud import translate_v2 as translate

    translate_client = translate.Client()

    if isinstance(text, bytes):
        text = [text.decode("utf-8")]

    if isinstance(text, str):
        text = [text]

    # If a string is supplied, a single dictionary will be returned.
    # In case a list of strings is supplied, this method
    # will return a list of dictionaries.

    # Find more information about translate function here:
    # https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate_v2.client.Client#google_cloud_translate_v2_client_Client_translate
    results = translate_client.translate(
        values=text,
        target_language=target_language,
        source_language=source_language
    )

    for result in results:
        if "detectedSourceLanguage" in result:
            print(f"Detected source language: {result['detectedSourceLanguage']}")

        print(f"Input text: {result['input']}")
        print(f"Translated text: {result['translatedText']}")
        print()

    return results
```

### Additional languages

**C#**: Please follow the [C# setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for .NET.](https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Translate.V3/index.html)

**PHP**: Please follow the [PHP setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for PHP.](/php/docs/reference/cloud-translate/latest)

**Ruby**: Please follow the [Ruby setup instructions](/translate/docs/reference/api-overview#client_libraries) on the client libraries page and then visit the [Cloud Translation reference documentation for Ruby.](https://googleapis.dev/ruby/google-cloud-translate/latest/Google/Cloud/Translate.html)

### Model parameter

When you make a translation request to the Cloud Translation - Basic, your text is translated using the Google Neural Machine Translation (NMT) model. This is the only model you can use with Cloud Translation - Basic. To use a customized NMT model or the Translation LLM to translate text, [Cloud Translation - Advanced](#advanced_tx) is required.

**Note:** Cloud Translation previously offered a Phrase-Based Machine Translation (PBMT) model (also known as the `base` model). If you specify that model for translations, Cloud Translation uses the NMT model instead.

## Additional resources

-   For help on resolving common issues or errors, see the [Troubleshooting](/translate/troubleshooting) page.
-   For answers to general questions about Cloud Translation, see the [General FAQ](/translate/faq) page.
-   Cloud Translation is available in two editions. For more information about each edition, see [Comparing Basic and Advanced](/translate/docs/editions).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
