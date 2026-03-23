Standard large language models fail to process very long text documents because of context window limitations. Qwen-Long provides a context window of 10 million tokens and processes large-scale data using a file upload and reference mechanism.

**Note**

This document applies only to the "China (Beijing)" region. To use the model, you must use an [API key](https://bailian.console.alibabacloud.com/?tab=model#/api-key) from the "China (Beijing)" region.

## **How it works**

Processing long documents with Qwen-Long involves two steps: file upload and API call.

1.  **File upload and parsing:**
    
    -   Upload files using the API. For more information about supported formats and size limits, see [Supported formats](#3900d28abb8dx).
        
    -   After a successful upload, the system returns a **unique** `file-id` for your account and starts parsing the file. Uploading, storing, and parsing files are free of charge.
        
2.  **API call and billing:**
    
    -   When you call the model, reference one or more `file-id`s in a `system` message.
        
    -   The model performs inference based on the text content associated with the `file-id`.
        
    -   The token count of the referenced file content is included in the **input tokens** for **each** API call.
        

This mechanism avoids transferring large files in each request, but be aware of the billing implications.

## **Getting started**

### **Prerequisites**

-   You have [obtained and configured an API key](/help/en/model-studio/get-api-key) and [configured the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).
    
-   If you make calls using an SDK, you must also install the [OpenAI SDK](/help/en/model-studio/install-sdk#f3e80b21069aa).
    

### **Upload a document**

This example uses the [Bailian Phones Specifications.docx](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250805/pzubre/Bailian+Phones+Specifications.docx) file. To obtain the `file-id`, upload the file to the secure storage space on Model Studio using the OpenAI-compatible file interface. For the parameters and calling methods for the file upload API, see [OpenAI compatible - File](/help/en/model-studio/openai-file-interface).

## Python

```
import os
from pathlib import Path
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)

file_object = client.files.create(file=Path("Bailian Phones Specifications.docx"), purpose="file-extract")
print(file_object.id)
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.files.*;

import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // If no environment variable is set, replace the following line with: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();
        // Set the file path. Modify the path and filename as needed.
        Path filePath = Paths.get("src/main/java/org/example/Bailian Phones Specifications.docx");
        // Create file upload parameters.
        FileCreateParams fileParams = FileCreateParams.builder()
                .file(filePath)
                .purpose(FilePurpose.of("file-extract"))
                .build();

        // Upload the file and print the file ID.
        FileObject fileObject = client.files().create(fileParams);
        System.out.println(fileObject.id());
    }
}
```

## curl

```
curl --location --request POST 'https://dashscope.aliyuncs.com/compatible-mode/v1/files' \
  --header "Authorization: Bearer $DASHSCOPE_API_KEY" \
  --form 'file=@"Bailian Phones Specifications.docx"' \
  --form 'purpose="file-extract"'
```

Run the code to obtain the `file-id` for the uploaded file.

### **Pass information and chat using a file ID**

Embed the obtained `file-id` in a system message. You can use the first system message to set a role for the model, subsequent system messages to pass the `file-id`, and the user message to ask specific questions about the document.

> Longer documents may take more time to parse. Wait for the parsing to complete before you make an API call.

## Python

```
import os
from openai import OpenAI, BadRequestError

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)
try:
    # Initialize the messages list.
    completion = client.chat.completions.create(
        model="qwen-long",
        messages=[
            {'role': 'system', 'content': 'You are a helpful assistant.'},
            # Replace {FILE_ID} with the file ID used in your chat scenario.
            {'role': 'system', 'content': f'fileid://{FILE_ID}'},
            {'role': 'user', 'content': 'What is this article about?'}
        ],
        # All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        stream=True,
        stream_options={"include_usage": True}
    )

    full_content = ""
    for chunk in completion:
        if chunk.choices and chunk.choices[0].delta.content:
            # Append the output content.
            full_content += chunk.choices[0].delta.content
            print(chunk.model_dump())

        # Get token usage
        if chunk.usage:
            print(f"Total tokens: {chunk.usage.total_tokens}")

    print(full_content)

except BadRequestError as e:
    print(f"Error message: {e}")
    print("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.")
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.core.http.StreamResponse;
import com.openai.models.chat.completions.*;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                // If no environment variable is set, replace the following line with: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();

        // Create a chat request.
        ChatCompletionCreateParams chatParams = ChatCompletionCreateParams.builder()
                .addSystemMessage("You are a helpful assistant.")
                //Replace {FILE_ID} with the file ID used in your chat scenario.
                .addSystemMessage("fileid://{FILE_ID}")
                .addUserMessage("What is this article about?")
                .model("qwen-long")
                .build();

        StringBuilder fullResponse = new StringBuilder();

        // All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        try (StreamResponse<ChatCompletionChunk> streamResponse = client.chat().completions().createStreaming(chatParams)) {
            streamResponse.stream().forEach(chunk -> {
                // Print and append the content of each chunk.
                System.out.println(chunk);
                String content = chunk.choices().get(0).delta().content().orElse("");
                if (!content.isEmpty()) {
                    fullResponse.append(content);
                }
            });
            System.out.println(fullResponse);
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
        }
    }
}
```

## curl

```
curl --location 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long",
    "messages": [
        {"role": "system","content": "You are a helpful assistant."},
        {"role": "system","content": "fileid://file-fe-xxx"},
        {"role": "user","content": "What is this article about?"}
    ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    }
}'
```

### **Pass multiple documents**

You can pass multiple `file-id`s in a single system message to process multiple documents in one request. You can also add new system messages to the `messages` array to include additional documents.

## Pass multiple documents

## Python

```
import os
from openai import OpenAI, BadRequestError

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)
try:
    # Initialize the messages list.
    completion = client.chat.completions.create(
        model="qwen-long",
        messages=[
            {'role': 'system', 'content': 'You are a helpful assistant.'},
            # Replace {FILE_ID1} and {FILE_ID2} with the file IDs used in your chat scenario.
            {'role': 'system', 'content': f"fileid://{FILE_ID1},fileid://{FILE_ID2}"},
            {'role': 'user', 'content': 'What are these articles about?'}
        ],
        # All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        stream=True,
        stream_options={"include_usage": True}
    )
    
    full_content = ""
    for chunk in completion:
        if chunk.choices and chunk.choices[0].delta.content:
            # Append the output content.
            full_content += chunk.choices[0].delta.content
            print(chunk.model_dump())
    
    print(full_content)

except BadRequestError as e:
    print(f"Error message: {e}")
    print("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.")
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.core.http.StreamResponse;
import com.openai.models.chat.completions.*;

public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();

        // Create a chat request.
        ChatCompletionCreateParams chatParams = ChatCompletionCreateParams.builder()
                .addSystemMessage("You are a helpful assistant.")
                //Replace {FILE_ID1} and {FILE_ID2} with the file IDs used in your chat scenario.
                .addSystemMessage("fileid://{FILE_ID1},fileid://{FILE_ID2}")
                .addUserMessage("What are these two articles about?")
                .model("qwen-long")
                .build();

        StringBuilder fullResponse = new StringBuilder();

        // All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        try (StreamResponse<ChatCompletionChunk> streamResponse = client.chat().completions().createStreaming(chatParams)) {
            streamResponse.stream().forEach(chunk -> {
                // Content of each chunk.
                System.out.println(chunk);
                String content = chunk.choices().get(0).delta().content().orElse("");
                if (!content.isEmpty()) {
                    fullResponse.append(content);
                }
            });
            System.out.println("\nFull response content:");
            System.out.println(fullResponse);
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
        }
    }
}
```

## curl

```
curl --location 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long",
    "messages": [
        {"role": "system","content": "You are a helpful assistant."},
        {"role": "system","content": "fileid://file-fe-xxx1"},
        {"role": "system","content": "fileid://file-fe-xxx2"},
        {"role": "user","content": "What are these two articles about?"}
    ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    }
}'
```

## Append documents

## Python

```
import os
from openai import OpenAI, BadRequestError

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)
# Initialize the messages list.
messages = [
    {'role': 'system', 'content': 'You are a helpful assistant.'},
    # Replace {FILE_ID1} with the file ID used in your chat scenario.
    {'role': 'system', 'content': f'fileid://{FILE_ID1}'},
    {'role': 'user', 'content': 'What is this article about?'}
]

try:
    # First-round response.
    completion_1 = client.chat.completions.create(
        model="qwen-long",
        messages=messages,
        stream=False
    )
    # Print the first-round response.
    # To stream the first-round response, set stream to True, append each output segment, and pass the concatenated string as the content when constructing the assistant_message.
    print(f"First-round response: {completion_1.choices[0].message.model_dump()}")
except BadRequestError as e:
    print(f"Error message: {e}")
    print("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.")

# Construct the assistant_message.
assistant_message = {
    "role": "assistant",
    "content": completion_1.choices[0].message.content}

# Add the assistant_message to messages.
messages.append(assistant_message)

# Add the file ID of the appended document to messages.
# Replace {FILE_ID2} with the file ID used in your chat scenario.
system_message = {'role': 'system', 'content': f'fileid://{FILE_ID2}'}
messages.append(system_message)

# Add a user question.
messages.append({'role': 'user', 'content': 'What are the similarities and differences between the methods discussed in these two articles?'})

# Response after appending the document.
completion_2 = client.chat.completions.create(
    model="qwen-long",
    messages=messages,
    # All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
    stream=True,
    stream_options={
        "include_usage": True
    }
)

# Stream and print the response after appending the document.
print("Response after appending the document:")
for chunk in completion_2:
    print(chunk.model_dump())
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.chat.completions.*;
import com.openai.core.http.StreamResponse;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();
        // Initialize the messages list.
        List<ChatCompletionMessageParam> messages = new ArrayList<>();
        
        // Add information for role setting.
        ChatCompletionSystemMessageParam roleSet = ChatCompletionSystemMessageParam.builder()
                .content("You are a helpful assistant.")
                .build();
        messages.add(ChatCompletionMessageParam.ofSystem(roleSet));
        
        // Replace {FILE_ID1} with the file ID used in your chat scenario.
        ChatCompletionSystemMessageParam systemMsg1 = ChatCompletionSystemMessageParam.builder()
                .content("fileid://{FILE_ID1}")
                .build();
        messages.add(ChatCompletionMessageParam.ofSystem(systemMsg1));

        // User question message (USER role).
        ChatCompletionUserMessageParam userMsg1 = ChatCompletionUserMessageParam.builder()
                .content("Summarize the article's content.")
                .build();
        messages.add(ChatCompletionMessageParam.ofUser(userMsg1));

        // Construct the first-round request and handle exceptions.
        ChatCompletion completion1;
        try {
            completion1 = client.chat().completions().create(
                    ChatCompletionCreateParams.builder()
                            .model("qwen-long")
                            .messages(messages)
                            .build()
            );
        } catch (Exception e) {
            System.err.println("Request error. See the error code reference page:");
            System.err.println("https://www.alibabacloud.com/help/en/model-studio/error-code");
            System.err.println("Error details: " + e.getMessage());
            e.printStackTrace(); 
            return; 
        }

        // First-round response.
        String firstResponse = completion1 != null ? completion1.choices().get(0).message().content().orElse("") : "";
        System.out.println("First-round response: " + firstResponse);

        // Construct AssistantMessage.
        ChatCompletionAssistantMessageParam assistantMsg = ChatCompletionAssistantMessageParam.builder()
                .content(firstResponse)
                .build();
        messages.add(ChatCompletionMessageParam.ofAssistant(assistantMsg));

        // Replace {FILE_ID2} with the file ID used in your chat scenario.
        ChatCompletionSystemMessageParam systemMsg2 = ChatCompletionSystemMessageParam.builder()
                .content("fileid://{FILE_ID2}")
                .build();
        messages.add(ChatCompletionMessageParam.ofSystem(systemMsg2));

        // Second-round user question (USER role).
        ChatCompletionUserMessageParam userMsg2 = ChatCompletionUserMessageParam.builder()
                .content("Compare the structural differences between the two articles.")
                .build();
        messages.add(ChatCompletionMessageParam.ofUser(userMsg2));

        // All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        StringBuilder fullResponse = new StringBuilder();
        try (StreamResponse<ChatCompletionChunk> streamResponse = client.chat().completions().createStreaming(
                ChatCompletionCreateParams.builder()
                        .model("qwen-long")
                        .messages(messages)
                        .build())) {

            streamResponse.stream().forEach(chunk -> {
                String content = chunk.choices().get(0).delta().content().orElse("");
                if (!content.isEmpty()) {
                    fullResponse.append(content);
                }
            });
            System.out.println("\nFinal response:");
            System.out.println(fullResponse.toString().trim());
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
        }
    }
}
```

## curl

```
curl --location 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long",
    "messages": [
        {"role": "system","content": "You are a helpful assistant."},
        {"role": "system","content": "fileid://file-fe-xxx1"},
        {"role": "user","content": "What is this article about?"},
        {"role": "system","content": "fileid://file-fe-xxx2"},
        {"role": "user","content": "What are the similarities and differences between the methods discussed in these two articles?"}
    ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    }
}'
```

## **Pass information as plain text**

Instead of passing document information using a `file-id`, you can pass the document content directly as a string. To prevent the model from confusing the role setting with the document content, add the role-setting information to the first message in the `messages` array.

> Due to the size limit of the API call request body, you must use a file ID to pass text content that exceeds 1 million tokens.

#### Simple example

You can enter the document content directly in the system message.

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)
# Initialize the messages list.
completion = client.chat.completions.create(
    model="qwen-long",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'system', 'content': 'Model Studio Phone Product Introduction Model Studio X1 ——————Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen...'},
        {'role': 'user', 'content': 'What is this article about?'}
    ],
    # All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
    stream=True,
    stream_options={"include_usage": True}
)

