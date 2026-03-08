# Integration with an Android Fragment

The guide for [Integration with Existing Apps](/docs/integration-with-existing-apps.md) details how to integrate a full-screen React Native app into an existing Android app as an **Activity**.

To use React Native components within **Fragments** in an existing app requires some additional setup.

### 1. Add React Native to your app[​](#1-add-react-native-to-your-app "Direct link to 1. Add React Native to your app")

Follow the guide for [Integration with Existing Apps](/docs/integration-with-existing-apps.md) until the end to make sure you can safely run your React Native app in a full screen Activity.

### 2. Add a FrameLayout for the React Native Fragment[​](#2-add-a-framelayout-for-the-react-native-fragment "Direct link to 2. Add a FrameLayout for the React Native Fragment")

In this example, we're going to use a `FrameLayout` to add a React Native Fragment to an Activity. This approach is flexible enough and can be adapted to use React Native in other layouts such as Bottom Sheets or Tab Layouts.

First add a `<FrameLayout>` with an id, width and height to your Activity's layout (e.g. `main_activity.xml` in the `res/layouts` folder). This is the layout you will find to render your React Native Fragment.

xml

```
<FrameLayout
    android:id="@+id/react_native_fragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

### 3. Make your host Activity implement `DefaultHardwareBackBtnHandler`[​](#3-make-your-host-activity-implement-defaulthardwarebackbtnhandler "Direct link to 3-make-your-host-activity-implement-defaulthardwarebackbtnhandler")

As your host activity is not a `ReactActivity`, you need to implement the `DefaultHardwareBackBtnHandler` interface to handle the back button press event. This is required by React Native to handle the back button press event.

Go into your host activity and make sure it implements the `DefaultHardwareBackBtnHandler` interface:

Deprecated

`Activity.onBackPressed()` has been [deprecated](https://developer.android.com/reference/android/app/Activity#onBackPressed\(\)) since API level 33. Android 16 devices with apps targeting API level 36 this will [no longer be called](https://developer.android.com/about/versions/16/behavior-changes-16#predictive-back) and [OnBackPressedDispatcher](https://developer.android.com/reference/androidx/activity/OnBackPressedDispatcher) should be used instead.

- Java
- Kotlin

diff

```
package <your-package-here>

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
+import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

+class MainActivity : AppCompatActivity() {
+class MainActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_activity)

        findViewById<Button>(R.id.sample_button).setOnClickListener {
            // Handle button click
        }
    }

+   override fun invokeDefaultOnBackPressed() {
+       onBackPressedDispatcher.onBackPressed()
+   }
}
```

diff

```
package <your-package-here>;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
+import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

-class MainActivity extends AppCompatActivity {
+class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);

        findViewById(R.id.button_appcompose).setOnClickListener(button -> {
            // Handle button click
        });
    }

+   @Override
+   public void invokeDefaultOnBackPressed() {
+       getOnBackPressedDispatcher().onBackPressed();
+   }
}
```

### 4. Add a React Native Fragment to the FrameLayout[​](#4-add-a-react-native-fragment-to-the-framelayout "Direct link to 4. Add a React Native Fragment to the FrameLayout")

Finally, we can update the Activity to add a React Native Fragment to the FrameLayout. In this specific example, we're going to assume that your Activity has a button with id `sample_button` that when clicked will render a React Native Fragment into the FrameLayout.

Update your Activity's `onCreate` method as follows:

- Java
- Kotlin

diff

```
package <your-package-here>

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
+import com.facebook.react.ReactFragment
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

