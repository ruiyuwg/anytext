Qwen-Omni-Realtime is a real-time audio and video chat model from the Qwen series. It can understand streaming audio and image inputs, such as continuous image frames extracted from a video stream in real time. It can also generate high-quality text and audio in real time.

## **Procedure**

### **1\. Establish a connection**

Qwen-Omni-Realtime is accessed through the WebSocket protocol. You can establish a connection using the following Python code example or the DashScope SDK.

**Note**

A single WebSocket session lasts up to **120 minutes** before it closes automatically.

## Native WebSocket connection

The following configuration items are required:

**Configuration item**

**Description**

Endpoint

China (Beijing): wss://dashscope.aliyuncs.com/api-ws/v1/realtime

International (Singapore): wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime

Query parameter

The query parameter is \`model\`. It must be set to the name of the model you want to access. Example: `?model=qwen3-omni-flash-realtime`

Request header

Use Bearer Token for authentication: Authorization: Bearer DASHSCOPE\_API\_KEY

> DASHSCOPE\_API\_KEY is the [API key](/help/en/model-studio/get-api-key) that you requested on Model Studio.

```
# pip install websocket-client
import json
import websocket
import os

API_KEY=os.getenv("DASHSCOPE_API_KEY")
API_URL = "wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime?model=qwen3-omni-flash-realtime"

headers = [
    "Authorization: Bearer " + API_KEY
]

def on_open(ws):
    print(f"Connected to server: {API_URL}")
def on_message(ws, message):
    data = json.loads(message)
    print("Received event:", json.dumps(data, indent=2))
def on_error(ws, error):
    print("Error:", error)

ws = websocket.WebSocketApp(
    API_URL,
    header=headers,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error
)

ws.run_forever()
```

## DashScope SDK

Python

```
# SDK version 1.23.9 or later
import os
import json
from dashscope.audio.qwen_omni import OmniRealtimeConversation,OmniRealtimeCallback
import dashscope
# The API keys for the Singapore and Beijing regions are different. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# If you have not configured an API key, change the following line to dashscope.api_key = "sk-xxx"
dashscope.api_key = os.getenv("DASHSCOPE_API_KEY")

class PrintCallback(OmniRealtimeCallback):
    def on_open(self) -> None:
        print("Connected Successfully")
    def on_event(self, response: dict) -> None:
        print("Received event:")
        print(json.dumps(response, indent=2, ensure_ascii=False))
    def on_close(self, close_status_code: int, close_msg: str) -> None:
        print(f"Connection closed (code={close_status_code}, msg={close_msg}).")

callback = PrintCallback()
conversation = OmniRealtimeConversation(
    model="qwen3-omni-flash-realtime",
    callback=callback,
    # The following is the URL for the Singapore region. If you use a model in the Beijing region, replace the URL with wss://dashscope.aliyuncs.com/api-ws/v1/realtime
    url="wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime"
)
try:
    conversation.connect()
    print("Conversation started. Press Ctrl+C to exit.")
    conversation.thread.join()
except KeyboardInterrupt:
    conversation.close()
```

Java

```
// SDK version 2.20.9 or later
import com.alibaba.dashscope.audio.omni.*;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.google.gson.JsonObject;
import java.util.concurrent.CountDownLatch;

