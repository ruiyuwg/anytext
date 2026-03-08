Deploying your App

# Firebase

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/firebase.mdx)

[Firebase](https://firebase.google.com/) is an all-in-one app development platform by Google, offering a range of services from real-time databases to user authentication. For a detailed overview of the services available, you can visit [Firebase's documentation](https://firebase.google.com/docs).

Before proceeding, make sure you've already set up a project in your Firebase console. If you haven't, you can follow [Firebase's official guide](https://firebase.google.com/docs/projects/learn-more#creating-cloud-projects) to create a new Firebase project.

***

## [Using the Firebase CLI Tool](/guides/deployment-options/firebase#using-the-firebase-cli-tool)

1. Use your preferred package manager to install the Firebase command-line tool with one of the following commands:

npmpnpmyarnbundeno

```
npm i firebase-tools -g
```

```
pnpm i firebase-tools -g
```

```
yarn add firebase-tools -g
```

```
bun i firebase-tools -g
```

```
deno add npm:firebase-tools -g
```

2. Execute the `firebase login` command to ensure that you're logged into the Firebase account associated with your project.

3. In the root directory of your Solid project, create two new files: `firebase.json` and `.firebaserc`.

- In `firebase.json`, add the following code:

```
{  "hosting": {    "public": "dist",    "ignore": []  }}
```

- In `.firebaserc`, insert the following code (replace `<YOUR_FIREBASE_PROJECT_ID>` with your Firebase project ID):

```
{  "projects": {    "default": "<YOUR_FIREBASE_PROJECT_ID>"  }}
```

4. Run `npm run build` , followed by `firebase deploy` to build and deploy your project.

Upon completion, a `Hosting URL` will be displayed, indicating the live deployment of your project.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=YncoDoKDPPVyet1EOrsa_w\&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=YncoDoKDPPVyet1EOrsa_w)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/deployment-options/firebase.mdx\&page=https://docs.solidjs.com/guides/deployment-options/firebase)

On this page

1. [Overview](#_top)
2. [Using the Firebase CLI Tool](#using-the-firebase-cli-tool)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/firebase.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/deployment-options/firebase.mdx\&page=https://docs.solidjs.com/guides/deployment-options/firebase)
