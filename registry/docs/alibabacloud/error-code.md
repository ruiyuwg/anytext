Error messages and solutions for Alibaba Cloud Model Studio API calls.

## **400-InvalidParameter**

### **parameter.enable\_thinking must be set to false for non-streaming calls/**parameter.enable\_thinking only support stream call

**Cause:** A thinking model was called using a non-streaming output method.

**Solution:** Set the `enable_thinking` parameter to `false`, or use the [streaming](/help/en/model-studio/stream) method.

### **The thinking\_budget parameter must be a positive integer and not greater than xxx**

**Cause:** The value of the `thinking_budget` parameter is outside the valid range.

**Solution:** For the maximum chain-of-thought length for the model, see [Models](/help/en/model-studio/models). Specify a value that is greater than 0 and does not exceed this length limit.

### **This model only support stream mode, please enable the stream parameter to access the model.**

**Cause:** The model supports only [streaming output](/help/en/model-studio/stream), but streaming output was not enabled in the call.

**Solution:** Call the model using the [streaming output](/help/en/model-studio/stream) method.

### **This model does not support enable\_search.**

**Cause:** The current model does not support the [web search](/help/en/model-studio/web-search) feature, but the `enable_search` parameter was set to `true`.

**Solution:** Call a model that supports the web search feature.

### **暂时不支持当前设置的语种！(The currently set language is not supported!)**

