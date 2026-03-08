## Examples

```swift
public class MyModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MyFirstExpoModule")

    Function("hello") { (name: String) in
      return "Hello \(name)!"
    }
  }
}
```

```kotlin
class MyModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("MyFirstExpoModule")

    Function("hello") { name: String ->
      return "Hello $name!"
    }
  }
}
```

For more examples from real modules, you can refer to Expo modules that already use this API on GitHub:

`expo-battery`[Swift](https://github.com/expo/expo/tree/main/packages/expo-battery/ios)

`expo-cellular`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-cellular/android/src/main/java/expo/modules/cellular), [Swift](https://github.com/expo/expo/tree/main/packages/expo-cellular/ios)

`expo-clipboard`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-clipboard/android/src/main/java/expo/modules/clipboard), [Swift](https://github.com/expo/expo/tree/main/packages/expo-clipboard/ios)

`expo-crypto`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-crypto/android/src/main/java/expo/modules/crypto), [Swift](https://github.com/expo/expo/tree/main/packages/expo-crypto/ios)

`expo-device`[Swift](https://github.com/expo/expo/tree/main/packages/expo-device/ios)

`expo-haptics`[Swift](https://github.com/expo/expo/tree/main/packages/expo-haptics/ios)

`expo-image-manipulator`[Swift](https://github.com/expo/expo/tree/main/packages/expo-image-manipulator/ios)

`expo-image-picker`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-image-picker/android/src/main/java/expo/modules/imagepicker), [Swift](https://github.com/expo/expo/tree/main/packages/expo-image-picker/ios)

`expo-linear-gradient`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-linear-gradient/android/src/main/java/expo/modules/lineargradient), [Swift](https://github.com/expo/expo/tree/main/packages/expo-linear-gradient/ios)

`expo-localization`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-localization/android/src/main/java/expo/modules/localization), [Swift](https://github.com/expo/expo/tree/main/packages/expo-localization/ios)

`expo-store-review`[Swift](https://github.com/expo/expo/tree/main/packages/expo-store-review/ios)

`expo-system-ui`[Swift](https://github.com/expo/expo/tree/main/packages/expo-system-ui/ios/ExpoSystemUI)

`expo-video-thumbnails`[Swift](https://github.com/expo/expo/tree/main/packages/expo-video-thumbnails/ios)

`expo-web-browser`

[Kotlin](https://github.com/expo/expo/tree/main/packages/expo-web-browser/android/src/main/java/expo/modules/webbrowser), [Swift](https://github.com/expo/expo/tree/main/packages/expo-web-browser/ios)

***

# Android lifecycle listeners