full_content = ""
for chunk in completion:
    if chunk.choices and chunk.choices[0].delta.content:
        # Append the output content.
        full_content += chunk.choices[0].delta.content
        print(chunk.model_dump())

print(full_content)
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.core.http.StreamResponse;

import com.openai.models.chat.completions.*;


public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();

        // Create a chat request.
        ChatCompletionCreateParams chatParams = ChatCompletionCreateParams.builder()
                .addSystemMessage("You are a helpful assistant.")
                .addSystemMessage("Model Studio Phone Product Introduction Model Studio X1 ——————Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen...")
                .addUserMessage("What is this article about?")
                .model("qwen-long")
                .build();

        StringBuilder fullResponse = new StringBuilder();

        // All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        try (StreamResponse<ChatCompletionChunk> streamResponse = client.chat().completions().createStreaming(chatParams)) {
            streamResponse.stream().forEach(chunk -> {
                // Print and append the content of each chunk.
                System.out.println(chunk);
                String content = chunk.choices().get(0).delta().content().orElse("");
                if (!content.isEmpty()) {
                    fullResponse.append(content);
                }
            });
            System.out.println(fullResponse);
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
        }
    }
}
```

## curl

```
curl --location 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long",
    "messages": [
        {"role": "system","content": "You are a helpful assistant."},
        {"role": "system","content": "Model Studio X1 - Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120Hz refresh rate..."},
        {"role": "user","content": "What is this article about?"}
    ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    }
}'
```

#### Pass multiple documents

When you need to pass multiple documents in a single conversational turn, place the content of each document in a separate system message.

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)
# Initialize the messages list.
completion = client.chat.completions.create(
    model="qwen-long",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'system', 'content': 'Model Studio X1-Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120Hz refresh rate...'},
        {'role': 'system', 'content': 'Stardust S9 Pro - An innovative visual feast: a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design...'},
        {'role': 'user', 'content': 'What are the similarities and differences between the products discussed in these two articles?'}
    ],
    # All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
    stream=True,
    stream_options={"include_usage": True}
)
full_content = ""
for chunk in completion:
    if chunk.choices and chunk.choices[0].delta.content:
        # Append the output content.
        full_content += chunk.choices[0].delta.content
        print(chunk.model_dump())

print(full_content)
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.core.http.StreamResponse;

import com.openai.models.chat.completions.*;


public class Main {
    public static void main(String[] args) {
        // Create a client and use the API key from the environment variable.
        OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();

        // Create a chat request.
        ChatCompletionCreateParams chatParams = ChatCompletionCreateParams.builder()
                .addSystemMessage("You are a helpful assistant.")
                .addSystemMessage("Model Studio Phone Product Introduction Model Studio X1 - Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen...")
                .addSystemMessage("Stardust S9 Pro - An innovative visual feast: a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design...")
                .addUserMessage("What are the similarities and differences between the products discussed in these two articles?")
                .model("qwen-long")
                .build();

        StringBuilder fullResponse = new StringBuilder();

        // All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        try (StreamResponse<ChatCompletionChunk> streamResponse = client.chat().completions().createStreaming(chatParams)) {
            streamResponse.stream().forEach(chunk -> {
                // Print and append the content of each chunk.
                System.out.println(chunk);
                String content = chunk.choices().get(0).delta().content().orElse("");
                if (!content.isEmpty()) {
                    fullResponse.append(content);
                }
            });
            System.out.println(fullResponse);
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
        }
    }
}
```