**Cause:** When you use the Qwen-MT model, the format of the `source_lang` or `target_lang` parameter is incorrect, or the language is not in the [list of supported languages](/help/en/model-studio/machine-translation#038d2865bbydc).

**Solution:** Enter the English name or language code in the correct format.

### **The incremental\_output parameter must be "true" when enable\_thinking is true**

**Cause:** When thinking mode is enabled for a model, it only supports incremental streaming output. However, the `incremental_output` parameter was not set to `true`.

**Solution:** Set the `incremental_output` parameter to `true` and try again. The API returns incremental content.

### **The incremental\_output parameter of this model cannot be set to False.**

**Cause:** The model supports only incremental streaming output, but the `incremental_output` parameter was not set to `true`.

**Solution:** Set the `incremental_output` parameter to `true` and try again. The API returns incremental content.

### **Range of input length should be \[1, xxx\]**

**Cause:** The input length exceeds the model's limit.

**Solution:**

-   If you call the model through code, make sure that the number of tokens in the messages array is within the model's maximum input token limit.
    
-   When you have a continuous conversation in a chat client, such as Chatbox, or in the Model Studio console, each request includes the conversation history. This can cause the request to exceed the model's limit. If the limit is exceeded, you must start a new conversation.
    

### **Range of max\_tokens should be \[1, xxx\]**

**Cause:** The value of the `max_tokens` parameter is not in the range of \[1, maximum output tokens for the model\].

**Solution:** Set the `max_tokens` parameter based on the model's "Max input" listed in [Models](/help/en/model-studio/models).

### **Temperature should be in \[0.0, 2.0)/'temperature' must be Float**

**Cause:** The value of the temperature parameter is not in the range of \[0.0, 2.0).

**Solution:** Set the temperature parameter to a number greater than or equal to 0 and less than 2.

### **Range of top\_p should be (0.0, 1.0\]/'top\_p' must be Float**

**Cause:** The value of the top\_p parameter is not in the range of `(0.0, 1.0]`.

**Solution:** Set the `top_p` parameter to a number greater than 0 and less than or equal to 1.

### **Parameter top\_k be greater than or equal to 0**

**Cause:** The `top_k` parameter is set to a number less than 0.

**Solution:** Set the `top_k` parameter to a number greater than or equal to 0.

### **Repetition\_penalty should be greater than 0.0**

**Cause:** The `repetition_penalty` parameter is set to a number less than or equal to 0.

**Solution:** Set the `repetition_penalty` parameter to a number greater than 0.

### **Presence\_penalty should be in \[-2.0, 2.0\]**

**Cause:** The value of the `presence_penalty` parameter is not in the range of `[-2.0, 2.0]`.

**Solution:** Set the `presence_penalty` parameter to a value in the range of `[-2.0, 2.0]`.

### **Range of n should be \[1, 4\]**

**Cause:** The value of the n parameter is not in the range of \[1, 4\].

**Solution:** Set the n parameter to a value in the range of \[1, 4\].

### **Range of seed should be \[0, 9223372036854775807\]**

**Cause:** When you use the DashScope protocol, the value of the `seed` parameter is not in the range of \[0, 9223372036854775807\].

**Solution:** Set the `seed` parameter to a value in the range of \[0, 9223372036854775807\].

### **Request method 'GET' is not supported.**

**Cause:** The current API does not support the `GET` request method.

**Solution:** Refer to the API reference and send the request again using a supported request method, such as `POST`.

### **Messages with role "tool" must be a response to a preceding message with "tool\_calls"**

**Cause:** An assistant message was not added to the messages array during tool calling.

**Solution:** Add the assistant message from the model's first-turn response to the messages array before you add the tool message.

### **Required body invalid, please check the request body format.**

**Cause:** The request body format does not meet the API requirements.

**Solution:** Check the request body to make sure that it is a standard JSON string. Common issues include extra commas (`,`) or unclosed parentheses. You can use a large language model to help fix the request body format.

### **input content must be a string.**

**Cause:** Text-only models do not support setting the content in messages to a non-string type.

**Solution:** Do not set the content to an array type, such as `[{"type": "text","text": "Who are you?"}]`.

### **The content field is a required field.**

**Cause:** The `content` parameter was not specified in the request, for example, `{"role": "user"}`.

**Solution:** Specify the `content` parameter. For example, `{"role": "user","content": "Who are you"}`.

### current user api does not support http call.

**Cause**: The current model does not support non-streaming output.

**Solution**: Use [streaming output](/help/en/model-studio/stream).

### Either \\"prompt\\" or \\"messages\\" must exist and cannot both be non**e**

**Cause:** When you call a large language model, neither the `messages` parameter nor the `prompt` parameter (deprecated) was specified. If this error occurs after you specify the `messages` parameter, the format might be incorrect. For example, when you use DashScope-HTTP, `messages` must be placed in the `input` object, not at the same level as the `model` parameter.

**Solution:** Specify the `messages` parameter. If you have specified the parameter but the error persists, see the [Qwen](/help/en/model-studio/qwen-api-reference/) API reference to check whether its position is correct.

### **'messages' must contain the word 'json' in some form, to use 'response\_format' of type 'json\_object'.**

**Cause:** When you use [structured output](/help/en/model-studio/qwen-structured-output), the prompt does not contain the `json` keyword.

**Solution:** Add `json` (case-insensitive) to the prompt, such as "Output in json format."

### **Json mode response is not supported when enable\_thinking is true**

**Cause:** The model's thinking mode was enabled when you use [structured output](/help/en/model-studio/qwen-structured-output).

**Solution:** When you use structured output, set `enable_thinking` to `false` to disable thinking mode. See [How do models in thinking mode produce structured output?](/help/en/model-studio/qwen-structured-output#2f7ba877d3hle)

### **Tool names are not allowed to be \[search\]**

**Cause:** The tool name cannot be set to `search`.

**Solution:** Set the tool name to a value other than `search`.

### **Unknown format of response\_format, response\_format should be a dict, includes 'type' and an optional key 'json\_schema'. The response\_format type from user is xxx.**

**Cause:** The specified `response_format` parameter is invalid.

**Solution:** To use the [structured output](/help/en/model-studio/qwen-structured-output) feature, set the `response_format` parameter to `{"type": "json_object"}`.

### **The value of the enable\_thinking parameter is restricted to True.**

**Cause:** For some models, such as `qwen3-235b-a22b-thinking-2507`, the `enable_thinking` parameter cannot be set to `false`.

**Solution:**

-   If you call the model from a third-party tool, such as Cherry Studio, turn on the thinking switch in the input box.
    
-   If you call the model from code, set `enable_thinking` to `true`.
    

### **'audio' output only support with stream=true**

**Cause:** The Qwen-Omni model only supports streaming output, but you did not use it.

**Solution:** Set the `stream` parameter to `true`.

### **tool\_choice is one of the strings that should be \["none", "auto"\]**

**Cause:** The `tool_choice` parameter specified for a function calling request is incorrect.

**Solution:** Specify "auto" (the model chooses the tool) or "none" (forces the model not to use a tool).

### **Model not found**

**Cause:** The specified `model` parameter does not exist or is in wrong format.

**Solution:**

-   **Model name format:** Ensure that the `model` parameter is correctly cased and contains no extra spaces.
    
-   **Correct model name:** Refer to [Models](/help/en/model-studio/models) to confirm the correct `model` name. Do not confuse model names from the open source community with Model Studio model IDs. For example, use `qwen3-235b-a22b-instruct-2507` instead of `Qwen/Qwen3-235B-A22B-Instruct-2507`.
    

### The result\_format parameter must be \\"message\\" when enable\_thinking is tru**e**

**Cause:** When you call a thinking mode model, the `result_format` parameter was not set to `"message"`.

**Solution:** Set the `result_format` parameter to `"message"`.

### **The audio is empty**

**Cause:** The input audio is too short, which results in an insufficient number of sampling points.

**Solution:** Increase the duration of the audio.

### **File parsing in progress, please try again later.**

**Cause**: When you use the Qwen-Long model, the file has not finished parsing.

**Solution**: Wait for the file to finish parsing and then try to call the API again.

### **The "stop" parameter must be of type "str", "list\[str\]", "list\[int\]", or "list\[list\[int\]\]", and all elements within the list must be of the same type.**

**Cause:** The `stop` parameter does not conform to the `str`, `list[str]`, `list[int],` or `list[list[int]]` format.

**Solution:** Refer to the [Qwen](/help/en/model-studio/qwen-api-reference/) API reference and set the `stop` parameter to the correct format.

### **Value error, batch size is invalid, it should not be larger than xxx.**

**Cause:** When you call an embedding model, the number of texts exceeds the model's limit.

**Solution:** Refer to the **batch size** for the model in [Embedding](/help/en/model-studio/embedding). Then, control the number of input texts.

### **\[\] is too short**

**Cause:** The input messages array is empty.

**Solution:** Add a message before you send the request.

### **The tool call is not supported.**

**Cause:** The model does not support the tools parameter.

**Solution:** Switch to a Qwen or DeepSeek model that supports tool calling.

### **Required parameter(xxx) missing or invalid, please check the request parameters.**

**Cause:** The API call parameters are invalid.

**Solution:** Check the request parameters to make sure that all required parameters are provided and in the correct format.

### **input must contain file\_urls**

**Cause:** When you use audio file recognition with speech recognition (Paraformer), the `file_urls` request parameter was not assigned a value.

**Solution:** Include the `file_urls` parameter in the request and assign it a value.

### **The provided URL does not appear to be valid. Ensure it is correctly formatted.**

**Cause:** When you use a visual understanding, omni-modal, or audio understanding model, the URL or local path of the input data is invalid or does not meet the requirements.

**Solution:**

-   **Input URL**: The URL must start with `http://`, `https://`, or `data:`. If the URL starts with `data:`, `"base64"` must be included before the Base64-encoded data.
    
-   **Input local path**: The path must start with `file://`.
    
-   **Input temporary URL**:
    
    -   For HTTP calls, make sure that the parameter `X-DashScope-OssResourceResolve: enable` is added to the request header.
        
    -   For SDK calls, only DashScope SDK calls are supported. Do not use the OpenAI SDK.
        

### **Input should be a valid dictionary or instance of GPT3Message**

**Cause:** The format of the messages field does not meet the requirements. For example, the number of parentheses does not match or required key-value pairs are missing.

**Solution:** Check that the JSON structure of the `messages` field is correct.

### **Value error, contents is neither str nor list of str.**: input.contents

**Cause:** When you use an embedding model, the input is not a string or an array of strings.

**Solution:** Change the input format to a string or a list of strings.

### The video modality input does not meet the requirements because: the range of sequence images shoule be (4, 512).**/(4,80).**

**Cause:** When you use a Qwen-VL model to input a video as a list of images, the number of images does not meet the requirement.

**Solution:** For Qwen3-VL and Qwen2.5-VL series models, you must input 4 to 512 images. For other models, you must input 4 to 80 images. See [Image and video understanding](/help/en/model-studio/vision).

### **Exceeded limit on max bytes per data-uri item : 10485760'. / Multimodal file size is too large**

**Cause:** The local image or video passed to a multimodal model (Qwen-VL, QVQ, Qwen-Omni) exceeds the size limit.

**Solution:**

-   **Local file**: After Base64 encoding, a single file cannot exceed 10 MB.
    
-   **File URL**: Image files cannot exceed 10 MB. For video files:
    
    -   Qwen3-VL, qwen-vl-max, qwen-vl-max-latest, qwen-vl-max-2025-08-13, and qwen-vl-max-2025-04-08: Must not exceed 2 GB.
        
    -   qwen-vl-plus series and models updated before qwen-vl-max-2025-04-08: Must not exceed 1 GB.
        
    -   Other models: Must not exceed 150 MB.
        

> To compress a file, see [How do I compress an image or video to the required size?](/help/en/model-studio/vision#ec8e0a8e03moe)

### **Input should be 'Cherry', 'Serena', 'Ethan' or 'Chelsie': parameters.audio.voice**

**Cause:** The `voice` parameter was specified incorrectly when you use Qwen-Omni or Qwen-TTS.

**Solution:** Specify one of the following: 'Cherry', 'Serena', 'Ethan', or 'Chelsie'.

### **The image length and width do not meet the model restrictions.**

**Cause:** The dimensions (length and width) of the image passed to the Qwen-VL model do not meet the model's requirements.

**Solution:** The image dimensions must meet the following requirements: both the width and height must be at least 10 pixels, and the aspect ratio must not exceed 200:1 or 1:200.

### **Failed to decode the image during the data inspection.**

**Cause:** Image decoding failed.

**Solution:** Check whether the image is corrupted and whether the image format meets the requirements.

### **The file format is illegal and cannot be opened. / The audio format is illegal and cannot be opened. / The media format is not supported or incorrect for the data inspection.**

**Cause:** The file format is not supported or the file cannot be opened.

**Solution:** Check whether the file is corrupted, whether the file name extension matches the actual format, and whether the file format is supported.

### **The input messages do not contain elements with the role of user.**

**Cause:**

-   No user message was passed to the model.
    
-   When you call a Model Studio workflow application through an API, the parameters passed in the start node must be passed through the `biz_params` parameter, not the `user_prompt_params` parameter.
    

**Solution:** Make sure to pass a user message to the model or pass the custom parameters correctly.

### **Failed to download multimodal content. /** Download the media resource timed out during the data inspection process. **/** Unable to download the media resource during the data inspection process.

**Cause:** Failed to download the image, video, or audio, or the download timed out.

-   **Connectivity issues:** You are using an internal network address from [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
-   **Network latency:** Cross-region access causes timeouts.
    
-   **Service instability:** The source storage service responds slowly or is unreachable.
    

**Solution:**

-   **Change the storage service**
    
    Use a storage service that is in the same region as the model service. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1) to generate public URLs. Do not use private network addresses.
    
-   **Adjust the transfer method**
    
    If you cannot transfer the file using a public URL, switch to a recommended method as shown in the table below. See [Pass local files (Base64 encoding or file path)](/help/en/model-studio/vision#d987f8de5395x).
    
    **Type**
    
    **Specifications**
    
    **DashScope SDK (Python, Java)**
    
    **OpenAI-compatible / DashScope HTTP**
    
    Image
    
    Greater than 7 MB and less than 10 MB
    
    Pass the local path
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Less than 7 MB
    
    Pass the local path
    
    Base64 encoding
    
    Video
    
    Greater than 100 MB
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Greater than 7 MB and less than 100 MB
    
    Pass the local path
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Less than 7 MB
    
    Pass the local path
    
    Base64 encoding
    
    Audio
    
    Greater than 10 MB
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Greater than 7 MB and less than 10 MB
    
    Pass the local path
    
    Only public URLs are supported. Use [Object Storage Service](https://www.alibabacloud.com/zh/product/object-storage-service?_p_lc=1).
    
    Less than 7 MB
    
    Pass the local path
    
    Base64 encoding
    
    > Base64 encoding increases the data size. Therefore, the original file must be smaller than 7 MB.
    
    > Using Base64 encoding or a local file path can prevent server-side download timeouts and improve stability.
    

### **url error, please check url!**

-   **Reason 1: The model name does not match the API endpoint.** For example, you use a multimodal endpoint to call a plain text model, or you use a plain text endpoint to call a multimodal model.
    
    **Solution:**
    
    1.  When you use multimodal models such as qwen3.5-plus and qwen3-vl-plus through DashScope, you must use the MultiModalConversation.call() method or the multimodal-generation endpoint. See [Image and video understanding](/help/en/model-studio/vision).
        
        > If you use the spring-ai-alibaba framework, confirm that you set the multimodal parameter [withMultiModel](https://github.com/spring-ai-alibaba/examples/blob/c66ffdec789defe4adf86b34bac0084df3b71e92/spring-ai-alibaba-multi-model-example/dashscope-multi-model/src/main/java/com/alibaba/cloud/ai/example/multi/controller/MultiModelController.java#L82).
        
    2.  When you use plain text models such as qwen3-max, qwen-plus, and deepseek-v3.2 through DashScope, you must use Generation.call() or the text-generation endpoint. See [Text generation overview](/help/en/model-studio/text-generation).
        
    3.  When using DashScope to call the CosyVoice **voice cloning** API, the API includes the `model` and `target_model` parameters. Set `model` to `voice-enrollment`. Set `target_model` to a specific CosyVoice model. See [Voice cloning/design API](/help/en/model-studio/cosyvoice-clone-design-api).
        
-   **Reason 2: The DashScope SDK version is outdated.** Older SDK versions cannot resolve the correct server-side address when calling image or video generation models.
    
    **Solution:** [Install the SDK](/help/en/model-studio/install-sdk)
    

### **Don't have authorization to access the media resource during the data inspection process.**

**Cause:** When you call the model, the signed file URL in OSS has expired.

**Solution:** Make sure to access the file URL within its validity period.

### **The item of content should be a message of a certain modal.**

**Cause:** When you use the DashScope SDK to call a multimodal model, the key for each element in the `content` array must be one of the following values: `image`, `video`, `audio`, or `text`.

**Solution:** Use the correct `content` parameter.

### **Invalid video file.**

**Cause:** The input video file is invalid.

**Solution:** Check whether the video file is corrupted or whether the format is correct.

### **The video modality input does not meet the requirements because: The video file is too long.**

**Cause:** The duration of the video passed to the Qwen-VL or Qwen-Omni model exceeds the limit.

**Solution:**

-   The Qwen2.5-VL model supports video durations between 2 seconds and 10 minutes.
    
-   Other Qwen-VL or Qwen-Omni models support video durations between 2 seconds and 40 seconds.
    

### **Field required: xxx**

**Cause:** An input parameter is missing.

**Solution:** Add the corresponding parameter based on the error message `xxx`.

### **The request is missing required parameters or in a wrong format, please check the parameters that you send.**

**Cause:** A required input parameter is missing, or the format of an input parameter is incorrect.

**Solution:** Check that the request parameters are complete and in the correct format.

### **Invalid ext\_bbox.**

**Cause:** The input ext\_bbox is invalid.

**Solution:** See [Emoji video generation](/help/en/model-studio/emoji-api).

### **Driven not exist: driven\_id.**

**Cause:** The input driven\_id does not exist.

**Solution:** See [Emoji video generation](/help/en/model-studio/emoji-api).

### **Missing training files.**

**Cause:** A parameter is incorrect. For example, a parameter is missing or has a format issue.

### **The style is invalid.**

**Cause:** The style is not within the enumeration range.

**Solution:** Check whether the value of the `style` parameter is correct.

### **The style\_level is invalid.**

**Cause:** The style\_level is not within the enumeration range.

**Solution:** See [EMO video generation API reference](/help/en/model-studio/emo-api).

### **parameters.video\_ratio must be 9:16 or 3:4.**

**Cause:** The video\_ratio input parameter can only be 9:16 or 3:4.

**Solution:** Change the `video_ratio` parameter to "9:16" or "3:4".

### **the xxx parm is invalid!**

**Cause:** An input parameter is out of range.

**Solution:** See [Video Style Transform API Reference](/help/en/model-studio/video-style-transform-api-reference).

### **input json error.**

**Cause:** The input JSON is incorrect.

**Solution:** Check that the JSON format of the request is correct.

### **read image error.**

**Cause:** Failed to read the image.

**Solution:** Check whether the image file is corrupted or whether the format is correct.

### **the parameters must conform to the specification: xxx.**

**Cause:** An input parameter value is out of range.

**Solution:** Check and correct the parameter value based on the error message `xxx`.

### **The size of person image and coarse\_image are not the same.**

**Cause:** The resolution of coarse\_image is different from that of person\_image.

**Solution:** Make sure that the resolution of `coarse_image` is the same as that of `person_image`.

### **The request is missing required parameters or the parameters are out of the specified range, please check the parameters that you send.**

**Cause:** A required API call parameter is missing or a parameter is out of bounds.

**Solution:** Check and correct the request parameters.

### **image format error**

**Cause:** The image format is incorrect.

**Solution:** The value must be an image URL or a Base64 string.

### **No messages found in input**

**Cause:** The request parameters must contain the messages field.

**Solution:** See [Qwen-Image Edit](/help/en/model-studio/qwen-image-edit-api).

### **Invalid image format or corrupted file**

**Cause:** The input image format is incorrect or the file is corrupted.

**Solution:** Check whether the file can be opened and downloaded normally. Make sure that the file is complete and the format meets the requirements.

### **download image failed**

**Cause:** The image cannot be downloaded.

**Solution:** Check whether the file can be downloaded normally.

### **messages length only support 1**

**Cause:** The length of the messages array can only be 1.

**Solution:** You can pass only one message. See [Qwen-Image Edit](/help/en/model-studio/qwen-image-edit-api).

### **content length only support 2**

**Cause:** The length of the content array can only be 2.

**Solution:** You can pass only one set of text and image. See [Qwen-Image Edit](/help/en/model-studio/qwen-image-edit-api).

### **lack of image or text**

**Cause:** The request parameters are missing the image or text field.

**Solution:** See [Qwen-Image Edit](/help/en/model-studio/qwen-image-edit-api).

### **num\_images\_per\_prompt must be 1.**

**Cause:** A request parameter is invalid. The parameter `n` (number of images to generate) can only be set to 1.

**Solution:** Set the value of the parameter `n` to 1.

### **Input files format not supported.**

**Cause:** The audio or image format does not meet the requirements.

**Solution:** Supported audio formats are mp3, wav, and aac. Supported image formats are jpg, jpeg, png, bmp, and webp. See [LivePortrait video generation](/help/en/model-studio/liveportrait-api).

### **Failed to download input files.**

**Cause:** Failed to download the input files.

**Solution:** Check whether the file URL is accessible and whether the network is connected.

### **oss download error.**

**Cause:** Failed to download the input image.

**Solution:** Check that the OSS link for the image is correct and accessible.

### **The image content does not comply with green network verification.**

**Cause:** The image content is not compliant.

**Solution:** Replace the image with one that complies with content moderation standards.

### **read video error.**

**Cause:** Failed to read the video.

**Solution:** Check whether the video file is corrupted or whether the format is not supported.

### **the size of input image is too small or too large.**

**Cause:** The size of the input image is too small or too large.

**Solution:** Adjust the image size to meet the API requirements.

### **The request parameter is invalid, please check the request parameter.**

**Cause:** The `clothes_type` input parameter is invalid.

**Solution:** See [OutfitAnyone-Parsing](/help/en/model-studio/aitryon-parsing-api).

### **The type or value of {parameter} is out of definition.**

**Cause:** The parameter type or value does not meet the requirements.

**Solution:** See [LivePortrait video generation](/help/en/model-studio/liveportrait-api).

### **The request parameter is invalid, please check the request parameter.**

**Cause:** The aspect ratio input parameter is not compliant.

**Solution:** The valid values are "1:1" and "3:4".

### **request timeout after 23 seconds.**

**Cause:** No data was sent to the service for more than 23 seconds. This error occurs when you use [speech recognition (Paraformer)](/help/en/model-studio/paraformer-speech-recognition), or [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/).

**Solution:** Check why no data was sent to the server for an extended period. If you do not send a message to the server for a long time (more than 23 seconds), end the task promptly.

### **Please ensure input text is valid.**

**Cause:** If you are using [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/), this error is usually caused by not sending the text to be synthesized. Possible reasons include a missing parameter (no value assigned to the `text` parameter) or a code exception (which caused the assignment to the `text` parameter to fail).

**Solution:** Check your code to make sure that the `text` parameter is correctly assigned and sent.

### **Missing required parameter 'payload.model'! Please follow the protocol!**

**Cause:** If you are using [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/), this error is usually caused by not specifying the `model` parameter when you send the [1\. run-task instruction: Start a task](/help/en/model-studio/cosyvoice-websocket-api#12d8a57443dmz).

**Solution:** Specify the `model` parameter.

### **\[tts:\]Engine return error code: 418**

**Cause:** When you use [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/), the request parameter `voice` is incorrect, or the `model` version does not match the `voice` version.

**Solution:**

1.  **Check the** `**voice**` **parameter assignment**:
    
    -   If you are using a default voice, check it against the "voice parameter" in the [voice list](/help/en/model-studio/cosyvoice-python-sdk#fbe0209896w38).
        
    -   If you are using a cloned voice, use the [Voice cloning/design API](/help/en/model-studio/cosyvoice-clone-design-api#e1d4d6ee81482) API to confirm that the voice status is "OK" and make sure that the account that owns the voice is the same as the account making the call.
        
2.  **Check version matching**: v2 models can use only v2 voices, and v1 models can use only v1 voices. They cannot be mixed.
    

### **Request voice is invalid!**

**Cause:** If you are using [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/), this error is usually because the voice was not set.

**Solution:** Check whether a value is assigned to the `voice` parameter. If you are using the [WebSocket API](/help/en/model-studio/cosyvoice-websocket-api), refer to the API reference to configure the parameters in the correct JSON format.

### **ref\_images\_url and obj\_or\_bg must be the same length.**

**Cause:** When you use the multi-image reference feature of [Wan - general video editing](/help/en/model-studio/wanx-vace-api-reference), the array lengths of `ref_images_url` and `obj_or_bg` are not the same.

**Solution:** Make sure that the array lengths of `ref_images_url` and `obj_or_bg` are the same.

### **check input data style.**

**Cause:** An input parameter does not meet the requirements.

**Solution:** Check and correct the input parameters.

### **An error during model pre-process.**

**Cause:** The content field was passed in an incorrect format.

**Solution:**

-   If you are calling from code, do not set the content to an array type, such as `[{"type": "text", "text": "Who are you?"}]`.
    

### **The image size is not supported for the data inspection.**

**Cause:**

-   The dimensions (length and width) of the image passed to the Qwen-VL model do not meet the model's requirements.
    
-   The output image size exceeds the limit (10 MB).
    

**Solution:**

-   The image dimensions must meet the following requirements:
    
    -   The width and height of the image must both be at least 10 pixels.
        
    -   The aspect ratio must not exceed 200:1 or 1:200.
        
-   Adjust the parameters for generating the image.
    

### **Required parameter(data\_sources) missing or invalid, please check the request parameters.**

**Cause:** This error is returned when you call the SubmitIndexJob API because the required parameter `SourceType` was not specified when you call the CreateIndex API.

**Solution:** When you create a knowledge base from a given document, this parameter must be set to `DATA_CENTER_FILE`. When you create a knowledge base from a given category, this parameter must be set to `DATA_CENTER_CATEGORY`. See the [CreateIndex](/help/en/model-studio/api-bailian-2023-12-29-createindex) documentation.

### Wrong Content-Type of multimodal url

**Cause**: The `Content-Type` field in the response header of the URL request is incorrect.

> The Qwen-VL model supports the following Content-Types: image/bmp, image/icns, image/x-icon, image/jpeg, image/jp2, image/png, image/sgi, image/tiff, and image/webp. See [Images supported by the Qwen-VL model](/help/en/model-studio/vision#afa499b5b1rl5).

**Solution**:

View the `Content-Type` field

1.  Open a browser, such as Chrome or Firefox.
    
2.  Open the developer tools. You can usually do this by pressing F12 or right-clicking and selecting "Inspect".
    
3.  Switch to the Network tab.
    
4.  Enter the image URL in the address bar and go to it.
    
5.  Find the corresponding request, view the Headers section, and find the Content-Type field in the "Response Headers" section.
    

### **Field required: image\_url**

**Cause:** Missing input parameter `image_url`.

**Solution:** Refer to [Emoji video generation](/help/en/model-studio/emoji-api) and specify `image_url`.

### **Field required: driven\_id**

**Cause:** Missing input parameter `driven_id`.

**Solution:** Refer to [Emoji video generation](/help/en/model-studio/emoji-api) and specify `driven_id`.

### Invalid ext\_bbox

**Cause:** The `ext_bbox` input parameter is invalid.

**Solution:** Refer to [Emoji video generation](/help/en/model-studio/emoji-api) and specify a valid `ext_bbox`.

### Driven not exist: driven\_id

**Cause:** The `driven_id` input parameter does not exist.

**Solution:** Refer to [Emoji video generation](/help/en/model-studio/emoji-api) and specify a valid `driven_id`.

### **Text request limit violated, expected 1.**

**Cause:** In a [WebSocket API](/help/en/model-studio/cosyvoice-websocket-api) call to CosyVoice speech synthesis service, you send the \`continue-task\` instruction multiple times after setting `enable_ssml` to `true`.

**Solution:** When `enable_ssml` is set to `true`, send the continue-task instruction only once.

### SSML text is not supported at the moment!

**Cause:** When using CosyVoice speech synthesis, the current model or voice do not support SSML, or SSML is not used correctly.

**Solution:** Check the [Limitations](/help/en/model-studio/introduction-to-cosyvoice-ssml-markup-language#923300b3e9a3z).

## **400-**invalid\_request\_error-invalid\_value

### **\-1 is lesser than the minimum of 0 - 'seed'/'seed' must be Integer**

**Cause:** When you use the OpenAI compatible protocol, the value of the `seed` parameter is not in the range of \[0, 231\-1\].

**Solution:** Set the `seed` parameter to a value in the range of \[0, 231\-1\].

## **400-**invalid\_request\_error

### **you must provide a model parameter.**

**Cause:** The `model` parameter was not provided in the request.

**Solution:** Add the `model` parameter to the request.

## **400-**InvalidParameter.NotSupportEnableThinking

### **The model xxx does not support enable\_thinking.**

**Cause:** The current model does not support setting the `enable_thinking` parameter.

**Solution:** Remove the `enable_thinking` parameter from the request, or use a model that supports thinking mode.

## **400-**invalid\_value

### **The requested voice 'xxx' is not supported.**

**Cause:** When using Qwen-TTS for real-time synthesis, the voice you selected is produced by a different model.

**Solution:** Make sure the request parameter `target_model` for voice cloning is the same as the request parameter `model` for speech systhesis.

## **400-Arrearage**

### **Access denied, please make sure your account is in good standing.**

**Cause:** Access is denied because your Alibaba Cloud account has an overdue payment.

**Solution:** Go to the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) page to check for overdue payments.

-   No overdue payments: Verify that the API key belongs to your current account.
    
-   Overdue payments: Add funds to your account. Wait a few moments for your account balance to update, and then retry.
    

## **400-**DataInspectionFailed/data\_inspection\_failed

### **Input or output data may contain inappropriate content. / Input data may contain inappropriate content. / Output data may contain inappropriate content.**

**Cause:** The input or output contains content that is suspected to be sensitive and was blocked by Content Moderation.

**Solution:** Modify the input content and try again.

### **Input xxx data may contain inappropriate content.**

**Cause:** The input data, such as the prompt or image, may contain sensitive content. **Solution:** Perform a content compliance check. Modify the input and try again.

## **400-APIConnectionError**

### **Connection error.**

**Cause:** An on-premises network issue, usually because a proxy is enabled.

**Solution:** Disable or restart the proxy.

## **400-**InvalidFile.DownloadFailed

### **The audio file cannot be downloaded.**

**Cause:** When you use audio file recognition with [speech recognition (Paraformer)](/help/en/model-studio/paraformer-speech-recognition), the file to be recognized failed to download.

**Solution:** Check whether the audio file URL can be accessed from the public network.

## **400-**InvalidFile.AudioLengthError

### **Audio length must be between 1s and 300s.**

**Cause:** The audio length does not meet the requirement.

**Solution:** Make sure that the audio duration is in the range of \[1, 300\] seconds.

### **Audio length must be between 1s and 180s.**

**Cause:** The audio length does not meet the requirement.

**Solution:** Make sure that the audio duration is in the range of \[1, 180\] seconds.

## **400-**InvalidFile.NoHuman

### **The input image has no human body. Please upload other image with single person.**

**Cause:** There is no person in the input image or no face was detected.

**Solution:** Upload a photo of a single person.

## **400-**InvalidFile.BodyProportion

### **The proportion of the detected person in the picture is too large or too small, please upload other image.**

**Cause:** The proportion of the person in the uploaded image does not meet the requirement.

**Solution:** Upload an image where the person's proportion meets the requirement.

## **400-**InvalidFile.FacePose

### **The pose of the detected face is invalid, please upload other image with whole face and expected orientation.**

**Cause:** The facial pose of the person in the uploaded image does not meet the requirement. The face must be visible and the head orientation must not be severely skewed.

**Solution:** Upload an image that meets the requirements.

### **The pose of the detected face is invalid, please upload other image with the expected oriention.**

**Cause:** The facial pose of the person in the uploaded image does not meet the requirement. The head orientation must not be skewed.

**Solution:** Make sure that the person's face in the image is not skewed.

### **The pose of the detected face is invalid, please upload other image with the expected orientation.**

**Cause:** The facial pose of the person in the uploaded image does not meet the requirement. The head orientation must not be skewed.

**Solution:** Make sure that the person's face in the image is not skewed.

## **400-**InvalidFile.Resolution

### **The image resolution is invalid, please make sure that the largest length of image is smaller than 7000, and the smallest length of image is larger than 400.**

**Cause:** The uploaded image size does not meet the requirement.

**Solution:** The resolution of the uploaded image must not be higher than 7,000\*7,000 and must not be lower than 400\*400.

### **The image resolution is invalid, please make sure that the largest length of image is smaller than 4096, and the smallest length of image is larger than 224.**

**Cause:** The uploaded image size does not meet the requirement.

**Solution:** The largest length of the uploaded image must be smaller than 4,096 pixels. The smallest length must be larger than 224 pixels.

### **The image resolution is invalid, please make sure that the largest length of image is smaller than xxx, and the smallest length of image is larger than yyy.**

**Cause:** The uploaded image size does not meet the requirement.

**Solution:** The resolution of the uploaded image must not be higher than xxx\*xxx and must not be lower than yyy\*yyy.

### **The image resolution is invalid, please make sure that the aspect ratio is smaller than xxx, and largest length of image is smaller than yyy.**

**Cause:** The uploaded image size does not meet the requirement.

**Solution:** The aspect ratio of the uploaded image must be less than xxx, and the resolution must not be higher than yyy\*yyy.

### **Invalid video resolution. The height or width of video must be xxx ~ yyy.**

**Cause:** The video resolution does not meet the requirement.

**Solution:** The length of the video's sides must be between xxx and yyy.

## **400-**InvalidFile.FPS

### **Invalid video FPS. The video FPS must be 15 ~ 60.**

**Cause:** The video frame rate does not meet the requirement.

**Solution:** The video frame rate must be between 15 and 60 fps.

## **400-**InvalidFile.Value

### **The value of the image is invalid, please upload other clearer image.**

**Cause:** The uploaded image is too dark and does not meet the requirement.

**Solution:** Make sure that the person's face in the image is clear.

## **400-**InvalidFile.FrontBody

### **The pose of the detected person is invalid, please upload other image with the front view.**

**Cause:** The person in the uploaded image has their back to the camera, which does not meet the requirement.

**Solution:** Make sure that the person in the image is facing the camera.

## **400-**InvalidFile.FullFace

### **The pose of the detected face is invalid, please upload other image with whole face.**

**Cause:** The facial pose of the person in the uploaded image does not meet the requirement. The face must be visible.

**Solution:** Make sure that the person's entire face is visible and not obstructed in the image.

## **400-**InvalidFile.FaceNotMatch

### **There are no matched face in the video with the provided reference image.**

**Cause:** The face in the reference image does not match the face in the video.

**Solution:** See [VideoRetalk video generation](/help/en/model-studio/videoretalk-api).

## **400-**InvalidFile.Content

### **The first frame of input video has no human body. Please choose another clip.**

**Cause:** The first frame of the video must contain a person.

**Solution:** Select a video clip that contains a human body.

### **The human is too small in the first frame of input video. Please choose another clip.**

**Cause:** The person in the first frame of the video is too small.

**Solution:** Select a video where the person in the first frame is larger.

### **The human is not clear in the first frame of input video. Please choose another clip.**

**Cause:** The person in the first frame of the video is not clear.

**Solution:** Select a video where the person in the first frame is clear.

### **The input image has no human body or multi human bodies. Please upload other image with single person.**

**Cause:** The input image has no person or multiple people.

**Solution:** Upload a photo of a single person.

### **The input image has no human body or has unclear human body. Please upload other image.**

**Cause:** The human body in the input image is incomplete or there is no human body.

**Solution:** Upload an image that contains a complete and clear human body.

### **The input image has multi human bodies. Please upload other image with single person.**

**Cause:** The input image has multiple people.

**Solution:** Upload a photo of a single person.

## **400-**InvalidFile.FullBody

### **The human is not fullbody in the first frame of input video. Please choose another clip.**

**Cause:** The person in the first frame of the video is not a full body shot.

**Solution:** The person's entire body must be visible.

### **The pose of the detected person is invalid, please upload other image with whole body, or change the ratio parameter to 1:1.**

**Cause:** The pose of the person in the uploaded image does not meet the requirement.

**Solution:** Upload an image that meets the requirements. For a head shot, the entire head must be visible. For a half-body shot, the body from the hips up must be fully visible. Or, change the aspect ratio to 1:1.

## **400-**InvalidFile.BodyPose

### **The pose of the detected person is invalid, please upload other image with whole body and expected orientation.**

**Cause:** The action of the single person does not meet the requirement.

**Solution:** Upload an image that meets the requirements. The shoulders and ankles must be visible, the person must not have their back to the camera or be sitting, and the person's orientation must not be severely skewed.

## **400-**InvalidFile.Size

### **Invalid file size. The video file size must be less than 200MB, and the audio file size must be less than 15MB.**

**Cause:** The file size does not meet the requirement.

**Solution:** The video file must be smaller than 200 MB, and the audio file must be smaller than 15 MB.

### **Invalid file size, The image file size must be smaller than 5MB.**

**Cause:** The file size does not meet the requirement.

**Solution:** The image file must be smaller than 5 MB.

### **Invalid file size. The video/audio/image file size must be less than xxxMB.**

**Cause:** The file size does not meet the requirement.

**Solution:** The video, audio, or image file must be smaller than the specified number of megabytes.

## **400-**InvalidFile.Duration

### **Invalid file duration. The file duration must be xxx s ~ yyy s.**

**Cause:** The file duration does not meet the requirement.

**Solution:** The duration of the video or audio file must be between xxx and yyy seconds.

## **400-**InvalidFile.ImageSize

### **The size of image is beyond limit.**

**Cause:** The image size exceeds the limit.

**Solution:** The image aspect ratio must not be greater than 2, and the longest side must not be greater than 4096.

## **400-**InvalidFile.AspectRatio

### **Invalid file ratio. The file aspect ratio (height/width) must be between 3:1 and 1:3.**

**Cause:** The file aspect ratio does not meet the requirement.

**Solution:** The aspect ratio of the video file must be between 3:1 and 1:3.

### **Invalid file ratio. The file aspect ratio (height/width) must be between 2.0 and 0.5.**

**Cause:** The file aspect ratio does not meet the requirement.

**Solution:** The aspect ratio of the image file must be between 2.0 and 0.5.

## **400-**InvalidFile.Openerror

### **Invalid file, cannot open file as video/audio/image.**

**Cause:** The file cannot be opened.

**Solution:** Check whether the file is corrupted or whether the format is correct.

## **400-**InvalidFile.Template.Content

### **Invalid template content.**

**Cause:** You do not have permission for the action template, or the template content does not meet the requirements.

**Solution:** Check the template permissions and content.

## **400-**InvalidFile.Format

### **Invalid file format，the request file format is one of the following types: MP4, AVI, MOV, MP3, WAV, AAC, JPEG, JPG, PNG, BMP, and WEBP.**

**Cause:** The file format does not meet the requirement.

**Solution:** Use a file that meets the requirements. Supported video formats are mp4, avi, and mov. Supported audio formats are mp3, wav, and aac. Supported image formats are jpg, jpeg, png, bmp, and webp.

## **400-**InvalidFile.MultiHuman

### **The input image has multi human bodies. Please upload other image with single person.**

**Cause:** The input image has multiple people.

**Solution:** Upload a photo of a single person.

## **400-InvalidPerson**

### The input image has no human body or multi human bodies. Please upload other image with single person.

**Cause:** The input image has no person or multiple people.

**Solution:** Upload a photo of a single person.

## **400-InvalidParameter.DataInspection**

### **Unable to download the media resource during the data inspection process.** 

**Cause:** The image or audio file download timed out.

**Solution:** Calls from outside China may timeout due to unstable cross-border networks. Store files in an [OSS](/help/en/oss/user-guide/what-is-oss) bucket in China, then call the model. Alternatively, use [temporary storage](/help/en/model-studio/get-temporary-file-url) to upload files.

## **400-FlowNotPublished**

### **Flow has not published yet, please publish flow and try again.**

**Cause:** The flow is not published.

**Solution:** Publish the flow and try again.

## **400-**InvalidImage.ImageSize

### **The size of image is beyond limit.**

**Cause:** The image size exceeds the limit.

**Solution:** Image aspect ratio must not exceed 2, and the longest side must not exceed 4096.

## **400-**InvalidImage.NoHumanFace

### **No human face detected.**

**Cause:** No human face was detected. This error occurs only for asynchronous query APIs for generation tasks.

**Solution:** Upload an image that contains a clear human face.

## **400-**InvalidImageResolution

### **The input image resolution is too large or small.**

**Cause:** The input image resolution is too large or too small.

**Solution:** The image resolution must not be lower than 256 × 256 pixels and must not exceed 5760 × 3240 pixels.

## **400-**InvalidImageFormat

### **The input image is in invalid format.**

**Cause:** The image format does not meet the requirement.

**Solution:** Use an image in JPEG, PNG, JPG, BMP, or WEBP format.

## **400-**InvalidURL

### Invalid URL provided in your request.

**Cause:** The URL is invalid.

**Solution:** Use a valid URL.

### **Required URL is missing or invalid, please check the request URL.**

**Cause:** The input URL is invalid or missing.

**Solution:** Provide the correct URL.

### **The request URL is invalid, make sure the url is correct and is an image.**

**Cause:** The input URL is invalid.

**Solution:** Make sure that the URL is correct and points to an image file.

### **The input audio is longer than xxs.**

**Cause:** The input audio file exceeds the maximum duration of xx seconds.

**Solution:** Crop the audio file to be within xx seconds.

### **File size is larger than 15MB.**

**Cause:** The input audio file exceeds the maximum limit of 15 MB.

**Solution:** Compress the audio file to be within 15 MB.

### **File type is not supported. Allowed types are: .wav, .mp3.**

**Cause:** The input audio format is not valid.

**Solution:** Currently, only wav and mp3 formats are supported.

### **The request URL is invalid, please check the request URL is available and the request image format is one of the following types: JPEG, JPG, PNG, BMP, and WEBP.**

**Cause:** The image is not accessible or the downloaded file format is not supported.

**Solution:** Make sure that the URL is accessible and the image format is JPEG, JPG, PNG, BMP, or WEBP.

## **400-InvalidImage.FileFormat**

### **Invalid image type. Please ensure the uploaded file is a valid image.**

**Cause:** The image format is not supported.

**Solution:** Use a JPG, JPEG, PNG, BMP, or WEBP image.

## **400-**InvalidURL.ConnectionRefused

### **Connection to xxx refused, please provide available URL.**

**Cause:** The download was rejected.

**Solution:** Provide an available URL.

## **400-**InvalidURL.Timeout

### **Download xxx timeout, please check network connection.**

**Cause:** The download timed out.

**Solution:** Check your network connectivity.

## **400-**BadRequestException

### **Invalid part type.**

**Cause:** This occurs only in a Qwen-Long model conversation scenario when the user uploads a file type that is not currently supported by the Qwen-Long model.

**Solution:** Upload a file type that is supported by Qwen-Long.

## **400-**BadRequest.EmptyInput

### **Required input parameter missing from request.**

**Cause:** The `input` parameter was not added to the request.

**Solution:** Add the `input` parameter to the request.

## **400-**BadRequest.EmptyParameters

### **Required parameter "parameters" missing from request.**

**Cause:** The `parameters` parameter was not added to the request.

**Solution:** Add the `parameters` parameter to the request.

## **400-**BadRequest.EmptyModel

### **Required parameter "model" missing from request.**

**Cause:** The `model` parameter was not provided in the request.

**Solution:** Add the `model` parameter to the request.

## **400-**BadRequest.IllegalInput

### **The input parameter requires json format.**

**Cause:** The input parameter format does not conform to the JSON format required by the API.

**Solution:** Check the input parameter format to make sure that it is standard JSON.

## **400-**BadRequest.InputDownloadFailed

### **Failed to download the input file: xxx.**

**Cause:** Failed to download the input file, possibly due to a download timeout, download failure, or the file exceeding the size quota.

**Solution:** Troubleshoot based on the detailed error message `xxx`.

### **Failed to download the input file.**

**Cause:** When using Qwen-TTS for voice cloning, the server failed to download the audio to be cloned.

**Solution:** Check whether the audio file can be downloaded, and whether its size exceeds the limit of 10 MB.

## **400-**BadRequest.UnsupportedFileFormat

### **File format unsupported.**

**Cause:** When you perform [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/), the uploaded audio format does not meet the model's requirements.

**Solution:** The audio format must be WAV (16-bit), MP3, or M4A. Note that you cannot judge the format by the file name extension alone. For example, a file with the `.mp3` extension may be in another format, such as Opus. Use a tool, such as ffprobe or mediainfo, or a command, such as the file command in Linux/macOS, to confirm the actual encoding format of the audio file to make sure that it meets the requirements.

### **Input file format is not supported.**

**Cause:** The format of the input file is not supported.

**Solution:** Use a supported file format.

## **400-**BadRequest.TooLarge

### **Payload Too Large.**

**Cause:** The file size exceeds the limit.

**Solution:**

-   When the "purpose" parameter is "file-extract", documents cannot exceed 150 MB and images cannot exceed 20 MB.
    
-   When the "purpose" parameter is "batch", files cannot exceed 500 MB. Split the file and [upload the files](/help/en/model-studio/openai-file-interface) in batches.
    

## **400-**BadRequest.ResourceNotExist

### **The Required resource not exist.**

**Cause:**

-   When you call the update, query, or delete API for [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/), the corresponding voice does not exist.
    
-   When you use [custom vocabulary (Paraformer)](/help/en/model-studio/custom-hot-words/), the custom vocabulary resource called by the update, query, or delete API does not exist.
    

## **400-**Throttling.AllocationQuota

### **Your current quota is xxx**

**Cause:** The number of [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) voices has reached the limit.

**Solution:** [Delete](/help/en/model-studio/cosyvoice-clone-design-api#c2e73bd5335sz) some voices.

### **Free allocated quota exceeded.**

**Cause:** When you use custom vocabulary (Paraformer), the number of custom vocabularies has exceeded the upper limit. The default is 10 per account.

**Solution:** Delete some custom vocabularies.

### **Maximum voice storage limit exceeded, please delete existing voices.**

**Cause:** When using Qwen-TTS for voice cloning, your Alibaba Cloud account exceeds the voice number limit.

**Solution:** Delete some voices or request a quota increase.

## **400-InvalidGarment**

### **Missing clothing image.Please input at least one top garment or bottom garment image.**

**Cause:** A clothing image is missing.

**Solution:** Provide at least one image of a top garment (top\_garment\_url) or a bottom garment (bottom\_garment\_url).

## **400-InvalidSchema**

### **Database schema is invalid for text2sql.**

**Cause:** Database schema information was not entered.

**Solution:** Enter the database schema information.

## **400-**InvalidSchemaFormat

### **Database schema format is invalid for text2sql.**

**Cause:** The format of the input data table information is abnormal.

**Solution:** Check and correct the format of the data table information.

## **400-Audio.**AudioShortError

### **valid audio too short!**

**Cause:** The valid duration of the audio used for [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) is too short.

**Solution:** The audio duration should be controlled to be between 10 and 15 seconds. When you record, make sure to speak fluently and include at least one continuous speech segment of more than 5 seconds.

## **400-Audio.**AudioSilentError

### **silent audio error.**

**Cause:** The [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) audio file is silent or the non-silent length is too short.

**Solution:** The audio duration for voice cloning should be controlled to be between 10 and 15 seconds and include at least one continuous speech segment of more than 5 seconds.

## **400-InvalidInputLength**

### **The image resolution is invalid, please make sure that the largest length of image is smaller than 4096, and the smallest length of image is larger than 150. and the size of image ranges from 5KB to 5MB.**

**Cause:** The image dimensions or file size do not meet the requirements.

**Solution:** See [Input image requirements](/help/en/model-studio/aitryon-plus-api#7239603c85fye).

## **400-FaqRuleBlocked**

### **Input or output data is blocked by faq rule.**

**Cause:** The FAQ rule intervention module was hit.

## **400-ClientDisconnect**

### **Client disconnected before task finished!**

**Cause:** The client actively disconnected before the task was finished. This error message is generated when you use speech synthesis or recognition services.

**Solution:** Check your code and do not disconnect from the server before the task is finished.

## **400-ServiceUnavailableError**

### **Role must be user or assistant and Content length must be greater than 0.**

**Cause:** The input content length is 0 or the `role` is incorrect.

**Solution:** Check that the input content length is greater than 0 and make sure that the parameter format, such as `role`, meets the requirements of the API reference.

## **400-IPInfringementSuspect**

### **Input data is suspected of being involved in IP infringement.**

**Cause:** The input data, such as the prompt or image, is suspected of intellectual property infringement.

**Solution:** Perform a content compliance check. Check the input to make sure that it does not contain content that poses an infringement risk.

## **400-UnsupportedOperation**

### **The operation is unsupported on the referee object.**

**Cause:** The associated object does not support the operation.

**Solution:** Check whether the operation object and operation type match.

### **The fine-tune job can not be deleted because it is succeeded,failed or canceled.**

**Cause:** This fine-tuning task cannot be deleted because its status is already "succeeded", "failed", or "canceled".

**Solution:** Only tasks in specific states can be deleted. Do not delete tasks that are in a terminal state.

## **400-CustomRoleBlocked**

### **Input or output data may contain inappropriate content with custom rule.**

**Cause:** The request or response content did not pass the custom policy.

**Solution:** Check the content or adjust the custom policy.

## **400-Audio.PreprocessError**

### **Audio preprocess error.**

**Cause:** When using Qwen-TTS for voice cloning, the audio preprocessing failed. Possible reasons: The `text` parameter is significantly different from the audio, the effective human speech is too short, or the audio file contains no sound.

**Solution:** Adjust the `text` parameter. If the problem persists, refer to our recording guide and record the audio again.

### **No segments meet minimum duration requirement**

**Cause:** When using Qwen-TTS for voice cloning, the effective human speech is too short in the audio to be cloned.

**Solution:** Refer to our recording guide and record the audio again.

## **400-BadRequest.VoiceNotFound**

### **Voice '%s' not found.**

**Cause:** When using Qwen-TTS for voice cloning, you call the delete voice interface, but the voice is already deleted or does not exist.

**Solution:** Check whether the `voice` parameter is correct.

## **400-Audio.DecoderError**

### **Decoder audio file failed.**

**Cause:** When using Qwen-TTS for voice cloning, the audio decoding failed. / CosyVoice voice cloning file decoding failed.

**Solution:** Check the audio file for corruption and ensure that it meets the required file format. For example, Qwen-TTS has specific requirements, while CosyVoice supports WAV (16-bit), MP3, or M4A.

## **400-Audio.AudioRateError**

### **File sample rate unsupported.**

**Cause:** When using Qwen-TTS or CosyVoice for voice cloning, the sample rate of the audio file is not supported.

**Solution:** Make sure the sample rate is at least 24000 Hz.

## **400-Audio.DurationLimitError**

### **Audio duration exceeds maximum allowed limit.**

**Cause:** When using Qwen-TTS for voice cloning, the audio to be cloned is too long.

**Solution:** Make sure the audio is no longer than 60 seconds.

## **401-**InvalidApiKey/invalid\_api\_key

### **Invalid API-key provided. / Incorrect API key provided.**

**Cause:** The API key is incorrect.

**Solution:** Common causes and their solutions are as follows:

-   **Incorrect environment variable**
    
    -   **Incorrect:** `api_key=os.getenv("sk-xxx")` . `sk-xxx` will be treated as the name of an environment variable, but not as a key.
        
    -   **Correct:**
        
        -   **If you have exported the environment variable:** Write as `api_key=os.getenv("DASHSCOPE_API_KEY")`.
            
            > Make sure you have set `DASHSCOPE_API_KEY`
            
        -   **If you haven't exported the environment variable:** Write as `api_key = "sk-xxx"`.
            
            > Do not use this method in the production environment.
            
-   **Incorrect entry**: API keys from Model Studio start with `sk-`. You may have entered an API key from another provider.
    
-   **Coding Plan dedicated API key**: The Coding Plan provides a dedicated API key (starting with `sk-sp-`). Unlike a general API key, this dedicated key **must be used with the dedicated API endpoint** (such as https://coding\-intl.dashscope.aliyuncs.com/v1). Make sure you update both the API key and the base URL. For steps, see [Set up AI tools](/help/en/model-studio/use-coding-plan-in-ai-tools/).
    
-   **Region mismatch**: Your API key and base URL belong to different regions. For example, you may be using an API key from the China (Beijing) region with a base URL for the Singapore region. The base URL for the international region contains `-intl`. Verify that your API key is on the [Singapore](https://modelstudio.console.alibabacloud.com/?tab=globalset#/efm/api_key) region page or the [Beijing](https://modelstudio.console.alibabacloud.com/?tab=globalset#/efm/api_key) region page. The base URLs for each region are:
    
    **Region**
    
    **OpenAI compatible**
    
    **DashScope**
    
    International (Singapore)
    
    `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`
    
    `https://dashscope-intl.aliyuncs.com/api/v1`
    
    China (Beijing)
    
    `https://dashscope.aliyuncs.com/compatible-mode/v1`
    
    `https://dashscope.aliyuncs.com/api/v1`
    
-   **Tool compatibility issues**: A third-party tool is not correctly configured. For example, [Dify](/help/en/model-studio/dify)'s' latest plugin version is unstable, install an older version of the TONGYI plugin. Or, in older version of [Cline](/help/en/model-studio/cline), **API Provider** is set to **Alibaba Qwen** instead of **OpenAI Compatible**).
    

If none of the above apply, your API key may have been deleted. Get a new API key and try to call the API again.

## **401-NOT AUTHORIZED**

### Access denied: Either you are not authorized to access this workspace, or the workspace does not exist. Please:\\nVerify the workspace configuration.\\nCheck your API endpoint settings. Ensure you are targeting the correct environment.

**Cause:**

-   The WorkspaceId value is invalid, or the current account is not a member of this workspace.
    
-   The requested endpoint is incorrect.
    

**Solution:**

-   Confirm that the WorkspaceId value is correct and that the account is a member of the workspace, then call the API again.
    
-   Users on the China site must use the endpoint in the **China (Beijing) region. Users on the international site must use the endpoint in the Singapore** region. When you use [API Debugging](https://api.alibabacloud.com/api/bailian/2023-12-29/CreateIndex), confirm that the endpoint is correct (as shown in the following figures).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1468410571/p952093.png)
    

## **403-**AccessDenied/access\_denied

### **Current user api does not support asynchronous calls.**

**Cause:** The API does not support asynchronous invocation.

**Solution:** Remove `X-DashScope-Async` from the request header, or set its value to `disable`.

### **current user api does not support synchronous calls.**

**Cause:** The API does not support synchronous call.

**Solution:** Set `X-DashScope-Async: enable` in the request header.

### **Invalid according to Policy: Policy expired.**

**Cause:** The file upload credential has expired when you obtain the temporary public URL.

**Solution:** Call the [file upload credential API](/help/en/model-studio/get-temporary-file-url#32db94982cllx) again to generate a new credential.

### **Access denied.**

**Reason:** Access is denied because you do not have the required permissions for this model, or the model's free quota has been used up and it does not support paid usage (such as `deepseek-r1-distill-llama-70b`).

## **403-**AccessDenied.Unpurchased

### **Access to model denied. Please make sure you are eligible for using the model.**

**Cause:** You have not activated the Alibaba Cloud Model Studio service yet.

**Solution:** Take the following steps to activate Model Studio service.

1.  **Register an account**: If you do not have an Alibaba Cloud account, you must first [register](https://account.alibabacloud.com/login/login.htm) one.
    
2.  **Select a region:** Model Studio provides the **International Edition (Singapore)** and the **Chinese Mainland Edition (Beijing)**. The two editions differ in terms of the console, endpoint, models, and their pricing, see [Models](/help/en/model-studio/models).
    
    -   **International Edition:** Endpoints and model services are located in international regions excluding Chinese Mainland. The default endpoint is Singapore.
        
    -   **Chinese Mainland Edition:** Endpoints and model services are located in Chinese Mainland. Currently, only the Beijing endpoint is supported.
        
3.  **Complete account verification:** To activate the **Chinese Mainland Edition**, this step is necessary. To activate the **International Edition,** you can skip this step.
    
    Use your **Alibaba Cloud account** to complete [account verification](https://account-console.alibabacloud.com/#/newIntlAuth):
    
    -   Choose **Individual Verification** or **Upgrade to Enterprise**, and click **Verify now**.
        
    -   In the **Additional Information** section of the page that appears, select **Yes** for **Purchase cloud resources or enable acceleration inside the Chinese mainland**.
        
    -   For other items, see [Account verification overview](/help/en/account/account-verification-overview).
        
4.  **Activate Model Studio:** Use your **Alibaba Cloud account** to go to the Model Studio console ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt) or [Beijing](https://bailian.console.alibabacloud.com/?tab=model#/model-market)). After you read and agree to the Terms of Service, Model Studio is automatically activated. If the Terms of Service do not appear, this indicates that you have already activated Model Studio.
    

## **403-**Model.AccessDenied

### Model access denied.

**Cause:** You do not have permission to call the corresponding standard model.

**Solution:**

-   **Calling a standard model**: When you use the API key of a sub-workspace to call a standard model, such as `qwen-plus`, the sub-workspace must have permission to call that model. See [Authorize a sub-workspace to call models](/help/en/model-studio/use-workspace#895b613347th4).
    

## **403-**App.AccessDenied

### **App access denied.**

**Cause:** You do not have permission to access the application or model.

**Solution:**

-   Carefully confirm that access authorization has been granted to the workspace and RAM user.
    
-   Carefully check whether the application is published.
    
-   Carefully verify that the APP ID and API KEY passed in are correct.
    
-   If the Claude Code reports an error, use the API key of the default workspace.
    
-   If all the above suggestions are correct, we recommend that you refresh the data, republish, and then call again, or try to create the agent again.
    

## **403-**Workspace.AccessDenied

### **Workspace access denied.**

**Cause:** You do not have permission to access the application or model of the workspace.

**Solution:**

-   If you are calling a model in a sub-workspace, see [Call a model in a sub-workspace](/help/en/model-studio/model-calling-in-sub-workspace).
    
-   You can also use the API key of the Alibaba Cloud account, which has permissions for all workspaces.
    

## **403-AllocationQuota.**FreeTierOnly

### The free tier of the model has been exhausted. If you want to continue access the model on a paid basis, please disable the "use free tier only" mode in the management console.

**Cause**: The [Free quota only](/help/en/model-studio/new-free-quota#d1cb80ac11i92) feature is enabled, and a request was sent after the free quota was exhausted.

> There is an hourly delay in the display of the free quota in the console. Even if the quota has been used up, the interface may still show a remaining quota.

**Solution**:

-   To initiate paid calls, wait until the console shows that the free quota runs out. Then, turn off [Free quota only](/help/en/model-studio/new-free-quota#d1cb80ac11i92).
    
-   If you encounter this issue while using Coding Plan, it is usually caused by wrong configuration. Coding Plan requires its own Base URL and [API key](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan). See [Getting started](/help/en/model-studio/coding-plan-quickstart).
    

## **404-**ModelNotFound/**model\_not\_found**

### **The provided model xxx is not supported by the Batch API.**

**Cause:** The current model does not support Batch calls, or the model name may be misspelled.

**Solution:** See [OpenAI compatible - Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/#80d1d39cf85zk) to confirm the models that support Batch calls and their correct names.

### **Model can not be found. / The model xxx does not exist. / The model xxx does not exist or you do not have access to it.**

**Cause:** The model being accessed does not exist, or you have not yet activated the Model Studio service.

**Solution:**

-   Check the model name in [Models](/help/en/model-studio/models) to verify that the model name you entered (the value of the `model` parameter) is correct.
    
-   Go to the Models page in the console to activate the model service.
    

## **404-**model\_not\_supported

### **Unsupported model xxx for OpenAI compatibility mode.**

**Cause:** The current model does not support access in OpenAI compatible mode.

**Solution:** Call the model using the DashScope method.

## **404-WorkSpaceNotFound**

### **WorkSpace can not be found.**

**Cause:** The workspace does not exist.

## **404-NotFound**

### **Not found!**

**Cause:**

-   The resource to be queried or operated on does not exist.
    
-   When you use custom vocabulary, the passed custom vocabulary ID is invalid or the corresponding custom vocabulary does not exist.
    

**Solution:**

-   Check whether the ID of the resource to be queried or operated on is incorrect.
    
-   Check whether the custom vocabulary ID is correct and call it in the correct way according to the API reference.
    

## **429-**Throttling

### Requests throttling triggered.

**Cause:** The API call triggered rate limiting.

**Solution:** Reduce the call frequency or try again later.

### **Too many requests in route. Please try again later.**

**Cause**: Too many requests triggered rate limiting.

**Solution**: Please try again later.

## **429-**Throttling.RateQuota/LimitRequests/limit\_requests

### **You have exceeded your request limit./Requests rate limit exceeded, try again later.** /You exceeded your current requests list.

**Cause:** The call frequency, requests per second (RPS) or requests per minute (RPM), triggered rate limiting.

**Solution:** See [Rate limits](/help/en/model-studio/rate-limit) and control the call frequency.

## **429-**Throttling.BurstRate/limit\_burst\_rate

### Request rate increased too quickly. To ensure system stability, please adjust your client logic to scale requests more smoothly over time.

**Cause**: Call frequency increased too quickly, triggering system stability protection despite not exceeding rate limits.

**Solution**: Optimize client call logic with request smoothing (uniform scheduling, exponential backoff, or request queue buffering) to distribute requests evenly across time windows.

## **429-**Throttling.AllocationQuota/insufficient\_quota

### **Allocated quota exceeded, please increase your quota limit./ You exceeded your current quota, please check your plan and billing details.**

**Cause:** The number of tokens consumed per second or per minute (TPS/TPM) triggered [Rate limiting](/help/en/model-studio/rate-limit).

**Solution:** See [How are tokens calculated?](/help/en/model-studio/billing-for-model-studio#bcc7c23d72olq) and adjust the call strategy according to the [Rate limiting](/help/en/model-studio/rate-limit) rules.

### **Too many requests. Batch requests are being throttled due to system capacity limits. Please try again later.**

**Cause:** Too many batch requests triggered rate limiting.

**Solution:** Your request cannot be processed at this time. Please try again later.

### **Free allocated quota exceeded.**

**Cause:** The free quota has expired or been used up, and the model does not currently support the pay-as-you-go billing method.

**Solution:** Use another model as a replacement. For example, if the Qwen-Audio model quota is used up, you can use the [omni-modal](/help/en/model-studio/qwen-omni) model.

## **429-CommodityNotPurchased**

### **Commodity has not purchased yet.**

**Cause:** The workspace has not been subscribed to.

**Solution:** Subscribe to the workspace service first.

## **429-PrepaidBillOverdue**

### **The prepaid bill is overdue.**

**Cause:** The subscription bill for the workspace has expired.

## **429-PostpaidBillOverdue**

### **The postpaid bill is overdue.**

**Cause:** The model inference product has expired.

## **430-Audio.**DecoderError

### Decoder audio file failed.

**Cause**: The [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) audio file failed to decode.

**Solution**: Use a tool, such as ffprobe or mediainfo, or a command, such as the file command in Linux/macOS, to confirm the actual encoding format of the audio file to make sure that it meets the requirements.

## **430-Audio.**FileSizeExceed

### **File too large**

**Cause:** The [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) audio file size exceeds the limit.

**Solution:** The audio file for voice cloning must be within 10 MB.

## **430-Audio.**AudioRateError

### **File sample rate unsupported**

**Cause:** The [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) audio file sample rate is not supported.

**Solution:** Set the sample rate to 16 kHz or higher.

## **430-Audio.**AudioSilentError

### **Silent file unsupported.**

**Cause:** The [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/) audio file is silent or the non-silent length is too short.

**Solution:** Control the audio duration to 10-15 seconds with at least one continuous speech segment of more than 5 seconds.

## **500-**InternalError/internal\_error

### **An internal error has occured, try again later or contact service support.**

**Cause:** An internal error occurred.

**Solution:**

-   For [Qwen-Omni model](/help/en/model-studio/qwen-omni): use streaming output method.
    
-   For [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/), possible causes:
    
    -   The audio file is not standard. For example, there is a problem with the sound itself, there is noise, or the sound fluctuates. Refer to [Recording guide for voice cloning](/help/en/model-studio/recording-guide) and retry.
        
    -   The recording file URL is inaccessible. Follow the instructions in the [Voice cloning/design API](/help/en/model-studio/cosyvoice-clone-design-api#01d5f797c8ksz) and retry.
        
    -   The recording file is too long. Try to choose a recording of 10 to 15 seconds. When you record, make sure to speak fluently and include at least one continuous speech segment of more than 5 seconds.
        

### **Internal server error!**

**Cause:** An internal algorithm error occurred.

**Solution:** Try again later.

### **audio preprocess server error**

For [CosyVoice voice cloning](/help/en/model-studio/voice-replica-1/):

-   **Cause:** The audio file is not standard. For example, there is a problem with the sound itself, there is noise, or the sound fluctuates.
    
    **Solution**: See the [Recording guide for voice cloning](/help/en/model-studio/recording-guide). Record again, and retry.
    
-   **Cause**: The recording file URL is inaccessible.
    
    **Solution**: Follow the instructions in the [CosyVoice Voice cloning API](/help/en/model-studio/cosyvoice-clone-design-api#01d5f797c8ksz) and retry.
    
-   **Cause**: The recording file is too long.
    
    **Solution**: Try to choose a recording of 10 to 15 seconds. When you record, make sure to speak fluently and include at least one continuous speech segment of more than 5 seconds.
    

## **500-**InternalError.FileUpload

### **oss upload error.**

**Cause:** File upload failed.

**Solution:** Check your OSS configuration and network.

## **500-**InternalError.Upload

### **Failed to upload result.**

**Cause:** Failed to upload the generation result.

**Solution:** Check the storage configuration or try again later.

## **500-**InternalError.Algo

### **inference internal error.**

**Cause:** A service exception occurred.

**Solution:** Try again first to rule out a sporadic issue.

### **Expecting ',' delimiter: line x column xxx (char xxx)**

**Cause:** The JSON data generated by the model is invalid, and a tool call cannot be initiated normally.

**Solution:** Switch to the latest model or optimize the prompt and try again.

### **Missing Content-Length of multimodal url.**

**Cause:** The `Content-Length` field is missing from the response header of the URL request.

**Solution:** If the problem cannot be solved, try to use another image link.

View the `Content-Length` field

1.  Open a browser, such as Chrome or Firefox.
    
2.  Open the developer tools. You can usually do this by pressing F12 or right-clicking and selecting "Inspect".
    
3.  Switch to the Network tab.
    
4.  Enter the image URL in the address bar and go to it.
    
5.  Find the corresponding request, view the Headers section, and find the Content-Length field in the "Response Headers" section.
    

### **An error occurred in model serving, error message is: \[Request rejected by inference engine!\]**

**Cause:** An error occurred on the underlying server of the model service.

**Solution:** Try again later.

### **An internal error has occured during algorithm execution.**

**Cause:** An error occurred during algorithm runtime.

**Solution:** Try again later.

### **Inference error: Inference error.**

**Cause:** An inference error occurred.

**Solution:** Check whether the input image file is corrupted or check the quality of the person image. It must contain a complete and clear face.

### **Role must be in \[user, assistant\]**

**Cause:** When you use the Qwen-MT model, the messages array contains a message with a role other than `user`.

**Solution:** Make sure that the messages array contains only one element, and that element must be a User Message.

### **Embedding\_pipeline\_Error: xxx**

**Cause:** An error occurred in image or video pre-processing.

**Solution:** Confirm that the uploaded image or video and the request code meet the requirements, then try again.

### **Receive batching backend response failed!**

**Cause:** An internal service error occurred.

**Solution:** Try again later.

### **An internal error has occured during execution, try again later or contact service support. / algorithm process error. / inference error. / An internal error occurs during computation, please try this model later.**

**Cause:** An internal algorithm error occurred.

**Solution:** Try again later.

### **list index out of range**

**Cause:** The last element in the messages array must be a User Message.

**Solution:** Adjust the order of the `messages` array to make sure that the last element is `{"role": "user", ...}`.

## **500-**InternalError.Timeout

### **An internal timeout error has occured during execution, try again later or contact service support.**

**Cause:** After an asynchronous task was submitted, no result was returned within 3 hours, which caused a timeout.

**Solution:** Check the task execution status or contact technical support.

## **500-**SystemError

### An system error has occured, try again later.

**Cause:** A system error occurred.

**Solution:** Try again later.

## **500-**ModelServiceFailed

### **Failed to request model service.**

**Cause:** The model service call failed.

**Solution:** Try again later.

## **500-**RequestTimeOut

### **Request timed out, try again later. / Response timeout! /** I/O error on POST request for "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions": timeout

**Cause:**

-   When you use a language model, the request timed out. The timeout error time is 300 seconds.
    
-   When you use speech recognition (Paraformer), no audio was sent to the server for a long time, or silent audio was sent for a long time.
    
-   When you use an image generation or editing model, the processing time exceeded the limit due to large image dimensions or high processing complexity.
    

**Solution:**

-   For language models: use streaming output. See [Streaming output](/help/en/model-studio/stream) for details.
    
-   For Paraformer: set request parameter `heartbeat` to `true` or end recognition task promptly.
    
-   For image models: reduce image resolution, simplify editing requirements, or retry later.
    

## **500-InvokePluginFailed**

### **Failed to invoke plugin.**

**Cause:** The plug-in call failed.

**Solution:** Check the plug-in configuration and availability.

## **500-AppProcessFailed**

### **Failed to proceed application request.**

**Cause:** The application flow processing failed.

**Solution:** Check the application configuration and flow nodes.

## **500-RewriteFailed**

### **Failed to rewrite content for prompt.**

**Cause:** The call to the prompt rewriting model failed.

**Solution:** Try again later.

## **500-RetrievalFailed**

### **Failed to retrieve data from documents.**

**Cause:** Document retrieval failed.

**Solution:** Check the document index and retrieval configuration.

## **500/503-**ModelServingError

### **Too many requests. Your requests are being throttled due to system capacity limits. Please try again later.**

**Cause:** Network resources are currently saturated, and your request cannot be processed at this time.

**Solution:** Try again later.

## **503-**ModelUnavailable

### **Model is unavailable, try again later.**

**Cause:** The model is temporarily unavailable.

**Solution:** Try again later.

## **SDK errors**

### **error.AuthenticationError: No api key provided. You can set by dashscope.api\_key = your\_api\_key in code, or you can set it via environment variable DASHSCOPE\_API\_KEY= your\_api\_key.**

**Cause:** The API key is missing when using the DashScope SDK.

**Solution:** For information about how to configure an API key, see [Set an API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

### **openai.OpenAIError: The api\_key client option must be set either by passing api\_key to the client or by setting the OPENAI\_API\_KEY environment variable**

**Cause:** The API key is missing.

**Solution:**

-   **Pass the API key using an environment variable (Recommended)**
    
    Set the `DASHSCOPE_API_KEY` environment variable (see [Export API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables)). When you initialize the `client`, read the key using the `os.getenv` method:
    
    `client = OpenAI(api_key=os.getenv("DASHSCOPE_API_KEY"),...)`
    
-   **Pass the API key in plaintext (For testing only)**
    
    Pass the API key directly to the `api_key` parameter:
    
    `client = OpenAI(api_key="sk-...", ...)`
    
    **Note:** This method poses a security risk. Do not use it in a production environment.
    

### **Bad Request for url:** xxx

**Cause:** When you use the Python requests library, adding the `response.raise_for_status()` statement prevents the specific error content from the server from being returned when an error occurs.

**Solution:** Use `print(response.json())` to view the information returned by the server.

### **Cannot resolve symbol 'ttsv2'**

**Cause:** For [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/): outdated DashScope SDK version.

**Solution:** [Install the latest version of the DashScope SDK](/help/en/model-studio/install-sdk#f80a232bb24v7).

## **NetworkError**

### **NoApiKeyException: Can not find api-key.**

**Cause:** The environment variable is not yet effective.

**Solution:** Restart client or IDE and try again. See [FAQ](/help/en/model-studio/configure-api-key-through-environment-variables#e6a57c054bfzy).

### **ConnectException: Failed to connect to dashscope.aliyuncs.com**

**Cause:** An exception exists in the on-premises network environment.

**Solution:** Check on-premises network for certificate issues or incorrect firewall settings. Switch to a different network environment or server for testing.

### **InputRequiredException: Parameter invalid: text is null**

**Cause**: For [speech synthesis (CosyVoice)](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/): text to be synthesized was not sent.

**Solution:** Assign a value to the `text` parameter when you call the speech synthesis API.

### **MultiModalConversation.call() missing 1 required positional argument: 'messages'**

**Cause**: The DashScope SDK version is outdated.

**Solution:** [Install the latest version of the DashScope SDK](/help/en/model-studio/install-sdk#f80a232bb24v7).

## **mismatched\_model**

### **The model 'xxx' for this request does not match the rest of the batch. Each batch must contain requests for a single model.**

**Cause:** In a single batch task, all requests must use the same model.

**Solution:** Check your input file according to the [input file format](/help/en/model-studio/batch-interfaces-compatible-with-openai/#f6d37c5b28eia).

## **duplicate\_custom\_id**

### **The custom\_id 'xxx' for this request is a duplicate of another request. The custom\_id parameter must be unique for each request in a batch.**

**Cause:** In a single batch task, the ID of each request must be unique.

**Solution:** Check your input file according to the [input file format](/help/en/model-studio/batch-interfaces-compatible-with-openai/#f6d37c5b28eia) and make sure that all request IDs are unique.

### **Upload file capacity exceed limit. / Upload file number exceed limit.**

**Cause:** The file upload failed. The Model Studio storage space under the current Alibaba Cloud account is full or nearly full.

**Solution:** You can use the [OpenAI compatible - File](/help/en/model-studio/openai-file-interface#a1edc56340slx) API to delete unnecessary files to free up space. The current storage space supports a maximum of 10,000 files and a total of no more than 100 GB.

## **WebSocket errors**

### **The decoded text message was too big for the output buffer and the endpoint does not support partial messages**

**Cause:** When you use streaming speech recognition with speech recognition (Paraformer), the amount of recognition result data returned by the service is too large.

**Solution:** Send the audio to be recognized in segments. We recommend that the duration of the audio sent each time be about 100 milliseconds, and the data size be kept between 1 KB and 16 KB.

### **TimeoutError: websocket connection could not established within 5s. Please check your network connection, firewall settings, or server status.**

**Cause:** For speech synthesis (CosyVoice): WebSocket connection could not be established within 5 seconds.

**Solution:** Check on-premises network and firewall settings, or switch to a different network environment or server for testing.

### **unsupported audio format:xxx**

**Cause:** For CosyVoice voice cloning: uploaded audio format does not meet requirements.

**Solution:** The audio format must be WAV (16-bit), MP3, or M4A. Note that you cannot judge the format by the file name extension alone. Use a tool, such as ffprobe or mediainfo, or a command, such as the file command in Linux/macOS, to confirm the actual encoding format of the audio file.

### **internal unknown error**

**Cause:** The CosyVoice voice cloning audio file format may not meet the requirements.

**Solution:** The audio format must be WAV (16-bit), MP3, or M4A. Use a tool, such as ffprobe or mediainfo, to confirm the actual encoding format of the audio file.

### **Invalid backend response received (missing status name)**

**Cause:** For RESTful API audio file recognition with speech recognition (Paraformer): misspelled request parameter.

**Solution:** Refer to the API reference to check your code.

### **NO\_INPUT\_AUDIO\_ERROR**

**Cause:** No valid speech was detected.

**Solution:** For real-time speech recognition with speech recognition (Paraformer), troubleshoot as follows:

1.  Check whether there is audio input.
    
2.  Check whether the audio format is correct. pcm, wav, mp3, opus, speex, aac, and amr are supported.
    

### **SUCCESS\_WITH\_NO\_VALID\_FRAGMENT**

**Cause:** For audio file recognition with speech recognition (Paraformer): recognition result query API succeeded, but VAD module detected no valid speech.

**Solution:** Check whether the audio file contains valid speech. If it is all invalid speech, such as pure silence, it is normal to have no recognition result.

### **ASR\_RESPONSE\_HAVE\_NO\_WORDS**

**Cause:** For audio file recognition with speech recognition (Paraformer): recognition result query API succeeded, but final recognition result is empty.

**Solution:** Check whether the audio file contains valid speech, or whether the valid speech is all filler words and the disfluency detection parameter `disfluency_removal_enabled` is enabled, which causes the filler words to be filtered out.

### **FILE\_DOWNLOAD\_FAILED**

**Cause:** For audio file recognition with speech recognition (Paraformer): file to be recognized failed to download.

**Solution:** Check whether the audio file path is correct and whether it can be accessed and downloaded from the external network.

### **FILE\_CHECK\_FAILED**

**Cause:** For audio file recognition with speech recognition (Paraformer): incorrect file format.

**Solution:** Check whether the audio file is in single-track/dual-track WAV format or MP3 format.

### **FILE\_TOO\_LARGE**

**Cause:** For audio file recognition with speech recognition (Paraformer): file to be recognized is too large.

**Solution:** Check whether the audio file size exceeds 2 GB. If it does, you need to segment the audio file.

### **FILE\_NORMALIZE\_FAILED**

**Cause:** For audio file recognition with speech recognition (Paraformer): file to be recognized failed to normalize.

**Solution:** Check whether the audio file is corrupted and whether it can be played normally.

### **FILE\_PARSE\_FAILED**

**Cause:** For audio file recognition with speech recognition (Paraformer): file failed to parse.

**Solution:** Check whether the audio file is corrupted and whether it can be played normally.

### **MKV\_PARSE\_FAILED**

**Cause:** For audio file recognition with speech recognition (Paraformer): MKV failed to parse.

**Solution:** Check whether the audio file is corrupted and whether it can be played normally.

### **FILE\_TRANS\_TASK\_EXPIRED**

**Cause:** For audio file recognition with speech recognition (Paraformer): audio file recognition task has expired.

**Solution:** The TaskId does not exist or has expired. Resubmit the task.

### **REQUEST\_INVALID\_FILE\_URL\_VALUE**

**Cause:** For audio file recognition with speech recognition (Paraformer): invalid file\_link parameter.

**Solution:** Confirm that the format of the `file_url` parameter is correct.

### **CONTENT\_LENGTH\_CHECK\_FAILED**

**Cause:** For audio file recognition with speech recognition (Paraformer): `content-length` check failed.

**Solution:** When you download the audio file to be recognized, check whether the `content-length` in the HTTP response is consistent with the actual file size.

### **FILE\_404\_NOT\_FOUND**

**Cause:** For audio file recognition with speech recognition (Paraformer): file to be downloaded does not exist.

**Solution:** Check whether the file URL is correct.

### **FILE\_403\_FORBIDDEN**

**Cause:** For audio file recognition with speech recognition (Paraformer): no permission to download audio to be recognized.

**Solution:** Check the file access permissions.

### **FILE\_SERVER\_ERROR**

**Cause:** For audio file recognition with speech recognition (Paraformer): service where requested file is located is unavailable.

**Solution:** Try again later or check the file server status.

### **AUDIO\_DURATION\_TOO\_LONG**

**Cause:** For audio file recognition with speech recognition (Paraformer): requested file duration exceeds 12 hours.

**Solution:** Segment the audio and submit the recognition tasks multiple times. You can use tools such as FFmpeg to segment the audio.

### **DECODE\_ERROR**

**Cause:** For audio file recognition with speech recognition (Paraformer): failed to detect audio file information.

**Solution:** Confirm that the file in the file download link is in a supported audio format.

### **CLIENT\_ERROR**\-**\[qwen-tts:\]Engine return error code: 411**

**Cause:** For Qwen-TTS real-time speech synthesis: selected model is `qwen-tts-vc-realtime-2025-08-20`, but voice is the default voice. This model supports only cloned voices.

**Solution:** Use a voice generated by voice cloning, not the default voice.

### **NO\_VALID\_AUDIO\_ERROR**

**Cause:** For speech recognition (Paraformer): audio to be recognized is invalid. **Solution:** Check whether audio format, sample rate, and other parameters meet requirements.

### **InvalidParameter: task can not be null**

**Cause:** The input field is missing from the payload of the run-task or finish-task instruction, or the input.text field is missing from the continue-task instruction when you use the CosyVoice speech synthesis WebSocket API.

**Solution:**

1.  Check the run-task instruction: Verify that the payload contains `"input": {}` (a null object). The input field is required.
    
2.  Check the continue-task instruction: Verify that payload.input contains the text field and that its value is not an empty string.
    
3.  Check the finish-task instruction: Verify that the payload contains `"input": {}`.
    

## **200-**BailianGateway.Workspace.NotAuthorised

**Cause:** The accessed URL contains special characters or uses a non-standard format, which causes workspace authorization validation to fail.

**Solution:** Return to the Model Studio console home page, and then navigate to the target page.