public class MainActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_activity)

        findViewById<Button>(R.id.sample_button).setOnClickListener {
+           val reactNativeFragment = ReactFragment.Builder()
+               .setComponentName("HelloWorld")
+               .setLaunchOptions(Bundle().apply { putString("message", "my value") })
+               .build()
+           supportFragmentManager
+               .beginTransaction()
+               .add(R.id.react_native_fragment, reactNativeFragment)
+               .commit()
        }
    }

   override fun invokeDefaultOnBackPressed() {
       super.onBackPressed()
   }
}
```

diff

```
package <your-package-here>;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
+import com.facebook.react.ReactFragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);

        findViewById(R.id.button_appcompose).setOnClickListener(button -> {
+           Bundle launchOptions = new Bundle();
+           launchOptions.putString("message", "my value");
+
+           ReactFragment fragment = new ReactFragment.Builder()
+                   .setComponentName("HelloWorld")
+                   .setLaunchOptions(launchOptions)
+                   .build();
+           getSupportFragmentManager()
+                   .beginTransaction()
+                   .add(R.id.react_native_fragment, fragment)
+                   .commit();
        });
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
```

Let's look at the code above.

The `ReactFragment.Builder()` is used to create a new `ReactFragment` and then we use the `supportFragmentManager` to add that Fragment to the `FrameLayout`.

Inside the builder you can customize how the fragment is created:

- `setComponentName` is the name of the component you want to render. It's the same string specified in your `index.js` inside the `registerComponent` method.
- `setLaunchOptions` is an optional method to pass initial props to your component. This is optional and you can remove it if you don't use it.

### 5. Test your integration[​](#5-test-your-integration "Direct link to 5. Test your integration")

Make sure you run `yarn start` to run the bundler and then run your android app in Android Studio. The app should load the JavaScript/TypeScript code from the development server and display it in your React Native Fragment in the Activity.

Your app should look like this one:

![Screenshot](/assets/images/EmbeddedAppAndroidFragmentVideo-aab979735a01abb7c006e01a4442d20c.gif)

***

# Integration with Existing Apps

React Native is great when you are starting a new mobile app from scratch. However, it also works well for adding a single view or user flow to existing native applications. With a few steps, you can add new React Native based features, screens, views, etc.

The specific steps are different depending on what platform you're targeting.

- Android (Java & Kotlin)
- iOS (Objective-C and Swift)

## Key Concepts[​](#key-concepts "Direct link to Key Concepts")

The keys to integrating React Native components into your Android application are to:

1. Set up the correct directory structure.
2. Install the necessary NPM dependencies.
3. Adding React Native to your Gradle configuration.
4. Writing the TypeScript code for your first React Native screen.
5. Integrate React Native with your Android code using a ReactActivity.
6. Testing your integration by running the bundler and seeing your app in action.

## Using the Community Template[​](#using-the-community-template "Direct link to Using the Community Template")

While you follow this guide, we suggest you to use the [React Native Community Template](https://github.com/react-native-community/template/) as reference. The template contains a **minimal Android app** and will help you understanding how to integrate React Native into an existing Android app.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

Follow the guide on [setting up your development environment](/docs/set-up-your-environment.md) and using [React Native without a framework](/docs/getting-started-without-a-framework.md) to configure your development environment for building React Native apps for Android. This guide also assumes you're familiar with the basics of Android development such as creating Activities and editing the `AndroidManifest.xml` file.

## 1. Set up directory structure[​](#1-set-up-directory-structure "Direct link to 1. Set up directory structure")

To ensure a smooth experience, create a new folder for your integrated React Native project, then **move your existing Android project** to the `/android` subfolder.

## 2. Install NPM dependencies[​](#2-install-npm-dependencies "Direct link to 2. Install NPM dependencies")

Go to the root directory and run the following command:

shell

```
curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/0.84-stable/template/package.json
```

This will copy the `package.json` [file from the Community template](https://github.com/react-native-community/template/blob/0.84-stable/template/package.json) to your project.

Next, install the NPM packages by running:

- npm
- Yarn

shell

```
npm install
```

shell

```
yarn install
```

Installation process has created a new `node_modules` folder. This folder stores all the JavaScript dependencies required to build your project.

Add `node_modules/` to your `.gitignore` file (here the [Community default one](https://github.com/react-native-community/template/blob/0.84-stable/template/_gitignore)).
