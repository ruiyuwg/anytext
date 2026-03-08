## Audio output

Some OpenAI models (such as `gpt-4o-audio-preview`) support generating audio output. This example shows how to use that feature:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const modelWithAudioOutput = new ChatOpenAI({
  model: "gpt-4o-audio-preview",
  // You may also pass these fields to `.bind` as a call argument.
  modalities: ["text", "audio"], // Specifies that the model should output audio.
  audio: {
    voice: "alloy",
    format: "wav",
  },
});

const audioOutputResult = await modelWithAudioOutput.invoke("Tell me a joke about cats.");
const castAudioContent = audioOutputResult.additional_kwargs.audio as Record<string, any>;

console.log({
  ...castAudioContent,
  data: castAudioContent.data.slice(0, 100) // Sliced for brevity
})
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  id: 'audio_67129e9466f48190be70372922464162',
  data: 'UklGRgZ4BABXQVZFZm10IBAAAAABAAEAwF0AAIC7AAACABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNTguMjkuMTAwAGRhdGHA',
  expires_at: 1729277092,
  transcript: "Why did the cat sit on the computer's keyboard? Because it wanted to keep an eye on the mouse!"
}
```

We see that the audio data is returned inside the `data` field. We are also provided an `expires_at` date field. This field represents the date the audio response will no longer be accessible on the server for use in multi-turn conversations.

### Streaming audio output

OpenAI also supports streaming audio output. Here's an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { AIMessageChunk } from "@langchain/core/messages";
import { concat } from "@langchain/core/utils/stream"
import { ChatOpenAI } from "@langchain/openai";

const modelWithStreamingAudioOutput = new ChatOpenAI({
  model: "gpt-4o-audio-preview",
  modalities: ["text", "audio"],
  audio: {
    voice: "alloy",
    format: "pcm16", // Format must be `pcm16` for streaming
  },
});

const audioOutputStream = await modelWithStreamingAudioOutput.stream("Tell me a joke about cats.");
let finalAudioOutputMsg: AIMessageChunk | undefined;
for await (const chunk of audioOutputStream) {
  finalAudioOutputMsg = finalAudioOutputMsg ? concat(finalAudioOutputMsg, chunk) : chunk;
}
const castStreamedAudioContent = finalAudioOutputMsg?.additional_kwargs.audio as Record<string, any>;

console.log({
  ...castStreamedAudioContent,
  data: castStreamedAudioContent.data.slice(0, 100) // Sliced for brevity
})
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  id: 'audio_67129e976ce081908103ba4947399a3eaudio_67129e976ce081908103ba4947399a3e',
  transcript: 'Why was the cat sitting on the computer? Because it wanted to keep an eye on the mouse!',
  index: 0,
  data: 'CgAGAAIADAAAAA0AAwAJAAcACQAJAAQABQABAAgABQAPAAAACAADAAUAAwD8/wUA+f8MAPv/CAD7/wUA///8/wUA/f8DAPj/AgD6',
  expires_at: 1729277096
}
```

### Audio input

These models also support passing audio as input. For this, you must specify `input_audio` fields as seen below:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { HumanMessage } from "@langchain/core/messages";

const userInput = new HumanMessage({
  content: [{
    type: "input_audio",
    input_audio: {
      data: castAudioContent.data, // Re-use the base64 data from the first example
      format: "wav",
    },
  }]
})

// Re-use the same model instance
const userInputAudioRes = await modelWithAudioOutput.invoke([userInput]);

console.log((userInputAudioRes.additional_kwargs.audio as Record<string, any>).transcript);
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
That's a great joke! It's always fun to imagine why cats do the funny things they do. Keeping an eye on the "mouse" is a creatively punny way to describe it!
```

***

## API reference

For detailed documentation of all ChatOpenAI features and configurations head to the [API reference](https://api.js.langchain.com/classes/langchain_openai.ChatOpenAI.html).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/chat/openai.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
