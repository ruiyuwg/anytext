# Progressive web apps

Learn how to add progressive web app support to Expo websites.

A progressive web app (or PWA for short) is a website that can be installed on the user's device and used offline. We recommend building native apps whenever possible as they have the best offline support, but PWAs are a great option for desktop users.

## Favicons

Expo CLI automatically generates the **favicon.ico** file based on the `web.favicon` field in the **app.json**.

```json
{
  "web": {
    "favicon": "./assets/favicon.png"
  }
}
```

Alternatively, you can create a **favicon.ico** file in the **public** directory to manually specify the icon.

## Manifest file

PWAs can be [configured with a manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest) that describes the app's name, icon, and other metadata.

Create a PWA manifest in **public/manifest.json**:

```json
{
  "short_name": "Expo App",
  "name": "Expo Router Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

The files **logo192.png** and **logo512.png** are the icons that will be used when the app is installed on the user's device. These should be added to the **public** directory too.

`public`

 `manifest.json``PWA Manifest`

 `logo192.png``192x192 icon`

 `logo512.png``512x512 icon`

Now link the manifest in your HTML file. The method here depends on the output mode of your website (indicated in `web.output` in the **app.json**––defaults to `single`).

If you're using a single-page app, you can link the manifest in your HTML file by first creating a template HTML in **public/index.html**:

```sh
npx expo customize public/index.html
```

Then add the manifest to the `<head>` tag:

```html
<link rel="manifest" href="/manifest.json" />
```

## Service workers

Service workers are primarily used to add offline support to websites. Google's Workbox is the best way to add service workers to a website. Follow the guide for [using Workbox CLI](https://developer.chrome.com/docs/workbox/modules/workbox-cli/), and wherever it refers to a "build script" use `npx expo export -p web` instead.

> Be careful adding service workers as they are known to cause unexpected behavior on web. If you accidentally ship a service worker that aggressively caches your website, users cannot request updates easily. For the best offline mobile experience, create a native app with Expo. Unlike websites with service workers, native apps can be updated through the app store to clear the cached experience. This would be similar to resetting the user's native browser (which they may have to do if the service worker is aggressive enough). See [why service workers are suboptimal](https://github.com/facebook/create-react-app/issues/2398) for more information.

For example, here's a possible flow for setting up Workbox:

Create a new project with the following command:

```sh
npm create expo -t tabs my-app
cd my-app
```

Now register the service worker in the HTML file. The method here depends on the output mode of your website (indicated in `web.output` in the **app.json**––defaults to `single`).

Next add a service worker registration script to the root **index.html**.

First create a template HTML in **public/index.html** if one does not already exist:

```sh
npx expo customize public/index.html
```

Then create the service worker registration script in the `<head>` tag:

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
</script>
```

Now build the website before running the wizard:

```sh
npx expo export -p web
```

Run the wizard command, select `dist` as the root of the app, and the defaults for everything else:

```sh
npx workbox-cli wizard
? What is the root of your web app (that is which directory do you deploy)? dist/
? Which file types would you like to precache? js, html, ttf, ico, json
? Where would you like your service worker file to be saved? dist/sw.js
? Where would you like to save these configuration options? workbox-config.js
? Does your web app manifest include search parameter(s) in the 'start_url', other than 'utm_' or 'fbclid' (like '?source=pwa')? No
```

Finally, run `npx workbox-cli generateSW workbox-config.js` to generate the service worker config.

Going forward, you can add a build script in **package.json** to run both scripts in the correct order:

```json
{
  "scripts": {
    "build:web": "expo export -p web && npx workbox-cli generateSW workbox-config.js"
  }
}
```

If you host your website and visit with Chrome, you can inspect the service worker by going to **Application > Service Workers** in the Chrome DevTools.

***

# Tailwind CSS