public class Main {
    public static void main(String[] args) throws InterruptedException, NoApiKeyException {
        CountDownLatch latch = new CountDownLatch(1);
        OmniRealtimeParam param = OmniRealtimeParam.builder()
                .model("qwen3-omni-flash-realtime")
                .apikey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the URL for the Singapore region. If you use a model in the Beijing region, replace the URL with wss://dashscope.aliyuncs.com/api-ws/v1/realtime
                .url("wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime")
                .build();

        OmniRealtimeConversation conversation = new OmniRealtimeConversation(param, new OmniRealtimeCallback() {
            @Override
            public void onOpen() {
                System.out.println("Connected Successfully");
            }
            @Override
            public void onEvent(JsonObject message) {
                System.out.println(message);
            }
            @Override
            public void onClose(int code, String reason) {
                System.out.println("connection closed code: " + code + ", reason: " + reason);
                latch.countDown();
            }
        });
        conversation.connect();
        latch.await();
        conversation.close(1000, "bye");
        System.exit(0);
    }
}
```

### **2\. Configure the session**

Send the [session.update](/help/en/model-studio/client-events#26a8302028sjm) client event:

```
{
    // The ID of this event, generated by the client.
    "event_id": "event_ToPZqeobitzUJnt3QqtWg",
    // The event type. This is fixed to session.update.
    "type": "session.update",
    // Session configuration.
    "session": {
        // The output modalities. Supported values are ["text"] (text only) or ["text", "audio"] (text and audio).
        "modalities": [
            "text",
            "audio"
        ],
        // The voice for the output audio.
        "voice": "Cherry",
        // The input audio format. Only pcm is supported.
        "input_audio_format": "pcm",
        // The output audio format. Only pcm is supported.
        "output_audio_format": "pcm",
        // The system message. It is used to set the model's goal or role.
        "instructions": "You are an AI customer service agent for a five-star hotel. Answer customer inquiries about room types, facilities, prices, and booking policies accurately and friendly. Always respond with a professional and helpful attitude. Do not provide unconfirmed information or information beyond the scope of the hotel's services.",
        // Specifies whether to enable voice activity detection. To enable it, pass a configuration object. The server will automatically detect the start and end of speech based on this object.
        // Set to null to let the client decide when to initiate a model response.
        "turn_detection": {
            // The VAD type. It must be set to server_vad.
            "type": "server_vad",
            // The VAD detection threshold. Increase this value in noisy environments and decrease it in quiet environments.
            "threshold": 0.5,
            // The duration of silence to detect the end of speech. If this value is exceeded, a model response is triggered.
            "silence_duration_ms": 800
        }
    }
}
```

### **3\. Input audio and images**

The client sends Base64-encoded audio (required) and images (optional) to the server buffer using [input\_audio\_buffer.append](/help/en/model-studio/client-events#2ea4b5e41fhjd) and [input\_image\_buffer.append](/help/en/model-studio/client-events#c28ed38410nfw) events.

> Images can be from local files or captured in real time from a video stream.

> When VAD is enabled, the server automatically submits data and triggers a response when speech ends. When VAD is disabled (manual mode), the client must call [input\_audio\_buffer.commit](/help/en/model-studio/client-events#1cbea5fa7fkfl) to submit data.

### **4\. Receive model responses**

The format of the model response depends on the configured output modalities.

-   **Text only**
    
    Receive streaming text through the [response.text.delta](/help/en/model-studio/server-events#0c54be63e0c3w) event. Get the full text with the [response.text.done](/help/en/model-studio/server-events#d675635a94jfb) event.
    
-   **Text and audio**
    
    -   **Text**: Receive streaming text through the [response.audio\_transcript.delta](/help/en/model-studio/server-events#35396453cfood) event. Get the full text with the [response.audio\_transcript.done](/help/en/model-studio/server-events#f4d1698567bsm) event.
        
    -   **Audio**: Get Base64-encoded streaming audio output data through the [response.audio.delta](/help/en/model-studio/server-events#a25cc50a15car) event. The [response.audio.done](/help/en/model-studio/server-events#9e8eb59c67qnt) event indicates that the audio data generation is complete.
        

## **Availability**

### **Region**

-   Singapore: Use an [API key](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key) from this region
    
-   Beijing: Use an [API key](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key) from this region
    

### **Model**

Qwen3-Omni-Flash-Realtime is the latest real-time multimodal model in the Qwen series. Compared to the previous generation model Qwen-Omni-Turbo-Realtime, which will no longer be updated, Qwen3-Omni-Flash-Realtime has the following advantages:

-   **Supported languages**
    
    Qwen3-Omni-Flash-Realtime supports 10 languages: Chinese (Mandarin and dialects like Shanghainese, Cantonese, Sichuanese), English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, and Korean. Qwen-Omni-Turbo-Realtime supports only Chinese (Mandarin) and English.
    
-   **Supported voices**
    
    qwen3-omni-flash-realtime-2025-12-01 supports 49 voices. qwen3-omni-flash-realtime-2025-09-15 and qwen3-omni-realtime-flash supports 17. Qwen-Omni-Turbo-Realtime supports only 4. For more information, see [Voice list](#f4c9fd97f221z).
    

## International (Singapore)

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-omni-flash-realtime**

> Currently qwen3-omni-flash-realtime**\-**2025-12-01.

Stable

65,536

49,152

16,384

1 million tokens (regardless of modality)

Valid for 90 days after activating Model Studio

qwen3-omni-flash-realtime**\-**2025-12-01

Snapshot

qwen3-omni-flash-realtime**\-**2025-09-15

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen-omni-turbo-realtime**

> Currently qwen-omni-turbo-realtime**\-**2025-05-08

Stable

32,768

30,720

2,048

1 million tokens each (regardless of modality)

Valid for 90 days after activating Model Studio

**qwen-omni-turbo-realtime-latest**

> Always the latest snapshot.

Latest

qwen-omni-turbo-realtime**\-**2025-05-08

Snapshot

## **China (Beijing)**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-omni-flash-realtime**

> This model currently, qwen3-omni-flash-realtime**\-**2025-12-01.

Stable

65,536

49,152

16,384

No free quota

qwen3-omni-flash-realtime**\-**2025-12-01

Snapshot

qwen3-omni-flash-realtime**\-**2025-09-15

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen-omni-turbo-realtime**

> This model currently, the qwen-omni-turbo-2025-05-08 snapshot.

Stable

32,768

30,720

2,048

No free quota

**qwen-omni-turbo-realtime-latest**

> It always provides the same capabilities as the latest snapshot.

Latest

qwen-omni-turbo-realtime**\-**2025-05-08

Snapshot

## **Getting started**

[Get an API key](/help/en/model-studio/get-api-key) and [export the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

Choose a programming language you are familiar with and follow the steps below to quickly start a real-time conversation with Qwen-Omni-Realtime.

## DashScope Python SDK

-   **Prepare the runtime environment**
    

Your Python version must be 3.10 or later.

First, install pyaudio based on your operating system.

## macOS

```
brew install portaudio && pip install pyaudio
```

## Debian/Ubuntu

-   **If you are not using a virtual environment**, you can install it directly using the system package manager:
    
    ```
    sudo apt-get install python3-pyaudio
    ```
    
-   **If you are in a virtual environment**, you must first install the compilation dependencies:
    
    ```
    sudo apt update
    sudo apt install -y python3-dev portaudio19-dev
    ```
    
    Then, install it using pip in the activated virtual environment:
    
    ```
    pip install pyaudio
    ```
    

## CentOS

```
sudo yum install -y portaudio portaudio-devel && pip install pyaudio
```

## Windows

```
pip install pyaudio
```

After the installation is complete, install the dependencies using pip:

```
pip install websocket-client dashscope
```

-   **Choose an interaction mode**
    
    -   VAD mode (automatically detects the start and end of speech)
        
        The server automatically detects speech start/end and responds.
        
    -   Manual mode (press to talk, release to send)
        
        The client controls speech timing and sends a completion signal to the server.
        
    
    ## VAD mode
    
    Create a new Python file named vad\_dash.py and copy the following code into the file:
    
    vad\_dash.py
    
    ```
    # Dependencies: dashscope >= 1.23.9, pyaudio
    import os
    import base64
    import time
    import pyaudio
    from dashscope.audio.qwen_omni import MultiModality, AudioFormat,OmniRealtimeCallback,OmniRealtimeConversation
    import dashscope
    
    # Configuration parameters: URL, API key, voice, model, model role
    # Specify the region. Set to 'intl' for International (Singapore) or 'cn' for China (Beijing).
    region = 'intl'
    base_domain = 'dashscope-intl.aliyuncs.com' if region == 'intl' else 'dashscope.aliyuncs.com'
    url = f'wss://{base_domain}/api-ws/v1/realtime'
    # Configure the API key. If you have not set an environment variable, replace the following line with dashscope.api_key = "sk-xxx"
    dashscope.api_key = os.getenv('DASHSCOPE_API_KEY')
    # Specify the voice
    voice = 'Cherry'
    # Specify the model
    model = 'qwen3-omni-flash-realtime'
    # Specify the model role
    instructions = "You are Xiaoyun, a personal assistant. Please answer the user's questions in a humorous and witty way."
    class SimpleCallback(OmniRealtimeCallback):
        def __init__(self, pya):
            self.pya = pya
            self.out = None
        def on_open(self):
            # Initialize the audio output stream
            self.out = self.pya.open(
                format=pyaudio.paInt16,
                channels=1,
                rate=24000,
                output=True
            )
        def on_event(self, response):
            if response['type'] == 'response.audio.delta':
                # Play the audio
                self.out.write(base64.b64decode(response['delta']))
            elif response['type'] == 'conversation.item.input_audio_transcription.completed':
                # Print the transcribed text
                print(f"[User] {response['transcript']}")
            elif response['type'] == 'response.audio_transcript.done':
                # Print the assistant's reply text
                print(f"[LLM] {response['transcript']}")
    
    # 1. Initialize the audio device
    pya = pyaudio.PyAudio()
    # 2. Create the callback function and session
    callback = SimpleCallback(pya)
    conv = OmniRealtimeConversation(model=model, callback=callback, url=url)
    # 3. Establish the connection and configure the session
    conv.connect()
    conv.update_session(output_modalities=[MultiModality.AUDIO, MultiModality.TEXT], voice=voice, instructions=instructions)
    # 4. Initialize the audio input stream
    mic = pya.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True)
    # 5. Main loop to process audio input
    print("Conversation started. Speak into the microphone (Ctrl+C to exit)...")
    try:
        while True:
            audio_data = mic.read(3200, exception_on_overflow=False)
            conv.append_audio(base64.b64encode(audio_data).decode())
            time.sleep(0.01)
    except KeyboardInterrupt:
        # Clean up resources
        conv.close()
        mic.close()
        callback.out.close()
        pya.terminate()
        print("\nConversation ended")
    ```
    
    Run `vad_dash.py` to have a real-time conversation with Qwen-Omni-Realtime through your microphone. The system detects the start and end of your speech and automatically sends it to the server without manual intervention.
    
    ## Manual mode
    
    Create a new Python file named `manual_dash.py` and copy the following code into the file:
    
    manual\_dash.py
    
    ```
    # Dependencies: dashscope >= 1.23.9, pyaudio.
    import os
    import base64
    import sys
    import threading
    import pyaudio
    from dashscope.audio.qwen_omni import *
    import dashscope
    
    # If you have not set an environment variable, replace the following line with your API key: dashscope.api_key = "sk-xxx"
    dashscope.api_key = os.getenv('DASHSCOPE_API_KEY')
    voice = 'Cherry'
    
    class MyCallback(OmniRealtimeCallback):
        """Minimal callback: Initializes the speaker upon connection and plays the returned audio directly in the event."""
        def __init__(self, ctx):
            super().__init__()
            self.ctx = ctx
    
        def on_open(self) -> None:
            # Initialize PyAudio and the speaker (24k/mono/16bit) after connection is established.
            print('connection opened')
            try:
                self.ctx['pya'] = pyaudio.PyAudio()
                self.ctx['out'] = self.ctx['pya'].open(
                    format=pyaudio.paInt16,
                    channels=1,
                    rate=24000,
                    output=True
                )
                print('audio output initialized')
            except Exception as e:
                print('[Error] audio init failed: {}'.format(e))
    
        def on_close(self, close_status_code, close_msg) -> None:
            print('connection closed with code: {}, msg: {}'.format(close_status_code, close_msg))
            sys.exit(0)
    
        def on_event(self, response: str) -> None:
            try:
                t = response['type']
                handlers = {
                    'session.created': lambda r: print('start session: {}'.format(r['session']['id'])),
                    'conversation.item.input_audio_transcription.completed': lambda r: print('question: {}'.format(r['transcript'])),
                    'response.audio_transcript.delta': lambda r: print('llm text: {}'.format(r['delta'])),
                    'response.audio.delta': self._play_audio,
                    'response.done': self._response_done,
                }
                h = handlers.get(t)
                if h:
                    h(response)
            except Exception as e:
                print('[Error] {}'.format(e))
    
        def _play_audio(self, response):
            # Directly decode base64 and write to the output stream for playback.
            if self.ctx['out'] is None:
                return
            try:
                data = base64.b64decode(response['delta'])
                self.ctx['out'].write(data)
            except Exception as e:
                print('[Error] audio playback failed: {}'.format(e))
    
        def _response_done(self, response):
            # Mark the current conversation turn as complete for the main loop to wait.
            if self.ctx['conv'] is not None:
                print('[Metric] response: {}, first text delay: {}, first audio delay: {}'.format(
                    self.ctx['conv'].get_last_response_id(),
                    self.ctx['conv'].get_last_first_text_delay(),
                    self.ctx['conv'].get_last_first_audio_delay(),
                ))
            if self.ctx['resp_done'] is not None:
                self.ctx['resp_done'].set()
    
    def shutdown_ctx(ctx):
        """Safely release audio and PyAudio resources."""
        try:
            if ctx['out'] is not None:
                ctx['out'].close()
                ctx['out'] = None
        except Exception:
            pass
        try:
            if ctx['pya'] is not None:
                ctx['pya'].terminate()
                ctx['pya'] = None
        except Exception:
            pass
    
    
    def record_until_enter(pya_inst: pyaudio.PyAudio, sample_rate=16000, chunk_size=3200):
        """Press Enter to stop recording and return PCM bytes."""
        frames = []
        stop_evt = threading.Event()
    
        stream = pya_inst.open(
            format=pyaudio.paInt16,
            channels=1,
            rate=sample_rate,
            input=True,
            frames_per_buffer=chunk_size
        )
    
        def _reader():
            while not stop_evt.is_set():
                try:
                    frames.append(stream.read(chunk_size, exception_on_overflow=False))
                except Exception:
                    break
    
        t = threading.Thread(target=_reader, daemon=True)
        t.start()
        input()  # User presses Enter again to stop recording.
        stop_evt.set()
        t.join(timeout=1.0)
        try:
            stream.close()
        except Exception:
            pass
        return b''.join(frames)
    
    
    if __name__  == '__main__':
        print('Initializing ...')
        # Runtime context: Stores audio and session handles.
        ctx = {'pya': None, 'out': None, 'conv': None, 'resp_done': threading.Event()}
        callback = MyCallback(ctx)
        conversation = OmniRealtimeConversation(
            model='qwen3-omni-flash-realtime',
            callback=callback,
            # The following is the URL for the International (Singapore) region. If you use a model in the China (Beijing) region, replace the URL with wss://dashscope.aliyuncs.com/api-ws/v1/realtime
            url="wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime",
        )
        try:
            conversation.connect()
        except Exception as e:
            print('[Error] connect failed: {}'.format(e))
            sys.exit(1)
    
        ctx['conv'] = conversation
        # Session configuration: Enable text and audio output (disable server-side VAD, switch to manual recording).
        conversation.update_session(
            output_modalities=[MultiModality.AUDIO, MultiModality.TEXT],
            voice=voice,
            enable_input_audio_transcription=True,
            # The model for transcribing input audio. Only gummy-realtime-v1 is supported.
            input_audio_transcription_model='gummy-realtime-v1',
            enable_turn_detection=False,
            instructions="You are Xiaoyun, a personal assistant. Please answer the user's questions accurately and friendly, always responding with a helpful attitude."
        )
    
        try:
            turn = 1
            while True:
                print(f"\n--- Turn {turn} ---")
                print("Press Enter to start recording (enter q to exit)...")
                user_input = input()
                if user_input.strip().lower() in ['q', 'quit']:
                    print("User requested to exit...")
                    break
                print("Recording... Press Enter again to stop.")
                if ctx['pya'] is None:
                    ctx['pya'] = pyaudio.PyAudio()
                recorded = record_until_enter(ctx['pya'])
                if not recorded:
                    print("No valid audio was recorded. Please try again.")
                    continue
                print(f"Successfully recorded audio: {len(recorded)} bytes. Sending...")
    
                # Send in 3200-byte chunks (corresponding to 16k/16bit/100ms).
                chunk_size = 3200
                for i in range(0, len(recorded), chunk_size):
                    chunk = recorded[i:i+chunk_size]
                    conversation.append_audio(base64.b64encode(chunk).decode('ascii'))
    
                print("Sending complete. Waiting for model response...")
                ctx['resp_done'].clear()
                conversation.commit()
                conversation.create_response()
                ctx['resp_done'].wait()
                print('Audio playback complete.')
                turn += 1
        except KeyboardInterrupt:
            print("\nProgram interrupted by user.")
        finally:
            shutdown_ctx(ctx)
            print("Program exited.")
    ```
    
    Run `manual_dash.py`, press Enter to start speaking, and press Enter again to receive the model's audio response.
    

## DashScope Java SDK

**Choose an interaction mode**

-   VAD mode (automatically detects speech start/end)
    
    The server automatically detects speech timing and responds.
    
-   Manual mode (press to talk, release to send)
    
    The client controls speech timing and sends a completion signal.
    

## VAD mode

OmniServerVad.java

```
import com.alibaba.dashscope.audio.omni.*;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.google.gson.JsonObject;
import javax.sound.sampled.*;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.Base64;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicBoolean;

