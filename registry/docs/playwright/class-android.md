On this page

Playwright has **experimental** support for Android automation. This includes Chrome for Android and Android WebView.

_Requirements_

-   Android device or AVD Emulator.
-   [ADB daemon](https://developer.android.com/studio/command-line/adb) running and authenticated with your device. Typically running `adb devices` is all you need to do.
-   [`Chrome 87`](https://play.google.com/store/apps/details?id=com.android.chrome) or newer installed on the device
-   "Enable command line on non-rooted devices" enabled in `chrome://flags`.

_Known limitations_

-   Raw USB operation is not yet supported, so you need ADB.
-   Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.
-   We didn't run all the tests against the device, so not everything works.

_How to run_

An example of the Android automation script would be:

```
const { _android: android } = require('playwright');(async () => {  // Connect to the device.  const [device] = await android.devices();  console.log(`Model: ${device.model()}`);  console.log(`Serial: ${device.serial()}`);  // Take screenshot of the whole device.  await device.screenshot({ path: 'device.png' });  {    // --------------------- WebView -----------------------    // Launch an application with WebView.    await device.shell('am force-stop org.chromium.webview_shell');    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');    // Get the WebView.    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });    // Fill the input box.    await device.fill({      res: 'org.chromium.webview_shell:id/url_field',    }, 'github.com/microsoft/playwright');    await device.press({      res: 'org.chromium.webview_shell:id/url_field',    }, 'Enter');    // Work with WebView's page as usual.    const page = await webview.page();    await page.waitForNavigation({ url: /.*microsoft\/playwright.*/ });    console.log(await page.title());  }  {    // --------------------- Browser -----------------------    // Launch Chrome browser.    await device.shell('am force-stop com.android.chrome');    const context = await device.launchBrowser();    // Use BrowserContext as usual.    const page = await context.newPage();    await page.goto('https://webkit.org/');    console.log(await page.evaluate(() => window.location.href));    await page.screenshot({ path: 'page.png' });    await context.close();  }  // Close the device.  await device.close();})();
```

* * *

## Methods[​](#methods "Direct link to Methods")

### connect[​](#android-connect "Direct link to connect")

Added in: v1.28 android.connect

This methods attaches Playwright to an existing Android device. Use [android.launchServer()](/docs/api/class-android#android-launch-server) to launch a new Android server instance.

**Usage**

```
await android.connect(wsEndpoint);await android.connect(wsEndpoint, options);
```

**Arguments**

-   `wsEndpoint` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#android-connect-option-ws-endpoint)
    
    A browser websocket endpoint to connect to.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `headers` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")\> _(optional)_[#](#android-connect-option-headers)
        
        Additional HTTP headers to be sent with web socket connect request. Optional.
        
    -   `slowMo` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#android-connect-option-slow-mo)
        
        Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to `0`.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#android-connect-option-timeout)
        
        Maximum time in milliseconds to wait for the connection to be established. Defaults to `30000` (30 seconds). Pass `0` to disable timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[AndroidDevice](/docs/api/class-androiddevice "AndroidDevice")\>[#](#android-connect-return)

* * *

### devices[​](#android-devices "Direct link to devices")

Added in: v1.9 android.devices

Returns the list of detected Android devices.

**Usage**

```
await android.devices();await android.devices(options);
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `host` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.22[#](#android-devices-option-host)
        
        Optional host to establish ADB server connection. Default to `127.0.0.1`.
        
    -   `omitDriverInstall` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_ Added in: v1.21[#](#android-devices-option-omit-driver-install)
        
        Prevents automatic playwright driver installation on attach. Assumes that the drivers have been installed already.
        
    -   `port` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_ Added in: v1.20[#](#android-devices-option-port)
        
        Optional port to establish ADB server connection. Default to `5037`.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[AndroidDevice](/docs/api/class-androiddevice "AndroidDevice")\>>[#](#android-devices-return)

* * *

### launchServer[​](#android-launch-server "Direct link to launchServer")

Added in: v1.28 android.launchServer

Launches Playwright Android server that clients can connect to. See the following example:

**Usage**

Server Side:

```
const { _android } = require('playwright');(async () => {  const browserServer = await _android.launchServer({    // If you have multiple devices connected and want to use a specific one.    // deviceSerialNumber: '<deviceSerialNumber>',  });  const wsEndpoint = browserServer.wsEndpoint();  console.log(wsEndpoint);})();
```

Client Side:

```
const { _android } = require('playwright');(async () => {  const device = await _android.connect('<wsEndpoint>');  console.log(device.model());  console.log(device.serial());  await device.shell('am force-stop com.android.chrome');  const context = await device.launchBrowser();  const page = await context.newPage();  await page.goto('https://webkit.org/');  console.log(await page.evaluate(() => window.location.href));  await page.screenshot({ path: 'page-chrome-1.png' });  await context.close();})();
```

**Arguments**

-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    -   `adbHost` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#android-launch-server-option-adb-host)
        
        Optional host to establish ADB server connection. Default to `127.0.0.1`.
        
    -   `adbPort` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#android-launch-server-option-adb-port)
        
        Optional port to establish ADB server connection. Default to `5037`.
        
    -   `deviceSerialNumber` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#android-launch-server-option-device-serial-number)
        
        Optional device serial number to launch the browser on. If not specified, it will throw if multiple devices are connected.
        
    -   `host` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_ Added in: v1.45[#](#android-launch-server-option-host)
        
        Host to use for the web socket. It is optional and if it is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise. Consider hardening it with picking a specific interface.
        
    -   `omitDriverInstall` [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean") _(optional)_[#](#android-launch-server-option-omit-driver-install)
        
        Prevents automatic playwright driver installation on attach. Assumes that the drivers have been installed already.
        
    -   `port` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#android-launch-server-option-port)
        
        Port to use for the web socket. Defaults to 0 that picks any available port.
        
    -   `wsPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#android-launch-server-option-ws-path)
        
        Path at which to serve the Android Server. For security, this defaults to an unguessable string.
        
        warning
        
        Any process or web page (including those running in Playwright) with knowledge of the `wsPath` can take control of the OS user. For this reason, you should use an unguessable token when using this option.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[BrowserServer](/docs/api/class-browserserver "BrowserServer")\>[#](#android-launch-server-return)

* * *

### setDefaultTimeout[​](#android-set-default-timeout "Direct link to setDefaultTimeout")

Added in: v1.9 android.setDefaultTimeout

This setting will change the default maximum time for all the methods accepting [timeout](/docs/api/class-android#android-set-default-timeout-option-timeout) option.

**Usage**

```
android.setDefaultTimeout(timeout);
```

**Arguments**

-   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#android-set-default-timeout-option-timeout)
    
    Maximum time in milliseconds