## curl

```
curl --location 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long",
    "messages": [
        {"role": "system","content": "You are a helpful assistant."},
        {"role": "system","content": "Model Studio X1 - Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120Hz refresh rate..."},
        {"role": "system","content": "Stardust S9 Pro - An innovative visual feast: a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design..."},
        {"role": "user","content": "What are the similarities and differences between the products discussed in these two articles?"}
    ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    }
}'
```

#### Append documents

To add new document information during an interaction with the model, add the new document content to a system message in the messages array.

## Python

```
import os
from openai import OpenAI, BadRequestError

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace the key with your API key here.
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",  # Enter the base URL of the DashScope service.
)
# Initialize the messages list.
messages = [
    {'role': 'system', 'content': 'You are a helpful assistant.'},
    {'role': 'system', 'content': 'Model Studio X1 - Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120Hz refresh rate...'},
    {'role': 'user', 'content': 'What is this article about?'}
]

try:
    # First-round response.
    completion_1 = client.chat.completions.create(
        model="qwen-long",
        messages=messages,
        stream=False
    )
    # Print the first-round response.
    # To stream the first-round response, set stream to True, append each output segment, and pass the concatenated string as the content when constructing the assistant_message.
    print(f"First-round response: {completion_1.choices[0].message.model_dump()}")
except BadRequestError as e:
    print(f"Error message: {e}")
    print("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.")

# Construct the assistant_message.
assistant_message = {
    "role": "assistant",
    "content": completion_1.choices[0].message.content}

# Add the assistant_message to messages.
messages.append(assistant_message)
# Add the appended document content to messages.
system_message = {
    'role': 'system',
    'content': 'Stardust S9 Pro - An innovative visual feast: a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design for a borderless visual experience...'
}
messages.append(system_message)

# Add a user question.
messages.append({
    'role': 'user',
    'content': 'What are the similarities and differences between the products discussed in these two articles?'
})

# Response after appending the document.
completion_2 = client.chat.completions.create(
    model="qwen-long",
    messages=messages,
    # All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
    stream=True,
    stream_options={"include_usage": True}
)

# Stream and print the response after appending the document.
print("Response after appending the document:")
for chunk in completion_2:
    print(chunk.model_dump())
```