public class OmniServerVad {
    static class SequentialAudioPlayer {
        private final SourceDataLine line;
        private final Queue<byte[]> audioQueue = new ConcurrentLinkedQueue<>();
        private final Thread playerThread;
        private final AtomicBoolean shouldStop = new AtomicBoolean(false);

        public SequentialAudioPlayer() throws LineUnavailableException {
            AudioFormat format = new AudioFormat(24000, 16, 1, true, false);
            line = AudioSystem.getSourceDataLine(format);
            line.open(format);
            line.start();

            playerThread = new Thread(() -> {
                while (!shouldStop.get()) {
                    byte[] audio = audioQueue.poll();
                    if (audio != null) {
                        line.write(audio, 0, audio.length);
                    } else {
                        try { Thread.sleep(10); } catch (InterruptedException ignored) {}
                    }
                }
            }, "AudioPlayer");
            playerThread.start();
        }

        public void play(String base64Audio) {
            try {
                byte[] audio = Base64.getDecoder().decode(base64Audio);
                audioQueue.add(audio);
            } catch (Exception e) {
                System.err.println("Audio decoding failed: " + e.getMessage());
            }
        }

        public void cancel() {
            audioQueue.clear();
            line.flush();
        }

        public void close() {
            shouldStop.set(true);
            try { playerThread.join(1000); } catch (InterruptedException ignored) {}
            line.drain();
            line.close();
        }
    }

