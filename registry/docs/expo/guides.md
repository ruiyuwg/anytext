## Guides

### Sending events

While JavaScript/TypeScript to Native communication is mostly covered by native functions, you might also want to let the JavaScript/TypeScript code know about certain system events, for example, when the clipboard content changes.

To do this, in the module definition, you need to provide the event names that the module can send using the [Events](/modules/module-api#events) definition component. After that, you can use the `sendEvent(eventName, payload)` function on the module instance to send the actual event with some payload. For example, a minimal clipboard implementation that sends native events may look like this:

```swift
let CLIPBOARD_CHANGED_EVENT_NAME = "onClipboardChanged"

public class ClipboardModule: Module {
  public func definition() -> ModuleDefinition {
    Events(CLIPBOARD_CHANGED_EVENT_NAME)

    OnStartObserving {
      NotificationCenter.default.addObserver(
        self,
        selector: #selector(self.clipboardChangedListener),
        name: UIPasteboard.changedNotification,
        object: nil
      )
    }

    OnStopObserving {
      NotificationCenter.default.removeObserver(
        self,
        name: UIPasteboard.changedNotification,
        object: nil
      )
    }
  }

  @objc
  private func clipboardChangedListener() {
    sendEvent(CLIPBOARD_CHANGED_EVENT_NAME, [
      "contentTypes": availableContentTypes()
    ])
  }
}
```

```kotlin
const val CLIPBOARD_CHANGED_EVENT_NAME = "onClipboardChanged"

class ClipboardModule : Module() {
  override fun definition() = ModuleDefinition {
    Events(CLIPBOARD_CHANGED_EVENT_NAME)

    OnStartObserving {
      clipboardManager?.addPrimaryClipChangedListener(listener)
    }

    OnStopObserving {
      clipboardManager?.removePrimaryClipChangedListener(listener)
    }
  }

  private val clipboardManager: ClipboardManager?
    get() = appContext.reactContext?.getSystemService(Context.CLIPBOARD_SERVICE) as? ClipboardManager

  private val listener = ClipboardManager.OnPrimaryClipChangedListener {
    clipboardManager?.primaryClipDescription?.let { clip ->
      this@ClipboardModule.sendEvent(
        CLIPBOARD_CHANGED_EVENT_NAME,
        bundleOf(
          "contentTypes" to availableContentTypes(clip)
        )
      )
    }
  }
}
```

To subscribe to these events in JavaScript/TypeScript, use [`addListener`](/versions/latest/sdk/expo#addlistenereventname-listener) on the module object returned by `requireNativeModule`. Modules are extending the built-in [`EventEmitter`](/versions/latest/sdk/expo#eventemitter) class. Alternatively, you can use [`useEvent`](/versions/latest/sdk/expo#useeventeventemitter-eventname-initialvalue) or [`useEventListener`](/versions/latest/sdk/expo#useeventlistenereventemitter-eventname-listener) hooks.

```ts
import { requireNativeModule, NativeModule } from 'expo';

type ClipboardChangeEvent = {
  contentTypes: string[];
};

type ClipboardModuleEvents = {
  onClipboardChanged(event: ClipboardChangeEvent): void;
};

declare class ClipboardModule extends NativeModule<ClipboardModuleEvents> {}

const Clipboard = requireNativeModule<ClipboardModule>('Clipboard');

Clipboard.addListener('onClipboardChanged', (event: ClipboardChangeEvent) => {
  alert('Clipboard has changed');
});
```

### View callbacks

Some events are connected to a certain view. For example, the touch event should be sent only to the underlying JavaScript view which was pressed. In that case, you can't use `sendEvent` described in [`Sending events`](/modules/module-api#sending-events). The `expo-modules-core` introduces a view callbacks mechanism to handle view-bound events.

To use it, in the view definition, you need to provide the event names that the view can send using the [Events](/modules/module-api#events) definition component. After that, you need to declare a property of type `EventDispatcher` in your view class. The name of the declared property has to be the same as the name exported in the `Events` component. Later, you can call it as a function and pass a payload of type `[String: Any?]` on iOS and `Map<String, Any?>` on Android.

> **Note:**: On Android, it's possible to specify the payload type. In case of types that don't convert into objects, the payload will be encapsulated and stored under the `payload` key: `{payload: <provided value>}`.

```swift
class CameraViewModule: Module {
  public func definition() -> ModuleDefinition {
    View(CameraView.self) {
      Events(
        "onCameraReady"
      )
      ... 
    }
  }
}

class CameraView: ExpoView {
  let onCameraReady = EventDispatcher()

  func callOnCameraReady() {
    onCameraReady([
      "message": "Camera was mounted"
    ]);
  }
}
```

```kotlin
class CameraViewModule : Module() {
  override fun definition() = ModuleDefinition {
    View(ExpoCameraView::class) {
      Events(
        "onCameraReady"
      )
      ... 
    }
  }
}

class CameraView(
  context: Context,
  appContext: AppContext
) : ExpoView(context, appContext) {
  val onCameraReady by EventDispatcher()

  fun callOnCameraReady() {
    onCameraReady(mapOf(
      "message" to "Camera was mounted"
    ));
  }
}
```

To subscribe to these events in JavaScript/TypeScript, you need to pass a function to the native view as shown:

```tsx
import { requireNativeViewManager } from 'expo-modules-core';

const CameraView = requireNativeViewManager('CameraView');

export default function MainView() {
  const onCameraReady = event => {
    console.log(event.nativeEvent);
  };

  return <CameraView onCameraReady={onCameraReady} />;
}
```

Provided payload is available under the `nativeEvent` key.
