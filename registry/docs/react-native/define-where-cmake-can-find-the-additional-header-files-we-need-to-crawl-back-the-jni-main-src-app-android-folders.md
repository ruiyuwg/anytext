# Define where CMake can find the additional header files. We need to crawl back the jni, main, src, app, android folders

target\_include\_directories(${CMAKE\_PROJECT\_NAME} PUBLIC ../../../../../shared)

```

The CMake file does the following things:

* Defines the `appmodules` library, where all the app C++ code will be included.
* Loads the base React Native's CMake file.
* Adds the Module C++ source code that we need to build with the `target_sources` directives. By default React Native will already populate the `appmodules` library with default sources, here we include our custom one. You can see that we need to crawl back from the `jni` folder to the `shared` folder where our C++ Turbo Module lives.
* Specifies where CMake can find the module header files. Also in this case we need to crawl back from the `jni` folder.

#### 2. Modify `build.gradle` to include the custom C++ code[​](#2-modify-buildgradle-to-include-the-custom-c-code "Direct link to 2-modify-buildgradle-to-include-the-custom-c-code")

Gradle is the tool that orchestrates the Android build. We need to tell it where it can find the `CMake` files to build the Turbo Native Module.

1. Open the `SampleApp/android/app/build.gradle` file.
2. Add the following block into the Gradle file, within the existing `android` block:

android/app/build.gradle

```

```
buildTypes {
    debug {
        signingConfig signingConfigs.debug
    }
    release {
        // Caution! In production, you need to generate your own keystore file.
        // see https://reactnative.dev/docs/signed-apk-android.
        signingConfig signingConfigs.debug
        minifyEnabled enableProguardInReleaseBuilds
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
}
```

- externalNativeBuild {
- ```
    cmake {
  ```
- ```
        path "src/main/jni/CMakeLists.txt"
  ```
- ```
    }
  ```
- }
  }

```

This block tells the Gradle file where to look for the CMake file. The path is relative to the folder where the `build.gradle` file lives, so we need to add the path to the `CMakeLists.txt` files in the `jni` folder.

#### 3. Register the new Turbo Native Module[​](#3-register-the-new-turbo-native-module "Direct link to 3. Register the new Turbo Native Module")

The final step is to register the new C++ Turbo Native Module in the runtime, so that when JS requires the C++ Turbo Native Module, the app knows where to find it and can return it.

1. From the folder `SampleApp/android/app/src/main/jni`, run the following command:

shell

```

curl -O https://raw.githubusercontent.com/facebook/react-native/v0.84.0/packages/react-native/ReactAndroid/cmake-utils/default-app-setup/OnLoad.cpp

```

2. Then, modify this file as follows:

android/app/src/main/jni/OnLoad.cpp

```

\#include \<DefaultComponentsRegistry.h>
\#include \<DefaultTurboModuleManagerDelegate.h>
\#include \<autolinking.h>
\#include \<fbjni/fbjni.h>
\#include \<react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>
\#include \<rncore.h>

- // Include the NativeSampleModule header
- \#include \<NativeSampleModule.h>

//...

std::shared\_ptr cxxModuleProvider(
const std::string& name,
const std::shared\_ptr& jsInvoker) {
// Here you can provide your CXX Turbo Modules coming from
// either your application or from external libraries. The approach to follow
// is similar to the following (for a module called `NativeCxxModuleExample`):
//
// if (name == NativeCxxModuleExample::kModuleName) {
//   return std::make\_shared(jsInvoker);
// }

- // This code registers the module so that when the JS side asks for it, the app can return it
- if (name == NativeSampleModule::kModuleName) {
- return std::make\_shared(jsInvoker);
- }

// And we fallback to the CXX module providers autolinked
return autolinking\_cxxModuleProvider(name, jsInvoker);
}

// leave the rest of the file

```

These steps download the original `OnLoad.cpp` file from React Native, so that we can safely override it to load the C++ Turbo Native Module in the app.

Once we downloaded the file, we can modify it by:

* Including the header file that points to our module
* Registering the Turbo Native Module so that when JS requires it, the app can return it.

Now, you can run `yarn android` from the project root to see your app building successfully.

### iOS[​](#ios "Direct link to iOS")

To make sure that the iOS app can effectively build the C++ Turbo Native Module, we need to:

1. Install pods and run Codegen.
2. Add the `shared` folder to our iOS project.
3. Register the C++ Turbo Native Module in the application.

#### 1. Install Pods and Run Codegen.[​](#1-install-pods-and-run-codegen "Direct link to 1. Install Pods and Run Codegen.")

The first step we need to run is the usual steps we run every time we have to prepare our iOS application. CocoaPods is the tool we use to setup and install React Native dependencies and, as part of the process, it will also run Codegen for us.

bash

```

