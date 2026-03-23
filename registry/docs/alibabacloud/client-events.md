This topic describes the client events for the Qwen-Omni-Realtime API.

> Reference: [Real-time (Qwen-Omni-Realtime)](/help/en/model-studio/realtime).

## **session.update**

Send this event after establishing a WebSocket connection to update the session configuration. The service validates parameters, updates the session with the complete configuration if valid, or returns an error.

**type** `_string_` **(Required)**

The event type. Always `session.update`.

```
{
    "event_id": "event_ToPZqeobitzUJnt3QqtWg",
    "type": "session.update",
    "session": {
        "modalities": [
            "text",
            "audio"
        ],
        "voice": "Chelsie",
        "input_audio_format": "pcm",
        "output_audio_format": "pcm",
        "instructions": "You are an AI customer service agent for a five-star hotel. Please answer customer inquiries about room types, facilities, prices, and reservation policies accurately and in a friendly manner. Always respond with a professional and helpful attitude. Do not provide unconfirmed information or information beyond the scope of the hotel's services.",
        "turn_detection": {
            "type": "server_vad",
            "threshold": 0.5,
            "silence_duration_ms": 800
        },
        "seed": 1314,
        "max_tokens": 16384,
        "repetition_penalty": 1.05,
        "presence_penalty": 0.0,
        "top_k": 50,
        "top_p": 1.0,
        "temperature": 0.9
    }
}
```

**session** `_object_` (Optional)

The session configuration.

**Properties**

**modalities** `_array_` (Optional)

The model output modalities. Valid values:

-   \["text"\]
    
    Outputs text only.
    
-   \["text","audio"\] (Default)
    
    Outputs text and audio.
    

**voice** `_string_` (Optional)

