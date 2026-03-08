## Definition components

As you might have noticed in the snippets on the [Get Started](/modules/get-started) page, each module class must implement the `definition` function. The module definition consists of the DSL components that describe the module's functionality and behavior.

### `Name`

Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument. This can be inferred from the module's class name, but it's recommended to set it explicitly for clarity.

```swift
Name("MyModuleName")
```

### `Constant`

Defines a constant property on the JavaScript object. The property is computed only once when it's first accessed, and subsequent accesses return the cached value.

```swift
Constant("PI") {
  Double.pi
}
```

```kotlin
Constant("PI") {
  Math.PI
}
```

### `Constants`

> **Deprecated:** Use [`Constant`](/modules/module-api#constant) instead.

Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.

```swift
// Created from the dictionary
Constants([
  "PI": Double.pi
])

// or returned by the closure
Constants {
  return [
    "PI": Double.pi
  ]
}
```

```kotlin
// Passed as arguments
Constants(
  "PI" to kotlin.math.PI
)

// or returned by the closure
Constants {
  return@Constants mapOf(
    "PI" to kotlin.math.PI
  )
}
```

### `Function`

Defines a native synchronous function that will be exported to JavaScript. Synchronous means that when the function is executed in JavaScript, its native code is run on the same thread and blocks further execution of the script until the native function returns.

#### Arguments

- **name**: `String` — Name of the function that you'll call from JavaScript.
- **body**: `(args...) -> ReturnType` — The closure to run when the function is called.

The function can receive up to 8 arguments. This is due to the limitations of generics in both Swift and Kotlin because this component must be implemented separately for each arity.

See the [Argument types](/modules/module-api#argument-types) section for more details on what types can be used in the function body.

```swift
Function("mySyncFunction") { (message: String) in
  return message
}
```

```kotlin
Function("mySyncFunction") { message: String ->
  return@Function message
}
```

```js
import { requireNativeModule } from 'expo-modules-core';

// Assume that we have named the module "MyModule"
const MyModule = requireNativeModule('MyModule');

function getMessage() {
  return MyModule.mySyncFunction('bar');
}
```

### `AsyncFunction`

Defines a JavaScript function that always returns a `Promise` and whose native code is by default dispatched on a different thread than the JavaScript runtime runs on.

#### Arguments

- **name**: `String` — Name of the function that you'll call from JavaScript.
- **body**: `(args...) -> ReturnType` — The closure to run when the function is called.

If the type of the last argument is `Promise`, the function will wait for the promise to be resolved or rejected before the response is passed back to JavaScript. Otherwise, the function is immediately resolved with the returned value or rejected if it throws an exception. The function can receive up to 8 arguments (including the promise).

See the [Argument types](/modules/module-api#argument-types) section for more details on what types can be used in the function body.

It is recommended to use `AsyncFunction` over `Function` when it:

- does I/O bound tasks such as sending network requests or interacting with the file system
- needs to be run on a different thread, for example, the main UI thread for UI-related tasks
- is an extensive or long-lasting operation that would block the JavaScript thread which in turn would reduce the responsiveness of the application

```swift
AsyncFunction("myAsyncFunction") { (message: String) in
  return message
}

// or

AsyncFunction("myAsyncFunction") { (message: String, promise: Promise) in
  promise.resolve(message)
}
```

```kotlin
AsyncFunction("myAsyncFunction") { message: String ->
  return@AsyncFunction message
}

// or

// Make sure to import `Promise` class from `expo.modules.kotlin` instead of `expo.modules.core`.
AsyncFunction("myAsyncFunction") { message: String, promise: Promise ->
  promise.resolve(message)
}
```

```js
import { requireNativeModule } from 'expo-modules-core';

// Assume that we have named the module "MyModule"
const MyModule = requireNativeModule('MyModule');

async function getMessageAsync() {
  return await MyModule.myAsyncFunction('bar');
}
```

It is possible to change the native queue of `AsyncFunction` by calling the `.runOnQueue` function on the result of that component.

```swift
AsyncFunction("myAsyncFunction") { (message: String) in
  return message
}.runOnQueue(.main)
```

```kotlin
AsyncFunction("myAsyncFunction") { message: String ->
  return@AsyncFunction message
}.runOnQueue(Queues.MAIN)
```

#### Kotlin coroutines

`AsyncFunction` can receive a suspendable body on Android. However, it has to be passed in the infix notation after the `Coroutine` block. You can read more about suspendable functions and coroutines on [coroutine overview](https://kotlinlang.org/docs/coroutines-overview.html).

`AsyncFunction` with a suspendable body can't receive `Promise` as an argument. It uses a suspension mechanism to execute asynchronous calls. The function is immediately resolved with the returned value of the provided suspendable block or rejected if it throws an exception. The function can receive up to 8 arguments.

By default, suspend functions are dispatched on the module's coroutine scope. Moreover, every other suspendable function called from the body block is run within the same scope. This scope's lifecycle is bound to the module's lifecycle - all unfinished suspend functions will be canceled when the module is deallocated.

```kotlin
AsyncFunction("suspendFunction") Coroutine { message: String ->
  // You can execute other suspendable functions here.
  // For example, you can use `kotlinx.coroutines.delay` to delay resolving the underlying promise.
  delay(5000)
  return@Coroutine message
}
```

### `Property`

Defines a new property directly on the JavaScript object that represents a native module. It is the same as calling [`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) on the module object.

To declare a read-only property, you can use a shorthanded syntax that requires two arguments:

- **name**: `String` — Name of the property that you'll use from JavaScript.
- **getter**: `() -> PropertyType` — The closure to run when the getter for a property was called.

```swift
Property("foo") {
  return "bar"
}
```

```kotlin
Property("foo") {
  return@Property "bar"
}
```

In the case of the mutable property, both the getter and the setter closure are needed (using the syntax below is also possible to declare a property with only a setter):

- **name**: `String` — Name of the property that you'll use from JavaScript.
- **getter**: `() -> PropertyType` — The closure to run when the getter for a property was called.
- **setter**: `(newValue: PropertyType) -> void` — The closure to run when the setter for a property was called.

```swift
Property("foo")
  .get { return "bar" }
  .set { (newValue: String) in
    // do something with new value
  }
```

```kotlin
Property("foo")
  .get { return@get "bar" }
  .set { newValue: String ->
    // do something with new value
  }
```

```js
import { requireNativeModule } from 'expo-modules-core';

// Assume that we have named the module "MyModule"
const MyModule = requireNativeModule('MyModule');

// Obtain the property value
MyModule.foo;

// Set a new value
MyModule.foo = 'foobar';
```

### `View`

Enables the module to be used as a native view. Definition components that are accepted as part of the view definition: [`Prop`](/modules/module-api#prop), [`Events`](/modules/module-api#events), [`GroupView`](/modules/module-api#groupview) and [`AsyncFunction`](/modules/module-api#asyncfunction).

[`AsyncFunction`](/modules/module-api#asyncfunction) in the view definition is added to the React ref of the React component representing the native view. Such async functions automatically receive an instance of the native view as the first argument and run on the UI thread by default.

#### Arguments

- **viewType** — The class of the native view that will be rendered. Note: On Android, the provided class must inherit from the [`ExpoView`](/modules/module-api#expoview), on iOS it's optional. See [`Extending ExpoView`](/modules/module-api#extending--expoview).
- **definition**: `() -> ViewDefinition` — A builder of the view definition.

```swift
View(UITextView.self) {
  Prop("text") { ...  }

  AsyncFunction("focus") { (view: UITextView) in
    view.becomeFirstResponder()
  }
}
```

```kotlin
View(TextView::class) {
  Prop("text") { ...  }

  AsyncFunction("focus") { view: TextView ->
    view.requestFocus()
  }
}
```

> Support for rendering SwiftUI views is planned. For now, you can use [`UIHostingController`](https://developer.apple.com/documentation/swiftui/uihostingcontroller) and add its content view to your UIKit view.

### Event observing

### `Events`

Defines event names that the module can send to JavaScript.

> **Note:** This component can be used inside of the [`View`](/modules/module-api#view) block to define callback names. See [`View callbacks`](/modules/module-api#view-callbacks)

```swift
Events("onCameraReady", "onPictureSaved", "onBarCodeScanned")
```

```kotlin
Events("onCameraReady", "onPictureSaved", "onBarCodeScanned")
```

See [Sending events](/modules/module-api#sending-events) to learn how to send events from the native code to JavaScript/TypeScript.

### `OnStartObserving`

Defines the function that is invoked when the first event listener is added.

You need to pass an event name to scope the listener to a specific event. This is useful when you need to set up or tear down resources per-event rather than globally.

```swift
// Called when a listener for "onURLReceived" is added
OnStartObserving("onURLReceived") {
  ... 
}
```

```kotlin
// Called when a listener for "onURLReceived" is added
OnStartObserving("onURLReceived") {
  ... 
}
```

### `OnStopObserving`

Defines the function that is invoked when all event listeners for a given event are removed.

Like `OnStartObserving`, you need to pass an event name to scope the listener to a specific event.

```swift
// Called when listeners for "onURLReceived" are removed
OnStopObserving("onURLReceived") {
  ... 
}
```

```kotlin
// Called when listeners for "onURLReceived" are removed
OnStopObserving("onURLReceived") {
  ... 
}
```

### Lifecycle listeners

### `OnCreate`

Defines module's lifecycle listener that is called right after module initialization. If you need to set up something when the module gets initialized, use this instead of module's class initializer.

### `OnDestroy`

Defines module's lifecycle listener that is called when the module is about to be deallocated. Use it instead of module's class destructor.

### `OnAppContextDestroys`

Defines module's lifecycle listener that is called when the app context owning the module is about to be deallocated.

### `OnAppEntersForeground`

Supported platforms: iOS.

Defines the listener that is called when the app is about to enter the foreground mode.

> **Note:** This function is not available on Android — you may want to use [`OnActivityEntersForeground`](/modules/module-api#onactivityentersforeground) instead.

### `OnAppEntersBackground`

Supported platforms: iOS.

Defines the listener that is called when the app enters the background mode.

> **Note:** This function is not available on Android — you may want to use [`OnActivityEntersBackground`](/modules/module-api#onactivityentersbackground) instead.

### `OnAppBecomesActive`

Supported platforms: iOS.

Defines the listener that is called when the app becomes active again (after `OnAppEntersForeground`).

> **Note:** This function is not available on Android — you may want to use [`OnActivityEntersForeground`](/modules/module-api#onactivityentersforeground) instead.

### `OnActivityEntersForeground`

Supported platforms: Android.

Defines the activity lifecycle listener that is called right after the activity is resumed.

> **Note:** This function is not available on iOS — you may want to use [`OnAppEntersForeground`](/modules/module-api#onappentersforeground) instead.

### `OnActivityEntersBackground`

Supported platforms: Android.

Defines the activity lifecycle listener that is called right after the activity is paused.

> **Note:** This function is not available on iOS — you may want to use [`OnAppEntersBackground`](/modules/module-api#onappentersbackground) instead.

### `OnActivityDestroys`

Supported platforms: Android.

Defines the activity lifecycle listener that is called when the activity owning the JavaScript context is about to be destroyed.

> **Note:** This function is not available on iOS — you may want to use [`OnAppEntersBackground`](/modules/module-api#onappentersbackground) instead.

### `OnActivityResult`

Supported platforms: Android.

Defines the activity lifecycle listener that is called when the activity launched with `startActivityForResult` returns a result.

#### Arguments

- **activity** — The Android activity that received the result.
- **payload** — An object containing data about the activity result.
  - **requestCode**: `Int` — The request code originally supplied to `startActivityForResult`, used to identify the source of the result.
  - **resultCode**: `Int` — The result code returned by the child activity (for example, `Activity.RESULT_OK` or `Activity.RESULT_CANCELED`).
  - **data** — An optional intent that carries the result data returned from the launched activity. Can be `null`.

```kotlin
AsyncFunction('someFunc') {
  ... 
  activity.startActivityForResult(someIntent, SOME_REQUEST_CODE)
}

OnActivityResult { activity, payload ->
  ... 
}
```

### `OnNewIntent`

Supported platforms: Android.

Defines the activity lifecycle listener that is called when the activity receives a new intent (for example, from a deep link).

#### Arguments

- **intent**: `Intent` — The new intent was delivered to the activity. For more information about the `Intent` type, visit: <https://developer.android.com/reference/android/content/Intent>.

```kotlin
OnNewIntent { intent ->
  val data = intent.data
  // Handle the incoming intent
}
```

### `OnUserLeavesActivity`

Supported platforms: Android.

Defines the activity lifecycle listener called during the activity lifecycle when an activity is about to go into the background as a result of user choice. For example, when the user presses the Home key, `OnUserLeavesActivity` will be called, but when an incoming phone call causes the in-call Activity to be automatically brought to the foreground, `OnUserLeavesActivity` will not be called on the activity being interrupted.

```kotlin
OnUserLeavesActivity {
  // Your implementation
}
```

### `RegisterActivityContracts`

Supported platforms: Android.

Registers Android [activity result contracts](https://developer.android.com/training/basics/intents/result) that let you launch activities and handle their results in a type-safe way. This is the modern replacement for `startActivityForResult`.

Inside the `RegisterActivityContracts` block, use `registerForActivityResult` to register each contract. The registered launchers can then be used in async functions to launch activities.

```kotlin
class ImagePickerModule : Module() {
  private lateinit var cameraLauncher: ActivityResultLauncher<CameraContractOptions>
  private lateinit var imageLibraryLauncher: ActivityResultLauncher<ImageLibraryContractOptions>

  override fun definition() = ModuleDefinition {
    Name("ImagePicker")

    RegisterActivityContracts {
      cameraLauncher = registerForActivityResult(
        CameraContract(this@ImagePickerModule)
      ) { input, result ->
        handleResult(result, input.options)
      }

      imageLibraryLauncher = registerForActivityResult(
        ImageLibraryContract(this@ImagePickerModule)
      ) { input, result ->
        handleResult(result, input.options)
      }
    }

    AsyncFunction("launchCameraAsync") { options: PickerOptions ->
      cameraLauncher.launch(CameraContractOptions(options))
    }
  }
}
```
