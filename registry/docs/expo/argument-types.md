## Argument types

Fundamentally, only primitive and serializable data can be passed back and forth between the runtimes. However, usually native modules need to receive custom data structures — more sophisticated than just the dictionary/map where the values are of unknown (`Any`) type and so each value has to be validated and cast on its own. The Expo Modules API provides protocols to make it more convenient to work with data objects, to provide automatic validation, and finally, to ensure native type-safety on each object member.

### `Primitives`

All functions and view prop setters accept all common primitive types in Swift and Kotlin as the arguments. This includes arrays, dictionaries/maps and optionals of these primitive types.

| Language | Supported primitive types |
| --- | --- |
| Swift | `Bool`, `Int`, `Int8`, `Int16`, `Int32`, `Int64`, `UInt`, `UInt8`, `UInt16`, `UInt32`, `UInt64`, `Float32`, `Double`, `String` |
| Kotlin | `Boolean`, `Int`, `Long`, `Float`, `Double`, `String`, `Pair` |

### `Convertibles`

*Convertibles* are native types that can be initialized from certain specific kinds of data received from JavaScript. Such types are allowed to be used as an argument type in `Function`'s body. For example, when the `CGPoint` type is used as a function argument type, its instance can be created from an array of two numbers `(x, y)` or a JavaScript object with numeric `x` and `y` properties.