## Java

```
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.chat.completions.*;
import com.openai.core.http.StreamResponse;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .baseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")
                .build();
        // Initialize the messages list.
        List<ChatCompletionMessageParam> messages = new ArrayList<>();
        
        // Add information for role setting.
        ChatCompletionSystemMessageParam roleSet = ChatCompletionSystemMessageParam.builder()
                .content("You are a helpful assistant.")
                .build();
        messages.add(ChatCompletionMessageParam.ofSystem(roleSet));
        
        // Pass the first content.
        ChatCompletionSystemMessageParam systemMsg1 = ChatCompletionSystemMessageParam.builder()
                .content("Model Studio X1 - Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen, a 120Hz refresh rate, 256 GB storage, 12 GB RAM, and a 5000 mAh long-life battery...")
                .build();
        messages.add(ChatCompletionMessageParam.ofSystem(systemMsg1));

        // User question message (USER role).
        ChatCompletionUserMessageParam userMsg1 = ChatCompletionUserMessageParam.builder()
                .content("Summarize the article's content.")
                .build();
        messages.add(ChatCompletionMessageParam.ofUser(userMsg1));

        // Construct the first-round request and handle exceptions.
        ChatCompletion completion1;
        try {
            completion1 = client.chat().completions().create(
                    ChatCompletionCreateParams.builder()
                            .model("qwen-long")
                            .messages(messages)
                            .build()
            );
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
            e.printStackTrace(); 
            return; 
        }

        // First-round response.
        String firstResponse = completion1 != null ? completion1.choices().get(0).message().content().orElse("") : "";
        System.out.println("First-round response: " + firstResponse);

        // Construct AssistantMessage.
        ChatCompletionAssistantMessageParam assistantMsg = ChatCompletionAssistantMessageParam.builder()
                .content(firstResponse)
                .build();
        messages.add(ChatCompletionMessageParam.ofAssistant(assistantMsg));

        // Pass the second content.
        ChatCompletionSystemMessageParam systemMsg2 = ChatCompletionSystemMessageParam.builder()
                .content("Stardust S9 Pro - An innovative visual feast: a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design for a borderless visual experience...")
                .build();
        messages.add(ChatCompletionMessageParam.ofSystem(systemMsg2));

        // Second-round user question (USER role).
        ChatCompletionUserMessageParam userMsg2 = ChatCompletionUserMessageParam.builder()
                .content("Compare the structural differences between the two descriptions.")
                .build();
        messages.add(ChatCompletionMessageParam.ofUser(userMsg2));

        // All code examples use streaming output to clearly and intuitively show the model output process. For non-streaming output examples, see https://www.alibabacloud.com/help/en/model-studio/text-generation.
        StringBuilder fullResponse = new StringBuilder();
        try (StreamResponse<ChatCompletionChunk> streamResponse = client.chat().completions().createStreaming(
                ChatCompletionCreateParams.builder()
                        .model("qwen-long")
                        .messages(messages)
                        .build())) {

            streamResponse.stream().forEach(chunk -> {
                String content = chunk.choices().get(0).delta().content().orElse("");
                if (!content.isEmpty()) {
                    fullResponse.append(content);
                }
            });
            System.out.println("\nFinal response:");
            System.out.println(fullResponse.toString().trim());
        } catch (Exception e) {
            System.err.println("Error message: " + e.getMessage());
            System.err.println("For more information, see https://www.alibabacloud.com/help/en/model-studio/error-code.");
        }
    }
}
```