cd ios
bundle install
bundle exec pod install

```

#### 2. Add the shared folder to the iOS project[​](#2-add-the-shared-folder-to-the-ios-project "Direct link to 2. Add the shared folder to the iOS project")

This step adds the `shared` folder to the project to make it visible to Xcode.

1. Open the CocoaPods generated Xcode Workspace.

bash

```

cd ios
open SampleApp.xcworkspace

```

2. Click on the `SampleApp` project on the left and select `Add files to "Sample App"...`.

![Add Files to Sample App...](/assets/images/AddFilesToXcode1-801bbeb4251cda02929c1863939466c5.png)

3. Select the `shared` folder and click on `Add`.

![Add Files to Sample App...](/assets/images/AddFilesToXcode2-f22d79daca6d0e121ad57c63225e43c6.png)

If you did everything right, your project on the left should look like this:

![Xcode Project](/assets/images/CxxTMGuideXcodeProject-96458e4d285dbdde12b12edaf7193e57.png)

#### 3. Registering the Cxx Turbo Native Module in your app[​](#3-registering-the-cxx-turbo-native-module-in-your-app "Direct link to 3. Registering the Cxx Turbo Native Module in your app")

To register a pure Cxx Turbo Native Module in your app, you need to:

1. Create a `ModuleProvider` for the Native Module
2. Configure the `package.json` to associate the JS module name with the ModuleProvider class.

The ModuleProvider is an Objective-C++ that glues together the Pure C++ module with the rest of your iOS App.

##### 3.1 Create the ModuleProvider[​](#31-create-the-moduleprovider "Direct link to 3.1 Create the ModuleProvider")

1. From Xcode, select the `SampleApp` project and press `⌘` + `N` to create a new file.
2. Select the `Cocoa Touch Class` template
3. Add the name `NativeSampleModuleProvider` (keep the other field as `Subclass of: NSObject` and `Language: Objective-C`)
4. Click Next to generate the files.
5. Rename the `NativeSampleModuleProvider.m` to `NativeSampleModuleProvider.mm`. The `mm` extension denotes an Objective-C++ file.
6. Implement the content of the `NativeSampleModuleProvider.h` with the following:

NativeSampleModuleProvider.h

```

\#import \<Foundation/Foundation.h>
\#import \<ReactCommon/RCTTurboModule.h>

NS\_ASSUME\_NONNULL\_BEGIN

@interface NativeSampleModuleProvider : NSObject

@end

NS\_ASSUME\_NONNULL\_END

```

This declares a `NativeSampleModuleProvider` object that conforms to the `RCTModuleProvider` protocol.

7. Implement the content of the `NativeSampleModuleProvider.mm` with the following:

NativeSampleModuleProvider.mm

```

\#import "NativeSampleModuleProvider.h"
\#import \<ReactCommon/CallInvoker.h>
\#import \<ReactCommon/TurboModule.h>
\#import "NativeSampleModule.h"

@implementation NativeSampleModuleProvider

- (std::shared\_ptr<facebook::react::TurboModule>)getTurboModule:
  (const facebook::react::ObjCTurboModule::InitParams &)params
  {
  return std::make\_shared<facebook::react::NativeSampleModule>(params.jsInvoker);
  }

@end

```

This code implements the `RCTModuleProvider` protocol by creating the pure C++ `NativeSampleModule` when the `getTurboModule:` method is called.

##### 3.2 Update the package.json[​](#32-update-the-packagejson "Direct link to 3.2 Update the package.json")

The last step consists in updating the `package.json` to tell React Native about the link between the JS specs of the Native Module and the concrete implementation of those spec in native code.

Modify the `package.json` as it follows:

package.json

```

```
 "start": "react-native start",
 "test": "jest"
```

},
"codegenConfig": {
"name": "AppSpecs",
"type": "modules",
"jsSrcsDir": "specs",
"android": {
"javaPackageName": "com.sampleapp.specs"
},
"ios": {
"modulesProvider": {
"NativeSampleModule":  "NativeSampleModuleProvider"
}
}
},

"dependencies": {

```

At this point, you need to re-install the pods to make sure that codegen runs again to generate the new files:

bash

```
