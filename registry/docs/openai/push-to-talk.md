## Push-to-talk

Realtime API defaults to using voice activity detection (VAD), which means model responses will be triggered with audio input. You can also do a push-to-talk interaction by disabling VAD and using an application-level gate to control when audio input is sent to the model, for example holding the space-bar down to capture audio, then triggering a response when it's released. For some apps this works surprisingly well -- it gives the users control over interactions, avoids VAD failures, and it feels snappy because we're not waiting for a VAD timeout.

Implementing push-to-talk looks a bit different on WebSockets and WebRTC. In a Realtime API WebSocket connection all events are sent in the same channel and with the same ordering, while a WebRTC connection has separate channels for audio and control events.

### WebSockets

To implement push-to-talk with a WebSocket connection, you'll want the client to stop audio playback, handle interruptions, and kick off a new response. Here's a more detailed procedure:

1. Turn VAD off by setting `"turn_detection": null` in a [`session.update`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/session/update) event.
2. On push down, start recording audio on the client.
   1. If there is an in-progress response from the model, cancel it by sending a [`response.cancel`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/response/cancel) event.
   2. If there is is ongoing output playback from the model, stop playback immediately and send an `conversation.item.truncate` event to remove any unplayed audio from the conversation.
3. On up, send an [`input_audio_buffer.append`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/input_audio_buffer/append) message with the audio to place new audio into the input buffer.
4. Send an [`input_audio_buffer.commit`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/input_audio_buffer/commit) event, this will commit the audio written to the input buffer and kick off input transcription (if enabled).
5. Then trigger a response with a [`response.create`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/response/create) event.

### WebRTC and SIP

Implementing push-to-talk with WebRTC is similar but the input audio buffer must be explicitly cleared. Here's a procedure:

1. Turn VAD off by setting `"turn_detection": null` in a [`session.update`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/session/update) event.
2. On push down, send an [`input_audio_buffer.clear`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/input_audio_buffer/clear) event to clear any previous audio input.
   1. If there is an in-progress response from the model, cancel it by sending a [`response.cancel`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/response/cancel) event.
   2. If there is is ongoing output playback from the model, send an [`output_audio_buffer.clear`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/output_audio_buffer/clear) event to clear out the unplayed audio, this truncates the conversation as well.
3. On up, send an [`input_audio_buffer.commit`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/input_audio_buffer/commit) event, this will commit the audio written to the input buffer and kick off input transcription (if enabled).
4. Then trigger a response with a [`response.create`](https://developers.openai.com/api/docs/api-reference/realtime-client-events/response/create) event.

***