The built-in Convertibles are documented [further below](/modules/module-api#built-in-convertibles).

You can define additional Convertibles by making native Swift types conform to the `Convertible` protocol:

### `Convertible`

Supported platforms: iOS.

`Convertible` is a Swift protocol with one static method:

### `convert(value, appContext)`

| Parameter | Type | Description |
| --- | --- | --- |
| `value` | `Any?` | A value from JavaScript to convert |
| `appContext` | `AppContext` | The context object for the currently running Expo app instance |

A static method that converts a dynamically typed value from JavaScript to an instance of the Swift type conforming to `Convertible`. Implementers should throw an exception when the given value is invalid or of an unsupported type.

Returns: `Self`

#### Example

```swift
import ExpoModulesCore

extension CMTime: @retroactive Convertible {
  public static func convert(from value: Any?, appContext: AppContext) throws -> CMTime {
    if let seconds = value as? Double {
      return CMTime(seconds: seconds, preferredTimescale: .max)
    }
    throw Conversions.ConvertingException<CMTime>(value)
  }
}
```

In Kotlin, extending an existing type with a protocol isn't possible. To extend available types, you can use the `ModuleConverters` builder:

### `ModuleConverters`

Supported platforms: Android.

On Android, modules can define custom type converters that allow non-standard types to be used as function arguments. Override the `converters()` method in your `Module` class and use the `ModuleConverters` builder to register converters with `.from<SourceType> { }` chains.

```kotlin
class MyModule : Module() {
  override fun converters() = ModuleConverters {
    TypeConverter(CustomType::class)
      .from { number: Int ->
        CustomType.fromInt(number)
      }
      .from { string: String ->
        CustomType.parse(string)
      }
  }

  override fun definition() = ModuleDefinition {
    Name("MyModule")

    // CustomType can now be used as an argument type
    Function("process") { value: CustomType ->
      value.doSomething()
    }
  }
}
```

Each `.from<T> { }` call registers a converter from type `T` to your custom type. At runtime, the framework tries each registered converter until one matches the incoming JavaScript value.

> **Note:** On iOS, use the `Convertible` protocol instead (documented above).

### Built-in Convertibles

Some common iOS types from the `CoreGraphics` and `UIKit` system frameworks are already made convertible.

| Native iOS Type | TypeScript |
| --- | --- |
| `URL` | `string` with a URL. When a scheme is not provided, it's assumed to be a file URL. |
| `CGFloat` | `number` |
| `CGPoint` | `{ x: number, y: number }` or `number[]` with *x* and *y* coords |
| `CGSize` | `{ width: number, height: number }` or `number[]` with *width* and *height* |
| `CGVector` | `{ dx: number, dy: number }` or `number[]` with *dx* and *dy* vector differentials |
| `CGRect` | `{ x: number, y: number, width: number, height: number }` or `number[]` with *x*, *y*, *width* and *height* values |
| `CGColor``UIColor` | Color hex strings (`#RRGGBB`, `#RRGGBBAA`, `#RGB`, `#RGBA`), named colors following the [CSS3/SVG specification](https://www.w3.org/TR/css-color-3/#svg-color) or `"transparent"` |
| `Data` | `Uint8Array` , SDK 50+ |

Similarly, some common Android types from packages like `java.io`, `java.net`, or `android.graphics` are also made convertible.

> **Note:** On Android, primitive arrays should be used whenever possible.

| Native Android Type | TypeScript |
| --- | --- |
| `java.net.URL` | `string` with a URL. Note that the scheme has to be provided (URL should not contain any unencoded `%` character) |
| `android.net.Uri``java.net.URI` | `string` with a URI. Note that the scheme has to be provided (URI should not contain any unencoded `%` character) |
| `java.io.File``java.nio.file.Path` (is only available on Android API 26) | `string` with a path to the file |
| `android.graphics.Color` | Color hex strings (`#RRGGBB`, `#RRGGBBAA`, `#RGB`, `#RGBA`), named colors following the [CSS3/SVG specification](https://www.w3.org/TR/css-color-3/#svg-color) or `"transparent"` |
| `kotlin.Pair<A, B>` | Array with two values, where the first one is of type *A* and the second is of type *B* |
| `kotlin.ByteArray` | `Uint8Array` , SDK 50+ |
| `kotlin.BooleanArray` | `boolean[]` |
| `kotlin.IntArray``kotlin.FloatArray``kotlin.LongArray``kotlin.DoubleArray` | `number[]` |
| `kotlin.time.Duration` | `number` represents a duration in seconds , SDK 52+ |

### `Records`

*Record* is a convertible type and an equivalent of the dictionary (Swift) or map (Kotlin), but represented as a struct where each field can have its type and provide a default value. It is a better way to represent a JavaScript object with the native type safety.

```swift
struct FileReadOptions: Record {
  @Field
  var encoding: String = "utf8"

  @Field
  var position: Int = 0

  @Field
  var length: Int?
}

// Now this record can be used as an argument of the functions or the view prop setters.
Function("readFile") { (path: String, options: FileReadOptions) -> String in
  // Read the file using given `options`
}
```

```kotlin
class FileReadOptions : Record {
  @Field
  val encoding: String = "utf8"

  @Field
  val position: Int = 0

  @Field
  val length: Int? = null
}

// Now this record can be used as an argument of the functions or the view prop setters.
Function("readFile") { path: String, options: FileReadOptions ->
  // Read the file using given `options`
}
```

### `Formatter`

> **This feature is experimental.**

The Formatter API allows you to customize how a Record is serialized when returned from a native function. This is useful when you need to transform property values before sending them to JavaScript, or conditionally exclude certain properties from the output.

#### Operations

- **map**: Transform a property's value before serialization.
- **skip**: Exclude a property from the output entirely.

#### Basic usage

```swift
struct UserInfo: Record {
  @Field var id: Int = 0
  @Field var email: String = ""
  @Field var password: String = ""
}

Function("getUser") {
  let user = UserInfo(id: 1, email: "user@example.com", password: "secret123")

  // Return user without exposing the password
  return user.format { formatter in
    formatter.property("password", keyPath: \.password).skip()
  }
}
```

```kotlin
class UserInfo(
  @Field val id: Int = 0,
  @Field val email: String = "",
  @Field val password: String = ""
) : Record

Function("getUser") {
  val user = UserInfo(id = 1, email = "user@example.com", password = "secret123")

  // Return user without exposing the password
  formatter {
    property(UserInfo::password).skip()
  }.format(user)
}
```

```js
const user = MyModule.getUser();
console.log(user);
// Output: { id: 1, email: "user@example.com" }
// Note: password is not present in the object
```

#### Transforming values with `map`

Use `map` to transform property values before they are sent to JavaScript:

```swift
struct Product: Record {
  @Field var name: String = ""
  @Field var price: Double = 0.0
}

Function("getProduct") {
  let product = Product(name: "Widget", price: 19.99)

  return product.format { formatter in
    // Transform price to include currency symbol
    formatter.property("price", keyPath: \.price).map { value in
      "$\(String(format: "%.2f", value))"
    }
  }
}
```

```kotlin
class Product(
  @Field val name: String = "",
  @Field val price: Double = 0.0
) : Record

Function("getProduct") {
  val product = Product(name = "Widget", price = 19.99)

  formatter {
    // Transform price to include currency symbol
    property(Product::price).map { value ->
      "${"$"}${String.format("%.2f", value)}"
    }
  }.format(product)
}
```

#### Conditional skipping

You can conditionally skip properties based on their values or the record's state:

```swift
struct Settings: Record {
  @Field var theme: String = "light"
  @Field var debugMode: Bool = false
  @Field var apiKey: String? = nil
}

Function("getSettings") {
  let settings = Settings(theme: "dark", debugMode: true, apiKey: "secret")

  return settings.format { formatter in
    // Skip apiKey if nil
    formatter.property("apiKey", keyPath: \.apiKey).skip { value in
      value == nil
    }
  }
}
```

```kotlin
class Settings(
  @Field val theme: String = "light",
  @Field val debugMode: Boolean = false,
  @Field val apiKey: String? = null
) : Record

Function("getSettings") {
  val settings = Settings(theme = "dark", debugMode = true, apiKey = "secret")

  formatter {
    // Skip apiKey if null
    property(Settings::apiKey).skip { value ->
      value == null
    }
  }.format(settings)
}
```

#### Chaining operations

You can chain multiple operations on the same property:

```swift
struct Data: Record {
  @Field var value: Int? = nil
}

Function("getData") {
  let data = Data(value: nil)

  return data.format { formatter in
    formatter.property("value", keyPath: \.value)
      .map { $0 ?? 0 }  // Default to 0 if nil
      .map { $0 * 2 }   // Double the value
  }
}
```

```kotlin
class Data(
  @Field val value: Int? = null
) : Record

Function("getData") {
  val data = Data(value = null)

  formatter {
    property(Data::value)
      .map { it ?: 0 }  // Default to 0 if null
      .map { it * 2 }   // Double the value
  }.format(data)
}
```

### `Enums`

With enums, we can go even further with the above example (with `FileReadOptions` record) and limit supported encodings to `"utf8"` and `"base64"`. To use an enum as an argument or record field, it must represent a primitive value (for example, `String`, `Int`) and conform to `Enumerable`.

```swift
enum FileEncoding: String, Enumerable {
  case utf8
  case base64
}

struct FileReadOptions: Record {
  @Field
  var encoding: FileEncoding = .utf8
  ... 
}
```

```kotlin
// Note: the constructor must have an argument called value.
enum class FileEncoding(val value: String) : Enumerable {
  utf8("utf8"),
  base64("base64")
}

class FileReadOptions : Record {
  @Field
  val encoding: FileEncoding = FileEncoding.utf8
  ... 
}
```

### `Eithers`

There are some use cases where you want to pass various types for a single function argument. This is where Either types might come in handy. They act as a container for a value of one of a couple of types.

```swift
Function("foo") { (bar: Either<String, Int>) in
  if let bar: String = bar.get() {
    // `bar` is a String
  }
  if let bar: Int = bar.get() {
    // `bar` is an Int
  }
}
```

```kotlin
Function("foo") { bar: Either<String, Int> ->
  bar.get(String::class).let {
    // `it` is a String
  }
  bar.get(Int::class).let {
    // `it` is an Int
  }
}
```

The implementation for three Either types is currently provided out of the box, allowing you to use up to four different subtypes.

- `Either<FirstType, SecondType>` — A container for one of two types.
- `EitherOfThree<FirstType, SecondType, ThirdType>` — A container for one of three types.
- `EitherOfFour<FirstType, SecondType, ThirdType, FourthType>` — A container for one of four types.

### `ValueOrUndefined`

> **This feature is experimental.**

`ValueOrUndefined` is a wrapper type that allows you to distinguish between a JavaScript `undefined` value and an actual value.

With regular optional types, both `undefined` and `null` from JavaScript are converted to `null` on the native side, making it impossible to tell them apart. `ValueOrUndefined` solves this by preserving the distinction.

#### Properties

### `isUndefined`

Returns `true` if the JavaScript value was `undefined`, `false` otherwise.

Returns: `Bool`

### `optional`

Returns the unwrapped value if present, or `null` if the value was `undefined`.

Returns: `InnerType?`

```swift
Function("configure") { (timeout: ValueOrUndefined<Int>) in
  if timeout.isUndefined {
    // Argument was not provided, use default behavior
  } else if let value = timeout.optional {
    // Argument was provided with a value
  }
}
```

```kotlin
Function("configure") { timeout: ValueOrUndefined<Int> ->
  if (timeout.isUndefined) {
    // Argument was not provided, use default behavior
  } else {
    timeout.optional?.let { value ->
      // Argument was provided with a value
    }
  }
}
```

#### Distinguishing `undefined` from `null`

When using `ValueOrUndefined` with an optional inner type, you can distinguish between three states:

```swift
Function("setName") { (name: ValueOrUndefined<String?>) in
  switch name {
  case .undefined:
    // name argument was not provided
    break
  case .value(let unwrapped) where unwrapped == nil:
    // name was explicitly set to null
    break
  case .value(let unwrapped):
    // name was set to a string value
    print("Name: \(unwrapped!)")
  }
}
```

```kotlin
Function("setName") { name: ValueOrUndefined<String?> ->
  when {
    name.isUndefined -> {
      // name argument was not provided
    }
    name.optional == null -> {
      // name was explicitly set to null
    }
    else -> {
      // name was set to a string value
      println("Name: ${name.optional}")
    }
  }
}
```

```js
import { requireNativeModule } from 'expo-modules-core';

const MyModule = requireNativeModule('MyModule');

MyModule.setName('Alice'); // name is a value
MyModule.setName(null); // name is null (but not undefined)
MyModule.setName(undefined); // name is undefined
```

### `JavaScript values`

It's also possible to use a `JavaScriptValue` type which is a holder for any value that can be represented in JavaScript. This type is useful when you want to mutate the given argument or when you want to omit type validations and conversions. Note that using JavaScript-specific types is restricted to synchronous functions as all reads and writes in the JavaScript runtime must happen on the JavaScript thread. Any access to these values from different threads will result in a crash.

In addition to the raw value, the `JavaScriptObject` type can be used to allow only object types and `JavaScriptFunction<ReturnType>` for callbacks.

```swift
Function("mutateMe") { (value: JavaScriptValue) in
  if value.isObject() {
    let jsObject = value.getObject()
    jsObject.setProperty("expo", value: "modules")
  }
}

// or

Function("mutateMe") { (jsObject: JavaScriptObject) in
  jsObject.setProperty("expo", value: "modules")
}
```

```kotlin
Function("mutateMe") { value: JavaScriptValue ->
  if (value.isObject()) {
    val jsObject = value.getObject()
    jsObject.setProperty("expo", "modules")
  }
}

// or

Function("mutateMe") { jsObject: JavaScriptObject ->
  jsObject.setProperty("expo", "modules")
}
```
