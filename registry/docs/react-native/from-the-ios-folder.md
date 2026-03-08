# from the ios folder

bundle exec pod install
open SampleApp.xcworkspace

```

If you now build your application from Xcode, you should be able to build successfully.

## 5. Testing your Code[​](#5-testing-your-code "Direct link to 5. Testing your Code")

It's now time to access our C++ Turbo Native Module from JS. To do so, we have to modify the `App.tsx` file to import the Turbo Native Module and to call it in our code.

1. Open the `App.tsx` file.
2. Replace the content of the template with the following code:

App.tsx

```

import React from 'react';
import {
Button,
SafeAreaView,
StyleSheet,
Text,
TextInput,
View,
} from 'react-native';
import SampleTurboModule from './specs/NativeSampleModule';

function App(): React.JSX.Element {
const \[value, setValue] = React.useState('');
const \[reversedValue, setReversedValue] = React.useState('');

const onPress = () => {
const revString = SampleTurboModule.reverseString(value);
setReversedValue(revString);
};

return (

```
      Welcome to C++ Turbo Native Module Example
    
    Write down here the text you want to reverse
    <TextInput
      style={styles.textInput}
      placeholder="Write your text here"
      onChangeText={setValue}
      value={value}
    />
    
    Reversed text: {reversedValue}
  
```

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
title: {
fontSize: 18,
marginBottom: 20,
},
textInput: {
borderColor: 'black',
borderWidth: 1,
borderRadius: 5,
padding: 10,
marginTop: 10,
},
});

export default App;

```

The interesting lines in this app are:

* `import SampleTurboModule from './specs/NativeSampleModule';`: this line imports the Turbo Native Module in the app,
* `const revString = SampleTurboModule.reverseString(value);` in the `onPress` callback: this is how you can use the Turbo Native Module in your app.

warning

For the sake of this example and to keep it as short as possible, we directly imported the spec file in our app. The best practice in this case is to create a separate file to wrap the specs and use that file into your application. This allows you to prepare the input for the specs and gives you more control over them in JS.

Congratulations, you wrote your first C++ Turbo Native Module!

| Android                                                 | iOS                                             |
| ------------------------------------------------------- | ----------------------------------------------- |
| ![Android Video](/docs/assets/CxxGuideAndroidVideo.gif) | ![iOS video](/docs/assets/CxxGuideIOSVideo.gif) |


---

# iOS - Using Swift in Your Native Modules

Swift is the official and default language for developing native application on iOS.

In this guide, you will explore how you can write your Native Modules using Swift.

note

The core of React Native is mainly written in C++ and the interoperability between Swift and C++ is not great, despite the [interoperability layer](https://www.swift.org/documentation/cxx-interop/) developed by Apple.

Therefore, the module you are going to write in this guide won't be a pure Swift implementation due to the incompatibilities between the languages. You'll have to write some Objective-C++ glue code but the goal of the guide is to minimize the amount of Objective-C++ code that is needed. If you are migrating an existing Native Modules from the legacy architecture to the New Architecture, this approach should allow you to reuse most of the code.

This guide starts from the iOS implementation of the [Native Module](/docs/next/turbo-native-modules-introduction) guide. Make sure to be familiar with that guide before diving into this one, potentially implementing the example in the guide.

## The Adapter pattern[​](#the-adapter-pattern "Direct link to The Adapter pattern")

The goal is to implement all our business logic using a Swift module and have a thin glue layer in Objective-C++ that is able to connect the app with the Swift implementation.

You can achieve this by leveraging the [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern) design pattern, to connect the Swift Module with the Objective-C++ layer.

The Objective-C++ object is created by React Native and it keeps a reference to the Swift module, handling its lifecycle. The Objective-C++ object forwards to the all the methods invocation to Swift.

### Creating the Swift Module[​](#creating-the-swift-module "Direct link to Creating the Swift Module")

The first step is to move the implementation from the Objective-C++ layer to the Swift Layer.

To achieve that, please follow these steps:

1. Create a new empty file in the Xcode project, and call it `NativeLocalStorage.swift`
2. Add the implementation in your Swift module like it follows:

NativeLocalStorage.swift

```

import Foundation

@objcMembers public class NativeLocalStorage: NSObject {
let userDefaults = UserDefaults(suiteName: "local-storage");

public func getItem(for key: String) -> String? {
return userDefaults?.string(forKey: key)
}

public func setItem(for key: String, value: String) {
userDefaults?.set(value, forKey: key)
}

public func removeItem(for key: String) {
userDefaults?.removeObject(forKey: key)
}

public func clear() {
userDefaults?.dictionaryRepresentation().keys.forEach { removeItem(for: $0) }
}
}

```

Notice that you have to declare all the methods that you need to call from Objective-C as `public` and with the `@objc` annotation. Remember also to make your class inherit from `NSObject`, otherwise it would not be possible to use it from Objective-C.

### Update the `RCTNativeLocalStorage` file[​](#update-the-rctnativelocalstorage-file "Direct link to update-the-rctnativelocalstorage-file")

Then, you need to update the implementation of the `RCTNativeLocalStorage` to be able to create the Swift module and to call its methods.

1. Open the `RCTNativeLocalStorage.mm` file
2. Update it as it follows:

RCTNativeLocalStorage.mm

```

//  RCTNativeLocalStorage.m
//  TurboModuleExample

\#import "RCTNativeLocalStorage.h"
+#import "SampleApp-Swift.h"

- static NSString \*const RCTNativeLocalStorageKey = @"local-storage";

-@interface RCTNativeLocalStorage()
-@property (strong, nonatomic) NSUserDefaults \*localStorage;
-@end

-@implementation RCTNativeLocalStorage
+@implementation RCTNativeLocalStorage {

- NativeLocalStorage \*storage;
  +}

-RCT\_EXPORT\_MODULE(NativeLocalStorage)

- (id) init {
  if (self = \[super init]) {
- \_localStorage = \[\[NSUserDefaults alloc] initWithSuiteName:RCTNativeLocalStorageKey];

* storage = \[NativeLocalStorage new];
  }
  return self;
  }

- (std::shared\_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make\_shared<facebook::react::NativeLocalStorageSpecJSI>(params);
  }

- (NSString \* \_Nullable)getItem:(NSString \*)key {

- return \[self.localStorage stringForKey:key];

* return \[storage getItemFor:key];
  }

- (void)setItem:(NSString \*)value key:(NSString \*)key {
- \[self.localStorage setObject:value forKey:key];

* \[storage setItemFor:key value:value];
  }

- (void)removeItem:(NSString \*)key {
- \[self.localStorage removeObjectForKey:key];

* \[storage removeItemFor:key];
  }

- (void)clear {
- NSDictionary \*keys = \[self.localStorage dictionaryRepresentation];
- for (NSString \*key in keys) {
- ```
  [self removeItem:key];
  ```
- }

* \[storage clear];
  }

\++ (NSString \*)moduleName
+{

- return @"NativeLocalStorage";
  +}

@end

```

The code is not really changed. Instead of creating a reference to the `NSUserDefaults` directly, you create a new `NativeLocalStorage` using the swift implementation and, whenever a native module function is invoked, the invocation is forwarded to the `NativeLocalStorage` implemented in Swift.

Remember to import the `"SampleApp-Swift.h"` header. This is a header automatically generated by Xcode which contains the public API of your Swift files, in a format that is consumable by Objective-C. The `SampleApp` part of the header is actually your App name, so if you created the app with a name that is **different** from `SampleApp`, you'll have to change it.

Note also that the `RCT_EXPORT_MODULE` macro is not required anymore, because native modules are registered using the `package.json` as described [here](/docs/next/turbo-native-modules-introduction?platforms=ios#register-the-native-module-in-your-app).

This approach introduces a bit of code duplication in the interfaces, but it allows you to reuse the Swift code you may already have in your codebase, with little extra effort.

### Implementing the Bridging Header[​](#implementing-the-bridging-header "Direct link to Implementing the Bridging Header")

note

If you are a library author, developing a native module that is going to be distributed as a separate library, this step is not required.

The last required step to connect the Swift code with the Objective-C++ counterpart is a bridging header.

A bridging header is an header where you can import all the Objective-C header files that needs to be visible by your swift code.

You might already have a bridging header in your codebase, but in case you haven't, you can create a new one by following these steps:

1. In Xcode, create a new file and call it `"SampleApp-Bridging-Header.h"`
2. Update the content of the `"SampleApp-Bridging-Header.h"` like this:

SampleApp-Bridging-Header.h

```

//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

- \#import \<React-RCTAppDelegate/RCTDefaultReactNativeFactoryDelegate.h>

```

3. Link the Bridging header in your project:

   <!-- -->

   1. In the project navigator, select your app name (`SampleApp`, on the left)
   2. Click on `Build Settings`
   3. Filter for `"Bridging Header"`
   4. Add the relative path to the "Bridging Header", in the example it is `SampleApp-Bridging-Header.h`

![Bridging Header](/assets/images/BridgingHeader-9e80996731bb512e28b1478f6d8b7a79.png)

## Build and Run Your App[​](#build-and-run-your-app "Direct link to Build and Run Your App")

Now you can follow the last step of the [Native Module's guide](/docs/turbo-native-modules-introduction.md#build-and-run-your-code-on-a-simulator) and you should see your app running with a Native Module written in Swift.


---

# Using Codegen

This guide teaches how to:

* Configure **Codegen**.
* Invoke it manually for each platform.

It also describes the generated code.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

You always need a React Native app to generate the code properly, even when invoking the **Codegen** manually.

The **Codegen** process is tightly coupled with the build of the app, and the scripts are located in the `react-native` NPM package.

For the sake of this guide, create a project using the React Native CLI as follows:

shell

```

npx @react-native-community/cli@latest init SampleApp --version 0.84