## curl

```
curl --location 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long",
    "messages": [
            {"role": "system","content": "You are a helpful assistant."},
            {"role": "system","content": "Model Studio X1 - Enjoy an ultimate visual experience: equipped with a 6.7-inch 1440 x 3200 pixel ultra-clear screen with a 120Hz refresh rate..."},
            {"role": "user","content": "What is this article about?"},
            {"role": "system","content": "Stardust S9 Pro - An innovative visual feast: a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design for a borderless visual experience..."},
            {"role": "user","content": "What are the similarities and differences between the products discussed in these two articles"}
        ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    }
}'
```

## Model pricing

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(Tokens)**

**(Million tokens)**

**qwen-long-latest**

> Always has the same capabilities as the latest snapshot version.

Latest

10,000,000

10,000,000

32,768

$0.072

$0.287

qwen-long-2025-01-25

> Also known as qwen-long-0125

Snapshot

## FAQ

1.  Does Qwen-Long support submitting batch tasks?
    
    Yes, it does. Qwen-Long is compatible with the [OpenAI Batch API](/help/en/model-studio/batch-interfaces-compatible-with-openai/), which lets you submit batch tasks using files. These tasks are executed **asynchronously** and are billed at 50% of the cost of real-time calls. Results are returned after the tasks are completed or the maximum wait time is reached.
    
