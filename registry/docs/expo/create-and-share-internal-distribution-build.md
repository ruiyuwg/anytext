# Create and share internal distribution build

Learn about internal distribution builds, why we need them, and how to create them.

In this chapter, we'll learn how to set up [internal distribution builds](/build/internal-distribution#internal-distribution).

[Watch: How to create and share an internal distribution build](https://www.youtube.com/watch?v=1fQuGLHxWks) — Create an internal distribution build with EAS and share it directly with your team for testing.

## Internal distribution build

Internal distribution builds are ideal for sharing updates with team members, allowing both technical and non-technical stakeholders to provide feedback directly. Unlike development builds, these do not require running a development server, simplifying the testing process.

### Ways to distribute an app internally

Both Google and Apple provide built-in mechanisms for sharing apps internally:

- **Android**: Using Google Play beta
- **iOS**: Using TestFlight

However, both of these traditional methods have their limitations. For example, TestFlight limits to one active build at a time.

### EAS Build for faster distribution

EAS Build speeds up the process. It creates shareable links for our builds and provides instructions on using them. It has a default configuration designed to facilitate internal distribution, offering a more efficient alternative to traditional methods.

## Create an internal distribution build

To create and distribute a build with EAS Build, we need to follow these steps:

### Configure preview build profile

From our initial setup in **eas.json**, we already have a default configuration that includes a `preview` build profile designed for internal distribution:

```json
{
  "build": {
    "preview": {
      "distribution": "internal"
    }
  }
}
```

This is all we need to create our first internal distribution build. The `preview` build profile from the above snippet has a `distribution` property whose value is set to `internal`. This value allows us to share our build URLs with anyone so they can install it on their device and do not require a development server to run the app.

As discussed in the previous chapters, for non-app store builds, Android requires **.apk** and iOS needs **.ipa** formats. This applies to internal distribution builds as well. The `distribution` when set to `internal`, automatically creates the app binary in these file formats for devices.

### Create

Creating an internal distribution build requires [app signing credentials](/app-signing/app-credentials).

Android app signing is non-restrictive and allows installing any compatible **.apk** file. When a development build was created, a new Android Keystore was generated for it. Hence, there is no need to generate a new keystore for preview builds.

On the other hand, Apple has stricter rules for app distribution on iOS devices. We need an ad hoc provisioning profile that explicitly lists the devices allowed to run the app. Some organizations whose apps meet specific requirements may be able to use the [Apple Developer Enterprise Program](https://developer.apple.com/programs/enterprise/) to distribute apps internally to a larger audience.

- Use the `preview` profile to initiate an Android build:

```sh
eas build --platform android --profile preview
```

- This command triggers the EAS Build, and on the EAS dashboard, we can see the build's progress:

### Install

Once the build finishes, the Build artifact section gets updated, indicating that the build is complete. This section provides the methods available for running the development build on an iOS device: Expo Orbit and Install button.

- Open the build's detail page. If you are sharing the build with someone else, you can send them the link to the build. They'll be able to open the build's detail page or build artifact details which include Expo Orbit.
- Connect the Android or iOS device to your machine using USB.
- Open the Orbit menu bar app.
- Select the **Device** in the Orbit app.
- Under **Build artifact**, click the **Open with Orbit**.

Alternate: Use Install and QR code

- Open the build's detail page. If you are sharing the build with someone else, you can send them the link to the build page. They'll be able to open it and see build artifact details which includes Expo Orbit.
- Click **Install** under the Build artifact section to display the **Install on a test device** popup.
- Copy the link from **Send a link to a device** section and send it to the test device.

### Run

Tap the app icon on your device to start the preview build. There is no need for a development server.

Since we have already set up multiple app variants, we can see both the development and preview variants installed separately on our devices. For example:

- On Android:

- On iOS:

## Summary

Chapter 6: Create and share internal distribution build

We successfully created internal distribution builds for Android and iOS, used ad hoc provisioning for iOS, and installed multiple app variants on the same device.

In the next chapter, learn about developer-facing and user-facing app versions and how to manage them automatically.

[Next: Manage different app versions](/tutorial/eas/manage-app-versions)

***

# Manage different app versions