```

**Codegen** is used to generate the glue-code for your custom modules or components. See the guides for Turbo Native Modules and Fabric Native Components for more details on how to create them.

## Configuring **Codegen**[​](#configuring-codegen "Direct link to configuring-codegen")

**Codegen** can be configured in your app by modifying the `package.json` file. **Codegen** is controlled by a custom field called `codegenConfig`.

package.json

```

"codegenConfig": {
"name": "",
"type": "",
"jsSrcsDir": "\<source\_dir>",
"android": {
"javaPackageName": "\<java.package.name>"
},
"ios": {
"modules": {
"TestModule": {
"className": "<iOS-class-implementing-the-RCTModuleProvider-protocol>",
"unstableRequiresMainQueueSetup": false,
"conformsToProtocols": \["RCTImageURLLoader", "RCTURLRequestHandler", "RCTImageDataDecoder"],
}
},
"components": {
"TestComponent": {
"className": "<iOS-class-implementing-the-component>"
}
}
}
},

```

You can add this snippet to your app and customize the various fields:

* `name:` Name of the codegen config. This will customize the codegen output: the filenames, and the code.

* `type:`

  * `modules:` Only generate code for modules.
  * `components:` Only generate code for components.
  * `all`: Generate code for everything.

* `jsSrcsDir`: The root folder where all your specs live.

* `android`: Codegen configuration for Android (all optional):
  <!-- -->
  * `.javaPackageName`: Configure the package name of the Android Java codegen output.

* `ios`: Codegen configuration for iOS (all optional):

  <!-- -->

  * `.modules[moduleName]:`

    * `.className`: This module's ObjC class. Or, if it's a [C++-only module](/docs/next/the-new-architecture/pure-cxx-modules), its `RCTModuleProvider` class.
    * `.unstableRequiresMainQueueSetup`: Initialize this module on the UI Thread, before running any JavaScript.
    * `.conformsToProtocols`: Annotate which of these protocols this module conforms to any of the following protocols: [`RCTImageURLLoader`](https://github.com/facebook/react-native/blob/00d5caee9921b6c10be8f7d5b3903c6afe8dbefa/packages/react-native/Libraries/Image/RCTImageURLLoader.h#L26-L81), [`RCTURLRequestHandler`](https://github.com/facebook/react-native/blob/00d5caee9921b6c10be8f7d5b3903c6afe8dbefa/packages/react-native/React/Base/RCTURLRequestHandler.h#L11-L52), [`RCTImageDataDecoder`](https://github.com/facebook/react-native/blob/00d5caee9921b6c10be8f7d5b3903c6afe8dbefa/packages/react-native/Libraries/Image/RCTImageDataDecoder.h#L15-L53).

  * `.components[componentName]`:
    <!-- -->
    * `.className`: This component's ObjC class (e.g: `TextInput` -> `RCTTextInput`).

When **Codegen** runs, it searches among all the dependencies of the app, looking for JS files that respects some specific conventions, and it generates the required code:

* Turbo Native Modules require that the spec files are prefixed with `Native`. For example, `NativeLocalStorage.ts` is a valid name for a spec file.
* Native Fabric Components require that the spec files are suffixed with `NativeComponent`. For example, `WebViewNativeComponent.ts` is a valid name for a spec file.

## Running **Codegen**[​](#running-codegen "Direct link to running-codegen")

The rest of this guide assumes that you have a Native Turbo Module, a Native Fabric Component or both already set up in your project. We also assume that you have valid specification files in the `jsSrcsDir` specified in the `package.json`.

### Android[​](#android "Direct link to Android")

**Codegen** for Android is integrated with the React Native Gradle Plugin (RNGP). The RNGP contains a task that can be invoked that reads the configurations defined in the `package.json` file and execute **Codegen**. To run the gradle task, first navigate inside the `android` folder of your project. Then run:

bash

```

./gradlew generateCodegenArtifactsFromSchema

```

This task invokes the `generateCodegenArtifactsFromSchema` command on all the imported projects of the app (the app and all the node modules which are linked to it). It generates the code in the corresponding `node_modules/<dependency>` folder. For example, if you have a Fabric Native Component whose Node module is called `my-fabric-component`, the generated code is located in the `SampleApp/node_modules/my-fabric-component/android/build/generated/source/codegen` path. For the app, the code is generated in the `android/app/build/generated/source/codegen` folder.

#### The Generated Code[​](#the-generated-code "Direct link to The Generated Code")

After running the gradle command above, you will find the codegen code in the `SampleApp/android/app/build` folder. The structure will look like this:

```

build
└── generated
└── source
└── codegen
├── java
│   └── com
│       ├── facebook
│       │   └── react
│       │       └── viewmanagers
│       │           ├── ManagerDelegate.java
│       │           └── ManagerInterface.java
│       └── sampleapp
│           └── NativeLocalStorageSpec.java
├── jni
│   ├── \<codegenConfig.name>-generated.cpp
│   ├── \<codegenConfig.name>.h
│   ├── CMakeLists.txt
│   └── react
│       └── renderer
│           └── components
│               └── \<codegenConfig.name>
│                   ├── \<codegenConfig.name>JSI-generated.cpp
│                   ├── \<codegenConfig.name>.h
│                   ├── ComponentDescriptors.cpp
│                   ├── ComponentDescriptors.h
│                   ├── EventEmitters.cpp
│                   ├── EventEmitters.h
│                   ├── Props.cpp
│                   ├── Props.h
│                   ├── ShadowNodes.cpp
│                   ├── ShadowNodes.h
│                   ├── States.cpp
│                   └── States.h
└── schema.json

```

The generated code is split in two folders:

* `java` which contains the platform specific code
* `jni` which contains the C++ code required to let JS and Java interact correctly.

In the `java` folder, you can find the Fabric Native component generated code in the `com/facebook/viewmanagers` subfolder.

* the `<nativeComponent>ManagerDelegate.java` contains the methods that the `ViewManager` can call on the custom Native Component
* the `<nativeComponent>ManagerInterface.java` contains the interface of the `ViewManager`.

In the folder whose name was set up in the `codegenConfig.android.javaPackageName`, instead, you can find the abstract class that a Turbo Native Module has to implement to carry out its tasks.

In the `jni` folder, finally, there is all the boilerplate code to connect JS to Android.

* `<codegenConfig.name>.h` this contains the interface of your custom C++ Turbo Native Modules.
* `<codegenConfig.name>-generated.cpp` this contains the glue code of your custom C++ Turbo Native Modules.
* `react/renderer/components/<codegenConfig.name>`: this folder contains all the glue-code required by your custom component.

This structure has been generated by using the value `all` for the `codegenConfig.type` field. If you use the value `modules`, expect to see no `react/renderer/components/` folder. If you use the value `components`, expect not to see any of the other files.

### iOS[​](#ios "Direct link to iOS")

**Codegen** for iOS relies on some Node scripts that are invoked during the build process. The scripts are located in the `SampleApp/node_modules/react-native/scripts/` folder.

The main script is the `generate-codegen-artifacts.js` script. To invoke the script, you can run this command from the root folder of your app:

bash

```

node node\_modules/react-native/scripts/generate-codegen-artifacts.js

Usage: generate-codegen-artifacts.js -p \[path to app] -t \[target platform] -o \[output path]

Options:
\--help            Show help                                      \[boolean]
\--version         Show version number                            \[boolean]
-p, --path            Path to the React Native project root.        \[required]
-t, --targetPlatform  Target platform. Supported values: "android", "ios",
"all".                                        \[required]
-o, --outputPath      Path where generated artifacts will be output to.

```

where:

* `--path` is the path to the root folder of your app.
* `--outputPath` is the destination where **Codegen** will write the generated files.
* `--targetPlatform` is the platform you'd like to generate the code for.

#### The Generated Code[​](#the-generated-code-1 "Direct link to The Generated Code")

Running the script with these arguments:

shell

```

node node\_modules/react-native/scripts/generate-codegen-artifacts.js \
\--path . \
\--outputPath ios/ \
\--targetPlatform ios

```

Will generate these files in the `ios/build` folder:

```

build
└── generated
└── ios
├── \<codegenConfig.name>
│   ├── \<codegenConfig.name>-generated.mm
│   └── \<codegenConfig.name>.h
├── \<codegenConfig.name>JSI-generated.cpp
├── \<codegenConfig.name>JSI.h
├── FBReactNativeSpec
│   ├── FBReactNativeSpec-generated.mm
│   └── FBReactNativeSpec.h
├── FBReactNativeSpecJSI-generated.cpp
├── FBReactNativeSpecJSI.h
├── RCTModulesConformingToProtocolsProvider.h
├── RCTModulesConformingToProtocolsProvider.mm
└── react
└── renderer
└── components
└── \<codegenConfig.name>
├── ComponentDescriptors.cpp
├── ComponentDescriptors.h
├── EventEmitters.cpp
├── EventEmitters.h
├── Props.cpp
├── Props.h
├── RCTComponentViewHelpers.h
├── ShadowNodes.cpp
├── ShadowNodes.h
├── States.cpp
└── States.h

