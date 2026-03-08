## 4. Adding React Native to your app[​](#4-adding-react-native-to-your-app "Direct link to 4. Adding React Native to your app")

### Configuring CocoaPods[​](#configuring-cocoapods "Direct link to Configuring CocoaPods")

To configure CocoaPods, we need two files:

- A **Gemfile** that defines which Ruby dependencies we need.
- A **Podfile** that defines how to properly install our dependencies.

For the **Gemfile**, go to the root directory of your project and run this command

shell

```
curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/0.84-stable/template/Gemfile
```

This will download the Gemfile from the template.

note

If you created your project with Xcode 16, you need to update the Gemfile as it follows:

diff

```
-gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
+gem 'cocoapods', '1.16.2'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
-gem 'xcodeproj', '< 1.26.0'
+gem 'xcodeproj', '1.27.0'
```

Xcode 16 generates a project in a slightly different ways from previous versions of Xcode, and you need the latest CocoaPods and Xcodeproj gems to make it work properly.

Similarly, for the **Podfile**, go to the `ios` folder of your project and run

shell

```
curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/0.84-stable/template/ios/Podfile
```

Please use the Community Template as a reference point for the [Gemfile](https://github.com/react-native-community/template/blob/0.84-stable/template/Gemfile) and for the [Podfile](https://github.com/react-native-community/template/blob/0.84-stable/template/ios/Podfile).

note

Remember to change [this line](https://github.com/react-native-community/template/blob/0.84-stable/template/ios/Podfile#L17).

Now, we need to run a couple of extra commands to install the Ruby gems and the Pods. Navigate to the `ios` folder and run the following commands:

sh

```
bundle install
bundle exec pod install
```

The first command will install the Ruby dependencies and the second command will actually integrate the React Native code in your application so that your iOS files can import the React Native headers.