    public static void main(String[] args) {
        try {
            SequentialAudioPlayer player = new SequentialAudioPlayer();
            AtomicBoolean userIsSpeaking = new AtomicBoolean(false);
            AtomicBoolean shouldStop = new AtomicBoolean(false);

            OmniRealtimeParam param = OmniRealtimeParam.builder()
                    .model("qwen3-omni-flash-realtime")
                    .apikey(System.getenv("DASHSCOPE_API_KEY"))
                    // The following is the URL for the International (Singapore) region. If you use a model in the China (Beijing) region, replace the URL with wss://dashscope.aliyuncs.com/api-ws/v1/realtime
                    .url("wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime")
                    .build();

            OmniRealtimeConversation conversation = new OmniRealtimeConversation(param, new OmniRealtimeCallback() {
                @Override public void onOpen() {
                    System.out.println("Connection established");
                }
                @Override public void onClose(int code, String reason) {
                    System.out.println("Connection closed (" + code + "): " + reason);
                    shouldStop.set(true);
                }
                @Override public void onEvent(JsonObject event) {
                    handleEvent(event, player, userIsSpeaking);
                }
            });

            conversation.connect();
            conversation.updateSession(OmniRealtimeConfig.builder()
                    .modalities(Arrays.asList(OmniRealtimeModality.AUDIO, OmniRealtimeModality.TEXT))
                    .voice("Cherry")
                    .enableTurnDetection(true)
                    .enableInputAudioTranscription(true)
                    .parameters(Map.of("instructions",
                            "You are an AI customer service agent for a five-star hotel. Answer customer inquiries about room types, facilities, prices, and booking policies accurately and friendly. Always respond with a professional and helpful attitude. Do not provide unconfirmed information or information beyond the scope of the hotel's services."))
                    .build()
            );

            System.out.println("Please start speaking (automatic detection of speech start/end, press Ctrl+C to exit)...");
            AudioFormat format = new AudioFormat(16000, 16, 1, true, false);
            TargetDataLine mic = AudioSystem.getTargetDataLine(format);
            mic.open(format);
            mic.start();

            ByteBuffer buffer = ByteBuffer.allocate(3200);
            while (!shouldStop.get()) {
                int bytesRead = mic.read(buffer.array(), 0, buffer.capacity());
                if (bytesRead > 0) {
                    try {
                        conversation.appendAudio(Base64.getEncoder().encodeToString(buffer.array()));
                    } catch (Exception e) {
                        if (e.getMessage() != null && e.getMessage().contains("closed")) {
                            System.out.println("Conversation closed. Stopping recording.");
                            break;
                        }
                    }
                }
                Thread.sleep(20);
            }

            conversation.close(1000, "Normal exit");
            player.close();
            mic.close();
            System.out.println("\nProgram exited.");

        } catch (NoApiKeyException e) {
            System.err.println("API KEY not found: Please set the DASHSCOPE_API_KEY environment variable.");
            System.exit(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void handleEvent(JsonObject event, SequentialAudioPlayer player, AtomicBoolean userIsSpeaking) {
        String type = event.get("type").getAsString();
        switch (type) {
            case "input_audio_buffer.speech_started":
                System.out.println("\n[User started speaking]");
                player.cancel();
                userIsSpeaking.set(true);
                break;
            case "input_audio_buffer.speech_stopped":
                System.out.println("[User stopped speaking]");
                userIsSpeaking.set(false);
                break;
            case "response.audio.delta":
                if (!userIsSpeaking.get()) {
                    player.play(event.get("delta").getAsString());
                }
                break;
            case "conversation.item.input_audio_transcription.completed":
                System.out.println("User: " + event.get("transcript").getAsString());
                break;
            case "response.audio_transcript.delta":
                System.out.print(event.get("delta").getAsString());
                break;
            case "response.done":
                System.out.println("Response complete");
                break;
        }
    }
}
```

Run the `OmniServerVad.main()` method to have a real-time conversation with Qwen-Omni-Realtime through your microphone. The system detects the start and end of your speech and automatically sends it to the server without manual intervention.

## Manual mode

OmniWithoutServerVad.java

```
// DashScope Java SDK version 2.20.9 or later

import com.alibaba.dashscope.audio.omni.*;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.google.gson.JsonObject;
import javax.sound.sampled.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

public class Main {
    // RealtimePcmPlayer class definition starts
    public static class RealtimePcmPlayer {
        private int sampleRate;
        private SourceDataLine line;
        private AudioFormat audioFormat;
        private Thread decoderThread;
        private Thread playerThread;
        private AtomicBoolean stopped = new AtomicBoolean(false);
        private Queue<String> b64AudioBuffer = new ConcurrentLinkedQueue<>();
        private Queue<byte[]> RawAudioBuffer = new ConcurrentLinkedQueue<>();

        // The constructor initializes the audio format and audio line.
        public RealtimePcmPlayer(int sampleRate) throws LineUnavailableException {
            this.sampleRate = sampleRate;
            this.audioFormat = new AudioFormat(this.sampleRate, 16, 1, true, false);
            DataLine.Info info = new DataLine.Info(SourceDataLine.class, audioFormat);
            line = (SourceDataLine) AudioSystem.getLine(info);
            line.open(audioFormat);
            line.start();
            decoderThread = new Thread(new Runnable() {
                @Override
                public void run() {
                    while (!stopped.get()) {
                        String b64Audio = b64AudioBuffer.poll();
                        if (b64Audio != null) {
                            byte[] rawAudio = Base64.getDecoder().decode(b64Audio);
                            RawAudioBuffer.add(rawAudio);
                        } else {
                            try {
                                Thread.sleep(100);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        }
                    }
                }
            });
            playerThread = new Thread(new Runnable() {
                @Override
                public void run() {
                    while (!stopped.get()) {
                        byte[] rawAudio = RawAudioBuffer.poll();
                        if (rawAudio != null) {
                            try {
                                playChunk(rawAudio);
                            } catch (IOException e) {
                                throw new RuntimeException(e);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        } else {
                            try {
                                Thread.sleep(100);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        }
                    }
                }
            });
            decoderThread.start();
            playerThread.start();
        }

        // Play an audio chunk and block until playback is complete.
        private void playChunk(byte[] chunk) throws IOException, InterruptedException {
            if (chunk == null || chunk.length == 0) return;

            int bytesWritten = 0;
            while (bytesWritten < chunk.length) {
                bytesWritten += line.write(chunk, bytesWritten, chunk.length - bytesWritten);
            }
            int audioLength = chunk.length / (this.sampleRate*2/1000);
            // Wait for the audio in the buffer to finish playing.
            Thread.sleep(audioLength - 10);
        }

        public void write(String b64Audio) {
            b64AudioBuffer.add(b64Audio);
        }

        public void cancel() {
            b64AudioBuffer.clear();
            RawAudioBuffer.clear();
        }

        public void waitForComplete() throws InterruptedException {
            while (!b64AudioBuffer.isEmpty() || !RawAudioBuffer.isEmpty()) {
                Thread.sleep(100);
            }
            line.drain();
        }

        public void shutdown() throws InterruptedException {
            stopped.set(true);
            decoderThread.join();
            playerThread.join();
            if (line != null && line.isRunning()) {
                line.drain();
                line.close();
            }
        }
    } // RealtimePcmPlayer class definition ends
    // Add a recording method
    private static void recordAndSend(TargetDataLine line, OmniRealtimeConversation conversation) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buffer = new byte[3200];
        AtomicBoolean stopRecording = new AtomicBoolean(false);

        // Start a thread to listen for the Enter key.
        Thread enterKeyListener = new Thread(() -> {
            try {
                System.in.read();
                stopRecording.set(true);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
        enterKeyListener.start();

        // Recording loop
        while (!stopRecording.get()) {
            int count = line.read(buffer, 0, buffer.length);
            if (count > 0) {
                out.write(buffer, 0, count);
            }
        }

        // Send the recorded data.
        byte[] audioData = out.toByteArray();
        String audioB64 = Base64.getEncoder().encodeToString(audioData);
        conversation.appendAudio(audioB64);
        out.close();
    }

    public static void main(String[] args) throws InterruptedException, LineUnavailableException {
        OmniRealtimeParam param = OmniRealtimeParam.builder()
                .model("qwen3-omni-flash-realtime")
                // The API keys for the Singapore and Beijing regions are different. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
                // If you have not configured an environment variable, replace the following line with your Model Studio API key: .apikey("sk-xxx")
                .apikey(System.getenv("DASHSCOPE_API_KEY"))
                //The following is the URL for the Singapore region. If you use a model in the Beijing region, replace the URL with wss://dashscope.aliyuncs.com/api-ws/v1/realtime
                .url("wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime")
                .build();
        AtomicReference<CountDownLatch> responseDoneLatch = new AtomicReference<>(null);
        responseDoneLatch.set(new CountDownLatch(1));

        RealtimePcmPlayer audioPlayer = new RealtimePcmPlayer(24000);
        final AtomicReference<OmniRealtimeConversation> conversationRef = new AtomicReference<>(null);
        OmniRealtimeConversation conversation = new OmniRealtimeConversation(param, new OmniRealtimeCallback() {
            @Override
            public void onOpen() {
                System.out.println("connection opened");
            }
            @Override
            public void onEvent(JsonObject message) {
                String type = message.get("type").getAsString();
                switch(type) {
                    case "session.created":
                        System.out.println("start session: " + message.get("session").getAsJsonObject().get("id").getAsString());
                        break;
                    case "conversation.item.input_audio_transcription.completed":
                        System.out.println("question: " + message.get("transcript").getAsString());
                        break;
                    case "response.audio_transcript.delta":
                        System.out.println("got llm response delta: " + message.get("delta").getAsString());
                        break;
                    case "response.audio.delta":
                        String recvAudioB64 = message.get("delta").getAsString();
                        audioPlayer.write(recvAudioB64);
                        break;
                    case "response.done":
                        System.out.println("======RESPONSE DONE======");
                        if (conversationRef.get() != null) {
                            System.out.println("[Metric] response: " + conversationRef.get().getResponseId() +
                                    ", first text delay: " + conversationRef.get().getFirstTextDelay() +
                                    " ms, first audio delay: " + conversationRef.get().getFirstAudioDelay() + " ms");
                        }
                        responseDoneLatch.get().countDown();
                        break;
                    default:
                        break;
                }
            }
            @Override
            public void onClose(int code, String reason) {
                System.out.println("connection closed code: " + code + ", reason: " + reason);
            }
        });
        conversationRef.set(conversation);
        try {
            conversation.connect();
        } catch (NoApiKeyException e) {
            throw new RuntimeException(e);
        }
        OmniRealtimeConfig config = OmniRealtimeConfig.builder()
                .modalities(Arrays.asList(OmniRealtimeModality.AUDIO, OmniRealtimeModality.TEXT))
                .voice("Cherry")
                .enableTurnDetection(false)
                // Set the model role.
                .parameters(new HashMap<String, Object>() {{
                    put("instructions","You are Xiaoyun, a personal assistant. Please answer the user's questions accurately and friendly, always responding with a helpful attitude.");
                }})
                .build();
        conversation.updateSession(config);

        // Add microphone recording functionality.
        AudioFormat format = new AudioFormat(16000, 16, 1, true, false);
        DataLine.Info info = new DataLine.Info(TargetDataLine.class, format);

        if (!AudioSystem.isLineSupported(info)) {
            System.out.println("Line not supported");
            return;
        }

        TargetDataLine line = null;
        try {
            line = (TargetDataLine) AudioSystem.getLine(info);
            line.open(format);
            line.start();

            while (true) {
                System.out.println("Press Enter to start recording...");
                System.in.read();
                System.out.println("Recording started. Please speak... Press Enter again to stop recording and send.");
                recordAndSend(line, conversation);
                conversation.commit();
                conversation.createResponse(null, null);
                // Reset the latch for the next wait.
                responseDoneLatch.set(new CountDownLatch(1));
            }
        } catch (LineUnavailableException | IOException e) {
            e.printStackTrace();
        } finally {
            if (line != null) {
                line.stop();
                line.close();
            }
        }
    }}
```

Run the `OmniWithoutServerVad.main()` method. Press Enter to start recording. During recording, press Enter again to stop recording and send the audio. The model's response is then received and played.

## WebSocket (Python)

-   **Prepare the runtime environment**
    
    Your Python version must be 3.10 or later.
    
    First, install pyaudio based on your operating system.
    
    ## macOS
    
    ```
    brew install portaudio && pip install pyaudio
    ```
    
    ## Debian/Ubuntu
    
    ```
    sudo apt-get install python3-pyaudio
    
    or
    
    pip install pyaudio
    ```
    
    > We recommend using `pip install pyaudio`. If the installation fails, first install the `portaudio` dependency for your operating system.
    
    ## CentOS
    
    ```
    sudo yum install -y portaudio portaudio-devel && pip install pyaudio
    ```
    
    ## Windows
    
    ```
    pip install pyaudio
    ```
    
    After the installation is complete, install the websocket-related dependencies using pip:
    
    ```
    pip install websockets==15.0.1
    ```
    
-   **Create the client**
    
    Create a new Python file named `omni_realtime_client.py` in your local directory and copy the following code into the file:
    
    omni\_realtime\_client.py
    
    ```
    import asyncio
    import websockets
    import json
    import base64
    import time
    from typing import Optional, Callable, List, Dict, Any
    from enum import Enum
    
    class TurnDetectionMode(Enum):
        SERVER_VAD = "server_vad"
        MANUAL = "manual"
    
    class OmniRealtimeClient:
    
        def __init__(
                self,
                base_url,
                api_key: str,
                model: str = "",
                voice: str = "Ethan",
                instructions: str = "You are a helpful assistant.",
                turn_detection_mode: TurnDetectionMode = TurnDetectionMode.SERVER_VAD,
                on_text_delta: Optional[Callable[[str], None]] = None,
                on_audio_delta: Optional[Callable[[bytes], None]] = None,
                on_input_transcript: Optional[Callable[[str], None]] = None,
                on_output_transcript: Optional[Callable[[str], None]] = None,
                extra_event_handlers: Optional[Dict[str, Callable[[Dict[str, Any]], None]]] = None
        ):
            self.base_url = base_url
            self.api_key = api_key
            self.model = model
            self.voice = voice
            self.instructions = instructions
            self.ws = None
            self.on_text_delta = on_text_delta
            self.on_audio_delta = on_audio_delta
            self.on_input_transcript = on_input_transcript
            self.on_output_transcript = on_output_transcript
            self.turn_detection_mode = turn_detection_mode
            self.extra_event_handlers = extra_event_handlers or {}
    
            # Current response status
            self._current_response_id = None
            self._current_item_id = None
            self._is_responding = False
            # Input/output transcript printing status
            self._print_input_transcript = True
            self._output_transcript_buffer = ""
    
        async def connect(self) -> None:
            """Establish a WebSocket connection with the Realtime API."""
            url = f"{self.base_url}?model={self.model}"
            headers = {
                "Authorization": f"Bearer {self.api_key}"
            }
            self.ws = await websockets.connect(url, additional_headers=headers)
    
            # Session configuration
            session_config = {
                "modalities": ["text", "audio"],
                "voice": self.voice,
                "instructions": self.instructions,
                "input_audio_format": "pcm",
                "output_audio_format": "pcm",
                "input_audio_transcription": {
                    "model": "gummy-realtime-v1"
                }
            }
    
            if self.turn_detection_mode == TurnDetectionMode.MANUAL:
                session_config['turn_detection'] = None
                await self.update_session(session_config)
            elif self.turn_detection_mode == TurnDetectionMode.SERVER_VAD:
                session_config['turn_detection'] = {
                    "type": "server_vad",
                    "threshold": 0.1,
                    "prefix_padding_ms": 500,
                    "silence_duration_ms": 900
                }
                await self.update_session(session_config)
            else:
                raise ValueError(f"Invalid turn detection mode: {self.turn_detection_mode}")
    
        async def send_event(self, event) -> None:
            event['event_id'] = "event_" + str(int(time.time() * 1000))
            await self.ws.send(json.dumps(event))
    
        async def update_session(self, config: Dict[str, Any]) -> None:
            """Update the session configuration."""
            event = {
                "type": "session.update",
                "session": config
            }
            await self.send_event(event)
    
        async def stream_audio(self, audio_chunk: bytes) -> None:
            """Stream raw audio data to the API."""
            # Only 16-bit, 16 kHz, mono PCM is supported.
            audio_b64 = base64.b64encode(audio_chunk).decode()
            append_event = {
                "type": "input_audio_buffer.append",
                "audio": audio_b64
            }
            await self.send_event(append_event)
    
        async def commit_audio_buffer(self) -> None:
            """Commit the audio buffer to trigger processing."""
            event = {
                "type": "input_audio_buffer.commit"
            }
            await self.send_event(event)
    
        async def append_image(self, image_chunk: bytes) -> None:
            """Append image data to the image buffer.
            Image data can come from local files or a real-time video stream.
            Note:
                - The image format must be JPG or JPEG. A resolution of 480p or 720p is recommended. The maximum supported resolution is 1080p.
                - A single image should not exceed 500 KB in size.
                - Encode the image data to Base64 before sending.
                - We recommend sending images to the server at a rate of no more than 1 frame per second.
                - You must send audio data at least once before sending image data.
            """
            image_b64 = base64.b64encode(image_chunk).decode()
            event = {
                "type": "input_image_buffer.append",
                "image": image_b64
            }
            await self.send_event(event)
    
        async def create_response(self) -> None:
            """Request the API to generate a response (only needs to be called in manual mode)."""
            event = {
                "type": "response.create"
            }
            await self.send_event(event)
    
        async def cancel_response(self) -> None:
            """Cancel the current response."""
            event = {
                "type": "response.cancel"
            }
            await self.send_event(event)
    
        async def handle_interruption(self):
            """Handle user interruption of the current response."""
            if not self._is_responding:
                return
            # 1. Cancel the current response.
            if self._current_response_id:
                await self.cancel_response()
    
            self._is_responding = False
            self._current_response_id = None
            self._current_item_id = None
    
        async def handle_messages(self) -> None:
            try:
                async for message in self.ws:
                    event = json.loads(message)
                    event_type = event.get("type")
                    if event_type == "error":
                        print(" Error: ", event['error'])
                        continue
                    elif event_type == "response.created":
                        self._current_response_id = event.get("response", {}).get("id")
                        self._is_responding = True
                    elif event_type == "response.output_item.added":
                        self._current_item_id = event.get("item", {}).get("id")
                    elif event_type == "response.done":
                        self._is_responding = False
                        self._current_response_id = None
                        self._current_item_id = None
                    elif event_type == "input_audio_buffer.speech_started":
                        print("Speech start detected")
                        if self._is_responding:
                            print("Handling interruption")
                            await self.handle_interruption()
                    elif event_type == "input_audio_buffer.speech_stopped":
                        print("Speech end detected")
                    elif event_type == "response.text.delta":
                        if self.on_text_delta:
                            self.on_text_delta(event["delta"])
                    elif event_type == "response.audio.delta":
                        if self.on_audio_delta:
                            audio_bytes = base64.b64decode(event["delta"])
                            self.on_audio_delta(audio_bytes)
                    elif event_type == "conversation.item.input_audio_transcription.completed":
                        transcript = event.get("transcript", "")
                        print(f"User: {transcript}")
                        if self.on_input_transcript:
                            await asyncio.to_thread(self.on_input_transcript, transcript)
                            self._print_input_transcript = True
                    elif event_type == "response.audio_transcript.delta":
                        if self.on_output_transcript:
                            delta = event.get("delta", "")
                            if not self._print_input_transcript:
                                self._output_transcript_buffer += delta
                            else:
                                if self._output_transcript_buffer:
                                    await asyncio.to_thread(self.on_output_transcript, self._output_transcript_buffer)
                                    self._output_transcript_buffer = ""
                                await asyncio.to_thread(self.on_output_transcript, delta)
                    elif event_type == "response.audio_transcript.done":
                        print(f"LLM: {event.get('transcript', '')}")
                        self._print_input_transcript = False
                    elif event_type in self.extra_event_handlers:
                        self.extra_event_handlers[event_type](event)
            except websockets.exceptions.ConnectionClosed:
                print(" Connection closed")
            except Exception as e:
                print(" Error in message handling: ", str(e))
        async def close(self) -> None:
            """Close the WebSocket connection."""
            if self.ws:
                await self.ws.close()
    ```
    
-   **Choose an interaction mode**
    
    -   VAD mode (automatic speech detection)
        
        The server detects speech timing and responds automatically.
        
    -   Manual mode (press to talk, release to send)
        
        The client controls timing and signals completion.
        
    
    ## VAD mode
    
    In the same directory as `omni_realtime_client.py`, create another Python file named `vad_mode.py` and copy the following code into the file:
    
    vad\_mode.py
    
    ```
    # -- coding: utf-8 --
    import os, asyncio, pyaudio, queue, threading
    from omni_realtime_client import OmniRealtimeClient, TurnDetectionMode
    
    # Audio player class (handles interruptions)
    class AudioPlayer:
        def __init__(self, pyaudio_instance, rate=24000):
            self.stream = pyaudio_instance.open(format=pyaudio.paInt16, channels=1, rate=rate, output=True)
            self.queue = queue.Queue()
            self.stop_evt = threading.Event()
            self.interrupt_evt = threading.Event()
            threading.Thread(target=self._run, daemon=True).start()
    
        def _run(self):
            while not self.stop_evt.is_set():
                try:
                    data = self.queue.get(timeout=0.5)
                    if data is None: break
                    if not self.interrupt_evt.is_set(): self.stream.write(data)
                    self.queue.task_done()
                except queue.Empty: continue
    
        def add_audio(self, data): self.queue.put(data)
        def handle_interrupt(self): self.interrupt_evt.set(); self.queue.queue.clear()
        def stop(self): self.stop_evt.set(); self.queue.put(None); self.stream.stop_stream(); self.stream.close()
    
    # Record from microphone and send
    async def record_and_send(client):
        p = pyaudio.PyAudio()
        stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=3200)
        print("Recording started. Please speak...")
        try:
            while True:
                audio_data = stream.read(3200)
                await client.stream_audio(audio_data)
                await asyncio.sleep(0.02)
        finally:
            stream.stop_stream(); stream.close(); p.terminate()
    
    async def main():
        p = pyaudio.PyAudio()
        player = AudioPlayer(pyaudio_instance=p)
    
        client = OmniRealtimeClient(
            # The following is the base_url for the International (Singapore) region. The base_url for the China (Beijing) region is wss://dashscope.aliyuncs.com/api-ws/v1/realtime
            base_url="wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime",
            api_key=os.environ.get("DASHSCOPE_API_KEY"),
            model="qwen3-omni-flash-realtime",
            voice="Cherry",
            instructions="You are Xiaoyun, a witty and humorous assistant.",
            turn_detection_mode=TurnDetectionMode.SERVER_VAD,
            on_text_delta=lambda t: print(f"\nAssistant: {t}", end="", flush=True),
            on_audio_delta=player.add_audio,
        )
    
        await client.connect()
        print("Connection successful. Starting real-time conversation...")
    
        # Run concurrently
        await asyncio.gather(client.handle_messages(), record_and_send(client))
    
    if __name__ == "__main__":
        try:
            asyncio.run(main())
        except KeyboardInterrupt:
            print("\nProgram exited.")
    ```
    
    Run `vad_mode.py` to have a real-time conversation with Qwen-Omni-Realtime through your microphone. The system detects the start and end of your speech and automatically sends it to the server without manual intervention.
    
    ## Manual mode
    
    In the same directory as `omni_realtime_client.py`, create another Python file named `manual_mode.py` and copy the following code into the file:
    
    manual\_mode.py
    
    ```
    # -- coding: utf-8 --
    import os
    import asyncio
    import time
    import threading
    import queue
    import pyaudio
    from omni_realtime_client import OmniRealtimeClient, TurnDetectionMode
    
    
    class AudioPlayer:
        """Real-time audio player class"""
    
        def __init__(self, sample_rate=24000, channels=1, sample_width=2):
            self.sample_rate = sample_rate
            self.channels = channels
            self.sample_width = sample_width  # 2 bytes for 16-bit
            self.audio_queue = queue.Queue()
            self.is_playing = False
            self.play_thread = None
            self.pyaudio_instance = None
            self.stream = None
            self._lock = threading.Lock()  # Add a lock for synchronized access
            self._last_data_time = time.time()  # Record the time the last data was received
            self._response_done = False  # Add a flag to indicate response completion
            self._waiting_for_response = False  # Flag to indicate if waiting for a server response
            # Record the time the last data was written to the audio stream and the duration of the most recent audio chunk for more accurate playback end detection
            self._last_play_time = time.time()
            self._last_chunk_duration = 0.0
    
        def start(self):
            """Start the audio player"""
            with self._lock:
                if self.is_playing:
                    return
    
                self.is_playing = True
    
                try:
                    self.pyaudio_instance = pyaudio.PyAudio()
    
                    # Create an audio output stream
                    self.stream = self.pyaudio_instance.open(
                        format=pyaudio.paInt16,  # 16-bit
                        channels=self.channels,
                        rate=self.sample_rate,
                        output=True,
                        frames_per_buffer=1024
                    )
    
                    # Start the playback thread
                    self.play_thread = threading.Thread(target=self._play_audio)
                    self.play_thread.daemon = True
                    self.play_thread.start()
    
                    print("Audio player started")
                except Exception as e:
                    print(f"Failed to start audio player: {e}")
                    self._cleanup_resources()
                    raise
    
        def stop(self):
            """Stop the audio player"""
            with self._lock:
                if not self.is_playing:
                    return
    
                self.is_playing = False
    
            # Clear the queue
            while not self.audio_queue.empty():
                try:
                    self.audio_queue.get_nowait()
                except queue.Empty:
                    break
    
            # Wait for the playback thread to finish (wait outside the lock to avoid deadlock)
            if self.play_thread and self.play_thread.is_alive():
                self.play_thread.join(timeout=2.0)
    
            # Acquire the lock again to clean up resources
            with self._lock:
                self._cleanup_resources()
    
            print("Audio player stopped")
    
        def _cleanup_resources(self):
            """Clean up audio resources (must be called within the lock)"""
            try:
                # Close the audio stream
                if self.stream:
                    if not self.stream.is_stopped():
                        self.stream.stop_stream()
                    self.stream.close()
                    self.stream = None
            except Exception as e:
                print(f"Error closing audio stream: {e}")
    
            try:
                if self.pyaudio_instance:
                    self.pyaudio_instance.terminate()
                    self.pyaudio_instance = None
            except Exception as e:
                print(f"Error terminating PyAudio: {e}")
    
        def add_audio_data(self, audio_data):
            """Add audio data to the playback queue"""
            if self.is_playing and audio_data:
                self.audio_queue.put(audio_data)
                with self._lock:
                    self._last_data_time = time.time()  # Update the time the last data was received
                    self._waiting_for_response = False  # Data received, no longer waiting
    
        def stop_receiving_data(self):
            """Mark that no more new audio data will be received"""
            with self._lock:
                self._response_done = True
                self._waiting_for_response = False  # Response ended, no longer waiting
    
        def prepare_for_next_turn(self):
            """Reset the player state for the next conversation turn."""
            with self._lock:
                self._response_done = False
                self._last_data_time = time.time()
                self._last_play_time = time.time()
                self._last_chunk_duration = 0.0
                self._waiting_for_response = True  # Start waiting for the next response
    
            # Clear any remaining audio data from the previous turn
            while not self.audio_queue.empty():
                try:
                    self.audio_queue.get_nowait()
                except queue.Empty:
                    break
    
        def is_finished_playing(self):
            """Check if all audio data has been played"""
            with self._lock:
                queue_size = self.audio_queue.qsize()
                time_since_last_data = time.time() - self._last_data_time
                time_since_last_play = time.time() - self._last_play_time
    
                # ---------------------- Smart end detection ----------------------
                # 1. Preferred: If the server has marked completion and the playback queue is empty.
                #    Wait for the most recent audio chunk to finish playing (chunk duration + 0.1s tolerance).
                if self._response_done and queue_size == 0:
                    min_wait = max(self._last_chunk_duration + 0.1, 0.5)  # Wait at least 0.5s
                    if time_since_last_play >= min_wait:
                        return True
    
                # 2. Fallback: If no new data has been received for a long time and the playback queue is empty.
                #    This logic serves as a safeguard if the server does not explicitly send `response.done`.
                if not self._waiting_for_response and queue_size == 0 and time_since_last_data > 1.0:
                    print("\n(No new audio received for a while, assuming playback is finished)")
                    return True
    
                return False
    
        def _play_audio(self):
            """Worker thread for playing audio data"""
            while True:
                # Check if it should stop
                with self._lock:
                    if not self.is_playing:
                        break
                    stream_ref = self.stream  # Get a reference to the stream
    
                try:
                    # Get audio data from the queue, with a timeout of 0.1 seconds
                    audio_data = self.audio_queue.get(timeout=0.1)
    
                    # Check the status and stream validity again
                    with self._lock:
                        if self.is_playing and stream_ref and not stream_ref.is_stopped():
                            try:
                                # Play the audio data
                                stream_ref.write(audio_data)
                                # Update the latest playback information
                                self._last_play_time = time.time()
                                self._last_chunk_duration = len(audio_data) / (
                                            self.channels * self.sample_width) / self.sample_rate
                            except Exception as e:
                                print(f"Error writing to audio stream: {e}")
                                break
    
                    # Mark this data block as processed
                    self.audio_queue.task_done()
    
                except queue.Empty:
                    # Continue waiting if the queue is empty
                    continue
                except Exception as e:
                    print(f"Error playing audio: {e}")
                    break
    
    
    class MicrophoneRecorder:
        """Real-time microphone recorder"""
    
        def __init__(self, sample_rate=16000, channels=1, chunk_size=3200):
            self.sample_rate = sample_rate
            self.channels = channels
            self.chunk_size = chunk_size
            self.pyaudio_instance = None
            self.stream = None
            self.frames = []
            self._is_recording = False
            self._record_thread = None
    
        def _recording_thread(self):
            """Recording worker thread"""
            # Continuously read data from the audio stream while _is_recording is True
            while self._is_recording:
                try:
                    # Use exception_on_overflow=False to avoid crashing due to buffer overflow
                    data = self.stream.read(self.chunk_size, exception_on_overflow=False)
                    self.frames.append(data)
                except (IOError, OSError) as e:
                    # Reading from the stream might raise an error when it's closed
                    print(f"Error reading from recording stream, it might be closed: {e}")
                    break
    
        def start(self):
            """Start recording"""
            if self._is_recording:
                print("Recording is already in progress.")
                return
    
            self.frames = []
            self._is_recording = True
    
            try:
                self.pyaudio_instance = pyaudio.PyAudio()
                self.stream = self.pyaudio_instance.open(
                    format=pyaudio.paInt16,
                    channels=self.channels,
                    rate=self.sample_rate,
                    input=True,
                    frames_per_buffer=self.chunk_size
                )
    
                self._record_thread = threading.Thread(target=self._recording_thread)
                self._record_thread.daemon = True
                self._record_thread.start()
                print("Microphone recording started...")
            except Exception as e:
                print(f"Failed to start microphone: {e}")
                self._is_recording = False
                self._cleanup()
                raise
    
        def stop(self):
            """Stop recording and return the audio data"""
            if not self._is_recording:
                return None
    
            self._is_recording = False
    
            # Wait for the recording thread to exit safely
            if self._record_thread:
                self._record_thread.join(timeout=1.0)
    
            self._cleanup()
    
            print("Microphone recording stopped.")
            return b''.join(self.frames)
    
        def _cleanup(self):
            """Safely clean up PyAudio resources"""
            if self.stream:
                try:
                    if self.stream.is_active():
                        self.stream.stop_stream()
                    self.stream.close()
                except Exception as e:
                    print(f"Error closing audio stream: {e}")
    
            if self.pyaudio_instance:
                try:
                    self.pyaudio_instance.terminate()
                except Exception as e:
                    print(f"Error terminating PyAudio instance: {e}")
    
            self.stream = None
            self.pyaudio_instance = None
    
    
    async def interactive_test():
        """
        Interactive test script: Allows for multi-turn conversations, with audio and images sent in each turn.
        """
        # ------------------- 1. Initialization and connection (one-time) -------------------
        # The API keys for the Singapore and Beijing regions are different. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        api_key = os.environ.get("DASHSCOPE_API_KEY")
        if not api_key:
            print("Please set the DASHSCOPE_API_KEY environment variable.")
            return
    
        print("--- Real-time Multimodal Audio/Video Chat Client ---")
        print("Initializing audio player and client...")
    
        audio_player = AudioPlayer()
        audio_player.start()
    
        def on_audio_received(audio_data):
            audio_player.add_audio_data(audio_data)
    
        def on_response_done(event):
            print("\n(Received response end marker)")
            audio_player.stop_receiving_data()
    
        realtime_client = OmniRealtimeClient(
            # The following is the base_url for the Singapore region. If you use a model in the Beijing region, replace the base_url with wss://dashscope.aliyuncs.com/api-ws/v1/realtime
            base_url="wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime",
            api_key=api_key,
            model="qwen3-omni-flash-realtime",
            voice="Ethan",
            instructions="You are Xiaoyun, a personal assistant. Please answer the user's questions accurately and friendly, always responding with a helpful attitude.", # Set the model role
            on_text_delta=lambda text: print(f"Assistant reply: {text}", end="", flush=True),
            on_audio_delta=on_audio_received,
            turn_detection_mode=TurnDetectionMode.MANUAL,
            extra_event_handlers={"response.done": on_response_done}
        )
    
        message_handler_task = None
        try:
            await realtime_client.connect()
            print("Connected to the server. Enter 'q' or 'quit' to exit at any time.")
            message_handler_task = asyncio.create_task(realtime_client.handle_messages())
            await asyncio.sleep(0.5)
    
            turn_counter = 1
            # ------------------- 2. Multi-turn conversation loop -------------------
            while True:
                print(f"\n--- Turn {turn_counter} ---")
                audio_player.prepare_for_next_turn()
    
                recorded_audio = None
                image_paths = []
    
                # --- Get user input: Record from microphone ---
                loop = asyncio.get_event_loop()
                recorder = MicrophoneRecorder(sample_rate=16000)  # 16k sample rate is recommended for speech recognition
    
                print("Ready to record. Press Enter to start recording (or enter 'q' to exit)...")
                user_input = await loop.run_in_executor(None, input)
                if user_input.strip().lower() in ['q', 'quit']:
                    print("User requested to exit...")
                    return
    
                try:
                    recorder.start()
                except Exception:
                    print("Could not start recording. Please check your microphone permissions and device. Skipping this turn.")
                    continue
    
                print("Recording... Press Enter again to stop.")
                await loop.run_in_executor(None, input)
    
                recorded_audio = recorder.stop()
    
                if not recorded_audio or len(recorded_audio) == 0:
                    print("No valid audio was recorded. Please start this turn again.")
                    continue
    
                # --- Get image input (optional) ---
                # The image input feature below is commented out and temporarily disabled. To enable it, uncomment the code below.
                # print("\nEnter the absolute path of an [image file] on each line (optional). When finished, enter 's' or press Enter to send the request.")
                # while True:
                #     path = input("Image path: ").strip()
                #     if path.lower() == 's' or path == '':
                #         break
                #     if path.lower() in ['q', 'quit']:
                #         print("User requested to exit...")
                #         return
                #
                #     if not os.path.isabs(path):
                #         print("Error: Please enter an absolute path.")
                #         continue
                #     if not os.path.exists(path):
                #         print(f"Error: File not found -> {path}")
                #         continue
                #     image_paths.append(path)
                #     print(f"Image added: {os.path.basename(path)}")
    
                # --- 3. Send data and get response ---
                print("\n--- Input Confirmation ---")
                print(f"Audio to process: 1 (from microphone), Images: {len(image_paths)}")
                print("------------------")
    
                # 3.1 Send the recorded audio
                try:
                    print(f"Sending microphone recording ({len(recorded_audio)} bytes)")
                    await realtime_client.stream_audio(recorded_audio)
                    await asyncio.sleep(0.1)
                except Exception as e:
                    print(f"Failed to send microphone recording: {e}")
                    continue
    
                # 3.2 Send all image files
                # The image sending code below is commented out and temporarily disabled.
                # for i, path in enumerate(image_paths):
                #     try:
                #         with open(path, "rb") as f:
                #             data = f.read()
                #         print(f"Sending image {i+1}: {os.path.basename(path)} ({len(data)} bytes)")
                #         await realtime_client.append_image(data)
                #         await asyncio.sleep(0.1)
                #     except Exception as e:
                #         print(f"Failed to send image {os.path.basename(path)}: {e}")
    
                # 3.3 Submit and wait for response
                print("Submitting all inputs, requesting server response...")
                await realtime_client.commit_audio_buffer()
                await realtime_client.create_response()
    
                print("Waiting for and playing server response audio...")
                start_time = time.time()
                max_wait_time = 60
                while not audio_player.is_finished_playing():
                    if time.time() - start_time > max_wait_time:
                        print(f"\nWait timed out ({max_wait_time} seconds). Moving to the next turn.")
                        break
                    await asyncio.sleep(0.2)
    
                print("\nAudio playback for this turn is complete!")
                turn_counter += 1
    
        except (asyncio.CancelledError, KeyboardInterrupt):
            print("\nProgram was interrupted.")
        except Exception as e:
            print(f"An unhandled error occurred: {e}")
        finally:
            # ------------------- 4. Clean up resources -------------------
            print("\nClosing connection and cleaning up resources...")
            if message_handler_task and not message_handler_task.done():
                message_handler_task.cancel()
    
            if 'realtime_client' in locals() and realtime_client.ws and not realtime_client.ws.close:
                await realtime_client.close()
                print("Connection closed.")
    
            audio_player.stop()
            print("Program exited.")
    
    
    if __name__ == "__main__":
        try:
            asyncio.run(interactive_test())
        except KeyboardInterrupt:
            print("\nProgram was forcibly exited by the user.")
    ```
    
    Run `manual_mode.py`, press Enter to start speaking, and press Enter again to receive the model's audio response.
    

## **Interaction flow**

## VAD mode

Set `session.turn_detection` to `"server_vad"` in [session.update](/help/en/model-studio/client-events#af43722339yva) for automatic speech detection. Suitable for voice calls.

The interaction flow is as follows:

1.  The server detects the start of speech and sends the [input\_audio\_buffer.speech\_started](/help/en/model-studio/server-events#b99f92d872n5c) event.
    
2.  The client can send [input\_audio\_buffer.append](/help/en/model-studio/client-events#8d11313f2198k) and [input\_image\_buffer.append](/help/en/model-studio/client-events#e27908854eaht) events at any time to append audio and images to the buffer.
    
    > Before sending an input\_image\_buffer.append event, you must send at least one input\_audio\_buffer.append event.
    
3.  The server detects the end of speech and sends the [input\_audio\_buffer.speech\_stopped](/help/en/model-studio/server-events#fd08ffdf0a2mt) event.
    
4.  The server sends the [input\_audio\_buffer.committed](/help/en/model-studio/server-events#bd9bfdc258afy) event to commit the audio buffer.
    
5.  The server sends a [conversation.item.created](/help/en/model-studio/server-events#bb4547ed5b5ht) event, which contains the user message item created from the buffer.
    

**Lifecycle**

**Client events**

**Server events**

Session initialization

[session.update](/help/en/model-studio/client-events#af43722339yva)

> Session configuration

[session.created](/help/en/model-studio/server-events#39689ed6e90ag)

> Session created

[session.updated](/help/en/model-studio/server-events#424ef2e774q9p)

> Session configuration updated

User audio input

[input\_audio\_buffer.append](/help/en/model-studio/client-events#8d11313f2198k)

> Add audio to the buffer

[input\_image\_buffer.append](/help/en/model-studio/client-events#e27908854eaht)

> Add an image to the buffer

[input\_audio\_buffer.speech\_started](/help/en/model-studio/server-events#b99f92d872n5c)

> Speech start detected

[input\_audio\_buffer.speech\_stopped](/help/en/model-studio/server-events#fd08ffdf0a2mt)

> Speech end detected

[input\_audio\_buffer.committed](/help/en/model-studio/server-events#bd9bfdc258afy)

> Server received the submitted audio

Server audio output

None

[response.created](/help/en/model-studio/server-events#38033afc582r1)

> Server starts generating a response

[response.output\_item.added](/help/en/model-studio/server-events#dae2260d40qtu)

> New output content during response

[conversation.item.created](/help/en/model-studio/server-events#bb4547ed5b5ht)

> Conversation item created

[response.content\_part.added](/help/en/model-studio/server-events#de7fa0b877j25)

> New output content added to the assistant message

[response.audio\_transcript.delta](/help/en/model-studio/server-events#35396453cfood)

> Incrementally generated transcribed text

[response.audio.delta](/help/en/model-studio/server-events#a25cc50a15car)

> Incrementally generated audio from the model

[response.audio\_transcript.done](/help/en/model-studio/server-events#f4d1698567bsm)

> Text transcription complete

[response.audio.done](/help/en/model-studio/server-events#9e8eb59c67qnt)

> Audio generation complete

[response.content\_part.done](/help/en/model-studio/server-events#011ad54242wft)

> Streaming of text or audio content for the assistant message is complete

[response.output\_item.done](/help/en/model-studio/server-events#f580421f45w3h)

> Streaming of the entire output item for the assistant message is complete

[response.done](/help/en/model-studio/server-events#f2333c777d9s4)

> Response complete

## Manual mode

Set `session.turn_detection` to `null` in [session.update](/help/en/model-studio/client-events#af43722339yva) for Manual mode. The client sends `input_audio_buffer.commit` and `response.create` events to request responses. Suitable for push-to-talk scenarios like voice messaging.

The interaction flow is as follows:

1.  The client can send [input\_audio\_buffer.append](/help/en/model-studio/client-events#8d11313f2198k) and [input\_image\_buffer.append](/help/en/model-studio/client-events#e27908854eaht) events at any time to append audio and images to the buffer.
    
    > Before sending an input\_image\_buffer.append event, you must send at least one input\_audio\_buffer.append event.
    
2.  The client sends [input\_audio\_buffer.commit](/help/en/model-studio/client-events#1cbea5fa7fkfl) to commit buffers, signaling all input is sent.
    
3.  The server responds with an [input\_audio\_buffer.committed](/help/en/model-studio/server-events#bd9bfdc258afy) event.
    
4.  The client sends a [response.create](/help/en/model-studio/client-events#a42f8e9111n72) event and waits for the model's output from the server.
    
5.  The server responds with a [conversation.item.created](/help/en/model-studio/server-events#bb4547ed5b5ht) event.
    

**Lifecycle**

**Client events**

**Server events**

Session initialization

[session.update](/help/en/model-studio/client-events#af43722339yva)

> Session configuration

[session.created](/help/en/model-studio/server-events#39689ed6e90ag)

> Session created

[session.updated](/help/en/model-studio/server-events#424ef2e774q9p)

> Session configuration updated

User audio input

[input\_audio\_buffer.append](/help/en/model-studio/client-events#8d11313f2198k)

> Add audio to the buffer

[input\_image\_buffer.append](/help/en/model-studio/client-events#e27908854eaht)

> Add an image to the buffer

[input\_audio\_buffer.commit](/help/en/model-studio/client-events#1cbea5fa7fkfl)

> Submit audio and images to the server

[response.create](/help/en/model-studio/client-events#a42f8e9111n72)

> Create a model response

[input\_audio\_buffer.committed](/help/en/model-studio/server-events#bd9bfdc258afy)

> Server received the submitted audio

Server audio output

[input\_audio\_buffer.clear](/help/en/model-studio/client-events#3b44f2f2abakw)

> Clear the audio from the buffer

[response.created](/help/en/model-studio/server-events#38033afc582r1)

> Server starts generating a response

[response.output\_item.added](/help/en/model-studio/server-events#dae2260d40qtu)

> New output content during response

[conversation.item.created](/help/en/model-studio/server-events#bb4547ed5b5ht)

> Conversation item created

[response.content\_part.added](/help/en/model-studio/server-events#de7fa0b877j25)

> New output content added to the assistant message item

[response.audio\_transcript.delta](/help/en/model-studio/server-events#35396453cfood)

> Incrementally generated transcribed text

[response.audio.delta](/help/en/model-studio/server-events#a25cc50a15car)

> Incrementally generated audio from the model

[response.audio\_transcript.done](/help/en/model-studio/server-events#f4d1698567bsm)

> Text transcription complete

[response.audio.done](/help/en/model-studio/server-events#9e8eb59c67qnt)

> Audio generation complete

[response.content\_part.done](/help/en/model-studio/server-events#011ad54242wft)

> Streaming of text or audio content for the assistant message is complete

[response.output\_item.done](/help/en/model-studio/server-events#f580421f45w3h)

> Streaming of the entire output item for the assistant message is complete

[response.done](/help/en/model-studio/server-events#f2333c777d9s4)

> Response complete

## **API reference**

-   [Client events](/help/en/model-studio/client-events)
    
-   [Server events](/help/en/model-studio/server-events)
    

## **Billing and rate limiting**

### **Billing rules**

Billing is based on token usage for audio and images. For details, see [Qwen-Omni](/help/en/model-studio/models#90e80b9e42ged).

**Rules for converting audio and images to tokens**

## Audio

`Qwen-Omni-Turbo-Realtime: Total tokens = Audio duration (in seconds) × 25`. If the audio duration is less than 1 second, it is calculated as 1 second.

## Image

-   `Qwen3-Omni-Flash-Realtime` model: 1 token per `32×32` pixels
    
-   `Qwen-Omni-Turbo-Realtime` model: 1 token per `28×28` pixels
    

An image requires a minimum of 4 tokens and supports a maximum of 1,280 tokens. You can use the following code to estimate the total number of tokens consumed by an image:

```
# Install the Pillow library using the following command: pip install Pillow
from PIL import Image
import math

# For the Qwen-Omni-Turbo-Realtime model, the zoom factor is 28.
# factor = 28
# For the Qwen3-Omni-Flash-Realtime model, the zoom factor is 32.
factor = 32

def token_calculate(image_path='', duration=10):
    """
    :param image_path: The path of the image.
    :param duration: The duration of the session connection.
    :return: The number of tokens for the image.
    """
    if len(image_path) > 0:
        # Open the specified PNG image file.
        image = Image.open(image_path)
        # Get the original dimensions of the image.
        height = image.height
        width = image.width
      print(f"Image dimensions before scaling: height={height}, width={width}")
      # Adjust the height to be an integer multiple of the factor.
      h_bar = round(height / factor) * factor
      # Adjust the width to be an integer multiple of the factor.
      w_bar = round(width / factor) * factor
      # Lower limit for image tokens: 4 tokens.
      min_pixels = factor * factor * 4
      # Upper limit for image tokens: 1280 tokens.
      max_pixels = 1280 * factor * factor
      # Scale the image to ensure the total number of pixels is within the range [min_pixels, max_pixels].
      if h_bar * w_bar > max_pixels:
          # Calculate the scaling factor beta so that the total number of pixels of the scaled image does not exceed max_pixels.
          beta = math.sqrt((height * width) / max_pixels)
          # Recalculate the adjusted height to ensure it is an integer multiple of the factor.
          h_bar = math.floor(height / beta / factor) * factor
          # Recalculate the adjusted width to ensure it is an integer multiple of the factor.
          w_bar = math.floor(width / beta / factor) * factor
      elif h_bar * w_bar < min_pixels:
          # Calculate the scaling factor beta so that the total number of pixels of the scaled image is not less than min_pixels.
          beta = math.sqrt(min_pixels / (height * width))
          # Recalculate the adjusted height to ensure it is an integer multiple of the factor.
          h_bar = math.ceil(height * beta / factor) * factor
          # Recalculate the adjusted width to ensure it is an integer multiple of the factor.
          w_bar = math.ceil(width * beta / factor) * factor
      print(f"Image dimensions after scaling: height={h_bar}, width={w_bar}")
      # Calculate the number of tokens for the image: total pixels divided by (factor * factor).
      token = int((h_bar * w_bar) / (factor * factor))
      print(f"Number of tokens after scaling: {token}")
      total_token = token * math.ceil(duration / 2)
      print(f"Total number of tokens: {total_token}")
      return total_token
    else:
        print("Error: image_path is empty. Cannot calculate tokens")
        return 0
              
if __name__ == "__main__":
    total_token = token_calculate(image_path="xxx/test.jpg", duration=10)
```

### **Throttling**

For more information about model throttling rules, see [Throttling](/help/en/model-studio/rate-limit).

## **Error codes**

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.

## **Voice list**

> Set the `voice` request parameter to the value in the **voice parameter** column.

## qwen3-omni-flash-realtime-2025-12-01

**Voice name**

`**voice**` **parameter**

**Voice effect**

**Description**

**Languages supported**

Cherry

Cherry

A sunny, positive, friendly, and natural young woman

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Serena

Serena

A gentle young woman

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Ethan

Ethan

Standard Mandarin with a slight northern accent. Sunny, warm, energetic, and vibrant

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Chelsie

Chelsie

A two-dimensional virtual girlfriend

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Momo

Momo

Playful and mischievous, cheering you up

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Vivian

Vivian

Confident, cute, and slightly feisty

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Moon

Moon

Effortlessly cool Moon White

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Maia

Maia

A blend of intellect and gentleness

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Kai

Kai

A soothing audio spa for your ears

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Nofish

Nofish

A designer who cannot pronounce retroflex sounds

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Bella

Bella

A little girl who drinks but never throws punches when drunk

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Jennifer

Jennifer

A premium, cinematic-quality American English female voice

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Ryan

Ryan

Full of rhythm, bursting with dramatic flair, balancing authenticity and tension

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Katerina

Katerina

A mature-woman voice with rich, memorable rhythm

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Aiden

Aiden

An American English young man skilled in cooking

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Eldric Sage

Eldric Sage

A calm and wise elder—weathered like a pine tree, yet clear-minded as a mirror

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Mia

Mia

Gentle as spring water, obedient as fresh snow

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Mochi

Mochi

A clever, quick-witted young adult—childlike innocence remains, yet wisdom shines through

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Bellona

Bellona

A powerful, clear voice that brings characters to life—so stirring it makes your blood boil.

With heroic grandeur and perfect diction, this voice captures the full spectrum of human expression.

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Vincent

Vincent

A uniquely raspy, smoky voice—just one line evokes armies and heroic tales

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Bunny

Bunny

A little girl overflowing with "cuteness"

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Neil

Neil

A flat baseline intonation with precise, clear pronunciation—the most professional news anchor

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Elias

Elias

Maintains academic rigor while using storytelling techniques to turn complex knowledge into digestible learning modules

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Arthur

Arthur

A simple, earthy voice steeped in time and tobacco smoke—slowly unfolding village stories and curiosities

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Nini

Nini

A soft, clingy voice like sweet rice cakes—those drawn-out calls of “Big Brother” are so sweet they melt your bones

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Ebona

Ebona

Her whisper is like a rusty key slowly turning in the darkest corner of your mind—where childhood shadows and unknown fears hide

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Seren

Seren

A gentle, soothing voice to help you fall asleep faster. Good night, sweet dreams

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Pip

Pip

A playful, mischievous boy full of childlike wonder—is this your memory of Shin-chan?

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Stella

Stella

Normally a cloyingly sweet, dazed teenage-girl voice—but when shouting “I represent the moon to defeat you!”, she instantly radiates unwavering love and justice

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Bodega

Bodega

A passionate Spanish man

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Sonrisa

Sonrisa

A cheerful, outgoing Latin American woman

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Alek

Alek

Cold like the Russian spirit, yet warm like wool coat lining

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Dolce

Dolce

A laid-back Italian man

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Sohee

Sohee

A warm, cheerful, emotionally expressive Korean unnie

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Ono Anna

Ono Anna

A clever, spirited childhood friend

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Lenn

Lenn

Rational at heart, rebellious in detail—a German youth who wears suits and listens to post-punk

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Emilien

Emilien

A romantic French big brother

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Andre

Andre

A magnetic, natural, and steady male voice

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Radio Gol

Radio Gol

Football poet Radio Gol! Today I’ll commentate on football using my name.

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Shanghai - Jada

Jada

A fast-paced, energetic Shanghai auntie

Shanghainese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Beijing - Dylan

Dylan

A young man raised in Beijing’s hutongs

Beijing dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Nanjing - Li

Li

A patient yoga teacher

Nanjing dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Shaanxi - Marcus

Marcus

Broad face, few words, sincere heart, deep voice—the authentic Shaanxi flavor

Shaanxi dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Southern Min - Roy

Roy

A humorous, straightforward, lively Taiwanese guy

Southern Min, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Tianjin - Peter

Peter

Tianjin-style crosstalk, professional foil

Tianjin dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Sichuan - Sunny

Sunny

A Sichuan girl sweet enough to melt your heart

Sichuan dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Sichuan - Eric

Eric

A Sichuanese man from Chengdu who stands out in everyday life

Sichuan dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Cantonese - Rocky

Rocky

A humorous, witty A Qiang providing live chat

Cantonese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Cantonese - Kiki

Kiki

A sweet Hong Kong girl best friend

Cantonese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

### qwen3-omni-flash-realtime, qwen3-omni-flash-realtime**\-**2025-09-15

**Voice name**

`**voice**` **parameter**

**Voice effect**

**Description**

**Languages supported**

Cherry

Cherry

A sunny, positive, friendly, and natural young woman

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Ethan

Ethan

Standard Mandarin with a slight northern accent. Sunny, warm, energetic, and vibrant

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Nofish

Nofish

A designer who cannot pronounce retroflex sounds

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Jennifer

Jennifer

A premium, cinematic-quality American English female voice

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Ryan

Ryan

Full of rhythm, bursting with dramatic flair, balancing authenticity and tension

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Katerina

Katerina

A mature-woman voice with rich, memorable rhythm

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Elias

Elias

Maintains academic rigor while using storytelling techniques to turn complex knowledge into digestible learning modules

Chinese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Shanghai - Jada

Jada

A fast-paced, energetic Shanghai auntie

Shanghainese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Beijing - Dylan

Dylan

A young man raised in Beijing’s hutongs

Beijing dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Sichuan - Sunny

Sunny

A Sichuan girl sweet enough to melt your heart

Sichuan dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Nanjing - Li

Li

A patient yoga teacher

Nanjing dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Shaanxi - Marcus

Marcus

Broad face, few words, sincere heart, deep voice—the authentic Shaanxi flavor

Shaanxi dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Southern Min - Roy

Roy

A humorous, straightforward, lively Taiwanese guy

Southern Min, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Tianjin - Peter

Peter

Tianjin-style crosstalk, professional foil

Tianjin dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Cantonese - Rocky

Rocky

A humorous, witty A Qiang providing live chat

Cantonese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Cantonese - Kiki

Kiki

A sweet Hong Kong girl best friend

Cantonese, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

Sichuan - Eric

Eric

A Sichuanese man from Chengdu who stands out in everyday life

Sichuan dialect, English, French, German, Russian, Italian, Spanish, Portuguese, Japanese, Korean

### **Qwen-Omni-Turbo-Realtime**

**Voice name**

`**voice**` **parameter**

**Voice Effect**

**Description**

**Languages supported**

Cherry

Cherry

A sunny, positive, friendly, and natural young woman

Chinese, English

Serena

Serena

A gentle young woman

Chinese, English

Ethan

Ethan

Standard Mandarin with a slight northern accent. Sunny, warm, energetic, and vibrant

Chinese, English

Chelsie

Chelsie

A two-dimensional virtual girlfriend

Chinese, English