```

Part of these generated files are used by React Native in the Core. Then there is a set of files which contains the same name you specified in the package.json `codegenConfig.name` field.

* `<codegenConfig.name>/<codegenConfig.name>.h`: this contains the interface of your custom iOS Turbo Native Modules.
* `<codegenConfig.name>/<codegenConfig.name>-generated.mm`: this contains the glue code of your custom iOS Turbo Native Modules.
* `<codegenConfig.name>JSI.h`: this contains the interface of your custom C++ Turbo Native Modules.
* `<codegenConfig.name>JSI-generated.h`: this contains the glue code of your custom C++ Turbo Native Modules.
* `react/renderer/components/<codegenConfig.name>`: this folder contains all the glue-code required by your custom component.

This structure has been generated by using the value `all` for the `codegenConfig.type` field. If you use the value `modules`, expect to see no `react/renderer/components/` folder. If you use the value `components`, expect not to see any of the other files.


---

# What is Codegen?

**Codegen** is a tool to avoid writing a lot of repetitive code. Using Codegen **is not mandatory**: you can write all the generated code manually. However, Codegen generates scaffolding code that could save you a lot of time.

React Native invokes Codegen automatically every time an iOS or Android app is built. Occasionally, you would like to manually run the Codegen scripts to know which types and files are actually generated: this is a common scenario when developing [Turbo Native Modules](/docs/turbo-native-modules-introduction.md) and Fabric Native Components.

## How Codegen Works[​](#how-codegen-works "Direct link to How Codegen Works")

**Codegen** is a process that is tightly coupled with a React Native app. The Codegen scripts live inside the `react-native` NPM package and the apps call those scripts at build time.

Codegen crawls the folders in your project, starting from a directory you specify in your `package.json`, looking for some specific JS files that contain the specification (or specs) for your custom modules and components. Spec files are JS files written in a typed dialect: React Native currently supports Flow and TypeScript.

Every time Codegen finds a spec file, it generates boilerplate code associated with it. Codegen generates some C++ glue-code and then it generates platform-specific code, using Java for Android and Objective-C++ for iOS.


---

# ❌ TimePickerAndroid

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=timepicker) instead.


---

# Timers

Timers are an important part of an application and React Native implements the [browser timers](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals).

## Timers[​](#timers "Direct link to Timers")

* `setTimeout` and `clearTimeout`
* `setInterval` and `clearInterval`
* `setImmediate` and `clearImmediate`
* `requestAnimationFrame` and `cancelAnimationFrame`

`requestAnimationFrame(fn)` is not the same as `setTimeout(fn, 0)` - the former will fire after all the frames have flushed, whereas the latter will fire as quickly as possible (over 1000x per second on a iPhone 5S).

`setImmediate` is executed at the end of the current JavaScript execution block, right before sending the batched response back to native. Note that if you call `setImmediate` within a `setImmediate` callback, it will be executed right away, it won't yield back to native in between.

The `Promise` implementation uses `setImmediate` as its asynchronicity implementation.

note

When debugging on Android, if the times between the debugger and device have drifted; things such as animation, event behavior, etc., might not work properly or the results may not be accurate. Please correct this by running ``adb shell "date `date +%m%d%H%M%Y.%S%3N`"`` on your debugger machine. Root access is required for the use in real device.

## InteractionManager[​](#interactionmanager "Direct link to InteractionManager")

Deprecated

The `InteractionManager` behavior has been changed to be the same as `setImmediate`, which should be used instead.

One reason why well-built native apps feel so smooth is by avoiding expensive operations during interactions and animations. In React Native, we currently have a limitation that there is only a single JS execution thread, but you can use `InteractionManager` to make sure long-running work is scheduled to start after any interactions/animations have completed.

Applications can schedule tasks to run after interactions with the following:

tsx

```

InteractionManager.runAfterInteractions(() => {
// ...long-running synchronous task...
});

```

Compare this to other scheduling alternatives:

* requestAnimationFrame(): for code that animates a view over time.
* setImmediate/setTimeout/setInterval(): run code later, note this may delay animations.
* runAfterInteractions(): run code later, without delaying active animations.

The touch handling system considers one or more active touches to be an 'interaction' and will delay `runAfterInteractions()` callbacks until all touches have ended or been cancelled.

`InteractionManager` also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:

tsx

```

const handle = InteractionManager.createInteractionHandle();
// run animation... (`runAfterInteractions` tasks are queued)
// later, on animation completion:
InteractionManager.clearInteractionHandle(handle);
// queued tasks run if all handles were cleared

```


---

# ToastAndroid

React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method `show(message, duration)` which takes the following parameters:

* *message* A string with the text to toast
* *duration* The duration of the toast—either `ToastAndroid.SHORT` or `ToastAndroid.LONG`

You can alternatively use `showWithGravity(message, duration, gravity)` to specify where the toast appears in the screen's layout. May be `ToastAndroid.TOP`, `ToastAndroid.BOTTOM` or `ToastAndroid.CENTER`.

The `showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)` method adds the ability to specify an offset with in pixels.

note

Starting with Android 11 (API level 30), setting the gravity has no effect on text toasts. Read about the changes [here](https://developer.android.com/about/versions/11/behavior-changes-11#text-toast-api-changes).

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `show()`[​](#show "Direct link to show")

tsx

```

static show(message: string, duration: number);

```

***

### `showWithGravity()`[​](#showwithgravity "Direct link to showwithgravity")

This property will only work on Android API 29 and below. For similar functionality on higher Android APIs, consider using snackbar or notification.

tsx

```

static showWithGravity(message: string, duration: number, gravity: number);

```

***

### `showWithGravityAndOffset()`[​](#showwithgravityandoffset "Direct link to showwithgravityandoffset")

This property will only work on Android API 29 and below. For similar functionality on higher Android APIs, consider using snackbar or notification.

tsx

```

static showWithGravityAndOffset(
message: string,
duration: number,
gravity: number,
xOffset: number,
yOffset: number,
);

```

## Properties[​](#properties "Direct link to Properties")

### `SHORT`[​](#short "Direct link to short")

Indicates the duration on the screen.

tsx

```

static SHORT: number;

```

***

### `LONG`[​](#long "Direct link to long")

Indicates the duration on the screen.

tsx

```

static LONG: number;

```

***

### `TOP`[​](#top "Direct link to top")

Indicates the position on the screen.

tsx

```

static TOP: number;

```

***

### `BOTTOM`[​](#bottom "Direct link to bottom")

Indicates the position on the screen.

tsx

```

static BOTTOM: number;

```

***

### `CENTER`[​](#center "Direct link to center")

Indicates the position on the screen.

tsx

```

static CENTER: number;

```


---

# TouchableHighlight

tip

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](/docs/pressable.md) API.

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.

The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.

TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.

tsx

```

function MyComponent(props: MyComponentProps) {
return (

```
  My Component
```

);
}

\<TouchableHighlight
activeOpacity={0.6}
underlayColor="#DDDDDD"
onPress={() => alert('Pressed!')}>

;

