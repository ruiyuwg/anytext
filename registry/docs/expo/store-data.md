# Store data

Learn about different libraries available to store data in your Expo project.

Storing data can be essential to the features implemented in your mobile app. There are different ways to save data in your Expo project depending on the type of data you want to store and the security requirements of your app. This page lists a variety of libraries to help you decide which solution is best for your project.

## Expo SecureStore

`expo-secure-store` provides a way to encrypt and securely store key-value pairs locally on the device.

[Expo SecureStore API reference](/versions/latest/sdk/securestore) — For more information on how to install and use expo-secure-store, see its API documentation.

## Expo FileSystem

`expo-file-system` provides access to a file system stored locally on the device. Within Expo Go, each project has a separate file system and no access to other Expo projects' files. However, it can save content shared by other projects to the local filesystem and share local files with other projects. It is also capable of uploading and downloading files from network URLs.

[Expo FileSystem API reference](/versions/latest/sdk/filesystem) — For more information on how to install and use expo-file-system, see its API documentation.

## Expo SQLite

`expo-sqlite` package gives your app access to a database that can be queried through a WebSQL-like API. The database is persisted across restarts of your app. You can use it for importing an existing database, opening databases, creating tables, inserting items, querying and displaying results, and using prepared statements.

[Expo SQLite API reference](/versions/latest/sdk/sqlite) — For more information on how to install and use expo-sqlite, see its API documentation.

## Async Storage

[Async Storage](https://react-native-async-storage.github.io/3.0/integrations/expo/) is an asynchronous, unencrypted, persistent key-value storage for React Native apps. It has a simple API and is a good choice for storing small amounts of data. It is also a good choice for storing data that does not need encryption, such as user preferences or app state.

[Async Storage documentation](https://react-native-async-storage.github.io/3.0/api/usage/) — For more information on how to install and use Async Storage, see its documentation.

## Other libraries

There are other libraries available for storing data for different purposes. For example, you might not need encryption in your project or are looking for a faster solution similar to Async Storage.

We recommend checking out [React Native for a list of libraries](https://reactnative.directory/?search=storage) to help you store your project's data.

***

# Next steps

# Next steps

A list of useful resources to learn more about implementing navigation and UI in your app.

[Use TypeScript](/guides/typescript) — An in-depth guide on configuring an Expo project with TypeScript or migrating an existing JavaScript project.

[Icons](/guides/icons) — Learn how to use various types of icons in your Expo app, including vector icons, custom icon fonts, icon images, and icon buttons.

[ESLint and Prettier](/guides/using-eslint) — A guide on configuring ESLint and Prettier to format Expo projects.

***

# Introduction to development builds
