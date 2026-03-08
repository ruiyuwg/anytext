# Top-level src directory

Learn how to use a top-level src directory in your Expo Router project.

Projects created with the [default template](/get-started/create-a-project) on SDK 55 and later already include a top-level **src** directory that contains the **app**, **components**, **constants**, and **hooks** directories. No extra configuration is needed.

If you are using a [custom template](/more/create-expo#--template) or an existing project that doesn't include a **src** directory, follow the steps below to set it up.

## Using a top-level src directory

Move your **app** directory to **src/app**.

`src`

 `app`

  `_layout.tsx`

  `index.tsx`

 `components`

  `button.tsx`

`package.json`

Update [TypeScript path aliases](/guides/typescript#path-aliases) in the **tsconfig.json** file to point to the **src** directory instead of the root directory. If you use the default `@/*` alias, set it to **./src/\***:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

This keeps `@/` imports working after moving your app directory into **src**.

Restart your development server.

```sh
npx expo start
npx expo export
```

### Notes

- The config files (**app.config.ts**, **app.json**, **package.json**, **metro.config.js**, **tsconfig.json**) should remain in the root directory.
- The **src/app** directory takes higher precedence than the root **app** directory. Only the **src/app** directory will be used if you have both.
- The **public** directory should remain in the root directory.
- Static rendering will automatically use the **src/app** directory if it exists.
- You may consider updating any [type aliases](/guides/typescript#path-aliases) to point to the **src** directory instead of the root directory.

## Custom directory

> Changing the default root directory is highly discouraged. We will not accept bug reports regarding projects with custom root directories.

You can dangerously customize the root directory using the Expo Router Config Plugin. The following will change the root directory to **src/routes**, relative to the project root.

```json
{
  "plugins": [
    [
      "expo-router",
      {
        "root": "./src/routes"
      }
    ]
  ]
}
```

This may lead to unexpected behavior. Many tools assume the root directory to be either **app** or **src/app**. Only tools in the exact version of Expo CLI will respect the config plugin.

***

# Testing configuration for Expo Router