```

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [TouchableWithoutFeedback Props](/docs/touchablewithoutfeedback.md#props)[​](#touchablewithoutfeedback-props "Direct link to touchablewithoutfeedback-props")

Inherits [TouchableWithoutFeedback Props](/docs/touchablewithoutfeedback.md#props).

***

### `activeOpacity`[​](#activeopacity "Direct link to activeopacity")

Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires `underlayColor` to be set.

| Type   |
| ------ |
| number |

***

### `onHideUnderlay`[​](#onhideunderlay "Direct link to onhideunderlay")

Called immediately after the underlay is hidden.

| Type     |
| -------- |
| function |

***

### `onShowUnderlay`[​](#onshowunderlay "Direct link to onshowunderlay")

Called immediately after the underlay is shown.

| Type     |
| -------- |
| function |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

***

### `style`[​](#style "Direct link to style")

| Type        |
| ----------- |
| View\.style |

***

### `underlayColor`[​](#underlaycolor "Direct link to underlaycolor")

The color of the underlay that will show through when the touch is active.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `hasTVPreferredFocus`iOS[​](#hastvpreferredfocus-ios "Direct link to hastvpreferredfocus-ios")

*(Apple TV only)* TV preferred focus (see documentation for the View component).

| Type |
| ---- |
| bool |

***

### `nextFocusDown`Android[​](#nextfocusdown-android "Direct link to nextfocusdown-android")

TV next focus down (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusForward`Android[​](#nextfocusforward-android "Direct link to nextfocusforward-android")

TV next focus forward (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusLeft`Android[​](#nextfocusleft-android "Direct link to nextfocusleft-android")

TV next focus left (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusRight`Android[​](#nextfocusright-android "Direct link to nextfocusright-android")

TV next focus right (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusUp`Android[​](#nextfocusup-android "Direct link to nextfocusup-android")

TV next focus up (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `testOnly_pressed`[​](#testonly_pressed "Direct link to testonly_pressed")

Handy for snapshot tests.

| Type |
| ---- |
| bool |


---

# TouchableNativeFeedback

tip

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](/docs/pressable.md) API.

A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback.

At the moment it only supports having a single View instance as a child node, as it's implemented by replacing that View with another instance of RCTView node with some additional properties set.

Background drawable of native feedback touchable can be customized with `background` property.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [TouchableWithoutFeedback Props](/docs/touchablewithoutfeedback.md#props)[​](#touchablewithoutfeedback-props "Direct link to touchablewithoutfeedback-props")

Inherits [TouchableWithoutFeedback Props](/docs/touchablewithoutfeedback.md#props).

***

### `background`[​](#background "Direct link to background")

Determines the type of background drawable that's going to be used to display feedback. It takes an object with `type` property and extra data depending on the `type`. It's recommended to use one of the static methods to generate that dictionary.

| Type               |
| ------------------ |
| backgroundPropType |

***

### `useForeground`[​](#useforeground "Direct link to useforeground")

Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them.

Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background.

| Type |
| ---- |
| bool |

***

### `hasTVPreferredFocus`Android[​](#hastvpreferredfocus-android "Direct link to hastvpreferredfocus-android")

TV preferred focus (see documentation for the View component).

| Type |
| ---- |
| bool |

***

### `nextFocusDown`Android[​](#nextfocusdown-android "Direct link to nextfocusdown-android")

TV next focus down (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusForward`Android[​](#nextfocusforward-android "Direct link to nextfocusforward-android")

TV next focus forward (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusLeft`Android[​](#nextfocusleft-android "Direct link to nextfocusleft-android")

TV next focus left (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusRight`Android[​](#nextfocusright-android "Direct link to nextfocusright-android")

TV next focus right (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusUp`Android[​](#nextfocusup-android "Direct link to nextfocusup-android")

TV next focus up (see documentation for the View component).

| Type   |
| ------ |
| number |

## Methods[​](#methods "Direct link to Methods")

### `SelectableBackground()`[​](#selectablebackground "Direct link to selectablebackground")

tsx

```

static SelectableBackground(
rippleRadius: number | null,
): ThemeAttributeBackgroundPropType;

```

Creates an object that represents android theme's default background for selectable elements (`?android:attr/selectableItemBackground`). `rippleRadius` parameter controls the radius of the ripple effect.

***

### `SelectableBackgroundBorderless()`[​](#selectablebackgroundborderless "Direct link to selectablebackgroundborderless")

tsx

```

static SelectableBackgroundBorderless(
rippleRadius: number | null,
): ThemeAttributeBackgroundPropType;

```

Creates an object that represent android theme's default background for borderless selectable elements (`?android:attr/selectableItemBackgroundBorderless`). Available on android API level 21+. `rippleRadius` parameter controls the radius of the ripple effect.

***

### `Ripple()`[​](#ripple "Direct link to ripple")

tsx

```

static Ripple(
color: ColorValue,
borderless: boolean,
rippleRadius?: number | null,
): RippleBackgroundPropType;

```

Creates an object that represents ripple drawable with specified color (as a string). If property `borderless` evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+.

**Parameters:**

| Name         | Type    | Required | Description                                 |
| ------------ | ------- | -------- | ------------------------------------------- |
| color        | string  | Yes      | The ripple color                            |
| borderless   | boolean | Yes      | If the ripple can render outside its bounds |
| rippleRadius | ?number | No       | controls the radius of the ripple effect    |

***

### `canUseNativeForeground()`[​](#canusenativeforeground "Direct link to canusenativeforeground")

tsx

```

static canUseNativeForeground(): boolean;

```


---

# TouchableOpacity

tip

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](/docs/pressable.md) API.

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

Opacity is controlled by wrapping the children in an `Animated.View`, which is added to the view hierarchy. Be aware that this can affect layout.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [TouchableWithoutFeedback Props](/docs/touchablewithoutfeedback.md#props)[​](#touchablewithoutfeedback-props "Direct link to touchablewithoutfeedback-props")

Inherits [TouchableWithoutFeedback Props](/docs/touchablewithoutfeedback.md#props).

***

### `style`[​](#style "Direct link to style")

| Type                                    |
| --------------------------------------- |
| [View.style](/docs/view-style-props.md) |

***

### `activeOpacity`[​](#activeopacity "Direct link to activeopacity")

Determines what the opacity of the wrapped view should be when touch is active. Defaults to `0.2`.

| Type   |
| ------ |
| number |

***

### `hasTVPreferredFocus`iOS[​](#hastvpreferredfocus-ios "Direct link to hastvpreferredfocus-ios")

*(Apple TV only)* TV preferred focus (see documentation for the View component).

| Type |
| ---- |
| bool |

***

### `nextFocusDown`Android[​](#nextfocusdown-android "Direct link to nextfocusdown-android")

TV next focus down (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusForward`Android[​](#nextfocusforward-android "Direct link to nextfocusforward-android")

TV next focus forward (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusLeft`Android[​](#nextfocusleft-android "Direct link to nextfocusleft-android")

TV next focus left (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusRight`Android[​](#nextfocusright-android "Direct link to nextfocusright-android")

TV next focus right (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `nextFocusUp`Android[​](#nextfocusup-android "Direct link to nextfocusup-android")

TV next focus up (see documentation for the View component).

| Type   |
| ------ |
| number |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.


---

# TouchableWithoutFeedback

tip

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](/docs/pressable.md) API.

Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched.

`TouchableWithoutFeedback` supports only one child. If you wish to have several child components, wrap them in a View. Importantly, `TouchableWithoutFeedback` works by cloning its child and applying responder props to it. It is therefore required that any intermediary components pass through those props to the underlying React Native component.

## Usage Pattern[​](#usage-pattern "Direct link to Usage Pattern")

tsx

```

function MyComponent(props: MyComponentProps) {
return (

```
  My Component
```

);
}

alert('Pressed!')}>

;

```

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### `accessibilityIgnoresInvertColors`iOS[​](#accessibilityignoresinvertcolors-ios "Direct link to accessibilityignoresinvertcolors-ios")

A value indicating this view should or should not be inverted when color inversion is turned on. A value of `true` will tell the view to not be inverted even if color inversion is turned on.

See the [Accessibility guide](/docs/accessibility.md#accessibilityignoresinvertcolors) for more information.

| Type    |
| ------- |
| Boolean |

***

### `accessible`[​](#accessible "Direct link to accessible")

When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

| Type |
| ---- |
| bool |

***

### `accessibilityLabel`[​](#accessibilitylabel "Direct link to accessibilitylabel")

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space.

| Type   |
| ------ |
| string |

***

### `accessibilityLanguage`iOS[​](#accessibilitylanguage-ios "Direct link to accessibilitylanguage-ios")

A value indicating which language should be used by the screen reader when the user interacts with the element. It should follow the [BCP 47 specification](https://www.rfc-editor.org/info/bcp47).

See the [iOS `accessibilityLanguage` doc](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage) for more information.

| Type   |
| ------ |
| string |

***

### `accessibilityHint`[​](#accessibilityhint "Direct link to accessibilityhint")

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| Type   |
| ------ |
| string |

***

### `accessibilityRole`[​](#accessibilityrole "Direct link to accessibilityrole")

`accessibilityRole` communicates the purpose of a component to the user of an assistive technology.

`accessibilityRole` can be one of the following:

* `'none'` - Used when the element has no role.
* `'button'` - Used when the element should be treated as a button.
* `'link'` - Used when the element should be treated as a link.
* `'search'` - Used when the text field element should also be treated as a search field.
* `'image'` - Used when the element should be treated as an image. Can be combined with button or link, for example.
* `'keyboardkey'` - Used when the element acts as a keyboard key.
* `'text'` - Used when the element should be treated as static text that cannot change.
* `'adjustable'` - Used when an element can be "adjusted" (e.g. a slider).
* `'imagebutton'` - Used when the element should be treated as a button and is also an image.
* `'header'` - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).
* `'summary'` - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.
* `'alert'` - Used when an element contains important text to be presented to the user.
* `'checkbox'` - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
* `'combobox'` - Used when an element represents a combo box, which allows the user to select among several choices.
* `'menu'` - Used when the component is a menu of choices.
* `'menubar'` - Used when a component is a container of multiple menus.
* `'menuitem'` - Used to represent an item within a menu.
* `'progressbar'` - Used to represent a component which indicates progress of a task.
* `'radio'` - Used to represent a radio button.
* `'radiogroup'` - Used to represent a group of radio buttons.
* `'scrollbar'` - Used to represent a scroll bar.
* `'spinbutton'` - Used to represent a button which opens a list of choices.
* `'switch'` - Used to represent a switch which can be turned on and off.
* `'tab'` - Used to represent a tab.
* `'tablist'` - Used to represent a list of tabs.
* `'timer'` - Used to represent a timer.
* `'toolbar'` - Used to represent a tool bar (a container of action buttons or components).

| Type   |
| ------ |
| string |

***

### `accessibilityState`[​](#accessibilitystate "Direct link to accessibilitystate")

Describes the current state of a component to the user of an assistive technology.

See the [Accessibility guide](/docs/accessibility.md#accessibilitystate-ios-android) for more information.

| Type                                                                                             |
| ------------------------------------------------------------------------------------------------ |
| object: `{disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool}` |

***

### `accessibilityActions`[​](#accessibilityactions "Direct link to accessibilityactions")

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The `accessibilityActions` property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type  |
| ----- |
| array |

***

### `aria-busy`[​](#aria-busy "Direct link to aria-busy")

Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-checked`[​](#aria-checked "Direct link to aria-checked")

Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.

| Type             | Default |
| ---------------- | ------- |
| boolean, 'mixed' | false   |

***

### `aria-disabled`[​](#aria-disabled "Direct link to aria-disabled")

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-expanded`[​](#aria-expanded "Direct link to aria-expanded")

Indicates whether an expandable element is currently expanded or collapsed.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-hidden`[​](#aria-hidden "Direct link to aria-hidden")

Indicates whether the element is hidden from assistive technologies.

For example, in a window that contains sibling views `A` and `B`, setting `aria-hidden` to `true` on view `B` causes VoiceOver to ignore the `B` element and its children.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-label`[​](#aria-label "Direct link to aria-label")

Defines a string value that labels an interactive element.

| Type   |
| ------ |
| string |

***

### `aria-live`Android[​](#aria-live-android "Direct link to aria-live-android")

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

* **off** Accessibility services should not announce changes to this view.
* **polite** Accessibility services should announce changes to this view.
* **assertive** Accessibility services should interrupt ongoing speech to immediately announce changes to this view.

| Type                                     | Default |
| ---------------------------------------- | ------- |
| enum(`'assertive'`, `'off'`, `'polite'`) | `'off'` |

***

### `aria-modal`iOS[​](#aria-modal-ios "Direct link to aria-modal-ios")

Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Has precedence over the [`accessibilityViewIsModal`](#accessibilityviewismodal-ios) prop.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-selected`[​](#aria-selected "Direct link to aria-selected")

Indicates whether a selectable element is currently selected or not.

| Type    |
| ------- |
| boolean |

### `onAccessibilityAction`[​](#onaccessibilityaction "Direct link to onaccessibilityaction")

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type     |
| -------- |
| function |

***

### `accessibilityValue`[​](#accessibilityvalue "Direct link to accessibilityvalue")

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).

See the [Accessibility guide](/docs/accessibility.md#accessibilityvalue-ios-android) for more information.

| Type                                                            |
| --------------------------------------------------------------- |
| object: `{min: number, max: number, now: number, text: string}` |

***

### `aria-valuemax`[​](#aria-valuemax "Direct link to aria-valuemax")

Represents the maximum value for range-based components, such as sliders and progress bars. Has precedence over the `max` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| number |

***

### `aria-valuemin`[​](#aria-valuemin "Direct link to aria-valuemin")

Represents the minimum value for range-based components, such as sliders and progress bars. Has precedence over the `min` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| number |

***

### `aria-valuenow`[​](#aria-valuenow "Direct link to aria-valuenow")

Represents the current value for range-based components, such as sliders and progress bars. Has precedence over the `now` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| number |

***

### `aria-valuetext`[​](#aria-valuetext "Direct link to aria-valuetext")

Represents the textual description of the component. Has precedence over the `text` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| string |

***

### `delayLongPress`[​](#delaylongpress "Direct link to delaylongpress")

Duration (in milliseconds) from `onPressIn` before `onLongPress` is called.

| Type   |
| ------ |
| number |

***

### `delayPressIn`[​](#delaypressin "Direct link to delaypressin")

Duration (in milliseconds), from the start of the touch, before `onPressIn` is called.

| Type   |
| ------ |
| number |

***

### `delayPressOut`[​](#delaypressout "Direct link to delaypressout")

Duration (in milliseconds), from the release of the touch, before `onPressOut` is called.

| Type   |
| ------ |
| number |

***

### `disabled`[​](#disabled "Direct link to disabled")

If true, disable all interactions for this component.

| Type |
| ---- |
| bool |

***

### `hitSlop`[​](#hitslop "Direct link to hitslop")

This defines how far your touch can start away from the button. This is added to `pressRetentionOffset` when moving off of the button.

note

The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

| Type                            |
| ------------------------------- |
| [Rect](/docs/rect.md) or number |

### `id`[​](#id "Direct link to id")

Used to locate this view from native code. Has precedence over `nativeID` prop.

| Type   |
| ------ |
| string |

***

### `onBlur`[​](#onblur "Direct link to onblur")

Invoked when the item loses focus.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: TargetEvent}) => void` |

***

### `onFocus`[​](#onfocus "Direct link to onfocus")

Invoked when the item receives focus.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: TargetEvent}) => void` |

***

### `onLayout`[​](#onlayout "Direct link to onlayout")

Invoked on mount and on layout changes.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: LayoutEvent}) => void` |

***

### `onLongPress`[​](#onlongpress "Direct link to onlongpress")

Called if the time after `onPressIn` lasts longer than 370 milliseconds. This time period can be customized with [`delayLongPress`](#delaylongpress).

| Type     |
| -------- |
| function |

***

### `onPress`[​](#onpress "Direct link to onpress")

Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock). The first function argument is an event in form of [PressEvent](/docs/pressevent.md).

| Type     |
| -------- |
| function |

***

### `onPressIn`[​](#onpressin "Direct link to onpressin")

Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests. The first function argument is an event in form of [PressEvent](/docs/pressevent.md).

| Type     |
| -------- |
| function |

***

### `onPressOut`[​](#onpressout "Direct link to onpressout")

Called as soon as the touch is released even before onPress. The first function argument is an event in form of [PressEvent](/docs/pressevent.md).

| Type     |
| -------- |
| function |

***

### `pressRetentionOffset`[​](#pressretentionoffset "Direct link to pressretentionoffset")

When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.

| Type                            |
| ------------------------------- |
| [Rect](/docs/rect.md) or number |

***

### `nativeID`[​](#nativeid "Direct link to nativeid")

| Type   |
| ------ |
| string |

***

### `testID`[​](#testid "Direct link to testid")

Used to locate this view in end-to-end tests.

| Type   |
| ------ |
| string |

***

### `touchSoundDisabled`Android[​](#touchsounddisabled-android "Direct link to touchsounddisabled-android")

If true, doesn't play a system sound on touch.

| Type    |
| ------- |
| Boolean |


---

# Transforms

Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.

## Example[​](#example "Direct link to Example")

***

# Reference

## Transform[​](#transform "Direct link to Transform")

`transform` accepts an array of transformation objects or space-separated string values. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object.

The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:

js

```

{
transform: \[{rotateX: '45deg'}, {rotateZ: '0.785398rad'}],
}

```

The same could also be achieved using a space-separated string:

js

```

{
transform: 'rotateX(45deg) rotateZ(0.785398rad)',
}

```

The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:

js

```

{
transform: \[{skewX: '45deg'}],
}

```

### Matrix Transform[​](#matrix-transform "Direct link to Matrix Transform")

The `matrix` transform accepts a 4x4 transformation matrix as an array of 16 numbers. This allows you to apply complex transformations that combine translation, rotation, scaling, and skewing in a single operation.

The matrix is specified in column-major order:

js

```

{
transform: \[
{
matrix: \[
scaleX,
skewY,
0,
0,
skewX,
scaleY,
0,
0,
0,
0,
1,
0,
translateX,
translateY,
0,
1,
],
},
];
}

```

For example, to apply a combination of scale and skew:

js

```

{
transform: \[
{
matrix: \[
1, 0.5, 0, 0, 0.5, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
],
},
];
}

```

note

Matrix transforms are useful when you need to apply pre-calculated transformation matrices, such as those from animation libraries or when building UI editor applications. For basic transformations, it's recommended to use the individual transform properties (scale, rotate, translate, etc.) as they are more readable.

| Type                                                                                                                                                                                                                                                                                                          | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| array of objects: `{matrix: number[]}`, `{perspective: number}`, `{rotate: string}`, `{rotateX: string}`, `{rotateY: string}`, `{rotateZ: string}`, `{scale: number}`, `{scaleX: number}`, `{scaleY: number}`, `{translateX: number}`, `{translateY: number}`, `{skewX: string}`, `{skewY: string}` or string | No       |

***

### 🗑️ `decomposedMatrix`, `rotation`, `scaleX`, `scaleY`, `transformMatrix`, `translateX`, `translateY`[​](#️-decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey "Direct link to ️-decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey")

Deprecated

Use the [`transform`](/docs/transforms.md#transform) prop instead.

## Transform Origin[​](#transform-origin "Direct link to Transform Origin")

The `transformOrigin` property sets the origin for a view's transformations. The transform origin is the point around which a transformation is applied. By default, the origin of a transform is `center`.

# Example

### Values[​](#values "Direct link to Values")

Transform origin supports `px`, `percentage` and keywords `top`, `left`, `right`, `bottom`, `center` values.

The `transformOrigin` property may be specified using one, two, or three values, where each value represents an offset.

#### One-value syntax:[​](#one-value-syntax "Direct link to One-value syntax:")

* The value must be a `px`, a `percentage`, or one of the keywords `left`, `center`, `right`, `top`, and `bottom`.

js

```

{
transformOrigin: '20px',
transformOrigin: 'bottom',
}

```

#### Two-value syntax:[​](#two-value-syntax "Direct link to Two-value syntax:")

* First value (x-offset) must be a `px`, a `percentage`, or one of the keywords `left`, `center`, and `right`.
* The second value (y-offset) must be a `px`, a `percentage`, or one of the keywords `top`, `center`, and `bottom`.

js

```

{
transformOrigin: '10px 2px',
transformOrigin: 'left top',
transformOrigin: 'top right',
}

```

#### Three-value syntax:[​](#three-value-syntax "Direct link to Three-value syntax:")

* The first two values are the same as for the two-value syntax.
* The third value (z-offset) must be a `px`. It always represents the Z offset.

js

```

{
transformOrigin: '2px 30% 10px',
transformOrigin: 'right bottom 20px',
}

```

#### Array syntax[​](#array-syntax "Direct link to Array syntax")

`transformOrigin` also supports an array syntax. It makes it convenient to use it with Animated APIs. It also avoids string parsing, so should be more efficient.

js

```

{
// Using numeric values
transformOrigin: \[10, 30, 40],
// Mixing numeric and percentage values
transformOrigin: \[10, '20%', 0],
}

```

You may refer to MDN's guide on [Transform origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) for additional information.


---

# Troubleshooting

These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try [searching for the issue in GitHub](https://github.com/facebook/react-native/issues/).

### Port already in use[​](#port-already-in-use "Direct link to Port already in use")

The [Metro bundler](https://metrobundler.dev/) runs on port 8081. If another process is already using that port, you can either terminate that process, or change the port that the bundler uses.

#### Terminating a process on port 8081[​](#terminating-a-process-on-port-8081 "Direct link to Terminating a process on port 8081")

Run the following command to find the id for the process that is listening on port 8081:

shell

```

sudo lsof -i :8081

```

Then run the following to terminate the process:

shell

```

kill -9

```

On Windows you can find the process using port 8081 using [Resource Monitor](https://stackoverflow.com/questions/48198/how-can-you-find-out-which-process-is-listening-on-a-port-on-windows) and stop it using Task Manager.

#### Using a port other than 8081[​](#using-a-port-other-than-8081 "Direct link to Using a port other than 8081")

You can configure the bundler to use a port other than 8081 by using the `port` parameter, from the root of your project run:

* npm
* Yarn

shell

```

npm start -- --port=8088

```

shell

```

yarn start --port 8088

```

You will also need to update your applications to load the JavaScript bundle from the new port. If running on device from Xcode, you can do this by updating occurrences of `8081` to your chosen port in the `ios/__App_Name__.xcodeproj/project.pbxproj` file.

### NPM locking error[​](#npm-locking-error "Direct link to NPM locking error")

If you encounter an error such as `npm WARN locking Error: EACCES` while using the React Native CLI, try running the following:

shell

```

sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node\_modules

```

### Missing libraries for React[​](#missing-libraries-for-react "Direct link to Missing libraries for React")

If you added React Native manually to your project, make sure you have included all the relevant dependencies that you are using, like `RCTText.xcodeproj`, `RCTImage.xcodeproj`. Next, the binaries built by these dependencies have to be linked to your app binary. Use the `Linked Frameworks and Binaries` section in the Xcode project settings. More detailed steps are here: [Linking Libraries](/docs/linking-libraries-ios.md#content).

If you are using CocoaPods, verify that you have added React along with the subspecs to the `Podfile`. For example, if you were using the `<Text />`, `<Image />` and `fetch()` APIs, you would need to add these in your `Podfile`:

```

pod 'React', :path => '../node\_modules/react-native', :subspecs => \[
'RCTText',
'RCTImage',
'RCTNetwork',
'RCTWebSocket',
]

```

Next, make sure you have run `pod install` and that a `Pods/` directory has been created in your project with React installed. CocoaPods will instruct you to use the generated `.xcworkspace` file henceforth to be able to use these installed dependencies.

#### React Native does not compile when being used as a CocoaPod[​](#react-native-does-not-compile-when-being-used-as-a-cocoapod "Direct link to React Native does not compile when being used as a CocoaPod")

There is a CocoaPods plugin called [cocoapods-fix-react-native](https://github.com/orta/cocoapods-fix-react-native) which handles any potential post-fixing of the source code due to differences when using a dependency manager.

#### Argument list too long: recursive header expansion failed[​](#argument-list-too-long-recursive-header-expansion-failed "Direct link to Argument list too long: recursive header expansion failed")

In the project's build settings, `User Search Header Paths` and `Header Search Paths` are two configs that specify where Xcode should look for `#import` header files specified in the code. For Pods, CocoaPods uses a default array of specific folders to look in. Verify that this particular config is not overwritten, and that none of the folders configured are too large. If one of the folders is a large folder, Xcode will attempt to recursively search the entire directory and throw above error at some point.

To revert the `User Search Header Paths` and `Header Search Paths` build settings to their defaults set by CocoaPods - select the entry in the Build Settings panel, and hit delete. It will remove the custom override and return to the CocoaPod defaults.

### No transports available[​](#no-transports-available "Direct link to No transports available")

React Native implements a polyfill for WebSockets. These [polyfills](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/InitializeCore.js) are initialized as part of the react-native module that you include in your application through `import React from 'react'`. If you load another module that requires WebSockets, such as [Firebase](https://github.com/facebook/react-native/issues/3645), be sure to load/require it after react-native:

```

import React from 'react';
import Firebase from 'firebase';

```

## Shell Command Unresponsive Exception[​](#shell-command-unresponsive-exception "Direct link to Shell Command Unresponsive Exception")

If you encounter a ShellCommandUnresponsiveException exception such as:

```

Execution failed for task ':app:installDebug'.
com.android.builder.testing.api.DeviceException: com.android.ddmlib.ShellCommandUnresponsiveException

```

Restart the ADB server by running the following commands in your terminal:

```

adb kill-server
adb start-server

```

## Unable to start react-native package manager (on Linux)[​](#unable-to-start-react-native-package-manager-on-linux "Direct link to Unable to start react-native package manager (on Linux)")

### Case 1: Error "code":"ENOSPC","errno":"ENOSPC"[​](#case-1-error-codeenospcerrnoenospc "Direct link to Case 1: Error \"code\":\"ENOSPC\",\"errno\":\"ENOSPC\"")

Issue caused by the number of directories [inotify](https://github.com/guard/listen/blob/master/README.md#increasing-the-amount-of-inotify-watchers) (used by watchman on Linux) can monitor. To solve it, run this command in your terminal window

shell

```

echo fs.inotify.max\_user\_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

```

### Error: spawnSync ./gradlew EACCES[​](#error-spawnsync-gradlew-eacces "Direct link to Error: spawnSync ./gradlew EACCES")

If you run into issue where executing `npm run android` or `yarn android` on macOS throws the above error, try to run `sudo chmod +x android/gradlew` command to make `gradlew` files into executable.


---

# Turbo Native Modules: Android

Now it's time to write some Android platform code to make sure `localStorage` survives after the application is closed.

The first step is to implement the generated `NativeLocalStorageSpec` interface:

* Java
* Kotlin

android/app/src/main/java/com/nativelocalstorage/NativeLocalStorageModule.java

```

package com.nativelocalstorage;

import android.content.Context;
import android.content.SharedPreferences;
import com.nativelocalstorage.NativeLocalStorageSpec;
import com.facebook.react.bridge.ReactApplicationContext;

public class NativeLocalStorageModule extends NativeLocalStorageSpec {

public static final String NAME = "NativeLocalStorage";

public NativeLocalStorageModule(ReactApplicationContext reactContext) {
super(reactContext);
}

@Override
public String getName() {
return NAME;
}

@Override
public void setItem(String value, String key) {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
SharedPreferences.Editor editor = sharedPref.edit();
editor.putString(key, value);
editor.apply();
}

@Override
public String getItem(String key) {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
String username = sharedPref.getString(key, null);
return username;
}

@Override
public void removeItem(String key) {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
sharedPref.edit().remove(key).apply();
}

@Override
public void clear() {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
sharedPref.edit().clear().apply();
}
}

```

android/app/src/main/java/com/nativelocalstorage/NativeLocalStorageModule.kt

```

package com.nativelocalstorage

import android.content.Context
import android.content.SharedPreferences
import com.nativelocalstorage.NativeLocalStorageSpec
import com.facebook.react.bridge.ReactApplicationContext

class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

override fun getName() = NAME

override fun setItem(value: String, key: String) {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val editor = sharedPref.edit()
editor.putString(key, value)
editor.apply()
}

override fun getItem(key: String): String? {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val username = sharedPref.getString(key, null)
return username.toString()
}

override fun removeItem(key: String) {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val editor = sharedPref.edit()
editor.remove(key)
editor.apply()
}

override fun clear() {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val editor = sharedPref.edit()
editor.clear()
editor.apply()
}

companion object {
const val NAME = "NativeLocalStorage"
}
}

```

Next we need to create `NativeLocalStoragePackage`. It provides an object to register our Module in the React Native runtime, by wrapping it as a Base Native Package:

* Java
* Kotlin

android/app/src/main/java/com/nativelocalstorage/NativeLocalStoragePackage.java

```

package com.nativelocalstorage;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;

import java.util.HashMap;
import java.util.Map;

public class NativeLocalStoragePackage extends BaseReactPackage {

@Override
public NativeModule getModule(String name, ReactApplicationContext reactContext) {
if (name.equals(NativeLocalStorageModule.NAME)) {
return new NativeLocalStorageModule(reactContext);
} else {
return null;
}
}

@Override
public ReactModuleInfoProvider getReactModuleInfoProvider() {
return new ReactModuleInfoProvider() {
@Override
public Map\<String, ReactModuleInfo> getReactModuleInfos() {
Map\<String, ReactModuleInfo> map = new HashMap<>();
map.put(NativeLocalStorageModule.NAME, new ReactModuleInfo(
NativeLocalStorageModule.NAME,       // name
NativeLocalStorageModule.NAME,       // className
false, // canOverrideExistingModule
false, // needsEagerInit
false, // isCXXModule
true   // isTurboModule
));
return map;
}
};
}
}

```

android/app/src/main/java/com/nativelocalstorage/NativeLocalStoragePackage.kt

```

package com.nativelocalstorage

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeLocalStoragePackage : BaseReactPackage() {

override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
if (name == NativeLocalStorageModule.NAME) {
NativeLocalStorageModule(reactContext)
} else {
null
}

override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
mapOf(
NativeLocalStorageModule.NAME to ReactModuleInfo(
name = NativeLocalStorageModule.NAME,
className = NativeLocalStorageModule.NAME,
canOverrideExistingModule = false,
needsEagerInit = false,
isCxxModule = false,
isTurboModule = true
)
)
}
}

```

Finally, we need to tell the React Native in our main application how to find this `Package`. We call this "registering" the package in React Native.

In this case, you add it to be returned by the [getPackages](https://github.com/facebook/react-native/blob/8d8b8c343e62115a5509e1aed62047053c2f6e39/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/ReactNativeHost.java#L233) method.

info

Later you’ll learn how to distribute your Native Modules as [npm packages](/docs/the-new-architecture/create-module-library.md#publish-the-library-on-npm), which our build tooling will autolink for you.

* Java
* Kotlin

android/app/src/main/java/com/turobmoduleexample/MainApplication.java

```

package com.inappmodule;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactHost;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import com.nativelocalstorage.NativeLocalStoragePackage;

import java.util.ArrayList;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

private final ReactNativeHost reactNativeHost = new DefaultReactNativeHost(this) {
@Override
public List getPackages() {
List packages = new PackageList(this).getPackages();
// Packages that cannot be autolinked yet can be added manually here, for example:
// packages.add(new MyReactNativePackage());
packages.add(new NativeLocalStoragePackage());
return packages;
}

```
@Override
public String getJSMainModuleName() {
  return "index";
}

@Override
public boolean getUseDeveloperSupport() {
  return BuildConfig.DEBUG;
}

@Override
public boolean isNewArchEnabled() {
  return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
}

@Override
public boolean isHermesEnabled() {
  return BuildConfig.IS_HERMES_ENABLED;
}
```

};

@Override
public ReactHost getReactHost() {
return DefaultReactHost.getDefaultReactHost(getApplicationContext(), reactNativeHost);
}

@Override
public void onCreate() {
super.onCreate();
SoLoader.init(this, false);
if (BuildConfig.IS\_NEW\_ARCHITECTURE\_ENABLED) {
// If you opted-in for the New Architecture, we load the native entry point for this app.
DefaultNewArchitectureEntryPoint.load();
}
}
}

```

android/app/src/main/java/com/turobmoduleexample/MainApplication.kt

```

package com.inappmodule

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.nativelocalstorage.NativeLocalStoragePackage

class MainApplication : Application(), ReactApplication {

override val reactNativeHost: ReactNativeHost =
object : DefaultReactNativeHost(this) {
override fun getPackages(): List =
PackageList(this).packages.apply {
// Packages that cannot be autolinked yet can be added manually here, for example:
// add(MyReactNativePackage())
add(NativeLocalStoragePackage())
}

```
    override fun getJSMainModuleName(): String = "index"

    override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

    override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
    override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
  }
```

override val reactHost: ReactHost
get() = getDefaultReactHost(applicationContext, reactNativeHost)

override fun onCreate() {
super.onCreate()
SoLoader.init(this, false)
if (BuildConfig.IS\_NEW\_ARCHITECTURE\_ENABLED) {
// If you opted-in for the New Architecture, we load the native entry point for this app.
load()
}
}
}

```

You can now build and run your code on an emulator:

* npm
* Yarn

bash

```

npm run android

```

bash

```

yarn run android

```

[](/docs/assets/turbo-native-modules/turbo-native-modules-android.webm)


---

# Native Modules

Your React Native application code may need to interact with native platform APIs that aren't provided by React Native or an existing library. You can write the integration code yourself using a **Turbo Native Module**. This guide will show you how to write one.

The basic steps are:

1. **define a typed JavaScript specification** using one of the most popular JavaScript type annotation languages: Flow or TypeScript;
2. **configure your dependency management system to run Codegen**, which converts the specification into native language interfaces;
3. **write your application code** using your specification; and
4. **write your native platform code using the generated interfaces** to write and hook your native code into the React Native runtime environment.

Lets work through each of these steps by building an example Turbo Native Module. The rest of this guide assume that you have created your application running the command:

shell

```

npx @react-native-community/cli@latest init TurboModuleExample --version 0.84

```

## Native Persistent Storage[​](#native-persistent-storage "Direct link to Native Persistent Storage")

This guide will show you how to write an implementation of the [Web Storage API](https://html.spec.whatwg.org/multipage/webstorage.html#dom-localstorage-dev): `localStorage`. The API is relatable to a React developer who might be writing application code on your project.

To make this work on mobile, we need to use Android and iOS APIs:

* Android: [SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences), and
* iOS: [NSUserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults).

### 1. Declare Typed Specification[​](#1-declare-typed-specification "Direct link to 1. Declare Typed Specification")

React Native provides a tool called [Codegen](/docs/the-new-architecture/what-is-codegen.md), which takes a specification written in TypeScript or Flow and generates platform specific code for Android and iOS. The specification declares the methods and data types that will pass back and forth between your native code and the React Native JavaScript runtime. A Turbo Native Module is both your specification, the native code you write, and the Codegen interfaces generated from your specification.

To create a specs file:

1. Inside the root folder of your app, create a new folder called `specs`.
2. Create a new file called `NativeLocalStorage.ts`.

info

You can see all of the types you can use in your specification and the native types that are generated in the [Appendix](/docs/appendix.md) documentation.

info

If you want to change the name of your module and the related specs file, make sure to always use 'Native' as prefix (e.g. `NativeStorage` or `NativeUsersDefault`).

Here is an implementation of the `localStorage` specification:

* TypeScript
* Flow

specs/NativeLocalStorage.ts

```

import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
setItem(value: string, key: string): void;
getItem(key: string): string | null;
removeItem(key: string): void;
clear(): void;
}

export default TurboModuleRegistry.getEnforcing(
'NativeLocalStorage',
);

```

NativeLocalStorage.js

```

import type {TurboModule} from 'react-native';
import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
setItem(value: string, key: string): void;
getItem(key: string): ?string;
removeItem(key: string): void;
clear(): void;
}

```

### 2. Configure Codegen to run[​](#2-configure-codegen-to-run "Direct link to 2. Configure Codegen to run")

The specification is used by the React Native Codegen tools to generate platform specific interfaces and boilerplate for us. To do this, Codegen needs to know where to find our specification and what to do with it. Update your `package.json` to include:

package.json

```

```
 "start": "react-native start",
 "test": "jest"
```

},
"codegenConfig": {
"name": "NativeLocalStorageSpec",
"type": "modules",
"jsSrcsDir": "specs",
"android": {
"javaPackageName": "com.nativelocalstorage"
}
},
"dependencies": {

```

With everything wired up for Codegen, we need to prepare our native code to hook into our generated code.

* Android
* iOS

Codegen is executed through the `generateCodegenArtifactsFromSchema` Gradle task:

bash

```

cd android
./gradlew generateCodegenArtifactsFromSchema

BUILD SUCCESSFUL in 837ms
14 actionable tasks: 3 executed, 11 up-to-date

```

This is automatically run when you build your Android application.

Codegen is run as part of the script phases that's automatically added to the project generated by CocoaPods.

bash

```

cd ios
bundle install
bundle exec pod install

```

The output will look like this:

shell

```

...
Framework build type is static library
\[Codegen] Adding script\_phases to ReactCodegen.
\[Codegen] Generating ./build/generated/ios/ReactCodegen.podspec.json
\[Codegen] Analyzing /Users/me/src/TurboModuleExample/package.json
\[Codegen] Searching for codegen-enabled libraries in the app.
\[Codegen] Found TurboModuleExample
\[Codegen] Searching for codegen-enabled libraries in the project dependencies.
\[Codegen] Found react-native
...

```

### 3. Write Application Code using the Turbo Native Module[​](#3-write-application-code-using-the-turbo-native-module "Direct link to 3. Write Application Code using the Turbo Native Module")

Using `NativeLocalStorage`, here’s a modified `App.tsx` that includes some text we want persisted, an input field and some buttons to update this value.

The `TurboModuleRegistry` supports 2 modes of retrieving a Turbo Native Module:

* `get<T>(name: string): T | null` which will return `null` if the Turbo Native Module is unavailable.
* `getEnforcing<T>(name: string): T` which will throw an exception if the Turbo Native Module is unavailable. This assumes the module is always available.

App.tsx

```

import React from 'react';
import {
SafeAreaView,
StyleSheet,
Text,
TextInput,
Button,
} from 'react-native';

import NativeLocalStorage from './specs/NativeLocalStorage';

const EMPTY = '';

function App(): React.JSX.Element {
const \[value, setValue] = React.useState(null);

const \[editingValue, setEditingValue] = React.useState<
string | null

> (null);

React.useEffect(() => {
const storedValue = NativeLocalStorage?.getItem('myKey');
setValue(storedValue ?? '');
}, \[]);

function saveValue() {
NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');
setValue(editingValue);
}

function clearAll() {
NativeLocalStorage?.clear();
setValue('');
}

function deleteValue() {
NativeLocalStorage?.removeItem('myKey');
setValue('');
}

return (

```
    Current stored value is: {value ?? 'No Value'}
  
  <TextInput
    placeholder="Enter the text you want to store"
    style={styles.textInput}
    onChangeText={setEditingValue}
  />
  
  
  
```

);
}

const styles = StyleSheet.create({
text: {
margin: 10,
fontSize: 20,
},
textInput: {
margin: 10,
height: 40,
borderColor: 'black',
borderWidth: 1,
paddingLeft: 5,
paddingRight: 5,
borderRadius: 5,
},
});

export default App;

```

### 4. Write your Native Platform code[​](#4-write-your-native-platform-code "Direct link to 4. Write your Native Platform code")

With everything prepared, we're going to start writing native platform code. We do this in 2 parts:

note

This guide shows you how to create a Turbo Native Module that only works with the New Architecture. If you need to support both the New Architecture and the Legacy Architecture, please refer to our [backwards compatibility guide](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/backwards-compat.md).

* Android
* iOS

Now it's time to write some Android platform code to make sure `localStorage` survives after the application is closed.

The first step is to implement the generated `NativeLocalStorageSpec` interface:

* Java
* Kotlin

android/app/src/main/java/com/nativelocalstorage/NativeLocalStorageModule.java

```

package com.nativelocalstorage;

import android.content.Context;
import android.content.SharedPreferences;
import com.nativelocalstorage.NativeLocalStorageSpec;
import com.facebook.react.bridge.ReactApplicationContext;

public class NativeLocalStorageModule extends NativeLocalStorageSpec {

public static final String NAME = "NativeLocalStorage";

public NativeLocalStorageModule(ReactApplicationContext reactContext) {
super(reactContext);
}

@Override
public String getName() {
return NAME;
}

@Override
public void setItem(String value, String key) {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
SharedPreferences.Editor editor = sharedPref.edit();
editor.putString(key, value);
editor.apply();
}

@Override
public String getItem(String key) {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
String username = sharedPref.getString(key, null);
return username;
}

@Override
public void removeItem(String key) {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
sharedPref.edit().remove(key).apply();
}

@Override
public void clear() {
SharedPreferences sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE);
sharedPref.edit().clear().apply();
}
}

```

android/app/src/main/java/com/nativelocalstorage/NativeLocalStorageModule.kt

```

package com.nativelocalstorage

import android.content.Context
import android.content.SharedPreferences
import com.nativelocalstorage.NativeLocalStorageSpec
import com.facebook.react.bridge.ReactApplicationContext

class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

override fun getName() = NAME

override fun setItem(value: String, key: String) {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val editor = sharedPref.edit()
editor.putString(key, value)
editor.apply()
}

override fun getItem(key: String): String? {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val username = sharedPref.getString(key, null)
return username.toString()
}

override fun removeItem(key: String) {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val editor = sharedPref.edit()
editor.remove(key)
editor.apply()
}

override fun clear() {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val editor = sharedPref.edit()
editor.clear()
editor.apply()
}

companion object {
const val NAME = "NativeLocalStorage"
}
}

```

Next we need to create `NativeLocalStoragePackage`. It provides an object to register our Module in the React Native runtime, by wrapping it as a Base Native Package:

* Java
* Kotlin

android/app/src/main/java/com/nativelocalstorage/NativeLocalStoragePackage.java

```

package com.nativelocalstorage;

import com.facebook.react.BaseReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;

import java.util.HashMap;
import java.util.Map;

public class NativeLocalStoragePackage extends BaseReactPackage {

@Override
public NativeModule getModule(String name, ReactApplicationContext reactContext) {
if (name.equals(NativeLocalStorageModule.NAME)) {
return new NativeLocalStorageModule(reactContext);
} else {
return null;
}
}

@Override
public ReactModuleInfoProvider getReactModuleInfoProvider() {
return new ReactModuleInfoProvider() {
@Override
public Map\<String, ReactModuleInfo> getReactModuleInfos() {
Map\<String, ReactModuleInfo> map = new HashMap<>();
map.put(NativeLocalStorageModule.NAME, new ReactModuleInfo(
NativeLocalStorageModule.NAME,       // name
NativeLocalStorageModule.NAME,       // className
false, // canOverrideExistingModule
false, // needsEagerInit
false, // isCXXModule
true   // isTurboModule
));
return map;
}
};
}
}

```

android/app/src/main/java/com/nativelocalstorage/NativeLocalStoragePackage.kt

```

package com.nativelocalstorage

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeLocalStoragePackage : BaseReactPackage() {

override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
if (name == NativeLocalStorageModule.NAME) {
NativeLocalStorageModule(reactContext)
} else {
null
}

override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
mapOf(
NativeLocalStorageModule.NAME to ReactModuleInfo(
name = NativeLocalStorageModule.NAME,
className = NativeLocalStorageModule.NAME,
canOverrideExistingModule = false,
needsEagerInit = false,
isCxxModule = false,
isTurboModule = true
)
)
}
}

```

Finally, we need to tell the React Native in our main application how to find this `Package`. We call this "registering" the package in React Native.

In this case, you add it to be returned by the [getPackages](https://github.com/facebook/react-native/blob/8d8b8c343e62115a5509e1aed62047053c2f6e39/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/ReactNativeHost.java#L233) method.

info

Later you’ll learn how to distribute your Native Modules as [npm packages](/docs/the-new-architecture/create-module-library.md#publish-the-library-on-npm), which our build tooling will autolink for you.

* Java
* Kotlin

android/app/src/main/java/com/turobmoduleexample/MainApplication.java

```

package com.inappmodule;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactHost;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import com.nativelocalstorage.NativeLocalStoragePackage;

import java.util.ArrayList;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

private final ReactNativeHost reactNativeHost = new DefaultReactNativeHost(this) {
@Override
public List getPackages() {
List packages = new PackageList(this).getPackages();
// Packages that cannot be autolinked yet can be added manually here, for example:
// packages.add(new MyReactNativePackage());
packages.add(new NativeLocalStoragePackage());
return packages;
}

```
@Override
public String getJSMainModuleName() {
  return "index";
}

@Override
public boolean getUseDeveloperSupport() {
  return BuildConfig.DEBUG;
}

@Override
public boolean isNewArchEnabled() {
  return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
}

@Override
public boolean isHermesEnabled() {
  return BuildConfig.IS_HERMES_ENABLED;
}
```

};

@Override
public ReactHost getReactHost() {
return DefaultReactHost.getDefaultReactHost(getApplicationContext(), reactNativeHost);
}

@Override
public void onCreate() {
super.onCreate();
SoLoader.init(this, false);
if (BuildConfig.IS\_NEW\_ARCHITECTURE\_ENABLED) {
// If you opted-in for the New Architecture, we load the native entry point for this app.
DefaultNewArchitectureEntryPoint.load();
}
}
}

```

android/app/src/main/java/com/turobmoduleexample/MainApplication.kt

```

package com.inappmodule

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.nativelocalstorage.NativeLocalStoragePackage

class MainApplication : Application(), ReactApplication {

override val reactNativeHost: ReactNativeHost =
object : DefaultReactNativeHost(this) {
override fun getPackages(): List =
PackageList(this).packages.apply {
// Packages that cannot be autolinked yet can be added manually here, for example:
// add(MyReactNativePackage())
add(NativeLocalStoragePackage())
}

```
    override fun getJSMainModuleName(): String = "index"

    override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

    override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
    override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
  }
```

override val reactHost: ReactHost
get() = getDefaultReactHost(applicationContext, reactNativeHost)

override fun onCreate() {
super.onCreate()
SoLoader.init(this, false)
if (BuildConfig.IS\_NEW\_ARCHITECTURE\_ENABLED) {
// If you opted-in for the New Architecture, we load the native entry point for this app.
load()
}
}
}

```

You can now build and run your code on an emulator:

* npm
* Yarn

bash

```

npm run android

```

bash

```

yarn run android

```

[](/docs/assets/turbo-native-modules/turbo-native-modules-android.webm)

Now it's time to write some iOS platform code to make sure `localStorage` survives after the application is closed.

## Prepare your Xcode Project[​](#prepare-your-xcode-project "Direct link to Prepare your Xcode Project")

We need to prepare your iOS project using Xcode. After completing these **6 steps** you'll have `RCTNativeLocalStorage` that implements the generated `NativeLocalStorageSpec` interface.

1. Open the CocoaPods generated Xcode Workspace:

bash

```

cd ios
open TurboModuleExample.xcworkspace

```

![Open Xcode Workspace](/docs/assets/turbo-native-modules/xcode/1.webp)

2. Right click on app and select `New Group`, call the new group `NativeLocalStorage`.

![Right click on app and select New Group](/docs/assets/turbo-native-modules/xcode/2.webp)

3. In the `NativeLocalStorage` group, create `New`→`File from Template`.

![Create a new file using the Cocoa Touch Class template](/docs/assets/turbo-native-modules/xcode/3.webp)

4. Use the `Cocoa Touch Class`.

![Use the Cocoa Touch Class template](/docs/assets/turbo-native-modules/xcode/4.webp)

5. Name the Cocoa Touch Class `RCTNativeLocalStorage` with the `Objective-C` language.

![Create an Objective-C RCTNativeLocalStorage class](/docs/assets/turbo-native-modules/xcode/5.webp)

6. Rename `RCTNativeLocalStorage.m` → `RCTNativeLocalStorage.mm` making it an Objective-C++ file.

![Convert to and Objective-C++ file](/docs/assets/turbo-native-modules/xcode/6.webp)

## Implement localStorage with NSUserDefaults[​](#implement-localstorage-with-nsuserdefaults "Direct link to Implement localStorage with NSUserDefaults")

Start by updating `RCTNativeLocalStorage.h`:

NativeLocalStorage/RCTNativeLocalStorage.h

```

//  RCTNativeLocalStorage.h
//  TurboModuleExample

\#import \<Foundation/Foundation.h>
\#import \<NativeLocalStorageSpec/NativeLocalStorageSpec.h>

NS\_ASSUME\_NONNULL\_BEGIN

@interface RCTNativeLocalStorage : NSObject
@interface RCTNativeLocalStorage : NSObject

@end

```

Then update our implementation to use `NSUserDefaults` with a custom [suite name](https://developer.apple.com/documentation/foundation/nsuserdefaults/1409957-initwithsuitename).

NativeLocalStorage/RCTNativeLocalStorage.mm

```

//  RCTNativeLocalStorage.m
//  TurboModuleExample

\#import "RCTNativeLocalStorage.h"

static NSString \*const RCTNativeLocalStorageKey = @"local-storage";

@interface RCTNativeLocalStorage()
@property (strong, nonatomic) NSUserDefaults \*localStorage;
@end

@implementation RCTNativeLocalStorage

- (id) init {
  if (self = \[super init]) {
  \_localStorage = \[\[NSUserDefaults alloc] initWithSuiteName:RCTNativeLocalStorageKey];
  }
  return self;
  }

- (std::shared\_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make\_shared<facebook::react::NativeLocalStorageSpecJSI>(params);
  }

- (NSString \* \_Nullable)getItem:(NSString \*)key {
  return \[self.localStorage stringForKey:key];
  }

- (void)setItem:(NSString \*)value
  key:(NSString \*)key {
  \[self.localStorage setObject:value forKey:key];
  }

- (void)removeItem:(NSString \*)key {
  \[self.localStorage removeObjectForKey:key];
  }

- (void)clear {
  NSDictionary \*keys = \[self.localStorage dictionaryRepresentation];
  for (NSString \*key in keys) {
  \[self removeItem:key];
  }
  }

* (NSString \*)moduleName
  {
  return @"NativeLocalStorage";
  }

@end

```

Important things to note:

* You can use Xcode to jump to the Codegen `@protocol NativeLocalStorageSpec`. You can also use Xcode to generate stubs for you.

## Register the Native Module in your app[​](#register-the-native-module-in-your-app "Direct link to Register the Native Module in your app")

The last step consist in updating the `package.json` to tell React Native about the link between the JS specs of the Native Module and the concrete implementation of those specs in native code.

Modify the `package.json` as it follows:

package.json

```

```
 "start": "react-native start",
 "test": "jest"
```

},
"codegenConfig": {
"name": "NativeLocalStorageSpec",
"type": "modules",
"jsSrcsDir": "specs",
"android": {
"javaPackageName": "com.sampleapp.specs"
},
"ios": {
"modulesProvider": {
"NativeLocalStorage": "RCTNativeLocalStorage"
}
}
},

"dependencies": {

```

At this point, you need to re-install the pods to make sure that codegen runs again to generate the new files:

bash

```