2.  Where are files saved after they are uploaded using the OpenAI-compatible file API?
    
    Files that you upload using the OpenAI-compatible file API are saved to the Model Studio storage in your Alibaba Cloud account at no cost. For information about how to query and manage uploaded files, see [the OpenAI file API](/help/en/model-studio/openai-file-interface#165fadcf97c90).
    
3.  What is `**qwen-long-2025-01-25**`?
    
    This is a version snapshot identifier. It represents a frozen version of the model's features and performance at a specific point in time. This version provides higher stability than the latest version and does not represent an expiration date.
    
4.  How can I confirm that a file has been parsed?
    
    After you obtain a `file-id`, you can start a conversation with the model using that `file-id`. If the file is still being parsed, the system returns an error code of 400 with the message "`File parsing in progress, please try again later.`" If the model call is successful and returns a response, this indicates that the file has been successfully parsed.
    
5.  How to limit the model's output to standard JSON structure?
    
    `qwen-long` and all its snapshots support [Structured output](/help/en/model-studio/qwen-structured-output). You can specify a JSON Schema to constrain the model to return a valid JSON response that follows the defined structure.
    

## **API reference**

For the input and output parameters of Qwen-Long, see [Qwen API reference](/help/en/model-studio/qwen-api-reference/).

## Error codes

If a call fails, see [Error messages](/help/en/model-studio/error-code) for troubleshooting.

## Limitations

-   **SDK dependencies:**
    
    -   Management operations, such as file upload, deletion, and query, **must** be performed using an OpenAI compatible SDK.
        
    -   For model calls, you can use an OpenAI compatible SDK or the Dashscope SDK.
        
-   **File upload:**
    
    -   Supported formats: TXT, DOCX, PDF, XLSX, EPUB, MOBI, MD, CSV, JSON, BMP, PNG, JPG/JPEG, and GIF.
        
    -   The maximum file size is 20 MB for images and 150 MB for other file formats.
        
    -   Account quota: A single account can upload a maximum of 10,000 files, with a total size of up to 100 GB. If you reach either limit, new upload requests will fail. To release quota, you must delete unnecessary files. For more information, see [OpenAI compatible - File](/help/en/model-studio/openai-file-interface#a1edc56340slx).
        
    -   Storage validity: There are currently no restrictions.
        
-   **API input:**
    
    -   When you reference files using a `file-id`, a single request can reference a maximum of 100 files. The total context length is limited to 10 million tokens.
        
    -   When you directly input plain text in a `user` or `system` message, the content of a single message (not a `file-id`) is limited to 9,000 tokens.
        
-   **API output:**
    
    -   The maximum output length is 32,768 tokens.
        
-   **File sharing:**
    
    -   A `file-id` is valid only for the Alibaba Cloud account that generated it. It cannot be used for cross-account calls or for calls made using the API key of a RAM user.
        
-   **Rate limiting:** For more information about the rate limits for the model, see [Rate limits](/help/en/model-studio/rate-limit).
