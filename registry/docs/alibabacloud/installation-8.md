OSS SDK for iOS lets you manage Object Storage Service (OSS) resources programmatically — upload and download objects, manage buckets, and process images.

## Prerequisites

Before you begin, make sure you have:

-   An iOS project targeting iOS 8.0 or later
    
-   macOS 10.10 or later on your development machine
    
-   An Alibaba Cloud account with OSS access credentials (AccessKey ID and AccessKey Secret, or Security Token Service (STS) temporary credentials)
    

## Install the SDK

Two installation methods are available. You can add the framework or add the pod dependency.

### Method 1: CocoaPods

If your project uses CocoaPods to manage dependencies, add the following line to your `Podfile`:

```
pod 'AliyunOSSiOS'
```

Then run:

```
pod install
```

No additional framework import is required.

### Method 2: Import the framework manually

To build the framework from source, see the [build instructions on GitHub](https://github.com/aliyun/aliyun-oss-ios-sdk/blob/master/README-CN.md).

After building the framework:

1.  In Xcode, drag the framework file into the target section of your project's **Target**.
    
2.  In the dialog that appears, select **Copy items if needed**.
    

## Configure your project after installation

After installing the SDK via either method, import the header file in your source files:

```
#import <AliyunOSSiOS/OSSService.h>
```

### Add linker flags

In your project's **Build Settings**, add `-ObjC` to **Other Linker Flags**.

If `-force_load` is already set for your project, also add:

```
-force_load <framework path>/AliyunOSSiOS
```

## Use the SDK in a Swift project

OSS SDK for iOS is written in Objective-C. In Swift projects, use Objective-C and Swift hybrid programming to integrate the SDK.

For a working example, see the [Swift demo on GitHub](https://github.com/aliyun/aliyun-oss-ios-sdk/tree/master/OSSSwiftDemo).

## IPv6 compatibility

OSS SDK for iOS uses HTTPDNS for domain name resolution in wireless networks to prevent DNS hijacking, and directly uses IP addresses to send requests to the OSS server. Starting from V2.5.0, the SDK supports IPv6-only networks — a requirement from Apple's App Store Review Guidelines.

To enable IPv6 support (V2.5.0 and later), import the following system libraries in your Xcode project:

```
libresolv.tbd
CoreTelephony.framework
SystemConfiguration.framework
```

## App Transport Security (ATS)

Starting January 1, 2017, Apple requires all App Store apps to enable App Transport Security (ATS). Apps cannot use `NSAllowsArbitraryLoads` to bypass ATS, and all network requests must use HTTPS.

OSS SDK for iOS supports ATS from version 2.6.0. The SDK sends only HTTPS requests.

To comply with ATS:

**Important**

Follow both requirements below to avoid App Store review failures.

-   Set your `Endpoint` using a URL with the `https://` prefix.
    
-   Make sure all callbacks — including signature generation and STS token retrieval — initiate only HTTPS requests.