The voice for generated audio. See [Voice list](/help/en/model-studio/realtime#f9c68d860a3rs) for supported voices.

Default voice:

-   Qwen3-Omni-Flash-Realtime: `Cherry`
    
-   Qwen-Omni-Turbo-Realtime: `Chelsie`
    

**input\_audio\_format** `_string_` (Optional)

The user input audio format. Currently, only `pcm` is supported.

**output\_audio\_format** `_string_` (Optional)

The output audio format. Currently, only `pcm` is supported.

**smooth\_output** `_boolean | null_` (Optional)

**This parameter applies only to Qwen3-Omni-Flash-Realtime models.**

Specifies whether to enable a conversational reply style. Valid values:

-   `true` (Default): Conversational replies.
    
-   `false`: More formal, written-style replies.
    
    > This may not work well for content that is difficult to read.
    
-   `null`: The model automatically selects a conversational or written reply style.
    

**instructions** `_string_` (Optional)

The system message that sets the model's goal or role.

**turn\_detection** `_object_` (Optional)

The voice activity detection (VAD) configuration. Set to `null` to disable VAD and manually trigger responses. If omitted, VAD is enabled with default parameters.

**Properties**

**type** `_string_` (Optional)

The server-side VAD type. Always `server_vad`. The default value is `server_vad`.

**threshold** `_float_` (Optional)

The VAD sensitivity. Lower values increase sensitivity, detecting faint sounds and background noise as speech. Higher values require clearer, louder speech to trigger detection.

The value ranges from `[-1.0, 1.0]`. The default value is 0.5.

**silence\_duration\_ms** `_integer_` (Optional)

The minimum silence duration after speech ends to trigger a response. Lower values produce faster responses but may trigger incorrectly during brief pauses.

The default value is 800. The parameter ranges from 200 to 6000.

**temperature** `_float_` (Optional)

The sampling temperature that controls content diversity. Higher values create more diverse content; lower values create more deterministic content.

Value range: \[0, 2).

Both \`temperature\` and \`top\_p\` control diversity — set only one.

Default value:

-   qwen3-omni-flash-realtime models: 0.9
    
-   qwen-omni-turbo-realtime models: 1.0
    

> `qwen-omni-turbo` models **do not support modification**.

**top\_p** `_float_` (Optional)

The probability threshold for nucleus sampling that controls content diversity. Higher \`top\_p\` values create more diverse content; lower values create more deterministic content.

Value range: (0, 1.0\].

Both \`temperature\` and \`top\_p\` control diversity — set only one.

Default value:

-   `qwen3-omni-flash-realtime` models: 1.0
    
-   `qwen-omni-turbo-realtime` models: 0.01
    

> `qwen-omni-turbo` models **do not support modification**.

**top\_k** `_integer_` (Optional)

The candidate set size for sampling during generation. For example, setting this to 50 means only the top 50 tokens form the candidate set. Larger values increase randomness; smaller values increase determinism. If `null` or >100, `top_k` is disabled and only `top_p` takes effect.

The value must be greater than or equal to 0.

Default value:

-   `qwen3-omni-flash-realtime` models: 50
    
-   `qwen-omni-turbo-realtime` models: 20
    

> `qwen-omni-turbo` models **do not support modification**.

**max\_tokens** `_integer_` (Optional)

The maximum tokens to return for the request.

> `max_tokens` does not affect generation. Content is truncated if generated tokens exceed `max_tokens`.

The default and maximum values are the model's maximum output length. For more information about the maximum output length of each model, see [Model list](/help/en/model-studio/models#9f8890ce29g5u).

Use \`max\_tokens\` to limit word count (e.g., summaries, keywords), control costs, or reduce response times.

> `qwen-omni-turbo` models **do not support modification**.

**repetition\_penalty** `_float_` (Optional)

The penalty for repetition in consecutive sequences during generation. Higher \`repetition\_penalty\` values reduce repetition. A value of 1.0 means no penalty. The value must be >0 (no strict upper limit).

The default value is 1.05.

> `qwen-omni-turbo` models **do not support modification**.

**presence\_penalty** `_float_` (Optional)

Controls the repetition of the generated content.

The default value is 0.0. The value must be in the range of \[-2.0, 2.0\]. A positive value reduces repetition, and a negative value increases repetition.

Scenarios:

A higher \`presence\_penalty\` is suitable for scenarios that require diversity, creativity, or fun, such as creative writing or brainstorming.

A lower \`presence\_penalty\` is suitable for scenarios that require consistency or the use of professional terms, such as technical documents or other formal documents.

> `qwen-omni-turbo` models **do not support modification**.

**seed** `_integer_` (Optional)

Setting \`seed\` makes generation deterministic, ensuring consistent results across runs. Passing the same \`seed\` with unchanged parameters returns identical results.

The value must be in the range of 0 to 231\-1. The default value is -1.

> `qwen-omni-turbo` models **do not support modification**.

## **response.create**

`response.create` instructs the service to create a model response. In VAD mode, responses are created automatically — you don't need to send this event.

The service responds with `response.created`, followed by one or more item/content events (e.g., `conversation.item.created`, `response.content_part.added`), and finally `response.done` to indicate completion.

**type** `_string_` **(Required)**

The event type. Always `response.create`.

```
{
    "type": "response.create",
    "event_id": "event_1718624400000"
}
```

## **response.cancel**

Send this event to cancel an ongoing response. If no response exists, the service returns an error.

**type** `_string_` **(Required)**

The event type. Always `response.cancel`.

```
{
    "event_id": "event_B4o9RHSTWobB5OQdEHLTo",
    "type": "response.cancel"
}
```

## **input\_audio\_buffer.append**

Append audio bytes to the input audio buffer.

**type** `_string_` **(Required)**

The event type. Always `input_audio_buffer.append`.

```
{
    "event_id": "event_B4o9RHSTWobB5OQdEHLTo",
    "type": "input_audio_buffer.append",
    "audio": "UklGR..."
}
```

**audio** `_string_` **(Required)**

The Base64-encoded audio data.

## **input\_audio\_buffer.commit**

Submit the user input audio buffer to create a new user message item. If the buffer is empty, the service returns an error.

-   [VAD mode](/help/en/model-studio/realtime#68d826b358q1r): The client does not need to send this event. The service automatically submits the audio buffer.
    
-   [Manual mode](/help/en/model-studio/realtime#3dbb650fb3ird): The client must submit the audio buffer to create a user message item.
    

Submitting the input audio buffer does not create a model response. The service responds with `input_audio_buffer.committed`.

> If the client has sent an [input\_image\_buffer.append](#c28ed38410nfw) event, the input\_audio\_buffer.commit event submits the image buffer along with the audio buffer.

**type** `_string_` **(Required)**

The event type. Always `input_audio_buffer.commit`.

```
{
    "event_id": "event_B4o9RHSTWobB5OQdEHLTo",
    "type": "input_audio_buffer.commit"
}
```

## **input\_audio\_buffer.clear**

Clear audio bytes from the buffer. The service responds with `input_audio_buffer.cleared`.

**type** `_string_` **(Required)**

The event type. Always `input_audio_buffer.clear`.

```
{
    "event_id": "event_xxx",
    "type": "input_audio_buffer.clear"
}
```

## **input\_image\_buffer.append**

Add image data to the image buffer. Images can be from local files or real-time video streams.

The following limits apply to image inputs:

-   The format must be JPG or JPEG. Recommended resolution: 480p or 720p. Maximum resolution: 1080p.
    
-   The maximum size is 500 KB (before Base64 encoding).
    
-   Image data must be Base64-encoded.
    
-   Send images at 1 image per second.
    
-   Before sending \`input\_image\_buffer.append\`, you must first send at least one \`input\_audio\_buffer.append\` event.
    

> The image buffer is submitted along with the audio buffer through the [input\_audio\_buffer.commit](#1cbea5fa7fkfl) event.

**type** `_string_` **(Required)**

The event type. Always `input_image_buffer.append`.

```
{
    "event_id": "event_xxx",
    "type": "input_image_buffer.append",
    "image": "xxx"
}
```

**image** `_string_` **(Required)**

The Base64-encoded image data.
