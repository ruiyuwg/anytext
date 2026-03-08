## Native classes

### `Module`

A base class for a native module.

#### Properties

### `appContext`

Provides access to the [`AppContext`](#appcontext).

Returns: `AppContext`

#### Methods

### `sendEvent(eventName, payload)`

| Parameter | Type | Description |
| --- | --- | --- |
| `eventName` | `string` | The name of the JavaScript event |
| `payload` | `Android: Map<String, Any?> | Bundle iOS: [String: Any?]` | The event payload |

Sends an event with a given name and a payload to JavaScript. See [`Sending events`](#sending-events)

Returns: `void`

### `AppContext`

The app context is an interface to a single Expo app.

#### Properties

### `constants`

Provides access to app's constants from legacy module registry.

Returns: `Android: ConstantsInterface? iOS: EXConstantsInterface?`

### `permissions`

Provides access to the permissions manager from legacy module registry.

Returns: `Android: Permissions? iOS: EXPermissionsInterface?`

### `activityProvider`

Provides access to the activity provider from the legacy module registry.

Returns: `ActivityProvider?`

### `reactContext`

Provides access to the react application context.

Returns: `Context?`

### `hasActiveReactInstance`

Checks if there is an not-null, alive react native instance.

Returns: `Boolean`

### `utilities`

Provides access to the utilities from legacy module registry.

Returns: `EXUtilitiesInterface?`

### `ExpoView`

A base class that should be used by all exported views.

On iOS, `ExpoView` extends the `RCTView` which handles some styles (for example, borders) and accessibility.

#### Properties

### `appContext`

Provides access to the [`AppContext`](#appcontext).

Returns: `AppContext`

#### Extending `ExpoView`

To export your view using the [`View`](/modules/module-api#view) component, your custom class must inherit from the `ExpoView`. By doing that you will get access to the [`AppContext`](/modules/module-api#appcontext) object. It's the only way of communicating with other modules and the JavaScript runtime. Also, you can't change constructor parameters, because provided view will be initialized by `expo-modules-core`.

```swift
class LinearGradientView: ExpoView {}

public class LinearGradientModule: Module {
  public func definition() -> ModuleDefinition {
    View(LinearGradientView.self) {
      ... 
    }
  }
}
```

```kotlin
class LinearGradientView(
  context: Context,
  appContext: AppContext,
) : ExpoView(context, appContext)

class LinearGradientModule : Module() {
  override fun definition() = ModuleDefinition {
    View(LinearGradientView::class) {
      ... 
    }
  }
}
```
