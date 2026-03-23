OSS SDK for Android allows you to programmatically manage resources in Object Storage Service (OSS). For example, you can manage buckets, upload objects, download objects, and process images. This topic describes how to install OSS SDK for Android.

## Prerequisites

-   Android versions
    
    Android 2.3 or later is used.
    
-   Permission settings
    
    The following configurations are added to the AndroidManifest.xml file:
    
    ```
    <uses-permission android:name="android.permission.INTERNET"></uses-permission>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>                   
    ```
    
-   ProGuard settings
    
    The following configurations are added to the proguard-rules.pro file:
    
    ```
    -keep class com.alibaba.sdk.android.oss.** { *; }
    -dontwarn okio.**
    -dontwarn org.apache.commons.codec.binary.**                    
    ```
    

## Download OSS SDK for Android

-   [Download OSS SDK for Android installation package](https://repo1.maven.org/maven2/com/aliyun/dpa/oss-android-sdk/2.9.19/oss-android-sdk-2.9.19.aar)
    
-   [Download from GitHub](https://github.com/aliyun/aliyun-oss-android-sdk)
    
-   [Download a specific version](https://github.com/aliyun/aliyun-oss-android-sdk/releases)
    

## Install OSS SDK for Android

You can use one of the following methods to install OSS SDK for Android:

-   Method 1: Add dependencies to the Gradle project (recommended method)
    
    To use OSS SDK for Android in a Gradle project, add a dependency on the SDK to build.gradle. For example, to use OSS SDK for Android 2.9.19, add the following content to `dependencies {}`:
    
    ```
    implementation 'com.aliyun.dpa:oss-android-sdk:2.9.21'             
    ```
    
-   Method 2: Manually import dependency packages
    
    Manually import the following dependency packages into the libs directory:
    
    -   [oss-android-sdk-2.9.21.aar](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250121/krokrs/oss-android-sdk-2.9.21.aar)
        
    -   [okhttp-4.10.0.jar](https://search.maven.org/remotecontent?filepath=com/squareup/okhttp3/okhttp/4.10.0/okhttp-4.10.0.jar)
        
    -   [okio-3.2.0.jar](https://search.maven.org/remotecontent?filepath=com/squareup/okio/okio/3.2.0/okio-3.2.0.jar)
        
        **Note**
        
        OSS SDK for Android is developed based on OkHttp 3.11.0 and Okio 1.14.0. When OSS SDK for Android is installed, OSS SDK for Android is automatically associated with OkHttp 3.11.0 and Okio 1.14.0. If your business requires a later version of OkHttp or Okio, you can change the version number in the project.
