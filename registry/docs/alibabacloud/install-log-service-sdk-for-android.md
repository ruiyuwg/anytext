Before using Simple Log Service (SLS) SDK for Android to call the API operations of SLS, install SLS SDK for Android.

## Prerequisites

-   Simple Log Service is [activated](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   [Access credentials are configured](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   An Android development environment is set up. For more information, visit the [official website of Android](http://developer.android.com/sdk/index.html) and [Android Studio](https://developer.android.com/studio).
    
    SLS SDK for Android supports Android 4.0 and later versions. You can run the `adb shell getprop ro.build.version.release` command to check the Android version that you install.
    

## Installation

1.  Create an Android project.
    
2.  Configure the following code in `build.gradle` in the root directory of the project.
    
    ```
    buildscript {
        // ...
        repositories {
            mavenCentral()
    
            // (Optional) Add the aliyun maven configuration to improve the access speed. 
            // mirror of google()
            maven { url 'https://maven.aliyun.com/repository/google' }
            // mirror of central & jcenter
            maven { url 'https://maven.aliyun.com/repository/public' }
        }
        // ...
    }
    ```
    
3.  Configure the following code in the build.gradle in the directory of a specified module.
    
    ```
    implementation 'io.github.aliyun-sls:aliyun-log-android-sdk:2.7.0@aar'
    ```
    
    After dependency packages are imported, you can call the API operations that are encapsulated in SLS SDK for Android in the project.
    

## What to do next

[Get started with Simple Log Service SDK for Android](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-android#task-2104943)
